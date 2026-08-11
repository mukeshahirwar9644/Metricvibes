
document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const counters = document.querySelectorAll('[data-counter]');
    if (counters.length === 0) return;
    function animateCounter(el) {
        const target = parseInt(el.dataset.counter, 10);
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        const duration = 2000;
        const startTime = performance.now();
        function easeOutQuart(t) {
            return 1 - Math.pow(1 - t, 4);
        }
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutQuart(progress);
            const currentValue = Math.floor(easedProgress * target);
            el.textContent = prefix + currentValue.toLocaleString() + suffix;
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.textContent = prefix + target.toLocaleString() + suffix;
            }
        }
        requestAnimationFrame(update);
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });
    counters.forEach(counter => observer.observe(counter));
});
