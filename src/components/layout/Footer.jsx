import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiHeart } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import { personalInfo } from '../../data/portfolioData';

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const { isDark } = useTheme();

  const handleDownloadCV = () => {
    try {
      const url = "/portfolio/files/uttam_res.pdf";
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Uttam_CV.pdf'; // Change to .pdf for actual PDF
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      console.log(window.URL.revokeObjectURL(url));
      console.info('CV downloaded successfully!');
    } catch (error) {
      console.error('Oops! Something went wrong. Please try again.');
    }
  };

  const scrollTo = (href) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      // borderTop: isDark ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(99,102,241,0.12)',
      padding: '3rem 0 2rem',
      background: 'var(--primary-dark)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{
              fontSize: '1.75rem',
              fontWeight: 800,
              fontFamily: 'Poppins',
              color: isDark ? 'var(--text-light-100)' : 'var(--text-dark-100)',
              marginBottom: '1rem',
            }}>Uttam<span style={{ color: "var(--orange)" }}>.</span></div>
            <p style={{ fontSize: '0.875rem', color: isDark ? 'var(--text-light-100)' : 'var(--text-dark-100)', lineHeight: 1.8, maxWidth: '280px' }}>
              Frontend Developer passionate about building beautiful, performant web experiences with React and modern technologies.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              {[
                { icon: FiGithub, href: personalInfo.github },
                { icon: FiLinkedin, href: personalInfo.linkedin },
                { icon: FiTwitter, href: personalInfo.twitter },
                { icon: FiMail, href: `mailto:${personalInfo.email}` },
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  style={{
                    width: '38px',
                    height: '38px',
                    background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(99,102,241,0.06)',
                    border: '1px solid var(--primary)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isDark ? 'var(--text-light-100)' : 'var(--text-dark-100)',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                  }}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: isDark ? 'var(--text-light-100)' : 'var(--text-dark-100)', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {navLinks.slice(0, 4).map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: isDark ? 'var(--text-light-100)' : 'var(--text-dark-100)',
                    fontSize: '0.875rem',
                    textAlign: 'left',
                    padding: 0,
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => e.target.style.color = 'var(--orange)'}
                  onMouseLeave={e => e.target.style.color = isDark ? 'var(--text-light-100)' : 'var(--text-dark-100)'}
                >{link.label}</button>
              ))}
            </div>
          </div>

          {/* More Links */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: isDark ? 'var(--text-light-100)' : 'var(--text-dark-100)', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              More
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {navLinks.slice(4).map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: isDark ? 'var(--text-light-100)' : 'var(--text-dark-100)',
                    fontSize: '0.875rem',
                    textAlign: 'left',
                    padding: 0,
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => e.target.style.color = 'var(--orange)'}
                  onMouseLeave={e => e.target.style.color = isDark ? 'var(--text-light-100)' : 'var(--text-dark-100)'}
                >{link.label}</button>
              ))}
              <a
                onClick={handleDownloadCV}
                style={{
                  color: isDark ? 'var(--text-light-100)' : 'var(--text-dark-100)',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--orange)'}
                onMouseLeave={e => e.target.style.color = isDark ? 'var(--text-light-100)' : 'var(--text-dark-100)'}
              >Resume</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: isDark ? '1px solid var(--text-light-100)' : '1px solid var(--text-dark-100)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}>
          <p style={{ fontSize: '0.82rem', color: isDark ? 'var(--text-light-100)' : 'var(--text-dark-100)' }}>
            © {new Date().getFullYear()} Uttam. All rights reserved.
          </p>
          <p style={{ fontSize: '0.82rem', color: isDark ? 'var(--text-light-100)' : 'var(--text-dark-100)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            Built with <FiHeart fill='var(--orange)' size={12} style={{ color: 'var(--orange)' }} /> using React & Tailwind CSS
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
          .footer-grid > div:first-child { grid-column: 1 / -1; }
        }
      `}</style>
    </footer>
  );
}
