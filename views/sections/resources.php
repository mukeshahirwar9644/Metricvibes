<?php  ?>

<section class="section" id="resources">
    <div class="container">
        <div class="section__header">
            <span class="section__badge"><i class="fas fa-lightbulb"></i> Insights</span>
            <h2 class="section__title">Insights & <span class="text-gradient">Resources</span></h2>
            <p class="section__subtitle">
                Expert articles, guides, and industry insights from our analytics and AI team.
            </p>
        </div>

        <div class="resources__grid">
            <!-- Featured Article -->
            <a href="<?= url('blog/ga4-server-side-tracking-guide') ?>" class="blog-card" data-aos="fade-up" data-aos-delay="0">
                <div class="blog-card__image" style="height: 180px;">
                    <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #6C63FF22, #4F46E544); display: flex; align-items: center; justify-content: center;">
                        <i class="fas fa-newspaper" style="font-size: 3rem; color: var(--color-accent); opacity: 0.3;"></i>
                    </div>
                </div>
                <div class="blog-card__body">
                    <span class="blog-card__category">Featured</span>
                    <h3 class="blog-card__title" style="font-size: 1.1rem;">The Complete Guide to GA4 Server-Side Tracking</h3>
                    <p class="blog-card__excerpt" style="font-size: 0.9rem; line-height: 1.5; margin-bottom: 10px;">
                        Learn how server-side tracking can improve data accuracy and future-proof analytics.
                    </p>
                    <div class="blog-card__meta">
                        <span><i class="far fa-calendar"></i> Jan 15, 2025</span>
                    </div>
                </div>
            </a>

            <!-- Article 2 -->
            <a href="<?= url('blog/ai-analytics-enterprise') ?>" class="blog-card" data-aos="fade-up" data-aos-delay="100">
                <div class="blog-card__image" style="height: 180px;">
                    <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #10B98122, #10B98144); display: flex; align-items: center; justify-content: center;">
                        <i class="fas fa-robot" style="font-size: 3rem; color: #10B981; opacity: 0.4;"></i>
                    </div>
                </div>
                <div class="blog-card__body">
                    <span class="blog-card__category" style="color: #10B981; background: #10B98122;">AI & ML</span>
                    <h3 class="blog-card__title" style="font-size: 1.1rem;">How AI is Transforming Enterprise Analytics</h3>
                    <p class="blog-card__excerpt" style="font-size: 0.9rem; line-height: 1.5; margin-bottom: 10px;">
                        Explore predictive models and automated workflows powered by modern AI stacks.
                    </p>
                    <div class="blog-card__meta">
                        <span><i class="far fa-clock"></i> 8 min read</span>
                    </div>
                </div>
            </a>

            <!-- Article 3 -->
            <a href="<?= url('blog/consent-mode-v2') ?>" class="blog-card" data-aos="fade-up" data-aos-delay="200">
                <div class="blog-card__image" style="height: 180px;">
                    <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #F59E0B22, #F59E0B44); display: flex; align-items: center; justify-content: center;">
                        <i class="fas fa-shield-halved" style="font-size: 3rem; color: #F59E0B; opacity: 0.4;"></i>
                    </div>
                </div>
                <div class="blog-card__body">
                    <span class="blog-card__category" style="color: #F59E0B; background: #F59E0B22;">Privacy</span>
                    <h3 class="blog-card__title" style="font-size: 1.1rem;">Google Consent Mode V2: What You Need to Know</h3>
                    <p class="blog-card__excerpt" style="font-size: 0.9rem; line-height: 1.5; margin-bottom: 10px;">
                        Stay compliant and minimize data loss with advanced consent management.
                    </p>
                    <div class="blog-card__meta">
                        <span><i class="far fa-clock"></i> 6 min read</span>
                    </div>
                </div>
            </a>
        </div>
        
        <!-- Premium Newsletter Banner -->
        <div class="newsletter-banner" data-aos="fade-up" data-aos-delay="300" style="margin-top: 40px; padding: 40px; background: var(--surface-primary); border: 1px solid var(--border-color); border-radius: 16px; display: flex; align-items: center; justify-content: space-between; gap: 40px; box-shadow: 0 8px 30px rgba(0,0,0,0.04); position: relative; overflow: hidden; flex-wrap: wrap;">
            
            <div style="flex: 1; min-width: 300px; position: relative; z-index: 2;">
                <h4 style="color: var(--text-primary); font-size: 1.4rem; margin-bottom: 8px; font-weight: 700; display: flex; align-items: center; gap: 12px;">
                    <i class="far fa-envelope" style="color: var(--color-accent); font-size: 1.2rem;"></i>
                    MetricVibes Insights
                </h4>
                <p style="color: var(--text-secondary); font-size: 0.95rem; margin: 0; line-height: 1.6;">Actionable strategies on enterprise analytics, AI, and data architecture delivered weekly.</p>
            </div>
            
            <form class="newsletter-form" action="#" method="POST" style="display: flex; gap: 12px; width: 100%; flex: 1; min-width: 320px; max-width: 450px; position: relative; z-index: 2;">
                <input type="email" placeholder="Enter your work email" aria-label="Email" required style="flex: 1; padding: 14px 20px; border: 1px solid var(--border-color); background: var(--surface-secondary); color: var(--text-primary); border-radius: 8px; font-size: 0.95rem; outline: none; transition: border-color 0.2s;">
                <button type="submit" style="background: var(--text-primary); color: var(--surface-primary); border: none; padding: 14px 28px; border-radius: 8px; font-weight: 600; font-size: 0.95rem; cursor: pointer; transition: opacity 0.2s; white-space: nowrap; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">Subscribe</button>
            </form>
            
            <!-- Subtle left accent line -->
            <div style="position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: var(--color-accent);"></div>
        </div>
    </div>
</section>
