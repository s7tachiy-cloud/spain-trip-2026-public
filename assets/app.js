(() => {
  const yen = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY', maximumFractionDigits: 0 });
  const rows = [...document.querySelectorAll('[data-budget-row]')];
  if (!rows.length) return;

  const initial = Object.fromEntries(rows.map(row => {
    const input = row.querySelector('.budget-input');
    return [input.id, Number(input.value || 0)];
  }));

  const update = () => {
    let planned = 0;
    let actual = 0;
    rows.forEach(row => {
      const plan = Number(row.dataset.planned || 0);
      const value = Number(row.querySelector('.budget-input').value || 0);
      planned += plan;
      actual += value;
      row.querySelector('[data-diff]').textContent = yen.format(value - plan);
    });
    document.querySelector('[data-planned-total]').textContent = yen.format(planned);
    document.querySelector('[data-actual-total]').textContent = yen.format(actual);
    document.querySelector('[data-diff-total]').textContent = yen.format(actual - planned);
    document.querySelector('[data-per-person]').textContent = yen.format(actual / 3);
    localStorage.setItem('spain-trip-budget', JSON.stringify(Object.fromEntries(rows.map(row => {
      const input = row.querySelector('.budget-input');
      return [input.id, Number(input.value || 0)];
    }))));
  };

  try {
    const saved = JSON.parse(localStorage.getItem('spain-trip-budget') || '{}');
    rows.forEach(row => {
      const input = row.querySelector('.budget-input');
      if (Object.hasOwn(saved, input.id)) input.value = saved[input.id];
      input.addEventListener('input', update);
    });
  } catch (_) {
    rows.forEach(row => row.querySelector('.budget-input').addEventListener('input', update));
  }

  document.querySelector('[data-reset-budget]')?.addEventListener('click', () => {
    rows.forEach(row => {
      const input = row.querySelector('.budget-input');
      input.value = initial[input.id];
    });
    update();
  });
  update();
})();
