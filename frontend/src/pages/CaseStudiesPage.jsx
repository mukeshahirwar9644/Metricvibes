import React from 'react';
import CaseStudies from '../components/sections/CaseStudies';

export default function CaseStudiesPage() {
    return (
        <main id="case-studies-page">
            {/* Hero Section */}
            <section style={{
                background: "linear-gradient(135deg, rgba(26, 11, 54, 0.96) 0%, rgba(45, 16, 90, 0.95) 100%), url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover",
                padding: "135px 0 15px",
                color: "white",
                textAlign: "center"
            }}>
                <div className="container" style={{ maxWidth: "850px" }}>
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
                        <i className="fas fa-rocket" style={{ color: "#38ef7d" }}></i> SUCCESS STORIES
                    </div>
                    <h1 style={{ fontSize: "2.4rem", fontWeight: "800", color: "white", marginBottom: "14px", lineHeight: "1.25" }}>
                        Real Results for Real Businesses
                    </h1>
                    <p style={{ fontSize: "1.05rem", color: "rgba(255, 255, 255, 0.85)", lineHeight: "1.6", maxWidth: "700px", margin: "0 auto" }}>
                        Explore how we help global brands transform their data architecture, optimize marketing spend, and drive measurable revenue growth.
                    </p>
                </div>
            </section>

            {/* Case Studies Grid Section */}
            <div style={{ padding: "0 0 60px" }}>
                <CaseStudies hideHeader={true} />
            </div>
        </main>
    );
}
