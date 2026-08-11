<?php




require_once __DIR__ . '/Controller.php';

class ServiceController extends Controller {

    public function index(): void {
        $this->render('services', [
            'currentPage'   => 'services',
            'pageTitle'     => 'Enterprise Analytics, Cloud & AI Services — ' . SITE_NAME,
            'pageDescription' => 'Explore MetricVibes consulting services: GA4 Migration, Adobe Analytics, Cloud Engineering, LLM Integration & AI Automation.'
        ]);
    }

    public function detail(string $serviceSlug): void {
        $this->render('service-detail', [
            'currentPage'   => 'services',
            'serviceSlug'   => $serviceSlug,
            'pageTitle'     => ucwords(str_replace('-', ' ', $serviceSlug)) . ' Consulting — ' . SITE_NAME,
            'pageDescription' => 'Enterprise ' . str_replace('-', ' ', $serviceSlug) . ' consulting and implementation services by MetricVibes.'
        ]);
    }
}
