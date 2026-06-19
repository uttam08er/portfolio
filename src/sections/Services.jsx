import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';
import { services } from '../data/portfolioData';

export default function Services() {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <Element name="services">
    <section id="services" ref={ref} style={{
      padding: '3rem 0',
      }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span style={{
            fontSize: '0.85rem', fontWeight: 400, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '3px'
          }}>What I Offer</span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 800,
            fontFamily: 'Poppins',
            color: isDark ? 'var(--text-dark-100)' : 'var(--text-light-100)',
            marginTop: '0.5rem',
          }}>
            My <span style={{ color: 'var(--primary)' }}>Services</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--primary)', borderRadius: '2px', margin: '1rem auto 0' }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: `0 20px 60px ${svc.color}20` }}
              style={{
                background: isDark ? 'var(--card-bg--dark)' : 'var(--card-bg--light)',
                borderRadius: '20px',
                padding: '2rem',
                cursor: 'default',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '100px',
                height: '100px',
                background: `radial-gradient(circle, ${svc.color}30, transparent)`,
                borderRadius: '50%',
              }} />

              <div style={{
                width: '50px',
                height: '50px',
                background: `linear-gradient(135deg, ${svc.color}30, ${svc.color}15)`,
                border: `1px solid ${svc.color}40`,
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                marginBottom: '1.25rem',
              }}>
                <svc.icon size={24} style={{ color: `${svc.color}` }} />
              </div>

              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                fontFamily: 'Poppins',
                color: isDark ? 'var(--text-dark-100)' : 'var(--text-light-100)',
                marginBottom: '0.75rem',
              }}>{svc.title}</h3>

              <p style={{
                fontSize: '0.875rem',
                color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)',
                lineHeight: 1.7,
              }}>{svc.description}</p>

              <div style={{
                marginTop: '1rem',
                height: '4px', 
                background: svc.color, 
                borderRadius: '2px', 
                margin: '1rem auto 0' 
              }}>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </Element>
  );
}
