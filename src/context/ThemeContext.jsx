import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const saved = localStorage.getItem('theme');

  if (!saved) {
    const deviceTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
      ? "dark"
      : "light";

    localStorage.setItem(
      "theme",
      deviceTheme
    );
  }

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (saved) setIsDark(saved === 'dark');
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => {
      localStorage.setItem('theme', !prev ? 'dark' : 'light');
      return !prev;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={isDark ? 'dark-mode' : 'light-mode'} style={{
        background: isDark ? 'var(--bg-dark)' : 'var(--bg-light)',
        color: isDark ? 'var(--bg-light)' : 'var(--bg-dark)',
        minHeight: '100vh',
        transition: 'all 0.3s ease'
      }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
