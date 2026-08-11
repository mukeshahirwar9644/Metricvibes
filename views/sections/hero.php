<?php  ?>

<!-- Hero Section -->
<section class="hero" id="hero">
    <!-- Full-width Background -->
    <div class="hero__bg">
        <img src="<?= asset('img/hero/hero-workspace-bg.png') ?>" alt="Modern analytics workspace" class="hero__bg-image" loading="eager">
        <div class="hero__bg-overlay"></div>
    </div>

    <div class="container hero__container">
        <!-- Left: Content -->
        <div class="hero__content">
            <div class="hero__badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sparkles-icon" style="margin-right: 4px;">
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
                    <path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>
                </svg>
                AI-Powered Analytics Consulting
            </div>

            <h1 class="hero__title">
                Your Analytics, Cloud & <span class="hero__title-accent">AI Implementation</span> Partner
            </h1>

            <p class="hero__subtitle">
                We eliminate data silos, optimize runaway cloud costs, and automate manual workflows for enterprises. From recovering lost marketing data to unlocking predictive AI insights.
            </p>

            <div class="hero__buttons">
                <a href="#contact" class="btn--brand-pill" style="opacity: 1 !important; visibility: visible !important;">
                    Book a Demo <i class="fa-solid fa-arrow-right" style="margin-left: 8px;"></i>
                </a>
                <a href="<?= url('case-studies') ?>" class="btn--white-pill" style="opacity: 1 !important; visibility: visible !important;">
                    <div class="btn-icon-circle">
                        <i class="fa-solid fa-play" style="margin-left: 2px;"></i>
                    </div>
                    See Our Work
                </a>
            </div>
        </div>

        <!-- Right: Floating Testimonial Slider -->
        <div class="hero__visual">
            <div class="swiper hero-testimonial-slider">
                <div class="swiper-wrapper">
                    <!-- Slide 1 -->
                    <div class="swiper-slide">
                        <div class="hero__testimonial-wrapper">
                            <div class="hero__testimonial-image">
                                <img src="<?= asset('img/team/jisoo.jpg') ?>" alt="Jisoo Hong">
                            </div>
                            <div class="hero__testimonial-content">
                                <div class="hero__testimonial-header">
                                    <h4 class="hero__testimonial-name">Jisoo Hong</h4>
                                    <p class="hero__testimonial-role">Product Manager - VistaJet</p>
                                </div>
                                <p class="hero__testimonial-text">
                                    Their implementation on our website, android, and iOS apps empowered me to generate powerful reports for stakeholders, driving crucial decisions in our flight route planning and app/web enhancements for lead conversion. Moreover, their insights into lead attribution and ROI optimization significantly enhanced our marketing spend efficiency.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2 -->
                    <div class="swiper-slide">
                        <div class="hero__testimonial-wrapper">
                            <div class="hero__testimonial-image">
                                <img src="<?= asset('img/team/Eugene Paik.jpg') ?>" alt="Eugene Paik">
                            </div>
                            <div class="hero__testimonial-content">
                                <div class="hero__testimonial-header">
                                    <h4 class="hero__testimonial-name">Eugene Paik</h4>
                                    <p class="hero__testimonial-role">CEO - Consulting Firm</p>
                                </div>
                                <p class="hero__testimonial-text">
                                    I had issues integrating kartra and mixpanel, and Metric Vibes did a FANTASTIC JOB. I would highly recommend 10/10. [Their] delivery was very fast and accurate. What's more, they did a full documentation of the detailed steps and also the code. I will definitely revisit and also introduce my friends that need data issues solved.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3 -->
                    <div class="swiper-slide">
                        <div class="hero__testimonial-wrapper">
                            <div class="hero__testimonial-image">
                                <img src="<?= asset('img/team/Alona Smahliuk.jpg') ?>" alt="Alona Smahliuk">
                            </div>
                            <div class="hero__testimonial-content">
                                <div class="hero__testimonial-header">
                                    <h4 class="hero__testimonial-name">Alona Smahliuk</h4>
                                    <p class="hero__testimonial-role">Technology Coordinator - Ticket Network</p>
                                </div>
                                <p class="hero__testimonial-text">
                                    Metric Vibes was extremely helpful in consulting, creating a documented plan, and executing our GA4 migration for 6 sites. They demonstrated strong expertise in analytics and were able to provide insights to our team. We would work with them again
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Bottom Stats Bar -->
    <div class="hero__stats-bar">
        <div class="container">
            <div class="hero__stats">
                <div class="hero__stat">
                    <span class="hero__stat-value">50+</span>
                    <span class="hero__stat-label">Projects Delivered</span>
                </div>
                <div class="hero__stat-divider"></div>
                <div class="hero__stat">
                    <span class="hero__stat-value">5+</span>
                    <span class="hero__stat-label">Years of Excellence</span>
                </div>
                <div class="hero__stat-divider"></div>
                <div class="hero__stat">
                    <span class="hero__stat-value">5+</span>
                    <span class="hero__stat-label">Countries Served</span>
                </div>
                <div class="hero__stat-divider"></div>
                <div class="hero__stat">
                    <span class="hero__stat-value">98%</span>
                    <span class="hero__stat-label">Client Satisfaction</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Subtle bottom wave separator -->
    <div class="hero__wave">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,40 1440,35 L1440,60 L0,60 Z" fill="var(--surface-primary)"/>
        </svg>
    </div>
</section>
