import React from 'react';
import { Link } from 'react-router-dom';
import AnalyticsDashboard from '../components/sections/AnalyticsDashboard';


export default function About() {
    const [openFaqIndexes, setOpenFaqIndexes] = React.useState({});
    const toggleFaq = (index) => setOpenFaqIndexes(prev => ({
        ...prev,
        [index]: !prev[index]
    }));

    const faqs = [
        {
            q: "What makes MetricVibes different from other analytics consultancies?",
            a: "We focus on business outcomes rather than just technical implementation. Our consultants combine deep technical expertise with strategic thinking to ensure your analytics investments drive measurable business growth."
        },
        {
            q: "How long does a typical analytics implementation project take?",
            a: "Most comprehensive analytics setups take 4-8 weeks, depending on complexity and existing infrastructure. We provide detailed project timelines during our initial consultation phase."
        },
        {
            q: "Do you work with companies outside of major metropolitan areas?",
            a: "Absolutely. Our remote-first approach allows us to serve clients globally, with most work conducted virtually through collaborative project management platforms and regular video consultations."
        },
        {
            q: "What ongoing support do you provide after initial implementation?",
            a: "We offer flexible retainer arrangements for ongoing optimization, monthly reporting, troubleshooting, and strategic consulting. Many clients benefit from quarterly analytics reviews to ensure continued alignment with business goals."
        }
    ];

    return (
        <main>
            

{/*  About Us Header Banner  */}
<section className="about-header" style={{ position: "relative", padding: "130px 0 20px", backgroundColor: "#ffffff", overflow: "hidden", textAlign: "center", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
    {/* Abstract Background Elements */}
    <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "50%", height: "70%", background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }}></div>
    <div style={{ position: "absolute", bottom: "-20%", right: "-10%", width: "50%", height: "70%", background: "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.12) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }}></div>
    
    {/* Subtle Grid Background */}
    <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)", backgroundSize: "30px 30px", opacity: 0.5, pointerEvents: "none" }}></div>

    <div className="container" style={{ position: "relative", zIndex: "2", maxWidth: "1000px" }}>
        
        {/* Site Theme Badge Pill */}
        <div style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "8px", 
            padding: "8px 22px", 
            borderRadius: "30px", 
            border: "1px solid rgba(124, 58, 237, 0.25)", 
            background: "rgba(124, 58, 237, 0.08)", 
            marginBottom: "20px" 
        }}>
            <i className="fas fa-award" style={{ color: "#7c3aed", fontSize: "0.9rem" }}></i>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.95rem", fontWeight: "700", color: "#0f172a", letterSpacing: "0.2px", lineHeight: "1.5" }}>
                Trusted <span style={{ background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Analytics & AI Partner</span>
            </span>
        </div>
        
        <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#475569", fontWeight: "400", marginBottom: 0, margin: "0 auto" }}>
            MetricVibes is a premium analytics and tracking consultancy based in Delhi NCR, serving businesses worldwide.<br />
            We transform how organizations collect, analyze, and act on their data - specializing in robust tracking<br />
            implementations, comprehensive analytics frameworks, and actionable insights that drive measurable growth.
        </p>
    </div>
</section>

{/*  About Details Section  */}
<section className="section" style={{ paddingTop: '20px', paddingBottom: '40px' }}>
    <div className="container">
        <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"40px","alignItems":"center"}}>
            
            {/*  Left Content  */}
            <div>
                <span className="section__badge" style={{"background":"var(--surface-tertiary)","color":"var(--text-secondary)","marginBottom":"12px"}}>
                    Your Analytics & Tracking Experts
                </span>
                
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", fontWeight: "700", color: "var(--text-primary)", marginBottom: "16px", lineHeight: "1.3" }}>
                    Trusted Analytics & AI Partner
                </h2>
                <p style={{"color":"var(--text-secondary)","lineHeight":"1.7","marginBottom":"24px","fontSize":"0.95rem"}}>
                    We specialize in cutting-edge cookieless analytics and advanced personalization strategies, ensuring businesses achieve growth while adhering to local regulations. Our certified analysts are skilled in solving complex analytics challenges and continuously update their knowledge of industry trends. We are committed to delivering optimal solutions that maximize the value of client data. Whether improving existing analytics frameworks or implementing from scratch, we provide scalable, personalized recommendations that enhance user experience and drive business success, all while maintaining compliance with evolving privacy laws.
                </p>
                
                {/*  Stats Grid  */}
                <div style={{"display":"grid","gridTemplateColumns":"repeat(3, 1fr)","gap":"8px","marginBottom":"20px"}}>
                    <div style={{"background":"var(--surface-secondary)","border":"1px solid var(--border-color, #e2e8f0)","borderRadius":"8px","padding":"12px 8px","textAlign":"center"}}>
                        <div style={{"fontSize":"1.4rem","fontWeight":"700","color":"var(--color-accent)"}}>20+</div>
                        <div style={{"fontSize":"0.8rem","color":"var(--text-secondary)"}}>Clients</div>
                    </div>
                    <div style={{"background":"var(--surface-secondary)","border":"1px solid var(--border-color, #e2e8f0)","borderRadius":"8px","padding":"12px 8px","textAlign":"center"}}>
                        <div style={{"fontSize":"1.4rem","fontWeight":"700","color":"var(--color-accent)"}}>50+</div>
                        <div style={{"fontSize":"0.8rem","color":"var(--text-secondary)"}}>Projects</div>
                    </div>
                    <div style={{"background":"var(--surface-secondary)","border":"1px solid var(--border-color, #e2e8f0)","borderRadius":"8px","padding":"12px 8px","textAlign":"center"}}>
                        <div style={{"fontSize":"1.4rem","fontWeight":"700","color":"var(--color-accent)","display":"flex","alignItems":"center","justifyContent":"center","gap":"6px"}}>
                            5 <i className="fas fa-star" style={{"color":"#fbbf24","fontSize":"1.1rem"}}></i>
                        </div>
                        <div style={{"fontSize":"0.8rem","color":"var(--text-secondary)"}}>Star Reviews</div>
                    </div>
                </div>

                <Link 
                    to="/contact" 
                    className="btn" 
                    style={{
                        background: "linear-gradient(135deg, #260e52 0%, #3b1378 100%)",
                        color: "#ffffff",
                        fontWeight: "700",
                        fontSize: "0.95rem",
                        padding: "14px 32px",
                        borderRadius: "30px",
                        border: "none",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        boxShadow: "0 6px 20px rgba(38, 14, 82, 0.35)",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        cursor: "pointer"
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-3px)";
                        e.currentTarget.style.boxShadow = "0 12px 28px rgba(38, 14, 82, 0.55)";
                        e.currentTarget.style.background = "linear-gradient(135deg, #311068 0%, #4a1996 100%)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 6px 20px rgba(38, 14, 82, 0.35)";
                        e.currentTarget.style.background = "linear-gradient(135deg, #260e52 0%, #3b1378 100%)";
                    }}
                >
                    Get Personalized Audit <i className="fas fa-arrow-right" style={{ fontSize: "0.85rem" }} />
                </Link>
            </div>

            {/*  Right — Interactive Dashboard  */}
            <div style={{"position":"relative","padding":"16px"}}>
                <AnalyticsDashboard />
            </div>
            
        </div>
    </div>
