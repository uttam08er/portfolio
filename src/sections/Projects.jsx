import { useState } from 'react';
import { Element } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { projects } from '../data/portfolioData';


function ProjectModal({ project, onClose, isDark }) {
  if (!project) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(254, 254, 254, 0.05)',
        backdropFilter: 'blur(10px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={e => e.stopPropagation()}
        style={{
          background: isDark ? 'var(--bg-dark)' : 'var(--bg-light)',
          border: `1px solid ${project.color}30`,
          borderRadius: '24px',
          padding: '2.5rem',
          maxWidth: '700px',
          width: '100%',
          maxHeight: '85vh',
          overflowY: 'auto',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '3.4rem',
            right: '3.5rem',
            border: `1px solid ${project.color}80`,
            borderRadius: '10px',
            padding: '0.5rem',
            cursor: 'pointer',
            color: isDark ? 'var(--text-dark-100)' : 'var(--text-light-100)',
            display: 'flex',
          }}
        ><FiX size={18} /></button>

        {/* Header */}
        <div style={{
          width: '100%',
          height: '180px',
          background: `radial-gradient(circle, ${project.color}40, ${project.color}80)`,
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '4rem',
          marginBottom: '1.75rem',
        }}>{project.icon}</div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
          {project.tags.map(t => (
            <span key={t} style={{
              background: `${project.color}20`,
              color: project.color,
              borderRadius: '8px',
              padding: '0.25rem 0.6rem',
              fontSize: '0.75rem',
              fontWeight: 600,
            }}>{t}</span>
          ))}
        </div>

        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, fontFamily: 'Poppins', color: isDark ? 'var(--text-dark-100)' : 'var(--text-light-100)', marginBottom: '1rem' }}>
          {project.title}
        </h2>
        <p style={{ color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)', lineHeight: 1.8, marginBottom: '1.5rem' }}>{project.longDescription}</p>

        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: isDark ? 'var(--text-dark-100)' : 'var(--text-light-100)', marginBottom: '0.75rem' }}>Key Features:</h3>
        <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.75rem', listStyleType: 'disc' }}>
          {project.features.map(f => (
            <li key={f} style={{ color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)', marginBottom: '0.5rem', lineHeight: 1.7 }}>{f}</li>
          ))}
        </ul>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(99,102,241,0.06)',
              border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(99,102,241,0.15)',
              borderRadius: '10px',
              padding: '0.7rem 1.25rem',
              color: isDark ? 'var(--text-dark-100)' : 'var(--text-light-100)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 600,
            }}
          >
            <FiGithub /> GitHub
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: project.color,
              border: 'none',
              borderRadius: '10px',
              padding: '0.7rem 1.25rem',
              color: 'white',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <FiExternalLink /> Live Demo
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [selectedProject, setSelectedProject] = useState(null);

  const card = {
    background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.8)',
    border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(99,102,241,0.12)',
    borderRadius: '20px',
    backdropFilter: 'blur(10px)',
    overflow: 'hidden',
    cursor: 'pointer',
  };

  return (
    <Element name="projects">
    <section id="projects" ref={ref} style={{ padding: '3rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span style={{ fontSize: '0.85rem', fontWeight: 400, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '3px' }}>
            My Work
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 800,
            fontFamily: 'Poppins',
            color: isDark ? 'var(--text-dark-100)' : 'var(--text-light-100)',
            marginTop: '0.5rem',
          }}>
            Featured <span style={{ color: 'var(--primary)' }}>Projects</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--primary)', borderRadius: '2px', margin: '1rem auto 0' }} />
        </motion.div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <AnimatePresence>
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedProject(project)}
                style={card}
              >

                <div style={{
                  height: '200px',
                  background: `radial-gradient(circle, ${project.color}40, ${project.color}80)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {project.icon}
                  {/* {project.featured && (
                    <div style={{
                      position: 'absolute',
                      top: '0.75rem',
                      right: '0.75rem',
                      background: 'linear-gradient(135deg, #F59E0B, #EF4444)',
                      borderRadius: '8px',
                      padding: '0.25rem 0.65rem',
                      fontSize: '0.7rem',
                      color: 'white',
                      fontWeight: 400,
                    }}>Featured ⭐</div>
                  )} */}
                </div>

                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                    {project.tags.slice(0, 4).map(t => (
                      <span key={t} style={{
                        background: `${project.color}18`,
                        color: project.color,
                        borderRadius: '6px',
                        padding: '0.3rem 0.6rem',
                        fontSize: '0.7rem',
                        fontWeight: 500,
                      }}>{t}</span>
                    ))}

                    {project.tags.length > 4 && (
                      <span style={{
                        background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(99,102,241,0.06)',
                        color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)',
                        borderRadius: '6px',
                        padding: '0.2rem 0.55rem',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                      }}>+{project.tags.length - 4}</span>
                    )}
                  </div>

                  <h3 style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    fontFamily: 'Poppins',
                    color: isDark ? 'var(--text-dark-100)' : 'var(--text-light-100)',
                    marginBottom: '0.6rem',
                    lineHeight: 1.4,
                  }}>{project.title}</h3>

                  <p style={{
                    fontSize: '0.85rem',
                    color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)',
                    lineHeight: 1.7,
                    marginBottom: '1.25rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>{project.description}</p>

                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button
                      style={{
                        borderRadius: '8px',
                        padding: '0.3rem 0.75rem',
                        cursor: 'pointer',
                        color: project.color,
                        fontSize: '0.78rem',
                        fontWeight: 600,
                      }}
                    >Details →</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {projects.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem', color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
            <p>No projects found. Try a different search or filter.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            isDark={isDark}
          />
        )}
      </AnimatePresence>
    </section>
    </Element>
  );
}
