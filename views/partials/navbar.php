<?php




$currentPage = $currentPage ?? 'home';
?>

<!-- Announcement Bar -->
<div class="announcement-bar" id="announcementBar">
    <div class="announcement-bar__inner">
        <div class="announcement-bar__content">
            <span class="announcement-bar__badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sparkles-icon" style="margin-right: 4px;">
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
                    <path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>
                </svg>
                NEW
            </span>
            <span class="announcement-bar__text">New Report: <strong>MetricVibes Category Insights</strong> — Cross Channel — Analytics market across platforms; brand, price-pack. Uncover predictive trends, actionable data strategies, and drive growth today.</span>
        </div>
        <div class="announcement-bar__actions">
            <a href="<?= url() ?>#resources" class="announcement-bar__btn">Read the report <i class="fas fa-arrow-right"></i></a>
            <button class="announcement-bar__close" id="announcementClose" aria-label="Close announcement">
                <i class="fas fa-times"></i>
            </button>
        </div>
    </div>
</div>

<!-- Navbar -->
<nav class="navbar <?= $currentPage !== 'home' ? 'navbar--force-dark' : '' ?>" id="navbar" role="navigation" aria-label="Main navigation">
    <div class="navbar__container">
        <!-- Logo -->
        <a href="<?= url() ?>" class="navbar__logo" aria-label="<?= SITE_NAME ?> Home">
            <img src="<?= asset('img/logo-new.webp') ?>" alt="MetricVibes Logo" class="navbar__logo-img">
        </a>

        <!-- Navigation Links -->
        <div class="navbar__nav" id="navMenu" role="menubar">
            <a href="<?= url() ?>" class="navbar__link <?= active_nav('home', $currentPage) ?>" role="menuitem">Home</a>
            <a href="<?= url('about') ?>" class="navbar__link <?= active_nav('about', $currentPage) ?>" role="menuitem">About</a>
            <a href="#services" class="navbar__link navbar__link--has-dropdown <?= active_nav('services', $currentPage) ?>" role="menuitem" aria-expanded="false" aria-haspopup="true">Services</a>
            <a href="<?= url('case-studies') ?>" class="navbar__link <?= active_nav('case-studies', $currentPage) ?>" role="menuitem">Case Studies</a>
            <a href="<?= url('blog') ?>" class="navbar__link <?= active_nav('blog', $currentPage) ?>" role="menuitem">Blogs</a>
            <a href="<?= url('careers') ?>" class="navbar__link <?= active_nav('careers', $currentPage) ?>" role="menuitem">Career</a>
            <a href="#contact" class="navbar__link <?= active_nav('contact', $currentPage) ?>" role="menuitem">Contact Us</a>
        </div>

        <!-- Actions -->
        <div class="navbar__actions">
            <!-- Theme Toggle -->
            <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode" title="Toggle theme">
                <i class="fas fa-moon"></i>
                <i class="fas fa-sun"></i>
            </button>

            <!-- CTA Button -->
            <a href="<?= CALENDLY_URL ?>" target="_blank" rel="noopener noreferrer" class="navbar__cta d-none d-lg-inline-flex">
                Book a Demo &nbsp;<i class="fas fa-arrow-right"></i>
            </a>

            <!-- Mobile Toggle -->
            <button class="navbar__mobile-toggle" id="mobileToggle" aria-label="Toggle menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
</nav>

