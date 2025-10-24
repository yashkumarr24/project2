import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock,
  FaWhatsapp,
  FaTelegram,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaUser,
  FaCar,
  FaComment,
  FaPaperPlane,
  FaCheckCircle
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredContact: 'phone'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: FaUser,
      title: 'Owner',
      details: ['Ram Lal Lohar'],
      color: '#1e3a8a'
    },
    {
      icon: FaMapMarkerAlt, 
      title: 'Visit Us',
      details: ['View location on Google Maps'],
      color: '#dc2626'
    },
    {
      icon: FaPhone,
      title: 'Call Us',
      details: ['+91 9414609368'],
      color: '#059669'
    },
    {
      icon: FaEnvelope,
      title: 'Email Us',
      details: ['rammalviya5@gmail.com'],
      color: '#3b82f6'
    },
    {
      icon: FaClock,
      title: 'Working Hours',
      details: ['Mon - Sat: 8:00 AM - 8:00 PM', 'Sunday: 9:00 AM - 6:00 PM'],
      color: '#7c3aed'
    }
  ];

  const socialLinks = [
    { icon: FaWhatsapp, url: 'https://wa.me/919414609368?text=Hi%2C%20I%20want%20to%20book%20a%20car%20service.', color: '#25d366', label: 'WhatsApp' },
    { icon: FaTelegram, url: 'https://t.me/yashcarworkshop', color: '#0088cc', label: 'Telegram' },
    { icon: FaFacebook, url: 'https://facebook.com/yashcarworkshop', color: '#1877f2', label: 'Facebook' },
    { icon: FaInstagram, url: 'https://instagram.com/yashcarworkshop', color: '#e4405f', label: 'Instagram' },
    { icon: FaTwitter, url: 'https://twitter.com/yashcarworkshop', color: '#1da1f2', label: 'Twitter' },
    { icon: FaLinkedin, url: 'https://linkedin.com/company/yashcarworkshop', color: '#0077b5', label: 'LinkedIn' }
  ];

  const services = [
    'Car Service',
    'Washing',
    'Engine Work',
    'Mechanical',
    'Body & Paint',
    'Accessories',
    'General Inquiry'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        preferredContact: 'phone'
      });
    }, 3000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-background">
          <img src="https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Workshop" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="container">
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">Get in Touch</h1>
              <p className="hero-subtitle">
                We're here to help with all your automotive needs. Contact us today!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Contact Information</h2>
            <p className="section-subtitle">
              Multiple ways to reach us for your convenience
            </p>
          </motion.div>

          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="contact-info-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="info-icon" style={{ color: info.color }}>
                  <info.icon />
                </div>
                <h3 className="info-title">{info.title}</h3>
                <div className="info-details">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="info-detail">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="main-contact-section section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <motion.div
              className="contact-form-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="form-header">
                <h3 className="form-title">Send us a Message</h3>
                <p className="form-subtitle">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  className="success-message"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaCheckCircle className="success-icon" />
                  <h4 className="success-title">Message Sent Successfully!</h4>
                  <p className="success-text">
                    Thank you for contacting us. We'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">
                        <FaUser />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        className="form-input"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        <FaEnvelope />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">
                        <FaPhone />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        className="form-input"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        <FaCar />
                        Service Needed
                      </label>
                      <select
                        className="form-select"
                        value={formData.service}
                        onChange={(e) => handleInputChange('service', e.target.value)}
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Preferred Contact Method
                    </label>
                    <div className="contact-method-options">
                      <label className="method-option">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                        />
                        <span className="method-label">
                          <FaPhone />
                          Phone Call
                        </span>
                      </label>
                      <label className="method-option">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                        />
                        <span className="method-label">
                          <FaEnvelope />
                          Email
                        </span>
                      </label>
                      <label className="method-option">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="whatsapp"
                          checked={formData.preferredContact === 'whatsapp'}
                          onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                        />
                        <span className="method-label">
                          <FaWhatsapp />
                          WhatsApp
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <FaComment />
                      Message *
                    </label>
                    <textarea
                      className="form-textarea"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your requirements..."
                      rows="5"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map and Social Links */}
            <motion.div
              className="contact-sidebar"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Map */}
              <div className="map-container">
                <h3 className="map-title">Our Location</h3>
                <div className="map-placeholder">
                  <div className="map-content">
                  <FaMapMarkerAlt className="map-icon" />
                  <h4>Ram Lal Lohar</h4>
                  <p><a href="https://maps.app.goo.gl/HF6rmMyBP5QkHtJe7" target="_blank" rel="noopener noreferrer">Open location in Google Maps</a></p>
                    <div className="map-actions">
                      <a
                        href="https://maps.app.goo.gl/HF6rmMyBP5QkHtJe7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="map-button"
                      >
                        <FaMapMarkerAlt />
                        View on Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links removed as requested */}

              {/* Quick Contact */}
              <div className="quick-contact">
                <h3 className="quick-title">Quick Contact</h3>
                <div className="quick-actions">
                  <a href="tel:+919414609368" className="quick-button phone">
                    <FaPhone />
                    Call Now
                  </a>
                  <a href="https://wa.me/919414609368?text=Hi%2C%20I%20want%20to%20book%20a%20car%20service." className="quick-button whatsapp">
                    <FaWhatsapp />
                    WhatsApp
                  </a>
                  <a href="mailto:rammalviya5@gmail.com" className="quick-button email">
                    <FaEnvelope />
                    Email
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Quick answers to common questions about our services
            </p>
          </motion.div>

          <div className="faq-grid">
            {[
              {
                question: 'How long does a typical service take?',
                answer: 'Most services take 2-4 hours, but complex repairs may require 1-3 days. We provide accurate time estimates when you book.'
              },
              {
                question: 'Do you provide warranty on your work?',
                answer: 'Yes, we offer comprehensive warranties on all our services. Parts and labor are covered for 6 months to 2 years depending on the service.'
              },
              {
                question: 'Can I get a quote before booking?',
                answer: 'Absolutely! Contact us with your vehicle details and service requirements, and we\'ll provide a detailed quote within 24 hours.'
              },
              {
                question: 'Do you use genuine parts?',
                answer: 'We use only genuine OEM parts or high-quality aftermarket parts that meet or exceed manufacturer specifications.'
              },
              {
                question: 'Is your workshop insured?',
                answer: 'Yes, we are fully insured to protect your vehicle and provide peace of mind during service.'
              },
              {
                question: 'Do you offer pickup and delivery?',
                answer: 'Yes, we provide convenient pickup and delivery services for customers within a 10km radius of our workshop.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="faq-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="faq-question">{faq.question}</h4>
                <p className="faq-answer">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
