import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2, Layout, Server, Brain, Database, Wrench, Cpu
} from 'lucide-react';
import { skills } from '../data/portfolio';
import './Skills.css';

const iconMap = { Code2, Layout, Server, Brain, Database, Wrench, Cpu };

const categoryOrder = ['programming', 'frontend', 'backend', 'aiml', 'databases', 'tools', 'corecs'];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('programming');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const activeSkills = skills[activeCategory];

  return (
    <section id="skills" className="section skills" aria-label="Skills section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Technical Stack</span>
          <h2 className="section-title">Engineering Toolkit</h2>
          <p className="skills__subtitle">
            Technologies I've used to build production-ready AI and full-stack systems.
          </p>
        </motion.div>

        <div className="skills__layout">
          {/* Category tabs */}
          <motion.div
            className="skills__tabs"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            role="tablist"
            aria-label="Skill categories"
          >
            {categoryOrder.map((key) => {
              const cat = skills[key];
              const Icon = iconMap[cat.icon] || Code2;
              return (
                <motion.button
                  key={key}
                  className={`skills__tab ${activeCategory === key ? 'skills__tab--active' : ''}`}
                  onClick={() => setActiveCategory(key)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.97 }}
                  role="tab"
                  aria-selected={activeCategory === key}
                  aria-controls={`skills-panel-${key}`}
                  id={`skills-tab-${key}`}
                  style={{ '--cat-color': cat.color }}
                >
                  <div
                    className="skills__tab-icon"
                    style={{
                      color: activeCategory === key ? cat.color : 'var(--text-muted)',
                      background: activeCategory === key ? `${cat.color}18` : 'transparent',
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <span>{cat.label}</span>
                  {activeCategory === key && (
                    <motion.div
                      className="skills__tab-indicator"
                      layoutId="tab-indicator"
                      style={{ background: cat.color }}
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Skills panel */}
          <motion.div
            className="skills__panel"
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            role="tabpanel"
            id={`skills-panel-${activeCategory}`}
            aria-labelledby={`skills-tab-${activeCategory}`}
          >
            <div className="skills__panel-header">
              <div
                className="skills__panel-dot"
                style={{ background: activeSkills.color }}
              />
              <h3 className="skills__panel-title" style={{ color: activeSkills.color }}>
                {activeSkills.label}
              </h3>
              <span className="skills__panel-count">
                {activeSkills.items.length} technologies
              </span>
            </div>

            <div className="skills__items">
              {activeSkills.items.map((item, i) => (
                <motion.div
                  key={item}
                  className="skills__item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  style={{ '--item-color': activeSkills.color }}
                >
                  <div
                    className="skills__item-glow"
                    style={{ background: `${activeSkills.color}12` }}
                  />
                  <span className="skills__item-name">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* All skills overview strip */}
        <motion.div
          className="skills__overview"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="skills__overview-title">Quick Glance</div>
          <div className="skills__overview-strip">
            {categoryOrder.flatMap(k =>
              skills[k].items.map((item, i) => (
                <span
                  key={`${k}-${i}`}
                  className="skills__overview-tag"
                  style={{
                    background: `${skills[k].color}10`,
                    borderColor: `${skills[k].color}25`,
                    color: skills[k].color,
                  }}
                >
                  {item}
                </span>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
