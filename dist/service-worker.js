if(!self.define){let i,e={};const s=(s,n)=>(s=new URL(s+".js",n).href,e[s]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=s,i.onload=e,document.head.appendChild(i)}else i=s,importScripts(s),e()})).then((()=>{let i=e[s];if(!i)throw new Error(`Module ${s} didn’t register its module`);return i})));self.define=(n,c)=>{const r=i||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const d=i=>s(i,r),o={module:{uri:r},exports:t,require:d};e[r]=Promise.all(n.map((i=>o[i]||d(i)))).then((i=>(c(...i),t)))}}define(["./workbox-09b40053"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"/i-website/dist/chunk/chunk-2d0b6d26.40be7c.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d0bb267.9beaa4.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d0c1ed0.a70977.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d207356.c28ae8.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d21367b.96cb5a.js",revision:null},{url:"/i-website/dist/chunk/chunk-44b38984.9c9520.js",revision:null},{url:"/i-website/dist/chunk/chunk-594d6d48.6660f0.js",revision:null},{url:"/i-website/dist/chunk/chunk-5be386f4.2c02a9.js",revision:null},{url:"/i-website/dist/chunk/chunk-76eb17d8.7c95bf.js",revision:null},{url:"/i-website/dist/chunk/editor.de41c5.js",revision:null},{url:"/i-website/dist/circle.svg",revision:"ae48e2078551e8a64156f767f51e5254"},{url:"/i-website/dist/css/chunk-44b38984.90717131.css",revision:null},{url:"/i-website/dist/css/chunk-76eb17d8.c6997ae2.css",revision:null},{url:"/i-website/dist/css/chunk-7f94a70e.ba4ddaba.css",revision:null},{url:"/i-website/dist/css/chunk-vendors.a4f26025.css",revision:null},{url:"/i-website/dist/css/home.94e0e425.css",revision:null},{url:"/i-website/dist/css/index.1cbc99a5.css",revision:null},{url:"/i-website/dist/css/playground.92091b16.css",revision:null},{url:"/i-website/dist/favicon.ico",revision:"fb18670e339868242239711ddf2c0fe4"},{url:"/i-website/dist/fonts/codicon.805fb6ad.ttf",revision:"805fb6ad1751ed8b849b5bf9be742ab5"},{url:"/i-website/dist/home.html",revision:"af035802e8bf76801ce52cd02ba8fd6f"},{url:"/i-website/dist/img/circle.ae48e207.svg",revision:"ae48e2078551e8a64156f767f51e5254"},{url:"/i-website/dist/img/forbidden.25b99dca.jpeg",revision:"25b99dcac91b4c512353eccd69f391e4"},{url:"/i-website/dist/img/icons/android-chrome-192x192.png",revision:"17603ce7dfffd91f9d4e71f884c16552"},{url:"/i-website/dist/img/icons/android-chrome-512x512.png",revision:"cef583d86c3ad023bc650651d5a353a6"},{url:"/i-website/dist/img/icons/apple-touch-icon.png",revision:"8cdd7d67b9ce440b6e660426c13f548d"},{url:"/i-website/dist/img/icons/favicon-16x16.png",revision:"90b07ae88255cce77000bf3560f8ba70"},{url:"/i-website/dist/img/icons/favicon-32x32.png",revision:"7ace12ccae0aeb68e016a1201aaf0578"},{url:"/i-website/dist/img/icons/favicon.ico",revision:"4cb0206694f4ffa408d72171e5e419c6"},{url:"/i-website/dist/img/icons/logo-300x300.jpg",revision:"51ade93364924d6ae3ecbd72acae00d3"},{url:"/i-website/dist/img/icons/logo-300x300.png",revision:"8334e854672aa8c86729d37c30f9d287"},{url:"/i-website/dist/img/not-found.06512621.jpeg",revision:"06512621b564df8be841598d77e6e195"},{url:"/i-website/dist/index.html",revision:"fbe72bfa0a5474a55722f3c275412964"},{url:"/i-website/dist/js/home.7e9ba8.js",revision:null},{url:"/i-website/dist/js/index.a60cb7.js",revision:null},{url:"/i-website/dist/js/playground.ab2ae5.js",revision:null},{url:"/i-website/dist/manifest.json",revision:"3866f3ee76597fcdadc88a83a339fdae"},{url:"/i-website/dist/playground.html",revision:"2a8c276e01bd3772c162dea83be6fca7"},{url:"/i-website/dist/precache-manifest.f216335427b09fca3817235ececf6561.js",revision:"f216335427b09fca3817235ececf6561"},{url:"/i-website/dist/service-worker.js",revision:"a41060133786ab64dee758e62c5c3a2a"},{url:"/i-website/dist/shuttle.png",revision:"9df39e09fcb3cb9b413a46f9ab221d71"},{url:"/i-website/dist/worker/editor.worker.js",revision:"bc5aa5b64cb0e29c8e502685cbc20293"},{url:"/i-website/dist/worker/json.worker.js",revision:"2a6e3d32af8a17b92732e2e2e36105c4"}],{})}));
