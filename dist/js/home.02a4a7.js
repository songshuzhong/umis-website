(function(e){function t(t){for(var n,o,c=t[0],s=t[1],u=t[2],l=0,p=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==i[c]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={home:0},i={home:0},a=[];function c(e){return s.p+"chunk/"+({}[e]||e)+"."+{"chunk-44b38984":"432ef6"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={"chunk-44b38984":1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-44b38984":"0ea655d4"}[e]+".css",i=s.p+n,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var u=a[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===i))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){u=p[c],l=u.getAttribute("data-href");if(l===n||l===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete o[e],d.parentNode.removeChild(d),r(a)},d.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){o[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",p.name="ChunkLoadError",p.type=n,p.request=o,r[1](p)}i[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/i-website/dist/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var d=l;a.push([5,"chunk-vendors","chunk-common"]),r()})({5:function(e,t,r){e.exports=r("8073")},7729:function(e,t,r){},8073:function(e,t,r){"use strict";r.r(t);var n=r("1258"),o=r("656b"),i=r("d6dc"),a=r("fbb7"),c=r("0e44"),s=r("cb66"),u=r("1275"),l=r("9109"),p=r("685a");let d;const h=Object(a["createRouter"])({history:Object(a["createWebHashHistory"])("/home"),routes:[{path:"/",name:"IHome",redirect:"/index",component:u["a"],props:{initSchema:l,classname:"i-renderer-website-schema__container",canSchemaUpdate:!1,iProtal:!0},children:[{path:"/index",component:u["a"],props:{url:Object({NODE_ENV:"production",VUE_APP_NODE_ENV:"production",VUE_APP_CONTEXT_PATH_HOME:"/home",VUE_APP_CONTEXT_PATH_WEBSITE:"/website",VUE_APP_API_BASE:"https://songshuzhong.github.io/i-website/public/api",BASE_URL:"/i-website/dist/"}).VUE_APP_PUBLIC_PATH_HOME+"/page/home.json"}},{path:"/logs",component:u["a"],props:{url:Object({NODE_ENV:"production",VUE_APP_NODE_ENV:"production",VUE_APP_CONTEXT_PATH_HOME:"/home",VUE_APP_CONTEXT_PATH_WEBSITE:"/website",VUE_APP_API_BASE:"https://songshuzhong.github.io/i-website/public/api",BASE_URL:"/i-website/dist/"}).VUE_APP_PUBLIC_PATH_HOME+"/page/logs.json"}},{path:"/me",component:u["a"],props:{url:Object({NODE_ENV:"production",VUE_APP_NODE_ENV:"production",VUE_APP_CONTEXT_PATH_HOME:"/home",VUE_APP_CONTEXT_PATH_WEBSITE:"/website",VUE_APP_API_BASE:"https://songshuzhong.github.io/i-website/public/api",BASE_URL:"/i-website/dist/"}).VUE_APP_PUBLIC_PATH_HOME+"/page/me.json"}},{path:"/quality",component:u["a"],props:{url:"https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/page/me"},meta:{permission:"quality"}},{path:"/playground",component:u["a"],classname:"i-renderer-website-schema__playground",props:{url:"https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/page/playground"},beforeEnter:()=>(document.documentElement.classList.add("playground"),!0)},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>r.e("chunk-44b38984").then(r.bind(null,"aa1f")),props:{status:404}},{path:"/forbidden",name:"Forbidden",component:()=>r.e("chunk-44b38984").then(r.bind(null,"aa1f")),props:{status:403}}]}],scrollBehavior(e,t,r){return r||{left:0,top:0}}});h.beforeEach((e,t,r)=>{var n;if(e.path!==t.path&&(d=c["a"].service({fullscreen:!0,customClass:"i-website__router__loader"})),null!==e&&void 0!==e&&null!==(n=e.meta)&&void 0!==n&&n.permission){const t=Object(u["c"])(e.meta.permission);if(!t)return r("/home/forbidden")}r()}),h.afterEach((e,t)=>{"/playground"===e.path&&p["a"].getUa()&&s["a"].confirm("建议横屏下浏览","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{p["a"].toHorizontal()}).catch(()=>{console.log("cancel horizontal")}),"/playground"===t.path&&p["a"].leavePlayground();const r=setTimeout(()=>{d&&"function"===typeof d.close&&(d.close(),clearTimeout(r))},1e3)});var m=h;function b(e,t,r,o,i,a){const c=Object(n["resolveComponent"])("router-view"),s=Object(n["resolveComponent"])("el-config-provider");return Object(n["openBlock"])(),Object(n["createBlock"])(s,{locale:e.locale},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(c)]),_:1},8,["locale"])}var _=r("60df"),f=r("4853"),g=Object(n["defineComponent"])({name:"Application",components:{[_["a"].name]:_["a"]},setup(){const{proxy:e}=Object(n["getCurrentInstance"])(),t=()=>{e.$message.success("切换到PC端体验更加哦！")};return Object(n["onMounted"])(()=>{const e=p["a"].setNotice(t).setWidth(window.innerHeight).detectUa();e?p["a"].toMobile():p["a"].toPc()}),{locale:f["a"]}}}),E=r("9c21"),P=r.n(E);const y=P()(g,[["render",b]]);var T=y,O=r("ddb8");r("4daa"),r("cb8d"),r("7729");const A=Object(n["createApp"])(T);Object(O["a"])(Object({NODE_ENV:"production",VUE_APP_NODE_ENV:"production",VUE_APP_CONTEXT_PATH_HOME:"/home",VUE_APP_CONTEXT_PATH_WEBSITE:"/website",VUE_APP_API_BASE:"https://songshuzhong.github.io/i-website/public/api",BASE_URL:"/i-website/dist/"}).VUE_APP_SERVICE_WORKER),A.use(o["a"]).use(i["d"]).use(m).mount(".i-website-app__container")},9109:function(e){e.exports=JSON.parse('{"renderer":"page","classname":"i-home__page","body":{"renderer":"layout","direction":"vertical","body":[{"renderer":"header","classname":"flex j-sb a-c","body":[{"renderer":"avatar","fit":"contain","src":"https://songshuzhong.github.io/i-assets/public/img/shuttle.png","title":"百搭云平台"},{"renderer":"menu","name":"i-website-nav","router":true,"ellipsis":false,"defaultActive":"","body":[{"name":"/","title":"首页","renderer":"menuitem","icon":"HomeFilled"},{"name":"playground","title":"即刻体验","renderer":"menuitem","icon":"LocationInformation"},{"name":"https://songshuzhong.github.io/i-website/dist/index.html","title":" 案例合集","renderer":"menuitem","icon":"DataBoard","extra":true},{"name":"logs","title":"更新日志","renderer":"menuitem","icon":"Tickets"},{"name":"quality","title":"荣誉资质","renderer":"menuitem","icon":"Aim"},{"name":"me","title":"关于我","renderer":"menuitem","icon":"Avatar","extra":true}]}]},{"renderer":"main","routerView":true,"iProtal":true,"classname":"i-home__main"},{"renderer":"footer","classname":"i-home__footer","body":[{"renderer":"wrapper","body":[{"renderer":"html","html":"链接"},{"renderer":"action","isText":true,"text":"代码仓库","actionType":"url","url":"https://songshuzhong.github.io/i-website/dist/index.html"},{"renderer":"action","isText":true,"text":"更新日志","actionType":"url","url":"https://songshuzhong.github.io/i-website/dist/index.html"},{"renderer":"action","isText":true,"text":"设计理念","actionType":"url","url":"https://songshuzhong.github.io/i-website/dist/index.html"}]},{"renderer":"wrapper","body":[{"renderer":"html","html":"相关"},{"renderer":"action","isText":true,"text":"react","actionType":"url","url":"https://react.docschina.org/"},{"renderer":"action","isText":true,"text":"vue","actionType":"url","url":"https://cn.vuejs.org/index.html"}]},{"renderer":"wrapper","body":[{"renderer":"html","html":"联系"},{"renderer":"action","isText":true,"text":"qq: 1462026137","actionType":"copy","content":"1462026137"},{"renderer":"action","isText":true,"text":"phone: 15510351839","actionType":"copy","content":"15510351839"},{"renderer":"action","isText":true,"text":"e-mail: sshuzhong@outlook.com","actionType":"mail"}]}]},{"renderer":"footer","classname":"i-home__copyright","body":"copyright © 2022 sshuzhong@outlook.com"}]}}')}});