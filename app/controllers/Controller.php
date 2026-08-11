<?php




abstract class Controller {

    


    public function render(string $view, array $data = [], string $layout = 'main'): void {
        extract($data);
        $pageContent = VIEWS_PATH . '/pages/' . $view . '.php';

        if (!file_exists($pageContent)) {
            $pageContent = VIEWS_PATH . '/pages/404.php';
        }

        include VIEWS_PATH . '/layouts/' . $layout . '.php';
    }

    


    protected function json(array $data, int $statusCode = 200): void {
        header('Content-Type: application/json');
        http_response_code($statusCode);
        echo json_encode($data);
        exit;
    }

    


    protected function redirect(string $url): void {
        header('Location: ' . $url);
        exit;
    }
}
