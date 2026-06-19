import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const sec of sections.reverse()) {
        const el = document.getElementById(sec);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sec);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          padding: '0 1.5rem',
          transition: 'all 0.3s ease',
          background: scrolled
            ? isDark
              ? 'var(--bg-dark)'
              : 'var(--bg-light)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            whileHover={{ scale: 1.05 }}
            style={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            <span style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              fontFamily: 'Poppins',
              color: "var(--primary)",
            }}>
              Uttam<span style={{ color: "var(--orange)" }}>.</span>
            </span>
          </motion.a>

          {/* Desktop Links */}
          <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }} className="desktop-nav">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: activeSection === link.href.replace('#', '') ? 600 : 400,
                  color: activeSection === link.href.replace('#', '')
                    ? 'var(--primary)'
                    : isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                }}
                onMouseEnter={e => {
                  e.target.style.color = 'var(--orange)';
                }}
                onMouseLeave={e => {
                  e.target.style.color = activeSection === link.href.replace('#', '') ? 'var(--primary)' : isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)';
                  e.target.style.background = 'none';
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <button
              onClick={toggleTheme}
              style={{
                borderRadius: '10px',
                padding: '0.5rem',
                cursor: 'pointer',
                color: isDark ? '#a77809ff' : '#6c7b92ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
              }}
            >
              {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick('#contact')}
              style={{
                background: 'var(--orange)',
                border: 'none',
                borderRadius: '10px',
                padding: '0.5rem 1.25rem',
                cursor: 'pointer',
                color: 'white',
                fontSize: '0.875rem',
                fontWeight: 600,
              }}
              className="hire-btn"
            >
              Hire Me
            </motion.button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)',
                display: 'none',
              }}
              className="mobile-menu-btn"
            >
              {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            .hire-btn { display: none !important; }
            .mobile-menu-btn { display: flex !important; }
          }
        `}</style>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            style={{
              position: 'fixed',
              top: '70px',
              right: 0,
              zIndex: 998,
              width: '15rem',
              height: '100vh',
              boxShadow: isDark ? '0px 2px 8px 0px var(--box-shadow--dark) ' : '0px 2px 8px 0px var(--box-shadow--light)',
              backdropFilter: 'blur(30px)',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleNavClick(link.href)}
                style={{
                  border: 'none',
                  borderRadius: '10px',
                  padding: '0.875rem 1rem',
                  cursor: 'pointer',
                  color: activeSection === link.href.replace('#', '')
                    ? 'var(--primary)'
                    : isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)',
                  fontSize: '1rem',
                  fontWeight: 400,
                  textAlign: 'left',
                }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => handleNavClick('#contact')}
              style={{
                background: 'var(--orange)',
                border: 'none',
                borderRadius: '10px',
                padding: '0.6rem',
                cursor: 'pointer',
                color: 'white',
                fontSize: '1rem',
                fontWeight: 400,
                margin: '1rem',
              }}
            >
              Hire Me
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
