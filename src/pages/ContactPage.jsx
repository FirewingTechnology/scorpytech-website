import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone, Mail, MapPin, Send, MessageSquare, Clock, ShieldCheck,
  Building2, CheckCircle2, ArrowRight, Sparkles, AlertCircle
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { COMPANY } from '../data/companyData';
import { enterpriseServices } from '../data/servicesData';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', text: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', text: 'Submitting enquiry to Scorpy Tech…' });

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Unable to submit enquiry.');
      setStatus({
        type: 'success',
        text: 'Thank you! Your enquiry has been routed directly to our Pune engineering leads. We will contact you promptly.'
      });
      setForm({ name: '', phone: '', email: '', service: '', message: '' });
    } catch (err) {
      setStatus({
        type: 'error',
        text: err.message || 'Something went wrong. Please call us directly at 866 851 4055.'
      });
    }
  };

  const departments = [
    {
      title: 'Enterprise IT & Infrastructure RFQ',
      phone: COMPANY.displayPhone,
      email: COMPANY.email,
      desc: 'Server virtualization, structured fiber cabling, campus Wi-Fi & IT fleets.',
      emoji: '🌐'
    },
    {
      title: 'Precision Lab Systems & Setup',
      phone: COMPANY.displayPhone,
      email: COMPANY.email,
      desc: 'Analytical instruments, university STEM laboratories, cleanroom validation.',
      emoji: '🔬'
    },
    {
      title: '24/7 AMC & Emergency Dispatch',
      phone: COMPANY.displayPhone,
      email: COMPANY.email,
      desc: 'Guaranteed sub-4 hour on-site dispatch across Pune & Pimpri-Chinchwad.',
      emoji: '⚡'
    }
  ];

  return (
    <div className="contact-page">
      <Breadcrumb
        title="Enterprise RFQ & Global Headquarters"
        subtitle="Initiate an official Request for Proposal (RFP), schedule an on-site infrastructure audit, or reach our 24/7 technical dispatch team in Pune."
        kicker="DIRECT CONNECTIVITY"
        emoji="📞"
      />

      {/* Multi-Department Contact Cards */}
      <section className="section dept-section">
        <div className="container">
          <div className="section-head-center">
            <div className="kicker">DEPARTMENT DIRECTORY</div>
            <h2>Route Your Request to the Right Engineering Team</h2>
            <p>Direct lines to our practice heads for rapid turnarounds without administrative delays.</p>
          </div>

          <div className="dept-grid">
            {departments.map((d) => (
              <div key={d.title} className="dept-card">
                <div className="dept-emoji">{d.emoji}</div>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
                <div className="dept-contact-links">
                  <a href={`tel:${COMPANY.phone}`} className="dept-link">
                    <Phone size={14} /> {d.phone}
                  </a>
                  <a href={`mailto:${d.email}`} className="dept-link">
                    <Mail size={14} /> {d.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main RFP Form & Location Section */}
      <section className="section contact-main-section">
        <div className="container contact-main-grid">
          {/* Left: Office Information & Location */}
          <div className="contact-info-col">
            <div className="contact-info-card">
              <div className="kicker">HEADQUARTERS LOCATION</div>
              <h2>Scorpy Tech Solutions Pvt. Ltd.</h2>
              <p>
                Strategically positioned in Gera Imperium Gateway, Nashik Phata, connecting swiftly to Hinjewadi IT Park, Bhosari, Chakan MIDC, and Pune central business districts.
              </p>

              <div className="contact-details-list">
                <div className="cd-item">
                  <MapPin className="cd-icon" size={20} />
                  <div>
                    <small>HEADQUARTERS ADDRESS</small>
                    <b>{COMPANY.address}</b>
                  </div>
                </div>

                <a href={`tel:${COMPANY.phone}`} className="cd-item link">
                  <Phone className="cd-icon" size={20} />
                  <div>
                    <small>ENTERPRISE HOTLINE</small>
                    <b>{COMPANY.displayPhone}</b>
                  </div>
                </a>

                <a href={`mailto:${COMPANY.email}`} className="cd-item link">
                  <Mail className="cd-icon" size={20} />
                  <div>
                    <small>OFFICIAL CORRESPONDENCE</small>
                    <b>{COMPANY.email}</b>
                  </div>
                </a>

                <div className="cd-item">
                  <Clock className="cd-icon" size={20} />
                  <div>
                    <small>HOURS OF OPERATION</small>
                    <b>Monday – Saturday: 9:00 AM – 7:30 PM</b>
                    <span className="dispatch-badge">24/7 SLA Emergency Coverage</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Banner */}
              <div className="contact-whatsapp-box">
                <div className="wa-text">
                  <MessageSquare size={22} className="text-green" />
                  <div>
                    <b>Prefer Instant Messaging?</b>
                    <small>Connect with our engineering coordinator directly on WhatsApp.</small>
                  </div>
                </div>
                <a
                  href={COMPANY.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
                >
                  <MessageSquare size={16} /> WhatsApp Now
                </a>
              </div>

              {/* Google Maps Route Launcher */}
              <div className="map-launcher-card">
                <div className="map-launcher-content">
                  <MapPin size={24} className="text-cyan" />
                  <div>
                    <b>Navigating to Gera Imperium Gateway?</b>
                    <small>Find us on Google Maps at Nashik Phata, Pune.</small>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Gera+Imperium+Gateway+Nashik+Phata+Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-btn inline-btn"
                >
                  Open in Google Maps <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: RFP & Enquiry Submission Form */}
          <div className="contact-form-col">
            <div className="rfp-form-card">
              <div className="rfp-form-header">
                <span className="kicker">OFFICIAL RFP PORTAL</span>
                <h3>Submit Your Technology Requirement</h3>
                <p>Complete this form and our senior solution architect will review and respond with preliminary technical feedback.</p>
              </div>

              <form onSubmit={handleSubmit} className="rfp-form">
                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="866 851 4055"
                      pattern="[0-9 +()-]{10,}"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Corporate / Official Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Requirement Division *</label>
                    <select
                      required
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                    >
                      <option value="">Select Service / Requirement Area</option>
                      {enterpriseServices.map(s => (
                        <option key={s.id} value={s.title}>{s.emoji} {s.title}</option>
                      ))}
                      <option value="Turnkey Precision Lab Setup">🔬 Turnkey Precision Lab Setup</option>
                      <option value="Scientific Instruments Sourcing">🧪 Scientific Instruments Sourcing</option>
                      <option value="Annual Maintenance Contract (AMC)">🛠️ Annual Maintenance Contract (AMC)</option>
                      <option value="General Enterprise Consultation">⚡ General Enterprise Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Requirement Details &amp; Scope *</label>
                  <textarea
                    required
                    rows="5"
                    placeholder="Describe your project, scale, timeline, equipment needs, or site address..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="primary-btn submit-btn"
                  disabled={status.type === 'loading'}
                >
                  {status.type === 'loading' ? 'Transmitting Request…' : <>Send Enquiry to Scorpy Tech <Send size={16} /></>}
                </button>

                {status.text && (
                  <div className={`form-status ${status.type}`}>
                    {status.text}
                  </div>
                )}

                <div className="form-security-note">
                  <ShieldCheck size={14} className="text-cyan" />
                  <span>Your enquiry is transmitted securely and routed directly to scorpytechs@gmail.com</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
