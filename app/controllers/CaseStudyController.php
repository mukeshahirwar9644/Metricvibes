<?php




require_once __DIR__ . '/Controller.php';
require_once APP_PATH . '/models/CaseStudy.php';

class CaseStudyController extends Controller {

    public function index(): void {
        $caseStudyModel = new CaseStudy();
        $caseStudies = $caseStudyModel->getPublished(12);

        $this->render('case-studies', [
            'currentPage'   => 'case-studies',
            'caseStudies'   => $caseStudies,
            'pageTitle'     => 'Case Studies & Success Stories — ' . SITE_NAME,
            'pageDescription' => 'Discover how MetricVibes helps enterprise clients optimize analytics, migrate to GA4, and deploy cloud AI solutions.'
        ]);
    }

    public function detail(string $slug): void {
        $caseStudyModel = new CaseStudy();
        $caseStudy = $caseStudyModel->getBySlug($slug);

        if (!$caseStudy) {
            http_response_code(404);
            $this->render('404', ['currentPage' => '404']);
            return;
        }

        $this->render('case-study-detail', [
            'currentPage'   => 'case-studies',
            'caseStudy'     => $caseStudy,
            'pageTitle'     => $caseStudy['meta_title'] ?: $caseStudy['title'] . ' — ' . SITE_NAME,
            'pageDescription' => $caseStudy['meta_description'] ?: $caseStudy['challenge']
        ]);
    }
}
