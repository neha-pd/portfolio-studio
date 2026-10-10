(() => {
  const root = document.documentElement;
  root.classList.add('js');
  const button = document.querySelector('.theme-toggle');
  const label = document.querySelector('.theme-label');
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const current = () => root.dataset.theme || (media.matches ? 'dark' : 'light');
  const update = () => {
    const next = current() === 'dark' ? 'light' : 'dark';
    button.setAttribute('aria-label', `Switch to ${next} theme`);
    label.textContent = next === 'dark' ? 'Dark' : 'Light';
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = current() === 'dark' ? '#14231d' : '#eff3ef';
  };
  button.hidden = false;
  button.addEventListener('click', () => {
    root.dataset.theme = current() === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('neha-theme', root.dataset.theme); } catch {}
    update();
  });
  media.addEventListener('change', update);
  update();
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  menu.hidden = false;
  const close = () => { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); };
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('is-open')) { close(); menu.focus(); } });
  window.matchMedia('(min-width: 781px)').addEventListener('change', close);
})();
