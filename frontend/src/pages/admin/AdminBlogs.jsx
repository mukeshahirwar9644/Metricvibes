import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AdminLayout, { API, Toast, ConfirmModal } from './AdminLayout';

const emptyBlog = {
    title: '', slug: '', excerpt: '', category_name: 'Analytics',
    image_url: '', author_name: 'Metric Vibes Content Team',
    meta_title: '', meta_description: '', content: ''
};

export default function AdminBlogs() {
    const location = useLocation();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [editingBlog, setEditingBlog] = useState(null);
    const [form, setForm] = useState({ ...emptyBlog });
    const [saving, setSaving] = useState(false);
    const [toast, setToast] = useState(null);
    const [deleteTarget, setDeleteTarget] = useState(null);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        fetchBlogs();
    }, []);

    useEffect(() => {
        if (location.state?.openCreate) {
            openCreateModal();
            window.history.replaceState({}, '');
        }
    }, [location.state]);

    const fetchBlogs = async () => {
        try {
            const res = await fetch(`${API}/api/blogs`);
            const data = await res.json();
            if (data.status === 'success') setBlogs(data.data);
        } catch (err) {
            console.error('Error fetching blogs:', err);
        } finally {
            setLoading(false);
        }
    };

    const openCreateModal = () => {
        setEditingBlog(null);
        setForm({ ...emptyBlog });
        setShowModal(true);
    };

    const openEditModal = (blog) => {
        setEditingBlog(blog);
        setForm({
            title: blog.title || '',
            slug: blog.slug || '',
            excerpt: blog.excerpt || '',
            category_name: blog.category_name || 'Analytics',
            image_url: blog.image_url || '',
            author_name: blog.author_name || '',
            meta_title: blog.meta_title || '',
            meta_description: blog.meta_description || '',
            content: blog.content || ''
        });
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingBlog(null);
        setForm({ ...emptyBlog });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => {
            const updated = { ...prev, [name]: value };
            // Auto-generate slug from title
            if (name === 'title' && !editingBlog) {
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
            const url = editingBlog
                ? `${API}/api/admin/blogs/${editingBlog.id}`
                : `${API}/api/admin/blogs`;

            const token = localStorage.getItem('adminToken');
            const res = await fetch(url, {
                method: editingBlog ? 'PUT' : 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(form)
            });

            const data = await res.json();
            if (data.status === 'success') {
                setToast({ message: editingBlog ? 'Blog updated successfully!' : 'Blog created successfully!', type: 'success' });
                closeModal();
                fetchBlogs();
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
            const res = await fetch(`${API}/api/admin/blogs/${deleteTarget.id}`, { 
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await res.json();
            if (data.status === 'success') {
                setToast({ message: 'Blog deleted successfully!', type: 'success' });
                setDeleteTarget(null);
                fetchBlogs();
            }
        } catch (err) {
            setToast({ message: 'Failed to delete blog', type: 'error' });
        } finally {
            setDeleting(false);
        }
    };

    const filteredBlogs = blogs.filter((b) =>
        b.title?.toLowerCase().includes(search.toLowerCase()) ||
        b.category_name?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <AdminLayout title="Blog Manager">
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
                <div className="admin-search">
                    <i className="fas fa-search admin-search__icon"></i>
                    <input
                        type="text"
                        className="admin-search__input"
                        placeholder="Search blogs..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <button className="admin-btn admin-btn--primary" onClick={openCreateModal}>
                    <i className="fas fa-plus"></i> New Blog Post
                </button>
            </div>

            {/* Blog Table */}
            <div className="admin-card">
                <div className="admin-card__header">
                    <h3 className="admin-card__title">All Blogs ({filteredBlogs.length})</h3>
                </div>
                {loading ? (
                    <div className="admin-spinner"><i className="fas fa-circle-notch"></i> Loading blogs...</div>
                ) : (
                    <div className="admin-table-wrap">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Author</th>
                                    <th>Date</th>
                                    <th style={{ textAlign: 'right' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredBlogs.length === 0 ? (
                                    <tr>
                                        <td colSpan="6" className="admin-table__empty">
                                            <i className="fas fa-blog"></i>
                                            No blog posts found
                                        </td>
                                    </tr>
                                ) : (
                                    filteredBlogs.map((blog, idx) => (
                                        <tr key={blog.id}>
                                            <td style={{ color: 'var(--admin-text-secondary)' }}>{idx + 1}</td>
                                            <td>
                                                <div style={{ fontWeight: 600, color: '#fff', marginBottom: '2px' }} className="admin-truncate">
                                                    {blog.title}
                                                </div>
                                                <div style={{ fontSize: '0.75rem', color: '#475569' }}>/{blog.slug}</div>
                                            </td>
                                            <td>
                                                <span className="admin-badge admin-badge--purple">{blog.category_name || '—'}</span>
                                            </td>
                                            <td className="admin-truncate--sm" style={{ color: 'var(--admin-text-secondary)' }}>
                                                {blog.author_name || '—'}
                                            </td>
                                            <td style={{ color: 'var(--admin-text-secondary)', fontSize: '0.82rem', whiteSpace: 'nowrap' }}>
                                                {blog.published_at
                                                    ? new Date(blog.published_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
                                                    : blog.created_at
                                                        ? new Date(blog.created_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
                                                        : '—'}
                                            </td>
                                            <td>
                                                <div className="admin-actions" style={{ justifyContent: 'flex-end' }}>
                                                    <button
                                                        className="admin-btn admin-btn--ghost admin-btn--icon"
                                                        title="Edit"
                                                        onClick={() => openEditModal(blog)}
                                                    >
                                                        <i className="fas fa-pen" style={{ fontSize: '0.75rem' }}></i>
                                                    </button>
                                                    <button
                                                        className="admin-btn admin-btn--danger admin-btn--icon"
                                                        title="Delete"
                                                        onClick={() => setDeleteTarget(blog)}
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

            {/* Create/Edit Modal */}
            {showModal && (
                <div className="admin-modal-overlay" onClick={closeModal}>
                    <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="admin-modal__header">
                            <h3 className="admin-modal__title">
                                <i className={`fas ${editingBlog ? 'fa-pen' : 'fa-plus-circle'}`} style={{ marginRight: '8px', color: 'var(--admin-accent)' }}></i>
                                {editingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
                            </h3>
                            <button className="admin-modal__close" onClick={closeModal}><i className="fas fa-times"></i></button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="admin-modal__body">
                                <div className="admin-form-grid">
                                    <div className="admin-form-group">
                                        <label className="admin-form-label">Title *</label>
                                        <input type="text" name="title" className="admin-form-input" placeholder="Enter blog title" value={form.title} onChange={handleChange} required />
                                    </div>
                                    <div className="admin-form-group">
                                        <label className="admin-form-label">Slug</label>
                                        <input type="text" name="slug" className="admin-form-input" placeholder="auto-generated-slug" value={form.slug} onChange={handleChange} />
                                        <div className="admin-form-hint">Auto-generated from title. Edit if needed.</div>
                                    </div>
                                    <div className="admin-form-group">
                                        <label className="admin-form-label">Category</label>
                                        <select name="category_name" className="admin-form-select" value={form.category_name} onChange={handleChange}>
                                            <option value="Analytics">Analytics</option>
                                            <option value="Cloud">Cloud</option>
                                            <option value="AI">AI</option>
                                            <option value="MarTech">MarTech</option>
                                            <option value="Data Engineering">Data Engineering</option>
                                            <option value="SEO">SEO</option>
                                            <option value="CRO">CRO</option>
                                            <option value="General">General</option>
                                        </select>
                                    </div>
                                    <div className="admin-form-group">
                                        <label className="admin-form-label">Author</label>
                                        <input type="text" name="author_name" className="admin-form-input" placeholder="Author name" value={form.author_name} onChange={handleChange} />
                                    </div>
                                    <div className="admin-form-group admin-form-grid--full">
                                        <label className="admin-form-label">Image URL</label>
                                        <input type="text" name="image_url" className="admin-form-input" placeholder="/assets/img/blog/image.jpg or https://..." value={form.image_url} onChange={handleChange} />
                                    </div>
                                    <div className="admin-form-group admin-form-grid--full">
                                        <label className="admin-form-label">Excerpt</label>
                                        <textarea name="excerpt" className="admin-form-textarea" style={{ minHeight: '80px' }} placeholder="Short summary for listing pages..." value={form.excerpt} onChange={handleChange}></textarea>
                                    </div>
                                    <div className="admin-form-group admin-form-grid--full">
                                        <label className="admin-form-label">Content (HTML)</label>
                                        <textarea name="content" className="admin-form-textarea" style={{ minHeight: '200px', fontFamily: 'monospace', fontSize: '0.85rem' }} placeholder="<h2>Introduction</h2><p>Write your blog content here...</p>" value={form.content} onChange={handleChange}></textarea>
                                    </div>
                                    <div className="admin-form-group">
                                        <label className="admin-form-label">Meta Title</label>
                                        <input type="text" name="meta_title" className="admin-form-input" placeholder="SEO title" value={form.meta_title} onChange={handleChange} />
                                    </div>
                                    <div className="admin-form-group">
                                        <label className="admin-form-label">Meta Description</label>
                                        <input type="text" name="meta_description" className="admin-form-input" placeholder="SEO description" value={form.meta_description} onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="admin-modal__footer">
                                <button type="button" className="admin-btn admin-btn--ghost" onClick={closeModal}>Cancel</button>
                                <button type="submit" className="admin-btn admin-btn--primary" disabled={saving}>
                                    {saving ? <><i className="fas fa-spinner fa-spin"></i> Saving...</> : <><i className="fas fa-save"></i> {editingBlog ? 'Update Blog' : 'Create Blog'}</>}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Delete Confirmation */}
            {deleteTarget && (
                <ConfirmModal
                    title="Delete Blog Post"
                    message={<>Are you sure you want to delete <strong>"{deleteTarget.title}"</strong>? This action cannot be undone.</>}
                    onConfirm={handleDelete}
                    onCancel={() => setDeleteTarget(null)}
                    loading={deleting}
                />
            )}

            {/* Toast */}
            {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
        </AdminLayout>
    );
}
