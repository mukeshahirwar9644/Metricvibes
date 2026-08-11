<?php  ?>

<style>
.tools-we-use {
    background-color: #fbf9ff;
    background-image: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M-20,140 L140,-20' stroke='rgba(120,81,169,0.03)' stroke-width='30' stroke-linecap='round'/%3E%3Cpath d='M-80,80 L80,-80' stroke='rgba(120,81,169,0.03)' stroke-width='30' stroke-linecap='round'/%3E%3Cpath d='M40,200 L200,40' stroke='rgba(120,81,169,0.03)' stroke-width='30' stroke-linecap='round'/%3E%3C/svg%3E");
    padding: 80px 0;
    position: relative;
    overflow: hidden;
}
.tools-container {
    position: relative;
    z-index: 2;
    text-align: center;
}
.tools-title {
    font-size: 2.2rem;
    font-weight: 600;
    color: #2b2b2b;
    margin-bottom: 50px;
}
[data-theme="dark"] .tools-we-use {
    background-color: var(--surface-primary);
    background-image: none;
}
[data-theme="dark"] .tools-title {
    color: var(--color-white);
}

/* Infinity scroll carousel */
.tools-carousel-wrapper {
    overflow: hidden;
    white-space: nowrap;
    position: relative;
    width: 100%;
}
.tools-carousel-wrapper::before,
.tools-carousel-wrapper::after {
    content: '';
    position: absolute;
    top: 0;
    width: 150px;
    height: 100%;
    z-index: 2;
}
.tools-carousel-wrapper::before {
    left: 0;
    background: linear-gradient(to right, #fbf9ff, transparent);
}
.tools-carousel-wrapper::after {
    right: 0;
    background: linear-gradient(to left, #fbf9ff, transparent);
}
[data-theme="dark"] .tools-carousel-wrapper::before {
    background: linear-gradient(to right, var(--surface-primary), transparent);
}
[data-theme="dark"] .tools-carousel-wrapper::after {
    background: linear-gradient(to left, var(--surface-primary), transparent);
}
.tools-track {
    display: inline-flex;
    align-items: center;
    gap: 60px;
    padding-left: 60px;
    animation: tools-scroll 30s linear infinite;
}
@keyframes tools-scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

.tool-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: 'Inter', sans-serif;
}

/* Brand specific styling to mimic logos */
.logo-adobe {
    gap: 8px;
}
.logo-adobe .icon-box {
    background: #110F24;
    color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
}
.logo-adobe .text-stack {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1.1;
    font-size: 0.85rem;
    color: #1a1a1a;
}
[data-theme="dark"] .logo-adobe .text-stack { color: #fff; }

.logo-vwo {
    color: #C51B5A;
    font-size: 1.8rem;
    font-weight: 300;
    letter-spacing: -2px;
}

.logo-firebase {
    color: #666;
    font-size: 1.2rem;
    font-weight: 500;
}
.logo-firebase i { color: #FFCA28; font-size: 1.6rem; }
[data-theme="dark"] .logo-firebase { color: #ccc; }

.logo-hotjar {
    color: #333;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.5px;
}
.logo-hotjar i { color: #F04B32; font-size: 1.8rem; }
[data-theme="dark"] .logo-hotjar { color: #fff; }

.logo-amplitude {
    color: #1564F9;
    font-weight: 700;
    font-size: 1.2rem;
}
.logo-amplitude i {
    background: #1564F9;
    color: #fff;
    width: 28px; height: 28px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
}

.logo-mixpanel {
    color: #7856FF;
    font-weight: 700;
    font-size: 1.4rem;
}

.logo-anthropic {
    color: #D15C40;
    font-weight: 600;
    font-size: 1.2rem;
    font-family: Georgia, serif;
}
.logo-anthropic i { font-size: 1.4rem; }

.logo-ga4 {
    color: #f9AB00;
    font-weight: 600;
    font-size: 1.2rem;
}
</style>

<section class="tools-we-use" id="trustedBy">
    <div class="tools-container">
        <h2 class="tools-title">Tools We Use</h2>
        
        <div class="tools-carousel-wrapper">
            <div class="tools-track">
                <!-- Group 1 -->
                <div class="tool-logo logo-mixpanel">Mixpanel</div>
                <div class="tool-logo logo-adobe">
                    <div class="icon-box"><i class="fas fa-chart-line"></i></div>
                    <div class="text-stack">
                        <span>Adobe</span>
                        <span>Analytics</span>
                    </div>
                </div>
                <div class="tool-logo logo-vwo">VWO</div>
                <div class="tool-logo logo-firebase">
                    <i class="fas fa-fire"></i> Firebase
                </div>
                <div class="tool-logo logo-hotjar">
                    <i class="fas fa-fire-flame-curved"></i> hotjar
                </div>
                <div class="tool-logo logo-amplitude">
                    <i class="fas fa-wave-square"></i> Amplitude
                </div>
                <div class="tool-logo logo-anthropic">
                    <i class="fas fa-certificate"></i> Anthropic
                </div>
                <div class="tool-logo logo-ga4">
                    <i class="fas fa-chart-pie"></i> GA4
                </div>

                <!-- Group 2 (Duplicate for smooth scroll) -->
                <div class="tool-logo logo-mixpanel">Mixpanel</div>
                <div class="tool-logo logo-adobe">
                    <div class="icon-box"><i class="fas fa-chart-line"></i></div>
                    <div class="text-stack">
                        <span>Adobe</span>
                        <span>Analytics</span>
                    </div>
                </div>
                <div class="tool-logo logo-vwo">VWO</div>
                <div class="tool-logo logo-firebase">
                    <i class="fas fa-fire"></i> Firebase
                </div>
                <div class="tool-logo logo-hotjar">
                    <i class="fas fa-fire-flame-curved"></i> hotjar
                </div>
                <div class="tool-logo logo-amplitude">
                    <i class="fas fa-wave-square"></i> Amplitude
                </div>
                <div class="tool-logo logo-anthropic">
                    <i class="fas fa-certificate"></i> Anthropic
                </div>
                <div class="tool-logo logo-ga4">
                    <i class="fas fa-chart-pie"></i> GA4
                </div>
            </div>
        </div>
    </div>
</section>
