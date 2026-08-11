import React, { useState } from 'react';

export default function ZohoPartnership() {
    const [openFaqIndex, setOpenFaqIndex] = useState(-1);

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? -1 : index);
    };

    const whyZohoData = [
        { icon: "fas fa-[#00b4d8] fa-window-restore", title: "Centralized Data, Clear Insights", text: "Eliminate data silos by integrating multiple sources—CRM, ERP, marketing automation, and more—into a single dashboard." },
        { icon: "fas fa-comments", title: "Real-Time Reporting", text: "Make decisions on the fly with dynamic reports that update automatically." },
        { icon: "fas fa-brain", title: "AI-Powered Analytics", text: "Leverage Zoho's AI assistant for predictive insights and anomaly detection." },
        { icon: "fas fa-tools", title: "Scalable & Customizable", text: "Tailor your BI environment to match evolving business needs, whether you're a startup or an enterprise." }
    ];

    const whyPartnerData = [
        { icon: "fas fa-certificate", title: "Certified Experts", text: "Our certified analytics experts build custom BI solutions tailored to your unique growth goals." },
        { icon: "fas fa-bullseye", title: "Business-Focused Implementation", text: "We ensure the platform is configured around your unique KPIs and growth objectives." },
        { icon: "fas fa-route", title: "Turnkey Deployment", text: "From data modeling to final dashboard publishing, we deliver end-to-end setup and seamless integration." },
        { icon: "fas fa-headset", title: "Ongoing Support & Training", text: "We provide continuous maintenance, training, and report updates so your team stays empowered." }
    ];

    const faqs = [
        { q: "What is Zoho Analytics, and how does it benefit my business?", a: "Zoho Analytics is a self-service Business Intelligence and data analytics software that lets you analyze raw data, build detailed dashboards, and uncover hidden trends to make faster, smarter business decisions." },
        { q: "Can Zoho Analytics integrate with my existing tools and databases?", a: "Yes! Zoho Analytics seamlessly connects with over 500+ data sources, including popular CRMs (Salesforce, Zoho CRM), cloud databases (AWS, Google BigQuery), SQL databases, files, and marketing platforms." },
        { q: "How does AI-powered analytics work in Zoho Analytics?", a: "Zoho Analytics includes Zia, an AI-powered assistant. You can ask Zia questions in plain English (e.g., 'What was our total revenue last month?') and it instantly generates automated reports, chart visualizations, and predictive forecasts." },
        { q: "Why choose Metric Vibes for Zoho Analytics implementation?", a: "Metric Vibes combines deep BI domain expertise with official Zoho ecosystem knowledge. We architect custom data models, build intuitive executive dashboards, and train your team for maximum adoption." },
        { q: "How secure is my data in Zoho Analytics?", a: "Zoho Analytics adheres to strict enterprise-grade security standards including encryption at rest and in transit, role-based access control, GDPR/CCPA compliance, and multi-factor authentication." }
    ];

    return (
        <div className="subpage-wrapper">
            {/* Hero Section */}
            <section style={{
                background: "linear-gradient(135deg, rgba(38, 14, 82, 0.95) 0%, rgba(55, 20, 107, 0.95) 100%), url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover",
                padding: "160px 0 100px",
                color: "white",
            }}>
                <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 450px", gap: "60px", alignItems: "center" }}>
                    <div>
                        <div style={{ backgroundColor: "white", padding: "14px 26px", borderRadius: "12px", display: "inline-flex", alignItems: "center", gap: "20px", marginBottom: "35px", boxShadow: "0 10px 25px rgba(0,0,0,0.12)" }}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <span style={{ color: "#1a1a1a", fontWeight: "600", fontSize: "1rem", lineHeight: "1.2" }}>Zoho Analytics</span>
                                <span style={{ color: "#140836", fontWeight: "800", fontSize: "1.45rem", lineHeight: "1.2", letterSpacing: "-0.3px" }}>Certified Partner</span>
                            </div>
                            <div style={{ width: "52px", height: "52px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <svg viewBox="0 0 80 80" width="50" height="50" fill="none" stroke="#E30813" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
                                    {/* Outer rounded triangle */}
                                    <path d="M 14 66 L 32 18 C 33.5 14.5 36.5 14.5 38 18 L 68 66 C 69.5 68.5 68 71 65 71 L 17 71 C 14 71 12.5 68.5 14 66 Z" />
                                    {/* Inner graph peak rising to arrow */}
                                    <path d="M 27 67 L 38 42 L 44 50 L 66 18" strokeWidth="5.5" />
                                    {/* Arrow tip */}
                                    <path d="M 54 18 L 66 18 L 66 30" strokeWidth="5.5" />
                                </svg>
                            </div>
                        </div>
                        <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "25px", color: "white", lineHeight: "1.2" }}>Zoho Analytics Consulting and Implementation in Delhi NCR</h1>
                        <p style={{ fontSize: "1.2rem", color: "rgba(255, 255, 255, 0.9)", lineHeight: "1.6" }}>Empower your organization with unified BI, automated insights, and real-time reporting.</p>
                    </div>
                    
                    {/* Book Now Form */}
                    <div style={{ backgroundColor: "#eaeaea", padding: "40px", borderRadius: "12px", boxShadow: "0 20px 50px rgba(0,0,0,0.3)" }}>
                        <h2 style={{ color: "#1a1a1a", fontSize: "2rem", fontWeight: "700", textAlign: "center", marginBottom: "30px" }}>Book Now</h2>
                        <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            <input type="text" placeholder="Your Name" style={{ padding: "15px 20px", borderRadius: "8px", border: "none", width: "100%", fontSize: "1rem" }} />
                            <input type="email" placeholder="Email Address" style={{ padding: "15px 20px", borderRadius: "8px", border: "none", width: "100%", fontSize: "1rem" }} />
                            <input type="tel" placeholder="Phone Number" style={{ padding: "15px 20px", borderRadius: "8px", border: "none", width: "100%", fontSize: "1rem" }} />
                            <button className="btn btn--brand-pill" style={{ width: "100%", marginTop: "10px", fontSize: "0.95rem", justifyContent: "center" }}>
                                BOOK YOUR ZOHO CONSULTATION
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Why Zoho Analytics Section */}
            <section style={{ padding: "100px 0", backgroundColor: "white", textAlign: "center" }}>
                <div className="container">
                    <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "10px" }}>Why Zoho Analytics?</h2>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "15px", marginBottom: "60px" }}>
                        <div style={{ height: "1px", width: "40px", backgroundColor: "#ddd" }}></div>
                        <span style={{ color: "#666", fontSize: "1.2rem", fontWeight: "600" }}>Business Benefits</span>
                        <div style={{ height: "1px", width: "40px", backgroundColor: "#ddd" }}></div>
                    </div>
                    
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
                        {whyZohoData.map((item, idx) => {
                            const gradients = [
                                { bg: "linear-gradient(135deg, #E42528 0%, #FF6B6B 100%)", shadow: "rgba(228, 37, 40, 0.4)" },
                                { bg: "linear-gradient(135deg, #4E65FF 0%, #92EFFD 100%)", shadow: "rgba(78, 101, 255, 0.4)" },
                                { bg: "linear-gradient(135deg, #8E2DE2 0%, #F8CEEC 100%)", shadow: "rgba(142, 45, 226, 0.4)" },
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
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
                            <div>
                                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "15px", color: "white" }}>Data Blending & Unification</h3>
                                <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)", lineHeight: "1.6" }}>Build custom visualizations with minimal technical effort.</p>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <img src="https://cdni.iconscout.com/illustration/premium/thumb/business-dashboard-3454631-2918520.png" alt="Data Blending" style={{ maxWidth: "250px", transition: "transform 0.4s ease" }} className="img-hover-float" />
                            </div>
                        </div>
                        {/* Feature 2 */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
                            <div style={{ textAlign: "center", order: 1 }}>
                                <img src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-3454628-2918517.png" alt="Drag and Drop Dashboard" style={{ maxWidth: "250px", transition: "transform 0.4s ease" }} className="img-hover-float" />
                            </div>
                            <div style={{ order: 2 }}>
                                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "15px", color: "white" }}>Drag-and-Drop Dashboard Creation</h3>
                                <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)", lineHeight: "1.6" }}>Build custom visualizations with minimal technical effort.</p>
                            </div>
                        </div>
                        {/* Feature 3 */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
                            <div>
                                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "15px", color: "white" }}>Automated Data Alerts</h3>
                                <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)", lineHeight: "1.6" }}>Get notified of significant changes or trends that need immediate attention.</p>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <img src="https://cdni.iconscout.com/illustration/premium/thumb/data-analysis-3454629-2918518.png" alt="Automated Data Alerts" style={{ maxWidth: "250px", transition: "transform 0.4s ease" }} className="img-hover-float" />
                            </div>
                        </div>
                        {/* Feature 4 */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
                            <div style={{ textAlign: "center", order: 1 }}>
                                <img src="https://cdni.iconscout.com/illustration/premium/thumb/data-security-3454634-2918523.png" alt="Collaboration & Sharing" style={{ maxWidth: "250px", transition: "transform 0.4s ease" }} className="img-hover-float" />
                            </div>
                            <div style={{ order: 2 }}>
                                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "15px", color: "white" }}>Collaboration & Sharing</h3>
                                <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)", lineHeight: "1.6" }}>Securely share dashboards and reports with stakeholders across your organization.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Partner Section */}
            <section style={{ padding: "100px 0", backgroundColor: "#fafafa", textAlign: "center" }}>
                <div className="container">
                    <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "10px", color: "var(--color-primary)" }}>Why Partner With Metric Vibes For Zoho Analytics ?</h2>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "15px", marginBottom: "60px" }}>
                        <div style={{ height: "3px", width: "5px", backgroundColor: "var(--color-primary)", borderRadius: "50%" }}></div>
                        <div style={{ height: "3px", width: "5px", backgroundColor: "var(--color-primary)", borderRadius: "50%" }}></div>
                        <div style={{ height: "3px", width: "5px", backgroundColor: "var(--color-primary)", borderRadius: "50%" }}></div>
                    </div>
                    
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
                        {whyPartnerData.map((item, idx) => {
                            const partnerGradients = [
                                { bg: "linear-gradient(135deg, #E42528 0%, #FF8E53 100%)", shadow: "rgba(228, 37, 40, 0.4)" },
                                { bg: "linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)", shadow: "rgba(0, 180, 219, 0.4)" },
                                { bg: "linear-gradient(135deg, #F7971E 0%, #FFD200 100%)", shadow: "rgba(247, 151, 30, 0.4)" },
                                { bg: "linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)", shadow: "rgba(142, 45, 226, 0.4)" }
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
                            Ready to Unlock Deeper Data Insights?
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
