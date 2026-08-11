<?php



?>

<!-- Stats Grid -->
<div class="admin-stats-grid">
    <div class="admin-stat-card">
        <div class="admin-stat-icon"><i class="fas fa-envelope"></i></div>
        <div>
            <div class="admin-stat-value"><?= number_format($totalMessages) ?></div>
            <div class="admin-stat-label">Contact Inquiries</div>
        </div>
    </div>

    <div class="admin-stat-card">
        <div class="admin-stat-icon" style="color: #10B981;"><i class="fas fa-newspaper"></i></div>
        <div>
            <div class="admin-stat-value"><?= number_format($totalBlogs) ?></div>
            <div class="admin-stat-label">Published Blogs</div>
        </div>
    </div>

    <div class="admin-stat-card">
        <div class="admin-stat-icon" style="color: #F59E0B;"><i class="fas fa-rocket"></i></div>
        <div>
            <div class="admin-stat-value"><?= number_format($totalCaseStudies) ?></div>
            <div class="admin-stat-label">Case Studies</div>
        </div>
    </div>

    <div class="admin-stat-card">
        <div class="admin-stat-icon" style="color: #EC4899;"><i class="fas fa-users"></i></div>
        <div>
            <div class="admin-stat-value"><?= number_format($totalSubscribers) ?></div>
            <div class="admin-stat-label">Newsletter Subs</div>
        </div>
    </div>
</div>

<!-- Recent Messages Table -->
<div class="admin-card">
    <div class="admin-card__header">
        <h3 class="admin-card__title"><i class="fas fa-inbox"></i> Recent Inquiries</h3>
        <a href="<?= url('admin/contacts') ?>" class="btn btn-sm btn-outline-light">View All Messages</a>
    </div>

    <?php if (empty($recentMessages)): ?>
        <div style="padding: 40px; text-align: center; color: var(--admin-text-secondary);">
            <i class="fas fa-inbox" style="font-size: 2rem; margin-bottom: 12px; opacity: 0.5;"></i>
            <p>No contact messages received yet.</p>
        </div>
    <?php else: ?>
        <div class="table-responsive">
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Service</th>
                        <th>Budget</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($recentMessages as $msg): ?>
                        <tr>
                            <td><?= date('M d, Y H:i', strtotime($msg['created_at'])) ?></td>
                            <td><strong><?= escape($msg['name']) ?></strong></td>
                            <td><?= escape($msg['email']) ?></td>
                            <td><?= escape($msg['service'] ?: 'N/A') ?></td>
                            <td><?= escape($msg['budget'] ?: 'N/A') ?></td>
                            <td>
                                <span class="badge <?= $msg['status'] === 'new' ? 'bg-danger' : 'bg-secondary' ?>">
                                    <?= strtoupper($msg['status']) ?>
                                </span>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    <?php endif; ?>
</div>
