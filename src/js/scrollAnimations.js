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
    observer.observe(element);
  });
};

export default initScrollAnimations;
