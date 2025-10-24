import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaCar, FaWrench } from 'react-icons/fa';
import SEOHead from '../components/SEOHead';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <SEOHead 
        title="Page Not Found - Yash Car Workshop"
        description="The page you're looking for doesn't exist. Return to Yash Car Workshop homepage for professional automotive services."
        canonical="/404"
        keywords="404 error, page not found, yash car workshop"
      />
      
      <div className="not-found-container">
        <motion.div
          className="not-found-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="error-icon">
            <FaWrench size={80} />
          </div>
          
          <h1 className="error-code">404</h1>
          <h2 className="error-title">Oops! Page Under Maintenance</h2>
          <p className="error-description">
            Looks like this page is in the garage for repairs. 
            Don't worry, our mechanics are working on it!
          </p>
          
          <div className="error-actions">
            <Link to="/" className="btn-primary">
              <FaHome />
              Back to Homepage
            </Link>
            <Link to="/services" className="btn-secondary">
              <FaCar />
              View Services
            </Link>
          </div>
          
          <div className="helpful-links">
            <h3>Looking for something specific?</h3>
            <ul>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/booking">Book Appointment</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </motion.div>
        
        <motion.div
          className="car-illustration"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img src="/jeep-hero.webp" alt="Car under maintenance" />
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
