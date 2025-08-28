import { Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__section">
                        <div
                            className="logo"
                            style={{ marginBottom: "var(--space-lg)" }}
                        >
                            <div className="logo__icon">
                                <span>T</span>
                            </div>
                            <span className="logo__text">Tsunami Advisors</span>
                        </div>
                        <p className="text-body text-muted">
                            Transforming the future of AI and tech through
                            strategic guidance and innovative solutions.
                        </p>
                    </div>

                    <div className="footer__section">
                        <h3 className="text-subheading">Contact Information</h3>
                        <div className="contact-item">
                            <Mail size={18} />
                            <span>info@tsunamiadvisors.com</span>
                        </div>
                    </div>

                    <div className="footer__section">
                        <h3 className="text-subheading">Quick Links</h3>
                        <div className="footer__links">
                            <a href="/apps" className="footer__link">
                                Apps
                            </a>
                            <a href="/contact" className="footer__link">
                                Contact
                            </a>
                        </div>
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
