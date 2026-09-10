import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Cpu, Rocket, Database, Brain, Target } from 'lucide-react';
import { personalInfo, education, certifications } from '../data/portfolio';
import './About.css';

function AnimatedSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const interests = [
  { icon: Brain, label: 'AI / ML Systems', desc: 'RAG, LangChain, Semantic Search', color: '#a855f7' },
  { icon: Cpu, label: 'Full Stack Engineering', desc: 'React, Node.js, FastAPI', color: '#00f5ff' },
  { icon: Database, label: 'Data Engineering', desc: 'PostgreSQL, FAISS, Vector DBs', color: '#10b981' },
  { icon: Rocket, label: 'Open Source', desc: 'Kaggle datasets, public platforms', color: '#f59e0b' },
  { icon: Target, label: 'Competitive Building', desc: 'Hackathons, real-world systems', color: '#ec4899' },
  { icon: GraduationCap, label: 'Continuous Learning', desc: 'Algorithms, OS, Networks', color: '#3b82f6' },
];

export default function About() {
  return (
    <section id="about" className="section about" aria-label="About section">
      <div className="container">
        <AnimatedSection>
          <span className="section-label" aria-hidden="true">Who I Am</span>
          <h2 className="section-title">The Engineer Behind the Code</h2>
        </AnimatedSection>

        <div className="about__grid">
          {/* Left — Narrative */}
          <AnimatedSection delay={0.1}>
            <div className="about__narrative">
              <div className="about__terminal">
                <div className="about__terminal-header">
                  <span className="about__terminal-dot" style={{ background: '#ff5f57' }} />
                  <span className="about__terminal-dot" style={{ background: '#febc2e' }} />
                  <span className="about__terminal-dot" style={{ background: '#28c840' }} />
                  <span className="about__terminal-title">profile.yaml</span>
                </div>
                <div className="about__terminal-body">
                  <div className="about__terminal-line">
                    <span className="about__terminal-key">name</span>
                    <span className="about__terminal-colon">:</span>
                    <span className="about__terminal-val-str">"{personalInfo.fullName}"</span>
                  </div>
                  <div className="about__terminal-line">
                    <span className="about__terminal-key">role</span>
                    <span className="about__terminal-colon">:</span>
                    <span className="about__terminal-val-str">"Full Stack Developer + AI Engineer"</span>
                  </div>
                  <div className="about__terminal-line">
                    <span className="about__terminal-key">education</span>
                    <span className="about__terminal-colon">:</span>
                    <span className="about__terminal-val-str">"B.E. Information Science @ KLS GIT"</span>
                  </div>
                  <div className="about__terminal-line">
                    <span className="about__terminal-key">cgpa</span>
                    <span className="about__terminal-colon">:</span>
                    <span className="about__terminal-val-num">9.27</span>
                  </div>
                  <div className="about__terminal-line">
                    <span className="about__terminal-key">focus</span>
                    <span className="about__terminal-colon">:</span>
                    <span className="about__terminal-val-str">"Intelligent systems that solve real problems"</span>
                  </div>
                  <div className="about__terminal-line">
                    <span className="about__terminal-key">currently_building</span>
                    <span className="about__terminal-colon">:</span>
                    <span className="about__terminal-val-str">"ElevAIte — AI Placement Platform"</span>
                  </div>
                  <div className="about__terminal-line">
                    <span className="about__terminal-key">location</span>
                    <span className="about__terminal-colon">:</span>
                    <span className="about__terminal-val-str">"Belagavi, India"</span>
                  </div>
                  <div className="about__terminal-line">
                    <span className="about__terminal-key">certify</span>
                    <span className="about__terminal-colon">:</span>
                    <span className="about__terminal-val-str">"ISOC DDCN | Meta Frontend"</span>
                  </div>
                </div>
              </div>

              <p className="about__bio-text">
                I'm a final-year Information Science student who treats every project like a product — 
                from architecture to deployment. I specialize in building AI-powered full-stack applications 
                that tackle real-world problems, combining intelligent backends with clean user experiences.
              </p>
              <p className="about__bio-text">
                Whether it's a multi-document RAG research platform, an AI metro ticketing system, 
                or an open-source geospatial dataset — I engineer for quality, not just functionality.
              </p>

              {/* Education Cards */}
              <div className="about__education">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.id}
                    className="about__edu-card"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    <div className="about__edu-icon">
                      <GraduationCap size={16} />
                    </div>
                    <div className="about__edu-info">
                      <span className="about__edu-degree">{edu.degree}</span>
                      <span className="about__edu-institution">{edu.institution}, {edu.location}</span>
                      <div className="about__edu-meta">
                        <span className="about__edu-period">{edu.period}</span>
                        <span className="about__edu-score">{edu.score}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Interests Grid */}
          <AnimatedSection delay={0.2}>
            <div className="about__right">
              <h3 className="about__interests-title">Core Focus Areas</h3>
              <div className="about__interests-grid">
                {interests.map((item, i) => (
                  <motion.div
                    key={i}
                    className="about__interest-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 + 0.1 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    style={{ '--card-color': item.color }}
                  >
                    <div className="about__interest-icon" style={{ color: item.color, background: `${item.color}15` }}>
                      <item.icon size={20} />
                    </div>
                    <span className="about__interest-label">{item.label}</span>
                    <span className="about__interest-desc">{item.desc}</span>
                  </motion.div>
                ))}
              </div>

              {/* Certs */}
              <div className="about__certs">
                <h4 className="about__certs-title">Certifications</h4>
                {certifications.map((cert) => (
                  <div key={cert.id} className="about__cert-item" style={{ '--cert-color': cert.color }}>
                    <div className="about__cert-dot" style={{ background: cert.color }} />
                    <div>
                      <div className="about__cert-name">{cert.name}</div>
                      <div className="about__cert-issuer">{cert.issuer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
