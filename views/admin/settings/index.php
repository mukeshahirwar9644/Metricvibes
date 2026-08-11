<?php



?>

<div class="admin-card">
    <div class="admin-card__header">
        <h3 class="admin-card__title"><i class="fas fa-cog"></i> Global Site Settings</h3>
    </div>

    <?php if (Session::hasFlash('success')): ?>
        <div style="margin: 20px 24px 0; padding: 12px 16px; background: rgba(16,185,129,0.15); border: 1px solid #10B981; color: #6EE7B7; border-radius: 8px;">
            <i class="fas fa-check-circle"></i> <?= escape(Session::getFlash('success')) ?>
        </div>
    <?php endif; ?>

    <form action="<?= url('admin/settings/update') ?>" method="POST" style="padding: 24px;">
        <?= csrf_field() ?>

        <div class="row">
            <div class="col-md-6 mb-3">
                <label class="admin-form-label">Website Name</label>
                <input type="text" name="site_name" class="admin-form-input" value="<?= escape($settings['site_name'] ?? SITE_NAME) ?>" required>
            </div>

            <div class="col-md-6 mb-3">
                <label class="admin-form-label">Website Tagline</label>
                <input type="text" name="site_tagline" class="admin-form-input" value="<?= escape($settings['site_tagline'] ?? SITE_TAGLINE) ?>">
            </div>
        </div>

        <div class="row">
            <div class="col-md-6 mb-3">
                <label class="admin-form-label">Contact Email</label>
                <input type="email" name="site_email" class="admin-form-input" value="<?= escape($settings['site_email'] ?? SITE_EMAIL) ?>" required>
            </div>

            <div class="col-md-6 mb-3">
                <label class="admin-form-label">Contact Phone</label>
                <input type="text" name="site_phone" class="admin-form-input" value="<?= escape($settings['site_phone'] ?? SITE_PHONE) ?>">
            </div>
        </div>

        <div class="mb-3">
            <label class="admin-form-label">Office Address</label>
            <textarea name="site_address" class="admin-form-input" rows="2"><?= escape($settings['site_address'] ?? SITE_ADDRESS) ?></textarea>
        </div>

        <div class="row">
            <div class="col-md-6 mb-3">
                <label class="admin-form-label">WhatsApp Support Number (digits with country code)</label>
                <input type="text" name="whatsapp_number" class="admin-form-input" value="<?= escape($settings['whatsapp_number'] ?? WHATSAPP_NUMBER) ?>">
            </div>

            <div class="col-md-6 mb-3">
                <label class="admin-form-label">LinkedIn URL</label>
                <input type="text" name="social_linkedin" class="admin-form-input" value="<?= escape($settings['social_linkedin'] ?? SOCIAL_LINKEDIN) ?>">
            </div>
        </div>

        <div class="row">
            <div class="col-md-6 mb-3">
                <label class="admin-form-label">Twitter / X URL</label>
                <input type="text" name="social_twitter" class="admin-form-input" value="<?= escape($settings['social_twitter'] ?? SOCIAL_TWITTER) ?>">
            </div>

            <div class="col-md-6 mb-3">
                <label class="admin-form-label">GitHub URL</label>
                <input type="text" name="social_github" class="admin-form-input" value="<?= escape($settings['social_github'] ?? SOCIAL_GITHUB) ?>">
            </div>
        </div>

        <button type="submit" class="admin-btn" style="max-width: 240px;">
            <i class="fas fa-save"></i> Save Settings
        </button>
    </form>
</div>
