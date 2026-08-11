import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BusinessIntelligence() {
    const [openWhyIndex, setOpenWhyIndex] = useState(-1);
    const [openFaqIndex, setOpenFaqIndex] = useState(-1);

    const toggleWhy = (index) => {
        setOpenWhyIndex(openWhyIndex === index ? -1 : index);
    };

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? -1 : index);
    };

    const servicesData = [
        { title: "Market Mix Modelling", text: "MMM analyzes sales and marketing data to estimate the impact of marketing activities on sales." },
        { title: "Lead Scoring", text: "Lead scoring assigns numerical values to leads based on attributes like professional information and website engagement." },
        { title: "Propensity Modelling", text: "Propensity modeling predicts the likelihood of specific events (e.g., purchases) based on historical behavior." },
        { title: "Revenue Prediction", text: "Revenue forecasting estimates future income by analyzing historical data, market trends, and other factors." },
        { title: "User Segmentation", text: "User segmentation categorizes customers based on shared characteristics (e.g., demographics, behavior)." },
        { title: "Attribution Modelling", text: "Attribution models allocate credit to different touchpoints in a customer's journey." }
    ];

    const whyData = [
        { 
            title: "Better Upselling",
            content: "Business Intelligence allows you to analyze customer purchase history and behavior patterns, identifying prime opportunities for targeted upselling and cross-selling campaigns that maximize customer lifetime value."
        },
        { 
            title: "Better Strategic Planning",
            content: "By centralizing data from multiple sources, BI provides comprehensive dashboards and reports that empower leadership to make informed, data-driven decisions for long-term strategic planning."
        },
        { 
            title: "Optimizing Marketing Spend",
            content: "BI tools help you pinpoint which channels and campaigns are driving the most conversions, allowing you to reallocate marketing budgets efficiently and eliminate wasted spend on underperforming initiatives."
        },
        { 
            title: "Measuring ROAS",
            content: "Accurately track your Return on Ad Spend (ROAS) across all digital platforms. BI integrates cost data with conversion metrics to provide a clear, real-time picture of campaign profitability."
        },
        { 
            title: "User Segmentation",
            content: "Dive deep into your audience data to create highly granular user segments. This enables personalized marketing messages, tailored product recommendations, and significantly improved engagement rates."
        }
    ];

    const blogsData = [
        { title: "Leverage Analytics for Directional Insights and Not Absolute Accuracy", text: "Discover why businesses should use analytics for directional insights rather than chase perfect accuracy. Learn", date: "April 21, 2025", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
        { title: "Unlock the Power of GenAI for Personalized Experiences", text: "GenAI for Personalized Experiences creates tailored interactions, boosting engagement by 60% and conversions by 20%,", date: "June 12, 2024", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
        { title: "Prepare for a Cookieless World: Powerful Strategies & Tips", text: "Prepare for a Cookieless World: Discover how GenAI can revolutionize personaliztn, boost engagement, and address", date: "April 15, 2024", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
        { title: "Why Businesses Need To Be Personalize ?", text: "Discover why businesses need to be personalize. MetricVibes helps tailor customer experiences with AI, boosting", date: "March 26, 2024", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
    ];

    const faqs = [
        { q: "What is Business Intelligence?", a: "Business Intelligence (BI) comprises the strategies and technologies used by enterprises for the data analysis of business information. It provides historical, current, and predictive views of business operations." },
        { q: "Why is BI important for businesses?", a: "BI is crucial because it helps organizations make better decisions by showing present and historical data within their business context. Analysts can leverage BI to provide performance and competitor benchmarks to make the organization run smoother and more efficiently." },
        { q: "What types of data can BI analyze?", a: "BI systems can analyze structured and unstructured data from multiple sources including CRM systems, ERP software, marketing platforms, social media, flat files, and web analytics tools." },
        { q: "How does BI impact decision-making?", a: "By providing accurate, real-time data visualizations and reports, BI eliminates guesswork. It allows leaders to identify trends, spot inefficiencies, and make proactive decisions backed by hard data." },
        { q: "What challenges do businesses face when implementing BI?", a: "Common challenges include data quality issues, integration complexities with existing systems, lack of user adoption, data security concerns, and the need for specialized skills to build and maintain the infrastructure." }
    ];

    return (
        <div className="subpage-wrapper">
            {/* Hero Section */}
            <section style={{
                background: "linear-gradient(135deg, rgba(38, 14, 82, 0.95) 0%, rgba(59, 19, 120, 0.95) 100%), url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover",
                padding: "92px 0 16px",
                color: "white",
                textAlign: "left",
                position: "relative"
            }}>
                <div className="container">
                    <div style={{ maxWidth: "800px" }}>
                        <span className="section__badge" style={{ marginBottom: "6px", display: "inline-flex", fontSize: "0.72rem", padding: "2px 10px" }}>
                            <i className="fas fa-chart-bar"></i> Analytics & Dashboards
                        </span>
                        <h1 style={{ fontSize: "1.95rem", fontWeight: "800", marginBottom: "6px", color: "white", lineHeight: "1.25", letterSpacing: "-0.01em" }}>
                            Business <span className="text-gradient">Intelligence</span>
                        </h1>
                        <p style={{ fontSize: "0.92rem", marginBottom: "12px", color: "rgba(255, 255, 255, 0.9)", lineHeight: "1.45", maxWidth: "700px" }}>
                            Interactive dashboards & executive analytics reporting in Looker Studio, PowerBI & Tableau.
                        </p>
                        <Link to="/contact" style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            padding: "7px 20px",
                            borderRadius: "30px",
                            background: "#ffffff",
                            color: "#260e52",
                            fontWeight: "700",
                            fontSize: "0.85rem",
                            textDecoration: "none",
                            boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
                            transition: "all 0.3s ease"
                        }}>
                            Get Free Audit <i className="fas fa-arrow-right" style={{ fontSize: "0.75rem" }}></i>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section style={{ padding: "80px 0", backgroundColor: "white" }}>
                <div className="container">
                    <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "50px", fontWeight: "600" }}>Business Intelligence Services</h2>
                    
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "26px", justifyContent: "center" }}>
                        {servicesData.map((service, idx) => {
                            const icons = [
                                { icon: "fas fa-chart-line", bg: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)" },
                                { icon: "fas fa-bullseye", bg: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)" },
                                { icon: "fas fa-brain", bg: "linear-gradient(135deg, #10b981 0%, #059669 100%)" },
                                { icon: "fas fa-coins", bg: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)" },
                                { icon: "fas fa-users-gear", bg: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)" },
                                { icon: "fas fa-diagram-project", bg: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)" }
                            ];
                            const itemIcon = icons[idx % icons.length];
                            return (
                                <div key={idx} className="card card--gradient-border" style={{ 
                                    padding: "36px 28px", 
                                    borderRadius: "20px", 
                                    border: "1px solid rgba(124, 58, 237, 0.12)", 
                                    textAlign: "center", 
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.04)", 
                                    backgroundColor: "white",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center"
                                }}>
                                    <div className="icon-3d-box" style={{ background: itemIcon.bg }}>
                                        <i className={itemIcon.icon}></i>
                                    </div>
                                    <h3 style={{ fontSize: "1.25rem", marginBottom: "12px", fontWeight: "700", color: "#0f172a" }}>{service.title}</h3>
                                    <p style={{ color: "#64748b", fontSize: "0.92rem", lineHeight: "1.65", margin: 0 }}>{service.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Section */}
            <section style={{ backgroundColor: "var(--color-primary)", padding: "100px 0", color: "white" }}>
                <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
                    <div>
                        <h2 style={{ fontSize: "2.5rem", marginBottom: "40px", fontWeight: "600", color: "white" }}>Why Your Business Needs Business Intelligence Services</h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                            {whyData.map((item, index) => (
                                <div key={index} style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", overflow: "hidden", backgroundColor: "rgba(255,255,255,0.05)" }}>
                                    <div 
                                        onClick={() => toggleWhy(index)}
                                        style={{ padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", fontWeight: "600", backgroundColor: openWhyIndex === index ? "rgba(255,255,255,0.05)" : "transparent" }}
                                    >
                                        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                            <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>+</span>
                                            {item.title}
                                        </div>
                                        <i className={`fas fa-chevron-${openWhyIndex === index ? 'up' : 'right'}`} style={{ fontSize: "0.8rem" }}></i>
                                    </div>
                                    {openWhyIndex === index && (
                                        <div style={{ padding: "0 20px 20px 50px", color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                                            {item.content}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{ position: "relative" }}>
                        {/* Bento Grid visualization mimicking the screenshot */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
                            <div style={{ backgroundColor: "#cca8ff", color: "var(--color-primary)", padding: "30px", borderRadius: "10px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", height: "180px", fontWeight: "700", fontSize: "1.2rem", textTransform: "uppercase" }}>
                                BETTER<br/>UPSELLING
                            </div>
                            <div style={{ backgroundColor: "#502c84", color: "white", padding: "30px", borderRadius: "10px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", height: "180px", fontWeight: "700", fontSize: "1.2rem", textTransform: "uppercase" }}>
                                BETTER STRATEGIC<br/>PLANNING
                            </div>
                            <div style={{ backgroundColor: "#502c84", color: "white", padding: "30px", borderRadius: "10px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", height: "180px", fontWeight: "700", fontSize: "1.2rem", textTransform: "uppercase" }}>
                                OPTIMIZING<br/>MARKETING SPENT
                            </div>
                            <div style={{ backgroundColor: "#cca8ff", color: "var(--color-primary)", padding: "30px", borderRadius: "10px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", height: "180px", fontWeight: "700", fontSize: "1.2rem", textTransform: "uppercase" }}>
                                MEASURING<br/>ROAS
                            </div>
                        </div>
                        {/* Center overlay box */}
                        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "#eaddff", color: "var(--color-primary)", padding: "30px 40px", borderRadius: "8px", fontWeight: "700", fontSize: "1.2rem", textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.3)", zIndex: 10 }}>
                            USER<br/>SEGMENTATION
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Blogs */}
            <section id="related-blogs" style={{ padding: "80px 0", backgroundColor: "#fafafa" }}>
                <div className="container">
                    <h2 style={{ textAlign: "center", fontSize: "2.2rem", marginBottom: "50px", fontWeight: "700" }}>Related Blogs</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "25px" }}>
                        {blogsData.map((blog, idx) => (
                            <div key={idx} style={{ backgroundColor: "white", borderRadius: "12px", overflow: "hidden", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", border: "1px solid #eaeaea" }}>
                                <div style={{ height: "180px", backgroundImage: `url(${blog.img})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                                <div style={{ padding: "25px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                                    <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "15px", color: "var(--color-primary)", lineHeight: "1.4" }}>{blog.title}</h3>
                                    <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "20px", flexGrow: 1 }}>{blog.text}...</p>
                                    <Link to="/blogs" style={{ color: "var(--color-primary)", fontWeight: "700", fontSize: "0.85rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }}>
                                        READ MORE <i className="fas fa-angle-double-right" style={{ fontSize: "0.75rem" }}></i>
                                    </Link>
                                    <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "1px solid #eaeaea", display: "flex", justifyContent: "space-between", color: "#999", fontSize: "0.8rem" }}>
                                        <span>{blog.date}</span>
                                        <span>|</span>
                                        <span>No Comments</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
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
                        background: "linear-gradient(135deg, rgba(59, 44, 89, 0.95) 0%, rgba(76, 40, 130, 0.95) 100%), url('https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover",
                        padding: "60px 50px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "30px",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                    }}>
                        <h2 style={{ color: "white", fontSize: "2.2rem", fontWeight: "600", margin: 0, maxWidth: "500px", lineHeight: "1.3" }}>
                            Ready To Boost Your Website's Performance ?
                        </h2>
                        <a href="/contact" className="btn" style={{ backgroundColor: "white", color: "var(--color-primary)", fontWeight: "700", padding: "16px 40px", borderRadius: "30px", textDecoration: "none", boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}>
                            Get Free Audit
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
