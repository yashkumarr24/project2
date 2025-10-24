import { useEffect } from 'react';

const PreloadManager = () => {
  useEffect(() => {
    // Ensure preloaded images are used immediately
    const preloadedImages = [
      '/jeep-hero.webp'
    ];

    preloadedImages.forEach(src => {
      // Create image element to trigger immediate usage
      const img = new Image();
      img.src = src;
      
      // Force browser to recognize the image as used
      img.onload = () => {
        console.log(`✅ Preloaded image ready: ${src}`);
      };
      
      img.onerror = () => {
        console.warn(`❌ Failed to preload: ${src}`);
      };
    });

    // Clean up any unused preload warnings
    const removeUnusedPreloads = () => {
      const preloadLinks = document.querySelectorAll('link[rel="preload"][as="image"]');
      preloadLinks.forEach(link => {
        const href = link.getAttribute('href');
        const isUsed = document.querySelector(`img[src="${href}"], img[src*="${href}"]`);
        
        if (!isUsed) {
          console.warn(`Removing unused preload: ${href}`);
          link.remove();
        }
      });
    };

    // Check after a short delay to allow components to mount
    const timeoutId = setTimeout(removeUnusedPreloads, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return null;
};

export default PreloadManager;
