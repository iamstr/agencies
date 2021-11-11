let cacheName = "my-first-pwa";
let filesToCache = [ 
          
                    "assets/css/argon.css?v=1.40",
                    "assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js",
"assets/vendor/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js",
"assets/vendor/jquery.scrollbar/jquery.scrollbar.min.js",
"assets/vendor/jquery-scroll-lock/dist/jquery-scrollLock.min.js",
"assets/vendor/js-cookie/js.cookie.js",
"assets/js/argon.js?v=1.2.2",
"assets/vendor/jquery/dist/jquery.min.js"];

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
