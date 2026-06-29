const CACHE_NAME = 'japon-2026-v14';

// Esta lista será reemplazada automáticamente por el script de Python.
const ASSETS_TO_CACHE = [
  // PYTHON_INJECT_ASSETS_HERE
];

self.addEventListener('install', event => {
    // skipWaiting fuerza la activación inmediata del nuevo service worker
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('[Service Worker] Guardando archivos en caché...');
            return cache.addAll(ASSETS_TO_CACHE);
        })
        .catch(err => {
            console.error('[Service Worker] Error al cachear: ', err);
        })
    );
});

self.addEventListener('activate', event => {
    // Al activarse el nuevo service worker, borramos las cachés antiguas
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[Service Worker] Borrando caché antigua:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    // Estrategia: Cache First (Priorizar caché) para funcionar offline
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            const url = event.request.url;
            // No retornar sw.js ni urls de GitHub desde la caché
            if (response && !url.includes('sw.js') && !url.includes('raw.githubusercontent.com')) {
                return response;
            }
            
            // Si no está, hace la petición a la red original
            // Y de paso, clonamos la respuesta y la cacheamos dinámicamente
            return fetch(event.request).then(
                function(networkResponse) {
                    if(!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                        return networkResponse;
                    }

                    var responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME)
                        .then(function(cache) {
                            if (event.request.method === 'GET' && 
                                !url.startsWith('chrome-extension') &&
                                !url.includes('sw.js') &&
                                !url.includes('raw.githubusercontent.com')) {
                                cache.put(event.request, responseToCache);
                            }
                        });

                    return networkResponse;
                }
            );
        }).catch(() => {
            // Manejo de errores offline puros
        })
    );
});
