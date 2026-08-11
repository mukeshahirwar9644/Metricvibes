import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_BASE_URL } from '../config/api';

export default function BlogDetail() {
    const { id: slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/blogs/${slug}`)
            .then(res => res.json())
            .then(data => {
                if(data.status === "success") {
                    setBlog(data.data);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching blog:", err);
                setLoading(false);
            });
    }, [slug]);

    if (loading) {
        return (
            <main>
                <section style={{padding:"200px 0", textAlign:"center"}}>
                    <h2>Loading...</h2>
                </section>
            </main>
        );
    }

    if (!blog) {
        return (
            <main>
                <section style={{padding:"200px 0", textAlign:"center"}}>
                    <h2>Blog Not Found</h2>
                    <Link to="/blog" className="btn btn-primary" style={{marginTop:"20px"}}>Back to Blogs</Link>
                </section>
            </main>
        );
    }

    // Helper to format date
    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    };

    return (
        <main>
<style dangerouslySetInnerHTML={{ __html: `
    .blog-content {
        font-family: var(--font-body);
        color: #334155;
        font-size: 1.06rem;
        line-height: 1.85;
        letter-spacing: -0.003em;
    }
    .blog-content h2 {
        font-family: var(--font-heading);
        font-size: 1.75rem;
        font-weight: 800;
        color: #0f172a;
        margin: 42px 0 18px;
        line-height: 1.3;
        letter-spacing: -0.02em;
        border-bottom: 2px solid rgba(124, 58, 237, 0.1);
        padding-bottom: 10px;
    }
    .blog-content h2:first-child {
        margin-top: 0;
    }
    .blog-content h3 {
        font-family: var(--font-heading);
        font-size: 1.35rem;
        font-weight: 700;
        color: #1e293b;
        margin: 32px 0 14px;
        line-height: 1.35;
    }
    .blog-content h4 {
        font-family: var(--font-heading);
        font-size: 1.15rem;
        font-weight: 700;
        color: #334155;
        margin: 24px 0 12px;
    }
    .blog-content p {
        margin-bottom: 22px;
    }
    .blog-content ul, .blog-content ol {
        margin-bottom: 24px;
        padding-left: 22px;
    }
    .blog-content li {
        margin-bottom: 10px;
        line-height: 1.75;
        color: #334155;
    }
    .blog-content li::marker {
        color: #7c3aed;
        font-weight: 700;
    }
    .blog-content strong, .blog-content b {
        color: #0f172a;
        font-weight: 700;
    }
    .blog-content a {
        color: #7c3aed;
        font-weight: 600;
        text-decoration: underline;
        text-underline-offset: 4px;
        transition: color 0.2s ease;
    }
    .blog-content a:hover {
        color: #4f46e5;
    }
    .blog-content blockquote {
        background: linear-gradient(135deg, rgba(124, 58, 237, 0.05) 0%, rgba(79, 70, 229, 0.07) 100%);
        border-left: 4px solid #7c3aed;
        border-radius: 0 14px 14px 0;
        padding: 22px 28px;
        margin: 32px 0;
        font-style: italic;
        font-size: 1.12rem;
        color: #1e1b4b;
        line-height: 1.7;
    }
    .blog-content code {
        background: #f1f5f9;
        color: #7c3aed;
        padding: 3px 8px;
        border-radius: 6px;
        font-size: 0.9em;
        font-weight: 600;
        border: 1px solid #e2e8f0;
    }
    .blog-content pre {
        background: #0f172a;
        color: #f8fafc;
        padding: 20px 24px;
        border-radius: 12px;
        overflow-x: auto;
        font-size: 0.92rem;
        line-height: 1.6;
        margin: 28px 0;
    }
    
    .blog-sidebar .sidebar-widget {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 247, 255, 0.85) 100%) !important;
        padding: 32px 26px !important;
        border-radius: 20px !important;
        border: 1px solid rgba(124, 58, 237, 0.15) !important;
        box-shadow: 0 12px 35px rgba(38, 14, 82, 0.04) !important;
    }

    .blog-faq {
        margin-top: 60px;
        padding-top: 40px;
        border-top: 1px solid var(--border-color);
    }
    .blog-faq-item {
        margin-bottom: 32px;
    }
    .blog-faq-item h4 {
        font-family: var(--font-heading);
        font-size: 1.25rem;
        color: var(--text-primary);
        margin-bottom: 12px;
        font-weight: 600;
    }
    
    .blog-comments-section {
        margin-top: 60px;
        padding-top: 40px;
        border-top: 1px solid var(--border-color);
    }
    .comment-list {
        list-style: none;
        padding: 0;
        margin: 0 0 40px;
    }
    .comment-item {
        display: flex;
        gap: 20px;
        margin-bottom: 32px;
        padding-bottom: 32px;
        border-bottom: 1px solid var(--border-color-light);
    }
    .comment-avatar {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: var(--surface-tertiary);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-accent);
        font-size: 1.5rem;
        flex-shrink: 0;
    }
    .comment-body h5 {
        margin: 0 0 4px;
        font-size: 1.125rem;
        color: var(--text-primary);
    }
    .comment-meta {
        font-size: 0.875rem;
        color: var(--text-muted);
        margin-bottom: 12px;
    }
    .comment-content {
        font-size: 1rem;
        color: var(--text-secondary);
        margin-bottom: 12px;
    }
    .comment-reply {
        color: var(--color-accent);
        font-size: 0.875rem;
        font-weight: 600;
        text-decoration: none;
    }
    
    @media (max-width: 991px) {
        .blog-layout {
            grid-template-columns: 1fr !important;
        }
        .blog-sidebar {
            order: 2;
        }
    }
