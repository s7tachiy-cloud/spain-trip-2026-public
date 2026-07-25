/* Phase 1.3.1 runtime contract: defaults only, never derives canonical data. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) {
    root.P1Contract = api;
    if (root.TRIP) api.applyDefaults(root.TRIP);
  }
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';

  const ENUMS = Object.freeze({
    inclusionStatus: ['adopted', 'provisional', 'on_site_candidate', 'omitted', 'undecided'],
    planningStatus: ['confirmed', 'draft', 'needs_information'],
    timeConstraint: ['fixed', 'window', 'flexible'],
    bookingRequirement: ['required', 'recommended', 'not_required', 'unknown'],
    bookingStatus: ['not_started', 'researching', 'held', 'confirmed', 'cancelled'],
    purchaseMode: ['advance', 'on_site', 'either', 'not_applicable', 'unknown'],
    paymentStatus: ['unpaid', 'paid', 'pay_on_site', 'refunded', 'not_applicable', 'unknown'],
    taskStatus: ['not_started', 'in_progress', 'blocked', 'done'],
    decisionStatus: ['undecided', 'comparing', 'provisional', 'decided'],
    timingKind: ['interval', 'point', 'window', 'untimed'],
    timingConfidence: ['confirmed', 'provisional', 'unknown'],
    dishCategory: ['tapas', 'rice', 'seafood', 'meat', 'stew', 'sweet', 'drink', 'other'],
    mealType: ['breakfast', 'lunch', 'dinner', 'snack', 'bar'],
    venueType: ['restaurant', 'bar', 'market', 'cafe', 'bakery', 'food_hall', 'other'],
    heaviness: ['light', 'medium', 'hearty', 'varies', 'unknown'],
    pace: ['quick', 'standard', 'long', 'varies', 'unknown'],
    priceBand: ['low', 'mid', 'high', 'special', 'unknown'],
    walkInSuitability: ['good', 'possible', 'poor', 'unknown'],
    visitInfoStatus: ['verified', 'provisional', 'unverified'],
    tripDateWindowStatus: ['published', 'provisional', 'unknown']
  });

  const LABELS = Object.freeze({
    inclusion: { adopted: '旅程に採用', provisional: '暫定採用', on_site_candidate: '現地判断候補', omitted: '意図的に見送り', undecided: '未判断' },
    planning: { confirmed: '内容確定', draft: '案として登録', needs_information: '情報不足' },
    timeConstraint: { fixed: '時刻拘束あり', window: '時間帯あり', flexible: '時間調整可能' },
    bookingRequirement: { required: '予約必須', recommended: '予約推奨', not_required: '予約不要', unknown: '予約要否 未確認' },
    booking: { not_started: '未着手', researching: '調査中', held: '仮押さえ', confirmed: '予約確定', cancelled: '取消済み' },
    purchaseMode: { advance: '事前購入', on_site: '現地購入', either: '事前・現地どちらも可', not_applicable: '購入対象外', unknown: '購入方法 未確認' },
    payment: { unpaid: '未払い', paid: '支払済み', pay_on_site: '現地払い', refunded: '返金済み', not_applicable: '支払対象外', unknown: '支払状態 未確認' },
    task: { not_started: '未着手', in_progress: '進行中', blocked: '要確認・保留', done: '完了' },
    decision: { undecided: '未判断', comparing: '比較中', provisional: '仮採用', decided: '決定' },
    timingConfidence: { confirmed: '確認済み', provisional: '暫定', unknown: '未確認' },
    timingKind: { interval: '時間区間', point: '時点予定', window: '時間帯内の予定', untimed: '時刻未登録' },
    visitInfoStatus: { verified: '確認済み', provisional: '暫定情報', unverified: '未確認' },
    tripDateWindowStatus: { published: '公表済み', provisional: '暫定情報', unknown: '未確認' }
  });

  const TONES = Object.freeze({
    inclusion: { adopted: 'success', provisional: 'info', on_site_candidate: 'info', omitted: 'muted', undecided: 'warning' },
    planning: { confirmed: 'success', draft: 'info', needs_information: 'warning' },
    timeConstraint: { fixed: 'fixed', window: 'info', flexible: 'neutral' },
    bookingRequirement: { required: 'warning', recommended: 'info', not_required: 'neutral', unknown: 'warning' },
    booking: { not_started: 'neutral', researching: 'info', held: 'info', confirmed: 'success', cancelled: 'muted' },
    purchaseMode: { advance: 'info', on_site: 'info', either: 'neutral', not_applicable: 'neutral', unknown: 'warning' },
    payment: { unpaid: 'warning', paid: 'success', pay_on_site: 'info', refunded: 'muted', not_applicable: 'neutral', unknown: 'warning' },
    task: { not_started: 'neutral', in_progress: 'info', blocked: 'warning', done: 'success' },
    decision: { undecided: 'warning', comparing: 'info', provisional: 'info', decided: 'success' },
    timingConfidence: { confirmed: 'success', provisional: 'info', unknown: 'warning' }
  });

  const clone = value => JSON.parse(JSON.stringify(value));
  const setIfMissing = (object, key, value) => {
    if (object[key] === undefined) object[key] = typeof value === 'function' ? value() : clone(value);
  };

  function applyDefaults(trip) {
    if (!trip || typeof trip !== 'object') throw new TypeError('TRIP object is required');
    setIfMissing(trip, 'schemaVersion', '1.3.1');
    setIfMissing(trip, 'enums', ENUMS);
    for (const [key, values] of Object.entries(ENUMS)) setIfMissing(trip.enums, key, values);
    setIfMissing(trip, 'statusLabels', LABELS);
    for (const [key, values] of Object.entries(LABELS)) setIfMissing(trip.statusLabels, key, values);
    setIfMissing(trip, 'statusTones', TONES);
    for (const [key, values] of Object.entries(TONES)) setIfMissing(trip.statusTones, key, values);
    for (const key of ['days', 'scheduleItems', 'places', 'bookings', 'preparationTasks', 'planningDecisions', 'coverageItems', 'dishes', 'mealOptions', 'sources', 'learningArticles']) setIfMissing(trip, key, []);
    for (const item of trip.scheduleItems) {
      setIfMissing(item, 'inclusionStatus', 'undecided');
      setIfMissing(item, 'planningStatus', 'needs_information');
      setIfMissing(item, 'timeConstraint', 'flexible');
      setIfMissing(item, 'bookingRequirement', 'unknown');
      setIfMissing(item, 'timing', { kind: 'untimed', start: null, end: null, durationIdealMinutes: null, durationMinimumMinutes: null, confidence: 'unknown' });
    }
    for (const place of trip.places) {
      setIfMissing(place, 'visitInfo', { status: 'unverified', durationIdealMinutes: null, durationMinimumMinutes: null, bookingRequirement: 'unknown', priceNotes: [], accessNotes: [], closureNotes: [], tripDateWindows: [], sourceIds: [] });
      setIfMissing(place, 'foodProfile', null);
    }
    trip.runtimeContract = Object.freeze({ canonicalFile: 'assets/phase1-canonical.js', contractFile: 'assets/phase1-contract.js', scheduleStatusFields: ['inclusionStatus', 'planningStatus', 'timeConstraint', 'bookingRequirement'], timingField: 'timing', legacyRuntimeUse: false });
    return trip;
  }

  function sourceIntegrity(sources) {
    const seen = new Map();
    const errors = [];
    for (const source of sources || []) {
      if (!source?.id) { errors.push('Source ID missing'); continue; }
      const serialized = JSON.stringify(source);
      if (seen.has(source.id)) errors.push(seen.get(source.id) === serialized ? `Duplicate Source ID: ${source.id}` : `Source metadata conflict: ${source.id}`);
      else seen.set(source.id, serialized);
    }
    return errors;
  }

  return { ENUMS, LABELS, TONES, applyDefaults, sourceIntegrity };
});
