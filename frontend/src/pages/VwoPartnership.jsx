import React, { useState } from 'react';

export default function VwoPartnership() {
    const [openFaqIndex, setOpenFaqIndex] = useState(-1);

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? -1 : index);
    };

    const whyVwoData = [
        { icon: "fas fa-flask", title: "Continuous Experimentation", text: "A/B test new ideas, landing pages, and funnels without guesswork." },
        { icon: "fas fa-file-alt", title: "Data-Driven CRO", text: "Identify friction points in the user journey and implement proven tactics for higher conversions." },
        { icon: "fas fa-chart-line", title: "Holistic User Insights", text: "Gather qualitative feedback with heatmaps, session recordings, and surveys." },
        { icon: "fas fa-tools", title: "Scalable Testing Infrastructure", text: "VWO's robust platform supports everything from basic A/B tests to complex multivariate experiments." }
    ];

    const whyPartnerData = [
        { icon: "fas fa-clipboard-check", title: "Proven CRO Framework", text: "We apply a data-backed methodology to prioritize test ideas for maximum impact." },
        { icon: "fas fa-shield-alt", title: "Full-Service Implementation", text: "From tagging to test design to final analysis, we manage the complete VWO experience for you." },
        { icon: "fas fa-rocket", title: "Rapid Results", text: "Get actionable insights and start optimizing your site in record time." },
        { icon: "fas fa-headset", title: "Dedicated Support & Consultation", text: "We help interpret VWO data, generate hypotheses, and plan subsequent test cycles." }
    ];

    const faqs = [
        { q: "What is VWO, and how does it help with conversion rate optimization (CRO)?", a: "VWO (Visual Website Optimizer) is an all-in-one A/B testing and conversion optimization platform. It helps businesses understand visitor behavior and run experiments to increase conversions, sales, and overall user experience." },
        { q: "How can A/B testing improve my website's performance?", a: "A/B testing allows you to compare two versions of a webpage to see which one performs better. By systematically testing changes to headlines, buttons, or layouts, you can make data-driven decisions that progressively increase your conversion rates." },
        { q: "What types of businesses should use VWO?", a: "Any business with a website or app looking to maximize their traffic's value can benefit from VWO. This includes eCommerce stores, SaaS platforms, lead generation sites, and media publishers wanting to improve engagement and sales." },
        { q: "Why choose Metric Vibes for VWO implementation?", a: "As a Certified VWO Partner, Metric Vibes brings expert knowledge of the platform combined with a proven CRO framework. We handle the technical setup, strategy, test execution, and data analysis so you can focus on growing your business." },
        { q: "How soon can I see results from VWO testing?", a: "Results depend on your website's traffic volume and the significance of the changes tested. High-traffic sites can reach statistical significance in a few days, while lower-traffic sites might take a few weeks. We prioritize high-impact tests first for rapid wins." }
    ];

    return (
        <div className="subpage-wrapper">
            {/* Hero Section */}
            <section style={{
                background: "linear-gradient(135deg, rgba(38, 14, 82, 0.95) 0%, rgba(55, 20, 107, 0.95) 100%), url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover",
                padding: "160px 0 100px",
                color: "white",
            }}>
                <div className="container partnership-hero-grid">
                    <div>
                        <div style={{ backgroundColor: "white", padding: "15px 25px", borderRadius: "8px", display: "inline-flex", alignItems: "center", gap: "15px", marginBottom: "40px" }}>
                            <span style={{ color: "#333", fontWeight: "700", fontSize: "1.1rem" }}>vwo<br/><span style={{ fontSize: "0.8rem", fontWeight: "normal" }}>Certified Partner</span></span>
                            <span style={{ color: "#d1316b", fontWeight: "800", fontSize: "1.8rem", fontStyle: "italic" }}>VWO</span>
                        </div>
                        <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "25px", color: "white", lineHeight: "1.2" }}>Maximize Conversions & User Experience with VWO</h1>
                        <p style={{ fontSize: "1.2rem", color: "rgba(255, 255, 255, 0.9)", lineHeight: "1.6" }}>Test, optimize, and personalize your website to drive unstoppable growth</p>
                    </div>
                    
                    {/* Book Now Form */}
                    <div style={{ backgroundColor: "#eaeaea", padding: "40px", borderRadius: "12px", boxShadow: "0 20px 50px rgba(0,0,0,0.3)" }}>
                        <h2 style={{ color: "#1a1a1a", fontSize: "2rem", fontWeight: "700", textAlign: "center", marginBottom: "30px" }}>Book Now</h2>
                        <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            <input type="text" placeholder="Your Name" style={{ padding: "15px 20px", borderRadius: "8px", border: "none", width: "100%", fontSize: "1rem" }} />
                            <input type="email" placeholder="Email Address" style={{ padding: "15px 20px", borderRadius: "8px", border: "none", width: "100%", fontSize: "1rem" }} />
                            <input type="tel" placeholder="Phone Number" style={{ padding: "15px 20px", borderRadius: "8px", border: "none", width: "100%", fontSize: "1rem" }} />
                            <button className="btn btn--brand-pill" style={{ width: "100%", marginTop: "10px", fontSize: "0.95rem", justifyContent: "center" }}>
                                BOOK YOUR VWO CONSULTATION
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Why VWO Section */}
            <section style={{ padding: "100px 0", backgroundColor: "white", textAlign: "center" }}>
                <div className="container">
                    <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "10px" }}>Why VWO?</h2>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "15px", marginBottom: "60px" }}>
                        <div style={{ height: "1px", width: "40px", backgroundColor: "#ddd" }}></div>
                        <span style={{ color: "#666", fontSize: "1.2rem", fontWeight: "600" }}>Business Benefits</span>
                        <div style={{ height: "1px", width: "40px", backgroundColor: "#ddd" }}></div>
                    </div>
                    
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
                        {whyVwoData.map((item, idx) => {
                            const gradients = [
                                { bg: "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)", shadow: "rgba(255, 107, 107, 0.4)" },
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
                        <div className="responsive-feature-row">
                            <div>
                                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "15px", color: "white" }}>Visual Editor for A/B Tests</h3>
                                <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)", lineHeight: "1.6" }}>Quickly create design variations without heavy coding.</p>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <img src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-3454628-2918517.png" alt="Visual Editor" style={{ maxWidth: "250px", transition: "transform 0.4s ease" }} className="img-hover-float" />
                            </div>
                        </div>
                        {/* Feature 2 */}
                        <div className="responsive-feature-row">
                            <div style={{ textAlign: "center", order: 1 }}>
                                <img src="https://cdni.iconscout.com/illustration/premium/thumb/data-analysis-3454629-2918518.png" alt="Behavioral Targeting" style={{ maxWidth: "250px", transition: "transform 0.4s ease" }} className="img-hover-float" />
                            </div>
                            <div style={{ order: 2 }}>
                                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "15px", color: "white" }}>Behavioral Targeting & Personalization</h3>
                                <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)", lineHeight: "1.6" }}>Deliver personalized content based on user behavior and preferences.</p>
                            </div>
                        </div>
                        {/* Feature 3 */}
                        <div className="responsive-feature-row">
                            <div>
                                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "15px", color: "white" }}>Detailed Experiment Analytics</h3>
                                <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)", lineHeight: "1.6" }}>Get clear, visual reports on test results and next steps.</p>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <img src="https://cdni.iconscout.com/illustration/premium/thumb/business-dashboard-3454631-2918520.png" alt="Experiment Analytics" style={{ maxWidth: "250px", transition: "transform 0.4s ease" }} className="img-hover-float" />
                            </div>
                        </div>
                        {/* Feature 4 */}
                        <div className="responsive-feature-row">
                            <div style={{ textAlign: "center", order: 1 }}>
                                <img src="https://cdni.iconscout.com/illustration/premium/thumb/data-security-3454634-2918523.png" alt="Advanced Segmentation" style={{ maxWidth: "250px", transition: "transform 0.4s ease" }} className="img-hover-float" />
                            </div>
                            <div style={{ order: 2 }}>
                                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "15px", color: "white" }}>Advanced Segmentation</h3>
                                <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)", lineHeight: "1.6" }}>Hone in on user groups—like returning vs. first-time visitors—to refine campaigns.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Partner Section */}
            <section style={{ padding: "100px 0", backgroundColor: "#fafafa", textAlign: "center" }}>
                <div className="container">
                    <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "10px", color: "var(--color-primary)" }}>Why Partner With Metric Vibes For VWO?</h2>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "15px", marginBottom: "60px" }}>
                        <div style={{ height: "3px", width: "5px", backgroundColor: "var(--color-primary)", borderRadius: "50%" }}></div>
                        <div style={{ height: "3px", width: "5px", backgroundColor: "var(--color-primary)", borderRadius: "50%" }}></div>
                        <div style={{ height: "3px", width: "5px", backgroundColor: "var(--color-primary)", borderRadius: "50%" }}></div>
                    </div>
                    
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
                        {whyPartnerData.map((item, idx) => {
                            const partnerGradients = [
                                { bg: "linear-gradient(135deg, #F857A6 0%, #FF5858 100%)", shadow: "rgba(248, 87, 166, 0.4)" },
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

            {/* FAQ Section (Home page modern style) */}
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
                            Ready to Transform Your Website's Performance?
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
