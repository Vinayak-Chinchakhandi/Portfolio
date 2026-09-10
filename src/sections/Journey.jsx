import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Trophy, Award, Rocket, BookOpen, ExternalLink } from 'lucide-react';
import { achievements, certifications } from '../data/portfolio';
import './Journey.css';

const timelineItems = [
  {
    id: 1,
    type: 'education',
    icon: GraduationCap,
    color: '#00f5ff',
    title: 'B.E. Information Science & Engineering',
    org: 'KLS Gogte Institute of Technology, Belagavi',
    period: '2023 – 2027',
    score: 'CGPA: 9.27 / 10',
    details: ['Full-stack development', 'AI/ML systems', 'Data structures & algorithms', 'Computer networks & OS'],
    status: 'ongoing',
  },
  {
    id: 2,
    type: 'achievement',
    icon: Trophy,
    color: '#f59e0b',
    title: '1st Place — Spot Ideathon',
    org: 'MIT Manipal',
    period: '2025–2026',
    details: ['National-level ideathon competition', 'First place recognition'],
    status: 'done',
  },
  {
    id: 3,
    type: 'achievement',
    icon: Trophy,
    color: '#a855f7',
    title: '2nd Place — AI Metro Ticketing Challenge',
    org: 'i-ACT 2026, MIT Manipal',
    period: 'Apr 2026',
    details: ['AI-based metro ticketing platform', 'ML demand forecasting & fraud detection', 'FastAPI ML microservices'],
    status: 'done',
  },
  {
    id: 4,
    type: 'project',
    icon: Rocket,
    color: '#10b981',
    title: 'Bengaluru Metro Dataset Published',
    org: 'Kaggle — Open Source',
    period: 'Mar 2026',
    details: ['9.41/10 usability score', '267+ views, 25+ downloads', 'CC0 open-source license'],
    status: 'done',
    link: 'https://www.kaggle.com/datasets/vinayakchinchakhandi/bengaluru-metro-network-dataset',
  },
  {
    id: 5,
    type: 'cert',
    icon: Award,
    color: '#06b6d4',
    title: 'ISOC Certification',
    org: 'Fundamentals of Designing & Deploying Computer Networks',
    period: '2024–2025',
    details: ['Internet Society certified', 'Computer networking fundamentals'],
    status: 'done',
  },
  {
    id: 6,
    type: 'cert',
    icon: BookOpen,
    color: '#0A66C2',
    title: 'Meta Certification',
    org: 'Introduction to Frontend Development',
    period: '2024–2025',
    details: ['Meta Professional Certificate', 'Frontend development foundations'],
    status: 'done',
  },
  {
    id: 7,
    type: 'current',
    icon: Rocket,
    color: '#ec4899',
    title: 'Building ElevAIte',
    org: 'AI-Powered Placement Preparation Platform',
    period: 'Present',
    details: ['Resume analysis', 'AI interview prep', 'Skill gap analysis', 'Placement readiness prediction'],
    status: 'ongoing',
  },
];

export default function Journey() {
  return (
    <section id="journey" className="section journey" aria-label="Journey and timeline section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Timeline</span>
          <h2 className="section-title">Education & Milestones</h2>
          <p className="journey__subtitle">
            Key moments that shaped my technical journey — from academics to hackathon wins.
          </p>
        </motion.div>

        <div className="journey__timeline">
          {/* Vertical line */}
          <div className="journey__line" aria-hidden="true" />

          {timelineItems.map((item, i) => (
            <motion.div
              key={item.id}
              className={`journey__item ${i % 2 === 0 ? 'journey__item--left' : 'journey__item--right'}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Node */}
              <div
                className="journey__node"
                style={{
                  background: item.color,
                  boxShadow: `0 0 20px ${item.color}60`,
                }}
                aria-hidden="true"
              >
                <item.icon size={16} color="#fff" />
              </div>

              {/* Card */}
              <div
                className={`journey__card ${item.status === 'ongoing' ? 'journey__card--ongoing' : ''}`}
                style={{ '--item-color': item.color }}
              >
                <div className="journey__card-top">
                  <span
                    className="journey__card-period"
                    style={{ color: item.color }}
                  >
                    {item.period}
                  </span>
                  {item.status === 'ongoing' && (
                    <span className="journey__card-badge">
                      <span className="journey__card-badge-dot" style={{ background: item.color }} />
                      Active
                    </span>
                  )}
                </div>
                <h3 className="journey__card-title">{item.title}</h3>
                <p className="journey__card-org">{item.org}</p>
                {item.score && (
                  <div className="journey__card-score">{item.score}</div>
                )}
                <ul className="journey__card-details">
                  {item.details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="journey__card-link"
                    aria-label={`View ${item.title} externally`}
                  >
                    <ExternalLink size={12} />
                    View on Kaggle
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
