import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';
import { stats, timeline } from '../data/portfolioData';
import { useState, useEffect } from 'react';

function Counter({ end, suffix, inView }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const dur = 1500;
    const step = end / (dur / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);
  return <>{count}{suffix}</>;
}

export default function About() {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const handleDownloadCV = () => {
    try {
      const url = "/portfolio/files/Uttam_asfd.pdf";
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Uttam_asfd.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      console.log(window.URL.revokeObjectURL(url));
      console.info('CV downloaded successfully!');
    } catch (error) {
      console.error('Oops! Something went wrong. Please try again.');
    }
  };

  return (
    <Element name="about">
      <section id="about" style={{ padding: '3rem 0' }} ref={ref}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <span style={{
              fontSize: '0.85rem',
              fontWeight: 400,
              color: 'var(--primary)',
              textTransform: 'uppercase',
              letterSpacing: '3px',
            }}>Who I Am</span>

            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 800,
              fontFamily: 'Poppins',
              color: isDark ? 'var(--text-dark-100)' : 'var(--text-light-100)',
              marginTop: '0.5rem',
            }}>
              About <span style={{ color: 'var(--primary)' }}>Me</span>
            </h2>

            <div style={{ width: '60px', height: '4px', background: 'var(--primary)', borderRadius: '2px', margin: '1rem auto 0' }} />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '5rem' }} className="about-grid">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div style={{
                padding: '2.5rem 0',
              }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 500, fontFamily: 'Poppins', color: isDark ? 'var(--bg-light)' : 'var(--bg-dark)', marginBottom: '1rem' }}>
                  Hi, I'm <span style={{ color: 'var(--primary)' }}>Uttam</span>
                </h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.9, color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)', marginBottom: '1.25rem' }}>
                  a passionate Computer Science student with a strong interest in software development, web technologies, and problem-solving. I enjoy designing and building modern, scalable, and user-friendly applications while continuously exploring emerging technologies. </p>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.9, color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)', marginBottom: '1.25rem' }}>
                  My journey began with HTML and CSS and gradually expanded into various areas of computer science, including frontend and full-stack development, backend technologies, database management, and intelligent systems. I have hands-on experience working with technologies such as React.js, JavaScript, Node.js, MySQL, Python, AI and IoT-based applications. </p>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.9, color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)' }}>
                  I am enthusiastic about learning new technologies, solving real-world issues, tackle challenging problems and developing innovative solutions that create meaningful impact. </p>

                <motion.button
                  onClick={handleDownloadCV}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '2rem',
                    gap: '0.4rem',
                    background: isDark ? 'rgba(99,102,241,0.1)' : 'rgba(99, 177, 241, 0.06)',
                    border: '1px solid var(--primary)',
                    borderRadius: '8px',
                    padding: '0.4rem 0.9rem',
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    color: 'var(--primary)',
                    fontWeight: 500,
                  }}>
                  <span>Download CV</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right — Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.5rem' }}>
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    whileHover={{ y: -5 }}
                    style={{
                      padding: '1.75rem',
                      textAlign: 'center',
                      cursor: 'default',
                      transition: 'transform 0.2s ease',
                    }}
                  >
                    <div style={{
                      fontSize: '2rem',
                      fontWeight: 800,
                      fontFamily: 'Poppins',
                      color: 'var(--primary)',
                      lineHeight: 1,
                      marginBottom: '0.4rem',
                    }}>
                      <Counter end={stat.value} suffix={stat.suffix} inView={inView} />
                    </div>
                    <div style={{ fontSize: '0.8rem', color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)', fontWeight: 400 }}>{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: "1.75rem" }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'var(--primary)',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                    flexShrink: 0,
                  }}>🎓</div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: isDark ? 'var(--bg-lighter)' : 'var(--bg-dark)', marginBottom: '0.2rem' }}>
                      B.Tech in Computer Science
                    </h4>
                    <p style={{ fontSize: '0.82rem', color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)' }}>
                      Currently pursuing — Graduating 2026
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <h3 style={{
              fontSize: '1.6rem',
              fontWeight: 700,
              fontFamily: 'Poppins',
              textAlign: 'center',
              color: isDark ? 'var(--bg-lighter)' : 'var(--bg-dark)',
              marginBottom: '3rem',
            }}>My Journey</h3>

            <div style={{ position: 'relative', margin: '0 auto' }}>
              <div style={{
                position: 'absolute',
                left: '50%',
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'var(--primary)',
                transform: 'translateX(-50%)',
                opacity: 0.3,
              }} />

              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: i % 2 === 0 ? -40 : 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
                  style={{
                    display: 'flex',
                    justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start',
                    paddingRight: i % 2 === 0 ? 'calc(50% + 1.5rem)' : '0',
                    paddingLeft: i % 2 !== 0 ? 'calc(50% + 1.5rem)' : '0',
                    marginBottom: '2rem',
                    position: 'relative',
                  }}
                >
                  {/* Dot */}
                  <div style={{
                    position: 'absolute',
                    left: '50%',
                    top: '40%',
                    transform: 'translateX(-50%)',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'var(--primary)',
                    border: '3px solid',
                    borderColor: isDark ? 'var(--bg-dark)' : 'var(--bg-lighter)',
                    boxShadow: '0 0 10px var(--primary)',
                    zIndex: 1,
                  }} />

                  <div style={{ background: isDark ? 'var(--card-bg--dark)' : 'var(--card-bg--light)', padding: '1.25rem 1.5rem', borderRadius: '12px' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--orange)', fontWeight: 700, marginBottom: '0.3rem' }}>{item.year}</div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.4rem' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.82rem', color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)', lineHeight: 1.6 }}>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
      </section>
    </Element>
  );
}
