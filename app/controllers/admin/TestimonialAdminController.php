<?php




require_once APP_PATH . '/controllers/Controller.php';
require_once APP_PATH . '/middleware/AuthMiddleware.php';
require_once APP_PATH . '/models/Testimonial.php';

class TestimonialAdminController extends Controller {

    public function index(): void {
        AuthMiddleware::check();

        $testimonialModel = new Testimonial();
        $testimonials = $testimonialModel->all('created_at DESC');

        $this->render('admin/testimonials/index', [
            'currentPage'  => 'testimonials',
            'pageTitle'    => 'Manage Testimonials',
            'testimonials' => $testimonials
        ], 'admin');
    }

    public function delete(int $id): void {
        AuthMiddleware::check();
        CSRFMiddleware::handle();

        $tModel = new Testimonial();
        $tModel->delete($id);

        Session::setFlash('success', 'Testimonial deleted successfully.');
        $this->redirect(SITE_URL . '/admin/testimonials');
    }
}
