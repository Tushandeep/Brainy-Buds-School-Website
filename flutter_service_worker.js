'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "1a8029c843aa93ee0680586744f2e0b0",
"favicon.ico": "6ac3d2d5920bea983d87af3e37cd3957",
"index.html": "1bc84be473657063fdd1fee56dcfe0c6",
"/": "1bc84be473657063fdd1fee56dcfe0c6",
"main.dart.js": "45e72485c474edfa089fa32160f5c131",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"logo.png": "8b1e0a67362d0182a8643de379b582eb",
"icons/Icon-192.png": "7445ff2377ea6e6db3a686e3466fd9b2",
"icons/Icon-512.png": "0a341806a337082d2b3c44a4057a58c2",
"manifest.json": "f8ebd2f0615a2718d1610c6636f0c725",
".git/config": "67e45e13728f08eebdfa874099fa65e8",
".git/objects/0d/b05ab654d52feaeafc43081ab517d7c59119a4": "c684da55baa671207378c1464d364d64",
".git/objects/9b/7c32e0e1527b3ae9e9ad37fc2d027a9d850d1c": "fb3d8474aa4ffbf42f740c39663b6ba8",
".git/objects/9b/e913d1d6573cc0c01af3ae76fcc5456a68157c": "579c3af6617d282dea0aea4e26adf58e",
".git/objects/9e/8b362c1637f09c097ad13e436ee41d61221e79": "bc926ab3ea06d478544f5ec5b7cbad04",
".git/objects/9e/b7d3f39e12c2c44ed81a2475c3f710473db9a8": "d886c376417b9e67c27174fdfde3dc81",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3c/dd201eed06e4bc68fa94199fde271e5d84508a": "051ba6b83d34eb7e82a05bb6fbac942c",
".git/objects/56/39bfc949fc98a1a6e2fdca5242de2efad3abef": "8f5840584db52e956d92d5f81ceddab9",
".git/objects/58/78ae442f359e57ca6b30b9fdc14e558072d6fb": "b520e0c0f14aa9c2565fb73a1c426007",
".git/objects/34/b16bd0f93e550e8cbffc6f2b4c7b88986e2c91": "e57694810c586699d774232a6f1cf265",
".git/objects/33/05409a0a5132af674b3e7443315e06d786fec7": "5e87fff87e355b33d3e380c280b3c34e",
".git/objects/9c/9d4679879450460a1eb67bcac420600a9f18c5": "7e7f5180746ec26dcce45f7a0c218eb0",
".git/objects/a3/8bf84b575fb3929ebfb6357511d5dab729494b": "90c97f2a44d45795670eadba0d3d5c71",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d0/40140148919846d844b8c406bc07723ae338eb": "f04a00b087dd1ea2c57f3d006a343008",
".git/objects/df/c7e2fc59dfbfaf577dc2777f6bb910a6d04d1f": "1a3069e2a129bcd83854f2d53efd65b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/f108e8cb1cbe8d47d6c49347f309b2f843b9f3": "2b672cbc753badd4103be9bbcd316617",
".git/objects/c0/697ece6e56e533bca0a5c8bdc392f02e0e3a85": "8bbf710a07a2fc9e8979bda3035970f7",
".git/objects/fc/fac12f20b70dca706b9c2d4e5af45a6f1043fe": "e8bade912369903d50ec95d5a3045249",
".git/objects/fe/ccfdc3b201f296f5482f6eec65d5d8e9465adf": "5dd0131973fb2ac59abfe5c32d802265",
".git/objects/fe/a5df045ec48b3e2bb0c9cc6852adf56da3956f": "b394e8398a9e6f41188aeacec22ad002",
".git/objects/7c/90a5472ce15a1470b83af19f10b5e48cdba371": "e0bbf9f611a932d1aade20a858a3c9c7",
".git/objects/45/4cb5dc422135a799e3e0e41c6baf4f0c3e4c13": "96b7569b012f708403bc154806d92912",
".git/objects/73/07bfae673538c22aad4be2fd4066ded3b8763e": "776cd29e68dab4024057901f97feac34",
".git/objects/74/fce7ebedfd2c5672db4da95384e96405f8ab30": "a254dbd92c883ac02f36a9e37a114f9e",
".git/objects/7b/ca7f58ab1b27c8099b726f71a436d0f6e131ca": "2281f606f0d194ff434f5f6e7366ecca",
".git/objects/8a/cb7a1b7bb283d766eafaa93d0fe488e0f4a802": "d809b4d670dc9dbd12490e2d27880483",
".git/objects/8a/70e61d000bb9d8c68689facdbff30d36159198": "80eb88bf117a2c8348ebf785fedc1318",
".git/objects/86/7d9ddd53a635dc65afc0639698395a08132dc2": "c4055c396d8e2536043d0d24e788eba4",
".git/objects/44/bd9812e39761f4c13d933c63c6cc7d7886a9ee": "45790f5c03414f31384c0004db38fa92",
".git/objects/38/b6719cfb17a3ffd14799ee68afbb2ef284d721": "e185fb6dd6601425cd4ea42995c1cf1f",
".git/objects/00/18f535545d5c93c727910d29fbaf4984b82599": "20d404aac5e2407dd1a288061657d43a",
".git/objects/6e/0f33c8ec610b839abde763a5344a89a28365e7": "7f6077c93e1653bfd8c3ef83f4deb86e",
".git/objects/36/c5b45136ff5f1ec72749bee03d34a704a99b8e": "1174ca08ebb47d0b4ae63ac16e019712",
".git/objects/62/7afad7a7c46ed869ff7ab637a549f81ee2cb84": "15d04496d77ab710c219fc80a11d8782",
".git/objects/01/72f15aabfe5f46f4535e787f8bc1ad0e9a8e57": "2db4d83659943a57e136fd74f596180d",
".git/objects/39/7d9f56270b0771d12b4b3994221b2efb825725": "b25f0b7230780088fca4ebd6909c398e",
".git/objects/99/1c8979d168007b04f944492bb3d263764319ef": "c02590c7b7e8b8eada25f6c107e7ead2",
".git/objects/55/3d17b39e67b769ccb401eaad0d00ab8e3e916f": "aa22651d1fe0a0e721702e95ec50951d",
".git/objects/55/b67dc5a7ef3c9796cabb31689814cd8c6b2696": "f42cf38071b346f018171580f5e3327e",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a0/e0e8e8493f1131bf862805b9338fe6bd6588bb": "42b0e1f266edfbc255c4639fe5b8f8a2",
".git/objects/a7/81095508d3c9dccb1a99243144723c184be4e1": "cf60aa9359ec155061d8109aaf563bcf",
".git/objects/dd/18d2144445ed79dd1f37747f73ccf12e956e38": "a8a9a58732a319598e037082e76bfcbd",
".git/objects/aa/9033a801f73539a025d9f4012fa823c27ff3b1": "6489b5eb717a3de0e8081066d4570d80",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/ddc83415f34cb2ca66704126323cca45d43981": "b656859c40b233f704bed382b7882445",
".git/objects/cd/5781f0ad0d103ba6a206bb0a8547384278914f": "a3487661f441f795b595ae6458bac993",
".git/objects/c5/dfdb7679899c895750b30e858988c4e194970f": "3fb85d43ae8865a371ac8485e2715610",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/83/f67cb3a251ca83ef0b0b182e9b9e7742d71c30": "3644664afa7eecc9534261ff7701b254",
".git/objects/70/90a14d8925e4e68461c20b22f6c908ff41e092": "8140d75a256e829c88262198a7bebda6",
".git/objects/1e/020deb6cb7ea895836e18388358dd91e292356": "488d204d1f3c4489c258b8bcba70b6fc",
".git/objects/24/0fa68fe19e1641524857664055dde3fe67ec53": "1c5e93b7233111a8a2c4b5dd17f6c18e",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/40/f1694ba4c97cdfaaa99a6459feab9a24614586": "aca2ed34561ba1ba8fc7d7674cd50113",
".git/objects/40/05246d0b7eabb9b0e119a1f81dcbe910e09554": "74f4dde9538040aacf99f242b674819a",
".git/objects/2b/d4c3b9715efb035a3baee5703a63693d746601": "9a638ed144de51c3b1a8342d2e5f6049",
".git/objects/13/60ef371d3780cdc88816321756559572dc1aef": "835903cf22f0f003206cce67ef0c50b2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7bb6c7e0dcedcaf9397979f84f1d5fae",
".git/logs/refs/heads/main": "4bf20bb7e8f03464928a8239656b159d",
".git/logs/refs/remotes/origin/main": "4db4103c6a06b55e96f4a02c74dc71e0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "ed3ee196e6a7c4948189c06014514b52",
".git/refs/remotes/origin/main": "ed3ee196e6a7c4948189c06014514b52",
".git/index": "4a8802b6ed9a84ec7606c7987045dc81",
".git/COMMIT_EDITMSG": "634305e7a2a9b47fb8cc37f0818e9464",
"assets/AssetManifest.json": "7efc4e55395a68a9909df26cdcafeb5d",
"assets/NOTICES": "b0ffee199bf8ad5d841649264fdb0631",
"assets/FontManifest.json": "e3915fb8b1ea52491baf0f0013d76ad0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "e9b5a8cab8ef77aad05b976d8c0121fd",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/tushan.png": "c89b5a425ddfc151ac5a77c5f20e6b44",
"assets/assets/images/teachers.jpeg": "69e2a7bfbe1dbb2b9d852d191422eabf",
"assets/assets/images/logo.png": "8b1e0a67362d0182a8643de379b582eb",
"assets/assets/images/student_farming.jpeg": "12a672622b40cf48aacb9bd8132de74e",
"assets/assets/images/school_building.jpeg": "8f77a74abaf9106f3efe53603079bec7",
"assets/assets/images/all_students.jpeg": "4e3251e2690ba1e94f5c66c3eb9abfea",
"assets/assets/functions/2023_baisakhi_sm24.jpeg": "a1234593864282c2dd6c596cc40ccf04",
"assets/assets/functions/2023_baisakhi_sm32.jpeg": "5a100550b18a00586033ce5da8924da0",
"assets/assets/functions/2023_baisakhi_sm28.jpeg": "a1234593864282c2dd6c596cc40ccf04",
"assets/assets/functions/2023_baisakhi_sm7.jpeg": "3e800649e165463d501aaeee56d712b3",
"assets/assets/functions/2023_baisakhi_sm12.jpeg": "54e7a9838b98a79d278cdeb835b35584",
"assets/assets/functions/2023_baisakhi_sm13.jpeg": "94e719f2ce2cb7b584d572e58eb18a38",
"assets/assets/functions/2023_baisakhi_sm6.jpeg": "767b3ec808cca67ef7ebbde9352e5bf3",
"assets/assets/functions/2023_baisakhi_sm29.jpeg": "d0c86eca274bd69b0aecc88813dde43e",
"assets/assets/functions/2023_baisakhi_sm33.jpeg": "f1fed694e6f88583f8b89e0b15b8e07c",
"assets/assets/functions/2023_baisakhi_sm25.jpeg": "b56e23b9bbfac05a296eef0f760819d2",
"assets/assets/functions/2023_baisakhi_sm1.jpeg": "4a4328398eb3f6093eb0793c4750eca1",
"assets/assets/functions/2023_baisakhi_sm14.jpeg": "78f9ee894a1f047b128fbcecf2327061",
"assets/assets/functions/2023_baisakhi_sm22.jpeg": "130bf364f007b00a4dd0af16549e0f5c",
"assets/assets/functions/2023_baisakhi_sm34.jpeg": "82f89bd5692e9b0f15dc068af9a9a654",
"assets/assets/functions/2023_baisakhi_sm18.jpeg": "3aa75ca79f969cac277e0ac4d1369a17",
"assets/assets/functions/2023_baisakhi_m1.jpeg": "f4d7e583decafe77b8fd5147bef7bc18",
"assets/assets/functions/2023_baisakhi_sm19.jpeg": "629d43f236fc61fb5def2196a93dcb78",
"assets/assets/functions/2023_baisakhi_sm35.jpeg": "81ea900b8cc5c174c891e5b9956d0806",
"assets/assets/functions/2023_baisakhi_sm23.jpeg": "5a100550b18a00586033ce5da8924da0",
"assets/assets/functions/2023_baisakhi_sm15.jpeg": "9efd11be9c5d013fbd2ad4b42c799a56",
"assets/assets/functions/2023_baisakhi_sm16.jpeg": "ff60ecc86a0e00ea6241622d2f935cd5",
"assets/assets/functions/2023_baisakhi_sm3.jpeg": "52d1ff05477d2b0553340c67f007ccab",
"assets/assets/functions/2023_baisakhi_sm20.jpeg": "4dc7d942db100404b334755f6606ec2f",
"assets/assets/functions/2023_baisakhi_sm21.jpeg": "db7e1775dfcbf4b2c4ba1a71756e5071",
"assets/assets/functions/2023_baisakhi_m2.jpeg": "0df78747987898288030569c9d362ec6",
"assets/assets/functions/2023_baisakhi_sm2.jpeg": "92988f1f5d02bb04fe779c64fa9e31de",
"assets/assets/functions/2023_baisakhi_sm17.jpeg": "77e39246a67fe5a1d51346e5453fe6ca",
"assets/assets/functions/2023_baisakhi_sm30.jpeg": "fbb8ecd32b742a278fd3e53e4d2387d6",
"assets/assets/functions/2023_baisakhi_sm26.jpeg": "ddad63d11f9691eefefe70587c9853dd",
"assets/assets/functions/2023_baisakhi_sm9.jpeg": "532ecbd7a032a505028969311252db00",
"assets/assets/functions/2023_baisakhi_sm10.jpeg": "91fefa18bb58b0293dd23b0b4848ef7a",
"assets/assets/functions/2023_baisakhi_sm5.jpeg": "8c141d81f187fc59b2249a47adc7e3d3",
"assets/assets/functions/2023_baisakhi_sm4.jpeg": "10c445b3d88e1df5a24c0b406d371469",
"assets/assets/functions/2023_baisakhi_sm11.jpeg": "b94a33249fb02991c6108c5cda2c3925",
"assets/assets/functions/2023_baisakhi_sm8.jpeg": "1b7fc9c2965679e29553426c0bd6832e",
"assets/assets/functions/2023_baisakhi_sm27.jpeg": "aea4931a9accd0791e4eba8a44edeae5",
"assets/assets/functions/2023_baisakhi_sm31.jpeg": "1d869df079a89ae1b10a44364d098a6c",
"assets/assets/fonts/Montserrat-Medium.ttf": "b3ba703c591edd4aad57f8f4561a287b",
"assets/assets/fonts/Montserrat-Light.ttf": "e65ae7ed560da1a63db603bd8584cfdb",
"assets/assets/fonts/Montserrat-Thin.ttf": "4b73d125bab54f94ed2510590c237f73",
"assets/assets/fonts/Montserrat-Bold.ttf": "1f023b349af1d79a72740f4cc881a310",
"assets/assets/fonts/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/assets/fonts/CedarvilleCursive-Regular.ttf": "8d31107b80c8b0c5a896d4188b733d16",
"canvaskit/skwasm.js": "7313e68a7969003a7d46549330a6bdba",
"canvaskit/skwasm.wasm": "23ebfb314c102f1ef4413e58d65ff340",
"canvaskit/chromium/canvaskit.js": "6bdd0526762a124b0745c05281c8a53e",
"canvaskit/chromium/canvaskit.wasm": "342ba7a5bdb2614e0745f7b22c80ef48",
"canvaskit/canvaskit.js": "45bec3a754fba62b2d8f23c38895f029",
"canvaskit/canvaskit.wasm": "2b4f8bcd7354dd97ce1674bd362d1f79",
"canvaskit/skwasm.worker.js": "7ec8c65402d6cd2a341a5d66aa3d021f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
