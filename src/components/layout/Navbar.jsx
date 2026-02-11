// src/components/layout/Navbar.js
import { useState, useEffect, useRef } from 'react';
import { FaHouse, FaUserGraduate, FaChartPie, FaTrophy, FaBookOpen, FaPhone } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import './styles/Navbar.css';

const Navbar = () => {

  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);
  const scrollOfSet = -62;

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.pageYOffset > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    // Add event listeners for both mouse and touch
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  // Prevent body scroll when menu is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header className={`navbar ${isScroll ? 'scroll' : ''}`}>
      <div className="navbar-container">
        <div className="logo gradient-text">Uttam.</div>

        <button
          ref={hamburgerRef}
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
        </button>

        <nav ref={navRef} className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link offset={scrollOfSet} to="home" activeClass='active' spy={true} onClick={() => setIsOpen(false)}><FaHouse className='nav-icon' /> Home</Link>
          <Link offset={scrollOfSet} to="about" activeClass='active' spy={true} onClick={() => setIsOpen(false)}><FaUserGraduate className='nav-icon' /> About</Link>
          <Link offset={scrollOfSet} to="services" activeClass='active' spy={true} onClick={() => setIsOpen(false)}><FaChartPie className='nav-icon' /> Services</Link>
          <Link offset={scrollOfSet} to="projects" activeClass='active' spy={true} onClick={() => setIsOpen(false)}><FaTrophy className='nav-icon' /> Projects</Link>
          <Link offset={scrollOfSet} to="blogs" activeClass='active' spy={true} onClick={() => setIsOpen(false)}><FaBookOpen className='nav-icon' /> Blogs</Link>
          <Link offset={scrollOfSet} to="contact" activeClass='active' spy={true} onClick={() => setIsOpen(false)}><FaPhone className='nav-icon' /> Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;