` }} />

{/*  Header Banner  */}
<section style={{ position: "relative", padding: "145px 0 36px", background: "url('/assets/img/hero/hero-workspace-bg.png') center/cover no-repeat", textAlign: "left", color: "#fff" }}>
    <div style={{ position: "absolute", inset: "0", background: "linear-gradient(135deg, rgba(38, 14, 82, 0.95) 0%, rgba(59, 19, 120, 0.95) 100%)" }}></div>
    <div className="container" style={{ position: "relative", zIndex: "2", maxWidth: "920px" }}>
        <div style={{ marginBottom: "12px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 14px", borderRadius: "20px", background: "rgba(255, 255, 255, 0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)", fontSize: "0.78rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#fbbf24" }}>
                <i className="fas fa-folder" style={{ fontSize: "0.75rem" }}></i> {blog.category_name || "Analytics"}
            </span>
        </div>
        <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "2.1rem", fontWeight: "800", marginBottom: "14px", color: "#fff", lineHeight: "1.28", letterSpacing: "-0.01em" }}>
            {blog.title}
        </h1>
        <div style={{ display: "flex", gap: "16px", color: "rgba(255, 255, 255, 0.85)", fontSize: "0.88rem", alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}><i className="fas fa-user-circle" style={{ color: "#fbbf24" }}></i> By {blog.author_name || "Metric Vibes"}</span>
            <span>&bull;</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}><i className="fas fa-calendar-alt" style={{ color: "#fbbf24" }}></i> {formatDate(blog.published_at)}</span>
        </div>
    </div>
</section>

{/*  Main Blog Content  */}
<section className="section" style={{"background":"var(--surface-primary)"}}>
    <div className="container">
        <div className="blog-layout" style={{"display":"grid","gridTemplateColumns":"1fr 350px","gap":"60px"}}>
            
            {/*  Left Content Column  */}
            <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content }}>
                
            </div>
            
            {/*  Right Sidebar Column  */}
            <aside className="blog-sidebar">
                <div className="sidebar-widget" style={{"background":"var(--surface-secondary)","padding":"32px","borderRadius":"var(--radius-xl)","border":"1px solid var(--border-color)","position":"sticky","top":"120px"}}>
                    <div style={{"marginBottom":"24px"}}>
                        <h3 style={{"fontFamily":"var(--font-heading)","fontSize":"1.5rem","color":"var(--text-primary)","margin":"0 0 8px"}}>Connect with us</h3>
                        <p style={{"fontSize":"0.9rem","color":"var(--text-secondary)","margin":"0"}}>Fill out the form below and an expert will get back to you shortly.</p>
                    </div>
                    <form action="/contact/submit" method="POST" className="contact-form">
                        <div className="form-group" style={{"marginBottom":"16px"}}>
                            <input type="text" name="name" placeholder="Your Name" className="form-control" required style={{"width":"100%","padding":"12px 16px","borderRadius":"8px","border":"1px solid var(--border-color)","background":"var(--surface-card)","color":"var(--text-primary)"}} />
                        </div>
                        <div className="form-group" style={{"marginBottom":"16px"}}>
                            <input type="email" name="email" placeholder="Email Address" className="form-control" required style={{"width":"100%","padding":"12px 16px","borderRadius":"8px","border":"1px solid var(--border-color)","background":"var(--surface-card)","color":"var(--text-primary)"}} />
                        </div>
                        <div className="form-group" style={{"marginBottom":"16px"}}>
                            <input type="tel" name="phone" placeholder="Phone Number" className="form-control" style={{"width":"100%","padding":"12px 16px","borderRadius":"8px","border":"1px solid var(--border-color)","background":"var(--surface-card)","color":"var(--text-primary)"}} />
                        </div>
                        <div className="form-group" style={{"marginBottom":"16px"}}>
                            <input type="text" name="company" placeholder="Company Name" className="form-control" style={{"width":"100%","padding":"12px 16px","borderRadius":"8px","border":"1px solid var(--border-color)","background":"var(--surface-card)","color":"var(--text-primary)"}} />
                        </div>
                        <div className="form-group" style={{"marginBottom":"16px"}}>
                            <textarea name="message" placeholder="Enter Your Message" className="form-control" rows="4" style={{"width":"100%","padding":"12px 16px","borderRadius":"8px","border":"1px solid var(--border-color)","background":"var(--surface-card)","color":"var(--text-primary)"}}></textarea>
                        </div>
                        <button type="submit" className="btn btn--brand-pill" style={{"width":"100%","justifyContent":"center"}}>Speak To An Expert</button>
                    </form>
                </div>
            </aside>
            
        </div>
    </div>
</section>

{/*  Call to Action Banner matching the screenshot bottom  */}
<section style={{"background":"var(--gradient-primary)","padding":"80px 0","textAlign":"center","color":"white"}}>
    <div className="container">
        <h2 style={{"fontFamily":"var(--font-heading)","fontSize":"2.5rem","fontWeight":"800","marginBottom":"24px","color":"white"}}>Ready To Boost Your<br />Website's Performance?</h2>
        <Link to="/contact" className="btn btn-primary" style={{"background":"white","color":"var(--color-primary)","borderColor":"white"}}>Contact Us</Link>
    </div>
</section>

        </main>
    );
}
