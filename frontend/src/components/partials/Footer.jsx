import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../config/api';

export default function Footer() {
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [newsletterStatus, setNewsletterStatus] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();
        if (!newsletterEmail || submitting) return;
        setSubmitting(true);
        try {
            const res = await fetch(`${API_BASE_URL}/api/newsletter`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: newsletterEmail })
            });
            const data = await res.json();
            if (res.ok && data.status === 'success') {
                setNewsletterStatus({ type: 'success', message: 'Subscribed successfully!' });
                setNewsletterEmail('');
            } else {
                setNewsletterStatus({ type: 'error', message: data.detail || 'Subscription failed' });
            }
        } catch (err) {
            setNewsletterStatus({ type: 'error', message: 'Unable to connect to server' });
        } finally {
            setSubmitting(false);
            setTimeout(() => setNewsletterStatus(null), 4000);
        }
    };

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

                        {/* Company Column */}
                        <div className="footer__column">
                            <h4 className="footer__heading">Company</h4>
                            <div className="footer__links">
                                <Link to="/about" className="footer__link">About Us</Link>
                                <Link to="/careers" className="footer__link">Careers</Link>
                                <Link to="/blog" className="footer__link">Blog</Link>
                                <Link to="/case-studies" className="footer__link">Case Studies</Link>
                                <Link to="/contact" className="footer__link">Contact</Link>
                            </div>
                        </div>

                        {/* Services Column */}
                        <div className="footer__column">
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

                        {/* Resources Column */}
                        <div className="footer__column">
                            <h4 className="footer__heading">Resources</h4>
                            <div className="footer__links">
                                <Link to="/blog" className="footer__link">Latest Articles</Link>
                                <Link to="/case-studies" className="footer__link">Success Stories</Link>
                                <Link to="/contact" className="footer__link">FAQ</Link>
                                <Link to="/privacy" className="footer__link">Privacy Policy</Link>
                                <Link to="/terms" className="footer__link">Terms of Service</Link>
                            </div>
                        </div>

                        {/* Newsletter Column */}
                        <div className="footer__column">
                            <h4 className="footer__heading">Stay Updated</h4>
                            <p className="footer__newsletter-text">
                                Get the latest insights on analytics, cloud, and AI delivered to your inbox.
                            </p>
                            <form className="footer__newsletter-form newsletter-form" onSubmit={handleNewsletterSubmit}>
                                <input 
                                    type="email" 
                                    className="footer__newsletter-input" 
                                    placeholder="your@email.com" 
                                    aria-label="Email address" 
                                    value={newsletterEmail}
                                    onChange={(e) => setNewsletterEmail(e.target.value)}
                                    required 
                                />
                                <button type="submit" className="btn btn--primary btn--sm" disabled={submitting}>
                                    <i className={submitting ? "fas fa-spinner fa-spin" : "fas fa-paper-plane"}></i>
                                </button>
                            </form>
                            {newsletterStatus && (
                                <div style={{
                                    marginTop: '8px',
                                    fontSize: '0.8rem',
                                    fontWeight: '600',
                                    color: newsletterStatus.type === 'success' ? '#4ade80' : '#f87171'
                                }}>
                                    {newsletterStatus.message}
                                </div>
                            )}
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
