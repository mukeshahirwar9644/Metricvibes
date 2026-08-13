import React, { useEffect, useState } from 'react';
import AdminLayout, { API, Toast, ConfirmModal, formatIST } from './AdminLayout';

export default function AdminNewsletter() {
    const [subscribers, setSubscribers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [toast, setToast] = useState(null);

    useEffect(() => {
        fetchSubscribers();
    }, []);

    const fetchSubscribers = async () => {
        try {
            const token = localStorage.getItem('adminToken');
            const res = await fetch(`${API}/api/admin/newsletter`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.status === 401) {
                localStorage.removeItem('adminToken');
                localStorage.removeItem('adminUser');
                window.location.href = '/admin/login';
                return;
            }
            const data = await res.json();
            if (data.status === 'success') setSubscribers(data.data);
        } catch (err) {
            console.error('Error fetching subscribers:', err);
        } finally {
            setLoading(false);
        }
    };

    const filteredSubscribers = subscribers.filter((s) =>
        s.email?.toLowerCase().includes(search.toLowerCase())
    );

    const copyAllEmails = () => {
        const emails = subscribers.map((s) => s.email).join(', ');
        navigator.clipboard.writeText(emails).then(() => {
            setToast({ message: `${subscribers.length} emails copied to clipboard!`, type: 'success' });
        }).catch(() => {
            setToast({ message: 'Failed to copy', type: 'error' });
        });
    };

    return (
        <AdminLayout title="Newsletter Subscribers">
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
                <div className="admin-search">
                    <i className="fas fa-search admin-search__icon"></i>
                    <input
                        type="text"
                        className="admin-search__input"
                        placeholder="Search subscribers..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <button className="admin-btn admin-btn--ghost" onClick={copyAllEmails}>
                    <i className="fas fa-copy"></i> Copy All Emails
                </button>
            </div>

            {/* Table */}
            <div className="admin-card">
                <div className="admin-card__header">
                    <h3 className="admin-card__title">All Subscribers ({filteredSubscribers.length})</h3>
                </div>
                {loading ? (
                    <div className="admin-spinner"><i className="fas fa-circle-notch"></i> Loading subscribers...</div>
                ) : (
                    <div className="admin-table-wrap">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Email</th>
                                    <th>Subscribed On</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredSubscribers.length === 0 ? (
                                    <tr>
                                        <td colSpan="3" className="admin-table__empty">
                                            <i className="fas fa-paper-plane"></i>
                                            No subscribers found
                                        </td>
                                    </tr>
                                ) : (
                                    filteredSubscribers.map((sub, idx) => (
                                        <tr key={sub.id}>
                                            <td style={{ color: 'var(--admin-text-secondary)' }}>{idx + 1}</td>
                                            <td>
                                                <a href={`mailto:${sub.email}`} style={{ color: '#6C63FF', textDecoration: 'none', fontWeight: 500 }}>
                                                    {sub.email}
                                                </a>
                                            </td>
                                            <td style={{ color: 'var(--admin-text-secondary)', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>
                                                {formatIST(sub.subscribed_at)}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
        </AdminLayout>
    );
}
