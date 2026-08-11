<?php






session_start();


require_once __DIR__ . '/../app/config/config.php';


require_once APP_PATH . '/helpers/functions.php';


require_once APP_PATH . '/core/Database.php';
require_once APP_PATH . '/core/Session.php';
require_once APP_PATH . '/core/Router.php';


require_once APP_PATH . '/controllers/HomeController.php';
require_once APP_PATH . '/controllers/ServiceController.php';
require_once APP_PATH . '/controllers/CaseStudyController.php';
require_once APP_PATH . '/controllers/BlogController.php';
require_once APP_PATH . '/controllers/ContactController.php';
require_once APP_PATH . '/controllers/CareerController.php';


require_once APP_PATH . '/controllers/admin/AuthController.php';
require_once APP_PATH . '/controllers/admin/DashboardController.php';
require_once APP_PATH . '/controllers/admin/BlogAdminController.php';
require_once APP_PATH . '/controllers/admin/CaseStudyAdminController.php';
require_once APP_PATH . '/controllers/admin/TestimonialAdminController.php';
require_once APP_PATH . '/controllers/admin/ContactAdminController.php';
require_once APP_PATH . '/controllers/admin/SettingsController.php';


$router = new Router();






$router->get('/', [HomeController::class, 'index']);
$router->get('/home', [HomeController::class, 'index']);


$router->get('/services', [ServiceController::class, 'index']);
$router->get('/services/{slug}', [ServiceController::class, 'detail']);


$router->get('/case-studies', [CaseStudyController::class, 'index']);
$router->get('/case-studies/{slug}', [CaseStudyController::class, 'detail']);


$router->get('/blog', [BlogController::class, 'index']);
$router->get('/blog/{slug}', [BlogController::class, 'detail']);


$router->get('/careers', [CareerController::class, 'index']);
$router->post('/careers/apply', [CareerController::class, 'apply']);


$router->post('/contact/submit', [ContactController::class, 'submit']);
$router->post('/newsletter/subscribe', [ContactController::class, 'subscribe']);


$router->get('/about', function() {
    $c = new HomeController();
    $c->render('about', ['currentPage' => 'about', 'pageTitle' => 'About Us — ' . SITE_NAME]);
});
$router->get('/privacy', function() {
    $c = new HomeController();
    $c->render('privacy', ['currentPage' => 'privacy', 'pageTitle' => 'Privacy Policy — ' . SITE_NAME]);
});
$router->get('/terms', function() {
    $c = new HomeController();
    $c->render('terms', ['currentPage' => 'terms', 'pageTitle' => 'Terms of Service — ' . SITE_NAME]);
});






$router->get('/admin/login', [AuthController::class, 'showLogin']);
$router->post('/admin/login', [AuthController::class, 'login']);
$router->get('/admin/logout', [AuthController::class, 'logout']);


$router->get('/admin/dashboard', [DashboardController::class, 'index']);


$router->get('/admin/blogs', [BlogAdminController::class, 'index']);
$router->get('/admin/blogs/create', [BlogAdminController::class, 'create']);
$router->post('/admin/blogs/store', [BlogAdminController::class, 'store']);
$router->post('/admin/blogs/delete/{id}', [BlogAdminController::class, 'delete']);


$router->get('/admin/case-studies', [CaseStudyAdminController::class, 'index']);
$router->post('/admin/case-studies/delete/{id}', [CaseStudyAdminController::class, 'delete']);


$router->get('/admin/testimonials', [TestimonialAdminController::class, 'index']);
$router->post('/admin/testimonials/delete/{id}', [TestimonialAdminController::class, 'delete']);


$router->get('/admin/contacts', [ContactAdminController::class, 'index']);
$router->post('/admin/contacts/delete/{id}', [ContactAdminController::class, 'delete']);


$router->get('/admin/settings', [SettingsController::class, 'index']);
$router->post('/admin/settings/update', [SettingsController::class, 'update']);


if (isset($_GET['url'])) {
    $requestUri = $_GET['url'];
} else {
    $rawUri = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);
    $scriptDir = str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME']));
    if ($scriptDir !== '/' && strpos($rawUri, $scriptDir) === 0) {
        $rawUri = substr($rawUri, strlen($scriptDir));
    }
    $requestUri = $rawUri;
}
$requestMethod = $_SERVER['REQUEST_METHOD'] ?? 'GET';


$router->dispatch($requestUri, $requestMethod);
