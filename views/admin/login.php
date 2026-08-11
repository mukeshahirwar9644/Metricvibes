<?php



?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login — <?= SITE_NAME ?></title>

    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@700;800&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet">
    <link href="<?= asset('css/admin.css') ?>" rel="stylesheet">
</head>
<body class="admin-body">

<div class="admin-login-wrapper">
    <div class="admin-login-card">
        <div class="admin-login-logo">
            <span style="background: var(--admin-accent-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">MetricVibes</span>
            <div style="font-size: 0.85rem; font-weight: 500; color: var(--admin-text-secondary); margin-top: 6px;">Enterprise Portal</div>
        </div>

        <?php if (Session::hasFlash('error')): ?>
            <div style="padding: 12px 16px; background: rgba(239,68,68,0.15); border: 1px solid #EF4444; color: #FCA5A5; border-radius: 8px; font-size: 0.85rem; margin-bottom: 20px;">
                <i class="fas fa-exclamation-circle"></i> <?= escape(Session::getFlash('error')) ?>
            </div>
        <?php endif; ?>

        <form action="<?= url('admin/login') ?>" method="POST">
            <?= csrf_field() ?>

            <div class="admin-form-group">
                <label class="admin-form-label"><i class="fas fa-envelope"></i> Email Address</label>
                <input type="email" name="email" class="admin-form-input" placeholder="admin@metricvibes.com" required autofocus>
            </div>

            <div class="admin-form-group">
                <label class="admin-form-label"><i class="fas fa-lock"></i> Password</label>
                <input type="password" name="password" class="admin-form-input" placeholder="••••••••" required>
            </div>

            <button type="submit" class="admin-btn" style="margin-top: 10px;">
                Sign In to Dashboard <i class="fas fa-arrow-right"></i>
            </button>
        </form>
    </div>
</div>

</body>
</html>
