import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Cpu, FlaskConical,
  Headphones, Laptop, Mail, MapPin, Network, Phone, Send, ShieldCheck,
  Sparkles, Wrench, Building2, Server, MonitorCog, MessageSquare, Check,
  Zap, Award, Activity, Layers, FileCheck2, Clock, Globe2, BarChart3
} from 'lucide-react';
import { COMPANY } from '../data/companyData';
import { enterpriseServices } from '../data/servicesData';
import { labEquipmentList } from '../data/labEquipmentData';
import { caseStudies } from '../data/caseStudiesData';
import StatsTicker from '../components/StatsTicker';
import QuoteCalculator from '../components/QuoteCalculator';

const bgVideos = [
  { id: 'it', label: 'IT Datacenter', icon: Server, src: '/hero-video.mp4', emoji: '🏢' },
  { id: 'lab', label: 'Precision Labs', icon: FlaskConical, src: '/lab-video.mp4', emoji: '🔬' },
  { id: 'net', label: 'Network Matrix', icon: Network, src: '/network-video.mp4', emoji: '🌐' }
];

const industries = [
  { name: 'Higher Education & Universities', emoji: '🎓', desc: 'Robotics, physics & chemistry laboratory setups, campus-wide Wi-Fi 6.' },
  { name: 'Automotive & Manufacturing', emoji: '🏭', desc: 'Shop-floor fiber backbones, industrial PCs, heavy-duty network enclosures.' },
  { name: 'Biotech & Pharmaceuticals', emoji: '🧬', desc: 'Cleanroom analytical balances, biosafety hoods, cold-chain monitoring.' },
  { name: 'Fintech & Corporate Offices', emoji: '💳', desc: 'High-availability server racks, SD-WAN, zero-downtime 24/7 AMC.' },
  { name: 'Research & Diagnostic Labs', emoji: '🧪', desc: 'NABL calibrated spectrophotometers, microcentrifuges, thermal cyclers.' },
  { name: 'IT & Software Development', emoji: '💻', desc: 'High-power developer workstations, Cisco switches, secure VPN access.' }
];

