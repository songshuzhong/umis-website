if(!self.define){let i,e={};const s=(s,n)=>(s=new URL(s+".js",n).href,e[s]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=s,i.onload=e,document.head.appendChild(i)}else i=s,importScripts(s),e()})).then((()=>{let i=e[s];if(!i)throw new Error(`Module ${s} didn’t register its module`);return i})));self.define=(n,c)=>{const r=i||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const d=i=>s(i,r),o={module:{uri:r},exports:t,require:d};e[r]=Promise.all(n.map((i=>o[i]||d(i)))).then((i=>(c(...i),t)))}}define(["./workbox-4752ef36"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"/i-website/dist/chunk/chunk-2d0b6d26.7147c5.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d0c0c0b.4c5fb1.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d0c1ed0.a70977.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d221862.ff573b.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d2288c5.eb871b.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d237711.672823.js",revision:null},{url:"/i-website/dist/chunk/chunk-cc2ea41a.f15388.js",revision:null},{url:"/i-website/dist/chunk/chunk-vendors.b8145e.js",revision:null},{url:"/i-website/dist/circle.svg",revision:"ae48e2078551e8a64156f767f51e5254"},{url:"/i-website/dist/css/app.e3547a87.css",revision:null},{url:"/i-website/dist/css/chunk-cb2af0f4.719b2d48.css",revision:null},{url:"/i-website/dist/css/chunk-vendors.a5a56f7b.css",revision:null},{url:"/i-website/dist/favicon.ico",revision:"fb18670e339868242239711ddf2c0fe4"},{url:"/i-website/dist/fonts/codicon.805fb6ad.ttf",revision:"805fb6ad1751ed8b849b5bf9be742ab5"},{url:"/i-website/dist/img/circle.ae48e207.svg",revision:"ae48e2078551e8a64156f767f51e5254"},{url:"/i-website/dist/img/icons/android-chrome-192x192.png",revision:"17603ce7dfffd91f9d4e71f884c16552"},{url:"/i-website/dist/img/icons/android-chrome-512x512.png",revision:"cef583d86c3ad023bc650651d5a353a6"},{url:"/i-website/dist/img/icons/apple-touch-icon.png",revision:"8cdd7d67b9ce440b6e660426c13f548d"},{url:"/i-website/dist/img/icons/favicon-16x16.png",revision:"90b07ae88255cce77000bf3560f8ba70"},{url:"/i-website/dist/img/icons/favicon-32x32.png",revision:"7ace12ccae0aeb68e016a1201aaf0578"},{url:"/i-website/dist/img/icons/favicon.ico",revision:"4cb0206694f4ffa408d72171e5e419c6"},{url:"/i-website/dist/img/icons/logo-300x300.jpg",revision:"51ade93364924d6ae3ecbd72acae00d3"},{url:"/i-website/dist/img/icons/logo-300x300.png",revision:"8334e854672aa8c86729d37c30f9d287"},{url:"/i-website/dist/index.html",revision:"334c009abe7e5083f83371d6f2c75e4d"},{url:"/i-website/dist/js/app.59d741.js",revision:null},{url:"/i-website/dist/js/spark-md5.min.js",revision:"6cc0b8c4be9a71f032824bbef584340e"},{url:"/i-website/dist/manifest.json",revision:"3866f3ee76597fcdadc88a83a339fdae"},{url:"/i-website/dist/precache-manifest.07893fd0e5c9e63f41920b03e9ac3af5.js",revision:"07893fd0e5c9e63f41920b03e9ac3af5"},{url:"/i-website/dist/service-worker.js",revision:"baf47e86dd63872c529108503908b769"},{url:"/i-website/dist/worker/editor.worker.js",revision:"bc5aa5b64cb0e29c8e502685cbc20293"},{url:"/i-website/dist/worker/json.worker.js",revision:"2a6e3d32af8a17b92732e2e2e36105c4"}],{})}));
