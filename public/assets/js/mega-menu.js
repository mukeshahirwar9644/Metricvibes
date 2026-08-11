
document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const servicesLink = document.querySelector('.navbar__link--has-dropdown');
    const megaMenu = document.querySelector('.mega-menu');
    const megaBackdrop = document.querySelector('.mega-menu-backdrop');
    const navbar = document.querySelector('.navbar');
    let isDesktop = window.innerWidth >= 992;
    let closeTimeout;
    if (!servicesLink || !megaMenu) return;
    function openMenu() {
        clearTimeout(closeTimeout);
        megaMenu.classList.add('open');
        servicesLink.classList.add('open');
        if (megaBackdrop) megaBackdrop.classList.add('open');
        servicesLink.setAttribute('aria-expanded', 'true');
    }
    function closeMenu() {
        megaMenu.classList.remove('open');
        servicesLink.classList.remove('open');
        if (megaBackdrop) megaBackdrop.classList.remove('open');
        servicesLink.setAttribute('aria-expanded', 'false');
    }
    function delayedClose() {
        closeTimeout = setTimeout(closeMenu, 200);
    }
    function setupDesktop() {
        servicesLink.addEventListener('mouseenter', openMenu);
        servicesLink.addEventListener('mouseleave', delayedClose);
        megaMenu.addEventListener('mouseenter', () => clearTimeout(closeTimeout));
        megaMenu.addEventListener('mouseleave', closeMenu);
    }
    function setupMobile() {
        servicesLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (megaMenu.classList.contains('open')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }
    document.addEventListener('click', (e) => {
        if (!megaMenu.contains(e.target) && !servicesLink.contains(e.target)) {
            closeMenu();
        }
    });
    if (megaBackdrop) {
        megaBackdrop.addEventListener('click', closeMenu);
    }
    servicesLink.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (megaMenu.classList.contains('open')) {
                closeMenu();
            } else {
                openMenu();
                const firstLink = megaMenu.querySelector('.mega-menu__item');
                if (firstLink) firstLink.focus();
            }
        }
        if (e.key === 'Escape') {
            closeMenu();
            servicesLink.focus();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && megaMenu.classList.contains('open')) {
            closeMenu();
            servicesLink.focus();
        }
    });
    megaMenu.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            const focusableElements = megaMenu.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
            const first = focusableElements[0];
            const last = focusableElements[focusableElements.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                closeMenu();
                servicesLink.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                closeMenu();
                const nextLink = servicesLink.parentElement?.nextElementSibling?.querySelector('a');
                if (nextLink) nextLink.focus();
            }
        }
    });
    function handleResize() {
        const nowDesktop = window.innerWidth >= 992;
        if (nowDesktop !== isDesktop) {
            isDesktop = nowDesktop;
            closeMenu();
        }
    }
    window.addEventListener('resize', handleResize, { passive: true });
    if (isDesktop) {
        setupDesktop();
    } else {
        setupMobile();
    }
    servicesLink.addEventListener('click', (e) => {
        if (isDesktop) {
            e.preventDefault();
            if (megaMenu.classList.contains('open')) {
                closeMenu();
            } else {
                openMenu();
            }
        }
    });
});
