// ── XP & CO2 RATES PER WASTE TYPE ────────────────────────────────────────
// xpRate: points per kg | co2Rate: kg CO2 offset per kg of waste

const wasteRates = {
  plastic:  { xpRate: 10, co2Rate: 1.5 },
  paper:    { xpRate: 8,  co2Rate: 1.0 },
  glass:    { xpRate: 6,  co2Rate: 0.8 },
  metal:    { xpRate: 12, co2Rate: 2.0 },
  organic:  { xpRate: 5,  co2Rate: 0.5 },
};


// ── ELEMENTS ─────────────────────────────────────────────────────────────

const wasteTypeSelect = document.getElementById('waste-type');
const wasteQtyInput   = document.getElementById('waste-quantity');
const previewXp       = document.getElementById('preview-xp');
const previewCo2      = document.getElementById('preview-co2');
const addBtn          = document.getElementById('btn-add-waste');


// ── LIVE PREVIEW CALCULATION ──────────────────────────────────────────────

function updatePreview() {
  const type = wasteTypeSelect.value;
  const qty  = parseFloat(wasteQtyInput.value);

  if (type && qty > 0 && wasteRates[type]) {
    const { xpRate, co2Rate } = wasteRates[type];
    const xp  = Math.round(qty * xpRate);
    const co2 = (qty * co2Rate).toFixed(2);

    previewXp.textContent  = xp;
    previewCo2.textContent = co2;

    // Flash green to signal update
    [previewXp, previewCo2].forEach(el => {
      el.classList.add('updated');
      setTimeout(() => el.classList.remove('updated'), 500);
    });
  } else {
    previewXp.textContent  = '--';
    previewCo2.textContent = '--';
  }
}

wasteTypeSelect.addEventListener('change', updatePreview);
wasteQtyInput.addEventListener('input', updatePreview);


// ── ADD WASTE BUTTON ──────────────────────────────────────────────────────

addBtn.addEventListener('click', () => {
  const type = wasteTypeSelect.value;
  const qty  = parseFloat(wasteQtyInput.value);

  // Validation
  if (!type) {
    wasteTypeSelect.focus();
    wasteTypeSelect.style.borderColor = '#e74c3c';
    setTimeout(() => wasteTypeSelect.style.borderColor = '', 1500);
    return;
  }

  if (!qty || qty <= 0) {
    wasteQtyInput.focus();
    wasteQtyInput.style.borderColor = '#e74c3c';
    setTimeout(() => wasteQtyInput.style.borderColor = '', 1500);
    return;
  }

  // Success feedback
  const originalHTML = addBtn.innerHTML;
  addBtn.innerHTML = `<span class="material-symbols-outlined">check_circle</span> Waste Logged!`;
  addBtn.style.filter = 'brightness(1.3)';
  addBtn.disabled = true;

  setTimeout(() => {
    addBtn.innerHTML = originalHTML;
    addBtn.style.filter = '';
    addBtn.disabled = false;

    // Reset form
    wasteTypeSelect.value = '';
    wasteQtyInput.value   = '';
    previewXp.textContent  = '--';
    previewCo2.textContent = '--';
  }, 1800);
});