if(!self.define){let i,e={};const s=(s,c)=>(s=new URL(s+".js",c).href,e[s]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=s,i.onload=e,document.head.appendChild(i)}else i=s,importScripts(s),e()})).then((()=>{let i=e[s];if(!i)throw new Error(`Module ${s} didn’t register its module`);return i})));self.define=(c,d)=>{const r=i||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let n={};const o=i=>s(i,r),t={module:{uri:r},exports:n,require:o};e[r]=Promise.all(c.map((i=>t[i]||o(i)))).then((i=>(d(...i),n)))}}define(["./workbox-4752ef36"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"/i-website/dist/chunk/chunk-2d0c1ed0.a70977.js",revision:null},{url:"/i-website/dist/chunk/chunk-99aa3c1e.59dca6.js",revision:null},{url:"/i-website/dist/chunk/less.330dcd.js",revision:null},{url:"/i-website/dist/circle.svg",revision:"ae48e2078551e8a64156f767f51e5254"},{url:"/i-website/dist/css/app.1935ef39.css",revision:null},{url:"/i-website/dist/css/chunk-vendors.a5a56f7b.css",revision:null},{url:"/i-website/dist/css/monaco-editor.719b2d48.css",revision:null},{url:"/i-website/dist/favicon.ico",revision:"fb18670e339868242239711ddf2c0fe4"},{url:"/i-website/dist/fonts/codicon.805fb6ad.ttf",revision:"805fb6ad1751ed8b849b5bf9be742ab5"},{url:"/i-website/dist/img/circle.ae48e207.svg",revision:"ae48e2078551e8a64156f767f51e5254"},{url:"/i-website/dist/img/icons/android-chrome-192x192.png",revision:"17603ce7dfffd91f9d4e71f884c16552"},{url:"/i-website/dist/img/icons/android-chrome-512x512.png",revision:"cef583d86c3ad023bc650651d5a353a6"},{url:"/i-website/dist/img/icons/apple-touch-icon.png",revision:"8cdd7d67b9ce440b6e660426c13f548d"},{url:"/i-website/dist/img/icons/favicon-16x16.png",revision:"90b07ae88255cce77000bf3560f8ba70"},{url:"/i-website/dist/img/icons/favicon-32x32.png",revision:"7ace12ccae0aeb68e016a1201aaf0578"},{url:"/i-website/dist/img/icons/favicon.ico",revision:"4cb0206694f4ffa408d72171e5e419c6"},{url:"/i-website/dist/img/icons/logo-300x300.jpg",revision:"51ade93364924d6ae3ecbd72acae00d3"},{url:"/i-website/dist/img/icons/logo-300x300.png",revision:"8334e854672aa8c86729d37c30f9d287"},{url:"/i-website/dist/img/loading.dd9336d7.svg",revision:"dd9336d77da4dcd3cca2210058c5af86"},{url:"/i-website/dist/index.html",revision:"bbda32f5352652809fbd1b3eebcab777"},{url:"/i-website/dist/js/app.a520f4.js",revision:null},{url:"/i-website/dist/manifest.json",revision:"3866f3ee76597fcdadc88a83a339fdae"},{url:"/i-website/dist/precache-manifest.2e9061967639c368cc6bffd7f0c72689.js",revision:"2e9061967639c368cc6bffd7f0c72689"},{url:"/i-website/dist/service-worker.js",revision:"5c912c3e1a11365c2290418edb7daf21"},{url:"/i-website/dist/worker/editor.worker.js",revision:"bc5aa5b64cb0e29c8e502685cbc20293"},{url:"/i-website/dist/worker/json.worker.js",revision:"2a6e3d32af8a17b92732e2e2e36105c4"}],{})}));
