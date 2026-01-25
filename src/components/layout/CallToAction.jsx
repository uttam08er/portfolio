// src/components/sections/CallToAction.jsx
import React from 'react';
import Button from '../ui/Button';
import { FaDownload, FaRegEnvelope } from "react-icons/fa6";
import './styles/CallToAction.css';

const CallToAction = () => {
    const handleDownloadCV = () => {
        const url = "/files/cv.pdf";
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Uttam_CV.pdf'; // Change to .pdf for actual PDF
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    };


    // Handle hire me action
    const handleHireMe = () => {
        const email = 'uttamkrp08@gmail.com';
        const subject = 'Hiring Inquiry - Project Collaboration';
        const body = `Hi Uttam,

I came across your portfolio and I'm impressed with your work. I would like to discuss a potential project collaboration.

Project Details:
- Project Type: [Please specify]
- Timeline: [Please specify]
- Budget: [Optional]

I look forward to hearing from you soon.

Best regards,
[Your Name]`;
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailLink, '_blank');
    };
    return (
        <div className="cta-section">
            <div className="bubble-container">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
            </div>
            <div className="cta-content">
                <h2 className="cta-title">Ready to Start Your Next Project?</h2>
                <p className="cta-description">
                    I'm currently available for freelance work and exciting collaborations.
                    Let's discuss how we can work together to bring your ideas to life.
                </p>
            </div>
            <div className="cta-buttons">
                <Button onClick={handleDownloadCV} variant="third" className='cv-btn'>
                    <FaDownload className='cta-btn--icon' /> Download CV
                </Button>
                <Button onClick={handleHireMe} variant="primary" className="hire-me--btn">
                    <FaRegEnvelope className='cta-btn--icon' /> Hire Me
                </Button>
            </div>
        </div>
    );
};

export default CallToAction;