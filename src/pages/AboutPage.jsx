import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Building2, ShieldCheck, Award, Zap, CheckCircle2, ArrowRight,
  Phone, Mail, MapPin, Users, HeartHandshake, Sparkles, Target, Compass
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { COMPANY } from '../data/companyData';
import StatsTicker from '../components/StatsTicker';

export default function AboutPage() {
  const values = [
    {
      title: 'Engineering Precision',
      desc: 'We never compromise on technical rigor. Every fiber link is Fluke-tested and every lab balance is NABL calibrated before handover.',
      emoji: '🎯'
    },
    {
      title: 'Direct Accountability',
      desc: 'No endless call center transfers. You work directly with senior Pune infrastructure architects and named field technicians.',
      emoji: '🤝'
    },
    {
      title: 'Rapid Agility & Uptime',
      desc: 'With our dedicated Pune inventory and mobile service engineers, we guarantee sub-4 hour on-site SLA response times.',
      emoji: '⚡'
    },
    {
      title: 'Long-Term Partnership',
      desc: 'Handover is just the starting line. Our AMC contracts protect your capital investments over 3, 5, and 10+ operational years.',
      emoji: '🏆'
    }
  ];

  const milestones = [
    {
      year: 'Foundation',
      title: 'Scorpy Tech Inception',
      desc: 'Established in Pune with a vision to deliver corporate-grade IT networking and computer hardware solutions to emerging tech businesses.',
      emoji: '🚀'
    },
    {
      year: 'Expansion',
      title: 'Scientific & Lab Division',
      desc: 'Launched institutional laboratory engineering practice, securing turnkey projects for leading Pune universities and biotech colleges.',
      emoji: '🔬'
    },
    {
      year: 'Datacenter',
      title: 'Server Virtualization & SD-WAN',
      desc: 'Expanded capabilities into high-availability VMware clusters, 10G fiber backbones, and next-gen cybersecurity firewalls.',
      emoji: '🏢'
    },
    {
      year: 'Present',
      title: 'MNC Standards & Pan-Maharashtra Reach',
      desc: 'Operating from Gera Imperium Gateway with 250+ enterprise clients, 500+ lab deployments, and comprehensive 24/7 AMC coverage.',
      emoji: '🌐'
    }
  ];

  return (
    <div className="about-page">
      <Breadcrumb
        title="Corporate Profile & Engineering Excellence"
        subtitle="Learn about Scorpy Tech’s mission, Pune headquarters, leadership values, and why leading enterprises rely on our IT & laboratory infrastructure."
        kicker="ABOUT SCORPY TECH"
        emoji="🏢"
      />

      {/* Corporate Narrative Hero */}
      <section className="section about-narrative-section">
        <div className="container about-narrative-grid">
          <div className="about-narrative-media">
            <div className="narrative-img-box">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                alt="Scorpy Tech Corporate Environment"
                className="narrative-img"
              />
              <div className="narrative-badge">
                <Building2 size={24} className="text-cyan" />
                <div>
                  <b>Pune Corporate Hub</b>
                  <small>Gera Imperium Gateway</small>
                </div>
              </div>
            </div>
          </div>

          <div className="about-narrative-copy">
            <div className="kicker">WHO WE ARE</div>
            <h2>Engineering the Digital &amp; Scientific Backbone of Modern Maharashtra</h2>
            <p className="lead-p">
              Scorpy Tech was created to solve a persistent industry frustration: corporate clients and educational institutes having to juggle fragmented vendors for IT networking, server setups, and specialized laboratory equipment.
            </p>
            <p>
              By unifying enterprise IT infrastructure with scientific instrumentation under one roof, we provide end-to-end accountability. From high-density fiber structured cabling in corporate offices to cleanroom biosafety cabinets in research universities, our certified team handles planning, procurement, installation, and multi-year AMC maintenance.
            </p>

            <div className="narrative-highlights">
              <div className="nh-item">
                <CheckCircle2 size={18} className="text-cyan" />
                <span>Single-point responsibility for IT &amp; Laboratory hardware</span>
              </div>
              <div className="nh-item">
                <CheckCircle2 size={18} className="text-cyan" />
                <span>On-site field engineers stationed across Pune &amp; PCMC</span>
              </div>
              <div className="nh-item">
                <CheckCircle2 size={18} className="text-cyan" />
                <span>Strict compliance with ISO 9001:2015 and NABL guidelines</span>
              </div>
            </div>

            <div className="narrative-cta">
              <Link to="/contact" className="primary-btn">
                Partner with Scorpy Tech <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stats */}
      <StatsTicker />

      {/* Corporate Values */}
      <section className="section values-section">
        <div className="container">
          <div className="section-head-center">
            <div className="kicker">OUR OPERATING PRINCIPLES</div>
            <h2>The Values That Drive Our Engineering</h2>
            <p>Built upon a foundation of transparency, technical excellence, and rapid response.</p>
          </div>

          <div className="values-grid">
            {values.map((val) => (
              <div key={val.title} className="value-card">
                <div className="val-emoji">{val.emoji}</div>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section timeline-section">
        <div className="container">
          <div className="section-head-center">
            <div className="kicker">OUR JOURNEY</div>
            <h2>Milestones of Continuous Growth</h2>
            <p>From initial hardware deployments to enterprise-wide infrastructure transformations.</p>
          </div>

          <div className="timeline-grid">
            {milestones.map((m, idx) => (
              <div key={m.title} className="timeline-card">
                <div className="tl-badge">
                  <span>{m.emoji}</span>
                  <b>{m.year}</b>
                </div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
                <div className="tl-step-index">0{idx + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Headquarters Spotlight */}
      <section className="section hq-spotlight-section">
        <div className="container">
          <div className="hq-card">
            <div className="hq-text">
              <span className="kicker">HEADQUARTERS &amp; LOGISTICS</span>
              <h2>Strategic Pune Hub at Gera Imperium Gateway</h2>
              <p>
                Located centrally in Nashik Phata, our headquarters houses our central network monitoring desk, spare parts buffer stock, and calibration staging facility — enabling sub-4 hour on-site dispatch across Pune, Hinjewadi, Bhosari, Chakan, and Talegaon.
              </p>
              <div className="hq-contact-pills">
                <span className="hq-pill"><MapPin size={15} /> Gera Imperium Gateway, Pune</span>
                <span className="hq-pill"><Phone size={15} /> {COMPANY.displayPhone}</span>
                <span className="hq-pill"><Mail size={15} /> {COMPANY.email}</span>
              </div>
            </div>
            <div className="hq-action">
              <Link to="/contact" className="primary-btn">
                Visit Headquarters / Schedule Audit <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
