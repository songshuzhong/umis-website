if(!self.define){let i,e={};const s=(s,d)=>(s=new URL(s+".js",d).href,e[s]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=s,i.onload=e,document.head.appendChild(i)}else i=s,importScripts(s),e()})).then((()=>{let i=e[s];if(!i)throw new Error(`Module ${s} didn’t register its module`);return i})));self.define=(d,n)=>{const r=i||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const c=i=>s(i,r),l={module:{uri:r},exports:t,require:c};e[r]=Promise.all(d.map((i=>l[i]||c(i)))).then((i=>(n(...i),t)))}}define(["./workbox-46d0bffa"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"/i-website/dist/chunk/chunk-2d0a4b45.f89768.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d0ccba9.9ea3ea.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d0db7d7.1ade0d.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d208dfb.e2897a.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d225f49.1a8097.js",revision:null},{url:"/i-website/dist/chunk/chunk-63ab760a.9427da.js",revision:null},{url:"/i-website/dist/chunk/chunk-76d50889.89cd1b.js",revision:null},{url:"/i-website/dist/chunk/chunk-b2126b70.140341.js",revision:null},{url:"/i-website/dist/chunk/chunk-e8ce8ada.b4db47.js",revision:null},{url:"/i-website/dist/chunk/editor.b26965.js",revision:null},{url:"/i-website/dist/circle.svg",revision:"ae48e2078551e8a64156f767f51e5254"},{url:"/i-website/dist/css/chunk-76d50889.307b69f8.css",revision:null},{url:"/i-website/dist/css/chunk-bffca5a6.142961a8.css",revision:null},{url:"/i-website/dist/css/chunk-e8ce8ada.0ea655d4.css",revision:null},{url:"/i-website/dist/css/chunk-vendors.6bc36dab.css",revision:null},{url:"/i-website/dist/css/home.3b32feea.css",revision:null},{url:"/i-website/dist/css/index.ecd8f263.css",revision:null},{url:"/i-website/dist/css/mobile.7af7a0ab.css",revision:null},{url:"/i-website/dist/css/playground.47028eed.css",revision:null},{url:"/i-website/dist/favicon.ico",revision:"fb18670e339868242239711ddf2c0fe4"},{url:"/i-website/dist/fonts/codicon.805fb6ad.ttf",revision:"805fb6ad1751ed8b849b5bf9be742ab5"},{url:"/i-website/dist/home.html",revision:"898cb5ff6f56a49e823a6e8ac92bb21c"},{url:"/i-website/dist/img/circle.ae48e207.svg",revision:"ae48e2078551e8a64156f767f51e5254"},{url:"/i-website/dist/img/forbidden.25b99dca.jpeg",revision:"25b99dcac91b4c512353eccd69f391e4"},{url:"/i-website/dist/img/icons/android-chrome-192x192.png",revision:"17603ce7dfffd91f9d4e71f884c16552"},{url:"/i-website/dist/img/icons/android-chrome-512x512.png",revision:"cef583d86c3ad023bc650651d5a353a6"},{url:"/i-website/dist/img/icons/apple-touch-icon.png",revision:"8cdd7d67b9ce440b6e660426c13f548d"},{url:"/i-website/dist/img/icons/favicon-16x16.png",revision:"90b07ae88255cce77000bf3560f8ba70"},{url:"/i-website/dist/img/icons/favicon-32x32.png",revision:"7ace12ccae0aeb68e016a1201aaf0578"},{url:"/i-website/dist/img/icons/favicon.ico",revision:"4cb0206694f4ffa408d72171e5e419c6"},{url:"/i-website/dist/img/icons/logo-300x300.jpg",revision:"51ade93364924d6ae3ecbd72acae00d3"},{url:"/i-website/dist/img/icons/logo-300x300.png",revision:"8334e854672aa8c86729d37c30f9d287"},{url:"/i-website/dist/img/not-found.06512621.jpeg",revision:"06512621b564df8be841598d77e6e195"},{url:"/i-website/dist/index.html",revision:"7c6cd3a156180bde90b54357b8d228bf"},{url:"/i-website/dist/js/home.f74702.js",revision:null},{url:"/i-website/dist/js/index.5493dd.js",revision:null},{url:"/i-website/dist/js/mobile.298f85.js",revision:null},{url:"/i-website/dist/js/playground.dad3f6.js",revision:null},{url:"/i-website/dist/manifest.json",revision:"3866f3ee76597fcdadc88a83a339fdae"},{url:"/i-website/dist/mobile.html",revision:"a2e3c091940b70141ccaf267f598f2dc"},{url:"/i-website/dist/playground.html",revision:"68231f6504bf4220edc9df9fe0fac381"},{url:"/i-website/dist/precache-manifest.24db6aa21b81197d1bea2e313324d714.js",revision:"24db6aa21b81197d1bea2e313324d714"},{url:"/i-website/dist/service-worker.js",revision:"e2eb04f81c6663aed74b52448284d28d"},{url:"/i-website/dist/shuttle.png",revision:"9df39e09fcb3cb9b413a46f9ab221d71"},{url:"/i-website/dist/worker/editor.worker.js",revision:"d6eb6ad655b8bdaaacf3d06cf82f673b"},{url:"/i-website/dist/worker/json.worker.js",revision:"964a8136398e1066df0112f1983d37da"}],{})}));
