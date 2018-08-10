// Note scope of the service worker is defined by its location in the 
// folder structure. Scope can be further limited when the service worker is
// registered if required.

self.addEventListener('install', function(event) {
  console.log('[Service Worker]: Installing service worker...', event);
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker]: Activating service worker...', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  console.log('[Service Worker]: Fetching something...', event);
  event.respondWith(fetch(event.request));
});
