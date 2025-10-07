const CACHE_NAME = "gangorvo-cache-v1";
const urlsToCache = [
  "/Gangorvo-/",
  "/Gangorvo-/index.html",
  "/Gangorvo-/style.css",
  "/Gangorvo-/script.js"
];

// Install
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
