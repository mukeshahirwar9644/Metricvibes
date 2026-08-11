
document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const banner = document.querySelector('.cookie-consent');
    if (!banner) return;
    const STORAGE_KEY = 'metricvibes-cookies';
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
        setTimeout(() => {
            banner.classList.add('show');
        }, 2000); 
    }
    const acceptBtn = banner.querySelector('[data-cookie-accept]');
    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            localStorage.setItem(STORAGE_KEY, 'accepted');
            banner.classList.remove('show');
            loadAnalytics();
        });
    }
    const rejectBtn = banner.querySelector('[data-cookie-reject]');
    if (rejectBtn) {
        rejectBtn.addEventListener('click', () => {
            localStorage.setItem(STORAGE_KEY, 'rejected');
            banner.classList.remove('show');
        });
    }
    function loadAnalytics() {
        const gaMeasurementId = document.querySelector('meta[name="ga-measurement-id"]');
        if (gaMeasurementId && gaMeasurementId.content) {
            const script = document.createElement('script');
            script.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId.content}`;
            script.async = true;
            document.head.appendChild(script);
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', gaMeasurementId.content);
        }
    }
    if (consent === 'accepted') {
        loadAnalytics();
    }
});
