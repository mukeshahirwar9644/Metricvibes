<?php  ?>

<section class="section" id="faq" style="background-color: #ffffff;">
    <div class="container">
        <div class="section__header" style="margin-bottom: 60px;">
            <h2 class="section__title" style="font-size: 3.2rem; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 15px;">
                Got <span class="text-gradient">questions?</span>
            </h2>
            <p class="section__subtitle" style="font-size: 1.15rem; max-width: 500px; margin: 0 auto; color: var(--text-secondary); line-height: 1.6;">
                Everything you need to know about working with MetricVibes.
            </p>
        </div>

        <div class="faq-container-modern" style="max-width: 800px; margin: 0 auto;">
            <?php
            $faqs = [
                [
                    'q' => 'What industries do you specialize in?',
                    'a' => 'We serve a wide range of industries including e-commerce, fintech, healthcare, SaaS, media, and retail. Our team has deep expertise in regulated industries where data compliance (GDPR, HIPAA, CCPA) is critical.',
                ],
                [
                    'q' => 'How long does a typical GA4 migration take?',
                    'a' => 'A standard GA4 migration typically takes 4-8 weeks depending on the complexity of your existing setup. Enterprise migrations with multiple properties, custom dimensions, and server-side tracking can take 8-16 weeks. We provide a detailed timeline during our initial assessment.',
                ],
                [
                    'q' => 'Do you offer ongoing support after implementation?',
                    'a' => 'Yes! We offer flexible support plans including 24/7 monitoring, quarterly business reviews, data quality audits, and on-demand consulting. Every client gets a dedicated account manager to ensure continuity.',
                ],
                [
                    'q' => 'What cloud platforms do you work with?',
                    'a' => 'We are multi-cloud experts with certifications across Google Cloud Platform (GCP), Amazon Web Services (AWS), and Microsoft Azure. We help you choose the right platform based on your specific requirements and existing infrastructure.',
                ],
                [
                    'q' => 'How do you ensure data privacy and security?',
                    'a' => 'Security is at the core of everything we do. We follow SOC 2 Type II compliant processes, implement encryption at rest and in transit, conduct regular security audits, and ensure compliance with GDPR, HIPAA, and CCPA. All team members undergo annual security training.',
                ],
                [
                    'q' => 'Can you integrate AI/ML into our existing analytics stack?',
                    'a' => 'Absolutely. We specialize in adding AI layers to existing data infrastructure — from predictive analytics and anomaly detection to custom LLM solutions. We can integrate with your current tools without requiring a complete overhaul.',
                ],
                [
                    'q' => 'What is your pricing model?',
                    'a' => 'We offer flexible pricing models including fixed-price projects, time & materials, and retainer agreements. Project scopes typically range from $10,000 for focused implementations to $100,000+ for enterprise-wide transformations. Contact us for a custom quote.',
                ],
                [
                    'q' => 'How do we get started?',
                    'a' => 'Simply book a free 30-minute strategy call through our contact form or Calendly link. We\'ll discuss your current setup, challenges, and goals. Within 48 hours, you\'ll receive a detailed proposal with scope, timeline, and investment required.',
                ],
            ];

            foreach ($faqs as $index => $faq): ?>
                <div class="faq-item-modern" data-aos="fade-up" data-aos-delay="<?= $index * 50 ?>">
                    <div class="faq-header-modern">
                        <?= $faq['q'] ?>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div class="faq-body-modern" style="display: none;">
                        <?= $faq['a'] ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

        <div class="text-center" style="margin-top: var(--space-6);">
            <p style="color: var(--text-secondary); margin-bottom: var(--space-4);">Still have questions?</p>
            <a href="#contact" class="btn btn--primary btn--lg">
                <i class="fas fa-envelope"></i> Contact Us
            </a>
        </div>
    </div>
</section>

<!-- FAQ Accordion Script -->
<script>
document.addEventListener('DOMContentLoaded', () => {
    const faqHeaders = document.querySelectorAll('.faq-header-modern');
    faqHeaders.forEach(header => {
        // Prevent multiple listeners if script is loaded multiple times
        if (header.dataset.faqInitialized) return;
        header.dataset.faqInitialized = 'true';
        
        header.addEventListener('click', () => {
            const body = header.nextElementSibling;
            const icon = header.querySelector('i');
            
            if (!body) return;
            
            if (body.style.display === 'none' || body.style.display === '') {
                body.style.display = 'block';
                header.classList.add('active');
                if(icon) icon.className = 'fas fa-caret-up';
            } else {
                body.style.display = 'none';
                header.classList.remove('active');
                if(icon) icon.className = 'fas fa-caret-down';
            }
        });
    });
});
</script>
