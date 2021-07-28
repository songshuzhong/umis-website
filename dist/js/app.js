/******/ (function(modules) {
  // webpackBootstrap
  /******/ // install a JSONP callback for chunk loading
  /******/ function webpackJsonpCallback(data) {
    /******/ var chunkIds = data[0];
    /******/ var moreModules = data[1];
    /******/ var executeModules = data[2]; // add "moreModules" to the modules object, // then flag all "chunkIds" as loaded and fire callback
    /******/
    /******/ /******/ /******/ var moduleId,
      chunkId,
      i = 0,
      resolves = [];
    /******/ for (; i < chunkIds.length; i++) {
      /******/ chunkId = chunkIds[i];
      /******/ if (
        Object.prototype.hasOwnProperty.call(installedChunks, chunkId) &&
        installedChunks[chunkId]
      ) {
        /******/ resolves.push(installedChunks[chunkId][0]);
        /******/
      }
      /******/ installedChunks[chunkId] = 0;
      /******/
    }
    /******/ for (moduleId in moreModules) {
      /******/ if (
        Object.prototype.hasOwnProperty.call(moreModules, moduleId)
      ) {
        /******/ modules[moduleId] = moreModules[moduleId];
        /******/
      }
      /******/
    }
    /******/ if (parentJsonpFunction) parentJsonpFunction(data);
    /******/
    /******/ while (resolves.length) {
      /******/ resolves.shift()();
      /******/
    } // add entry modules from loaded chunk to deferred list
    /******/
    /******/ /******/ deferredModules.push.apply(
      deferredModules,
      executeModules || []
    ); // run deferred modules when all chunks ready
    /******/
    /******/ /******/ return checkDeferredModules();
    /******/
  }
  /******/ function checkDeferredModules() {
    /******/ var result;
    /******/ for (var i = 0; i < deferredModules.length; i++) {
      /******/ var deferredModule = deferredModules[i];
      /******/ var fulfilled = true;
      /******/ for (var j = 1; j < deferredModule.length; j++) {
        /******/ var depId = deferredModule[j];
        /******/ if (installedChunks[depId] !== 0) fulfilled = false;
        /******/
      }
      /******/ if (fulfilled) {
        /******/ deferredModules.splice(i--, 1);
        /******/ result = __webpack_require__(
          (__webpack_require__.s = deferredModule[0])
        );
        /******/
      }
      /******/
    }
    /******/
    /******/ return result;
    /******/
  } // The module cache
  /******/
  /******/ /******/ var installedModules = {}; // object to store loaded and loading chunks // undefined = chunk not loaded, null = chunk preloaded/prefetched // Promise = chunk loading, 0 = chunk loaded
  /******/
  /******/ /******/ /******/ /******/ var installedChunks = {
    /******/ app: 0,
    /******/
  };
  /******/
  /******/ var deferredModules = []; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module',
      });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = '/umis-website/dist/';
  /******/
  /******/ var jsonpArray = (window['webpackJsonp'] =
    window['webpackJsonp'] || []);
  /******/ var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
  /******/ jsonpArray.push = webpackJsonpCallback;
  /******/ jsonpArray = jsonpArray.slice();
  /******/ for (var i = 0; i < jsonpArray.length; i++)
    webpackJsonpCallback(jsonpArray[i]);
  /******/ var parentJsonpFunction = oldJsonpFunction; // add entry module to deferred list
  /******/
  /******/
  /******/ /******/ deferredModules.push([0, 'chunk-vendors']); // run deferred modules when ready
  /******/ /******/ return checkDeferredModules();
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ './node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90':
      /*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! exports provided: render */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");\n\nfunction render(_ctx, _cache) {\n  var _component_router_view = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("router-view");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_router_view);\n}\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1'
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/style/index.scss':
      /*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-3-1!./node_modules/postcss-loader/src??ref--8-oneOf-3-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-3-3!./src/style/index.scss ***!
  \***************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          '// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, ".umis-website__header__wrapper {\\n  width: 100%;\\n  z-index: 21; }\\n\\n.umis-website__nav-fixed {\\n  position: fixed;\\n  top: 0;\\n  height: 100vh;\\n  background: #3a3f51;\\n  z-index: 10;\\n  overflow-y: auto;\\n  -webkit-transition: 0.3s width ease-in-out;\\n  transition: 0.3s width ease-in-out; }\\n  .umis-website__nav-fixed::-webkit-scrollbar {\\n    width: 0; }\\n  .umis-website__nav-fixed .el-menu {\\n    border-right: 0; }\\n\\n.umis-website__goto-edit {\\n  position: fixed;\\n  bottom: 100px;\\n  right: 100px;\\n  z-index: 9999; }\\n\\n.umis-website__nav-poppet {\\n  height: 100%;\\n  background: #3a3f51;\\n  -webkit-transition: 0.3s width ease-in-out;\\n  transition: 0.3s width ease-in-out; }\\n\\n.umis-website__header {\\n  position: relative;\\n  height: 60px;\\n  border-bottom: 1px solid #dcdfe6;\\n  line-height: 60px;\\n  text-align: left;\\n  font-size: 12px;\\n  background: white;\\n  -webkit-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(0, 0, 0, 0.05);\\n          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(0, 0, 0, 0.05); }\\n  .umis-website__header .el-button {\\n    border: 0 !important; }\\n  .umis-website__header .umis-website__header__main {\\n    padding: 0 10px;\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    -webkit-box-align: center;\\n        -ms-flex-align: center;\\n            align-items: center;\\n    -webkit-box-pack: justify;\\n        -ms-flex-pack: justify;\\n            justify-content: space-between; }\\n  .umis-website__header .umis-website__header__logo {\\n    height: 60px;\\n    color: white;\\n    text-align: center;\\n    line-height: 60px;\\n    font-size: 20px;\\n    background: #3a3f51;\\n    -webkit-transition: 0.3s width ease-in-out;\\n    transition: 0.3s width ease-in-out; }\\n\\n.umis-website__menu__logo {\\n  height: 60px; }\\n\\n.umis-website__main {\\n  overflow: hidden !important; }\\n  .umis-website__main.preview {\\n    padding: 0; }\\n\\n.umis-website__drawer {\\n  background-color: #282a36 !important; }\\n  .umis-website__drawer .el-drawer__header {\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    -webkit-box-align: center;\\n        -ms-flex-align: center;\\n            align-items: center;\\n    margin-bottom: 0;\\n    padding: 20px 20px 15px 20px;\\n    border-bottom: 0;\\n    background: #282a36;\\n    color: #72767b; }\\n  .umis-website__drawer .umis-popup__container__body {\\n    padding: 0;\\n    margin: 0; }\\n  .umis-website__drawer .monaco-editor {\\n    height: calc(100vh - 110px); }\\n\\n.umis-website__code-viwer {\\n  height: 200px;\\n  padding: 10px 20px; }\\n  .umis-website__code-viwer .monaco-editor {\\n    height: 180px; }\\n\\n.umis-website-doc .umis-card__footer {\\n  padding: 0; }\\n  .umis-website-doc .umis-card__footer .el-button {\\n    width: 100%;\\n    border: 0; }\\n\\n.umis-website_menu-vertical:not(.el-menu--collapse) {\\n  width: 200px; }\\n\\n.el-loading-spinner {\\n  cursor: not-allowed; }\\n  .el-loading-spinner .circular {\\n    background-image: url(\\"/img/loading.svg\\");\\n    background-position: center;\\n    background-size: cover;\\n    -webkit-animation: loading-rotate 1s linear infinite;\\n            animation: loading-rotate 1s linear infinite;\\n    animation-direction: reverse; }\\n  .el-loading-spinner .path {\\n    display: none; }\\n\\n.umis-demo_doc_header,\\n.umis-demo_doc_footer {\\n  background: #b3c0d1;\\n  color: #333; }\\n\\n.umis-demo_doc-aside {\\n  padding: 20px 40px;\\n  background: #d3dce6;\\n  color: #333; }\\n\\n.umis-demo_doc-main {\\n  background: #e9eef3;\\n  color: #333; }\\n\\n.umis-demo_doc-image {\\n  height: 200px;\\n  width: 200px; }\\n\\n.umis-page__chart {\\n  height: 100vh; }\\n\\n.mis-card-margin {\\n  margin-bottom: 20px; }\\n\\n.mis-card-margin .el-card__footer {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  -ms-flex-pack: distribute;\\n      justify-content: space-around;\\n  border-top: 1px solid #ebeef5; }\\n\\n.umis-demo__fieldset {\\n  background: #f1f1f1;\\n  padding: 20px; }\\n\\n.umis-demo__fieldset.fixed {\\n  padding-top: 80px; }\\n\\n.umis-form__container__fieldset {\\n  padding: 20px;\\n  margin-bottom: 20px;\\n  border: 1px solid #e6e7e8;\\n  border-radius: 4px;\\n  background-color: #fff; }\\n\\n.el-collapse-item__content {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex; }\\n\\n.umis-form__container__fieldset__items {\\n  width: 100%; }\\n\\n.umis-form__container__legend {\\n  margin-bottom: 20px;\\n  font-size: 16px;\\n  color: #081422;\\n  letter-spacing: .4px; }\\n\\n.umis-campaigns__wrapper {\\n  margin-left: 200px;\\n  border-radius: 4px;\\n  border: 1px solid #ebeef5;\\n  overflow: hidden; }\\n\\n.umis-campaigns__viewer {\\n  margin: 10px; }\\n\\n.umis-campaigns__viewer__header {\\n  width: 270px;\\n  height: 74px;\\n  padding: 15px;\\n  margin-bottom: 10px;\\n  background-image: linear-gradient(135deg, #409EFF, #409EFF);\\n  border-radius: 4px;\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n  color: white; }\\n\\n.umis-campaigns__viewer__list {\\n  width: 270px;\\n  height: 230px;\\n  padding: 0 10px;\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n  overflow-x: hidden;\\n  overflow-y: auto; }\\n\\n.umis__viewer__label {\\n  white-space: nowrap;\\n  line-height: 20px;\\n  font-size: 12px;\\n  font-weight: 700;\\n  color: #081422; }\\n\\n.umis__viewer__value {\\n  width: 200px;\\n  line-height: 20px;\\n  padding: 0 10px;\\n  font-size: 12px;\\n  color: #38434e;\\n  white-space: normal;\\n  word-break: break-all; }\\n\\n.umis-list-demo {\\n  width: 300px;\\n  text-align: center; }\\n\\n.umis-list-demo__img {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  width: 48px;\\n  height: 48px;\\n  background-color: #daf4f5;\\n  -webkit-transform: translateX(-50%) translateY(-50%);\\n          transform: translateX(-50%) translateY(-50%); }\\n\\n.umis-list-demo__img-wrapper {\\n  position: relative;\\n  height: 88px;\\n  background-color: #daf4f5; }\\n\\n.index-1 .umis-list-demo__img-wrapper {\\n  background-color: #ffeae3; }\\n\\n.index-1 .umis-list-demo__img {\\n  background-color: #ffeae3; }\\n\\n.index-2 .umis-list-demo__img-wrapper {\\n  background-color: #e2e4f1; }\\n\\n.index-2 .umis-list-demo__img {\\n  background-color: #e2e4f1; }\\n\\n.umis-sf__creative__wrapper {\\n  padding: 20px;\\n  background-color: #fff; }\\n\\n.umis-sf__header {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  background: #2b313d;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between; }\\n\\n.umis-sf__header.fixed {\\n  width: 100%;\\n  position: fixed;\\n  z-index: 2021; }\\n\\n.umis-sf__header__nav,\\n.umis-sf__header__tools,\\n.umis-sf__header__user {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center; }\\n\\n.umis-sf__header__user {\\n  background: #081422;\\n  border-radius: 30px; }\\n\\n.umis-sf__header__user .el-button {\\n  padding: 0 10px; }\\n\\n.umis-sf__header__logo {\\n  width: 230px;\\n  margin: 0 15px; }\\n\\n.umis-sf__header .el-button {\\n  border: 0;\\n  background: inherit;\\n  color: #fff; }\\n\\n.umis-sf__header .el-avatar {\\n  width: 28px;\\n  height: 28px; }\\n\\n.umis-sf__tamplate__wrapper {\\n  max-width: 700px;\\n  margin-left: 120px; }\\n\\n.umis-sf__tamplate-title {\\n  width: 100%;\\n  height: 40px;\\n  padding: 0 20px;\\n  background: #f1f1f1;\\n  border: 1px solid #e6e7e8;\\n  border-radius: 4px 4px 0 0;\\n  text-align: left;\\n  font-weight: 700;\\n  font-size: 13px;\\n  line-height: 38px;\\n  color: #081422; }\\n\\n.umis-sf__tamplate {\\n  padding: 10px 20px;\\n  border: 1px solid #e6e7e8;\\n  background-color: #fff;\\n  overflow-x: hidden;\\n  overflow-y: scroll; }\\n", ""]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style/index.scss?./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-3-1!./node_modules/postcss-loader/src??ref--8-oneOf-3-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-3-3'
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/style/superfans.scss':
      /*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-3-1!./node_modules/postcss-loader/src??ref--8-oneOf-3-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-3-3!./src/style/superfans.scss ***!
  \*******************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          '// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, ".umis-page__chart {\\n  height: 100vh; }\\n\\n.mis-card-margin {\\n  margin-bottom: 20px; }\\n\\n.mis-card-margin .el-card__footer {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  -ms-flex-pack: distribute;\\n      justify-content: space-around;\\n  border-top: 1px solid #ebeef5; }\\n\\n.umis-demo__fieldset {\\n  background: #f1f1f1;\\n  padding: 20px; }\\n\\n.umis-demo__fieldset.fixed {\\n  padding-top: 80px; }\\n\\n.umis-form__container__fieldset {\\n  padding: 20px;\\n  margin-bottom: 20px;\\n  border: 1px solid #e6e7e8;\\n  border-radius: 4px;\\n  background-color: #fff; }\\n\\n.el-collapse-item__content {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex; }\\n\\n.umis-form__container__fieldset__items {\\n  width: 100%; }\\n\\n.umis-form__container__legend {\\n  margin-bottom: 20px;\\n  font-size: 16px;\\n  color: #081422;\\n  letter-spacing: .4px; }\\n\\n.umis-campaigns__wrapper {\\n  margin-left: 200px;\\n  border-radius: 4px;\\n  border: 1px solid #ebeef5;\\n  overflow: hidden; }\\n\\n.umis-campaigns__viewer {\\n  margin: 10px; }\\n\\n.umis-campaigns__viewer__header {\\n  width: 270px;\\n  height: 74px;\\n  padding: 15px;\\n  margin-bottom: 10px;\\n  background-image: linear-gradient(135deg, #409EFF, #409EFF);\\n  border-radius: 4px;\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n  color: white; }\\n\\n.umis-campaigns__viewer__list {\\n  width: 270px;\\n  height: 230px;\\n  padding: 0 10px;\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n  overflow-x: hidden;\\n  overflow-y: auto; }\\n\\n.umis__viewer__label {\\n  white-space: nowrap;\\n  line-height: 20px;\\n  font-size: 12px;\\n  font-weight: 700;\\n  color: #081422; }\\n\\n.umis__viewer__value {\\n  width: 200px;\\n  line-height: 20px;\\n  padding: 0 10px;\\n  font-size: 12px;\\n  color: #38434e;\\n  white-space: normal;\\n  word-break: break-all; }\\n\\n.umis-list-demo {\\n  width: 300px;\\n  text-align: center; }\\n\\n.umis-list-demo__img {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  width: 48px;\\n  height: 48px;\\n  background-color: #daf4f5;\\n  -webkit-transform: translateX(-50%) translateY(-50%);\\n          transform: translateX(-50%) translateY(-50%); }\\n\\n.umis-list-demo__img-wrapper {\\n  position: relative;\\n  height: 88px;\\n  background-color: #daf4f5; }\\n\\n.index-1 .umis-list-demo__img-wrapper {\\n  background-color: #ffeae3; }\\n\\n.index-1 .umis-list-demo__img {\\n  background-color: #ffeae3; }\\n\\n.index-2 .umis-list-demo__img-wrapper {\\n  background-color: #e2e4f1; }\\n\\n.index-2 .umis-list-demo__img {\\n  background-color: #e2e4f1; }\\n\\n.umis-sf__creative__wrapper {\\n  padding: 20px;\\n  background-color: #fff; }\\n\\n.umis-sf__header {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  background: #2b313d;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between; }\\n\\n.umis-sf__header.fixed {\\n  width: 100%;\\n  position: fixed;\\n  z-index: 2021; }\\n\\n.umis-sf__header__nav,\\n.umis-sf__header__tools,\\n.umis-sf__header__user {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center; }\\n\\n.umis-sf__header__user {\\n  background: #081422;\\n  border-radius: 30px; }\\n\\n.umis-sf__header__user .el-button {\\n  padding: 0 10px; }\\n\\n.umis-sf__header__logo {\\n  width: 230px;\\n  margin: 0 15px; }\\n\\n.umis-sf__header .el-button {\\n  border: 0;\\n  background: inherit;\\n  color: #fff; }\\n\\n.umis-sf__header .el-avatar {\\n  width: 28px;\\n  height: 28px; }\\n\\n.umis-sf__tamplate__wrapper {\\n  max-width: 700px;\\n  margin-left: 120px; }\\n\\n.umis-sf__tamplate-title {\\n  width: 100%;\\n  height: 40px;\\n  padding: 0 20px;\\n  background: #f1f1f1;\\n  border: 1px solid #e6e7e8;\\n  border-radius: 4px 4px 0 0;\\n  text-align: left;\\n  font-weight: 700;\\n  font-size: 13px;\\n  line-height: 38px;\\n  color: #081422; }\\n\\n.umis-sf__tamplate {\\n  padding: 10px 20px;\\n  border: 1px solid #e6e7e8;\\n  background-color: #fff;\\n  overflow-x: hidden;\\n  overflow-y: scroll; }\\n", ""]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style/superfans.scss?./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-3-1!./node_modules/postcss-loader/src??ref--8-oneOf-3-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-3-3'
        );

        /***/
      },

    /***/ './src/App.vue':
      /*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90 */ "./src/App.vue?vue&type=template&id=7ba5bd90");\n\nconst script = {}\nscript.render = _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__["render"]\n/* hot reload */\nif (false) {}\n\nscript.__file = "src/App.vue"\n\n/* harmony default export */ __webpack_exports__["default"] = (script);\n\n//# sourceURL=webpack:///./src/App.vue?'
        );

        /***/
      },

    /***/ './src/App.vue?vue&type=template&id=7ba5bd90':
      /*!***************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \***************************************************/
      /*! exports provided: render */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/babel-loader/lib!../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader-v16/dist??ref--0-1!./App.vue?vue&type=template&id=7ba5bd90 */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__["render"]; });\n\n\n\n//# sourceURL=webpack:///./src/App.vue?'
        );

        /***/
      },

    /***/ './src/data/frame.js':
      /*!***************************!*\
  !*** ./src/data/frame.js ***!
  \***************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  renderer: 'mis-layout',\n  classname: 'umis-website__container',\n  name: 'umis-website__container',\n  direction: 'vertical',\n  initData: {\n    preview: false,\n    width: 200\n  },\n  body: [{\n    renderer: 'mis-wrapper',\n    classname: 'umis-website__header__wrapper',\n    visibleOn: 'data.preview === false',\n    transition: 'el-zoom-in-top',\n    body: {\n      renderer: 'mis-affix',\n      zIndex: 1000,\n      body: {\n        renderer: 'mis-layout',\n        classname: 'umis-website__header',\n        body: [{\n          renderer: 'mis-aside',\n          name: 'umis-website__nav-poppet',\n          classname: 'umis-website__header__logo',\n          visibleOn: 'data.preview === false',\n          transition: 'el-zoom-in-left',\n          body: {\n            renderer: 'mis-html',\n            html: '<div>UMIS</div>'\n          }\n        }, {\n          renderer: 'mis-main',\n          classname: 'umis-website__header__main',\n          body: [{\n            renderer: 'mis-switch',\n            name: 'collapse',\n            target: 'umis-website-nav'\n          }, {\n            renderer: 'mis-wrapper',\n            body: [{\n              renderer: 'mis-switch',\n              name: 'preview',\n              target: 'umis-website__container',\n              hiddenOn: '1 === 1'\n            }, {\n              renderer: 'mis-action',\n              actionType: 'actions',\n              name: 'umis-website__header__actions',\n              hiddenOn: 'data.activeIndex == \"playground\"',\n              actions: [{\n                renderer: 'mis-action',\n                icon: 'el-icon-view',\n                remoteComponent: 'preview'\n              }, {\n                renderer: 'mis-action',\n                icon: 'el-icon-s-platform',\n                actionType: 'mis-fullscreen'\n              }, {\n                renderer: 'mis-action',\n                icon: 'el-icon-edit',\n                actionType: 'mis-drawer',\n                body: {\n                  size: '100%',\n                  appendToBody: true,\n                  classname: 'umis-website__drawer',\n                  header: {\n                    renderer: 'mis-html',\n                    html: '<div style=\"text-align: left; color: white;\">编辑Schema</div>'\n                  },\n                  body: [{\n                    renderer: 'mis-editor',\n                    editable: true\n                  }]\n                }\n              }]\n            }]\n          }]\n        }]\n      }\n    }\n  }, {\n    renderer: 'mis-layout',\n    body: [{\n      renderer: 'mis-wrapper',\n      visibleOn: 'data.preview === false',\n      transition: 'el-zoom-in-left',\n      classname: 'umis-website__nav-fixed',\n      body: {\n        renderer: 'mis-menu',\n        name: 'umis-website-nav',\n        classname: 'umis-website_menu-vertical',\n        router: true,\n        mode: 'vertical',\n        backgroundColor: '#3a3f51',\n        textColor: '#fff',\n        activeTextColor: '#ffd04b',\n        defaultActive: '/astart',\n        target: 'umis-website__nav-poppet,umis-website__header__actions',\n        title: {\n          renderer: 'mis-html',\n          html: '<div class=\"umis-website__menu__logo\">UMIS</div>'\n        },\n        body: [],\n        inherit: {\n          type: 'exclude',\n          value: ['preview']\n        }\n      }\n    }, {\n      renderer: 'mis-aside',\n      name: 'umis-website__nav-poppet',\n      classname: 'umis-website__nav-poppet',\n      visibleOn: 'data.preview === false',\n      transition: 'el-zoom-in-left'\n    }, {\n      renderer: 'mis-wrapper',\n      visibleOn: 'data.preview === true',\n      classname: 'umis-website__goto-edit',\n      body: [{\n        renderer: 'mis-action',\n        remoteComponent: 'preview',\n        icon: 'el-icon-s-home',\n        text: ''\n      }]\n    }, {\n      renderer: 'mis-main',\n      routerView: true,\n      iProtal: true,\n      classname: 'umis-website__main',\n      computedClass: 'data.preview ? \\'preview\\' : \\'\\''\n    }]\n  }]\n});\n\n//# sourceURL=webpack:///./src/data/frame.js?"
        );

        /***/
      },

    /***/ './src/main.js':
      /*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_shuzhong_workspace_github_umis_website_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");\n/* harmony import */ var _Users_shuzhong_workspace_github_umis_website_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_shuzhong_workspace_github_umis_website_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_shuzhong_workspace_github_umis_website_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");\n/* harmony import */ var _Users_shuzhong_workspace_github_umis_website_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_shuzhong_workspace_github_umis_website_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_shuzhong_workspace_github_umis_website_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");\n/* harmony import */ var _Users_shuzhong_workspace_github_umis_website_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_shuzhong_workspace_github_umis_website_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_shuzhong_workspace_github_umis_website_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ "./node_modules/core-js/modules/es.promise.finally.js");\n/* harmony import */ var _Users_shuzhong_workspace_github_umis_website_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_shuzhong_workspace_github_umis_website_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");\n/* harmony import */ var element_plus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! element-plus */ "./node_modules/element-plus/es/index.js");\n/* harmony import */ var element_plus_lib_locale_lang_zh_cn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! element-plus/lib/locale/lang/zh-cn */ "./node_modules/element-plus/lib/locale/lang/zh-cn.js");\n/* harmony import */ var element_plus_lib_locale_lang_zh_cn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(element_plus_lib_locale_lang_zh_cn__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _router_menus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./router/menus */ "./src/router/menus.js");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./App.vue */ "./src/App.vue");\n/* harmony import */ var umis_renderer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! umis-renderer */ "./node_modules/umis-renderer/dist/js/index.js");\n/* harmony import */ var umis_renderer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(umis_renderer__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var element_theme_chalk_lib_index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! element-theme-chalk/lib/index.css */ "./node_modules/element-theme-chalk/lib/index.css");\n/* harmony import */ var element_theme_chalk_lib_index_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(element_theme_chalk_lib_index_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var umis_renderer_dist_css_index_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! umis-renderer/dist/css/index.css */ "./node_modules/umis-renderer/dist/css/index.css");\n/* harmony import */ var umis_renderer_dist_css_index_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(umis_renderer_dist_css_index_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _style_superfans_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./style/superfans.scss */ "./src/style/superfans.scss");\n/* harmony import */ var _style_superfans_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_style_superfans_scss__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./style/index.scss */ "./src/style/index.scss");\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar app = Object(vue__WEBPACK_IMPORTED_MODULE_4__["createApp"])(_App_vue__WEBPACK_IMPORTED_MODULE_8__["default"]);\nvar UMIS_CONFIG = {\n  domains: {\n    default: "https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/"\n  },\n  adaptor: {\n    req: "\\nif(url.includes(\'/terra/routes/list.json\')) {\\n  req.params.page = params.pageIndex;\\n  req.params.page_size = params.pageSize;\\n}    \\n",\n    res: "\\nif(url.includes(\'/api/users\')&&method===\'get\') {\\n  res.data.rows.forEach(function(item) {\\n    item.timestamp=item.updatedAt;\\n  })\\n}\\nif(url.includes(\'/fansSupportOrder/v1/order/list\')) {\\n  res.data.rows = res.data.items;\\n  res.data.count = res.data.total;\\n}    \\nif(url.includes(\'/terra/routes/list.json\')) {\\n  res.data.rows = res.data.items;\\n  res.data.count = res.data.total;\\n}    \\n    "\n  }\n};\nObject(umis_renderer__WEBPACK_IMPORTED_MODULE_9__["api"])().slientApi().get(\'/api/menu/0767bea4-c7e7-4aa7-a1b5-2fd5e1ec4a7f\').then(function (res) {\n  var routers = Object(_router_menus__WEBPACK_IMPORTED_MODULE_7__["default"])(res.data.menu);\n  app.use(element_plus__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    locale: element_plus_lib_locale_lang_zh_cn__WEBPACK_IMPORTED_MODULE_6___default.a\n  }).use(umis_renderer__WEBPACK_IMPORTED_MODULE_9___default.a, UMIS_CONFIG).use(routers).mount(\'#app\');\n});\n\n//# sourceURL=webpack:///./src/main.js?'
        );

        /***/
      },

    /***/ './src/router/creator.js':
      /*!*******************************!*\
  !*** ./src/router/creator.js ***!
  \*******************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var umis_renderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! umis-renderer */ "./node_modules/umis-renderer/dist/js/index.js");\n/* harmony import */ var umis_renderer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(umis_renderer__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\nvar docSchemas = __webpack_require__("./src/schema sync [\\\\w-]+\\\\.js$");\n\nvar routesList;\n/* harmony default export */ __webpack_exports__["default"] = ({\n  menus: [],\n  initRoute: function initRoute(item, basename) {\n    return {\n      path: "".concat(basename, "/").concat(item.name),\n      component: umis_renderer__WEBPACK_IMPORTED_MODULE_7__["MisSchema"],\n      props: {\n        url: item.schemaUrl\n      },\n      meta: {\n        title: item.title\n      }\n    };\n  },\n  docMenuCreator: function docMenuCreator() {\n    var _this = this;\n\n    var basename = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \'\';\n    docSchemas.keys().forEach(function (filePath) {\n      var docItemName = filePath.replace(/(.*\\/)*([^.]+).*/gi, \'$2\');\n      routesList[routesList.length - 1].body.push({\n        renderer: \'mis-menu-item\',\n        name: "".concat(basename, "/").concat(docItemName),\n        title: docSchemas(filePath).default.title || docItemName\n      });\n\n      _this.menus.push({\n        path: "".concat(basename, "/").concat(docItemName),\n        component: umis_renderer__WEBPACK_IMPORTED_MODULE_7__["MisSchema"],\n        props: {\n          initSchema: docSchemas(filePath).default,\n          url: docItemName,\n          canSchemaUpdate: false,\n          iProtal: false\n        },\n        meta: {\n          title: docItemName\n        }\n      });\n    });\n    return this;\n  },\n  initDocMenu: function initDocMenu() {\n    routesList.push({\n      renderer: \'mis-menu-submenu\',\n      name: \'docs\',\n      title: \'文档手册\',\n      icon: \'el-icon-takeaway-box\',\n      body: []\n    });\n    return this;\n  },\n  dynamicMenuCreator: function dynamicMenuCreator(routes) {\n    var _this2 = this;\n\n    var basename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \'\';\n    routes.forEach(function (menu) {\n      if (menu.renderer === \'mis-menu-submenu\') {\n        menu.body.forEach(function (submenu) {\n          if (submenu.renderer === \'mis-menu-item-group\') {\n            submenu.body.forEach(function (group) {\n              if (group.renderer === \'mis-menu-item\' && group.schemaUrl) {\n                var route = _this2.initRoute(group, basename);\n\n                _this2.menus.unshift(route);\n              } else if (submenu.renderer === \'mis-menu-item\' && submenu.schemaUrl) {\n                var _route = _this2.initRoute(submenu, basename);\n\n                _this2.menus.unshift(_route);\n              }\n            });\n          } else if (submenu.renderer === \'mis-menu-item\' && submenu.schemaUrl) {\n            var route = _this2.initRoute(submenu, basename);\n\n            _this2.menus.unshift(route);\n          }\n        });\n      } else if (menu.renderer === \'mis-menu-item\' && menu.schemaUrl) {\n        var route = _this2.initRoute(menu, basename);\n\n        _this2.menus.unshift(route);\n      }\n    });\n    routesList = routes;\n    return this;\n  }\n});\n\n//# sourceURL=webpack:///./src/router/creator.js?'
        );

        /***/
      },

    /***/ './src/router/menus.js':
      /*!*****************************!*\
  !*** ./src/router/menus.js ***!
  \*****************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");\n/* harmony import */ var umis_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! umis-renderer */ "./node_modules/umis-renderer/dist/js/index.js");\n/* harmony import */ var umis_renderer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(umis_renderer__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_frame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/frame */ "./src/data/frame.js");\n/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./creator */ "./src/router/creator.js");\n\n\n\n\n\nvar history =  false ? undefined : Object(vue_router__WEBPACK_IMPORTED_MODULE_1__["createWebHashHistory"])();\n\nvar createMenus = function createMenus(menus) {\n  var routes = _creator__WEBPACK_IMPORTED_MODULE_4__["default"].dynamicMenuCreator(menus).initDocMenu().docMenuCreator().menus;\n  _data_frame__WEBPACK_IMPORTED_MODULE_3__["default"].body[1].body[0].body.body = menus;\n  var router = Object(vue_router__WEBPACK_IMPORTED_MODULE_1__["createRouter"])({\n    history: history,\n    routes: [{\n      path: \'/\',\n      name: \'UmisWebsite\',\n      component: umis_renderer__WEBPACK_IMPORTED_MODULE_2__["MisSchema"],\n      props: {\n        initSchema: _data_frame__WEBPACK_IMPORTED_MODULE_3__["default"],\n        canSchemaUpdate: false,\n        iProtal: true\n      },\n      children: routes\n    }]\n  });\n  routes.forEach(function (item) {\n    router.addRoute(\'UmisWebsite\', item);\n  });\n  return router;\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (createMenus);\n\n//# sourceURL=webpack:///./src/router/menus.js?'
        );

        /***/
      },

    /***/ './src/schema sync [\\w-]+\\.js$':
      /*!**************************************************!*\
  !*** ./src/schema sync nonrecursive [\w-]+\.js$ ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          'var map = {\n\t"./action.js": "./src/schema/action.js",\n\t"./astart.js": "./src/schema/astart.js",\n\t"./each.js": "./src/schema/each.js",\n\t"./html.js": "./src/schema/html.js",\n\t"./image.js": "./src/schema/image.js",\n\t"./initApi.js": "./src/schema/initApi.js",\n\t"./initData.js": "./src/schema/initData.js",\n\t"./mapping.js": "./src/schema/mapping.js",\n\t"./renderers.js": "./src/schema/renderers.js",\n\t"./table.js": "./src/schema/table.js"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error("Cannot find module \'" + req + "\'");\n\t\te.code = \'MODULE_NOT_FOUND\';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = "./src/schema sync [\\\\w-]+\\\\.js$";\n\n//# sourceURL=webpack:///./src/schema_sync_nonrecursive_%5B\\w-%5D+\\.js$?'
        );

        /***/
      },

    /***/ './src/schema/action.js':
      /*!******************************!*\
  !*** ./src/schema/action.js ***!
  \******************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _action_ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action/ajax */ \"./src/schema/action/ajax.js\");\n/* harmony import */ var _action_copy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action/copy */ \"./src/schema/action/copy.js\");\n/* harmony import */ var _action_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action/dialog */ \"./src/schema/action/dialog.js\");\n/* harmony import */ var _action_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action/drawer */ \"./src/schema/action/drawer.js\");\n/* harmony import */ var _action_pop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action/pop */ \"./src/schema/action/pop.js\");\n/* harmony import */ var _action_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action/url */ \"./src/schema/action/url.js\");\n/* harmony import */ var _action_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action/actions */ \"./src/schema/action/actions.js\");\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  renderer: 'mis-page',\n  classname: 'umis-website-doc',\n  title: '行为按钮',\n  initData: {\n    name: 'shuzhong song',\n    email: 'sshuzhong@outlook.com',\n    phone: '15510351839',\n    province: '北京',\n    age: '2'\n  },\n  body: [{\n    renderer: 'mis-card',\n    header: '异步请求Action',\n    body: {\n      renderer: 'mis-schema',\n      initSchema: _action_ajax__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n      canSchemaUpdate: false,\n      iProtal: false\n    },\n    footer: {\n      renderer: 'mis-action',\n      text: '查看源码',\n      actionType: 'mis-dialog',\n      body: {\n        title: '源码',\n        body: {\n          renderer: 'mis-editor',\n          schema: _action_ajax__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n        }\n      }\n    }\n  }, {\n    renderer: 'mis-divider'\n  }, {\n    renderer: 'mis-card',\n    header: '复制Action',\n    body: {\n      renderer: 'mis-schema',\n      initSchema: _action_copy__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      canSchemaUpdate: false,\n      iProtal: false\n    },\n    footer: {\n      renderer: 'mis-action',\n      text: '查看源码',\n      actionType: 'mis-dialog',\n      body: {\n        title: '源码',\n        body: {\n          renderer: 'mis-editor',\n          schema: _action_copy__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n        }\n      }\n    }\n  }, {\n    renderer: 'mis-divider'\n  }, {\n    renderer: 'mis-card',\n    header: 'DialogAction',\n    body: {\n      renderer: 'mis-schema',\n      initSchema: _action_dialog__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      canSchemaUpdate: false,\n      iProtal: false\n    },\n    footer: {\n      renderer: 'mis-action',\n      text: '查看源码',\n      actionType: 'mis-dialog',\n      body: {\n        title: '源码',\n        body: {\n          renderer: 'mis-editor',\n          schema: _action_dialog__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n        }\n      }\n    }\n  }, {\n    renderer: 'mis-divider'\n  }, {\n    renderer: 'mis-card',\n    header: 'DrawerAction',\n    body: {\n      renderer: 'mis-schema',\n      initSchema: _action_drawer__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      canSchemaUpdate: false,\n      iProtal: false\n    },\n    footer: {\n      renderer: 'mis-action',\n      text: '查看源码',\n      actionType: 'mis-dialog',\n      body: {\n        title: '源码',\n        body: {\n          renderer: 'mis-editor',\n          schema: _action_drawer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n        }\n      }\n    }\n  }, {\n    renderer: 'mis-divider'\n  }, {\n    renderer: 'mis-card',\n    header: 'PopAction',\n    body: {\n      renderer: 'mis-schema',\n      initSchema: _action_pop__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n      canSchemaUpdate: false,\n      iProtal: false\n    },\n    footer: {\n      renderer: 'mis-action',\n      text: '查看源码',\n      actionType: 'mis-dialog',\n      body: {\n        title: '源码',\n        body: {\n          renderer: 'mis-editor',\n          schema: _action_pop__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n        }\n      }\n    }\n  }, {\n    renderer: 'mis-divider'\n  }, {\n    renderer: 'mis-card',\n    header: 'UrlAction',\n    body: {\n      renderer: 'mis-schema',\n      initSchema: _action_url__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n      canSchemaUpdate: false,\n      iProtal: false\n    },\n    footer: {\n      renderer: 'mis-action',\n      text: '查看源码',\n      actionType: 'mis-dialog',\n      body: {\n        title: '源码',\n        body: {\n          renderer: 'mis-editor',\n          schema: _action_url__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n        }\n      }\n    }\n  }, {\n    renderer: 'mis-divider'\n  }, {\n    renderer: 'mis-card',\n    header: 'Action组',\n    body: {\n      renderer: 'mis-schema',\n      initSchema: _action_actions__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n      canSchemaUpdate: false,\n      iProtal: false\n    },\n    footer: {\n      renderer: 'mis-action',\n      text: '查看源码',\n      actionType: 'mis-dialog',\n      body: {\n        title: '源码',\n        body: {\n          renderer: 'mis-editor',\n          schema: _action_actions__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        }\n      }\n    }\n  }, {\n    renderer: 'mis-divider',\n    text: '属性列表'\n  }, {\n    renderer: 'mis-table',\n    columns: [{\n      name: 'prop',\n      label: '属性'\n    }, {\n      name: 'desc',\n      label: '说明'\n    }, {\n      name: 'type',\n      label: '类型'\n    }, {\n      name: 'options',\n      label: '可选值'\n    }, {\n      name: 'value',\n      label: '可选值'\n    }],\n    initRows: [{\n      prop: 'renderer',\n      desc: '渲染器名称',\n      type: 'string',\n      options: '-',\n      value: 'mis-action'\n    }, {\n      prop: 'actionType',\n      desc: '行为类型',\n      type: 'string',\n      options: 'mis-[ajax, dialog, drawer, url, copy]',\n      value: '-'\n    }, {\n      prop: 'actionApi',\n      desc: '当actionType=mis-ajax时，必须配置',\n      type: 'string',\n      options: '-',\n      value: '-'\n    }, {\n      prop: 'actions',\n      desc: '行为组，存放多个action',\n      type: 'array',\n      options: 'mis-action',\n      value: '-'\n    }, {\n      prop: 'text',\n      desc: '显示文案',\n      type: 'String / <%= data.tpl %>',\n      options: '-',\n      value: 'action'\n    }, {\n      prop: 'size',\n      desc: '尺寸',\n      type: 'String',\n      options: 'medium / small / mini',\n      value: '-'\n    }, {\n      prop: 'type',\n      desc: '类型',\n      type: 'String',\n      options: 'primary / success / warning / danger / info / text',\n      value: '-'\n    }, {\n      prop: 'plain',\n      desc: '朴素',\n      type: 'boolean',\n      options: '-',\n      value: 'false'\n    }, {\n      prop: 'round',\n      desc: '圆角',\n      type: 'boolean',\n      options: '-',\n      value: 'false'\n    }, {\n      prop: 'circle',\n      desc: '圆形',\n      type: 'boolean',\n      options: '-',\n      value: 'false'\n    }, {\n      prop: 'icon',\n      desc: '图标',\n      type: 'string',\n      options: '-',\n      value: '-'\n    }, {\n      prop: 'classname',\n      desc: '样式',\n      type: 'string',\n      options: '-',\n      value: '-'\n    }, {\n      prop: 'disabledOn',\n      desc: '不可用条件',\n      type: 'string',\n      options: '例：data.sex === 0',\n      value: '-'\n    }, {\n      prop: 'target',\n      desc: '行为结束后对目标组件后续操作',\n      type: 'string',\n      options: '-',\n      value: '-'\n    }, {\n      prop: 'popupType',\n      desc: '辅助弹层类型',\n      type: 'string',\n      options: 'over / confirm / tip / badge',\n      value: '-'\n    }, {\n      prop: 'popperWidth',\n      desc: '辅助弹层宽度，over时可用',\n      type: 'string',\n      options: '',\n      value: '-'\n    }, {\n      prop: 'popperWidth',\n      desc: '辅助弹层宽度，over时可用',\n      type: 'string',\n      options: '',\n      value: '-'\n    }, {\n      prop: 'popoverTitle',\n      desc: '标题，over时可用',\n      type: 'string',\n      options: '',\n      value: '-'\n    }, {\n      prop: 'popoverContent',\n      desc: '内容，over时可用',\n      type: 'string',\n      options: '',\n      value: '-'\n    }, {\n      prop: 'popoverPlacement',\n      desc: '位置，over时可用',\n      type: 'string',\n      options: 'top / top-start / top-end...',\n      value: '-'\n    }, {\n      prop: 'popperClass',\n      desc: '辅助弹层样式，over时可用',\n      type: 'string',\n      options: '',\n      value: '-'\n    }, {\n      prop: 'confirmTitle',\n      desc: '确认标题，confirm时可用',\n      type: 'string',\n      options: '',\n      value: '-'\n    }, {\n      prop: 'confirmCancelBtnText',\n      desc: '取消文案， confirm时可用',\n      type: 'string',\n      options: '',\n      value: '-'\n    }, {\n      prop: 'confirmCancelBtnType',\n      desc: '取消按钮类型， confirm时可用',\n      type: 'string',\n      options: '',\n      value: '-'\n    }, {\n      prop: 'confirmBtnText',\n      desc: '确认文案， confirm时可用',\n      type: 'string',\n      options: '',\n      value: '-'\n    }, {\n      prop: 'confirmBtnType',\n      desc: '确认按钮类型， confirm时可用',\n      type: 'string',\n      options: '',\n      value: '-'\n    }, {\n      prop: 'confirmIcon',\n      desc: '图标， confirm时可用',\n      type: 'string',\n      options: '',\n      value: '-'\n    }, {\n      prop: 'confirmIconColor',\n      desc: '图标颜色， confirm时可用',\n      type: 'string',\n      options: '',\n      value: '-'\n    }, {\n      prop: 'confirmHideIcon',\n      desc: '是否隐藏 icon， confirm时可用',\n      type: 'boolean',\n      options: '',\n      value: '-'\n    }, {\n      prop: 'badgeText',\n      desc: '显示值， badge时可用',\n      type: 'string',\n      options: '',\n      value: '-'\n    }, {\n      prop: 'badgeClass',\n      desc: '样式， badge时可用',\n      type: 'string',\n      options: '',\n      value: '-'\n    }, {\n      prop: 'tipDisabled',\n      desc: 'tip是否可用， tip时可用',\n      type: 'boolean',\n      options: '',\n      value: '-'\n    }, {\n      prop: 'tipEffect',\n      desc: 'tip主题， tip时可用',\n      type: 'boolean',\n      options: '',\n      value: '-'\n    }, {\n      prop: 'tipContent',\n      desc: 'tip内容， tip时可用',\n      type: 'boolean',\n      options: '',\n      value: '-'\n    }, {\n      prop: 'tipPlacement',\n      desc: 'tip位置， tip时可用',\n      type: 'boolean',\n      options: '',\n      value: '-'\n    }]\n  }]\n});\n\n//# sourceURL=webpack:///./src/schema/action.js?"
        );

        /***/
      },

    /***/ './src/schema/action/actions.js':
      /*!**************************************!*\
  !*** ./src/schema/action/actions.js ***!
  \**************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  renderer: 'mis-page',\n  title: 'Ajax按钮',\n  body: {\n    renderer: 'mis-action',\n    actionType: 'actions',\n    actions: [{\n      renderer: 'mis-action',\n      text: '百度一下',\n      size: 'mini',\n      actionType: 'mis-redirect',\n      redirect: 'http://www.baidu.com'\n    }, {\n      renderer: 'mis-action',\n      text: 'Bing一下',\n      size: 'mini',\n      actionType: 'mis-redirect',\n      redirect: 'https://www.cn.bing.com'\n    }, {\n      renderer: 'mis-action',\n      text: 'Google一下',\n      size: 'mini',\n      actionType: 'mis-redirect',\n      redirect: 'https://www.google.com'\n    }]\n  }\n});\n\n//# sourceURL=webpack:///./src/schema/action/actions.js?"
        );

        /***/
      },

    /***/ './src/schema/action/ajax.js':
      /*!***********************************!*\
  !*** ./src/schema/action/ajax.js ***!
  \***********************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  renderer: 'mis-action',\n  text: 'Ajax',\n  size: 'mini',\n  actionType: 'mis-ajax',\n  actionApi: {\n    url: '/api/user?uid=${uid}',\n    method: 'delete'\n  }\n});\n\n//# sourceURL=webpack:///./src/schema/action/ajax.js?"
        );

        /***/
      },

    /***/ './src/schema/action/copy.js':
      /*!***********************************!*\
  !*** ./src/schema/action/copy.js ***!
  \***********************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  renderer: 'mis-action',\n  text: '复制',\n  size: 'mini',\n  actionType: 'mis-copy',\n  content: 'https://www.baidu.com?name=${name}'\n});\n\n//# sourceURL=webpack:///./src/schema/action/copy.js?"
        );

        /***/
      },

    /***/ './src/schema/action/dialog.js':
      /*!*************************************!*\
  !*** ./src/schema/action/dialog.js ***!
  \*************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  renderer: 'mis-action',\n  text: '对话框',\n  size: 'mini',\n  actionType: 'mis-dialog',\n  body: {\n    body: {\n      renderer: 'mis-html',\n      html: 'drawer'\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/schema/action/dialog.js?"
        );

        /***/
      },

    /***/ './src/schema/action/drawer.js':
      /*!*************************************!*\
  !*** ./src/schema/action/drawer.js ***!
  \*************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  renderer: 'mis-action',\n  text: '抽屉',\n  size: 'mini',\n  actionType: 'mis-drawer',\n  body: {\n    showClose: true,\n    size: '60%',\n    label: '编辑',\n    header: {\n      renderer: 'mis-html',\n      html: '抽屉嵌套表单'\n    },\n    body: {\n      renderer: 'mis-html',\n      html: 'drawer'\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/schema/action/drawer.js?"
        );

        /***/
      },

    /***/ './src/schema/action/pop.js':
      /*!**********************************!*\
  !*** ./src/schema/action/pop.js ***!
  \**********************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  renderer: 'mis-page',\n  title: 'Ajax按钮',\n  body: [{\n    renderer: 'mis-action',\n    text: 'confirm',\n    size: 'mini',\n    actionType: 'mis-url',\n    url: 'https://www.baidu.com/s?wd=123',\n    blank: true,\n    confirmTitle: '你离开吗？',\n    popupType: 'confirm'\n  }, {\n    renderer: 'mis-action',\n    popupType: 'over',\n    text: 'popover',\n    size: 'mini',\n    body: {\n      renderer: 'mis-qrcode',\n      value: 'www.baidu.com'\n    }\n  }, {\n    renderer: 'mis-action',\n    text: 'Tooltip',\n    size: 'mini',\n    popupType: 'tip',\n    tipContent: '这是一个tooltip',\n    actionType: 'mis-dialog',\n    body: {\n      title: '详情信息',\n      appendBody: true,\n      modal: true,\n      body: {\n        renderer: 'mis-html',\n        html: '这是一个tooltip'\n      }\n    }\n  }, {\n    renderer: 'mis-action',\n    popupType: 'badge',\n    text: 'badge',\n    size: 'mini',\n    badgeText: '4',\n    actionType: 'mis-dialog',\n    body: {\n      title: '详情信息',\n      appendBody: true,\n      modal: true,\n      body: {\n        renderer: 'mis-html',\n        html: '123'\n      }\n    }\n  }]\n});\n\n//# sourceURL=webpack:///./src/schema/action/pop.js?"
        );

        /***/
      },

    /***/ './src/schema/action/url.js':
      /*!**********************************!*\
  !*** ./src/schema/action/url.js ***!
  \**********************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  renderer: 'mis-action',\n  text: '百度一下',\n  size: 'mini',\n  actionType: 'mis-redirect',\n  redirect: 'http://www.baidu.com'\n});\n\n//# sourceURL=webpack:///./src/schema/action/url.js?"
        );

        /***/
      },

    /***/ './src/schema/astart.js':
      /*!******************************!*\
  !*** ./src/schema/astart.js ***!
  \******************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _start_demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start/demo */ \"./src/schema/start/demo.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  renderer: 'mis-page',\n  classname: 'umis-website-doc',\n  title: '快速开始',\n  body: [{\n    renderer: 'mis-html',\n    html: 'umis是一个基于vue和element-ui制作的渲染器组件库，意欲通过json配置生成页面。'\n  }, {\n    renderer: 'mis-divider'\n  }, {\n    renderer: 'mis-card',\n    header: [{\n      renderer: 'mis-icon',\n      icon: 'el-icon-warning-outline'\n    }, {\n      renderer: 'mis-html',\n      html: '&nbsp;引入',\n      inline: true\n    }],\n    body: {\n      renderer: 'mis-html',\n      html: \"\\nimport UmisRenderers from \\\"umis-renderers\\\";<br/>\\nVue.use(UmisRenderers, options);              \\n              \"\n    },\n    footer: {\n      renderer: 'mis-action',\n      text: '点击复制',\n      actionType: 'mis-copy',\n      content: 'import UmisRenderers from \"umis-renderers\"; Vue.use(UmisRenderers, options);'\n    }\n  }, {\n    renderer: 'mis-divider',\n    text: 'options配置'\n  }, {\n    renderer: 'mis-card',\n    header: [{\n      renderer: 'mis-icon',\n      icon: 'el-icon-warning-outline'\n    }, {\n      renderer: 'mis-html',\n      html: '&nbsp;适配器(options.adaptor)',\n      inline: true\n    }],\n    body: [{\n      renderer: 'mis-html',\n      html: 'adaptor.req，请求前置，可以对请求参数做定制化处理'\n    }, {\n      renderer: 'mis-html',\n      html: \"\\nif (url.includes('terra/routes/list.json') && method === 'get') {<br/>\\n  &nbsp;&nbsp;req.params.page_size=params.pageSize;<br/>\\n}\\n                    \"\n    }, {\n      renderer: 'mis-divider'\n    }, {\n      renderer: 'mis-html',\n      html: 'adaptor.res，响应后置，可以对响应体做定制化处理',\n      inline: true\n    }, {\n      renderer: 'mis-html',\n      html: \"\\nif (url.includes('terra/routes/list.json') && method === 'get') {<br/>\\n&nbsp;&nbsp;res.data.items.forEach(function(item) {<br/>\\n&nbsp;&nbsp;&nbsp;&nbsp;item.status = item.status == 1;<br/>\\n&nbsp;&nbsp;})<br/>\\n}\\n                    \"\n    }],\n    footer: {\n      renderer: 'mis-action',\n      actionType: 'mis-copy',\n      text: '点击复制',\n      content: 'const UMIS_CONFIG = {adaptor: {req: \"\", res: \"\"}}'\n    }\n  }, {\n    renderer: 'mis-divider'\n  }, {\n    renderer: 'mis-card',\n    header: [{\n      renderer: 'mis-icon',\n      icon: 'el-icon-warning-outline'\n    }, {\n      renderer: 'mis-html',\n      html: '&nbsp;Hello World',\n      inline: true\n    }],\n    body: [{\n      renderer: 'mis-schema',\n      initSchema: _start_demo__WEBPACK_IMPORTED_MODULE_0__[\"start\"]\n    }],\n    footer: {\n      renderer: 'mis-action',\n      text: '查看源码',\n      actionType: 'mis-dialog',\n      body: {\n        title: '源码',\n        body: _start_demo__WEBPACK_IMPORTED_MODULE_0__[\"demoSchema\"]\n      }\n    }\n  }, {\n    renderer: 'mis-divider',\n    text: '属性列表'\n  }, {\n    renderer: 'mis-table',\n    columns: [{\n      name: 'prop',\n      label: '属性'\n    }, {\n      name: 'desc',\n      label: '说明'\n    }, {\n      name: 'type',\n      label: '类型'\n    }, {\n      name: 'options',\n      label: '可选值'\n    }, {\n      name: 'value',\n      label: '可选值'\n    }],\n    initRows: [{\n      prop: 'adaptor',\n      desc: '适配器对象',\n      type: 'Object',\n      options: '-',\n      value: '-'\n    }, {\n      prop: 'adaptor.req',\n      desc: '请求适配器',\n      type: 'String(可用变量：url，method，req)',\n      options: '-',\n      value: '-'\n    }, {\n      prop: 'adaptor.res',\n      desc: '响应适配器',\n      type: 'String(可用变量：url，method，res)',\n      options: '-',\n      value: '-'\n    }]\n  }]\n});\n\n//# sourceURL=webpack:///./src/schema/astart.js?"
        );

        /***/
      },

    /***/ './src/schema/each.js':
      /*!****************************!*\
  !*** ./src/schema/each.js ***!
  \****************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _each_demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./each/demo */ \"./src/schema/each/demo.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  renderer: 'mis-page',\n  classname: 'umis-website-doc',\n  title: '列表数据',\n  initData: {\n    interests: [{\n      name: 'cooking',\n      sort: '0'\n    }, {\n      name: 'reading',\n      sort: '1'\n    }]\n  },\n  inherit: {\n    type: 'include',\n    value: ['interests']\n  },\n  body: [_each_demo__WEBPACK_IMPORTED_MODULE_0__[\"desc\"], {\n    renderer: 'mis-divider'\n  }, {\n    renderer: 'mis-card',\n    header: '先mapping后each',\n    body: _each_demo__WEBPACK_IMPORTED_MODULE_0__[\"mappingEach\"],\n    footer: {\n      renderer: 'mis-action',\n      text: '查看源码',\n      actionType: 'mis-dialog',\n      body: {\n        title: '源码',\n        body: {\n          renderer: 'mis-editor',\n          schema: _each_demo__WEBPACK_IMPORTED_MODULE_0__[\"mappingEach\"]\n        }\n      }\n    }\n  }, {\n    renderer: 'mis-divider'\n  }, {\n    renderer: 'mis-card',\n    header: '先each后mapping',\n    body: _each_demo__WEBPACK_IMPORTED_MODULE_0__[\"eachMapping\"],\n    footer: {\n      renderer: 'mis-action',\n      text: '查看源码',\n      actionType: 'mis-dialog',\n      body: {\n        title: '源码',\n        body: {\n          renderer: 'mis-editor',\n          schema: _each_demo__WEBPACK_IMPORTED_MODULE_0__[\"eachMapping\"]\n        }\n      }\n    }\n  }, {\n    renderer: 'mis-divider',\n    text: '属性列表'\n  }, {\n    renderer: 'mis-table',\n    columns: [{\n      name: 'prop',\n      label: '属性'\n    }, {\n      name: 'desc',\n      label: '说明'\n    }, {\n      name: 'type',\n      label: '类型'\n    }, {\n      name: 'options',\n      label: '可选值'\n    }, {\n      name: 'value',\n      label: '可选值'\n    }],\n    initRows: [{\n      prop: 'body',\n      desc: '子渲染器',\n      type: 'Object',\n      options: '-',\n      value: ''\n    }]\n  }]\n});\n\n//# sourceURL=webpack:///./src/schema/each.js?"
        );

        /***/
      },

    /***/ './src/schema/each/demo.js':
      /*!*********************************!*\
  !*** ./src/schema/each/demo.js ***!
  \*********************************/
      /*! exports provided: desc, eachMapping, mappingEach */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"desc\", function() { return desc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eachMapping\", function() { return eachMapping; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mappingEach\", function() { return mappingEach; });\nvar desc = {\n  renderer: 'mis-html',\n  html: '功能介绍：循环自身的data数据到子渲染器中，配合mapping使用'\n};\nvar eachMapping = {\n  renderer: 'mis-wrapper',\n  initData: {\n    interests: [{\n      name: 'cooking',\n      sort: '0'\n    }, {\n      name: 'reading',\n      sort: '1'\n    }]\n  },\n  body: {\n    renderer: 'mis-mapping',\n    value: 'interests',\n    body: {\n      renderer: 'mis-each',\n      body: {\n        renderer: 'mis-mapping',\n        value: '<%=data.name%>',\n        map: {\n          cooking: '<h1>i like cooking</h1>',\n          reading: '<h1>i like reading</h1>'\n        }\n      }\n    }\n  }\n};\nvar mappingEach = {\n  renderer: 'mis-wrapper',\n  initData: {\n    interests: [{\n      name: 'cooking',\n      sort: '0'\n    }, {\n      name: 'reading',\n      sort: '1'\n    }]\n  },\n  body: {\n    renderer: 'mis-mapping',\n    value: 'interests',\n    body: {\n      renderer: 'mis-each',\n      body: {\n        renderer: 'mis-html',\n        html: '<h1>i like <%=data.name%></h1>'\n      }\n    }\n  }\n};\n\n\n//# sourceURL=webpack:///./src/schema/each/demo.js?"
        );

        /***/
      },

    /***/ './src/schema/html.js':
      /*!****************************!*\
  !*** ./src/schema/html.js ***!
  \****************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _html_demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html/demo */ \"./src/schema/html/demo.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  renderer: 'mis-page',\n  classname: 'umis-website-doc',\n  title: '文本',\n  initData: {\n    interests: [{\n      name: 'cooking',\n      sort: '0'\n    }, {\n      name: 'reading',\n      sort: '1'\n    }]\n  },\n  inherit: {\n    type: 'include',\n    value: ['interests']\n  },\n  body: [{\n    renderer: 'mis-card',\n    header: '在html模板中使用js api',\n    body: _html_demo__WEBPACK_IMPORTED_MODULE_0__[\"htmlMap\"],\n    footer: {\n      renderer: 'mis-action',\n      text: '查看源码',\n      actionType: 'mis-dialog',\n      body: {\n        title: '源码',\n        body: {\n          renderer: 'mis-editor',\n          schema: _html_demo__WEBPACK_IMPORTED_MODULE_0__[\"htmlMap\"]\n        }\n      }\n    }\n  }, {\n    renderer: 'mis-divider'\n  }, {\n    renderer: 'mis-table',\n    columns: [{\n      name: 'prop',\n      label: '属性'\n    }, {\n      name: 'desc',\n      label: '说明'\n    }, {\n      name: 'type',\n      label: '类型'\n    }, {\n      name: 'options',\n      label: '可选值'\n    }, {\n      name: 'value',\n      label: '可选值'\n    }],\n    initRows: [{\n      prop: 'html',\n      desc: 'html模板',\n      type: 'String',\n      options: '-',\n      value: ''\n    }, {\n      prop: 'classname',\n      desc: '自定义样式类名',\n      type: 'String',\n      options: '-',\n      value: ''\n    }]\n  }]\n});\n\n//# sourceURL=webpack:///./src/schema/html.js?"
        );

        /***/
      },

    /***/ './src/schema/html/demo.js':
      /*!*********************************!*\
  !*** ./src/schema/html/demo.js ***!
  \*********************************/
      /*! exports provided: htmlMap */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlMap\", function() { return htmlMap; });\nvar htmlMap = {\n  renderer: 'mis-html',\n  html: '<%= data.interests.map(item => item.name) %>'\n};\n\n\n//# sourceURL=webpack:///./src/schema/html/demo.js?"
        );

        /***/
      },

    /***/ './src/schema/image.js':
      /*!*****************************!*\
  !*** ./src/schema/image.js ***!
  \*****************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _image_demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image/demo */ \"./src/schema/image/demo.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  renderer: 'mis-page',\n  classname: 'umis-website-doc',\n  title: '图片',\n  body: [{\n    renderer: 'mis-card',\n    body: _image_demo__WEBPACK_IMPORTED_MODULE_0__[\"previewSchema\"],\n    footer: {\n      renderer: 'mis-action',\n      text: '查看源码',\n      actionType: 'mis-dialog',\n      body: {\n        title: '源码',\n        body: {\n          renderer: 'mis-editor',\n          schema: _image_demo__WEBPACK_IMPORTED_MODULE_0__[\"previewSchema\"]\n        }\n      }\n    }\n  }, {\n    renderer: 'mis-divider'\n  }, {\n    renderer: 'mis-table',\n    columns: [{\n      name: 'prop',\n      label: '属性'\n    }, {\n      name: 'desc',\n      label: '说明'\n    }, {\n      name: 'type',\n      label: '类型'\n    }, {\n      name: 'options',\n      label: '可选值'\n    }, {\n      name: 'value',\n      label: '可选值'\n    }],\n    initRows: [{\n      prop: 'html',\n      desc: 'html模板',\n      type: 'String',\n      options: '-',\n      value: ''\n    }, {\n      prop: 'classname',\n      desc: '自定义样式类名',\n      type: 'String',\n      options: '-',\n      value: ''\n    }]\n  }]\n});\n\n//# sourceURL=webpack:///./src/schema/image.js?"
        );

        /***/
      },

    /***/ './src/schema/image/demo.js':
      /*!**********************************!*\
  !*** ./src/schema/image/demo.js ***!
  \**********************************/
      /*! exports provided: previewSchema */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"previewSchema\", function() { return previewSchema; });\nvar previewSchema = {\n  renderer: 'mis-image',\n  classname: 'umis-demo_doc-image',\n  src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',\n  previews: ['https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg']\n};\n\n\n//# sourceURL=webpack:///./src/schema/image/demo.js?"
        );

        /***/
      },

    /***/ './src/schema/init-data/demo.js':
      /*!**************************************!*\
  !*** ./src/schema/init-data/demo.js ***!
  \**************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  renderer: 'mis-service',\n  initData: {\n    tip: 'everything is awosome!'\n  },\n  body: {\n    renderer: 'mis-html',\n    html: '<%= data.tip %>'\n  }\n});\n\n//# sourceURL=webpack:///./src/schema/init-data/demo.js?"
        );

        /***/
      },

    /***/ './src/schema/initApi.js':
      /*!*******************************!*\
  !*** ./src/schema/initApi.js ***!
  \*******************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  renderer: 'mis-page',\n  classname: 'umis-website-doc',\n  title: '初始化接口',\n  initData: {\n    name: 'shuzhong song',\n    email: 'sshuzhong@outlook.com',\n    phone: '15510351839',\n    province: '北京',\n    age: '2'\n  },\n  body: [{\n    renderer: 'mis-card',\n    header: 'initApi',\n    body: {\n      renderer: 'mis-html',\n      html: 'table、cards、service渲染器配有initApi，可以通过这个属性获取初始化数据。'\n    }\n  }, {\n    renderer: 'mis-divider'\n  }, {\n    renderer: 'mis-table',\n    columns: [{\n      name: 'prop',\n      label: '属性'\n    }, {\n      name: 'desc',\n      label: '说明'\n    }, {\n      name: 'type',\n      label: '类型'\n    }, {\n      name: 'options',\n      label: '可选值'\n    }, {\n      name: 'value',\n      label: '可选值'\n    }],\n    initRows: [{\n      prop: 'url',\n      desc: '请求路径',\n      type: 'string',\n      options: '-',\n      value: '-'\n    }, {\n      prop: 'method',\n      desc: '请求类型',\n      type: 'string',\n      options: 'get、post、put、delete(注意：小写)',\n      value: 'get'\n    }, {\n      prop: 'params',\n      desc: '请求参数，支持${name}从data中动态获取',\n      type: 'Object',\n      options: '-',\n      value: '-'\n    }, {\n      prop: 'cached',\n      desc: '该接口是否允许被缓存',\n      type: 'boolean',\n      options: 'true、false',\n      value: 'false'\n    }, {\n      prop: 'sendOn',\n      desc: '请求条件(暂不支持)',\n      type: 'String / <%= data.tpl %>',\n      options: '-',\n      value: '-'\n    }, {\n      prop: 'msg',\n      desc: '自定义响应信息(暂不支持)',\n      type: 'String',\n      options: '-',\n      value: '-'\n    }]\n  }]\n});\n\n//# sourceURL=webpack:///./src/schema/initApi.js?"
        );

        /***/
      },

    /***/ './src/schema/initData.js':
      /*!********************************!*\
  !*** ./src/schema/initData.js ***!
  \********************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init_data_demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init-data/demo */ \"./src/schema/init-data/demo.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  renderer: 'mis-page',\n  classname: 'umis-website-doc',\n  title: '作用域链',\n  initData: {\n    name: 'shuzhong song',\n    email: 'sshuzhong@outlook.com',\n    phone: '15510351839',\n    province: '北京',\n    age: '2'\n  },\n  body: [{\n    renderer: 'mis-card',\n    inherit: {\n      type: 'none'\n    },\n    header: {\n      renderer: 'mis-html',\n      html: \"\\u5BB9\\u5668\\u7C7B\\u578B\\u6E32\\u67D3\\u5668\\u914D\\u6709initData\\u5C5E\\u6027\\uFF0C\\u5F00\\u53D1\\u8005\\u53EF\\u4EE5\\u6839\\u636E\\u8FD9\\u4E2A\\u5C5E\\u6027\\u505A\\u6570\\u636E\\u521D\\u59CB\\u5316\\u3002<br/>\\n\\u8BE5\\u5BB9\\u5668\\u5185\\u7684\\u5B50\\u7EC4\\u4EF6\\u4F1A\\u901A\\u8FC7\\u81EA\\u8EAB\\u7684initData\\u5C5E\\u6027\\u9ED8\\u8BA4\\u81EA\\u52A8\\u7EE7\\u627F\\u7236\\u7EA7\\u7684initData(\\u6CE8\\u610F:\\u76F8\\u540Ckey\\u503C\\u7684\\u6570\\u636E\\u6709\\u8986\\u76D6\\u7684\\u98CE\\u9669)\\uFF0C<br/>\\n\\u4E0D\\u4F9D\\u8D56\\u81EA\\u52A8\\u7EE7\\u627F\\u7684\\u8BDD\\u53EF\\u4EE5\\u6839\\u636Einherit\\u5C5E\\u6027\\u5BF9\\u5B57\\u6BB5\\u624B\\u52A8\\u8FC7\\u6EE4\\u3002\\n\"\n    },\n    body: _init_data_demo__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    footer: {\n      renderer: 'mis-action',\n      text: '查看源码',\n      actionType: 'mis-dialog',\n      body: {\n        title: '源码',\n        body: {\n          renderer: 'mis-editor',\n          schema: _init_data_demo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n        }\n      }\n    }\n  }, {\n    renderer: 'mis-divider'\n  }, {\n    renderer: 'mis-table',\n    columns: [{\n      name: 'prop',\n      label: '属性'\n    }, {\n      name: 'desc',\n      label: '说明'\n    }, {\n      name: 'type',\n      label: '类型'\n    }, {\n      name: 'options',\n      label: '可选值'\n    }, {\n      name: 'value',\n      label: '可选值'\n    }],\n    initRows: [{\n      prop: 'initData',\n      desc: '初始化数据',\n      type: 'Object',\n      options: '-',\n      value: '-'\n    }, {\n      prop: 'inherit',\n      desc: '继承',\n      type: 'Object',\n      options: '-',\n      value: '-'\n    }, {\n      prop: 'inherit.type',\n      desc: '继承类型',\n      type: 'string',\n      options: 'include、exclude',\n      value: 'all'\n    }, {\n      prop: 'inherit.value',\n      desc: '需要继承的keys',\n      type: 'array',\n      options: '-',\n      value: '[]'\n    }]\n  }]\n});\n\n//# sourceURL=webpack:///./src/schema/initData.js?"
        );

        /***/
      },

    /***/ './src/schema/mapping.js':
      /*!*******************************!*\
  !*** ./src/schema/mapping.js ***!
  \*******************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mapping_local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapping/local */ \"./src/schema/mapping/local.js\");\n/* harmony import */ var _mapping_remote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapping/remote */ \"./src/schema/mapping/remote.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  renderer: 'mis-page',\n  classname: 'umis-website-doc',\n  title: '字典数据',\n  initData: {\n    name: 'shuzhong song',\n    email: 'sshuzhong@outlook.com',\n    phone: '15510351839',\n    province: '北京',\n    age: '2',\n    sex: '1'\n  },\n  body: [{\n    renderer: 'mis-card',\n    header: '读取本地字典码',\n    body: _mapping_local__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    footer: {\n      renderer: 'mis-action',\n      text: '查看源码',\n      actionType: 'mis-dialog',\n      body: {\n        title: '源码',\n        body: {\n          renderer: 'mis-editor',\n          schema: _mapping_local__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n        }\n      }\n    }\n  }, {\n    renderer: 'mis-divider'\n  }, {\n    renderer: 'mis-card',\n    header: '读取接口字典码',\n    body: _mapping_remote__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    footer: {\n      renderer: 'mis-action',\n      text: '查看源码',\n      actionType: 'mis-dialog',\n      body: {\n        title: '源码',\n        body: {\n          renderer: 'mis-editor',\n          schema: _mapping_remote__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n        }\n      }\n    }\n  }, {\n    renderer: 'mis-divider'\n  }, {\n    renderer: 'mis-table',\n    columns: [{\n      name: 'prop',\n      label: '属性'\n    }, {\n      name: 'desc',\n      label: '说明'\n    }, {\n      name: 'type',\n      label: '类型'\n    }, {\n      name: 'options',\n      label: '可选值'\n    }, {\n      name: 'value',\n      label: '可选值'\n    }],\n    initRows: [{\n      prop: 'initApi',\n      desc: '初始化数据配置(远程数据优先级高于map)',\n      type: 'Object',\n      options: '-',\n      value: ''\n    }, {\n      prop: 'value',\n      desc: '从data中pick出的key(支持表达式<%=data.key%>)',\n      type: 'Object',\n      options: '-',\n      value: '-'\n    }, {\n      prop: 'map',\n      desc: '字典Map',\n      type: 'Object',\n      options: '-',\n      value: '-'\n    }, {\n      prop: 'body',\n      desc: '子渲染器',\n      type: 'Object',\n      options: '-',\n      value: '-'\n    }, {\n      prop: 'inline',\n      desc: '是否同行',\n      type: 'Boolean',\n      options: '-',\n      value: '-'\n    }]\n  }]\n});\n\n//# sourceURL=webpack:///./src/schema/mapping.js?"
        );

        /***/
      },

    /***/ './src/schema/mapping/local.js':
      /*!*************************************!*\
  !*** ./src/schema/mapping/local.js ***!
  \*************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  renderer: 'mis-mapping',\n  value: '1',\n  map: {\n    0: '女',\n    1: '男'\n  }\n});\n\n//# sourceURL=webpack:///./src/schema/mapping/local.js?"
        );

        /***/
      },

    /***/ './src/schema/mapping/remote.js':
      /*!**************************************!*\
  !*** ./src/schema/mapping/remote.js ***!
  \**************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  renderer: 'mis-mapping',\n  value: '<%= data.sex %>',\n  initApi: {\n    url: 'https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/mapping',\n    method: 'get',\n    cached: true\n  }\n});\n\n//# sourceURL=webpack:///./src/schema/mapping/remote.js?"
        );

        /***/
      },

    /***/ './src/schema/nest/demo.js':
      /*!*********************************!*\
  !*** ./src/schema/nest/demo.js ***!
  \*********************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  renderer: 'mis-page',\n  body: {\n    renderer: 'mis-layout',\n    body: [{\n      renderer: 'mis-aside',\n      classname: 'umis-demo_doc-aside',\n      body: {\n        renderer: 'mis-html',\n        html: 'aside'\n      }\n    }, {\n      renderer: 'mis-layout',\n      direction: 'vertical',\n      body: [{\n        renderer: 'mis-header',\n        classname: 'umis-demo_doc_header',\n        body: {\n          renderer: 'mis-html',\n          html: 'header'\n        }\n      }, {\n        renderer: 'mis-main',\n        classname: 'umis-demo_doc-main',\n        body: {\n          renderer: 'mis-wrapper',\n          body: [{\n            renderer: 'mis-html',\n            html: 'main'\n          }, {\n            renderer: 'mis-noop'\n          }]\n        }\n      }, {\n        renderer: 'mis-footer',\n        classname: 'umis-demo_doc_footer',\n        body: {\n          renderer: 'mis-html',\n          html: 'footer'\n        }\n      }]\n    }]\n  }\n});\n\n//# sourceURL=webpack:///./src/schema/nest/demo.js?"
        );

        /***/
      },

    /***/ './src/schema/renderers.js':
      /*!*********************************!*\
  !*** ./src/schema/renderers.js ***!
  \*********************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nest_demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nest/demo */ \"./src/schema/nest/demo.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  renderer: 'mis-page',\n  classname: 'umis-website-doc',\n  title: '渲染器链',\n  body: [{\n    renderer: 'mis-card',\n    inherit: {\n      type: 'none'\n    },\n    header: {\n      renderer: 'mis-html',\n      html: \"\\u6E32\\u67D3\\u5668\\u652F\\u6301\\u5D4C\\u5957\\u4F7F\\u7528\\uFF0C\\u5728\\u627E\\u4E0D\\u5230\\u65F6\\u4F1A\\u7528error\\u515C\\u5E95\\u5E76\\u7ED9\\u51FA\\u9519\\u8BEF\\u4FE1\\u606F\\n\"\n    },\n    body: _nest_demo__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    footer: {\n      renderer: 'mis-action',\n      text: '查看源码',\n      actionType: 'mis-dialog',\n      body: {\n        title: '源码',\n        body: {\n          renderer: 'mis-editor',\n          schema: _nest_demo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n        }\n      }\n    }\n  }, {\n    renderer: 'mis-divider'\n  }, {\n    renderer: 'mis-table',\n    columns: [{\n      name: 'prop',\n      label: '属性'\n    }, {\n      name: 'desc',\n      label: '说明'\n    }, {\n      name: 'type',\n      label: '类型'\n    }, {\n      name: 'options',\n      label: '可选值'\n    }, {\n      name: 'value',\n      label: '可选值'\n    }],\n    initRows: [{\n      prop: 'renderer',\n      desc: '渲染器名称',\n      type: 'String',\n      options: '-',\n      value: '-'\n    }, {\n      prop: 'header',\n      desc: '头部信息',\n      type: 'String / Array / Object',\n      options: '-',\n      value: 'header'\n    }, {\n      prop: 'body',\n      desc: '主干信息',\n      type: 'String / Array / Object',\n      options: '-',\n      value: 'body'\n    }, {\n      prop: 'footer',\n      desc: '底部信息',\n      type: 'String / Array / Object',\n      options: '-',\n      value: 'footer'\n    }]\n  }]\n});\n\n//# sourceURL=webpack:///./src/schema/renderers.js?"
        );

        /***/
      },

    /***/ './src/schema/start/demo.js':
      /*!**********************************!*\
  !*** ./src/schema/start/demo.js ***!
  \**********************************/
      /*! exports provided: start, demoSchema */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demoSchema", function() { return demoSchema; });\nvar start = {\n  renderer: \'mis-html\',\n  html: \'Hello World!\'\n};\nvar demoSchema = {\n  renderer: \'mis-html\',\n  html: \'<div><h3>const json = {renderer: "html", html: "Hello World!"};</h3><h3>&lt;mis-schema \\:initSchema=json \\/&gt;</h3></div>\'\n};\n\n\n//# sourceURL=webpack:///./src/schema/start/demo.js?'
        );

        /***/
      },

    /***/ './src/schema/table.js':
      /*!*****************************!*\
  !*** ./src/schema/table.js ***!
  \*****************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _table_demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table/demo */ \"./src/schema/table/demo.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  renderer: 'mis-page',\n  classname: 'umis-website-doc',\n  title: '表格',\n  initData: {\n    name: 'shuzhong song',\n    email: 'sshuzhong@outlook.com',\n    phone: '15510351839',\n    province: '北京',\n    age: '2'\n  },\n  body: [{\n    renderer: 'mis-card',\n    body: _table_demo__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    footer: {\n      renderer: 'mis-action',\n      text: '查看源码',\n      actionType: 'mis-dialog',\n      body: {\n        title: '源码',\n        body: {\n          renderer: 'mis-editor',\n          schema: _table_demo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n        }\n      }\n    }\n  }, {\n    renderer: 'mis-divider'\n  }, {\n    renderer: 'mis-table',\n    columns: [{\n      name: 'prop',\n      label: '属性'\n    }, {\n      name: 'desc',\n      label: '说明'\n    }, {\n      name: 'type',\n      label: '类型'\n    }, {\n      name: 'options',\n      label: '可选值'\n    }, {\n      name: 'value',\n      label: '可选值'\n    }],\n    initRows: [{\n      prop: 'columns',\n      desc: '列(body配置可嵌套一个或多个子渲染器)',\n      type: 'Array',\n      options: '-',\n      value: '-'\n    }, {\n      prop: 'renderHook',\n      desc: '自定义渲染函数',\n      type: 'Function',\n      options: '-',\n      value: '-'\n    }, {\n      prop: 'name',\n      desc: '名称(用于组件联动)',\n      type: 'string',\n      options: '-',\n      value: '-'\n    }, {\n      prop: 'title',\n      desc: '标题',\n      type: 'string',\n      options: '-',\n      value: '-'\n    }, {\n      prop: 'initRows',\n      desc: '数据',\n      type: 'array',\n      options: '-',\n      value: '-'\n    }, {\n      prop: 'initApi',\n      desc: '初始化接口',\n      type: 'Object',\n      options: '-',\n      value: '-'\n    }, {\n      prop: 'actions',\n      desc: '批量处理',\n      type: 'Array',\n      options: '-',\n      value: '-'\n    }, {\n      prop: 'height',\n      desc: '高度',\n      type: 'String',\n      options: '-',\n      value: '-'\n    }, {\n      prop: 'maxHeight',\n      desc: '最大高度',\n      type: 'String',\n      options: '-',\n      value: '-'\n    }, {\n      prop: 'stripe',\n      desc: '斑马条纹',\n      type: 'Boolean',\n      options: '-',\n      value: 'true'\n    }, {\n      prop: 'border',\n      desc: '边框',\n      type: 'Boolean',\n      options: '-',\n      value: 'true'\n    }, {\n      prop: 'fit',\n      desc: '宽度自适应',\n      type: 'Boolean',\n      options: '-',\n      value: 'true'\n    }, {\n      prop: 'showDynamicColumn',\n      desc: '显示动态列',\n      type: 'Boolean',\n      options: '-',\n      value: 'true'\n    }, {\n      prop: 'showHeader',\n      desc: '显示头部信息',\n      type: 'Boolean',\n      options: '-',\n      value: 'true'\n    }, {\n      prop: 'showExport',\n      desc: '导出',\n      type: 'Boolean',\n      options: '-',\n      value: 'false'\n    }, {\n      prop: 'hasPageInfo',\n      desc: '分页',\n      type: 'Boolean',\n      options: '-',\n      value: 'false'\n    }, {\n      prop: 'syncLocation',\n      desc: '参数同步到地址栏',\n      type: 'Boolean',\n      options: '',\n      value: 'false'\n    }]\n  }]\n});\n\n//# sourceURL=webpack:///./src/schema/table.js?"
        );

        /***/
      },

    /***/ './src/schema/table/demo.js':
      /*!**********************************!*\
  !*** ./src/schema/table/demo.js ***!
  \**********************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  renderer: 'mis-table',\n  name: 'usertable',\n  maxHeight: 570,\n  showDynamicColumn: true,\n  showExport: true,\n  hasPageInfo: true,\n  border: true,\n  title: '出场人物表',\n  initApi: {\n    url: '/api/users',\n    method: 'get',\n    params: {\n      pageIndex: 1,\n      pageSize: 10\n    }\n  },\n  columns: [{\n    type: 'selection',\n    fixed: 'left'\n  }, {\n    name: 'name',\n    label: '姓名',\n    fixed: 'left',\n    body: {\n      renderer: 'mis-action',\n      type: 'text',\n      text: '<%= data.name %>',\n      actionType: 'mis-redirect',\n      redirect: '/details?uid=${uid}'\n    }\n  }, {\n    name: 'phone',\n    label: '手机号码',\n    body: {\n      renderer: 'mis-quickedit',\n      title: '修改手机号码',\n      label: '<%= data.phone %>',\n      keyword: 'phone',\n      actionApi: {\n        url: '/api/user?uid=${uid}',\n        method: 'put',\n        params: '*'\n      },\n      rules: [{\n        required: true,\n        message: '请输入手机号码',\n        trigger: 'blur'\n      }],\n      reload: 'usertable'\n    }\n  }, {\n    name: 'province',\n    label: ' 省份'\n  }, {\n    name: 'sex',\n    label: '性别',\n    body: [{\n      renderer: 'mis-mapping',\n      value: '<%= data.sex %>',\n      initApi: {\n        url: 'https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/mapping',\n        method: 'get',\n        cached: true\n      }\n    }]\n  }, {\n    name: 'createdAt',\n    label: '创建时间'\n  }, {\n    name: 'updatedAt',\n    label: '更新时间'\n  }, {\n    label: '操作集合',\n    body: [{\n      renderer: 'mis-action',\n      text: '删除',\n      size: 'mini',\n      plain: true,\n      type: 'warning',\n      actionType: 'mis-ajax',\n      actionApi: {\n        url: '/api/user?uid=${uid}',\n        method: 'delete'\n      },\n      confirmTitle: '你删除吗？',\n      reload: 'usertable',\n      popupType: 'confirm'\n    }, {\n      renderer: 'mis-action',\n      text: '编辑',\n      size: 'mini',\n      type: 'primary',\n      plain: true,\n      actionType: 'mis-ajax',\n      actionApi: {\n        url: '/api/user?uid=${uid}',\n        method: 'delete'\n      },\n      confirmTitle: '你删除吗？',\n      reload: 'usertable',\n      popupType: 'confirm'\n    }, {\n      renderer: 'mis-action',\n      text: '发布',\n      type: 'danger',\n      plain: true,\n      size: 'mini',\n      actionType: 'mis-ajax',\n      actionApi: {\n        url: '/api/user?uid=${uid}',\n        method: 'delete'\n      },\n      confirmTitle: '你删除吗？',\n      reload: 'usertable',\n      popupType: 'confirm'\n    }]\n  }],\n  actions: [{\n    renderer: 'mis-action',\n    text: '删除',\n    type: 'text',\n    icon: 'el-icon-delete',\n    actionType: 'mis-ajax',\n    actionApi: {\n      url: '/api/user?uids=${selectedIds}&status=1',\n      method: 'delete',\n      params: {\n        uids: '${selectedIds}'\n      }\n    },\n    reload: 'usertable'\n  }, {\n    renderer: 'mis-action',\n    text: '暂停',\n    type: 'text',\n    icon: 'el-icon-video-pause',\n    actionType: 'mis-ajax',\n    actionApi: {\n      url: '/api/user?uids=${selectedIds}',\n      method: 'delete',\n      params: {\n        uids: '${selectedIds}'\n      }\n    },\n    reload: 'usertable'\n  }]\n});\n\n//# sourceURL=webpack:///./src/schema/table/demo.js?"
        );

        /***/
      },

    /***/ './src/style/index.scss':
      /*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          '// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-3-1!../../node_modules/postcss-loader/src??ref--8-oneOf-3-2!../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-3-3!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/style/index.scss");\nif(content.__esModule) content = content.default;\nif(typeof content === \'string\') content = [[module.i, content, \'\']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default\nvar update = add("3295eb99", content, false, {"sourceMap":false,"shadowMode":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/style/index.scss?'
        );

        /***/
      },

    /***/ './src/style/superfans.scss':
      /*!**********************************!*\
  !*** ./src/style/superfans.scss ***!
  \**********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          '// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-3-1!../../node_modules/postcss-loader/src??ref--8-oneOf-3-2!../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-3-3!./superfans.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/style/superfans.scss");\nif(content.__esModule) content = content.default;\nif(typeof content === \'string\') content = [[module.i, content, \'\']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default\nvar update = add("23faff39", content, false, {"sourceMap":false,"shadowMode":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/style/superfans.scss?'
        );

        /***/
      },

    /***/ 0:
      /*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          'module.exports = __webpack_require__(/*! ./src/main.js */"./src/main.js");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?'
        );

        /***/
      },

    /***/ 1:
      /*!********************!*\
  !*** fs (ignored) ***!
  \********************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval('/* (ignored) */\n\n//# sourceURL=webpack:///fs_(ignored)?');

        /***/
      },

    /***/ 2:
      /*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval('/* (ignored) */\n\n//# sourceURL=webpack:///crypto_(ignored)?');

        /***/
      },

    /***/ 3:
      /*!************************!*\
  !*** stream (ignored) ***!
  \************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval('/* (ignored) */\n\n//# sourceURL=webpack:///stream_(ignored)?');

        /***/
      },

    /******/
  }
);
