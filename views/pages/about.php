<?php



?>

<!-- About Us Header Banner -->
<section class="about-header" style="position: relative; padding: 120px 0 80px; background: url('<?= asset('img/hero/hero-workspace-bg.png') ?>') center/cover no-repeat; text-align: center; color: #fff;">
    <div style="position: absolute; inset: 0; background: linear-gradient(135deg, rgba(17, 10, 42, 0.92) 0%, rgba(56, 45, 185, 0.88) 100%);"></div>
    <div class="container" style="position: relative; z-index: 2; max-width: 900px;">
        <h1 style="font-family: var(--font-heading); font-size: 3.8rem; font-weight: 800; margin-bottom: 24px; color: #fff; text-shadow: 0 4px 12px rgba(0,0,0,0.5);">About MetricVibes</h1>
        <p style="font-size: 1.15rem; line-height: 1.8; color: rgba(255, 255, 255, 0.95); font-weight: 500; text-shadow: 0 2px 8px rgba(0,0,0,0.4);">
            MetricVibes is a premium analytics and tracking consultancy based in Delhi NCR, serving businesses worldwide. We transform how organizations collect, analyze, and act on their data - specializing in robust tracking implementations, comprehensive analytics frameworks, and actionable insights that drive measurable growth.
        </p>
    </div>
</section>

<!-- About Details Section -->
<section class="section">
    <div class="container">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;">
            
            <!-- Left Content -->
            <div>
                <span class="section__badge" style="background: var(--surface-tertiary); color: var(--text-secondary); margin-bottom: 16px;">
                    Your Analytics & Tracking Experts
                </span>
                <h2 style="font-family: var(--font-heading); font-size: 2.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 24px;">
                    About MetricVibes
                </h2>
                <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 32px; font-size: 0.95rem;">
                    We specialize in cutting-edge cookieless analytics and advanced personalization strategies, ensuring businesses achieve growth while adhering to local regulations. Our certified analysts are skilled in solving complex analytics challenges and continuously update their knowledge of industry trends. We are committed to delivering optimal solutions that maximize the value of client data. Whether improving existing analytics frameworks or implementing from scratch, we provide scalable, personalized recommendations that enhance user experience and drive business success, all while maintaining compliance with evolving privacy laws.
                </p>
                
                <!-- Stats Grid -->
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 32px;">
                    <div style="background: var(--surface-secondary); border: 1px solid var(--border-color, #e2e8f0); border-radius: 8px; padding: 20px; text-align: center;">
                        <div style="font-size: 1.75rem; font-weight: 700; color: var(--color-accent);">20+</div>
                        <div style="font-size: 0.875rem; color: var(--text-secondary);">Clients</div>
                    </div>
                    <div style="background: var(--surface-secondary); border: 1px solid var(--border-color, #e2e8f0); border-radius: 8px; padding: 20px; text-align: center;">
                        <div style="font-size: 1.75rem; font-weight: 700; color: var(--color-accent);">50+</div>
                        <div style="font-size: 0.875rem; color: var(--text-secondary);">Projects</div>
                    </div>
                    <div style="background: var(--surface-secondary); border: 1px solid var(--border-color, #e2e8f0); border-radius: 8px; padding: 20px; text-align: center;">
                        <div style="font-size: 1.75rem; font-weight: 700; color: var(--color-accent); display: flex; align-items: center; justify-content: center; gap: 8px;">
                            5 <i class="fas fa-star" style="color: #fbbf24; font-size: 1.25rem;"></i>
                        </div>
                        <div style="font-size: 0.875rem; color: var(--text-secondary);">Star Reviews</div>
                    </div>
                </div>

                <a href="#audit" class="btn btn--primary" style="padding: 14px 28px; border-radius: 30px;">
                    Get Personalized Audit
                </a>
            </div>

            <!-- Right Image -->
            <div>
                <img src="<?= asset('img/about-dashboard.png') ?>" alt="Dashboard Analytics" style="width: 100%; border-radius: 20px; box-shadow: var(--shadow-md); object-fit: cover; aspect-ratio: 1/1;" onerror="this.src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'">
            </div>
            
        </div>
    </div>
