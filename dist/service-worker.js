if(!self.define){let i,e={};const s=(s,b)=>(s=new URL(s+".js",b).href,e[s]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=s,i.onload=e,document.head.appendChild(i)}else i=s,importScripts(s),e()})).then((()=>{let i=e[s];if(!i)throw new Error(`Module ${s} didn’t register its module`);return i})));self.define=(b,d)=>{const t=i||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let u={};const a=i=>s(i,t),r={module:{uri:t},exports:u,require:a};e[t]=Promise.all(b.map((i=>r[i]||a(i)))).then((i=>(d(...i),u)))}}define(["./workbox-f91963f8"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"/umis-website/dist/chunk/chunk-vendors.3f1215.js",revision:null},{url:"/umis-website/dist/chunk/copy-to-clipboard.015a3b.js",revision:null},{url:"/umis-website/dist/chunk/countup.5f3fae.js",revision:null},{url:"/umis-website/dist/chunk/driver.5c21ba.js",revision:null},{url:"/umis-website/dist/chunk/driver.css.bb38ff.js",revision:null},{url:"/umis-website/dist/chunk/echarts.6d8a02.js",revision:null},{url:"/umis-website/dist/chunk/js-export-excel.734cd0.js",revision:null},{url:"/umis-website/dist/chunk/less.7f4ade.js",revision:null},{url:"/umis-website/dist/chunk/qrcode2.a840bc.js",revision:null},{url:"/umis-website/dist/chunk/rich-canvas.e70a9b.js",revision:null},{url:"/umis-website/dist/chunk/video-player.a39207.js",revision:null},{url:"/umis-website/dist/chunk/video-player.css.ab3bb2.js",revision:null},{url:"/umis-website/dist/chunk/watermark.01b9b5.js",revision:null},{url:"/umis-website/dist/css/app.3c227134.css",revision:null},{url:"/umis-website/dist/css/chunk-vendors.fb4565cd.css",revision:null},{url:"/umis-website/dist/dll/vendor.manifest.json",revision:"f7b8786465949f24c28e9635c4991fab"},{url:"/umis-website/dist/favicon.ico",revision:"fb18670e339868242239711ddf2c0fe4"},{url:"/umis-website/dist/img/icons/android-chrome-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"/umis-website/dist/img/icons/android-chrome-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"/umis-website/dist/img/icons/android-chrome-maskable-192x192.png",revision:"845a39478d0e2d4d5d32a092de2de250"},{url:"/umis-website/dist/img/icons/android-chrome-maskable-512x512.png",revision:"2695f5feb66cdb0c6f09d0e415824cf9"},{url:"/umis-website/dist/img/icons/apple-touch-icon-120x120.png",revision:"936d6e411cabd71f0e627011c3f18fe2"},{url:"/umis-website/dist/img/icons/apple-touch-icon-152x152.png",revision:"1a034e64d80905128113e5272a5ab95e"},{url:"/umis-website/dist/img/icons/apple-touch-icon-180x180.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"/umis-website/dist/img/icons/apple-touch-icon-60x60.png",revision:"9a2b5c0f19de617685b7b5b42464e7db"},{url:"/umis-website/dist/img/icons/apple-touch-icon-76x76.png",revision:"af28d69d59284dd202aa55e57227b11b"},{url:"/umis-website/dist/img/icons/apple-touch-icon.png",revision:"66830ea6be8e7e94fb55df9f7b778f2e"},{url:"/umis-website/dist/img/icons/favicon-16x16.png",revision:"4bb1a55479d61843b89a2fdafa7849b3"},{url:"/umis-website/dist/img/icons/favicon-32x32.png",revision:"98b614336d9a12cb3f7bedb001da6fca"},{url:"/umis-website/dist/img/icons/msapplication-icon-144x144.png",revision:"b89032a4a5a1879f30ba05a13947f26f"},{url:"/umis-website/dist/img/icons/mstile-150x150.png",revision:"058a3335d15a3eb84e7ae3707ba09620"},{url:"/umis-website/dist/img/icons/safari-pinned-tab.svg",revision:"4e857233cbd3bb2d2db4f78bed62a52f"},{url:"/umis-website/dist/img/loading.5786ac69.svg",revision:"5786ac6997a73e569927b2585b7f12dc"},{url:"/umis-website/dist/index.html",revision:"04bd956b12bdc8665a2f54fe5557c26c"},{url:"/umis-website/dist/js/app.f01e14.js",revision:null},{url:"/umis-website/dist/loading.svg",revision:"5786ac6997a73e569927b2585b7f12dc"},{url:"/umis-website/dist/manifest.json",revision:"69f40570a636b8bb8d8cff3ec21b2661"},{url:"/umis-website/dist/precache-manifest.a25d31205cad3637a6ef9d21ee6aa5d0.js",revision:"a25d31205cad3637a6ef9d21ee6aa5d0"},{url:"/umis-website/dist/service-worker.js",revision:"22899ce7039d1ce8d065bbb48decb36f"},{url:"/umis-website/dist/thumbnail/Action.svg",revision:"8ce054679bd6eb5388347964318dde50"},{url:"/umis-website/dist/thumbnail/Alert.svg",revision:"a105412541a27b925d31de8bba66bfe5"},{url:"/umis-website/dist/thumbnail/Aside.svg",revision:"00d001c7f1f42b49c784a1b54f38b988"},{url:"/umis-website/dist/thumbnail/Avatar.svg",revision:"dffc7b31ce3774027726e59e85ed0c3a"},{url:"/umis-website/dist/thumbnail/Breadcrumb.svg",revision:"1c598a8001ae1361be0be015efa32547"},{url:"/umis-website/dist/thumbnail/Calendar.svg",revision:"a5619a2e66aeb193988e82dd38e687b4"},{url:"/umis-website/dist/thumbnail/Card.svg",revision:"81044ac43d50aa006e1e763e24cc1b42"},{url:"/umis-website/dist/thumbnail/Cards.svg",revision:"6c636176403ed76b65216578cfede70d"},{url:"/umis-website/dist/thumbnail/Carousel.svg",revision:"8028e11855515244750bb1fe1455ae44"},{url:"/umis-website/dist/thumbnail/Cascader.svg",revision:"e8f18dc96cfe559fe5f5741b39ae5d0a"},{url:"/umis-website/dist/thumbnail/Chart.svg",revision:"6710d20b1cb7e39423db7791db05caf4"},{url:"/umis-website/dist/thumbnail/Checkbox.svg",revision:"6619c6071f23ad7cc886d8f944a85ec5"},{url:"/umis-website/dist/thumbnail/Collapse.svg",revision:"29f9b52fccb77b96256ee7d5477d7b4f"},{url:"/umis-website/dist/thumbnail/Colorpicker.svg",revision:"3b5545573e4b3b8fe85a1b87c014b00c"},{url:"/umis-website/dist/thumbnail/Combo.svg",revision:"3ec4e93bdd4009d0bfebd2aaabaee8f0"},{url:"/umis-website/dist/thumbnail/Count.svg",revision:"0ae4e59b35225daefa6da756c55a4b58"},{url:"/umis-website/dist/thumbnail/Data.svg",revision:"7e8bf2ea36c1746e4c5329caf8ccb1ea"},{url:"/umis-website/dist/thumbnail/Datepicker.svg",revision:"09909e210574af6ef6dc494d5c911230"},{url:"/umis-website/dist/thumbnail/Dialog.svg",revision:"3887b7708419cdb1597d80825c30ece9"},{url:"/umis-website/dist/thumbnail/Divider.svg",revision:"3a51eec1fcf31f2f5ed8a55daec29dc6"},{url:"/umis-website/dist/thumbnail/Drawer.svg",revision:"568c37a660041c49f65e5f89c22623df"},{url:"/umis-website/dist/thumbnail/Dropdown.svg",revision:"266eed66102fc798cd06f887bc224dda"},{url:"/umis-website/dist/thumbnail/Each.svg",revision:"3972c5bd51498f392174455d22b96569"},{url:"/umis-website/dist/thumbnail/Empty.svg",revision:"dd877d1e8ce1f1d5c00917bc3320fdb9"},{url:"/umis-website/dist/thumbnail/Footer.svg",revision:"00d001c7f1f42b49c784a1b54f38b988"},{url:"/umis-website/dist/thumbnail/Form.svg",revision:"3ec4e93bdd4009d0bfebd2aaabaee8f0"},{url:"/umis-website/dist/thumbnail/Grid.svg",revision:"9aafb4a06c6ab283113661c9655d79d5"},{url:"/umis-website/dist/thumbnail/Header.svg",revision:"00d001c7f1f42b49c784a1b54f38b988"},{url:"/umis-website/dist/thumbnail/Html.svg",revision:"d986043645a2f0a3c92d5bae678b79e5"},{url:"/umis-website/dist/thumbnail/Icon.svg",revision:"e0199bfb3140a5c9040160011d834ac7"},{url:"/umis-website/dist/thumbnail/Image.svg",revision:"c6299b5d87d362eea701ca3a2c737903"},{url:"/umis-website/dist/thumbnail/Input.svg",revision:"c536cf3d41e15d35abc38315ba001b79"},{url:"/umis-website/dist/thumbnail/Layout.svg",revision:"62508fd41dcc4fc0842ee09c7a8748cc"},{url:"/umis-website/dist/thumbnail/List.svg",revision:"00d001c7f1f42b49c784a1b54f38b988"},{url:"/umis-website/dist/thumbnail/Main.svg",revision:"00d001c7f1f42b49c784a1b54f38b988"},{url:"/umis-website/dist/thumbnail/Mapping.svg",revision:"4315dcfec9e510ee8c25a40fabc793c5"},{url:"/umis-website/dist/thumbnail/Menu.svg",revision:"35ab483cdf47b4a702176969b2e8f842"},{url:"/umis-website/dist/thumbnail/Number.svg",revision:"a484361729922db25cbbf0061319b6f1"},{url:"/umis-website/dist/thumbnail/Page-header.svg",revision:"f38ed05f0418be7c842872de59779705"},{url:"/umis-website/dist/thumbnail/Page.svg",revision:"568c37a660041c49f65e5f89c22623df"},{url:"/umis-website/dist/thumbnail/Progress.svg",revision:"feb0d896e0aa4925af3ecca5c84b51ea"},{url:"/umis-website/dist/thumbnail/Qrcode.svg",revision:"95bcb59854c18d449f53c407ce9a2e5f"},{url:"/umis-website/dist/thumbnail/Radio.svg",revision:"281a77f943163c81a546eae8c85e5dae"},{url:"/umis-website/dist/thumbnail/Rate.svg",revision:"c8d57e3afcd40cf5e9103e934214e1c6"},{url:"/umis-website/dist/thumbnail/Result.svg",revision:"383faa40327564974635768ea1e6fda3"},{url:"/umis-website/dist/thumbnail/Select.svg",revision:"b249bb3340defca67e595bd9134fd12c"},{url:"/umis-website/dist/thumbnail/Service.svg",revision:"d986043645a2f0a3c92d5bae678b79e5"},{url:"/umis-website/dist/thumbnail/Silder.svg",revision:"8caab9ac0670fde0c2e9f8024b22db9a"},{url:"/umis-website/dist/thumbnail/Static.svg",revision:"ce78141f8ec9d9f0563b4673b62542ce"},{url:"/umis-website/dist/thumbnail/Steps.svg",revision:"4a0b023c098ecc643489594097293555"},{url:"/umis-website/dist/thumbnail/Switch.svg",revision:"750f6b0f464bdbb7a6da1a6cc0b6b6b1"},{url:"/umis-website/dist/thumbnail/Table.svg",revision:"cf5f3fbd51bb63c85ed47f14133a15ac"},{url:"/umis-website/dist/thumbnail/Tabs.svg",revision:"dae1b1d369936a55a573f5c150dd384d"},{url:"/umis-website/dist/thumbnail/Timeline.svg",revision:"d4cb4c86c39e62063ffc6406b2b6720f"},{url:"/umis-website/dist/thumbnail/Timepicker.svg",revision:"f0b4e23cc23e9d9c5a1567d70b763933"},{url:"/umis-website/dist/thumbnail/Todo.svg",revision:"5f97dcb1901e081df736702fddb48f13"},{url:"/umis-website/dist/thumbnail/Upload.svg",revision:"953daea3c43db6f43a8a1c6ef2d84c65"},{url:"/umis-website/dist/thumbnail/Video.svg",revision:"57850aaee20f102f921c6f82a6f86765"},{url:"/umis-website/dist/thumbnail/Wrapper.svg",revision:"62508fd41dcc4fc0842ee09c7a8748cc"},{url:"/umis-website/dist/worker/editor.worker.js",revision:"30d3c1d4295bbea520db88777deeacb4"},{url:"/umis-website/dist/worker/json.worker.js",revision:"fe0cd5da9c0af7960b0d16ce2daad06d"}],{})}));
