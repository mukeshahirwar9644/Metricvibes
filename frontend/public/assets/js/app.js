
document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    const SCROLL_THRESHOLD = 50;
    function handleNavbarScroll() {
        const currentScroll = window.scrollY;
        if (currentScroll > SCROLL_THRESHOLD) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    }
    if (navbar) {
        window.addEventListener('scroll', handleNavbarScroll, { passive: true });
        handleNavbarScroll(); 
    }
    const mobileToggle = document.querySelector('.navbar__mobile-toggle');
    const navMenu = document.querySelector('.navbar__nav');
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('open');
            document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
        });
        navMenu.querySelectorAll('.navbar__link:not(.navbar__link--has-dropdown)').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                const navHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - navHeight - 20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }, { passive: true });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    const lazyImages = document.querySelectorAll('img[data-src]');
    if (lazyImages.length > 0) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    if (img.dataset.srcset) {
                        img.srcset = img.dataset.srcset;
                    }
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        }, { rootMargin: '100px 0px' });
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    const faqItems = document.querySelectorAll('.faq__item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq__question');
        const answer = item.querySelector('.faq__answer');
        if (question && answer) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq__answer');
                    if (otherAnswer) otherAnswer.style.maxHeight = null;
                });
                if (!isActive) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });
        }
    });
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const btn = this.querySelector('button');
            if (emailInput && emailInput.value) {
                btn.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
                btn.disabled = true;
                emailInput.disabled = true;
                emailInput.value = '';
                setTimeout(() => {
                    btn.innerHTML = 'Subscribe';
                    btn.disabled = false;
                    emailInput.disabled = false;
                }, 3000);
            }
        });
    });
    function setActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.navbar__link');
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', setActiveNav, { passive: true });
    if (typeof Swiper !== 'undefined') {
        new Swiper('.hero-testimonial-slider', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
        });
        new Swiper('.testimonials-slider', {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            pagination: {
                el: '.testimonials-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.testimonials-next',
                prevEl: '.testimonials-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                },
            },
        });
    }
    const filterBtns = document.querySelectorAll('.services__filter-btn');
    const serviceCards = document.querySelectorAll('.services__grid .card');
    function applyFilter(filter, animate = true) {
        serviceCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = '';
                if (animate) {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        });
                    });
                } else {
                    card.style.transition = 'none';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }
            } else {
                card.style.display = 'none';
                card.style.opacity = '0';
            }
        });
    }
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyFilter(btn.dataset.filter, true);
        });
    });
    const initialActiveBtn = document.querySelector('.services__filter-btn.active');
    if (initialActiveBtn) {
        applyFilter(initialActiveBtn.dataset.filter, false);
    }
});


    // Announcement bar logic
    const announcementClose = document.getElementById('announcementClose');
    const announcementBar = document.getElementById('announcementBar');
    if (announcementClose && announcementBar) {
        announcementClose.addEventListener('click', () => {
            announcementBar.style.display = 'none';
            document.body.classList.remove('has-announcement');
        });
    }
