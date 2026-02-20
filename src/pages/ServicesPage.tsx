import { motion } from "framer-motion";
import { Brain, ClipboardCheck, Layers, Bot } from "lucide-react";
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
                "Strategic Alignment: See exactly how AI supports your goals—no guesswork.",
                "Capability Roadmapping: Know what you need (data, talent, infrastructure) before you spend.",
                "Investment Governance: Spend on what moves the needle—with frameworks that keep innovation responsible.",
                "Scalability Planning: Turn pilots into systems that scale and deliver measurable results.",
            ],
        },
        {
            icon: ClipboardCheck,
            title: "AI Assessment",
            description:
                "Stop wondering if you're ready. Get a clear picture of your AI maturity—and a prioritized plan to close gaps and capture ROI.",
            features: [
                "Maturity Diagnostics: Understand where you stand—competencies, infrastructure, and data.",
                "Opportunity Mapping: Find high-value areas where AI delivers the fastest wins.",
                "Risk Review: Spot compliance and security gaps before they slow you down.",
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
                "Deployment Strategy: Roll out across operations, marketing, and customer engagement—fast.",
                "Integration Support: Connect to your existing systems—no rip-and-replace.",
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
                "Adaptive Intelligence: Agents that learn—with language understanding and predictive modeling.",
                "Performance Management: Keep agents reliable, accurate, and delivering business impact.",
            ],
        },
    ];

    const whyChooseUs = [
        "Expertise: Deep experience in AI and technology—we've seen what works and what doesn't.",
        "Tailored Solutions: Your business isn't generic. Neither are we.",
        "Proven Track Record: Clients get measurable results—not promises.",
    ];

    return (
        <>
            <SEO
                title="AI Consulting Services"
                description="AI Strategy, Assessment, Applications & Tools, and AI Agents. Stop guessing—get a roadmap that turns AI into measurable advantage."
                keywords="AI consulting services, AI strategy, AI assessment, AI applications, AI agents, AI transformation, business automation, AI implementation, technology consulting"
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
                                Stop guessing. Start executing. Four ways we
                                help you turn AI into measurable advantage.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Services Grid Section */}
                <section className="section">
                    <div className="container">
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
                                Expertise that cuts through the hype. Results
                                that show up on your bottom line.
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
