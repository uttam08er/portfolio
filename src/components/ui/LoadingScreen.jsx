import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export default function LoadingScreen() {
  const { isDark } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        inset: 0,
        background: isDark ? 'var(--bg-dark)' : 'var(--bg-light)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        gap: '2rem',
      }}
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
        style={{
          fontSize: '3rem',
          fontWeight: 800,
          fontFamily: 'Poppins',
          color: 'var(--primary)',
        }}
      >
        Uttam<span style={{ color: "var(--orange)" }}>.</span>
      </motion.div>

      {/* Loading bar */}
      <div style={{
        width: '200px',
        height: '4px',
        background: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)',
        borderRadius: '2px',
        overflow: 'hidden',
      }}>
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '300%' }}
          transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity }}
          style={{
            height: '100%',
            width: '40%',
            background: 'var(--orange)',
            borderRadius: '2px',
          }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ fontSize: '0.85rem', color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)', letterSpacing: '2px', textTransform: 'uppercase' }}
      >
        Loading...
      </motion.p>
    </motion.div>
  );
}
