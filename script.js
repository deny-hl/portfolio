document.querySelectorAll('.toggle__btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const group = btn.closest('.toggle');
    group.querySelector('.is-active')?.classList.remove('is-active');
    group.querySelectorAll('[role="tab"]').forEach(t => t.setAttribut('aria-selected', 'false'));
    btn.classList.add('is-active');
    btn.setAttribute('aria-selected', 'true');
  });
});