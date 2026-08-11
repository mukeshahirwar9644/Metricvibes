<?php



?>

<!-- Header Banner -->
<section style="position: relative; padding: 120px 0 80px; background: #0B1023; text-align: center; color: #fff;">
    <div class="container" style="position: relative; z-index: 2; max-width: 900px;">
        <h1 style="font-family: var(--font-heading); font-size: 3.5rem; font-weight: 700; margin-bottom: 24px; color: #fff;">Our Blogs</h1>
        <p style="font-size: 1.125rem; line-height: 1.7; color: rgba(255, 255, 255, 0.9);">
            Stay ahead of the curve with MetricVibes' comprehensive blog covering analytics insights, tracking best practices, and data-driven strategies. Our expert team shares actionable tips, industry trends, and proven methodologies to help businesses optimize their data collection and analysis processes for better decision-making.
        </p>
    </div>
</section>

<!-- Search Section -->
<section style="background: var(--surface-secondary); padding-top: 48px;">
    <div class="container">
        <h2 style="font-family: var(--font-heading); font-size: 1.5rem; font-weight: 700; margin-bottom: 16px; color: var(--text-primary);">Quick Search..</h2>
        <form action="#" method="GET" style="display: flex; max-width: 100%; border: 1px solid var(--border-color); border-radius: 4px; overflow: hidden; background: var(--surface-card);">
            <input type="text" name="query" placeholder="Search DPDP, Google Analytics ...." style="flex-grow: 1; padding: 16px 20px; border: none; background: transparent; color: var(--text-primary); outline: none;">
            <button type="submit" style="background: #333333; color: white; border: none; padding: 0 32px; font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 8px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                SEARCH
            </button>
        </form>
    </div>
</section>