</section>

{/*  Core Principles Section  */}
<section className="section" style={{"background":"var(--surface-secondary)"}}>
    <div className="container">
        <h2 style={{"textAlign":"center","fontSize":"2.8rem","fontWeight":"800","color":"var(--text-primary)","marginBottom":"50px","letterSpacing":"-0.03em"}}>
            Built on <span className="text-gradient">Core Principles</span>
        </h2>
        
        <div style={{"display":"grid","gridTemplateColumns":"repeat(3, 1fr)","gap":"24px"}}>
            <div className="why-choose-card">
                <div style={{"width":"56px","height":"56px","background":"linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%)","borderRadius":"14px","display":"flex","alignItems":"center","justifyContent":"center","marginBottom":"24px","boxShadow":"0 10px 20px rgba(79, 70, 229, 0.25)"}}>
                    <i className="fas fa-crosshairs" style={{"fontSize":"1.6rem","color":"#fff"}}></i>
                </div>
                <h4 style={{"fontSize":"1.4rem","fontWeight":"800","marginBottom":"12px","color":"var(--text-primary)"}}>Clarity over Clutter</h4>
                <p style={{"fontSize":"1rem","lineHeight":"1.6","color":"var(--text-secondary)"}}>
                    We cut through vanity metrics. Our goal is to extract the signal from the noise, giving you only the data that actually moves the needle for your revenue and growth.
                </p>
            </div>
            
            <div className="why-choose-card">
                <div style={{"width":"56px","height":"56px","background":"linear-gradient(135deg, #f97316 0%, #ec4899 100%)","borderRadius":"14px","display":"flex","alignItems":"center","justifyContent":"center","marginBottom":"24px","boxShadow":"0 10px 20px rgba(249, 115, 22, 0.25)"}}>
                    <i className="fas fa-layer-group" style={{"fontSize":"1.6rem","color":"#fff"}}></i>
                </div>
                <h4 style={{"fontSize":"1.4rem","fontWeight":"800","marginBottom":"12px","color":"var(--text-primary)"}}>Scalable Architecture</h4>
                <p style={{"fontSize":"1rem","lineHeight":"1.6","color":"var(--text-secondary)"}}>
                    We don't do band-aid fixes. We build robust, privacy-first tracking architectures (like server-side GTM) that scale seamlessly as your enterprise expands.
                </p>
            </div>

            <div className="why-choose-card">
                <div style={{"width":"56px","height":"56px","background":"linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)","borderRadius":"14px","display":"flex","alignItems":"center","justifyContent":"center","marginBottom":"24px","boxShadow":"0 10px 20px rgba(14, 165, 233, 0.25)"}}>
                    <i className="far fa-gem" style={{"fontSize":"1.6rem","color":"#fff"}}></i>
                </div>
                <h4 style={{"fontSize":"1.4rem","fontWeight":"800","marginBottom":"12px","color":"var(--text-primary)"}}>Relentless Precision</h4>
                <p style={{"fontSize":"1rem","lineHeight":"1.6","color":"var(--text-secondary)"}}>
                    Data is useless if you can't trust it. We obsess over attribution accuracy, ensuring that every dollar spent is correctly mapped to its return on investment.
                </p>
            </div>
        </div>
    </div>
