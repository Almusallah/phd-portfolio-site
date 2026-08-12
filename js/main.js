document.documentElement.classList.add('ready');
const io = new IntersectionObserver((es) => {
  es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { rootMargin: '0px 0px -8% 0px', threshold: 0.04 });
document.querySelectorAll('[data-r]').forEach((el, i) => {
  el.style.transitionDelay = (Math.min(i % 6, 5) * 55) + 'ms';
  io.observe(el);
});
