export default defineNuxtPlugin(nuxtApp => {
    if (process.client) {
      const disableDrag = (e) => e.preventDefault();
  
      document.addEventListener('dragstart', disableDrag, { passive: false });
      document.addEventListener('mousedown', (e) => {
        if (e.target.tagName === 'A' || e.target.tagName === 'IMG') {
          e.preventDefault();
        }
      }, { passive: false });
    }
});