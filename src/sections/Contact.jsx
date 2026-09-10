import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink, Send, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import { personalInfo } from '../data/portfolio';
import './Contact.css';

function ContactItem({ icon: Icon, label, value, href, color, copyable }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      className="contact-item"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      style={{ '--item-color': color }}
    >
      <div className="contact-item__icon-wrap" style={{ background: `${color}15`, borderColor: `${color}30` }}>
        <Icon size={22} style={{ color }} />
      </div>
      <div className="contact-item__content">
        <span className="contact-item__label">{label}</span>
        <a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="contact-item__value"
          aria-label={`${label}: ${value}`}
        >
          <span className="contact-item__text">{value}</span>
          {href.startsWith('http') && <ExternalLink size={12} className="contact-item__ext" />}
        </a>
      </div>
      {copyable && (
        <button
          className="contact-item__copy"
          onClick={handleCopy}
          aria-label={`Copy ${label}`}
          title={`Copy ${label}`}
        >
          {copied ? <Check size={14} color="var(--accent-emerald, #10b981)" /> : <Copy size={14} />}
        </button>
      )}
    </motion.div>
  );
}

export default function Contact() {
  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: '#00f5ff',
      copyable: true,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: `+91 ${personalInfo.phone}`,
      href: `tel:+91${personalInfo.phone}`,
      color: '#10b981',
      copyable: true,
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      value: 'vinayak-chinchakhandi',
      href: personalInfo.linkedin,
      color: '#0A66C2',
      copyable: false,
    },
    {
      icon: GithubIcon,
      label: 'GitHub',
      value: 'Vinayak-Chinchakhandi',
      href: personalInfo.github,
      color: '#a855f7',
      copyable: false,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: 'https://maps.google.com/?q=Belagavi,India',
      color: '#f59e0b',
      copyable: false,
    },
  ];

  return (
    <section id="contact" className="section contact" aria-label="Contact section">
      <div className="container">
        {/* Background glow */}
        <div className="contact__glow" aria-hidden="true" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="contact__header"
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title contact__headline">
            Let's Build Something
            <br />
            <span className="gradient-text">Intelligent.</span>
          </h2>
          <p className="contact__desc">
            I'm currently open to internships, collaborative projects, and full-time opportunities.
            Whether you have a project in mind or just want to connect — my inbox is open.
          </p>
        </motion.div>

        <div className="contact__layout">
          {/* Contact Cards */}
          <motion.div
            className="contact__cards"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                className="contact-item-wrapper"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <ContactItem {...item} />
              </motion.div>
            ))}
          </motion.div>

          {/* Right Panel */}
          <motion.div
            className="contact__right"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="contact__availability">
              <div className="contact__availability-dot" />
              <span>Available for opportunities</span>
            </div>

            <div className="contact__info-panel">
              <h3>What I'm looking for</h3>
              <ul className="contact__looking-for">
                {[
                  'Full-time Software Engineering roles',
                  'AI/ML Engineering positions',
                  'Full-stack development internships',
                  'Collaborative project opportunities',
                  'Open-source contributions',
                ].map((item, i) => (
                  <li key={i}>
                    <span className="contact__check">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="contact__quick-actions">
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn-primary contact__primary-cta"
                aria-label="Send email to Vinayak"
              >
                <Send size={16} />
                Send a Message
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                aria-label="Connect on LinkedIn"
              >
                <LinkedinIcon size={16} />
                Connect on LinkedIn
              </a>
            </div>

            <div className="contact__note">
              <span className="contact__note-mono">response_time</span>
              <span>Usually within 24 hours</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
