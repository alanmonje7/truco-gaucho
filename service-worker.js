const CACHE_NAME = "truco-gaucho-v1";
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
  "./img/explicacion_truco.png",
  // Agregá aquí otros recursos si tenés más
];

// Instalar el Service Worker y guardar los archivos en caché
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Activar el Service Worker y eliminar cachés viejas si hay
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    })
  );
});

// Interceptar solicitudes para responder con caché si es posible
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
