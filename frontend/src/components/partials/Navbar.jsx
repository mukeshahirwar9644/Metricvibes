import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);
    const location = useLocation();

    // Initialize Theme - Light theme as default for all visitors
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }, []);

    // Manage Announcement Bar Body Class
    useEffect(() => {
        if (isAnnouncementVisible) {
            document.body.classList.add('has-announcement');
        } else {
            document.body.classList.remove('has-announcement');
        }
        return () => {
            document.body.classList.remove('has-announcement');
        };
    }, [isAnnouncementVisible]);

    const toggleTheme = () => {
        const newTheme = !isDarkMode ? 'dark' : 'light';
        setIsDarkMode(!isDarkMode);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const toggleMobileMenu = () => {
        setIsMobileOpen(!isMobileOpen);
        if (isMegaMenuOpen) setIsMegaMenuOpen(false);
    };

    const toggleMegaMenu = (e) => {
        e.preventDefault();
        setIsMegaMenuOpen(!isMegaMenuOpen);
    };
    
    const closeMenus = () => {
        setIsMobileOpen(false);
        setIsMegaMenuOpen(false);
    };

    // Close menus on route change
    useEffect(() => {
        closeMenus();
    }, [location.pathname]);

    return (
        <>
            {/* Announcement Bar */}
            {isAnnouncementVisible && (
            <div className="announcement-bar" id="announcementBar">
                <div className="container announcement-bar__inner">
                    <div className="announcement-bar__content">
                        <span className="announcement-bar__badge">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sparkles-icon" style={{"marginRight":"4px"}}>
                                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
                                <path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>
                            </svg>
                            NEW
                        </span>
                        <span className="announcement-bar__text">New Report: <strong>MetricVibes Category Insights</strong> — Cross Channel — Analytics market across platforms; brand, price-pack. Uncover predictive trends, actionable data strategies, and drive growth today.</span>
                    </div>
                    <div className="announcement-bar__actions">
                        <Link to="/about" className="announcement-bar__btn">Read the report <i className="fas fa-arrow-right"></i></Link>
                        <button className="announcement-bar__close" onClick={() => setIsAnnouncementVisible(false)} aria-label="Close announcement">
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            </div>
            )}

            {/* Navbar */}
            <nav className={`navbar ${isMobileOpen ? 'mobile-open' : ''}`} id="navbar" role="navigation" aria-label="Main navigation">
                <div className="container navbar__container">
                    {/* Logo */}
                    <Link to="/" className="navbar__logo" aria-label="Home" onClick={closeMenus}>
                        <img src="/assets/img/logo-new.webp" alt="MetricVibes Logo" className="navbar__logo-img" />
                    </Link>

                    {/* Navigation Links */}
                    <div className={`navbar__nav ${isMobileOpen ? 'active' : ''}`} id="navMenu" role="menubar">
                        <Link to="/" className={`navbar__link ${location.pathname === '/' ? 'active' : ''}`} role="menuitem" onClick={closeMenus}>Home</Link>
                        <Link to="/about" className={`navbar__link ${location.pathname === '/about' ? 'active' : ''}`} role="menuitem" onClick={closeMenus}>About</Link>
                        
                        <div className="navbar__item dropdown-wrapper" onMouseEnter={() => window.innerWidth > 991 && setIsMegaMenuOpen(true)} onMouseLeave={() => window.innerWidth > 991 && setIsMegaMenuOpen(false)}>
                            <Link to="/services" className={`navbar__link navbar__link--has-dropdown ${(isMegaMenuOpen || location.pathname.startsWith('/services')) ? 'active' : ''}`} role="menuitem" onClick={closeMenus}>
                                Services
                            </Link>
                            
                            <div className={`dropdown-menu ${isMegaMenuOpen ? 'open' : ''}`}>
                                <Link to="/services/claude-partner" className={`dropdown-item ${location.pathname === '/services/claude-partner' ? 'active' : ''}`} onClick={closeMenus}>Claude Partner</Link>
                                
                                <div className={`dropdown-item has-submenu ${['/services/server-side-tracking', '/data-tracking-security', '/services/business-intelligence'].includes(location.pathname) ? 'active' : ''}`}>
                                    <span>Analytics Services</span> <i className="fas fa-chevron-right submenu-icon"></i>
                                    <div className="submenu">
                                        <Link to="/services/server-side-tracking" className={`dropdown-item ${location.pathname === '/services/server-side-tracking' ? 'active' : ''}`} onClick={closeMenus}>Server Side Tracking Guide & Best Practices | MetricVibes</Link>
                                        <Link to="/data-tracking-security" className={`dropdown-item ${location.pathname === '/data-tracking-security' ? 'active' : ''}`} onClick={closeMenus}>Analytics Tracking and Accuracy</Link>
                                        <Link to="/services/business-intelligence" className={`dropdown-item ${location.pathname === '/services/business-intelligence' ? 'active' : ''}`} onClick={closeMenus}>Business Intelligence</Link>
                                    </div>
                                </div>

                                <div className={`dropdown-item has-submenu ${location.pathname.startsWith('/partnerships') ? 'active' : ''}`}>
                                    <span>Partnerships</span> <i className="fas fa-chevron-right submenu-icon"></i>
                                    <div className="submenu">
                                        <Link to="/partnerships/vwo" className={`dropdown-item ${location.pathname === '/partnerships/vwo' ? 'active' : ''}`} onClick={closeMenus}>VWO – Partnership</Link>
                                        <Link to="/partnerships/mixpanel" className={`dropdown-item ${location.pathname === '/partnerships/mixpanel' ? 'active' : ''}`} onClick={closeMenus}>Mixpanel – Partnership</Link>
                                        <Link to="/partnerships/zoho" className={`dropdown-item ${location.pathname === '/partnerships/zoho' ? 'active' : ''}`} onClick={closeMenus}>Zoho Analytics – Partners</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link to="/case-studies" className={`navbar__link ${location.pathname === '/case-studies' ? 'active' : ''}`} role="menuitem" onClick={closeMenus}>Case Studies</Link>
                        <Link to="/blog" className={`navbar__link ${location.pathname.startsWith('/blog') ? 'active' : ''}`} role="menuitem" onClick={closeMenus}>Blogs</Link>
                        <Link to="/careers" className={`navbar__link ${location.pathname === '/careers' ? 'active' : ''}`} role="menuitem" onClick={closeMenus}>Career</Link>
                        <Link to="/contact" className={`navbar__link ${location.pathname === '/contact' ? 'active' : ''}`} role="menuitem" onClick={closeMenus}>Contact Us</Link>
                    </div>

                    {/* Actions */}
                    <div className="navbar__actions">
                        {/* Theme Toggle */}
                        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode" title="Toggle theme">
                            {isDarkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
                        </button>

                        {/* CTA Button */}
                        <Link to="/contact" className="navbar__cta d-none d-lg-inline-flex">
                            Book a Demo &nbsp;<i className="fas fa-arrow-right"></i>
                        </Link>

                        {/* Mobile Toggle */}
                        <button className={`navbar__mobile-toggle ${isMobileOpen ? 'active' : ''}`} onClick={toggleMobileMenu} aria-label="Toggle menu" aria-expanded={isMobileOpen}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}
