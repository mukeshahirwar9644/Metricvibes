<?php




require_once APP_PATH . '/controllers/Controller.php';
require_once APP_PATH . '/middleware/AuthMiddleware.php';
require_once APP_PATH . '/models/CaseStudy.php';
require_once APP_PATH . '/helpers/validation.php';
require_once APP_PATH . '/middleware/CSRFMiddleware.php';

class CaseStudyAdminController extends Controller {

    public function index(): void {
        AuthMiddleware::check();

        $caseStudyModel = new CaseStudy();
        $caseStudies = $caseStudyModel->all('created_at DESC');

        $this->render('admin/case-studies/index', [
            'currentPage' => 'case-studies',
            'pageTitle'   => 'Manage Case Studies',
            'caseStudies' => $caseStudies
        ], 'admin');
    }

    public function delete(int $id): void {
        AuthMiddleware::check();
        CSRFMiddleware::handle();

        $csModel = new CaseStudy();
        $csModel->delete($id);

        Session::setFlash('success', 'Case study deleted successfully.');
        $this->redirect(SITE_URL . '/admin/case-studies');
    }
}
