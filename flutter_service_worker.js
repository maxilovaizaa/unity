'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "98bc7d33cfb397158b229b27de381abc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d5fea8b6f8a6daec30f06b5ca192d6fc",
"/": "041a1537883acd0c6af803a976e18a99",
"main.dart.js": "e50d7d4b6e32b2aabe99bb6c584a90c0",
"manifest.json": "28a718183d98db438dbfa227ffbbf001",
"unity/Build/UnityLibrary.data": "b17574be4e28ef95c1f32e8a106ed6f6",
"unity/Build/UnityLibrary.framework.js": "e67e5724d71a97d464212e57e26e6953",
"unity/Build/UnityLibrary.loader.js": "fb71d028619e714657010c1a83ad1355",
"unity/Build/UnityLibrary.wasm": "1aa158896b596bc8612016a5fe78985e",
"unity/index.html": "041a1537883acd0c6af803a976e18a99",
"unity/StreamingAssets/UnityServicesProjectConfiguration.json": "1ffd80829af0214b859fcb806b282ecd",
"unity/TemplateData/favicon.ico": "f04ae07ad1b634a4152d2c8175134c56",
"unity/TemplateData/fullscreen-button.png": "489a5a9723567d8368c9810cde3dc098",
"unity/TemplateData/progress-bar-empty-dark.png": "781ae0583f8c2398925ecedfa04b62df",
"unity/TemplateData/progress-bar-empty-light.png": "4412cb4b67a2ae33b3e99cccf8da54c9",
"unity/TemplateData/progress-bar-full-dark.png": "99949a10dbeffcdf39821336aa11b3e0",
"unity/TemplateData/progress-bar-full-light.png": "9524d4bf7c6e05b2aa33d1a330491b24",
"unity/TemplateData/style.css": "7f1e0e50db2b6a8c5e8cea29a085c3d6",
"unity/TemplateData/unity-logo-dark.png": "5f00fa907e7c80061485fc64b62ca192",
"unity/TemplateData/unity-logo-light.png": "daf8545f18a102b4fa8f693681c2ffe0",
"unity/TemplateData/webgl-logo.png": "0c09503c39e9a26675e5f56d82f061b3",
"unitybr/Build/UnityLibrary.data.br": "982ac2ce30908599958276f9ce1dcf9b",
"unitybr/Build/UnityLibrary.framework.js.br": "6853357e369a01c73da566a7527c3959",
"unitybr/Build/UnityLibrary.loader.js": "fb71d028619e714657010c1a83ad1355",
"unitybr/Build/UnityLibrary.wasm.br": "07405974696e81d0256b649af472b523",
"unitybr/index.html": "6e80cb8a8617bce4b9515be22b19f073",
"unitybr/StreamingAssets/UnityServicesProjectConfiguration.json": "1ffd80829af0214b859fcb806b282ecd",
"unitybr/TemplateData/favicon.ico": "f04ae07ad1b634a4152d2c8175134c56",
"unitybr/TemplateData/fullscreen-button.png": "489a5a9723567d8368c9810cde3dc098",
"unitybr/TemplateData/progress-bar-empty-dark.png": "781ae0583f8c2398925ecedfa04b62df",
"unitybr/TemplateData/progress-bar-empty-light.png": "4412cb4b67a2ae33b3e99cccf8da54c9",
"unitybr/TemplateData/progress-bar-full-dark.png": "99949a10dbeffcdf39821336aa11b3e0",
"unitybr/TemplateData/progress-bar-full-light.png": "9524d4bf7c6e05b2aa33d1a330491b24",
"unitybr/TemplateData/style.css": "7f1e0e50db2b6a8c5e8cea29a085c3d6",
"unitybr/TemplateData/unity-logo-dark.png": "5f00fa907e7c80061485fc64b62ca192",
"unitybr/TemplateData/unity-logo-light.png": "daf8545f18a102b4fa8f693681c2ffe0",
"unitybr/TemplateData/webgl-logo.png": "0c09503c39e9a26675e5f56d82f061b3",
"unityweb/Build/UnityLibrary.data": "b17574be4e28ef95c1f32e8a106ed6f6",
"unityweb/Build/UnityLibrary.framework.js": "e67e5724d71a97d464212e57e26e6953",
"unityweb/Build/UnityLibrary.loader.js": "fb71d028619e714657010c1a83ad1355",
"unityweb/Build/UnityLibrary.wasm": "a475a8747e627b986d423420526e5767",
"unityweb/index.html": "041a1537883acd0c6af803a976e18a99",
"unityweb/StreamingAssets/UnityServicesProjectConfiguration.json": "1ffd80829af0214b859fcb806b282ecd",
"unityweb/TemplateData/favicon.ico": "f04ae07ad1b634a4152d2c8175134c56",
"unityweb/TemplateData/fullscreen-button.png": "489a5a9723567d8368c9810cde3dc098",
"unityweb/TemplateData/progress-bar-empty-dark.png": "781ae0583f8c2398925ecedfa04b62df",
"unityweb/TemplateData/progress-bar-empty-light.png": "4412cb4b67a2ae33b3e99cccf8da54c9",
"unityweb/TemplateData/progress-bar-full-dark.png": "99949a10dbeffcdf39821336aa11b3e0",
"unityweb/TemplateData/progress-bar-full-light.png": "9524d4bf7c6e05b2aa33d1a330491b24",
"unityweb/TemplateData/style.css": "7f1e0e50db2b6a8c5e8cea29a085c3d6",
"unityweb/TemplateData/unity-logo-dark.png": "5f00fa907e7c80061485fc64b62ca192",
"unityweb/TemplateData/unity-logo-light.png": "daf8545f18a102b4fa8f693681c2ffe0",
"unityweb/TemplateData/webgl-logo.png": "0c09503c39e9a26675e5f56d82f061b3",
"version.json": "eaaf106427d142735ff51a6e81befdca"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
