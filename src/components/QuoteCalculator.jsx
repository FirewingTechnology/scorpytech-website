import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, CheckCircle2, ArrowRight, Send, Sparkles, ShieldCheck } from 'lucide-react';
import { COMPANY } from '../data/companyData';

export default function QuoteCalculator() {
  const [need, setNeed] = useState('it-infra');
  const [scale, setScale] = useState('medium');
  const [sla, setSla] = useState('gold');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [status, setStatus] = useState({ type: '', text: '' });

  const needOptions = [
    { id: 'it-infra', label: 'IT Infrastructure & Structured Cabling', emoji: '🌐' },
    { id: 'servers', label: 'Datacenter & Server Virtualization', emoji: '🏢' },
    { id: 'lab-setup', label: 'Turnkey Scientific Lab Setup & Equipment', emoji: '🔬' },
    { id: 'workstations', label: 'Corporate PC & Laptop Fleet Deployment', emoji: '💻' },
    { id: 'amc', label: 'Enterprise AMC & 24/7 Technical Support', emoji: '🛠️' }
  ];

  const scaleOptions = [
    { id: 'small', label: 'Starter / Departmental (10 - 30 Nodes / 1 Lab Room)', emoji: '🏢' },
    { id: 'medium', label: 'Mid-Enterprise (30 - 100 Nodes / Multi-Lab Facility)', emoji: '🚀' },
    { id: 'enterprise', label: 'Full Campus / Turnkey (100+ Nodes / Institutional Hub)', emoji: '⚡' }
  ];

  const slaOptions = [
    { id: 'silver', label: 'Silver Tier (Next Business Day SLA)', emoji: '🥈' },
    { id: 'gold', label: 'Gold Tier (< 4-Hour On-Site Pune SLA)', emoji: '🥇' },
    { id: 'platinum', label: 'Platinum 24/7 Mission-Critical (< 2-Hour SLA)', emoji: '💎' }
  ];

  const getEstimatedTimeline = () => {
    if (scale === 'small') return '5 - 10 Working Days';
    if (scale === 'medium') return '2 - 3 Weeks';
    return '3 - 6 Weeks (Turnkey Phased)';
  };

  const handleSubmitEstimate = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', text: 'Submitting your solution estimate request…' });

    const selectedNeed = needOptions.find(n => n.id === need)?.label || need;
    const selectedScale = scaleOptions.find(s => s.id === scale)?.label || scale;
    const selectedSla = slaOptions.find(s => s.id === sla)?.label || sla;

    const payload = {
      name: contactName,
      phone: contactPhone,
      email: contactEmail,
      service: `ESTIMATE: ${selectedNeed}`,
      message: `Solution Estimator Enquiry:\n• Requirement: ${selectedNeed}\n• Scale/Capacity: ${selectedScale}\n• SLA Tier: ${selectedSla}\n• Estimated Timeline: ${getEstimatedTimeline()}`
    };

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Unable to submit estimate.');
      setStatus({ type: 'success', text: 'Thank you! Your estimate request has been logged. Our engineering team will contact you within 2 hours.' });
      setContactName('');
      setContactPhone('');
      setContactEmail('');
    } catch (err) {
      setStatus({ type: 'error', text: err.message || 'Could not send estimate right now. Please call 866 851 4055 directly.' });
    }
  };

  return (
    <div className="quote-calculator-card">
      <div className="calc-header">
        <div className="calc-title-box">
          <div className="calc-badge">
            <Calculator size={15} />
            <span>INTERACTIVE SOLUTION ARCHITECT</span>
          </div>
          <h3>Enterprise Scope &amp; Implementation Estimator</h3>
          <p>Customize your technology requirements to generate an instant project scope and SLA proposal.</p>
        </div>
      </div>

      <div className="calc-body">
        {/* Step 1: Solution Area */}
        <div className="calc-step">
          <label className="calc-step-label">
            <span className="step-num">1</span>
            <span>Select Core Solution Requirement</span>
          </label>
          <div className="calc-options-grid">
            {needOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={`calc-option-btn ${need === opt.id ? 'active' : ''}`}
                onClick={() => setNeed(opt.id)}
              >
                <span className="calc-opt-emoji">{opt.emoji}</span>
                <span className="calc-opt-text">{opt.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Scale */}
        <div className="calc-step">
          <label className="calc-step-label">
            <span className="step-num">2</span>
            <span>Select Project Scale / Node Count</span>
          </label>
          <div className="calc-options-grid three-col">
            {scaleOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={`calc-option-btn ${scale === opt.id ? 'active' : ''}`}
                onClick={() => setScale(opt.id)}
              >
                <span className="calc-opt-emoji">{opt.emoji}</span>
                <span className="calc-opt-text">{opt.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: SLA */}
        <div className="calc-step">
          <label className="calc-step-label">
            <span className="step-num">3</span>
            <span>Select Support &amp; Maintenance Tier</span>
          </label>
          <div className="calc-options-grid three-col">
            {slaOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={`calc-option-btn ${sla === opt.id ? 'active' : ''}`}
                onClick={() => setSla(opt.id)}
              >
                <span className="calc-opt-emoji">{opt.emoji}</span>
                <span className="calc-opt-text">{opt.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Estimated Scope Summary Panel */}
        <div className="calc-summary-panel">
          <div className="summary-left">
            <div className="summary-label">Estimated Delivery Window:</div>
            <div className="summary-value text-cyan">⚡ {getEstimatedTimeline()}</div>
            <div className="summary-sub">
              <CheckCircle2 size={14} className="text-cyan" /> Includes Full On-Site Deployment, Cabling Dressing &amp; Calibration
            </div>
          </div>
          <div className="summary-badges">
            <span className="sum-tag">🛡️ NABL / ISO Certified</span>
            <span className="sum-tag">⚡ Standby Hardware Included</span>
            <span className="sum-tag">📍 Pune Dedicated SLA</span>
          </div>
        </div>

        {/* Direct RFP Submit Form */}
        <form onSubmit={handleSubmitEstimate} className="calc-submit-form">
          <div className="calc-form-title">
            <span>Request Official Engineering Blueprint &amp; Formal Quotation:</span>
          </div>
          <div className="calc-input-row">
            <input
              type="text"
              required
              placeholder="Your Name / Organization"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
            />
            <input
              type="tel"
              required
              placeholder="Phone Number (e.g. 8668514055)"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
            />
            <input
              type="email"
              required
              placeholder="Official Email Address"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
            />
            <button type="submit" className="primary-btn" disabled={status.type === 'loading'}>
              {status.type === 'loading' ? 'Submitting…' : <>Submit Estimate <Send size={15} /></>}
            </button>
          </div>
          {status.text && (
            <div className={`form-status ${status.type}`} style={{ marginTop: '12px' }}>
              {status.text}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
