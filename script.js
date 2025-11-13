'use strict';

// Handle mobile navigation toggle
const navToggle = document.querySelector('[data-nav-toggle]');
const siteNav = document.querySelector('[data-nav]');

const toggleNavigation = (forceOpen) => {
  if (!navToggle || !siteNav) return;

  const isOpen = typeof forceOpen === 'boolean' ? forceOpen : !siteNav.classList.contains('is-open');
  siteNav.classList.toggle('is-open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
};

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => toggleNavigation());

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => toggleNavigation(false));
  });

  const mediaQuery = window.matchMedia('(min-width: 768px)');
  const handleViewportChange = (event) => {
    if (event.matches) {
      toggleNavigation(false);
    }
  };

  if (typeof mediaQuery.addEventListener === 'function') {
    mediaQuery.addEventListener('change', handleViewportChange);
  } else if (typeof mediaQuery.addListener === 'function') {
    mediaQuery.addListener(handleViewportChange);
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      toggleNavigation(false);
    }
  });
}

// Set current year in footer
const currentYear = document.getElementById('current-year');
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}