import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Zap, Heart, CheckCircle2 } from 'lucide-react';
import { COMPANY } from '../data/companyData';
import { enterpriseServices } from '../data/servicesData';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Pre-Footer Enterprise Banner */}
      <div className="footer-pre-banner">
        <div className="container pre-banner-content">
          <div className="pre-banner-text">
            <span className="pre-banner-badge">🚀 EXPEDITE YOUR PROJECT</span>
            <h3>Ready to upgrade your enterprise infrastructure or build a world-class laboratory?</h3>
            <p>Connect directly with our Pune engineering leads for a site audit and tailored blueprint.</p>
          </div>
          <div className="pre-banner-actions">
            <Link to="/contact" className="primary-btn pulse-glow">
              Get Started Now <ArrowRight size={17} />
            </Link>
            <a href={`tel:${COMPANY.phone}`} className="secondary-btn">
              <Phone size={16} /> Direct Hotline
            </a>
          </div>
        </div>
      </div>

      {/* Main Corporate 4-Column Grid */}
      <div className="container footer-grid">
        {/* Col 1: Brand & Positioning */}
        <div className="footer-col brand-col">
          <Link to="/" className="footer-brand">
            <img src="/scorpytech-logo.png" alt="Scorpy Tech" />
            <div className="brand-text">
              <b>SCORPY <span className="text-cyan">TECH</span></b>
              <small>SOLUTIONS PVT. LTD.</small>
            </div>
          </Link>
          <p className="footer-about">
            India’s trusted one-stop partner for mission-critical enterprise IT networking, server virtualization, and precision scientific laboratory equipment setups.
          </p>
          <div className="footer-badges">
            <span className="f-badge"><ShieldCheck size={13} /> ISO 9001:2015</span>
            <span className="f-badge"><Zap size={13} /> NABL Standards</span>
            <span className="f-badge">⚡ &lt; 4h Pune SLA</span>
          </div>
        </div>

        {/* Col 2: Enterprise Services */}
        <div className="footer-col">
          <h4 className="footer-title">Enterprise Services</h4>
          <ul className="footer-links">
            {enterpriseServices.slice(0, 5).map(s => (
              <li key={s.id}>
                <Link to="/services">
                  <span className="f-link-emoji">{s.emoji}</span>
                  <span>{s.title}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link to="/services" className="view-all-link">
                View All IT Services &amp; Tiers <ArrowRight size={13} />
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Quick Navigation & Labs */}
        <div className="footer-col">
          <h4 className="footer-title">Lab &amp; Corporate</h4>
          <ul className="footer-links">
            <li>
              <Link to="/lab-solutions">
                <span className="f-link-emoji">🧪</span>
                <span>Analytical Chemistry Labs</span>
              </Link>
            </li>
            <li>
              <Link to="/lab-solutions">
                <span className="f-link-emoji">🧬</span>
                <span>Biotech &amp; Life Sciences</span>
              </Link>
            </li>
            <li>
              <Link to="/lab-solutions">
                <span className="f-link-emoji">⚡</span>
                <span>Electronics &amp; STEM Labs</span>
              </Link>
            </li>
            <li>
              <Link to="/case-studies">
                <span className="f-link-emoji">📊</span>
                <span>Enterprise Case Studies</span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span className="f-link-emoji">🏢</span>
                <span>Corporate Profile &amp; Values</span>
              </Link>
            </li>
            <li>
              <Link to="/careers">
                <span className="f-link-emoji">💼</span>
                <span>Careers &amp; Open Roles</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Corporate Headquarters & Direct Contact */}
        <div className="footer-col contact-col">
          <h4 className="footer-title">Pune Headquarters</h4>
          <div className="footer-contact-items">
            <div className="f-contact-item">
              <MapPin size={18} className="f-icon" />
              <span>{COMPANY.address}</span>
            </div>
            <a href={`tel:${COMPANY.phone}`} className="f-contact-item link">
              <Phone size={18} className="f-icon" />
              <div>
                <small>DIRECT HELPDESK</small>
                <b>{COMPANY.displayPhone}</b>
              </div>
            </a>
            <a href={`mailto:${COMPANY.email}`} className="f-contact-item link">
              <Mail size={18} className="f-icon" />
              <div>
                <small>OFFICIAL CORRESPONDENCE</small>
                <b>{COMPANY.email}</b>
              </div>
            </a>
          </div>
          <div className="business-hours">
            <b>Operating Hours:</b>
            <span>Mon – Sat: 9:00 AM – 7:30 PM (IST)</span>
            <span className="highlight-tag">24/7 SLA Emergency Dispatch Available</span>
          </div>
        </div>
      </div>

      {/* Copyright & Developer Credit Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <div className="copyright-text">
            &copy; {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
          </div>
          <div className="developer-credit-box">
            <span>Engineering &amp; Digital Experience by</span>{' '}
            <b className="dev-name">{COMPANY.developer.name}</b> &bull;{' '}
            <a href={`tel:${COMPANY.developer.phone}`} className="dev-phone">
              <Phone size={12} /> {COMPANY.developer.displayPhone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
