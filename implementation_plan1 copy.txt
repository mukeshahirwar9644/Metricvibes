# MetricVibes — Premium Enterprise AI, Analytics & Cloud Consulting Website

Complete redesign of the MetricVibes website into a world-class enterprise consulting website inspired by Vercel, Stripe, Anthropic, OpenAI, Linear, Framer, Accenture Song, and Deloitte Digital.

## User Review Required

> [!IMPORTANT]
> **This is a massive project.** Given the scope (15+ pages, admin panel, database, GSAP animations, mega menu, dark/light mode, etc.), I propose building it in **4 phases** to keep things manageable and reviewable. Each phase will produce working, production-ready code.

> [!WARNING]
> **No framework shortcuts**: Per your requirements, this uses Core PHP 8+ (no Laravel/WordPress/React). I'll implement custom routing, CSRF protection, prepared statements, and MVC-like architecture from scratch. This means more boilerplate but full control.

> [!IMPORTANT]
> **Asset Strategy**: I'll use locally-hosted CDN assets (Bootstrap 5, GSAP, AOS, Swiper.js, Font Awesome) bundled in `/assets/vendor/` for enterprise reliability. Google Fonts (Manrope + Inter) will be loaded via `<link>` with `font-display: swap` for performance.

## Open Questions

1. **Domain / Hosting**: Do you have a staging server with PHP 8+ and MySQL? Or should I include Docker/XAMPP setup instructions?
2. **Logo**: Do you have a MetricVibes logo, or should I create a text-based logo with CSS styling?
3. **Real Content**: Do you have actual case studies, testimonials, team photos, or should I use high-quality placeholder content?
4. **Google Maps API Key**: Do you have one for the contact section map?
5. **WhatsApp Number**: What number should the floating WhatsApp button link to?
6. **Email Service**: Do you want contact form emails sent via SMTP (e.g., SendGrid/Gmail SMTP) or PHP `mail()`?
7. **Calendar Booking**: Should this integrate with Calendly, Cal.com, or be a custom booking form?
8. **Admin Panel Auth**: Simple session-based auth, or do you want 2FA support?
9. **"Trusted By" Logos**: Should I use official partner logos, or create styled text representations to avoid trademark issues?

---

## Architecture Overview

