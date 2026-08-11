
document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 80,
            delay: 0,
            disable: function() {
                return window.innerWidth < 768 && false; 
            }
        });
    }
    if (typeof gsap !== 'undefined') {
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.utils.toArray('.section__header').forEach(header => {
                gsap.from(header.children, {
                    scrollTrigger: {
                        trigger: header,
                        start: 'top 90%',
                        toggleActions: 'play none none none'
                    },
                    opacity: 0,
                    y: 20,
                    stagger: 0.1,
                    duration: 0.5,
                    ease: 'power3.out'
                });
            });
            gsap.utils.toArray('.case-study-card').forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 90%'
                    },
                    opacity: 0,
                    y: 30,
                    duration: 0.5,
                    delay: i * 0.05,
                    ease: 'power2.out'
                });
            });
            gsap.utils.toArray('.counter').forEach(counter => {
                gsap.from(counter, {
                    scrollTrigger: {
                        trigger: counter,
                        start: 'top 95%'
                    },
                    opacity: 0,
                    y: 20,
                    scale: 0.95,
                    duration: 0.4,
                    ease: 'back.out(1.2)'
                });
            });
            gsap.from('.founder__image-wrapper', {
                scrollTrigger: {
                    trigger: '.founder__grid',
                    start: 'top 90%'
                },
                opacity: 0,
                x: -30,
                duration: 0.6,
                ease: 'power3.out'
            });
            gsap.from('.founder__content > *', {
                scrollTrigger: {
                    trigger: '.founder__grid',
                    start: 'top 90%'
                },
                opacity: 0,
                y: 20,
                stagger: 0.05,
                duration: 0.5,
                ease: 'power2.out'
            });
            gsap.from('.contact__form-wrapper', {
                scrollTrigger: {
                    trigger: '.contact__grid',
                    start: 'top 90%'
                },
                opacity: 0,
                x: -20,
                duration: 0.6,
                ease: 'power3.out'
            });
            gsap.from('.contact__info-card', {
                scrollTrigger: {
                    trigger: '.contact__grid',
                    start: 'top 90%'
                },
                opacity: 0,
                x: 20,
                stagger: 0.05,
                duration: 0.5,
                ease: 'power2.out'
            });
            gsap.from('.footer__grid > div', {
                scrollTrigger: {
                    trigger: '.footer',
                    start: 'top 95%'
                },
                opacity: 0,
                y: 20,
                stagger: 0.05,
                duration: 0.4,
                ease: 'power2.out'
            });
            gsap.utils.toArray('.hero__orb').forEach(orb => {
                gsap.to(orb, {
                    scrollTrigger: {
                        trigger: '.hero',
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 1
                    },
                    y: -100,
                    ease: 'none'
                });
            });
        }
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            gsap.to('.hero', {
                backgroundPosition: '100% 50%',
                duration: 20,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        }
    }
});
window.addEventListener('load', () => {
    if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
    }
});
