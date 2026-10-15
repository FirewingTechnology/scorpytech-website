import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY } from '../data/companyData';

export default function StatsTicker() {
  return (
    <div className="stats-ticker-wrap">
      <div className="container">
        <div className="stats-ticker-grid">
          {COMPANY.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="stat-card-top">
                <span className="stat-emoji">{stat.emoji}</span>
                <span className="stat-value">{stat.value}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-sub">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
