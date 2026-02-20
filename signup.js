// ─── Form Submission ─────────────────────────────────────────────────────────
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const fullName        = document.getElementById('fullName').value.trim();
    const email           = document.getElementById('email').value.trim();
    const password        = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!fullName || !email || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    // TODO: Replace this with your real API / backend call
    console.log('Form submitted:', { fullName, email });
    alert(`Welcome to EcoQuest, ${fullName}! Your quest begins now. 🌿`);
    
    // Navigate to start.html
    window.location.href = 'start.html';
});


// ─── Password visibility toggle (optional helper) ────────────────────────────
// Attach to any button with data-toggle-password="targetId"
document.querySelectorAll('[data-toggle-password]').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-toggle-password');
        const input    = document.getElementById(targetId);
        if (!input) return;
        input.type = input.type === 'password' ? 'text' : 'password';
    });
});