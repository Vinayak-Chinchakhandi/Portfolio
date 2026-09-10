import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, Database, Code2 } from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';
import { personalInfo, projects } from '../data/portfolio';
import './GitHubSection.css';

const featuredRepos = projects
  .filter(p => p.github)
  .map(p => ({
    name: p.name,
    description: p.description,
    url: p.github,
    tags: p.technologies.slice(0, 3),
    period: p.period,
    emoji: p.emoji,
  }));

const langColors = {
  JavaScript: '#F7DF1E',
  Python: '#3776AB',
  React: '#61DAFB',
  TypeScript: '#3178C6',
};

export default function GitHubSection() {
  return (
    <section id="github" className="section github-section" aria-label="GitHub section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Open Source</span>
          <h2 className="section-title">GitHub Activity</h2>
          <p className="github-section__subtitle">
            My public repositories — real-world projects, open-source datasets, and platforms.
          </p>
        </motion.div>

        {/* Profile card */}
        <motion.div
          className="github-profile"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="github-profile__left">
            <div className="github-profile__avatar">
              <GithubIcon size={40} />
            </div>
            <div>
              <h3 className="github-profile__name">Vinayak-Chinchakhandi</h3>
              <p className="github-profile__bio">
                Full Stack Developer & AI Engineer building intelligent systems.
                Published open-source datasets and production-ready platforms.
              </p>
              <div className="github-profile__tags">
                <span className="tag">Full Stack</span>
                <span className="tag">AI / ML</span>
                <span className="tag">Open Source</span>
                <span className="tag">RAG Systems</span>
              </div>
            </div>
          </div>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary github-profile__cta"
            aria-label="Explore Vinayak's GitHub profile"
          >
            <GithubIcon size={16} />
            Explore My GitHub
            <ExternalLink size={14} />
          </a>
        </motion.div>

        {/* Repos */}
        <div className="github-repos">
          <div className="github-repos__header">
            <span className="github-repos__title">
              <Code2 size={16} />
              Featured Repositories
            </span>
          </div>
          <div className="github-repos__grid">
            {featuredRepos.map((repo, i) => (
              <motion.a
                key={i}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="github-repo-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                aria-label={`GitHub repository: ${repo.name}`}
              >
                <div className="github-repo-card__top">
                  <span className="github-repo-card__emoji">{repo.emoji}</span>
                  <GithubIcon size={16} className="github-repo-card__icon" />
                </div>
                <h4 className="github-repo-card__name">{repo.name}</h4>
                <p className="github-repo-card__desc">{repo.description.slice(0, 100)}...</p>
                <div className="github-repo-card__tags">
                  {repo.tags.map(t => (
                    <span key={t} className="github-repo-card__tag">{t}</span>
                  ))}
                </div>
                <div className="github-repo-card__footer">
                  <span className="github-repo-card__period">{repo.period}</span>
                  <ExternalLink size={12} className="github-repo-card__external" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Kaggle call-out */}
        <motion.div
          className="github-kaggle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Database size={20} />
          <div>
            <span className="github-kaggle__label">Also on Kaggle</span>
            <p>Published Bengaluru Metro Network Dataset — 9.41/10 usability score, 300+ views, 40+ downloads</p>
          </div>
          <a
            href={personalInfo.kaggle}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary github-kaggle__btn"
            aria-label="View Kaggle profile"
          >
            View Kaggle
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
