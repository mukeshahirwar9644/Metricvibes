<?php






include VIEWS_PATH . '/partials/header.php';

    


include VIEWS_PATH . '/partials/cursor-glow.php';


include VIEWS_PATH . '/partials/navbar.php';


if (isset($pageContent) && file_exists($pageContent)) {
    include $pageContent;
}


include VIEWS_PATH . '/partials/footer.php';


include VIEWS_PATH . '/partials/schema-markup.php';


include VIEWS_PATH . '/partials/whatsapp-float.php';


include VIEWS_PATH . '/partials/back-to-top.php';


include VIEWS_PATH . '/partials/cookie-consent.php';
?>

    <!-- JavaScript Libraries -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

    <!-- Custom JavaScript -->
    <script src="<?= asset('js/dark-mode.js') ?>?v=1.0.8"></script>
    <script src="<?= asset('js/app.js') ?>?v=1.0.9"></script>
    <script src="<?= asset('js/animations.js') ?>?v=1.0.11"></script>
    <script src="<?= asset('js/mega-menu.js') ?>?v=1.0.8"></script>
    <script src="<?= asset('js/cursor-glow.js') ?>?v=1.0.8"></script>
    <script src="<?= asset('js/counters.js') ?>?v=1.0.8"></script>
    <script src="<?= asset('js/cookie-consent.js') ?>?v=1.0.8"></script>
    <script src="<?= asset('js/contact.js') ?>?v=1.0.8"></script>
</body>
</html>
