// Año dinámico en footer
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll reveal accesible con IntersectionObserver
// Añade la clase .revealed cuando el elemento entra al viewport
(function(){
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return; // respetar usuarios sensibles

  const toReveal = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window) || !toReveal.length) {
    // Fallback: mostrar todo
    toReveal.forEach(el => el.classList.add('revealed'));
    return;
  }

  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});

  toReveal.forEach(el => obs.observe(el));
})();
