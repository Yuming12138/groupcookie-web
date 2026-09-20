(() => {
  const header = document.querySelector('.site-header');
  const menu = document.querySelector('#mobile-menu-toggle');
  const icons = () => { if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.8 } }); };
  if (menu && header) {
    menu.addEventListener('click', () => {
      const open = header.classList.toggle('mobile-open');
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? '关闭导航' : '打开导航');
    });
    header.querySelectorAll('.site-nav a').forEach((link) => link.addEventListener('click', () => {
      header.classList.remove('mobile-open');
      menu.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-label', '打开导航');
    }));
  }
  icons();
})();
