// ─── Custom Cursor ───────────────────────────────────────────────────────────
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
});

document.querySelectorAll('a, button, .cat-card, .step').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('expand'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('expand'));
});


// ─── Scroll Reveal ───────────────────────────────────────────────────────────
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


// ─── Animated Stat Counters ──────────────────────────────────────────────────
function animateNum(el, target, suffix = '') {
    const duration  = 2000;
    const startTime = performance.now();

    function update(now) {
        const elapsed  = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease     = 1 - Math.pow(1 - progress, 3);
        const current  = Math.floor(ease * target * 10) / 10;

        el.textContent = current + suffix;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            el.textContent = target + suffix;
        }
    }

    requestAnimationFrame(update);
}

const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNums = document.querySelectorAll('.stat-num');
            animateNum(statNums[0], 2.3, 'B');
            animateNum(statNums[1], 32,  '%');
            animateNum(statNums[2], 75,  '%');
            statsObserver.disconnect();
        }
    });
}, { threshold: 0.5 });

statsObserver.observe(document.querySelector('.stats'));