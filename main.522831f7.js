parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t){return r(t)||n(t)||a(t)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function r(t){if(Array.isArray(t))return c(t)}function o(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=a(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,c=!0,i=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return c=t.done,t},e:function(t){i=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(i)throw o}}}}function a(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var i="https://mate-academy.github.io/phone-catalogue-static/api/phones.json",u=document.querySelector("body"),l=document.createElement("ul");function s(t){return fetch(t).then(function(t){if(!t.ok)throw new Error("".concat(t.status," - ").concat(t.statusText));return t.json()})}function f(t){u.append(l),l.className="phoneId";var e,n=o(t);try{for(n.s();!(e=n.n()).done;){var r=e.value,a=document.createElement("li");l.append(a),a.className="list",a.textContent="".concat(r.name),a.style.cursor="pointer"}}catch(c){n.e(c)}finally{n.f()}m()}function m(){document.querySelector("ul").addEventListener("click",function(t){s(d(t.target.textContent.replaceAll(" ","-").toLowerCase().replaceAll("™",""))).then(function(t){return p(t)})})}function d(t){return"https://mate-academy.github.io/phone-catalogue-static/api/phones/"+"".concat(t)+".json"}function p(e){var n,r=o(t(document.querySelectorAll(".active")));try{for(r.s();!(n=r.n()).done;){n.value.remove()}}catch(a){r.e(a)}finally{r.f()}u.insertAdjacentHTML("beforeend",'\n  <div class="phoneDescription active">\n    <h1 class="phoneTitle">'.concat(e.name,'</h1>\n    <img class="phoneImg" src="https://mate-academy.github.io\n/phone-catalogue-static/').concat(e.images[0],'">\n    <p class="descriptionList">').concat(e.description,"</p>\n  </div>\n  "))}function y(t){setTimeout(function(){var e=document.createElement("div"),n=document.createElement("p");document.body.append(e),e.append(n),e.className="error",n.textContent="Oops! ".concat(t)},5e3)}s(i).then(function(t){return f(t)}).catch(function(t){return y(t)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.522831f7.js.map