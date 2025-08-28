import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero section--hero">
                {/* Background Video/Image Container */}
                <div className="hero__background">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        onError={(e) => console.error("Video error:", e)}
                        onLoadStart={() => console.log("Video loading started")}
                        onCanPlay={() => console.log("Video can play")}
                        style={{ backgroundColor: "#f0f0f0" }}
                    >
                        <source
                            src="/hero-video-placeholder.mp4"
                            type="video/mp4"
                        />
                        <source
                            src="./hero-video-placeholder.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Overlay for readability */}
                <div className="hero__overlay"></div>

                <div className="container">
                    <div className="hero__content text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-hero">
                                Transforming the Future of{" "}
                                <span className="text-accent">AI and Tech</span>
                            </h1>
                            <p className="text-body-large text-muted hero__description">
                                We guide firms through the AI and tech
                                landscape, empowering businesses to harness the
                                transformative potential of artificial
                                intelligence.
                            </p>
                            <div className="btn-group">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn btn--primary"
                                >
                                    Get Started
                                </motion.button>
                                <Link to="/services">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="btn btn--secondary"
                                    >
                                        Learn More
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="scroll-indicator"
                    >
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <ChevronDown size={28} />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* What We Offer Section */}
            <section
                id="what-we-offer"
                className="section section--full-height"
            >
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
                        style={{ marginBottom: "var(--space-4xl)" }}
                    >
                        <h2 className="text-heading">What We Offer</h2>
                        <p className="text-body-large text-muted">
                            Comprehensive AI consulting services and interactive
                            tools to transform your business
                        </p>
                    </motion.div>

                    <div className="offers-grid">
                        {/* First Row: Text | Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="offer-row"
                        >
                            <div className="offer-text">
                                <h3 className="text-subheading">
                                    Strategic AI Consulting
                                </h3>
                                <p className="text-body text-muted">
                                    Our expert consultants work closely with
                                    your team to develop comprehensive AI
                                    transformation strategies that align with
                                    your business objectives. We provide
                                    end-to-end support from initial assessment
                                    to implementation, ensuring your
                                    organization stays ahead in the rapidly
                                    evolving AI landscape.
                                </p>
                                <p className="text-body text-muted">
                                    Whether you're looking to optimize
                                    operations, enhance customer experiences, or
                                    drive innovation, our tailored approach
                                    ensures maximum impact and sustainable
                                    growth.
                                </p>
                            </div>
                            <div className="offer-card">
                                <h4 className="text-subheading">
                                    Consulting Services
                                </h4>
                                <p
                                    className="text-body text-muted"
                                    style={{ marginBottom: "var(--space-lg)" }}
                                >
                                    Expert AI transformation strategy,
                                    go-to-market execution, and investor
                                    relations support.
                                </p>
                                <Link to="/services" className="card__link">
                                    Explore Services
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </motion.div>

                        {/* Second Row: Card | Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="offer-row offer-row--reverse"
                        >
                            <div className="offer-card">
                                <h4 className="text-subheading">
                                    Interactive Tools
                                </h4>
                                <p
                                    className="text-body text-muted"
                                    style={{ marginBottom: "var(--space-lg)" }}
                                >
                                    AI-powered calculators, analytics
                                    dashboards, and decision-making tools for
                                    your business.
                                </p>
                                <Link to="/apps" className="card__link">
                                    Try Our Apps
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                            <div className="offer-text">
                                <h3 className="text-subheading">
                                    Cutting-Edge AI Tools
                                </h3>
                                <p className="text-body text-muted">
                                    Access our suite of proprietary AI-powered
                                    tools designed to streamline your
                                    decision-making process and unlock
                                    actionable insights from your data. Our
                                    interactive platforms provide real-time
                                    analytics, predictive modeling, and
                                    automated reporting capabilities.
                                </p>
                                <p className="text-body text-muted">
                                    From financial forecasting to customer
                                    behavior analysis, our tools empower your
                                    team to make data-driven decisions with
                                    confidence and precision.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="cta-section section">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-heading">
                            Join Us on Your AI Journey
                        </h2>
                        <p className="text-body-large text-muted">
                            Ready to ride the wave of AI transformation? Contact
                            us today to learn how we can help you capitalize on
                            the opportunities.
                        </p>
                        <Link
                            to="/contact"
                            style={{
                                marginTop: "var(--space-xl)",
                                display: "inline-block",
                            }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn"
                                style={{
                                    backgroundColor: "var(--color-background)",
                                    color: "var(--color-accent)",
                                    borderColor: "var(--color-background)",
                                }}
                            >
                                <span>Contact Us</span>
                                <ArrowRight size={20} />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