```
d:\Metricvibesweb\
│
├── public/                          # Web root (point Apache/Nginx here)
│   ├── index.php                    # Front controller / router
│   ├── .htaccess                    # URL rewriting
│   ├── robots.txt                   # SEO
│   ├── sitemap.xml                  # SEO
│   ├── manifest.json                # PWA manifest
│   │
│   └── assets/
│       ├── css/
│       │   ├── main.css             # Design system + all styles
│       │   ├── components.css       # Component-specific styles
│       │   ├── admin.css            # Admin panel styles
│       │   └── dark-mode.css        # Dark mode overrides
│       │
│       ├── js/
│       │   ├── app.js               # Main application JS
│       │   ├── animations.js        # GSAP + AOS init
│       │   ├── mega-menu.js         # Mega menu logic
│       │   ├── dark-mode.js         # Theme toggler
│       │   ├── cursor-glow.js       # Custom cursor effect
│       │   ├── counters.js          # Animated counters
│       │   ├── cookie-consent.js    # GDPR cookie banner
│       │   ├── contact.js           # Contact form AJAX
│       │   └── admin.js             # Admin panel JS
│       │
│       ├── img/
│       │   ├── logo/                # Logo variants
│       │   ├── hero/                # Hero section assets
│       │   ├── icons/               # Custom SVG icons
│       │   ├── case-studies/        # Case study images
│       │   ├── team/                # Team photos
│       │   ├── clients/             # Client logos
│       │   └── og/                  # Open Graph images
│       │
│       └── vendor/                  # Third-party libraries
│           ├── bootstrap/           # Bootstrap 5.3
│           ├── gsap/                # GSAP 3.x
│           ├── aos/                 # AOS 2.x
│           ├── swiper/              # Swiper.js
│           └── fontawesome/         # Font Awesome 6
│
├── app/
│   ├── config/
│   │   ├── config.php               # App configuration
│   │   ├── database.php             # DB connection (PDO)
│   │   └── routes.php               # Route definitions
│   │
│   ├── controllers/
│   │   ├── HomeController.php
│   │   ├── ServiceController.php
│   │   ├── CaseStudyController.php
│   │   ├── BlogController.php
│   │   ├── ContactController.php
│   │   ├── CareerController.php
│   │   └── admin/
│   │       ├── DashboardController.php
│   │       ├── AuthController.php
│   │       ├── BlogAdminController.php
│   │       ├── CaseStudyAdminController.php
│   │       ├── TestimonialAdminController.php
│   │       ├── CareerAdminController.php
│   │       ├── ContactAdminController.php
│   │       ├── SEOController.php
│   │       ├── MediaController.php
│   │       ├── SettingsController.php
│   │       └── UserController.php
│   │
│   ├── models/
│   │   ├── Blog.php
│   │   ├── CaseStudy.php
│   │   ├── Testimonial.php
│   │   ├── Contact.php
│   │   ├── Newsletter.php
│   │   ├── Career.php
│   │   ├── Job.php
│   │   ├── User.php
│   │   └── Setting.php
│   │
│   ├── middleware/
│   │   ├── AuthMiddleware.php
│   │   ├── CSRFMiddleware.php
│   │   └── RateLimiter.php
│   │
│   ├── helpers/
│   │   ├── functions.php            # Global helpers
│   │   ├── csrf.php                 # CSRF token generation
│   │   ├── validation.php           # Input validation
│   │   ├── upload.php               # File upload handler
│   │   └── seo.php                  # SEO helper functions
│   │
│   └── core/
│       ├── Router.php               # Simple router
│       ├── Database.php             # PDO wrapper
│       ├── Session.php              # Session manager
│       └── App.php                  # Bootstrap
│
├── views/
│   ├── layouts/
│   │   ├── main.php                 # Main layout wrapper
│   │   └── admin.php                # Admin layout wrapper
│   │
│   ├── partials/
│   │   ├── header.php               # HTML head + meta
│   │   ├── navbar.php               # Sticky nav + mega menu
│   │   ├── footer.php               # Footer
│   │   ├── preloader.php            # Page load animation
│   │   ├── cursor-glow.php          # Cursor glow element
│   │   ├── whatsapp-float.php       # Floating WhatsApp
│   │   ├── back-to-top.php          # Back to top button
│   │   ├── cookie-consent.php       # Cookie banner
│   │   └── schema-markup.php        # JSON-LD schema
│   │
│   ├── sections/
│   │   ├── hero.php                 # Hero section
│   │   ├── trusted-by.php           # Logo carousel
│   │   ├── services.php             # Services grid
│   │   ├── why-metricvibes.php      # Timeline section
│   │   ├── case-studies.php         # Case study cards
│   │   ├── testimonials.php         # Glassmorphism cards
│   │   ├── tech-stack.php           # Animated carousel
│   │   ├── resources.php            # Blog/newsletter
│   │   ├── about-founder.php        # Founder section
│   │   ├── contact.php              # Contact form + map
│   │   ├── faq.php                  # FAQ accordion
│   │   └── counters.php             # Animated stats
│   │
│   ├── pages/
│   │   ├── home.php
│   │   ├── about.php
│   │   ├── services.php
│   │   ├── service-detail.php
│   │   ├── case-studies.php
│   │   ├── case-study-detail.php
│   │   ├── blog.php
│   │   ├── blog-detail.php
│   │   ├── contact.php
│   │   ├── careers.php
│   │   ├── career-detail.php
│   │   ├── privacy.php
│   │   ├── terms.php
│   │   └── 404.php
│   │
│   └── admin/
│       ├── login.php
│       ├── dashboard.php
│       ├── blogs/
│       │   ├── index.php
│       │   ├── create.php
│       │   └── edit.php
│       ├── case-studies/
│       │   ├── index.php
│       │   ├── create.php
│       │   └── edit.php
│       ├── testimonials/
│       │   ├── index.php
│       │   ├── create.php
│       │   └── edit.php
│       ├── careers/
│       │   ├── index.php
│       │   ├── create.php
│       │   └── edit.php
│       ├── contacts/
│       │   └── index.php
│       ├── seo/
│       │   └── index.php
│       ├── media/
│       │   └── index.php
│       ├── users/
│       │   ├── index.php
│       │   ├── create.php
│       │   └── edit.php
│       └── settings/
│           └── index.php
│
├── database/
│   ├── schema.sql                   # Complete DB schema
│   ├── seed.sql                     # Sample data
│   └── migrations/                  # Version-tracked changes
│
├── storage/
│   ├── uploads/                     # User-uploaded files
│   ├── cache/                       # Template cache
│   └── logs/                        # Error logs
│
└── .env.example                     # Environment template
```

