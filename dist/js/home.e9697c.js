(function(e){function t(t){for(var o,r,a=t[0],s=t[1],u=t[2],d=0,l=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&l.push(c[r][0]),c[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);h&&h(t);while(l.length)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var a=n[r];0!==c[a]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={home:0},c={home:0},i=[];function a(e){return s.p+"chunk/"+({}[e]||e)+"."+{"chunk-2d2375a2":"88052c","chunk-44b38984":"3b3aab","chunk-74bd3adc":"510cba","chunk-2d2380f4":"6b78cd","chunk-565c88eb":"d1b375","chunk-f1a323d4":"d2714b","chunk-2d0b2c3a":"e99c5e","chunk-76d50c67":"512994","chunk-2d0b3a30":"cf03f8","chunk-2d0e595f":"d5553b","chunk-2d0f05f6":"0b8915","chunk-2d20fcf7":"3b4d1a","chunk-2d21b8cc":"3b7e07"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-44b38984":1,"chunk-565c88eb":1,"chunk-76d50c67":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-2d2375a2":"31d6cfe0","chunk-44b38984":"36f8d24d","chunk-74bd3adc":"31d6cfe0","chunk-2d2380f4":"31d6cfe0","chunk-565c88eb":"9834b4e4","chunk-f1a323d4":"31d6cfe0","chunk-2d0b2c3a":"31d6cfe0","chunk-76d50c67":"a3e01b5a","chunk-2d0b3a30":"31d6cfe0","chunk-2d0e595f":"31d6cfe0","chunk-2d0f05f6":"31d6cfe0","chunk-2d20fcf7":"31d6cfe0","chunk-2d21b8cc":"31d6cfe0"}[e]+".css",c=s.p+o,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var u=i[a],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===o||d===c))return t()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){u=l[a],d=u.getAttribute("data-href");if(d===o||d===c)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var o=t&&t.target&&t.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],h.parentNode.removeChild(h),n(i)},h.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){r[e]=0})));var o=c[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=c[e]=[t,n]}));t.push(o[2]=i);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=a(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(h);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,n[1](l)}c[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/i-website/dist/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var h=d;i.push([5,"chunk-vendors"]),n()})({0:function(e,t){},5:function(e,t,n){e.exports=n("8073")},"685a":function(e,t,n){"use strict";let o,r,c;t["a"]={getUa(){return o},setNotice(e){return c=e,this},setUa(e){o=e},setWidth(e){return r=e+"px",this},detectUa(){return o=/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent),o},toPc(){const e=document.documentElement.classList;e.remove("mobile"),e.add("pc")},toMobile(){const e=document.documentElement.classList;e.remove("pc"),e.add("mobile")},toHorizontal(){const e=setTimeout(()=>{clearTimeout(e),document.body.setAttribute("style","width:"+r),c&&c(),c=null},500);document.body.classList.add("horizontal")},leavePlayground(){const e=setTimeout(()=>{clearTimeout(e),document.body.setAttribute("style","unset")},500);document.documentElement.classList.remove("playground"),document.body.classList.remove("horizontal")}}},7729:function(e,t,n){},8073:function(e,t,n){"use strict";n.r(t);var o=n("1258"),r=n("656b"),c=n("7d39"),i=n.n(c),a=n("fbb7"),s=n("0e44"),u=n("cb66"),d=n("9109"),l=n("685a");let h;const p=Object(a["createRouter"])({history:Object(a["createWebHashHistory"])("/home"),routes:[{path:"/",name:"IHome",redirect:"/index",component:c["Schema"],props:{initSchema:d,classname:"i-renderer-website-schema__container",canSchemaUpdate:!1,iProtal:!0},children:[{path:"/index",component:c["Schema"],props:{url:Object({NODE_ENV:"production",VUE_APP_API_BASE:"https://songshuzhong.github.io/i-website/public",VUE_APP_API_NODE_ENV:"gp",VUE_APP_CONTEXT_PATH_HOME:"/home",VUE_APP_CONTEXT_PATH_WEBSITE:"/website",VUE_APP_NODE_ENV:"production",BASE_URL:"/i-website/dist/"}).VUE_APP_PUBLIC_PATH_HOME+"/page/home.json"}},{path:"/logs",component:c["Schema"],props:{url:Object({NODE_ENV:"production",VUE_APP_API_BASE:"https://songshuzhong.github.io/i-website/public",VUE_APP_API_NODE_ENV:"gp",VUE_APP_CONTEXT_PATH_HOME:"/home",VUE_APP_CONTEXT_PATH_WEBSITE:"/website",VUE_APP_NODE_ENV:"production",BASE_URL:"/i-website/dist/"}).VUE_APP_PUBLIC_PATH_HOME+"/page/logs.json"}},{path:"/me",component:c["Schema"],props:{url:Object({NODE_ENV:"production",VUE_APP_API_BASE:"https://songshuzhong.github.io/i-website/public",VUE_APP_API_NODE_ENV:"gp",VUE_APP_CONTEXT_PATH_HOME:"/home",VUE_APP_CONTEXT_PATH_WEBSITE:"/website",VUE_APP_NODE_ENV:"production",BASE_URL:"/i-website/dist/"}).VUE_APP_PUBLIC_PATH_HOME+"/page/me.json"}},{path:"/quality",component:c["Schema"],props:{url:"https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/page/me"},meta:{permission:"quality"}},{path:"/playground",component:c["Schema"],classname:"i-renderer-website-schema__playground",props:{url:"https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/page/playground"},beforeEnter:()=>(document.documentElement.classList.add("playground"),!0)},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>n.e("chunk-44b38984").then(n.bind(null,"aa1f")),props:{status:404}},{path:"/forbidden",name:"Forbidden",component:()=>n.e("chunk-44b38984").then(n.bind(null,"aa1f")),props:{status:403}}]}],scrollBehavior(e,t,n){return n||{left:0,top:0}}});p.beforeEach((e,t,n)=>{var o;if(e.path!==t.path&&(h=s["a"].service({fullscreen:!0,customClass:"i-website__router__loader"})),null!==e&&void 0!==e&&null!==(o=e.meta)&&void 0!==o&&o.permission){const t=Object(c["checkPermission"])(e.meta.permission);if(!t)return n("/home/forbidden")}n()}),p.afterEach((e,t)=>{"/playground"===e.path&&l["a"].getUa()&&u["a"].confirm("建议横屏下浏览","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{l["a"].toHorizontal()}).catch(()=>{console.log("cancel horizontal")}),"/playground"===t.path&&l["a"].leavePlayground();const n=setTimeout(()=>{h&&"function"===typeof h.close&&(h.close(),clearTimeout(n))},1e3)});var m=p;function b(e,t,n,r,c,i){const a=Object(o["resolveComponent"])("router-view"),s=Object(o["resolveComponent"])("el-config-provider");return Object(o["openBlock"])(),Object(o["createBlock"])(s,{locale:e.locale},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(a)]),_:1},8,["locale"])}var f=n("60df"),_=n("4853"),g=Object(o["defineComponent"])({name:"Application",components:{[f["a"].name]:f["a"]},setup(){const{proxy:e}=Object(o["getCurrentInstance"])(),t=()=>{e.$message.success("切换到PC端体验更加哦！")};return Object(o["onMounted"])(()=>{const e=l["a"].setNotice(t).setWidth(window.innerHeight).detectUa();e?l["a"].toMobile():l["a"].toPc()}),{locale:_["a"]}}}),E=n("9c21"),P=n.n(E);const y=P()(g,[["render",b]]);var A=y,T=n("ddb8");n("4daa"),n("5522"),n("7729");const O=Object(o["createApp"])(A);Object(T["a"])(Object({NODE_ENV:"production",VUE_APP_API_BASE:"https://songshuzhong.github.io/i-website/public",VUE_APP_API_NODE_ENV:"gp",VUE_APP_CONTEXT_PATH_HOME:"/home",VUE_APP_CONTEXT_PATH_WEBSITE:"/website",VUE_APP_NODE_ENV:"production",BASE_URL:"/i-website/dist/"}).VUE_APP_SERVICE_WORKER),O.use(r["a"]).use(i.a).use(m).mount(".i-website-app__container")},9109:function(e){e.exports=JSON.parse('{"renderer":"page","classname":"i-home__page","body":{"renderer":"layout","direction":"vertical","body":[{"renderer":"header","classname":"flex j-sb a-c","body":[{"renderer":"avatar","fit":"contain","src":"https://songshuzhong.github.io/i-assets/public/img/shuttle.png","title":"百搭云平台"},{"renderer":"menu","name":"i-website-nav","router":true,"ellipsis":false,"defaultActive":"","body":[{"name":"/","title":"首页","renderer":"menuitem","icon":"HomeFilled"},{"name":"playground","title":"即刻体验","renderer":"menuitem","icon":"LocationInformation"},{"name":"https://songshuzhong.github.io/i-website/dist/index.html","title":" 案例合集","renderer":"menuitem","icon":"DataBoard","extra":true},{"name":"logs","title":"更新日志","renderer":"menuitem","icon":"Tickets"},{"name":"quality","title":"荣誉资质","renderer":"menuitem","icon":"Aim"},{"name":"me","title":"关于我","renderer":"menuitem","icon":"Avatar","extra":true}]}]},{"renderer":"main","routerView":true,"iProtal":true,"classname":"i-home__main"},{"renderer":"footer","classname":"i-home__footer","body":[{"renderer":"wrapper","body":[{"renderer":"html","html":"链接"},{"renderer":"action","isText":true,"text":"代码仓库","actionType":"url","url":"https://songshuzhong.github.io/i-website/dist/index.html"},{"renderer":"action","isText":true,"text":"更新日志","actionType":"url","url":"https://songshuzhong.github.io/i-website/dist/index.html"},{"renderer":"action","isText":true,"text":"设计理念","actionType":"url","url":"https://songshuzhong.github.io/i-website/dist/index.html"}]},{"renderer":"wrapper","body":[{"renderer":"html","html":"相关"},{"renderer":"action","isText":true,"text":"react","actionType":"url","url":"https://react.docschina.org/"},{"renderer":"action","isText":true,"text":"vue","actionType":"url","url":"https://cn.vuejs.org/index.html"}]},{"renderer":"wrapper","body":[{"renderer":"html","html":"联系"},{"renderer":"action","isText":true,"text":"qq: 1462026137","actionType":"copy","content":"1462026137"},{"renderer":"action","isText":true,"text":"phone: 15510351839","actionType":"copy","content":"15510351839"},{"renderer":"action","isText":true,"text":"e-mail: sshuzhong@outlook.com","actionType":"mail"}]}]},{"renderer":"footer","classname":"i-home__copyright","body":"copyright © 2022 sshuzhong@outlook.com"}]}}')},ddb8:function(e,t,n){"use strict";var o=n("9e21"),r=n("0979");const c=!1,i=e=>{const t=c?"/i-website/dist/service-worker.js":e+"/service-worker.js";Object(r["a"])(t,{updatefound(){Object(o["a"])({title:"温馨提示",message:"检测到新版本，正在下载中，请稍后...",type:"info",position:"bottom-right",offset:50})},updated(){Object(o["a"])({title:"温馨提示",message:"版本更新完成，10s后刷新项目",type:"success",position:"bottom-right",duration:1e4,offset:50});const e=setTimeout(()=>{clearTimeout(e),window.location.reload()},1e4)}})};t["a"]=i}});