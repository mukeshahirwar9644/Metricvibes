import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ServerSideTracking from './ServerSideTracking';

const servicesDetailsMap = {
    "ga4-migration": {
        title: "GA4 Migration & Audit",
        badge: "MEASUREMENT & ANALYTICS",
        desc: "Seamless transition to Google Analytics 4 with customized event architectures, BigQuery raw data streaming, server-side tracking, and historical data preservation.",
        icon: "fas fa-chart-line",
        color: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)",
        features: [
            {
                title: "Custom Event Taxonomy",
                desc: "We map all custom dimensions, metrics, e-commerce parameters, and conversion events aligned with your business KPIs."
            },
            {
                title: "BigQuery Raw Export Setup",
                desc: "Enable daily and streaming exports to BigQuery to own your raw analytics data with no retention limits."
            },
            {
                title: "Consent Mode v2 Compliance",
                desc: "Implement Google Consent Mode v2 to ensure privacy compliance across EU/UK regions while modeling unconsented conversions."
            },
            {
                title: "Comprehensive Tracking Audit",
                desc: "Deep audit of existing UA/GA4 setups to eliminate duplicate tags, broken triggers, and unverified domain referrals."
            }
        ],
        benefits: [
            { stat: "100%", label: "Historical Data Preserved" },
            { stat: "0%", label: "Data Loss During Switch" },
            { stat: "24/7", label: "Real-Time BigQuery Sync" }
        ],
        process: [
            "Discovery & Analytics Taxonomy Audit",
            "GTM & Server-Side Event Configuration",
            "BigQuery Data Pipeline Activation",
            "Validation & Executive Dashboard Delivery"
        ]
    },
    "adobe-analytics": {
        title: "Adobe Analytics Setup & Implementation",
        badge: "ENTERPRISE ANALYTICS",
        desc: "Enterprise-grade Adobe Analytics workspace creation, Solution Design Reference (SDR) mapping, eVar/prop taxonomy definition, and Adobe Experience Platform (AEP) integration.",
        icon: "fas fa-chart-pie",
        color: "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)",
        features: [
            {
                title: "Solution Design Reference (SDR)",
                desc: "Structured taxonomy blueprint detailing all eVars, props, success events, and classification hierarchies."
            },
            {
                title: "Analysis Workspace Dashboards",
                desc: "Custom workspace reports built for executive leadership, marketing teams, and product managers."
            },
            {
                title: "Adobe Launch (Tags) Rules",
                desc: "Optimized data layer listeners and asynchronous rule executions for high performance page loads."
            },
            {
                title: "Multi-Suite Architecture",
                desc: "Global rollup suites and regional report suite segmentation for multi-brand enterprises."
            }
        ],
        benefits: [
            { stat: "< 1s", label: "Report Processing Speed" },
            { stat: "360°", label: "Customer Journey Visibility" },
            { stat: "100%", label: "Enterprise Privacy Compliant" }
        ],
        process: [
            "SDR Taxonomy & Requirements Mapping",
            "Adobe Launch Data Layer Build",
            "Workspace Report Suite Design",
            "User Acceptance Testing & Training"
        ]
    },
    "data-engineering": {
        title: "Modern Data Engineering & Pipelines",
        badge: "CLOUD INFRASTRUCTURE",
        desc: "Scalable data pipelines using BigQuery, Snowflake, and dbt to unify your marketing, sales, product, and financial data into a single source of truth.",
        icon: "fas fa-database",
        color: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
        features: [
            {
                title: "dbt SQL Transformation Models",
                desc: "Modular, version-controlled SQL data models with automated data quality testing and documentation."
            },
            {
                title: "ETL / ELT Ingestion Pipelines",
                desc: "Automated data ingestion from Meta, Google Ads, Stripe, Salesforce, and custom APIs using Airflow and Cloud Composer."
            },
            {
                title: "Data Warehouse Cost Optimization",
                desc: "Partitioning, clustering, and materialization strategies that reduce cloud query costs by up to 40%."
            },
            {
                title: "Data Governance & Encryption",
                desc: "Column-level PII encryption, role-based access control (RBAC), and SOC2 audit compliance."
            }
        ],
        benefits: [
            { stat: "40%", label: "Query Cost Reduction" },
            { stat: "99.9%", label: "Pipeline Uptime SLA" },
            { stat: "Single", label: "Unified Source of Truth" }
        ],
        process: [
            "Data Source & Schema Discovery",
            "dbt Modeling & Data Pipeline Engineering",
            "Automated Testing & CI/CD Setup",
            "Warehouse Optimization & Monitoring"
        ]
    }
};

