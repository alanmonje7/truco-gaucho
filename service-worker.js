const CACHE_NAME = "truco-gaucho-v2";
const urlsToCache = [
  "./",
  "./index.html",
  "./css/estilo_gaucho.css",
  "./manifest.json",
  "./img/fondo_gaucho.jpg",
  "./img/icon-192.png",
  "./img/icon-512.png",
  "./img/1espada.jpg",
  "./img/1basto.png",
  "./img/7espadas.jpg",
  "./img/7oro.jpg",
  "./img/explicacion_truco.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      )
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
