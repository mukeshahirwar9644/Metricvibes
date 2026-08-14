import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../config/api';

const fallbackData = [
    {
        title: "How Metric Vibes Enhanced Mobile App Conversions Through Personalized User Experiences",
        challenge: "The client, a leading second-hand retail store in the UK, struggled with low app registrations...",
        badge: "App Conversions",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        date: "August 10, 2024",
        slug: "how-metric-vibes-enhanced-mobile-app-conversions",
        results: []
    },
    {
        title: "How Metric Vibes Turned Attribution Loss into Measurable Conversions",
        challenge: "Metricvibes played a pivotal role in addressing the challenges faced by the Inmates Photo Sharing...",
        badge: "Attribution",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        date: "July 2, 2024",
        slug: "how-metric-vibes-turned-attribution-loss",
        results: []
    },
    {
        title: "Elevating Digital strategies for an aviation client",
        challenge: "How we helped a global aviation business achieve a 3.2% increase in conversion rates, and...",
        badge: "Digital Strategy",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        date: "May 24, 2024",
        slug: "elevating-digital-strategies-for-an-aviation-client",
        results: []
    },
    {
        title: "How Metric Vibes approach optimized drop-offs",
        challenge: "Discover how MetricVibes enhanced user behavior insights for Ticket Network, optimizing drop-offs and improving conversion...",
        badge: "Optimization",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        date: "April 15, 2024",
        slug: "how-metric-vibes-approach-optimized-drop-offs",
        results: []
    }
];

const API = API_BASE_URL;

