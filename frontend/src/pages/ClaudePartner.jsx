import React from 'react';
import { Link } from 'react-router-dom';

export default function ClaudePartner() {
    const [activeUseCase, setActiveUseCase] = React.useState(null);

    const toggleUseCase = (index) => {
        if (activeUseCase === index) {
            setActiveUseCase(null);
        } else {
            setActiveUseCase(index);
        }
    };

    const useCasesData = [
        {
            industry: "D2C and ecommerce",
            role: "Revenue and retention analyst",
            details: "Shopify, Klaviyo, GA4, ad platforms, refunds, cohorts, LTV, CAC, and BigQuery."
        },
        {
            industry: "B2B SaaS",
            role: "Pipeline and churn intelligence",
            details: "CRM, billing, product analytics, lifecycle stages, support data, and account health scoring."
        },
        {
            industry: "Media and content",
            role: "Audience growth copilot",
            details: "GA4, Search Console, newsletters, CMS metadata, subscriptions, ad revenue, authors, and topics."
        },
        {
            industry: "Financial services",
            role: "Governed customer insight desk",
            details: "Role-aware access, masked outputs, approved metric definitions, SQL trails, and review workflows."
        },
        {
            industry: "Healthcare and wellness",
            role: "Operations and demand insights",
            details: "Appointment systems, acquisition data, consent rules, aggregation, access control, and location performance."
        },
        {
            industry: "Education and edtech",
            role: "Learner journey intelligence",
            details: "LMS, CRM, payments, marketing sources, funnel stages, learner cohorts, completion, and retention."
        },
        {
            industry: "Agencies and consultancies",
            role: "Client reporting assistant",
            details: "GA4, ad platforms, CRM, warehouse reporting, reusable templates, and client-safe outputs."
        },
        {
            industry: "Retail and omnichannel",
            role: "Store, channel, and inventory insight",
            details: "POS, ecommerce, inventory, loyalty, marketing data, margin logic, stock movement, and promotions."
        },
        {
            industry: "Manufacturing and supply chain",
            role: "Operational anomaly explainer",
            details: "ERP, procurement, QA, logistics, production data, root-cause dimensions, exceptions, and review flows."
        }
    ];

    return (
        <main>
            {/* Hero Section */}
            <section className="claude-hero">
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="claude-badge">
                                <i className="fas fa-certificate" style={{ color: '#E17055', marginRight: '8px', fontSize: '18px' }}></i>
                                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', textTransform: 'none', fontWeight: '800', marginRight: '12px', color: '#111' }}>Claude</span>
                                <span style={{ color: '#555', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.5px' }}>PARTNER IN INDIA</span>
                            </div>
                            <h1 className="claude-hero__title">
                                Secure Claude workflows.
                            </h1>
                            <p className="claude-hero__text">
                                MetricVibes works with mid to large businesses in India to design Claude workflows, optimize token usage, reduce manual labour, and keep sensitive data inside approved enterprise boundaries.
                            </p>
                            <div className="claude-hero__actions">
                                <Link to="/contact" className="btn-claude-primary">Connect Now</Link>
                                <Link to="#products" className="btn-claude-secondary">View Products</Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="claude-hero__mockup-wrapper">
                                {/* Dashboard Image */}
                                <img src="/assets/img/dashboard-mockup.png" alt="QuerySafe Intelligence Dashboard" style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 24px 48px rgba(0,0,0,0.4)' }} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature Strip */}
                <div className="claude-feature-strip">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-md-3 col-sm-6">
                                <div className="claude-feature-item">
                                    <div className="feature-icon gradient-1"><i className="fas fa-map-marked-alt"></i></div>
                                    <h4>PAN India implementation support</h4>
                                    <p>Claude workflows for enterprise teams.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="claude-feature-item">
                                    <div className="feature-icon gradient-2"><i className="fas fa-rocket"></i></div>
                                    <h4>Products shipped</h4>
                                    <p>QuerySafe and QS Intelligence built with Claude.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="claude-feature-item">
                                    <div className="feature-icon gradient-3"><i className="fas fa-coins"></i></div>
                                    <h4>Token strategy</h4>
                                    <p>Workflows designed for cost and latency control.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="claude-feature-item">
                                    <div className="feature-icon gradient-4"><i className="fas fa-shield-alt"></i></div>
                                    <h4>Data guardrails</h4>
                                    <p>Proprietary layer for enterprise data protection.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Real Problem */}
            <section className="claude-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0 pe-lg-5">
                            <span className="claude-label">THE REAL PROBLEM</span>
                            <h2 className="claude-section-title">
                                AI does not fail because the model is weak.
                            </h2>
                            <p style={{ color: '#555', fontSize: '1.1rem', lineHeight: '1.6' }}>
                                They fail because teams connect powerful models to messy data, unclear permissions, expensive prompts, and manual processes that were never redesigned for AI.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <div className="claude-problem-box">
                                <h3>What has to be true before Claude becomes useful?</h3>
                                <ul className="claude-problem-list">
                                    <li>
                                        <strong>Claude needs enterprise context.</strong>
                                        <span> Data, permissions, business logic, and workflow rules must be structured.</span>
                                    </li>
                                    <li>
                                        <strong>Token usage needs design.</strong>
                                        <span> Better retrieval, routing, summaries, and caching reduce cost and latency.</span>
                                    </li>
                                    <li>
                                        <strong>Data needs a safe boundary.</strong>
                                        <span> Sensitive context should stay protected by an enterprise-grade guardrail layer.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="claude-section claude-section--light">
                <div className="container">
                    <span className="claude-label">OUR APPROACH</span>
                    <h2 className="claude-section-title mb-4">
                        The enterprise layer around Claude.
                    </h2>
                    <p style={{ color: '#555', fontSize: '1.1rem', marginBottom: '40px', maxWidth: '800px' }}>
                        Claude is the reasoning layer. MetricVibes designs the data foundation, token strategy, proprietary security layer, and business workflows that make it dependable.
                    </p>

                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="claude-card">
                                <div className="claude-card-num">01</div>
                                <h4>Implement Claude workflows</h4>
                                <p>Use-case discovery, prompts, tools, retrieval, review loops, and business-user journeys.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="claude-card">
                                <div className="claude-card-num">02</div>
                                <h4>Optimize AI token usage</h4>
                                <p>Reduce unnecessary context, route tasks, cache summaries, and control recurring AI costs.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="claude-card">
                                <div className="claude-card-num">03</div>
                                <h4>Secure enterprise data</h4>
                                <p>Protect sensitive information with proprietary guardrails, access rules, and approved server boundaries.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enterprise Outcomes */}
            <section className="claude-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 mb-4 mb-lg-0 pe-lg-5">
                            <span className="claude-label">ENTERPRISE OUTCOMES</span>
                            <h2 className="claude-section-title mb-4">
                                What businesses should expect.
                            </h2>
                            <div className="claude-outcome-main">
                                <h3>
                                    MetricVibes makes Claude useful inside real operating teams: less manual work, better cost control, and secure workflows that respect enterprise boundaries.
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="claude-outcome-card">
                                        <h4>Less manual labour</h4>
                                        <p>Automate recurring analysis, QA, support, reporting, and handoffs.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="claude-outcome-card">
                                        <h4>Lower token waste</h4>
                                        <p>Route context carefully so Claude uses only what the task needs.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="claude-outcome-card">
                                        <h4>Secure enterprise data</h4>
                                        <p>Use proprietary AI guardrails to protect approved enterprise infrastructure.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="claude-outcome-card">
                                        <h4>Governed adoption</h4>
                                        <p>Give teams useful AI workflows with permissions, review, and auditability.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products */}
            <section id="products" className="claude-section claude-section--light">
                <div className="container">
                    <div className="row mb-5 align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <h2 className="claude-section-title mb-0">
                                Products built with Claude.
                            </h2>
                        </div>
                        <div className="col-lg-6">
                            <p style={{ color: '#555', fontSize: '1rem', margin: 0 }}>
                                We use Claude where it is strongest: reasoning, summarization, follow-up questions, workflow intelligence, and explanation. Around it, MetricVibes adds data governance, enterprise security, and product-grade implementation.
                            </p>
                        </div>
                    </div>

                    <div className="row g-5">
                        {/* QuerySafe Intelligence */}
                        <div className="col-lg-6">
                            <div className="claude-product-card">
                                <div className="claude-product-img" style={{ height: 'auto', background: 'transparent' }}>
                                    <a href="https://querysafe.ai/qs-intelligence" target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%' }}>
                                        <img src="/assets/img/dashboard-mockup.png" alt="QuerySafe Intelligence" style={{ width: '100%', height: 'auto', display: 'block' }} />
                                    </a>
                                </div>
                                <div className="claude-product-content">
                                    <div className="claude-built-with">Built with Claude</div>
                                    <h3 className="claude-product-title">QuerySafe Intelligence</h3>
                                    <p className="claude-product-desc">
                                        A BigQuery-native AI analytics product that lets business teams ask questions in plain English and get SQL-visible, source-aware answers.
                                    </p>
                                    <ul className="claude-product-features">
                                        <li>Reduces dependency on analysts for simple business numbers.</li>
                                        <li>Supports follow-up questions when the first answer needs clarification.</li>
                                        <li>Keeps answers grounded in the company's own warehouse data.</li>
                                    </ul>
                                    <div className="claude-product-tags">
                                        <span className="claude-tag">BigQuery-native</span>
                                        <span className="claude-tag">SQL visible</span>
                                        <span className="claude-tag">Follow-up questions</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* QuerySafe */}
                        <div className="col-lg-6">
                            <div className="claude-product-card">
                                <div className="claude-product-img purple-bg" style={{ height: 'auto', background: 'transparent' }}>
                                    <a href="https://querysafe.ai/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%' }}>
                                        <img src="/assets/img/qf.png" alt="QuerySafe Chatbot" style={{ width: '100%', height: 'auto', display: 'block' }} />
                                    </a>
                                </div>
                                <div className="claude-product-content">
                                    <div className="claude-built-with">Built with Claude</div>
                                    <h3 className="claude-product-title">QuerySafe</h3>
                                    <p className="claude-product-desc">
                                        An AI chatbot for websites that lets visitors chat with the business, get answers instantly, and become qualified leads even when the team is offline.
                                    </p>
                                    <ul className="claude-product-features">
                                        <li>Answers visitor questions on the website 24/7.</li>
                                        <li>Captures and qualifies leads from live website conversations.</li>
                                        <li>Trains on business documents so responses stay relevant to the website.</li>
                                    </ul>
                                    <div className="claude-product-tags">
                                        <span className="claude-tag">Website chatbot</span>
                                        <span className="claude-tag">24/7 lead capture</span>
                                        <span className="claude-tag">No-code setup</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="claude-usecases" style={{ background: '#fbf9ff', padding: '80px 0' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#111', marginBottom: '32px', textAlign: 'left', fontFamily: 'var(--font-heading, inherit)' }}>Use Cases</h2>
                    <div className="claude-usecase-list" style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid #eaeaea', padding: '0 24px' }}>
                        {useCasesData.map((uc, index) => (
                            <div 
                                key={index} 
                                className={`claude-usecase-item ${activeUseCase === index ? 'active' : ''}`}
                                onClick={() => toggleUseCase(index)}
                                style={{ 
                                    display: 'flex', 
                                    flexDirection: 'column',
                                    borderBottom: index !== useCasesData.length - 1 ? '1px solid #f0f0f0' : 'none',
                                    padding: '24px 0',
                                    cursor: 'pointer',
                                    textAlign: 'left'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                                        <div className="claude-usecase-industry" style={{ width: '35%', color: '#555', fontSize: '1.05rem' }}>{uc.industry}</div>
                                        <div className="claude-usecase-role" style={{ width: '65%', fontWeight: '700', color: '#111', fontSize: '1.2rem', paddingRight: '20px' }}>{uc.role}</div>
                                    </div>
                                    <div className="claude-usecase-icon" style={{ color: '#a371f7', fontSize: '24px', fontWeight: '500' }}>
                                        {activeUseCase === index ? '-' : '+'}
                                    </div>
                                </div>
                                {activeUseCase === index && (
                                    <div className="claude-usecase-content" style={{ marginTop: '16px', paddingLeft: '35%', paddingRight: '40px' }}>
                                        <p style={{ color: '#555', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '12px' }}>{uc.details}</p>
                                        <Link to="/contact" style={{ color: '#a371f7', fontWeight: '600', textDecoration: 'none', fontSize: '1rem', display: 'inline-block' }}>Discuss this workflow &rarr;</Link>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dark CTA Section */}
            <section className="claude-cta-dark">
                <div className="container">
                    <h2>Build AI workflows your data team can trust.</h2>
                    <p>Book a Claude implementation consultation with MetricVibes. We will map the use case, data foundation, governance needs, and rollout plan.</p>
                    <Link to="/contact" className="btn-claude-white">Connect Now</Link>
                </div>
            </section>

            {/* Pre-footer Banner */}
            <section className="claude-prefooter">
                <div className="container">
                    <div className="claude-prefooter-banner">
                        <h3>Ready To Boost Your Website's Performance ?</h3>
                        <Link to="/contact" className="btn-claude-white" style={{ borderRadius: '30px' }}>Get Free Audit</Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
