'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "22a6d1d26f87a52c4be322251f91a994",
"assets/assets/fonts/FredokaOne-Regular.ttf": "5165c0facbfede7afe6c9ef3fd635f11",
"assets/characters/alligator.png": "bbcfcbe5b9963396c6408dcff02f6c39",
"assets/characters/anteater.png": "0de57e8aae0a4c9fd10bcc981d563577",
"assets/characters/armadillo.png": "83e6c666989c42b9a7c4be0643e4428d",
"assets/characters/auroch.png": "e4b5664bfc422e9c17d43fc296c35aa6",
"assets/characters/axolotl.png": "bad1b1309d3d9c0d1ff6b321e48436bd",
"assets/characters/badger.png": "60dcbbf0807c93f900ecf6e972e83189",
"assets/characters/bat.png": "bb710c20cbb0ab8da3d139fd014c750a",
"assets/characters/beaver.png": "d558432aec1f41e00e335dd9379e01cd",
"assets/characters/buffalo.png": "458a16ea9016f1fb5f9d9a175212bf95",
"assets/characters/camel.png": "ae693c7f863d4086766647e20ab4a17c",
"assets/characters/capybara.png": "4f8c6954b781131758a46ce5b983a11a",
"assets/characters/chameleon.png": "149efb73c2240a121d8df09714638203",
"assets/characters/cheetah.png": "c915ac0d1952c6461215de3ca2f4b0ba",
"assets/characters/chinchilla.png": "c9fbb8238948bbe88ba566017ce1a4ce",
"assets/characters/chipmunk.png": "678a76b53ebb35a2b1ffa93d3a58fb5a",
"assets/characters/chupacabra.png": "07c2b1cf03053e8e47ad5b60308ea8ef",
"assets/characters/cormorant.png": "e0ee4eea35eb4f7a8b44a7751f1d4771",
"assets/characters/coyote.png": "56b616d21a129e81eb9519b0be402237",
"assets/characters/crow.png": "d38f17590deb38d7a02c23851c42ce74",
"assets/characters/dingo.png": "3a10b59bdb1a5bda79e77c3e2c45eed2",
"assets/characters/dinosaur.png": "bf2fc3b06c99dce51c27e7316a457955",
"assets/characters/dolphin.png": "4bf0fa216ad438098520c9a05210b67b",
"assets/characters/duck.png": "06b7a4682536801cd0c7424b58309373",
"assets/characters/elephant.png": "3f7c6670c8e81e4057c5a8735eb7461d",
"assets/characters/ferret.png": "c08018bbfff34e8dfdbb776685368d53",
"assets/characters/fox.png": "fa3df577363f41901da8c7b922b66a3f",
"assets/characters/frog.png": "f0b1aef64ada418b64dd50808a94e3fc",
"assets/characters/giraffe.png": "c7aa00f089ec6ba47ca66b16b6db4633",
"assets/characters/gopher.png": "1f9b7dd8bcabc28ccc9a00db8e369db4",
"assets/characters/grizzly.png": "7cdbdf4ecc6aef612645305e19319bc1",
"assets/characters/hedgehog.png": "a050869cdead80a52ded7517a459502b",
"assets/characters/hippo.png": "70bb75f5854d383225c65c8f3c392047",
"assets/characters/hyena.png": "e23be6b746cb20cd60046338540c361d",
"assets/characters/ibex.png": "ebef532b7ac2999f1153a1487f4874f3",
"assets/characters/ifrit.png": "3a5592819b5e0b53428bc27742b23242",
"assets/characters/iguana.png": "f72613f9068bb3d9d3fae6888c188219",
"assets/characters/jackal.png": "cee4835e378de2b0d35ca1d5ed1ad4a2",
"assets/characters/kangaroo.png": "e7eb63feaaa2a66fd3dfdb1d16cc68ae",
"assets/characters/koala.png": "1313b5f1811f3a708a7d4a8f5644434b",
"assets/characters/kraken.png": "19562ab0e4a9e0714961a586c7614d59",
"assets/characters/lemur.png": "e2270aa78dce03b7c4978fd8547b100d",
"assets/characters/leopard.png": "9a9599103f1389c97e02a4f71f911810",
"assets/characters/liger.png": "a4acfef5254ebf576d874f0448c1b814",
"assets/characters/llama.png": "b12100e6b2737b9ae6ae5cbb8a9be060",
"assets/characters/manatee.png": "1b907028a4a924387ff0c93f59f77593",
"assets/characters/mink.png": "107ca01054e46d5aafd351caaebf6916",
"assets/characters/monkey.png": "766cc572b9ee063e86173cff96c5401f",
"assets/characters/moose.png": "a3243a83e970cc0fa5a516a7a28a5048",
"assets/characters/narwhal.png": "7a70ef99fdadffdf76608c3a590f598f",
"assets/characters/orangutan.png": "bd7a2977dcf0d581425903f6884d7181",
"assets/characters/otter.png": "e78b54898ecee1297ead55e40e4d5ed9",
"assets/characters/panda.png": "9b061df1605115f1bd94f2d4afcacb73",
"assets/characters/penguin.png": "8b505347c6d4824ea38e66ea22daad5c",
"assets/characters/platypus.png": "d513b1d8e5ace719dae2b224b685a13b",
"assets/characters/pumpkin.png": "4c7361c63f570512781316753e239bda",
"assets/characters/python.png": "4316cc62b535573721aa1239169792be",
"assets/characters/quagga.png": "1d6fd53e00946223f8654a592a218f54",
"assets/characters/rabbit.png": "511a9836fadb6ccf334a259201a242e4",
"assets/characters/raccoon.png": "31d4b2cffd4efe5033de3d8bc3b2705c",
"assets/characters/rhino.png": "064fea5cd4277fa3d888d17bddf65a02",
"assets/characters/sheep.png": "e775091f326973bcfc7748789346d262",
"assets/characters/shrew.png": "943c8e7cdfd05ac9c6a3c9e64fcfe0a4",
"assets/characters/skunk.png": "62ae6b32df14d5400d84b1c8ee0d8222",
"assets/characters/squirrel.png": "3651735207b3375143bf2851399d0743",
"assets/characters/tiger.png": "084daf68ade2c93e42ab8844b2e1935c",
"assets/characters/turtle.png": "824c7b2a6b0ccc7bdea0f999210502cb",
"assets/characters/walrus.png": "85f0e81764843bf8f39a5d13107e791d",
"assets/characters/wolf.png": "7e1d47d4fe43b7493447ede45df328d1",
"assets/characters/wolverine.png": "3fdcb0c5a7b2fac423c15f29cadfb69e",
"assets/characters/wombat.png": "5a844215a57d9607f1087c9d7d364880",
"assets/FontManifest.json": "ec4f45f88c71d2aec2e23b3efb3cc3c3",
"assets/fonts/FredokaOne-Regular.ttf": "5165c0facbfede7afe6c9ef3fd635f11",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/gif/Aequaland_1920x1080.gif": "16c39983ca24fd2148a21cd70fa842dc",
"assets/images/background.png": "f805e5870e75d05890d35c17d31b6737",
"assets/images/Bee1.png": "6c9ca5b747a92440d53889a11f623306",
"assets/images/Bee2.png": "159c899b81fcd39349399433d2e51579",
"assets/images/Daji_hi.png": "c359cb43f0bcc313883de1e3ce71ee1a",
"assets/images/Daji_hi_1.png": "c359cb43f0bcc313883de1e3ce71ee1a",
"assets/images/Daji_yeti.png": "443218dd5cda30049bc1324495e7631d",
"assets/images/EllipseOne.png": "7d568adb8b4209712727d7af670e2a30",
"assets/images/EllipseTwo.png": "35df9182dcc0269c363733f9de5f8411",
"assets/images/gameOne.png": "4628cf788715d2f5c6ec5b2272e41a22",
"assets/images/gameTwo.png": "7cf3a7fc090c820a777ef54c57caa7db",
"assets/images/Green_planet.png": "ce71f80e7867c372a2664bcc55b7e779",
"assets/images/Ice1.png": "cf510e183329c47d6dc7fb25249814bf",
"assets/images/Ice2.png": "0ecded0c28f339d0c0940e10bb0e1870",
"assets/images/LogoAequaland.png": "46e9c0cf84694623be8c3b677740423e",
"assets/images/planet1.png": "12c4ea3de0f8765355718f8b35166337",
"assets/images/planet10.png": "1812d26522bbe0c3164a1e02eb60bb08",
"assets/images/planet2.png": "0cca321eac9bf9d6d64cc68a37536d8e",
"assets/images/planet3.png": "f37b5273252024d60d9bb5c73bccd627",
"assets/images/planet4.png": "0f1dd308dbd37122f846335b1e70aaf3",
"assets/images/planet5.png": "88e876405bacd00c604e29da78b9fd32",
"assets/images/planet6.png": "e145ad1b7abdd8a5a07a7dd27d590815",
"assets/images/planet7.png": "ff7544f0665f0d3fe5a05a6a136743c3",
"assets/images/planet8.png": "9323f8490097b97f0924e61e3de85736",
"assets/images/planet9.png": "c2a283fd950dd314f606ba0a76dc4277",
"assets/images/Plant1.png": "748c3da4f878656b143bf65a9396c949",
"assets/images/Plant2.png": "01406f8904758dad2874df5ab933a468",
"assets/images/Plan_travail.png": "5e7119ea437a9992556a58b531d9740a",
"assets/images/PolygonLeft.png": "a0196292f4d74bc6586678e19b13cad0",
"assets/images/PolygonRight.png": "2011dcad5e966a9d1ec0723c4fdea823",
"assets/images/Rectangle1.png": "f1304a3d004e7287105e1882f5374aae",
"assets/images/Rectangle2.png": "3c032e173903e899cce884841e76df4d",
"assets/images/Rectangle3.png": "277654d9b7810bcd4f0bdfabb5428cac",
"assets/images/Rectangle4.png": "6a5e803d82dc5c82119551d3a3c72aef",
"assets/images/Rectangle5.png": "972de784d4f84d507a4e84b95b4b4d73",
"assets/images/Roottie.png": "8d71a7f8030a4b7d0f3c3ff0fed99056",
"assets/images/teacherMonster.png": "1f06759a8df80c3147c860f5b9a5f33d",
"assets/images/trianguloDer.png": "5e4f1d8d2934926110aac9e2b32c382b",
"assets/images/trianguloIzq.png": "cfcbff62f0587a94181e8a4b2b8ebbe7",
"assets/NOTICES": "69addeb3aacd217a3d0cf058e10e9364",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "35511e72e43388dc65705779f9a5e5e7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fc7a54c3ceb7e9b84a747d3af9d8fabf",
"/": "62bbfb34bac707bb963fa975500a0c57",
"main.dart.js": "6bc639d4af2aec611c13ded46736c013",
"manifest.json": "c2f3bccaa36e37a6964f88b271e23949",
"splash/img/Aequaland_1920x1080.gif": "cf721c3a2ccf9fbfb813f38fe0d4f73c",
"splash/img/dark-1x.png": "c526e7de3266b40ef5ee9c2085d67c03",
"splash/img/dark-2x.png": "0e3d10f8d6d9da1980e897594b15902c",
"splash/img/dark-3x.png": "2056bb82083f88e33b2bd3638987927d",
"splash/img/dark-4x.png": "023ae797514f423a8d1f3d416ce43116",
"splash/img/light-1x.png": "c526e7de3266b40ef5ee9c2085d67c03",
"splash/img/light-2x.png": "0e3d10f8d6d9da1980e897594b15902c",
"splash/img/light-3x.png": "2056bb82083f88e33b2bd3638987927d",
"splash/img/light-4x.png": "023ae797514f423a8d1f3d416ce43116",
"splash/splash.js": "78dafc3887b40fdb73d73768e20675b2",
"splash/style.css": "ddeafbd0fce614258fc215d96127fd71",
"unity/Build/UnityLibrary.data.unityweb": "a2584c0726feb590536a1b52eae219be",
"unity/Build/UnityLibrary.json": "67ef51c1eabb58bd9b428363323e74ea",
"unity/Build/UnityLibrary.wasm.code.unityweb": "5058df9eba702ed375995a2723d50ec6",
"unity/Build/UnityLibrary.wasm.framework.unityweb": "c433e82cb9105180a8dd55cb926f5010",
"unity/Build/UnityLoader.js": "20986a4044eaa8551db6be07233cc1d9",
"unity/index.html": "62bbfb34bac707bb963fa975500a0c57",
"unity/TemplateData/favicon.ico": "57b5a31d2566cf227c47819eb3e5acfa",
"unity/TemplateData/fullscreen.png": "f698ed7e8838ae7fef68b1423b6a3bc8",
"unity/TemplateData/progressEmpty.Dark.png": "59cf8c9349b0be3828ea6ab0b7b7d126",
"unity/TemplateData/progressEmpty.Light.png": "28df3e3bc879a2cffaaf78e371980f33",
"unity/TemplateData/progressFull.Dark.png": "c74f81d50322b06afa5f20a1447a17ba",
"unity/TemplateData/progressFull.Light.png": "d030ba7511bc275365f856d2af200e58",
"unity/TemplateData/progressLogo.Dark.png": "cc0d7c1db16b413eb67aed0f10c3e99d",
"unity/TemplateData/progressLogo.Light.png": "e608e32fb2102e953b6cae6f97f38286",
"unity/TemplateData/style.css": "1981b5d803ea85e3a43d1adcb046b0ad",
"unity/TemplateData/UnityProgress.js": "8560a078de48bb4ede068cbdd48a4938",
"unity/TemplateData/webgl-logo.png": "8c9889fd3f9272b942d4868a9c1b094c",
"version.json": "ac3eb829c0c705f784e6d0f3155e828d"
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
