(function(e){function t(t){for(var n,i,s=t[0],c=t[1],l=t[2],p=0,u=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&u.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(u.length)u.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={login:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(){return Promise.resolve()},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/i-website/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;o.push([4,"chunk-vendors","chunk-common"]),r()})({4:function(e,t,r){e.exports=r("4866")},4866:function(e,t,r){"use strict";r.r(t);var n=r("1258"),a=r("9e21"),o=r("656b"),i=r("1275");function s(e,t,r,a,o,i){const s=Object(n["resolveComponent"])("i-schema");return Object(n["openBlock"])(),Object(n["createBlock"])(s,{"init-schema":e.loginSchema,canSchemaUpdate:!1},null,8,["init-schema"])}var c={renderer:"page",body:[{renderer:"avatar",src:Object({NODE_ENV:"production",VUE_APP_NODE_ENV:"production",VUE_APP_CONTEXT_PATH_HOME:"/home",VUE_APP_CONTEXT_PATH_WEBSITE:"/website",VUE_APP_API_BASE:"https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643",BASE_URL:"/i-website/"}).VUE_APP_PUBLIC_PATH_HOME+"/shuttle.png",classname:"i-login__logo",previews:[],title:"百搭云平台",shape:"square",borderRadius:0,color:"#606266",bgColor:"#ffffff"},{renderer:"image",src:Object({NODE_ENV:"production",VUE_APP_NODE_ENV:"production",VUE_APP_CONTEXT_PATH_HOME:"/home",VUE_APP_CONTEXT_PATH_WEBSITE:"/website",VUE_APP_API_BASE:"https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643",BASE_URL:"/i-website/"}).VUE_APP_PUBLIC_PATH_HOME+"/img/qqb.png",classname:"i-login__browser-star",previews:[]},{renderer:"tabs",panels:[{label:"登录",icon:"",keepAlive:!0,body:[{renderer:"form",hideRequiredAsterisk:!0,actionApi:{url:"/api/auth/login",method:"post",params:{"*":"*"}},controls:[{renderer:"input",name:"namespace",placeholder:"命名空间",type:"text",minlength:0,maxlength:16,rules:[],requiredOn:"1==1",showWordLimit:!0},{renderer:"input",name:"username",requiredOn:"1 === 1",placeholder:"用户名（guest）",type:"text",rules:[],minlength:0,maxlength:16,showWordLimit:!0},{renderer:"input",name:"password",requiredOn:"1 === 1",placeholder:"密码（_123456qwerty）",type:"password",rules:[{type:"sw",trigger:"blur"}]},{renderer:"input",name:"code",requiredOn:"1 === 1",placeholder:"验证码",type:"text",rules:[{type:"exp",exp:"data.code !== data.verify",message:"验证码不正确",trigger:"blur"}]},{renderer:"verify",name:"verify",useRef:!0},{renderer:"wrapper",body:[{renderer:"action",text:"忘记密码？",type:"success",isText:!0,plain:!0,tag:"div",body:{}}],classname:"i-login_forget"},{renderer:"action",text:"登录",actionType:"login",type:"primary",body:{}},{renderer:"action",text:"游客访问",actionType:"visitor",classname:"i-login__visitor",type:"success",plain:!0,body:{}}]}]},{label:"注册",icon:"",keepAlive:!0,body:[{renderer:"form",hideRequiredAsterisk:!0,actionApi:{url:"/api/user",method:"post",params:{"*":"*"}},redirect:"localhost/login",controls:[{renderer:"input",name:"namespace",placeholder:"命名空间（瓜子花生工作室）",type:"text",minlength:0,maxlength:16,rules:[],requiredOn:"1==1",showWordLimit:!0},{renderer:"input",name:"username",requiredOn:"1==1",placeholder:"用户名（令狐瓜子）",type:"text",minlength:0,maxlength:16,showWordLimit:!0,rules:[]},{renderer:"input",name:"email",placeholder:"邮箱",required:!1,type:"text",validType:"normal",requiredOn:"1",rules:[{exp:"!/^([a-zA-Z0-9]+[_|\\_|\\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\\_|\\.]?)*[a-zA-Z0-9]+\\.[a-zA-Z]{2,3}$/.test(data.email)",trigger:"blur",type:"exp"},{type:"api",trigger:"blur",exp:"/api/user/email/valid?email=${email}"}],append:{renderer:"sendemail",classname:"verify"}},{renderer:"action",name:"SendEmailAction",actionType:"ajax",text:"获取验证码",visibleOn:"1==2",actionApi:{url:"/api/email",method:"post",params:{"*":"*"}},body:{}},{renderer:"input",name:"code",requiredOn:"1==1",placeholder:"验证码",type:"text",rules:[]},{renderer:"input",name:"password",requiredOn:"1==1",placeholder:"密码",type:"text",showPassword:!0,rules:[{type:"exp",trigger:"blur",message:"密码必须相等",exp:"data.password !== data.repassword"}]},{renderer:"input",name:"repassword",requiredOn:"1==1",placeholder:"确认密码",type:"text",showPassword:!0,rules:[{type:"exp",trigger:"blur",message:"密码必须相等",exp:"data.password !== data.repassword"}]},{renderer:"action",text:"注册",actionType:"submit",body:{}}]}]},{label:"会员权益",icon:"",keepAlive:!1,body:[{renderer:"image",src:Object({NODE_ENV:"production",VUE_APP_NODE_ENV:"production",VUE_APP_CONTEXT_PATH_HOME:"/home",VUE_APP_CONTEXT_PATH_WEBSITE:"/website",VUE_APP_API_BASE:"https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643",BASE_URL:"/i-website/"}).VUE_APP_PUBLIC_PATH_HOME+"/img/attitude.jpg"},{renderer:"html",classname:"i-login__attitude",html:"成为会员后会获得组建团队、项目管理的能力"}]}],activeTab:0,tabPosition:"top"}],worker:"e => {\n  let password = e.data.password;\n  let message = '';\n  let strength = 0;\n  if (password.length > 8) {\n    strength += 1;\n  }\n  if (password.match(/([a-z]+)/)) {\n    strength += 1;\n  }\n  if (password.match(/([A-Z]+)/)) {\n    strength += 1;\n  }\n  if (password.match(/([0-9]+)/)) {\n    strength += 1;\n  }\n  if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {\n    strength += 1;\n  }\n  if (password.length > 12 && strength < 4) {\n    strength += 1;\n  }\n  switch(strength){\n    case 0:\n      message = '密码过于简单';\n      break;\n    case 1:\n      message = '密码需要包含字母或数字';\n      break;\n    case 2:\n      message = '密码需要包含字母、数字和特殊字符';\n      break;\n    case 3:\n      message = '密码需要包含字母、数字、特殊字符和长度大于8位';\n      break;\n    case 4:\n      message = '密码符合要求';\n      break;\n    default:\n      message = '未知错误';\n  }\n  if (strength === 4) {\n    return Promise.resolve();\n  } else {\n    return Promise.reject({\n      message,\n      status: 'error'\n    });\n  }\n};"},l=Object(n["defineComponent"])({name:"Login",setup(){return Object(n["onMounted"])(()=>{document.title="欢迎使用百搭云平台"}),{loginSchema:c}}}),d=r("9c21"),p=r.n(d);const u=p()(l,[["render",s]]);var m=u;function b(e,t,r,a,o,i){const s=Object(n["resolveComponent"])("el-button");return Object(n["openBlock"])(),Object(n["createBlock"])(s,{disabled:e.isCounting||!e.iEmail||e.isLoading,loading:e.isLoading,onClick:e.startCountdown},{default:Object(n["withCtx"])(()=>[e.isLoading?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:0},[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.isCounting?e.countdown+"s":"发送"),1)],64))]),_:1},8,["disabled","loading","onClick"])}var g=Object(n["defineComponent"])({name:"Sendemail",props:{path:String,track:String,action:Function,classname:String,initData:{type:Object,required:!1}},setup(e){const{proxy:t}=Object(n["getCurrentInstance"])(),r=Object(n["ref"])(""),a=Object(n["ref"])(60),o=Object(n["ref"])(!1);let i;const s=Object(n["computed"])(()=>a.value>0&&a.value<60),c=()=>(o.value=!0,new Promise(e=>{const r=setTimeout(()=>{clearTimeout(r),o.value=!1,"success"===t.$parent.$parent.$parent.$parent.validateState&&e()},3e3)})),l=()=>{const e=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(r.value);e&&(i&&d(),t.$dispatchAction(t,{renderer:"action",actionType:"trigger",triggered:"SendEmailAction"},{renderer:"action",actionType:"trigger",triggered:"SendEmailAction"},{},()=>{}),i=setInterval(()=>{a.value--,a.value<=0&&(clearInterval(i),a.value=60)},1e3))},d=()=>{clearInterval(i),i=null};return Object(n["watch"])(()=>e.initData,e=>{r.value=e.email},{deep:!0}),Object(n["onBeforeUnmount"])(()=>{d()}),{iEmail:r,isLoading:o,isCounting:s,countdown:a,starting:c,startCountdown:l}}});const _=p()(g,[["render",b]]);var h=_,f=r("e40e"),w=r("ddb8");r("4daa"),r("4a9e"),r("cb8d"),r("c5ef");const O=Object(n["createApp"])(m),E=(e,t,r,n,o,s)=>{Object(i["b"])().staticApi().post("https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/auth/login",o).then(t=>{localStorage.setItem("token","Bearer "+t.data);const r="localhost/website";e.$dispatchAction(e,{url:r,actionType:"url"},{},()=>{})}).catch(e=>{var t,r,n,o;s.refs.verify.handleDraw(),Object(a["a"])({title:"错误"+((null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.code)||(null===e||void 0===e||null===(r=e.response)||void 0===r||null===(r=r.data)||void 0===r?void 0:r.code)||e.code),message:(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.message)||(null===e||void 0===e||null===(o=e.response)||void 0===o||null===(o=o.data)||void 0===o?void 0:o.message)||e.message,type:"error",duration:1e4,offset:50})}).finally(()=>{n&&n("CANCEL_LOADING")})},v={domains:["https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643"],renderers:[h,f["a"]],actions:{visitor:function(e,t,r,n){E(e,t,r,n,{namespace:"guest",username:"guest",password:"_123456qwerty",code:"1234",verify:"1234"})},login:function(e,t,r,n,a){t.actionType="extends",t.triggered="valid",this.extends(e,t,r,n,{}).then(o=>{if(o){const o=this.extends(e,{actionType:"extends",triggered:"getData"},r,n,{});E(e,t,r,n,o,a)}}).catch(()=>{a.refs.verify.handleDraw()}).finally(()=>{n&&n("CANCEL_LOADING")})}}};Object(w["a"])(Object({NODE_ENV:"production",VUE_APP_NODE_ENV:"production",VUE_APP_CONTEXT_PATH_HOME:"/home",VUE_APP_CONTEXT_PATH_WEBSITE:"/website",VUE_APP_API_BASE:"https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643",BASE_URL:"/i-website/"}).VUE_APP_SERVICE_WORKER),O.use(o["a"]).use(i["d"],v).mount(".i-website-app__container")},c5ef:function(e,t,r){}});