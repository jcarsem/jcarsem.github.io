// NUNYA Labs Service Worker — Cache static assets
const CACHE_NAME = 'nunya-labs-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/css/nunya.min.css',
  '/js/nunya.min.js',
  '/images/nunya-logo-nav.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
