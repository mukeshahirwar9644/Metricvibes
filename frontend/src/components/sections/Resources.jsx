import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../config/api';

const defaultBlogs = [
    {
        title: "The Complete Guide to GA4 Server-Side Tracking",
        slug: "how-to-audit-and-clean-up-a-bloated-gtm-container",
        excerpt: "Learn how server-side tracking can improve data accuracy and future-proof analytics.",
        category: "Featured",
        categoryBg: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
        date: "Jan 15, 2025",
        readTime: "5 min read",
        badgeColor: "#7c3aed"
    },
    {
        title: "How AI is Transforming Enterprise Analytics",
        slug: "what-vs-why-actionable-user-insights",
        excerpt: "Explore predictive models and automated workflows powered by modern AI stacks.",
        category: "AI & ML",
        categoryBg: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80",
        date: "Dec 20, 2024",
        readTime: "8 min read",
        badgeColor: "#10b981"
    },
    {
        title: "Google Consent Mode V2: What You Need to Know",
        slug: "3-marketing-kpis-cfo-cares-about",
        excerpt: "Stay compliant and minimize data loss with advanced consent management.",
        category: "Privacy",
        categoryBg: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80",
        date: "Nov 14, 2024",
        readTime: "6 min read",
        badgeColor: "#f59e0b"
    }
];

