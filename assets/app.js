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

  const dateKey = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const anchorOf = date => 'd' + date.slice(5).replace('-', '');
  const parseDate = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };

  const taskHTML = t => {
    const action = t.href
      ? `<a href="${t.href}"${t.external ? ' target="_blank" rel="noopener"' : ''}>${t.action}</a>`
      : `<span>${t.action}</span>`;
    return `<article class="task${t.priority === 'urgent' ? ' urgent' : ''}"><div class="task-status">${t.label}</div><div><h4>${t.title}</h4><p>${t.note}</p></div>${action}</article>`;
  };

  const initHome = () => {
    const host = document.querySelector('[data-home-dynamic]');
    if (!host || !window.TRIP) return;
    const trip = window.TRIP;
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const start = parseDate(trip.start);
    const end = parseDate(trip.end);

    if (midnight < start) {
      const days = Math.ceil((start - midnight) / 86400000);
      host.innerHTML =
        `<div class="countdown"><span>出発まであと</span><strong>${days}</strong><span>日</span></div>` +
        `<div class="section-title"><h3>残タスク</h3><small>優先順</small></div>` +
        `<div class="task-list">${trip.tasks.map(taskHTML).join('')}</div>`;
    } else if (midnight <= end) {
      const key = dateKey(now);
      const day = trip.days.find(d => d.date === key) || trip.days[0];
      const label = day.date.slice(5).replace('-', '/');
      host.innerHTML =
        `<div class="today-card"><span class="today-label">今日の予定 · ${label}（${day.dow}）</span>` +
        `<div class="today-head"><h3>${day.title}</h3><span class="tag ${day.status === 'confirmed' ? 'confirmed' : 'pending'}">${day.statusLabel}</span></div>` +
        `<div class="action-row"><a class="action-link primary" href="schedule.html#${anchorOf(day.date)}">今日の行程を見る</a><a class="action-link" href="spots.html">予約・チケット</a></div></div>`;
    } else {
      host.innerHTML =
        `<div class="today-card"><span class="today-label">おかえりなさい</span>` +
        `<div class="today-head"><h3>旅のあとに</h3></div>` +
        `<p class="subtle">立替の精算はお金ページでまとめられます。CSVを家族で共有して最終確認を。</p>` +
        `<div class="action-row"><a class="action-link primary" href="budget.html">精算を確認する</a></div></div>`;
    }
  };

  const initScheduleChips = () => {
    const host = document.querySelector('[data-date-chips]');
    if (!host || !window.TRIP) return;
    const trip = window.TRIP;
    const key = dateKey(new Date());
    let todayAnchor = null;
    host.innerHTML = trip.days.map(d => {
      const dayNum = Number(d.date.slice(8, 10));
      const isToday = d.date === key;
      if (isToday) todayAnchor = anchorOf(d.date);
      return `<a class="date-chip${isToday ? ' current' : ''}" href="#${anchorOf(d.date)}">${dayNum}</a>`;
    }).join('');
    const btn = document.querySelector('[data-today-btn]');
    if (btn) {
      const target = todayAnchor || anchorOf(trip.days[0].date);
      if (!todayAnchor) btn.textContent = '先頭へ';
      btn.addEventListener('click', () => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  };

  const initSpotFilter = () => {
    const bar = document.querySelector('[data-spot-filter]');
    if (!bar) return;
    const sections = [...document.querySelectorAll('[data-city]')];
    bar.addEventListener('click', event => {
      const chip = event.target.closest('.filter-chip');
      if (!chip) return;
      const city = chip.dataset.filter;
      bar.querySelectorAll('.filter-chip').forEach(c => c.classList.toggle('active', c === chip));
      sections.forEach(sec => { sec.hidden = city !== 'all' && sec.dataset.city !== city; });
    });
  };

  initExchange();
  initBudget();
  initPacking();
  initHome();
  initScheduleChips();
  initSpotFilter();
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
})();
