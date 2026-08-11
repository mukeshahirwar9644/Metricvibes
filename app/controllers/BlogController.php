<?php




require_once __DIR__ . '/Controller.php';
require_once APP_PATH . '/models/Blog.php';

class BlogController extends Controller {

        private function getBlogData(): array {
        return [

            'how-to-audit-and-clean-up-a-bloated-gtm-container' => [
                'id' => 1,
                'title' => 'How to Audit and Clean Up a Bloated GTM Container',
                'slug' => 'how-to-audit-and-clean-up-a-bloated-gtm-container',
                'comments_count' => 2,
                'image_url' => asset('img/hero/hero-bg.jpg'),
                'excerpt' => 'A bloated GTM container slows your site and corrupts your data.',
                'meta_title' => 'How to Audit and Clean Up a Bloated GTM Container',
                'meta_description' => 'A bloated GTM container slows your site and corrupts your data.',
                'published_at' => '2026-04-28 09:15:00',
                'category_name' => 'Analytics',
                'author_name' => 'Metric Vibes'
            ],
            '3-marketing-kpis-cfo-cares-about' => [
                'id' => 2,
                'title' => '3 Marketing KPIs for CFO Actually Cares About',
                'slug' => '3-marketing-kpis-cfo-cares-about',
                'image_url' => asset('img/hero/hero-workspace-bg.png'),
                'excerpt' => 'Beyond Vanity Metrics: The Only 3 Marketing KPIs Your CFO Actually Cares About.',
                'meta_title' => '3 Marketing KPIs for CFO Actually Cares About',
                'meta_description' => 'Beyond Vanity Metrics: The Only 3 Marketing KPIs Your CFO Actually Cares About.',
                'published_at' => '2026-04-08 10:30:00',
                'category_name' => 'Marketing',
                'author_name' => 'Metric Vibes'
            ],
            'what-vs-why-actionable-user-insights' => [
                'id' => 3,
                'title' => 'What vs. Why: Unlocking Actionable User Insights',
                'slug' => 'what-vs-why-actionable-user-insights',
                'image_url' => asset('img/hero/hero-bg.jpg'),
                'excerpt' => 'The What vs. Why Framework: How to Stop Guessing and Actually Understand User Behavior.',
                'meta_title' => 'What vs. Why: Unlocking Actionable User Insights',
                'meta_description' => 'The What vs. Why Framework: How to Stop Guessing and Actually Understand User Behavior.',
                'published_at' => '2026-03-20 14:00:00',
                'category_name' => 'UX Research',
                'author_name' => 'Metric Vibes'
            ],
            'the-checkbox-migration-problem-ga4-data' => [
                'id' => 4,
                'title' => 'GA4 Migration Data Accuracy Audit: Fix Errors Tracking',
                'slug' => 'the-checkbox-migration-problem-ga4-data',
                'image_url' => asset('img/hero/hero-workspace-bg.png'),
                'excerpt' => 'The sunsetting of Universal Analytics and the mandatory migration to Google Analytics 4 has left many scrambling to replicate existing setups.',
                'meta_title' => 'GA4 Migration Data Accuracy Audit: Fix Errors Tracking',
                'meta_description' => 'The sunsetting of Universal Analytics and the mandatory migration to Google Analytics 4 has left many scrambling to replicate existing setups.',
                'published_at' => '2026-02-28 11:00:00',
                'category_name' => 'Analytics',
                'author_name' => 'Metric Vibes'
            ],
            'your-analytics-team-is-a-cost-center-not-a-growth-engine' => [
                'id' => 5,
                'title' => 'Your Analytics Team Is a Cost Center, Not a Growth Engine. Here\'s How to Fix It',
                'slug' => 'your-analytics-team-is-a-cost-center-not-a-growth-engine',
                'comments_count' => 9,
                'image_url' => asset('img/hero/hero-bg.jpg'),
                'excerpt' => 'You’ve invested in the tools, hired the talent, and yet your analytics team remains a reactive reporting factory, not a proactive engine of growth.',
                'meta_title' => 'Your Analytics Team Is a Cost Center, Not a Growth Engine.',
                'meta_description' => 'You’ve invested in the tools, hired the talent, and yet your analytics team remains a reactive reporting factory, not a proactive engine of growth.',
                'published_at' => '2026-02-09 14:00:00',
                'category_name' => 'Strategy',
                'author_name' => 'Metric Vibes'
            ],
            'last-click-is-lying-to-you-a-framework-for-proving-top-of-funnel-roi' => [
                'id' => 6,
                'title' => 'Prove Top-of-Funnel ROI Beyond Last Click Attribution',
                'slug' => 'last-click-is-lying-to-you-a-framework-for-proving-top-of-funnel-roi',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-workspace-bg.png'),
                'excerpt' => 'The traditional "last-click" attribution model often misrepresents the true impact of marketing efforts, particularly top-of-funnel activities.',
                'meta_title' => 'Prove Top-of-Funnel ROI Beyond Last Click Attribution',
                'meta_description' => 'The traditional "last-click" attribution model often misrepresents the true impact of marketing efforts, particularly top-of-funnel activities.',
                'published_at' => '2026-01-20 09:00:00',
                'category_name' => 'Analytics',
                'author_name' => 'Metric Vibes'
            ],
            'your-analytics-show-clicks-but-cfo-sees-costs-proving-roi' => [
                'id' => 7,
                'title' => 'Your Analytics Show Clicks, But Your CFO Sees Costs: A Guide to Proving Marketing\'s ROI',
                'slug' => 'your-analytics-show-clicks-but-cfo-sees-costs-proving-roi',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-bg.jpg'),
                'excerpt' => 'Demonstrating the tangible value of marketing efforts to a financially-minded audience by moving beyond vanity metrics.',
                'meta_title' => 'Your Analytics Show Clicks, But Your CFO Sees Costs: Proving Marketing\'s ROI',
                'meta_description' => 'Demonstrating the tangible value of marketing efforts to a financially-minded audience by moving beyond vanity metrics.',
                'published_at' => '2026-01-01 14:00:00',
                'category_name' => 'Analytics',
                'author_name' => 'Metric Vibes'
            ],
            'funnel-leak-playbook-step-by-step-guide' => [
                'id' => 8,
                'title' => 'The Funnel Leak Playbook:Pinpoint GA4 Form Abandonment guide',
                'slug' => 'funnel-leak-playbook-step-by-step-guide',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-workspace-bg.png'),
                'excerpt' => 'Identifying the exact point of friction is key to optimization. This post outlines a practical, GA4-centric approach to diagnose these funnel leaks.',
                'meta_title' => 'The Funnel Leak Playbook: Pinpointing Form Abandonment with GA4',
                'meta_description' => 'Identifying the exact point of friction is key to optimization. This post outlines a practical, GA4-centric approach to diagnose these funnel leaks.',
                'published_at' => '2025-12-12 10:00:00',
                'category_name' => 'Optimization',
                'author_name' => 'Metric Vibes'
            ],
            'stop-ignoring-bigquery-unlock-advanced-ga4-insights' => [
                'id' => 9,
                'title' => 'Stop Ignoring BigQuery: Unlock Advanced GA4 Insights',
                'slug' => 'stop-ignoring-bigquery-unlock-advanced-ga4-insights',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-bg.jpg'),
                'excerpt' => 'Google Analytics 4 offers a powerful link to BigQuery, opening doors to a deeper level of analysis that standard reports simply can’t reach.',
                'meta_title' => 'Stop Ignoring BigQuery: Unlock Advanced GA4 Insights',
                'meta_description' => 'Google Analytics 4 offers a powerful link to BigQuery, opening doors to a deeper level of analysis that standard reports simply can’t reach.',
                'published_at' => '2025-11-22 09:30:00',
                'category_name' => 'Analytics',
                'author_name' => 'Metric Vibes'
            ],
            'is-your-ga4-data-accurate-5-telltale-signs-and-how-to-fix-them' => [
                'id' => 10,
                'title' => 'Is Your GA4 Data Accurate? 5 Telltale Signs and How to Fix Them',
                'slug' => 'is-your-ga4-data-accurate-5-telltale-signs-and-how-to-fix-them',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-workspace-bg.png'),
                'excerpt' => 'Data accuracy is paramount in any analytics platform. This post explores five common signs of inaccurate GA4 data and how to fix them.',
                'meta_title' => 'Is Your GA4 Data Accurate? 5 Telltale Signs and How to Fix Them',
                'meta_description' => 'Data accuracy is paramount in any analytics platform. This post explores five common signs of inaccurate GA4 data and how to fix them.',
                'published_at' => '2025-10-24 10:00:00',
                'category_name' => 'Analytics',
                'author_name' => 'Metric Vibes'
            ],
            'meta-x-google-analytics-integration-better-roas' => [
                'id' => 11,
                'title' => 'The New Meta x Google Analytics Integration: A Step-by-Step Guide to Connecting Your Data for Better ROAS',
                'slug' => 'meta-x-google-analytics-integration-better-roas',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-bg.jpg'),
                'excerpt' => 'Optimizing Meta ad campaigns requires accurate conversion data. Leveraging first-party data from GA4 offers a robust solution.',
                'meta_title' => 'The New Meta x Google Analytics Integration for Better ROAS',
                'meta_description' => 'Optimizing Meta ad campaigns requires accurate conversion data. Leveraging first-party data from GA4 offers a robust solution.',
                'published_at' => '2025-10-14 11:30:00',
                'category_name' => 'Integration',
                'author_name' => 'Metric Vibes'
            ],
            'from-data-overload-to-actionable-insights-startups-guide' => [
                'id' => 12,
                'title' => 'From Data Overload to Actionable Insights: A Startup\'s Guide to Making Faster Decisions.',
                'slug' => 'from-data-overload-to-actionable-insights-startups-guide',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-workspace-bg.png'),
                'excerpt' => 'The challenge isn’t collecting data; it’s transforming it into fuel for rapid, informed action. Enter the Insight Velocity Framework.',
                'meta_title' => 'From Data Overload to Actionable Insights: A Startup\'s Guide',
                'meta_description' => 'The challenge isn’t collecting data; it’s transforming it into fuel for rapid, informed action. Enter the Insight Velocity Framework.',
                'published_at' => '2025-09-25 10:00:00',
                'category_name' => 'Strategy',
                'author_name' => 'Metric Vibes'
            ],
            'bigquery-vs-redshift-which-data-warehouse-is-right' => [
                'id' => 13,
                'title' => 'BigQuery vs Redshift: Which Data Warehouse Is Right for Marketing Analytics?',
                'slug' => 'bigquery-vs-redshift-which-data-warehouse-is-right',
                'comments_count' => 7,
                'image_url' => asset('img/hero/hero-bg.jpg'),
                'excerpt' => 'Marketing leaders, startup founders, and product managers must weigh the options between BigQuery and Redshift—two industry giants.',
                'meta_title' => 'BigQuery vs Redshift: Which Data Warehouse Is Right',
                'meta_description' => 'Marketing leaders, startup founders, and product managers must weigh the options between BigQuery and Redshift—two industry giants.',
                'published_at' => '2025-09-05 09:00:00',
                'category_name' => 'Data Warehousing',
                'author_name' => 'Metric Vibes'
            ],
            'server-side-vs-client-side-tracking-which-is-right-for-your-business' => [
                'id' => 14,
                'title' => 'Server-Side vs. Client-Side Tracking: Which Is Right for Your Business?',
                'slug' => 'server-side-vs-client-side-tracking-which-is-right-for-your-business',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-workspace-bg.png'),
                'excerpt' => 'Choosing between server-side and client-side tracking isn’t just a technical call—it’s a strategic decision that can shape your data accuracy.',
                'meta_title' => 'Server-Side vs. Client-Side Tracking: Which Is Right',
                'meta_description' => 'Choosing between server-side and client-side tracking isn’t just a technical call—it’s a strategic decision that can shape your data accuracy.',
                'published_at' => '2025-08-17 10:00:00',
                'category_name' => 'Tracking & Analytics',
                'author_name' => 'Metric Vibes'
            ],
            'personalization-isnt-expensive-5-low-cost-tactics' => [
                'id' => 15,
                'title' => 'Personalization Isn\'t Expensive: 5 Low-Cost Tactics for E-commerce Sites',
                'slug' => 'personalization-isnt-expensive-5-low-cost-tactics',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-bg.jpg'),
                'excerpt' => 'What if you could engage more deeply with your customers through personalization strategies that are both effective and budget-friendly?',
                'meta_title' => 'Personalization Isn’t Expensive: 5 Low-Cost Tactics',
                'meta_description' => 'What if you could engage more deeply with your customers through personalization strategies that are both effective and budget-friendly?',
                'published_at' => '2025-07-28 10:30:00',
                'category_name' => 'E-commerce',
                'author_name' => 'Metric Vibes'
            ],
            'amplitude-vs-mixpanel-vs-ga4-best-for-startups' => [
                'id' => 16,
                'title' => 'Amplitude vs Mixpanel vs GA4: Which Is Best for Growth-Stage Startups?',
                'slug' => 'amplitude-vs-mixpanel-vs-ga4-best-for-startups',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-workspace-bg.png'),
                'excerpt' => 'Choosing the right analytics tool can be a daunting yet critical decision for growth-stage startups. Compare Amplitude, Mixpanel, and GA4.',
                'meta_title' => 'Amplitude vs Mixpanel vs GA4: Which Is Best',
                'meta_description' => 'Choosing the right analytics tool can be a daunting yet critical decision for growth-stage startups. Compare Amplitude, Mixpanel, and GA4.',
                'published_at' => '2025-07-09 09:00:00',
                'category_name' => 'Analytics',
                'author_name' => 'Metric Vibes'
            ],
            'the-hidden-costs-of-bad-analytics-implementation' => [
                'id' => 17,
                'title' => 'The Hidden Costs of Bad Analytics Implementation (And How to Avoid Them)',
                'slug' => 'the-hidden-costs-of-bad-analytics-implementation',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-bg.jpg'),
                'excerpt' => 'Poorly implemented analytics can silently bleed resources, distort decision-making processes, and ultimately lead to significant long-term costs.',
                'meta_title' => 'The Hidden Costs of Bad Analytics Implementation',
                'meta_description' => 'Poorly implemented analytics can silently bleed resources, distort decision-making processes, and ultimately lead to significant long-term costs.',
                'published_at' => '2025-06-19 11:00:00',
                'category_name' => 'Strategy',
                'author_name' => 'Metric Vibes'
            ],
            'revolutionizing-ux-ai-driven-personalization-techniques-for-b2b' => [
                'id' => 18,
                'title' => 'Revolutionizing UX: AI-Driven Personalization Techniques for B2B business',
                'slug' => 'revolutionizing-ux-ai-driven-personalization-techniques-for-b2b',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-workspace-bg.png'),
                'excerpt' => 'The efficient use of AI in personalizing website experiences enhances user engagement and significantly boosts conversion rates.',
                'meta_title' => 'Revolutionizing UX: AI-Driven Personalization Techniques',
                'meta_description' => 'The efficient use of AI in personalizing website experiences enhances user engagement and significantly boosts conversion rates.',
                'published_at' => '2025-05-30 10:00:00',
                'category_name' => 'UX & Personalization',
                'author_name' => 'Metric Vibes'
            ],
            'unlocking-analytics-improve-roi-with-better-data-insights' => [
                'id' => 19,
                'title' => 'Unlocking Analytics: Improve ROI with Better Data Insights',
                'slug' => 'unlocking-analytics-improve-roi-with-better-data-insights',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-bg.jpg'),
                'excerpt' => 'Data acts as both the currency and the compass for businesses. Unlock the full potential of your data to improve ROI.',
                'meta_title' => 'Unlocking Analytics: Improve ROI with Better Data Insights',
                'meta_description' => 'Data acts as both the currency and the compass for businesses. Unlock the full potential of your data to improve ROI.',
                'published_at' => '2025-05-11 09:30:00',
                'category_name' => 'Analytics',
                'author_name' => 'Metric Vibes'
            ],
            'leverage-analytics-for-directional-insights-not-absolute-accuracy' => [
                'id' => 20,
                'title' => 'Leverage Analytics for Directional Insights and Not Absolute Accuracy',
                'slug' => 'leverage-analytics-for-directional-insights-not-absolute-accuracy',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-workspace-bg.png'),
                'excerpt' => 'Analytics should serve as a guide for strategic decisions, not as an infallible source of truth.',
                'meta_title' => 'Leverage Analytics for Directional Insights',
                'meta_description' => 'Analytics should serve as a guide for strategic decisions, not as an infallible source of truth.',
                'published_at' => '2025-04-21 11:00:00',
                'category_name' => 'Strategy',
                'author_name' => 'Metric Vibes'
            ],
            'mastering-multivariate-tests-for-maximum-conversion-impact' => [
                'id' => 21,
                'title' => 'Mastering Multivariate Tests for Maximum Conversion Impact',
                'slug' => 'mastering-multivariate-tests-for-maximum-conversion-impact',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-bg.jpg'),
                'excerpt' => 'Multivariate testing emerges as a powerful tool. Businesses that employ advanced testing strategies can see up to a 30% improvement in conversion rates.',
                'meta_title' => 'Mastering Multivariate Tests for Maximum Conversion Impact',
                'meta_description' => 'Multivariate testing emerges as a powerful tool. Businesses that employ advanced testing strategies can see up to a 30% improvement in conversion rates.',
                'published_at' => '2025-04-02 10:30:00',
                'category_name' => 'Optimization',
                'author_name' => 'Metric Vibes'
            ],
            'unlocking-hyper-personalization-ai-role-in-tailored-marketing-experiences' => [
                'id' => 22,
                'title' => 'Unlocking Hyper-Personalization: AI\'s Role in Tailored Marketing Experiences',
                'slug' => 'unlocking-hyper-personalization-ai-role-in-tailored-marketing-experiences',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-workspace-bg.png'),
                'excerpt' => 'Artificial intelligence is enhancing the way brands interact with their customers by enabling real-time personalization.',
                'meta_title' => 'Unlocking Hyper-Personalization: AI\'s Role in Tailored Marketing',
                'meta_description' => 'Artificial intelligence is enhancing the way brands interact with their customers by enabling real-time personalization.',
                'published_at' => '2025-03-13 11:30:00',
                'category_name' => 'AI & Personalization',
                'author_name' => 'Metric Vibes'
            ],
            'understanding-data-accuracy-in-the-era-of-consent-driven-analytics' => [
                'id' => 23,
                'title' => 'Understanding Data Accuracy in the Era of Consent-Driven Analytics',
                'slug' => 'understanding-data-accuracy-in-the-era-of-consent-driven-analytics',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-bg.jpg'),
                'excerpt' => 'Evolving privacy laws such as the GDPR have introduced new challenges in how data is collected and analyzed.',
                'meta_title' => 'Understanding Data Accuracy in Consent-Driven Analytics',
                'meta_description' => 'Evolving privacy laws such as the GDPR have introduced new challenges in how data is collected and analyzed.',
                'published_at' => '2025-02-22 09:15:00',
                'category_name' => 'Data Privacy',
                'author_name' => 'Metric Vibes'
            ],
            'integrating-ga4-with-gtm-for-enhanced-e-commerce-tracking-solutions' => [
                'id' => 24,
                'title' => 'Integrating GA4 with GTM for Enhanced E-commerce Tracking Solutions',
                'slug' => 'integrating-ga4-with-gtm-for-enhanced-e-commerce-tracking-solutions',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-workspace-bg.png'),
                'excerpt' => 'By integrating GA4 with GTM, companies can unlock powerful e-commerce tracking capabilities, providing essential insights.',
                'meta_title' => 'Integrating GA4 with GTM for Enhanced E-commerce Tracking',
                'meta_description' => 'By integrating GA4 with GTM, companies can unlock powerful e-commerce tracking capabilities, providing essential insights.',
                'published_at' => '2025-02-02 14:00:00',
                'category_name' => 'Analytics',
                'author_name' => 'Metric Vibes'
            ],
            'unlock-visitor-behavior-master-vwo-heatmap-session-recordings' => [
                'id' => 25,
                'title' => 'Unlock Visitor Behavior: Master VWO Heatmap & Session Recordings',
                'slug' => 'unlock-visitor-behavior-master-vwo-heatmap-session-recordings',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-bg.jpg'),
                'excerpt' => 'Understanding user behavior on your website is valuable for your business as it helps you connect with your customers and meet both their needs and your business goals.',
                'meta_title' => 'Unlock Visitor Behavior: Master VWO Heatmap & Session Recordings',
                'meta_description' => 'Understanding user behavior on your website is valuable for your business as it helps you connect with your customers and meet both their needs and your business goals.',
                'published_at' => '2025-01-14 10:00:00',
                'category_name' => 'User Behavior',
                'author_name' => 'Metric Vibes'
            ],
            'how-to-master-analytics-practices-for-dpdp-compliance' => [
                'id' => 26,
                'title' => 'How to Master Analytics Practices for DPDP Compliance',
                'slug' => 'how-to-master-analytics-practices-for-dpdp-compliance',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-workspace-bg.png'),
                'excerpt' => 'The balance between leveraging analytics for business growth and ensuring compliance with emerging privacy regulations is critical.',
                'meta_title' => 'How to Master Analytics Practices for DPDP Compliance',
                'meta_description' => 'The balance between leveraging analytics for business growth and ensuring compliance with emerging privacy regulations is critical.',
                'published_at' => '2024-12-25 15:00:00',
                'category_name' => 'Data Privacy',
                'author_name' => 'Metric Vibes'
            ],
            'the-impact-of-emerging-privacy-regulations-on-analytics-practices' => [
                'id' => 27,
                'title' => 'The impact of Emerging privacy regulations on analytics practices',
                'slug' => 'the-impact-of-emerging-privacy-regulations-on-analytics-practices',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-bg.jpg'),
                'excerpt' => 'In today’s digital landscape, businesses are increasingly challenged by the emergence of stringent privacy regulations.',
                'meta_title' => 'The impact of Emerging privacy regulations on analytics practices',
                'meta_description' => 'In today’s digital landscape, businesses are increasingly challenged by the emergence of stringent privacy regulations.',
                'published_at' => '2024-12-05 12:00:00',
                'category_name' => 'Data Privacy',
                'author_name' => 'Metric Vibes'
            ],
            'how-privacy-regulations-are-shaping-digital-marketing-in-2025' => [
                'id' => 28,
                'title' => 'How Privacy Regulations are Shaping Digital Marketing in 2025',
                'slug' => 'how-privacy-regulations-are-shaping-digital-marketing-in-2025',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-workspace-bg.png'),
                'excerpt' => 'Privacy regulations have become a driving force behind the evolution of marketing strategies.',
                'meta_title' => 'How Privacy Regulations are Shaping Digital Marketing in 2025',
                'meta_description' => 'Privacy regulations have become a driving force behind the evolution of marketing strategies.',
                'published_at' => '2024-11-16 10:00:00',
                'category_name' => 'Marketing',
                'author_name' => 'Metric Vibes'
            ],
            'master-google-privacy-sandbox-thrive-in-a-cookie-free-world' => [
                'id' => 29,
                'title' => 'Master Google Privacy Sandbox: Thrive in a Cookie-Free World',
                'slug' => 'master-google-privacy-sandbox-thrive-in-a-cookie-free-world',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-bg.jpg'),
                'excerpt' => 'Google Privacy Sandbox is a forward-thinking initiative aimed at enhancing user privacy while still enabling effective ad targeting and measurement.',
                'meta_title' => 'Master Google Privacy Sandbox: Thrive in a Cookie-Free World',
                'meta_description' => 'Google Privacy Sandbox is a forward-thinking initiative aimed at enhancing user privacy while still enabling effective ad targeting and measurement.',
                'published_at' => '2024-10-27 14:30:00',
                'category_name' => 'Privacy',
                'author_name' => 'Metric Vibes'
            ],
            'unlock-more-roi-with-server-side-tracking-in-e-commerce' => [
                'id' => 30,
                'title' => 'Unlock More ROI with Server-Side Tracking in E-Commerce',
                'slug' => 'unlock-more-roi-with-server-side-tracking-in-e-commerce',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-workspace-bg.png'),
                'excerpt' => 'Server-side tracking is becoming an essential tool for businesses aiming to enhance customer experiences and drive revenue growth.',
                'meta_title' => 'Unlock More ROI with Server-Side Tracking in E-Commerce',
                'meta_description' => 'Server-side tracking is becoming an essential tool for businesses aiming to enhance customer experiences and drive revenue growth.',
                'published_at' => '2024-10-08 09:45:00',
                'category_name' => 'E-Commerce',
                'author_name' => 'Metric Vibes'
            ],
            'unlock-ad-success-with-google-consent-mode-on-ad-campaign' => [
                'id' => 31,
                'title' => 'Unlock Ad Success With Google Consent Mode On Ad Campaign',
                'slug' => 'unlock-ad-success-with-google-consent-mode-on-ad-campaign',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-bg.jpg'),
                'excerpt' => 'Google Consent Mode is one of the tools designed to help advertisers navigate this complex landscape.',
                'meta_title' => 'Unlock Ad Success With Google Consent Mode On Ad Campaign',
                'meta_description' => 'Google Consent Mode is one of the tools designed to help advertisers navigate this complex landscape.',
                'published_at' => '2024-09-18 11:00:00',
                'category_name' => 'Marketing',
                'author_name' => 'Metric Vibes'
            ],
            'how-server-side-tagging-improve-website-efficiency-and-security' => [
                'id' => 32,
                'title' => 'How Server-Side Tagging Improve Website Efficiency And Security',
                'slug' => 'how-server-side-tagging-improve-website-efficiency-and-security',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-workspace-bg.png'),
                'excerpt' => 'Server-side tagging is a highly effective method for increasing website speed and performance.',
                'meta_title' => 'How Server-Side Tagging Improve Website Efficiency And Security',
                'meta_description' => 'Server-side tagging is a highly effective method for increasing website speed and performance.',
                'published_at' => '2024-08-30 13:30:00',
                'category_name' => 'Web Performance',
                'author_name' => 'Metric Vibes'
            ],
            'google-is-not-depreciating-third-party-cookies' => [
                'id' => 33,
                'title' => 'Google is not depreciating third-party cookies',
                'slug' => 'google-is-not-depreciating-third-party-cookies',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-bg.jpg'),
                'excerpt' => 'Recently an announced that Google is not depreciating third-party cookies, after all the back and forth over the last few years.',
                'meta_title' => 'Google is not depreciating third-party cookies',
                'meta_description' => 'Recently an announced that Google is not depreciating third-party cookies, after all the back and forth over the last few years.',
                'published_at' => '2024-07-21 08:00:00',
                'category_name' => 'Privacy',
                'author_name' => 'Metric Vibes'
            ],
            'unlock-the-power-of-genai-for-personalized-experiences' => [
                'id' => 34,
                'title' => 'Unlock the Power of GenAI for Personalized Experiences',
                'slug' => 'unlock-the-power-of-genai-for-personalized-experiences',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-workspace-bg.png'),
                'excerpt' => 'One of the most transformative technologies driving personalization is Generative AI (GenAI).',
                'meta_title' => 'Unlock the Power of GenAI for Personalized Experiences',
                'meta_description' => 'One of the most transformative technologies driving personalization is Generative AI (GenAI).',
                'published_at' => '2024-06-12 09:00:00',
                'category_name' => 'AI & Personalization',
                'author_name' => 'Metric Vibes'
            ],
            'how-to-elevate-growth-using-data-driven-digital-strategies' => [
                'id' => 35,
                'title' => 'How to Elevate Growth Using Data Driven Digital Strategies',
                'slug' => 'how-to-elevate-growth-using-data-driven-digital-strategies',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-bg.jpg'),
                'excerpt' => 'This article delves deep into the world of A/B testing, exploring its methodologies, strategic applications, and compelling real-world anecdotes that underscore its transformative impact on digital campaigns.',
                'meta_title' => 'How to Elevate Growth Using Data Driven Digital Strategies',
                'meta_description' => 'This article delves deep into the world of A/B testing, exploring its methodologies, strategic applications, and compelling real-world anecdotes that underscore its transformative impact on digital campaigns.',
                'published_at' => '2024-05-04 10:30:00',
                'category_name' => 'Digital Strategy',
                'author_name' => 'Metric Vibes'
            ],
            'how-to-prepare-for-a-cookieless-world' => [
                'id' => 36,
                'title' => 'Prepare for a Cookieless World: Powerful Strategies & Tips',
                'slug' => 'how-to-prepare-for-a-cookieless-world',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-workspace-bg.png'),
                'excerpt' => 'With growing concerns over data privacy and the introduction of stringent regulations like GDPR and CCPA, businesses are increasingly shifting towards a Cookieless future.',
                'meta_title' => 'Prepare for a Cookieless World: Powerful Strategies & Tips',
                'meta_description' => 'With growing concerns over data privacy and the introduction of stringent regulations like GDPR and CCPA, businesses are increasingly shifting towards a Cookieless future.',
                'published_at' => '2024-04-15 11:15:00',
                'category_name' => 'Privacy',
                'author_name' => 'Metric Vibes'
            ],
            'why-every-business-needs-personalization' => [
                'id' => 37,
                'title' => 'Why Businesses Need To Be Personalize ?',
                'slug' => 'why-every-business-needs-personalization',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-bg.jpg'),
                'excerpt' => 'Businesses that fail to provide personalized experiences risk losing customers to those who do.',
                'meta_title' => 'Why Businesses Need To Be Personalize ?',
                'meta_description' => 'Businesses that fail to provide personalized experiences risk losing customers to those who do.',
                'published_at' => '2024-03-26 14:00:00',
                'category_name' => 'Personalization',
                'author_name' => 'Metric Vibes'
            ],
            'do-ad-blockers-really-block-data-to-google-analytics' => [
                'id' => 38,
                'title' => 'Do ad blockers really block data to Google Analytics?',
                'slug' => 'do-ad-blockers-really-block-data-to-google-analytics',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-workspace-bg.png'),
                'excerpt' => 'As privacy concerns grow, more users are interested in blocking trackers, which might increase the likelihood of Google Analytics(GA4) being blocked.',
                'meta_title' => 'Do ad blockers really block data to Google Analytics?',
                'meta_description' => 'As privacy concerns grow, more users are interested in blocking trackers, which might increase the likelihood of Google Analytics(GA4) being blocked.',
                'published_at' => '2024-03-07 09:30:00',
                'category_name' => 'Analytics',
                'author_name' => 'Metric Vibes'
            ],
            'historical-data-migration-from-google-analytics-3' => [
                'id' => 39,
                'title' => 'How to do Historical Data Migration from Google Analytics 3',
                'slug' => 'historical-data-migration-from-google-analytics-3',
                'comments_count' => 0,
                'image_url' => asset('img/hero/hero-bg.jpg'),
                'excerpt' => 'It is necessary of Data Migration from Google Analytics 3 before it depreciate.',
                'meta_title' => 'How to do Historical Data Migration from Google Analytics 3',
                'meta_description' => 'It is necessary of Data Migration from Google Analytics 3 before it depreciate.',
                'published_at' => '2024-02-16 15:45:00',
                'category_name' => 'Analytics',
                'author_name' => 'Metric Vibes'
            ],
            'proven-conversion-rate-optimization-strategies-to-boost-your-business' => [
                'id' => 40,
                'title' => 'Proven Conversion Rate Optimization Strategies To Boost Your Business',
                'slug' => 'proven-conversion-rate-optimization-strategies-to-boost-your-business',
                'comments_count' => 2,
                'image_url' => asset('img/hero/hero-workspace-bg.png'),
                'excerpt' => 'Conversion Rate Optimization is the systematic process of increasing the percentage of website visitors who complete a desired action, such as purchasing, filling out a form, or signing up for a newsletter.',
                'meta_title' => 'Proven Conversion Rate Optimization Strategies To Boost Your Business',
                'meta_description' => 'Conversion Rate Optimization is the systematic process of increasing the percentage of website visitors who complete a desired action, such as purchasing, filling out a form, or signing up for a newsletter.',
                'published_at' => '2024-01-08 10:00:00',
                'category_name' => 'CRO',
                'author_name' => 'Metric Vibes'
            ]
        
        ];
    }

    public function index(): void {
        
        $blogs = array_values($this->getBlogData());

        $this->render('blog', [
            'currentPage'   => 'blog',
            'blogs'         => $blogs,
            'pageTitle'     => 'Insights & Articles — ' . SITE_NAME,
            'pageDescription' => 'Explore the latest analytics, cloud engineering, and AI automation insights from MetricVibes experts.'
        ]);
    }

    public function detail(string $slug): void {
        $blogData = $this->getBlogData();

        if (array_key_exists($slug, $blogData)) {
            $blog = $blogData[$slug];
            
            $this->render('blog-detail', [
                'currentPage'   => 'blog',
                'blog'          => $blog,
                'pageTitle'     => $blog['meta_title'] . ' — ' . SITE_NAME,
                'pageDescription' => $blog['meta_description']
            ]);
            return;
        }

        
        http_response_code(404);
        $this->render('404', ['currentPage' => '404']);
    }
}
