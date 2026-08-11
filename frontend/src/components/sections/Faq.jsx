import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: "How long does a GA4 migration take?",
    a: "A typical enterprise GA4 migration takes between 4 to 8 weeks depending on the complexity of your current setup, the number of custom events, and your e-commerce requirements."
  },
  {
    q: "Do you provide ongoing support after implementation?",
    a: "Yes, we offer ongoing analytics management and support retainers to ensure your tracking stays accurate as your website and business evolve."
  },
  {
    q: "Can you help with Server-Side Tracking (sGTM)?",
    a: "Absolutely. Server-side tracking is one of our core specialties. We help implement sGTM to bypass ad blockers, improve page speed, and ensure data compliance."
  },
  {
    q: "What is your pricing model?",
    a: "We offer both project-based pricing for specific implementations (like a GA4 migration or dashboard build) and monthly retainers for ongoing analytics engineering."
  }
];

export default function Faq() {
    const [openIndexes, setOpenIndexes] = useState({});

    const toggleFaq = (index) => {
        setOpenIndexes(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <section className="section" id="faq" style={{ background: "var(--surface-primary)", padding: "35px 0 85px 0" }}>
            <div className="container">
                <div className="section__header" style={{ marginBottom: "50px" }}>
                    <span className="section__badge"><i className="fas fa-question-circle"></i> FAQ</span>
                    <h2 className="section__title" style={{ fontSize: "2.8rem", fontWeight: "800", letterSpacing: "-0.02em", marginTop: "10px", marginBottom: "14px" }}>
                        Got <span className="text-gradient">questions?</span>
                    </h2>
                    <p className="section__subtitle" style={{ fontSize: "1.05rem", maxWidth: "520px", margin: "0 auto", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                        Everything you need to know about working with MetricVibes.
                    </p>
                </div>

                <div className="faq-container-modern" style={{"maxWidth":"800px","margin":"0 auto"}}>
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            data-aos="fade-up" 
                            data-aos-delay={index * 100}
                        >
                            <div className={`faq-item-modern ${openIndexes[index] ? 'active' : ''}`}>
                                <div className={`faq-header-modern ${openIndexes[index] ? 'active' : ''}`} onClick={() => toggleFaq(index)}>
                                    {faq.q}
                                    <i className={`fas fa-caret-${openIndexes[index] ? 'up' : 'down'}`}></i>
                                </div>
                                <div className="faq-body-modern" style={{ display: openIndexes[index] ? 'block' : 'none' }}>
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{
                    marginTop: "80px", 
                    padding: "50px", 
                    backgroundColor: "#ffffff", 
                    borderRadius: "24px",
                    border: "1px solid rgba(120, 81, 169, 0.15)",
                    boxShadow: "0 15px 35px rgba(120, 81, 169, 0.08)",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden"
                }}>
                    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "4px", background: "linear-gradient(90deg, #1b0c3f, #621f5f)" }}></div>
                    <h3 style={{ fontSize: "1.6rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "15px" }}>Still have questions?</h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", marginBottom: "30px" }}>We're here to help you navigate your analytics journey.</p>
                    <Link to="/contact" className="btn" style={{ 
                        background: "linear-gradient(90deg, #1b0c3f, #621f5f)", 
                        color: "white", 
                        padding: "15px 35px", 
                        borderRadius: "30px", 
                        fontWeight: "600",
                        textDecoration: "none",
                        display: "inline-block",
                        boxShadow: "0 8px 20px rgba(98, 31, 95, 0.2)"
                    }}>
                        Get In Touch <i className="fas fa-arrow-right" style={{ marginLeft: "8px" }}></i>
                    </Link>
                </div>
            </div>
        </section>
    );
}