<!-- Mega Menu -->
<div class="mega-menu" id="megaMenu" role="menu" aria-label="Services menu">
    <div class="mega-menu__container">
        <!-- Column 1: Analytics -->
        <div class="mega-menu__column">
            <div class="mega-menu__column-title">Analytics Services</div>

            <a href="<?= url('services/ga4-migration') ?>" class="mega-menu__item" role="menuitem">
                <div class="mega-menu__item-icon">
                    <i class="fas fa-chart-line"></i>
                </div>
                <div class="mega-menu__item-content">
                    <div class="mega-menu__item-title">GA4 Migration</div>
                    <p class="mega-menu__item-desc">Seamless Universal Analytics to GA4 transition</p>
                </div>
            </a>

            <a href="<?= url('services/adobe-analytics') ?>" class="mega-menu__item" role="menuitem">
                <div class="mega-menu__item-icon">
                    <i class="fas fa-chart-area"></i>
                </div>
                <div class="mega-menu__item-content">
                    <div class="mega-menu__item-title">Adobe Analytics</div>
                    <p class="mega-menu__item-desc">Enterprise-grade Adobe implementation & optimization</p>
                </div>
            </a>

            <a href="<?= url('services/mixpanel') ?>" class="mega-menu__item" role="menuitem">
                <div class="mega-menu__item-icon">
                    <i class="fas fa-flask"></i>
                </div>
                <div class="mega-menu__item-content">
                    <div class="mega-menu__item-title">Mixpanel & Amplitude</div>
                    <p class="mega-menu__item-desc">Product analytics implementation & event tracking</p>
                </div>
            </a>

            <a href="<?= url('services/gtm') ?>" class="mega-menu__item" role="menuitem">
                <div class="mega-menu__item-icon">
                    <i class="fas fa-tags"></i>
                </div>
                <div class="mega-menu__item-content">
                    <div class="mega-menu__item-title">Google Tag Manager</div>
                    <p class="mega-menu__item-desc">Tag management, server-side tracking & consent</p>
                </div>
            </a>
        </div>

        <!-- Column 2: Cloud & AI -->
        <div class="mega-menu__column">
            <div class="mega-menu__column-title">Cloud & AI Services</div>

            <a href="<?= url('services/cloud-engineering') ?>" class="mega-menu__item" role="menuitem">
                <div class="mega-menu__item-icon">
                    <i class="fas fa-cloud"></i>
                </div>
                <div class="mega-menu__item-content">
                    <div class="mega-menu__item-title">Cloud Engineering</div>
                    <p class="mega-menu__item-desc">GCP, AWS & Azure architecture and migration</p>
                </div>
            </a>

            <a href="<?= url('services/ai-automation') ?>" class="mega-menu__item" role="menuitem">
                <div class="mega-menu__item-icon">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="mega-menu__item-content">
                    <div class="mega-menu__item-title">AI Automation</div>
                    <p class="mega-menu__item-desc">Intelligent process automation with machine learning</p>
                </div>
            </a>

            <a href="<?= url('services/llm-integration') ?>" class="mega-menu__item" role="menuitem">
                <div class="mega-menu__item-icon">
                    <i class="fas fa-brain"></i>
                </div>
                <div class="mega-menu__item-content">
                    <div class="mega-menu__item-title">LLM Integration</div>
                    <p class="mega-menu__item-desc">Custom GPT, Claude & Gemini enterprise solutions</p>
                </div>
            </a>

            <a href="<?= url('services/dashboard-development') ?>" class="mega-menu__item" role="menuitem">
                <div class="mega-menu__item-icon">
                    <i class="fas fa-gauge-high"></i>
                </div>
                <div class="mega-menu__item-content">
                    <div class="mega-menu__item-title">Dashboard Development</div>
                    <p class="mega-menu__item-desc">Custom Looker Studio, Power BI & Tableau dashboards</p>
                </div>
            </a>
        </div>

        <!-- Column 3: Featured -->
        <div class="mega-menu__column">
            <div class="mega-menu__featured">
                <div>
                    <span class="mega-menu__featured-badge">✨ Featured Case Study</span>
                    <h4 class="mega-menu__featured-title">How we helped a Fortune 500 reduce analytics costs by 60%</h4>
                    <p class="mega-menu__featured-text">Enterprise GA4 migration with custom server-side tracking implementation.</p>
                </div>
                <a href="<?= url('case-studies') ?>" class="btn btn--outline-light btn--sm">Read Case Study →</a>
            </div>
        </div>
    </div>
</div>

<!-- Mega Menu Backdrop -->
<div class="mega-menu-backdrop" id="megaBackdrop"></div>
