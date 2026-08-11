import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout, { API } from './AdminLayout';

export default function AdminDashboard() {
    const [stats, setStats] = useState({ blogs: 0, case_studies: 0, submissions: 0, subscribers: 0 });
    const [recentLeads, setRecentLeads] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [statsRes, leadsRes] = await Promise.all([
                fetch(`${API}/api/admin/stats`),
                fetch(`${API}/api/admin/submissions`)
            ]);
            const statsData = await statsRes.json();
            const leadsData = await leadsRes.json();

            if (statsData.status === 'success') setStats(statsData.data);
            if (leadsData.status === 'success') setRecentLeads(leadsData.data.slice(0, 5));
        } catch (err) {
            console.error('Failed to fetch dashboard data:', err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <AdminLayout title="Dashboard">
                <div className="admin-spinner">
                    <i className="fas fa-circle-notch"></i> Loading dashboard...
                </div>
            </AdminLayout>
        );
    }

    return (
        <AdminLayout title="Dashboard">
            {/* Stats */}
            <div className="admin-stats-grid">
                <div className="admin-stat-card">
                    <div className="admin-stat-icon admin-stat-icon--purple">
                        <i className="fas fa-blog"></i>
                    </div>
                    <div>
                        <div className="admin-stat-value">{stats.blogs}</div>
                        <div className="admin-stat-label">Blog Posts</div>
                    </div>
                </div>
                <div className="admin-stat-card">
                    <div className="admin-stat-icon admin-stat-icon--green">
                        <i className="fas fa-project-diagram"></i>
                    </div>
                    <div>
                        <div className="admin-stat-value">{stats.case_studies}</div>
                        <div className="admin-stat-label">Case Studies</div>
                    </div>
                </div>
                <div className="admin-stat-card">
                    <div className="admin-stat-icon admin-stat-icon--blue">
                        <i className="fas fa-envelope-open-text"></i>
                    </div>
                    <div>
                        <div className="admin-stat-value">{stats.submissions}</div>
                        <div className="admin-stat-label">Lead Submissions</div>
                    </div>
                </div>
                <div className="admin-stat-card">
                    <div className="admin-stat-icon admin-stat-icon--orange">
                        <i className="fas fa-paper-plane"></i>
                    </div>
                    <div>
                        <div className="admin-stat-value">{stats.subscribers}</div>
                        <div className="admin-stat-label">Newsletter Subs</div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="admin-quick-actions">
                <Link to="/admin/blogs" className="admin-quick-action" state={{ openCreate: true }}>
                    <i className="fas fa-plus-circle"></i>
                    <span>New Blog Post</span>
                </Link>
                <Link to="/admin/case-studies" className="admin-quick-action" state={{ openCreate: true }}>
                    <i className="fas fa-plus-circle"></i>
                    <span>New Case Study</span>
                </Link>
                <Link to="/admin/submissions" className="admin-quick-action">
                    <i className="fas fa-inbox"></i>
                    <span>View Leads</span>
                </Link>
                <a href="/" target="_blank" rel="noopener noreferrer" className="admin-quick-action">
                    <i className="fas fa-globe"></i>
                    <span>View Website</span>
                </a>
            </div>

            {/* Recent Leads */}
            <div className="admin-card">
                <div className="admin-card__header">
                    <h3 className="admin-card__title">Recent Leads</h3>
                    <Link to="/admin/submissions" className="admin-btn admin-btn--ghost admin-btn--sm">
                        View All <i className="fas fa-arrow-right" style={{ fontSize: '0.7rem' }}></i>
                    </Link>
                </div>
                <div className="admin-table-wrap">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Company</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentLeads.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="admin-table__empty">
                                        <i className="fas fa-inbox"></i>
                                        No submissions yet
                                    </td>
                                </tr>
                            ) : (
                                recentLeads.map((lead) => (
                                    <tr key={lead.id}>
                                        <td style={{ fontWeight: 600, color: '#fff' }}>{lead.name}</td>
                                        <td>{lead.email}</td>
                                        <td>{lead.company || '—'}</td>
                                        <td style={{ color: 'var(--admin-text-secondary)', fontSize: '0.82rem' }}>
                                            {lead.created_at ? new Date(lead.created_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '—'}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
}
