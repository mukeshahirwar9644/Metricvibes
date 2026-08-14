import React, { useState } from 'react';

export default function MixpanelPartnership() {
    const [openFaqIndex, setOpenFaqIndex] = useState(-1);

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? -1 : index);
    };

    const whyMixpanelData = [
        { icon: "fas fa-window-restore", title: "In-Depth User Insights", text: "Go beyond page views—track user events, funnels, and retention to truly understand how people interact with your product." },
        { icon: "fas fa-comments", title: "Data-Driven Product Decisions", text: "Identify drop off points, test new features, and refine the user journey to boost engagement." },
        { icon: "fas fa-brain", title: "Real-Time Reporting", text: "Stay ahead of trends and changes in user behavior as they happen." },
        { icon: "fas fa-tools", title: "Scalable for All Stages", text: "Ideal for startups to enterprises, Mixpanel grows with you as product complexity and data volume expand." }
    ];

    const whyPartnerData = [
        { icon: "fas fa-user-tie", title: "Technical & Strategic Expertise", text: "We don't just set up events; we align analytics strategy with your business goals." },
        { icon: "fas fa-layer-group", title: "Quick Implementation & Optimization", text: "Get your Mixpanel environment running smoothly within days, complete with guided best practices." },
        { icon: "fas fa-file-contract", title: "Event Taxonomy Consulting", text: "We help define which events to track and how to structure your data for optimal insights." },
        { icon: "fas fa-headset", title: "Ongoing Support & Training", text: "We continuously monitor your Mixpanel data to identify optimization opportunities and maximize ROI." }
    ];

    const faqs = [
        { q: "What is Mixpanel, and how does it differ from traditional analytics tools?", a: "Mixpanel is an event-based product analytics platform designed to track user actions inside mobile and web applications, rather than just web page views. It allows product teams to analyze user behavior in depth, measure feature usage, and improve retention." },
        { q: "How can Mixpanel help improve my product's performance?", a: "Mixpanel gives you clear visibility into how users navigate your app. By analyzing conversion funnels, user drop-off rates, and retention cohorts, you can make targeted improvements to user onboarding and core product features." },
        { q: "What kind of businesses should use Mixpanel?", a: "Mixpanel is ideal for digital product companies, SaaS applications, mobile app developers, and eCommerce brands that want detailed tracking of user interactions, customer journeys, and feature adoption." },
        { q: "Why should I work with Metric Vibes for Mixpanel implementation?", a: "Metric Vibes ensures proper data architecture, clean event taxonomy, and smooth integration with your tech stack. We help you design an event tracking plan that delivers immediate, actionable product insights." },
        { q: "How long does it take to set up Mixpanel?", a: "Basic tracking setup and core event taxonomy can be implemented in a few days. Comprehensive tracking plans, custom dashboards, and team training usually take 1 to 2 weeks depending on product complexity." }
    ];

    return (
        <div className="subpage-wrapper">
            {/* Hero Section */}
            <section style={{
                background: "linear-gradient(135deg, rgba(38, 14, 82, 0.95) 0%, rgba(55, 20, 107, 0.95) 100%), url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover",
                padding: "160px 0 100px",
                color: "white",
            }}>
                <div className="container partnership-hero-grid">
                    <div>
                        <div style={{ backgroundColor: "white", padding: "15px 25px", borderRadius: "8px", display: "inline-flex", alignItems: "center", gap: "15px", marginBottom: "40px" }}>
                            <span style={{ color: "#333", fontWeight: "700", fontSize: "1.1rem" }}>mixpanel<br/><span style={{ fontSize: "0.8rem", fontWeight: "normal" }}>Certified Partner</span></span>
                            <div style={{ backgroundColor: "#7856FF", color: "white", width: "40px", height: "40px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "1.5rem" }}>X</div>
                        </div>
                        <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "25px", color: "white", lineHeight: "1.2" }}>Accelerate Growth with Mixpanel's Behavioral Analytics</h1>
                        <p style={{ fontSize: "1.2rem", color: "rgba(255, 255, 255, 0.9)", lineHeight: "1.6" }}>Understand user behaviors, optimize product experiences, and increase retention.</p>
                    </div>
                    
                    {/* Book Now Form */}
                    <div style={{ backgroundColor: "#eaeaea", padding: "40px", borderRadius: "12px", boxShadow: "0 20px 50px rgba(0,0,0,0.3)" }}>
                        <h2 style={{ color: "#1a1a1a", fontSize: "2rem", fontWeight: "700", textAlign: "center", marginBottom: "30px" }}>Book Now</h2>
                        <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            <input type="text" placeholder="Your Name" style={{ padding: "15px 20px", borderRadius: "8px", border: "none", width: "100%", fontSize: "1rem" }} />
                            <input type="email" placeholder="Email Address" style={{ padding: "15px 20px", borderRadius: "8px", border: "none", width: "100%", fontSize: "1rem" }} />
                            <input type="tel" placeholder="Phone Number" style={{ padding: "15px 20px", borderRadius: "8px", border: "none", width: "100%", fontSize: "1rem" }} />
                            <button className="btn btn--brand-pill" style={{ width: "100%", marginTop: "10px", fontSize: "0.95rem", justifyContent: "center" }}>
                                BOOK YOUR MIXPANEL CONSULTATION
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Why Mixpanel Section */}
            <section style={{ padding: "100px 0", backgroundColor: "white", textAlign: "center" }}>
                <div className="container">
                    <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "10px" }}>Why Mixpanel?</h2>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "15px", marginBottom: "60px" }}>
                        <div style={{ height: "1px", width: "40px", backgroundColor: "#ddd" }}></div>
                        <span style={{ color: "#666", fontSize: "1.2rem", fontWeight: "600" }}>Business Benefits</span>
                        <div style={{ height: "1px", width: "40px", backgroundColor: "#ddd" }}></div>
                    </div>
                    
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
                        {whyMixpanelData.map((item, idx) => {
                            const gradients = [
                                { bg: "linear-gradient(135deg, #7856FF 0%, #A88BEB 100%)", shadow: "rgba(120, 86, 255, 0.4)" },
                                { bg: "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)", shadow: "rgba(255, 107, 107, 0.4)" },
                                { bg: "linear-gradient(135deg, #4E65FF 0%, #92EFFD 100%)", shadow: "rgba(78, 101, 255, 0.4)" },
                                { bg: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)", shadow: "rgba(17, 153, 142, 0.4)" }
                            ];
                            const g = gradients[idx % gradients.length];
                            return (
                                <div key={idx} className="card-hover-animated" style={{ backgroundColor: "white", padding: "40px 30px", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", border: "1px solid #f0f0f0", transition: "all 0.3s ease" }}>
                                    <div style={{ 
                                        width: "75px", height: "75px", background: g.bg, color: "white", 
                                        borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", 
                                        fontSize: "1.9rem", margin: "0 auto 25px",
                                        boxShadow: `0 10px 20px ${g.shadow}`,
                                        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                                    }} className="icon-pulse-hover">
                                        <i className={item.icon}></i>
                                    </div>
                                    <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "15px", color: "var(--color-primary)" }}>{item.title}</h3>
                                    <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6" }}>{item.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section style={{ backgroundColor: "var(--color-primary)", padding: "100px 0", color: "white" }}>
                <div className="container">
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "15px", marginBottom: "80px" }}>
                        <div style={{ height: "2px", width: "40px", backgroundColor: "rgba(255,255,255,0.5)" }}></div>
                        <h2 style={{ fontSize: "2.5rem", fontWeight: "700", margin: 0, color: "white" }}>Key Features</h2>
                        <div style={{ height: "2px", width: "40px", backgroundColor: "rgba(255,255,255,0.5)" }}></div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "80px", maxWidth: "900px", margin: "0 auto" }}>
                        {/* Feature 1 */}
                        <div className="responsive-feature-row">
                            <div>
                                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "15px", color: "white" }}>Funnel & Retention Analysis</h3>
                                <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)", lineHeight: "1.6" }}>Discover where users drop off and what drives repeat engagement.</p>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <img src="https://cdni.iconscout.com/illustration/premium/thumb/data-analysis-3454629-2918518.png" alt="Funnel & Retention Analysis" style={{ maxWidth: "250px", transition: "transform 0.4s ease" }} className="img-hover-float" />
                            </div>
                        </div>
                        {/* Feature 2 */}
                        <div className="responsive-feature-row">
                            <div style={{ textAlign: "center", order: 1 }}>
                                <img src="https://cdni.iconscout.com/illustration/premium/thumb/business-dashboard-3454631-2918520.png" alt="Cohort Segmentation" style={{ maxWidth: "250px", transition: "transform 0.4s ease" }} className="img-hover-float" />
                            </div>
                            <div style={{ order: 2 }}>
                                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "15px", color: "white" }}>Cohort Segmentation</h3>
                                <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)", lineHeight: "1.6" }}>Group users by behavior, demographics, or events for targeted improvements.</p>
                            </div>
                        </div>
                        {/* Feature 3 */}
                        <div className="responsive-feature-row">
                            <div>
                                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "15px", color: "white" }}>A/B Testing & Experimentation</h3>
                                <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)", lineHeight: "1.6" }}>Validate hypotheses quickly to implement winning user experiences.</p>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <img src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-3454628-2918517.png" alt="A/B Testing & Experimentation" style={{ maxWidth: "250px", transition: "transform 0.4s ease" }} className="img-hover-float" />
                            </div>
                        </div>
                        {/* Feature 4 */}
                        <div className="responsive-feature-row">
                            <div style={{ textAlign: "center", order: 1 }}>
                                <img src="https://cdni.iconscout.com/illustration/premium/thumb/data-security-3454634-2918523.png" alt="Advanced User Profiling" style={{ maxWidth: "250px", transition: "transform 0.4s ease" }} className="img-hover-float" />
                            </div>
                            <div style={{ order: 2 }}>
                                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "15px", color: "white" }}>Advanced User Profiling</h3>
                                <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)", lineHeight: "1.6" }}>Track individual user journeys in real-time for highly personalized product updates.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Partner Section */}
            <section style={{ padding: "100px 0", backgroundColor: "#fafafa", textAlign: "center" }}>
                <div className="container">
                    <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "10px", color: "var(--color-primary)" }}>Why Partner With Metric Vibes For Mixpanel?</h2>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "15px", marginBottom: "60px" }}>
                        <div style={{ height: "3px", width: "5px", backgroundColor: "var(--color-primary)", borderRadius: "50%" }}></div>
                        <div style={{ height: "3px", width: "5px", backgroundColor: "var(--color-primary)", borderRadius: "50%" }}></div>
                        <div style={{ height: "3px", width: "5px", backgroundColor: "var(--color-primary)", borderRadius: "50%" }}></div>
                    </div>
                    
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
                        {whyPartnerData.map((item, idx) => {
                            const partnerGradients = [
                                { bg: "linear-gradient(135deg, #7856FF 0%, #4A00E0 100%)", shadow: "rgba(120, 86, 255, 0.4)" },
                                { bg: "linear-gradient(135deg, #F857A6 0%, #FF5858 100%)", shadow: "rgba(248, 87, 166, 0.4)" },
                                { bg: "linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)", shadow: "rgba(0, 180, 219, 0.4)" },
                                { bg: "linear-gradient(135deg, #F7971E 0%, #FFD200 100%)", shadow: "rgba(247, 151, 30, 0.4)" }
                            ];
                            const g = partnerGradients[idx % partnerGradients.length];
                            return (
                                <div key={idx} className="card-hover-animated" style={{ backgroundColor: "white", padding: "40px 30px", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", border: "1px solid #f0f0f0", transition: "all 0.3s ease" }}>
                                    <div style={{ 
                                        width: "75px", height: "75px", background: g.bg, color: "white", 
                                        borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", 
                                        fontSize: "1.9rem", margin: "0 auto 25px",
                                        boxShadow: `0 10px 20px ${g.shadow}`,
                                        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                                    }} className="icon-pulse-hover">
                                        <i className={item.icon}></i>
                                    </div>
                                    <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "15px", color: "#333" }}>{item.title}</h3>
                                    <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6" }}>{item.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section style={{ padding: "80px 0", backgroundColor: "white" }}>
                <div className="container" style={{ maxWidth: "800px" }}>
                    <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "50px", fontWeight: "700" }}>Frequently Asked Questions</h2>
                    <div className="faq-container-modern" style={{ maxWidth: "800px", margin: "0 auto" }}>
                        {faqs.map((faq, idx) => (
                            <div 
                                key={idx} 
                                data-aos="fade-up" 
                                data-aos-delay={idx * 100}
                            >
                                <div className={`faq-item-modern ${openFaqIndex === idx ? 'active' : ''}`}>
                                    <div className={`faq-header-modern ${openFaqIndex === idx ? 'active' : ''}`} onClick={() => toggleFaq(idx)}>
                                        {faq.q}
                                        <i className={`fas fa-caret-${openFaqIndex === idx ? 'up' : 'down'}`}></i>
                                    </div>
                                    <div className="faq-body-modern" style={{ display: openFaqIndex === idx ? 'block' : 'none' }}>
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section style={{ padding: "60px 0", backgroundColor: "white" }}>
                <div className="container" style={{ maxWidth: "1000px" }}>
                    <div style={{ 
                        borderRadius: "20px", 
                        backgroundColor: "var(--color-primary)",
                        padding: "60px 50px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        gap: "30px",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                    }}>
                        <h2 style={{ color: "white", fontSize: "2.2rem", fontWeight: "700", margin: 0, lineHeight: "1.3" }}>
                            Ready to Transform Your Product's Analytics?
                        </h2>
                        <a href="/contact" className="btn" style={{ backgroundColor: "white", color: "var(--color-primary)", fontWeight: "700", padding: "16px 40px", borderRadius: "30px", textDecoration: "none", display: "inline-block" }}>
                            Get Free Audit
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
