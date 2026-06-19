import { useState } from 'react';
import { Element } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';
import { skills } from '../data/portfolioData';

const categoryColors = {
  Frontend: '#2FA4D7',
  Backend: '#F59E0B',
  Database: '#e85d2f',
  Design: '#DDAED3',
  Tools: '#03934b',
};

function SkillBar({ skill, color, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
      style={{ marginBottom: '1rem' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '1rem' }}><skill.icon size={14} /></span>
          <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{skill.name}</span>
        </div>
        <span style={{ fontSize: '0.82rem', color: color, fontWeight: 700 }}>{skill.level}%</span>
      </div>
      <div style={{
        height: '8px',
        background: '#a4c1e021',
        borderRadius: '4px',
        overflow: 'hidden',
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          style={{
            height: '100%',
            background: `linear-gradient(90deg, ${color}, ${color}aa)`,
            borderRadius: '4px',
            boxShadow: `0 0 8px ${color}60`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeCategory, setActiveCategory] = useState('Frontend');
  const categories = Object.keys(skills);

  return (
    <Element name="skills">
    <section
      id="skills"
      ref={ref}
      style={{
        padding: '3rem 0',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span style={{ fontSize: '0.85rem', fontWeight: 400, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '3px' }}>
            What I Know
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 800,
            fontFamily: 'Poppins',
            color: isDark ? 'var(--text-dark-100)' : 'var(--text-light-100)',
            marginTop: '0.5rem',
          }}>
            My <span style={{ color: 'var(--primary)' }}>Skills</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--primary)', borderRadius: '2px', margin: '1rem auto 0' }} />
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          style={{
            display: 'flex',
            gap: '0.75rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '3rem',
          }}
        >
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: activeCategory === cat
                  ? `linear-gradient(135deg, ${categoryColors[cat]}aa, ${categoryColors[cat]}ff)`
                  : isDark ? 'var(--card-bg--light)' : 'var(--card-bg--dark)',
                borderRadius: '12px',
                padding: '0.6rem 1.25rem',
                cursor: 'pointer',
                color: activeCategory === cat ? 'white' : isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)',
                fontSize: '0.875rem',
                fontWeight: 400,
                transition: 'all 0.2s ease',
              }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              style={{
                padding: '2rem',
                gridColumn: '1 / -1',
                borderRadius: '12px'
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem 3rem' }}>
                {skills[activeCategory].map((skill) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    color={categoryColors[activeCategory]}
                    inView={inView}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tech cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          style={{ textAlign: 'center' }}
        >
          <p style={{ fontSize: '0.85rem', color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)', marginBottom: '1.25rem' }}>
            All technologies I work with
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {Object.values(skills).flat().map(({ name, icon: Icon }) => (
              <motion.span
                key={name}
                whileHover={{ scale: 1.1, background: '' }}
                style={{
                  background: isDark ? 'var(--card-bg--dark)' : 'var(--card-bg--light)',
                  outline: '1px solid var(--primary-light)',
                  borderRadius: '50px',
                  padding: '0.35rem 0.9rem',
                  fontSize: '0.8rem',
                  color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)',
                  fontWeight: 500,
                  cursor: 'default',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  transition: 'all 0.2s ease',
                }}
              >
                <Icon size={14} />
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    </Element>
  );
}
