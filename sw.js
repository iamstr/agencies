let cacheName = "almotahdatravellingltd-pwa";
let filesToCache = [
  "assets/css/argon.min.css",
  "assets/css/custom.min.css",
  "assets/js/bootstrap.bundle.min.js",
  "https://code.jquery.com/jquery-3.6.0.min.js",
  "assets/js/argon.min.js",
  "assets/js/custom.min.js",
  "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700",
  "assets/icons/abstract-circle-1.svg",
  "assets/icons/abstract-circle-2.svg",
  "assets/icons/abstract-shape-1.svg",
  "assets/icons/abstract-shape-2.svg",
  "assets/logo/ALMOTAHDA.svg"
];

/* Start the service worker and cache all of the app's content */
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
