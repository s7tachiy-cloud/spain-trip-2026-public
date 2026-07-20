const CACHE = 'spain-trip-v4';
const ASSETS = [
  './', './index.html', './spots.html', './schedule.html', './budget.html', './prep.html',
  './assets/style.css', './assets/app.js', './assets/data.js', './assets/app-icon.svg', './assets/app-icon-180.png',
  './assets/sagrada-interior.jpg', './assets/park-guell-dragon.jpg'
];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))));
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE).then(cache => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match(event.request).then(response => response || caches.match('./index.html'))));
});
