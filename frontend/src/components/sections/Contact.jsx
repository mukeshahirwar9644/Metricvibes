import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../config/api';

const COUNTRIES = [
    { flag: '🇮🇳', name: 'India', native: 'भारत', dial: '+91', code: 'IN' },
    { flag: '🇺🇸', name: 'United States', native: '', dial: '+1', code: 'US' },
    { flag: '🇬🇧', name: 'United Kingdom', native: '', dial: '+44', code: 'GB' },
    { flag: '🇦🇪', name: 'United Arab Emirates', native: 'الإمارات', dial: '+971', code: 'AE' },
    { flag: '🇸🇦', name: 'Saudi Arabia', native: 'المملكة العربية السعودية', dial: '+966', code: 'SA' },
    { flag: '🇨🇦', name: 'Canada', native: '', dial: '+1', code: 'CA' },
    { flag: '🇦🇺', name: 'Australia', native: '', dial: '+61', code: 'AU' },
    { flag: '🇸🇬', name: 'Singapore', native: '', dial: '+65', code: 'SG' },
    { flag: '🇩🇪', name: 'Germany', native: 'Deutschland', dial: '+49', code: 'DE' },
    { flag: '🇫🇷', name: 'France', native: '', dial: '+33', code: 'FR' },
    { flag: '🇮🇹', name: 'Italy', native: 'Italia', dial: '+39', code: 'IT' },
    { flag: '🇪🇸', name: 'Spain', native: 'España', dial: '+34', code: 'ES' },
    { flag: '🇳🇱', name: 'Netherlands', native: 'Nederland', dial: '+31', code: 'NL' },
    { flag: '🇮🇪', name: 'Ireland', native: '', dial: '+353', code: 'IE' },
    { flag: '🇨🇭', name: 'Switzerland', native: 'Schweiz', dial: '+41', code: 'CH' },
    { flag: '🇸🇪', name: 'Sweden', native: 'Sverige', dial: '+46', code: 'SE' },
    { flag: '🇳🇴', name: 'Norway', native: 'Norge', dial: '+47', code: 'NO' },
    { flag: '🇩🇰', name: 'Denmark', native: 'Danmark', dial: '+45', code: 'DK' },
    { flag: '🇫🇮', name: 'Finland', native: 'Suomi', dial: '+358', code: 'FI' },
    { flag: '🇭🇺', name: 'Hungary', native: 'Magyarország', dial: '+36', code: 'HU' },
    { flag: '🇮🇸', name: 'Iceland', native: 'Ísland', dial: '+354', code: 'IS' },
    { flag: '🇮🇩', name: 'Indonesia', native: '', dial: '+62', code: 'ID' },
    { flag: '🇮🇷', name: 'Iran', native: 'ایران', dial: '+98', code: 'IR' },
    { flag: '🇮🇶', name: 'Iraq', native: 'العراق', dial: '+964', code: 'IQ' },
    { flag: '🇳🇵', name: 'Nepal', native: 'नेपाल', dial: '+977', code: 'NP' },
    { flag: '🇧🇩', name: 'Bangladesh', native: 'বাংলাদেশ', dial: '+880', code: 'BD' },
    { flag: '🇵🇰', name: 'Pakistan', native: 'پاکستان', dial: '+92', code: 'PK' },
    { flag: '🇱🇰', name: 'Sri Lanka', native: 'ශ්‍රී ලංකාව', dial: '+94', code: 'LK' },
    { flag: '🇯🇵', name: 'Japan', native: '日本', dial: '+81', code: 'JP' },
    { flag: '🇰🇷', name: 'South Korea', native: '대한민국', dial: '+82', code: 'KR' },
    { flag: '🇨🇳', name: 'China', native: '中国', dial: '+86', code: 'CN' },
    { flag: '🇲🇾', name: 'Malaysia', native: '', dial: '+60', code: 'MY' },
    { flag: '🇵🇭', name: 'Philippines', native: '', dial: '+63', code: 'PH' },
    { flag: '🇹🇭', name: 'Thailand', native: 'ประเทศไทย', dial: '+66', code: 'TH' },
    { flag: '🇻🇳', name: 'Vietnam', native: 'Việt Nam', dial: '+84', code: 'VN' },
    { flag: '🇧🇷', name: 'Brazil', native: 'Brasil', dial: '+55', code: 'BR' },
    { flag: '🇲🇽', name: 'Mexico', native: '', dial: '+52', code: 'MX' },
    { flag: '🇿🇦', name: 'South Africa', native: '', dial: '+27', code: 'ZA' },
    { flag: '🇪🇬', name: 'Egypt', native: 'مصر', dial: '+20', code: 'EG' }
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: ''
    });
    const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
    const [isCountryOpen, setIsCountryOpen] = useState(false);
    const [status, setStatus] = useState('');
    const [openFaqIndexes, setOpenFaqIndexes] = useState({});
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsCountryOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const payload = {
                ...formData,
                phone: formData.phone ? `${selectedCountry.dial} ${formData.phone}`.trim() : ''
            };
            const res = await fetch(`${API_BASE_URL}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <section className="section contact relative overflow-hidden" id="contact" style={{ padding: "70px 0 90px" }}>
            {/* Background Glow Overlay */}
            <div style={{
                position: "absolute",
                top: "10%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "800px",
                height: "450px",
                background: "radial-gradient(ellipse, rgba(124, 58, 237, 0.07) 0%, transparent 70%)",
                pointerEvents: "none",
                zIndex: 0
            }}></div>

            <div className="container relative z-1" style={{ maxWidth: "1050px" }}>
                <div className="section__header" style={{ marginBottom: "40px", textAlign: "center" }}>
                    <span className="section__badge"><i className="fas fa-paper-plane"></i> Get In Touch</span>
                    <h2 className="section__title" style={{ fontSize: "2.2rem", fontWeight: "800" }}>Let's Build Something <span className="text-gradient">Great</span></h2>
                    <p className="section__subtitle" style={{ fontSize: "0.98rem", maxWidth: "600px", margin: "0 auto" }}>
                        Ready to transform your analytics stack? Let's discuss your project.
                    </p>
                </div>

                <div className="contact__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', alignItems: 'stretch' }}>
                    {/* Contact Info Card */}
                    <div className="card card--gradient-border contact__info-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '24px 28px' }}>
                        <h3 className="card__title" style={{ marginBottom: "16px", fontSize: "1.25rem", fontWeight: "700" }}>
                            Contact Info
                        </h3>
                        
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "16px" }}>
                            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                                <div className="contact__icon-box" style={{ width: "36px", height: "36px", flexShrink: 0 }}>
                                    {/* Gmail Official Logo */}
                                    <svg viewBox="0 0 48 48" width="18" height="18">
                                        <path fill="#4285F4" d="M45,16.2l-5,2.75V37c0,1.1-0.9,2-2,2h-7V24.5l14-11V16.2z"/>
                                        <path fill="#34A853" d="M3,16.2l5,2.75V37c0,1.1,0.9,2,2,2h7V24.5l-14-11V16.2z"/>
                                        <path fill="#EA4335" d="M38,11.5L24,22.5L10,11.5V7c0-1.1,0.9,2-2,2h24c1.1,0,2,0.9,2,2V11.5z"/>
                                        <path fill="#FBBC05" d="M45,13.5l-7,5V11.5l7-5.5c0.6-0.5,1-1.2,1-2v0.5V13.5z"/>
                                        <path fill="#C5221F" d="M3,13.5l7,5V11.5l-7-5.5c-0.6-0.5-1-1.2-1-2v0.5V13.5z"/>
                                    </svg>
                                </div>
                                <a href="mailto:sales@metricvibes.com" className="contact__link-text" style={{ fontWeight: "600", fontSize: "0.88rem", textDecoration: "none", transition: "opacity 0.2s" }} onMouseEnter={(e) => e.target.style.opacity = "0.8"} onMouseLeave={(e) => e.target.style.opacity = "1"}>
                                    sales@metricvibes.com
                                </a>
                            </div>
                            
                            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                                <div className="contact__icon-box" style={{ width: "36px", height: "36px", flexShrink: 0 }}>
                                    {/* Google Calendar Official Logo */}
                                    <svg viewBox="0 0 48 48" width="18" height="18">
                                        <rect x="6" y="8" width="36" height="34" rx="4" fill="#ffffff" stroke="#4285F4" strokeWidth="2.5"/>
                                        <path fill="#EA4335" d="M6 12C6 9.79 7.79 8 10 8H38C40.21 8 42 9.79 42 12V16H6V12Z"/>
                                        <rect x="12" y="22" width="6" height="5" rx="1" fill="#4285F4"/>
                                        <rect x="21" y="22" width="6" height="5" rx="1" fill="#34A853"/>
                                        <rect x="30" y="22" width="6" height="5" rx="1" fill="#FBBC05"/>
                                        <rect x="12" y="30" width="6" height="5" rx="1" fill="#EA4335"/>
                                        <rect x="21" y="30" width="6" height="5" rx="1" fill="#4285F4"/>
                                        <rect x="30" y="30" width="6" height="5" rx="1" fill="#34A853"/>
                                    </svg>
                                </div>
                                <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0HNRcFwK9OaEiO3Ygv6CrPg_H3gkYtXJekUGW7t9FB3TSZY0aAzWAs0aFVZjIVCpuBiCSb1boc" target="_blank" rel="noopener noreferrer" className="contact__link-text" style={{ fontWeight: "600", fontSize: "0.88rem", textDecoration: "none", transition: "opacity 0.2s" }} onMouseEnter={(e) => e.target.style.opacity = "0.8"} onMouseLeave={(e) => e.target.style.opacity = "1"}>
                                    Book A Slot - Google Calendar
                                </a>
                            </div>

                            <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                                <div className="contact__icon-box" style={{ width: "36px", height: "36px", flexShrink: 0, marginTop: "2px" }}>
                                    {/* Google Maps Official Pin Logo */}
                                    <svg viewBox="0 0 48 48" width="18" height="18">
                                        <path fill="#EA4335" d="M24 4C14.61 4 7 11.61 7 21c0 11.77 15.34 22.31 16.03 22.78a1.69 1.69 0 0 0 1.94 0C25.66 43.31 41 32.77 41 21c0-9.39-7.61-17-17-17z"/>
                                        <circle cx="24" cy="20" r="7" fill="#ffffff"/>
                                        <circle cx="24" cy="20" r="4" fill="#4285F4"/>
                                    </svg>
                                </div>
                                <a href="https://www.google.com/maps/search/?api=1&query=MetricVibes" target="_blank" rel="noopener noreferrer" className="contact__link-text" style={{ fontWeight: "600", fontSize: "0.85rem", lineHeight: "1.4", textDecoration: "none", transition: "opacity 0.2s" }} onMouseEnter={(e) => e.target.style.opacity = "0.8"} onMouseLeave={(e) => e.target.style.opacity = "1"}>
                                    MetricVibes, A100, Sector 58, Noida, UP 201309
                                </a>
                            </div>
                        </div>

                        {/* Map Container - Sleek height */}
                        <div className="contact__map" style={{ marginTop: "auto", width: "100%", flex: 1, minHeight: "170px", borderRadius: "10px", overflow: "hidden", border: "1px solid rgba(124, 58, 237, 0.15)", position: "relative" }}>
                            <iframe 
                                src="https://maps.google.com/maps?q=28.6050098,77.3620303&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                                style={{ border: 0, width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                title="MetricVibes Location Map"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form Card */}
                    <div className="card card--gradient-border contact__form-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '24px 28px' }}>
                        <h3 className="card__title" style={{ marginBottom: "16px", fontSize: "1.25rem", fontWeight: "700" }}>
                            Drop Us A Message
                        </h3>
                        
                        {status === 'success' && <div className="alert alert-success" style={{ padding: "8px 12px", fontSize: "0.85rem", marginBottom: "12px" }}>Message sent successfully! We will get back to you soon.</div>}
                        {status === 'error' && <div className="alert alert-danger" style={{ padding: "8px 12px", fontSize: "0.85rem", marginBottom: "12px" }}>An error occurred. Please try again later.</div>}

                        <form id="contactForm" onSubmit={handleSubmit}>
                            {/* Honeypot */}
                            <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
                                <input type="text" name="website_url" tabIndex="-1" autoComplete="off" />
                            </div>

                            {/* 2-Column Grid for Form Fields */}
                            <div className="contact-form-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '12px' }}>
                                {/* First Name */}
                                <div className="form-group" style={{ marginBottom: 0 }}>
                                    <label className="contact-label" style={{ fontSize: '0.84rem', fontWeight: '700', color: 'var(--text-color, #1e293b)', marginBottom: '5px', display: 'block' }}>
                                        First Name <span style={{ color: '#ef4444' }}>*</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        className="form-control" 
                                        placeholder="Enter Your First Name" 
                                        required 
                                        aria-label="Full Name" 
                                        value={formData.name} 
                                        onChange={handleChange} 
                                        style={{ height: "42px", fontSize: "0.88rem", padding: "0 14px", borderRadius: "8px" }} 
                                    />
                                </div>

                                {/* Email */}
                                <div className="form-group" style={{ marginBottom: 0 }}>
                                    <label className="contact-label" style={{ fontSize: '0.84rem', fontWeight: '700', color: 'var(--text-color, #1e293b)', marginBottom: '5px', display: 'block' }}>
                                        Email <span style={{ color: '#ef4444' }}>*</span>
                                    </label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        className="form-control" 
                                        placeholder="Email Address" 
                                        required 
                                        aria-label="Email" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        style={{ height: "42px", fontSize: "0.88rem", padding: "0 14px", borderRadius: "8px" }} 
                                    />
                                </div>

                                {/* Phone / Mobile */}
                                <div className="form-group" style={{ marginBottom: 0, position: 'relative' }} ref={dropdownRef}>
                                    <label className="contact-label" style={{ fontSize: '0.84rem', fontWeight: '700', color: 'var(--text-color, #1e293b)', marginBottom: '5px', display: 'block' }}>
                                        Phone/Mobile <span style={{ color: '#ef4444' }}>*</span>
                                    </label>
                                    <div className="contact-phone-group" style={{ display: 'flex', width: '100%', borderRadius: '8px', border: '1px solid var(--border-color, rgba(124, 58, 237, 0.2))', background: 'var(--input-bg, #f1f5f9)', overflow: 'hidden' }}>
                                        {/* Country Flag Selector Button */}
                                        <button
                                            type="button"
                                            className="contact-flag-btn"
                                            onClick={() => setIsCountryOpen(!isCountryOpen)}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                padding: '0 10px',
                                                background: 'rgba(0,0,0,0.04)',
                                                border: 'none',
                                                borderRight: '1px solid var(--border-color, rgba(0,0,0,0.08))',
                                                cursor: 'pointer',
                                                flexShrink: 0
                                            }}
                                            title="Select Country"
                                        >
                                            <img 
                                                src={`https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png`} 
                                                alt={selectedCountry.name} 
                                                style={{ width: '20px', height: '14px', borderRadius: '2px', objectFit: 'cover', display: 'block', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} 
                                            />
                                            <i className={`fas fa-caret-${isCountryOpen ? 'up' : 'down'}`} style={{ fontSize: '0.72rem', color: '#64748b' }}></i>
                                        </button>

                                        {/* Mobile Number Input */}
                                        <input 
                                            type="tel" 
                                            name="phone" 
                                            className="form-control" 
                                            placeholder="Mobile Number" 
                                            required 
                                            aria-label="Phone" 
                                            value={formData.phone} 
                                            onChange={handleChange} 
                                            style={{ height: "42px", fontSize: "0.88rem", padding: "0 14px", border: 'none', background: 'transparent', flex: 1 }} 
                                        />
                                    </div>

                                    {/* Custom Floating Country Dropdown List */}
                                    {isCountryOpen && (
                                        <div style={{
                                            position: 'absolute',
                                            top: 'calc(100% + 6px)',
                                            left: 0,
                                            width: '320px',
                                            maxWidth: '90vw',
                                            maxHeight: '220px',
                                            overflowY: 'auto',
                                            background: 'var(--card-bg, #1e1b4b)',
                                            border: '1px solid var(--border-color, rgba(124, 58, 237, 0.4))',
                                            borderRadius: '10px',
                                            boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
                                            zIndex: 1000,
                                            padding: '4px 0'
                                        }}>
                                            {COUNTRIES.map((c, i) => (
                                                <div
                                                    key={i}
                                                    onClick={() => {
                                                        setSelectedCountry(c);
                                                        setIsCountryOpen(false);
                                                    }}
                                                    style={{
                                                        padding: '8px 12px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        gap: '10px',
                                                        fontSize: '0.84rem',
                                                        cursor: 'pointer',
                                                        background: selectedCountry.code === c.code ? 'rgba(124, 58, 237, 0.25)' : 'transparent',
                                                        color: 'var(--text-color, #ffffff)',
                                                        borderBottom: '1px solid rgba(255,255,255,0.05)'
                                                    }}
                                                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(124, 58, 237, 0.35)'}
                                                    onMouseLeave={(e) => e.currentTarget.style.background = selectedCountry.code === c.code ? 'rgba(124, 58, 237, 0.25)' : 'transparent'}
                                                >
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
                                                        <img 
                                                            src={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png`} 
                                                            alt={c.name} 
                                                            style={{ width: '20px', height: '14px', borderRadius: '2px', objectFit: 'cover', flexShrink: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} 
                                                        />
                                                        <span style={{ fontWeight: '600', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                                            {c.name} {c.native ? <span style={{ fontWeight: '400', opacity: 0.7 }}>({c.native})</span> : ''}
                                                        </span>
                                                    </div>
                                                    <span style={{ color: '#a78bfa', fontWeight: '700', fontSize: '0.82rem', marginLeft: 'auto', flexShrink: 0 }}>
                                                        {c.dial}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Company Name */}
                                <div className="form-group" style={{ marginBottom: 0 }}>
                                    <label className="contact-label" style={{ fontSize: '0.84rem', fontWeight: '700', color: 'var(--text-color, #1e293b)', marginBottom: '5px', display: 'block' }}>
                                        Company Name <span style={{ color: '#ef4444' }}>*</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        name="company" 
                                        className="form-control" 
                                        placeholder="Enter Company Name" 
                                        required 
                                        aria-label="Company" 
                                        value={formData.company} 
                                        onChange={handleChange} 
                                        style={{ height: "42px", fontSize: "0.88rem", padding: "0 14px", borderRadius: "8px" }} 
                                    />
                                </div>
                            </div>

                            {/* Project Message */}
                            <div className="form-group" style={{ marginBottom: "16px" }}>
                                <label className="contact-label" style={{ fontSize: '0.84rem', fontWeight: '700', color: 'var(--text-color, #1e293b)', marginBottom: '5px', display: 'block' }}>
                                    Tell us about your project... <span style={{ color: '#ef4444' }}>*</span>
                                </label>
                                <textarea 
                                    name="message" 
                                    className="form-control" 
                                    placeholder="Tell us about your project requirements, goals, or timeline..." 
                                    rows="2" 
                                    required 
                                    aria-label="Message" 
                                    style={{ borderRadius: "10px", padding: "10px 14px", fontSize: "0.88rem", height: "75px" }} 
                                    value={formData.message} 
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn--contact-submit" style={{
                                width: "100%",
                                padding: "12px",
                                borderRadius: "30px",
                                background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
                                color: "#ffffff",
                                fontWeight: "700",
                                fontSize: "0.9rem",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                                border: "none",
                                boxShadow: "0 8px 22px rgba(124, 58, 237, 0.35)",
                                transition: "all 0.3s ease",
                                cursor: "pointer"
                            }} 
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-2px)";
                                e.currentTarget.style.boxShadow = "0 12px 28px rgba(124, 58, 237, 0.5)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 8px 22px rgba(124, 58, 237, 0.35)";
                            }}
                            disabled={status === 'sending'}>
                                {status === 'sending' ? 'SENDING...' : 'BOOK YOUR DEMO'}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Section 1: Let's Transform Your Data Analytics Strategy */}
                <div className="contact__section-block">
                    <div className="contact__section-grid-1">
                        <div>
                            <span className="section__badge" style={{ marginBottom: "16px", display: "inline-flex" }}>
                                <i className="fas fa-chart-line"></i> Analytics Strategy
                            </span>
                            <h2 className="contact__block-title" style={{ fontSize: "2.1rem", fontWeight: "800", lineHeight: "1.25", letterSpacing: "-0.02em", marginTop: "10px" }}>
                                Let's Transform Your <span className="text-gradient">Data Analytics Strategy</span>
                            </h2>
                            <div style={{ width: "40px", height: "4px", borderRadius: "4px", background: "linear-gradient(90deg, #7c3aed 0%, #3b1378 100%)", marginTop: "20px" }}></div>
                        </div>
                        <div>
                            <p className="contact__block-text" style={{ fontSize: "1.02rem", lineHeight: "1.8", marginBottom: "20px" }}>
                                At MetricVibes, we understand that making data-driven decisions requires more than just collecting numbers – it requires the right tracking infrastructure, meaningful insights, and actionable recommendations. Our team of analytics specialists works with B2B companies, SaaS platforms, and e-commerce businesses to implement comprehensive tracking solutions that drive real business growth.
                            </p>
                            <p className="contact__block-text" style={{ fontSize: "1.02rem", lineHeight: "1.8", marginBottom: 0 }}>
                                Whether you're struggling with GA4 implementation, need custom dashboard development, or want to optimize your conversion tracking across multiple channels, we're here to help. Our consultants have helped over <strong style={{ color: "#7c3aed", fontWeight: "700" }}>200+ companies</strong> transform their analytics approach, resulting in an average <strong style={{ color: "#7c3aed", fontWeight: "700" }}>35% improvement in data accuracy</strong> and <strong style={{ color: "#7c3aed", fontWeight: "700" }}>28% increase</strong> in conversion optimization effectiveness.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 2: How We Can Help Your Business */}
                <div className="contact__section-block" style={{ marginTop: "36px" }}>
                    <div className="contact__section-grid-2">
                        <div>
                            <p className="contact__block-text" style={{ fontSize: "1.02rem", lineHeight: "1.8", marginBottom: "20px" }}>
                                Our analytics consulting services span the full spectrum of digital measurement needs. We specialize in Google Analytics 4 setup and migration, ensuring your tracking captures every critical touchpoint in your customer journey. From implementing enhanced e-commerce tracking to setting up cross-domain measurement, we make sure no valuable data slips through the cracks.
                            </p>
                            <p className="contact__block-text" style={{ fontSize: "1.02rem", lineHeight: "1.8", marginBottom: 0 }}>
                                Beyond implementation, we provide ongoing optimization and strategic guidance. Our team conducts regular analytics audits, identifies tracking gaps, and provides detailed recommendations to improve your measurement strategy. We also offer custom reporting solutions, automated dashboard creation, and team training to ensure your internal teams can leverage your data effectively long after our engagement.
                            </p>
                        </div>
                        <div>
                            <span className="section__badge" style={{ marginBottom: "16px", display: "inline-flex" }}>
                                <i className="fas fa-briefcase"></i> Enterprise Solutions
                            </span>
                            <h2 className="contact__block-title" style={{ fontSize: "2.1rem", fontWeight: "800", lineHeight: "1.25", letterSpacing: "-0.02em", marginTop: "10px" }}>
                                How We Can <span className="text-gradient">Help Your Business</span>
                            </h2>
                            <div style={{ width: "40px", height: "4px", borderRadius: "4px", background: "linear-gradient(90deg, #7c3aed 0%, #3b1378 100%)", marginTop: "20px" }}></div>
                        </div>
                    </div>
                </div>

                {/* Section 3: Also Check Banner */}
                <div className="contact__also-check">
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                        <div className="contact__icon-box" style={{ height: "44px", padding: "0 14px", width: "auto" }}>
                            <img src="/assets/img/logo-new.webp" alt="MetricVibes Logo" style={{ height: "22px", width: "auto", objectFit: "contain" }} />
                        </div>
                        <div>
                            <span style={{ fontSize: "0.78rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#7c3aed", display: "block", marginBottom: "3px" }}>
                                Also Check
                            </span>
                            <h4 className="contact__also-title" style={{ fontSize: "1.05rem", fontWeight: "700", margin: 0 }}>
                                Want to know more about our analytics team & mission?
                            </h4>
                        </div>
                    </div>
                    <Link to="/about" style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "10px 22px",
                        borderRadius: "30px",
                        background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
                        color: "#ffffff",
                        fontWeight: "600",
                        fontSize: "0.88rem",
                        textDecoration: "none",
                        boxShadow: "0 6px 18px rgba(124, 58, 237, 0.3)",
                        transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
                        Know More About MetricVibes <i className="fas fa-arrow-right" style={{ fontSize: "0.8rem" }}></i>
                    </Link>
                </div>

                {/* Section 4: Home Page Modern Accordion FAQ */}
                <div style={{ marginTop: "80px" }}>
                    <h2 className="section__title" style={{ fontSize: "2.2rem", fontWeight: "800", textAlign: "center", marginBottom: "40px" }}>
                        FAQ
                    </h2>
                    <div className="faq-container-modern" style={{ maxWidth: "800px", margin: "0 auto" }}>
                        {[
                            {
                                q: "How quickly can you help us fix our Google Analytics tracking issues?",
                                a: "Our team typically initiates an emergency audit within 24-48 hours and can resolve core tracking issues within 3-5 business days."
                            },
                            {
                                q: "Do you work with businesses outside of our time zone?",
                                a: "Yes, we work with enterprise clients globally across North America, Europe, Asia, and Australia with flexible asynchronous & real-time syncs."
                            },
                            {
                                q: "What's included in your free analytics audit?",
                                a: "Our free audit inspects your current event setup, data accuracy, GA4 tag configurations, consent mode compliance, and identifies tracking gaps."
                            },
                            {
                                q: "Can you help train our internal team on analytics best practices?",
                                a: "Yes! We provide tailored training sessions, Looker Studio dashboard walkthroughs, and custom documentation for your team."
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className={`faq-item-modern ${openFaqIndexes[idx] ? 'active' : ''}`}>
                                <div 
                                    className={`faq-header-modern ${openFaqIndexes[idx] ? 'active' : ''}`} 
                                    onClick={() => setOpenFaqIndexes(prev => ({ ...prev, [idx]: !prev[idx] }))}
                                >
                                    {faq.q}
                                    <i className={`fas fa-caret-${openFaqIndexes[idx] ? 'up' : 'down'}`}></i>
                                </div>
                                <div className="faq-body-modern" style={{ display: openFaqIndexes[idx] ? 'block' : 'none' }}>
                                    {faq.a}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
