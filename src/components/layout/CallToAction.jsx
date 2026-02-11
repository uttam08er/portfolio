// src/components/sections/CallToAction.jsx
import React from 'react';
import { Link } from 'react-scroll';
import Button from '../ui/Button';
import './styles/CallToAction.css';

const CallToAction = () => {
    const scrollOfSet = -62;
    return (
        <div className="cta-section">
            <div className="cta-block">
                <div className="cta-container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to Start Your Next Project?</h2>
                        <p className="cta-description">
                            <span className='cta-des'> I'm currently available for freelance work and exciting collaborations.</span>
                            Let's discuss how we can work together to bring your ideas to life.
                        </p>
                    </div>
                    <div className="cta-buttons">
                        <Link offset={scrollOfSet} to="contact" >
                            <Button variant="primary">Contact Me</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;