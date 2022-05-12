const cache_NAME = 'V1OsloBS';
const cache_FILES = [
    './map.html',
    './css/style.css',
    './js/app.js',
]

self.addEventListener('install', (e) => {
    console.log('service worker installed');
    e.waitUntil(
        caches
            .open(cache_NAME)
            .then(cache => {
                console.log('SW is caching');
                cache.addAll(cache_FILES);
            })
            .then(() => self.skipWaiting())
            .catch(err => console.log(err)) //hvis koden ikke fungere så har vi lagt til error får å fange feilen
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        fetch(e.request).catch(() => {
            return caches.match(e.request)
        })
    )
});