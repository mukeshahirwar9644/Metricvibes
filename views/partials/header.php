<?php






$pageTitle = $pageTitle ?? SITE_NAME . ' — ' . SITE_TAGLINE;
$pageDescription = $pageDescription ?? SITE_DESCRIPTION;
$pageKeywords = $pageKeywords ?? 'analytics consulting, GA4 migration, cloud engineering, AI automation, data analytics, enterprise consulting';
$pageImage = $pageImage ?? asset('img/og/default-og.jpg');
$pageUrl = $pageUrl ?? SITE_URL;
$pageType = $pageType ?? 'website';
?>
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Primary Meta Tags -->
    <title><?= escape($pageTitle) ?></title>
    <meta name="title" content="<?= escape($pageTitle) ?>">
    <meta name="description" content="<?= escape($pageDescription) ?>">
    <meta name="keywords" content="<?= escape($pageKeywords) ?>">
    <meta name="author" content="<?= SITE_NAME ?>">
    <meta name="robots" content="index, follow">
    <meta name="theme-color" content="#FFFFFF">
    <meta name="ga-measurement-id" content="<?= GA_MEASUREMENT_ID ?>">

    <!-- Canonical -->
    <link rel="canonical" href="<?= escape($pageUrl) ?>">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="<?= escape($pageType) ?>">
    <meta property="og:url" content="<?= escape($pageUrl) ?>">
    <meta property="og:title" content="<?= escape($pageTitle) ?>">
    <meta property="og:description" content="<?= escape($pageDescription) ?>">
    <meta property="og:image" content="<?= escape($pageImage) ?>">
    <meta property="og:site_name" content="<?= SITE_NAME ?>">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="<?= escape($pageUrl) ?>">
    <meta name="twitter:title" content="<?= escape($pageTitle) ?>">
    <meta name="twitter:description" content="<?= escape($pageDescription) ?>">
    <meta name="twitter:image" content="<?= escape($pageImage) ?>">

    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="<?= asset('img/logo/favicon.svg') ?>">
    <link rel="apple-touch-icon" href="<?= asset('img/logo/apple-touch-icon.png') ?>">

    <!-- Preconnect for Performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://cdnjs.cloudflare.com">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet">

    <!-- CSS Libraries -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="<?= asset('css/main.css') ?>" rel="stylesheet">
    <link href="<?= asset('css/components.css') ?>" rel="stylesheet">
    <link href="<?= asset('css/dark-mode.css') ?>" rel="stylesheet">
</head>
<body class="has-announcement">
