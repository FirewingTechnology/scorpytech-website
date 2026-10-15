import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, Send,
  Sparkles, Award, Heart, ShieldCheck, Phone
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { openPositions, culturePerks } from '../data/careersData';
import { COMPANY } from '../data/companyData';

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState(openPositions[0].title);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    experience: '',
    linkedin: '',
    coverNote: ''
  });
  const [status, setStatus] = useState({ type: '', text: '' });

  const handleApply = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', text: 'Submitting your application…' });

    const payload = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      service: `CAREER APPLICATION: ${selectedRole}`,
      message: `Applicant Details:\n• Role Applied For: ${selectedRole}\n• Experience: ${formData.experience}\n• LinkedIn / Portfolio: ${formData.linkedin || 'N/A'}\n• Note:\n${formData.coverNote}`
    };

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Unable to submit application.');
      setStatus({ type: 'success', text: 'Thank you! Your application has been forwarded to our HR & Engineering Leadership team.' });
      setFormData({ name: '', phone: '', email: '', experience: '', linkedin: '', coverNote: '' });
    } catch (err) {
      setStatus({ type: 'error', text: err.message || 'Error submitting application. Please email scorpytechs@gmail.com directly.' });
    }
  };

  return (
    <div className="careers-page">
      <Breadcrumb
        title="Careers &amp; Engineering Culture"
        subtitle="Work on cutting-edge enterprise networks, server virtualizations, and advanced scientific laboratories. Grow with Pune’s fastest expanding technology team."
        kicker="JOIN OUR PUNE TEAM"
        emoji="💼"
      />

      {/* Culture & Perks Grid */}
      <section className="section culture-section">
        <div className="container">
          <div className="section-head-center">
            <div className="kicker">LIFE AT SCORPY TECH</div>
            <h2>Where Engineering Passion Meets Direct Impact</h2>
            <p>We empower our engineers with real responsibility, sponsored certifications, and hands-on cutting-edge technology.</p>
          </div>

          <div className="perks-grid">
            {culturePerks.map((p) => (
              <div key={p.title} className="perk-card">
                <div className="perk-emoji">{p.emoji}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions & Application Section */}
      <section className="section openings-section">
        <div className="container openings-grid">
          {/* Left: Job Openings List */}
          <div className="openings-list-col">
            <div className="openings-header">
              <div className="kicker">CURRENT OPPORTUNITIES</div>
              <h2>Open Positions</h2>
              <p>Select a position below to view details and submit your application.</p>
            </div>

            <div className="jobs-stack">
              {openPositions.map((job) => (
                <div
                  key={job.id}
                  className={`job-card ${selectedRole === job.title ? 'active' : ''}`}
                  onClick={() => setSelectedRole(job.title)}
                >
                  <div className="job-card-top">
                    <span className="job-emoji">{job.emoji}</span>
                    <span className="job-dept">{job.department}</span>
                  </div>
                  <h3>{job.title}</h3>
                  <div className="job-meta-row">
                    <span><MapPin size={13} /> {job.location}</span>
                    <span><Clock size={13} /> {job.experience}</span>
                    <span className="job-type-pill">{job.type}</span>
                  </div>
                  <p>{job.desc}</p>
                  <div className="job-skills-pills">
                    {job.skills.map(s => (
                      <span key={s} className="skill-pill">{s}</span>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="job-select-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedRole(job.title);
                      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Apply for this Role <ArrowRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Quick Application Form */}
          <div id="application-form" className="application-form-col">
            <div className="app-form-box">
              <div className="app-form-header">
                <span className="kicker">QUICK APPLICATION</span>
                <h3>Apply for: <span className="text-cyan">{selectedRole}</span></h3>
                <p>Send your profile directly to our hiring panel. We reply to all shortlisted candidates within 48 hours.</p>
              </div>

              <form onSubmit={handleApply} className="career-form">
                <div className="form-group">
                  <label>Selected Role</label>
                  <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                  >
                    {openPositions.map(j => (
                      <option key={j.id} value={j.title}>{j.title}</option>
                    ))}
                    <option value="General Technical Application">General Technical Application</option>
                  </select>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="866 851 4055"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Total Experience *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 3 Years in Networking"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>LinkedIn / Portfolio URL (Optional)</label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/username"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Brief Introduction / Core Skills *</label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Mention your relevant certifications (CCNA, NABL, etc.) and brief career summary..."
                    value={formData.coverNote}
                    onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                  />
                </div>

                <button type="submit" className="primary-btn submit-btn" disabled={status.type === 'loading'}>
                  {status.type === 'loading' ? 'Submitting Application…' : <>Submit Job Application <Send size={16} /></>}
                </button>

                {status.text && (
                  <div className={`form-status ${status.type}`}>
                    {status.text}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
