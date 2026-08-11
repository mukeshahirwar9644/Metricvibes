<?php





require_once __DIR__ . '/Controller.php';
require_once APP_PATH . '/models/Contact.php';
require_once APP_PATH . '/models/Newsletter.php';
require_once APP_PATH . '/helpers/validation.php';
require_once APP_PATH . '/middleware/CSRFMiddleware.php';
require_once APP_PATH . '/middleware/RateLimiter.php';

class ContactController extends Controller {

    


    public function submit(): void {
        CSRFMiddleware::handle();
        RateLimiter::check('contact_form', 3, 60); 

        
        if (!empty($_POST['website_url'])) {
            
            $this->json(['status' => 'success', 'message' => 'Thank you! Your message has been sent successfully.']);
        }

        $sanitized = Validation::sanitize($_POST);
        $validator = new Validation();

        $rules = [
            'name'    => 'required|min:2|max:100',
            'email'   => 'required|email|max:150',
            'message' => 'required|min:10|max:3000'
        ];

        if (!$validator->validate($sanitized, $rules)) {
            $this->json([
                'status'  => 'error',
                'message' => $validator->getFirstError(),
                'errors'  => $validator->getErrors()
            ], 400);
        }

        try {
            $contactModel = new Contact();
            $contactModel->storeMessage($sanitized);

            $this->json([
                'status'  => 'success',
                'message' => '✓ Thank you! Your message has been received. Our team will contact you within 24 hours.'
            ]);
        } catch (Exception $e) {
            $this->json([
                'status'  => 'error',
                'message' => 'An error occurred while saving your message. Please try again or email us directly.'
            ], 500);
        }
    }

    


    public function subscribe(): void {
        CSRFMiddleware::handle();
        RateLimiter::check('newsletter_form', 5, 60);

        $sanitized = Validation::sanitize($_POST);
        $validator = new Validation();

        if (!$validator->validate($sanitized, ['email' => 'required|email|max:150'])) {
            $this->json([
                'status'  => 'error',
                'message' => $validator->getFirstError()
            ], 400);
        }

        try {
            $newsletterModel = new Newsletter();
            $newsletterModel->subscribe($sanitized['email']);

            $this->json([
                'status'  => 'success',
                'message' => '✓ Subscribed successfully! Thank you for joining our newsletter.'
            ]);
        } catch (Exception $e) {
            $this->json([
                'status'  => 'error',
                'message' => 'Could not subscribe at this time. Please try again.'
            ], 500);
        }
    }
}
