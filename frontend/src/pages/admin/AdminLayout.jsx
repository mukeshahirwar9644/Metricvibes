import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { API_BASE_URL } from '../../config/api';

const API = API_BASE_URL;

const navItems = [
    { label: 'Dashboard', icon: 'fas fa-th-large', path: '/admin' },
    { label: 'Blogs', icon: 'fas fa-blog', path: '/admin/blogs' },
    { label: 'Case Studies', icon: 'fas fa-project-diagram', path: '/admin/case-studies' },
    { label: 'Careers', icon: 'fas fa-briefcase', path: '/admin/careers' },
    { label: 'Leads / Submissions', icon: 'fas fa-envelope-open-text', path: '/admin/submissions' },
    { label: 'Newsletter', icon: 'fas fa-paper-plane', path: '/admin/newsletter' },
];

export default function AdminLayout({ children, title }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [adminTheme, setAdminTheme] = useState(() => localStorage.getItem('adminTheme') || 'dark');
    const [currentTimeIST, setCurrentTimeIST] = useState('');
    const user = JSON.parse(localStorage.getItem('adminUser') || '{}');

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const istFormatted = now.toLocaleTimeString('en-IN', {
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            });
            const dateFormatted = now.toLocaleDateString('en-IN', {
                timeZone: 'Asia/Kolkata',
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            });
            setCurrentTimeIST(`${dateFormatted} | ${istFormatted} IST`);
        };

        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/admin/login');
        }
    }, [navigate]);

    useEffect(() => {
        document.body.classList.add('admin-body');
        return () => document.body.classList.remove('admin-body');
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-admin-theme', adminTheme);
        localStorage.setItem('adminTheme', adminTheme);
    }, [adminTheme]);

    const toggleTheme = () => {
        setAdminTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    // Close sidebar on route change (mobile)
    useEffect(() => {
        setSidebarOpen(false);
    }, [location.pathname]);

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        navigate('/admin/login');
    };

    return (
        <div className="admin-wrapper">
            {/* Mobile Overlay */}
            <div
                className={`admin-mobile-overlay ${sidebarOpen ? 'show' : ''}`}
                onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar */}
            <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
                <Link to="/admin" className="admin-sidebar__brand" style={{ padding: '16px 20px', gap: '10px', display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--admin-card-border)' }}>
                    <div style={{ background: '#ffffff', padding: '6px 14px', borderRadius: '8px', display: 'flex', alignItems: 'center', border: '1px solid rgba(124, 58, 237, 0.25)', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                        <img src="/assets/img/logo-new.webp" alt="MetricVibes Logo" style={{ height: '26px', width: 'auto', display: 'block' }} />
                    </div>
                    <span style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)', color: '#fff', padding: '5px 9px', borderRadius: '6px', fontSize: '0.65rem', fontWeight: '800', letterSpacing: '0.08em', flexShrink: 0 }}>
                        ADMIN
                    </span>
                </Link>

                <nav className="admin-sidebar__nav">
                    <div className="admin-sidebar__section-label">Navigation</div>
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`admin-sidebar__link ${location.pathname === item.path ? 'active' : ''}`}
                        >
                            <i className={item.icon}></i>
                            {item.label}
                        </Link>
                    ))}

                    <div className="admin-sidebar__section-label" style={{ marginTop: '12px' }}>Quick Links</div>
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="admin-sidebar__link"
                    >
                        <i className="fas fa-external-link-alt"></i>
                        View Website
                    </a>
                </nav>

                <div className="admin-sidebar__user">
                    <div className="admin-sidebar__avatar">
                        {(user.username || 'A').charAt(0).toUpperCase()}
                    </div>
                    <div className="admin-sidebar__user-info">
                        <div className="admin-sidebar__user-name">{user.username || 'Admin'}</div>
                        <div className="admin-sidebar__user-role">{user.role || 'Administrator'}</div>
                    </div>
                </div>
            </aside>

            {/* Main */}
            <div className="admin-main">
                <header className="admin-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <button
                            className="admin-mobile-toggle"
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                        <h1 className="admin-header__title">{title || 'Dashboard'}</h1>
                    </div>
                    <div className="admin-header__actions" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{
                            background: 'rgba(124, 58, 237, 0.12)',
                            border: '1px solid rgba(124, 58, 237, 0.3)',
                            color: '#c084fc',
                            padding: '6px 14px',
                            borderRadius: '8px',
                            fontSize: '0.8rem',
                            fontWeight: '700',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            whiteSpace: 'nowrap'
                        }}>
                            <i className="far fa-clock" style={{ color: '#7c3aed' }}></i>
                            <span>{currentTimeIST || 'Loading IST...'}</span>
                        </div>
                        <button className="admin-btn admin-btn--ghost admin-btn--sm" onClick={toggleTheme} title="Toggle Theme" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <i className={`fas ${adminTheme === 'dark' ? 'fa-sun' : 'fa-moon'}`} style={{ color: adminTheme === 'dark' ? '#f59e0b' : '#7c3aed' }}></i>
                            <span>{adminTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                        </button>
                        <button className="admin-btn admin-btn--ghost admin-btn--sm" onClick={handleLogout}>
                            <i className="fas fa-sign-out-alt"></i> Logout
                        </button>
                    </div>
                </header>
                <main className="admin-content">
                    {children}
                </main>
            </div>
        </div>
    );
}

// Reusable Toast component
export function Toast({ message, type = 'success', onClose }) {
    useEffect(() => {
        const timer = setTimeout(() => onClose && onClose(), 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`admin-toast admin-toast--${type}`}>
            <i className={`fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}`}></i>
            {message}
        </div>
    );
}

// Reusable Confirm Modal
export function ConfirmModal({ title, message, onConfirm, onCancel, loading }) {
    return (
        <div className="admin-modal-overlay" onClick={onCancel}>
            <div className="admin-modal admin-modal--sm" onClick={(e) => e.stopPropagation()}>
                <div className="admin-modal__body" style={{ textAlign: 'center', paddingTop: '36px' }}>
                    <div className="admin-confirm-icon">
                        <i className="fas fa-trash-alt"></i>
                    </div>
                    <h3 style={{ color: '#fff', marginBottom: '12px', fontFamily: 'Manrope, sans-serif' }}>{title || 'Confirm Delete'}</h3>
                    <p className="admin-confirm-text">{message}</p>
                </div>
                <div className="admin-modal__footer" style={{ justifyContent: 'center' }}>
                    <button className="admin-btn admin-btn--ghost" onClick={onCancel} disabled={loading}>Cancel</button>
                    <button className="admin-btn admin-btn--danger" onClick={onConfirm} disabled={loading}>
                        {loading ? <><i className="fas fa-spinner fa-spin"></i> Deleting...</> : <><i className="fas fa-trash"></i> Delete</>}
                    </button>
                </div>
            </div>
        </div>
    );
}

// Helper function to format UTC dates into Indian Standard Time (IST)
export function formatIST(dateStr) {
    if (!dateStr) return '—';
    let formattedStr = String(dateStr);
    if (!formattedStr.endsWith('Z') && !formattedStr.includes('+')) {
        formattedStr = formattedStr.replace(' ', 'T') + 'Z';
    }
    try {
        const d = new Date(formattedStr);
        if (isNaN(d.getTime())) return dateStr;
        return d.toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    } catch (e) {
        return dateStr;
    }
}

export { API };
