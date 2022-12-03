/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-b4fe8c46'], (function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "/i-website/dist/chunk/0.78aafb.js",
    "revision": null
  }, {
    "url": "/i-website/dist/chunk/1.78aafb.js",
    "revision": null
  }, {
    "url": "/i-website/dist/chunk/less.78aafb.js",
    "revision": null
  }, {
    "url": "/i-website/dist/circle.svg",
    "revision": "ae48e2078551e8a64156f767f51e5254"
  }, {
    "url": "/i-website/dist/favicon.ico",
    "revision": "fb18670e339868242239711ddf2c0fe4"
  }, {
    "url": "/i-website/dist/fonts/codicon.805fb6ad.ttf",
    "revision": "805fb6ad1751ed8b849b5bf9be742ab5"
  }, {
    "url": "/i-website/dist/img/circle.ae48e207.svg",
    "revision": "ae48e2078551e8a64156f767f51e5254"
  }, {
    "url": "/i-website/dist/img/icons/android-chrome-192x192.png",
    "revision": "17603ce7dfffd91f9d4e71f884c16552"
  }, {
    "url": "/i-website/dist/img/icons/android-chrome-512x512.png",
    "revision": "cef583d86c3ad023bc650651d5a353a6"
  }, {
    "url": "/i-website/dist/img/icons/apple-touch-icon.png",
    "revision": "8cdd7d67b9ce440b6e660426c13f548d"
  }, {
    "url": "/i-website/dist/img/icons/favicon-16x16.png",
    "revision": "90b07ae88255cce77000bf3560f8ba70"
  }, {
    "url": "/i-website/dist/img/icons/favicon-32x32.png",
    "revision": "7ace12ccae0aeb68e016a1201aaf0578"
  }, {
    "url": "/i-website/dist/img/icons/favicon.ico",
    "revision": "4cb0206694f4ffa408d72171e5e419c6"
  }, {
    "url": "/i-website/dist/img/icons/logo-300x300.jpg",
    "revision": "51ade93364924d6ae3ecbd72acae00d3"
  }, {
    "url": "/i-website/dist/img/icons/logo-300x300.png",
    "revision": "8334e854672aa8c86729d37c30f9d287"
  }, {
    "url": "/i-website/dist/img/loading.dd9336d7.svg",
    "revision": "dd9336d77da4dcd3cca2210058c5af86"
  }, {
    "url": "/i-website/dist/index.html",
    "revision": "a3591db929cecce53ad9c2fa0873979d"
  }, {
    "url": "/i-website/dist/js/app.78aafb.js",
    "revision": null
  }, {
    "url": "/i-website/dist/manifest.json",
    "revision": "3866f3ee76597fcdadc88a83a339fdae"
  }, {
    "url": "/i-website/dist/worker/editor.worker.js",
    "revision": "d6269c3e28422b4abad88125b7082b10"
  }, {
    "url": "/i-website/dist/worker/json.worker.js",
    "revision": "1653efdde786d68f79bb347d207460a0"
  }], {});

}));
//# sourceMappingURL=service-worker.js.map
