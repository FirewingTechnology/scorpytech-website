import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Check, ArrowRight, ShieldCheck, Zap, Phone, Clock, FileText, CheckCircle2,
  Sparkles, Layers, Cpu, Server, Network, Laptop, Wrench, ChevronRight
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { enterpriseServices, serviceTiers } from '../data/servicesData';
import { COMPANY } from '../data/companyData';
import QuoteCalculator from '../components/QuoteCalculator';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(enterpriseServices[0].id);

  const selectedService = enterpriseServices.find(s => s.id === activeTab) || enterpriseServices[0];

  return (
    <div className="services-page">
      <Breadcrumb
        title="Enterprise IT Solutions & Engineering Services"
        subtitle="Mission-critical IT infrastructure, datacenter virtualization, high-density structured networking, and proactive AMC contracts across Maharashtra."
        kicker="MNC-GRADE IT ARCHITECTURE"
        emoji="⚡"
      />

      {/* Services Sub-Nav / Sticky Tab Switcher */}
      <div className="service-tab-bar-wrap">
        <div className="container service-tabs-container">
          {enterpriseServices.map((s) => (
            <button
              key={s.id}
              type="button"
              className={`service-tab-btn ${activeTab === s.id ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(s.id);
                document.getElementById('service-detail-view')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
              }}
            >
              <span className="tab-emoji">{s.emoji}</span>
              <span className="tab-title">{s.title.split('&')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive In-Depth Service View */}
      <section id="service-detail-view" className="section service-detail-section">
        <div className="container">
          <motion.div
            key={selectedService.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="service-detail-card"
          >
            <div className="detail-media-col">
              <div className="detail-img-frame">
                <img src={selectedService.image} alt={selectedService.title} />
                <div className="detail-img-gradient" />
                <span className="detail-badge-pill">{selectedService.emoji} {selectedService.badge}</span>
              </div>
              <div className="detail-deliverables-card">
                <h4><FileText size={16} className="text-cyan" /> Key Deliverables &amp; Documentation</h4>
                <ul>
                  {selectedService.deliverables.map((d, di) => (
                    <li key={di}><CheckCircle2 size={15} className="text-cyan" /> {d}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="detail-content-col">
              <div className="detail-category">{selectedService.category}</div>
              <h2>{selectedService.title}</h2>
              <p className="detail-full-desc">{selectedService.fullDesc}</p>

              <div className="detail-features-header">
                <h4>Engineered Capabilities &amp; Standards:</h4>
              </div>

              <div className="detail-features-grid">
                {selectedService.features.map((feat, fi) => (
                  <div key={fi} className="detail-feat-item">
                    <div className="feat-check"><Check size={14} /></div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="detail-actions-bar">
                <Link to="/contact" className="primary-btn">
                  Request Custom RFP for this Solution <ArrowRight size={16} />
                </Link>
                <a href={`tel:${COMPANY.phone}`} className="secondary-btn">
                  <Phone size={15} /> Talk to Solution Architect
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All 6 Services Grid View */}
      <section className="section all-services-list-section">
        <div className="container">
          <div className="section-head-center">
            <div className="kicker">COMPLETE PRACTICE AREAS</div>
            <h2>Full Portfolio of Enterprise Technology Offerings</h2>
            <p>Every practice is backed by dedicated certified engineers, calibrated test equipment, and local Pune spares inventory.</p>
          </div>

          <div className="services-showcase-grid">
            {enterpriseServices.map((s, idx) => (
              <div key={s.id} className="service-feature-card">
                <div className="sfc-top">
                  <span className="sfc-emoji">{s.emoji}</span>
                  <span className="sfc-num">0{idx + 1}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.shortDesc}</p>
                <div className="sfc-features-preview">
                  {s.features.slice(0, 3).map((f, i) => (
                    <div key={i} className="sfc-feat-row">
                      <Check size={13} className="text-cyan" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <div className="sfc-action">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab(s.id);
                      document.getElementById('service-detail-view')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="sfc-explore-btn"
                  >
                    View Specifications <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLA Tiers Comparison Matrix */}
      <section className="section sla-tiers-section">
        <div className="container">
          <div className="section-head-center">
            <div className="kicker">MAINTENANCE &amp; AMC TIERS</div>
            <h2>SLA Guarantees Backed by Real Response Metrics</h2>
            <p>Choose an Annual Maintenance Contract (AMC) tailored precisely to your operational tolerance and budget.</p>
          </div>

          <div className="sla-tiers-grid">
            {serviceTiers.map((tier) => (
              <div
                key={tier.name}
                className={`sla-tier-card ${tier.highlight ? 'tier-highlighted' : ''}`}
              >
                {tier.tag && <div className="tier-tag-pill">{tier.tag}</div>}
                <div className="tier-header">
                  <span className="tier-emoji">{tier.emoji}</span>
                  <h3>{tier.name}</h3>
                  <small className="tier-target">{tier.target}</small>
                </div>

                <div className="tier-sla-banner">
                  <Clock size={16} className="text-cyan" />
                  <span>Response SLA: <b>{tier.response}</b></span>
                </div>

                <ul className="tier-features-list">
                  {tier.features.map((feat, fi) => (
                    <li key={fi}>
                      <CheckCircle2 size={16} className="tier-check" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="tier-action">
                  <Link to="/contact" className={`tier-btn ${tier.highlight ? 'primary-btn' : 'secondary-btn'}`}>
                    Choose {tier.name} <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Lifecycle Methodology */}
      <section className="section methodology-section">
        <div className="container">
          <div className="section-head-center">
            <div className="kicker">OUR IMPLEMENTATION METHODOLOGY</div>
            <h2>From Blueprint to 24/7 Operations</h2>
            <p>Our standard four-stage framework guarantees on-time delivery and flawless execution.</p>
          </div>

          <div className="methodology-grid">
            {[
              { num: '01', title: 'Audit & Requirements', desc: 'On-site physical inspection, existing infrastructure audit, cable mapping, and load analysis.', emoji: '🔍' },
              { num: '02', title: 'Architect & Blueprint', desc: 'CAD schematics, BOM finalization, network topology design, and procurement scheduling.', emoji: '📐' },
              { num: '03', title: 'Deploy & Certify', desc: 'Clean rack dressing, fiber splicing, Fluke testing, OS provisioning, and IQ/OQ validation.', emoji: '⚡' },
              { num: '04', title: 'Monitor & Support', desc: 'Preventative monthly maintenance, 24/7 dispatch hotline, loaner spares, and ongoing SLA.', emoji: '🛡️' }
            ].map((m) => (
              <div key={m.num} className="method-step-card">
                <div className="method-top">
                  <span className="method-emoji">{m.emoji}</span>
                  <span className="method-num">{m.num}</span>
                </div>
                <h4>{m.title}</h4>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Solution Estimator */}
      <section className="section">
        <div className="container">
          <QuoteCalculator />
        </div>
      </section>
    </div>
  );
}
