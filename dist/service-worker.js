if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let l={};const b=e=>s(e,r),o={module:{uri:r},exports:l,require:b};i[r]=Promise.all(n.map((e=>o[e]||b(e)))).then((e=>(c(...e),l)))}}define(["./workbox-6e0ee806"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/i-website/baidayun.png",revision:"c8c289f4d74237c22607f19cd897c254"},{url:"/i-website/chunk/chunk-2d0b3106.04df0a.js",revision:null},{url:"/i-website/chunk/chunk-2d0b3a30.cf03f8.js",revision:null},{url:"/i-website/chunk/chunk-2d0e595f.d5553b.js",revision:null},{url:"/i-website/chunk/chunk-2d0f05f6.0b8915.js",revision:null},{url:"/i-website/chunk/chunk-2d20fcf7.3b4d1a.js",revision:null},{url:"/i-website/chunk/chunk-2d21b8cc.3b7e07.js",revision:null},{url:"/i-website/chunk/chunk-2d2375a2.79eaad.js",revision:null},{url:"/i-website/chunk/chunk-2d2380f4.86f3dd.js",revision:null},{url:"/i-website/chunk/chunk-44b38984.432ef6.js",revision:null},{url:"/i-website/chunk/chunk-7021b684.a0b64c.js",revision:null},{url:"/i-website/chunk/chunk-74bd3adc.510cba.js",revision:null},{url:"/i-website/chunk/chunk-76d50c67.512994.js",revision:null},{url:"/i-website/chunk/chunk-common.a7bfe2.js",revision:null},{url:"/i-website/chunk/editor.10154f.js",revision:null},{url:"/i-website/circle.svg",revision:"ae48e2078551e8a64156f767f51e5254"},{url:"/i-website/css/chunk-44b38984.0ea655d4.css",revision:null},{url:"/i-website/css/chunk-565c88eb.142961a8.css",revision:null},{url:"/i-website/css/chunk-76d50c67.a3e01b5a.css",revision:null},{url:"/i-website/css/chunk-common.b2726f2a.css",revision:null},{url:"/i-website/css/chunk-vendors.b69348fc.css",revision:null},{url:"/i-website/css/home.0eba097a.css",revision:null},{url:"/i-website/css/login.803f6719.css",revision:null},{url:"/i-website/css/mobile.3a45e9b3.css",revision:null},{url:"/i-website/css/playground.47028eed.css",revision:null},{url:"/i-website/css/website.613e1f71.css",revision:null},{url:"/i-website/editing.html",revision:"c5521bff0a7d3e12001e6c938f7b79c2"},{url:"/i-website/favicon.png",revision:"7ace12ccae0aeb68e016a1201aaf0578"},{url:"/i-website/fonts/codicon.805fb6ad.ttf",revision:"805fb6ad1751ed8b849b5bf9be742ab5"},{url:"/i-website/home.html",revision:"b65ba45675709aff1ca7fe5d3a88ee4a"},{url:"/i-website/img/attitude.jpg",revision:"633dc6ddffa7dc219bd52cd949d90155"},{url:"/i-website/img/circle.ae48e207.svg",revision:"ae48e2078551e8a64156f767f51e5254"},{url:"/i-website/img/forbidden.25b99dca.jpeg",revision:"25b99dcac91b4c512353eccd69f391e4"},{url:"/i-website/img/icons/android-chrome-192x192.png",revision:"17603ce7dfffd91f9d4e71f884c16552"},{url:"/i-website/img/icons/android-chrome-512x512.png",revision:"cef583d86c3ad023bc650651d5a353a6"},{url:"/i-website/img/icons/apple-touch-icon.png",revision:"8cdd7d67b9ce440b6e660426c13f548d"},{url:"/i-website/img/icons/favicon-16x16.png",revision:"90b07ae88255cce77000bf3560f8ba70"},{url:"/i-website/img/icons/favicon-32x32.png",revision:"7ace12ccae0aeb68e016a1201aaf0578"},{url:"/i-website/img/icons/favicon.ico",revision:"4cb0206694f4ffa408d72171e5e419c6"},{url:"/i-website/img/icons/logo-300x300.jpg",revision:"51ade93364924d6ae3ecbd72acae00d3"},{url:"/i-website/img/icons/logo-300x300.png",revision:"8334e854672aa8c86729d37c30f9d287"},{url:"/i-website/img/loading.dd9336d7.svg",revision:"dd9336d77da4dcd3cca2210058c5af86"},{url:"/i-website/img/not-found.06512621.jpeg",revision:"06512621b564df8be841598d77e6e195"},{url:"/i-website/img/qqb.png",revision:"70de1811bbfd30d72a89c960d94a82ed"},{url:"/i-website/img/teacher20240603202001.png",revision:"628fd7df83ce1a174bc18972c71ce3b9"},{url:"/i-website/img/teacher20240603202012.png",revision:"879aed357d71ac0e7f88ec8dc7222685"},{url:"/i-website/img/teacher20240604070713.png",revision:"11b9b364a9f968705f4e8a05531d6e4a"},{url:"/i-website/js/editing.fe1107.js",revision:null},{url:"/i-website/js/home.950025.js",revision:null},{url:"/i-website/js/login.c4c4ef.js",revision:null},{url:"/i-website/js/mobile.6979f8.js",revision:null},{url:"/i-website/js/playground.f95a7c.js",revision:null},{url:"/i-website/js/website.2374a6.js",revision:null},{url:"/i-website/login.html",revision:"093912234bc9460b0bf1e7d6a991d659"},{url:"/i-website/manifest.json",revision:"3866f3ee76597fcdadc88a83a339fdae"},{url:"/i-website/mobile.html",revision:"135f81a8a49aa346c44b67f546f49a9a"},{url:"/i-website/page/home.json",revision:"d243854b6a06830ff0e7330a269cb484"},{url:"/i-website/page/logs.json",revision:"cad6b62700e676ce0d4394ddc178d9bf"},{url:"/i-website/page/me.json",revision:"bda9296f03776b645762d539990769c9"},{url:"/i-website/page/playground.json",revision:"8158c8101263d9a7457e6301499d5a36"},{url:"/i-website/playground.html",revision:"10c34eaa6cb9747728cce4cc014cf7fa"},{url:"/i-website/precache-manifest.ba3055fe73710465d35d03b8231d4eae.js",revision:"ba3055fe73710465d35d03b8231d4eae"},{url:"/i-website/service-worker.js",revision:"0ddc558ffb76183d4ff4899088f897d2"},{url:"/i-website/shuttle.png",revision:"9df39e09fcb3cb9b413a46f9ab221d71"},{url:"/i-website/vue3-sfc-loader.js",revision:"bd2cb3a89ccf10dfeb5c743ff45fab41"},{url:"/i-website/website.html",revision:"9d48668c432e4831dcb7f7c83a85c011"},{url:"/i-website/worker/editor.worker.js",revision:"a1b4cd10b9eb4da99f75e7c683c025ca"},{url:"/i-website/worker/html.worker.js",revision:"ecc3513d1d2ba607c678a814a01e2062"},{url:"/i-website/worker/json.worker.js",revision:"360f53cac638ac3a41254a3000ed7f82"}],{})}));
