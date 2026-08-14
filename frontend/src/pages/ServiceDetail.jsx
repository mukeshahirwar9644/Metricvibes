import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ServerSideTracking from './ServerSideTracking';

const servicesDetailsMap = {
    "ga4-migration": {
        title: "GA4 Migration & Audit",
        badge: "MEASUREMENT & ANALYTICS",
        desc: "Seamless transition to Google Analytics 4 with customized event architectures, BigQuery raw data streaming, server-side tracking, and historical data preservation.",
        icon: "fas fa-chart-line",
        color: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
        features: [
            {
                title: "Custom Event Taxonomy",
                desc: "We map all custom dimensions, metrics, e-commerce parameters, and conversion events aligned with your business KPIs.",
                icon: "fas fa-layer-group",
                gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
            },
            {
                title: "BigQuery Raw Export Setup",
                desc: "Enable daily and streaming exports to BigQuery to own your raw analytics data with no retention limits.",
                icon: "fas fa-database",
                gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
            },
            {
                title: "Consent Mode v2 Compliance",
                desc: "Implement Google Consent Mode v2 to ensure privacy compliance across EU/UK regions while modeling unconsented conversions.",
                icon: "fas fa-user-shield",
                gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)"
            },
            {
                title: "Comprehensive Tracking Audit",
                desc: "Deep audit of existing UA/GA4 setups to eliminate duplicate tags, broken triggers, and unverified domain referrals.",
                icon: "fas fa-search-dollar",
                gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)"
            }
        ],
        benefits: [
            { stat: "100%", label: "Historical Data Preserved" },
            { stat: "0%", label: "Data Loss During Switch" },
            { stat: "24/7", label: "Real-Time BigQuery Sync" }
        ],
        process: [
            { step: "01", title: "Discovery & Audit", desc: "Analytics taxonomy & Tag Manager audit." },
            { step: "02", title: "GTM & Server Config", desc: "Configuring custom events & server containers." },
            { step: "03", title: "BigQuery Activation", desc: "Streaming data pipeline setup & validation." },
            { step: "04", title: "Dashboard Handover", desc: "Executive reports & team enablement." }
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
                desc: "Structured taxonomy blueprint detailing all eVars, props, success events, and classification hierarchies.",
                icon: "fas fa-sitemap",
                gradient: "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)"
            },
            {
                title: "Analysis Workspace Dashboards",
                desc: "Custom workspace reports built for executive leadership, marketing teams, and product managers.",
                icon: "fas fa-desktop",
                gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
            },
            {
                title: "Adobe Launch (Tags) Rules",
                desc: "Optimized data layer listeners and asynchronous rule executions for high performance page loads.",
                icon: "fas fa-code",
                gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)"
            },
            {
                title: "Multi-Suite Architecture",
                desc: "Global rollup suites and regional report suite segmentation for multi-brand enterprises.",
                icon: "fas fa-cubes",
                gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)"
            }
        ],
        benefits: [
            { stat: "< 1s", label: "Report Processing Speed" },
            { stat: "360°", label: "Customer Journey Visibility" },
            { stat: "100%", label: "Enterprise Privacy Compliant" }
        ],
        process: [
            { step: "01", title: "SDR Taxonomy Blueprint", desc: "Requirements & variable allocation." },
            { step: "02", title: "Adobe Launch Build", desc: "Data layer listeners & tag configuration." },
            { step: "03", title: "Workspace Report Design", desc: "Custom executive & team dashboards." },
            { step: "04", title: "UAT & Team Training", desc: "End-to-end testing & stakeholder training." }
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
                desc: "Modular, version-controlled SQL data models with automated data quality testing and documentation.",
                icon: "fas fa-terminal",
                gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
            },
            {
                title: "ETL / ELT Ingestion Pipelines",
                desc: "Automated data ingestion from Meta, Google Ads, Stripe, Salesforce, and custom APIs using Airflow and Cloud Composer.",
                icon: "fas fa-project-diagram",
                gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)"
            },
            {
                title: "Data Warehouse Cost Optimization",
                desc: "Partitioning, clustering, and materialization strategies that reduce cloud query costs by up to 40%.",
                icon: "fas fa-piggy-bank",
                gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)"
            },
            {
                title: "Data Governance & Encryption",
                desc: "Column-level PII encryption, role-based access control (RBAC), and SOC2 audit compliance.",
                icon: "fas fa-shield-alt",
                gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
            }
        ],
        benefits: [
            { stat: "40%", label: "Query Cost Reduction" },
            { stat: "99.9%", label: "Pipeline Uptime SLA" },
            { stat: "Single", label: "Unified Source of Truth" }
        ],
        process: [
            { step: "01", title: "Schema Discovery", desc: "Data source audit & schema mapping." },
            { step: "02", title: "dbt Data Pipeline", desc: "SQL modeling & ETL pipeline engineering." },
            { step: "03", title: "CI/CD & Testing", desc: "Automated data quality assertions." },
            { step: "04", title: "Cost & Performance", desc: "Warehouse optimization & live monitoring." }
        ]
    }
};

