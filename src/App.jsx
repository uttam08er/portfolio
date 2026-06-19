import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useParams, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LoadingScreen from './components/ui/LoadingScreen';
import { ScrollProgress, BackToTop } from './components/ui/ScrollUtils';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Blog from './sections/Blog';
import BlogPage from './sections/BlogPage';
import Contact from './sections/Contact';
import { blogPosts } from './data/portfolioData';

// ── Home page (all sections)
function HomePage() {
  const navigate = useNavigate();

  const handleOpenPost = (id) => {
    navigate(`/portfolio/blog/${id}`);
  };

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Blog onOpenPost={handleOpenPost} />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

// ── Blog detail page wrapper (reads :id from URL)
function BlogDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const postId = parseInt(id);

  // If id is not valid, redirect home
  const exists = blogPosts.some(p => p.id === postId);
  if (!exists) return <Navigate to="/portfolio/" replace />;

  const handleBack = () => {
    navigate('/portfolio/');
    // Scroll to blog section after navigation
    setTimeout(() => {
      document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <BlogPage postId={postId} onBack={handleBack} />
      <Footer />
      <BackToTop />
    </>
  );
}

// ── App shell with loading screen
function AppContent() {
  return (
    <Routes>
      <Route path="/portfolio/" element={<HomePage />} />
      <Route path="/portfolio/blog/:id" element={<BlogDetailPage />} />
      <Route path="*" element={<Navigate to="/portfolio/" replace />} />
    </Routes>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <AppContent />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}