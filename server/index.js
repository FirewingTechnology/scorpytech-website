const express = require('express');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_DIST = path.join(__dirname, '..', 'dist');

app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json({ limit: '20kb' }));
app.use(express.urlencoded({ extended: false }));

const enquiryLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 15, standardHeaders: true, legacyHeaders: false });

app.get('/api/health', (_req, res) => res.json({ ok: true, service: 'Scorpy Tech enquiry API' }));

app.post('/api/enquiry', enquiryLimiter, async (req, res) => {
  const { name, phone, email, service, message } = req.body || {};
  const clean = v => typeof v === 'string' ? v.trim() : '';
  const data = { name: clean(name), phone: clean(phone), email: clean(email), service: clean(service), message: clean(message) };

  if (!data.name || !data.phone || !data.email || !data.service || !data.message) return res.status(400).json({ message: 'Please complete all required fields.' });
  if (data.name.length > 100 || data.phone.length > 30 || data.email.length > 150 || data.service.length > 120 || data.message.length > 3000) return res.status(400).json({ message: 'One or more fields are too long.' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return res.status(400).json({ message: 'Please enter a valid email address.' });

  const required = ['SMTP_HOST','SMTP_PORT','SMTP_USER','SMTP_PASS'];
  const missing = required.filter(k => !process.env[k]);
  if (missing.length) return res.status(503).json({ message: 'Email service is not configured yet. Please call Scorpy Tech directly.' });

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: String(process.env.SMTP_SECURE).toLowerCase() === 'true',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });

    await transporter.sendMail({
      from: `Scorpy Tech Website <${process.env.SMTP_USER}>`,
      to: process.env.ENQUIRY_TO || 'scorpytechs@gmail.com',
      replyTo: data.email,
      subject: `New Scorpy Tech Enquiry — ${data.service}`,
      text: `New enquiry from the Scorpy Tech website\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nService: ${data.service}\n\nMessage:\n${data.message}`,
      html: `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#13202b"><h2>New Scorpy Tech Website Enquiry</h2><table cellpadding="8" cellspacing="0"><tr><td><b>Name</b></td><td>${escapeHtml(data.name)}</td></tr><tr><td><b>Phone</b></td><td>${escapeHtml(data.phone)}</td></tr><tr><td><b>Email</b></td><td>${escapeHtml(data.email)}</td></tr><tr><td><b>Service</b></td><td>${escapeHtml(data.service)}</td></tr></table><p><b>Message</b></p><p>${escapeHtml(data.message).replace(/\n/g,'<br>')}</p><hr><small>Submitted from scorpytech official website.</small></div>`
    });
    return res.json({ message: 'Enquiry sent successfully.' });
  } catch (err) {
    console.error('Mail error:', err.message);
    return res.status(500).json({ message: 'We could not send the enquiry right now. Please call or email Scorpy Tech directly.' });
  }
});

function escapeHtml(str) { return str.replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }

if (require('fs').existsSync(CLIENT_DIST)) {
  app.use(express.static(CLIENT_DIST));
  app.use((req, res, next) => {
    if (req.method === 'GET' && !req.path.startsWith('/api/')) {
      return res.sendFile(path.join(CLIENT_DIST, 'index.html'));
    }
    next();
  });
}

app.listen(PORT, () => console.log(`Scorpy Tech server running on http://localhost:${PORT}`));
