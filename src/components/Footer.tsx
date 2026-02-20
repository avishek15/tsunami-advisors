import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer" role="contentinfo" aria-label="Site footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__section">
                        <div
                            className="logo footer-logo"
                            style={{ marginBottom: "var(--space-lg)" }}
                        >
                            <picture>
                                <source
                                    srcSet="/ta-logo.webp"
                                    type="image/webp"
                                />
                                <img
                                    src="/ta-logo.png"
                                    alt="Tsunami Advisors Logo"
                                    className="logo__insignia"
                                />
                            </picture>
                            <picture>
                                <source
                                    srcSet="/ta-text.webp"
                                    type="image/webp"
                                />
                                <img
                                    src="/ta-text.png"
                                    alt="Tsunami Advisors"
                                    className="logo__text-image"
                                />
                            </picture>
                        </div>
                        <p className="text-body text-muted">
                            We empower organizations to harness AI—from
                            strategy to execution. Accelerate your AI journey
                            with clarity, confidence, and measurable impact.
                        </p>
                    </div>

                    <div className="footer__section">
                        <h3 className="text-subheading">Contact Information</h3>
                        <div className="contact-item">
                            <Mail size={18} aria-hidden="true" />
                            <a
                                href="mailto:contact@tsunamiadvisors.com"
                                className="footer__link"
                            >
                                contact@tsunamiadvisors.com
                            </a>
                        </div>
                    </div>

                    <div className="footer__section">
                        <h3 className="text-subheading">Quick Links</h3>
                        <nav
                            className="footer__links"
                            aria-label="Footer navigation"
                        >
                            <Link to="/apps" className="footer__link">
                                Apps
                            </Link>
                            <Link to="/contact" className="footer__link">
                                Contact
                            </Link>
                        </nav>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="text-muted">
                        &copy; {new Date().getFullYear()} Tsunami Advisors. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
