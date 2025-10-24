import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaCar, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaArrowUp
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Booking', path: '/booking' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    'Car Service',
    'Washing',
    'Engine Work',
    'Mechanical',
    'Body & Paint',
    'Accessories'
  ];

  const socialLinks = [
    { icon: FaWhatsapp, url: 'https://wa.me/919414609368?text=Hi%2C%20I%20want%20to%20book%20a%20car%20service.', color: '#25d366', label: 'WhatsApp' },
    { icon: FaFacebook, url: 'https://facebook.com/yashcarworkshop', color: '#1877f2', label: 'Facebook' },
    { icon: FaInstagram, url: 'https://instagram.com/yashcarworkshop', color: '#e4405f', label: 'Instagram' },
    { icon: FaTwitter, url: 'https://twitter.com/yashcarworkshop', color: '#1da1f2', label: 'Twitter' },
    { icon: FaLinkedin, url: 'https://linkedin.com/company/yashcarworkshop', color: '#0077b5', label: 'LinkedIn' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <motion.div
                className="logo-container"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaCar className="logo-icon" />
                <span className="logo-text">Yash Car</span>
              </motion.div>
              <p className="footer-description">
                Your trusted automotive partner for over 15 years. We provide 
                comprehensive car care services with honesty, integrity, and 
                technical excellence.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    className="social-link"
                    style={{ '--social-color': social.color }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Our Services</h3>
            <ul className="footer-links">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <span className="footer-link">{service}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-info">
              <motion.div
                className="contact-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <FaMapMarkerAlt className="contact-icon" />
                <div className="contact-details">
                  <a href="https://maps.app.goo.gl/HF6rmMyBP5QkHtJe7" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </div>
              </motion.div>

              <motion.div
                className="contact-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <FaPhone className="contact-icon" />
                <div className="contact-details">
                  <p>+91 9414609368</p>
                </div>
              </motion.div>

              <motion.div
                className="contact-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <FaEnvelope className="contact-icon" />
                <div className="contact-details">
                  <p>rammalviya5@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                className="contact-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <FaWhatsapp className="contact-icon" />
                <div className="contact-details">
                  <p>WhatsApp: +91 9414609368</p>
                  <p><a href="https://wa.me/919414609368?text=Hi%2C%20I%20want%20to%20book%20a%20car%20service." target="_blank" rel="noopener noreferrer">Chat with us</a></p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2024 Yash Car Workshop. All rights reserved.</p>
              <p>Designed with ❤️ for automotive excellence</p>
            </div>
            
            <div className="footer-actions">
              <motion.button
                className="scroll-to-top"
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <FaArrowUp />
                <span>Back to Top</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="footer-bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>
    </footer>
  );
};

export default Footer;
