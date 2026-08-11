<?php
$content = file_get_contents('d:/Metricvibesweb/app/controllers/BlogController.php');

preg_match('/\$blogs = \[(.*?)\];\s*\$this->render/s', $content, $blogs_match);
preg_match('/\$blogData = \[(.*?)\];\s*if \(!isset/s', $content, $blog_data_match);

$blogs_text = $blogs_match[1];
$blog_data_text = $blog_data_match[1];

preg_match_all('/\'slug\'\s*=>\s*\'([^\']+)\'.*?\'image_url\'\s*=>\s*(asset\([^)]+\))/s', $blogs_text, $image_matches, PREG_SET_ORDER);

$images = [];
foreach ($image_matches as $m) {
    $images[$m[1]] = $m[2];
}

$new_blog_data_text = preg_replace_callback('/\'slug\'\s*=>\s*\'([^\']+)\',/s', function($m) use ($images) {
    $slug = $m[1];
    if (isset($images[$slug])) {
        return "'slug' => '$slug',\n                'image_url' => " . $images[$slug] . ",";
    }
    return $m[0];
}, $blog_data_text);

// Now replace $blogs array with array_values($blogData) in index
$new_content = preg_replace('/\$blogs = \[.*?\];/s', '$blogs = array_values($this->getBlogData());', $content);

// And replace $blogData array in detail with $blogData = $this->getBlogData();
$new_content = preg_replace('/\$blogData = \[.*?\];/s', '$blogData = $this->getBlogData();', $new_content);

// Inject private function getBlogData() before index()
$func = "    private function getBlogData(): array {\n        return [\n" . $new_blog_data_text . "\n        ];\n    }\n\n    public function index";

$new_content = str_replace('public function index', $func, $new_content);

file_put_contents('d:/Metricvibesweb/app/controllers/BlogController.php', $new_content);
echo "Done.";
