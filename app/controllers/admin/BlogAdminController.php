<?php




require_once APP_PATH . '/controllers/Controller.php';
require_once APP_PATH . '/middleware/AuthMiddleware.php';
require_once APP_PATH . '/models/Blog.php';
require_once APP_PATH . '/helpers/validation.php';
require_once APP_PATH . '/middleware/CSRFMiddleware.php';

class BlogAdminController extends Controller {

    public function index(): void {
        AuthMiddleware::check();

        $blogModel = new Blog();
        $blogs = $blogModel->all('created_at DESC');

        $this->render('admin/blogs/index', [
            'currentPage' => 'blogs',
            'pageTitle'   => 'Manage Blog Posts',
            'blogs'       => $blogs
        ], 'admin');
    }

    public function create(): void {
        AuthMiddleware::check();

        $this->render('admin/blogs/create', [
            'currentPage' => 'blogs',
            'pageTitle'   => 'Create New Blog Post'
        ], 'admin');
    }

    public function store(): void {
        AuthMiddleware::check();
        CSRFMiddleware::handle();

        $sanitized = Validation::sanitize($_POST);
        $validator = new Validation();

        if (!$validator->validate($sanitized, [
            'title'   => 'required|min:3|max:255',
            'content' => 'required'
        ])) {
            Session::setFlash('error', $validator->getFirstError());
            $this->redirect(SITE_URL . '/admin/blogs/create');
        }

        $blogModel = new Blog();
        $slug = slugify($sanitized['title']);

        $blogModel->create([
            'title'            => $sanitized['title'],
            'slug'             => $slug,
            'category'         => $sanitized['category'] ?? 'General',
            'excerpt'          => $sanitized['excerpt'] ?? '',
            'content'          => $_POST['content'], 
            'status'           => $sanitized['status'] ?? 'published',
            'is_featured'      => isset($_POST['is_featured']) ? 1 : 0,
            'meta_title'       => $sanitized['meta_title'] ?? $sanitized['title'],
            'meta_description' => $sanitized['meta_description'] ?? $sanitized['excerpt']
        ]);

        Session::setFlash('success', 'Blog post created successfully!');
        $this->redirect(SITE_URL . '/admin/blogs');
    }

    public function delete(int $id): void {
        AuthMiddleware::check();
        CSRFMiddleware::handle();

        $blogModel = new Blog();
        $blogModel->delete($id);

        Session::setFlash('success', 'Blog post deleted successfully.');
        $this->redirect(SITE_URL . '/admin/blogs');
    }
}
