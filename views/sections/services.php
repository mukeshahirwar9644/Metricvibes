<?php  ?>

<section class="section relative overflow-hidden" id="services">
    <!-- Decorative Glow -->
    <div class="services-glow" style="position: absolute; top: -100px; left: 50%; transform: translateX(-50%); width: 800px; height: 400px; background: radial-gradient(ellipse, rgba(120, 81, 169, 0.15) 0%, transparent 60%); pointer-events: none; z-index: 0;"></div>

    <div class="container relative z-1">
        <div class="section__header">
            <span class="section__badge"><i class="fas fa-cubes"></i> What We Offer</span>
            <h2 class="section__title">What we <span class="text-gradient">deliver</span></h2>
            <p class="section__subtitle">
                Measurement your business (and AI) can rely on. The stack, run with discipline.
            </p>
        </div>

        <!-- Filter Tabs -->
        <div class="services__filter-wrapper" style="display: flex; justify-content: center; margin-bottom: 3rem;">
            <div class="services__filter">
                <button class="services__filter-btn active" data-filter="all">All Services</button>
                <button class="services__filter-btn" data-filter="martech">MarTech Services</button>
                <button class="services__filter-btn" data-filter="infra">Infrastructure</button>
                <button class="services__filter-btn" data-filter="products">In-House Products</button>
            </div>
        </div>

        <!-- Services Grid -->
        <div class="services__grid">
            <?php
            $services = [
                
                [
                    'icon' => 'fas fa-chart-line',
                    'title' => 'Analytics engineering',
                    'desc' => 'Analytics platforms (Analytics, Mixpanel, Braze, CleverTap, etc.) along with BigQuery implemented properly: clean events, server-side tagging and one source of truth.',
                    'category' => 'martech',
                    'link' => '#',
                ],
                [
                    'icon' => 'fas fa-project-diagram',
                    'title' => 'Attribution and reporting',
                    'desc' => 'Dashboards that reconcile Google, Meta and CRM numbers into a single decision-ready view, with the logic documented.',
                    'category' => 'martech',
                    'link' => '#',
                ],
                [
                    'icon' => 'fas fa-vial',
                    'title' => 'CRO and experimentation',
                    'desc' => 'Structured testing on funnels and landing pages. Wins are measured in revenue, not just conversion rate.',
                    'category' => 'martech',
                    'link' => '#',
                ],
                [
                    'icon' => 'fas fa-robot',
                    'title' => 'Marketing automation',
                    'desc' => 'Journeys, audiences and product feeds wired across the stack, so campaigns run on data instead of exports.',
                    'category' => 'martech',
                    'link' => '#',
                ],

                
                [
                    'icon' => 'fas fa-cloud',
                    'title' => 'Google Cloud & Workspace',
                    'desc' => 'Migrations, BigQuery data platforms and cost governance. Licenses, workloads and bills managed as one estate.',
                    'category' => 'infra',
                    'link' => '#',
                ],
                [
                    'icon' => 'fas fa-sync',
                    'title' => 'Zoho preferred partner',
                    'desc' => 'Zoho Analytics, Desk, HRMS and Payroll implemented end to end, replacing scattered tools with one connected suite.',
                    'category' => 'infra',
                    'link' => '#',
                ],
                [
                    'icon' => 'fas fa-brain',
                    'title' => 'Claude and agentic AI',
                    'desc' => 'AI agents built with Anthropic: natural-language access to your data, with full business context, deployed with guardrails.',
                    'category' => 'infra',
                    'link' => '#',
                ],
                [
                    'icon' => 'fas fa-shield-alt',
                    'title' => 'DPDP readiness',
                    'desc' => 'Consent, retention and audit trails put in place ahead of the May 2027 deadline, not after it.',
                    'category' => 'infra',
                    'link' => '#',
                ],

                
                [
                    'icon' => 'fas fa-database',
                    'title' => 'QuerySafe Intelligence',
                    'desc' => 'Governed text-to-SQL on BigQuery. Ask your BigQuery the hardest business questions in natural language, with full context in ~30s.',
                    'category' => 'products',
                    'link' => '#',
                ],
                [
                    'icon' => 'fas fa-route',
                    'title' => 'FlowTrace',
                    'desc' => 'End-to-end shop-floor traceability, every unit audited. Automated serial numbers, component barcode validation on one platform.',
                    'category' => 'products',
                    'link' => '#',
                ],
                [
                    'icon' => 'fas fa-headset',
                    'title' => 'Servix (ITSM)',
                    'desc' => 'SLA-driven ITSM and full asset lifecycle, audit-ready. Tickets auto-assigned with SLA timers and skill-based routing.',
                    'category' => 'products',
                    'link' => '#',
                ],
                [
                    'icon' => 'fas fa-users',
                    'title' => 'HRMS',
                    'desc' => 'People and payroll, self-serve with role-based access. Complete employee lifecycle in one place.',
                    'category' => 'products',
                    'link' => '#',
                ],
                [
                    'icon' => 'fas fa-boxes',
                    'title' => 'Inventory Management',
                    'desc' => 'Real-time stock visibility and control, barcode-driven. Real-time stock levels across warehouses and locations on a single dashboard.',
                    'category' => 'products',
                    'link' => '#',
                ],
            ];

            
            $gradients = [
                ['bg' => 'linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%)', 'shadow' => 'rgba(79, 70, 229, 0.25)'],
                ['bg' => 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)', 'shadow' => 'rgba(249, 115, 22, 0.25)'],
                ['bg' => 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)', 'shadow' => 'rgba(14, 165, 233, 0.25)'],
                ['bg' => 'linear-gradient(135deg, #10b981 0%, #059669 100%)', 'shadow' => 'rgba(16, 185, 129, 0.25)'],
                ['bg' => 'linear-gradient(135deg, #f43f5e 0%, #f97316 100%)', 'shadow' => 'rgba(244, 63, 94, 0.25)'],
                ['bg' => 'linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)', 'shadow' => 'rgba(139, 92, 246, 0.25)']
            ];
            
            foreach ($services as $index => $service): 
                $theme = $gradients[$index % count($gradients)];
            ?>
                <div class="card card--gradient-border" data-category="<?= $service['category'] ?>">
                    <div class="card__icon" style="background: <?= $theme['bg'] ?>; border: none; box-shadow: 0 10px 20px <?= $theme['shadow'] ?>;">
                        <i class="<?= $service['icon'] ?>" style="color: #fff;"></i>
                    </div>
                    <h3 class="card__title"><?= $service['title'] ?></h3>
                    <p class="card__text"><?= $service['desc'] ?></p>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
