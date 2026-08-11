<?php








function asset(string $path): string {
    return SITE_URL . '/assets/' . ltrim($path, '/') . '?v=' . ASSET_VERSION;
}




function url(string $path = ''): string {
    return SITE_URL . '/' . ltrim($path, '/');
}




function escape(string $value): string {
    return htmlspecialchars($value, ENT_QUOTES | ENT_HTML5, 'UTF-8');
}




function csrf_token(): string {
    if (empty($_SESSION[CSRF_TOKEN_NAME])) {
        $_SESSION[CSRF_TOKEN_NAME] = bin2hex(random_bytes(32));
    }
    return $_SESSION[CSRF_TOKEN_NAME];
}




function csrf_field(): string {
    return '<input type="hidden" name="' . CSRF_TOKEN_NAME . '" value="' . csrf_token() . '">';
}




function csrf_verify(string $token): bool {
    return isset($_SESSION[CSRF_TOKEN_NAME]) && hash_equals($_SESSION[CSRF_TOKEN_NAME], $token);
}




function active_nav(string $page, string $current): string {
    return $page === $current ? 'active' : '';
}




function truncate(string $text, int $length = 150, string $suffix = '...'): string {
    if (mb_strlen($text) <= $length) {
        return $text;
    }
    return mb_substr($text, 0, $length) . $suffix;
}




function format_date(string $date, string $format = 'M d, Y'): string {
    return date($format, strtotime($date));
}




function slugify(string $text): string {
    $text = strtolower(trim($text));
    $text = preg_replace('/[^a-z0-9-]/', '-', $text);
    $text = preg_replace('/-+/', '-', $text);
    return trim($text, '-');
}




function partial(string $name, array $data = []): void {
    extract($data);
    include VIEWS_PATH . '/partials/' . $name . '.php';
}




function section(string $name, array $data = []): void {
    extract($data);
    include VIEWS_PATH . '/sections/' . $name . '.php';
}




function format_number(int $number): string {
    if ($number >= 1000000) {
        return round($number / 1000000, 1) . 'M';
    }
    if ($number >= 1000) {
        return round($number / 1000, 1) . 'K';
    }
    return (string) $number;
}




function reading_time(string $content): int {
    $words = str_word_count(strip_tags($content));
    return max(1, (int) ceil($words / 200));
}




function is_page(string $page): bool {
    global $currentPage;
    return ($currentPage ?? 'home') === $page;
}




function og_meta(array $meta): string {
    $output = '';
    $defaults = [
        'title' => SITE_NAME . ' — ' . SITE_TAGLINE,
        'description' => SITE_DESCRIPTION,
        'image' => asset('img/og/default-og.jpg'),
        'url' => SITE_URL,
        'type' => 'website',
    ];

    $meta = array_merge($defaults, $meta);

    foreach ($meta as $property => $content) {
        $output .= '<meta property="og:' . escape($property) . '" content="' . escape($content) . '">' . "\n";
        if ($property === 'title') {
            $output .= '<meta name="twitter:title" content="' . escape($content) . '">' . "\n";
        }
        if ($property === 'description') {
            $output .= '<meta name="twitter:description" content="' . escape($content) . '">' . "\n";
        }
        if ($property === 'image') {
            $output .= '<meta name="twitter:image" content="' . escape($content) . '">' . "\n";
        }
    }
    $output .= '<meta name="twitter:card" content="summary_large_image">' . "\n";

    return $output;
}
