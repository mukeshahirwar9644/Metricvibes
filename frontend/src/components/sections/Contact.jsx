import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../config/api';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [openFaqIndexes, setOpenFaqIndexes] = useState({});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await fetch(`${API_BASE_URL}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <section className="section contact relative overflow-hidden" id="contact" style={{ padding: "70px 0 90px" }}>
            {/* Background Glow Overlay */}
            <div style={{
                position: "absolute",
                top: "10%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "800px",
                height: "450px",
                background: "radial-gradient(ellipse, rgba(124, 58, 237, 0.07) 0%, transparent 70%)",
                pointerEvents: "none",
                zIndex: 0
            }}></div>

            <div className="container relative z-1" style={{ maxWidth: "1050px" }}>
                <div className="section__header" style={{ marginBottom: "40px", textAlign: "center" }}>
                    <span className="section__badge"><i className="fas fa-paper-plane"></i> Get In Touch</span>
                    <h2 className="section__title" style={{ fontSize: "2.2rem", fontWeight: "800" }}>Let's Build Something <span className="text-gradient">Great</span></h2>
                    <p className="section__subtitle" style={{ fontSize: "0.98rem", maxWidth: "600px", margin: "0 auto" }}>
                        Ready to transform your analytics stack? Let's discuss your project.
                    </p>
                </div>

                <div className="contact__grid">
                    {/* Contact Info Card */}
                    <div className="card card--gradient-border contact__info-card">
                        <h3 className="card__title" style={{ marginBottom: "20px", fontSize: "1.35rem", fontWeight: "700" }}>
                            Contact Info
                        </h3>
                        
                        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "22px" }}>
                            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                                <div className="contact__icon-box">
                                    {/* Gmail Official Logo */}
                                    <svg viewBox="0 0 48 48" width="22" height="22">
                                        <path fill="#4285F4" d="M45,16.2l-5,2.75V37c0,1.1-0.9,2-2,2h-7V24.5l14-11V16.2z"/>
                                        <path fill="#34A853" d="M3,16.2l5,2.75V37c0,1.1,0.9,2,2,2h7V24.5l-14-11V16.2z"/>
                                        <path fill="#EA4335" d="M38,11.5L24,22.5L10,11.5V7c0-1.1,0.9-2,2-2h24c1.1,0,2,0.9,2,2V11.5z"/>
                                        <path fill="#FBBC05" d="M45,13.5l-7,5V11.5l7-5.5c0.6-0.5,1-1.2,1-2v0.5V13.5z"/>
                                        <path fill="#C5221F" d="M3,13.5l7,5V11.5l-7-5.5c-0.6-0.5-1-1.2-1-2v0.5V13.5z"/>
                                    </svg>
                                </div>
                                <a href="mailto:sales@metricvibes.com" className="contact__link-text" style={{ fontWeight: "600", fontSize: "0.93rem", textDecoration: "none", transition: "opacity 0.2s" }} onMouseEnter={(e) => e.target.style.opacity = "0.8"} onMouseLeave={(e) => e.target.style.opacity = "1"}>
                                    sales@metricvibes.com
                                </a>
                            </div>
                            
                            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                                <div className="contact__icon-box">
                                    {/* Google Calendar Official Logo */}
                                    <svg viewBox="0 0 48 48" width="22" height="22">
                                        <rect x="6" y="8" width="36" height="34" rx="4" fill="#ffffff" stroke="#4285F4" strokeWidth="2.5"/>
                                        <path fill="#EA4335" d="M6 12C6 9.79 7.79 8 10 8H38C40.21 8 42 9.79 42 12V16H6V12Z"/>
                                        <rect x="12" y="22" width="6" height="5" rx="1" fill="#4285F4"/>
                                        <rect x="21" y="22" width="6" height="5" rx="1" fill="#34A853"/>
                                        <rect x="30" y="22" width="6" height="5" rx="1" fill="#FBBC05"/>
                                        <rect x="12" y="30" width="6" height="5" rx="1" fill="#EA4335"/>
                                        <rect x="21" y="30" width="6" height="5" rx="1" fill="#4285F4"/>
                                        <rect x="30" y="30" width="6" height="5" rx="1" fill="#34A853"/>
                                    </svg>
                                </div>
                                <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0HNRcFwK9OaEiO3Ygv6CrPg_H3gkYtXJekUGW7t9FB3TSZY0aAzWAs0aFVZjIVCpuBiCSb1boc" target="_blank" rel="noopener noreferrer" className="contact__link-text" style={{ fontWeight: "600", fontSize: "0.93rem", textDecoration: "none", transition: "opacity 0.2s" }} onMouseEnter={(e) => e.target.style.opacity = "0.8"} onMouseLeave={(e) => e.target.style.opacity = "1"}>
                                    Book A Slot - Google Calendar
                                </a>
                            </div>

                            <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                                <div className="contact__icon-box" style={{ marginTop: "2px" }}>
                                    {/* Google Maps Official Pin Logo */}
                                    <svg viewBox="0 0 48 48" width="22" height="22">
                                        <path fill="#EA4335" d="M24 4C14.61 4 7 11.61 7 21c0 11.77 15.34 22.31 16.03 22.78a1.69 1.69 0 0 0 1.94 0C25.66 43.31 41 32.77 41 21c0-9.39-7.61-17-17-17z"/>
                                        <circle cx="24" cy="20" r="7" fill="#ffffff"/>
                                        <circle cx="24" cy="20" r="4" fill="#4285F4"/>
                                    </svg>
                                </div>
                                <a href="https://www.google.com/maps/search/?api=1&query=MetricVibes" target="_blank" rel="noopener noreferrer" className="contact__link-text" style={{ fontWeight: "600", fontSize: "0.88rem", lineHeight: "1.45", textDecoration: "none", transition: "opacity 0.2s" }} onMouseEnter={(e) => e.target.style.opacity = "0.8"} onMouseLeave={(e) => e.target.style.opacity = "1"}>
                                    MetricVibes, A100, A Block, Sector 58, Noida, Uttar Pradesh 201309
                                </a>
                            </div>
                        </div>

                        {/* Map Container */}
                        <div className="contact__map" style={{ marginTop: "20px", width: "100%", height: "220px", minHeight: "220px", borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(124, 58, 237, 0.15)", position: "relative" }}>
                            <iframe 
                                src="https://maps.google.com/maps?q=28.6050098,77.3620303&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                                style={{ border: 0, width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                title="MetricVibes Location Map"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form Card */}
                    <div className="card card--gradient-border contact__form-card">
                        <h3 className="card__title" style={{ marginBottom: "20px", fontSize: "1.35rem", fontWeight: "700" }}>
                            Drop Us A Message
                        </h3>
                        
                        {status === 'success' && <div className="alert alert-success" style={{ padding: "10px 14px", fontSize: "0.88rem", marginBottom: "14px" }}>Message sent successfully! We will get back to you soon.</div>}
                        {status === 'error' && <div className="alert alert-danger" style={{ padding: "10px 14px", fontSize: "0.88rem", marginBottom: "14px" }}>An error occurred. Please try again later.</div>}

                        <form id="contactForm" onSubmit={handleSubmit}>
                            {/* Honeypot */}
                            <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
                                <input type="text" name="website_url" tabIndex="-1" autoComplete="off" />
                            </div>

                            <div className="form-group" style={{ marginBottom: "12px" }}>
                                <input type="text" name="name" className="form-control" placeholder="Your Name" required aria-label="Full Name" value={formData.name} onChange={handleChange} style={{ height: "44px", fontSize: "0.88rem", padding: "0 18px", borderRadius: "10px" }} />
                            </div>
                            
                            <div className="form-group" style={{ marginBottom: "12px" }}>
                                <input type="email" name="email" className="form-control" placeholder="Email Address" required aria-label="Email" value={formData.email} onChange={handleChange} style={{ height: "44px", fontSize: "0.88rem", padding: "0 18px", borderRadius: "10px" }} />
                            </div>

                            <div className="form-group" style={{ marginBottom: "12px" }}>
                                <input type="tel" name="phone" className="form-control" placeholder="Phone Number" aria-label="Phone" value={formData.phone} onChange={handleChange} style={{ height: "44px", fontSize: "0.88rem", padding: "0 18px", borderRadius: "10px" }} />
                            </div>
                            
                            <div className="form-group" style={{ marginBottom: "12px" }}>
                                <input type="text" name="company" className="form-control" placeholder="Company Name" aria-label="Company" value={formData.company} onChange={handleChange} style={{ height: "44px", fontSize: "0.88rem", padding: "0 18px", borderRadius: "10px" }} />
                            </div>

                            <div className="form-group" style={{ marginBottom: "16px" }}>
                                <textarea name="message" className="form-control" placeholder="Tell us about your project..." rows="3" required aria-label="Message" style={{ borderRadius: "12px", padding: "12px 16px", fontSize: "0.88rem" }} value={formData.message} onChange={handleChange}></textarea>
                            </div>

                            <button type="submit" className="btn btn--contact-submit" style={{
                                width: "100%",
                                padding: "14px",
                                borderRadius: "30px",
                                background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
                                color: "#ffffff",
                                fontWeight: "700",
                                fontSize: "0.92rem",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                                border: "none",
                                boxShadow: "0 8px 22px rgba(124, 58, 237, 0.35)",
                                transition: "all 0.3s ease",
                                cursor: "pointer"
                            }} 
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-2px)";
                                e.currentTarget.style.boxShadow = "0 12px 28px rgba(124, 58, 237, 0.5)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 8px 22px rgba(124, 58, 237, 0.35)";
                            }}
                            disabled={status === 'sending'}>
                                {status === 'sending' ? 'SENDING...' : 'BOOK YOUR DEMO'}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Section 1: Let's Transform Your Data Analytics Strategy */}
                <div className="contact__section-block">
                    <div className="contact__section-grid-1">
                        <div>
                            <span className="section__badge" style={{ marginBottom: "16px", display: "inline-flex" }}>
                                <i className="fas fa-chart-line"></i> Analytics Strategy
                            </span>
                            <h2 className="contact__block-title" style={{ fontSize: "2.1rem", fontWeight: "800", lineHeight: "1.25", letterSpacing: "-0.02em", marginTop: "10px" }}>
                                Let's Transform Your <span className="text-gradient">Data Analytics Strategy</span>
                            </h2>
                            <div style={{ width: "40px", height: "4px", borderRadius: "4px", background: "linear-gradient(90deg, #7c3aed 0%, #3b1378 100%)", marginTop: "20px" }}></div>
                        </div>
                        <div>
                            <p className="contact__block-text" style={{ fontSize: "1.02rem", lineHeight: "1.8", marginBottom: "20px" }}>
                                At MetricVibes, we understand that making data-driven decisions requires more than just collecting numbers – it requires the right tracking infrastructure, meaningful insights, and actionable recommendations. Our team of analytics specialists works with B2B companies, SaaS platforms, and e-commerce businesses to implement comprehensive tracking solutions that drive real business growth.
                            </p>
                            <p className="contact__block-text" style={{ fontSize: "1.02rem", lineHeight: "1.8", marginBottom: 0 }}>
                                Whether you're struggling with GA4 implementation, need custom dashboard development, or want to optimize your conversion tracking across multiple channels, we're here to help. Our consultants have helped over <strong style={{ color: "#7c3aed", fontWeight: "700" }}>200+ companies</strong> transform their analytics approach, resulting in an average <strong style={{ color: "#7c3aed", fontWeight: "700" }}>35% improvement in data accuracy</strong> and <strong style={{ color: "#7c3aed", fontWeight: "700" }}>28% increase</strong> in conversion optimization effectiveness.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 2: How We Can Help Your Business */}
                <div className="contact__section-block" style={{ marginTop: "36px" }}>
                    <div className="contact__section-grid-2">
                        <div>
                            <p className="contact__block-text" style={{ fontSize: "1.02rem", lineHeight: "1.8", marginBottom: "20px" }}>
                                Our analytics consulting services span the full spectrum of digital measurement needs. We specialize in Google Analytics 4 setup and migration, ensuring your tracking captures every critical touchpoint in your customer journey. From implementing enhanced e-commerce tracking to setting up cross-domain measurement, we make sure no valuable data slips through the cracks.
                            </p>
                            <p className="contact__block-text" style={{ fontSize: "1.02rem", lineHeight: "1.8", marginBottom: 0 }}>
                                Beyond implementation, we provide ongoing optimization and strategic guidance. Our team conducts regular analytics audits, identifies tracking gaps, and provides detailed recommendations to improve your measurement strategy. We also offer custom reporting solutions, automated dashboard creation, and team training to ensure your internal teams can leverage your data effectively long after our engagement.
                            </p>
                        </div>
                        <div>
                            <span className="section__badge" style={{ marginBottom: "16px", display: "inline-flex" }}>
                                <i className="fas fa-briefcase"></i> Enterprise Solutions
                            </span>
                            <h2 className="contact__block-title" style={{ fontSize: "2.1rem", fontWeight: "800", lineHeight: "1.25", letterSpacing: "-0.02em", marginTop: "10px" }}>
                                How We Can <span className="text-gradient">Help Your Business</span>
                            </h2>
                            <div style={{ width: "40px", height: "4px", borderRadius: "4px", background: "linear-gradient(90deg, #7c3aed 0%, #3b1378 100%)", marginTop: "20px" }}></div>
                        </div>
                    </div>
                </div>

                {/* Section 3: Also Check Banner */}
                <div className="contact__also-check">
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                        <div className="contact__icon-box" style={{ height: "44px", padding: "0 14px", width: "auto" }}>
                            <img src="/assets/img/logo-new.webp" alt="MetricVibes Logo" style={{ height: "22px", width: "auto", objectFit: "contain" }} />
                        </div>
                        <div>
                            <span style={{ fontSize: "0.78rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#7c3aed", display: "block", marginBottom: "3px" }}>
                                Also Check
                            </span>
                            <h4 className="contact__also-title" style={{ fontSize: "1.05rem", fontWeight: "700", margin: 0 }}>
                                Want to know more about our analytics team & mission?
                            </h4>
                        </div>
                    </div>
                    <Link to="/about" style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "10px 22px",
                        borderRadius: "30px",
                        background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
                        color: "#ffffff",
                        fontWeight: "600",
                        fontSize: "0.88rem",
                        textDecoration: "none",
                        boxShadow: "0 6px 18px rgba(124, 58, 237, 0.3)",
                        transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
                        Know More About MetricVibes <i className="fas fa-arrow-right" style={{ fontSize: "0.8rem" }}></i>
                    </Link>
                </div>

                {/* Section 4: Home Page Modern Accordion FAQ */}
                <div style={{ marginTop: "80px" }}>
                    <h2 className="section__title" style={{ fontSize: "2.2rem", fontWeight: "800", textAlign: "center", marginBottom: "40px" }}>
                        FAQ
                    </h2>
                    <div className="faq-container-modern" style={{ maxWidth: "800px", margin: "0 auto" }}>
                        {[
                            {
                                q: "How quickly can you help us fix our Google Analytics tracking issues?",
                                a: "Our team typically initiates an emergency audit within 24-48 hours and can resolve core tracking issues within 3-5 business days."
                            },
                            {
                                q: "Do you work with businesses outside of our time zone?",
                                a: "Yes, we work with enterprise clients globally across North America, Europe, Asia, and Australia with flexible asynchronous & real-time syncs."
                            },
                            {
                                q: "What's included in your free analytics audit?",
                                a: "Our free audit inspects your current event setup, data accuracy, GA4 tag configurations, consent mode compliance, and identifies tracking gaps."
                            },
                            {
                                q: "Can you help train our internal team on analytics best practices?",
                                a: "Yes! We provide tailored training sessions, Looker Studio dashboard walkthroughs, and custom documentation for your team."
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className={`faq-item-modern ${openFaqIndexes[idx] ? 'active' : ''}`}>
                                <div 
                                    className={`faq-header-modern ${openFaqIndexes[idx] ? 'active' : ''}`} 
                                    onClick={() => setOpenFaqIndexes(prev => ({ ...prev, [idx]: !prev[idx] }))}
                                >
                                    {faq.q}
                                    <i className={`fas fa-caret-${openFaqIndexes[idx] ? 'up' : 'down'}`}></i>
                                </div>
                                <div className="faq-body-modern" style={{ display: openFaqIndexes[idx] ? 'block' : 'none' }}>
                                    {faq.a}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
