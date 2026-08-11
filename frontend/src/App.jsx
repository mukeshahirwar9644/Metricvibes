import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/partials/Navbar';
import Footer from './components/partials/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import ClaudePartner from './pages/ClaudePartner';
import ServiceDetail from './pages/ServiceDetail';
import CaseStudiesPage from './pages/CaseStudiesPage';
import Careers from './pages/Careers';
import BlogPage from './pages/BlogPage';
import BlogDetail from './pages/BlogDetail';
import ContactPage from './pages/ContactPage';
import DataTrackingSecurity from './pages/DataTrackingSecurity';
import BusinessIntelligence from './pages/BusinessIntelligence';
import VwoPartnership from './pages/VwoPartnership';
import MixpanelPartnership from './pages/MixpanelPartnership';
import ZohoPartnership from './pages/ZohoPartnership';
import CaseStudyDetail from './pages/CaseStudyDetail';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminBlogs from './pages/admin/AdminBlogs';
import AdminCaseStudies from './pages/admin/AdminCaseStudies';
import AdminSubmissions from './pages/admin/AdminSubmissions';
import AdminNewsletter from './pages/admin/AdminNewsletter';

function ScrollToTop() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    if (!state?.preventScroll) {
      window.scrollTo(0, 0);
    }
  }, [pathname, state]);

  return null;
}

// Wrapper to conditionally show Navbar/Footer (hide on admin routes)
function LayoutWrapper({ children }) {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdmin && <Navbar />}
      {children}
      {!isAdmin && <Footer />}
    </>
  );
}

function App() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true,
        offset: 50,
      });
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <LayoutWrapper>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/claude-partner" element={<ClaudePartner />} />
          <Route path="/services/business-intelligence" element={<BusinessIntelligence />} />
          <Route path="/partnerships/vwo" element={<VwoPartnership />} />
          <Route path="/partnerships/mixpanel" element={<MixpanelPartnership />} />
          <Route path="/partnerships/zoho" element={<ZohoPartnership />} />
          <Route path="/data-tracking-security" element={<DataTrackingSecurity />} />
          <Route path="/data-tracking-security/:page" element={<DataTrackingSecurity />} />
          <Route path="/privacy" element={<DataTrackingSecurity />} />
          <Route path="/terms" element={<DataTrackingSecurity />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-study" element={<CaseStudiesPage />} />
          <Route path="/case-study/:slug" element={<CaseStudyDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/blogs" element={<AdminBlogs />} />
          <Route path="/admin/case-studies" element={<AdminCaseStudies />} />
          <Route path="/admin/submissions" element={<AdminSubmissions />} />
          <Route path="/admin/newsletter" element={<AdminNewsletter />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
