// src/pages/About.js
import React from 'react';
import Button from '../ui/Button';
import { FaDownload } from "react-icons/fa6";
import CircleBar from '../ui/circleBar';
import { Element } from 'react-scroll';
import { toast } from '../ui/Toast';
import './styles/About.css';

const About = () => {
  const skills = [
    { id: 1, name: 'HTML', color: '#FF5733', level: 90 },
    { id: 2, name: 'CSS', color: '#266EF3', level: 80 },
    { id: 3, name: 'JavaScript', color: '#F9BF00', level: 80 },
    { id: 4, name: 'Figma', color: '#7D19DA', level: 75 },
    { id: 5, name: 'React', color: '#00D3EB', level: 70 },
    { id: 6, name: 'MySQL', color: '#F68319', level: 70 },
  ];

  const handleDownloadCV = () => {
    try {
      const url = "/files/cv.pdf";
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Uttam_CV.pdf'; // Change to .pdf for actual PDF
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(ur);
      toast.success('CV downloaded successfully!');
    } catch (error) {
      toast.error('Oops! Something went wrong. Please try again.');
    }
  };
  return (
    <Element name="about" className='block'>
      <div className="container">
        <div className="header">
          <h1>About Me</h1>
          <p>My Introduction</p>
        </div>

        <section className="about">
          <div className="about-content grid-two--cols">
            <div className="about-text">
              <p className='about-heading'>Hi, I'm Uttam</p>
              <p>I'm a web developer and UI/UX designer with a passion for creating beautiful,
                functional, and user-friendly websites. I love building modern, responsive designs
                that engage users and deliver results.
              </p>

              <p>
                I've worked with <span className='comp-name'>Codec technologies Pvt. Ltd.</span> , helping them build responsive
                websites and applications. My focus is on creating clean, efficient
                code that provides an excellent user experience.
              </p>
              <div className="download-cv">
                <Button onClick={handleDownloadCV} variant="third" >
                  <FaDownload className='btn-icon' /> Download CV
                </Button>
              </div>
            </div>
            <div className="about-skills grid-three--cols">
              {skills.map((element) => {
                return <CircleBar key={element.id} element={element} />
              })}
            </div>
          </div>
        </section>
      </div>
    </Element>
  );
};

export default About;