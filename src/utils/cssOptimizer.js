// CSS optimization utilities
export const loadCSSAsync = (href) => {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = resolve;
    link.onerror = reject;
    document.head.appendChild(link);
  });
};

// Preload critical CSS
export const preloadCSS = (href) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'style';
  link.href = href;
  link.onload = function() {
    this.onload = null;
    this.rel = 'stylesheet';
  };
  document.head.appendChild(link);
};

// Remove unused CSS (basic implementation)
export const removeUnusedCSS = () => {
  const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
  const usedSelectors = new Set();
  
  // Collect all used selectors
  document.querySelectorAll('*').forEach(element => {
    if (element.className) {
      element.className.split(' ').forEach(className => {
        if (className.trim()) {
          usedSelectors.add(`.${className.trim()}`);
        }
      });
    }
    if (element.id) {
      usedSelectors.add(`#${element.id}`);
    }
  });
  
  return usedSelectors;
};

// Optimize font loading
export const optimizeFontLoading = () => {
  // Add font-display: swap to improve loading performance
  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-family: 'Montserrat';
      font-display: swap;
    }
  `;
  document.head.appendChild(style);
};
