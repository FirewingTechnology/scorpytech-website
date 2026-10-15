import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, ArrowUp, FileText } from 'lucide-react';
import { COMPANY } from '../data/companyData';

export default function FloatingQuickBar() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-quick-dock" aria-label="Quick Actions">
      {/* WhatsApp Button */}
      <a
        href={COMPANY.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="quick-dock-btn whatsapp"
        title="Chat on WhatsApp"
        aria-label="Chat with Scorpy Tech on WhatsApp"
      >
        <MessageSquare size={20} />
        <span className="dock-tooltip">WhatsApp Us</span>
      </a>

      {/* Call Button */}
      <a
        href={`tel:${COMPANY.phone}`}
        className="quick-dock-btn phone"
        title={`Call ${COMPANY.displayPhone}`}
        aria-label="Direct Phone Call"
      >
        <Phone size={20} />
        <span className="dock-tooltip">Call {COMPANY.displayPhone}</span>
      </a>

      {/* Request RFP Shortcut */}
      <Link
        to="/contact"
        className="quick-dock-btn rfp"
        title="Request Enterprise Quote"
        aria-label="Request Enterprise Quote"
      >
        <FileText size={20} />
        <span className="dock-tooltip">Quick RFP</span>
      </Link>

      {/* Scroll to Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="quick-dock-btn back-to-top"
          title="Scroll to Top"
          aria-label="Back to Top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
