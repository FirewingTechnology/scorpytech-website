import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CheckCircle2, ArrowRight, ShieldCheck, Zap, Phone, Award,
  Clock, BarChart3, Building2, TrendingUp, ChevronRight
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { caseStudies } from '../data/caseStudiesData';
import { COMPANY } from '../data/companyData';

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects', emoji: '📊' },
    { id: 'Lab Setup', label: 'Turnkey Lab Setup', emoji: '🔬' },
    { id: 'IT Networking', label: 'Enterprise Networking', emoji: '🌐' },
    { id: 'Datacenter & AMC', label: 'Datacenter & AMC', emoji: '🏢' }
  ];

  const filteredStudies = filter === 'all'
    ? caseStudies
    : caseStudies.filter(cs => cs.category === filter);

  return (
    <div className="case-studies-page">
      <Breadcrumb
        title="Enterprise Case Studies & Deployments"
        subtitle="Explore quantifiable outcomes, verified uptimes, and turnaround speed achieved for universities, factories, and corporate enterprises across Maharashtra."
        kicker="PROVEN PROJECT EXCELLENCE"
        emoji="📊"
      />

      {/* Filter Tabs */}
      <section className="section filter-section">
        <div className="container">
          <div className="case-studies-filter-pills">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`cs-filter-btn ${filter === c.id ? 'active' : ''}`}
                onClick={() => setFilter(c.id)}
              >
                <span>{c.emoji}</span>
                <span>{c.label}</span>
              </button>
            ))}
          </div>

          {/* Case Studies Detailed Cards */}
          <div className="case-studies-list">
            {filteredStudies.map((cs, idx) => (
              <motion.article
                key={cs.id}
                className="case-study-card"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="cs-card-media">
                  <img src={cs.image} alt={cs.title} loading="lazy" />
                  <div className="cs-card-overlay" />
                  <div className="cs-pill-badge">{cs.emoji} {cs.category}</div>
                </div>

                <div className="cs-card-content">
                  <div className="cs-meta-row">
                    <span className="cs-client-badge"><Building2 size={13} /> {cs.client}</span>
                    <span className="cs-ind-badge">{cs.industry}</span>
                  </div>

                  <h2>{cs.title}</h2>

                  {/* Impact Metrics Banner */}
                  <div className="cs-metrics-grid">
                    <div className="cs-metric-box">
                      <div className="cs-m-val text-cyan">⚡ {cs.metric}</div>
                      <div className="cs-m-label">Turnaround &amp; Speed</div>
                    </div>
                    <div className="cs-metric-box">
                      <div className="cs-m-val text-yellow">🏆 {cs.highlight}</div>
                      <div className="cs-m-label">Standard &amp; Reliability</div>
                    </div>
                  </div>

                  <div className="cs-challenge-box">
                    <h4>The Challenge:</h4>
                    <p>{cs.challenge}</p>
                  </div>

                  <div className="cs-solution-box">
                    <h4>Scorpy Tech Architecture &amp; Delivery:</h4>
                    <p>{cs.solution}</p>
                  </div>

                  <div className="cs-results-box">
                    <h4>Verified Business Impact:</h4>
                    <ul>
                      {cs.results.map((r, ri) => (
                        <li key={ri}>
                          <CheckCircle2 size={16} className="text-cyan" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="cs-card-action">
                    <Link to="/contact" className="primary-btn">
                      Replicate Similar Success For Your Facility <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Accreditations Banner */}
      <section className="section cs-cta-section">
        <div className="container">
          <div className="cs-bottom-banner">
            <div className="cs-banner-text">
              <span className="kicker">CONSULT AN INFRASTRUCTURE EXPERT</span>
              <h2>Have an upcoming campus rollout or lab modernization tender?</h2>
              <p>Our team assists with tender specifications, CAD line layouts, and official OEM budget estimates.</p>
            </div>
            <div className="cs-banner-btns">
              <Link to="/contact" className="primary-btn">
                Request On-Site Audit <ArrowRight size={16} />
              </Link>
              <a href={`tel:${COMPANY.phone}`} className="secondary-btn">
                <Phone size={15} /> Call {COMPANY.displayPhone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
