import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { API_BASE_URL } from '../../config/api';

const API = API_BASE_URL;

const navItems = [
    { label: 'Dashboard', icon: 'fas fa-th-large', path: '/admin' },
    { label: 'Blogs', icon: 'fas fa-blog', path: '/admin/blogs' },
    { label: 'Case Studies', icon: 'fas fa-project-diagram', path: '/admin/case-studies' },
    { label: 'Leads / Submissions', icon: 'fas fa-envelope-open-text', path: '/admin/submissions' },
    { label: 'Newsletter', icon: 'fas fa-paper-plane', path: '/admin/newsletter' },
];

export default function AdminLayout({ children, title }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const user = JSON.parse(localStorage.getItem('adminUser') || '{}');

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
                <Link to="/admin" className="admin-sidebar__brand">
                    <div className="admin-sidebar__brand-icon">
                        <i className="fas fa-chart-line"></i>
                    </div>
                    MetricVibes
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
                    <div className="admin-header__actions">
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

export { API };
