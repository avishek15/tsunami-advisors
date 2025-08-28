import { Mail } from "lucide-react";

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
                                <source srcSet="/ta-logo.webp" type="image/webp" />
                                <img
                                    src="/ta-logo.png"
                                    alt="Tsunami Advisors Logo"
                                    className="logo__insignia"
                                />
                            </picture>
                            <picture>
                                <source srcSet="/ta-text.webp" type="image/webp" />
                                <img
                                    src="/ta-text.png"
                                    alt="Tsunami Advisors"
                                    className="logo__text-image"
                                />
                            </picture>
                        </div>
                        <p className="text-body text-muted">
                            Transforming the future of AI and tech through
                            strategic guidance and innovative solutions.
                        </p>
                    </div>

                    <div className="footer__section">
                        <h3 className="text-subheading">Contact Information</h3>
                        <div className="contact-item">
                            <Mail size={18} aria-hidden="true" />
                            <a
                                href="mailto:info@tsunamiadvisors.com"
                                className="footer__link"
                            >
                                info@tsunamiadvisors.com
                            </a>
                        </div>
                    </div>

                    <div className="footer__section">
                        <h3 className="text-subheading">Quick Links</h3>
                        <nav
                            className="footer__links"
                            aria-label="Footer navigation"
                        >
                            <a href="/apps" className="footer__link">
                                Apps
                            </a>
                            <a href="/contact" className="footer__link">
                                Contact
                            </a>
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
