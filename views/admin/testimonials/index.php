<?php



?>

<div class="admin-card">
    <div class="admin-card__header">
        <h3 class="admin-card__title"><i class="fas fa-quote-left"></i> Client Testimonials</h3>
    </div>

    <?php if (empty($testimonials)): ?>
        <div style="padding: 40px; text-align: center; color: var(--admin-text-secondary);">
            <p>No testimonials found in the database.</p>
        </div>
    <?php else: ?>
        <div class="table-responsive">
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>Client Name</th>
                        <th>Company & Title</th>
                        <th>Rating</th>
                        <th>Quote</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($testimonials as $t): ?>
                        <tr>
                            <td><strong><?= escape($t['client_name']) ?></strong> <?= escape($t['country'] ?: '') ?></td>
                            <td><?= escape($t['client_title'] ?: '') ?><br><small style="color: var(--admin-text-secondary);"><?= escape($t['company'] ?: '') ?></small></td>
                            <td><span style="color: #F59E0B;"><?= str_repeat('★', (int)$t['rating']) ?></span></td>
                            <td style="max-width: 300px;"><?= escape($t['quote']) ?></td>
                            <td><span class="badge bg-success"><?= strtoupper($t['status']) ?></span></td>
                            <td>
                                <form action="<?= url('admin/testimonials/delete/' . $t['id']) ?>" method="POST" onsubmit="return confirm('Delete this testimonial?');" style="display:inline;">
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
