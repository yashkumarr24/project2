import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaCar, FaPhone, FaWhatsapp } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Booking', path: '/booking' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <motion.div
            className="logo-container"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="logo-text">yash car</span>
          </motion.div>
        </Link>

        <div className="nav-menu">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <a href="tel:+919414609368" className="nav-phone">
            <FaPhone />
            <span>Call Now</span>
          </a>
          <a href="https://wa.me/919414609368?text=Hi%2C%20I%20want%20to%20book%20a%20car%20service." className="nav-whatsapp" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
            <span>WhatsApp</span>
          </a>
        </div>

        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <motion.div
        className={`nav-mobile ${isOpen ? 'active' : ''}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          height: isOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`nav-mobile-link ${location.pathname === item.path ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
        <div className="nav-mobile-actions">
          <a href="tel:+919414609368" className="nav-mobile-phone">
            <FaPhone />
            Call Now
          </a>
          <a href="https://wa.me/919414609368?text=Hi%2C%20I%20want%20to%20book%20a%20car%20service." className="nav-mobile-whatsapp" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
            WhatsApp
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

