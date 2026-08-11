import React from 'react';
import Services from '../components/sections/Services';

export default function ServicesPage() {
    return (
        <main id="services-page">
            {/* Header Banner */}
            <section style={{
                position: "relative",
                padding: "135px 0 45px",
                background: "linear-gradient(135deg, rgba(26, 11, 54, 0.96) 0%, rgba(45, 16, 90, 0.95) 100%), url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover",
                textAlign: "center",
                color: "#fff"
            }}>
                <div className="container" style={{ position: "relative", zIndex: "2", maxWidth: "900px" }}>
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
                        marginBottom: "18px",
                        border: "1px solid rgba(255,255,255,0.2)"
                    }}>
                        <i className="fas fa-layer-group" style={{ color: "#38ef7d" }}></i> WHAT WE OFFER
                    </div>
                    <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", fontWeight: "800", marginBottom: "16px", color: "#fff" }}>
                        Our Services & Solutions
                    </h1>
                    <p style={{ fontSize: "1.05rem", lineHeight: "1.6", color: "rgba(255, 255, 255, 0.9)", maxWidth: "700px", margin: "0 auto" }}>
                        Explore our comprehensive suite of measurement, analytics, cloud engineering, and AI automation services.
                    </p>
                </div>
            </section>

            <Services />
        </main>
    );
}
