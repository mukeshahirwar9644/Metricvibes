<?php



?>

<div class="d-flex justify-content-between align-items-center mb-4">
    <h2 class="h4 text-white mb-0">Blog Posts</h2>
    <a href="<?= url('admin/blogs/create') ?>" class="btn btn-sm btn-primary">
        <i class="fas fa-plus"></i> New Blog Post
    </a>
</div>

<div class="admin-card">
    <?php if (empty($blogs)): ?>
        <div style="padding: 40px; text-align: center; color: var(--admin-text-secondary);">
            <p>No blog posts found. Click "New Blog Post" to publish your first article.</p>
        </div>
    <?php else: ?>
        <div class="table-responsive">
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Views</th>
                        <th>Created At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($blogs as $b): ?>
                        <tr>
                            <td><strong><?= escape($b['title']) ?></strong><br><small style="color: var(--admin-text-secondary);"><?= escape($b['slug']) ?></small></td>
                            <td><span class="badge bg-info text-dark"><?= escape($b['category'] ?: 'General') ?></span></td>
                            <td>
                                <span class="badge <?= $b['status'] === 'published' ? 'bg-success' : 'bg-warning' ?>">
                                    <?= strtoupper($b['status']) ?>
                                </span>
                            </td>
                            <td><?= number_format($b['views']) ?></td>
                            <td><?= date('M d, Y', strtotime($b['created_at'])) ?></td>
                            <td>
                                <form action="<?= url('admin/blogs/delete/' . $b['id']) ?>" method="POST" onsubmit="return confirm('Delete this blog post?');" style="display:inline;">
                                    <?= csrf_field() ?>
                                    <button type="submit" class="btn btn-sm btn-outline-danger" title="Delete">
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </form>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    <?php endif; ?>
</div>
