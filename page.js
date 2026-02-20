// ── BOTTOM NAV – ACTIVE STATE ────────────────────────────────────────────

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    navLinks.forEach(l => l.classList.remove('active', 'text-primary'));
    navLinks.forEach(l => l.classList.add('text-slate-400'));
    link.classList.add('active', 'text-primary');
    link.classList.remove('text-slate-400');
  });
});


// ── LOG WASTE BUTTON ─────────────────────────────────────────────────────

document.getElementById('btn-log-waste').addEventListener('click', () => {
  // Flash confirmation feedback
  const btn = document.getElementById('btn-log-waste');
  const original = btn.innerHTML;

  btn.innerHTML = `<span class="material-symbols-outlined">check_circle</span> LOGGED!`;
  btn.style.filter = 'brightness(1.3)';

  setTimeout(() => {
    btn.innerHTML = original;
    btn.style.filter = '';
  }, 1200);
});


// ── LEADERBOARD BUTTON ───────────────────────────────────────────────────

document.getElementById('btn-leaderboard').addEventListener('click', () => {
  // Activate Rankings tab in bottom nav
  navLinks.forEach(l => l.classList.remove('active', 'text-primary'));
  navLinks.forEach(l => l.classList.add('text-slate-400'));

  const rankingsLink = document.querySelector('[data-page="rankings"]');
  if (rankingsLink) {
    rankingsLink.classList.add('active', 'text-primary');
    rankingsLink.classList.remove('text-slate-400');
  }
});


// ── XP BAR ANIMATED ENTRANCE ─────────────────────────────────────────────

window.addEventListener('DOMContentLoaded', () => {
  const bar = document.getElementById('xp-bar');
  const targetWidth = bar.style.width;   // preserve value set in HTML

  // Start from 0 then animate to target on load
  bar.style.width = '0%';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      bar.style.width = targetWidth;
    });
  });
});