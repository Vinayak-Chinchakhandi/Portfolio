import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { navLinks } from '../data/portfolio';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(l => l.href.replace('#', ''));
      let current = 'hero';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 160) {
          current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    if (menuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const scrollTo = (href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="navbar__inner">
          {/* Logo */}
          <button
            className="navbar__logo"
            onClick={() => scrollTo('#hero')}
            aria-label="Go to top"
          >
            <div className="navbar__logo-icon">
              <Code2 size={16} />
            </div>
            <span className="navbar__logo-text">VC</span>
          </button>

          {/* Desktop Links */}
          <ul className="navbar__links" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  className={`navbar__link ${active === link.href.replace('#', '') ? 'navbar__link--active' : ''}`}
                  onClick={() => scrollTo(link.href)}
                  aria-current={active === link.href.replace('#', '') ? 'page' : undefined}
                >
                  {link.label}
                  {active === link.href.replace('#', '') && (
                    <motion.span
                      className="navbar__link-dot"
                      layoutId="nav-dot"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="mailto:vinayakchinchakhandi165@gmail.com"
            className="navbar__cta"
            aria-label="Contact Vinayak via email"
          >
            Let's Talk
          </a>

          {/* Mobile toggle */}
          <button
            className="navbar__toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <ul role="list">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <button
                      className={`mobile-menu__link ${active === link.href.replace('#', '') ? 'mobile-menu__link--active' : ''}`}
                      onClick={() => scrollTo(link.href)}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
              <a
                href="mailto:vinayakchinchakhandi165@gmail.com"
                className="mobile-menu__cta"
              >
                Let's Talk
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
