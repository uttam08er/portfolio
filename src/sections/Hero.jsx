import { useEffect, useRef, useState } from 'react';
import { Link, Element } from "react-scroll";
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiDownload, FiArrowRight } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';


function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.8 + 0.1;
        this.color = ['#f5bc04cd', '#ef1313c6', '#0EA5E9'][Math.floor(Math.random() * 3)];
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    for (let i = 0; i < 80; i++) particles.push(new Particle());

    // Draw connections
    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = 'var(--primary)';
            ctx.globalAlpha = (1 - dist / 120) * 0.15;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      drawLines();
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    />
  );
}

function TypeWriter({ words }) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout;
    if (!deleting && charIdx <= word.length) {
      timeout = setTimeout(() => {
        setDisplay(word.substring(0, charIdx));
        setCharIdx(c => c + 1);
      }, 80);
    } else if (!deleting && charIdx > word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplay(word.substring(0, charIdx - 1));
        setCharIdx(c => c - 1);
      }, 45);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words]);

  return (
    <span>
      <span style={{
        color: "var(--orange)",
        fontStyle: "italic"
      }}>
        {display}
      </span>
      <span style={{
        color: 'var(--orange)',
        animation: 'blink 1s step-end infinite',
      }}>|</span>
      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </span>
  );
}

export default function Hero() {
  const { isDark } = useTheme();
  const scrollOfSet = -60

  function Gmail() {
    const email = `${personalInfo.email}`
    const subject = "Let's Collaborate on a Project";
    const body = `Hi Uttam,

I came across your portfolio and really liked your work in web development.
I’m interested in discussing a potential collaboration on a project.

Here are a few details:
- Project Type: [Specify your project idea]
- Timeline: [Specify your timeline]
- Budget: [Optional]

Looking forward to hearing from you!

Best regards,
[Your Full Name]
[Your Portfolio Link]`;
    const mailToLink = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return mailToLink;
    // const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    // return gmailLink;
  }

  return (
    <Element name="home" >
      <section
        id="home"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '70px',
        }}
      >
        {/* Particle Background */}
        <ParticleCanvas />

        {/* Gradient orbs */}
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(99, 182, 241, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }} />

        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem', position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="hero-grid">

            {/* Left Content */}
            <div>

              {/* Greeting */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{ fontSize: '1.2rem', color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)', marginBottom: '1.5rem', fontWeight: 400 }}
              >
                Welcome to my portfolio!
              </motion.p>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                  fontWeight: 800,
                  fontFamily: 'Poppins',
                  lineHeight: 1.1,
                  marginBottom: '1rem',
                  color: isDark ? 'var(--text-dark-100)' : 'var(--text-light-100)',
                }}
              >
                Hello I'm <span style={{ color: 'var(--primary)' }}>{personalInfo.name.split(' ')[0]}</span>
              </motion.h1>

              {/* Typing */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  fontFamily: 'Poppins',
                  marginBottom: '1.5rem',
                  color: isDark ? 'var(--text-dark-200)' : 'var(--text-light-200)',
                  minHeight: '2.5rem',
                }}
              >
                I'm a <TypeWriter words={personalInfo.role} />
              </motion.h2>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                style={{
                  fontSize: '1.2rem',
                  lineHeight: 1.8,
                  color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)',
                  marginBottom: '2.5rem',
                  maxWidth: '480px',
                }}
              >
                {personalInfo.tagline}
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}
              >
                <Link offset={scrollOfSet} to='projects'>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      background: "var(--orange)",
                      border: 'none',
                      borderRadius: '8px',
                      padding: '0.7rem 1.2rem',
                      cursor: 'pointer',
                      color: 'white',
                      fontSize: '0.96rem',
                      fontWeight: 400,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    View Projects <FiArrowRight />
                  </motion.button>
                </Link>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}
              >
                {[
                  { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
                  { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                  { icon: FiTwitter, href: personalInfo.twitter, label: 'Twitter' },
                  { icon: FiMail, href: Gmail(), label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, color: 'var(--primary)' }}
                    style={{
                      color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                    }}
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Right — Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ display: 'flex', justifyContent: 'center' }}
              className="hero-right"
            >
              <div style={{ position: 'relative', width: '340px', height: '420px' }}>
                {/* Floating shapes */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  style={{
                    position: 'absolute',
                    inset: '-15px',
                    borderRadius: '50%',
                    border: '1.5px dashed rgba(99,102,241,0.3)',
                  }}
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  style={{
                    position: 'absolute',
                    inset: '-30px',
                    borderRadius: '50%',
                    border: '1px dashed rgba(14,165,233,0.2)',
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <Link offset={scrollOfSet} to='about'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            style={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
            }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{
                width: '24px',
                height: '40px',
                border: '2px solid var(--primary-light)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                padding: '4px',
              }}
            >
              <div style={{
                width: '4px',
                height: '8px',
                background: 'var(--primary)',
                borderRadius: '2px',
              }} />
            </motion.div>
          </motion.div>
        </Link>

        <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .hero-right { display: none !important; }
        }
      `}</style>
      </section>
    </Element >
  );
}
