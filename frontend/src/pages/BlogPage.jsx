import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config/api';

export default function BlogPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch blogs from FastAPI backend
        fetch(`${API_BASE_URL}/api/blogs`)
            .then(res => res.json())
            .then(data => {
                if(data.status === "success") {
                    setBlogs(data.data);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching blogs:", err);
                setLoading(false);
            });
    }, []);

    const filteredBlogs = blogs.filter(blog => 
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        (blog.category_name && blog.category_name.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    // Helper to format date
    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    };

    // Helper to assign a random-looking gradient and icon based on category or id
    const getCardStyle = (blog) => {
        const id = blog.id % 4;
        switch(id) {
            case 0: return { icon: "fa-brain", color1: "#1E3A8A", color2: "#3B82F6" };
            case 1: return { icon: "fa-server", color1: "#064E3B", color2: "#10B981" };
            case 2: return { icon: "fa-chart-pie", color1: "#4C1D95", color2: "#8B5CF6" };
            case 3: return { icon: "fa-tags", color1: "#9D174D", color2: "#F43F5E" };
            default: return { icon: "fa-file-lines", color1: "#1E3A8A", color2: "#3B82F6" };
        }
    };

    return (
        <main>
            {/* Search Section */}
            <section style={{background:"var(--surface-secondary)",paddingTop:"170px"}}>
                <div className="container">
                    <h2 style={{fontFamily:"var(--font-heading)",fontSize:"1.5rem",fontWeight:"700",marginBottom:"16px",color:"var(--text-primary)"}}>Quick Search..</h2>
                    <div style={{display:"flex",maxWidth:"100%",border:"1px solid var(--border-color)",borderRadius:"4px",overflow:"hidden",background:"var(--surface-card)"}}>
                        <input 
                            type="text" 
                            placeholder="Search DPDP, Google Analytics ...." 
                            style={{flexGrow:"1",padding:"16px 20px",border:"none",background:"transparent",color:"var(--text-primary)",outline:"none"}} 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button style={{background:"#333333",color:"white",border:"none",padding:"0 32px",fontWeight:"bold",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px"}}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            SEARCH
                        </button>
                    </div>
                </div>
            </section>

            <section className="section" style={{background:"var(--surface-secondary)"}}>
                <div className="container">
                    {loading ? (
                        <div style={{textAlign: 'center', padding: '40px'}}>Loading blogs...</div>
                    ) : (
                        <div className="content-grid" style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"32px"}}>
                            {filteredBlogs.length > 0 ? filteredBlogs.map((blog) => {
                                const style = getCardStyle(blog);
                                return (
                                <div className="blog-card" key={blog.id} style={{background:"#ffffff",borderRadius:"4px",overflow:"hidden",border:"1px solid #eaeaea",display:"flex",flexDirection:"column"}}>
                                    <Link to={`/blog/${blog.slug}`} style={{display:"block",height:"180px",position:"relative",overflow:"hidden",background:`linear-gradient(135deg, ${style.color1}, ${style.color2})`,color:"white",textDecoration:"none"}}>
                                        <div style={{position:"absolute",width:"180px",height:"180px",background:"rgba(255,255,255,0.06)",borderRadius:"50%",top:"-40px",left:"-60px",pointerEvents:"none"}}></div>
                                        <div style={{position:"absolute",width:"120px",height:"120px",background:"rgba(255,255,255,0.04)",borderRadius:"50%",bottom:"-30px",right:"40px",pointerEvents:"none"}}></div>
                                        <div style={{position:"absolute",width:"220px",height:"220px",background:"rgba(0,0,0,0.1)",borderRadius:"50%",top:"20px",right:"-120px",pointerEvents:"none"}}></div>
                                        
                                        <div style={{position:"absolute",top:"12px",right:"12px",background:"#ffffff",padding:"6px 14px",borderRadius:"20px",display:"flex",alignItems:"center",boxShadow:"0 4px 10px rgba(0,0,0,0.15)",zIndex:"2"}}>
                                            <img src="/assets/img/logo-new.webp" alt="MetricVibes" style={{height:"22px"}} />
                                        </div>
                                        
                                        <div style={{position:"absolute",inset:"0",padding:"20px",display:"flex",alignItems:"center",zIndex:"1"}}>
                                            <div style={{width:"28%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                <i className={`fa-solid ${style.icon}`} style={{fontSize:"3rem",color:"rgba(255,255,255,0.95)",textShadow:"0 4px 12px rgba(0,0,0,0.2)"}}></i>
                                            </div>
                                            <div style={{width:"72%",paddingLeft:"12px"}}>
                                                <span style={{display:"inline-block",background:"rgba(255,255,255,0.15)",padding:"4px 10px",borderRadius:"20px",fontSize:"0.6rem",fontWeight:"700",textTransform:"uppercase",letterSpacing:"0.5px",marginBottom:"8px",backdropFilter:"blur(4px)",boxShadow:"0 2px 5px rgba(0,0,0,0.1)"}}>
                                                    {blog.category_name || "Insight"}
                                                </span>
                                                <h4 style={{margin:"0",fontSize:"1rem",lineHeight:"1.35",fontFamily:"var(--font-heading)",fontWeight:"700",color:"#ffffff",textShadow:"0 2px 4px rgba(0,0,0,0.4)",display:"-webkit-box",WebkitLineClamp:"3",WebkitBoxOrient:"vertical",overflow:"hidden",paddingRight:"8px"}}>
                                                    {blog.title}
                                                </h4>
                                            </div>
                                        </div>
                                    </Link>
                                    <div style={{padding:"20px",flexGrow:"1",display:"flex",flexDirection:"column",background:"#ffffff"}}>
                                        <h3 style={{fontSize:"1.15rem",fontFamily:"var(--font-heading)",fontWeight:"700",margin:"0 0 12px 0",lineHeight:"1.4"}}>
                                            <Link to={`/blog/${blog.slug}`} style={{color:"#3b1e70",textDecoration:"none"}}>
                                                {blog.title}
                                            </Link>
                                        </h3>
                                        <p style={{fontSize:"0.85rem",color:"#777",lineHeight:"1.6",margin:"0 0 20px 0",flexGrow:"1"}}>
                                            {blog.excerpt}
                                        </p>
                                        <Link to={`/blog/${blog.slug}`} style={{fontSize:"0.75rem",fontWeight:"700",color:"#3b1e70",textDecoration:"none",textTransform:"uppercase",letterSpacing:"0.5px",marginBottom:"20px",display:"inline-block"}}>
                                            READ MORE &raquo;
                                        </Link>
                                        <div style={{borderTop:"1px solid #eaeaea",paddingTop:"16px",fontSize:"0.7rem",color:"#999",display:"flex",alignItems:"center"}}>
                                            <span>{formatDate(blog.published_at)}</span>
                                            <span style={{margin:"0 8px"}}>|</span>
                                            <span>{blog.author_name}</span>
                                        </div>
                                    </div>
                                </div>
                            )}) : (
                                <div className="text-center" style={{width:"100%",gridColumn:"1 / -1", padding: "40px 0"}}>
                                    <h2>No Blogs Found</h2>
                                    <p>Try adjusting your search query.</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}

