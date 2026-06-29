/*==========================================================
  sw.js
  PART 1 OF N
==========================================================*/

const CACHE_NAME = "friend-v1.0.0";

const APP_ASSETS = [

    "./",
    "./index.html",

    "./dashboard.html",
    "./dashboard.css",

    "./scorecard.js",
    "./scorecard.css",

    "./leader-focus.js",
    "./leader-focus.css",

    "./guided-actions.js",
    "./guided-actions.css",

    "./analytics.js",
    "./analytics.css",

    "./maximo.js",
    "./maximo.css",

    "./executive-dashboard.js",
    "./executive-dashboard.css",

    "./executive-ai.js",
    "./executive-ai.css",

    "./notifications.js",
    "./notifications.css",

    "./voice-assistant.js",
    "./voice-assistant.css",

    "./dashboard-router.js",
    "./app.js",
    "./startup.js",

    "./manifest.json"
];

self.addEventListener("install", event => {

    event.waitUntil(

        caches
            .open(CACHE_NAME)
            .then(cache => cache.addAll(APP_ASSETS))

    );

    self.skipWaiting();

});

self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys().then(keys =>

            Promise.all(

                keys.map(key => {

                    if(key !== CACHE_NAME){

                        return caches.delete(key);

                    }

                })

            )

        )

    );

    self.clients.claim();

});

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)

            .then(response => {

                return response || fetch(event.request);

            })

    );

});

/*==========================================================
  End sw.js
==========================================================*/
