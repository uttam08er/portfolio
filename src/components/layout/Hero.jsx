import React from 'react';
import { Link, Element } from 'react-scroll'
import { FaArrowRight } from 'react-icons/fa6';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Button from '../ui/Button';
import './styles/Hero.css';

const Hero = () => {
    const [text] = useTypewriter({
        words: ['Web Developer', 'UI/UX Designer'],
        loop: true,
        typeSpeed: 150,
    });
    const scrollOfSet = -62;
    return (
        <Element name='home'>
            <div className="container">
                <div className="hero grid-two--cols">
                    <div className="hero-content">
                        <h4>Welcome to my portfolio!</h4>
                        <h1 className='title'>Hello, I'm <span className="highlight">Uttam</span></h1>
                        <h2>I'am a <span className='text-scroller'>{text}<Cursor /></span></h2>
                        <p>I am a passionate UI/UX designer and web developer dedicated to crafting visually appealing and user-friendly websites. Explore my projects, learn more about me, and discover how I can help bring your ideas to life.</p>
                        <div className="hero-buttons">
                            <Link offset={scrollOfSet} to="projects" >
                                <Button variant="primary">View Projects</Button>
                                {/* <FaArrowRight className='arrow-icon' /> */}
                            </Link>
                        </div>
                    </div>
                    <div className="hero-image">
                        {/* <img src="https://images.unsplash.com/photo-1527384025924-f30fc2ac98e3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Your Name" /> */}
                        {/* <img src="/images/image1.jpg" alt="Your Name" /> */}
                        <img src="/images/uttam.png" alt="Your Name" />
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default Hero;