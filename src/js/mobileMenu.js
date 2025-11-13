const NAV_OPEN_CLASS = 'is-open';

const getElements = () => {
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  return { toggle, nav };
};

const setNavState = (nav, toggle, isOpen) => {
  if (!nav || !toggle) return;
  nav.classList.toggle(NAV_OPEN_CLASS, isOpen);
  toggle.setAttribute('aria-expanded', String(isOpen));
  document.body.classList.toggle('is-nav-open', isOpen);
};

const closeOnEscape = (event, nav, toggle) => {
  if (event.key === 'Escape') {
    setNavState(nav, toggle, false);
  }
};

const collapseOnLinkClick = (nav, toggle) => {
  if (!nav || !toggle) return;
  nav.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => setNavState(nav, toggle, false));
  });
};

const bindMatchMedia = (nav, toggle) => {
  const mq = window.matchMedia('(min-width: 48rem)');
  const handleChange = (event) => {
    if (event.matches) {
      setNavState(nav, toggle, false);
    }
  };

  if (typeof mq.addEventListener === 'function') {
    mq.addEventListener('change', handleChange);
  } else if (typeof mq.addListener === 'function') {
    mq.addListener(handleChange);
  }
};

const initMobileMenu = () => {
  const { toggle, nav } = getElements();

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = !nav.classList.contains(NAV_OPEN_CLASS);
    setNavState(nav, toggle, isOpen);
  });

  document.addEventListener('keydown', (event) => closeOnEscape(event, nav, toggle));
  collapseOnLinkClick(nav, toggle);
  bindMatchMedia(nav, toggle);
};

export default initMobileMenu;
