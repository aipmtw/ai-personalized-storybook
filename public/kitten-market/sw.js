const CACHE_NAME = 'kitten-market-v3';

// Generate audio file URLs for all 11 pages (cover + 10 story + end)
const AUDIO_URLS = [];
for (let i = 1; i <= 11; i++) {
  AUDIO_URLS.push(`/kitten-market/audio/page-${i}-zh.mp3`);
  AUDIO_URLS.push(`/kitten-market/audio/page-${i}-en.mp3`);
}

const PRECACHE_URLS = [
  '/kitten-market/',
  '/kitten-market/index.html',
  '/kitten-market/book.html',
  '/kitten-market/css/style.css',
  '/shared/reader.js', '/kitten-market/js/data.js',
  '/kitten-market/manifest.json',
  'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700;900&display=swap',
  ...AUDIO_URLS
];

// Install: precache all assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS);
    }).then(() => self.skipWaiting())
  );
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: cache-first strategy
self.addEventListener('fetch', (event) => {
  // Skip non-GET and API requests
  if (event.request.method !== 'GET' || event.request.url.includes('/api/')) {
    return;
  }

  // Network-first for HTML pages (get latest version)
  if (event.request.mode === 'navigate' || event.request.url.endsWith('.html')) {
    event.respondWith(
      fetch(event.request).then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
        return response;
      }).catch(() => caches.match(event.request) || caches.match('/kitten-market/book.html'))
    );
    return;
  }

  // Cache-first for assets (css, js, audio, fonts)
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200) return response;
        const clone = response.clone();
        caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
        return response;
      }).catch(() => {});
    })
  );
});
