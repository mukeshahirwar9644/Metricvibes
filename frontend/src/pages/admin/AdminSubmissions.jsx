import React, { useEffect, useState } from 'react';
import AdminLayout, { API, Toast, ConfirmModal } from './AdminLayout';

export default function AdminSubmissions() {
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [toast, setToast] = useState(null);
    const [deleteTarget, setDeleteTarget] = useState(null);
    const [deleting, setDeleting] = useState(false);
    const [expandedMessage, setExpandedMessage] = useState(null);

    useEffect(() => {
        fetchSubmissions();
    }, []);

    const fetchSubmissions = async () => {
        try {
            const res = await fetch(`${API}/api/admin/submissions`);
            const data = await res.json();
            if (data.status === 'success') setSubmissions(data.data);
        } catch (err) {
            console.error('Error fetching submissions:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!deleteTarget) return;
        setDeleting(true);
        try {
            const res = await fetch(`${API}/api/admin/submissions/${deleteTarget.id}`, { method: 'DELETE' });
            const data = await res.json();
            if (data.status === 'success') {
                setToast({ message: 'Submission deleted!', type: 'success' });
                setDeleteTarget(null);
                fetchSubmissions();
            }
        } catch (err) {
            setToast({ message: 'Failed to delete', type: 'error' });
        } finally {
            setDeleting(false);
        }
    };

    const filteredSubmissions = submissions.filter((s) =>
        s.name?.toLowerCase().includes(search.toLowerCase()) ||
        s.email?.toLowerCase().includes(search.toLowerCase()) ||
        s.company?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <AdminLayout title="Lead Submissions">
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
                <div className="admin-search">
                    <i className="fas fa-search admin-search__icon"></i>
                    <input
                        type="text"
                        className="admin-search__input"
                        placeholder="Search leads..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <span className="admin-badge admin-badge--blue" style={{ fontSize: '0.82rem', padding: '8px 14px' }}>
                    <i className="fas fa-users" style={{ marginRight: '4px' }}></i> {filteredSubmissions.length} Total Leads
                </span>
            </div>

            {/* Table */}
            <div className="admin-card">
                <div className="admin-card__header">
                    <h3 className="admin-card__title">Contact Form Submissions</h3>
                </div>
                {loading ? (
                    <div className="admin-spinner"><i className="fas fa-circle-notch"></i> Loading submissions...</div>
                ) : (
                    <div className="admin-table-wrap">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Company</th>
                                    <th>Message</th>
                                    <th>Date</th>
                                    <th style={{ textAlign: 'right' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredSubmissions.length === 0 ? (
                                    <tr>
                                        <td colSpan="7" className="admin-table__empty">
                                            <i className="fas fa-inbox"></i>
                                            No submissions found
                                        </td>
                                    </tr>
                                ) : (
                                    filteredSubmissions.map((sub, idx) => (
                                        <tr key={sub.id}>
                                            <td style={{ color: 'var(--admin-text-secondary)' }}>{idx + 1}</td>
                                            <td style={{ fontWeight: 600, color: '#fff', whiteSpace: 'nowrap' }}>{sub.name}</td>
                                            <td>
                                                <a href={`mailto:${sub.email}`} style={{ color: '#6C63FF', textDecoration: 'none' }}>
                                                    {sub.email}
                                                </a>
                                            </td>
                                            <td style={{ color: 'var(--admin-text-secondary)' }}>{sub.company || '—'}</td>
                                            <td>
                                                <div
                                                    className="admin-content-preview"
                                                    style={{ cursor: 'pointer', maxWidth: '250px' }}
                                                    onClick={() => setExpandedMessage(expandedMessage === sub.id ? null : sub.id)}
                                                    title="Click to expand"
                                                >
                                                    {expandedMessage === sub.id
                                                        ? sub.message
                                                        : (sub.message?.length > 80 ? sub.message.substring(0, 80) + '...' : sub.message)}
                                                </div>
                                            </td>
                                            <td style={{ color: 'var(--admin-text-secondary)', fontSize: '0.82rem', whiteSpace: 'nowrap' }}>
                                                {sub.created_at
                                                    ? new Date(sub.created_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
                                                    : '—'}
                                            </td>
                                            <td>
                                                <div className="admin-actions" style={{ justifyContent: 'flex-end' }}>
                                                    <a
                                                        href={`mailto:${sub.email}?subject=Re: MetricVibes Inquiry from ${sub.name}`}
                                                        className="admin-btn admin-btn--ghost admin-btn--icon"
                                                        title="Reply"
                                                    >
                                                        <i className="fas fa-reply" style={{ fontSize: '0.75rem' }}></i>
                                                    </a>
                                                    <button
                                                        className="admin-btn admin-btn--danger admin-btn--icon"
                                                        title="Delete"
                                                        onClick={() => setDeleteTarget(sub)}
                                                    >
                                                        <i className="fas fa-trash" style={{ fontSize: '0.75rem' }}></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Delete Confirmation */}
            {deleteTarget && (
                <ConfirmModal
                    title="Delete Submission"
                    message={<>Are you sure you want to delete the submission from <strong>{deleteTarget.name}</strong>?</>}
                    onConfirm={handleDelete}
                    onCancel={() => setDeleteTarget(null)}
                    loading={deleting}
                />
            )}

            {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
        </AdminLayout>
    );
}
