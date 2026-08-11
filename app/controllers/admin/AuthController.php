<?php




require_once APP_PATH . '/controllers/Controller.php';
require_once APP_PATH . '/models/User.php';
require_once APP_PATH . '/helpers/validation.php';
require_once APP_PATH . '/middleware/CSRFMiddleware.php';
require_once APP_PATH . '/middleware/RateLimiter.php';

class AuthController extends Controller {

    


    public function showLogin(): void {
        Session::start();
        if (Session::has('admin_user')) {
            $this->redirect(SITE_URL . '/admin/dashboard');
        }

        include VIEWS_PATH . '/admin/login.php';
    }

    


    public function login(): void {
        CSRFMiddleware::handle();
        RateLimiter::check('admin_login', 5, 300); 

        $sanitized = Validation::sanitize($_POST);
        $validator = new Validation();

        if (!$validator->validate($sanitized, [
            'email'    => 'required|email',
            'password' => 'required|min:6'
        ])) {
            Session::setFlash('error', $validator->getFirstError());
            $this->redirect(SITE_URL . '/admin/login');
        }

        $userModel = new User();
        $user = $userModel->authenticate($sanitized['email'], $sanitized['password']);

        if ($user) {
            Session::set('admin_user', $user);
            $this->redirect(SITE_URL . '/admin/dashboard');
        } else {
            Session::setFlash('error', 'Invalid email or password.');
            $this->redirect(SITE_URL . '/admin/login');
        }
    }

    


    public function logout(): void {
        Session::remove('admin_user');
        Session::destroy();
        $this->redirect(SITE_URL . '/admin/login');
    }
}
