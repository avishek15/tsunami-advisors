import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Brain, ClipboardCheck, Layers, Bot } from "lucide-react";
import SEO from "../components/SEO";

export default function HomePage() {
    // Structured data for the organization
    const organizationStructuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Tsunami Advisors",
        url: "https://tsunamiadvisors.com",
        logo: "https://tsunamiadvisors.com/ta-logo.png",
        description:
            "Tsunami Advisors empowers organizations to harness the transformative potential of AI—from strategy to execution. We accelerate your AI journey with clarity, confidence, and measurable impact.",
        address: {
            "@type": "PostalAddress",
            addressCountry: "US",
        },
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            email: "contact@tsunamiadvisors.com",
        },
        sameAs: ["https://linkedin.com/company/tsunami-advisors"],
    };

    // Structured data for the services
    const servicesStructuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "AI Consulting Services",
        description:
            "Comprehensive AI consulting services offered by Tsunami Advisors",
        itemListElement: [
            {
                "@type": "Service",
                position: 1,
                name: "AI Strategy",
                description:
                    "Build a roadmap that turns AI investment into competitive advantage. Strategic alignment, capability roadmapping, and scalability planning.",
            },
            {
                "@type": "Service",
                position: 2,
                name: "AI Assessment",
                description:
                    "Get a clear picture of your AI maturity and a prioritized plan to close gaps and capture ROI.",
            },
            {
                "@type": "Service",
                position: 3,
                name: "AI Applications & Tools",
                description:
                    "Deploy the right AI tools and get them working where they matter most. Integration and performance optimization.",
            },
            {
                "@type": "Service",
                position: 4,
                name: "AI Agents",
                description:
                    "Design, deploy, and tune AI agents that automate repetitive work and free your team for strategic tasks.",
            },
        ],
    };
    const services = [
        {
            icon: Brain,
            title: "AI Strategy",
            description:
                "Know exactly where AI fits—and where it doesn't. We build a roadmap that turns investment into competitive advantage, not scattered experiments.",
            features: [
                "Strategic Alignment: See how AI supports your priorities—no guesswork.",
                "Capability Roadmapping: Know what you need (data, talent, infrastructure) before you spend.",
                "Scalability Planning: Turn pilots into systems that scale and deliver.",
            ],
        },
        {
            icon: ClipboardCheck,
            title: "AI Assessment",
            description:
                "Stop wondering if you're ready. Get a clear picture of your AI maturity—and a prioritized plan to close gaps and capture ROI.",
            features: [
                "Maturity Diagnostics: Understand your current AI competencies, infrastructure, and data.",
                "Opportunity Mapping: Find high-value areas where AI delivers the fastest wins.",
                "Readiness Roadmap: Get actionable next steps, not a report that sits on a shelf.",
            ],
        },
        {
            icon: Layers,
            title: "AI Applications & Tools",
            description:
                "Stop doing manual work AI can handle. We help you deploy the right tools—and get them working where they matter most.",
            features: [
                "Solution Identification: Match AI technologies to your needs—no vendor hype.",
                "Integration Support: Connect AI tools to your existing systems—no rip-and-replace.",
                "Performance Optimization: Monitor, refine, and scale to maximize value and ROI.",
            ],
        },
        {
            icon: Bot,
            title: "AI Agents",
            description:
                "Let AI handle the repetitive. Your team focuses on what only humans can do. We design, deploy, and tune agents that deliver.",
            features: [
                "Agent Design: Define use cases and build agents that fit your operations.",
                "Workflow Automation: Offload repetitive processes so talent works on strategy.",
                "Performance Management: Keep agents reliable, accurate, and aligned with business impact.",
            ],
        },
    ];

    // const whyChooseUs = [
    //     "Expertise: Our team comprises seasoned professionals with extensive experience in AI and technology consulting.",
    //     "Tailored Solutions: We understand that every business is unique, and we provide customized solutions to meet your specific challenges.",
    //     "Proven Track Record: Our clients have successfully navigated their AI transformations with our guidance, achieving measurable results.",
    // ];

    return (
        <>
            <SEO
                title="AI & Tech Consulting Services"
                description="Tsunami Advisors empowers organizations to harness AI—from strategy to execution. We accelerate your AI journey with clarity, confidence, and measurable impact. Contact us to explore your AI transformation."
                keywords="AI consulting, artificial intelligence consulting, AI transformation, AI strategy, AI assessment, AI agents, business automation, AI implementation, technology consulting"
                canonical="/"
                structuredData={[
                    organizationStructuredData,
                    servicesStructuredData,
                ]}
            />
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
                            onLoadStart={() =>
                                console.log("Video loading started")
                            }
                            onCanPlay={() => console.log("Video can play")}
                            style={{ backgroundColor: "#f0f0f0" }}
                        >
                            <source
                                src="/freecompress-herovideo.mp4"
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
                                    Transform the Future through <br />
                                    <span className="text-accent">
                                        AI and Technology
                                    </span>
                                </h1>
                                <p className="text-body-large text-muted hero__description">
                                    We empower organizations to harness
                                    AI—from strategy to execution. Our mission:
                                    accelerate your AI journey with clarity,
                                    confidence, and measurable impact.
                                </p>
                                <div className="btn-group">
                                    <Link to="/contact">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="btn btn--primary"
                                        >
                                            Get Started
                                        </motion.button>
                                    </Link>
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

                {/* Services Grid Section */}
                <section className="section">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center"
                            style={{ marginBottom: "var(--space-4xl)" }}
                        >
                            <h2 className="text-heading">Our Services</h2>
                            <p className="text-body-large text-muted">
                                Stop guessing. Start executing. Four ways we help
                                you turn AI into measurable advantage.
                            </p>
                        </motion.div>

                        <div className="services-grid">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    viewport={{ once: true, margin: "-40px" }}
                                    className="service-card card"
                                >
                                    <div className="service-card__icon">
                                        <service.icon size={28} />
                                    </div>
                                    <h3 className="text-subheading service-card__title">
                                        {service.title}
                                    </h3>
                                    <p className="text-body text-muted service-card__description">
                                        {service.description}
                                    </p>
                                    <ul className="service-card__features">
                                        {service.features.map(
                                            (feature, featureIndex) => (
                                                <li
                                                    key={featureIndex}
                                                    className="service-card__feature"
                                                >
                                                    <span className="service-card__bullet"></span>
                                                    {feature}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Who We Are Section */}
                <section className="section">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center"
                            style={{
                                maxWidth: "48rem",
                                margin: "0 auto",
                            }}
                        >
                            <h2 className="text-heading">Who We Are</h2>
                            <p className="text-body-large text-muted">
                                We specialize in building AI strategies that
                                drive growth, assess readiness to uncover
                                opportunities, and implement AI applications,
                                agents, and tools that redefine how businesses
                                operate. Whether you're shaping your long-term
                                vision or optimizing daily workflows, we provide
                                the expertise to make AI a tangible driver of
                                innovation and performance.
                            </p>
                            <p className="text-body-large text-muted">
                                We combine strategic insight, technical
                                excellence, and a deep understanding of
                                emerging technology trends to help leaders
                                unlock new business models, scale
                                intelligently, and communicate their AI vision
                                with confidence.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Apps Section */}
                <section className="cta-section section">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center"
                            style={{ marginBottom: "var(--space-4xl)" }}
                        >
                            <h2 className="text-heading">
                                Try Our AI-Powered Applications
                            </h2>
                            <p className="text-body-large">
                                Experience our AI solutions firsthand with our
                                free-to-use applications. Simply sign in with
                                your email to get started and explore the power
                                of AI.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <Link to="/apps">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn btn--primary"
                                    style={{
                                        fontSize: "var(--font-size-lg)",
                                        padding:
                                            "var(--space-lg) var(--space-2xl)",
                                    }}
                                >
                                    Explore Our Apps
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
}
