<?php




require_once APP_PATH . '/controllers/Controller.php';
require_once APP_PATH . '/middleware/AuthMiddleware.php';
require_once APP_PATH . '/models/Contact.php';

class ContactAdminController extends Controller {

    public function index(): void {
        AuthMiddleware::check();

        $contactModel = new Contact();
        $messages = $contactModel->all('created_at DESC');

        $this->render('admin/contacts/index', [
            'currentPage' => 'contacts',
            'pageTitle'   => 'Contact Inquiries',
            'messages'    => $messages
        ], 'admin');
    }

    public function delete(int $id): void {
        AuthMiddleware::check();
        CSRFMiddleware::handle();

        $contactModel = new Contact();
        $contactModel->delete($id);

        Session::setFlash('success', 'Message deleted successfully.');
        $this->redirect(SITE_URL . '/admin/contacts');
    }
}