<section class="section" style="background: var(--surface-secondary);">
    <div class="container">
        <?php
        $page = isset($_GET['page']) ? max(1, (int)$_GET['page']) : 1;
        $perPage = 6;
        $total = count($blogs);
        $totalPages = ceil($total / $perPage);
        $paginatedBlogs = array_slice($blogs, ($page - 1) * $perPage, $perPage);
        ?>
        
        <div class="content-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 32px;">
            <?php if (!empty($paginatedBlogs)): ?>
                <?php foreach ($paginatedBlogs as $post): ?>
                    <div class="blog-card" style="background: #ffffff; border-radius: 4px; overflow: hidden; border: 1px solid #eaeaea; display: flex; flex-direction: column;">
                        <?php
                            $titleLower = strtolower($post['title']);
                            $icon = 'fa-chart-pie';
                            if (strpos($titleLower, 'gtm') !== false || strpos($titleLower, 'tagging') !== false || strpos($titleLower, 'container') !== false) {
                                $icon = 'fa-tags';
                                $gradient = 'linear-gradient(135deg, #FF416C, #FF4B2B)';
                            } elseif (strpos($titleLower, 'ga4') !== false || strpos($titleLower, 'analytics') !== false || strpos($titleLower, 'kpi') !== false || strpos($titleLower, 'metrics') !== false) {
                                $icon = 'fa-chart-line';
                                $gradient = 'linear-gradient(135deg, #1A2980, #26D0CE)';
                            } elseif (strpos($titleLower, 'privacy') !== false || strpos($titleLower, 'cookie') !== false || strpos($titleLower, 'consent') !== false || strpos($titleLower, 'dpdp') !== false || strpos($titleLower, 'blocker') !== false) {
                                $icon = 'fa-shield-halved';
                                $gradient = 'linear-gradient(135deg, #11998e, #38ef7d)';
                            } elseif (strpos($titleLower, 'conversion') !== false || strpos($titleLower, 'roi') !== false || strpos($titleLower, 'growth') !== false || strpos($titleLower, 'funnel') !== false) {
                                $icon = 'fa-arrow-trend-up';
                                $gradient = 'linear-gradient(135deg, #FDC830, #F37335)';
                            } elseif (strpos($titleLower, 'ai') !== false || strpos($titleLower, 'genai') !== false || strpos($titleLower, 'personalization') !== false) {
                                $icon = 'fa-robot';
                                $gradient = 'linear-gradient(135deg, #8E2DE2, #4A00E0)';
                            } elseif (strpos($titleLower, 'user') !== false || strpos($titleLower, 'behavior') !== false || strpos($titleLower, 'audience') !== false) {
                                $icon = 'fa-users';
                                $gradient = 'linear-gradient(135deg, #FC466B, #3F5EFB)';
                            } elseif (strpos($titleLower, 'migration') !== false || strpos($titleLower, 'data') !== false) {
                                $icon = 'fa-database';
                                $gradient = 'linear-gradient(135deg, #00B4DB, #0083B0)';
                            } elseif (strpos($titleLower, 'ecommerce') !== false || strpos($titleLower, 'e-commerce') !== false || strpos($titleLower, 'sales') !== false) {
                                $icon = 'fa-cart-shopping';
                                $gradient = 'linear-gradient(135deg, #cc2b5e, #753a88)';
                            } elseif (strpos($titleLower, 'audit') !== false || strpos($titleLower, 'accuracy') !== false) {
                                $icon = 'fa-clipboard-check';
                                $gradient = 'linear-gradient(135deg, #4b6cb7, #182848)';
                            } else {
                                $gradient = 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)';
                            }
                            
                            $category = $post['category_name'] ?? 'Insights';
                        ?>
                        <a href="<?= url('blog/' . $post['slug']) ?>" style="display: block; height: 180px; position: relative; overflow: hidden; background: <?= $gradient ?>; color: white; text-decoration: none;">
                            <!-- Abstract Blobs -->
                            <div style="position: absolute; width: 180px; height: 180px; background: rgba(255,255,255,0.06); border-radius: 50%; top: -40px; left: -60px; pointer-events: none;"></div>
                            <div style="position: absolute; width: 120px; height: 120px; background: rgba(255,255,255,0.04); border-radius: 50%; bottom: -30px; right: 40px; pointer-events: none;"></div>
                            <div style="position: absolute; width: 220px; height: 220px; background: rgba(0,0,0,0.1); border-radius: 50%; top: 20px; right: -120px; pointer-events: none;"></div>
                            
                            <!-- Logo Pill -->
                            <div style="position: absolute; top: 12px; right: 12px; background: #ffffff; padding: 6px 14px; border-radius: 20px; display: flex; align-items: center; box-shadow: 0 4px 10px rgba(0,0,0,0.15); z-index: 2;">
                                <img src="<?= asset('img/logo-new.webp') ?>" alt="MetricVibes" style="height: 22px;">
                            </div>
                            
                            <!-- Content Layout -->
                            <div style="position: absolute; inset: 0; padding: 20px; display: flex; align-items: center; z-index: 1;">
                                <!-- Icon -->
                                <div style="width: 28%; display: flex; justify-content: center; align-items: center;">
                                    <i class="fa-solid <?= $icon ?>" style="font-size: 3rem; color: rgba(255,255,255,0.95); text-shadow: 0 4px 12px rgba(0,0,0,0.2);"></i>
                                </div>
                                
                                <!-- Text -->
                                <div style="width: 72%; padding-left: 12px;">
                                    <span style="display: inline-block; background: rgba(255,255,255,0.15); padding: 4px 10px; border-radius: 20px; font-size: 0.6rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; backdrop-filter: blur(4px); box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                                        <?= htmlspecialchars($category) ?>
                                    </span>
                                    <h4 style="margin: 0; font-size: 1rem; line-height: 1.35; font-family: var(--font-heading); font-weight: 700; color: #ffffff; text-shadow: 0 2px 4px rgba(0,0,0,0.4); display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; padding-right: 8px;">
                                        <?= htmlspecialchars($post['title']) ?>
                                    </h4>
                                </div>
                            </div>
                        </a>
                        <div style="padding: 20px; flex-grow: 1; display: flex; flex-direction: column; background: #ffffff;">
                            <h3 style="font-size: 1.15rem; font-family: var(--font-heading); font-weight: 700; margin: 0 0 12px 0; line-height: 1.4;">
                                <a href="<?= url('blog/' . $post['slug']) ?>" style="color: #3b1e70; text-decoration: none;">
                                    <?= htmlspecialchars($post['title']) ?>
                                </a>
                            </h3>
                            <p style="font-size: 0.85rem; color: #777; line-height: 1.6; margin: 0 0 20px 0; flex-grow: 1;">
                                <?= htmlspecialchars(isset($post['excerpt']) && mb_strlen($post['excerpt']) > 120 ? mb_substr($post['excerpt'], 0, 120) . '...' : ($post['excerpt'] ?? '')) ?>
                            </p>
                            
                            <a href="<?= url('blog/' . $post['slug']) ?>" style="font-size: 0.75rem; font-weight: 700; color: #3b1e70; text-decoration: none; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 20px; display: inline-block;">
                                READ MORE &raquo;
                            </a>
                            
                            <div style="border-top: 1px solid #eaeaea; padding-top: 16px; font-size: 0.7rem; color: #999; display: flex; align-items: center;">
                                <span><?= isset($post['published_at']) ? date('F j, Y', strtotime($post['published_at'])) : '' ?></span>
                                <span style="margin: 0 8px;">|</span>
                                <span><?= isset($post['comments_count']) && $post['comments_count'] > 0 ? $post['comments_count'] . ' Comments' : 'No Comments' ?></span>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            <?php else: ?>
                <div class="text-center" style="width: 100%; grid-column: 1 / -1;">
                    <h2>Coming Soon!</h2>
                    <p>We are currently working on our new blog. Stay tuned for expert insights and updates.</p>
                </div>
            <?php endif; ?>
        </div>
        
        <?php if ($totalPages > 1): ?>
        <div style="display: flex; justify-content: center; align-items: center; gap: 8px; margin-top: 48px; font-size: 0.85rem; font-weight: 500;">
            <?php if ($page > 1): ?>
                <a href="?page=<?= $page - 1 ?>" style="color: #c98e26; text-decoration: none;">&laquo; Previous</a>
            <?php else: ?>
                <span style="color: #ccc;">&laquo; Previous</span>
            <?php endif; ?>
            
            <?php for ($i = 1; $i <= $totalPages; $i++): ?>
                <a href="?page=<?= $i ?>" style="color: <?= $i === $page ? '#c98e26' : '#777' ?>; text-decoration: none; padding: 4px 8px; <?= $i === $page ? 'font-weight: bold;' : '' ?>"><?= $i ?></a>
            <?php endfor; ?>
            
            <?php if ($page < $totalPages): ?>
                <a href="?page=<?= $page + 1 ?>" style="color: #c98e26; text-decoration: none;">Next &raquo;</a>
            <?php else: ?>
                <span style="color: #ccc;">Next &raquo;</span>
            <?php endif; ?>
        </div>
        <?php endif; ?>
    </div>
</section>
