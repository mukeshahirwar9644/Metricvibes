<?php



?>

<style>
    .blog-content {
        font-family: var(--font-body);
        color: var(--text-secondary);
        font-size: 1.125rem;
        line-height: 1.8;
    }
    .blog-content h2 {
        font-family: var(--font-heading);
        font-size: 2rem;
        font-weight: 700;
        color: var(--text-primary);
        margin: 48px 0 24px;
    }
    .blog-content h2:first-child {
        margin-top: 0;
    }
    .blog-content h3 {
        font-family: var(--font-heading);
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--text-primary);
        margin: 32px 0 16px;
    }
    .blog-content p {
        margin-bottom: 24px;
    }
    .blog-content ul, .blog-content ol {
        margin-bottom: 24px;
        padding-left: 24px;
    }
    .blog-content li {
        margin-bottom: 12px;
    }
    .blog-content strong {
        color: var(--text-primary);
        font-weight: 600;
    }
    .blog-content blockquote {
        border-left: 4px solid var(--color-accent);
        padding-left: 24px;
        margin: 32px 0;
        font-style: italic;
        color: var(--text-primary);
        font-size: 1.25rem;
    }
    
    .blog-faq {
        margin-top: 60px;
        padding-top: 40px;
        border-top: 1px solid var(--border-color);
    }
    .blog-faq-item {
        margin-bottom: 32px;
    }
    .blog-faq-item h4 {
        font-family: var(--font-heading);
        font-size: 1.25rem;
        color: var(--text-primary);
        margin-bottom: 12px;
        font-weight: 600;
    }
    
    .blog-comments-section {
        margin-top: 60px;
        padding-top: 40px;
        border-top: 1px solid var(--border-color);
    }
    .comment-list {
        list-style: none;
        padding: 0;
        margin: 0 0 40px;
    }
    .comment-item {
        display: flex;
        gap: 20px;
        margin-bottom: 32px;
        padding-bottom: 32px;
        border-bottom: 1px solid var(--border-color-light);
    }
    .comment-avatar {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: var(--surface-tertiary);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-accent);
        font-size: 1.5rem;
        flex-shrink: 0;
    }
    .comment-body h5 {
        margin: 0 0 4px;
        font-size: 1.125rem;
        color: var(--text-primary);
    }
    .comment-meta {
        font-size: 0.875rem;
        color: var(--text-muted);
        margin-bottom: 12px;
    }
    .comment-content {
        font-size: 1rem;
        color: var(--text-secondary);
        margin-bottom: 12px;
    }
    .comment-reply {
        color: var(--color-accent);
        font-size: 0.875rem;
        font-weight: 600;
        text-decoration: none;
    }
    
    @media (max-width: 991px) {
        .blog-layout {
            grid-template-columns: 1fr !important;
        }
        .blog-sidebar {
            order: 2;
        }
    }
</style>

<!-- Header Banner -->
<section style="position: relative; padding: 140px 0 100px; background: url('<?= asset('img/hero/hero-workspace-bg.png') ?>') center/cover no-repeat; text-align: left; color: #fff;">
    <div style="position: absolute; inset: 0; background: var(--gradient-hero); opacity: 0.95;"></div>
    <div class="container" style="position: relative; z-index: 2; max-width: 900px;">
        <div style="display: flex; gap: 20px; color: var(--color-accent-secondary); font-size: 0.95rem; font-weight: 600; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 1px;">
            <span><i class="fas fa-folder"></i> <?= htmlspecialchars($blog['category_name'] ?? 'Analytics') ?></span>
        </div>
        <h1 style="font-family: var(--font-heading); font-size: 3.5rem; font-weight: 800; margin-bottom: 24px; color: #fff; line-height: 1.2;">
            <?= htmlspecialchars($blog['title'] ?? 'Blog Title') ?>
        </h1>
        <div style="display: flex; gap: 20px; color: rgba(255, 255, 255, 0.8); font-size: 1rem; align-items: center;">
            <span><i class="fas fa-user-circle" style="color: var(--color-accent-secondary);"></i> By <?= htmlspecialchars($blog['author_name'] ?? 'Metric Vibes') ?></span>
            <span>&bull;</span>
            <span><i class="fas fa-calendar-alt" style="color: var(--color-accent-secondary);"></i> <?= date('F j, Y', strtotime($blog['published_at'] ?? 'now')) ?></span>
        </div>
    </div>
