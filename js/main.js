// Scroll reveal con Intersection Observer
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll("[data-reveal]");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target); // deja de observar una vez revelado
      }
    });
  }, {
    threshold: 0.15, // 15% visible para activar
  });

  revealElements.forEach(el => observer.observe(el));
});

// Smooth scroll para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
