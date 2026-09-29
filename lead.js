// ── DATA ─────────────────────────────────────────────────────────────────

const weeklyData = [
  { name: 'Sam',    place: '4th', score: '9.2k',  height: '45%' },
  { name: 'Alex',   place: '2nd', score: '14.8k', height: '75%' },  // YOU
  { name: 'Casey',  place: '1st', score: '18.5k', height: '95%' },
  { name: 'Taylor', place: '3rd', score: '12.1k', height: '60%' },
  { name: 'Jordan', place: '5th', score: '8.4k',  height: '35%' },
];

const allTimeData = [
  { name: 'Sam',    place: '3rd', score: '42k',   height: '60%' },
  { name: 'Alex',   place: '4th', score: '38k',   height: '50%' },  // YOU
  { name: 'Casey',  place: '1st', score: '95k',   height: '95%' },
  { name: 'Taylor', place: '2nd', score: '67k',   height: '75%' },
  { name: 'Jordan', place: '5th', score: '29k',   height: '38%' },
];


// ── ELEMENTS ─────────────────────────────────────────────────────────────

const btnWeekly  = document.getElementById('btn-weekly');
const btnAllTime = document.getElementById('btn-alltime');
const bars       = document.querySelectorAll('#bar-chart .bar');
const labels     = document.querySelectorAll('#bar-chart [data-label]');


// ── TAB TOGGLE ────────────────────────────────────────────────────────────

function setActiveTab(active, inactive) {
  active.classList.add('active');
  active.classList.remove('inactive', 'text-slate-400');
  inactive.classList.add('inactive', 'text-slate-400');
  inactive.classList.remove('active', 'bg-primary', 'text-background-dark', 'shadow-lg');
}

function updateBars(data) {
  bars.forEach((bar, i) => {
    bar.style.height = '0%';
    // Stagger entrance
    setTimeout(() => {
      bar.style.height = data[i].height;
    }, i * 80);
  });
  labels.forEach((label, i) => {
    label.textContent = data[i].score;
  });
}

btnWeekly.addEventListener('click', () => {
  setActiveTab(btnWeekly, btnAllTime);
  btnWeekly.classList.add('bg-primary', 'text-background-dark', 'shadow-lg');
  updateBars(weeklyData);
});

btnAllTime.addEventListener('click', () => {
  setActiveTab(btnAllTime, btnWeekly);
  btnAllTime.classList.add('bg-primary', 'text-background-dark', 'shadow-lg');
  updateBars(allTimeData);
});


// ── BAR CHART ANIMATED ENTRANCE ON LOAD ──────────────────────────────────

window.addEventListener('DOMContentLoaded', () => {
  // Start bars at 0 then animate to their target heights
  bars.forEach(bar => { bar.style.height = '0%'; });

  setTimeout(() => {
    bars.forEach((bar, i) => {
      setTimeout(() => {
        bar.style.height = weeklyData[i].height;
      }, i * 100);
    });
  }, 200);
});


// ── LOG WASTE BUTTON ──────────────────────────────────────────────────────

document.getElementById('btn-log-waste').addEventListener('click', () => {
  window.location.href = 'logpage.html';
});
