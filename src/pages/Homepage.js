import React from 'react';
import { Link } from 'react-router-dom';
import OptimizedHero from '../components/OptimizedHero';
import { 
  FaCar, 
  FaTint, 
  FaWrench, 
  FaCog, 
  FaHammer, 
  FaPaintBrush, 
  FaStar,
  FaQuoteLeft
} from 'react-icons/fa';
import SEOHead from '../components/SEOHead';
import './Homepage.css';

const Homepage = () => {
  const localImages = {
    service: '/car service.webp',
    ac: '/ac service.webp',
    paint: '/dent and paint.webp',
    wash: '/car washing and spa.webp',
    tyres: '/tyres.webp',
    battery: '/Batteries.webp',
    detailing: '/Detailing Services.webp',
    inspection: '/Car Inspections.webp',
    lights: '/Windshield & Lights.webp',
    suspension: '/Suspension & Fitments.webp',
    clutch: '/mechanical work.webp',
    insurance: '/Insurance Claims.webp'
  };

  const services = [
    { name: 'Car Services', icon: FaCar, image: localImages.service, tagline: 'Routine maintenance & check' },
    { name: 'AC Service & Repair', icon: FaCog, image: localImages.ac, tagline: 'Cooling diagnostics and fix' },
    { name: 'Denting & Painting', icon: FaHammer, image: localImages.paint, tagline: 'Restore dents, repaint shine' },
    { name: 'Car Spa & Cleaning', icon: FaTint, image: localImages.wash, tagline: 'Deep wash and detailing' },
    { name: 'Tyres & Wheel Care', icon: FaWrench, image: localImages.tyres, tagline: 'Alignment, balancing, rotation' },
    { name: 'Batteries', icon: FaCog, image: localImages.battery, tagline: 'Testing, jumpstart, replacement' },
    { name: 'Detailing Services', icon: FaPaintBrush, image: localImages.detailing, tagline: 'Polish, ceramic coat protection' },
    { name: 'Car Inspections', icon: FaCar, image: localImages.inspection, tagline: 'Full diagnostic and safety' },
    { name: 'Windshield & Lights', icon: FaCog, image: localImages.lights, tagline: 'Glass repair and lighting' },
    { name: 'Suspension & Fitments', icon: FaWrench, image: localImages.suspension, tagline: 'Shocks, struts, fittings' },
    { name: 'Clutch & Body Parts', icon: FaHammer, image: localImages.clutch, tagline: 'Clutch, panels, replacements' },
    { name: 'Insurance Claims', icon: FaCar, image: localImages.insurance, tagline: 'Hassle-free accident claims' }
  ];

  const testimonials = [
    {
      name: 'Palak Goel',
      rating: 5,
      text: 'Excellent service! My car runs like new after their maintenance. Highly professional team.',
      image: '/model.webp'
    },
    {
      name: 'Rajesh Kumar',
      rating: 5,
      text: 'Best car workshop in the area. Fair pricing and quality work. Recommended!',
      image: '/model.webp'
    },
    {
      name: 'Priya Sharma',
      rating: 4,
      text: 'Great experience with AC repair. Quick service and reasonable rates.',
      image: '/model.webp'
    }
  ];

  return (
    <div className="homepage">
      <SEOHead 
        title="Yash Car Workshop - Expert Automotive Services"
        description="Professional car service, AC repair, denting & painting, and automotive maintenance. Expert mechanics with 20+ years experience. Quality service you can trust."
        canonical="/"
      />

      {/* Optimized Hero Section - Zero Network Requests */}
      <OptimizedHero />

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Comprehensive automotive care for all your vehicle needs</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="service-card"
              >
                <div className="service-image">
                  <img
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = '/logo.webp';
                    }}
                  />
                </div>
                <div className="service-content">
                  <service.icon className="service-icon" />
                  <h3 className="service-title">{service.name}</h3>
                  <p className="service-tagline">{service.tagline}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {[
              { number: '20,000+', label: 'Cars Serviced' },
              { number: '15,000+', label: 'Happy Customers' },
              { number: '4.8', label: 'Star Average Rating' },
              { number: '20+', label: 'Years of Experience' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="stat-card"
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">Real feedback from satisfied customers</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <FaQuoteLeft className="quote-icon" />
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="star" />
                    ))}
                  </div>
                </div>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} loading="lazy" />
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-title">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Service Your Car?</h2>
            <p className="cta-subtitle">Book your appointment today and experience professional automotive care</p>
            <div className="cta-buttons">
              <Link to="/booking" className="btn-primary">
                Book Service Now
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
