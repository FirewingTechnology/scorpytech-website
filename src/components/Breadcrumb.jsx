import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Sparkles } from 'lucide-react';

export default function Breadcrumb({ title, subtitle, kicker, emoji = '🚀' }) {
  return (
    <div className="page-hero-banner">
      <div className="page-hero-bg-grid" />
      <div className="page-hero-glow" />
      <div className="container page-hero-content">
        {/* Breadcrumb Trail */}
        <div className="breadcrumb-trail">
          <Link to="/" className="breadcrumb-link">
            <Home size={14} /> Home
          </Link>
          <ChevronRight size={13} className="breadcrumb-arrow" />
          <span className="breadcrumb-current">{title}</span>
        </div>

        {/* Kicker badge */}
        {kicker && (
          <div className="page-kicker-badge">
            <Sparkles size={14} className="text-cyan" />
            <span>{kicker}</span>
          </div>
        )}

        {/* Page Title & Subtitle */}
        <h1 className="page-title">
          <span className="page-title-emoji">{emoji}</span> {title}
        </h1>
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
}
