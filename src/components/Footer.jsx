import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUp, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolio';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        {/* Top row */}
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">VC</div>
            <div>
              <h2 className="footer__name">{personalInfo.name}</h2>
              <p className="footer__title">Full Stack Developer & AI Engineer</p>
            </div>
          </div>

          <div className="footer__socials">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label="GitHub profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="footer__social"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={`tel:+91${personalInfo.phone}`}
              className="footer__social"
              aria-label="Phone"
            >
              <Phone size={18} />
            </a>
          </div>

          <button
            className="footer__back-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        {/* Divider */}
        <div className="footer__divider" aria-hidden="true" />

        {/* Bottom row */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="footer__made">
            Built with <Heart size={12} fill="currentColor" style={{ color: '#f59e0b', display: 'inline' }} /> using React, Vite & Three.js
          </p>
          <p className="footer__quote">"{personalInfo.quote}"</p>
        </div>
      </div>
    </footer>
  );
}
