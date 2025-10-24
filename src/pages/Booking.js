import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCar, 
  FaCalendarAlt, 
  FaUser, 
  FaCheckCircle,
  FaArrowLeft,
  FaArrowRight,
  FaWrench,
  FaTint,
  FaCog,
  FaHammer,
  FaPaintBrush,
  FaTools
} from 'react-icons/fa';
import './Booking.css';

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    services: [],
    date: '',
    time: '',
    carInfo: {
      make: '',
      model: '',
      year: '',
      licensePlate: '',
      color: '',
      mileage: ''
    },
    contactInfo: {
      name: '',
      email: '',
      phone: '',
      address: ''
    },
    paymentMethod: '',
    specialRequests: ''
  });

  const steps = [
    { id: 1, title: 'Choose Services', icon: FaWrench, description: 'Select the services you need' },
    { id: 2, title: 'Select Date & Time', icon: FaCalendarAlt, description: 'Pick your preferred appointment' },
    { id: 3, title: 'Contact Details', icon: FaUser, description: 'Your contact information' },
    { id: 4, title: 'Confirmation', icon: FaCheckCircle, description: 'Review and confirm' }
  ];

  const services = [
    {
      id: 1,
      name: 'Car Service',
      icon: FaWrench,
      color: '#1e3a8a',
      price: '₹2,500',
      duration: '2-4 hours',
      description: 'Regular maintenance and inspection'
    },
    {
      id: 2,
      name: 'Washing',
      icon: FaTint,
      color: '#3b82f6',
      price: '₹500',
      duration: '1-2 hours',
      description: 'Professional car washing'
    },
    {
      id: 3,
      name: 'Engine Work',
      icon: FaCog,
      color: '#dc2626',
      price: '₹5,000',
      duration: '1-3 days',
      description: 'Engine diagnostics and repair'
    },
    {
      id: 4,
      name: 'Mechanical',
      icon: FaTools,
      color: '#059669',
      price: '₹3,000',
      duration: '2-6 hours',
      description: 'Brake and suspension work'
    },
    {
      id: 5,
      name: 'Body & Paint',
      icon: FaHammer,
      color: '#7c3aed',
      price: '₹1,500',
      duration: '1-5 days',
      description: 'Dent removal and painting'
    },
    {
      id: 6,
      name: 'Accessories',
      icon: FaPaintBrush,
      color: '#ea580c',
      price: '₹1,000',
      duration: '2-4 hours',
      description: 'Installation and customization'
    }
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM'
  ];

  const handleServiceToggle = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service.id)
        ? prev.services.filter(id => id !== service.id)
        : [...prev.services, service.id]
    }));
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNestedInputChange = (parent, field, value) => {
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: value
      }
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Prices removed from booking flow

  const getSelectedServices = () => {
    return services.filter(service => formData.services.includes(service.id));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="step-content">
            <h3 className="step-title">Select Services</h3>
            <p className="step-description">Choose the services you need for your vehicle</p>
            <div className="services-grid">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  className={`service-option ${formData.services.includes(service.id) ? 'selected' : ''}`}
                  onClick={() => handleServiceToggle(service)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="service-icon" style={{ color: service.color }}>
                    <service.icon />
                  </div>
                  <div className="service-info">
                    <h4 className="service-name">{service.name}</h4>
                    <p className="service-desc">{service.description}</p>
                    <div className="service-meta">
                      <span className="service-duration">{service.duration}</span>
                    </div>
                  </div>
                  <div className="service-checkbox">
                    {formData.services.includes(service.id) && <FaCheckCircle />}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="step-content">
            <h3 className="step-title">Select Date & Time</h3>
            <p className="step-description">Choose your preferred appointment date and time</p>
            <div className="datetime-selection">
              <div className="date-section">
                <label className="form-label">Select Date</label>
                <input
                  type="date"
                  className="form-input"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="time-section">
                <label className="form-label">Select Time</label>
                <div className="time-slots">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      className={`time-slot ${formData.time === time ? 'selected' : ''}`}
                      onClick={() => handleInputChange('time', time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="step-content">
            <h3 className="step-title">Contact Information</h3>
            <p className="step-description">Your contact details for the appointment</p>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.contactInfo.name}
                  onChange={(e) => handleNestedInputChange('contactInfo', 'name', e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-input"
                  value={formData.contactInfo.email}
                  onChange={(e) => handleNestedInputChange('contactInfo', 'email', e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-input"
                  value={formData.contactInfo.phone}
                  onChange={(e) => handleNestedInputChange('contactInfo', 'phone', e.target.value)}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="form-group full-width">
                <label className="form-label">Address</label>
                <textarea
                  className="form-textarea"
                  value={formData.contactInfo.address}
                  onChange={(e) => handleNestedInputChange('contactInfo', 'address', e.target.value)}
                  placeholder="Enter your complete address"
                  rows="3"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="step-content">
            <h3 className="step-title">Confirm Your Booking</h3>
            <p className="step-description">Review your appointment details</p>
            <div className="confirmation-summary">
              <div className="summary-section">
                <h4 className="summary-title">Selected Services</h4>
                <div className="services-list">
                  {getSelectedServices().map((service) => (
                    <div key={service.id} className="service-item">
                      <service.icon style={{ color: service.color }} />
                      <span>{service.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="summary-section">
                <h4 className="summary-title">Appointment Details</h4>
                <div className="appointment-details">
                  <div className="detail-item">
                    <span className="detail-label">Date:</span>
                    <span className="detail-value">{formData.date}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Time:</span>
                    <span className="detail-value">{formData.time}</span>
                  </div>
                </div>
              </div>
              <div className="summary-section">
                <h4 className="summary-title">Contact Information</h4>
                <div className="contact-details">
                  <div className="detail-item">
                    <span className="detail-label">Name:</span>
                    <span className="detail-value">{formData.contactInfo.name}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Phone:</span>
                    <span className="detail-value">{formData.contactInfo.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // Steps 5 and 6 removed (Payment and extra Confirmation merged into step 4)

      default:
        return null;
    }
  };

  return (
    <div className="booking-page">
      <div className="container">
        {/* Header */}
        <motion.div
          className="booking-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="page-title">Book Your Appointment</h1>
          <p className="page-subtitle">
            Schedule your vehicle service with our expert technicians
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="booking-progress">
          <div className="progress-steps">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`progress-step ${currentStep >= step.id ? 'active' : ''} ${currentStep > step.id ? 'completed' : ''}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="step-icon">
                  <step.icon />
                </div>
                <div className="step-info">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="booking-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {renderStepContent()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="booking-navigation">
          <button
            className="nav-button prev"
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            <FaArrowLeft />
            Previous
          </button>
          
          <div className="step-indicator">
            Step {currentStep} of {steps.length}
          </div>
          
          <button
            className="nav-button next"
            onClick={nextStep}
            disabled={currentStep === steps.length}
          >
            {currentStep === steps.length ? 'Complete Booking' : 'Next'}
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;

