<?php





class AuthMiddleware {

    


    public static function check(?array $roles = null): bool {
        Session::start();
        $user = Session::get('admin_user');

        if (!$user) {
            if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest') {
                header('Content-Type: application/json');
                http_response_code(401);
                echo json_encode(['status' => 'error', 'message' => 'Unauthorized. Please login.']);
                exit;
            }

            header('Location: ' . SITE_URL . '/admin/login');
            exit;
        }

        if ($roles !== null && !in_array($user['role'], $roles)) {
            http_response_code(403);
            die('Forbidden: Insufficient Permissions.');
        }

        return true;
    }
}
