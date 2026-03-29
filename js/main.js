/* Shared interactions — reveal, cursor, scroll effects, menu, toasts */

// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);

document.querySelectorAll('.reveal, .stagger-children').forEach((el) => {
  observer.observe(el);
});

// Cursor glow follower — desktop only, pauses when tab is hidden
const cursor = document.getElementById('cursor');

if (!window.matchMedia('(hover: none) and (pointer: coarse)').matches && cursor) {
  let x = 0, y = 0, tx = 0, ty = 0, raf;

  document.addEventListener('mousemove', (e) => {
    tx = e.clientX - 150;
    ty = e.clientY - 150;
    cursor.classList.add('visible');
  }, { passive: true });

  function cursorLoop() {
    x += (tx - x) * 0.1;
    y += (ty - y) * 0.1;
    cursor.style.transform = `translate(${x}px, ${y}px)`;
    raf = requestAnimationFrame(cursorLoop);
  }

  cursorLoop();

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else cursorLoop();
  });
}

// Nav scroll effect + orb parallax (one listener, rAF-throttled)
const nav = document.getElementById('mainNav');
const orb1 = document.querySelector('.orb-1');
const orb2 = document.querySelector('.orb-2');

window.addEventListener('scroll', () => {
  requestAnimationFrame(() => {
    const sy = window.pageYOffset;
    if (nav) nav.style.background = sy > 100 ? 'rgba(10,10,11,0.95)' : 'rgba(10,10,11,0.8)';
    if (orb1) orb1.style.transform = `translateY(${sy * 0.1}px)`;
    if (orb2) orb2.style.transform = `translateY(${sy * -0.05}px)`;
  });
}, { passive: true });

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    document.body.style.overflow = open ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// Toast notifications — used by contact form
window.showToast = function (msg, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const el = document.createElement('div');
  el.className = `toast ${type}`;

  const icon = type === 'success'
    ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
    : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>';

  el.innerHTML = `<span class="toast-icon">${icon}</span><span>${msg}</span>`;
  container.appendChild(el);

  requestAnimationFrame(() => el.classList.add('show'));

  setTimeout(() => {
    el.classList.remove('show');
    setTimeout(() => el.remove(), 400);
  }, 4000);
};