export default function CaseStudies({ hideHeader }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [caseStudiesData, setCaseStudiesData] = useState(fallbackData);

    useEffect(() => {
        const fetchCaseStudies = async () => {
            try {
                const res = await fetch(`${API}/api/case-studies`);
                const json = await res.json();
                if (json.status === 'success' && json.data.length > 0) {
                    const mapped = json.data.map(item => ({
                        title: item.title,
                        challenge: item.description || '',
                        badge: item.category || 'MarTech',
                        image: item.image_url && !item.image_url.startsWith('fas ')
                            ? item.image_url
                            : 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                        date: item.created_at
                            ? new Date(item.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
                            : '',
                        slug: item.slug,
                        results: (item.metric_1_value && item.metric_1_label) ? [
                            { value: item.metric_1_value, label: item.metric_1_label },
                            ...(item.metric_2_value ? [{ value: item.metric_2_value, label: item.metric_2_label }] : []),
                            ...(item.metric_3_value ? [{ value: item.metric_3_value, label: item.metric_3_label }] : [])
                        ] : []
                    }));
                    setCaseStudiesData(mapped);
                }
            } catch (err) {
                console.log('Using fallback case studies data');
            }
        };
        fetchCaseStudies();
    }, []);

    const filteredStudies = caseStudiesData.filter(study =>
        study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.challenge.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="section" id="case-studies" style={hideHeader ? { paddingTop: "15px", paddingBottom: "40px" } : {}}>
            <div className="container">
                
                {!hideHeader && (
                <div className="section__header">
                    <span className="section__badge"><i className="fas fa-rocket"></i> Success Stories</span>
                    <h2 className="section__title">Proven <span className="text-gradient">Results</span></h2>
                    <p className="section__subtitle">
                        See how we've helped enterprises transform their data infrastructure and drive measurable business outcomes.
                    </p>
                </div>
                )}

                {hideHeader && (
                    <div style={{maxWidth: "700px", margin: "0 auto 24px"}}>
                        <div style={{
                            display: "flex", 
                            alignItems: "center", 
                            background: "var(--surface-card)", 
                            borderRadius: "50px", 
                            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                            padding: "8px",
                            border: "1px solid var(--border-color-light)"
                        }}>
                            <i className="fas fa-search" style={{color: "var(--text-muted)", fontSize: "1.1rem", paddingLeft: "20px"}}></i>
                            <input 
                                type="text" 
                                placeholder="Search case studies, topics, or challenges..." 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{
                                    flex: 1, 
                                    padding: "14px 20px", 
                                    border: "none", 
                                    background: "transparent",
                                    outline: "none",
                                    fontSize: "1rem",
                                    color: "var(--text-primary)"
                                }} 
                            />
                            <button className="btn" style={{
                                borderRadius: "40px", 
                                padding: "14px 35px", 
                                margin: 0, 
                                background: "var(--gradient-primary)",
                                color: "#fff",
                                border: "none",
                                fontWeight: "600",
                                letterSpacing: "1px",
                                cursor: "pointer",
                                boxShadow: "0 4px 15px rgba(79, 70, 229, 0.4)"
                            }}>
                                SEARCH
                            </button>
                        </div>
                    </div>
                )}
                
                <div className="case-studies__grid">
                    {(hideHeader ? filteredStudies : filteredStudies.slice(0, 3)).map((study, idx) => (
                        <Link 
                            to={`/case-study/${study.slug || 'how-metric-vibes-enhanced-mobile-app-conversions'}`} 
                            key={idx}
                            style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column" }}
                        >
                            <div className="case-study-card" style={{ cursor: "pointer", height: "100%" }}>
                                <div className="case-study-card__image">
                                    <img src={study.image} alt={study.title} />
                                    <div className="case-study-card__image-overlay">
                                        <span className="case-study-card__badge">{study.badge}</span>
                                    </div>
                                </div>
                                <div className="case-study-card__body" style={{display: "flex", flexDirection: "column", flexGrow: 1}}>
                                    <h3 className="case-study-card__title" style={{fontSize: "1.08rem", lineHeight: "1.35", marginBottom: "10px", fontWeight: "700"}}>{study.title}</h3>
                                    <p className="case-study-card__challenge" style={{fontSize: "0.85rem", lineHeight: "1.5", flexGrow: 1}}>{study.challenge}</p>
                                    
                                    {study.results && study.results.length > 0 ? (
                                        <div className="case-study-card__results">
                                            {study.results.map((res, i) => (
                                                <div className="case-study-card__result" key={i}>
                                                    <span className="case-study-card__result-value">{res.value}</span>
                                                    <span className="case-study-card__result-label">{res.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                         <div style={{marginTop: "18px", display: "flex", flexDirection: "column", justifyContent: "flex-end", flexGrow: 1}}>
                                            <span className="read-more-link" style={{fontWeight: "700", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.5px", display: "inline-flex", alignItems: "center"}}>
                                                Read Case Study <i className="fas fa-arrow-right" style={{marginLeft: "6px", fontSize: "0.75rem", transition: "transform 0.3s ease"}} />
                                            </span>
                                            
                                            <div className="case-study-card__footer" style={{marginTop: "15px", paddingTop: "12px", borderTop: "1px solid var(--border-color-light, rgba(0,0,0,0.06))", fontSize: "0.78rem", color: "var(--text-muted)", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                                <span style={{display: "flex", alignItems: "center", gap: "5px"}}><i className="far fa-calendar-alt"></i> {study.date}</span>
                                                <span style={{display: "flex", alignItems: "center", gap: "5px"}}><i className="far fa-comment"></i> No Comments</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {!hideHeader && (
                <div className="text-center" style={{marginTop:"var(--space-12)"}}>
                    <Link to="/case-studies" style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "16px 42px",
                        borderRadius: "40px",
                        background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
                        color: "#ffffff",
                        fontWeight: "700",
                        fontSize: "1.02rem",
                        textDecoration: "none",
                        boxShadow: "0 10px 30px rgba(124, 58, 237, 0.5), inset 0 2px 3px rgba(255, 255, 255, 0.3)",
                        transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        letterSpacing: "0.2px"
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-4px) scale(1.03)";
                        e.currentTarget.style.boxShadow = "0 18px 40px rgba(124, 58, 237, 0.7), inset 0 3px 5px rgba(255, 255, 255, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0) scale(1)";
                        e.currentTarget.style.boxShadow = "0 10px 30px rgba(124, 58, 237, 0.5), inset 0 2px 3px rgba(255, 255, 255, 0.3)";
                    }}>
                        View All Case Studies <i className="fas fa-arrow-right" style={{ fontSize: "0.88rem" }}></i>
                    </Link>
                </div>
                )}
            </div>
        </section>
    );
}
