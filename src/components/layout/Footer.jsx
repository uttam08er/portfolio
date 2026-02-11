// src/components/layout/Footer.js
import React from 'react';
import { FaWhatsapp, FaInstagram, FaRegEnvelope, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import './styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  function Gmail() {
    const email = "uttamkrp08@gmail.com"; // Replace with your email
    const subject = "Let's Collaborate on a Project";
    const body = `Hi Uttam,

I came across your portfolio and really liked your work in web development.
I’m interested in discussing a potential collaboration on a project.

Here are a few details:
- Project Type: [Specify your project idea]
- Timeline: [Specify your timeline]
- Budget: [Optional]

Looking forward to hearing from you!

Best regards,
[Your Full Name]
[Your Portfolio Link]`;
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return gmailLink;
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo gradient-text">Uttam.</div>
        <div className='footer-content'>
          <p>💡 Have Any Project in Mind?</p>
          {/* <p>Let’s work together to create something amazing!</p> */}
          <p>Get in touch</p>
        </div>
        <div className="footer-social">
          <a href={Gmail()} target="_blank" rel="noopener noreferrer" aria-label="gmail">
            <FaRegEnvelope className='footer-icon' />
          </a>
          <a href="https://github.com/uttam08er" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className='footer-icon' />
          </a>
          <a href="https://linkedin.com/in/uttam08er" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn className='footer-icon' />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaXTwitter className='footer-icon' />
          </a>
        </div>
        <p className="copyright">Copyright © {currentYear} . All rights reserved.</p>
        <div className="line"></div>
        <p className="author">Designed & Developed by ❤️ Uttam.</p>
      </div>
    </footer>
  );
};

export default Footer;