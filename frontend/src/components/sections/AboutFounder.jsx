import React from 'react';

export default function AboutFounder() {
    return (
        <>
            

<style dangerouslySetInnerHTML={{ __html: `
/* Modernized Timeline (Travel Design Pattern) */
.founder-timeline {
    margin-top: 10px;
    position: relative;
    margin-left: 20px;
}

.founder-timeline-year-badge {
    position: absolute;
    left: -23px; /* Centered with respect to left: 0 */
    top: 15px; /* Align vertically with the card */
    width: 44px;
    height: 44px;
    background: var(--color-accent);
    border: 2px solid #fff;
    border-radius: 50%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.85rem;
    font-weight: 800;
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
    z-index: 2;
}

[data-theme="dark"] .founder-timeline-year-badge {
    border-color: #222;
    box-shadow: 0 4px 10px rgba(0,0,0,0.5);
}

.founder-timeline-event {
    position: relative;
    padding-left: 45px;
    margin-bottom: 40px;
}

/* Vertical line segment connecting events */
.founder-timeline-event::before {
    content: '';
    position: absolute;
    left: -2px; /* Center of the badge (-23 + 22 = -1, minus 1 for half-width) */
    top: 59px; /* Bottom of the badge (15 + 44) */
    bottom: -55px; /* Extends to top of next badge (40px margin + 15px top) */
    width: 2px;
    background: rgba(120, 120, 120, 0.3);
    z-index: 1;
}

/* Stop line at the last event */
.founder-timeline-event:last-child::before {
    display: none;
}

/* The Connector Line */
.founder-timeline-event::after {
    content: '';
    position: absolute;
    left: 21px; /* Starts after the badge: -23 + 44 = 21 */
    top: 36px; /* Center with the badge at top 15: 15 + 22 (center) - 1 (line half-height) = 36 */
    width: 24px; /* Connects from 21 to 45 (padding-left) */
    height: 2px;
    background: rgba(120, 120, 120, 0.3);
    z-index: 1;
}

.founder-timeline-card {
    background: var(--surface-primary);
    border: 1px solid rgba(0,0,0,0.05);
    border-radius: 4px; /* Square-ish like the design */
    padding: 20px 24px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.03);
    transition: all 0.3s ease;
    position: relative;
}

[data-theme="dark"] .founder-timeline-card {
    border: 1px solid rgba(255,255,255,0.05);
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
}

.founder-timeline-card:hover {
    transform: translateX(5px);
    box-shadow: 0 10px 30px rgba(79, 70, 229, 0.1);
    border-color: rgba(79, 70, 229, 0.2);
}

.founder-timeline-desc {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.6;
}
.founder-timeline-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 8px;
}

.cert-badge::before {
    display: none !important;
    content: "" !important;
}

/* Premium Founder Profile Card */
.custom-founder-card {
    margin-top: 30px;
    padding: 32px;
    border: 1px solid rgba(124, 58, 237, 0.18);
    border-radius: 22px;
    background: linear-gradient(135deg, #ffffff 0%, #f8f6fc 100%);
    box-shadow: 0 14px 40px rgba(124, 58, 237, 0.08);
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), 
                box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1), 
                border-color 0.35s cubic-bezier(0.4, 0, 0.2, 1), 
                background 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 5;
}

[data-theme="dark"] .custom-founder-card {
    border: 1px solid rgba(167, 139, 250, 0.3);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    background: linear-gradient(135deg, rgba(30, 16, 60, 0.95) 0%, rgba(20, 10, 42, 0.92) 100%);
}

.custom-founder-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 25px 60px rgba(124, 58, 237, 0.28), 0 0 30px rgba(167, 139, 250, 0.18);
    border-color: rgba(124, 58, 237, 0.45);
}

[data-theme="dark"] .custom-founder-card:hover {
    transform: translateY(-6px) !important;
    border-color: rgba(167, 139, 250, 0.55) !important;
    box-shadow: 0 25px 60px rgba(124, 58, 237, 0.4), 0 0 30px rgba(167, 139, 250, 0.25) !important;
    background: linear-gradient(135deg, rgba(35, 18, 70, 0.98) 0%, rgba(24, 12, 50, 0.95) 100%) !important;
}

.custom-founder-card:active {
    transform: translateY(-2px) scale(0.985);
    box-shadow: 0 10px 30px rgba(124, 58, 237, 0.3);
}

.founder-querysafe-brand {
    display: inline-flex;
    align-items: center;
    padding: 10px 22px;
    background: #ffffff;
    border: 1px solid rgba(124, 58, 237, 0.18);
    border-radius: 18px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
}

.founder-querysafe-brand:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 10px 30px rgba(124, 58, 237, 0.3);
    border-color: rgba(124, 58, 237, 0.45);
}

.querysafe-logo-img {
    height: 42px;
    width: auto;
    object-fit: contain;
    display: block;
}

[data-theme="dark"] .founder-querysafe-brand {
    background: #ffffff !important;
    border-color: rgba(255, 255, 255, 0.3) !important;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4) !important;
}

.founder-profile-avatar {
    width: 82px;
    height: 82px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 8px 25px rgba(124, 58, 237, 0.35);
    border: 3px solid #7c3aed;
    padding: 2px;
    background: #ffffff;
    transition: transform 0.3s ease;
}

.custom-founder-card:hover .founder-profile-avatar {
    transform: scale(1.05);
}

/* Modernized Cert Badges - Single Line Row */
.founder-certifications {
    margin-top: 20px;
    display: flex;
    flex-wrap: nowrap;
    gap: 8px;
    align-items: center;
    overflow-x: auto;
    scrollbar-width: none;
}
.founder-certifications::-webkit-scrollbar {
    display: none;
}
.cert-badge {
    padding: 6px 12px;
    border-radius: 30px;
    font-size: 0.76rem;
    font-weight: 600;
    white-space: nowrap;
    flex-shrink: 0;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    cursor: default;
}

.cert-badge:hover {
    transform: translateY(-2px) scale(1.04);
}

.cert-badge--adobe {
    background: rgba(245, 158, 11, 0.12);
    border: 1px solid rgba(245, 158, 11, 0.3);
    color: #d97706;
}
[data-theme="dark"] .cert-badge--adobe {
    background: rgba(245, 158, 11, 0.18);
    color: #fbbf24;
}

.cert-badge--google {
    background: rgba(59, 130, 246, 0.12);
    border: 1px solid rgba(59, 130, 246, 0.3);
    color: #2563eb;
}
[data-theme="dark"] .cert-badge--google {
    background: rgba(59, 130, 246, 0.18);
    color: #60a5fa;
}

.cert-badge--mixpanel {
    background: rgba(168, 85, 247, 0.12);
    border: 1px solid rgba(168, 85, 247, 0.3);
    color: #7c3aed;
}
[data-theme="dark"] .cert-badge--mixpanel {
    background: rgba(168, 85, 247, 0.18);
    color: #c084fc;
}

.cert-badge--claude {
    background: rgba(234, 88, 12, 0.12);
    border: 1px solid rgba(234, 88, 12, 0.3);
    color: #ea580c;
}
.founder__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
}

@media (max-width: 991.98px) {
    .section__header {
        margin-bottom: 30px !important;
    }
    .founder__grid {
        grid-template-columns: 1fr !important;
        gap: 30px !important;
    }
    .founder__content {
        width: 100% !important;
    }
    .founder__timeline {
        padding-left: 0 !important;
        margin-top: 20px !important;
        width: 100% !important;
    }
    .founder-timeline {
        margin-left: 12px !important;
    }
    .founder-timeline-event {
        padding-left: 36px !important;
        margin-bottom: 30px !important;
    }
    .founder-timeline-event::after {
        width: 15px !important;
    }
    .custom-founder-card {
        padding: 20px 16px !important;
        margin-top: 24px !important;
        width: 100% !important;
        box-sizing: border-box !important;
    }
    .founder-certifications {
        flex-wrap: wrap !important;
        gap: 8px !important;
    }
    .cert-badge {
        font-size: 0.72rem !important;
        padding: 5px 10px !important;
    }
}
` }} />

<section className="section section--alt" id="founder" style={{ padding: "60px 0 35px 0" }}>
    <div className="container">
        <div className="section__header" style={{"textAlign":"left","maxWidth":"800px","marginBottom":"50px"}}>
            <span className="section__badge" style={{"marginLeft":"0"}}><i className="fas fa-book-open"></i> Our Story</span>
            <h2 className="section__title">Built by <span className="text-gradient">senior practitioners</span></h2>
            <p className="section__subtitle" style={{"textAlign":"left"}}>
                MetricVibes started in 2023 with a simple frustration: brands had more data than ever, and fewer answers.
            </p>
        </div>

        <div className="founder__grid">
            {/*  Content  */}
            <div className="founder__content">
                <div style={{"borderLeft":"3px solid var(--color-accent)","paddingLeft":"20px","marginBottom":"25px"}}>
                    <p style={{"color":"var(--text-primary)","fontSize":"1.05rem","fontWeight":"500","lineHeight":"1.7","margin":"0"}}>
                        We began as the hands-on measurement team behind global engagements, often as the quiet engine inside larger firms. That work took our analytics to brands like KFC, Carrefour and global aviation brands across four continents.
                    </p>
                </div>
                
                <p style={{"color":"var(--text-secondary)","fontSize":"1rem","lineHeight":"1.7","marginBottom":"20px"}}>
                    Then we went further and built our own products: <strong style={{"color":"var(--text-primary)"}}>QuerySafe</strong>, our AI knowledge and support platform, and AI data agents that answer hard business questions in natural language, with full business context.
                </p>
                <p style={{"color":"var(--text-secondary)","fontSize":"1rem","lineHeight":"1.7"}}>
                    Today we are official partners of Anthropic (Claude), Google Cloud, Zoho and Adobe, with both private enterprises and government PSU projects in execution.
                </p>

                {/*  Premium Founder Card  */}
                <div className="custom-founder-card">
                    <div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","position":"relative","zIndex":"10","flexWrap":"wrap","gap":"16px"}}>
                        <div style={{"display":"flex","alignItems":"center","gap":"20px"}}>
                            <img src="/assets/img/team/anujpic.png" alt="Anuj Bansal" className="founder-profile-avatar" onError={(e) => { e.target.onerror = null; e.target.src='https://ui-avatars.com/api/?name=Anuj+Bansal&background=random'; }} />
                            <div>
                                <h3 style={{"marginBottom":"4px","fontSize":"1.35rem","fontWeight":"800","color":"var(--text-primary)","letterSpacing":"-0.01em"}}>Anuj Bansal</h3>
                                <div style={{"color":"var(--color-accent)","fontSize":"0.92rem","fontWeight":"700","textTransform":"uppercase","letterSpacing":"0.5px"}}>Founder, MetricVibes</div>
                            </div>
                        </div>
                        
                        {/* QuerySafe Brand Badge */}
                        <a href="https://querysafe.ai" target="_blank" rel="noopener noreferrer" className="founder-querysafe-brand" title="QuerySafe AI">
                            <img src="/assets/img/querysafe-logo.png" alt="QuerySafe AI" className="querysafe-logo-img" />
                        </a>
                    </div>
                    
                    <div className="founder-certifications" style={{"position":"relative","marginTop":"20px","zIndex":"10"}}>
                        <span className="cert-badge cert-badge--adobe"><span style={{ filter: "drop-shadow(0 2px 3px rgba(245, 158, 11, 0.7))", fontSize: "0.82rem", lineHeight: 1 }}>⭐</span> Adobe Certified</span>
                        <span className="cert-badge cert-badge--google"><span style={{ filter: "drop-shadow(0 2px 3px rgba(245, 158, 11, 0.7))", fontSize: "0.82rem", lineHeight: 1 }}>⭐</span> Google Analytics</span>
                        <span className="cert-badge cert-badge--mixpanel"><span style={{ filter: "drop-shadow(0 2px 3px rgba(245, 158, 11, 0.7))", fontSize: "0.82rem", lineHeight: 1 }}>⭐</span> Mixpanel</span>
                        <span className="cert-badge cert-badge--claude"><span style={{ filter: "drop-shadow(0 2px 3px rgba(245, 158, 11, 0.7))", fontSize: "0.82rem", lineHeight: 1 }}>⭐</span> Claude Architect</span>
                    </div>
                </div>
            </div>

            {/*  Timeline  */}
            <div className="founder__timeline" style={{"paddingLeft":"10px"}}>
                <div className="founder-timeline">
                    {/*  2023  */}
                    <div className="founder-timeline-event">
                        <div className="founder-timeline-year-badge">2023</div>
                        <div className="founder-timeline-card">
                            <h4 className="founder-timeline-title">Foundation & First Shipments</h4>
                            <div className="founder-timeline-desc">Founded in Noida. First analytics implementations shipped to early clients.</div>
                        </div>
                    </div>
                    
                    {/*  2024  */}
                    <div className="founder-timeline-event">
                        <div className="founder-timeline-year-badge">2024</div>
                        <div className="founder-timeline-card">
                            <h4 className="founder-timeline-title">Global Scale & White-label</h4>
                            <div className="founder-timeline-desc">Global scale as a white-label engine: KFC across MENA & CIS, Carrefour, and private aviation.</div>
                        </div>
                    </div>
                    
                    {/*  2025  */}
                    <div className="founder-timeline-event">
                        <div className="founder-timeline-year-badge">2025</div>
                        <div className="founder-timeline-card">
                            <h4 className="founder-timeline-title">Official Partnerships</h4>
                            <div className="founder-timeline-desc">Official partnerships with Google Cloud, Zoho and Adobe. QuerySafe platform takes shape.</div>
                        </div>
                    </div>
                    
                    {/*  2026  */}
                    <div className="founder-timeline-event">
                        <div className="founder-timeline-year-badge">2026</div>
                        <div className="founder-timeline-card">
                            <h4 className="founder-timeline-title">AI Agents & Enterprise</h4>
                            <div className="founder-timeline-desc">Anthropic (Claude) partnership. QuerySafe live. Secured major government PSU contracts.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

        </>
    );
}