---

## Proposed Changes

### Phase 1: Foundation + Complete Frontend UI (THIS PHASE)

This phase builds the entire visual website with static/hardcoded content. Every section, animation, and interaction will be fully functional. The backend will be connected in Phase 2.

---

#### Core Architecture

##### [NEW] [.htaccess](file:///d:/Metricvibesweb/public/.htaccess)
- URL rewriting to route all requests through `index.php`
- Security headers (X-Content-Type, X-Frame-Options, etc.)
- Gzip compression, browser caching rules
- Block access to sensitive files

##### [NEW] [index.php](file:///d:/Metricvibesweb/public/index.php)
- Front controller that bootstraps the app
- Loads config, starts session, routes requests
- For Phase 1: Simple include-based routing

##### [NEW] [config.php](file:///d:/Metricvibesweb/app/config/config.php)
- Site-wide constants (SITE_NAME, BASE_URL, etc.)
- Environment detection
- Error reporting settings

##### [NEW] [functions.php](file:///d:/Metricvibesweb/app/helpers/functions.php)
- `asset()` — Generate asset URLs
- `url()` — Generate page URLs
- `escape()` — XSS-safe output
- `csrf_field()` — CSRF token HTML
- `active_nav()` — Active nav class helper
- `truncate()` — Text truncation
- `format_date()` — Date formatting

---

#### Design System (CSS)

##### [NEW] [main.css](file:///d:/Metricvibesweb/public/assets/css/main.css)
Complete design system inspired by Vercel + Stripe + Anthropic:

- **CSS Custom Properties**: All colors, spacing, typography as tokens
- **Color Palette**:
  - `--primary: #0B1023` (deep navy)
  - `--secondary: #111827` (dark charcoal)
  - `--accent: #4F46E5` (indigo)
  - `--accent-secondary: #06B6D4` (cyan)
  - `--gradient: linear-gradient(135deg, #4F46E5, #06B6D4)`
  - `--text: #F8FAFC` (near-white)
  - `--text-muted: #94A3B8`
  - `--surface: #FFFFFF`, `--surface-alt: #F8FAFC`
- **Typography**: Manrope (headings, 700-800), Inter (body, 400-500)
- **Spacing scale**: 4px base, 8-step scale
- **Border radius**: `--radius-sm: 8px`, `--radius-md: 12px`, `--radius-lg: 16px`, `--radius-xl: 24px`
- **Shadows**: 4-level elevation system
- **Glass effect**: `backdrop-filter: blur(20px)` with semi-transparent bg
- **Components**: Buttons, cards, badges, inputs, section styles
- **Responsive**: Mobile-first breakpoints (576, 768, 992, 1200, 1400)
- **Animations**: Custom keyframes for float, pulse, glow, gradient-shift

##### [NEW] [components.css](file:///d:/Metricvibesweb/public/assets/css/components.css)
- Mega menu styles (full-width dropdown, grid layout, hover states)
- Service cards with hover lift + gradient border
- Case study cards with image overlay
- Testimonial glassmorphism cards
- FAQ accordion with smooth expand
- Contact form with floating labels
- Counters section with gradient numbers
- Timeline component for "Why MetricVibes"
- Cookie consent banner
- Preloader overlay
- Cursor glow trail
- WhatsApp floating button
- Back to top button with progress ring
- Newsletter signup form
- Tech stack carousel
- Footer with hover animations

##### [NEW] [dark-mode.css](file:///d:/Metricvibesweb/public/assets/css/dark-mode.css)
- `[data-theme="dark"]` overrides for all CSS tokens
- Dark: sections become `#0B1023` / `#111827`
- Light text on dark backgrounds
- Card surfaces become `rgba(255,255,255,0.05)`
- Adjusted shadows for dark context
- Smooth transition on theme toggle

---

#### JavaScript Modules

##### [NEW] [app.js](file:///d:/Metricvibesweb/public/assets/js/app.js)
- Bootstrap component initialization
- Smooth scroll behavior
- Navbar scroll effect (transparent → solid)
- Lazy loading with IntersectionObserver
- Newsletter form AJAX submission
- Mobile menu toggle

