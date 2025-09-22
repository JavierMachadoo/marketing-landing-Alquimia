// Botón flotante de contacto (abajo a la izquierda)
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("openContactFloat");
  const menu = document.getElementById("contactFloatMenu");

  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    menu.classList.toggle("open");
  });

  // Cierra el menú si se hace click fuera
  document.addEventListener("click", function (e) {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove("open");
    }
  });
});