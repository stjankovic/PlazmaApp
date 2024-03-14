// plugins/disable-zoom.js

export default defineNuxtPlugin(nuxtApp => {
    if (process.client) {
      window.addEventListener('wheel', (e) => {
        if (e.ctrlKey) e.preventDefault();
      }, { passive: false });
  
      window.addEventListener('touchstart', (e) => {
        if (e.touches.length > 1) e.preventDefault();
      }, { passive: false });
  
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Control' || e.key === '+' || e.key === '-') e.preventDefault();
      }, { passive: false });
    }
  });
  