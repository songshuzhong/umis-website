if(!self.define){let i,e={};const s=(s,n)=>(s=new URL(s+".js",n).href,e[s]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=s,i.onload=e,document.head.appendChild(i)}else i=s,importScripts(s),e()})).then((()=>{let i=e[s];if(!i)throw new Error(`Module ${s} didn’t register its module`);return i})));self.define=(n,d)=>{const r=i||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let c={};const t=i=>s(i,r),o={module:{uri:r},exports:c,require:t};e[r]=Promise.all(n.map((i=>o[i]||t(i)))).then((i=>(d(...i),c)))}}define(["./workbox-46d0bffa"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"/i-website/dist/chunk/chunk-2d0b8b3e.2d8a5d.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d0ccba9.9ea3ea.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d0db7d7.1ade0d.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d208dfb.e2897a.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d225f49.1a8097.js",revision:null},{url:"/i-website/dist/chunk/chunk-63ab760a.9427da.js",revision:null},{url:"/i-website/dist/chunk/chunk-76d1d221.c68e51.js",revision:null},{url:"/i-website/dist/chunk/chunk-b2126b70.140341.js",revision:null},{url:"/i-website/dist/chunk/chunk-e8ce8ada.b4db47.js",revision:null},{url:"/i-website/dist/chunk/editor.f7d285.js",revision:null},{url:"/i-website/dist/circle.svg",revision:"ae48e2078551e8a64156f767f51e5254"},{url:"/i-website/dist/css/chunk-76d1d221.c6997ae2.css",revision:null},{url:"/i-website/dist/css/chunk-e8ce8ada.90717131.css",revision:null},{url:"/i-website/dist/css/chunk-f5fb7484.ba4ddaba.css",revision:null},{url:"/i-website/dist/css/chunk-vendors.84191e3b.css",revision:null},{url:"/i-website/dist/css/home.94e0e425.css",revision:null},{url:"/i-website/dist/css/index.560e3df1.css",revision:null},{url:"/i-website/dist/css/playground.92091b16.css",revision:null},{url:"/i-website/dist/favicon.ico",revision:"fb18670e339868242239711ddf2c0fe4"},{url:"/i-website/dist/fonts/codicon.805fb6ad.ttf",revision:"805fb6ad1751ed8b849b5bf9be742ab5"},{url:"/i-website/dist/home.html",revision:"3086ae33e84d88a9da9004363ab18a7c"},{url:"/i-website/dist/img/circle.ae48e207.svg",revision:"ae48e2078551e8a64156f767f51e5254"},{url:"/i-website/dist/img/forbidden.25b99dca.jpeg",revision:"25b99dcac91b4c512353eccd69f391e4"},{url:"/i-website/dist/img/icons/android-chrome-192x192.png",revision:"17603ce7dfffd91f9d4e71f884c16552"},{url:"/i-website/dist/img/icons/android-chrome-512x512.png",revision:"cef583d86c3ad023bc650651d5a353a6"},{url:"/i-website/dist/img/icons/apple-touch-icon.png",revision:"8cdd7d67b9ce440b6e660426c13f548d"},{url:"/i-website/dist/img/icons/favicon-16x16.png",revision:"90b07ae88255cce77000bf3560f8ba70"},{url:"/i-website/dist/img/icons/favicon-32x32.png",revision:"7ace12ccae0aeb68e016a1201aaf0578"},{url:"/i-website/dist/img/icons/favicon.ico",revision:"4cb0206694f4ffa408d72171e5e419c6"},{url:"/i-website/dist/img/icons/logo-300x300.jpg",revision:"51ade93364924d6ae3ecbd72acae00d3"},{url:"/i-website/dist/img/icons/logo-300x300.png",revision:"8334e854672aa8c86729d37c30f9d287"},{url:"/i-website/dist/img/not-found.06512621.jpeg",revision:"06512621b564df8be841598d77e6e195"},{url:"/i-website/dist/index.html",revision:"7f7c09fb2c006bf995147a084e73283c"},{url:"/i-website/dist/js/home.bd79eb.js",revision:null},{url:"/i-website/dist/js/index.889f8a.js",revision:null},{url:"/i-website/dist/js/playground.aac20b.js",revision:null},{url:"/i-website/dist/manifest.json",revision:"3866f3ee76597fcdadc88a83a339fdae"},{url:"/i-website/dist/playground.html",revision:"c9d9bb99aa557c1424b4d4861e521366"},{url:"/i-website/dist/precache-manifest.cfb0e648e877bfb67da4ed75622b7443.js",revision:"cfb0e648e877bfb67da4ed75622b7443"},{url:"/i-website/dist/service-worker.js",revision:"51578e1413a08674338c119c9ac17514"},{url:"/i-website/dist/shuttle.png",revision:"9df39e09fcb3cb9b413a46f9ab221d71"},{url:"/i-website/dist/worker/editor.worker.js",revision:"d6eb6ad655b8bdaaacf3d06cf82f673b"},{url:"/i-website/dist/worker/json.worker.js",revision:"964a8136398e1066df0112f1983d37da"}],{})}));
