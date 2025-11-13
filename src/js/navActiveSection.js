const ACTIVE_CLASS = 'nav__link--active';

const getSections = () => Array.from(document.querySelectorAll('[data-section]'));
const getLinks = () => Array.from(document.querySelectorAll('[data-nav-link]'));

const setActiveLink = (id) => {
  getLinks().forEach((link) => {
    const matches = link.getAttribute('data-nav-link') === id;
    link.classList.toggle(ACTIVE_CLASS, matches);
    if (matches) {
      link.setAttribute('aria-current', 'true');
    } else {
      link.removeAttribute('aria-current');
    }
  });
};

const initFallback = () => {
  const onScroll = () => {
    const sections = getSections();
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    const current = sections.find((section) => section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition);
    if (current) {
      setActiveLink(current.getAttribute('data-section'));
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
};

const initNavActiveSection = () => {
  const sections = getSections();
  if (!sections.length) return;

  if (typeof IntersectionObserver === 'undefined') {
    initFallback();
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('data-section');
        if (id) {
          setActiveLink(id);
        }
      }
    });
  }, {
    threshold: 0.6,
  });

  sections.forEach((section) => observer.observe(section));
};

export default initNavActiveSection;