##### [NEW] [animations.js](file:///d:/Metricvibesweb/public/assets/js/animations.js)
- AOS initialization with custom settings
- GSAP ScrollTrigger registrations
- Hero section entrance animations (staggered text + dashboard float)
- Service cards stagger reveal
- Counter number animations (ScrollTrigger)
- Parallax effects on sections
- Logo carousel continuous scroll
- Testimonial card entrance
- Gradient background animation on hero

##### [NEW] [mega-menu.js](file:///d:/Metricvibesweb/public/assets/js/mega-menu.js)
- Hover/click toggle for desktop/mobile
- Smooth open/close with GSAP
- Active state management
- Click outside to close
- Keyboard navigation (accessibility)
- Backdrop overlay on open

##### [NEW] [dark-mode.js](file:///d:/Metricvibesweb/public/assets/js/dark-mode.js)
- Toggle between light/dark themes
- Save preference to localStorage
- Respect system preference on first visit
- Smooth CSS transition on toggle
- Update toggle icon (sun/moon)

##### [NEW] [cursor-glow.js](file:///d:/Metricvibesweb/public/assets/js/cursor-glow.js)
- Custom cursor glow effect following mouse
- Gradient radial glow (indigo → cyan)
- Only on desktop (disable on touch)
- Expand on hover over interactive elements
- Performance-optimized with `requestAnimationFrame`

##### [NEW] [counters.js](file:///d:/Metricvibesweb/public/assets/js/counters.js)
- Animated number counters (10+ Years, 500+ Projects, etc.)
- Triggered on scroll into view
- Easing animation with GSAP
- Format with commas/suffixes

##### [NEW] [cookie-consent.js](file:///d:/Metricvibesweb/public/assets/js/cookie-consent.js)
- GDPR-compliant cookie consent banner
- Accept/Reject/Customize options
- Save preference to localStorage
- Block analytics until consent

##### [NEW] [contact.js](file:///d:/Metricvibesweb/public/assets/js/contact.js)
- Contact form client-side validation
- AJAX submission with loading state
- Success/error feedback
- Honeypot spam protection
- Rate limiting (client-side)

---

#### Page Templates

##### [NEW] [main.php](file:///d:/Metricvibesweb/views/layouts/main.php)
- HTML5 document structure
- Dynamic `<title>` and meta tags
- Open Graph + Twitter Card meta
- Schema.org JSON-LD
- CSS includes (Bootstrap, AOS, Swiper, custom)
- JS includes at bottom (GSAP, AOS, Swiper, Bootstrap, custom)
- Slot for page content
- Includes: header, navbar, preloader, content, footer, cookie consent, WhatsApp, back-to-top, cursor-glow

##### [NEW] [navbar.php](file:///d:/Metricvibesweb/views/partials/navbar.php)
- Sticky transparent navbar with blur on scroll
- Logo (left)
- Nav links: Home, About, Services (mega menu), Case Studies, Blog, Careers, Contact
- **Mega Menu for Services**:
  - 3-column grid layout
  - Column 1: Analytics (GA4, Adobe, Mixpanel, Amplitude, GTM)
  - Column 2: Cloud & AI (Cloud Engineering, AI Automation, LLM, Dashboards)
  - Column 3: Featured case study card + CTA
  - Icons for each service
- Dark/Light mode toggle (sun/moon icon)
- CTA button: "Book a Call"
- Mobile hamburger with slide-out drawer
- ARIA labels + keyboard navigation

##### [NEW] [hero.php](file:///d:/Metricvibesweb/views/sections/hero.php)
- Full-viewport animated gradient background (indigo → cyan, shifting)
- Floating particle/grid dots effect (CSS or GSAP)
- Left side:
  - Badge: "🚀 AI-Powered Analytics Consulting"
  - Main heading: "Your Analytics, Cloud & AI Implementation Partner"
  - Subheading: "We help enterprises implement, migrate, and optimize their analytics stack with precision engineering and AI-first thinking."
  - Two CTA buttons: "Book Strategy Call" (primary gradient), "Get Free Audit" (outline)
  - Stats row: "500+ Projects | 10+ Years | 50+ Countries"
- Right side:
  - Animated dashboard illustration (CSS/SVG with floating charts, metrics)
  - Glassmorphism container with animated data points
- GSAP staggered entrance animation

