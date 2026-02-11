import React from 'react';
import './styles/Home.css';

// Layout components
import Navbar from '../layout/Navbar';
import Hero from '../layout/Hero';
import About from '../layout/About';
import Services from '../layout/Services';
import CallToAction from '../layout/CallToAction';
import ProjectSection from '../layout/ProjectSection';
import MyBlogs from '../layout/MyBlogs';
import Contact from '../layout/Contact';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <CallToAction />
        <ProjectSection />
        <MyBlogs />
        <Contact />
      </main>
    </div>
  );
}

export default Home;