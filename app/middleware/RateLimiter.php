<?php





class RateLimiter {

    



    public static function check(string $action = 'general', int $maxRequests = 5, int $decaySeconds = 60): bool {
        Session::start();
        $ip = $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
        $key = "rate_limit_{$action}_" . md5($ip);

        $data = Session::get($key, ['count' => 0, 'start' => time()]);

        if (time() - $data['start'] > $decaySeconds) {
            $data = ['count' => 1, 'start' => time()];
        } else {
            $data['count']++;
        }

        Session::set($key, $data);

        if ($data['count'] > $maxRequests) {
            if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest') {
                header('Content-Type: application/json');
                http_response_code(429);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Too many requests. Please slow down and try again in a minute.'
                ]);
                exit;
            } else {
                http_response_code(429);
                die('Too many requests. Please try again later.');
            }
        }

        return true;
    }
}
