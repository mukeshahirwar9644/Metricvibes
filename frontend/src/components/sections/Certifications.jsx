import React from 'react';

export default function Certifications() {
    return (
        <>
            

<style dangerouslySetInnerHTML={{ __html: `
.partners-section {
    background-color: #f8f6fc;
    background-image: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M-20,140 L140,-20' stroke='rgba(120,81,169,0.04)' stroke-width='30' stroke-linecap='round'/%3E%3Cpath d='M-80,80 L80,-80' stroke='rgba(120,81,169,0.04)' stroke-width='30' stroke-linecap='round'/%3E%3Cpath d='M40,200 L200,40' stroke='rgba(120,81,169,0.04)' stroke-width='30' stroke-linecap='round'/%3E%3C/svg%3E");
    padding: 80px 0;
    position: relative;
    overflow: hidden;
}
.partners-container {
    position: relative;
    z-index: 2;
    text-align: center;
}
.partners-header {
    margin-bottom: 45px;
}
.partners-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 18px;
    background: rgba(120, 81, 169, 0.1);
    color: #7851a9;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    border-radius: 50px;
    border: 1px solid rgba(120, 81, 169, 0.2);
    margin-bottom: 14px;
    text-transform: uppercase;
}
.partners-title {
    font-family: var(--font-heading, 'Manrope', sans-serif);
    font-size: clamp(2rem, 3.5vw, 2.6rem);
    font-weight: 800;
    color: #1e1b2e;
    margin-bottom: 12px;
    letter-spacing: -0.02em;
    line-height: 1.25;
}
.partners-title-gradient {
    background: linear-gradient(135deg, #7851a9 0%, #9333ea 50%, #d4af37 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.partners-subtitle {
    font-size: 1rem;
    color: #64748b;
    max-width: 620px;
    margin: 0 auto;
    line-height: 1.6;
    font-weight: 400;
}
[data-theme="dark"] .partners-section {
    background-color: var(--surface-dark-secondary);
    background-image: none;
}
[data-theme="dark"] .partners-badge {
    background: rgba(168, 85, 247, 0.15);
    color: #c084fc;
    border-color: rgba(168, 85, 247, 0.3);
}
[data-theme="dark"] .partners-title {
    color: #ffffff;
}
[data-theme="dark"] .partners-subtitle {
    color: #94a3b8;
}
.partners-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
}
.partner-card {
    background: #ffffff;
    border-radius: 14px;
    padding: 24px 36px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(0, 0, 0, 0.06);
    display: flex;
    align-items: center;
    gap: 12px;
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), 
                box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1), 
                border-color 0.35s cubic-bezier(0.4, 0, 0.2, 1), 
                background 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    min-width: 250px;
    justify-content: center;
    cursor: pointer;
}
.partner-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 40px rgba(124, 58, 237, 0.22);
    border-color: rgba(124, 58, 237, 0.35);
}
.partner-card:active {
    transform: translateY(-2px) scale(0.98);
    box-shadow: 0 8px 20px rgba(124, 58, 237, 0.25);
}
[data-theme="dark"] .partner-card {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}
[data-theme="dark"] .partner-card:hover {
    transform: translateY(-6px) !important;
    border-color: rgba(167, 139, 250, 0.45) !important;
    box-shadow: 0 18px 40px rgba(124, 58, 237, 0.32), 0 0 20px rgba(167, 139, 250, 0.15) !important;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%) !important;
}
[data-theme="dark"] .partner-card:active {
    transform: translateY(-2px) scale(0.98) !important;
    box-shadow: 0 8px 25px rgba(124, 58, 237, 0.4) !important;
    border-color: rgba(167, 139, 250, 0.6) !important;
}
.partner-logo-claude {
    display: flex;
    align-items: center;
    gap: 8px;
}
.partner-logo-claude .icon {
    color: #d15c40; /* Claude orange-ish */
    font-size: 1.8rem;
}
.partner-logo-claude .text-main {
    font-family: Georgia, serif;
    font-size: 1.8rem;
    font-weight: 400;
    color: #1a1a1a;
}
.partner-logo-claude .text-sub {
    font-family: 'Inter', sans-serif;
    font-size: 0.65rem;
    font-weight: 700;
    color: #4a148c;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-left: 5px;
    padding-top: 5px;
}
.partner-logo-zoho {
    display: flex;
    align-items: center;
    gap: 12px;
}
.partner-logo-zoho .icon {
    color: #f90b2b;
    font-size: 2.2rem;
}
.partner-logo-zoho .text-stack {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.partner-logo-zoho .text-main {
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    color: #1a1a1a;
    line-height: 1;
    margin-bottom: 2px;
}
.partner-logo-zoho .text-sub {
    font-family: 'Inter', sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
    color: #1a1a1a;
    line-height: 1;
}
.partner-logo-generic {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Inter', sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    color: #1a1a1a;
}
[data-theme="dark"] .partner-logo-claude .text-main,
[data-theme="dark"] .partner-logo-zoho .text-main,
[data-theme="dark"] .partner-logo-zoho .text-sub,
[data-theme="dark"] .partner-logo-generic {
    color: #ffffff;
}
[data-theme="dark"] .partner-logo-claude .text-sub {
    color: #d8b4fe;
}
` }} />

<section className="partners-section">
    <div className="container partners-container">
        <div className="partners-header">
            <span className="partners-badge">
                <i className="fas fa-shield-halved"></i> Strategic Ecosystem
            </span>
            <h2 className="partners-title">
                Our <span className="partners-title-gradient">Partners & Certifications</span>
            </h2>
            <p className="partners-subtitle">
                Empowering business growth through industry-leading analytics partnerships and certified enterprise standards.
            </p>
        </div>
        
        <div className="partners-grid">
            {/*  Claude Partner  */}
            <div className="partner-card">
                <div className="partner-logo-claude">
                    <i className="fas fa-certificate icon"></i>
                    <span className="text-main">Claude</span>
                    <span className="text-sub">Partner In India</span>
                </div>
            </div>

            {/*  Zoho Analytics  */}
            <div className="partner-card">
                <div className="partner-logo-zoho">
                    <i className="fas fa-chart-line icon"></i>
                    <div className="text-stack">
                        <span className="text-main">Zoho</span>
                        <span className="text-sub">Analytics</span>
                    </div>
                </div>
            </div>

            {/*  GCP Partner  */}
            <div className="partner-card">
                <div className="partner-logo-generic">
                    <i className="fab fa-google" style={{"color":"#4285F4","fontSize":"1.6rem"}}></i>
                    Google Cloud Partner
                </div>
            </div>

            {/*  Mixpanel Partner  */}
            <div className="partner-card">
                <div className="partner-logo-generic">
                    <i className="fas fa-flask" style={{"color":"#7856FF","fontSize":"1.6rem"}}></i>
                    Mixpanel Partner
                </div>
            </div>

            {/*  ISO Certification  */}
            <div className="partner-card">
                <div className="partner-logo-generic">
                    <i className="fas fa-award" style={{"color":"var(--color-accent-secondary)","fontSize":"1.6rem"}}></i>
                    ISO 9001:2015
                </div>
            </div>
        </div>
    </div>
</section>

        </>
    );
}
