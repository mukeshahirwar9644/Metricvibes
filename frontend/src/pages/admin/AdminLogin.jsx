import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../config/api';

export default function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
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
                setError(data.detail || 'Invalid login credentials');
            }
        } catch (err) {
            setError('Server connection failed. Make sure backend is running.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-login-wrapper">
            <div className="admin-login-card">
                <div className="admin-login-logo">
                    <span style={{ color: '#6C63FF' }}>MetricVibes</span> Admin Panel
                </div>
                <p style={{ textAlign: 'center', color: '#94A3B8', fontSize: '0.9rem', marginBottom: '24px' }}>
                    Sign in to manage blogs, case studies, and lead forms.
                </p>

                {error && (
                    <div style={{ padding: '12px 16px', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', color: '#f87171', borderRadius: '8px', fontSize: '0.88rem', marginBottom: '20px' }}>
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin}>
                    <div className="admin-form-group">
                        <label className="admin-form-label">Username</label>
                        <input
                            type="text"
                            className="admin-form-input"
                            placeholder="admin"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="admin-form-group">
                        <label className="admin-form-label">Password</label>
                        <input
                            type="password"
                            className="admin-form-input"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="admin-btn" disabled={loading}>
                        {loading ? 'Authenticating...' : 'Sign In'}
                    </button>
                </form>
                <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.8rem', color: '#64748B' }}>
                    Default Login: <code>admin</code> / <code>admin123</code>
                </div>
            </div>
        </div>
    );
}