</section>

{/*  Content Sections  */}
<section className="section" style={{"paddingTop":"80px","paddingBottom":"80px","background":"var(--surface-primary)"}}>
    <div className="container">
        <div className="about-content-grid">
            
            {/*  Execution Strategy  */}
            <div className="about-content-block">
                <div className="about-content-header">
                    <div className="icon-box" style={{"background":"linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)","border":"none","boxShadow":"0 10px 20px rgba(234, 88, 12, 0.25)"}}>
                        <i className="fas fa-bolt" style={{"color":"#fff"}}></i>
                    </div>
                    <h3>Execution Strategy</h3>
                </div>
                <div className="about-content-body">
                    <p style={{"fontSize":"1.1rem"}}>Meaningful insights don't come from just hoarding data — they emerge from deep business context. We bridge the gap between raw data and executive strategy.</p>
                    <div className="highlight-box">
                        <p>We begin every engagement with a ruthless audit of your tracking infrastructure, exposing broken funnels, attribution gaps, and silent revenue leaks.</p>
                    </div>
                    <p>Instead of generic dashboards, we deploy bespoke measurement frameworks tailored precisely to how your board and stakeholders make decisions.</p>
                </div>
            </div>

            {/*  Focus Verticals  */}
            <div className="about-content-block">
                <div className="about-content-header">
                    <div className="icon-box" style={{"background":"linear-gradient(135deg, #10b981 0%, #059669 100%)","border":"none","boxShadow":"0 10px 20px rgba(5, 150, 105, 0.25)"}}>
                        <i className="fas fa-building" style={{"color":"#fff"}}></i>
                    </div>
                    <h3>Focus Verticals</h3>
                </div>
                <div className="about-content-body">
                    <p>While data principles are universal, industry context is everything. We possess deep operational expertise in scaling analytics for high-growth sectors:</p>
                    <ul className="custom-list">
                        <li><strong>E-commerce:</strong> Server-side tracking, advanced attribution, and LTV (Lifetime Value) modeling.</li>
                        <li><strong>SaaS & B2B:</strong> Multi-touch pipeline tracking, trial-to-paid conversion optimization, and churn analytics.</li>
                        <li><strong>HealthTech:</strong> HIPAA & GDPR compliant data pipelines and secure patient telemetry.</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</section>

{/*  FAQ Section  */}
<section className="faq-section-modern">
    <div className="container">
        <h2 className="faq-modern-title">
            FAQ
        </h2>
        
        <div className="faq-container-modern">
            {faqs.map((faq, index) => (
                <div key={index} className={`faq-item-modern ${openFaqIndexes[index] ? 'active' : ''}`}>
                    <div className={`faq-header-modern ${openFaqIndexes[index] ? 'active' : ''}`} onClick={() => toggleFaq(index)} style={{ cursor: 'pointer' }}>
                        {faq.q}
                        <i className={`fas fa-caret-${openFaqIndexes[index] ? 'up' : 'down'}`}></i>
                    </div>
                    <div className="faq-body-modern" style={{ display: openFaqIndexes[index] ? 'block' : 'none', marginTop: '10px' }}>
                        {faq.a}
                    </div>
                </div>
            ))}
        </div>
    </div>
</section>

{/*  CTA Section  */}
<section style={{ padding: "40px 0 80px 0" }}>
    <div className="container">
        <div style={{
            background: "linear-gradient(135deg, #1F163D 0%, #150F28 100%)",
            borderRadius: "24px",
            padding: "60px 40px",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            {/* Glowing Accent */}
            <div style={{ position: "absolute", right: "-10%", top: "-50%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(167, 139, 250, 0.15) 0%, transparent 60%)", pointerEvents: "none" }}></div>
            
            <div style={{ position: "relative", zIndex: 2, maxWidth: "600px" }}>
                <h2 style={{ color: "white", fontSize: "2.4rem", fontWeight: "700", lineHeight: "1.2", marginBottom: "16px" }}>
                    Ready To Boost Your Website's Performance?
                </h2>
                <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "1.1rem", marginBottom: 0 }}>
                    Take the first step towards data-driven success with our comprehensive audit and personalized growth strategy.
                </p>
            </div>
            
            <div style={{ position: "relative", zIndex: 2 }}>
                <a href="#audit" style={{ background: "linear-gradient(135deg, #a78bfa 0%, #818cf8 100%)", color: "#ffffff", fontWeight: "600", padding: "16px 36px", borderRadius: "30px", fontSize: "1.1rem", display: "inline-block", boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)", textDecoration: "none", transition: "transform 0.3s ease" }}>
                    Get Free Audit <i className="fas fa-arrow-right" style={{marginLeft: "8px"}}></i>
                </a>
            </div>
        </div>
    </div>
</section>

{/*  FAQ Accordion Script  */}


        </main>
    );
}
