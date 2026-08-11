<?php
require_once __DIR__ . '/../app/config/config.php';
require_once __DIR__ . '/../app/helpers/functions.php';
require_once __DIR__ . '/../app/controllers/BlogController.php';

// We need to bypass the protected/private access. We can use Reflection or just regex since the array is right there.
// Wait, the method `getBlogData()` is private. Let's use Reflection.

$controller = new BlogController();
$reflection = new ReflectionClass($controller);
$method = $reflection->getMethod('getBlogData');
$method->setAccessible(true);
$blogs = $method->invoke($controller);

foreach ($blogs as $key => &$blog) {
    $filePath = __DIR__ . '/../views/pages/blogs/' . $key . '.php';
    if (file_exists($filePath)) {
        $content = file_get_contents($filePath);
        // We might want to remove the FAQ and Comments sections from the raw HTML to keep it clean, but for now just take the whole thing.
        $blog['content'] = $content;
    } else {
        $blog['content'] = '';
    }
}

echo json_encode(array_values($blogs));
