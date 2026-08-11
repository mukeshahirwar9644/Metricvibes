import React from 'react';

export default function TechStack() {
    const techRow1 = [
        { name: "Google Analytics 4", icon: "fab fa-google", color: "#F4B400" },
        { name: "BigQuery", icon: "fas fa-database", color: "#4285F4" },
        { name: "Looker", icon: "fas fa-chart-pie", color: "#4285F4" },
        { name: "Tableau", icon: "fas fa-chart-bar", color: "#E97627" },
        { name: "dbt", icon: "fas fa-layer-group", color: "#FF6B6B" },
        { name: "Snowflake", icon: "fas fa-snowflake", color: "#29B5E8" },
        { name: "Fivetran", icon: "fas fa-sync-alt", color: "#0052CC" },
        { name: "VWO", icon: "fas fa-vial", color: "#E34F26" }
    ];

    const techRow2 = [
        { name: "Adobe Analytics", icon: "fas fa-chart-line", color: "#EB1000" },
        { name: "Mixpanel", icon: "fas fa-chart-area", color: "#7A56FF" },
        { name: "Segment", icon: "fas fa-project-diagram", color: "#52BD94" },
        { name: "Shopify", icon: "fab fa-shopify", color: "#95BF47" },
        { name: "Google Ads", icon: "fab fa-google", color: "#4285F4" },
        { name: "Meta Ads", icon: "fab fa-meta", color: "#0668E1" },
        { name: "Klaviyo", icon: "fas fa-envelope-open-text", color: "#00C389" },
        { name: "GCP", icon: "fab fa-google", color: "#4285F4" }
    ];

    return (
        <>
            

<section className="section section--alt" id="tech-stack">
    <div className="container">
        <div className="section__header">
            <span className="section__badge"><i className="fas fa-microchip"></i> Technology</span>
            <h2 className="section__title">Our <span className="text-gradient">Technology Stack</span></h2>
            <p className="section__subtitle">
                We work with the best tools and platforms to deliver enterprise-grade solutions.
            </p>
        </div>

        

        {/*  Row 1 — Scrolling Left  */}
        <div className="tech-stack__row">
            <div className="tech-stack__track tech-stack__track--left">
                {[...techRow1, ...techRow1].map((tech, index) => (
                    <div className="tech-stack__item" key={index}>
                        <i className={tech.icon + " tech-stack__item-icon"} style={{ color: tech.color }}></i>
                        <span className="tech-stack__item-name">{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>

        {/*  Row 2 — Scrolling Right  */}
        <div className="tech-stack__row">
            <div className="tech-stack__track tech-stack__track--right">
                {[...techRow2, ...techRow2].map((tech, index) => (
                    <div className="tech-stack__item" key={index}>
                        <i className={tech.icon + " tech-stack__item-icon"} style={{ color: tech.color }}></i>
                        <span className="tech-stack__item-name">{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
</section>

        </>
    );
}
