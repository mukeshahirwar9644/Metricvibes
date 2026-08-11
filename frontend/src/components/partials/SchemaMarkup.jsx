import React from 'react';

export default function SchemaMarkup() {
    return (
        <>
            
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "",
    "description": "",
    "url": "",
    "logo": "/assets/img/logo/logo.svg",
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "",
        "contactType": "customer service",
        "email": "",
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
        "",
        "",
        "",
        ""
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


<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "",
    "url": "",
    "potentialAction": {
        "@type": "SearchAction",
        "target": "/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
    }
}
</script>

<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "",
    "image": "/assets/img/og/default-og.jpg",
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


        </>
    );
}
