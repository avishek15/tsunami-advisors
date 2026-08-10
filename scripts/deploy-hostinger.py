#!/usr/bin/env python3
"""
Build and upload dist/ to Hostinger via FTP.

Credentials: copy .env.deploy.example to .env.deploy (gitignored) or export env vars.

Usage:
  npm run deploy
  python3 scripts/deploy-hostinger.py
  python3 scripts/deploy-hostinger.py --skip-build
  python3 scripts/deploy-hostinger.py --dry-run
"""

from __future__ import annotations

import argparse
import ftplib
import os
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"
ENV_FILE = ROOT / ".env.deploy"

REQUIRED_VARS = (
    "HOSTINGER_FTP_HOST",
    "HOSTINGER_FTP_USER",
    "HOSTINGER_FTP_PASSWORD",
)


def load_env_file(path: Path) -> None:
    if not path.is_file():
        return
    for line in path.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, _, value = line.partition("=")
        key = key.strip()
        value = value.strip().strip('"').strip("'")
        if key and key not in os.environ:
            os.environ[key] = value


def config() -> dict[str, str | int]:
    load_env_file(ENV_FILE)
    missing = [name for name in REQUIRED_VARS if not os.environ.get(name)]
    if missing:
        print(
            "Missing FTP credentials. Set these in .env.deploy or your environment:\n"
            + "\n".join(f"  - {name}" for name in missing)
            + f"\n\nCopy {ENV_FILE.name}.example to {ENV_FILE.name} and fill in values.",
            file=sys.stderr,
        )
        sys.exit(1)

    return {
        "host": os.environ["HOSTINGER_FTP_HOST"],
        "user": os.environ["HOSTINGER_FTP_USER"],
        "password": os.environ["HOSTINGER_FTP_PASSWORD"],
        "port": int(os.environ.get("HOSTINGER_FTP_PORT", "21")),
        "remote_path": os.environ.get(
            "HOSTINGER_FTP_REMOTE_PATH",
            "domains/tsunamiadvisors.com/public_html",
        ),
    }


def run_build() -> None:
    print("Building production bundle…")
    subprocess.run(["npm", "run", "build"], cwd=ROOT, check=True)


def ensure_dist() -> None:
    if not DIST.is_dir():
        print(f"dist/ not found at {DIST}. Run without --skip-build first.", file=sys.stderr)
        sys.exit(1)
    if not (DIST / "index.html").is_file():
        print("dist/index.html missing — build may have failed.", file=sys.stderr)
        sys.exit(1)


def collect_files() -> list[tuple[Path, Path]]:
    """Return (local_path, path_relative_to_dist) pairs."""
    files: list[tuple[Path, Path]] = []
    for root, _, names in os.walk(DIST):
        root_path = Path(root)
        for name in names:
            if name == ".DS_Store":
                continue
            local = root_path / name
            rel = local.relative_to(DIST)
            files.append((local, rel))
    return sorted(files, key=lambda item: str(item[1]))


def upload(cfg: dict[str, str | int], dry_run: bool) -> int:
    files = collect_files()
    print(f"Uploading {len(files)} file(s) to {cfg['remote_path']}…")

    if dry_run:
        for local, rel in files:
            print(f"  [dry-run] {rel} ({local.stat().st_size} bytes)")
        return len(files)

    ftp = ftplib.FTP()
    ftp.connect(str(cfg["host"]), int(cfg["port"]), timeout=120)
    ftp.login(str(cfg["user"]), str(cfg["password"]))
    ftp.set_pasv(True)
    ftp.cwd(str(cfg["remote_path"]))
    base = ftp.pwd()
    print(f"Connected. Remote directory: {base}")

    def go_to(rel: Path) -> None:
        ftp.cwd(base)
        for part in rel.parent.parts if rel.parent != Path(".") else []:
            try:
                ftp.cwd(part)
            except ftplib.error_perm:
                ftp.mkd(part)
                ftp.cwd(part)

    uploaded = 0
    for local, rel in files:
        go_to(rel)
        with local.open("rb") as handle:
            ftp.storbinary(f"STOR {rel.name}", handle)
        uploaded += 1
        print(f"  OK {rel.as_posix()}")

    ftp.quit()
    return uploaded


def main() -> None:
    parser = argparse.ArgumentParser(description="Deploy dist/ to Hostinger via FTP")
    parser.add_argument(
        "--skip-build",
        action="store_true",
        help="Upload existing dist/ without running npm run build",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="List files that would be uploaded without connecting to FTP",
    )
    args = parser.parse_args()

    cfg = config()

    if not args.skip_build and not args.dry_run:
        run_build()

    ensure_dist()

    count = upload(cfg, dry_run=args.dry_run)
    print(f"\nDone. {'Would upload' if args.dry_run else 'Uploaded'} {count} file(s).")
    if not args.dry_run:
        print("https://tsunamiadvisors.com")


if __name__ == "__main__":
    main()
