import { useState, useRef } from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiSend, FiMail, FiGithub, FiLinkedin, FiMapPin, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const formRef = useRef(null);

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    // EmailJS integration — replace with your actual IDs
    try {
      await new Promise(r => setTimeout(r, 1500));
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const card = {
    border: '1px solid var(--primary-light)',
    borderRadius: '20px',
    backdropFilter: 'blur(10px)',
  };

  const inputStyle = {
    width: '100%',
    border: '1px solid var(--primary-light)',
    borderRadius: '12px',
    padding: '0.85rem 1rem',
    color: isDark ? 'var(--text-dark-100)' : 'var(--text-light-100)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    fontFamily: 'Inter',
    boxSizing: 'border-box',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.82rem',
    fontWeight: 600,
    color: isDark ? 'var(--text-dark-100)' : 'var(--text-light-100)',
    marginBottom: '0.5rem',
  };

  const contactItems = [
    { icon: FiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: '#f09f48' },
    { icon: FiLinkedin, label: 'LinkedIn', value: personalInfo.linkedin, href: personalInfo.linkedin, color: '#0e86e9' },
    { icon: FiGithub, label: 'GitHub', value: personalInfo.github, href: personalInfo.github, color: '#7e4cf1' },
    { icon: FiMapPin, label: 'Location', value: personalInfo.location, href: null, color: '#10b970ff' },
  ];

  return (
    <Element name="contact">
    <section id="contact" ref={ref} style={{ padding: '3rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span style={{ fontSize: '0.85rem', fontWeight: 400, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '3px' }}>
            Let's Connect
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 800,
            fontFamily: 'Poppins',
            color: isDark ? 'var(--text-dark-100)' : 'var(--text-light-100)',
            marginTop: '0.5rem',
          }}>
            Get In <span style={{ color: 'var(--primary)' }}>Touch</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, var(--primary), var(--primary-dark))', borderRadius: '2px', margin: '1rem auto 0' }} />
          <p style={{ fontSize: '1rem', color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)', marginTop: '1rem', maxWidth: '500px', margin: '1rem auto 0' }}>
            Have a project in mind or want to hire me? I'd love to hear from you!
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '2.5rem', alignItems: 'start' }} className="contact-grid">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div style={{ ...card, padding: '2rem', marginBottom: '3rem' }}>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, fontFamily: 'Poppins', color: isDark ? 'var(--text-dark-100)' : 'var(--text-light-100)', marginBottom: '0.5rem' }}>
                Let's work together!
              </h3>
              <p style={{ fontSize: '0.875rem', color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)', lineHeight: 1.7 }}>
                I'm currently open to freelance projects and full-time opportunities. Let's build something amazing!
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {contactItems.map(item => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 4 }}
                  style={{ ...card, padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: `${item.color}20`,
                    border: `1px solid ${item.color}30`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: item.color,
                    flexShrink: 0,
                  }}>
                    <item.icon size={17} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: isDark ? 'var(--text-dark-100)' : 'var(--text-light-100)', fontWeight: 600 }}>{item.label}</div>
                    {item.href
                      ? <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.875rem', color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)', fontWeight: 400, textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.target.style.color = item.color}
                        onMouseLeave={e => e.target.style.color = isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)'}
                      >{item.value}</a>
                      : <span style={{ fontSize: '0.875rem', color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)', fontWeight: 400 }}>{item.value}</span>
                    }
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div style={{ ...card, padding: '2.5rem' }}>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }} className="form-row">
                  <div>
                    <label style={labelStyle}>Your Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Uttam Kumar"
                      required
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={e => e.target.style.borderColor = 'var(--primary-light)'}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="hello@example.com"
                      required
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={e => e.target.style.borderColor = 'var(--primary-light)'}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={labelStyle}>Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Collaboration / Job Opportunity"
                    required
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={e => e.target.style.borderColor = 'var(--primary-light)'}
                  />
                </div>

                <div style={{ marginBottom: '1.75rem' }}>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.7 }}
                    onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={e => e.target.style.borderColor = 'var(--primary-light)'}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={status === 'idle' ? { scale: 1.02 } : {}}
                  whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                  style={{
                    width: '100%',
                    background: status === 'success'
                      ? '#16A34A'
                      : status === 'error'
                        ? '#db1d1dff'
                        : 'var(--primary)',
                    border: 'none',
                    borderRadius: '14px',
                    padding: '1rem',
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    color: 'white',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    opacity: status === 'sending' ? 0.8 : 1,
                    transition: 'all 0.3s ease',
                  }}
                >
                  {status === 'idle' && <><FiSend /> Send Message</>}
                  {status === 'sending' && <>
                    <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      style={{ display: 'inline-block', width: '16px', height: '16px', border: '2px solid white', borderTopColor: 'transparent', borderRadius: '50%' }} />
                    Sending...
                  </>}
                  {status === 'success' && <><FiCheck /> Message Sent</>}
                  {status === 'error' && <><FiAlertCircle /> Failed — Try Again</>}
                </motion.button>

                <p style={{ fontSize: '0.78rem', color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)', textAlign: 'center', marginTop: '1rem' }}>
                  I'll respond within 24 hours
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
    </Element>
  );
}
