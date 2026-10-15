import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FlaskConical, CheckCircle2, ArrowRight, ShieldCheck, Phone,
  FileCheck2, Award, Zap, Sparkles, Filter, ChevronRight
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { labCategories, labEquipmentList, turnkeyLabProcess } from '../data/labEquipmentData';
import { COMPANY } from '../data/companyData';

export default function LabSolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredList = selectedCategory === 'all'
    ? labEquipmentList
    : labEquipmentList.filter(item => item.category === selectedCategory);

  return (
    <div className="lab-solutions-page">
      <Breadcrumb
        title="Precision Laboratory Equipment & Turnkey Setup"
        subtitle="End-to-end scientific instrumentation, cleanrooms, and testing setups for universities, biotech research facilities, and quality control labs."
        kicker="SCIENTIFIC & INSTITUTIONAL DIVISION"
        emoji="🔬"
      />

      {/* Overview Division Hero Banner */}
      <section className="section lab-overview-section">
        <div className="container lab-overview-grid">
          <div className="lab-overview-copy">
            <div className="kicker">TURNKEY SCIENTIFIC SOLUTIONS</div>
            <h2>Engineered For Compliance.<br /><span>Calibrated For Absolute Precision.</span></h2>
            <p>
              Scorpy Tech bridges the gap between scientific accuracy and seamless facility setup. We supply certified research equipment, chemical-resistant furnishings, cleanroom partitions, and gas utility lines to premier educational institutions and pharma QC labs.
            </p>
            <div className="lab-features-list">
              <div className="lab-feat-point">
                <ShieldCheck size={20} className="text-cyan" />
                <div>
                  <b>NABL Traceable Calibration</b>
                  <p>Every instrument is delivered with valid calibration certificates meeting AICTE, UGC, and ISO guidelines.</p>
                </div>
              </div>
              <div className="lab-feat-point">
                <Award size={20} className="text-cyan" />
                <div>
                  <b>IQ / OQ / PQ Validation Support</b>
                  <p>Installation, Operational, and Performance Qualification documentation for pharma and biotechnology audits.</p>
                </div>
              </div>
              <div className="lab-feat-point">
                <Zap size={20} className="text-cyan" />
                <div>
                  <b>Prompt Local Pune Support</b>
                  <p>On-site preventive maintenance, spare parts, and calibration checks carried out by certified field engineers.</p>
                </div>
              </div>
            </div>
            <div className="lab-hero-cta">
              <Link to="/contact" className="primary-btn">
                Request Turnkey Lab Proposal <ArrowRight size={16} />
              </Link>
              <a href={`tel:${COMPANY.phone}`} className="secondary-btn">
                <Phone size={15} /> Talk to Lab Specialist
              </a>
            </div>
          </div>

          <div className="lab-overview-media">
            <div className="lab-media-card">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80"
                alt="Precision Laboratory"
                className="lab-hero-img"
              />
              <div className="lab-media-overlay" />
              <div className="lab-media-badge">
                <FlaskConical size={20} />
                <div>
                  <b>500+ Lab Setups</b>
                  <small>Commissioned Across Maharashtra</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filterable Catalog Section */}
      <section className="section lab-catalog-section">
        <div className="container">
          <div className="section-head-center">
            <div className="kicker">EQUIPMENT DIRECTORY</div>
            <h2>Browse Certified Scientific Equipment</h2>
            <p>Select a category to filter our institutional instrument catalogue.</p>
          </div>

          {/* Filter Pills */}
          <div className="lab-filter-pills">
            {labCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-pill-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span className="pill-emoji">{cat.emoji}</span>
                <span>{cat.label}</span>
                {cat.id !== 'all' && (
                  <span className="pill-count">
                    {labEquipmentList.filter(i => i.category === cat.id).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Catalog Cards Grid */}
          <div className="lab-cards-grid">
            {filteredList.map((item, idx) => (
              <motion.div
                key={item.id}
                className="lab-catalog-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
              >
                <div className="card-thumb-wrap">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <div className="thumb-badge">
                    <span>{item.emoji} {item.standard}</span>
                  </div>
                </div>

                <div className="card-content">
                  <span className="card-category-tag">{item.category.toUpperCase()}</span>
                  <h3>{item.name}</h3>
                  <div className="specs-box">
                    <small>TECHNICAL SPECIFICATIONS:</small>
                    <p>{item.specs}</p>
                  </div>
                  <p className="card-desc">{item.description}</p>
                  <div className="card-app-box">
                    <b>Typical Applications:</b>
                    <span>{item.applications}</span>
                  </div>

                  <div className="card-footer">
                    <Link
                      to="/contact"
                      className="catalog-rfq-btn"
                    >
                      Request Quotation / RFQ <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Turnkey Setup Process */}
      <section className="section turnkey-process-section">
        <div className="container">
          <div className="section-head-center">
            <div className="kicker">TURNKEY EXECUTION MODEL</div>
            <h2>How We Build World-Class Laboratories</h2>
            <p>From empty room to accredited, operational research lab in four structured phases.</p>
          </div>

          <div className="turnkey-grid">
            {turnkeyLabProcess.map((proc) => (
              <div key={proc.step} className="turnkey-step-card">
                <div className="turnkey-header">
                  <span className="turnkey-emoji">{proc.emoji}</span>
                  <span className="turnkey-step-tag">PHASE {proc.step}</span>
                </div>
                <h3>{proc.title}</h3>
                <p>{proc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards Wall */}
      <section className="section lab-standards-section">
        <div className="container">
          <div className="standards-card">
            <div className="standards-text">
              <span className="kicker">COMPLIANCE ASSURANCE</span>
              <h2>Certified to Meet Stringent Regulatory Demands</h2>
              <p>
                Our installations adhere strictly to national and global standards, ensuring seamless audit approvals from AICTE, NBA, NAAC, FDA, and ISO inspecting committees.
              </p>
              <div className="standards-badges-row">
                <span className="s-badge">🏆 ISO 9001:2015</span>
                <span className="s-badge">🔬 NABL Traceability</span>
                <span className="s-badge">⚡ CE Marked</span>
                <span className="s-badge">🛡️ BSL-1 &amp; BSL-2 Compliant</span>
                <span className="s-badge">📐 AICTE Lab Guidelines</span>
              </div>
            </div>
            <div className="standards-action">
              <Link to="/contact" className="primary-btn">
                Consult with Lab Architect <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
