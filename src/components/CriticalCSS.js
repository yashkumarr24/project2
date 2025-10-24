import { useEffect } from 'react';

const CriticalCSS = () => {
  useEffect(() => {
    // Only inject if not already present
    if (document.getElementById('critical-css')) {
      return;
    }

    // Inject critical CSS immediately
    const criticalCSS = `
      .hero-section {
        min-height: 100vh;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      
      .hero-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
      }
      
      .hero-background img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
      
      .hero-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(30, 58, 138, 0.8) 0%, rgba(59, 130, 246, 0.6) 100%);
        z-index: 2;
      }
      
      .hero-content {
        position: relative;
        z-index: 3;
        text-align: center;
        color: white;
        padding: 2rem;
      }
      
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
      }
      
      .loading-spinner {
        width: 40px;
        height: 40px;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #1e3a8a;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 2rem auto;
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    
    try {
      // Create and inject style element
      const styleElement = document.createElement('style');
      styleElement.textContent = criticalCSS;
      styleElement.id = 'critical-css';
      
      // Insert at the beginning of head for highest priority
      if (document.head && document.head.firstChild) {
        document.head.insertBefore(styleElement, document.head.firstChild);
      } else if (document.head) {
        document.head.appendChild(styleElement);
      }
    } catch (error) {
      console.warn('Could not inject critical CSS:', error);
    }
    
    return () => {
      // Cleanup on unmount
      try {
        const element = document.getElementById('critical-css');
        if (element && element.parentNode) {
          element.parentNode.removeChild(element);
        }
      } catch (error) {
        console.warn('Could not remove critical CSS:', error);
      }
    };
  }, []);
  
  return null;
};

export default CriticalCSS;
