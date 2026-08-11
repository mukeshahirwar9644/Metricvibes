<?php



$serviceName = ucwords(str_replace('-', ' ', $serviceSlug ?? 'Service'));
?>

<!-- Header Banner -->
<section style="position: relative; padding: 120px 0 80px; background: #0B1023; text-align: center; color: #fff;">
    <div class="container" style="position: relative; z-index: 2; max-width: 900px;">
        <h1 style="font-family: var(--font-heading); font-size: 3.5rem; font-weight: 700; margin-bottom: 24px; color: #fff;"><?= $serviceName ?></h1>
        <p style="font-size: 1.125rem; line-height: 1.7; color: rgba(255, 255, 255, 0.9);">
            Enterprise-grade implementation and consulting for <?= $serviceName ?>.
        </p>
    </div>
</section>

<section class="section">
    <div class="container text-center">
        <h2>Details coming soon!</h2>
        <p>We are currently updating our service detail pages. Please check back later or contact us directly.</p>
        <a href="<?= url('#contact') ?>" class="btn btn--primary" style="margin-top: 20px;">Contact Us</a>
    </div>
</section>
