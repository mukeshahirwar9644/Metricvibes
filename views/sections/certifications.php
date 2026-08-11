<?php  ?>

<style>
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
.partners-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #2b2b2b;
    margin-bottom: 50px;
}
[data-theme="dark"] .partners-section {
    background-color: var(--surface-dark-secondary);
    background-image: none;
}
[data-theme="dark"] .partners-title {
    color: var(--color-white);
}
.partners-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
}
.partner-card {
    background: #ffffff;
    border-radius: 12px;
    padding: 24px 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
    display: flex;
    align-items: center;
    gap: 12px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    min-width: 260px;
    justify-content: center;
}
[data-theme="dark"] .partner-card {
    background: #2a2a2a;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}
.partner-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
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
</style>

<section class="partners-section">
    <div class="container partners-container">
        <h2 class="partners-title">Our Partners & Certifications</h2>
        
        <div class="partners-grid">
            <!-- Claude Partner -->
            <div class="partner-card">
                <div class="partner-logo-claude">
                    <i class="fas fa-certificate icon"></i>
                    <span class="text-main">Claude</span>
                    <span class="text-sub">Partner In India</span>
                </div>
            </div>

            <!-- Zoho Analytics -->
            <div class="partner-card">
                <div class="partner-logo-zoho">
                    <i class="fas fa-chart-line icon"></i>
                    <div class="text-stack">
                        <span class="text-main">Zoho</span>
                        <span class="text-sub">Analytics</span>
                    </div>
                </div>
            </div>

            <!-- GCP Partner -->
            <div class="partner-card">
                <div class="partner-logo-generic">
                    <i class="fab fa-google" style="color: #4285F4; font-size: 1.6rem;"></i>
                    Google Cloud Partner
                </div>
            </div>

            <!-- Mixpanel Partner -->
            <div class="partner-card">
                <div class="partner-logo-generic">
                    <i class="fas fa-flask" style="color: #7856FF; font-size: 1.6rem;"></i>
                    Mixpanel Partner
                </div>
            </div>

            <!-- ISO Certification -->
            <div class="partner-card">
                <div class="partner-logo-generic">
                    <i class="fas fa-award" style="color: var(--color-accent-secondary); font-size: 1.6rem;"></i>
                    ISO 9001:2015
                </div>
            </div>
        </div>
    </div>
</section>
