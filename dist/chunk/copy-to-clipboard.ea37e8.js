(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["copy-to-clipboard"],{"0e0f":function(e,t,o){"use strict";var a=o("28099"),n={"text/plain":"Text","text/html":"Url",default:"Text"},r="Copy to clipboard: #{key}, Enter";function c(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function l(e,t){var o,l,s,i,p,u,d=!1;t||(t={}),o=t.debug||!1;try{s=a(),i=document.createRange(),p=document.getSelection(),u=document.createElement("span"),u.textContent=e,u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",(function(a){if(a.stopPropagation(),t.format)if(a.preventDefault(),"undefined"===typeof a.clipboardData){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=n[t.format]||n["default"];window.clipboardData.setData(r,e)}else a.clipboardData.clearData(),a.clipboardData.setData(t.format,e);t.onCopy&&(a.preventDefault(),t.onCopy(a.clipboardData))})),document.body.appendChild(u),i.selectNodeContents(u),p.addRange(i);var f=document.execCommand("copy");if(!f)throw new Error("copy command was unsuccessful");d=!0}catch(m){o&&console.error("unable to copy using execCommand: ",m),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(m){o&&console.error("unable to copy using clipboardData: ",m),o&&console.error("falling back to prompt"),l=c("message"in t?t.message:r),window.prompt(l,e)}}finally{p&&("function"==typeof p.removeRange?p.removeRange(i):p.removeAllRanges()),u&&document.body.removeChild(u),s()}return d}e.exports=l},28099:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],a=0;a<e.rangeCount;a++)o.push(e.getRangeAt(a));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||o.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);