import React from 'react';


export default function Careers() {
    return (
        <main>
            

{/*  Header Banner  */}
<section style={{"position":"relative","padding":"150px 0 30px","background":"#1F163D","textAlign":"center","color":"#fff"}}>
    <div className="container" style={{"position":"relative","zIndex":"2","maxWidth":"900px"}}>
        <h1 style={{"fontFamily":"var(--font-heading)","fontSize":"3rem","fontWeight":"700","marginBottom":"12px","color":"#fff"}}>Careers</h1>
        <p style={{"fontSize":"1.125rem","lineHeight":"1.5","color":"rgba(255, 255, 255, 0.9)"}}>
            Join our team of expert analysts, engineers, and problem solvers.
        </p>
    </div>
</section>

<section className="section" id="careers" style={{ padding: "70px 0 90px" }}>
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

        {/* Featured Internship Role Card */}
        <div className="featured-role-card">
            <div className="featured-role-grid">
                
                {/* Left Content */}
                <div className="featured-role-main">
                    <span className="featured-role-badge">
                        Internship · Noida / Hybrid · 6 months
                    </span>

                    <h2 className="featured-role-title">
                        Tech Research & Content Intern
                    </h2>

                    <p className="featured-role-desc">
                        We are looking for a college student or recent graduate who is genuinely curious about new technology and wants to understand what is actually being built in AI and analytics, then turn that research into useful content and small proof-of-concept projects for real businesses.
                    </p>

                    {/* 3 Sub-Cards */}
                    <div className="featured-subcards-grid">
                        <div className="featured-subcard">
                            <h4 className="featured-subcard-title">What you will do</h4>
                            <p className="featured-subcard-text">
                                Track launches and trends across Google Cloud, BigQuery, GA4, Anthropic / Claude, AI, analytics, and MarTech. Research what they do and how businesses can adopt them.
                            </p>
                        </div>

                        <div className="featured-subcard">
                            <h4 className="featured-subcard-title">Build and write</h4>
                            <p className="featured-subcard-text">
                                Experiment with GCP and Claude tooling, test ideas hands-on, build small proof-of-concept projects, and write explainers, blogs, LinkedIn pieces, and internal briefs.
                            </p>
                        </div>

                        <div className="featured-subcard">
                            <h4 className="featured-subcard-title">We are looking for</h4>
                            <p className="featured-subcard-text">
                                Curiosity, clear writing, first-principles thinking, hunger to experiment, some hands-on GCP exposure, and credible side projects, GitHub, portfolio, or proof of work.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Apply Sidebar */}
                <div className="featured-role-sidebar">
                    <span className="featured-apply-label">Apply at</span>
                    <a href="mailto:hello@querysafe.ai" className="featured-apply-email">
                        hello@querysafe.ai
                    </a>

                    <p className="featured-sidebar-note">
                        The recruitment team for both MetricVibes and QuerySafe reviews this inbox, so you can apply for roles across both teams from here.
                    </p>

                    <p className="featured-sidebar-note">
                        Send your resume, 2-3 links or samples that show how you think, and a short note on a recent AI or analytics launch you found interesting.
                    </p>
                </div>
            </div>
        </div>

        {/* Other Experienced Roles */}
        <div style={{ marginTop: "70px" }}>
            <h3 className="section__title" style={{ fontSize: "1.8rem", fontWeight: "800", textAlign: "center", marginBottom: "36px" }}>
                Experienced <span className="text-gradient">Positions</span>
            </h3>
            
            <div className="jobs-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px" }}>
                {/* Job Card 1 */}
                <div className="job-card" data-aos="fade-up" data-aos-delay="0">
                    <div className="job-card__header">
                        <span className="job-badge job-badge--engineering">Engineering</span>
                        <span className="job-location"><i className="fas fa-map-marker-alt"></i> Remote</span>
                    </div>
                    <h3 className="job-card__title">Senior Data Engineer</h3>
                    <p className="job-card__desc">Build scalable data pipelines and robust architecture for our enterprise clients using GCP and dbt.</p>
                    <a href="/contact" className="btn btn--outline job-card__btn">Apply Now</a>
                </div>

                {/* Job Card 2 */}
                <div className="job-card" data-aos="fade-up" data-aos-delay="100">
                    <div className="job-card__header">
                        <span className="job-badge job-badge--analytics">Analytics</span>
                        <span className="job-location"><i className="fas fa-map-marker-alt"></i> Hybrid</span>
                    </div>
                    <h3 className="job-card__title">Lead Analytics Consultant</h3>
                    <p className="job-card__desc">Lead complex GA4 migrations and design measurement strategies for top global brands.</p>
                    <a href="/contact" className="btn btn--outline job-card__btn">Apply Now</a>
                </div>

                {/* Job Card 3 */}
                <div className="job-card" data-aos="fade-up" data-aos-delay="200">
                    <div className="job-card__header">
                        <span className="job-badge job-badge--marketing">Marketing</span>
                        <span className="job-location"><i className="fas fa-map-marker-alt"></i> Remote</span>
                    </div>
                    <h3 className="job-card__title">Growth Marketing Manager</h3>
                    <p className="job-card__desc">Drive B2B demand generation, manage paid campaigns, and optimize conversion funnels.</p>
                    <a href="/contact" className="btn btn--outline job-card__btn">Apply Now</a>
                </div>
            </div>
        </div>
    </div>
</section>

        </main>
    );
}
