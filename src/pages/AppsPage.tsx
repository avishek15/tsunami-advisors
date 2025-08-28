import { motion } from "framer-motion";
import {
    Calculator,
    BarChart3,
    Brain,
    TrendingUp,
    Settings,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function AppsPage() {
    const apps = [
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
        <div>
            {/* Page Header */}
            <section className="section section--hero">
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
                        <h1 className="text-heading">
                            AI-Powered Tools &{" "}
                            <span className="text-accent">Applications</span>
                        </h1>
                        <p
                            className="text-body-large text-muted"
                            style={{ maxWidth: "48rem", margin: "0 auto" }}
                        >
                            Explore our collection of interactive AI tools
                            designed to help you make informed decisions,
                            analyze data, and optimize your business processes.
                        </p>
                    </motion.div>
                </div>
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
                                    animationDelay: `${index * 0.1}s`
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
                                    <span className="app-card__status">
                                        {app.status}
                                    </span>
                                    <button disabled className="app-card__link">
                                        Learn More →
                                    </button>
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
                        <h2 className="text-heading">More Tools Coming Soon</h2>
                        <p
                            className="text-body-large"
                            style={{ marginBottom: "var(--space-2xl)" }}
                        >
                            We're constantly developing new AI-powered tools to
                            help your business thrive. Stay tuned for updates
                            and be the first to try our latest applications.
                        </p>
                        <Link to="/contact">
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
                                Get Early Access
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
