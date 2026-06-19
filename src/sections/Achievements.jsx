import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';
import { achievements } from '../data/portfolioData';

export default function Achievements() {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const card = {
    background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.8)',
    border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(99,102,241,0.12)',
    borderRadius: '20px',
    backdropFilter: 'blur(10px)',
  };

  return (
    <section id="achievements" ref={ref} style={{ padding: '6rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span style={{ fontSize: '0.85rem', fontWeight: 400, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '3px' }}>
            Recognition
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 800,
            fontFamily: 'Poppins',
            color: isDark ? 'var(--text-dark-100)' : 'var(--text-light-100)',
            marginTop: '0.5rem',
          }}>
            My <span style={{ color: 'var(--primary)' }}>Achievements</span>
          </h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary)', borderRadius: '2px', margin: '1rem auto 0' }} />
        </motion.div>

        {/* Stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              style={{ ...card, padding: '2rem', textAlign: 'center', cursor: 'default', transition: 'all 0.3s ease' }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{a.icon}</div>
              <div style={{
                fontSize: '2rem',
                fontWeight: 800,
                fontFamily: 'Poppins',
                color: a.color,
                marginBottom: '0.25rem',
              }}>{a.value}</div>
              <div style={{ fontSize: '0.85rem', color: isDark ? 'var(--text-dark-300)' : 'var(-text-light-300)', fontWeight: 500 }}>{a.title}</div>
            </motion.div>
          ))}
        </div>

        {/* GitHub activity placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          style={{ ...card, padding: '2.5rem' }}
        >
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, fontFamily: 'Poppins', color: isDark ? '#F1F5F9' : '#0F172A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            🐙 GitHub Contribution Activity
          </h3>
          {/* Simulated contribution graph */}
          <div style={{ display: 'flex', gap: '3px', flexWrap: 'wrap' }}>
            {Array.from({ length: 364 }, (_, i) => {
              const levels = [0, 0, 0, 1, 1, 1, 2, 2, 3, 4];
              const level = levels[Math.floor(Math.random() * levels.length)];
              const colors = {
                0: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(99,102,241,0.05)',
                1: 'var(--primary)',
                2: 'var(--primary)',
                3: 'var(--primary)',
                4: 'var(--primary)',
              };
              return (
                <div
                  key={i}
                  title={`${level > 0 ? level * 2 : 0} contributions`}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '3px',
                    background: colors[level],
                    transition: 'background 0.2s',
                    cursor: 'default',
                  }}
                />
              );
            })}
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '1rem', justifyContent: 'flex-end' }}>
            <span style={{ fontSize: '0.75rem', color: isDark ? '#475569' : '#94A3B8' }}>Less</span>
            {[0, 1, 2, 3, 4].map(level => (
              <div key={level} style={{
                width: '12px',
                height: '12px',
                borderRadius: '3px',
                background: level === 0
                  ? isDark ? 'rgba(255,255,255,0.05)' : 'rgba(99,102,241,0.05)'
                  : `rgba(99,102,241,${0.25 * level})`,
              }} />
            ))}
            <span style={{ fontSize: '0.75rem', color: isDark ? '#475569' : '#94A3B8' }}>More</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
