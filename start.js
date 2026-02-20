// ─── Start Quest button ───────────────────────────────────────────────────────
const startBtn = document.getElementById('startBtn');

startBtn.addEventListener('click', () => {
    // Loading state
    startBtn.disabled = true;
    startBtn.textContent = 'Loading your quest…';
    startBtn.style.opacity = '0.75';
    startBtn.style.cursor  = 'not-allowed';

    // Navigate to page.html
    setTimeout(() => {
        window.location.href = 'page.html';
    }, 1500);
});

// ─── Bottom nav active state ──────────────────────────────────────────────────
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.forEach(l => {
            l.classList.remove('text-primary');
            l.classList.add('text-slate-400');
        });
        link.classList.remove('text-slate-400');
        link.classList.add('text-primary');
    });
});