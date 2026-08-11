import React, { useEffect } from 'react';

const testimonials = [
  {
    name: "Jisoo Hong",
    role: "Sr. Product Manager",
    company: "Samsung",
    quote: "MetricVibes transformed our chaotic data into actionable insights. Their GA4 migration was flawless and on time.",
    initials: "JH"
  },
  {
    name: "Eugene Paik",
    role: "Director of Analytics",
    company: "Hyundai",
    quote: "The depth of their knowledge in server-side tracking is unmatched. We saw a 30% increase in data accuracy.",
    initials: "EP"
  },
  {
    name: "Alona Smahliuk",
    role: "CMO",
    company: "TechCorp",
    quote: "Our marketing ROI improved significantly after they implemented the new attribution models.",
    initials: "AS"
  }
];

export default function Testimonials() {
    useEffect(() => {
        if (window.Swiper) {
            new window.Swiper('.testimonials-slider', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
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
                    },
                    1024: {
                        slidesPerView: 3,
                    }
                }
            });
        }
    }, []);

    return (
        <section className="section" id="testimonials" style={{paddingBottom:"2rem"}}>
            <div className="container">
                <div className="section__header">
                    <span className="section__badge"><i className="fas fa-quote-left"></i> Testimonials</span>
                    <h2 className="section__title">What Our <span className="text-gradient">Clients Say</span></h2>
                    <p className="section__subtitle">
                        Don't just take our word for it — hear from the enterprises we've helped transform.
                    </p>
                </div>

                <div className="swiper testimonials-slider">
                    <div className="swiper-wrapper">
                        {testimonials.map((t, idx) => (
                            <div className="swiper-slide" key={idx}>
                                <div className="testimonial-card card--glass">
                                    <div className="testimonial-card__stars">
                                        {[...Array(5)].map((_, i) => (
                                            <i className="fas fa-star" key={i}></i>
                                        ))}
                                    </div>
                                    <p className="testimonial-card__quote">"{t.quote}"</p>
                                    <div className="testimonial-card__author">
                                        <div className="testimonial-card__avatar" style={{background:"var(--gradient-primary)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:"700",fontSize:"0.875rem",width:"48px",height:"48px",borderRadius:"50%"}}>
                                            {t.initials}
                                        </div>
                                        <div>
                                            <div className="testimonial-card__name">{t.name}</div>
                                            <div className="testimonial-card__role">
                                                {t.role} at {t.company}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation */}
                    <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"var(--space-6)",marginTop:"var(--space-10)"}}>
                        <button className="testimonials-prev btn btn--icon btn--outline" aria-label="Previous testimonial">
                            <i className="fas fa-arrow-left"></i>
                        </button>
                        <div className="testimonials-pagination"></div>
                        <button className="testimonials-next btn btn--icon btn--outline" aria-label="Next testimonial">
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
