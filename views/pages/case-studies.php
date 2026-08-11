<?php



?>

<!-- Header Banner -->
<section style="position: relative; padding: 100px 0 20px; background: var(--gradient-hero); text-align: center;">
    <div class="container" style="position: relative; z-index: 2; max-width: 900px;">
        <h1 style="font-family: var(--font-heading); font-size: 3.5rem; font-weight: 700; margin-bottom: 24px; color: #ffffff;">Case Studies</h1>
        <p style="font-size: 1.125rem; line-height: 1.7; color: rgba(255, 255, 255, 0.9);">
            See how we've helped enterprises transform their data infrastructure and drive measurable business outcomes.
        </p>
    </div>
</section>

<?php 
$hideCaseStudiesHeader = true;
include VIEWS_PATH . '/sections/case-studies.php'; 
?>
