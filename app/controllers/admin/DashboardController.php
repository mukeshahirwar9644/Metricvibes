<?php




require_once APP_PATH . '/controllers/Controller.php';
require_once APP_PATH . '/middleware/AuthMiddleware.php';
require_once APP_PATH . '/models/Contact.php';
require_once APP_PATH . '/models/Blog.php';
require_once APP_PATH . '/models/CaseStudy.php';
require_once APP_PATH . '/models/Newsletter.php';

class DashboardController extends Controller {

    public function index(): void {
        AuthMiddleware::check();

        $contactModel = new Contact();
        $blogModel = new Blog();
        $caseStudyModel = new CaseStudy();
        $newsletterModel = new Newsletter();

        try {
            $totalMessages = $contactModel->count();
            $unreadMessages = $contactModel->getUnreadCount();
            $totalBlogs = $blogModel->count();
            $totalCaseStudies = $caseStudyModel->count();
            $totalSubscribers = $newsletterModel->count();
            $recentMessages = $contactModel->where('1=1', [], 'created_at DESC', 5);
        } catch (Exception $e) {
            $totalMessages = 0;
            $unreadMessages = 0;
            $totalBlogs = 0;
            $totalCaseStudies = 0;
            $totalSubscribers = 0;
            $recentMessages = [];
        }

        $this->render('admin/dashboard', [
            'currentPage'      => 'dashboard',
            'pageTitle'        => 'Overview & Analytics',
            'totalMessages'    => $totalMessages,
            'unreadMessages'   => $unreadMessages,
            'totalBlogs'       => $totalBlogs,
            'totalCaseStudies' => $totalCaseStudies,
            'totalSubscribers' => $totalSubscribers,
            'recentMessages'   => $recentMessages
        ], 'admin');
    }
}
