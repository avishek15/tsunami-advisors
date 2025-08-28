import { motion } from "framer-motion";
import {
    Brain,
    Target,
    Users,
    Bot,
    BarChart3,
    GraduationCap,
} from "lucide-react";
import SEO from "../components/SEO";

export default function ServicesPage() {
    // Structured data for services
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
                name: "AI Transformation Strategy",
                description:
                    "Tailored strategies to integrate AI into your operations, enhancing efficiency, decision-making, and customer experiences.",
            },
            {
                "@type": "Service",
                position: 2,
                name: "Go to Market Strategy & Execution",
                description:
                    "Comprehensive go-to-market strategy to effectively launch and position your AI initiatives in the market.",
            },
            {
                "@type": "Service",
                position: 3,
                name: "Investor Relations",
                description:
                    "Help you communicate your AI vision effectively to attract and retain investors who share your ambition.",
            },
            {
                "@type": "Service",
                position: 4,
                name: "AI Agents & Automation",
                description:
                    "Automate routine tasks and enhance productivity with AI-driven solutions tailored to your business needs.",
            },
            {
                "@type": "Service",
                position: 5,
                name: "AI Data Analysis & Predictive Analytics",
                description:
                    "Unlock the power of your data with advanced analytics and predictive modeling for informed decisions.",
            },
            {
                "@type": "Service",
                position: 6,
                name: "AI Training",
                description:
                    "Empower your teams with the knowledge and skills needed to leverage AI effectively at all levels.",
            },
        ],
    };
    const services = [
        {
            icon: Brain,
            title: "AI Transformation Strategy",
            description:
                "Tailored strategies to integrate AI into your operations, enhancing efficiency, decision-making, and customer experiences.",
            features: [
                "AI Strategy Development: We collaborate with you to create a robust AI strategy that aligns with your business goals.",
                "Implementation Roadmaps: Our detailed roadmaps outline the steps necessary to integrate AI technologies.",
            ],
        },
        {
            icon: Target,
            title: "Go to Market Strategy & Execution",
            description:
                "Comprehensive go-to-market strategy to effectively launch and position your AI initiatives in the market.",
            features: [
                "Market Insights and Value Proposition: Conduct thorough market analysis and craft compelling value propositions.",
                "Commercialization and Performance Metrics: Execute structured commercialization plans with KPIs to measure success.",
            ],
        },
        {
            icon: Users,
            title: "Investor Relations",
            description:
                "Help you communicate your AI vision effectively to attract and retain investors who share your ambition.",
            features: [
                "Pitch Development: Craft compelling narratives that highlight your AI initiatives and their market potential.",
                "Stakeholder Engagement: Build strong relationships with investors through transparent communication.",
            ],
        },
        {
            icon: Bot,
            title: "AI Agents & Automation",
            description:
                "Automate routine tasks and enhance productivity with AI-driven solutions tailored to your business needs.",
            features: [
                "Process Evaluation: Identify processes that can benefit from automation and streamline operations.",
                "Implementation Support: Ensure a smooth integration of AI agents into your existing workflows.",
            ],
        },
        {
            icon: BarChart3,
            title: "AI Data Analysis & Predictive Analytics",
            description:
                "Unlock the power of your data with advanced analytics and predictive modeling for informed decisions.",
            features: [
                "Data Strategy: Develop a comprehensive strategy for data collection, management, and analysis.",
                "Predictive Insights: Utilize predictive analytics to foresee trends and make proactive business decisions.",
            ],
        },
        {
            icon: GraduationCap,
            title: "AI Training",
            description:
                "Empower your teams with the knowledge and skills needed to leverage AI effectively at all levels.",
            features: [
                "Customized Workshops: Tailored sessions that address your specific challenges and opportunities in AI.",
                "Continuous Learning: Ongoing training options to keep your teams ahead of the curve.",
            ],
        },
    ];

    const whyChooseUs = [
        "Expertise: Our team comprises seasoned professionals with extensive experience in AI and technology consulting.",
        "Tailored Solutions: We understand that every business is unique, and we provide customized solutions to meet your specific challenges.",
        "Proven Track Record: Our clients have successfully navigated their AI transformations with our guidance, achieving measurable results.",
    ];

    return (
        <>
            <SEO
                title="AI Consulting Services"
                description="Comprehensive AI consulting services including transformation strategy, go-to-market execution, predictive analytics, and AI training. Transform your business with expert AI guidance."
                keywords="AI consulting services, AI transformation strategy, go-to-market strategy, predictive analytics, AI training, business automation, AI implementation, technology consulting"
                canonical="/services"
                structuredData={servicesStructuredData}
            />
            <div>
                {/* Page Header */}
                <section className="section section--hero">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center services-page-header"
                            style={{
                                paddingTop: "var(--space-3xl)",
                                paddingBottom: "var(--space-xl)",
                            }}
                        >
                            <h1 className="text-heading">Our Services</h1>
                            <p
                                className="text-body-large text-muted"
                                style={{ maxWidth: "48rem", margin: "0 auto" }}
                            >
                                Comprehensive AI consulting services designed to
                                transform your business and drive innovation
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Services Grid Section */}
                <section className="section">
                    <div className="container">
                        <div className="services-grid">
                            {services.map((service, index) => (
                                <div
                                    key={service.title}
                                    className="service-card card"
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                    }}
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
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
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
                                Why Choose Tsunami Advisors?
                            </h2>
                            <p className="text-body-large">
                                We bring expertise, tailored solutions, and
                                proven results to every engagement
                            </p>
                        </motion.div>

                        <div className="why-choose-grid">
                            {whyChooseUs.map((reason, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.2,
                                    }}
                                    viewport={{ once: true }}
                                    className="why-choose-card"
                                >
                                    <p className="text-body">{reason}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
