import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
    Calculator,
    BarChart3,
    Brain,
    TrendingUp,
    Settings,
    Zap,
    FileText,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function AppsPage() {
    // Structured data for the applications
    const applicationsStructuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "AI-Powered Tools & Applications",
        description:
            "Interactive AI tools designed to help businesses make informed decisions, analyze data, and optimize processes",
        itemListElement: [
            {
                "@type": "SoftwareApplication",
                position: 1,
                name: "DocuChat",
                description:
                    "Advanced multi-document AI chat application that enables intelligent cross-referencing and analysis across multiple PDFs. Upload multiple documents and engage in sophisticated conversations that span your entire document collection.",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web Browser",
            },
            {
                "@type": "SoftwareApplication",
                position: 2,
                name: "AI ROI Calculator",
                description:
                    "Calculate the potential return on investment for AI implementations in your business.",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web Browser",
            },
            {
                "@type": "SoftwareApplication",
                position: 3,
                name: "Data Analytics Dashboard",
                description:
                    "Interactive dashboard for visualizing and analyzing your business data with AI insights.",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web Browser",
            },
            {
                "@type": "SoftwareApplication",
                position: 4,
                name: "AI Strategy Planner",
                description:
                    "Step-by-step tool to help you plan and implement AI strategies for your organization.",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web Browser",
            },
            {
                "@type": "SoftwareApplication",
                position: 5,
                name: "Market Analysis Tool",
                description:
                    "AI-powered market analysis and competitive intelligence for your industry.",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web Browser",
            },
            {
                "@type": "SoftwareApplication",
                position: 6,
                name: "Process Optimization",
                description:
                    "Identify and optimize business processes using AI-driven recommendations.",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web Browser",
            },
            {
                "@type": "SoftwareApplication",
                position: 7,
                name: "AI Readiness Assessment",
                description:
                    "Evaluate your organization's readiness for AI transformation and get personalized recommendations.",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web Browser",
            },
        ],
    };
    const apps = [
        {
            icon: FileText,
            title: "DocuChat",
            description:
                "Advanced multi-document AI chat application that enables intelligent cross-referencing and analysis across multiple PDFs. Upload multiple documents and engage in sophisticated conversations that span your entire document collection.",
            status: "Live",
            link: "https://docuchat.tsunamiadvisors.com",
        },
        {
            icon: Calculator,
            title: "AI ROI Calculator",
            description:
                "Calculate the potential return on investment for AI implementations in your business.",
            status: "Coming Soon",
        },
        {
            icon: BarChart3,
            title: "Data Analytics Dashboard",
            description:
                "Interactive dashboard for visualizing and analyzing your business data with AI insights.",
            status: "Coming Soon",
        },
        {
            icon: Brain,
            title: "AI Strategy Planner",
            description:
                "Step-by-step tool to help you plan and implement AI strategies for your organization.",
            status: "Coming Soon",
        },
        {
            icon: TrendingUp,
            title: "Market Analysis Tool",
            description:
                "AI-powered market analysis and competitive intelligence for your industry.",
            status: "Coming Soon",
        },
        {
            icon: Settings,
            title: "Process Optimization",
            description:
                "Identify and optimize business processes using AI-driven recommendations.",
            status: "Coming Soon",
        },
        {
            icon: Zap,
            title: "AI Readiness Assessment",
            description:
                "Evaluate your organization's readiness for AI transformation and get personalized recommendations.",
            status: "Coming Soon",
        },
    ];

    // Remove color variations and use consistent accent color for all icons

    return (
        <>
            <SEO
                title="AI-Powered Tools & Applications"
                description="Explore our collection of interactive AI tools designed to help you make informed decisions, analyze data, and optimize your business processes. From ROI calculators to strategy planners."
                keywords="AI tools, AI applications, ROI calculator, data analytics dashboard, AI strategy planner, market analysis tool, process optimization, AI readiness assessment, business intelligence tools"
                canonical="/apps"
                structuredData={applicationsStructuredData}
            />
            <div>
                {/* Page Header */}
                <section
                    className="section section--hero"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
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
                            className="text-center apps-page-header"
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
                                AI-Powered Tools &{" "}
                                <span className="text-accent">
                                    Applications
                                </span>
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
                                Explore our collection of interactive AI tools
                                designed to help you make informed decisions,
                                analyze data, and optimize your business
                                processes.
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

                {/* Apps Grid */}
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
                            <h2 className="text-heading">Interactive Tools</h2>
                            <p className="text-body-large text-muted">
                                Powerful AI-driven applications to enhance your
                                business decision-making
                            </p>
                        </motion.div>

                        <div className="apps-grid">
                            {apps.map((app, index) => (
                                <div
                                    key={app.title}
                                    className="app-card card"
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                    }}
                                >
                                    <div className="app-card__icon">
                                        <app.icon size={28} />
                                    </div>
                                    <h3 className="text-subheading app-card__title">
                                        {app.title}
                                    </h3>
                                    <p className="text-body text-muted app-card__description">
                                        {app.description}
                                    </p>
                                    <div className="app-card__footer">
                                        <span
                                            className={`app-card__status ${
                                                app.status === "Live"
                                                    ? "app-card__status--live"
                                                    : ""
                                            }`}
                                        >
                                            {app.status}
                                        </span>
                                        {app.link ? (
                                            app.link.startsWith("http") ? (
                                                <a
                                                    href={app.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="app-card__link"
                                                >
                                                    Launch App →
                                                </a>
                                            ) : (
                                                <Link
                                                    to={app.link}
                                                    className="app-card__link"
                                                >
                                                    Launch App →
                                                </Link>
                                            )
                                        ) : (
                                            <button
                                                disabled
                                                className="app-card__link"
                                            >
                                                Learn More →
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Coming Soon Section */}
                <section className="cta-section section">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h2 className="text-heading">
                                More Tools Coming Soon
                            </h2>
                            <p
                                className="text-body-large"
                                style={{ marginBottom: "var(--space-2xl)" }}
                            >
                                We're constantly developing new AI-powered tools
                                to help your business thrive. Stay tuned for
                                updates and be the first to try our latest
                                applications.
                            </p>
                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn"
                                    style={{
                                        backgroundColor:
                                            "var(--color-background)",
                                        color: "var(--color-accent)",
                                        borderColor: "var(--color-background)",
                                    }}
                                >
                                    Get Early Access
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
}
