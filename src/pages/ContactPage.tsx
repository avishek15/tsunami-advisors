import { motion } from "framer-motion";
import {
    Mail,
    ChevronDown,
} from "lucide-react";
import SEO from "../components/SEO";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
    // Structured data for contact information
    const contactStructuredData = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Tsunami Advisors",
        description:
            "Get in touch with Tsunami Advisors for AI consulting services and business transformation solutions.",
        url: "https://tsunamiadvisors.com/contact",
        mainEntity: {
            "@type": "Organization",
            name: "Tsunami Advisors",
            contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "contact@tsunamiadvisors.com",
                availableLanguage: "English",
            },
        },
    };
    return (
        <>
            <SEO
                title="Contact Us - AI Consulting Services"
                description="Ready to transform your business with AI? Contact Tsunami Advisors today. Our expert team is ready to discuss your AI transformation strategy and help you navigate the future of technology."
                keywords="contact AI consulting, AI transformation consultation, business AI strategy, AI consulting services contact, artificial intelligence consulting"
                canonical="/contact"
                structuredData={contactStructuredData}
            />
            <div>
                {/* Page Header */}
                <section
                    className="section section--hero"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        minHeight: "100vh",
                        display: "flex",
                        alignItems: "center",
                        position: "relative",
                    }}
                >
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center contact-page-header"
                            style={{
                                paddingTop: "var(--space-3xl)",
                                paddingBottom: "var(--space-xl)",
                            }}
                        >
                            <h1
                                className="text-heading"
                                style={{
                                    color: "white",
                                    textShadow: "0 2px 4px rgba(0, 0, 0, 0.7)",
                                }}
                            >
                                Get in{" "}
                                <span className="text-accent">Touch</span>
                            </h1>
                            <p
                                className="text-body-large"
                                style={{
                                    maxWidth: "48rem",
                                    margin: "0 auto",
                                    color: "rgba(255, 255, 255, 0.9)",
                                    textShadow: "0 1px 2px rgba(0, 0, 0, 0.7)",
                                }}
                            >
                                Ready to transform your business with AI? Let's
                                discuss how Tsunami Advisors can help you
                                navigate the future of technology and
                                innovation.
                            </p>
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="scroll-indicator"
                        style={{
                            position: "absolute",
                            bottom: "var(--space-xl)",
                            left: "50%",
                            transform: "translateX(-50%)",
                            color: "white",
                            zIndex: 3,
                        }}
                    >
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <ChevronDown size={28} />
                        </motion.div>
                    </motion.div>
                </section>

                {/* Contact Section */}
                <section className="section">
                    <div className="container">
                        <div className="contact-grid">
                            {/* Contact Form */}
                            <ContactForm />

                            {/* Contact Information */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="contact-info"
                            >
                                <h2 className="text-subheading">
                                    Contact Information
                                </h2>
                                <div className="contact-info__items">
                                    <div className="contact-info__item">
                                        <div className="contact-info__icon">
                                            <Mail size={20} />
                                        </div>
                                        <div className="contact-info__content">
                                            <h3 className="contact-info__title">
                                                Email
                                            </h3>
                                            <p className="contact-info__value">
                                                contact@tsunamiadvisors.com
                                            </p>
                                            <p className="contact-info__note">
                                                We'll respond within 24 hours
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-info__card">
                                    <h3 className="contact-info__card-title">
                                        Why Choose Us?
                                    </h3>
                                    <ul className="contact-info__features">
                                        <li className="contact-info__feature">
                                            <span className="contact-info__bullet"></span>
                                            Expert AI consulting with proven
                                            results
                                        </li>
                                        <li className="contact-info__feature">
                                            <span className="contact-info__bullet"></span>
                                            Tailored solutions for your unique
                                            needs
                                        </li>
                                        <li className="contact-info__feature">
                                            <span className="contact-info__bullet"></span>
                                            Ongoing support throughout your AI
                                            journey
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
