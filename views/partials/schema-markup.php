<?php




$schemaType = $schemaType ?? 'Organization';
?>
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "<?= SITE_NAME ?>",
    "description": "<?= SITE_DESCRIPTION ?>",
    "url": "<?= SITE_URL ?>",
    "logo": "<?= asset('img/logo/logo.svg') ?>",
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "<?= SITE_PHONE ?>",
        "contactType": "customer service",
        "email": "<?= SITE_EMAIL ?>",
        "areaServed": "Worldwide",
        "availableLanguage": ["English"]
    },
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Analytics Drive, Suite 500",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "postalCode": "94105",
        "addressCountry": "US"
    },
    "sameAs": [
        "<?= SOCIAL_LINKEDIN ?>",
        "<?= SOCIAL_TWITTER ?>",
        "<?= SOCIAL_GITHUB ?>",
        "<?= SOCIAL_YOUTUBE ?>"
    ],
    "foundingDate": "2014",
    "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "minValue": 50,
        "maxValue": 100
    },
    "knowsAbout": [
        "Google Analytics 4",
        "Adobe Analytics",
        "Cloud Engineering",
        "Artificial Intelligence",
        "Data Analytics",
        "Machine Learning",
        "LLM Integration"
    ]
}
</script>

<?php if (is_page('home')): ?>
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "<?= SITE_NAME ?>",
    "url": "<?= SITE_URL ?>",
    "potentialAction": {
        "@type": "SearchAction",
        "target": "<?= SITE_URL ?>/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
    }
}
</script>

<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "<?= SITE_NAME ?>",
    "image": "<?= asset('img/og/default-og.jpg') ?>",
    "priceRange": "$$$",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Analytics Drive, Suite 500",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "postalCode": "94105",
        "addressCountry": "US"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127"
    },
    "serviceType": [
        "Analytics Consulting",
        "Cloud Engineering",
        "AI Automation",
        "Data Analytics"
    ]
}
</script>
<?php endif; ?>
