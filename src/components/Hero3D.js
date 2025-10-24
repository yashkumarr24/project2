import React from 'react';
import { motion } from 'framer-motion';
import './Hero3D.css';

function CarModel() {
  return (
    <motion.div
      className="car-model"
      animate={{
        y: [0, -10, 0],
        rotateY: [0, 360, 0]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="car-body">
        <div className="car-roof"></div>
        <div className="car-wheels">
          <div className="wheel front-left"></div>
          <div className="wheel front-right"></div>
          <div className="wheel rear-left"></div>
          <div className="wheel rear-right"></div>
        </div>
        <div className="car-headlights">
          <div className="headlight left"></div>
          <div className="headlight right"></div>
        </div>
      </div>
    </motion.div>
  );
}

function Logo3D() {
  return (
    <motion.div
      className="logo-3d"
      animate={{
        rotateY: [0, 360],
        scale: [1, 1.1, 1]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <h1 className="logo-text-3d">YASH CAR</h1>
    </motion.div>
  );
}

function Particles() {
  return (
    <div className="particles-container">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="particle"
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );
}

function Hero3D() {
  return (
    <motion.div
      className="hero-3d-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="hero-3d-content">
        <CarModel />
        <Logo3D />
        <Particles />
      </div>
      
      <div className="hero-3d-overlay">
        <motion.div
          className="floating-elements"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="floating-icon">🔧</div>
        </motion.div>
        
        <motion.div
          className="floating-elements"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          style={{ right: '20%', top: '30%' }}
        >
          <div className="floating-icon">⚙️</div>
        </motion.div>
        
        <motion.div
          className="floating-elements"
          animate={{
            y: [0, -8, 0],
            rotate: [0, 3, 0]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          style={{ left: '15%', bottom: '20%' }}
        >
          <div className="floating-icon">🚗</div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero3D;

