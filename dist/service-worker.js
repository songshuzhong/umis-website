if(!self.define){let i,e={};const s=(s,d)=>(s=new URL(s+".js",d).href,e[s]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=s,i.onload=e,document.head.appendChild(i)}else i=s,importScripts(s),e()})).then((()=>{let i=e[s];if(!i)throw new Error(`Module ${s} didn’t register its module`);return i})));self.define=(d,n)=>{const c=i||("document"in self?document.currentScript.src:"")||location.href;if(e[c])return;let r={};const t=i=>s(i,c),b={module:{uri:c},exports:r,require:t};e[c]=Promise.all(d.map((i=>b[i]||t(i)))).then((i=>(n(...i),r)))}}define(["./workbox-6e0ee806"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"/i-website/dist/api/menu/0767bea4-c7e7-4aa7-a1b5-2fd5e1ec4a7f.json",revision:"2e209dd5d2908f51a7e40ed16cab18a2"},{url:"/i-website/dist/api/user.json",revision:"bd58c4d30dcb3f76a1c6ce2469a869ca"},{url:"/i-website/dist/baidayun.png",revision:"c8c289f4d74237c22607f19cd897c254"},{url:"/i-website/dist/chunk/chunk-2d0b2c3a.fe27cb.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d0b3a30.cf03f8.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d0e595f.d5553b.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d0f05f6.0b8915.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d20fcf7.3b4d1a.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d21b8cc.3b7e07.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d2375a2.79eaad.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d2380f4.86f3dd.js",revision:null},{url:"/i-website/dist/chunk/chunk-44b38984.432ef6.js",revision:null},{url:"/i-website/dist/chunk/chunk-74bd3adc.510cba.js",revision:null},{url:"/i-website/dist/chunk/chunk-76d50c67.512994.js",revision:null},{url:"/i-website/dist/chunk/chunk-f1a323d4.ea14e9.js",revision:null},{url:"/i-website/dist/chunk/editor.61c4e9.js",revision:null},{url:"/i-website/dist/circle.svg",revision:"ae48e2078551e8a64156f767f51e5254"},{url:"/i-website/dist/css/chunk-44b38984.0ea655d4.css",revision:null},{url:"/i-website/dist/css/chunk-565c88eb.142961a8.css",revision:null},{url:"/i-website/dist/css/chunk-76d50c67.a3e01b5a.css",revision:null},{url:"/i-website/dist/css/chunk-vendors.0f3db8e6.css",revision:null},{url:"/i-website/dist/css/home.0eba097a.css",revision:null},{url:"/i-website/dist/css/login.803f6719.css",revision:null},{url:"/i-website/dist/css/mobile.3a45e9b3.css",revision:null},{url:"/i-website/dist/css/playground.47028eed.css",revision:null},{url:"/i-website/dist/css/website.613e1f71.css",revision:null},{url:"/i-website/dist/editing.html",revision:"e169084a3f64a7dd78d05af0f47da80b"},{url:"/i-website/dist/favicon.png",revision:"7ace12ccae0aeb68e016a1201aaf0578"},{url:"/i-website/dist/fonts/codicon.805fb6ad.ttf",revision:"805fb6ad1751ed8b849b5bf9be742ab5"},{url:"/i-website/dist/home.html",revision:"595ce6d8bee41542b33612691d0a3692"},{url:"/i-website/dist/img/attitude.jpg",revision:"633dc6ddffa7dc219bd52cd949d90155"},{url:"/i-website/dist/img/circle.ae48e207.svg",revision:"ae48e2078551e8a64156f767f51e5254"},{url:"/i-website/dist/img/forbidden.25b99dca.jpeg",revision:"25b99dcac91b4c512353eccd69f391e4"},{url:"/i-website/dist/img/icons/android-chrome-192x192.png",revision:"17603ce7dfffd91f9d4e71f884c16552"},{url:"/i-website/dist/img/icons/android-chrome-512x512.png",revision:"cef583d86c3ad023bc650651d5a353a6"},{url:"/i-website/dist/img/icons/apple-touch-icon.png",revision:"8cdd7d67b9ce440b6e660426c13f548d"},{url:"/i-website/dist/img/icons/favicon-16x16.png",revision:"90b07ae88255cce77000bf3560f8ba70"},{url:"/i-website/dist/img/icons/favicon-32x32.png",revision:"7ace12ccae0aeb68e016a1201aaf0578"},{url:"/i-website/dist/img/icons/favicon.ico",revision:"4cb0206694f4ffa408d72171e5e419c6"},{url:"/i-website/dist/img/icons/logo-300x300.jpg",revision:"51ade93364924d6ae3ecbd72acae00d3"},{url:"/i-website/dist/img/icons/logo-300x300.png",revision:"8334e854672aa8c86729d37c30f9d287"},{url:"/i-website/dist/img/not-found.06512621.jpeg",revision:"06512621b564df8be841598d77e6e195"},{url:"/i-website/dist/img/qqb.png",revision:"70de1811bbfd30d72a89c960d94a82ed"},{url:"/i-website/dist/img/teacher20240603202001.png",revision:"628fd7df83ce1a174bc18972c71ce3b9"},{url:"/i-website/dist/img/teacher20240603202012.png",revision:"879aed357d71ac0e7f88ec8dc7222685"},{url:"/i-website/dist/img/teacher20240604070713.png",revision:"11b9b364a9f968705f4e8a05531d6e4a"},{url:"/i-website/dist/js/editing.0e4156.js",revision:null},{url:"/i-website/dist/js/home.196b72.js",revision:null},{url:"/i-website/dist/js/login.1a7ab1.js",revision:null},{url:"/i-website/dist/js/mobile.07932f.js",revision:null},{url:"/i-website/dist/js/playground.2a146a.js",revision:null},{url:"/i-website/dist/js/website.a0a2fb.js",revision:null},{url:"/i-website/dist/login.html",revision:"c320b72b4be5fef988f88fd01cad8a55"},{url:"/i-website/dist/manifest.json",revision:"3866f3ee76597fcdadc88a83a339fdae"},{url:"/i-website/dist/mobile.html",revision:"edca645eec8eecfd877e84f26310ddcb"},{url:"/i-website/dist/page/home.json",revision:"d243854b6a06830ff0e7330a269cb484"},{url:"/i-website/dist/page/logs.json",revision:"cad6b62700e676ce0d4394ddc178d9bf"},{url:"/i-website/dist/page/me.json",revision:"bda9296f03776b645762d539990769c9"},{url:"/i-website/dist/page/playground.json",revision:"8158c8101263d9a7457e6301499d5a36"},{url:"/i-website/dist/playground.html",revision:"dd634e35ba7d581616abfd0712156925"},{url:"/i-website/dist/precache-manifest.05dd81aa0402111e9baf9248c7df0aec.js",revision:"05dd81aa0402111e9baf9248c7df0aec"},{url:"/i-website/dist/service-worker.js",revision:"70adc8f9058abc229c66743e6e3cb1b2"},{url:"/i-website/dist/shuttle.png",revision:"9df39e09fcb3cb9b413a46f9ab221d71"},{url:"/i-website/dist/vue3-sfc-loader.js",revision:"bd2cb3a89ccf10dfeb5c743ff45fab41"},{url:"/i-website/dist/website.html",revision:"9db8bdb3fb8c41bf9a73e1a4956dc711"},{url:"/i-website/dist/worker/editor.worker.js",revision:"db883b7efe156f73ef3aee676c9bfe54"},{url:"/i-website/dist/worker/html.worker.js",revision:"e8334c53446315a520d9062cb3998a4d"},{url:"/i-website/dist/worker/json.worker.js",revision:"4610c3daf4cd1abe4dfc69f20a38c258"}],{})}));
