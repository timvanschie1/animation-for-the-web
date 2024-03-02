const ctaEl = document.querySelector('.js-cta');

if (ctaEl) {
  ctaEl.addEventListener('click', e => {
    e.preventDefault();
    e.target.classList.add('cta--pressed');

    setTimeout(() => {
      window.location.href = e.target.href;
    }, 30);
  })
}