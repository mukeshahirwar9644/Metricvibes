import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
    const [filter, setFilter] = useState('all');

    const servicesData = [
        {
            title: "GA4 Migration & Audit",
            desc: "Seamless transition to Google Analytics 4 with advanced tracking architectures and historical data preservation.",
            icon: "fas fa-chart-line",
            color: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)",
            category: "martech",
            link: "/services/ga4-migration"
        },
        {
            title: "Adobe Analytics Setup",
            desc: "Enterprise-grade Adobe Analytics implementation, workspace creation, and custom metric definitions.",
            icon: "fas fa-chart-pie",
            color: "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)",
            category: "martech",
            link: "/services/adobe-analytics"
        },
        {
            title: "Server-Side Tracking",
            desc: "Robust server-side GTM configurations to bypass ad-blockers, enhance security, and improve data accuracy.",
            icon: "fas fa-server",
            color: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            category: "infra",
            link: "/services/server-side-tracking"
        },
        {
            title: "Data Engineering",
            desc: "Scalable data pipelines using BigQuery, Snowflake, and dbt to unify your marketing and product data.",
            icon: "fas fa-database",
            color: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
            category: "infra",
            link: "/services/data-engineering"
        },
        {
            title: "AI & LLM Automation",
            desc: "Custom AI agents and LLM integrations to automate reporting, knowledge retrieval, and data analysis.",
            icon: "fas fa-robot",
            color: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
            category: "products",
            link: "/services/claude-partner"
        },
        {
            title: "Dashboard Development",
            desc: "Interactive, real-time dashboards in Looker Studio, PowerBI, and Tableau tailored for executives.",
            icon: "fas fa-tachometer-alt",
            color: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
            category: "martech",
            link: "/services/business-intelligence"
        }
    ];

    const filteredServices = filter === 'all' 
        ? servicesData 
        : servicesData.filter(s => s.category === filter);

    return (
        <>
            <section className="section relative overflow-hidden" id="services">
                {/*  Decorative Glow  */}
                <div className="services-glow" style={{ position: "absolute", top: "-100px", left: "50%", transform: "translateX(-50%)", width: "800px", height: "400px", background: "radial-gradient(ellipse, rgba(120, 81, 169, 0.15) 0%, transparent 60%)", pointerEvents: "none", zIndex: "0" }}></div>

                <div className="container relative z-1">
                    <div className="section__header">
                        <h2 className="section__title">What we <span className="text-gradient">deliver</span></h2>
                        <p className="section__subtitle">
                            Measurement your business (and AI) can rely on. The stack, run with discipline.
                        </p>
                    </div>

                    {/*  Filter Tabs  */}
                    <div className="services__filter-wrapper" style={{ display: "flex", justifyContent: "center", marginBottom: "3rem" }}>
                        <div className="services__filter" style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
                            <button onClick={() => setFilter('all')} className={`services__filter-btn ${filter === 'all' ? 'active' : ''}`}>All Services</button>
                            <button onClick={() => setFilter('martech')} className={`services__filter-btn ${filter === 'martech' ? 'active' : ''}`}>MarTech Services</button>
                            <button onClick={() => setFilter('infra')} className={`services__filter-btn ${filter === 'infra' ? 'active' : ''}`}>Infrastructure</button>
                            <button onClick={() => setFilter('products')} className={`services__filter-btn ${filter === 'products' ? 'active' : ''}`}>In-House Products</button>
                        </div>
                    </div>

                    {/*  Services Grid  */}
                    <div className="services__grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", alignItems: "start" }}>
                        {filteredServices.map((service, index) => (
                            <div key={index} className="card card--gradient-border service-card-reveal" style={{ padding: "26px 28px", borderRadius: "16px", background: "var(--surface-primary)", border: "1px solid var(--border-color)", position: "relative" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                                    <div className="card__icon icon-3d-box" style={{ background: service.color, margin: 0, width: "52px", height: "52px", borderRadius: "13px", flexShrink: 0 }}>
                                        <i className={service.icon} style={{ fontSize: "1.25rem" }}></i>
                                    </div>
                                    <h3 className="card__title" style={{ fontSize: "1.18rem", fontWeight: "700", margin: 0, color: "var(--text-primary)", lineHeight: "1.3" }}>
                                        {service.title}
                                    </h3>
                                </div>

                                <div className="service-card-detail">
                                    <p className="card__text" style={{ color: "var(--text-secondary)", lineHeight: "1.65", fontSize: "0.92rem", margin: 0 }}>
                                        {service.desc}
                                    </p>
                                    <Link to={service.link} style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "14px", color: "var(--color-accent)", fontWeight: "700", textDecoration: "none", fontSize: "0.9rem" }}>
                                        Learn More <i className="fas fa-arrow-right" style={{ fontSize: "0.8rem", transition: "transform 0.2s ease" }} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
