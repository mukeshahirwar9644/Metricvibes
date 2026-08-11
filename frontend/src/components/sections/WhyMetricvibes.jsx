import React from 'react';

const whyItems = [
    {
        icon: "fas fa-trophy",
        title: "5+ Years of Excellence",
        text: "Over 5 years of delivering enterprise analytics solutions across industries.",
        bg: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)"
    },
    {
        icon: "fas fa-globe",
        title: "Global Client Base",
        text: "Serving 5+ countries across 6 continents with 24/7 support coverage.",
        bg: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)"
    },
    {
        icon: "fas fa-certificate",
        title: "Certified Experts",
        text: "Certified specialists in Google Analytics, Adobe, AWS, and Azure.",
        bg: "linear-gradient(135deg, #10b981 0%, #059669 100%)"
    },
    {
        icon: "fas fa-shield-halved",
        title: "Enterprise Security",
        text: "SOC 2 Type II processes with strict GDPR, HIPAA & CCPA compliance.",
        bg: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)"
    },
    {
        icon: "fas fa-headset",
        title: "Dedicated Support",
        text: "Dedicated account manager with 24/7 proactive monitoring & reviews.",
        bg: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)"
    }
];

export default function WhyMetricvibes() {
    return (
        <section className="section section--why-us" id="why-metricvibes" style={{ padding: "75px 0", background: "#13092b", position: "relative", overflow: "hidden" }}>
            {/* Decorative background glow */}
            <div style={{ position: "absolute", top: "-150px", left: "50%", transform: "translateX(-50%)", width: "900px", height: "500px", background: "radial-gradient(ellipse, rgba(124, 58, 237, 0.22) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }}></div>

            <div className="container relative z-1">
                <div className="section__header" style={{ marginBottom: "45px", textAlign: "center" }}>
                    <span className="section__badge" style={{ background: "rgba(124, 58, 237, 0.15)", border: "1px solid rgba(124, 58, 237, 0.3)", color: "#a78bfa" }}>
                        <i className="fas fa-trophy"></i> Why Choose Us
                    </span>
                    <h2 className="section__title" style={{ color: "#ffffff", fontSize: "2.3rem", fontWeight: "800", marginTop: "10px" }}>
                        Why <span className="text-gradient">MetricVibes</span>?
                    </h2>
                    <p className="section__subtitle" style={{ color: "rgba(255, 255, 255, 0.78)", fontSize: "0.98rem", maxWidth: "600px", margin: "10px auto 0" }}>
                        Over 5 years of delivering enterprise analytics solutions that drive real business outcomes.
                    </p>
                </div>

                {/* 5-Card Single Horizontal Row Grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "18px"
                }}>
                    {whyItems.map((item, idx) => (
                        <div 
                            key={idx}
                            style={{
                                padding: "26px 20px",
                                borderRadius: "16px",
                                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.015) 100%)",
                                border: "1px solid rgba(255, 255, 255, 0.12)",
                                backdropFilter: "blur(12px)",
                                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.2)",
                                transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                                cursor: "pointer",
                                position: "relative",
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "column"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-6px)";
                                e.currentTarget.style.boxShadow = "0 18px 40px rgba(124, 58, 237, 0.25)";
                                e.currentTarget.style.borderColor = "rgba(167, 139, 250, 0.4)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 12px 30px rgba(0, 0, 0, 0.2)";
                                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
                            }}
                        >
                            <div className="icon-3d-box" style={{ background: item.bg, width: "48px", height: "48px", borderRadius: "12px", marginBottom: "16px", flexShrink: 0 }}>
                                <i className={item.icon} style={{ color: "#ffffff", fontSize: "1.18rem" }}></i>
                            </div>

                            <h3 style={{ fontSize: "1.02rem", fontWeight: "700", color: "#ffffff", marginBottom: "8px", lineHeight: "1.35" }}>
                                {item.title}
                            </h3>

                            <p style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "0.83rem", lineHeight: "1.55", margin: 0, flexGrow: 1 }}>
                                {item.text}
                            </p>

                            {/* Corner subtle accent glow */}
                            <div style={{ position: "absolute", bottom: "-25px", right: "-25px", width: "80px", height: "80px", background: item.bg, opacity: "0.15", filter: "blur(25px)", borderRadius: "50%", pointerEvents: "none" }}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
