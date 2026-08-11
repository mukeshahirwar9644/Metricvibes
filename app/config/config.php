<?php








define('APP_ENV', 'development'); 
define('APP_DEBUG', APP_ENV === 'development');


if (APP_DEBUG) {
    error_reporting(E_ALL);
    ini_set('display_errors', '1');
} else {
    error_reporting(0);
    ini_set('display_errors', '0');
}




define('SITE_NAME', 'MetricVibes');
define('SITE_TAGLINE', 'Your Analytics, Cloud & AI Implementation Partner');
define('SITE_DESCRIPTION', 'MetricVibes is a premium enterprise consulting firm specializing in analytics implementation, cloud engineering, and AI automation. We help businesses transform data into actionable insights.');
$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') || (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') ? 'https' : 'http';
$host = $_SERVER['HTTP_HOST'] ?? 'localhost';
$scriptDir = str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME']));
$basePath = ($scriptDir === '/' || $scriptDir === '\\') ? '' : $scriptDir;
define('SITE_URL', rtrim($protocol . '://' . $host . $basePath, '/'));
define('SITE_EMAIL', 'sales@metricvibes.com');
define('SITE_PHONE', '+1 (555) 123-4567');
define('SITE_ADDRESS', '123 Analytics Drive, Suite 500, San Francisco, CA 94105');




define('ROOT_PATH', dirname(__DIR__, 2));
define('APP_PATH', ROOT_PATH . '/app');
define('VIEWS_PATH', ROOT_PATH . '/views');
define('PUBLIC_PATH', ROOT_PATH . '/public');
define('STORAGE_PATH', ROOT_PATH . '/storage');
define('UPLOAD_PATH', STORAGE_PATH . '/uploads');




define('DB_HOST', 'localhost');
define('DB_NAME', 'metricvibes');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_CHARSET', 'utf8mb4');




define('CSRF_TOKEN_NAME', '_csrf_token');
define('SESSION_LIFETIME', 7200); 
define('BCRYPT_COST', 12);




define('SOCIAL_LINKEDIN', 'https://www.linkedin.com/company/metric-vibes/');
define('SOCIAL_TWITTER', 'https://x.com/MetricVibes');
define('SOCIAL_GITHUB', 'https://github.com/metricvibes');
define('SOCIAL_YOUTUBE', 'https://youtube.com/@metricvibes');
define('SOCIAL_INSTAGRAM', 'https://instagram.com/metricvibes');




define('WHATSAPP_NUMBER', '15551234567');
define('WHATSAPP_MESSAGE', 'Hi MetricVibes! I\'d like to discuss a project.');




define('GOOGLE_MAPS_KEY', ''); 
define('CALENDLY_URL', 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0HNRcFwK9OaEiO3Ygv6CrPg_H3gkYtXJekUGW7t9FB3TSZY0aAzWAs0aFVZjIVCpuBiCSb1boc');
define('GA_MEASUREMENT_ID', ''); 




define('ASSET_VERSION', '1.1.54');
