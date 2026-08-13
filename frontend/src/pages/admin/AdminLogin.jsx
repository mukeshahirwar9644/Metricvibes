import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../config/api';

export default function AdminLogin() {
    const [view, setView] = useState('login'); // 'login' | 'forgot' | 'reset'
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    // Forgot / Reset states
    const [resetEmail, setResetEmail] = useState('');
    const [otpCode, setOtpCode] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMsg('');
        setLoading(true);

        try {
            const res = await fetch(`${API_BASE_URL}/api/admin/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await res.json();
            if (res.ok && data.status === 'success') {
                localStorage.setItem('adminToken', data.token);
                localStorage.setItem('adminUser', JSON.stringify(data.user));
                navigate('/admin');
            } else {
                setError(data.detail || 'Invalid email or password');
            }
        } catch (err) {
            setError('Server connection failed. Make sure backend is running.');
        } finally {
            setLoading(false);
        }
    };

    const handleRequestOtp = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMsg('');
        setLoading(true);

        try {
            const res = await fetch(`${API_BASE_URL}/api/admin/forgot-password`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: resetEmail })
            });

            const data = await res.json();
            if (res.ok && data.status === 'success') {
                setSuccessMsg(data.message);
                setView('reset');
            } else {
                setError(data.detail || 'Failed to request OTP');
            }
        } catch (err) {
            setError('Unable to connect to server');
        } finally {
            setLoading(false);
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMsg('');
        setLoading(true);

        try {
            const res = await fetch(`${API_BASE_URL}/api/admin/reset-password`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: resetEmail, otp: otpCode, new_password: newPassword })
            });

            const data = await res.json();
            if (res.ok && data.status === 'success') {
                setSuccessMsg(data.message);
                setTimeout(() => {
                    setView('login');
                    setUsername(resetEmail);
                    setPassword(newPassword);
                    setSuccessMsg('Password updated! You can now log in.');
                }, 2000);
            } else {
                setError(data.detail || 'Failed to reset password');
            }
        } catch (err) {
            setError('Unable to connect to server');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-login-wrapper">
            <div className="admin-login-card">
                <div className="admin-login-header" style={{ textAlign: 'center', marginBottom: '28px' }}>
                    <div style={{ background: '#ffffff', padding: '8px 20px', borderRadius: '8px', display: 'inline-flex', alignItems: 'center', border: '1px solid rgba(124, 58, 237, 0.25)', boxShadow: '0 4px 20px rgba(124, 58, 237, 0.2)', marginBottom: '16px' }}>
                        <img src="/assets/img/logo-new.webp" alt="MetricVibes Logo" style={{ height: '32px', width: 'auto', display: 'block' }} />
                    </div>
                    <h2 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#ffffff', margin: '0 0 6px', fontFamily: 'Manrope, sans-serif' }}>
                        {view === 'login' ? 'Admin Control Center' : view === 'forgot' ? 'Reset Admin Password' : 'Enter Verification OTP'}
                    </h2>
                    <p style={{ color: '#94A3B8', fontSize: '0.88rem', margin: 0, lineHeight: 1.5 }}>
                        {view === 'login' ? 'Sign in to access blogs, case studies, and lead forms.' : view === 'forgot' ? 'Enter your registered work email to receive a reset code.' : `Enter the 6-digit OTP sent to ${resetEmail}`}
                    </p>
                </div>

                {error && (
                    <div style={{ padding: '12px 16px', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', color: '#f87171', borderRadius: '10px', fontSize: '0.88rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <i className="fas fa-exclamation-circle" style={{ fontSize: '1rem', flexShrink: 0 }}></i> <span>{error}</span>
                    </div>
                )}

                {successMsg && (
                    <div style={{ padding: '12px 16px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10b981', color: '#34d399', borderRadius: '10px', fontSize: '0.88rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <i className="fas fa-check-circle" style={{ fontSize: '1rem', flexShrink: 0 }}></i> <span>{successMsg}</span>
                    </div>
                )}

                {/* LOGIN FORM */}
                {view === 'login' && (
                    <form onSubmit={handleLogin}>
                        <div className="admin-form-group" style={{ marginBottom: '18px' }}>
                            <label className="admin-form-label">Work Email Address</label>
                            <div style={{ position: 'relative' }}>
                                <input
                                    type="text"
                                    className="admin-form-input"
                                    placeholder="anuj@metricvibes.com"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    style={{ width: '100%' }}
                                />
                            </div>
                        </div>
                        <div className="admin-form-group" style={{ marginBottom: '22px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                                <label className="admin-form-label" style={{ margin: 0 }}>Password</label>
                                <button type="button" onClick={() => { setView('forgot'); setError(''); setSuccessMsg(''); setResetEmail(username); }} style={{ background: 'none', border: 'none', color: '#c084fc', fontSize: '0.8rem', cursor: 'pointer', fontWeight: '600', padding: 0 }}>
                                    Forgot Password?
                                </button>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="admin-form-input"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    style={{ width: '100%', paddingRight: '42px' }}
                                />
                                <button 
                                    type="button" 
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '4px' }}
                                    title={showPassword ? "Hide password" : "Show password"}
                                >
                                    <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                </button>
                            </div>
                        </div>
                        <button type="submit" className="admin-btn" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)', color: '#ffffff', width: '100%', padding: '13px', fontSize: '0.95rem', fontWeight: '700', borderRadius: '10px', boxShadow: '0 6px 20px rgba(124, 58, 237, 0.4)' }} disabled={loading}>
                            {loading ? <><i className="fas fa-spinner fa-spin"></i> Authenticating...</> : 'Sign In'}
                        </button>
                    </form>
                )}

                {/* FORGOT PASSWORD FORM */}
                {view === 'forgot' && (
                    <form onSubmit={handleRequestOtp}>
                        <div className="admin-form-group" style={{ marginBottom: '22px' }}>
                            <label className="admin-form-label">Registered Admin Email</label>
                            <input
                                type="email"
                                className="admin-form-input"
                                placeholder="anuj@metricvibes.com"
                                value={resetEmail}
                                onChange={(e) => setResetEmail(e.target.value)}
                                required
                                style={{ width: '100%' }}
                            />
                        </div>
                        <button type="submit" className="admin-btn" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)', color: '#ffffff', width: '100%', padding: '13px', fontSize: '0.95rem', fontWeight: '700', borderRadius: '10px' }} disabled={loading}>
                            {loading ? <><i className="fas fa-spinner fa-spin"></i> Generating OTP...</> : 'Send Reset Code (OTP)'}
                        </button>
                        <button type="button" onClick={() => { setView('login'); setError(''); setSuccessMsg(''); }} style={{ display: 'block', width: '100%', marginTop: '16px', background: 'none', border: 'none', color: '#94a3b8', fontSize: '0.85rem', cursor: 'pointer', textAlign: 'center', fontWeight: '500' }}>
                            <i className="fas fa-arrow-left" style={{ marginRight: '6px' }}></i> Back to Sign In
                        </button>
                    </form>
                )}

                {/* RESET PASSWORD FORM */}
                {view === 'reset' && (
                    <form onSubmit={handleResetPassword}>
                        <div className="admin-form-group" style={{ marginBottom: '18px' }}>
                            <label className="admin-form-label">6-Digit OTP Code</label>
                            <input
                                type="text"
                                className="admin-form-input"
                                placeholder="e.g. 849201"
                                value={otpCode}
                                onChange={(e) => setOtpCode(e.target.value)}
                                maxLength="6"
                                required
                                style={{ letterSpacing: '4px', textAlign: 'center', fontSize: '1.25rem', fontWeight: '700', width: '100%' }}
                            />
                        </div>
                        <div className="admin-form-group" style={{ marginBottom: '22px' }}>
                            <label className="admin-form-label">New Password</label>
                            <input
                                type="password"
                                className="admin-form-input"
                                placeholder="Enter new password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                                style={{ width: '100%' }}
                            />
                        </div>
                        <button type="submit" className="admin-btn" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)', color: '#ffffff', width: '100%', padding: '13px', fontSize: '0.95rem', fontWeight: '700', borderRadius: '10px' }} disabled={loading}>
                            {loading ? <><i className="fas fa-spinner fa-spin"></i> Updating Password...</> : 'Reset Password'}
                        </button>
                        <button type="button" onClick={() => { setView('login'); setError(''); setSuccessMsg(''); }} style={{ display: 'block', width: '100%', marginTop: '16px', background: 'none', border: 'none', color: '#94a3b8', fontSize: '0.85rem', cursor: 'pointer', textAlign: 'center', fontWeight: '500' }}>
                            <i className="fas fa-arrow-left" style={{ marginRight: '6px' }}></i> Back to Sign In
                        </button>
                    </form>
                )}

                {/* AUTHORIZED ADMIN CHIPS */}
                <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                        Authorized Administrators
                    </div>
                    <div className="admin-chip-container">
                        <span className="admin-chip">
                            <i className="far fa-user" style={{ fontSize: '0.7rem' }}></i> mukesh.ahirwar@metricvibes.com
                        </span>
                        <span className="admin-chip">
                            <i className="far fa-user" style={{ fontSize: '0.7rem' }}></i> anuj@metricvibes.com
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
