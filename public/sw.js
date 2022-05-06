let STATIC_CACHE = "static-v1";
let DYNAMIC_CACHE = "dynamic-v2";

let cacheList = [
  "/",
  "/index.html"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      cache.addAll(cacheList).then(() => {
        console.log("cache added");
      });
    })
  );
});

self.addEventListener("activate",(e)=>{
  e.waitUntil(
    caches.keys().then((KeyList)=>{
      return KeyList.map((key)=>{
        if(key !== STATIC_CACHE && key !== DYNAMIC_CACHE){
          return caches.delete(key);
        }
      })
    })
  )
})

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      if (res) {
        return res;
      } else {
        return fetch(e.request)
          .then((res) => {
            return caches.open(DYNAMIC_CACHE)
            .then((cache)=>{
              cache.put(e.request.url, res.clone());
              return res;
            })
          });
      }
    })
  );
});
