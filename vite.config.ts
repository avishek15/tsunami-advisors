import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { copyFileSync } from "fs";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        tailwindcss(),
        react(),
        {
            name: "copy-htaccess",
            writeBundle() {
                try {
                    copyFileSync(
                        resolve(__dirname, "public/.htaccess"),
                        resolve(__dirname, "dist/.htaccess")
                    );
                } catch (error) {
                    console.warn("Could not copy .htaccess file:", error);
                }
            },
        },
    ],
    base: "/",
    build: {
        outDir: "dist",
        assetsDir: "assets",
        sourcemap: false,
        minify: "esbuild",
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ["react", "react-dom"],
                    router: ["react-router-dom"],
                    motion: ["framer-motion"],
                    icons: ["lucide-react"],
                },
                chunkFileNames: "assets/[name]-[hash].js",
                entryFileNames: "assets/[name]-[hash].js",
                assetFileNames: "assets/[name]-[hash].[ext]",
            },
        },
    },
});
