import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCar, 
  FaTint, 
  FaWrench, 
  FaCog, 
  FaHammer, 
  FaPaintBrush,
  FaTimes,
  FaClock,
  FaTools,
  FaCheckCircle,
  FaShieldAlt,
  FaStar,
  FaLeaf
} from 'react-icons/fa';
import SEOHead from '../components/SEOHead';
import './Services.css';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  const progressSteps = [
    { id: 1, name: 'Service Inquiry', icon: FaCar, description: 'Tell us what you need' },
    { id: 2, name: 'Service Booking', icon: FaClock, description: 'Schedule your appointment' },
    { id: 3, name: 'In-progress', icon: FaTools, description: 'We work on your vehicle' },
    { id: 4, name: 'Ready for Pickup', icon: FaCheckCircle, description: 'Quality check complete' },
    { id: 5, name: 'Payment', icon: FaShieldAlt, description: 'Secure payment process' }
  ];

  const localImages = {
    service: '/car service.webp',
    washing: '/car washing and spa.webp',
    engine: '/engine work.webp',
    mechanical: '/mechanical work.webp',
    paint: '/dent and paint.webp',
    accessories: '/car accessories.webp'
  };

  const services = [
    {
      id: 1,
      name: 'Car Service',
      icon: FaCar,
      color: '#1e3a8a',
      image: localImages.service,
      description: 'Comprehensive vehicle maintenance and inspection services',
      features: [
        'Engine oil change and filter replacement',
        'Brake system inspection and maintenance',
        'Battery testing and replacement',
        'Tire rotation and alignment',
        'Fluid level checks and top-ups',
        'Safety inspection and certification'
      ],
      duration: '2-4 hours',
      price: 'Starting from ₹2,500',
      benefits: [
        'Extended engine life',
        'Improved fuel efficiency',
        'Enhanced safety',
        'Warranty protection'
      ]
    },
    {
      id: 2,
      name: 'Washing',
      icon: FaTint,
      color: '#3b82f6',
      image: localImages.washing,
      description: 'Professional car washing and detailing services',
      features: [
        'Exterior wash and wax',
        'Interior vacuum and cleaning',
        'Dashboard and console cleaning',
        'Window and mirror polishing',
        'Tire and rim cleaning',
        'Eco-friendly products'
      ],
      duration: '1-2 hours',
      price: 'Starting from ₹500',
      benefits: [
        'Protects paint finish',
        'Maintains resale value',
        'Eco-friendly process',
        'Professional results'
      ]
    },
    {
      id: 3,
      name: 'Engine Work',
      icon: FaCog,
      color: '#dc2626',
      image: localImages.engine,
      description: 'Advanced engine diagnostics, repairs, and performance upgrades',
      features: [
        'Engine diagnostics and troubleshooting',
        'Timing belt and chain replacement',
        'Engine rebuild and overhaul',
        'Performance tuning and upgrades',
        'Turbo and supercharger installation',
        'Engine swap services'
      ],
      duration: '1-3 days',
      price: 'Starting from ₹5,000',
      benefits: [
        'Restored engine performance',
        'Improved fuel efficiency',
        'Extended engine life',
        'Professional warranty'
      ]
    },
    {
      id: 4,
      name: 'Mechanical',
      icon: FaWrench,
      color: '#059669',
      image: localImages.mechanical,
      description: 'Complete mechanical repairs and maintenance',
      features: [
        'Brake system repair and replacement',
        'Suspension system maintenance',
        'Transmission service and repair',
        'Clutch replacement and repair',
        'Steering system repair',
        'Exhaust system maintenance'
      ],
      duration: '2-6 hours',
      price: 'Starting from ₹3,000',
      benefits: [
        'Enhanced safety',
        'Improved handling',
        'Reduced noise and vibration',
        'Extended component life'
      ]
    },
    {
      id: 5,
      name: 'Body Dent & Paint',
      icon: FaHammer,
      color: '#7c3aed',
      image: localImages.paint,
      description: 'Professional bodywork, dent removal, and paint services',
      features: [
        'Dent removal and repair',
        'Scratch repair and touch-up',
        'Full body painting',
        'Color matching and blending',
        'Rust treatment and prevention',
        'Paint protection film'
      ],
      duration: '1-5 days',
      price: 'Starting from ₹1,500',
      benefits: [
        'Restored appearance',
        'Maintained resale value',
        'Professional finish',
        'Long-lasting results'
      ]
    },
    {
      id: 6,
      name: 'Accessories',
      icon: FaPaintBrush,
      color: '#ea580c',
      image: localImages.accessories,
      description: 'Car accessories installation and customization',
      features: [
        'Audio system installation',
        'GPS and navigation systems',
        'Seat covers and upholstery',
        'Alloy wheels and tires',
        'LED lighting upgrades',
        'Security system installation'
      ],
      duration: '2-4 hours',
      price: 'Starting from ₹1,000',
      benefits: [
        'Enhanced comfort',
        'Improved functionality',
        'Personalized style',
        'Professional installation'
      ]
    }
  ];

  const openServiceModal = (service) => {
    setSelectedService(service);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="services-page">
      <SEOHead 
        title="Car Services - Yash Car Workshop | AC Repair, Denting & Painting"
        description="Complete automotive services: car service, AC repair, denting & painting, washing, engine work, and more. Professional mechanics with quality guarantee."
        canonical="/services"
      />
      {/* Progress Bar Section */}
      <section className="progress-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="section-title">Our Service Process</h1>
            <p className="section-subtitle">
              From inquiry to completion, we ensure a smooth and transparent service experience.
            </p>
          </motion.div>

          <div className="progress-container">
            <div className="progress-timeline">
              {progressSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className={`progress-step ${index <= currentStep ? 'completed' : ''} ${index === currentStep ? 'active' : ''}`}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  onClick={() => setCurrentStep(index)}
                >
                  <div className="step-icon">
                    <step.icon />
                  </div>
                  <div className="step-content">
                    <h3 className="step-title">{step.name}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                  {index < progressSteps.length - 1 && (
                    <div className="step-connector"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive automotive solutions tailored to your needs.
            </p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => openServiceModal(service)}
              >
                <div className="service-image">
                  <img
                    src={encodeURI(service.image)}
                    alt={service.name}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = '/logo.webp';
                    }}
                  />
                  <div className="service-overlay">
                    <div className="service-icon" style={{ color: service.color }}>
                      <service.icon />
                    </div>
                  </div>
                </div>
                <div className="service-content">
                  <h3 className="service-name">{service.name}</h3>
                  <p className="service-description">{service.description}</p>
                  <div className="service-meta">
                    <span className="service-duration">
                      <FaClock /> {service.duration}
                    </span>
                    <span className="service-price">{service.price}</span>
                  </div>
                  <div className="service-features">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="feature-tag">
                        <FaCheckCircle /> {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="service-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeServiceModal}
          >
            <motion.div
              className="service-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeServiceModal}>
                <FaTimes />
              </button>
              
              <div className="modal-header">
                <div className="modal-image">
                  <img
                    src={encodeURI(selectedService.image)}
                    alt={selectedService.name}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = '/logo.webp';
                    }}
                  />
                </div>
                <div className="modal-title-section">
                  <div className="modal-icon" style={{ color: selectedService.color }}>
                    <selectedService.icon />
                  </div>
                  <h2 className="modal-title">{selectedService.name}</h2>
                  <p className="modal-subtitle">{selectedService.description}</p>
                </div>
              </div>

              <div className="modal-content">
                <div className="modal-section">
                  <h3 className="section-heading">Service Features</h3>
                  <ul className="features-list">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <FaCheckCircle className="feature-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h3 className="section-heading">Benefits</h3>
                  <div className="benefits-grid">
                    {selectedService.benefits.map((benefit, index) => (
                      <div key={index} className="benefit-item">
                        <FaStar className="benefit-icon" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="modal-section">
                  <h3 className="section-heading">Service Details</h3>
                  <div className="service-details">
                    <div className="detail-item">
                      <FaClock className="detail-icon" />
                      <span className="detail-label">Duration:</span>
                      <span className="detail-value">{selectedService.duration}</span>
                    </div>
                    <div className="detail-item">
                      <FaShieldAlt className="detail-icon" />
                      <span className="detail-label">Price:</span>
                      <span className="detail-value">{selectedService.price}</span>
                    </div>
                    <div className="detail-item">
                      <FaLeaf className="detail-icon" />
                      <span className="detail-label">Eco-Friendly:</span>
                      <span className="detail-value">Yes</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-actions">
                <button className="btn btn-primary">Book This Service</button>
                <button className="btn btn-outline">Learn More</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;

