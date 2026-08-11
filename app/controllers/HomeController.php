<?php




require_once __DIR__ . '/Controller.php';
require_once APP_PATH . '/models/Blog.php';
require_once APP_PATH . '/models/CaseStudy.php';
require_once APP_PATH . '/models/Testimonial.php';

class HomeController extends Controller {

    public function index(): void {
        $blogModel = new Blog();
        $caseStudyModel = new CaseStudy();
        $testimonialModel = new Testimonial();

        try {
            $blogs = $blogModel->getPublished(3);
            $caseStudies = $caseStudyModel->getPublished(4);
            $testimonials = $testimonialModel->getActive(6);
        } catch (Exception $e) {
            
            $blogs = [];
            $caseStudies = [];
            $testimonials = [];
        }

        $this->render('home', [
            'currentPage'   => 'home',
            'blogs'         => $blogs,
            'caseStudies'   => $caseStudies,
            'testimonials'  => $testimonials,
            'pageTitle'     => SITE_NAME . ' — ' . SITE_TAGLINE,
            'pageDescription' => SITE_DESCRIPTION
        ]);
    }
}
