// ─── LOG WASTE Button ──────────────────────────────────────────────────────
const btnLogWaste = document.getElementById('btn-log-waste');

btnLogWaste.addEventListener('click', () => {
    window.location.href = 'logpage.html';
});

// ─── View Leaderboard Button ───────────────────────────────────────────────
const btnLeaderboard = document.getElementById('btn-leaderboard');

btnLeaderboard.addEventListener('click', () => {
    window.location.href = 'lead.html';
});

// ─── Bottom Navigation Links ───────────────────────────────────────────────
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
