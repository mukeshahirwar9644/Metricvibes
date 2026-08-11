<?php



?>

<div class="admin-card">
    <div class="admin-card__header">
        <h3 class="admin-card__title">Create Blog Post</h3>
        <a href="<?= url('admin/blogs') ?>" class="btn btn-sm btn-outline-light">Back to List</a>
    </div>

    <form action="<?= url('admin/blogs/store') ?>" method="POST" style="padding: 24px;">
        <?= csrf_field() ?>

        <div class="row">
            <div class="col-md-8">
                <div class="mb-3">
                    <label class="admin-form-label">Article Title</label>
                    <input type="text" name="title" class="admin-form-input" placeholder="e.g. GA4 Server-Side Tracking Guide" required>
                </div>

                <div class="mb-3">
                    <label class="admin-form-label">Excerpt / Short Description</label>
                    <textarea name="excerpt" class="admin-form-input" rows="3" placeholder="Brief summary of the article..."></textarea>
                </div>

                <div class="mb-3">
                    <label class="admin-form-label">Content (HTML allowed)</label>
                    <textarea name="content" class="admin-form-input" rows="12" placeholder="Write post content here..." required></textarea>
                </div>
            </div>

            <div class="col-md-4">
                <div class="mb-3">
                    <label class="admin-form-label">Category</label>
                    <input type="text" name="category" class="admin-form-input" placeholder="e.g. Analytics, AI, Cloud" value="Analytics">
                </div>

                <div class="mb-3">
                    <label class="admin-form-label">Publish Status</label>
                    <select name="status" class="admin-form-input">
                        <option value="published">Published</option>
                        <option value="draft">Draft</option>
                    </select>
                </div>

                <div class="mb-3">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="is_featured" id="is_featured" value="1">
                        <label class="form-check-label text-white" for="is_featured">
                            Featured Article (Displays prominently)
                        </label>
                    </div>
                </div>

                <hr style="border-color: var(--admin-card-border);">

                <h5 class="text-white h6 mb-3">SEO Meta Settings</h5>

                <div class="mb-3">
                    <label class="admin-form-label">Meta Title</label>
                    <input type="text" name="meta_title" class="admin-form-input" placeholder="Custom page title">
                </div>

                <div class="mb-3">
                    <label class="admin-form-label">Meta Description</label>
                    <textarea name="meta_description" class="admin-form-input" rows="3" placeholder="Meta description for search engines"></textarea>
                </div>

                <button type="submit" class="admin-btn">
                    <i class="fas fa-paper-plane"></i> Publish Blog Post
                </button>
            </div>
        </div>
    </form>
</div>
