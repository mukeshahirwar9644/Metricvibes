<?php




require_once APP_PATH . '/controllers/Controller.php';
require_once APP_PATH . '/middleware/AuthMiddleware.php';
require_once APP_PATH . '/models/Setting.php';
require_once APP_PATH . '/helpers/validation.php';
require_once APP_PATH . '/middleware/CSRFMiddleware.php';

class SettingsController extends Controller {

    public function index(): void {
        AuthMiddleware::check();

        $settingModel = new Setting();
        $settings = $settingModel->getAllAsKeyValue();

        $this->render('admin/settings/index', [
            'currentPage' => 'settings',
            'pageTitle'   => 'Website Configuration & Settings',
            'settings'    => $settings
        ], 'admin');
    }

    public function update(): void {
        AuthMiddleware::check();
        CSRFMiddleware::handle();

        $settingModel = new Setting();
        $sanitized = Validation::sanitize($_POST);

        $allowedSettings = [
            'site_name', 'site_tagline', 'site_email', 'site_phone',
            'site_address', 'whatsapp_number', 'social_linkedin', 'social_twitter',
            'social_github', 'social_youtube'
        ];

        foreach ($allowedSettings as $key) {
            if (isset($sanitized[$key])) {
                $settingModel->setKey($key, $sanitized[$key]);
            }
        }

        Session::setFlash('success', 'Site settings updated successfully!');
        $this->redirect(SITE_URL . '/admin/settings');
    }
}
