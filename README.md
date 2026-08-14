# MetricVibes — Enterprise Analytics, Cloud & AI Implementation Platform

MetricVibes is a modern, high-performance, enterprise-grade web application built for analytics consulting, server-side tracking, Google Analytics 4 (GA4) migrations, cloud optimization, and AI workflow automation.

Featuring a cutting-edge **React + Vite** frontend, a high-speed **Python FastAPI** REST backend, a complete **Dual Light/Dark Mode Design System**, interactive SVG visualizations, dynamic cursor spotlight tracking, and an integrated **Admin Portal**.

---

##  Key Features & Highlights

- **⚡ Interactive Analytics Dashboard**:
  - Custom SVG Dotted World Map with animated node connector lines.
  - Dynamic `AnimCount` real-time count-up metrics.
  - Floating platform pills (GA4, GTM, Snowflake, Mixpanel, Looker, BigQuery, Hotjar, Segment, etc.).
  - **Dynamic Cursor-Tracking Spotlight Glow** (real-time radial gradient tracking mouse position on hover).

- **🎨 Enterprise Glassmorphism UI & Dual Theme System**:
  - Instant Light & Dark mode toggle with persistent local storage state.
  - Smooth 3D-feeling hover elevations (`translateY(-6px)` + purple glow shadows).
  - Modern typography system (Outfit / Inter fonts) and curated HSL color tokens.

- **📱 100% Mobile-First Responsive Layouts**:
  - Fully responsive on all devices (320px mobile screens up to 4K ultra-wide monitors).
  - Custom mobile stacking grids for service features, bento grids, and case study detail sidebars.

- **🔐 Admin Portal & Management Suite**:
  - JWT (JSON Web Token) authenticated admin authentication flow.
  - Full CRUD management for Case Studies and Technical Blogs.

- **🛡️ Privacy & Compliance Ready**:
  - Dedicated GDPR, HIPAA & CCPA compliance pages.
  - Integrated Cookie Consent banner & Announcement bar.

---

##  Complete Tech Stack

### **Frontend**
| Technology | Description |
| :--- | :--- |
| **React 18** | UI component framework with hooks and modular state management |
| **Vite** | Next-generation frontend build tool and hot-module replacement (HMR) server |
| **React Router DOM (v6)** | Client-side SPA routing and navigation |
| **Framer Motion** | Physics-based animations, page transitions, and smooth UI motion |
| **Lucide React & FontAwesome 6** | Modern vector iconography system |
| **Vanilla CSS3** | Custom design system with CSS custom properties, glassmorphism, keyframes, and media queries |

### **Backend**
| Technology | Description |
| :--- | :--- |
| **Python 3.11** | High-performance backend language runtime |
| **FastAPI** | Modern, fast (high-performance) web framework for building APIs |
| **Uvicorn** | Lightning-fast ASGI web server |
| **SQLAlchemy** | SQL toolkit and Object Relational Mapper (ORM) |
| **SQLite / PostgreSQL** | Relational database engine for dynamic application data |
| **Passlib & Bcrypt** | Secure password hashing and encryption |
| **PyJWT** | JSON Web Token authentication standard for API endpoints |

### **DevOps & Deployment**
| Technology | Description |
| :--- | :--- |
| **Docker** | Multi-stage slim containerization (`python:3.11-slim`) |
| **Git & GitHub** | Distributed version control and automated deployment trigger |
| **Render / Vercel** | Production cloud hosting for frontend SPA and backend API |

---

## 📁 Repository Directory Structure