</section>

<!-- Core Principles Section -->
<section class="section" style="background: var(--surface-secondary);">
    <div class="container">
        <h2 style="text-align: center; font-size: 2.8rem; font-weight: 800; color: var(--text-primary); margin-bottom: 50px; letter-spacing: -0.03em;">
            Built on <span class="text-gradient">Core Principles</span>
        </h2>
        
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
            <div class="why-choose-card">
                <div style="width: 56px; height: 56px; background: linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%); border-radius: 14px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; box-shadow: 0 10px 20px rgba(79, 70, 229, 0.25);">
                    <i class="fas fa-crosshairs" style="font-size: 1.6rem; color: #fff;"></i>
                </div>
                <h4 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 12px; color: var(--text-primary);">Clarity over Clutter</h4>
                <p style="font-size: 1rem; line-height: 1.6; color: var(--text-secondary);">
                    We cut through vanity metrics. Our goal is to extract the signal from the noise, giving you only the data that actually moves the needle for your revenue and growth.
                </p>
            </div>
            
            <div class="why-choose-card">
                <div style="width: 56px; height: 56px; background: linear-gradient(135deg, #f97316 0%, #ec4899 100%); border-radius: 14px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; box-shadow: 0 10px 20px rgba(249, 115, 22, 0.25);">
                    <i class="fas fa-layer-group" style="font-size: 1.6rem; color: #fff;"></i>
                </div>
                <h4 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 12px; color: var(--text-primary);">Scalable Architecture</h4>
                <p style="font-size: 1rem; line-height: 1.6; color: var(--text-secondary);">
                    We don't do band-aid fixes. We build robust, privacy-first tracking architectures (like server-side GTM) that scale seamlessly as your enterprise expands.
                </p>
            </div>

            <div class="why-choose-card">
                <div style="width: 56px; height: 56px; background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%); border-radius: 14px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; box-shadow: 0 10px 20px rgba(14, 165, 233, 0.25);">
                    <i class="far fa-gem" style="font-size: 1.6rem; color: #fff;"></i>
                </div>
                <h4 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 12px; color: var(--text-primary);">Relentless Precision</h4>
                <p style="font-size: 1rem; line-height: 1.6; color: var(--text-secondary);">
                    Data is useless if you can't trust it. We obsess over attribution accuracy, ensuring that every dollar spent is correctly mapped to its return on investment.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Content Sections -->
<section class="section" style="padding-top: 80px; padding-bottom: 80px; background: var(--surface-primary);">
    <div class="container">
        <div class="about-content-grid">
            
            <!-- Execution Strategy -->
            <div class="about-content-block">
                <div class="about-content-header">
                    <div class="icon-box" style="background: linear-gradient(135deg, #f59e0b 0%, #ea580c 100%); border: none; box-shadow: 0 10px 20px rgba(234, 88, 12, 0.25);">
                        <i class="fas fa-bolt" style="color: #fff;"></i>
                    </div>
                    <h3>Execution Strategy</h3>
                </div>
                <div class="about-content-body">
                    <p style="font-size: 1.1rem;">Meaningful insights don't come from just hoarding data — they emerge from deep business context. We bridge the gap between raw data and executive strategy.</p>
                    <div class="highlight-box">
                        <p>We begin every engagement with a ruthless audit of your tracking infrastructure, exposing broken funnels, attribution gaps, and silent revenue leaks.</p>
                    </div>
                    <p>Instead of generic dashboards, we deploy bespoke measurement frameworks tailored precisely to how your board and stakeholders make decisions.</p>
                </div>
            </div>

            <!-- Focus Verticals -->
            <div class="about-content-block">
                <div class="about-content-header">
                    <div class="icon-box" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); border: none; box-shadow: 0 10px 20px rgba(5, 150, 105, 0.25);">
                        <i class="fas fa-building" style="color: #fff;"></i>
                    </div>
                    <h3>Focus Verticals</h3>
                </div>
                <div class="about-content-body">
                    <p>While data principles are universal, industry context is everything. We possess deep operational expertise in scaling analytics for high-growth sectors:</p>
                    <ul class="custom-list">
                        <li><strong>E-commerce:</strong> Server-side tracking, advanced attribution, and LTV (Lifetime Value) modeling.</li>
                        <li><strong>SaaS & B2B:</strong> Multi-touch pipeline tracking, trial-to-paid conversion optimization, and churn analytics.</li>
                        <li><strong>HealthTech:</strong> HIPAA & GDPR compliant data pipelines and secure patient telemetry.</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</section>

