import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingQuickBar from './components/FloatingQuickBar';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import LabSolutionsPage from './pages/LabSolutionsPage';
import AboutPage from './pages/AboutPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

import './styles.css';

// Automatically scroll to top whenever the route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

// Animated Route Wrapper
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3 }}
        className="page-wrapper"
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/lab-solutions" element={<LabSolutionsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Fallback to Home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app">
        {/* Ambient Glows */}
        <div className="ambient ambient-top" />
        <div className="ambient ambient-left" />
        <div className="ambient ambient-right" />

        {/* Global Navigation Bar */}
        <Navbar />

        {/* Main Routed Page Content */}
        <main className="main-content-flow">
          <AnimatedRoutes />
        </main>

        {/* Floating Quick Contact & Scroll Dock */}
        <FloatingQuickBar />

        {/* Global Corporate Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
