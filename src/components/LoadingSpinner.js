import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ size = 'medium', color = '#1e3a8a' }) => {
  return (
    <div className={`loading-spinner ${size}`}>
      <div 
        className="spinner" 
        style={{ borderTopColor: color }}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
