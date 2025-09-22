document.addEventListener('DOMContentLoaded', function() {
  const openBtn = document.getElementById('openContactFloat');
  const menu = document.getElementById('contactFloatMenu');
  let open = false;

  function toggleMenu(e) {
    e.stopPropagation();
    open = !open;
    menu.classList.toggle('open', open);
    openBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) {
      // Focus first link for accessibility
      const firstLink = menu.querySelector('a');
      if (firstLink) setTimeout(() => firstLink.focus(), 100);
    }
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
    // Tab trap: al tab fuera del menú, se cierra
    if (open && e.key === 'Tab') {
      const focusables = menu.querySelectorAll('a');
      if (focusables.length) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (document.activeElement === last && !e.shiftKey) {
          e.preventDefault();
          first.focus();
        }
        if (document.activeElement === first && e.shiftKey) {
          e.preventDefault();
          last.focus();
        }
      }
    }
  });
});