import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const caseStudiesDetailsData = {
    "how-metric-vibes-enhanced-mobile-app-conversions": {
        stats: [
            { value: "12%", label: "increase in sign-ups" },
            { value: "7%", label: "increase in revenue" }
        ],
        title: "How Metric Vibes Enhanced Mobile App Conversions Through Personalized User Experiences",
        about: "The client is in a popular second hand retail store in UK. They seek convenience, value, and quality, often leveraging technology for research. Their preferences are influenced by brand reputation, price, and sustainability.",
        challenge: "Client was struggling to get registrations on their app. Most of the users were either bouncing from the homepage or from the registration page. They were looking to see what changes in the browsing behavior will lead the user to register and hence, convert on the app.",
        goals: [
            "Increase sign-ups.",
            "Increase revenue.",
            "Increase brand uplift."
        ],
        results: [
            "12% increase in sign-ups.",
            "7% increase in revenue.",
            "8% brand uplift."
        ],
        tools: ["vwo", "android", "ga4", "mixpanel"]
    },
    "how-metric-vibes-turned-attribution-loss": {
        stats: [
            { value: "13%", label: "decrease in marketing spend" },
            { value: "26%", label: "decrease in conversion time" }
        ],
        title: "How Metric Vibes Turned Attribution Loss into Measurable Conversions",
        about: "The Inmates Photo Sharing App is designed to bridge the gap between incarcerated individuals and their families, providing a secure platform for sharing photos and messages. This innovative app aims to foster relationships, enhance communication, and promote mental health by allowing inmates to share life moments and receive support from their families and friends.",
        challenge: "The App (android and iOS) was running campaigns in Google Ads, Apple ads, and meta to acquire and engage users. They were facing issues in:\n• Attributing the users to the correct Google Ads campaign,\n• Associating the revenue to the users in the app.",
        goals: [
            "Correct attribution of the marketing campaign.",
            "Optimizing marketing spend.",
            "Reduce conversion time."
        ],
        results: [
            "13% decrease in marketing spend.",
            "26% decrease in conversion time."
        ],
        tools: ["adjust", "android", "ga4"]
    },
    "elevating-digital-strategies-for-an-aviation-client": {
        stats: [
            { value: "4.2%", label: "increase in conversion rate" },
            { value: "7.5%", label: "increase in digital wallet share" }
        ],
        title: "Elevating Digital Strategies for an Aviation Client",
        about: "The client is a leader in global business aviation, connects to over 1900 airports and serves 367,000 passengers annually. Traditionally dependent on offline sales, the company invested heavily in its website and mobile app to boost digital adoption and online revenue.",
        challenge: "Challenges include optimizing flight route planning for their 200 aircraft, improving customer engagement to recover $200 million in potential online revenue, understanding marketing ROI to allocate budgets effectively and optimizing conversion rate.",
        goals: [
            "Optimizing the conversion rate.",
            "Optimizing marketing spend.",
            "Increasing adoption."
        ],
        results: [
            "4.2% increase in conversion rate",
            "19.5% decrease in marketing spend",
            "7.5% increase in digital wallet share",
            "8% increase in in-flight meal revenue"
        ],
        tools: ["mixpanel", "ga4", "looker-studio", "android"],
        testimonial: {
            name: "Jisoo Hong",
            role: "Product Manager - VistaJet",
            avatar: "/assets/img/team/jisoo.jpg",
            quote: "Their implementation on our website, android, and iOS apps empowered me to generate powerful reports for stakeholders, driving crucial decisions in our flight route planning and app/web enhancements for lead conversion. Moreover, their insights into lead attribution and ROI optimization significantly enhanced our marketing spend efficiency."
        }
    },
    "how-metric-vibes-approach-optimized-drop-offs": {
        stats: [
            { value: "9.3%", label: "Increase in conversion rate" },
            { value: "27%", label: "increase in traffic" }
        ],
        title: "How Metric Vibes approach optimized drop-offs",
        about: "A leading high-tech company in the ticketing industry, our client provides a platform for buyers and sellers of tickets to live entertainment events. They connect users to over 100,000 concerts, sports, and theater events worldwide. All tickets are listed by professional ticket-selling companies and trusted sellers.",
        challenge: "A leading online ticket marketplace generating millions in annual revenue, faced significant challenges in user behavior analysis across their six global websites. Key issues included:\n\n1. High cart abandonment rates at the checkout stage.\n2. Significant drop-offs from search and ticket booking pages before reaching the checkout.",
        goals: [
            "Optimizing the conversion rate.",
            "Minimizing the drop-offs."
        ],
        results: [
            "9.3% increase in conversion rate",
            "Reduced drop-offs by 8%",
            "27% increase in traffic"
        ],
        tools: ["ga4", "mixpanel", "gtm", "android", "looker-studio"],
        testimonial: {
            name: "Alona Smahliuk",
            role: "Technology Coordinator - Ticket Network",
            avatar: "/assets/img/team/Eugene Paik.jpg",
            quote: "Metric Vibes was extremely helpful in consulting, creating a documented plan, and executing our GA4 migration for 6 sites. They demonstrated strong expertise in analytics and were able to provide insights to our team. We would work with them again"
        }
    }
};

