var cacheName = 'Additives_v1';
var contentToCache = [
    './',
    'favicon.png',
    'global.css',
    'index.html',
    'runWorker.js',
    'sw.js',
    'webmanifest.json',
    'build/bundle.css',
    'build/bundle.js',
    'img/corazon.png',
    'img/SAD.png',
    'img/victims.jpg'
];


// Installing Service Worker
self.addEventListener('install', function(e) {
  console.log('[Service Worker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[Service Worker] Caching...');
      return cache.addAll(contentToCache);
    })
  );
});

// Fetching content using Service Worker
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(r) {
      console.log('[Service Worker] Fetching resource: '+e.request.url);
      return r || fetch(e.request).then(function(response) {
        return caches.open(cacheName).then(function(cache) {
          console.log('[Service Worker] Caching new resource: ' + e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});