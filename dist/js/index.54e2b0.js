(function(e){function t(t){for(var n,a,s=t[0],c=t[1],d=t[2],l=0,p=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);m&&m(t);while(p.length)p.shift()();return i.push.apply(i,d||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={index:0},o={index:0},i=[];function s(e){return c.p+"chunk/"+({editor:"editor"}[e]||e)+"."+{"chunk-2d0b6d26":"40be7c","chunk-44b38984":"9c9520","chunk-594d6d48":"6660f0","chunk-2d21367b":"0d5443","chunk-5be386f4":"2c02a9","chunk-2d207356":"c28ae8","chunk-7f94a70e":"e30333","chunk-76eb17d8":"7c95bf",editor:"c24d8e","chunk-2d0bb267":"9beaa4","chunk-2d0c1ed0":"a70977"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-44b38984":1,"chunk-7f94a70e":1,"chunk-76eb17d8":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({editor:"editor"}[e]||e)+"."+{"chunk-2d0b6d26":"31d6cfe0","chunk-44b38984":"90717131","chunk-594d6d48":"31d6cfe0","chunk-2d21367b":"31d6cfe0","chunk-5be386f4":"31d6cfe0","chunk-2d207356":"31d6cfe0","chunk-7f94a70e":"ba4ddaba","chunk-76eb17d8":"ab936f36",editor:"31d6cfe0","chunk-2d0bb267":"31d6cfe0","chunk-2d0c1ed0":"31d6cfe0"}[e]+".css",o=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var d=i[s],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===n||l===o))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){d=p[s],l=d.getAttribute("data-href");if(l===n||l===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],m.parentNode.removeChild(m),r(i)},m.href=o;var u=document.getElementsByTagName("head")[0];u.appendChild(m)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var p=new Error;d=function(t){l.onerror=l.onload=null,clearTimeout(m);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",p.name="ChunkLoadError",p.type=n,p.request=a,r[1](p)}o[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/i-website/dist/",c.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var p=0;p<d.length;p++)t(d[p]);var m=l;i.push([1,"chunk-vendors"]),r()})({1:function(e,t,r){e.exports=r("4570")},4570:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),a=r("c3a1"),o=r("2295"),i=r("abd3"),s=r.n(i),c=r("6605"),d=r("90b1"),l={renderer:"page",body:[{renderer:"card",header:[{renderer:"html",html:"欢迎使用IRenderer",inline:!0,classname:"font-size-20 font-weight-800"}],classname:"margin-bottom-20",shadow:"always",body:[{renderer:"html",html:"这是一款开箱即用的低代码前端开发工具库，同时它也经历过数十个真实项目的技术沉淀，确保框架在开发中可落地、可使用、可维护（注：在作者就职的公司，本框架已在电商、直播、OA、ERP等多个不同领域的中后台系统中应用并稳定运行）。"}]},{renderer:"grid",body:[{renderer:"card",header:[{renderer:"html",html:"基础版",classname:"font-size-16 text-center font-weight-600 margin-bottom-20"},{renderer:"html",html:'<span id="busuanzi_container_site_pv">本站总访问量<span id="busuanzi_value_site_pv"></span>次</span>',classname:"font-size-14 text-center font-weight-400 margin-bottom-10"},{renderer:"wrapper",body:[{renderer:"action",text:"可视化编辑器",plain:!0,static:!0,actionApi:{url:"",method:"post",params:{}},params:{},body:{}},{renderer:"action",text:"赠送VIP群",type:"success",plain:!0,static:!0,actionApi:{url:"",method:"post",params:{}},params:{},body:{}},{renderer:"action",text:"提供发票",type:"warning",plain:!0,static:!0,actionApi:{url:"",method:"post",params:{}},params:{},body:{}}],footer:[],classname:"text-center"}],body:[{renderer:"static",table:!1,columns:["默认基础库vue3.0+elementplus+echarts5.0","提供开箱即用的项目模板","提供可视化页面编辑器","提供echarts编辑器","支持api接口适配器","支持样式自定义"]}],footer:[]},{renderer:"card",header:[{renderer:"html",html:"专业版",classname:"font-size-16 text-center font-weight-600 margin-bottom-20"},{renderer:"html",html:'<span id="busuanzi_container_site_uv">本站访客数<span id="busuanzi_value_site_uv"></span>人次</span>',classname:"font-size-14 text-center font-weight-400 margin-bottom-10"},{renderer:"wrapper",body:[{renderer:"action",text:"可视化编辑器",plain:!0,static:!0,actionApi:{url:"",method:"post",params:{}},params:{},body:{}},{renderer:"action",text:"赠送VIP群",type:"success",plain:!0,static:!0,actionApi:{url:"",method:"post",params:{}},params:{},body:{}},{renderer:"action",text:"提供发票",type:"warning",plain:!0,static:!0,actionApi:{url:"",method:"post",params:{}},params:{},body:{}},{renderer:"action",text:"一对一答疑",type:"danger",plain:!0,static:!0,actionApi:{url:"",method:"post",params:{}},params:{},body:{}}],footer:[],classname:"text-center"}],body:[{renderer:"static",table:!1,columns:["扩充非常用表单控件","丰富常用第三方依赖","集成fontawesome图标","扩充主题库样式","支持第三方组件扩展","集成权限管理"],styleType:1}]}],span:"12",gutter:12},{renderer:"grid",span:"12",gutter:12,body:[{renderer:"card",header:[{renderer:"html",html:"应用场景",inline:!0,classname:"font-size-16 text-center font-weight-600"}],footer:[],classname:"margin-bottom-20 margin-top-20",body:[{renderer:"static",classname:"suitable-ul",table:!1,column:0,width:0,columns:["没有或缺少前端开发人员的小型公司","公司内部使用的平台系统","重功能轻UI、交互的项目","业务逻辑偏向于增删改查的项目","适用于项目多，周期短的紧急项目","编程萌新、学生、网站开发爱好者"]}]},{renderer:"card",classname:"margin-bottom-20 margin-top-20",body:[{renderer:"carousel",classname:"i-home__carousel",autoplay:!0,loop:!0,body:[{renderer:"image",src:"https://songshuzhong.github.io/i-assets/public/img/case1.png",previews:["https://songshuzhong.github.io/i-assets/public/img/case1.png"]},{renderer:"image",src:"https://songshuzhong.github.io/i-assets/public/img/case2.png",previews:["https://songshuzhong.github.io/i-assets/public/img/case2.png"]},{renderer:"image",src:"https://songshuzhong.github.io/i-assets/public/img/case3.png",previews:["https://songshuzhong.github.io/i-assets/public/img/case3.png"]},{renderer:"image",src:"https://songshuzhong.github.io/i-assets/public/img/case4.png",previews:["https://songshuzhong.github.io/i-assets/public/img/case4.png"]},{renderer:"image",src:"https://songshuzhong.github.io/i-assets/public/img/case5.jpg",previews:["https://songshuzhong.github.io/i-assets/public/img/case5.jpg"]}],height:140,indicatorPosition:"none",arrow:"always"}],header:[{renderer:"html",html:"优秀案例",classname:"font-size-16 font-weight-600"}],footer:[]}]},{renderer:"card",header:[{renderer:"html",html:"优势",inline:!0,classname:"font-size-16 text-center font-weight-600"}],footer:[],classname:"margin-bottom-20",body:[{renderer:"static",table:!1,column:0,width:0,columns:["作者从事前端开发5年+，经验丰富","项目历经数十个不同业务场景的打磨","组件库丰富，渲染性能出众","可视化编辑，无文档、无代码、无api","长期维护、精益求精、客户至上"]}]},{renderer:"card",header:[{renderer:"html",html:"使用方式",inline:!0,classname:"font-size-16 text-center font-weight-600"}],footer:[],classname:"margin-bottom-20",body:[{renderer:"html",html:'<pre>// 安装\nnpm i "i-renderer";\n\n// 引入\nimport {IRenderer, Schema} from "i-renderer";\nimport "i-renderer/dist/css/index.css";\n\n// 使用\napp.use(IRenderer);</pre>'},{renderer:"data",initData:{JSON:{renderer:"page",initData:{name:"IRenderer"},body:[{renderer:"html",html:"Hi,欢迎使用<%=data.name%>"}]}}},{renderer:"html",html:'<pre>&lt;schema\n  :init-schema="JSON"\n  :can-schema-update="false"\n  classname="i-renderer-schema__container"\n/&gt;</pre>'}]}],innerStyle:".suitable-ul {\n    margin-bottom: 39px;\n}"};const p=()=>{let e;const t=Object(c["createRouter"])({history:Object(c["createWebHashHistory"])(),routes:[{path:"/",name:"IWebsite",title:"零代码-IRenderer案例",component:i["Schema"],props:{initSchema:l,classname:"i-renderer-website-schema__container"}},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>r.e("chunk-44b38984").then(r.bind(null,"aa1f")),props:{status:404}},{path:"/forbidden",name:"Forbidden",component:()=>r.e("chunk-44b38984").then(r.bind(null,"aa1f")),props:{status:403}}]});return t.beforeEach((t,r,n)=>{var a;if(t.path!==r.path&&(e=d["a"].service({fullscreen:!0,customClass:"i-website__router__loader"})),null!==t&&void 0!==t&&null!==(a=t.meta)&&void 0!==a&&a.permission){const e=Object(i["checkPermission"])(t.meta.permission);if(!e)return n("/forbidden")}n()}),t.afterEach(t=>{var r;document.title=(null===t||void 0===t||null===(r=t.meta)||void 0===r?void 0:r.title)||"零代码-IRenderer案例";const n=setTimeout(()=>{e&&"function"===typeof e.close&&(e.close(),clearTimeout(n))},1e3)}),t};var m=p;function u(e,t,r,a,o,i){const s=Object(n["resolveComponent"])("schema");return Object(n["openBlock"])(),Object(n["createBlock"])(s,{"init-schema":e.frameSchema,canSchemaUpdate:!1,classname:"i-renderer-website-schema__container"},null,8,["init-schema"])}var h={renderer:"layout",name:"i-website__container",classname:"i-website__container",initData:{width:200,collapse:!1},body:[{renderer:"aside",classname:"i-website__aside",body:[{renderer:"menu",name:"i-website-nav",classname:"i-website_menu-vertical",router:!0,mode:"vertical",backgroundColor:"#3a3f51",textColor:"#fff",activeTextColor:"#ffd04b",defaultActive:"",target:"i-website__container",title:"IRenderer",initApi:{url:"/api/menu/0767bea4-c7e7-4aa7-a1b5-2fd5e1ec4a7f"},body:[]},{renderer:"wrapper",classname:"i-website__ads",body:[{renderer:"carousel",classname:"i-home__carousel",autoplay:!0,loop:!0,body:[{renderer:"render",body:[{innerHTML:"招租广告位1",tag:"span",classname:"i-render__container",action:{renderer:"action",actionType:"ajax",actionApi:{url:"https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/ads_click?order=1",method:"get"}}}]},{renderer:"render",body:[{innerHTML:"招租广告位2",tag:"span",classname:"i-render__container",action:{renderer:"action",actionType:"ajax",actionApi:{url:"https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/ads_click?order=2",method:"get"}}}]},{renderer:"render",body:[{innerHTML:"招租广告位3",tag:"span",classname:"i-render__container",action:{renderer:"action",actionType:"ajax",actionApi:{url:"https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/ads_click?order=3",method:"get"}}}]}],height:140,indicatorPosition:"none",arrow:"always"}]}]},{renderer:"layout",direction:"vertical",body:[{renderer:"header",classname:"i-website__header",tags:!0,body:[{renderer:"switch",name:"collapse",target:"i-website__container",hiddenOn:"1 === 1"},{renderer:"action",icon:"Expand",category:"icon",name:"IWebsiteExpand",remoteComponent:"collapse",visibleOn:"data.collapse",size:22},{renderer:"action",icon:"Fold",category:"icon",remoteComponent:"collapse",visibleOn:"!data.collapse",size:22,immediateOn:"data.collapse"},{renderer:"breadcrumb",classname:"i-website__breadcrumb"},{renderer:"service",classname:"i-website__header__service",initApi:{url:"https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/user",cached:!0},body:[{renderer:"action",icon:"HomeFilled",actionType:"url",name:"IWebsiteHome",category:"icon",size:18,url:"https://songshuzhong.github.io/i-website/dist/home.html#/"},{renderer:"action",icon:"Bell",category:"icon",size:18,name:"iWebsiteBell",popupType:"over",popperWidth:"300px",body:{renderer:"tabs",stretch:!0,panels:[{label:"通知",body:[{renderer:"mapping",value:"todos",body:{renderer:"each",body:{renderer:"html",html:'<div class="border-top padding-10"><%=data.title%></div>'}}}]},{label:"待办",icon:"",body:[{renderer:"html",html:'<div class="text-center">空</div>'}]}],activeTab:1,tabPosition:"top"}},{renderer:"action",icon:"FullScreen",name:"IWebsiteFullScreen",category:"icon",size:18,actionType:"fullscreen"},{renderer:"action",icon:"Refresh",category:"icon",size:18,name:"IWebsiteRefresh",actionType:"reload",reload:"AppMain"},{renderer:"action",icon:"Setting",category:"icon",size:18,actionType:"drawer",body:{width:30,appendToBody:!0,classname:"i-website__setting__container",header:{renderer:"html",html:"设置"},body:[{renderer:"setting"}]}},{renderer:"action",icon:"Edit",category:"icon",size:18,name:"IWebsiteEdit",actionType:"drawer",body:{width:100,appendToBody:!0,classname:"i-website__drawer",header:{renderer:"html",html:'<div style="text-align: left; color: white;">编辑页面</div>'},body:[{renderer:"editor",editable:!0,nimble:!0,isJson:!1,classname:"i-website__json-editor"}]}},{renderer:"avatar",src:"${user_cover}",isComputedSrc:!0,size:"default"},{renderer:"dropdown",text:"<%=data.user_name%>",popperClass:"i-website__header__dropdown",name:"IWebsiteDropdown",body:[{renderer:"action",icon:"HomeFilled",actionType:"url",name:"IWebsiteHome",text:"官网",url:"https://songshuzhong.github.io/i-website/dist/home.html#/"},{renderer:"action",icon:"Refresh",text:"刷新",name:"IWebsiteRefresh",actionType:"reload",reload:"AppMain"},{renderer:"action",icon:"Setting",text:"设置",category:"icon",size:18,actionType:"drawer",body:{width:30,appendToBody:!0,header:{renderer:"html",html:"设置"},body:[{renderer:"setting"}]}},{renderer:"action",icon:"Edit",text:"编辑",name:"IWebsiteEdit",actionType:"drawer",body:{width:100,appendToBody:!0,classname:"i-website__drawer",header:{renderer:"html",html:'<div style="text-align: left; color: white;">编辑页面</div>'},body:[{renderer:"editor",editable:!0,isJson:!1,classname:"i-website__json-editor"}]}},{renderer:"action",text:"个人中心",icon:"Avatar",type:"primary",actionType:"url",url:"/manager/workbench"},{renderer:"action",text:"退出登录",type:"primary",icon:"SwitchButton",actionType:"ajax",actionApi:{url:"/logout"}}]}]}]},{renderer:"main",name:"AppMain",routerView:!0,classname:"i-website__main"},{renderer:"footer",classname:"i-website__footer",body:"copyright © 2022 sshuzhong@outlook.com"}]}]},b=Object(n["defineComponent"])({name:"Application",components:{Schema:i["Schema"]},setup(){const{proxy:e}=Object(n["getCurrentInstance"])();return Object(n["onBeforeMount"])(()=>{const t=/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);t&&(h.initData.collapse=!0),t&&e.$message.success("切换到PC端体验更加哦！")}),Object(n["onMounted"])(()=>{bszCaller&&bszCaller.fetch&&bszCaller.fetch("//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback",(function(e){bszTag.texts(e),bszTag.shows()}));const t=setTimeout(()=>{r.e("editor").then(r.t.bind(null,"0aaa",7)).then(t=>{const{Editor:r}=t;e.$.appContext.components[r.name]=r}).catch(e=>{console.error(e)}).finally(()=>{clearTimeout(t)})},2e3)}),{frameSchema:h}}}),g=r("d959"),f=r.n(g);const y=f()(b,[["render",u]]);var w=y;r("7437"),r("50b4"),r("fb46"),r("8e1f"),r("ddb8");const _=Object(n["createApp"])(w),v={domains:["https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643"]};Promise.all([Object(i["api"])().staticApi().get("https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/user")]).then(e=>{const[t]=e,r=m();v.permissions=t.data["user_permissions"],_.use(a["a"]).use(s.a,v).use(r).mount(".i-website-app__container")}).catch(e=>{console.log(e),Object(o["a"])({title:"错误：初始化接口调用失败",message:e.config.url,type:"error",duration:1e4,offset:50})})},"8e1f":function(e,t,r){},ddb8:function(e,t,r){"use strict";var n=r("2295"),a=r("9483");const o=!1,i=o?"/service-worker.js":"/i-website/dist/service-worker.js";Object(a["a"])(i,{updatefound(){Object(n["a"])({title:"温馨提示",message:"检测到新版本，正在下载中，请稍后...",type:"info",position:"bottom-right",offset:50})},updated(){Object(n["a"])({title:"温馨提示",message:"版本更新完成，10s后刷新项目",type:"success",position:"bottom-right",duration:1e4,offset:50});const e=setTimeout(()=>{clearTimeout(e),window.location.reload()},1e4)}})}});