##### [NEW] [trusted-by.php](file:///d:/Metricvibesweb/views/sections/trusted-by.php)
- "Trusted by Industry Leaders" label
- Infinite scroll carousel (Swiper.js autoplay)
- Logos: Google Cloud, Anthropic, GA4, Adobe Analytics, Mixpanel, Amplitude, Firebase, Hotjar
- Grayscale → color on hover
- Subtle fade edges

##### [NEW] [services.php](file:///d:/Metricvibesweb/views/sections/services.php)
- Section heading: "Enterprise-Grade Services"
- Tab/filter navigation: All, Analytics, Cloud, AI
- 3-column responsive grid of service cards
- Each card:
  - Gradient top border on hover
  - Icon (Font Awesome or custom SVG)
  - Service name
  - Short description (2 lines)
  - "Learn More →" link
  - Subtle lift + shadow on hover
- Services: GA4 Migration, Adobe Analytics, Mixpanel, Amplitude, GTM, Server-Side Tracking, Consent Mode V2, Cloud Engineering, AI Automation, LLM Integration, Dashboard Development, Data Engineering

##### [NEW] [why-metricvibes.php](file:///d:/Metricvibesweb/views/sections/why-metricvibes.php)
- Section heading: "Why MetricVibes?"
- Vertical timeline layout (alternating left/right on desktop)
- Timeline items with connecting line:
  - 🏆 10+ Years Experience — "Decade of delivering enterprise analytics solutions"
  - 🌍 Global Clients — "Serving 50+ countries across 6 continents"
  - 📜 Certified Experts — "Google, Adobe, AWS certified professionals"
  - 🔒 Enterprise Security — "SOC 2, GDPR, HIPAA compliant processes"
  - 🤝 Dedicated Support — "24/7 support with dedicated account managers"
- AOS reveal on scroll
- Icon circles on timeline dots

##### [NEW] [case-studies.php](file:///d:/Metricvibesweb/views/sections/case-studies.php)
- Section heading: "Success Stories"
- 2-column featured + 3-column grid
- Each card:
  - Large image with overlay gradient
  - Industry badge
  - Title
  - Business Challenge (1 line)
  - Solution summary
  - Results: "↑ 45% Conversion" style metrics
  - "Read Case Study →" CTA
- AOS stagger reveal

##### [NEW] [testimonials.php](file:///d:/Metricvibesweb/views/sections/testimonials.php)
- Section heading: "What Our Clients Say"
- Swiper.js carousel with 3 visible cards
- Each card (glassmorphism):
  - `backdrop-filter: blur(20px)`
  - Semi-transparent white/dark background
  - Client photo (circle)
  - 5-star rating (Font Awesome stars)
  - Quote text
  - Client name, title, company
  - Country flag emoji
- Auto-rotate with pause on hover
- Navigation dots + arrows

##### [NEW] [tech-stack.php](file:///d:/Metricvibesweb/views/sections/tech-stack.php)
- "Our Technology Partners" heading
- Animated logo carousel (infinite scroll, both directions)
- Two rows scrolling in opposite directions
- Tech logos: Google Cloud, AWS, Azure, BigQuery, Looker Studio, Power BI, Tableau, Snowflake, Python, TensorFlow, etc.
- Grayscale with color on hover
- Pause on hover

##### [NEW] [resources.php](file:///d:/Metricvibesweb/views/sections/resources.php)
- Section heading: "Insights & Resources"
- Featured article (large card, left 60%)
- 3 recent blog cards (right 40%, stacked)
- Each blog card: image, category badge, title, date, "Read More →"
- Newsletter signup at bottom:
  - "Stay ahead with analytics insights"
  - Email input + "Subscribe" button
  - "Join 5,000+ analytics professionals"

##### [NEW] [about-founder.php](file:///d:/Metricvibesweb/views/sections/about-founder.php)
- Two-column layout
- Left: Professional photo placeholder (with gradient border frame)
- Right:
  - "Meet the Founder" badge
  - Name + Title
  - Mission statement
  - Vision statement
  - Journey summary (2-3 paragraphs)
  - LinkedIn + Twitter links
  - Certifications/badges row

