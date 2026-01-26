import React, { lazy, Suspense } from 'react';
import './styles/Home.css';

// Layout components
import Navbar from '../layout/Navbar';
import Hero from '../layout/Hero';
// import About from '../layout/About';
// import Services from '../layout/Services';
// import CallToAction from '../layout/CallToAction';
// import ProjectSection from '../layout/ProjectSection';
// import MyBlogs from '../layout/MyBlogs';
// import Contact from '../layout/Contact';

const About = lazy(() => import('../layout/About'));
const Services = lazy(() => import('../layout/Services'));
const CallToAction = lazy(() => import('../layout/CallToAction'));
const ProjectSection = lazy(() => import('../layout/ProjectSection'));
const MyBlogs = lazy(() => import('../layout/MyBlogs'));
const Contact = lazy(() => import('../layout/Contact'));
const Footer = lazy(() => import('../layout/Footer'));

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div>Loading...</div>}>
          <About />
          <Services />
          <CallToAction />
          <ProjectSection />
          <MyBlogs />
          <Contact />
          {/* <Footer /> */}
        </Suspense>
      </main>
    </div>
  );
}

export default Home;