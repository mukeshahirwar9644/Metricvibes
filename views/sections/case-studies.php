<?php  ?>

<section class="section" id="case-studies">
    <div class="container">
        <?php if (!isset($hideCaseStudiesHeader) || !$hideCaseStudiesHeader): ?>
        <div class="section__header">
            <span class="section__badge"><i class="fas fa-rocket"></i> Success Stories</span>
            <h2 class="section__title">Proven <span class="text-gradient">Results</span></h2>
            <p class="section__subtitle">
                See how we've helped enterprises transform their data infrastructure and drive measurable business outcomes.
            </p>
        </div>
        <?php endif; ?>

        <div class="case-studies__grid">
            <?php
            $caseStudies = [
                [
                    'title' => 'Global Aviation Brand',
                    'industry' => 'Aviation',
                    'challenge' => 'Marketing spend reduced with bookings held, for a global aviation brand.',
                    'results' => [
                        ['value' => '↓ 19.5%', 'label' => 'Spend Cut'],
                        ['value' => '100%', 'label' => 'Bookings Held'],
                    ],
                    'color' => '#7851A9',
                ],
                [
                    'title' => 'Online Ticketing Platform',
                    'industry' => 'E-Commerce',
                    'challenge' => 'Attribution-led growth with an 8% purchase-funnel drop-off cut, for an online ticketing platform.',
                    'results' => [
                        ['value' => '↑ 27%', 'label' => 'Traffic Up'],
                        ['value' => '↓ 8%', 'label' => 'Funnel Drop-off'],
                    ],
                    'color' => '#1564F9',
                ],
                [
                    'title' => 'MAF Carrefour',
                    'industry' => 'Retail',
                    'challenge' => 'Documented GCP cost reduction on the MAF Carrefour data platform.',
                    'results' => [
                        ['value' => '↓ 66%', 'label' => 'Cloud Cost Cut'],
                        ['value' => '100%', 'label' => 'Data Availability'],
                    ],
                    'color' => '#10B981',
                ],
                [
                    'title' => 'Global QSR (KFC)',
                    'industry' => 'QSR & F&B',
                    'challenge' => 'Analytics brains behind data instrumentation for a global QSR and the largest retail brand in UAE with engagements across MENA, CIS and beyond.',
                    'results' => [
                        ['value' => '4', 'label' => 'Continents'],
                        ['value' => '1', 'label' => 'Source of Truth'],
                    ],
                    'color' => '#F04B32',
                ],
                [
                    'title' => 'EESL',
                    'industry' => 'Govt & Public Sector',
                    'challenge' => 'Govt-grade AI deployed inside a secured government portal at EESL.',
                    'results' => [
                        ['value' => '100%', 'label' => 'Secure AI'],
                        ['value' => '24/7', 'label' => 'Support Automation'],
                    ],
                    'color' => '#4F46E5',
                ],
            ];

            foreach ($caseStudies as $index => $cs): ?>
                <div class="case-study-card">
                    <div class="case-study-card__image">
                        <div style="width: 100%; height: 100%; background: linear-gradient(135deg, <?= $cs['color'] ?>22, <?= $cs['color'] ?>44); display: flex; align-items: center; justify-content: center;">
                            <i class="fas fa-chart-line" style="font-size: 2.2rem; color: <?= $cs['color'] ?>; opacity: 0.5;"></i>
                        </div>
                        <div class="case-study-card__image-overlay">
                            <span class="case-study-card__badge"><?= $cs['industry'] ?></span>
                        </div>
                    </div>
                    <div class="case-study-card__body">
                        <h3 class="case-study-card__title"><?= $cs['title'] ?></h3>
                        <p class="case-study-card__challenge"><?= $cs['challenge'] ?></p>
                        <div class="case-study-card__results">
                            <?php foreach ($cs['results'] as $result): ?>
                                <div class="case-study-card__result">
                                    <span class="case-study-card__result-value"><?= $result['value'] ?></span>
                                    <span class="case-study-card__result-label"><?= $result['label'] ?></span>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

        <div class="text-center" style="margin-top: var(--space-12);">
            <a href="<?= url('case-studies') ?>" class="btn btn--primary btn--lg">
                View All Case Studies <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    </div>
</section>
