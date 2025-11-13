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

const init = () => {
  initMobileMenu();
  initScrollAnimations();
  initNavActiveSection();
  setCurrentYear();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
