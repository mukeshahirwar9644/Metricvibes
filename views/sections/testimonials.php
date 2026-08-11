<?php  ?>

<section class="section" id="testimonials" style="padding-bottom: 2rem;">
    <div class="container">
        <div class="section__header">
            <span class="section__badge"><i class="fas fa-quote-left"></i> Testimonials</span>
            <h2 class="section__title">What Our <span class="text-gradient">Clients Say</span></h2>
            <p class="section__subtitle">
                Don't just take our word for it — hear from the enterprises we've helped transform.
            </p>
        </div>

        <div class="swiper testimonials-slider">
            <div class="swiper-wrapper">
                <?php
                $testimonials = [
                    [
                        'quote' => 'MetricVibes transformed our entire analytics stack. The GA4 migration was seamless, and their server-side tracking implementation reduced our data loss by 30%. Absolutely world-class team.',
                        'name' => 'Sarah Chen',
                        'role' => 'VP of Data',
                        'company' => 'TechCorp Global',
                        'country' => '🇺🇸',
                        'rating' => 5,
                        'initials' => 'SC',
                    ],
                    [
                        'quote' => 'The AI automation solutions from MetricVibes saved us over $2M annually. Their churn prediction model was incredibly accurate and the team was a pleasure to work with throughout the project.',
                        'name' => 'James Morrison',
                        'role' => 'CTO',
                        'company' => 'FinScale',
                        'country' => '🇬🇧',
                        'rating' => 5,
                        'initials' => 'JM',
                    ],
                    [
                        'quote' => 'We needed a partner who understood both analytics and cloud infrastructure. MetricVibes delivered a complete solution that scaled our reporting from hours to seconds. Exceptional work.',
                        'name' => 'Priya Patel',
                        'role' => 'Director of Analytics',
                        'company' => 'MedFlow Health',
                        'country' => '🇮🇳',
                        'rating' => 5,
                        'initials' => 'PP',
                    ],
                    [
                        'quote' => 'The custom LLM integration MetricVibes built for our customer support reduced ticket resolution time by 65%. Their deep understanding of enterprise AI is unmatched in the industry.',
                        'name' => 'Marcus Weber',
                        'role' => 'Head of Innovation',
                        'company' => 'Nexus Digital',
                        'country' => '🇩🇪',
                        'rating' => 5,
                        'initials' => 'MW',
                    ],
                    [
                        'quote' => 'From Adobe Analytics migration to building custom Looker Studio dashboards, MetricVibes has been our go-to analytics partner for 3 years. Their expertise is consistently outstanding.',
                        'name' => 'Elena Rodriguez',
                        'role' => 'CMO',
                        'company' => 'ShopWave',
                        'country' => '🇪🇸',
                        'rating' => 5,
                        'initials' => 'ER',
                    ],
                    [
                        'quote' => 'MetricVibes rebuilt our entire data pipeline on GCP, reducing costs by 60% while improving reliability to 99.99%. They understand enterprise-scale data engineering like no other.',
                        'name' => 'David Kim',
                        'role' => 'VP Engineering',
                        'company' => 'DataStream',
                        'country' => '🇰🇷',
                        'rating' => 5,
                        'initials' => 'DK',
                    ],
                ];

                foreach ($testimonials as $t): ?>
                    <div class="swiper-slide">
                        <div class="testimonial-card card--glass">
                            <div class="testimonial-card__stars">
                                <?php for ($i = 0; $i < $t['rating']; $i++): ?>
                                    <i class="fas fa-star"></i>
                                <?php endfor; ?>
                            </div>
                            <p class="testimonial-card__quote"><?= $t['quote'] ?></p>
                            <div class="testimonial-card__author">
                                <div class="testimonial-card__avatar" style="background: var(--gradient-primary); display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 700; font-size: 0.875rem; width: 48px; height: 48px; border-radius: 50%;">
                                    <?= $t['initials'] ?>
                                </div>
                                <div>
                                    <div class="testimonial-card__name"><?= $t['name'] ?></div>
                                    <div class="testimonial-card__role">
                                        <?= $t['role'] ?> at <?= $t['company'] ?> <?= $t['country'] ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>

            <!-- Navigation -->
            <div style="display: flex; align-items: center; justify-content: center; gap: var(--space-6); margin-top: var(--space-10);">
                <button class="testimonials-prev btn btn--icon btn--outline" aria-label="Previous testimonial">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <div class="testimonials-pagination"></div>
                <button class="testimonials-next btn btn--icon btn--outline" aria-label="Next testimonial">
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    </div>
</section>