##### [NEW] [contact.php](file:///d:/Metricvibesweb/views/sections/contact.php)
- Section heading: "Let's Build Something Great"
- Two-column layout:
  - Left: Contact form
    - Name, Email, Phone, Company, Service (dropdown), Budget (dropdown), Message
    - Floating label design
    - CSRF token hidden field
    - Honeypot field (hidden)
    - Submit with loading animation
  - Right: Contact info cards
    - 📍 Office address
    - 📧 Email
    - 📞 Phone
    - 📅 "Book a Meeting" → Calendar link
    - Google Map embed (or styled placeholder)
    - Social media links

##### [NEW] [faq.php](file:///d:/Metricvibesweb/views/sections/faq.php)
- Section heading: "Frequently Asked Questions"
- Accordion with smooth expand/collapse
- 8-10 relevant FAQ items about analytics consulting
- Plus icon rotates to X on expand
- Only one item open at a time

##### [NEW] [counters.php](file:///d:/Metricvibesweb/views/sections/counters.php)
- Full-width gradient background section
- 4-column stats:
  - 500+ Projects Delivered
  - 10+ Years Experience
  - 50+ Countries Served
  - 98% Client Satisfaction
- Numbers animate counting up on scroll
- Icons above each counter

##### [NEW] [footer.php](file:///d:/Metricvibesweb/views/partials/footer.php)
- Dark background (`#0B1023`)
- 5-column layout:
  - Column 1: Logo + tagline + social icons
  - Column 2: Quick Links (Home, About, Services, Contact)
  - Column 3: Services (GA4, Adobe, Cloud, AI)
  - Column 4: Resources (Blog, Case Studies, Careers, FAQ)
  - Column 5: Newsletter signup
- Bottom bar: Copyright + Privacy Policy + Terms + Sitemap
- Smooth hover animations on links

##### [NEW] [preloader.php](file:///d:/Metricvibesweb/views/partials/preloader.php)
- Full-screen overlay with MetricVibes logo
- Animated loading indicator (gradient spinner)
- Fades out on `window.load`
- CSS-only animation for performance

