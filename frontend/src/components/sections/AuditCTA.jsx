import React from 'react';
import { Link } from 'react-router-dom';

export default function AuditCTA() {
    return (
        <section className="audit-cta-section" style={{ padding: "60px 0" }}>
            <div className="container">
                <div className="audit-cta-card" style={{
                    background: "linear-gradient(135deg, #1A1333 0%, #0F0A1F 100%)",
                    borderRadius: "24px",
                    padding: "60px 50px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "relative",
                    overflow: "hidden",
                    flexWrap: "wrap",
                    gap: "40px",
                    border: "1px solid rgba(161, 140, 255, 0.15)",
                    boxShadow: "0 20px 40px rgba(15, 10, 31, 0.15)"
                }}>
                    {/* Abstract glow effects */}
                    <div style={{ position: "absolute", top: "-50px", left: "-50px", width: "200px", height: "200px", background: "rgba(120, 81, 169, 0.2)", filter: "blur(50px)", borderRadius: "50%" }}></div>
                    <div style={{ position: "absolute", bottom: "-50px", right: "-50px", width: "300px", height: "300px", background: "rgba(161, 140, 255, 0.15)", filter: "blur(60px)", borderRadius: "50%" }}></div>
                    
                    <div style={{ position: "relative", zIndex: 2, maxWidth: "550px" }}>
                        <h2 style={{ color: "#ffffff", fontSize: "2.4rem", fontWeight: "700", lineHeight: "1.25", marginBottom: "16px" }}>
                            Ready To Boost Your Website's Performance?
                        </h2>
                        <p style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "1.05rem", lineHeight: "1.6", margin: 0 }}>
                            Take the first step towards data-driven success with our comprehensive audit and personalized growth strategy.
                        </p>
                    </div>
                    
                    <div style={{ position: "relative", zIndex: 2 }}>
                        <Link to="/contact" className="audit-cta-btn" style={{ 
                            background: "linear-gradient(90deg, #A18CFF 0%, #8063F5 100%)", 
                            color: "#ffffff", 
                            fontWeight: "700", 
                            padding: "16px 40px", 
                            borderRadius: "40px", 
                            fontSize: "1.05rem", 
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "10px",
                            textDecoration: "none",
                            boxShadow: "0 10px 25px rgba(128, 99, 245, 0.4)",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                        }}>
                            Get Free Audit <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