export default function HomePage() {
  const [activeVideo, setActiveVideo] = useState('/hero-video.mp4');
  const [faq, setFaq] = useState(null);

  return (
    <div className="home-page">
      {/* ===================== HERO SECTION ===================== */}
      <section className="hero-section">
        {/* Dynamic Background Video Switcher */}
        <div className="hero-video-wrapper">
          <video
            key={activeVideo}
            className="hero-video-bg"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src={activeVideo} type="video/mp4" />
          </video>
          <div className="hero-video-overlay" />
          <div className="hero-video-grid-pattern" />
        </div>

        <div className="container hero-container-content">
          <div className="hero-center-box">
            {/* Live Feed Video Switcher Pill Bar */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="video-control-bar"
            >
              <div className="video-control-label">
                <Activity size={13} className="pulse-icon text-cyan" />
                <span>Live Feed:</span>
              </div>
              <div className="video-switcher-pills">
                {bgVideos.map((v) => {
                  const Icon = v.icon;
                  const isActive = activeVideo === v.src;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      className={`video-pill-btn ${isActive ? 'active' : ''}`}
                      onClick={() => setActiveVideo(v.src)}
                      title={`Switch ambient background video to ${v.label}`}
                    >
                      <Icon size={12} className="pill-icon" />
                      <span>{v.label}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* MNC Hero Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hero-badge"
            >
              <Sparkles size={14} className="badge-sparkle" />
              <span>ONE STOP TECHNOLOGY &amp; LAB SOLUTIONS PARTNER</span>
              <span className="badge-tag">PUNE</span>
            </motion.div>

            {/* Hero Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-title"
            >
              IT That Powers Growth.<br />
              <span className="gradient-text">Labs Built For Precision.</span>
            </motion.h1>

            {/* Hero Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-desc"
            >
              Scorpy Tech delivers enterprise IT services, networking infrastructure, and professional laboratory equipment — backed by rapid on-site technical support across Pune &amp; Maharashtra.
            </motion.p>

            {/* Hero Action CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hero-cta-group"
            >
              <Link to="/contact" className="primary-btn pulse-glow">
                Request RFP / Proposal <ArrowRight size={17} />
              </Link>
              <a className="secondary-btn" href={`tel:${COMPANY.phone}`}>
                <Phone size={16} /> Call {COMPANY.displayPhone}
              </a>
              <a
                className="whatsapp-btn"
                href={COMPANY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare size={16} /> WhatsApp
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="trust-pills"
            >
              <div className="trust-pill">
                <CheckCircle2 size={15} />
                <span>&lt; 4h Pune On-site SLA</span>
              </div>
              <div className="trust-pill">
                <CheckCircle2 size={15} />
                <span>NABL &amp; ISO Calibrated</span>
              </div>
              <div className="trust-pill">
                <CheckCircle2 size={15} />
                <span>Complete IT AMC Services</span>
              </div>
            </motion.div>
          </div>

          {/* Featured Showcase Command Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-showcase"
          >
            <div className="showcase-topbar">
              <div className="window-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <div className="window-title">
                <Activity size={13} className="pulse-icon text-cyan" /> SCORPY TECH COMMAND CENTER — PUNE
              </div>
              <div className="window-status">
                <span className="status-ping" /> OPERATIONAL
              </div>
            </div>

            <div className="showcase-grid">
              {/* Left Pillar: IT Services */}
              <div className="showcase-pillar">
                <div className="pillar-header">
                  <Cpu className="pillar-icon" />
                  <div>
                    <h4>IT INFRASTRUCTURE</h4>
                    <small>Enterprise &amp; Systems</small>
                  </div>
                </div>
                <ul className="pillar-list">
                  <li><Check size={14} /> Network Planning &amp; Structured Cabling</li>
                  <li><Check size={14} /> Servers, Virtualization &amp; Storage</li>
                  <li><Check size={14} /> Workstation &amp; PC Deployment</li>
                  <li><Check size={14} /> Annual Maintenance Contracts (AMC)</li>
                </ul>
                <div className="pillar-tag">⚡ 24/7 Response Available</div>
              </div>

              {/* Center Showcase: Brand Emblem */}
              <div className="showcase-emblem-wrap">
                <div className="emblem-card">
                  <div className="emblem-glow" />
                  <img src="/scorpytech-logo.png" alt="Scorpy Tech Official Emblem" />
                  <div className="emblem-badge">
                    <Zap size={14} /> ONE STOP SOLUTION
                  </div>
                  <p className="emblem-sub">IT Services &bull; Lab Equipment</p>
                </div>
              </div>

              {/* Right Pillar: Lab Solutions */}
              <div className="showcase-pillar">
                <div className="pillar-header">
                  <FlaskConical className="pillar-icon lab-icon" />
                  <div>
                    <h4>LAB EQUIPMENT</h4>
                    <small>Setup, Supply &amp; Support</small>
                  </div>
                </div>
                <ul className="pillar-list">
                  <li><Check size={14} /> Educational &amp; Research Lab Setup</li>
                  <li><Check size={14} /> Precision Scientific Instrumentation</li>
                  <li><Check size={14} /> Sourcing &amp; Institutional Supply</li>
                  <li><Check size={14} /> Calibration &amp; Equipment Maintenance</li>
                </ul>
                <div className="pillar-tag lab-tag">🔬 Quality Assured</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Capabilities Ticker */}
        <div className="hero-ticker-wrap">
          <div className="container hero-ticker">
            <span><b>SCORPY TECH</b> PUNE</span>
            <div className="ticker-dot" />
            <span>NETWORKING</span>
            <div className="ticker-dot" />
            <span>SERVER SYSTEMS</span>
            <div className="ticker-dot" />
            <span>LAB EQUIPMENT</span>
            <div className="ticker-dot" />
            <span>AMC SUPPORT</span>
            <div className="ticker-dot" />
            <span>HARDWARE SETUP</span>
          </div>
        </div>
      </section>

      {/* ===================== LIVE STATS TICKER ===================== */}
      <StatsTicker />

      {/* ===================== SERVICES SHOWCASE ===================== */}
      <section className="section services-section">
        <div className="container">
          <div className="section-head-center">
            <div className="kicker">ENTERPRISE CAPABILITIES</div>
            <h2>Comprehensive Technology &amp; Engineering<br /><span>Built For High-Scale Organizations</span></h2>
            <p>From carrier-grade networking to turnkey laboratory infrastructure, Scorpy Tech brings institutional-grade execution under one roof.</p>
          </div>

          <div className="service-grid">
            {enterpriseServices.map((s, i) => (
              <motion.article
                className="service-card"
                key={s.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="service-card-top">
                  <div className="service-emoji-badge">{s.emoji}</div>
                  <span className="service-badge-tag">{s.badge}</span>
                </div>
                <div className="service-card-image-wrap">
                  <img src={s.image} alt={s.title} loading="lazy" />
                  <div className="service-image-gradient" />
                </div>
                <div className="service-card-body">
                  <small className="service-category">{s.category}</small>
                  <h3>{s.title}</h3>
                  <p>{s.shortDesc}</p>
                  <ul className="service-quick-features">
                    {s.features.slice(0, 3).map((f, fi) => (
                      <li key={fi}><Check size={13} className="text-cyan" /> {f}</li>
                    ))}
                  </ul>
                  <div className="service-card-foot">
                    <Link to="/services" className="service-link-btn">
                      Explore Full Specifications <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="section-cta-center">
            <Link to="/services" className="primary-btn">
              Explore All 6 Enterprise Services &amp; SLA Tiers <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== LAB SOLUTIONS PREVIEW ===================== */}
      <section className="section lab-preview-section">
        <div className="container">
          <div className="section-head-split">
            <div>
              <div className="kicker">SCIENTIFIC &amp; INSTITUTIONAL SYSTEMS</div>
              <h2>Precision Laboratory Equipment &amp; Turnkey Setup</h2>
              <p>Certified analytical instruments, chemical-resistant furnishings, and NABL traceable calibration for universities, biotech units, and testing facilities.</p>
            </div>
            <div>
              <Link to="/lab-solutions" className="secondary-btn">
                Browse Complete Lab Catalog <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="lab-preview-grid">
            {labEquipmentList.slice(0, 4).map((item) => (
              <div key={item.id} className="lab-item-card">
                <div className="lab-item-img-wrap">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <span className="lab-item-cat-badge">{item.emoji} {item.standard}</span>
                </div>
                <div className="lab-item-body">
                  <h4>{item.name}</h4>
                  <p className="lab-specs-line">{item.specs}</p>
                  <p className="lab-desc-line">{item.description}</p>
                  <div className="lab-foot-row">
                    <span className="lab-app-pill">{item.applications.split(',')[0]}</span>
                    <Link to="/contact" className="lab-rfq-link">
                      Enquire <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CLIENT INDUSTRIES ===================== */}
      <section className="section industries-section">
        <div className="container">
          <div className="section-head-center">
            <div className="kicker">SECTORS WE EMPOWER</div>
            <h2>Engineered For Mission-Critical Industries</h2>
            <p>From cleanrooms and STEM university laboratories to automotive plant floors and financial datacenters.</p>
          </div>

          <div className="industries-grid">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.name}
                className="industry-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <div className="ind-emoji">{ind.emoji}</div>
                <h4>{ind.name}</h4>
                <p>{ind.desc}</p>
                <div className="ind-line" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CASE STUDIES PREVIEW ===================== */}
      <section className="section case-studies-section">
        <div className="container">
          <div className="section-head-center">
            <div className="kicker">PROVEN TRACK RECORD</div>
            <h2>Transforming Infrastructure Across Maharashtra</h2>
            <p>Real-world deployments delivering verified uptime, speed improvements, and compliance.</p>
          </div>

          <div className="case-studies-preview-grid">
            {caseStudies.slice(0, 2).map((cs) => (
              <div key={cs.id} className="case-study-hero-card">
                <div className="cs-img-col">
                  <img src={cs.image} alt={cs.title} loading="lazy" />
                  <span className="cs-category-badge">{cs.emoji} {cs.category}</span>
                </div>
                <div className="cs-body-col">
                  <div className="cs-client-tag">{cs.client}</div>
                  <h3>{cs.title}</h3>
                  <div className="cs-metrics-box">
                    <div className="metric-item">
                      <b>{cs.metric}</b>
                      <small>Key Achievement</small>
                    </div>
                    <div className="metric-item">
                      <b>{cs.highlight}</b>
                      <small>Compliance / Quality</small>
                    </div>
                  </div>
                  <p>{cs.challenge}</p>
                  <Link to="/case-studies" className="primary-btn inline-btn">
                    Read Full Case Study <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="section-cta-center">
            <Link to="/case-studies" className="secondary-btn">
              View All 4 Featured Case Studies &amp; Outcomes <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== INTERACTIVE ESTIMATOR ===================== */}
      <section className="section estimator-section">
        <div className="container">
          <QuoteCalculator />
        </div>
      </section>

      {/* ===================== FAQ SECTION ===================== */}
      <section className="section faq-section">
        <div className="container faq-grid">
          <div className="faq-left">
            <div className="kicker">FREQUENTLY ASKED QUESTIONS</div>
            <h2>Clear Answers to Common Questions</h2>
            <p>Everything you need to know about our enterprise IT deployments, lab equipment sourcing, and Pune AMC support.</p>
            <div className="faq-direct-box">
              <span className="faq-box-title">Need immediate technical advice?</span>
              <p>Our senior infrastructure engineers are available for phone consultations.</p>
              <a href={`tel:${COMPANY.phone}`} className="primary-btn inline-btn">
                <Phone size={15} /> Call {COMPANY.displayPhone}
              </a>
            </div>
          </div>

          <div className="faq-list">
            {[
              ['What enterprise IT services does Scorpy Tech offer?', 'We provide end-to-end enterprise networking (Cat6A & 10G fiber, Cisco/Aruba switches, Wi-Fi 6), datacenter server racks, VMware virtualization, CAD workstation fleets, firewall cybersecurity (Fortinet, Sophos), and 24/7 SLA-backed AMC maintenance.'],
              ['How does Scorpy Tech handle Turnkey Lab Setup?', 'We provide complete turnkey laboratory solutions from architectural 3D CAD design, ESD flooring, utility plumbing (gas/vacuum/pure water), and fume hood extraction, to certified instrumentation sourcing and full NABL/ISO IQ/OQ/PQ validation.'],
              ['What is the guaranteed AMC response time in Pune?', 'Our Gold and Platinum AMC clients benefit from a guaranteed on-site response time of under 4 hours across Pune, Pimpri-Chinchwad, Hinjewadi, and Chakan industrial corridors, backed by emergency loaner hardware.'],
              ['Can we procure specialized or imported scientific hardware through Scorpy Tech?', 'Yes. Scorpy Tech has direct sourcing channels with global and domestic scientific manufacturers. We handle international customs, logistics, safe transport, installation, and warranty fulfillment.'],
              ['Where is Scorpy Tech located and how do we book a site audit?', 'Our corporate headquarters is located at 736 B Wing, Gera Imperium Gateway, Nashik Phata, Pune, Maharashtra. You can request a free on-site engineering audit by submitting the RFP form or calling 866 851 4055.']
            ].map(([q, a], i) => (
              <div className="faq-item" key={q}>
                <button onClick={() => setFaq(faq === i ? null : i)} aria-expanded={faq === i}>
                  <span>{q}</span>
                  {faq === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                <AnimatePresence>
                  {faq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="faq-answer"
                    >
                      <p>{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
