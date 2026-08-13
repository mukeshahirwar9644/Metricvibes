import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AdminLayout, { API, Toast, ConfirmModal } from './AdminLayout';

const emptyCaseStudy = {
    title: '', slug: '', category: 'MarTech', description: '',
    image_url: 'fas fa-chart-line',
    metric_1_value: '', metric_1_label: '',
    metric_2_value: '', metric_2_label: '',
    metric_3_value: '', metric_3_label: '',
    color1: '#7c3aed', color2: '#c084fc',
    about: '', challenge: '', goals: '', results: '', tools: '',
    testimonial_name: '', testimonial_role: '', testimonial_quote: ''
};

export default function AdminCaseStudies() {
    const location = useLocation();
    const [studies, setStudies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [editingStudy, setEditingStudy] = useState(null);
    const [form, setForm] = useState({ ...emptyCaseStudy });
    const [saving, setSaving] = useState(false);
    const [toast, setToast] = useState(null);
    const [deleteTarget, setDeleteTarget] = useState(null);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        fetchStudies();
    }, []);

    useEffect(() => {
        if (location.state?.openCreate) {
            openCreateModal();
            window.history.replaceState({}, '');
        }
    }, [location.state]);

    const fetchStudies = async () => {
        try {
            const token = localStorage.getItem('adminToken');
            const res = await fetch(`${API}/api/admin/case-studies`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await res.json();
            if (data.status === 'success') setStudies(data.data);
        } catch (err) {
            console.error('Error fetching case studies:', err);
        } finally {
            setLoading(false);
        }
    };

    const openCreateModal = () => {
        setEditingStudy(null);
        setForm({ ...emptyCaseStudy });
        setShowModal(true);
    };

    const openEditModal = (study) => {
        setEditingStudy(study);
        setForm({
            title: study.title || '',
            slug: study.slug || '',
            category: study.category || 'MarTech',
            description: study.description || '',
            image_url: study.image_url || 'fas fa-chart-line',
            metric_1_value: study.metric_1_value || '',
            metric_1_label: study.metric_1_label || '',
            metric_2_value: study.metric_2_value || '',
            metric_2_label: study.metric_2_label || '',
            metric_3_value: study.metric_3_value || '',
            metric_3_label: study.metric_3_label || '',
            color1: study.color1 || '#7c3aed',
            color2: study.color2 || '#c084fc',
            about: study.about || '',
            challenge: study.challenge || '',
            goals: study.goals || '',
            results: study.results || '',
            tools: study.tools || '',
            testimonial_name: study.testimonial_name || '',
            testimonial_role: study.testimonial_role || '',
            testimonial_quote: study.testimonial_quote || ''
        });
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingStudy(null);
        setForm({ ...emptyCaseStudy });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => {
            const updated = { ...prev, [name]: value };
            if (name === 'title' && !editingStudy) {
                updated.slug = value.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
            }
            return updated;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.title.trim()) return;
        setSaving(true);

        try {
            const url = editingStudy
                ? `${API}/api/admin/case-studies/${editingStudy.id}`
                : `${API}/api/admin/case-studies`;

            const token = localStorage.getItem('adminToken');
            const res = await fetch(url, {
                method: editingStudy ? 'PUT' : 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(form)
            });

            const data = await res.json();
            if (data.status === 'success') {
                setToast({ message: editingStudy ? 'Case study updated!' : 'Case study created!', type: 'success' });
                closeModal();
                fetchStudies();
            } else {
                setToast({ message: data.detail || 'Something went wrong', type: 'error' });
            }
        } catch (err) {
            setToast({ message: 'Server connection failed', type: 'error' });
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async () => {
        if (!deleteTarget) return;
        setDeleting(true);
        try {
            const token = localStorage.getItem('adminToken');
            const res = await fetch(`${API}/api/admin/case-studies/${deleteTarget.id}`, { 
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await res.json();
            if (data.status === 'success') {
                setToast({ message: 'Case study deleted!', type: 'success' });
                setDeleteTarget(null);
                fetchStudies();
            }
        } catch (err) {
            setToast({ message: 'Failed to delete', type: 'error' });
        } finally {
            setDeleting(false);
        }
    };

    const filteredStudies = studies.filter((s) =>
        s.title?.toLowerCase().includes(search.toLowerCase()) ||
        s.category?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <AdminLayout title="Case Studies">
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
                <div className="admin-search">
                    <i className="fas fa-search admin-search__icon"></i>
                    <input
                        type="text"
                        className="admin-search__input"
                        placeholder="Search case studies..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <button className="admin-btn admin-btn--primary" onClick={openCreateModal}>
                    <i className="fas fa-plus"></i> New Case Study
                </button>
            </div>

            {/* Table */}
            <div className="admin-card">
                <div className="admin-card__header">
                    <h3 className="admin-card__title">All Case Studies ({filteredStudies.length})</h3>
                </div>
                {loading ? (
                    <div className="admin-spinner"><i className="fas fa-circle-notch"></i> Loading...</div>
                ) : (
                    <div className="admin-table-wrap">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Metrics</th>
                                    <th>Colors</th>
                                    <th style={{ textAlign: 'right' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredStudies.length === 0 ? (
                                    <tr>
                                        <td colSpan="6" className="admin-table__empty">
                                            <i className="fas fa-project-diagram"></i>
                                            No case studies found
                                        </td>
                                    </tr>
                                ) : (
                                    filteredStudies.map((study, idx) => (
                                        <tr key={study.id}>
                                            <td style={{ color: 'var(--admin-text-secondary)' }}>{idx + 1}</td>
                                            <td>
                                                <div style={{ fontWeight: 600, color: '#fff' }} className="admin-truncate">{study.title}</div>
                                                <div style={{ fontSize: '0.75rem', color: '#475569' }}>/{study.slug}</div>
                                            </td>
                                            <td>
                                                <span className="admin-badge admin-badge--green">{study.category || '—'}</span>
                                            </td>
                                            <td style={{ fontSize: '0.82rem' }}>
                                                {study.metric_1_value && (
                                                    <span className="admin-badge admin-badge--blue" style={{ marginRight: '4px', marginBottom: '4px' }}>
                                                        {study.metric_1_value} {study.metric_1_label}
                                                    </span>
                                                )}
                                                {study.metric_2_value && (
                                                    <span className="admin-badge admin-badge--orange" style={{ marginRight: '4px', marginBottom: '4px' }}>
                                                        {study.metric_2_value} {study.metric_2_label}
                                                    </span>
                                                )}
                                                {study.metric_3_value && (
                                                    <span className="admin-badge admin-badge--purple" style={{ marginBottom: '4px' }}>
                                                        {study.metric_3_value} {study.metric_3_label}
                                                    </span>
                                                )}
                                            </td>
                                            <td>
                                                <span className="admin-color-swatch" style={{ backgroundColor: study.color1 }}></span>
                                                <span className="admin-color-swatch" style={{ backgroundColor: study.color2 }}></span>
                                            </td>
                                            <td>
                                                <div className="admin-actions" style={{ justifyContent: 'flex-end' }}>
                                                    <button className="admin-btn admin-btn--ghost admin-btn--icon" title="Edit" onClick={() => openEditModal(study)}>
                                                        <i className="fas fa-pen" style={{ fontSize: '0.75rem' }}></i>
                                                    </button>
                                                    <button className="admin-btn admin-btn--danger admin-btn--icon" title="Delete" onClick={() => setDeleteTarget(study)}>
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

            {/* Create/Edit Modal */}
            {showModal && (
                <div className="admin-modal-overlay" onClick={closeModal}>
                    <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="admin-modal__header">
                            <h3 className="admin-modal__title">
                                <i className={`fas ${editingStudy ? 'fa-pen' : 'fa-plus-circle'}`} style={{ marginRight: '8px', color: 'var(--admin-accent)' }}></i>
                                {editingStudy ? 'Edit Case Study' : 'Create New Case Study'}
                            </h3>
                            <button className="admin-modal__close" onClick={closeModal}><i className="fas fa-times"></i></button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="admin-modal__body">
                                <div className="admin-form-grid">
                                    <div className="admin-form-group">
                                        <label className="admin-form-label">Title *</label>
                                        <input type="text" name="title" className="admin-form-input" placeholder="Case study title" value={form.title} onChange={handleChange} required />
                                    </div>
                                    <div className="admin-form-group">
                                        <label className="admin-form-label">Slug</label>
                                        <input type="text" name="slug" className="admin-form-input" placeholder="auto-generated" value={form.slug} onChange={handleChange} />
                                    </div>
                                    <div className="admin-form-group">
                                        <label className="admin-form-label">Category</label>
                                        <select name="category" className="admin-form-select" value={form.category} onChange={handleChange}>
                                            <option value="MarTech">MarTech</option>
                                            <option value="Analytics">Analytics</option>
                                            <option value="Cloud">Cloud</option>
                                            <option value="AI/ML">AI/ML</option>
                                            <option value="Data Engineering">Data Engineering</option>
                                            <option value="CRO">CRO</option>
                                        </select>
                                    </div>
                                    <div className="admin-form-group">
                                        <label className="admin-form-label">Icon (Font Awesome class)</label>
                                        <input type="text" name="image_url" className="admin-form-input" placeholder="fas fa-chart-line" value={form.image_url} onChange={handleChange} />
                                        <div className="admin-form-hint">e.g. fas fa-chart-line, fas fa-cloud, fas fa-robot</div>
                                    </div>
                                    <div className="admin-form-group admin-form-grid--full">
                                        <label className="admin-form-label">Description</label>
                                        <textarea name="description" className="admin-form-textarea" placeholder="Brief description of the case study..." value={form.description} onChange={handleChange}></textarea>
                                    </div>

                                    {/* Metrics */}
                                    <div className="admin-form-group">
                                        <label className="admin-form-label">Metric 1 Value</label>
                                        <input type="text" name="metric_1_value" className="admin-form-input" placeholder="e.g. 150%" value={form.metric_1_value} onChange={handleChange} />
                                    </div>
                                    <div className="admin-form-group">
                                        <label className="admin-form-label">Metric 1 Label</label>
                                        <input type="text" name="metric_1_label" className="admin-form-input" placeholder="e.g. Revenue Growth" value={form.metric_1_label} onChange={handleChange} />
                                    </div>
                                    <div className="admin-form-group">
                                        <label className="admin-form-label">Metric 2 Value</label>
                                        <input type="text" name="metric_2_value" className="admin-form-input" placeholder="e.g. 3.5x" value={form.metric_2_value} onChange={handleChange} />
                                    </div>
                                    <div className="admin-form-group">
                                        <label className="admin-form-label">Metric 2 Label</label>
                                        <input type="text" name="metric_2_label" className="admin-form-input" placeholder="e.g. ROI" value={form.metric_2_label} onChange={handleChange} />
                                    </div>
                                    <div className="admin-form-group">
                                        <label className="admin-form-label">Metric 3 Value</label>
                                        <input type="text" name="metric_3_value" className="admin-form-input" placeholder="e.g. 40ms" value={form.metric_3_value} onChange={handleChange} />
                                    </div>
                                    <div className="admin-form-group">
                                        <label className="admin-form-label">Metric 3 Label</label>
                                        <input type="text" name="metric_3_label" className="admin-form-input" placeholder="e.g. Response Time" value={form.metric_3_label} onChange={handleChange} />
                                    </div>

                                    {/* Colors */}
                                    <div className="admin-form-group">
                                        <label className="admin-form-label">Primary Color</label>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <input type="color" name="color1" className="admin-form-color" value={form.color1} onChange={handleChange} />
                                            <input type="text" name="color1" className="admin-form-input" style={{ flex: 1 }} value={form.color1} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="admin-form-group">
                                        <label className="admin-form-label">Secondary Color</label>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <input type="color" name="color2" className="admin-form-color" value={form.color2} onChange={handleChange} />
                                            <input type="text" name="color2" className="admin-form-input" style={{ flex: 1 }} value={form.color2} onChange={handleChange} />
                                        </div>
                                    </div>

                                    {/* --- CASE STUDY BRIEF DETAILS --- */}
                                    <div className="admin-form-group admin-form-grid--full" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px', marginTop: '8px' }}>
                                        <h4 style={{ color: '#7c3aed', fontSize: '0.95rem', fontWeight: '700', margin: '0 0 12px' }}>
                                            <i className="fas fa-file-alt" style={{ marginRight: '6px' }}></i> Case Study Brief Details
                                        </h4>
                                    </div>

                                    <div className="admin-form-group admin-form-grid--full">
                                        <label className="admin-form-label">About Client (Background Brief)</label>
                                        <textarea name="about" className="admin-form-textarea" rows="3" placeholder="Overview about the client business and background..." value={form.about} onChange={handleChange}></textarea>
                                    </div>

                                    <div className="admin-form-group admin-form-grid--full">
                                        <label className="admin-form-label">The Challenge / Problem Statement</label>
                                        <textarea name="challenge" className="admin-form-textarea" rows="3" placeholder="Key challenges and issues the client was facing..." value={form.challenge} onChange={handleChange}></textarea>
                                    </div>

                                    <div className="admin-form-group admin-form-grid--full">
                                        <label className="admin-form-label">Project Goals (One goal per line)</label>
                                        <textarea name="goals" className="admin-form-textarea" rows="3" placeholder="Goal 1&#10;Goal 2&#10;Goal 3" value={form.goals} onChange={handleChange}></textarea>
                                    </div>

                                    <div className="admin-form-group admin-form-grid--full">
                                        <label className="admin-form-label">Key Results (One result per line)</label>
                                        <textarea name="results" className="admin-form-textarea" rows="3" placeholder="Result 1&#10;Result 2&#10;Result 3" value={form.results} onChange={handleChange}></textarea>
                                    </div>

                                    <div className="admin-form-group admin-form-grid--full">
                                        <label className="admin-form-label">Tools & Stack Used (Comma separated)</label>
                                        <input type="text" name="tools" className="admin-form-input" placeholder="e.g. ga4, mixpanel, gtm, looker-studio, android" value={form.tools} onChange={handleChange} />
                                    </div>

                                    {/* Testimonial */}
                                    <div className="admin-form-group">
                                        <label className="admin-form-label">Testimonial Client Name</label>
                                        <input type="text" name="testimonial_name" className="admin-form-input" placeholder="e.g. Eugene Paik" value={form.testimonial_name} onChange={handleChange} />
                                    </div>
                                    <div className="admin-form-group">
                                        <label className="admin-form-label">Client Role / Designation</label>
                                        <input type="text" name="testimonial_role" className="admin-form-input" placeholder="e.g. VP of Product - Retail Brand" value={form.testimonial_role} onChange={handleChange} />
                                    </div>
                                    <div className="admin-form-group admin-form-grid--full">
                                        <label className="admin-form-label">Client Quote / Testimonial</label>
                                        <textarea name="testimonial_quote" className="admin-form-textarea" rows="2" placeholder="Client review or feedback quote..." value={form.testimonial_quote} onChange={handleChange}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="admin-modal__footer">
                                <button type="button" className="admin-btn admin-btn--ghost" onClick={closeModal}>Cancel</button>
                                <button type="submit" className="admin-btn admin-btn--primary" disabled={saving}>
                                    {saving ? <><i className="fas fa-spinner fa-spin"></i> Saving...</> : <><i className="fas fa-save"></i> {editingStudy ? 'Update' : 'Create'}</>}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Delete Confirmation */}
            {deleteTarget && (
                <ConfirmModal
                    title="Delete Case Study"
                    message={<>Are you sure you want to delete <strong>"{deleteTarget.title}"</strong>? This action cannot be undone.</>}
                    onConfirm={handleDelete}
                    onCancel={() => setDeleteTarget(null)}
                    loading={deleting}
                />
            )}

            {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
        </AdminLayout>
    );
}