export default function Resources() {
    const [displayBlogs, setDisplayBlogs] = useState(defaultBlogs);
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [newsletterStatus, setNewsletterStatus] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();
        if (!newsletterEmail || submitting) return;
        setSubmitting(true);
        try {
            const res = await fetch(`${API_BASE_URL}/api/newsletter`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: newsletterEmail })
            });
            const data = await res.json();
            if (res.ok && data.status === 'success') {
                setNewsletterStatus({ type: 'success', message: 'Subscribed successfully!' });
                setNewsletterEmail('');
            } else {
                setNewsletterStatus({ type: 'error', message: data.detail || 'Subscription failed' });
            }
        } catch (err) {
            setNewsletterStatus({ type: 'error', message: 'Unable to connect to server' });
        } finally {
            setSubmitting(false);
            setTimeout(() => setNewsletterStatus(null), 4000);
        }
    };

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/blogs`)
            .then(res => res.json())
            .then(data => {
                if (data.status === "success" && Array.isArray(data.data) && data.data.length > 0) {
                    const mapped = data.data.slice(0, 3).map((item, idx) => {
                        const fallbackImg = defaultBlogs[idx % 3].image;
                        let itemImg = item.image_url && item.image_url.trim();
                        if (!itemImg || !itemImg.startsWith('http')) {
                            itemImg = fallbackImg;
                        }

                        return {
                            title: item.title,
                            slug: item.slug,
                            excerpt: item.excerpt || defaultBlogs[idx % 3].excerpt,
                            category: item.category_name || defaultBlogs[idx % 3].category,
                            categoryBg: defaultBlogs[idx % 3].categoryBg,
                            image: itemImg,
                            date: item.published_at ? new Date(item.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : defaultBlogs[idx % 3].date,
                            readTime: defaultBlogs[idx % 3].readTime,
                            badgeColor: defaultBlogs[idx % 3].badgeColor
                        };
                    });
                    setDisplayBlogs(mapped);
                }
            })
            .catch(() => {
                // Fallback to default blogs if API is offline
            });
    }, []);

    return (
        <>
            <section className="section" id="resources" style={{ padding: "35px 0 35px 0" }}>
                <div className="container">
                    <div className="section__header" style={{ marginBottom: "50px" }}>
                        <span className="section__badge"><i className="fas fa-lightbulb"></i> Insights</span>
                        <h2 className="section__title">Insights & <span className="text-gradient">Resources</span></h2>
                        <p className="section__subtitle">
                            Expert articles, guides, and industry insights from our analytics and AI team.
                        </p>
                    </div>

                    <div className="resources__grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "26px" }}>
                        {displayBlogs.map((blog, idx) => (
                            <Link 
                                key={idx}
                                to={`/blog/${blog.slug}`} 
                                className="blog-card card--gradient-border" 
                                data-aos="fade-up" 
                                data-aos-delay={idx * 100}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                    borderRadius: "16px",
                                    overflow: "hidden",
                                    backgroundColor: "#ffffff",
                                    border: "1px solid rgba(124, 58, 237, 0.12)",
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                                    display: "flex",
                                    flexDirection: "column",
                                    transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-6px)";
                                    e.currentTarget.style.boxShadow = "0 18px 40px rgba(124, 58, 237, 0.12)";
                                    const img = e.currentTarget.querySelector('img');
                                    if (img) img.style.transform = "scale(1.06)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.04)";
                                    const img = e.currentTarget.querySelector('img');
                                    if (img) img.style.transform = "scale(1)";
                                }}
                            >
                                <div className="blog-card__image" style={{ height: "145px", overflow: "hidden", position: "relative", backgroundColor: "#1e1b4b" }}>
                                    <img 
                                        src={blog.image} 
                                        alt="" 
                                        style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = defaultBlogs[idx % 3].image;
                                        }}
                                    />
                                    <span style={{
                                        position: "absolute",
                                        top: "12px",
                                        left: "12px",
                                        padding: "4px 12px",
                                        borderRadius: "20px",
                                        background: blog.categoryBg,
                                        color: "#ffffff",
                                        fontSize: "0.72rem",
                                        fontWeight: "700",
                                        letterSpacing: "0.5px",
                                        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                                        zIndex: 2
                                    }}>
                                        {blog.category}
                                    </span>
                                </div>
                                <div className="blog-card__body" style={{ padding: "18px 22px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                                    <h3 className="blog-card__title" style={{ fontSize: "1.05rem", fontWeight: "700", lineHeight: "1.38", color: "#0f172a", marginBottom: "8px" }}>
                                        {blog.title}
                                    </h3>
                                    <p className="blog-card__excerpt" style={{ fontSize: "0.85rem", lineHeight: "1.5", color: "#64748b", marginBottom: "16px", flexGrow: 1 }}>
                                        {blog.excerpt}
                                    </p>
                                    <div style={{ paddingTop: "12px", borderTop: "1px solid #f1f5f9", fontSize: "0.78rem", color: "#94a3b8", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <span><i className="far fa-calendar" style={{ marginRight: "5px", color: blog.badgeColor }}></i> {blog.date}</span>
                                        <span><i className="far fa-clock" style={{ marginRight: "5px", color: blog.badgeColor }}></i> {blog.readTime}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    
                    {/* View All Blogs Theme Button */}
                    <div className="text-center" style={{ marginTop: "40px", marginBottom: "45px" }}>
                        <Link to="/blog" style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "12px 32px",
                            borderRadius: "30px",
                            background: "linear-gradient(135deg, #260e52 0%, #3b1378 100%)",
                            color: "#ffffff",
                            fontWeight: "700",
                            fontSize: "0.92rem",
                            textDecoration: "none",
                            boxShadow: "0 6px 20px rgba(38, 14, 82, 0.3)",
                            transition: "all 0.3s ease"
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-3px)";
                            e.currentTarget.style.boxShadow = "0 10px 25px rgba(38, 14, 82, 0.45)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 6px 20px rgba(38, 14, 82, 0.3)";
                        }}>
                            View All Blogs & Insights <i className="fas fa-arrow-right" style={{ fontSize: "0.82rem" }}></i>
                        </Link>
                    </div>

                    {/* Premium Newsletter Banner */}
                    <div className="newsletter-banner" data-aos="fade-up" data-aos-delay="300" style={{ marginTop: "40px", padding: "35px 40px", background: "var(--surface-primary)", border: "1px solid var(--border-color)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "40px", boxShadow: "0 8px 30px rgba(0,0,0,0.04)", position: "relative", overflow: "hidden", flexWrap: "wrap" }}>
                        <div style={{ flex: "1", minWidth: "300px", position: "relative", zIndex: "2" }}>
                            <h4 style={{ color: "var(--text-primary)", fontSize: "1.35rem", marginBottom: "8px", fontWeight: "700", display: "flex", alignItems: "center", gap: "12px" }}>
                                <i className="far fa-envelope" style={{ color: "var(--color-accent)", fontSize: "1.2rem" }}></i>
                                MetricVibes Insights
                            </h4>
                            <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", margin: "0", lineHeight: "1.6" }}>Actionable strategies on enterprise analytics, AI, and data architecture delivered weekly.</p>
                        </div>
                        
                        <div style={{ flex: "1", minWidth: "320px", maxWidth: "450px", position: "relative", zIndex: "2" }}>
                            <form className="newsletter-form" onSubmit={handleNewsletterSubmit} style={{ display: "flex", gap: "12px", width: "100%" }}>
                                <input 
                                    type="email" 
                                    placeholder="Enter your work email" 
                                    aria-label="Email" 
                                    value={newsletterEmail}
                                    onChange={(e) => setNewsletterEmail(e.target.value)}
                                    required 
                                    style={{ flex: "1", padding: "12px 18px", border: "1px solid var(--border-color)", background: "var(--surface-secondary)", color: "var(--text-primary)", borderRadius: "8px", fontSize: "0.92rem", outline: "none", transition: "border-color 0.2s" }} 
                                />
                                <button type="submit" disabled={submitting} style={{ background: "linear-gradient(135deg, #260e52 0%, #3b1378 100%)", color: "#ffffff", border: "none", padding: "12px 24px", borderRadius: "8px", fontWeight: "700", fontSize: "0.92rem", cursor: "pointer", transition: "opacity 0.2s", whiteSpace: "nowrap", boxShadow: "0 4px 14px rgba(38, 14, 82, 0.3)" }}>
                                    {submitting ? 'Subscribing...' : 'Subscribe'}
                                </button>
                            </form>
                            {newsletterStatus && (
                                <div style={{
                                    marginTop: '8px',
                                    fontSize: '0.85rem',
                                    fontWeight: '600',
                                    color: newsletterStatus.type === 'success' ? '#10b981' : '#ef4444'
                                }}>
                                    {newsletterStatus.message}
                                </div>
                            )}
                        </div>
                        
                        {/* Subtle left accent line */}
                        <div style={{ position: "absolute", top: "0", left: "0", width: "4px", height: "100%", background: "var(--color-accent)" }}></div>
                    </div>
                </div>
            </section>
        </>
    );
}
