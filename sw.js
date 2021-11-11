let cacheName = "my-first-pwa";
let filesToCache = [ 
          
                    "assets/css/argon.min.css",
                    "assets/js/bootstrap.bundle.min.js",
                     "assets/js/argon.min.js",
                     "https://code.jquery.com/jquery-3.6.0.min.js",
          "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
];

/* Start the service worker and cache all of the app's content */
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
