import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

export default function DataTrackingSecurity() {
    const { page } = useParams();
    const navigate = useNavigate();
    const currentPage = page ? parseInt(page, 10) : 1;

    const [openWhyIndex, setOpenWhyIndex] = useState(-1);
    const [openFaqIndex, setOpenFaqIndex] = useState(-1);

    const toggleWhy = (index) => {
        setOpenWhyIndex(openWhyIndex === index ? -1 : index);
    };

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? -1 : index);
    };

    const servicesData = [
        { title: "Website / App Tracking", text: "Website and app tracking involves monitoring user interactions, behavior, and engagement on digital platforms." },
        { title: "Marketing Campaign", text: "Marketing campaigns are strategic efforts to promote products or services. Campaign tracking measures the effectiveness of marketing channels (e.g., email, social media, ads) in driving user actions (clicks, conversions)." },
        { title: "Consent Mode", text: "Consent mode refers to managing user consent for data collection and tracking. It ensures compliance with privacy regulations (e.g., GDPR) by adjusting tracking based on user preferences." },
        { title: "First Party Tracking", text: "First-party tracking involves collecting data directly from your website or app. It's reliable and doesn't rely on third-party cookies or external domains." },
        { title: "CRM, Offline Data Tracking", text: "Customer Relationship Management (CRM) systems track interactions with customers. Offline data tracking integrates data from in-store purchases, call centers, or other non-digital channels." }
    ];

    const whyData = [
        { 
            title: "Monitoring Website and App Activity",
            content: "Analytics tools provide real-time insights into user behavior on websites and apps. By tracking page views, session duration, bounce rates, and other key metrics, businesses can identify pain points, improve user experience, and optimize conversion funnels."
        },
        { 
            title: "Promotional Initiative",
            content: "Analytics enable businesses to track and measure the performance of their promotional campaigns across various channels. This ensures marketing budgets are spent efficiently, maximizing ROI by attributing conversions to the correct initiatives."
        },
        { 
            title: "Privacy Preference Management",
            content: "Analytics platforms assist businesses in managing user privacy preferences and ensuring compliance with regulations like GDPR and CCPA. Data tracking allows businesses to log consent, track user opt-ins, and manage cookies, ensuring that they respect privacy preferences while still delivering personalized content."
        },
        { 
            title: "Direct Data Collection",
            content: "Data tracking tools streamline the collection of direct data from users through forms, surveys, or interactions. By analyzing this data, businesses can better understand customer preferences, gather feedback, and use these insights to drive product development and customer satisfaction."
        },
        { 
            title: "Customer Relationship Management (CRM) and Offline Data Monitoring",
            content: "Analytics integrates CRM systems with offline data tracking to provide a holistic view of customer interactions. This helps businesses track both online and offline customer behavior, enabling more personalized engagement, improved loyalty programs, and a consistent customer experience across all touchpoints."
        }
    ];

    const allBlogsData = [
        // Page 1
        { title: "Integrating GA4 with GTM for Enhanced E-commerce Tracking Solutions", text: "Learn how integrating Google Analytics 4 (GA4) with Google Tag Manager (GTM) enhances e-commerce tracking,", date: "February 2, 2025", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
        { title: "Unlock Visitor Behavior: Master VWO Heatmap & Session Recordings", text: "Use VWO heatmap & session recordings to analyze user behavior, connect with customers, meet goals,", date: "January 14, 2025", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
        { title: "How to Master Analytics Practices for DPDP Compliance", text: "Learn how businesses are adapting their analytics practices for DPDP requirements, focusing on data privacy,", date: "December 25, 2024", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
        { title: "The impact of Emerging privacy regulations on analytics practices", text: "Learn how emerging privacy regulations on analytics practices, like GDPR and CCPA, increase costs, limit", date: "December 5, 2024", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
        // Page 2
        { title: "How Privacy Regulations are Shaping Digital Marketing in 2025", text: "Privacy regulations are shaping digital marketing by enforcing user consent, limiting data collection, and driving", date: "November 16, 2024", img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
        { title: "Unlock Ad Success With Google Consent Mode On Ad Campaign", text: "Learn how Google Consent Mode on Ad Campaign balances privacy with marketing, recovering up to", date: "September 18, 2024", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
        { title: "Google is not depreciating third-party cookies", text: "Google is not depreciating third-party cookies but will enhance privacy controls, offering users more choices", date: "July 21, 2024", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
        { title: "Prepare for a Cookieless World: Powerful Strategies & Tips", text: "Prepare for a Cookieless World: Discover how GenAI can revolutionize personaliztn, boost engagement, and address", date: "April 15, 2024", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
        // Page 3
        { title: "Do ad blockers really block data to Google Analytics?", text: "Ad blockers are used by 42.7% of global internet users as of 2023, leading to significant", date: "March 7, 2024", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
    ];

    const itemsPerPage = 4;
    const totalPages = Math.ceil(allBlogsData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentBlogs = allBlogsData.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            const url = newPage === 1 ? '/data-tracking-security' : `/data-tracking-security/${newPage}`;
            navigate(url, { state: { preventScroll: true } });
            setTimeout(() => {
                window.scrollTo({ top: document.getElementById('related-blogs').offsetTop - 100, behavior: 'smooth' });
            }, 10);
        }
    };

    const faqs = [
        { q: "What is data reporting?", a: "Data reporting involves organizing and presenting data into summaries to monitor how different areas of a business are performing." },
        { q: "Why is data reporting important?", a: "It is important because it provides actionable insights, helps track key performance indicators (KPIs), and supports data-driven decision making." },
        { q: "What are the types of data reporting safeguards?", a: "Safeguards include role-based access control, encryption, masking sensitive information, and continuous security auditing." },
        { q: "What is data security?", a: "Data security refers to the protective measures employed to secure data from unapproved access and to preserve data confidentiality, integrity, and availability." },
        { q: "Why is data security important?", a: "Data security is critical to prevent data breaches, protect customer privacy, comply with regulations (like GDPR), and maintain brand reputation." }
    ];

    return (
        <div className="subpage-wrapper">
            {/* Hero Section */}
            <section style={{
                background: "linear-gradient(135deg, rgba(38, 14, 82, 0.95) 0%, rgba(59, 19, 120, 0.95) 100%), url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover",
                padding: "135px 0 24px",
                color: "white",
                textAlign: "left",
                position: "relative"
            }}>
                <div className="container">
                    <div style={{ maxWidth: "800px" }}>
                        <span className="section__badge" style={{ marginBottom: "14px", display: "inline-flex" }}>
                            <i className="fas fa-shield-alt"></i> Data Security & Audit
                        </span>
                        <h1 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "14px", color: "white", lineHeight: "1.25", letterSpacing: "-0.01em" }}>
                            Analytics Tracking & <span className="text-gradient">Security</span>
                        </h1>
                        <p style={{ fontSize: "1.08rem", marginBottom: "24px", color: "rgba(255, 255, 255, 0.9)", lineHeight: "1.6", maxWidth: "700px" }}>
                            The Importance of Data Tracking and Security in Modern Business
                        </p>
                        <Link to="/contact" style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "12px 32px",
                            borderRadius: "30px",
                            background: "#ffffff",
                            color: "#260e52",
                            fontWeight: "700",
                            fontSize: "0.95rem",
                            textDecoration: "none",
                            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                            transition: "all 0.3s ease"
                        }}>
                            Get Free Audit <i className="fas fa-arrow-right" style={{ fontSize: "0.82rem" }}></i>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section style={{ padding: "80px 0", backgroundColor: "white" }}>
                <div className="container">
                    <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "50px", fontWeight: "600" }}>Analytics Tracking & Security Services</h2>
                    
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "26px", justifyContent: "center" }}>
                        {servicesData.map((service, idx) => {
                            const bgs = [
                                "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
                                "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                                "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                                "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)",
                                "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
                                "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)"
                            ];
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
                                    <div className="icon-3d-box" style={{ background: bgs[idx % bgs.length] }}>
                                        <i className="fas fa-shield-alt"></i>
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
                        <h2 style={{ fontSize: "2.5rem", marginBottom: "40px", fontWeight: "600", color: "white" }}>Why Your Business Need Analytics Tracking & Security Services</h2>
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
                                MONITORING<br/>WEBSITE AND<br/>APP ACTIVITY
                            </div>
                            <div style={{ backgroundColor: "#502c84", color: "white", padding: "30px", borderRadius: "10px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", height: "180px", fontWeight: "700", fontSize: "1.2rem", textTransform: "uppercase" }}>
                                PROMOTIONAL<br/>INITIATIVE
                            </div>
                            <div style={{ backgroundColor: "#502c84", color: "white", padding: "30px", borderRadius: "10px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", height: "180px", fontWeight: "700", fontSize: "1.2rem", textTransform: "uppercase" }}>
                                DIRECT DATA<br/>COLLECTION
                            </div>
                            <div style={{ backgroundColor: "#cca8ff", color: "var(--color-primary)", padding: "30px", borderRadius: "10px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", height: "180px", fontWeight: "700", fontSize: "1.2rem", textTransform: "uppercase" }}>
                                OFFLINE DATA<br/>MONITORING
                            </div>
                        </div>
                        {/* Center overlay box */}
                        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "#eaddff", color: "var(--color-primary)", padding: "30px 40px", borderRadius: "8px", fontWeight: "700", fontSize: "1.2rem", textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.3)", zIndex: 10 }}>
                            PRIVACY<br/>PREFERENCE<br/>MANAGEMENT
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Blogs */}
            <section id="related-blogs" style={{ padding: "80px 0", backgroundColor: "#fafafa" }}>
                <div className="container">
                    <h2 style={{ textAlign: "center", fontSize: "2.2rem", marginBottom: "50px", fontWeight: "700" }}>Related Blogs</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "25px" }}>
                        {currentBlogs.map((blog, idx) => (
                            <div key={idx} style={{ backgroundColor: "white", borderRadius: "12px", overflow: "hidden", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", border: "1px solid #eaeaea" }}>
                                <div style={{ height: "180px", backgroundImage: `url(${blog.img})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                                <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: "1" }}>
                                    <h3 style={{ fontSize: "1.1rem", marginBottom: "15px", color: "var(--color-primary)", fontWeight: "700", lineHeight: "1.4" }}>{blog.title}</h3>
                                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "20px", flex: "1", lineHeight: "1.6" }}>{blog.text}</p>
                                    <Link to="/blog" style={{ fontSize: "0.85rem", fontWeight: "700", color: "var(--color-primary)", textDecoration: "none", marginBottom: "20px", display: "inline-block", textTransform: "uppercase" }}>READ MORE »</Link>
                                    <div style={{ fontSize: "0.8rem", color: "#999", borderTop: "1px solid #eee", paddingTop: "15px", marginTop: "auto" }}>
                                        {blog.date} &nbsp;&nbsp; No Comments
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px", marginTop: "40px", fontSize: "0.95rem", color: "var(--color-primary)", fontWeight: "600" }}>
                            {currentPage > 1 ? (
                                <span onClick={() => handlePageChange(currentPage - 1)} style={{ cursor: "pointer" }}>« Previous</span>
                            ) : (
                                <span style={{ color: "#ccc", cursor: "not-allowed" }}>« Previous</span>
                            )}
                            
                            {[...Array(totalPages)].map((_, i) => {
                                const pageNum = i + 1;
                                return (
                                    <span 
                                        key={pageNum}
                                        onClick={() => handlePageChange(pageNum)}
                                        style={{ 
                                            backgroundColor: currentPage === pageNum ? "rgba(134, 59, 255, 0.1)" : "transparent",
                                            cursor: "pointer", 
                                            width: "30px", 
                                            height: "30px", 
                                            display: "flex", 
                                            alignItems: "center", 
                                            justifyContent: "center", 
                                            borderRadius: "50%" 
                                        }}
                                    >
                                        {pageNum}
                                    </span>
                                );
                            })}

                            {currentPage < totalPages ? (
                                <span onClick={() => handlePageChange(currentPage + 1)} style={{ cursor: "pointer" }}>Next »</span>
                            ) : (
                                <span style={{ color: "#ccc", cursor: "not-allowed" }}>Next »</span>
                            )}
                        </div>
                    )}
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

            {/* Bottom CTA */}
            <section style={{ padding: "60px 0", backgroundColor: "#fafafa" }}>
                <div className="container">
                    <div style={{
                        background: "linear-gradient(135deg, #1A1333 0%, #0F0A1F 100%)",
                        borderRadius: "24px",
                        padding: "70px 60px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        position: "relative",
                        overflow: "hidden",
                        flexWrap: "wrap",
                        gap: "40px",
                        boxShadow: "0 20px 40px rgba(15, 10, 31, 0.15)"
                    }}>
                        {/* Abstract glow effects */}
                        <div style={{ position: "absolute", top: "-50px", left: "-50px", width: "200px", height: "200px", background: "rgba(120, 81, 169, 0.2)", filter: "blur(50px)", borderRadius: "50%" }}></div>
                        <div style={{ position: "absolute", bottom: "-50px", right: "-50px", width: "300px", height: "300px", background: "rgba(161, 140, 255, 0.15)", filter: "blur(60px)", borderRadius: "50%" }}></div>
                        
                        <div style={{ position: "relative", zIndex: 2, maxWidth: "550px" }}>
                            <h2 style={{ color: "white", fontSize: "2.6rem", fontWeight: "700", lineHeight: "1.2", marginBottom: "20px" }}>
                                Ready To Boost Your Website's Performance?
                            </h2>
                            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", lineHeight: "1.6", margin: 0 }}>
                                Take the first step towards data-driven success with our comprehensive audit and personalized growth strategy.
                            </p>
                        </div>
                        
                        <div style={{ position: "relative", zIndex: 2 }}>
                            <a href="/contact" className="btn" style={{ 
                                background: "linear-gradient(90deg, #A18CFF 0%, #8063F5 100%)", 
                                color: "white", 
                                fontWeight: "700", 
                                padding: "18px 45px", 
                                borderRadius: "40px", 
                                fontSize: "1.1rem", 
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                textDecoration: "none",
                                boxShadow: "0 10px 30px rgba(128, 99, 245, 0.4)",
                                border: "none",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease"
                            }}>
                                Get Free Audit <i className="fas fa-arrow-right" style={{ fontSize: "0.9rem" }}></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