##### [NEW] Other Partials
- [header.php](file:///d:/Metricvibesweb/views/partials/header.php) — `<head>` section with all meta, OG, schema
- [whatsapp-float.php](file:///d:/Metricvibesweb/views/partials/whatsapp-float.php) — Floating WhatsApp button (bottom-right)
- [back-to-top.php](file:///d:/Metricvibesweb/views/partials/back-to-top.php) — Scroll-to-top with circular progress
- [cookie-consent.php](file:///d:/Metricvibesweb/views/partials/cookie-consent.php) — GDPR banner
- [schema-markup.php](file:///d:/Metricvibesweb/views/partials/schema-markup.php) — JSON-LD structured data

##### [NEW] [home.php](file:///d:/Metricvibesweb/views/pages/home.php)
- Assembles all sections in order:
  1. Hero
  2. Trusted By
  3. Services
  4. Counters
  5. Why MetricVibes
  6. Case Studies
  7. Testimonials
  8. Tech Stack
  9. About Founder
  10. Resources
  11. FAQ
  12. Contact

---

### Phase 2: Database + Backend (After Phase 1 approval)

#### MySQL Database Schema

##### [NEW] [schema.sql](file:///d:/Metricvibesweb/database/schema.sql)

```sql
-- Core tables
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('super_admin', 'admin', 'editor', 'viewer') DEFAULT 'editor',
    avatar VARCHAR(255),
    is_active TINYINT(1) DEFAULT 1,
    last_login DATETIME,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE blogs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    excerpt TEXT,
    content LONGTEXT,
    featured_image VARCHAR(255),
    category VARCHAR(100),
    tags JSON,
    author_id INT,
    status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
    is_featured TINYINT(1) DEFAULT 0,
    meta_title VARCHAR(255),
    meta_description TEXT,
    views INT DEFAULT 0,
    published_at DATETIME,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE case_studies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    client_name VARCHAR(150),
    industry VARCHAR(100),
    featured_image VARCHAR(255),
    challenge TEXT,
    solution TEXT,
    results TEXT,
    metrics JSON,
    technologies JSON,
    status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
    is_featured TINYINT(1) DEFAULT 0,
    meta_title VARCHAR(255),
    meta_description TEXT,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE testimonials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_name VARCHAR(100) NOT NULL,
    client_title VARCHAR(100),
    company VARCHAR(100),
    country VARCHAR(50),
    photo VARCHAR(255),
    quote TEXT NOT NULL,
    rating TINYINT DEFAULT 5,
    is_featured TINYINT(1) DEFAULT 0,
    status ENUM('active', 'inactive') DEFAULT 'active',
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone VARCHAR(30),
    company VARCHAR(100),
    service VARCHAR(100),
    budget VARCHAR(50),
    message TEXT NOT NULL,
    status ENUM('new', 'read', 'replied', 'archived') DEFAULT 'new',
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE newsletter (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(150) UNIQUE NOT NULL,
    is_active TINYINT(1) DEFAULT 1,
    subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    unsubscribed_at DATETIME NULL
);

CREATE TABLE careers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    department VARCHAR(100),
    location VARCHAR(100),
    type ENUM('full-time', 'part-time', 'contract', 'remote') DEFAULT 'full-time',
    experience VARCHAR(50),
    description LONGTEXT,
    requirements JSON,
    benefits JSON,
    salary_range VARCHAR(100),
    status ENUM('open', 'closed', 'draft') DEFAULT 'draft',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE job_applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    career_id INT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone VARCHAR(30),
    resume VARCHAR(255),
    cover_letter TEXT,
    status ENUM('new', 'reviewed', 'shortlisted', 'rejected', 'hired') DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (career_id) REFERENCES careers(id) ON DELETE SET NULL
);

CREATE TABLE seo_settings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    page_slug VARCHAR(100) UNIQUE NOT NULL,
    meta_title VARCHAR(255),
    meta_description TEXT,
    meta_keywords VARCHAR(255),
    og_image VARCHAR(255),
    schema_data JSON,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE site_settings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    setting_key VARCHAR(100) UNIQUE NOT NULL,
    setting_value TEXT,
    setting_type ENUM('text', 'textarea', 'image', 'boolean', 'json') DEFAULT 'text',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE media (
    id INT AUTO_INCREMENT PRIMARY KEY,
    filename VARCHAR(255) NOT NULL,
    original_name VARCHAR(255),
    file_path VARCHAR(500) NOT NULL,
    file_type VARCHAR(50),
    file_size INT,
    alt_text VARCHAR(255),
    uploaded_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (uploaded_by) REFERENCES users(id) ON DELETE SET NULL
);
```

- Models with CRUD methods using PDO prepared statements
- Controllers with input validation + CSRF checks
- Simple Router mapping URLs to controllers

---

### Phase 3: Admin Panel (After Phase 2)
- Secure login with bcrypt password hashing
- Session-based authentication with role checking
- Dashboard with analytics widgets (total contacts, blog views, etc.)
- CRUD for all content types (blogs, case studies, testimonials, careers)
- Rich text editor (TinyMCE or similar) for blog/case study content
- Media manager with drag-and-drop upload
- SEO settings per page
- Site settings (logo, social links, contact info)
- User management with role-based access (super_admin, admin, editor, viewer)
- Activity log

### Phase 4: Polish & Optimization (Final)
- Full Lighthouse audit and optimization
- Image optimization pipeline
- Critical CSS extraction
- JS minification
- Complete Schema.org markup for all pages
- Sitemap.xml generation
- robots.txt
- Open Graph images
- Performance testing
- Security audit
- Browser compatibility testing
- Accessibility (WCAG 2.1 AA) audit

---

## Verification Plan

### Automated Tests
- PHP syntax check: `php -l` on all PHP files
- HTML validation via W3C validator
- CSS validation
- Lighthouse CI for performance scores

### Manual Verification
- Visual review of all sections on desktop (1920px, 1440px, 1280px)
- Mobile responsive testing (375px, 414px, 768px)
- Dark/light mode toggle on all sections
- All animations working (GSAP, AOS, Swiper)
- Mega menu desktop + mobile
- Contact form submission
- Newsletter signup
- Cookie consent flow
- Keyboard navigation (accessibility)
- Cross-browser: Chrome, Firefox, Edge

---

## Estimated File Count

| Phase | New Files | Description |
|-------|-----------|-------------|
| Phase 1 | ~35 files | Complete frontend UI |
| Phase 2 | ~20 files | Database + backend |
| Phase 3 | ~25 files | Admin panel |
| Phase 4 | ~5 files | Optimization configs |
| **Total** | **~85 files** | **Full production website** |

---

> [!TIP]
> I recommend starting with **Phase 1** to establish the complete visual identity. Once you're satisfied with the design, we'll wire up the backend in Phase 2. This approach lets you iterate on the UI without database dependencies.

**Ready to proceed with Phase 1?**
