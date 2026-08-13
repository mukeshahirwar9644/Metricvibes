import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_BASE_URL } from '../config/api';

export default function BlogDetail() {
    const { id: slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    // Comments State
    const [comments, setComments] = useState([]);
    const [totalComments, setTotalComments] = useState(0);
    const [commentForm, setCommentForm] = useState({ author_name: '', author_email: '', content: '' });
    const [replyingTo, setReplyingTo] = useState(null); // { id, authorName }
    const [submitting, setSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState(null);

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/blogs/${slug}`)
            .then(res => res.json())
            .then(data => {
                if(data.status === "success" && data.data) {
                    setBlog(data.data);
                    document.title = `${data.data.title} | MetricVibes Blog`;
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching blog:", err);
                setLoading(false);
            });

        fetchComments();
    }, [slug]);

    const fetchComments = () => {
        fetch(`${API_BASE_URL}/api/blogs/${slug}/comments`)
            .then(res => res.json())
            .then(data => {
                if (data.status === "success") {
                    setComments(data.data || []);
                    setTotalComments(data.total_count || 0);
                }
            })
            .catch(err => {
                console.error("Error fetching comments:", err);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCommentForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmitComment = (e, parentId = null) => {
        e.preventDefault();
        setSubmitting(true);
        setSubmitMessage(null);

        const payload = {
            author_name: commentForm.author_name,
            author_email: commentForm.author_email,
            content: commentForm.content,
            parent_id: parentId
        };

        fetch(`${API_BASE_URL}/api/blogs/${slug}/comments`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => {
            setSubmitting(false);
            if (data.status === 'success') {
                setSubmitMessage({ type: 'success', text: 'Comment posted successfully!' });
                setCommentForm(prev => ({ ...prev, content: '' }));
                setReplyingTo(null);
                fetchComments();
            } else {
                setSubmitMessage({ type: 'error', text: data.detail || 'Failed to post comment.' });
            }
        })
        .catch(err => {
            setSubmitting(false);
            setSubmitMessage({ type: 'error', text: 'Error posting comment. Please try again.' });
            console.error(err);
        });
    };

    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    };

    const getInitials = (name) => {
        if (!name) return 'U';
        const parts = name.trim().split(' ');
        if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
        return name[0].toUpperCase();
    };

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

    // Comment card renderer (supports recursive nested replies)
    const renderCommentCard = (comment, isReply = false) => {
        const isReplying = replyingTo?.id === comment.id;

        return (
            <div className={`comment-card ${isReply ? 'reply-card' : ''}`} key={comment.id} style={{
                background: isReply ? "rgba(124, 58, 237, 0.03)" : "#ffffff",
                border: "1px solid rgba(124, 58, 237, 0.12)",
                borderRadius: "16px",
                padding: "24px",
                marginBottom: "20px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.02)",
                position: "relative"
            }}>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "700",
                        fontSize: "1rem",
                        flexShrink: 0,
                        boxShadow: "0 4px 10px rgba(124, 58, 237, 0.2)"
                    }}>
                        {getInitials(comment.author_name)}
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px", flexWrap: "wrap" }}>
                            <div>
                                <h5 style={{ margin: "0", fontSize: "1.05rem", fontWeight: "700", color: "#0f172a" }}>{comment.author_name}</h5>
                                <span style={{ fontSize: "0.8rem", color: "#64748b" }}>{formatDate(comment.created_at)}</span>
                            </div>
                            <button 
                                onClick={() => {
                                    if (isReplying) {
                                        setReplyingTo(null);
                                    } else {
                                        setReplyingTo({ id: comment.id, authorName: comment.author_name });
                                    }
                                }} 
                                style={{
                                    background: isReplying ? "#fee2e2" : "rgba(124, 58, 237, 0.08)",
                                    color: isReplying ? "#dc2626" : "#7c3aed",
                                    border: "none",
                                    padding: "6px 14px",
                                    borderRadius: "20px",
                                    fontSize: "0.82rem",
                                    fontWeight: "600",
                                    cursor: "pointer",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    transition: "all 0.2s"
                                }}
                            >
                                <i className={isReplying ? "fas fa-times" : "fas fa-reply"}></i>
                                {isReplying ? "Cancel" : "Reply"}
                            </button>
                        </div>
                        
                        <p style={{ margin: "10px 0 0", fontSize: "0.98rem", color: "#334155", lineHeight: "1.65", whiteSpace: "pre-wrap" }}>
                            {comment.content}
                        </p>

                        {/* Inline Reply Form */}
                        {isReplying && (
                            <form onSubmit={(e) => handleSubmitComment(e, comment.id)} style={{
                                marginTop: "20px",
                                padding: "20px",
                                background: "#ffffff",
                                borderRadius: "14px",
                                border: "1px solid #7c3aed",
                                boxShadow: "0 8px 25px rgba(124, 58, 237, 0.1)"
                            }}>
                                <div style={{ fontSize: "0.85rem", fontWeight: "700", color: "#7c3aed", marginBottom: "12px", display: "flex", alignItems: "center", gap: "6px" }}>
                                    <i className="fas fa-reply"></i> Replying to <strong>{comment.author_name}</strong>
                                </div>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
                                    <input 
                                        type="text" 
                                        name="author_name" 
                                        placeholder="Your Name *" 
                                        value={commentForm.author_name} 
                                        onChange={handleInputChange} 
                                        required 
                                        style={{ padding: "10px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "0.9rem", width: "100%" }} 
                                    />
                                    <input 
                                        type="email" 
                                        name="author_email" 
                                        placeholder="Your Email *" 
                                        value={commentForm.author_email} 
                                        onChange={handleInputChange} 
                                        required 
                                        style={{ padding: "10px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "0.9rem", width: "100%" }} 
                                    />
                                </div>
                                <div style={{ marginBottom: "12px" }}>
                                    <textarea 
                                        name="content" 
                                        placeholder="Write your reply here... *" 
                                        rows="3" 
                                        value={commentForm.content} 
                                        onChange={handleInputChange} 
                                        required 
                                        style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "0.9rem" }}
                                    ></textarea>
                                </div>
                                <div style={{ display: "flex", gap: "10px" }}>
                                    <button 
                                        type="submit" 
                                        disabled={submitting} 
                                        style={{
                                            background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
                                            color: "#fff",
                                            border: "none",
                                            padding: "8px 20px",
                                            borderRadius: "20px",
                                            fontWeight: "600",
                                            fontSize: "0.88rem",
                                            cursor: "pointer"
                                        }}
                                    >
                                        {submitting ? "Posting Reply..." : "Post Reply"}
                                    </button>
                                    <button 
                                        type="button" 
                                        onClick={() => setReplyingTo(null)} 
                                        style={{
                                            background: "#f1f5f9",
                                            color: "#475569",
                                            border: "none",
                                            padding: "8px 16px",
                                            borderRadius: "20px",
                                            fontWeight: "600",
                                            fontSize: "0.88rem",
                                            cursor: "pointer"
                                        }}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        )}

                        {/* Nested Replies */}
                        {comment.replies && comment.replies.length > 0 && (
                            <div style={{ marginTop: "20px", paddingLeft: "16px", borderLeft: "2px solid rgba(124, 58, 237, 0.2)" }}>
                                {comment.replies.map(reply => renderCommentCard(reply, true))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
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
    .blog-content ol {
        margin: 24px 0 28px;
        padding-left: 24px;
        list-style-type: decimal;
    }
    .blog-content ol li {
        margin-bottom: 14px;
        line-height: 1.8;
        color: #334155;
        font-size: 1.05rem;
        padding-left: 6px;
    }
    .blog-content ol li::marker {
        color: #7c3aed;
        font-weight: 800;
        font-size: 1.05em;
    }
    .blog-content ul {
        margin: 24px 0 28px;
        padding-left: 24px;
        list-style-type: disc;
    }
    .blog-content ul li {
        margin-bottom: 12px;
        line-height: 1.8;
        color: #334155;
        font-size: 1.05rem;
        padding-left: 6px;
    }
    .blog-content ul li::marker {
        color: #7c3aed;
        font-weight: 800;
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

    .blog-comments-section {
        margin-top: 60px;
        padding-top: 40px;
        border-top: 2px dashed rgba(124, 58, 237, 0.15);
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

{/* Header Banner */}
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
            <span>&bull;</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}><i className="fas fa-comments" style={{ color: "#fbbf24" }}></i> {totalComments} {totalComments === 1 ? 'Comment' : 'Comments'}</span>
        </div>
    </div>
</section>

{/* Main Blog Content & Comments */}
<section className="section" style={{"background":"var(--surface-primary)"}}>
    <div className="container">
        <div className="blog-layout" style={{"display":"grid","gridTemplateColumns":"1fr 350px","gap":"60px"}}>
            
            {/* Left Main Column */}
            <div className="blog-main-col">
                {/* Article Content */}
                <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content }}></div>

                {/* Comments & Discussion Section */}
                <div className="blog-comments-section">
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.6rem", fontWeight: "800", color: "#0f172a", marginBottom: "28px", display: "flex", alignItems: "center", gap: "10px" }}>
                        <i className="fas fa-comments" style={{ color: "#7c3aed" }}></i> Comments ({totalComments})
                    </h3>

                    {/* Submit Status Alert */}
                    {submitMessage && (
                        <div style={{
                            padding: "14px 20px",
                            borderRadius: "12px",
                            marginBottom: "24px",
                            fontSize: "0.95rem",
                            fontWeight: "600",
                            background: submitMessage.type === 'success' ? '#dcfce7' : '#fee2e2',
                            color: submitMessage.type === 'success' ? '#166534' : '#991b1b',
                            border: submitMessage.type === 'success' ? '1px solid #bbf7d0' : '1px solid #fecaca'
                        }}>
                            {submitMessage.text}
                        </div>
                    )}

                    {/* Comments List */}
                    {comments.length === 0 ? (
                        <div style={{
                            padding: "30px",
                            textAlign: "center",
                            background: "rgba(124, 58, 237, 0.02)",
                            borderRadius: "16px",
                            border: "1px dashed rgba(124, 58, 237, 0.15)",
                            marginBottom: "40px"
                        }}>
                            <p style={{ margin: 0, color: "#64748b", fontSize: "0.98rem" }}>No comments yet. Be the first to share your thoughts!</p>
                        </div>
                    ) : (
                        <div className="comments-list" style={{ marginBottom: "40px" }}>
                            {comments.map(c => renderCommentCard(c, false))}
                        </div>
                    )}

                    {/* Main Leave a Comment Form */}
                    <div className="comment-form-container" style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248, 247, 255, 0.9) 100%)",
                        padding: "32px",
                        borderRadius: "20px",
                        border: "1px solid rgba(124, 58, 237, 0.15)",
                        boxShadow: "0 10px 30px rgba(38, 14, 82, 0.04)"
                    }}>
                        <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem", fontWeight: "700", color: "#0f172a", marginBottom: "8px" }}>
                            Leave a Comment
                        </h4>
                        <p style={{ fontSize: "0.9rem", color: "#64748b", marginBottom: "20px" }}>
                            Your email address will not be published. Required fields are marked *
                        </p>

                        <form onSubmit={(e) => handleSubmitComment(e, null)}>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                                <div>
                                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#334155", marginBottom: "6px" }}>Name *</label>
                                    <input 
                                        type="text" 
                                        name="author_name" 
                                        placeholder="Enter your name" 
                                        value={commentForm.author_name} 
                                        onChange={handleInputChange} 
                                        required 
                                        style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", border: "1px solid #cbd5e1", background: "#fff", color: "#0f172a", fontSize: "0.95rem" }} 
                                    />
                                </div>
                                <div>
                                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#334155", marginBottom: "6px" }}>Email *</label>
                                    <input 
                                        type="email" 
                                        name="author_email" 
                                        placeholder="Enter your email" 
                                        value={commentForm.author_email} 
                                        onChange={handleInputChange} 
                                        required 
                                        style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", border: "1px solid #cbd5e1", background: "#fff", color: "#0f172a", fontSize: "0.95rem" }} 
                                    />
                                </div>
                            </div>
                            <div style={{ marginBottom: "20px" }}>
                                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#334155", marginBottom: "6px" }}>Comment *</label>
                                <textarea 
                                    name="content" 
                                    placeholder="Share your feedback or thoughts..." 
                                    rows="4" 
                                    value={commentForm.content} 
                                    onChange={handleInputChange} 
                                    required 
                                    style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", border: "1px solid #cbd5e1", background: "#fff", color: "#0f172a", fontSize: "0.95rem" }}
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                disabled={submitting} 
                                className="btn btn--brand-pill" 
                                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 28px" }}
                            >
                                <i className="fas fa-paper-plane"></i>
                                {submitting ? "Posting Comment..." : "Post Comment"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            
            {/* Right Sidebar Column */}
            <aside className="blog-sidebar">
                <div className="sidebar-widget" style={{"background":"var(--surface-secondary)","padding":"32px","borderRadius":"var(--radius-xl)","border":"1px solid var(--border-color)","position":"sticky","top":"120px"}}>
                    <div style={{"marginBottom":"24px"}}>
                        <h3 style={{"fontFamily":"var(--font-heading)","fontSize":"1.5rem","color":"var(--text-primary)","margin":"0 0 8px"}}>Connect with us</h3>
                        <p style={{"fontSize":"0.9rem","color":"var(--text-secondary)","margin":"0"}}>Fill out the form below and an expert will get back to you shortly.</p>
                    </div>
                    <form onSubmit={(e) => { e.preventDefault(); window.location.href = '/contact'; }} className="contact-form">
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

{/* Call to Action Banner */}
<section style={{"background":"var(--gradient-primary)","padding":"80px 0","textAlign":"center","color":"white"}}>
    <div className="container">
        <h2 style={{"fontFamily":"var(--font-heading)","fontSize":"2.5rem","fontWeight":"800","marginBottom":"24px","color":"white"}}>Ready To Boost Your<br />Website's Performance?</h2>
        <Link to="/contact" className="btn btn-primary" style={{"background":"white","color":"var(--color-primary)","borderColor":"white"}}>Contact Us</Link>
    </div>
</section>

        </main>
    );
}
