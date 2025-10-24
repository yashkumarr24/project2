import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaWrench, 
  FaAward, 
  FaUsers, 
  FaHeart,
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram
} from 'react-icons/fa';
import './About.css';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: 'Ram Lal Lohar',
      position: 'Owner • Expert in Everything',
      image: '/model.webp',
      experience: '20+ years',
      specialties: ['All Systems', 'Diagnostics', 'Customer Trust'],
      story: 'Ram Lal leads the workshop with decades of hands-on expertise across every area of automotive care. From complex diagnostics to final quality checks, he ensures every car leaves in perfect shape.',
      social: { linkedin: '#', twitter: '#', facebook: '#' }
    },
    {
      id: 2,
      name: 'Ganesji',
      position: 'Mechanical Expert • Engine Specialist',
      image: '/model.webp',
      experience: '12+ years',
      specialties: ['Engine Overhaul', 'Tuning', 'Diagnostics'],
      story: 'Known for precise engine work—from overhauls to fine tuning—Ganesji brings performance and reliability back to every vehicle.',
      social: { linkedin: '#', twitter: '#', facebook: '#' }
    },
    {
      id: 3,
      name: 'Yash Kumar',
      position: 'Co-owner • Operations & Service',
      image: '/model.webp',
      experience: '10+ years',
      specialties: ['Workshop Operations', 'Customer Experience', 'Service Planning'],
      story: 'Co-leading the workshop, Yash focuses on smooth operations and exceptional customer experience, ensuring timely, transparent service.',
      social: { linkedin: '#', twitter: '#', facebook: '#' }
    }
  ];

  const values = [
    {
      icon: FaWrench,
      title: 'Technical Excellence',
      description: 'We maintain the highest standards of technical expertise and use cutting-edge diagnostic equipment.',
      color: '#1e3a8a'
    },
    {
      icon: FaHeart,
      title: 'Customer Care',
      description: 'Every customer is treated like family, with honest communication and personalized service.',
      color: '#dc2626'
    },
    {
      icon: FaAward,
      title: 'Quality Assurance',
      description: 'We stand behind our work with comprehensive warranties and quality guarantees.',
      color: '#059669'
    },
    {
      icon: FaUsers,
      title: 'Team Collaboration',
      description: 'Our skilled team works together to deliver the best possible outcomes for every vehicle.',
      color: '#7c3aed'
    }
  ];

  const achievements = [
    { year: '2008', title: 'Workshop Founded', description: 'Started with a small garage and big dreams' },
    { year: '2012', title: 'Team Expansion', description: 'Grew to 10+ certified technicians' },
    { year: '2015', title: 'Award Recognition', description: 'Best Auto Service Award by City Chamber' },
    { year: '2018', title: 'Technology Upgrade', description: 'Invested in advanced diagnostic equipment' },
    { year: '2020', title: 'Digital Transformation', description: 'Launched online booking and service tracking' },
    { year: '2023', title: 'Eco Initiative', description: 'Implemented green practices and eco-friendly products' }
  ];

  const testimonials = [
    {
      name: 'Ravi Kumar',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      text: 'Yash Car Workshop has been servicing my fleet for over 5 years. Their attention to detail and honest pricing keeps me coming back.',
      rating: 5
    },
    {
      name: 'Sunita Devi',
      role: 'Teacher',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      text: 'I trust them completely with my car. They explain everything clearly and never try to sell unnecessary services.',
      rating: 5
    },
    {
      name: 'Vikram Singh',
      role: 'Engineer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      text: 'Professional service, fair pricing, and they always deliver on time. Highly recommended for any automotive needs.',
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
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
              <h1 className="hero-title">About Yash Car Workshop</h1>
              <p className="hero-subtitle">
                Your trusted automotive partner for over 15 years, delivering excellence in every service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section section">
        <div className="container">
          <motion.div
            className="mission-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mission-grid">
              <div className="mission-card">
                <h2 className="mission-title">Our Mission</h2>
                <p className="mission-text">
                  To provide exceptional automotive services with honesty, integrity, and technical excellence. 
                  We are committed to keeping your vehicle safe, reliable, and performing at its best while 
                  building lasting relationships with our customers.
                </p>
              </div>
              <div className="mission-card">
                <h2 className="mission-title">Our Vision</h2>
                <p className="mission-text">
                  To be the most trusted and preferred automotive service provider in the region, 
                  known for our innovation, customer satisfaction, and commitment to environmental 
                  responsibility in all our operations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Meet Our Expert Team</h2>
            <p className="section-subtitle">
              Skilled professionals dedicated to providing the best automotive service experience.
            </p>
          </motion.div>

          <div className="team-showcase">
            <div className="team-slider">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  className="team-member"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="member-image">
                    <img src={teamMembers[currentSlide].image} alt={teamMembers[currentSlide].name} />
                    <div className="member-overlay">
                      <div className="social-links">
                        {teamMembers[currentSlide].social.linkedin && (
                          <a href={teamMembers[currentSlide].social.linkedin} className="social-link">
                            <FaLinkedin />
                          </a>
                        )}
                        {teamMembers[currentSlide].social.twitter && (
                          <a href={teamMembers[currentSlide].social.twitter} className="social-link">
                            <FaTwitter />
                          </a>
                        )}
                        {teamMembers[currentSlide].social.facebook && (
                          <a href={teamMembers[currentSlide].social.facebook} className="social-link">
                            <FaFacebook />
                          </a>
                        )}
                        {teamMembers[currentSlide].social.instagram && (
                          <a href={teamMembers[currentSlide].social.instagram} className="social-link">
                            <FaInstagram />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">{teamMembers[currentSlide].name}</h3>
                    <p className="member-position">{teamMembers[currentSlide].position}</p>
                    <div className="member-experience">
                      <FaAward />
                      <span>{teamMembers[currentSlide].experience} Experience</span>
                    </div>
                    <div className="member-specialties">
                      <h4>Specialties:</h4>
                      <div className="specialty-tags">
                        {teamMembers[currentSlide].specialties.map((specialty, index) => (
                          <span key={index} className="specialty-tag">{specialty}</span>
                        ))}
                      </div>
                    </div>
                    <p className="member-story">{teamMembers[currentSlide].story}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="team-navigation">
              <button className="nav-button prev" onClick={prevSlide}>
                <FaChevronLeft />
              </button>
              <div className="team-indicators">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
              <button className="nav-button next" onClick={nextSlide}>
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do at Yash Car Workshop.
            </p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="value-icon" style={{ color: value.color }}>
                  <value.icon />
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">
              Key milestones in our growth and development over the years.
            </p>
          </motion.div>

          <div className="timeline">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.year}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="timeline-content">
                  <div className="timeline-year">{achievement.year}</div>
                  <h3 className="timeline-title">{achievement.title}</h3>
                  <p className="timeline-description">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">
              Real feedback from satisfied customers who trust us with their vehicles.
            </p>
          </motion.div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-role">{testimonial.role}</p>
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="testimonial-content">
                  <FaQuoteLeft className="quote-icon" />
                  <p className="testimonial-text">{testimonial.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-title">Ready to Experience Our Service?</h2>
            <p className="cta-description">
              Join thousands of satisfied customers who trust Yash Car Workshop for their automotive needs.
            </p>
            <div className="cta-buttons">
              <a href="/booking" className="btn btn-primary">Book Appointment</a>
              <a href="/contact" className="btn btn-outline">Contact Us</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