<!-- FAQ Section -->
<section class="faq-section-modern">
    <div class="container">
        <h2 class="faq-modern-title">
            FAQ
        </h2>
        
        <div class="faq-container-modern">
            <div class="faq-item-modern">
                <div class="faq-header-modern">
                    What makes MetricVibes different from other analytics consultancies?
                    <i class="fas fa-caret-down"></i>
                </div>
                <div class="faq-body-modern">
                    We focus on business outcomes rather than just technical implementation. Our consultants combine deep technical expertise with strategic thinking to ensure your analytics investments drive measurable business growth.
                </div>
            </div>
            
            <div class="faq-item-modern">
                <div class="faq-header-modern">
                    How long does a typical analytics implementation project take?
                    <i class="fas fa-caret-down"></i>
                </div>
                <div class="faq-body-modern">
                    Most comprehensive analytics setups take 4-8 weeks, depending on complexity and existing infrastructure. We provide detailed project timelines during our initial consultation phase.
                </div>
            </div>

            <div class="faq-item-modern">
                <div class="faq-header-modern">
                    Do you work with companies outside of major metropolitan areas?
                    <i class="fas fa-caret-down"></i>
                </div>
                <div class="faq-body-modern">
                    Absolutely. Our remote-first approach allows us to serve clients globally, with most work conducted virtually through collaborative project management platforms and regular video consultations.
                </div>
            </div>

            <div class="faq-item-modern">
                <div class="faq-header-modern">
                    What ongoing support do you provide after initial implementation?
                    <i class="fas fa-caret-down"></i>
                </div>
                <div class="faq-body-modern">
                    We offer flexible retainer arrangements for ongoing optimization, monthly reporting, troubleshooting, and strategic consulting. Many clients benefit from quarterly analytics reviews to ensure continued alignment with business goals.
                </div>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section style="padding: 60px 0; background: linear-gradient(135deg, #4c1d95 0%, #312e81 100%); position: relative; overflow: hidden;">
    <div style="position: absolute; inset: 0; background-image: radial-gradient(#6366f1 1px, transparent 1px); background-size: 20px 20px; opacity: 0.1;"></div>
    <div class="container" style="position: relative; z-index: 2; display: flex; justify-content: space-between; align-items: center;">
        <h2 style="color: white; font-size: 2.25rem; font-weight: 600; max-width: 500px; line-height: 1.2;">
            Ready To Boost Your Website's Performance ?
        </h2>
        <a href="#audit" class="btn" style="background: white; color: #4c1d95; font-weight: 600; padding: 16px 32px; border-radius: 30px;">
            Get Free Audit
        </a>
    </div>
</section>

<!-- FAQ Accordion Script -->
<script>
document.addEventListener('DOMContentLoaded', () => {
    const faqHeaders = document.querySelectorAll('.faq-header-modern');
    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const body = header.nextElementSibling;
            const icon = header.querySelector('i');
            
            if (!body) return; // if no body, do nothing
            
            if (body.style.display === 'none' || body.style.display === '') {
                body.style.display = 'block';
                header.classList.add('active');
                icon.className = 'fas fa-caret-up';
            } else {
                body.style.display = 'none';
                header.classList.remove('active');
                icon.className = 'fas fa-caret-down';
            }
        });
    });
});
</script>
