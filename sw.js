const CACHE_NAME = 'apdcl-leave-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Let network handle Apps Script API calls directly
  event.respondWith(fetch(event.request));
});
