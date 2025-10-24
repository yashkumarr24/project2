import React, { memo } from 'react';
import { inlineHeroImage } from '../assets/inlineHeroImage';

const OptimizedHero = memo(() => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img 
          src={inlineHeroImage}
          alt="Professional automotive services - Yash Car Workshop" 
          loading="eager"
          fetchpriority="high"
          decoding="sync"
          width="1920"
          height="1080"
          style={{ 
            display: 'block', 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            willChange: 'auto'
          }}
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title">
              Professional Car Service & Repair
            </h1>
            <p className="hero-subtitle">
              Expert automotive care with 20+ years of experience. Quality service you can trust.
            </p>
            <div className="hero-buttons">
              <a href="/booking" className="btn-primary">
                Book Service Now
              </a>
              <a href="/contact" className="btn-secondary">
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

OptimizedHero.displayName = 'OptimizedHero';

export default OptimizedHero;
