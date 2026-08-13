import React, { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';
import { API_BASE_URL } from '../../config/api';

export default function AdminCareers() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingJob, setEditingJob] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        department: 'Engineering',
        location: 'Remote',
        employment_type: 'Full-time',
        description: '',
        requirements: '',
        is_active: 1
    });
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');

    const token = localStorage.getItem('adminToken');

    const fetchJobs = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${API_BASE_URL}/api/admin/careers`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await res.json();
            if (data.status === 'success') {
                setJobs(data.data || []);
            }
        } catch (err) {
            console.error('Failed to fetch careers:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    const handleOpenModal = (job = null) => {
        if (job) {
            setEditingJob(job);
            setFormData({
                title: job.title || '',
                department: job.department || 'Engineering',
                location: job.location || 'Remote',
                employment_type: job.employment_type || 'Full-time',
                description: job.description || '',
                requirements: job.requirements || '',
                is_active: job.is_active !== undefined ? job.is_active : 1
            });
        } else {
            setEditingJob(null);
            setFormData({
                title: '',
                department: 'Engineering',
                location: 'Remote',
                employment_type: 'Full-time',
                description: '',
                requirements: '',
                is_active: 1
            });
        }
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingJob(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            const url = editingJob 
                ? `${API_BASE_URL}/api/admin/careers/${editingJob.id}` 
                : `${API_BASE_URL}/api/admin/careers`;
            const method = editingJob ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            if (res.ok && data.status === 'success') {
                setMessage(editingJob ? 'Job updated successfully!' : 'New job opening added successfully!');
                fetchJobs();
                handleCloseModal();
                setTimeout(() => setMessage(''), 4000);
            } else {
                alert(data.detail || 'Failed to save job opening');
            }
        } catch (err) {
            console.error('Error saving career:', err);
            alert('An error occurred while saving.');
        } finally {
            setSaving(false);
        }
    };

    const handleToggleStatus = async (jobId) => {
        try {
            const res = await fetch(`${API_BASE_URL}/api/admin/careers/${jobId}/toggle-status`, {
                method: 'PATCH',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await res.json();
            if (data.status === 'success') {
                fetchJobs();
            }
        } catch (err) {
            console.error('Error toggling job status:', err);
        }
    };

    const handleDelete = async (jobId, title) => {
        if (!window.confirm(`Are you sure you want to delete "${title}"?`)) return;
        try {
            const res = await fetch(`${API_BASE_URL}/api/admin/careers/${jobId}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await res.json();
            if (data.status === 'success') {
                setMessage('Job opening deleted successfully!');
                fetchJobs();
                setTimeout(() => setMessage(''), 4000);
            }
        } catch (err) {
            console.error('Error deleting career:', err);
        }
    };

    const filteredJobs = jobs.filter(j => 
        (j.title && j.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (j.department && j.department.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (j.location && j.location.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <AdminLayout title="Careers Management">
            {/* Header Actions */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '800', margin: 0, color: 'var(--admin-text)' }}>
                        Job Openings ({jobs.length})
                    </h2>
                    <p style={{ fontSize: '0.85rem', color: 'var(--admin-muted)', margin: '4px 0 0' }}>
                        Manage active and inactive career opportunities displayed on the website.
                    </p>
                </div>
                <button 
                    onClick={() => handleOpenModal()} 
                    style={{
                        background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
                        color: '#fff',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        fontWeight: '700',
                        fontSize: '0.88rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 4px 14px rgba(124, 58, 237, 0.35)'
                    }}
                >
                    <i className="fas fa-plus"></i> Add New Job Opening
                </button>
            </div>

            {message && (
                <div style={{ padding: '12px 18px', borderRadius: '8px', background: 'rgba(34, 197, 94, 0.15)', border: '1px solid rgba(34, 197, 94, 0.3)', color: '#22c55e', fontSize: '0.88rem', fontWeight: '600', marginBottom: '20px' }}>
                    <i className="fas fa-check-circle" style={{ marginRight: '8px' }}></i> {message}
                </div>
            )}

            {/* Search Filter */}
            <div style={{ marginBottom: '20px' }}>
                <input 
                    type="text" 
                    placeholder="Search by Job Title, Department, or Location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        width: '100%',
                        maxWidth: '420px',
                        padding: '10px 16px',
                        borderRadius: '8px',
                        border: '1px solid var(--admin-border)',
                        background: 'var(--admin-card-bg)',
                        color: 'var(--admin-text)',
                        fontSize: '0.88rem'
                    }}
                />
            </div>

            {/* Jobs List / Table */}
            {loading ? (
                <div style={{ padding: '40px', textAlign: 'center', color: 'var(--admin-muted)' }}>
                    <i className="fas fa-spinner fa-spin fa-2x"></i>
                    <p style={{ marginTop: '10px' }}>Loading job listings...</p>
                </div>
            ) : filteredJobs.length === 0 ? (
                <div style={{ padding: '50px', textAlign: 'center', background: 'var(--admin-card-bg)', borderRadius: '12px', border: '1px solid var(--admin-border)' }}>
                    <i className="fas fa-briefcase fa-3x" style={{ color: 'var(--admin-muted)', marginBottom: '16px' }}></i>
                    <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--admin-text)' }}>No Job Openings Found</h3>
                    <p style={{ color: 'var(--admin-muted)', fontSize: '0.86rem' }}>Click "+ Add New Job Opening" to post a role.</p>
                </div>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '20px' }}>
                    {filteredJobs.map(job => (
                        <div 
                            key={job.id}
                            style={{
                                background: 'var(--admin-card-bg)',
                                borderRadius: '12px',
                                border: `1px solid ${job.is_active ? 'var(--admin-border)' : 'rgba(239, 68, 68, 0.3)'}`,
                                padding: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                opacity: job.is_active ? 1 : 0.75,
                                position: 'relative'
                            }}
                        >
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                                    <span style={{ 
                                        padding: '4px 10px', 
                                        borderRadius: '6px', 
                                        fontSize: '0.75rem', 
                                        fontWeight: '700', 
                                        background: 'rgba(124, 58, 237, 0.15)', 
                                        color: '#a78bfa' 
                                    }}>
                                        {job.department || 'General'}
                                    </span>

                                    <button 
                                        onClick={() => handleToggleStatus(job.id)}
                                        style={{
                                            padding: '4px 10px',
                                            borderRadius: '6px',
                                            border: 'none',
                                            fontSize: '0.75rem',
                                            fontWeight: '700',
                                            cursor: 'pointer',
                                            background: job.is_active ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                                            color: job.is_active ? '#22c55e' : '#ef4444'
                                        }}
                                        title="Click to toggle status"
                                    >
                                        <i className={`fas fa-circle`} style={{ fontSize: '0.5rem', marginRight: '5px' }}></i>
                                        {job.is_active ? 'Active' : 'Inactive'}
                                    </button>
                                </div>

                                <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--admin-text)', margin: '8px 0 6px' }}>
                                    {job.title}
                                </h3>

                                <div style={{ display: 'flex', gap: '12px', fontSize: '0.8rem', color: 'var(--admin-muted)', marginBottom: '12px' }}>
                                    <span><i className="fas fa-map-marker-alt" style={{ marginRight: '4px' }}></i> {job.location}</span>
                                    <span><i className="fas fa-clock" style={{ marginRight: '4px' }}></i> {job.employment_type}</span>
                                </div>

                                {job.description && (
                                    <p style={{ fontSize: '0.84rem', color: 'var(--admin-muted)', lineHeight: '1.45', marginBottom: '16px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                        {job.description}
                                    </p>
                                )}
                            </div>

                            <div style={{ display: 'flex', gap: '10px', borderTop: '1px solid var(--admin-border)', paddingTop: '14px', marginTop: '10px' }}>
                                <button 
                                    onClick={() => handleOpenModal(job)}
                                    style={{
                                        flex: 1,
                                        padding: '8px',
                                        borderRadius: '6px',
                                        border: '1px solid var(--admin-border)',
                                        background: 'rgba(255,255,255,0.04)',
                                        color: 'var(--admin-text)',
                                        fontWeight: '600',
                                        fontSize: '0.82rem',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <i className="fas fa-edit" style={{ marginRight: '4px' }}></i> Edit
                                </button>
                                <button 
                                    onClick={() => handleDelete(job.id, job.title)}
                                    style={{
                                        padding: '8px 14px',
                                        borderRadius: '6px',
                                        border: '1px solid rgba(239, 68, 68, 0.3)',
                                        background: 'rgba(239, 68, 68, 0.1)',
                                        color: '#ef4444',
                                        fontWeight: '600',
                                        fontSize: '0.82rem',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <i className="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Modal for Add / Edit Job Opening */}
            {isModalOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.7)',
                    backdropFilter: 'blur(5px)',
                    zIndex: 2000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px'
                }}>
                    <div style={{
                        background: 'var(--admin-card-bg)',
                        border: '1px solid var(--admin-border)',
                        borderRadius: '16px',
                        width: '100%',
                        maxWidth: '650px',
                        maxHeight: '90vh',
                        overflowY: 'auto',
                        padding: '28px',
                        boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                            <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '800', color: 'var(--admin-text)' }}>
                                {editingJob ? 'Edit Job Opening' : 'Post New Job Opening'}
                            </h3>
                            <button onClick={handleCloseModal} style={{ background: 'none', border: 'none', color: 'var(--admin-muted)', fontSize: '1.2rem', cursor: 'pointer' }}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>

                        <form onSubmit={handleSubmit}>
                            {/* Job Title */}
                            <div style={{ marginBottom: '16px' }}>
                                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', color: 'var(--admin-text)', marginBottom: '6px' }}>
                                    Job Title <span style={{ color: '#ef4444' }}>*</span>
                                </label>
                                <input 
                                    type="text" 
                                    required
                                    placeholder="e.g. Senior Data Engineer"
                                    value={formData.title}
                                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                                    style={{
                                        width: '100%',
                                        padding: '10px 14px',
                                        borderRadius: '8px',
                                        border: '1px solid var(--admin-border)',
                                        background: 'rgba(255,255,255,0.03)',
                                        color: 'var(--admin-text)',
                                        fontSize: '0.88rem'
                                    }}
                                />
                            </div>

                            {/* Department & Location Grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', color: 'var(--admin-text)', marginBottom: '6px' }}>
                                        Department
                                    </label>
                                    <input 
                                        type="text" 
                                        placeholder="e.g. Engineering, Analytics, Research"
                                        value={formData.department}
                                        onChange={(e) => setFormData({...formData, department: e.target.value})}
                                        style={{
                                            width: '100%',
                                            padding: '10px 14px',
                                            borderRadius: '8px',
                                            border: '1px solid var(--admin-border)',
                                            background: 'rgba(255,255,255,0.03)',
                                            color: 'var(--admin-text)',
                                            fontSize: '0.88rem'
                                        }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', color: 'var(--admin-text)', marginBottom: '6px' }}>
                                        Location
                                    </label>
                                    <input 
                                        type="text" 
                                        placeholder="e.g. Remote, Hybrid, Noida"
                                        value={formData.location}
                                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                                        style={{
                                            width: '100%',
                                            padding: '10px 14px',
                                            borderRadius: '8px',
                                            border: '1px solid var(--admin-border)',
                                            background: 'rgba(255,255,255,0.03)',
                                            color: 'var(--admin-text)',
                                            fontSize: '0.88rem'
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Employment Type & Status Grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', color: 'var(--admin-text)', marginBottom: '6px' }}>
                                        Employment Type
                                    </label>
                                    <input 
                                        type="text" 
                                        placeholder="e.g. Full-time, Internship (6 months)"
                                        value={formData.employment_type}
                                        onChange={(e) => setFormData({...formData, employment_type: e.target.value})}
                                        style={{
                                            width: '100%',
                                            padding: '10px 14px',
                                            borderRadius: '8px',
                                            border: '1px solid var(--admin-border)',
                                            background: 'rgba(255,255,255,0.03)',
                                            color: 'var(--admin-text)',
                                            fontSize: '0.88rem'
                                        }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', color: 'var(--admin-text)', marginBottom: '6px' }}>
                                        Active Status
                                    </label>
                                    <select
                                        value={formData.is_active}
                                        onChange={(e) => setFormData({...formData, is_active: parseInt(e.target.value)})}
                                        style={{
                                            width: '100%',
                                            padding: '10px 14px',
                                            borderRadius: '8px',
                                            border: '1px solid var(--admin-border)',
                                            background: 'var(--admin-card-bg)',
                                            color: 'var(--admin-text)',
                                            fontSize: '0.88rem'
                                        }}
                                    >
                                        <option value={1}>Active (Visible on website)</option>
                                        <option value={0}>Inactive (Hidden)</option>
                                    </select>
                                </div>
                            </div>

                            {/* Short Description */}
                            <div style={{ marginBottom: '16px' }}>
                                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', color: 'var(--admin-text)', marginBottom: '6px' }}>
                                    Job Overview / Description
                                </label>
                                <textarea 
                                    rows="3"
                                    placeholder="Describe the job overview, key purpose, and team context..."
                                    value={formData.description}
                                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                                    style={{
                                        width: '100%',
                                        padding: '10px 14px',
                                        borderRadius: '8px',
                                        border: '1px solid var(--admin-border)',
                                        background: 'rgba(255,255,255,0.03)',
                                        color: 'var(--admin-text)',
                                        fontSize: '0.88rem'
                                    }}
                                ></textarea>
                            </div>

                            {/* Requirements / Responsibilities */}
                            <div style={{ marginBottom: '24px' }}>
                                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', color: 'var(--admin-text)', marginBottom: '6px' }}>
                                    Requirements & Responsibilities
                                </label>
                                <textarea 
                                    rows="4"
                                    placeholder="Key requirements, tools (GCP, GA4, BigQuery, Python), and expectations..."
                                    value={formData.requirements}
                                    onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                                    style={{
                                        width: '100%',
                                        padding: '10px 14px',
                                        borderRadius: '8px',
                                        border: '1px solid var(--admin-border)',
                                        background: 'rgba(255,255,255,0.03)',
                                        color: 'var(--admin-text)',
                                        fontSize: '0.88rem'
                                    }}
                                ></textarea>
                            </div>

                            {/* Modal Footer Buttons */}
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                                <button 
                                    type="button" 
                                    onClick={handleCloseModal}
                                    style={{
                                        padding: '10px 18px',
                                        borderRadius: '8px',
                                        border: '1px solid var(--admin-border)',
                                        background: 'transparent',
                                        color: 'var(--admin-text)',
                                        fontWeight: '600',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit"
                                    disabled={saving}
                                    style={{
                                        padding: '10px 22px',
                                        borderRadius: '8px',
                                        border: 'none',
                                        background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
                                        color: '#fff',
                                        fontWeight: '700',
                                        cursor: 'pointer',
                                        boxShadow: '0 4px 14px rgba(124, 58, 237, 0.35)'
                                    }}
                                >
                                    {saving ? 'Saving...' : editingJob ? 'Update Job' : 'Post Job Opening'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}
