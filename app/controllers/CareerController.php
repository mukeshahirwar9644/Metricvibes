<?php




require_once __DIR__ . '/Controller.php';
require_once APP_PATH . '/models/Career.php';
require_once APP_PATH . '/helpers/validation.php';
require_once APP_PATH . '/middleware/CSRFMiddleware.php';
require_once APP_PATH . '/middleware/RateLimiter.php';

class CareerController extends Controller {

    public function index(): void {
        $careerModel = new Career();
        $positions = $careerModel->getOpenPositions();

        $this->render('careers', [
            'currentPage'   => 'careers',
            'positions'     => $positions,
            'pageTitle'     => 'Join Our Team — Careers at ' . SITE_NAME,
            'pageDescription' => 'Build the future of enterprise analytics, cloud engineering, and AI automation. Explore open roles at MetricVibes.'
        ]);
    }

    public function apply(): void {
        CSRFMiddleware::handle();
        RateLimiter::check('career_apply', 3, 300);

        $sanitized = Validation::sanitize($_POST);
        $validator = new Validation();

        $rules = [
            'name'  => 'required|min:2|max:100',
            'email' => 'required|email|max:150'
        ];

        if (!$validator->validate($sanitized, $rules)) {
            $this->json([
                'status'  => 'error',
                'message' => $validator->getFirstError()
            ], 400);
        }

        try {
            $careerModel = new Career();
            $careerModel->submitApplication($sanitized);

            $this->json([
                'status'  => 'success',
                'message' => '✓ Application submitted successfully! Our recruitment team will review your application.'
            ]);
        } catch (Exception $e) {
            $this->json([
                'status'  => 'error',
                'message' => 'Failed to submit application. Please try again.'
            ], 500);
        }
    }
}
