import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
    const swiperRef = useRef(null);

    useEffect(() => {
        const initSwiper = () => {
            if (window.Swiper) {
                swiperRef.current = new window.Swiper('.hero-testimonial-slider', {
                    loop: true,
                    autoplay: {
                        delay: 4000,
                        disableOnInteraction: false,
                    },
                    speed: 800,
                    spaceBetween: 20,
                    grabCursor: true
                });
            } else {
                setTimeout(initSwiper, 100);
            }
        };

        initSwiper();

        return () => {
            if (swiperRef.current && swiperRef.current.destroy) {
                swiperRef.current.destroy(true, true);
            }
        };
    }, []);

    return (
        <>
            

{/*  Hero Section  */}
<section className="hero" id="hero">
    {/*  Full-width Background  */}
    <div className="hero__bg">
        <img src="/assets/img/hero/hero-workspace-bg.png" alt="Modern analytics workspace" className="hero__bg-image" loading="eager" />
        <div className="hero__bg-overlay"></div>
    </div>

    <div className="container hero__container">
        {/*  Left: Content  */}
        <div className="hero__content">
            <div className="hero__badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="sparkles-icon" style={{"marginRight":"4px"}}>
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
                    <path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>
                </svg>
                AI-Powered Analytics Consulting
            </div>

            <h1 className="hero__title">
                Your Analytics, Cloud & <span className="hero__title-accent">AI Implementation</span> Partner
            </h1>

            <p className="hero__subtitle">
                We eliminate data silos, optimize runaway cloud costs, and automate manual workflows for enterprises. From recovering lost marketing data to unlocking predictive AI insights.
            </p>

            <div className="hero__buttons">
                <Link to="/contact" className="btn--brand-pill" style={{"opacity":"1 !important","visibility":"visible !important"}}>
                    Book a Demo <i className="fa-solid fa-arrow-right" style={{"marginLeft":"8px"}}></i>
                </Link>
                <a href="/case-studies" className="btn--white-pill" style={{"opacity":"1 !important","visibility":"visible !important"}}>
                    <div className="btn-icon-circle">
                        <i className="fa-solid fa-play" style={{"marginLeft":"2px"}}></i>
                    </div>
                    See Our Work
                </a>
            </div>
        </div>

        {/*  Right: Floating Testimonial Slider  */}
        <div className="hero__visual">
            <div className="swiper hero-testimonial-slider">
                <div className="swiper-wrapper">
                    {/*  Slide 1  */}
                    <div className="swiper-slide">
                        <div className="hero__testimonial-wrapper">
                            <div className="hero__testimonial-image">
                                <img src="/assets/img/team/jisoo.jpg" alt="Jisoo Hong" />
                            </div>
                            <div className="hero__testimonial-content">
                                <div className="hero__testimonial-header">
                                    <h4 className="hero__testimonial-name">Jisoo Hong</h4>
                                    <p className="hero__testimonial-role">Product Manager - VistaJet</p>
                                </div>
                                <p className="hero__testimonial-text">
                                    Their implementation on our website, android, and iOS apps empowered me to generate powerful reports for stakeholders, driving crucial decisions in our flight route planning and app/web enhancements for lead conversion. Moreover, their insights into lead attribution and ROI optimization significantly enhanced our marketing spend efficiency.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*  Slide 2  */}
                    <div className="swiper-slide">
                        <div className="hero__testimonial-wrapper">
                            <div className="hero__testimonial-image">
                                <img src="/assets/img/team/Alona Smahliuk.jpg" alt="Eugene Paik" />
                            </div>
                            <div className="hero__testimonial-content">
                                <div className="hero__testimonial-header">
                                    <h4 className="hero__testimonial-name">Eugene Paik</h4>
                                    <p className="hero__testimonial-role">CEO - Consulting Firm</p>
                                </div>
                                <p className="hero__testimonial-text">
                                    I had issues integrating kartra and mixpanel, and Metric Vibes did a FANTASTIC JOB. I would highly recommend 10/10. [Their] delivery was very fast and accurate. What's more, they did a full documentation of the detailed steps and also the code. I will definitely revisit and also introduce my friends that need data issues solved.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*  Slide 3  */}
                    <div className="swiper-slide">
                        <div className="hero__testimonial-wrapper">
                            <div className="hero__testimonial-image">
                                <img src="/assets/img/team/Eugene Paik.jpg" alt="Alona Smahliuk" />
                            </div>
                            <div className="hero__testimonial-content">
                                <div className="hero__testimonial-header">
                                    <h4 className="hero__testimonial-name">Alona Smahliuk</h4>
                                    <p className="hero__testimonial-role">Technology Coordinator - Ticket Network</p>
                                </div>
                                <p className="hero__testimonial-text">
                                    Metric Vibes was extremely helpful in consulting, creating a documented plan, and executing our GA4 migration for 6 sites. They demonstrated strong expertise in analytics and were able to provide insights to our team. We would work with them again
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/*  Bottom Stats Bar  */}
    <div className="hero__stats-bar">
        <div className="container">
            <div className="hero__stats">
                <div className="hero__stat">
                    <span className="hero__stat-value">50+</span>
                    <span className="hero__stat-label">Projects Delivered</span>
                </div>
                <div className="hero__stat-divider"></div>
                <div className="hero__stat">
                    <span className="hero__stat-value">5+</span>
                    <span className="hero__stat-label">Years of Excellence</span>
                </div>
                <div className="hero__stat-divider"></div>
                <div className="hero__stat">
                    <span className="hero__stat-value">5+</span>
                    <span className="hero__stat-label">Countries Served</span>
                </div>
                <div className="hero__stat-divider"></div>
                <div className="hero__stat">
                    <span className="hero__stat-value">98%</span>
                    <span className="hero__stat-label">Client Satisfaction</span>
                </div>
            </div>
        </div>
    </div>


</section>

        </>
    );
}
