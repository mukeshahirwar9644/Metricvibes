import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ServerSideTracking() {
    const [openWhyIndex, setOpenWhyIndex] = useState(0);
    const [openFaqIndex, setOpenFaqIndex] = useState(0);

    const toggleWhy = (index) => {
        setOpenWhyIndex(openWhyIndex === index ? -1 : index);
    };

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? -1 : index);
    };

    const whyData = [
        { title: "GDPR Compliance & Data Security", content: "Improve your data security and ensure complete GDPR compliance by controlling exactly what data is sent to third-party vendors." },
        { title: "Unified Tracking for Multiple Platforms", content: "Send a single stream of data to your server, then distribute it to Google Analytics, Facebook, Mixpanel, and other platforms without loading multiple scripts on the client." },
        { title: "First-Party Data Hosting", content: "Run your tracking server on your own subdomain, turning third-party cookies into first-party cookies for better tracking longevity." },
        { title: "Decreased Website Load Time", content: "Remove heavy third-party tracking scripts from your client-side website, significantly improving page load times and Core Web Vitals." },
        { title: "Ad Blocker Resistance", content: "Because requests are sent to your own first-party domain, they are less likely to be blocked by ad blockers, leading to more accurate data." }
    ];

    const faqs = [
        { q: "What is Server Side Tracking (SST)?", a: "Server Side Tracking is a method where your website sends one data stream to a cloud server you control. From there, the server processes and distributes the data to your marketing and analytics vendors, rather than having each vendor's script run directly on the user's browser." },
        { q: "How does SST work?", a: "Instead of the user's browser communicating directly with platforms like Google Analytics or Meta, the browser sends data to your server (e.g., using Google Tag Manager Server-Side). Your server then formats and routes that data to the respective platforms." },
        { q: "What's the difference between Server Side Tracking and Client Side Tracking?", a: "Client-side tracking loads scripts (like Facebook Pixel or GA4 tags) directly in the user's browser, which can slow down the site and be blocked by ad blockers. Server-side tracking moves this process to a secure server, improving speed, data control, and privacy." },
        { q: "What can I do with SST?", a: "You can enrich data with secure CRM information, remove PII before sending it to vendors, improve your website's performance, bypass ad blockers safely for analytics, and build a robust first-party data strategy." },
        { q: "What are the benefits of SST?", a: "Key benefits include improved page load times, enhanced data security, strict privacy compliance, higher data accuracy (bypassing ad blockers), and greater control over what data vendors receive." }
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
                        <span className="section__badge" style={{ marginBottom: "10px", display: "inline-flex", fontSize: "0.82rem", padding: "4px 14px" }}>
                            <i className="fas fa-server"></i> Infrastructure & Tracking
                        </span>
                        <h1 style={{ fontSize: "2.4rem", fontWeight: "800", marginBottom: "10px", color: "white", lineHeight: "1.2", letterSpacing: "-0.01em" }}>
                            Server-Side <span className="text-gradient">Tracking</span>
                        </h1>
                        <p style={{ fontSize: "1.02rem", marginBottom: "16px", color: "rgba(255, 255, 255, 0.9)", lineHeight: "1.5", maxWidth: "720px" }}>
                            Transform Your Digital Campaigns with First-Party Server-Side Monitoring & Privacy Compliance!
                        </p>
                        <Link to="/contact" style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "12px 30px",
                            borderRadius: "30px",
                            background: "#ffffff",
                            color: "#260e52",
                            fontWeight: "700",
                            fontSize: "0.95rem",
                            textDecoration: "none",
                            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                            transition: "all 0.3s ease"
                        }}>
                            Get Free Audit <i className="fas fa-arrow-right" style={{ fontSize: "0.85rem" }}></i>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section style={{ padding: "80px 0", backgroundColor: "white" }}>
                <div className="container">
                    <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "50px", fontWeight: "600" }}>Server-Side Tracking Services</h2>
                    
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "26px" }}>
                        {[
                            { icon: "fa-robot", title: "Bot Traffic Filtration", text: "Bots (both legitimate and malicious) can skew your analytics data. Implementing bot traffic filtration helps identify and exclude non-human traffic from your reports. This ensures accurate insights for decision-making.", bg: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)" },
                            { icon: "fa-arrows-alt", title: "Send Data to Multiple Tools", text: "Businesses use various tools (such as Google Analytics, Mixpanel, or custom solutions) to analyze data. Sending relevant data—such as user interactions, events, or conversions—from your website or app to these tools is crucial for informed decision-making.", bg: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)" },
                            { icon: "fa-users", title: "Conversion Attribution", text: "Attribution models determine how credit is assigned to different touchpoints in a user's journey. Whether it's first-click, last-click, or multi-touch attribution, understanding which channels drive conversions helps optimize marketing efforts.", bg: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)" },
                            { icon: "fa-fingerprint", title: "Identity Resolution", text: "In a multi-device world, identifying the same user across different touchpoints (e.g., mobile, desktop, app) is challenging. Identity resolution involves linking user profiles to create a holistic view, enabling personalized experiences.", bg: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)" },
                            { icon: "fa-balance-scale", title: "Load Balancing", text: "For high-traffic websites or applications, distributing incoming requests across multiple servers (load balancing) ensures optimal performance. It prevents server overload and maintains responsiveness.", bg: "linear-gradient(135deg, #10b981 0%, #059669 100%)" },
                            { icon: "fa-tachometer-alt", title: "Page Load Time Reduction", text: "Slow-loading pages frustrate users and impact SEO. Techniques like image optimization, caching, and minimizing HTTP requests help reduce page load time, enhancing user experience.", bg: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)" }
                        ].map((service, idx) => (
                            <div key={idx} className="card card--gradient-border" style={{
                                padding: "36px 28px",
                                borderRadius: "20px",
                                background: "#ffffff",
                                border: "1px solid rgba(124, 58, 237, 0.12)",
                                boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease"
                            }}>
                                <div className="icon-3d-box" style={{ background: service.bg }}>
                                    <i className={`fas ${service.icon}`}></i>
                                </div>
                                <h3 style={{ fontSize: "1.25rem", marginBottom: "12px", fontWeight: "700", color: "#0f172a" }}>{service.title}</h3>
                                <p style={{ color: "#64748b", fontSize: "0.92rem", lineHeight: "1.65", margin: 0 }}>{service.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Section */}
            <section style={{ backgroundColor: "var(--color-primary)", padding: "100px 0", color: "white" }}>
                <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
                    <div>
                        <h2 style={{ fontSize: "2.5rem", marginBottom: "40px", fontWeight: "600" }}>Why Your Business Needs Server Side Tracking</h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                            {whyData.map((item, index) => (
                                <div key={index} style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", overflow: "hidden", backgroundColor: "rgba(255,255,255,0.05)" }}>
                                    <div 
                                        onClick={() => toggleWhy(index)}
                                        style={{ padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", fontWeight: "600" }}
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
                            <div style={{ backgroundColor: "rgba(255,255,255,0.1)", padding: "30px", borderRadius: "10px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", height: "150px" }}>
                                <span style={{ fontWeight: "600", textTransform: "uppercase" }}>GDPR<br/>Compliance &<br/>Data Security</span>
                            </div>
                            <div style={{ backgroundColor: "rgba(255,255,255,0.1)", padding: "30px", borderRadius: "10px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", height: "150px" }}>
                                <span style={{ fontWeight: "600", textTransform: "uppercase" }}>First-Party<br/>Data Hosting</span>
                            </div>
                            <div style={{ backgroundColor: "rgba(255,255,255,0.1)", padding: "30px", borderRadius: "10px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", height: "150px" }}>
                                <span style={{ fontWeight: "600", textTransform: "uppercase" }}>Unified Tracking<br/>for Multiple<br/>Platforms</span>
                            </div>
                            <div style={{ backgroundColor: "rgba(255,255,255,0.1)", padding: "30px", borderRadius: "10px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", height: "150px" }}>
                                <span style={{ fontWeight: "600", textTransform: "uppercase" }}>Ad Blocker<br/>Resistance</span>
                            </div>
                        </div>
                        {/* Center overlay box */}
                        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "rgba(255,255,255,0.9)", color: "var(--color-primary)", padding: "20px 30px", borderRadius: "8px", fontWeight: "700", textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
                            DECREASED<br/>WEBSITE<br/>LOAD TIME
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Blogs */}
            <section style={{ padding: "80px 0", backgroundColor: "#f9f9fc" }}>
                <div className="container">
                    <h2 style={{ textAlign: "center", fontSize: "2.2rem", marginBottom: "50px", fontWeight: "700" }}>Related Blogs</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "25px" }}>
                        {[
                            { title: "Master Google Privacy Sandbox: Thrive in a Cookie-Free World", excerpt: "Explore Google Privacy Sandbox: The future of privacy-first ad targeting. Learn how to adapt to", date: "October 27, 2024", img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                            { title: "Unlock More ROI with Server-Side Tracking in E-Commerce", excerpt: "Unlock more ROI with Server Side Tracking in E-Commerce. Improve data accuracy, boost conversions, and enhance", date: "October 8, 2024", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                            { title: "How Server-Side Tagging Improve Website Efficiency And Security", excerpt: "Discover how server side tagging improve website speed, enhance user experience, and boost conversion rates by", date: "August 30, 2024", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                            { title: "How to do Historical Data Migration from Google Analytics 3", excerpt: "Ensure smooth data migration from Google Analytics 3 before its deprecation. Learn key methods like", date: "February 16, 2024", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
                        ].map((blog, idx) => (
                            <div key={idx} style={{ backgroundColor: "white", borderRadius: "12px", overflow: "hidden", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", border: "1px solid #eaeaea" }}>
                                <div style={{ height: "160px", backgroundImage: `url(${blog.img})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                                <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: "1" }}>
                                    <h3 style={{ fontSize: "1.1rem", marginBottom: "15px", color: "var(--color-primary)", fontWeight: "700", lineHeight: "1.4" }}>{blog.title}</h3>
                                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "20px", flex: "1", lineHeight: "1.6" }}>{blog.excerpt}</p>
                                    <Link to="/blog" style={{ fontSize: "0.85rem", fontWeight: "700", color: "var(--color-primary)", textDecoration: "none", marginBottom: "20px", display: "inline-block", textTransform: "uppercase" }}>READ MORE »</Link>
                                    <div style={{ fontSize: "0.8rem", color: "#999", borderTop: "1px solid #eee", paddingTop: "15px", marginTop: "auto" }}>
                                        {blog.date} &nbsp;|&nbsp; No Comments
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
                    <h2 style={{ textAlign: "center", fontSize: "2.2rem", marginBottom: "40px", fontWeight: "700" }}>Frequently Asked Questions</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                        {faqs.map((faq, idx) => (
                            <div key={idx} style={{ border: "1px solid #eaeaea", borderRadius: "8px", overflow: "hidden" }}>
                                <div 
                                    onClick={() => toggleFaq(idx)}
                                    style={{ padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", backgroundColor: openFaqIndex === idx ? "#fafafa" : "white" }}
                                >
                                    <div style={{ fontWeight: "600", display: "flex", gap: "15px", alignItems: "center" }}>
                                        <span style={{ fontSize: "1.2rem" }}>+</span>
                                        {faq.q}
                                    </div>
                                </div>
                                {openFaqIndex === idx && (
                                    <div style={{ padding: "20px 20px 20px 50px", color: "var(--text-secondary)", lineHeight: "1.6", backgroundColor: "#fafafa", borderTop: "1px solid #eaeaea" }}>
                                        {faq.a}
                                    </div>
                                )}
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
