import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import { FiClock, FiArrowRight } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { blogPosts } from '../data/portfolioData';

export default function Blog({ onOpenPost }) {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const card = {
    background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.8)',
    border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(99,102,241,0.12)',
    borderRadius: '20px',
    backdropFilter: 'blur(10px)',
    overflow: 'hidden',
  };

  return (
    <Element name="blog">
      <section id="blog" ref={ref} style={{
        padding: '3rem 0',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{ textAlign: 'center', marginBottom: '3.5rem' }}
          >
            <span style={{ fontSize: '0.85rem', fontWeight: 400, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '3px' }}>
              Thoughts & Ideas
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 800,
              fontFamily: 'Poppins',
              color: isDark ? 'var(--text-dark-100)' : 'var(--text-light-100)',
              marginTop: '0.5rem',
            }}>
              Latest <span style={{ color: 'var(--primary)' }}>Articles</span>
            </h2>
            <div style={{ width: '60px', height: '4px', background: ' var(--primary)', borderRadius: '2px', margin: '1rem auto 0' }} />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                onClick={() => onOpenPost(post.id)}
                style={{ ...card, cursor: 'pointer', transition: 'all 0.3s ease' }}
              >
                {/* Top bar */}
                <div style={{
                  height: '5px',
                  background: `linear-gradient(90deg, ${post.color}, ${post.color}aa)`,
                }} />

                <div style={{ padding: '1.75rem' }}>
                  {/* Category + date */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{
                      background: `${post.color}20`,
                      color: post.color,
                      borderRadius: '8px',
                      padding: '0.25rem 0.65rem',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                    }}>{post.category}</span>
                    <span style={{ fontSize: '0.78rem', color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)' }}>{post.date}</span>
                  </div>

                  <h3 style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    fontFamily: 'Poppins',
                    color: isDark ? 'var(--text-dark-100)' : 'var(--text-light-100)',
                    marginBottom: '0.75rem',
                    lineHeight: 1.4,
                  }}>{post.title}</h3>

                  <p style={{
                    fontSize: '0.875rem',
                    color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)',
                    lineHeight: 1.7,
                    marginBottom: '1.25rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>{post.excerpt}</p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)', fontSize: '0.8rem' }}>
                      <FiClock size={13} /> {post.readTime}
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      color: post.color,
                      fontSize: '0.82rem',
                      fontWeight: 700,
                    }}>
                      Read more <FiArrowRight size={13} />
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                    {post.tags.map(t => (
                      <span key={t} style={{
                        background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(99,102,241,0.04)',
                        border: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(99,102,241,0.1)',
                        borderRadius: '6px',
                        padding: '0.2rem 0.5rem',
                        fontSize: '0.7rem',
                        color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)',
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
}
