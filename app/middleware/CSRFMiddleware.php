<?php





class CSRFMiddleware {

    


    public static function handle(): bool {
        $method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

        if (in_array(strtoupper($method), ['POST', 'PUT', 'PATCH', 'DELETE'])) {
            $token = $_POST[CSRF_TOKEN_NAME] ?? $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '';

            if (!csrf_verify($token)) {
                if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest') {
                    header('Content-Type: application/json');
                    http_response_code(403);
                    echo json_encode([
                        'status' => 'error',
                        'message' => 'CSRF Token validation failed. Please refresh the page and try again.'
                    ]);
                    exit;
                } else {
                    http_response_code(403);
                    die('CSRF Token Validation Failed.');
                }
            }
        }

        return true;
    }
}
