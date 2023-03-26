const cacheName = "v1"

cacheAssets = [
    './index.html',
    './index.js',
    './style.css',
    './All_Projects.html'
]

self.addEventListener('install', e => {
    console.log("Service Worker : INSTALLED")

    e.waitUntil(
        caches.open(cacheName)
            .then((cache) => {
                console.log("Service Worker : CACHING")
                cache.addAll(cacheAssets)
            }).then(() => self.skipWaiting()
            
        ))
})

self.addEventListener('activate', e => {
    console.log("Service Worker : ACTIVATED")
})

// self.addEventListener('scroll', e=>{
//     displayNotification
// })