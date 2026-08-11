<?php  ?>

<style>
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


/* Modernized Cert Badges */
.founder-certifications {
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}
.cert-badge {
    background: rgba(79, 70, 229, 0.05);
    border: 1px solid rgba(79, 70, 229, 0.15);
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--color-accent);
    transition: all 0.2s;
    display: inline-flex;
    align-items: center;
    gap: 6px;
}
.cert-badge::before {
    content: '★';
    color: #F59E0B;
}

/* Premium Founder Profile Card */
.custom-founder-card {
    margin-top: 30px;
    padding: 30px;
    border: 1px solid rgba(0,0,0,0.05);
    border-radius: 24px;
    background: var(--surface-primary);
    box-shadow: 0 12px 40px rgba(0,0,0,0.04);
    position: relative;
    overflow: visible; /* Changed from hidden to prevent composition bugs */
    transition: all 0.3s ease;
    z-index: 5;
}
[data-theme="dark"] .custom-founder-card {
    border: 1px solid rgba(255,255,255,0.05);
    box-shadow: 0 12px 40px rgba(0,0,0,0.2);
    background: repeating-linear-gradient(
        45deg,
        #1b0d36,
        #1b0d36 30px,
        #251246 30px,
        #251246 60px
    );
}
.custom-founder-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 50px rgba(79, 70, 229, 0.1);
    border-color: rgba(79, 70, 229, 0.2);
}
.founder-profile-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 8px 25px rgba(79, 70, 229, 0.3);
    border: 3px solid var(--color-accent);
}
.cert-badge:hover {
    background: var(--color-accent);
    color: white;
}
</style>

<section class="section section--alt" id="founder">
    <div class="container">
        <div class="section__header" style="text-align: left; max-width: 800px; margin-bottom: 50px;">
            <span class="section__badge" style="margin-left: 0;"><i class="fas fa-book-open"></i> Our Story</span>
            <h2 class="section__title">Built by <span class="text-gradient">senior practitioners</span></h2>
            <p class="section__subtitle" style="text-align: left;">
                MetricVibes started in 2023 with a simple frustration: brands had more data than ever, and fewer answers.
            </p>
        </div>

        <div class="founder__grid">
            <!-- Content -->
            <div class="founder__content">
                <div style="border-left: 3px solid var(--color-accent); padding-left: 20px; margin-bottom: 25px;">
                    <p style="color: var(--text-primary); font-size: 1.05rem; font-weight: 500; line-height: 1.7; margin: 0;">
                        We began as the hands-on measurement team behind global engagements, often as the quiet engine inside larger firms. That work took our analytics to brands like KFC, Carrefour and global aviation brands across four continents.
                    </p>
                </div>
                
                <p style="color: var(--text-secondary); font-size: 1rem; line-height: 1.7; margin-bottom: 20px;">
                    Then we went further and built our own products: <strong style="color: var(--text-primary);">QuerySafe</strong>, our AI knowledge and support platform, and AI data agents that answer hard business questions in natural language, with full business context.
                </p>
                <p style="color: var(--text-secondary); font-size: 1rem; line-height: 1.7;">
                    Today we are official partners of Anthropic (Claude), Google Cloud, Zoho and Adobe, with both private enterprises and government PSU projects in execution.
                </p>

                <!-- Premium Founder Card -->
                <div class="custom-founder-card" style="display: block !important; visibility: visible !important; opacity: 1 !important; background-color: var(--surface-card, #ffffff); border: 1px solid var(--border-color); box-shadow: 0 10px 30px rgba(0,0,0,0.08);">
                    <div style="display: flex; align-items: center; gap: 20px; position: relative; z-index: 10;">
                        <img src="/assets/img/team/anujpic.png" alt="Anuj Bansal" class="founder-profile-avatar" onerror="this.src='https://ui-avatars.com/api/?name=Anuj+Bansal&background=random';">
                        <div>
                            <h3 style="margin-bottom: 4px; font-size: 1.4rem; font-weight: 800; color: var(--text-primary);">Anuj Bansal</h3>
                            <div style="color: var(--text-secondary); font-size: 1rem; font-weight: 500;">Founder, MetricVibes</div>
                        </div>
                    </div>
                    
                    <div class="founder-certifications" style="position: relative; margin-top: 25px; z-index: 10;">
                        <span class="cert-badge">Adobe Certified</span>
                        <span class="cert-badge">Google Analytics</span>
                        <span class="cert-badge">Mixpanel</span>
                        <span class="cert-badge">Claude Architect</span>
                    </div>
                </div>
            </div>

            <!-- Timeline -->
            <div class="founder__timeline" style="padding-left: 10px;">
                <div class="founder-timeline">
                    <!-- 2023 -->
                    <div class="founder-timeline-event">
                        <div class="founder-timeline-year-badge">2023</div>
                        <div class="founder-timeline-card">
                            <h4 class="founder-timeline-title">Foundation & First Shipments</h4>
                            <div class="founder-timeline-desc">Founded in Noida. First analytics implementations shipped to early clients.</div>
                        </div>
                    </div>
                    
                    <!-- 2024 -->
                    <div class="founder-timeline-event">
                        <div class="founder-timeline-year-badge">2024</div>
                        <div class="founder-timeline-card">
                            <h4 class="founder-timeline-title">Global Scale & White-label</h4>
                            <div class="founder-timeline-desc">Global scale as a white-label engine: KFC across MENA & CIS, Carrefour, and private aviation.</div>
                        </div>
                    </div>
                    
                    <!-- 2025 -->
                    <div class="founder-timeline-event">
                        <div class="founder-timeline-year-badge">2025</div>
                        <div class="founder-timeline-card">
                            <h4 class="founder-timeline-title">Official Partnerships</h4>
                            <div class="founder-timeline-desc">Official partnerships with Google Cloud, Zoho and Adobe. QuerySafe platform takes shape.</div>
                        </div>
                    </div>
                    
                    <!-- 2026 -->
                    <div class="founder-timeline-event">
                        <div class="founder-timeline-year-badge">2026</div>
                        <div class="founder-timeline-card">
                            <h4 class="founder-timeline-title">AI Agents & Enterprise</h4>
                            <div class="founder-timeline-desc">Anthropic (Claude) partnership. QuerySafe live. Secured major government PSU contracts.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
