// Minimal service worker to fulfill PWA install criteria
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Let network handle all Apps Script API calls directly
  event.respondWith(fetch(event.request));
});
