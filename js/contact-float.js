document.addEventListener('DOMContentLoaded', function() {
  const openBtn = document.getElementById('openContactFloat');
  const menu = document.getElementById('contactFloatMenu');
  let open = false;

  function toggleMenu(e) {
    e.stopPropagation();
    open = !open;
    menu.classList.toggle('open', open);
    openBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  function closeMenu() {
    open = false;
    menu.classList.remove('open');
    openBtn.setAttribute('aria-expanded', 'false');
  }

  openBtn.addEventListener('click', toggleMenu);
  document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && e.target !== openBtn) closeMenu();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeMenu();
  });
});