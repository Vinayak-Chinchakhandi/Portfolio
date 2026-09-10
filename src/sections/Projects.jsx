import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ExternalLink, X, ArrowRight, Tag, ChevronRight,
  Zap, Trophy, Database, Globe
} from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';
import { projects } from '../data/portfolio';
import './Projects.css';

const emojiIcons = {
  '📄': 'researchgpt',
  '🚇': 'metro',
  '🎵': 'moodify',
  '🗺️': 'dataset',
  '🧠': 'quiz',
};

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="project-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} project details`}
        >
          <motion.div
            className="project-modal"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="project-modal__close"
              onClick={onClose}
              aria-label="Close project details"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="project-modal__header">
              <div className="project-modal__emoji">{project.emoji}</div>
              <div>
                <h3 className="project-modal__title">{project.name}</h3>
                <p className="project-modal__subtitle">{project.subtitle}</p>
                {project.achievement && (
                  <div className="project-modal__achievement">
                    <Trophy size={14} />
                    {project.achievement}
                  </div>
                )}
              </div>
              <span className="tag project-modal__period">{project.period}</span>
            </div>

            {/* Body */}
            <div className="project-modal__body">
              <div className="project-modal__flow">
                <div className="project-modal__step">
                  <div className="project-modal__step-label">
                    <Zap size={14} />
                    Problem
                  </div>
                  <p>{project.problem}</p>
                </div>
                <ChevronRight size={18} className="project-modal__arrow" />
                <div className="project-modal__step">
                  <div className="project-modal__step-label">
                    <Database size={14} />
                    Approach
                  </div>
                  <p>{project.approach}</p>
                </div>
                <ChevronRight size={18} className="project-modal__arrow" />
                <div className="project-modal__step">
                  <div className="project-modal__step-label">
                    <Globe size={14} />
                    Outcome
                  </div>
                  <p>{project.result}</p>
                </div>
              </div>

              {/* Highlights */}
              <div className="project-modal__highlights">
                <h4>Key Features</h4>
                <ul>
                  {project.highlights.map((h, i) => (
                    <li key={i}>
                      <span className="project-modal__highlight-dot" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div className="project-modal__tech">
                <h4>
                  <Tag size={14} />
                  Technologies
                </h4>
                <div className="project-modal__tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="project-modal__links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <GithubIcon size={16} />
                  View on GitHub
                </a>
                {project.kaggle && (
                  <a
                    href={project.kaggle}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    aria-label={`View ${project.name} on Kaggle`}
                  >
                    <ExternalLink size={16} />
                    View on Kaggle
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    aria-label={`Live demo of ${project.name}`}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProjectCard({ project, index, onClick }) {
  return (
    <motion.article
      className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      onClick={() => onClick(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick(project)}
      aria-label={`View ${project.name} project details`}
    >
      {/* Hover glow */}
      <div className="project-card__glow" aria-hidden="true" />

      {/* Top row */}
      <div className="project-card__top">
        <div className="project-card__emoji">{project.emoji}</div>
        <div className="project-card__links-preview">
          <div className="project-card__link-icon" aria-hidden="true">
            <GithubIcon size={16} />
          </div>
          {project.featured && (
            <span className="project-card__featured-badge">Featured</span>
          )}
        </div>
      </div>

      {/* Achievement badge */}
      {project.achievement && (
        <div className="project-card__achievement">
          <Trophy size={11} />
          <span>{project.achievement}</span>
        </div>
      )}

      {/* Content */}
      <h3 className="project-card__name">{project.name}</h3>
      <p className="project-card__subtitle">{project.subtitle}</p>
      <p className="project-card__desc">{project.description}</p>

      {/* Tech tags */}
      <div className="project-card__tags">
        {project.technologies.slice(0, 4).map((tech) => (
          <span key={tech} className="tag">{tech}</span>
        ))}
        {project.technologies.length > 4 && (
          <span className="tag tag--more">+{project.technologies.length - 4}</span>
        )}
      </div>

      {/* Footer */}
      <div className="project-card__footer">
        <span className="project-card__period">{project.period}</span>
        <div className="project-card__action">
          View Details <ArrowRight size={14} />
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="section projects" aria-label="Projects section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">What I've Built</span>
          <h2 className="section-title">Projects & Systems</h2>
          <p className="projects__subtitle">
            Production-ready systems — from multi-document AI platforms to open-source datasets.
            Click any card to explore the full story.
          </p>
        </motion.div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={setSelected}
            />
          ))}
        </div>

        {/* Currently Building */}
        <motion.div
          className="projects__wip"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="projects__wip-status">
            <span className="projects__wip-dot" />
            Currently Building
          </div>
          <h3 className="projects__wip-title">🚀 ElevAIte</h3>
          <p className="projects__wip-desc">AI-Powered Placement Preparation Platform</p>
          <div className="projects__wip-features">
            {['Resume Analysis', 'Placement Readiness Prediction', 'AI Interview Preparation', 'Skill Gap Analysis'].map((f) => (
              <span key={f} className="tag tag--purple">{f}</span>
            ))}
          </div>
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
