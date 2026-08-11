<?php




Session::start();
$adminUser = Session::get('admin_user', ['name' => 'Admin', 'role' => 'super_admin']);
$currentPage = $currentPage ?? 'dashboard';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= escape($pageTitle ?? 'Admin Dashboard — ' . SITE_NAME) ?></title>

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap" rel="stylesheet">
    
    <!-- FontAwesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet">

    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Admin Custom CSS -->
    <link href="<?= asset('css/admin.css') ?>?v=1.0.1" rel="stylesheet">
</head>
<body class="admin-body">

<div class="admin-wrapper">
    <!-- Sidebar -->
    <aside class="admin-sidebar">
        <div class="admin-sidebar__brand">
            <span style="background: var(--admin-accent-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">MetricVibes</span>
            <span style="font-size: 0.7rem; background: rgba(79,70,229,0.2); color: #6C63FF; padding: 2px 8px; border-radius: 12px;">Admin</span>
        </div>

        <nav class="admin-sidebar__nav">
            <a href="<?= url('admin/dashboard') ?>" class="admin-sidebar__link <?= active_nav('dashboard', $currentPage) ?>">
                <i class="fas fa-chart-pie"></i> Dashboard
            </a>
            <a href="<?= url('admin/blogs') ?>" class="admin-sidebar__link <?= active_nav('blogs', $currentPage) ?>">
                <i class="fas fa-newspaper"></i> Blogs
            </a>
            <a href="<?= url('admin/case-studies') ?>" class="admin-sidebar__link <?= active_nav('case-studies', $currentPage) ?>">
                <i class="fas fa-rocket"></i> Case Studies
            </a>
            <a href="<?= url('admin/testimonials') ?>" class="admin-sidebar__link <?= active_nav('testimonials', $currentPage) ?>">
                <i class="fas fa-quote-left"></i> Testimonials
            </a>
            <a href="<?= url('admin/contacts') ?>" class="admin-sidebar__link <?= active_nav('contacts', $currentPage) ?>">
                <i class="fas fa-envelope"></i> Contact Messages
            </a>
            <a href="<?= url('admin/settings') ?>" class="admin-sidebar__link <?= active_nav('settings', $currentPage) ?>">
                <i class="fas fa-cog"></i> Site Settings
            </a>
        </nav>

        <div class="admin-sidebar__user">
            <div class="d-flex align-items-center gap-2">
                <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--admin-accent-gradient); display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 700; font-size: 0.8rem;">
                    <?= strtoupper(substr($adminUser['name'], 0, 1)) ?>
                </div>
                <div>
                    <div style="font-size: 0.85rem; font-weight: 600;"><?= escape($adminUser['name']) ?></div>
                    <div style="font-size: 0.75rem; color: var(--admin-text-secondary);"><?= escape($adminUser['role']) ?></div>
                </div>
            </div>
            <a href="<?= url('admin/logout') ?>" style="color: #EF4444; font-size: 1rem;" title="Logout">
                <i class="fas fa-sign-out-alt"></i>
            </a>
        </div>
    </aside>

    <!-- Main Content Area -->
    <main class="admin-main">
        <header class="admin-header">
            <h1 class="admin-header__title"><?= escape($pageTitle ?? 'Dashboard') ?></h1>
            <div>
                <a href="<?= url() ?>" target="_blank" class="btn btn-sm btn-outline-light">
                    <i class="fas fa-external-link-alt"></i> View Website
                </a>
            </div>
        </header>

        <div class="admin-content">
            <?php if (file_exists($pageContent)): ?>
                <?php include $pageContent; ?>
            <?php endif; ?>
        </div>
    </main>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