import { API_BASE_URL } from '../config/api';

export default function CaseStudyDetail() {
    const { slug } = useParams();
    const [studyData, setStudyData] = useState(null);

    const fallbackStudy = caseStudiesDetailsData[slug] || caseStudiesDetailsData["how-metric-vibes-enhanced-mobile-app-conversions"];
    const currentStudy = studyData || fallbackStudy;

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/case-studies`)
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success' && data.data) {
                    const found = data.data.find(s => s.slug === slug);
                    if (found) {
                        // Parse string goals/results/tools if needed
                        const parsedGoals = typeof found.goals === 'string' ? found.goals.split('\n').filter(Boolean) : (found.goals || fallbackStudy.goals);
                        const parsedResults = typeof found.results === 'string' ? found.results.split('\n').filter(Boolean) : (found.results || fallbackStudy.results);
                        const parsedTools = typeof found.tools === 'string' ? found.tools.split(',').map(t => t.trim()).filter(Boolean) : (found.tools || fallbackStudy.tools);

                        const stats = [
                            found.metric_1_value ? { value: found.metric_1_value, label: found.metric_1_label } : null,
                            found.metric_2_value ? { value: found.metric_2_value, label: found.metric_2_label } : null,
                            found.metric_3_value ? { value: found.metric_3_value, label: found.metric_3_label } : null,
                        ].filter(Boolean);

                        setStudyData({
                            title: found.title,
                            about: found.about || found.description || fallbackStudy.about,
                            challenge: found.challenge || fallbackStudy.challenge,
                            goals: parsedGoals.length > 0 ? parsedGoals : fallbackStudy.goals,
                            results: parsedResults.length > 0 ? parsedResults : fallbackStudy.results,
                            tools: parsedTools.length > 0 ? parsedTools : fallbackStudy.tools,
                            stats: stats.length > 0 ? stats : fallbackStudy.stats,
                            testimonial: found.testimonial_quote ? {
                                name: found.testimonial_name || 'Client Representative',
                                role: found.testimonial_role || 'Partner',
                                quote: found.testimonial_quote,
                                avatar: found.testimonial_avatar || '/assets/img/team/Eugene Paik.jpg'
                            } : fallbackStudy.testimonial
                        });
                    }
                }
            })
            .catch(() => {});
    }, [slug]);

    useEffect(() => {
        if (currentStudy && currentStudy.title) {
            document.title = `${currentStudy.title} | MetricVibes Case Study`;
        }
    }, [currentStudy]);

    return (
        <div id="case-study-detail-wrapper">
            {/* Hero Header */}
            <section style={{
                background: "linear-gradient(135deg, rgba(26, 11, 54, 0.96) 0%, rgba(45, 16, 90, 0.95) 100%), url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover",
                padding: "135px 0 45px",
                color: "white",
            }}>
                <div className="container" style={{ maxWidth: "1100px" }}>
                    {/* Stat Badges */}
                    <div style={{ display: "flex", gap: "16px", marginBottom: "22px", flexWrap: "wrap" }}>
                        {currentStudy.stats.map((st, idx) => (
                            <div key={idx} style={{ 
                                background: "rgba(255, 255, 255, 0.1)",
                                backdropFilter: "blur(12px)",
                                border: "1px solid rgba(255, 255, 255, 0.25)",
                                borderRadius: "10px", 
                                padding: "8px 20px", 
                                display: "flex",
                                alignItems: "baseline",
                                gap: "10px"
                            }}>
                                <span style={{ fontSize: "1.4rem", fontWeight: "800", color: "#38ef7d" }}>{st.value}</span>
                                <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.9)", fontWeight: "500" }}>{st.label}</span>
                            </div>
                        ))}
                    </div>

                    <h1 style={{ fontSize: "2.2rem", fontWeight: "700", color: "white", lineHeight: "1.3", maxWidth: "900px" }}>
                        {currentStudy.title}
                    </h1>
                </div>
            </section>

            {/* Main Content Layout */}
            <section className="case-study-detail-section" style={{ padding: "80px 0" }}>
                <div className="container case-study-detail-grid">
                    
                    {/* Left Column Content */}
                    <div>
                        <div style={{ marginBottom: "40px" }}>
                            <h2 className="case-study-detail-heading" style={{ fontSize: "1.6rem", fontWeight: "700", marginBottom: "15px" }}>About Client</h2>
                            <p className="case-study-detail-body" style={{ fontSize: "1rem", lineHeight: "1.7", whiteSpace: "pre-line" }}>
                                {currentStudy.about}
                            </p>
                        </div>

                        <div style={{ marginBottom: "40px" }}>
                            <h2 className="case-study-detail-heading" style={{ fontSize: "1.6rem", fontWeight: "700", marginBottom: "15px" }}>Business Challenge</h2>
                            <p className="case-study-detail-body" style={{ fontSize: "1rem", lineHeight: "1.7", whiteSpace: "pre-line" }}>
                                {currentStudy.challenge}
                            </p>
                        </div>

                        <div style={{ marginBottom: "40px" }}>
                            <h2 className="case-study-detail-heading" style={{ fontSize: "1.6rem", fontWeight: "700", marginBottom: "15px" }}>Goal</h2>
                            <ol className="case-study-detail-body" style={{ paddingLeft: "20px", fontSize: "1rem", lineHeight: "1.8" }}>
                                {currentStudy.goals.map((g, idx) => (
                                    <li key={idx}>{g}</li>
                                ))}
                            </ol>
                        </div>

                        <div style={{ marginBottom: "40px" }}>
                            <h2 className="case-study-detail-heading" style={{ fontSize: "1.6rem", fontWeight: "700", marginBottom: "15px" }}>Results</h2>
                            <ul className="case-study-detail-body" style={{ paddingLeft: "20px", fontSize: "1rem", lineHeight: "1.8" }}>
                                {currentStudy.results.map((r, idx) => (
                                    <li key={idx}>{r}</li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ marginBottom: "50px" }}>
                            <h2 style={{ fontSize: "1.8rem", fontWeight: "600", color: "#1e293b", marginBottom: "30px" }}>Tools Used</h2>
                            <div style={{ display: "flex", alignItems: "center", gap: "45px", flexWrap: "wrap" }}>
                                {currentStudy.tools.includes("ga4") && (
                                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                        <svg viewBox="0 0 48 48" width="34" height="34">
                                            <rect x="6" y="26" width="9" height="16" rx="4.5" fill="#F9AB00" />
                                            <rect x="19.5" y="16" width="9" height="26" rx="4.5" fill="#E37400" />
                                            <circle cx="37.5" cy="11.5" r="5.5" fill="#E37400" />
                                            <rect x="33" y="11.5" width="9" height="30.5" rx="4.5" fill="#E37400" />
                                        </svg>
                                        <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.1" }}>
                                            <span style={{ fontSize: "1.1rem", fontWeight: "600", color: "#5f6368" }}>Google</span>
                                            <span style={{ fontSize: "1.1rem", fontWeight: "600", color: "#5f6368" }}>Analytics 4</span>
                                        </div>
                                    </div>
                                )}

                                {currentStudy.tools.includes("mixpanel") && (
                                    <div style={{ color: "#160a3a", fontWeight: "800", fontSize: "1.9rem", fontFamily: "Georgia, serif", letterSpacing: "-0.5px" }}>
                                        mixpanel
                                    </div>
                                )}

                                {currentStudy.tools.includes("gtm") && (
                                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                        <svg viewBox="0 0 50 50" width="34" height="34">
                                            <path d="M 25 5 L 42 15 L 42 35 L 25 45 L 8 35 L 8 15 Z" fill="#4285F4" />
                                            <path d="M 25 5 L 42 15 L 25 25 L 8 15 Z" fill="#8AB4F8" />
                                        </svg>
                                        <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.1" }}>
                                            <span style={{ fontSize: "1rem", fontWeight: "700", color: "#5f6368" }}>Google</span>
                                            <span style={{ fontSize: "0.95rem", fontWeight: "600", color: "#5f6368" }}>Tag Manager</span>
                                        </div>
                                    </div>
                                )}

                                {currentStudy.tools.includes("android") && (
                                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                        <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.1", textAlign: "right" }}>
                                            <span style={{ fontSize: "1.2rem", fontWeight: "700", color: "#000", fontFamily: "sans-serif" }}>android</span>
                                            <span style={{ fontSize: "1.2rem", fontWeight: "700", color: "#000", fontFamily: "sans-serif" }}>studio</span>
                                        </div>
                                        <svg viewBox="0 0 100 100" width="38" height="38" fill="none">
                                            <circle cx="50" cy="50" r="45" stroke="#1A73E8" strokeWidth="6" />
                                            <path d="M 30 70 L 50 25 L 70 70" stroke="#1A73E8" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M 38 52 L 62 52" stroke="#1A73E8" strokeWidth="6" />
                                            <circle cx="68" cy="48" r="7" fill="#3DDC84" />
                                        </svg>
                                    </div>
                                )}

                                {currentStudy.tools.includes("looker-studio") && (
                                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                        <svg viewBox="0 0 50 50" width="36" height="36">
                                            <circle cx="25" cy="25" r="18" fill="none" stroke="#1A73E8" strokeWidth="4" />
                                            <circle cx="25" cy="25" r="7" fill="#1A73E8" />
                                        </svg>
                                        <span style={{ fontSize: "1.05rem", fontWeight: "600", color: "#5f6368" }}>Looker Studio</span>
                                    </div>
                                )}

                                {currentStudy.tools.includes("adjust") && (
                                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                        <svg viewBox="0 0 50 50" width="38" height="38">
                                            <circle cx="25" cy="25" r="22" stroke="#00B5E2" strokeWidth="4" fill="none" />
                                            <path d="M 16 28 C 18 20, 26 18, 30 26 C 34 34, 38 24, 38 20" stroke="#00B5E2" strokeWidth="4" fill="none" strokeLinecap="round" />
                                        </svg>
                                        <span style={{ fontSize: "1.7rem", fontWeight: "700", color: "#00B5E2", fontFamily: "sans-serif", letterSpacing: "-0.5px" }}>adjust</span>
                                    </div>
                                )}

                                {currentStudy.tools.includes("vwo") && (
                                    <div style={{ color: "#7a1a63", fontWeight: "800", fontSize: "2rem", fontFamily: "sans-serif", letterSpacing: "-1px" }}>
                                        V<span style={{ fontStyle: "italic" }}>W</span>O
                                    </div>
                                )}
                            </div>
                        </div>

                        <hr style={{ border: "none", borderTop: "1px solid #eee", margin: "50px 0" }} />

                        {/* Leave a Comment */}
                        <div>
                            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#111", marginBottom: "8px" }}>Leave a Comment</h2>
                            <p style={{ color: "#888", fontSize: "0.9rem", marginBottom: "25px" }}>Your email address will not be published. Required fields are marked *</p>
                            
                            <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                <textarea placeholder="Type here.." rows="6" style={{ padding: "18px 20px", borderRadius: "8px", border: "1px solid #ddd", backgroundColor: "#fcfcfc", fontSize: "1rem", width: "100%", outline: "none" }}></textarea>
                                
                                <div className="case-study-metrics-grid">
                                    <input type="text" placeholder="Name*" style={{ padding: "15px 20px", borderRadius: "8px", border: "1px solid #ddd", backgroundColor: "#fcfcfc", fontSize: "0.95rem", width: "100%" }} />
                                    <input type="email" placeholder="Email*" style={{ padding: "15px 20px", borderRadius: "8px", border: "1px solid #ddd", backgroundColor: "#fcfcfc", fontSize: "0.95rem", width: "100%" }} />
                                    <input type="url" placeholder="Website" style={{ padding: "15px 20px", borderRadius: "8px", border: "1px solid #ddd", backgroundColor: "#fcfcfc", fontSize: "0.95rem", width: "100%" }} />
                                </div>

                                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "5px" }}>
                                    <input type="checkbox" id="saveInfo" style={{ width: "16px", height: "16px" }} />
                                    <label htmlFor="saveInfo" style={{ color: "#666", fontSize: "0.85rem" }}>Save my name, email, and website in this browser for the next time I comment.</label>
                                </div>

                                <button className="btn" style={{ backgroundColor: "var(--color-primary)", color: "white", padding: "16px 35px", borderRadius: "8px", fontWeight: "700", border: "none", cursor: "pointer", alignSelf: "flex-start", marginTop: "10px", fontSize: "0.9rem" }}>
                                    POST COMMENT »
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Column Sidebar */}
                    <div>
                        {currentStudy.testimonial && (
                            <div style={{ marginBottom: "40px", textAlign: "center" }}>
                                <h3 style={{ fontSize: "1.4rem", fontWeight: "800", color: "#111", letterSpacing: "1.5px", marginBottom: "25px" }}>TESTIMONIAL</h3>
                                
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "15px" }}>
                                    <img src={currentStudy.testimonial.avatar} alt={currentStudy.testimonial.name} style={{ width: "90px", height: "90px", borderRadius: "50%", objectFit: "cover", marginBottom: "15px", boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }} />
                                    <span style={{ fontSize: "1.1rem", fontWeight: "700", color: "#111" }}>{currentStudy.testimonial.name}</span>
                                    <span style={{ fontSize: "0.85rem", color: "#a855f7", fontWeight: "600", marginTop: "4px" }}>{currentStudy.testimonial.role}</span>
                                </div>

                                <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: "1.6", textAlign: "center" }}>
                                    "{currentStudy.testimonial.quote}"
                                </p>
                            </div>
                        )}

                        <div style={{ backgroundColor: "#f3ebff", padding: "35px 30px", borderRadius: "16px", position: "sticky", top: "120px" }}>
                            <h3 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1a0b36", marginBottom: "25px" }}>Connect with us</h3>
                            <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                <input type="text" placeholder="Your Name" style={{ padding: "14px 18px", borderRadius: "8px", border: "none", width: "100%", fontSize: "0.95rem", backgroundColor: "white" }} />
                                <input type="email" placeholder="Email Address" style={{ padding: "14px 18px", borderRadius: "8px", border: "none", width: "100%", fontSize: "0.95rem", backgroundColor: "white" }} />
                                <input type="tel" placeholder="Phone Number" style={{ padding: "14px 18px", borderRadius: "8px", border: "none", width: "100%", fontSize: "0.95rem", backgroundColor: "white" }} />
                                <input type="text" placeholder="Company Name" style={{ padding: "14px 18px", borderRadius: "8px", border: "none", width: "100%", fontSize: "0.95rem", backgroundColor: "white" }} />
                                <textarea placeholder="Enter Your Message" rows="4" style={{ padding: "14px 18px", borderRadius: "8px", border: "none", width: "100%", fontSize: "0.95rem", backgroundColor: "white", resize: "none" }}></textarea>
                                
                                <button className="btn btn--brand-pill" style={{ width: "100%", marginTop: "10px", fontSize: "0.85rem", letterSpacing: "0.5px", justifyContent: "center" }}>
                                    SPEAK TO AN EXPERT
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
