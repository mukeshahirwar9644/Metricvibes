import React from 'react';
import { Link } from 'react-router-dom';
import AnalyticsDashboard from './AnalyticsDashboard';

export default function Hero() {
    return (
        <>
            {/* Hero Section */}
            <section className="hero" id="hero">
                {/* Clean Ambient Background */}
                <div className="hero__bg" style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                    <div style={{ position: "absolute", top: "-10%", left: "-5%", width: "45%", height: "65%", background: "radial-gradient(ellipse at center, rgba(124, 58, 237, 0.12) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }}></div>
                    <div style={{ position: "absolute", bottom: "-10%", right: "-5%", width: "45%", height: "65%", background: "radial-gradient(ellipse at center, rgba(79, 70, 229, 0.12) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }}></div>
                </div>

                <div className="container hero__container">
                    {/* Left: Content */}
                    <div className="hero__content">
                        <div className="hero__badge">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sparkles-icon" style={{ marginRight: "4px" }}>
                                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
                                <path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>
                            </svg>
                            AI-Powered Analytics Consulting
                        </div>

                        <h1 className="hero__title">
                            Your Analytics, Cloud & <span className="hero__title-accent">AI Implementation</span> Partner
                        </h1>

                        <p className="hero__subtitle">
                            We eliminate data silos, optimize runaway cloud costs, and automate manual workflows for enterprises. From recovering lost marketing data to unlocking predictive AI insights.
                        </p>

                        <div className="hero__buttons">
                            <Link to="/contact" className="btn--brand-pill" style={{ opacity: "1 !important", visibility: "visible !important" }}>
                                Book a Demo <i className="fa-solid fa-arrow-right" style={{ marginLeft: "8px" }}></i>
                            </Link>
                            <a href="/case-studies" className="btn--white-pill" style={{ opacity: "1 !important", visibility: "visible !important" }}>
                                <div className="btn-icon-circle">
                                    <i className="fa-solid fa-play" style={{ marginLeft: "2px" }}></i>
                                </div>
                                See Our Work
                            </a>
                        </div>
                    </div>

                    {/* Right: Interactive Analytics Dashboard + Partnership Badges */}
                    <div className="hero__visual" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        maxWidth: '620px',
                        margin: '0 auto',
                        position: 'relative',
                        zIndex: 10,
                        transform: 'translateY(-14px)'
                    }}>
                        {/* 1. Analytics Dashboard Card */}
                        <div style={{ width: '100%', maxWidth: '480px' }}>
                            <AnalyticsDashboard />
                        </div>

                        {/* 2. Partner & Certification Badges Underneath Card */}
                        <div style={{
                            width: '100%',
                            marginTop: '12px',
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '10px 14px'
                        }}>
                            {/* Adobe */}
                            <div className="hero-partner-badge">
                                <div style={{ background: "#FA0F00", width: "24px", height: "28px", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", padding: "3px", flexShrink: 0 }}>
                                    <svg viewBox="0 0 512 426.67" style={{ width: "100%", height: "100%" }}>
                                        <path fill="#FFFFFF" d="M312.4 0h199.6v426.7H312.4zM0 0h199.6v426.7H0zM256 158.2l76.7 186.3h-52.6l-20.1-51.5h-55.8L256 158.2z"/>
                                    </svg>
                                </div>
                                <span className="hero-partner-badge-text" style={{ fontSize: '1.05rem' }}>Adobe</span>
                            </div>

                            {/* Claude Partner */}
                            <div className="hero-partner-badge">
                                <i className="fas fa-certificate" style={{ color: "#d15c40", fontSize: '1.3rem' }}></i>
                                <span className="hero-partner-badge-text" style={{ fontFamily: "Georgia, serif", fontSize: "1.15rem" }}>Claude</span>
                                <span style={{ fontSize: "0.6rem", fontWeight: "800", color: "#7c3aed", textTransform: "uppercase", letterSpacing: "0.5px" }}>PARTNER IN INDIA</span>
                            </div>

                            {/* Zoho Analytics */}
                            <div className="hero-partner-badge">
                                <i className="fas fa-chart-line" style={{ color: "#f90b2b", fontSize: "1.4rem" }}></i>
                                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                                    <span style={{ fontSize: "0.68rem", fontWeight: "600", color: "#94a3b8" }}>Zoho</span>
                                    <span className="hero-partner-badge-text" style={{ fontSize: "1rem" }}>Analytics</span>
                                </div>
                            </div>

                            {/* Google Cloud Partner */}
                            <div className="hero-partner-badge">
                                <i className="fab fa-google" style={{ color: "#4285F4", fontSize: "1.3rem" }}></i>
                                <span className="hero-partner-badge-text" style={{ fontSize: '1.02rem' }}>Google Cloud Partner</span>
                            </div>

                            {/* Mixpanel Partner */}
                            <div className="hero-partner-badge">
                                <i className="fas fa-flask" style={{ color: "#7856FF", fontSize: "1.3rem" }}></i>
                                <span className="hero-partner-badge-text" style={{ fontSize: '1.02rem' }}>Mixpanel Partner</span>
                            </div>

                            {/* ISO 9001:2015 */}
                            <div className="hero-partner-badge">
                                <i className="fas fa-award" style={{ color: "#7c3aed", fontSize: "1.3rem" }}></i>
                                <span className="hero-partner-badge-text" style={{ fontSize: '1.02rem' }}>ISO 9001:2015</span>
                            </div>
                        </div>
                    </div>
                </div>

    {/*  Bottom Stats Bar  */}
    <div className="hero__stats-bar">
        <div className="container">
            <div className="hero__stats">
                <div className="hero__stat">
                    <span className="hero__stat-value">50+</span>
                    <span className="hero__stat-label">Projects Delivered</span>
                </div>
                <div className="hero__stat-divider"></div>
                <div className="hero__stat">
                    <span className="hero__stat-value">5+</span>
                    <span className="hero__stat-label">Years of Excellence</span>
                </div>
                <div className="hero__stat-divider"></div>
                <div className="hero__stat">
                    <span className="hero__stat-value">5+</span>
                    <span className="hero__stat-label">Countries Served</span>
                </div>
                <div className="hero__stat-divider"></div>
                <div className="hero__stat">
                    <span className="hero__stat-value">98%</span>
                    <span className="hero__stat-label">Client Satisfaction</span>
                </div>
            </div>
        </div>
    </div>


</section>

        </>
    );
}
