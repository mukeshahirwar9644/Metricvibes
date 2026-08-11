<?php





class Router {
    private array $routes = [
        'GET'  => [],
        'POST' => []
    ];

    


    public function get(string $path, array|callable $handler): void {
        $this->routes['GET'][$this->normalizePath($path)] = $handler;
    }

    


    public function post(string $path, array|callable $handler): void {
        $this->routes['POST'][$this->normalizePath($path)] = $handler;
    }

    


    public function dispatch(string $uri, string $method): void {
        $path = $this->normalizePath(parse_url($uri, PHP_URL_PATH) ?? '');
        $method = strtoupper($method);

        if (isset($this->routes[$method][$path])) {
            $handler = $this->routes[$method][$path];
            $this->executeHandler($handler);
            return;
        }

        
        foreach ($this->routes[$method] as $routePath => $handler) {
            $pattern = preg_replace('/\{([a-zA-Z0-9_]+)\}/', '([^/]+)', $routePath);
            $pattern = "#^" . $pattern . "$#";

            if (preg_match($pattern, $path, $matches)) {
                array_shift($matches); 
                $this->executeHandler($handler, $matches);
                return;
            }
        }

        
        http_response_code(404);
        $controller = new HomeController();
        $controller->render('404', ['currentPage' => '404']);
    }

    


    private function normalizePath(string $path): string {
        $path = trim($path, '/');
        return $path === '' ? '/' : '/' . $path;
    }

    


    private function executeHandler(array|callable $handler, array $params = []): void {
        if (is_callable($handler)) {
            call_user_func_array($handler, $params);
            return;
        }

        if (is_array($handler)) {
            [$controllerClass, $method] = $handler;

            if (class_exists($controllerClass)) {
                $controller = new $controllerClass();
                if (method_exists($controller, $method)) {
                    call_user_func_array([$controller, $method], $params);
                    return;
                }
            }
        }

        http_response_code(500);
        die("Route Handler execution failed.");
    }
}
