if(!self.define){let i,e={};const s=(s,n)=>(s=new URL(s+".js",n).href,e[s]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=s,i.onload=e,document.head.appendChild(i)}else i=s,importScripts(s),e()})).then((()=>{let i=e[s];if(!i)throw new Error(`Module ${s} didn’t register its module`);return i})));self.define=(n,c)=>{const d=i||("document"in self?document.currentScript.src:"")||location.href;if(e[d])return;let r={};const t=i=>s(i,d),o={module:{uri:d},exports:r,require:t};e[d]=Promise.all(n.map((i=>o[i]||t(i)))).then((i=>(c(...i),r)))}}define(["./workbox-46d0bffa"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"/i-website/dist/chunk/chunk-2d0b8b3e.85d3ce.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d0ccba9.9ea3ea.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d0db7d7.1ade0d.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d208dfb.e2897a.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d225f49.1a8097.js",revision:null},{url:"/i-website/dist/chunk/chunk-63ab760a.9427da.js",revision:null},{url:"/i-website/dist/chunk/chunk-6ce51b6e.a03f47.js",revision:null},{url:"/i-website/dist/chunk/chunk-76d1d221.c68e51.js",revision:null},{url:"/i-website/dist/chunk/chunk-b2126b70.6a540e.js",revision:null},{url:"/i-website/dist/chunk/editor.08ddb6.js",revision:null},{url:"/i-website/dist/circle.svg",revision:"ae48e2078551e8a64156f767f51e5254"},{url:"/i-website/dist/css/chunk-476d9766.ba4ddaba.css",revision:null},{url:"/i-website/dist/css/chunk-6ce51b6e.90717131.css",revision:null},{url:"/i-website/dist/css/chunk-76d1d221.c6997ae2.css",revision:null},{url:"/i-website/dist/css/chunk-vendors.ccecdfeb.css",revision:null},{url:"/i-website/dist/css/home.9d267e69.css",revision:null},{url:"/i-website/dist/css/index.a45c11e5.css",revision:null},{url:"/i-website/dist/css/playground.33084e77.css",revision:null},{url:"/i-website/dist/favicon.ico",revision:"fb18670e339868242239711ddf2c0fe4"},{url:"/i-website/dist/fonts/codicon.805fb6ad.ttf",revision:"805fb6ad1751ed8b849b5bf9be742ab5"},{url:"/i-website/dist/home.html",revision:"833845d9f9e478e99b94afb15f4b4c8a"},{url:"/i-website/dist/img/circle.ae48e207.svg",revision:"ae48e2078551e8a64156f767f51e5254"},{url:"/i-website/dist/img/forbidden.25b99dca.jpeg",revision:"25b99dcac91b4c512353eccd69f391e4"},{url:"/i-website/dist/img/icons/android-chrome-192x192.png",revision:"17603ce7dfffd91f9d4e71f884c16552"},{url:"/i-website/dist/img/icons/android-chrome-512x512.png",revision:"cef583d86c3ad023bc650651d5a353a6"},{url:"/i-website/dist/img/icons/apple-touch-icon.png",revision:"8cdd7d67b9ce440b6e660426c13f548d"},{url:"/i-website/dist/img/icons/favicon-16x16.png",revision:"90b07ae88255cce77000bf3560f8ba70"},{url:"/i-website/dist/img/icons/favicon-32x32.png",revision:"7ace12ccae0aeb68e016a1201aaf0578"},{url:"/i-website/dist/img/icons/favicon.ico",revision:"4cb0206694f4ffa408d72171e5e419c6"},{url:"/i-website/dist/img/icons/logo-300x300.jpg",revision:"51ade93364924d6ae3ecbd72acae00d3"},{url:"/i-website/dist/img/icons/logo-300x300.png",revision:"8334e854672aa8c86729d37c30f9d287"},{url:"/i-website/dist/img/not-found.06512621.jpeg",revision:"06512621b564df8be841598d77e6e195"},{url:"/i-website/dist/index.html",revision:"13631926781b067cf95dcc29ec67b61a"},{url:"/i-website/dist/js/home.151cc0.js",revision:null},{url:"/i-website/dist/js/index.b4d91e.js",revision:null},{url:"/i-website/dist/js/playground.7cce60.js",revision:null},{url:"/i-website/dist/manifest.json",revision:"3866f3ee76597fcdadc88a83a339fdae"},{url:"/i-website/dist/playground.html",revision:"29553a16cc63574e85b448fdd985049c"},{url:"/i-website/dist/precache-manifest.ff190d814a9dfc7993c163032633be73.js",revision:"ff190d814a9dfc7993c163032633be73"},{url:"/i-website/dist/service-worker.js",revision:"c2423776896a3bbf6fb51a1834035bdd"},{url:"/i-website/dist/shuttle.png",revision:"9df39e09fcb3cb9b413a46f9ab221d71"},{url:"/i-website/dist/worker/editor.worker.js",revision:"96ae88e617004c7b4b4b8f42ac475a74"},{url:"/i-website/dist/worker/json.worker.js",revision:"55a39908513ae7c0fc39a5f1ca0a8088"}],{})}));
