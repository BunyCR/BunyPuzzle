const cacheName = 'wordzen-v1';
const assets = ['./', './index.html', './manifest.json', './192.png', './512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
