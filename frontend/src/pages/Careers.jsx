import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../config/api';
import { Link } from 'react-router-dom';

export default function Careers() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCareers = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/api/careers`);
                const data = await res.json();
                if (data.status === 'success') {
                    setJobs(data.data || []);
                }
            } catch (err) {
                console.error('Failed to fetch careers:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchCareers();
    }, []);

    // Helper to parse requirements whether JSON array or plain text
    const parseRequirements = (req) => {
        if (!req) return [];
        if (Array.isArray(req)) return req;
        try {
            const parsed = JSON.parse(req);
            if (Array.isArray(parsed)) return parsed;
        } catch (e) {}
        return req.split('\n').filter(r => r.trim()).flatMap(r => r.split('. ')).filter(r => r.trim());
    };

    const featuredJob = jobs.find(j => 
        (j.department && j.department.toLowerCase().includes('research')) || 
        (j.employment_type && j.employment_type.toLowerCase().includes('intern'))
    ) || jobs[0];

    const standardJobs = jobs.filter(j => !featuredJob || j.id !== featuredJob.id);

    return (
        <main style={{ background: 'var(--bg-main, #ffffff)', color: 'var(--text-color, #1e293b)' }}>
            
            {/* 1. HERO BANNER SECTION */}
            <section style={{ position: "relative", padding: "140px 0 90px", background: "linear-gradient(135deg, #191035 0%, #2a1b54 100%)", color: "#fff", overflow: "hidden" }}>
                <div className="container" style={{ maxWidth: "1200px", position: "relative", zIndex: 2 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", alignItems: "center" }}>
                        
                        {/* Hero Left Text */}
                        <div>
                            <span style={{ textTransform: "uppercase", letterSpacing: "1.8px", fontSize: "0.8rem", fontWeight: "700", color: "#a78bfa", display: "block", marginBottom: "16px" }}>
                                CAREERS AT METRICVIBES
                            </span>
                            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "3.2rem", fontWeight: "800", lineHeight: "1.15", color: "#fff", marginBottom: "20px" }}>
                                Build things that did not exist earlier.
                            </h1>
                            <p style={{ fontSize: "1.05rem", lineHeight: "1.65", color: "rgba(255, 255, 255, 0.85)", marginBottom: "32px", maxWidth: "560px" }}>
                                MetricVibes is looking for people who have done credible work, like to experiment, and want to build new analytics and AI systems from first principles. If you enjoy turning unclear problems into working products and workflows, you will feel at home here.
                            </p>
                            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                                <a 
                                    href="#open-roles" 
                                    style={{
                                        background: "#ffffff",
                                        color: "#1e1b4b",
                                        padding: "13px 28px",
                                        borderRadius: "8px",
                                        fontWeight: "700",
                                        fontSize: "0.92rem",
                                        textDecoration: "none",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                                    }}
                                >
                                    View open roles
                                </a>
                                <a 
                                    href="#how-to-apply" 
                                    style={{
                                        background: "transparent",
                                        color: "#ffffff",
                                        border: "1px solid rgba(255, 255, 255, 0.3)",
                                        padding: "13px 28px",
                                        borderRadius: "8px",
                                        fontWeight: "700",
                                        fontSize: "0.92rem",
                                        textDecoration: "none",
                                        display: "inline-flex",
                                        alignItems: "center"
                                    }}
                                >
                                    How to apply
                                </a>
                            </div>
                        </div>

                        {/* Hero Right Glass Card */}
                        <div style={{
                            background: "rgba(255, 255, 255, 0.06)",
                            backdropFilter: "blur(12px)",
                            border: "1px solid rgba(255, 255, 255, 0.14)",
                            borderRadius: "20px",
                            padding: "36px",
                            boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                        }}>
                            <h3 style={{ fontSize: "0.84rem", letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: "800", color: "#a78bfa", marginBottom: "24px" }}>
                                WHO WE WANT TO MEET
                            </h3>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "20px" }}>
                                <li style={{ display: "flex", gap: "14px", alignItems: "flex-start", fontSize: "0.96rem", lineHeight: "1.5", color: "rgba(255, 255, 255, 0.9)" }}>
                                    <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#a78bfa", marginTop: "7px", flexShrink: 0 }}></span>
                                    <span>Innovative people who have shipped credible work, not just collected certifications.</span>
                                </li>
                                <li style={{ display: "flex", gap: "14px", alignItems: "flex-start", fontSize: "0.96rem", lineHeight: "1.5", color: "rgba(255, 255, 255, 0.9)" }}>
                                    <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#a78bfa", marginTop: "7px", flexShrink: 0 }}></span>
                                    <span>Builders who like experimenting with new tools, ideas, and workflows.</span>
                                </li>
                                <li style={{ display: "flex", gap: "14px", alignItems: "flex-start", fontSize: "0.96rem", lineHeight: "1.5", color: "rgba(255, 255, 255, 0.9)" }}>
                                    <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#a78bfa", marginTop: "7px", flexShrink: 0 }}></span>
                                    <span>People who are excited by blank-page problems where the playbook does not exist yet.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. 4 PILLARS CARDS GRID */}
            <section style={{ padding: "0 0 70px", marginTop: "-35px", position: "relative", zIndex: 3 }}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
                        
                        <div style={{ background: "var(--card-bg, #ffffff)", border: "1px solid var(--border-color, rgba(124, 58, 237, 0.15))", borderRadius: "16px", padding: "28px", boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}>
                            <h3 style={{ fontSize: "1.1rem", fontWeight: "800", color: "var(--heading-color, #1e1b4b)", marginBottom: "10px" }}>Credible work</h3>
                            <p style={{ fontSize: "0.88rem", lineHeight: "1.55", color: "var(--text-muted, #64748b)", margin: 0 }}>
                                Show us what you have built, improved, audited, written, automated, or shipped.
                            </p>
                        </div>

                        <div style={{ background: "var(--card-bg, #ffffff)", border: "1px solid var(--border-color, rgba(124, 58, 237, 0.15))", borderRadius: "16px", padding: "28px", boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}>
                            <h3 style={{ fontSize: "1.1rem", fontWeight: "800", color: "var(--heading-color, #1e1b4b)", marginBottom: "10px" }}>Experimental mindset</h3>
                            <p style={{ fontSize: "0.88rem", lineHeight: "1.55", color: "var(--text-muted, #64748b)", margin: 0 }}>
                                We like people who test ideas quickly and learn from what actually works.
                            </p>
                        </div>

                        <div style={{ background: "var(--card-bg, #ffffff)", border: "1px solid var(--border-color, rgba(124, 58, 237, 0.15))", borderRadius: "16px", padding: "28px", boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}>
                            <h3 style={{ fontSize: "1.1rem", fontWeight: "800", color: "var(--heading-color, #1e1b4b)", marginBottom: "10px" }}>Production systems</h3>
                            <p style={{ fontSize: "0.88rem", lineHeight: "1.55", color: "var(--text-muted, #64748b)", margin: 0 }}>
                                Analytics, tracking, BI, and AI workflows that need to survive real use.
                            </p>
                        </div>

                        <div style={{ background: "var(--card-bg, #ffffff)", border: "1px solid var(--border-color, rgba(124, 58, 237, 0.15))", borderRadius: "16px", padding: "28px", boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}>
                            <h3 style={{ fontSize: "1.1rem", fontWeight: "800", color: "var(--heading-color, #1e1b4b)", marginBottom: "10px" }}>Builder culture</h3>
                            <p style={{ fontSize: "0.88rem", lineHeight: "1.55", color: "var(--text-muted, #64748b)", margin: 0 }}>
                                Small team, high ownership, and room to create things from zero.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. "BRING PROOF OF WORK" SECTION */}
            <section style={{ padding: "50px 0 90px", background: "var(--bg-alt, #faf5ff)" }}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "50px", alignItems: "center" }}>
                        
                        {/* Left Info */}
                        <div>
                            <span style={{ textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.8rem", fontWeight: "700", color: "#7c3aed", display: "block", marginBottom: "12px" }}>
                                HOW IT FEELS
                            </span>
                            <h2 style={{ fontSize: "2.5rem", fontWeight: "800", lineHeight: "1.2", color: "var(--heading-color, #1e1b4b)", marginBottom: "20px" }}>
                                Bring proof of work, not just a resume.
                            </h2>
                            <p style={{ fontSize: "1.02rem", lineHeight: "1.65", color: "var(--text-muted, #475569)", margin: 0 }}>
                                We are drawn to people who have already made something real: a useful workflow, a sharp audit, a technical article, a dashboard, an automation, a product experiment, or a system that solved a problem others ignored.
                            </p>
                        </div>

                        {/* Right Card */}
                        <div style={{
                            background: "var(--card-bg, #ffffff)",
                            border: "1px solid var(--border-color, rgba(124, 58, 237, 0.18))",
                            borderRadius: "20px",
                            padding: "36px",
                            boxShadow: "0 15px 35px rgba(124, 58, 237, 0.08)"
                        }}>
                            <h3 style={{ fontSize: "1.15rem", fontWeight: "800", color: "var(--heading-color, #1e1b4b)", marginBottom: "24px" }}>
                                You will enjoy this if you like:
                            </h3>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "18px" }}>
                                <li style={{ display: "flex", gap: "14px", alignItems: "flex-start", fontSize: "0.94rem", lineHeight: "1.5", color: "var(--text-color, #334155)" }}>
                                    <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#7c3aed", marginTop: "6px", flexShrink: 0 }}></span>
                                    <span>experimenting with new tools before everyone has a template for them</span>
                                </li>
                                <li style={{ display: "flex", gap: "14px", alignItems: "flex-start", fontSize: "0.94rem", lineHeight: "1.5", color: "var(--text-color, #334155)" }}>
                                    <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#7c3aed", marginTop: "6px", flexShrink: 0 }}></span>
                                    <span>building workflows, dashboards, automations, or AI systems from scratch</span>
                                </li>
                                <li style={{ display: "flex", gap: "14px", alignItems: "flex-start", fontSize: "0.94rem", lineHeight: "1.5", color: "var(--text-color, #334155)" }}>
                                    <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#7c3aed", marginTop: "6px", flexShrink: 0 }}></span>
                                    <span>turning messy business problems into something useful and working</span>
                                </li>
                                <li style={{ display: "flex", gap: "14px", alignItems: "flex-start", fontSize: "0.94rem", lineHeight: "1.5", color: "var(--text-color, #334155)" }}>
                                    <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#7c3aed", marginTop: "6px", flexShrink: 0 }}></span>
                                    <span>owning a problem from first question to shipped output</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. CURRENT OPENINGS SECTION */}
            <section className="section" id="open-roles" style={{ padding: "80px 0 90px" }}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    
                    {/* Section Header */}
                    <div className="section__header" style={{ textAlign: "center", marginBottom: "50px" }}>
                        <span className="section__badge" style={{ textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.82rem", fontWeight: "700" }}>
                            OPEN ROLES
                        </span>
                        <h2 className="section__title" style={{ fontSize: "2.4rem", fontWeight: "800", marginTop: "10px" }}>
                            Current <span className="text-gradient">openings</span>
                        </h2>
                    </div>

                    {loading ? (
                        <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
                            <i className="fas fa-spinner fa-spin fa-2x"></i>
                            <p style={{ marginTop: '14px' }}>Loading open opportunities...</p>
                        </div>
                    ) : (
                        <>
                            {/* Featured Internship Role Card */}
                            {featuredJob && (
                                <div className="featured-role-card" style={{ marginBottom: "60px" }}>
                                    <div className="featured-role-grid">
                                        {/* Left Content */}
                                        <div className="featured-role-main">
                                            <span className="featured-role-badge">
                                                {featuredJob.employment_type} · {featuredJob.location}
                                            </span>

                                            <h2 className="featured-role-title">
                                                {featuredJob.title}
                                            </h2>

                                            <p className="featured-role-desc">
                                                {featuredJob.description}
                                            </p>

                                            {/* 3 Sub-Cards */}
                                            {parseRequirements(featuredJob.requirements).length > 0 && (
                                                <div className="featured-subcards-grid" style={{ marginTop: "24px" }}>
                                                    {parseRequirements(featuredJob.requirements).map((req, idx) => (
                                                        <div className="featured-subcard" key={idx}>
                                                            <h4 className="featured-subcard-title">Requirement #{idx + 1}</h4>
                                                            <p className="featured-subcard-text">{req}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Right Apply Sidebar */}
                                        <div className="featured-role-sidebar">
                                            <span className="featured-apply-label">Apply at</span>
                                            <a href="mailto:hello@querysafe.ai" className="featured-apply-email" style={{ fontSize: '1.25rem', fontWeight: '800', wordBreak: 'break-all' }}>
                                                hello@querysafe.ai
                                            </a>

                                            <p className="featured-sidebar-note" style={{ marginTop: '16px' }}>
                                                The recruitment team for both MetricVibes and QuerySafe reviews this inbox, so you can apply for roles across both teams from here.
                                            </p>

                                            <p className="featured-sidebar-note">
                                                Send your resume, 2-3 links or samples that show how you think, and a short note on a recent AI or analytics launch you found interesting.
                                            </p>

                                            <Link to="/contact" className="btn btn--primary" style={{ width: '100%', marginTop: '20px', textAlign: 'center', justifyContent: 'center' }}>
                                                Apply Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Experienced Positions */}
                            {standardJobs.length > 0 && (
                                <div style={{ marginTop: "50px" }}>
                                    <h3 className="section__title" style={{ fontSize: "1.8rem", fontWeight: "800", textAlign: "center", marginBottom: "36px" }}>
                                        Experienced <span className="text-gradient">Positions</span>
                                    </h3>
                                    
                                    <div className="jobs-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px" }}>
                                        {standardJobs.map((job, index) => (
                                            <div className="job-card" key={job.id} data-aos="fade-up" data-aos-delay={index * 100}>
                                                <div className="job-card__header">
                                                    <span className={`job-badge job-badge--${(job.department || 'general').toLowerCase()}`}>
                                                        {job.department || 'General'}
                                                    </span>
                                                    <span className="job-location">
                                                        <i className="fas fa-map-marker-alt"></i> {job.location || 'Remote'}
                                                    </span>
                                                </div>
                                                <h3 className="job-card__title">{job.title}</h3>
                                                <p className="job-card__desc">{job.description}</p>
                                                <div style={{ marginTop: 'auto', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <span style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-muted)' }}>
                                                        <i className="fas fa-clock" style={{ marginRight: '5px' }}></i> {job.employment_type}
                                                    </span>
                                                    <Link to="/contact" className="btn btn--outline job-card__btn">Apply Now</Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* 5. "BUILDERS SHOULD STILL WRITE IN" SECTION */}
            <section style={{ padding: "80px 0", background: "var(--bg-alt, #faf5ff)", borderTop: "1px solid var(--border-color, rgba(124, 58, 237, 0.1))" }}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "50px", alignItems: "center" }}>
                        
                        {/* Left Info */}
                        <div>
                            <span style={{ textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.8rem", fontWeight: "700", color: "#7c3aed", display: "block", marginBottom: "12px" }}>
                                NOT SEEING YOUR ROLE?
                            </span>
                            <h2 style={{ fontSize: "2.4rem", fontWeight: "800", lineHeight: "1.2", color: "var(--heading-color, #1e1b4b)", marginBottom: "20px" }}>
                                Builders should still write in.
                            </h2>
                            <p style={{ fontSize: "1.02rem", lineHeight: "1.65", color: "var(--text-muted, #475569)", margin: 0 }}>
                                If you have built credible work in analytics, AI, automation, product, content, BI, or data systems, send a short note. We are especially interested in people who like creating what does not already exist.
                            </p>
                        </div>

                        {/* Right Useful Profiles Card */}
                        <div style={{
                            background: "var(--card-bg, #ffffff)",
                            border: "1px solid var(--border-color, rgba(124, 58, 237, 0.18))",
                            borderRadius: "20px",
                            padding: "36px",
                            boxShadow: "0 15px 35px rgba(124, 58, 237, 0.08)"
                        }}>
                            <h3 style={{ fontSize: "1.1rem", fontWeight: "800", color: "var(--heading-color, #1e1b4b)", marginBottom: "18px" }}>
                                Useful profiles
                            </h3>
                            
                            {/* Profile Tags Pills */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "28px" }}>
                                {['GA4 / GTM specialist', 'AI workflow builder', 'Analytics engineer', 'BI analyst', 'Technical content', 'Product experimenter'].map((tag, idx) => (
                                    <span 
                                        key={idx}
                                        style={{
                                            padding: "6px 14px",
                                            borderRadius: "20px",
                                            background: "rgba(124, 58, 237, 0.1)",
                                            color: "#7c3aed",
                                            fontWeight: "700",
                                            fontSize: "0.82rem"
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <span style={{ fontSize: "0.8rem", fontWeight: "700", color: "var(--text-muted)", display: "block", marginBottom: "4px" }}>
                                Apply at
                            </span>
                            <a href="mailto:hello@querysafe.ai" style={{ fontSize: "1.25rem", fontWeight: "800", color: "#7c3aed", textDecoration: "none", display: "block", marginBottom: "12px", wordBreak: "break-all" }}>
                                hello@querysafe.ai
                            </a>

                            <p style={{ fontSize: "0.84rem", lineHeight: "1.5", color: "var(--text-muted)", margin: 0 }}>
                                The recruitment team for both MetricVibes and QuerySafe reviews this inbox, so you can apply for roles across both teams from here.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 6. BOTTOM DARK CTA BANNER */}
            <section id="how-to-apply" style={{ padding: "90px 0", background: "linear-gradient(135deg, #191035 0%, #2a1b54 100%)", color: "#fff", textAlign: "center" }}>
                <div className="container" style={{ maxWidth: "850px" }}>
                    <h2 style={{ fontSize: "2.6rem", fontWeight: "800", color: "#fff", marginBottom: "16px" }}>
                        Want to build what does not exist yet?
                    </h2>
                    <p style={{ fontSize: "1.08rem", lineHeight: "1.6", color: "rgba(255, 255, 255, 0.85)", marginBottom: "32px" }}>
                        Send your profile, the kind of work you want to do, and a few examples of credible things you have built or improved.
                    </p>

                    <div style={{ marginBottom: "20px" }}>
                        <span style={{ fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: "700", color: "rgba(255,255,255,0.6)", display: "block", marginBottom: "6px" }}>
                            Apply at
                        </span>
                        <a href="mailto:hello@querysafe.ai" style={{ fontSize: "1.6rem", fontWeight: "800", color: "#a78bfa", textDecoration: "none" }}>
                            hello@querysafe.ai
                        </a>
                    </div>

                    <p style={{ fontSize: "0.86rem", color: "rgba(255, 255, 255, 0.65)", maxWidth: "600px", margin: "0 auto 28px" }}>
                        The recruitment team for both MetricVibes and QuerySafe reviews this inbox, so you can apply for roles across both teams from here.
                    </p>

                    <Link to="/contact" className="btn btn--primary" style={{ background: "#ffffff", color: "#1e1b4b", padding: "14px 36px", borderRadius: "8px", fontWeight: "700", fontSize: "0.95rem", textDecoration: "none" }}>
                        Contact Us Directly
                    </Link>
                </div>
            </section>

        </main>
    );
}
