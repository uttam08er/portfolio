// src/pages/About.js
import React from 'react';
import { FaCalendar, FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import CircleBar from '../ui/circleBar';
import { Element } from 'react-scroll';
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
  return (
    <Element name="about" className='about-section'>
      <div className="block">
        <div className="container">
          <div className="header">
            <h1>About Me</h1>
            <p>Learn more about my journey, skills, and what drives me as a developer.</p>
          </div>

          <section className="about">
            <div className="about-content grid-two--cols">
              <div className="about-text">
                <h4>Hi, I'm Uttam</h4>
                <p>I'm a front-end developer with a passion for creating beautiful,
                  functional, and user-friendly websites. I love building modern, responsive designs
                  that engage users and deliver results. Let’s create something amazing
                  together!
                </p>

                <p>
                  I've worked with <span className='comp-name'>Manoj technologies Pvt. Ltd.</span> , helping them build responsive
                  websites and applications. My focus is on creating clean, efficient
                  code that provides an excellent user experience.
                </p>
                <div className="details grid-two--cols">
                  {/* <p><FaCalendar className='about-icon' /><span className='about-data'> </span>06/04/2000</p>
                <p><FaPhone className='about-icon' /><span className='about-data'> </span>+91 8540906167</p> */}
                  <p><FaEnvelope className='about-icon' /><span className='about-data'> </span>uttamkrp08@gmail.com</p>
                  <p><FaLocationDot className='about-icon' /><span className='about-data'> </span>Noida sector-51</p>
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
      </div>
    </Element>
  );
};

export default About;