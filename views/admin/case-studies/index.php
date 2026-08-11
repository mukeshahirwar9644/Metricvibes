<?php



?>

<div class="admin-card">
    <div class="admin-card__header">
        <h3 class="admin-card__title"><i class="fas fa-rocket"></i> Case Studies</h3>
    </div>

    <?php if (empty($caseStudies)): ?>
        <div style="padding: 40px; text-align: center; color: var(--admin-text-secondary);">
            <p>No case studies found in the database.</p>
        </div>
    <?php else: ?>
        <div class="table-responsive">
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Client</th>
                        <th>Industry</th>
                        <th>Status</th>
                        <th>Created At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($caseStudies as $cs): ?>
                        <tr>
                            <td><strong><?= escape($cs['title']) ?></strong></td>
                            <td><?= escape($cs['client_name'] ?: 'N/A') ?></td>
                            <td><span class="badge bg-primary"><?= escape($cs['industry'] ?: 'General') ?></span></td>
                            <td>
                                <span class="badge <?= $cs['status'] === 'published' ? 'bg-success' : 'bg-warning' ?>">
                                    <?= strtoupper($cs['status']) ?>
                                </span>
                            </td>
                            <td><?= date('M d, Y', strtotime($cs['created_at'])) ?></td>
                            <td>
                                <form action="<?= url('admin/case-studies/delete/' . $cs['id']) ?>" method="POST" onsubmit="return confirm('Delete this case study?');" style="display:inline;">
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
