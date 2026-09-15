export function initMotion() {
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const desktop = matchMedia('(min-width: 901px)');
  const header = document.querySelector('.site-header');
  const pictures = [...document.querySelectorAll('[data-parallax]')];
  let scheduled = false;
  let observer;
  function draw() {
    scheduled = false;
    header.classList.toggle('is-scrolled', scrollY > 80);
    const range = document.documentElement.scrollHeight - innerHeight;
    header.style.setProperty('--reading-progress', range > 0 ? Math.min(1, scrollY / range) : 0);
    const links = [...document.querySelectorAll('#navegacao a[href^="#"]')];
    let current = '#inicio';
    for (const section of document.querySelectorAll('main section[id]')) {
      if (section.getBoundingClientRect().top <= 240) current = '#' + section.id;
    }
    links.forEach(link => { if (link.hash === current) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
    for (const picture of pictures) {
      if (preference.matches || !desktop.matches) { picture.style.transform = ''; continue; }
      const rect = picture.parentElement.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > innerHeight) continue;
      const offset = Math.max(-12, Math.min(12, (innerHeight / 2 - rect.top - rect.height / 2) * .035));
      picture.style.transform = `translateY(${offset}px)`;
    }
  }
  const update = () => { if (!scheduled) { scheduled = true; requestAnimationFrame(draw); } };
  function reveal() {
    observer?.disconnect();
    document.querySelectorAll('.reveal-pending').forEach(el => el.classList.remove('reveal-pending'));
    if (preference.matches || !('IntersectionObserver' in window)) return;
    observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.remove('reveal-pending'); observer.unobserve(entry.target); }
    }), { threshold: .08 });
    document.querySelectorAll('[data-reveal]').forEach(el => {
      if (el.getBoundingClientRect().top > innerHeight) { el.classList.add('reveal-pending'); observer.observe(el); }
    });
  }
  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update, { passive: true });
  preference.addEventListener('change', () => { reveal(); update(); });
  desktop.addEventListener('change', update);
  // Focused controls must never wait for their section animation.
  document.addEventListener('focusin', event => event.target.closest('[data-reveal]')?.classList.remove('reveal-pending'));
  reveal(); update();
}
