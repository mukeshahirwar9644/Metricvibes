import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            {/* Footer */}
            <footer className="footer" id="footer">
                <div className="container">
                    <div className="footer__grid">
                        {/* Brand Column */}
                        <div className="footer__brand">
                            <Link to="/" className="navbar__logo" style={{"marginBottom":"var(--space-3)","display":"inline-flex"}}>
                                <img src="/assets/img/logo-new.webp" alt="MetricVibes Logo" className="navbar__logo-img" />
                            </Link>
                            <p className="footer__brand-desc">
                                Empowering enterprises with data-driven decisions through cutting-edge analytics, cloud solutions, and AI automation.
                            </p>
                            <div className="footer__social">
                                <a href="https://x.com/MetricVibes" className="footer__social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-x-twitter"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/metric-vibes/" className="footer__social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="mailto:sales@metricvibes.com" className="footer__social-link" aria-label="Email">
                                    <i className="fas fa-envelope"></i>
                                </a>
                                <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0HNRcFwK9OaEiO3Ygv6CrPg_H3gkYtXJekUGW7t9FB3TSZY0aAzWAs0aFVZjIVCpuBiCSb1boc" className="footer__social-link" aria-label="Book a Call" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-calendar-alt"></i>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="footer__heading">Company</h4>
                            <div className="footer__links">
                                <Link to="/about" className="footer__link">About Us</Link>
                                <Link to="/careers" className="footer__link">Careers</Link>
                                <Link to="/blog" className="footer__link">Blog</Link>
                                <Link to="/case-studies" className="footer__link">Case Studies</Link>
                                <Link to="/contact" className="footer__link">Contact</Link>
                            </div>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="footer__heading">Services</h4>
                            <div className="footer__links">
                                <Link to="/services/ga4-migration" className="footer__link">GA4 Migration</Link>
                                <Link to="/services/adobe-analytics" className="footer__link">Adobe Analytics</Link>
                                <Link to="/services/server-side-tracking" className="footer__link">Server-Side Tracking</Link>
                                <Link to="/services/data-engineering" className="footer__link">Data Engineering</Link>
                                <Link to="/services/claude-partner" className="footer__link">AI & LLM Automation</Link>
                                <Link to="/services/business-intelligence" className="footer__link">Business Intelligence</Link>
                            </div>
                        </div>

                        {/* Resources */}
                        <div>
                            <h4 className="footer__heading">Resources</h4>
                            <div className="footer__links">
                                <Link to="/blog" className="footer__link">Latest Articles</Link>
                                <Link to="/case-studies" className="footer__link">Success Stories</Link>
                                <Link to="/#faq" className="footer__link">FAQ</Link>
                                <Link to="/privacy" className="footer__link">Privacy Policy</Link>
                                <Link to="/terms" className="footer__link">Terms of Service</Link>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h4 className="footer__heading">Stay Updated</h4>
                            <p className="footer__newsletter-text">
                                Get the latest insights on analytics, cloud, and AI delivered to your inbox.
                            </p>
                            <form className="footer__newsletter-form newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to MetricVibes newsletter!'); }}>
                                <input type="email" className="footer__newsletter-input" placeholder="your@email.com" aria-label="Email address" required />
                                <button type="submit" className="btn btn--primary btn--sm">
                                    <i className="fas fa-paper-plane"></i>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="footer__bottom">
                        <p className="footer__copyright">
                            All Rights Reserved © Metric Vibes
                        </p>
                        <div className="footer__bottom-links">
                            <Link to="/privacy" className="footer__bottom-link">Privacy Policy</Link>
                            <Link to="/terms" className="footer__bottom-link">Terms of Service</Link>
                            <Link to="/data-tracking-security" className="footer__bottom-link">Data Security</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