export default function ServiceDetail() {
    const { id } = useParams();

    if (id === 'server-side-tracking' || id === 'server_side_tracking') {
        return <ServerSideTracking />;
    }

    const service = servicesDetailsMap[id] || {
        title: id ? id.replace(/[-_]/g, ' ').toUpperCase() : "Specialized Analytics Service",
        badge: "CONSULTING & IMPLEMENTATION",
        desc: "Enterprise-grade implementation, custom architecture design, and strategic consulting tailored to your data ecosystem.",
        icon: "fas fa-cogs",
        color: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
        features: [
            { title: "Custom Architecture", desc: "Tailored technical design fitting your specific stack.", icon: "fas fa-drafting-compass", gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)" },
            { title: "Data Accuracy Verification", desc: "Rigorous testing to ensure 100% data reliability.", icon: "fas fa-check-circle", gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)" },
            { title: "Continuous Monitoring", desc: "Proactive alert triggers for schema breaks or data loss.", icon: "fas fa-bell", gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)" },
            { title: "Dedicated Support", desc: "Direct channel with senior data engineers and analysts.", icon: "fas fa-headset", gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)" }
        ],
        benefits: [
            { stat: "99.9%", label: "System Accuracy" },
            { stat: "2x", label: "Faster Insights" },
            { stat: "24/7", label: "Dedicated Monitoring" }
        ],
        process: [
            { step: "01", title: "Discovery", desc: "Requirements & current state evaluation." },
            { step: "02", title: "Blueprint", desc: "Architecture design & technical plan." },
            { step: "03", title: "Implementation", desc: "Build, configure & test data pipelines." },
            { step: "04", title: "Handover", desc: "Documentation & team onboarding." }
        ]
    };

    return (
        <main id="service-detail-page">
            {/* Hero Section */}
            <section style={{
                background: "linear-gradient(135deg, rgba(26, 11, 54, 0.96) 0%, rgba(45, 16, 90, 0.95) 100%), url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover",
                padding: "160px 0 45px",
                color: "white",
                textAlign: "center",
                position: "relative"
            }}>
                <div className="container" style={{ maxWidth: "900px" }}>
                    <div style={{ 
                        display: "inline-flex", 
                        alignItems: "center", 
                        gap: "8px", 
                        backgroundColor: "rgba(255, 255, 255, 0.12)", 
                        backdropFilter: "blur(10px)",
                        padding: "7px 20px", 
                        borderRadius: "30px", 
                        fontSize: "0.82rem", 
                        fontWeight: "700",
                        letterSpacing: "1px",
                        marginBottom: "16px",
                        border: "1px solid rgba(255,255,255,0.25)"
                    }}>
                        <i className={service.icon} style={{ color: "#38ef7d" }}></i> {service.badge}
                    </div>

                    <h1 style={{ fontSize: "2.8rem", fontWeight: "800", color: "white", marginBottom: "16px", lineHeight: "1.2", letterSpacing: "-0.01em" }}>
                        {service.title}
                    </h1>

                    <p style={{ fontSize: "1.08rem", color: "rgba(255, 255, 255, 0.88)", lineHeight: "1.6", maxWidth: "750px", margin: "0 auto 26px" }}>
                        {service.desc}
                    </p>

                    <Link to="/contact" style={{
                        background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
                        color: "white",
                        padding: "13px 34px",
                        borderRadius: "30px",
                        fontWeight: "700",
                        textDecoration: "none",
                        fontSize: "0.95rem",
                        boxShadow: "0 8px 25px rgba(124, 58, 237, 0.4)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        transition: "transform 0.3s ease"
                    }}>
                        Book Expert Consultation <i className="fas fa-arrow-right" style={{ fontSize: "0.82rem" }}></i>
                    </Link>
                </div>
            </section>

            {/* Benefits Stats Bar */}
            <section style={{ backgroundColor: "#150b2e", padding: "28px 0", color: "white", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="container" style={{ maxWidth: "1000px", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "20px", textAlign: "center" }}>
                    {service.benefits.map((b, idx) => (
                        <div key={idx} style={{ padding: "0 15px" }}>
                            <span style={{ fontSize: "2.2rem", fontWeight: "800", color: "#38ef7d", display: "block", marginBottom: "2px" }}>{b.stat}</span>
                            <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.75)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "600" }}>{b.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Key Capabilities / Features */}
            <section className="service-detail-section" style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
                <div className="container" style={{ maxWidth: "1050px" }}>
                    <div style={{ textAlign: "center", marginBottom: "50px" }}>
                        <span style={{ color: "#7c3aed", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.82rem" }}>OUR CAPABILITIES</span>
                        <h2 className="service-detail-title" style={{ fontSize: "2.4rem", fontWeight: "800", marginTop: "8px", color: "#0f172a" }}>What We Build & Deliver</h2>
                    </div>

                    <div style={{ 
                        display: "grid", 
                        gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", 
                        gap: "28px" 
                    }}>
                        {service.features.map((feat, idx) => (
                            <div key={idx} className="service-feature-card" style={{
                                padding: "34px",
                                borderRadius: "20px",
                                background: "#ffffff",
                                border: "1px solid #e2e8f0",
                                boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                                display: "flex",
                                flexDirection: "column"
                            }}>
                                <div style={{
                                    width: "52px",
                                    height: "52px",
                                    borderRadius: "14px",
                                    background: feat.gradient || service.color,
                                    color: "white",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "1.3rem",
                                    marginBottom: "20px",
                                    boxShadow: "0 6px 16px rgba(0,0,0,0.12)"
                                }}>
                                    <i className={feat.icon || service.icon}></i>
                                </div>
                                <h3 className="service-feature-title" style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px", color: "#0f172a" }}>{feat.title}</h3>
                                <p className="service-feature-desc" style={{ fontSize: "0.94rem", lineHeight: "1.65", color: "#64748b", margin: 0 }}>{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Implementation Process */}
            <section className="service-process-section" style={{ padding: "80px 0", backgroundColor: "#f8fafc", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
                <div className="container" style={{ maxWidth: "1100px", textAlign: "center" }}>
                    <div style={{ marginBottom: "50px" }}>
                        <span style={{ color: "#7c3aed", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.82rem" }}>METHODOLOGY</span>
                        <h2 className="service-detail-title" style={{ fontSize: "2.4rem", fontWeight: "800", marginTop: "8px", color: "#0f172a" }}>Our Execution Process</h2>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "22px" }}>
                        {service.process.map((stepItem, idx) => {
                            const stepObj = typeof stepItem === 'object' ? stepItem : { step: `0${idx+1}`, title: stepItem, desc: "" };
                            return (
                                <div key={idx} className="service-process-card" style={{
                                    padding: "32px 24px",
                                    borderRadius: "16px",
                                    background: "#ffffff",
                                    border: "1px solid #e2e8f0",
                                    boxShadow: "0 6px 20px rgba(0,0,0,0.03)",
                                    textAlign: "center",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center"
                                }}>
                                    <div style={{
                                        width: "44px",
                                        height: "44px",
                                        borderRadius: "50%",
                                        background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
                                        color: "white",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontWeight: "800",
                                        fontSize: "0.95rem",
                                        marginBottom: "16px",
                                        boxShadow: "0 4px 12px rgba(124, 58, 237, 0.3)"
                                    }}>
                                        {stepObj.step}
                                    </div>
                                    <h4 style={{ fontSize: "1.05rem", fontWeight: "700", color: "#0f172a", marginBottom: stepObj.desc ? "8px" : "0" }}>{stepObj.title}</h4>
                                    {stepObj.desc && <p style={{ fontSize: "0.86rem", color: "#64748b", lineHeight: "1.5", margin: 0 }}>{stepObj.desc}</p>}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Bottom CTA Banner */}
            <section style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
                <div className="container">
                    <div style={{
                        background: "linear-gradient(135deg, #1A1333 0%, #0F0A1F 100%)",
                        borderRadius: "24px",
                        padding: "70px 60px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        position: "relative",
                        overflow: "hidden",
                        flexWrap: "wrap",
                        gap: "40px",
                        boxShadow: "0 20px 40px rgba(15, 10, 31, 0.15)"
                    }}>
                        {/* Glow effects */}
                        <div style={{ position: "absolute", top: "-50px", left: "-50px", width: "200px", height: "200px", background: "rgba(120, 81, 169, 0.2)", filter: "blur(50px)", borderRadius: "50%" }}></div>
                        <div style={{ position: "absolute", bottom: "-50px", right: "-50px", width: "300px", height: "300px", background: "rgba(161, 140, 255, 0.15)", filter: "blur(60px)", borderRadius: "50%" }}></div>
                        
                        <div style={{ position: "relative", zIndex: 2, maxWidth: "580px" }}>
                            <h2 style={{ color: "white", fontSize: "2.5rem", fontWeight: "800", lineHeight: "1.2", marginBottom: "16px" }}>
                                Ready to Accelerate Your Data Architecture?
                            </h2>
                            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.08rem", lineHeight: "1.6", margin: 0 }}>
                                Schedule a 30-minute discovery session with our senior data engineers and analytics leads.
                            </p>
                        </div>
                        
                        <div style={{ position: "relative", zIndex: 2 }}>
                            <Link to="/contact" style={{ 
                                background: "linear-gradient(90deg, #A18CFF 0%, #8063F5 100%)", 
                                color: "white", 
                                fontWeight: "700", 
                                padding: "18px 42px", 
                                borderRadius: "40px", 
                                fontSize: "1.05rem", 
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                textDecoration: "none",
                                boxShadow: "0 10px 30px rgba(128, 99, 245, 0.4)",
                                border: "none",
                                transition: "transform 0.3s ease"
                            }}>
                                Get In Touch Today <i className="fas fa-arrow-right" style={{ fontSize: "0.9rem" }}></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
