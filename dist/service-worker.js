if(!self.define){let i,e={};const s=(s,n)=>(s=new URL(s+".js",n).href,e[s]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=s,i.onload=e,document.head.appendChild(i)}else i=s,importScripts(s),e()})).then((()=>{let i=e[s];if(!i)throw new Error(`Module ${s} didn’t register its module`);return i})));self.define=(n,d)=>{const r=i||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const c=i=>s(i,r),o={module:{uri:r},exports:u,require:c};e[r]=Promise.all(n.map((i=>o[i]||c(i)))).then((i=>(d(...i),u)))}}define(["./workbox-873c5e43"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"/umis-website/dist/chunk/chinaMap.3d4839.js",revision:null},{url:"/umis-website/dist/chunk/chunk-2d0c1ed0.7fc4eb.js",revision:null},{url:"/umis-website/dist/chunk/chunk-vendors.0bdf73.js",revision:null},{url:"/umis-website/dist/chunk/copy-to-clipboard.015a3b.js",revision:null},{url:"/umis-website/dist/chunk/countup.5f3fae.js",revision:null},{url:"/umis-website/dist/chunk/echarts.6d8a02.js",revision:null},{url:"/umis-website/dist/chunk/editor.9044f1.js",revision:null},{url:"/umis-website/dist/chunk/js-export-excel.734cd0.js",revision:null},{url:"/umis-website/dist/chunk/qrcode2.a840bc.js",revision:null},{url:"/umis-website/dist/chunk/rich-editor.d58071.js",revision:null},{url:"/umis-website/dist/chunk/video-player.a39207.js",revision:null},{url:"/umis-website/dist/chunk/video-player.css.ab3bb2.js",revision:null},{url:"/umis-website/dist/chunk/watermark.01b9b5.js",revision:null},{url:"/umis-website/dist/css/app.464915c4.css",revision:null},{url:"/umis-website/dist/css/chunk-vendors.941ac153.css",revision:null},{url:"/umis-website/dist/css/monaco-editor.719b2d48.css",revision:null},{url:"/umis-website/dist/dll/vendor.manifest.json",revision:"f7b8786465949f24c28e9635c4991fab"},{url:"/umis-website/dist/favicon.ico",revision:"fb18670e339868242239711ddf2c0fe4"},{url:"/umis-website/dist/fonts/codicon.805fb6ad.ttf",revision:"805fb6ad1751ed8b849b5bf9be742ab5"},{url:"/umis-website/dist/img/icons/android-chrome-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"/umis-website/dist/img/icons/android-chrome-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"/umis-website/dist/img/icons/android-chrome-maskable-192x192.png",revision:"845a39478d0e2d4d5d32a092de2de250"},{url:"/umis-website/dist/img/icons/android-chrome-maskable-512x512.png",revision:"2695f5feb66cdb0c6f09d0e415824cf9"},{url:"/umis-website/dist/img/icons/apple-touch-icon-120x120.png",revision:"936d6e411cabd71f0e627011c3f18fe2"},{url:"/umis-website/dist/img/icons/apple-touch-icon-152x152.png",revision:"1a034e64d80905128113e5272a5ab95e"},{url:"/umis-website/dist/img/icons/apple-touch-icon-180x180.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"/umis-website/dist/img/icons/apple-touch-icon-60x60.png",revision:"9a2b5c0f19de617685b7b5b42464e7db"},{url:"/umis-website/dist/img/icons/apple-touch-icon-76x76.png",revision:"af28d69d59284dd202aa55e57227b11b"},{url:"/umis-website/dist/img/icons/apple-touch-icon.png",revision:"66830ea6be8e7e94fb55df9f7b778f2e"},{url:"/umis-website/dist/img/icons/favicon-16x16.png",revision:"4bb1a55479d61843b89a2fdafa7849b3"},{url:"/umis-website/dist/img/icons/favicon-32x32.png",revision:"98b614336d9a12cb3f7bedb001da6fca"},{url:"/umis-website/dist/img/icons/msapplication-icon-144x144.png",revision:"b89032a4a5a1879f30ba05a13947f26f"},{url:"/umis-website/dist/img/icons/mstile-150x150.png",revision:"058a3335d15a3eb84e7ae3707ba09620"},{url:"/umis-website/dist/img/icons/safari-pinned-tab.svg",revision:"4e857233cbd3bb2d2db4f78bed62a52f"},{url:"/umis-website/dist/img/loading.5786ac69.svg",revision:"5786ac6997a73e569927b2585b7f12dc"},{url:"/umis-website/dist/index.html",revision:"f9a6596dd91fc0c5792784aa93c8d34b"},{url:"/umis-website/dist/js/app.c50ea8.js",revision:null},{url:"/umis-website/dist/loading.svg",revision:"5786ac6997a73e569927b2585b7f12dc"},{url:"/umis-website/dist/manifest.json",revision:"69f40570a636b8bb8d8cff3ec21b2661"},{url:"/umis-website/dist/precache-manifest.b814fa4320fe6ec52d200d6055402a17.js",revision:"b814fa4320fe6ec52d200d6055402a17"},{url:"/umis-website/dist/service-worker.js",revision:"a9bec6be9059dd0314278d4bdd323956"},{url:"/umis-website/dist/worker/editor.worker.js",revision:"30d3c1d4295bbea520db88777deeacb4"},{url:"/umis-website/dist/worker/json.worker.js",revision:"fe0cd5da9c0af7960b0d16ce2daad06d"}],{})}));
