import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaCar, 
  FaWrench, 
  FaTint, 
  FaCog, 
  FaHammer, 
  FaPaintBrush, 
  FaStar,
  FaQuoteLeft
} from 'react-icons/fa';
import './Homepage.css';

const Homepage = () => {
  const localImages = {
    service: '/car service.jpg',
    ac: '/ac service.jpg',
    paint: '/dent and paint.jpg',
    wash: '/car washing and spa.jpg',
    tyres: '/tyres.jpg',
    battery: '/Batteries.jpg',
    detailing: '/Detailing Services.jpg',
    inspection: '/Car Inspections.jpg',
    lights: '/Windshield & Lights.jpg',
    suspension: '/Suspension & Fitments.jpg',
    clutch: '/mechanical work.jpg',
    insurance: '/Insurance Claims.jpg'
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
      text: 'Affordable Car Care - I own a Maruti Alto and it frequently needs battery replacement service. Have wasted a lot of money and time before a friend recommended Yash Car. Now I don\'t even spend half the amount in comparison to other car garages near me. The quality is top-notch too. Amazing job by team Yash Car!',
      rating: 5,
      source: 'Google',
      location: 'Yash Car - Benz Circle'
    },
    {
      name: 'Tarun Gupta',
      text: 'Friendly Staff - I strongly recommend Yash Car for quality car servicing. Getting a quality car service is really difficult. I have tried 6 different car garages near me and didn\'t find any mechanic who behaved professionally, except Yash Car workshop near me. Not just friendly mechanics, the spare parts they use are genuine.',
      rating: 5,
      source: 'Twitter',
      location: 'Yash Car - Auto Nagar'
    },
    {
      name: 'Karan Talwar',
      text: 'Best Among All - I was tired of roaming around searching for a good car spa and cleaning service. So I just booked my car service at Yash Car and they picked it up from my doorstep. The service was quick and they dropped the car back at my doorstep. And amazingly, the pick and drop service was free! Couldn\'t find any loophole, commendable work!',
      rating: 5,
      source: 'Facebook',
      location: 'Yash Car - Benz Circle'
    },
    {
      name: 'Sahil Khan',
      text: 'Saved My Day - My experience with Yash Car has been amazing. My car was broken down because of a failed battery, and I was just stuck. I called them for a pick-up and they were there in no time. Truly a time and money-saving experience!',
      rating: 5,
      source: 'Facebook',
      location: 'Yash Car - Auto Nagar'
    }
  ];

  const pricing = [
    { service: 'Car Inspection/Diagnostics', price: '499', savings: '15%' },
    { service: 'Inspection', price: '499', savings: '25%' },
    { service: 'Door Glass Replacement', price: '850', savings: '30%' },
    { service: 'Basic Car Service', price: '1,999', savings: '40%' },
    { service: 'AC Service', price: '2,499', savings: '35%' },
    { service: 'Denting & Painting', price: '3,999', savings: '30%' }
  ];

  const particleConfigs = Array.from({ length: 28 }).map((_, index) => {
    const size = Math.random() * 3 + 1; // 1px - 4px
    const left = Math.random() * 100; // 0% - 100%
    const delay = Math.random() * 6; // 0s - 6s
    const duration = 5 + Math.random() * 6; // 5s - 11s
    const blur = Math.random() * 3; // subtle glow sizes
    const opacity = 0.25 + Math.random() * 0.5; // 0.25 - 0.75
    return { id: index, size, left, delay, duration, blur, opacity };
  });

  return (
    <div className="homepage">
      {/* Particle Animation */}
      <div className="particles">
        {particleConfigs.map(p => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              opacity: p.opacity,
              boxShadow: `0 0 ${Math.max(4, p.size * 3 + p.blur)}px rgba(255,255,255,0.3)`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src="/jeep-hero.jpg?v=3" alt="Jeep in misty palm forest" />
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
              <h1 className="hero-title">Experience The Best Car Services</h1>
              <p className="hero-description">
                Choose from a wide assortment of car services from periodic car servicing, car care services, 
                wheel care services, cashless insurance claims and much more!
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">4.0/5</span>
                  <span className="stat-label">Rating</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">150000+</span>
                  <span className="stat-label">Reviews</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">2 Million+</span>
                  <span className="stat-label">Happy Customers</span>
                </div>
              </div>
              <div className="hero-buttons">
                <Link to="/booking" className="btn btn-primary">
                  Book Service
                </Link>
                <Link to="/services" className="btn btn-outline">
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Car Services Available</h2>
            <p className="section-subtitle">
              Choose from a wide assortment of car services from periodic car servicing, car care services, 
              wheel care services, cashless insurance claims and much more!
            </p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="service-image">
                  <img
                    src={encodeURI(service.image)}
                    alt={service.name}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = '/logo.png';
                    }}
                  />
                </div>
                <div className="service-content">
                  <div className="service-header">
                    <service.icon className="service-icon" />
                    <h3 className="service-name">{service.name}</h3>
                  </div>
                  {service.tagline && (
                    <p className="service-tagline">{service.tagline}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">How Yash Car Works?</h2>
          </motion.div>

          <div className="steps-grid">
            {[
              {
                step: '1',
                title: 'Select The Perfect Car Service',
                description: 'From Yash Car\'s broad portfolio of services',
                icon: FaCar
              },
              {
                step: '2',
                title: 'Schedule Free Doorstep Pick-up',
                description: 'We offer free pick up and drop for all services booked',
                icon: FaCog
              },
              {
                step: '3',
                title: 'Track Your Car Service Real-Time',
                description: 'We will take care of everything from here!',
                icon: FaWrench
              },
              {
                step: '4',
                title: 'Earn While We Service',
                description: 'Spread the word! You get Rs.750. Your friends get Rs.750!',
                icon: FaStar
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                className="step-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="step-number">{step.step}</div>
                <div className="step-icon">
                  <step.icon />
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {[
              { number: '3 Million+', label: 'Cars Serviced' },
              { number: '25 Lacs+', label: 'Happy Customers' },
              { number: '4.0', label: 'star Average Rating' },
              { number: '1000+', label: 'Touch Points In India' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">What Car Owners Say</h2>
          </motion.div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="testimonial-content">
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="testimonial-text">
                    <FaQuoteLeft className="quote-icon" />
                    {testimonial.text}
                  </p>
                  <div className="testimonial-author">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <span className="author-source">{testimonial.source}</span>
                  </div>
                  <div className="testimonial-location">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Car Services Price List</h2>
          </motion.div>

          <div className="pricing-table">
            <div className="pricing-header">
              <div className="pricing-col">Services Type</div>
              <div className="pricing-col">Price Starts From (₹)</div>
              <div className="pricing-col">Savings</div>
            </div>
            {pricing.map((item, index) => (
              <motion.div
                key={item.service}
                className="pricing-row"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="pricing-service">{item.service}</div>
                <div className="pricing-price">₹{item.price}</div>
                <div className="pricing-savings">{item.savings}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-title">Download Yash Car App</h2>
            <p className="cta-description">
              Choose and book a seamless car service experience and get upto Rs 1500 off with the Yash Car App
            </p>
            <div className="cta-buttons">
              <Link to="/booking" className="btn btn-primary">
                Book Service
              </Link>
              <Link to="/services" className="btn btn-outline">
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;

