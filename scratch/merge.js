const fs = require('fs');

const path = 'd:/Metricvibesweb/app/controllers/BlogController.php';
let content = fs.readFileSync(path, 'utf8');

const blogsMatch = content.match(/\$blogs = \[([\s\S]*?)\];\s*\$this->render/);
const blogDataMatch = content.match(/\$blogData = \[([\s\S]*?)\];\s*if \(array_key_exists/);

if (!blogsMatch || !blogDataMatch) {
    console.log('Match failed');
    if (!blogsMatch) console.log('blogsMatch failed');
    if (!blogDataMatch) console.log('blogDataMatch failed');
    process.exit(1);
}

const blogsText = blogsMatch[1];
const blogDataText = blogDataMatch[1];

const imageRegex = /'slug'\s*=>\s*'([^']+)'[\s\S]*?'image_url'\s*=>\s*(asset\([^)]+\))/g;
let match;
const images = {};

while ((match = imageRegex.exec(blogsText)) !== null) {
    images[match[1]] = match[2];
}

const newBlogDataText = blogDataText.replace(/'slug'\s*=>\s*'([^']+)',/g, (m, slug) => {
    if (images[slug]) {
        return `'slug' => '${slug}',\n                'image_url' => ${images[slug]},`;
    }
    return m;
});

let newContent = content.replace(/\$blogs = \[[\s\S]*?\];/g, '$blogs = array_values($this->getBlogData());');
newContent = newContent.replace(/\$blogData = \[[\s\S]*?\];/g, '$blogData = $this->getBlogData();');

const func = `    private function getBlogData(): array {\n        return [\n${newBlogDataText}\n        ];\n    }\n\n    public function index`;
newContent = newContent.replace('public function index', func);

fs.writeFileSync(path, newContent);
console.log('Success');
