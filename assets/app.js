(() => {
  const yen = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY', maximumFractionDigits: 0 });

  const initExchange = () => {
    const rateInput = document.querySelector('#eur-rate');
    const amountInput = document.querySelector('#eur-amount');
    if (!rateInput || !amountInput) return;
    const savedRate = Number(localStorage.getItem('spain-trip-eur-rate'));
    if (savedRate > 0) rateInput.value = savedRate;
    const update = () => {
      const rate = Math.max(0, Number(rateInput.value || 0));
      const amount = Math.max(0, Number(amountInput.value || 0));
      document.querySelector('[data-eur-result]').textContent = yen.format(rate * amount);
      document.querySelectorAll('[data-eur-quick]').forEach(el => {
        el.textContent = yen.format(rate * Number(el.dataset.eurQuick));
      });
      if (rate > 0) localStorage.setItem('spain-trip-eur-rate', String(rate));
    };
    rateInput.addEventListener('input', update);
    amountInput.addEventListener('input', update);
    update();
  };

  const initBudget = () => {
    const rows = [...document.querySelectorAll('[data-budget-row]')];
    if (!rows.length) return;
    const storageKey = 'spain-trip-budget-v3';
    const initial = Object.fromEntries(rows.map(row => {
      const input = row.querySelector('.budget-input');
      return [input.id, { amount: Number(input.value || 0), plannedPayer: '未定', actualPayer: '未設定' }];
    }));
    let saved = {};
    try { saved = JSON.parse(localStorage.getItem(storageKey) || '{}'); } catch (_) { saved = {}; }
    rows.forEach(row => {
      const input = row.querySelector('.budget-input');
      const planPayer = row.querySelector('.planned-payer');
      const actualPayer = row.querySelector('.actual-payer');
      if (saved[input.id]) {
        input.value = Number(saved[input.id].amount || 0);
        planPayer.value = saved[input.id].plannedPayer || '未定';
        actualPayer.value = saved[input.id].actualPayer || '未設定';
      }
    });

    const snapshot = () => Object.fromEntries(rows.map(row => {
      const input = row.querySelector('.budget-input');
      return [input.id, {
        amount: Number(input.value || 0),
        plannedPayer: row.querySelector('.planned-payer').value,
        actualPayer: row.querySelector('.actual-payer').value
      }];
    }));

    const update = () => {
      let planned = 0, actual = 0, parent = 0, self = 0, unassigned = 0;
      rows.forEach(row => {
        const plan = Number(row.dataset.planned || 0);
        const value = Number(row.querySelector('.budget-input').value || 0);
        const payer = row.querySelector('.actual-payer').value;
        planned += plan;
        actual += value;
        if (payer === '親') parent += value;
        else if (payer === '自分') self += value;
        else unassigned += value;
        row.querySelector('[data-diff]').textContent = yen.format(value - plan);
      });
      document.querySelector('[data-planned-total]').textContent = yen.format(planned);
      document.querySelector('[data-actual-total]').textContent = yen.format(actual);
      document.querySelector('[data-diff-total]').textContent = yen.format(actual - planned);
      document.querySelector('[data-per-person]').textContent = yen.format(actual / 3);
      document.querySelector('[data-parent-total]').textContent = yen.format(parent);
      document.querySelector('[data-self-total]').textContent = yen.format(self);
      document.querySelector('[data-unassigned-total]').textContent = yen.format(unassigned);
      localStorage.setItem(storageKey, JSON.stringify(snapshot()));
    };

    rows.forEach(row => row.querySelectorAll('input, select').forEach(control => control.addEventListener('input', update)));
    document.querySelector('[data-reset-budget]')?.addEventListener('click', () => {
      rows.forEach(row => {
        const input = row.querySelector('.budget-input');
        input.value = initial[input.id].amount;
        row.querySelector('.planned-payer').value = initial[input.id].plannedPayer;
        row.querySelector('.actual-payer').value = initial[input.id].actualPayer;
      });
      update();
    });
    document.querySelector('[data-export-budget]')?.addEventListener('click', () => {
      const lines = [['カテゴリ','項目','予定額','予定支払者','実績額','実際の支払者','差分','方法']];
      rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const plan = Number(row.dataset.planned || 0);
        const actualValue = Number(row.querySelector('.budget-input').value || 0);
        lines.push([cells[0].innerText.trim(), cells[1].innerText.trim(), plan, row.querySelector('.planned-payer').value, actualValue, row.querySelector('.actual-payer').value, actualValue - plan, cells[7].innerText.trim()]);
      });
      const csv = '\uFEFF' + lines.map(line => line.map(value => `"${String(value).replaceAll('"', '""')}"`).join(',')).join('\r\n');
      const link = document.createElement('a');
      link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
      link.download = 'spain-trip-budget.csv';
      link.click();
      URL.revokeObjectURL(link.href);
    });
    update();
  };

  const initPacking = () => {
    const items = [...document.querySelectorAll('[data-pack-item]')];
    if (!items.length) return;
    const key = 'spain-trip-packing-v1';
    let saved = [];
    try { saved = JSON.parse(localStorage.getItem(key) || '[]'); } catch (_) { saved = []; }
    items.forEach((item, index) => { item.checked = Boolean(saved[index]); });
    const update = () => {
      const state = items.map(item => item.checked);
      localStorage.setItem(key, JSON.stringify(state));
      const done = state.filter(Boolean).length;
      document.querySelector('[data-pack-progress]').textContent = `${done} / ${items.length}`;
      items.forEach(item => item.closest('.packing-item').classList.toggle('done', item.checked));
    };
    items.forEach(item => item.addEventListener('change', update));
    update();
  };

  initExchange();
  initBudget();
  initPacking();
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
})();
