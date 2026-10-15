import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, ArrowRight, Menu, X, Sparkles, Activity, ShieldCheck, MapPin } from 'lucide-react';
import { navLinks } from '../data/navigation';
import { COMPANY } from '../data/companyData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <>
      {/* MNC Enterprise Announcement Top Bar */}
      <div className="mnc-topbar">
        <div className="container mnc-topbar-inner">
          <div className="topbar-left">
            <span className="live-pill">
              <span className="live-dot" /> LIVE PUNE SLA: &lt; 4 HOURS
            </span>
            <span className="topbar-divider">|</span>
            <span className="topbar-item">
              <ShieldCheck size={13} className="text-cyan" /> ISO 9001:2015 &amp; NABL Traceable
            </span>
            <span className="topbar-divider hide-mobile">|</span>
            <span className="topbar-item hide-mobile">
              <MapPin size={13} className="text-cyan" /> Gera Imperium Gateway, Nashik Phata, Pune
            </span>
          </div>
          <div className="topbar-right">
            <span className="topbar-label">Enterprise Hotline:</span>
            <a href={`tel:${COMPANY.phone}`} className="topbar-phone">
              <Phone size={12} /> {COMPANY.displayPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Sticky Header */}
      <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="container nav-wrap">
          {/* Brand Logo */}
          <Link to="/" className="brand" aria-label="Scorpy Tech Home">
            <div className="brand-logo-glow">
              <img src="/scorpytech-logo.png" alt="Scorpy Tech" />
            </div>
            <div className="brand-text">
              <div className="brand-title">
                <b>SCORPY</b>
                <span className="text-cyan">TECH</span>
              </div>
              <small className="brand-sub">ENTERPRISE IT &amp; LABS</small>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
              >
                <span className="nav-emoji">{link.emoji}</span>
                <span>{link.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="nav-actions">
            <a className="nav-phone-btn hide-mobile" href={`tel:${COMPANY.phone}`}>
              <Phone size={14} />
              <span>{COMPANY.displayPhone}</span>
            </a>
            <Link to="/contact" className="nav-cta-btn">
              <span>Request RFP</span>
              <ArrowRight size={14} />
            </Link>
            <button
              className="menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation drawer"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
          <div className="mobile-drawer-inner">
            <div className="mobile-brand-row">
              <span className="mobile-heading">NAVIGATION</span>
              <button className="mobile-close-btn" onClick={() => setMobileOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <nav className="mobile-links">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                >
                  <span className="mobile-nav-emoji">{link.emoji}</span>
                  <span className="mobile-nav-label">{link.label}</span>
                  <ArrowRight size={16} className="mobile-chevron" />
                </NavLink>
              ))}
            </nav>
            <div className="mobile-drawer-footer">
              <a href={`tel:${COMPANY.phone}`} className="mobile-cta-btn phone">
                <Phone size={16} /> Call {COMPANY.displayPhone}
              </a>
              <Link to="/contact" className="mobile-cta-btn rfp">
                Request Enterprise Quote <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
