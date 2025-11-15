import '../scss/main.scss';

import initMobileMenu from './mobileMenu.js';
import initScrollAnimations from './scrollAnimations.js';
import initNavActiveSection from './navActiveSection.js';

const setCurrentYear = () => {
  const target = document.getElementById('js-current-year');
  if (target) {
    target.textContent = new Date().getFullYear();
  }
};

const initSmoothScroll = () => {
  // Enhance smooth scrolling for anchor links
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    });
  });
};

const init = () => {
  initMobileMenu();
  initScrollAnimations();
  initNavActiveSection();
  setCurrentYear();
  initSmoothScroll();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