```
Metricvibesweb/
├── frontend/                     # React + Vite Frontend Application
│   ├── public/
│   │   ├── assets/
│   │   │   ├── css/              # Design System CSS (components.css, dark-mode.css, main.css)
│   │   │   ├── js/               # Helper JavaScript libraries
│   │   │   └── img/              # Brand assets, logos, and graphics
│   │   ├── favicon.ico           # Website favicons
│   │   └── favicon-circle-centered.png
│   ├── src/
│   │   ├── components/
│   │   │   ├── partials/         # Navbar, Footer, AnnouncementBar, CookieBanner
│   │   │   └── sections/         # Hero, AnalyticsDashboard, Services, CaseStudies, TechStack, WhyMetricvibes, Contact
│   │   ├── pages/                # Public Pages (Home, About, ServiceDetail, ServerSideTracking, BusinessIntelligence, etc.)
│   │   │   └── admin/            # Admin Pages (AdminLogin, AdminCaseStudies, AdminBlogs)
│   │   ├── App.jsx               # App routes & layout wrapper
│   │   └── main.jsx              # React DOM entry point
│   ├── package.json              # Frontend dependencies and scripts
│   └── vite.config.js            # Vite configuration
│
├── backend/                      # Python FastAPI Backend Service
│   ├── routes/                   # API endpoint routers (auth, case_studies, blogs, contact)
│   ├── main.py                   # FastAPI app initialization and CORS middleware
│   ├── config.py                 # Environment settings & secrets
│   ├── database.py               # Database engine connection session
│   ├── models.py                 # SQLAlchemy database schemas
│   ├── schemas.py                # Pydantic validation schemas
│   ├── auth.py                   # Password hashing & JWT token generators
│   ├── requirements.txt          # Python dependencies
│   ├── Dockerfile                # Multi-stage production container build
│   └── .env                      # Secret configuration variables
│
└── README.md                     # Project Documentation
```

---

##  Local Development Setup Guide

### 1. Prerequisites
Ensure you have the following installed on your local machine:
- **Node.js** (v18.0.0 or higher) & **npm**
- **Python** (v3.11.0 or higher)
- **Git**

---

### 2. Frontend Setup & Execution

```bash
# Navigate to the frontend folder
cd frontend

# Install dependencies
npm install

# Start the Vite development server
npm run dev
```

The frontend local dev server will run at `http://localhost:5173`.

---

### 3. Backend Setup & Execution

```bash
# Open a new terminal and navigate to the backend folder
cd backend

# Create a Python virtual environment (Windows)
python -m venv venv

# Activate the virtual environment (Windows)
.\venv\Scripts\activate

# On macOS/Linux:
# source venv/bin/activate

# Install Python requirements
pip install -r requirements.txt

# Start the FastAPI backend server with hot reload
python -m uvicorn main:app --reload --port 8000
```

The FastAPI backend interactive Swagger documentation will be available at:
- **API Docs (Swagger UI)**: `http://localhost:8000/docs`
- **ReDoc UI**: `http://localhost:8000/redoc`

---

## 🐳 Running with Docker

You can build and run the backend using Docker:

```bash
cd backend

# Build the Docker image
docker build -t metricvibes-backend .

# Run the container on port 8000
docker run -p 8000:8000 metricvibes-backend
```

---

## 🔑 Key Page Routes Overview

| Route | Page Component | Description |
| :--- | :--- | :--- |
| `/` | `Home.jsx` | Main landing page featuring interactive hero dashboard, services, case studies |
| `/about` | `About.jsx` | Company mission, team expertise, and core values |
| `/services` | `Services.jsx` | Full suite of analytics, cloud, and AI consulting services |
| `/services/ga4-migration` | `ServiceDetail.jsx` | Custom GA4 migration and audit service breakdown |
| `/services/server-side-tracking` | `ServerSideTracking.jsx` | Privacy-first server-side tagging & tracking service |
| `/services/business-intelligence` | `BusinessIntelligence.jsx` | Enterprise BI dashboards & data visualization service |
| `/services/data-tracking-security` | `DataTrackingSecurity.jsx` | Data governance, security, and tracking audit |
| `/case-studies` | `CaseStudiesPage.jsx` | Searchable grid of enterprise case studies |
| `/case-study/:slug` | `CaseStudyDetail.jsx` | Comprehensive case study breakdown with metrics & tools used |
| `/blogs` | `BlogPage.jsx` | Technical analytics articles & thought leadership |
| `/blog/:slug` | `BlogDetail.jsx` | In-depth technical blog post with interactive comment system |
| `/careers` | `Careers.jsx` | Open job positions and application instructions |
| `/contact` | `ContactUsPage.jsx` | Interactive demo booking and inquiry form |
| `/admin/login` | `AdminLogin.jsx` | Secure administrator authentication portal |
| `/admin/case-studies` | `AdminCaseStudies.jsx` | Admin case study CRUD management dashboard |
| `/admin/blogs` | `AdminBlogs.jsx` | Admin blog post CRUD management dashboard |

---

## 📄 License & Ownership

© 2026 **Mukesh Ahirwar**. All rights reserved. Proprietary software built for Enterprise Data & Analytics Implementation.
