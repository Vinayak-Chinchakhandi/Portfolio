import React, { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowDown, Sparkles, ChevronRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import { personalInfo } from '../data/portfolio';
import './Hero.css';

const HeroScene = React.lazy(() => import('../three/HeroScene'));

const words = ['AI Engineer', 'Full Stack Developer', 'RAG Systems Builder', 'Open Source Contributor'];

function TypeWriter() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let timeout;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className="hero__typewriter">
      {displayed}
      <span className="hero__cursor" aria-hidden="true">|</span>
    </span>
  );
}

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Hero section">
      {/* Background glow orbs */}
      <div className="hero__orb hero__orb--cyan" aria-hidden="true" />
      <div className="hero__orb hero__orb--purple" aria-hidden="true" />

      <div className="hero__layout">
        {/* Left — Content */}
        <div className="hero__content">
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Sparkles size={12} />
            <span>Building Intelligent Systems</span>
          </motion.div>

          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            Hi, I'm
            <br />
            <span className="hero__name-highlight">{personalInfo.name}</span>
          </motion.h1>

          <motion.div
            className="hero__role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <TypeWriter />
          </motion.div>

          <motion.p
            className="hero__bio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            {personalInfo.shortBio}
          </motion.p>

          <motion.div
            className="hero__stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
          >
            <div className="hero__stat">
              <span className="hero__stat-value">9.27</span>
              <span className="hero__stat-label">CGPA</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-value">5+</span>
              <span className="hero__stat-label">Projects</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-value">2x</span>
              <span className="hero__stat-label">Hackathon Winner</span>
            </div>
          </motion.div>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
          >
            <button
              className="btn-primary"
              onClick={() => scrollTo('projects')}
              aria-label="View my projects"
            >
              View My Work
              <ChevronRight size={16} />
            </button>
            <button
              className="btn-secondary"
              onClick={() => scrollTo('contact')}
              aria-label="Contact me"
            >
              Get In Touch
            </button>
          </motion.div>

          <motion.div
            className="hero__socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub profile"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hero__social-link"
              aria-label="Send email"
            >
              <Mail size={20} />
            </a>
            <div className="hero__social-line" aria-hidden="true" />
          </motion.div>
        </div>

        {/* Right — 3D Scene */}
        <motion.div
          className="hero__scene"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <Suspense fallback={<div className="hero__scene-loader" />}>
            <HeroScene />
          </Suspense>
          <div className="hero__scene-glow" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        onClick={() => scrollTo('about')}
        aria-label="Scroll to about section"
      >
        <ArrowDown size={18} />
        <span>Scroll</span>
      </motion.button>
    </section>
  );
}
