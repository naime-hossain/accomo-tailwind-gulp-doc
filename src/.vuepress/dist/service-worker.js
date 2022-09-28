/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b1db17b1b5eb80dc801132a9537a4c67"
  },
  {
    "url": "assets/css/0.styles.26b2dc89.css",
    "revision": "7a05a261eff71b0bc8366f6121f35f95"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fb67b6cb.js",
    "revision": "289c425dbb0b6c55e034483be33c4994"
  },
  {
    "url": "assets/js/11.23652900.js",
    "revision": "80dcbd04b2427ea2e3094f887536487b"
  },
  {
    "url": "assets/js/12.5e57192b.js",
    "revision": "9f6510cd179c6970aea787211d99ce84"
  },
  {
    "url": "assets/js/13.868de3b3.js",
    "revision": "0e93ca5a9d29ae2beec162335438c502"
  },
  {
    "url": "assets/js/14.b43ef468.js",
    "revision": "a566b5280327d192c8cea2eff538d528"
  },
  {
    "url": "assets/js/15.bf90f182.js",
    "revision": "5e31ebeb5aa581038629492db85d363f"
  },
  {
    "url": "assets/js/16.cc8955b3.js",
    "revision": "5cee7286835ea513fe44ea8454e6ad34"
  },
  {
    "url": "assets/js/2.a8d0dbe0.js",
    "revision": "17b29595703c0d02112f4ab81298cf72"
  },
  {
    "url": "assets/js/3.e328f6cb.js",
    "revision": "93464c9430cae235704475685e496ec2"
  },
  {
    "url": "assets/js/4.9f341196.js",
    "revision": "a24d960aa98b1a1c7646562c15333da8"
  },
  {
    "url": "assets/js/5.8a6c357f.js",
    "revision": "c46cf97c317b3997f5dc2dec14d4fbd9"
  },
  {
    "url": "assets/js/6.dc1f17e2.js",
    "revision": "59301c3716b48c7a48efef0f01574e41"
  },
  {
    "url": "assets/js/7.c86cf1d5.js",
    "revision": "67a962e85fa3e2d515845f064a713288"
  },
  {
    "url": "assets/js/8.6417a644.js",
    "revision": "8280d233ed06588724d669faa58a98a5"
  },
  {
    "url": "assets/js/9.e0f2787c.js",
    "revision": "ebf27ef14a323d3c1daef8dc141dcc48"
  },
  {
    "url": "assets/js/app.03596fa7.js",
    "revision": "7b71281967bd4d35fbe445e7e1e471d6"
  },
  {
    "url": "error-log.jpeg",
    "revision": "8444d67e1fe1ae53fed8bf2973b45970"
  },
  {
    "url": "favicon.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "guide/components.html",
    "revision": "2a00ac2475385a37564a0e80cd5c3a3d"
  },
  {
    "url": "guide/folderstructure.html",
    "revision": "aa3e89ebaf4053eab9230e6796a199cf"
  },
  {
    "url": "guide/index.html",
    "revision": "c3942af2e2139da4feb93a4fa3a872a1"
  },
  {
    "url": "guide/installation.html",
    "revision": "361f76347571e91c74dbb42743643eca"
  },
  {
    "url": "guide/layout.html",
    "revision": "1b71620edfd56960de2af25086436971"
  },
  {
    "url": "guide/plugins.html",
    "revision": "75acdb2074c9cbeb456f963af4b46d7b"
  },
  {
    "url": "index.html",
    "revision": "c621bf9e6bc319335d2bed152bc77b39"
  },
  {
    "url": "logo.png",
    "revision": "bf5d1a5bf3505e0061019298a35033d4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
