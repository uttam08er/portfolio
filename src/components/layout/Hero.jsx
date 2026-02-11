import React from 'react';
import { Link, Element } from 'react-scroll'
import { FaAngleRight } from 'react-icons/fa6';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Button from '../ui/Button';
import './styles/Hero.css';

const Hero = () => {
    const [text] = useTypewriter({
        words: ['Web Developer', 'UI/UX Designer'],
        loop: true,
        typeSpeed: 150,
    });
    const scrollOfSet = -60;
    return (
        <Element name='home' className='block'>
            <div className="container">
                <div className="hero grid-two--cols">
                    <div className="hero-content">
                        <h4>Welcome to my portfolio!</h4>
                        <h1 className='title'>Hello, I'm <span className="highlight gradient-text">Uttam</span></h1>
                        <h2>I'am a <span className='text-scroller gradient-text'>{text}<Cursor /></span></h2>
                        <p>I am a passionate UI/UX designer and web developer dedicated to crafting visually appealing and user-friendly websites. Explore my projects, learn more about me, and discover how I can help bring your ideas to life.</p>
                        <div className="hero-buttons">
                            <Link offset={scrollOfSet} to="projects" >
                                <Button variant="primary">View Projects</Button>
                                <FaAngleRight className='arrow-icon' />
                            </Link>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="/portfolio/images/hero-img.webp" alt=" " />
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default Hero;