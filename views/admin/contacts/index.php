<?php



?>

<div class="admin-card">
    <div class="admin-card__header">
        <h3 class="admin-card__title"><i class="fas fa-inbox"></i> All Inquiries</h3>
    </div>

    <?php if (empty($messages)): ?>
        <div style="padding: 40px; text-align: center; color: var(--admin-text-secondary);">
            <p>No messages found in the database.</p>
        </div>
    <?php else: ?>
        <div class="table-responsive">
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Email & Phone</th>
                        <th>Service Requested</th>
                        <th>Budget</th>
                        <th>Message</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($messages as $msg): ?>
                        <tr>
                            <td style="white-space: nowrap;"><?= date('M d, Y H:i', strtotime($msg['created_at'])) ?></td>
                            <td><strong><?= escape($msg['name']) ?></strong><br><small><?= escape($msg['company'] ?: '') ?></small></td>
                            <td>
                                <div><a href="mailto:<?= escape($msg['email']) ?>" style="color: #6C63FF;"><?= escape($msg['email']) ?></a></div>
                                <small style="color: var(--admin-text-secondary);"><?= escape($msg['phone'] ?: '') ?></small>
                            </td>
                            <td><?= escape($msg['service'] ?: 'N/A') ?></td>
                            <td><span class="badge bg-secondary"><?= escape($msg['budget'] ?: 'N/A') ?></span></td>
                            <td style="max-width: 300px;"><?= nl2br(escape($msg['message'])) ?></td>
                            <td>
                                <form action="<?= url('admin/contacts/delete/' . $msg['id']) ?>" method="POST" onsubmit="return confirm('Delete this message?');" style="display:inline;">
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