export default function ServiceDetail() {
    const { id } = useParams();

    if (id === 'server-side-tracking') {
        return <ServerSideTracking />;
    }

    const service = servicesDetailsMap[id] || {
        title: id ? id.replace(/-/g, ' ').toUpperCase() : "Specialized Analytics Service",
        badge: "CONSULTING & IMPLEMENTATION",
        desc: "Enterprise-grade implementation, custom architecture design, and strategic consulting tailored to your data ecosystem.",
        icon: "fas fa-cogs",
        color: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
        features: [
            { title: "Custom Architecture", desc: "Tailored technical design fitting your specific stack." },
            { title: "Data Accuracy Verification", desc: "Rigorous testing to ensure 100% data reliability." },
            { title: "Continuous Monitoring", desc: "Proactive alert triggers for schema breaks or data loss." },
            { title: "Dedicated Support", desc: "Direct channel with senior data engineers and analysts." }
        ],
        benefits: [
            { stat: "99.9%", label: "System Accuracy" },
            { stat: "2x", label: "Faster Insights" },
            { stat: "24/7", label: "Dedicated Monitoring" }
        ],
        process: ["Discovery & Requirements", "Technical Blueprint", "Implementation", "Handover & Training"]
    };

    return (
        <main id="service-detail-page">
            {/* Hero Section */}
            <section style={{
                background: "linear-gradient(135deg, rgba(26, 11, 54, 0.96) 0%, rgba(45, 16, 90, 0.95) 100%), url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover",
                padding: "140px 0 60px",
                color: "white",
                textAlign: "center"
            }}>
                <div className="container" style={{ maxWidth: "900px" }}>
                    <div style={{ 
                        display: "inline-flex", 
                        alignItems: "center", 
                        gap: "8px", 
                        backgroundColor: "rgba(255,255,255,0.12)", 
                        padding: "6px 18px", 
                        borderRadius: "30px", 
                        fontSize: "0.8rem", 
                        fontWeight: "600",
                        letterSpacing: "1px",
                        marginBottom: "20px",
                        border: "1px solid rgba(255,255,255,0.2)"
                    }}>
                        <i className={service.icon} style={{ color: "#38ef7d" }}></i> {service.badge}
                    </div>

                    <h1 style={{ fontSize: "2.6rem", fontWeight: "800", color: "white", marginBottom: "18px", lineHeight: "1.25" }}>
                        {service.title}
                    </h1>

                    <p style={{ fontSize: "1.1rem", color: "rgba(255, 255, 255, 0.88)", lineHeight: "1.6", maxWidth: "750px", margin: "0 auto 30px" }}>
                        {service.desc}
                    </p>

                    <a href="/contact" style={{
                        background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
                        color: "white",
                        padding: "14px 32px",
                        borderRadius: "30px",
                        fontWeight: "700",
                        textDecoration: "none",
                        fontSize: "0.95rem",
                        boxShadow: "0 6px 20px rgba(124, 58, 237, 0.4)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px"
                    }}>
                        Book Expert Consultation <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
            </section>

            {/* Benefits Stats Bar */}
            <section style={{ backgroundColor: "#1e1b4b", padding: "30px 0", color: "white" }}>
                <div className="container" style={{ maxWidth: "1000px", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "20px", textAlign: "center" }}>
                    {service.benefits.map((b, idx) => (
                        <div key={idx}>
                            <span style={{ fontSize: "2.2rem", fontWeight: "800", color: "#38ef7d", display: "block" }}>{b.stat}</span>
                            <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.8)", textTransform: "uppercase", letterSpacing: "1px" }}>{b.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Key Capabilities / Features */}
            <section className="service-detail-section" style={{ padding: "80px 0" }}>
                <div className="container" style={{ maxWidth: "1100px" }}>
                    <div style={{ textAlign: "center", marginBottom: "50px" }}>
                        <span style={{ color: "var(--color-accent)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.85rem" }}>OUR CAPABILITIES</span>
                        <h2 className="service-detail-title" style={{ fontSize: "2.2rem", fontWeight: "800", marginTop: "8px" }}>What We Build & Deliver</h2>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "30px" }}>
                        {service.features.map((feat, idx) => (
                            <div key={idx} className="service-feature-card" style={{
                                padding: "30px",
                                borderRadius: "16px"
                            }}>
                                <div style={{
                                    width: "48px",
                                    height: "48px",
                                    borderRadius: "12px",
                                    background: service.color,
                                    color: "white",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "1.2rem",
                                    marginBottom: "20px"
                                }}>
                                    <i className={service.icon}></i>
                                </div>
                                <h3 className="service-feature-title" style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "12px" }}>{feat.title}</h3>
                                <p className="service-feature-desc" style={{ fontSize: "0.92rem", lineHeight: "1.6" }}>{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Implementation Process */}
            <section className="service-process-section" style={{ padding: "70px 0" }}>
                <div className="container" style={{ maxWidth: "900px", textAlign: "center" }}>
                    <h2 className="service-detail-title" style={{ fontSize: "2rem", fontWeight: "800", marginBottom: "40px" }}>Our Execution Process</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
                        {service.process.map((step, idx) => (
                            <div key={idx} className="service-process-card" style={{
                                padding: "25px 20px",
                                borderRadius: "12px"
                            }}>
                                <span style={{ width: "36px", height: "36px", borderRadius: "50%", background: "var(--color-primary)", color: "white", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "800", marginBottom: "12px" }}>{idx + 1}</span>
                                <h4 style={{ fontSize: "0.95rem", fontWeight: "700" }}>{step}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" style={{ padding: "80px 0", background: "linear-gradient(135deg, #1e1b4b 0%, #31105e 100%)", color: "white", textAlign: "center" }}>
                <div className="container" style={{ maxWidth: "750px" }}>
                    <h2 style={{ fontSize: "2.4rem", fontWeight: "800", marginBottom: "16px", color: "white" }}>Ready to Accelerate Your Data Architecture?</h2>
                    <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.85)", marginBottom: "30px", lineHeight: "1.6" }}>
                        Schedule a 30-minute discovery session with our senior data engineers and analytics leads.
                    </p>
                    <Link to="/contact" className="btn" style={{
                        backgroundColor: "#38ef7d",
                        color: "#0b1023",
                        padding: "16px 36px",
                        borderRadius: "30px",
                        fontWeight: "800",
                        textDecoration: "none",
                        fontSize: "0.95rem",
                        display: "inline-block"
                    }}>
                        GET IN TOUCH TODAY
                    </Link>
                </div>
            </section>
        </main>
    );
}
