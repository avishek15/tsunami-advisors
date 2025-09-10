import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`header ${isScrolled ? "header--scrolled" : ""}`}
            role="banner"
            aria-label="Main navigation"
        >
            <div className="container">
                <div className="header__content">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            to="/"
                            className="logo"
                            aria-label="Tsunami Advisors Homepage"
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
                        </Link>
                    </motion.div>

                    <motion.nav
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="nav"
                        role="navigation"
                        aria-label="Main navigation menu"
                    >
                        <Link
                            to="/"
                            className={`nav__link ${
                                isActive("/") ? "nav__link--active" : ""
                            }`}
                            aria-current={isActive("/") ? "page" : undefined}
                        >
                            Home
                        </Link>
                        <Link
                            to="/apps"
                            className={`nav__link ${
                                isActive("/apps") ? "nav__link--active" : ""
                            }`}
                            aria-current={
                                isActive("/apps") ? "page" : undefined
                            }
                        >
                            Apps
                        </Link>
                        <Link
                            to="/contact"
                            className={`nav__link ${
                                isActive("/contact") ? "nav__link--active" : ""
                            }`}
                            aria-current={
                                isActive("/contact") ? "page" : undefined
                            }
                        >
                            Contact
                        </Link>
                    </motion.nav>

                    {/* Mobile Menu Button */}
                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mobile-menu-btn"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        {isMobileMenuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mobile-menu"
                        id="mobile-menu"
                        role="navigation"
                        aria-label="Mobile navigation menu"
                    >
                        <Link
                            to="/"
                            className={`mobile-menu__link ${
                                isActive("/") ? "mobile-menu__link--active" : ""
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            aria-current={isActive("/") ? "page" : undefined}
                        >
                            Home
                        </Link>
                        <Link
                            to="/apps"
                            className={`mobile-menu__link ${
                                isActive("/apps")
                                    ? "mobile-menu__link--active"
                                    : ""
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            aria-current={
                                isActive("/apps") ? "page" : undefined
                            }
                        >
                            Apps
                        </Link>
                        <Link
                            to="/contact"
                            className={`mobile-menu__link ${
                                isActive("/contact")
                                    ? "mobile-menu__link--active"
                                    : ""
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            aria-current={
                                isActive("/contact") ? "page" : undefined
                            }
                        >
                            Contact
                        </Link>
                    </motion.div>
                )}
            </div>
        </header>
    );
}
