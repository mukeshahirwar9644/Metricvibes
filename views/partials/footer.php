<?php




?>

<!-- Footer -->
<footer class="footer" id="footer">
    <div class="container">
        <div class="footer__grid">
            <!-- Brand Column -->
            <div class="footer__brand">
                <a href="<?= url() ?>" class="navbar__logo" style="margin-bottom: var(--space-3); display: inline-flex;">
                    <img src="<?= asset('img/logo-new.webp') ?>" alt="MetricVibes Logo" class="navbar__logo-img">
                </a>
                <p class="footer__brand-desc">
                    Empowering enterprises with data-driven decisions through cutting-edge analytics, cloud solutions, and AI automation.
                </p>
                <div class="footer__social">
                    <a href="<?= SOCIAL_TWITTER ?>" class="footer__social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-x-twitter"></i>
                    </a>
                    <a href="<?= SOCIAL_LINKEDIN ?>" class="footer__social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="mailto:<?= SITE_EMAIL ?>" class="footer__social-link" aria-label="Email">
                        <i class="fas fa-envelope"></i>
                    </a>
                    <a href="<?= CALENDLY_URL ?>" class="footer__social-link" aria-label="Book a Call" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-calendar-alt"></i>
                    </a>
                </div>
            </div>

            <!-- Quick Links -->
            <div>
                <h4 class="footer__heading">Company</h4>
                <div class="footer__links">
                    <a href="<?= url('about') ?>" class="footer__link">About Us</a>
                    <a href="<?= url('careers') ?>" class="footer__link">Careers</a>
                    <a href="<?= url('blog') ?>" class="footer__link">Blog</a>
                    <a href="<?= url('case-studies') ?>" class="footer__link">Case Studies</a>
                    <a href="#contact" class="footer__link">Contact</a>
                </div>
            </div>

            <!-- Services -->
            <div>
                <h4 class="footer__heading">Services</h4>

                <div class="footer__links">
                    <a href="<?= url('services/ga4-migration') ?>" class="footer__link">GA4 Migration</a>
                    <a href="<?= url('services/adobe-analytics') ?>" class="footer__link">Adobe Analytics</a>
                    <a href="<?= url('services/cloud-engineering') ?>" class="footer__link">Cloud Engineering</a>
                    <a href="<?= url('services/ai-automation') ?>" class="footer__link">AI Automation</a>
                    <a href="<?= url('services/llm-integration') ?>" class="footer__link">LLM Integration</a>
                    <a href="<?= url('services/dashboard-development') ?>" class="footer__link">Dashboards</a>
                </div>
            </div>

            <!-- Resources -->
            <div>
                <h4 class="footer__heading">Resources</h4>
                <div class="footer__links">
                    <a href="<?= url('blog') ?>" class="footer__link">Latest Articles</a>
                    <a href="<?= url('case-studies') ?>" class="footer__link">Success Stories</a>
                    <a href="#faq" class="footer__link">FAQ</a>
                    <a href="<?= url('privacy') ?>" class="footer__link">Privacy Policy</a>
                    <a href="<?= url('terms') ?>" class="footer__link">Terms of Service</a>
                </div>
            </div>

            <!-- Newsletter -->
            <div>
                <h4 class="footer__heading">Stay Updated</h4>
                <p class="footer__newsletter-text">
                    Get the latest insights on analytics, cloud, and AI delivered to your inbox.
                </p>
                <form class="footer__newsletter-form newsletter-form" action="#" method="POST">
                    <input type="email" class="footer__newsletter-input" placeholder="your@email.com" aria-label="Email address" required>
                    <button type="submit" class="btn btn--primary btn--sm">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="footer__bottom">
            <p class="footer__copyright">
                © <?= date('Y') ?> <?= SITE_NAME ?>. All rights reserved.
            </p>
            <div class="footer__bottom-links">
                <a href="<?= url('privacy') ?>" class="footer__bottom-link">Privacy Policy</a>
                <a href="<?= url('terms') ?>" class="footer__bottom-link">Terms of Service</a>
                <a href="<?= url('sitemap.xml') ?>" class="footer__bottom-link">Sitemap</a>
            </div>
        </div>
    </div>
</footer>
