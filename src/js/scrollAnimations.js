const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const revealClass = 'is-visible';

const createObserver = () => {
  if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
    document.querySelectorAll('[data-scroll]').forEach((element) => {
      element.classList.add(revealClass);
    });
    return null;
  }

  return new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(revealClass);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -10% 0px',
  });
};

const initScrollAnimations = () => {
  const observer = createObserver();
  if (!observer) return;

  document.querySelectorAll('[data-scroll]').forEach((element) => {
    const delay = element.getAttribute('data-scroll-delay');
    if (delay) {
      element.style.transitionDelay = `${parseInt(delay, 10)}ms`;
    }
    observer.observe(element);
  });
};

export default initScrollAnimations;
