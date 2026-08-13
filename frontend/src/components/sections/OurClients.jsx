import React from 'react';

export default function OurClients() {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: `
.our-clients-section {
    padding: 25px 0 15px;
    background: #ffffff;
    position: relative;
    overflow: hidden;
}
.our-clients-container {
    position: relative;
    z-index: 2;
}
.our-clients-header {
    margin-bottom: 40px;
    text-align: center;
}
.our-clients-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 18px;
    background: rgba(124, 58, 237, 0.08);
    color: #7c3aed;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    border-radius: 50px;
    border: 1px solid rgba(124, 58, 237, 0.2);
    margin-bottom: 14px;
    text-transform: uppercase;
}
.our-clients-title {
    font-family: var(--font-heading, 'Manrope', 'Inter', sans-serif);
    font-size: clamp(2.1rem, 3.8vw, 2.75rem);
    font-weight: 800;
    color: #1e1b2e;
    margin-bottom: 12px;
    line-height: 1.25;
    letter-spacing: -0.025em;
}
.our-clients-gradient {
    background: linear-gradient(135deg, #7c3aed 0%, #9333ea 50%, #c084fc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.our-clients-subtitle {
    font-size: 1rem;
    color: #64748b;
    max-width: 620px;
    margin: 0 auto;
    line-height: 1.6;
    font-weight: 400;
}
.our-clients-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-bottom: 0;
}
.client-logo-card {
    background: #ffffff;
    border-radius: 18px;
    height: 110px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.035);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 24px;
    box-sizing: border-box;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.client-logo-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(124, 58, 237, 0.12);
}

[data-theme="dark"] .our-clients-section {
    background: var(--surface-dark-secondary, #0b0518);
}
[data-theme="dark"] .our-clients-badge {
    background: rgba(168, 85, 247, 0.15);
    color: #c084fc;
    border-color: rgba(168, 85, 247, 0.3);
}
[data-theme="dark"] .our-clients-title {
    color: #ffffff;
}
[data-theme="dark"] .our-clients-subtitle {
    color: #94a3b8;
}
[data-theme="dark"] .client-logo-card {
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
}

@media (max-width: 1024px) {
    .our-clients-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }
}
@media (max-width: 576px) {
    .our-clients-grid {
        grid-template-columns: 1fr;
        gap: 14px;
    }
    .client-logo-card {
        height: 95px;
    }
    .our-clients-title {
        font-size: 1.8rem;
    }
}
` }} />

            <section className="our-clients-section" id="our-clients">
                <div className="container our-clients-container">
                    <div className="our-clients-header">
                        <span className="our-clients-badge">
                            <i className="fas fa-globe-americas"></i> Global Portfolio
                        </span>
                        <h2 className="our-clients-title">
                            Trusted by Brands Across <span className="our-clients-gradient">Four Continents</span>
                        </h2>
                        <p className="our-clients-subtitle">
                            Empowering enterprise analytics, data tracking, and AI implementations for leading organizations worldwide.
                        </p>
                    </div>

                    <div className="our-clients-grid">
                        {/* 1. OZONE */}
                        <div className="client-logo-card">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <svg viewBox="0 0 40 40" style={{ width: '32px', height: '32px', flexShrink: 0 }}>
                                    <circle cx="20" cy="20" r="16" fill="none" stroke="#0047AB" strokeWidth="4.5"/>
                                    <ellipse cx="18" cy="20" rx="9" ry="15" fill="#0047AB" transform="rotate(-30 18 20)"/>
                                </svg>
                                <span style={{ fontFamily: 'Arial Black, sans-serif', fontSize: '1.55rem', fontWeight: '900', color: '#0047AB', letterSpacing: '-0.5px' }}>
                                    OZONE<sup style={{ fontSize: '0.6rem' }}>®</sup>
                                </span>
                            </div>
                        </div>

                        {/* 2. saras */}
                        <div className="client-logo-card">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <svg viewBox="0 0 36 36" style={{ width: '30px', height: '30px', flexShrink: 0 }}>
                                    <circle cx="10" cy="8" r="4" fill="#38BDF8"/>
                                    <circle cx="26" cy="8" r="4" fill="#0284C7"/>
                                    <circle cx="18" cy="18" r="5" fill="#0284C7"/>
                                    <circle cx="10" cy="28" r="4" fill="#38BDF8"/>
                                    <circle cx="26" cy="28" r="4" fill="#0284C7"/>
                                    <path d="M10 8 L18 18 L26 8 M10 28 L18 18 L26 28" stroke="#0284C7" strokeWidth="2.5"/>
                                </svg>
                                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.7rem', fontWeight: '800', color: '#0284C7', letterSpacing: '-0.5px' }}>
                                    saras
                                </span>
                            </div>
                        </div>

                        {/* 3. StatusNeo */}
                        <div className="client-logo-card">
                            <div style={{ display: 'flex', alignItems: 'center', fontFamily: "'Inter', sans-serif", fontSize: '1.6rem', fontWeight: '800', color: '#0F172A', letterSpacing: '-0.5px' }}>
                                StatusNe<span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', borderRadius: '50%', background: '#FACC15', border: '3.5px solid #0F172A', marginLeft: '1px' }}></span>
                            </div>
                        </div>

                        {/* 4. Ahluwalia Contracts */}
                        <div className="client-logo-card">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <svg viewBox="0 0 36 36" style={{ width: '32px', height: '32px', flexShrink: 0 }}>
                                    <circle cx="18" cy="18" r="16" fill="none" stroke="#C53030" strokeWidth="2"/>
                                    <circle cx="18" cy="18" r="13" fill="none" stroke="#C53030" strokeWidth="1"/>
                                    <path d="M18 6 L26 27 H21 L18 18 L15 27 H10 Z M15 21 H21" fill="#C53030"/>
                                </svg>
                                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.05rem', fontWeight: '800', color: '#111827', lineHeight: '1.2' }}>
                                    Ahluwalia Contracts
                                </span>
                            </div>
                        </div>

                        {/* 5. ticketnetwork */}
                        <div className="client-logo-card">
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <svg viewBox="0 0 40 30" style={{ width: '30px', height: '22px', marginBottom: '1px' }}>
                                    <path d="M10 25 C5 15, 15 5, 25 5 C35 5, 30 20, 20 25" fill="none" stroke="#0284C7" strokeWidth="4" strokeLinecap="round"/>
                                    <path d="M15 20 C10 10, 20 2, 30 8" fill="none" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round"/>
                                </svg>
                                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.2rem', fontWeight: '700', color: '#0F172A', letterSpacing: '-0.3px' }}>
                                    ticketnetwork
                                </span>
                            </div>
                        </div>

                        {/* 6. WORLD ECONOMIC FORUM */}
                        <div className="client-logo-card">
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', paddingBottom: '4px' }}>
                                <span style={{ fontFamily: "'Cinzel', 'Times New Roman', serif", fontSize: '0.82rem', fontWeight: '800', color: '#0F172A', letterSpacing: '1px', lineHeight: '1.1' }}>WORLD</span>
                                <span style={{ fontFamily: "'Cinzel', 'Times New Roman', serif", fontSize: '0.78rem', fontWeight: '800', color: '#0F172A', letterSpacing: '1px', lineHeight: '1.1' }}>ECONOMIC</span>
                                <span style={{ fontFamily: "'Cinzel', 'Times New Roman', serif", fontSize: '0.82rem', fontWeight: '800', color: '#0F172A', letterSpacing: '1px', lineHeight: '1.1' }}>FORUM</span>
                                <svg viewBox="0 0 100 30" style={{ position: 'absolute', bottom: '-2px', width: '75px', height: '20px', pointerEvents: 'none' }}>
                                    <path d="M10 5 A 40 20 0 0 0 90 20" fill="none" stroke="#0284C7" strokeWidth="2.5"/>
                                </svg>
                            </div>
                        </div>

                        {/* 7. INNOSUPPS */}
                        <div className="client-logo-card">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <svg viewBox="0 0 24 30" style={{ width: '22px', height: '26px', flexShrink: 0 }}>
                                    <polygon points="14,0 2,16 11,16 8,30 22,12 13,12" fill="#2563EB"/>
                                </svg>
                                <span style={{ fontFamily: "'Impact', 'Inter', sans-serif", fontStyle: 'italic', fontSize: '1.5rem', fontWeight: '900', color: '#1E40AF', letterSpacing: '0.5px' }}>
                                    INNOSUPPS
                                </span>
                            </div>
                        </div>

                        {/* 8. VISTAJET */}
                        <div className="client-logo-card">
                            <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.5rem', fontWeight: '600', color: '#475569', letterSpacing: '2px' }}>
                                    VIST<span style={{ position: 'relative', display: 'inline-block' }}>A<svg viewBox="0 0 40 20" style={{ position: 'absolute', top: '0px', left: '-12px', width: '35px', height: '18px' }}><path d="M0 15 L35 0 L25 5 Z" fill="#DC2626"/></svg></span>JET
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
