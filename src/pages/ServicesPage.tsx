import { motion } from "framer-motion";
import { Brain, Target, Bot, GraduationCap, Lightbulb } from "lucide-react";
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
                name: "AI Strategy & Investor Relations",
                description:
                    "Comprehensive AI transformation strategies combined with investor relations expertise to help you integrate AI into your operations and communicate your vision effectively to attract and retain investors.",
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
                name: "New AI Business Models",
                description:
                    "Develop innovative AI-driven business models and revenue streams that leverage artificial intelligence to create new value propositions and competitive advantages.",
            },
            {
                "@type": "Service",
                position: 4,
                name: "AI Agents, Tools & Automation",
                description:
                    "Comprehensive AI-driven operations automation combined with advanced data analytics and predictive modeling to optimize business processes and unlock data-driven insights.",
            },
            {
                "@type": "Service",
                position: 6,
                name: "AI Education and Training",
                description:
                    "Empower your teams with the knowledge and skills needed to leverage AI effectively at all levels.",
            },
        ],
    };
    const services = [
        {
            icon: Brain,
            title: "AI Strategy & Investor Relations",
            description:
                "Comprehensive AI transformation strategies combined with investor relations expertise to help you integrate AI into your operations and communicate your vision effectively to attract and retain investors.",
            features: [
                "AI Strategy Development: We collaborate with you to create a robust AI strategy that aligns with your business goals.",
                "Implementation Roadmaps: Our detailed roadmaps outline the steps necessary to integrate AI technologies.",
                "Pitch Development: Craft compelling narratives that highlight your AI initiatives and their market potential.",
                "Stakeholder Engagement: Build strong relationships with investors through transparent communication.",
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
                "Customer Segmentation and Targeting: Identify and segment target customer groups to optimize marketing and sales efforts.",
                "Competitive Positioning and Launch Strategy: Develop strategic positioning against competitors and execute comprehensive launch plans.",
            ],
        },
        {
            icon: Lightbulb,
            title: "New AI Business Models",
            description:
                "Develop innovative AI-driven business models and revenue streams that leverage artificial intelligence to create new value propositions and competitive advantages.",
            features: [
                "Business Model Innovation: Design new revenue streams and value propositions powered by AI technologies.",
                "Market Disruption Strategy: Identify opportunities to disrupt traditional markets with AI-driven solutions.",
                "Revenue Optimization: Develop pricing strategies and monetization models for AI-powered products and services.",
                "Partnership and Ecosystem Development: Build strategic partnerships and ecosystems to support new AI business models.",
            ],
        },
        {
            icon: Bot,
            title: "AI Agents, Tools & Automation",
            description:
                "Comprehensive AI-driven operations automation combined with advanced data analytics and predictive modeling to optimize business processes and unlock data-driven insights.",
            features: [
                "Process Evaluation: Identify processes that can benefit from automation and streamline operations.",
                "Implementation Support: Ensure a smooth integration of AI agents into your existing workflows.",
                "Data Strategy: Develop a comprehensive strategy for data collection, management, and analysis.",
                "Predictive Insights: Utilize predictive analytics to foresee trends and make proactive business decisions.",
            ],
        },
        {
            icon: GraduationCap,
            title: "AI Education and Training",
            description:
                "Empower your teams with the knowledge and skills needed to leverage AI effectively at all levels.",
            features: [
                "Customized Workshops: Tailored sessions that address your specific challenges and opportunities in AI.",
                "Continuous Learning: Ongoing training options to keep your teams ahead of the curve.",
                "Leadership Development: Executive training programs to help leaders understand and drive AI transformation.",
                "Certification Programs: Structured certification paths to validate AI skills and knowledge across your organization.",
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
