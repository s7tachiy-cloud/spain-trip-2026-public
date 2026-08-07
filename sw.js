const CACHE = "spain-trip-itinerary-refresh-01-v1";
const SHELLS = [
  "./", "./index.html", "./schedule.html", "./prep.html", "./today.html",
  "./explore.html", "./learn.html", "./records.html", "./budget.html",
  "./decision.html", "./spots.html", "./info.html", "./food.html",
];
const ASSETS = [
  ...SHELLS,
  "./manifest.webmanifest",
  "./assets/style.css",
  "./assets/ux-rebuild-01.css",
  "./assets/ux-rebuild-03.css",
  "./assets/phase1-canonical.js",
  "./assets/hotel-candidates-3p-01.js",
  "./assets/ux-rebuild-03-data.js",
  "./assets/ux-rebuild-03-bridge.js",
  "./assets/ux-rebuild-04-data.js",
  "./assets/itinerary-refresh-01.js",
  "./assets/ux-rebuild-01.js",
  "./assets/ux-rebuild-03.js",
  "./assets/bootstrap.js",
  "./assets/app-icon.svg",
  "./assets/app-icon-180.png",
  "./assets/sagrada-interior.jpg",
  "./assets/park-guell-dragon.jpg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(fetch(event.request).then((response) => {
    if (response?.ok && new URL(event.request.url).origin === location.origin) {
      const copy = response.clone();
      caches.open(CACHE).then((cache) => cache.put(event.request, copy));
    }
    return response;
  }).catch(async () => {
    const exact = await caches.match(event.request);
    if (exact) return exact;
    if (event.request.mode === "navigate") {
      const url = new URL(event.request.url);
      const file = url.pathname.split("/").pop() || "index.html";
      const known = SHELLS.find((entry) => entry.endsWith(file));
      if (known) {
        const cached = await caches.match(known, { ignoreSearch: true });
        if (cached) return cached;
      }
      return caches.match("./index.html");
    }
    return caches.match(event.request, { ignoreSearch: true });
  }));
});
