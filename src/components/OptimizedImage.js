import React, { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  priority = false,
  placeholder = 'blur',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    skip: priority, // Skip lazy loading for priority images
  });

  const shouldLoad = priority || inView;

  useEffect(() => {
    if (shouldLoad && imgRef.current) {
      const img = imgRef.current;
      
      if (img.complete) {
        setIsLoaded(true);
      } else {
        const handleLoad = () => setIsLoaded(true);
        const handleError = () => setHasError(true);
        
        img.addEventListener('load', handleLoad);
        img.addEventListener('error', handleError);
        
        return () => {
          img.removeEventListener('load', handleLoad);
          img.removeEventListener('error', handleError);
        };
      }
    }
  }, [shouldLoad]);

  const imageStyle = {
    transition: 'opacity 0.3s ease-in-out',
    opacity: isLoaded ? 1 : 0,
    backgroundColor: placeholder === 'blur' ? '#f3f4f6' : 'transparent',
    ...(width && { width }),
    ...(height && { height }),
  };

  const placeholderStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#f3f4f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: isLoaded ? 0 : 1,
    transition: 'opacity 0.3s ease-in-out',
    pointerEvents: 'none',
  };

  return (
    <div 
      ref={ref} 
      className={`optimized-image-container ${className}`}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {shouldLoad && (
        <>
          <img
            ref={imgRef}
            src={hasError ? '/logo.webp' : src}
            alt={alt}
            style={imageStyle}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            {...props}
          />
          {!isLoaded && placeholder === 'blur' && (
            <div style={placeholderStyle}>
              <div 
                style={{
                  width: '40px',
                  height: '40px',
                  border: '3px solid #e5e7eb',
                  borderTop: '3px solid #1e3a8a',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                }}
              />
            </div>
          )}
        </>
      )}
      
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default OptimizedImage;