</section>

<!-- Main Blog Content -->
<section class="section" style="background: var(--surface-primary);">
    <div class="container">
        <div class="blog-layout" style="display: grid; grid-template-columns: 1fr 350px; gap: 60px;">
            
            <!-- Left Content Column -->
            <div class="blog-content">
                <?php
                    $blogPath = __DIR__ . '/blogs/' . $blog['slug'] . '.php';
                    if (file_exists($blogPath)) {
                        include $blogPath;
                    } else {
                        echo '<p>Blog content not found.</p>';
                    }
                ?>
            </div>
            
            <!-- Right Sidebar Column -->
            <aside class="blog-sidebar">
                <div class="sidebar-widget" style="background: var(--surface-secondary); padding: 32px; border-radius: var(--radius-xl); border: 1px solid var(--border-color); position: sticky; top: 120px;">
                    <div style="margin-bottom: 24px;">
                        <h3 style="font-family: var(--font-heading); font-size: 1.5rem; color: var(--text-primary); margin: 0 0 8px;">Connect with us</h3>
                        <p style="font-size: 0.9rem; color: var(--text-secondary); margin: 0;">Fill out the form below and an expert will get back to you shortly.</p>
                    </div>
                    <form action="<?= url('contact/submit') ?>" method="POST" class="contact-form">
                        <div class="form-group" style="margin-bottom: 16px;">
                            <input type="text" name="name" placeholder="Your Name" class="form-control" required style="width: 100%; padding: 12px 16px; border-radius: 8px; border: 1px solid var(--border-color); background: var(--surface-card); color: var(--text-primary);">
                        </div>
                        <div class="form-group" style="margin-bottom: 16px;">
                            <input type="email" name="email" placeholder="Email Address" class="form-control" required style="width: 100%; padding: 12px 16px; border-radius: 8px; border: 1px solid var(--border-color); background: var(--surface-card); color: var(--text-primary);">
                        </div>
                        <div class="form-group" style="margin-bottom: 16px;">
                            <input type="tel" name="phone" placeholder="Phone Number" class="form-control" style="width: 100%; padding: 12px 16px; border-radius: 8px; border: 1px solid var(--border-color); background: var(--surface-card); color: var(--text-primary);">
                        </div>
                        <div class="form-group" style="margin-bottom: 16px;">
                            <input type="text" name="company" placeholder="Company Name" class="form-control" style="width: 100%; padding: 12px 16px; border-radius: 8px; border: 1px solid var(--border-color); background: var(--surface-card); color: var(--text-primary);">
                        </div>
                        <div class="form-group" style="margin-bottom: 16px;">
                            <textarea name="message" placeholder="Enter Your Message" class="form-control" rows="4" style="width: 100%; padding: 12px 16px; border-radius: 8px; border: 1px solid var(--border-color); background: var(--surface-card); color: var(--text-primary);"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary" style="width: 100%;">Speak To An Expert</button>
                    </form>
                </div>
            </aside>
            
        </div>
    </div>
</section>

<!-- Call to Action Banner matching the screenshot bottom -->
<section style="background: var(--gradient-primary); padding: 80px 0; text-align: center; color: white;">
    <div class="container">
        <h2 style="font-family: var(--font-heading); font-size: 2.5rem; font-weight: 800; margin-bottom: 24px; color: white;">Ready To Boost Your<br>Website's Performance?</h2>
        <a href="<?= url('contact') ?>" class="btn btn-primary" style="background: white; color: var(--color-primary); border-color: white;">Contact Us</a>
    </div>
</section>
