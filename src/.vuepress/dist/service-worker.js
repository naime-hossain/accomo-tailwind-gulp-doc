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
    "revision": "013404d43ad0f1e5290cff82b03c6088"
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
    "url": "assets/js/10.dbc11427.js",
    "revision": "6c2cd34b69af773ebdb60d0b6c47c05c"
  },
  {
    "url": "assets/js/11.23652900.js",
    "revision": "80dcbd04b2427ea2e3094f887536487b"
  },
  {
    "url": "assets/js/12.2b0977f3.js",
    "revision": "d1f46833b4f03a01542bc5bce120099c"
  },
  {
    "url": "assets/js/13.08059c06.js",
    "revision": "25ffff4f246bd5bb5f9aa088fc96e72b"
  },
  {
    "url": "assets/js/14.deb53cbf.js",
    "revision": "7ae58f23fe89e088ec69f23a6838625f"
  },
  {
    "url": "assets/js/15.cfbfc9b3.js",
    "revision": "f0a78dbbfa062c940c65704a56c7fb1b"
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
    "url": "assets/js/app.44a8426a.js",
    "revision": "062b5e5710816727e462581e31f8912b"
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
    "revision": "6271cfaa6d7380ab151dedd2d8c4edf7"
  },
  {
    "url": "guide/folderstructure.html",
    "revision": "14c2c9f21cbf15a4682dd414485f40ed"
  },
  {
    "url": "guide/index.html",
    "revision": "01d87a16fd0509ade7bf9eec53bbc3c4"
  },
  {
    "url": "guide/installation.html",
    "revision": "5070a95be37069e0f4d051cc4f8481ff"
  },
  {
    "url": "guide/layout.html",
    "revision": "15dc56eec34d2c2baafc9dbae8385165"
  },
  {
    "url": "guide/plugins.html",
    "revision": "8138bab7b95d109d6151c974bba8984a"
  },
  {
    "url": "index.html",
    "revision": "9f4bf71e66c0e5390fce9b5a1db1bfcb"
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
