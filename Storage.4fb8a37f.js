parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"oZGB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=s,require("antd/es/typography/style");var t=r(require("antd/es/typography")),e=r(require("react")),o=r(require("../../components/TheBlock"));function r(t){return t&&t.__esModule?t:{default:t}}function n(t,e){return c(t)||l(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function l(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var o=[],r=!0,n=!1,a=void 0;try{for(var l,c=t[Symbol.iterator]();!(r=(l=c.next()).done)&&(o.push(l.value),!e||o.length!==e);r=!0);}catch(p){n=!0,a=p}finally{try{r||null==c.return||c.return()}finally{if(n)throw a}}return o}}function c(t){if(Array.isArray(t))return t}var p=t.default.Title,u=[["localStorage",["\n\t\t\tcy.clearLocalStorage().should((ls) => {\n\t\t\t\tlocalStorage.setItem('prop0', '九筒')\n\t\t\t\texpect(ls.getItem('prop0')).to.eq('九筒')\n\t\t\t\texpect(ls.getItem('prop1')).to.be.null\n\t\t\t\texpect(ls.getItem('prop2')).to.be.null\n\t\t\t\texpect(ls.getItem('prop3')).to.be.null\n\t\t\t})\n\t\t\t"]],["cookie",["\n\t\t\tcy.getCookies().should('be.empty')\n\t\t\tcy.setCookie('foo', 'bar')\n\t\t\tcy.setCookie('zoo', 'bar')\n\t\t\tcy.getCookie('foo').should('have.property', 'value', 'bar')\n\t\t\tcy.getCookie('zoo').should('have.property', 'value', 'bar')\n\t\t\t\n\t\t\tcy.clearCookie('foo').should('be.null')\n\n\t\t\tcy.getCookies().should('have.length', 1).should((cookies) => {\n\n\t\t\t\t// each cookie has these properties\n\t\t\t\texpect(cookies[0]).to.have.property('name', 'zoo')\n\t\t\t\texpect(cookies[0]).to.have.property('value', 'bar')\n\t\t\t\texpect(cookies[0]).to.have.property('httpOnly', false)\n\t\t\t\texpect(cookies[0]).to.have.property('secure', false)\n\t\t\t\texpect(cookies[0]).to.have.property('domain')\n\t\t\t\texpect(cookies[0]).to.have.property('path')\n\t\t\t})\n\n\t\t\tcy.clearCookies()\n\n\t\t\tcy.getCookies().should('be.empty')\n\t\t\t"]]];function s(){return e.default.createElement("div",{className:"storage"},e.default.createElement(p,{level:3},"存 储"),u.map(function(t){var r=n(t,3),a=r[0],l=r[1],c=r[2];return e.default.createElement(o.default,{key:a,title:a,code:l},c)}))}
},{"antd/es/typography/style":"hrUw","antd/es/typography":"Bs9l","react":"HdMw","../../components/TheBlock":"dTsm"}]},{},[], null)
//# sourceMappingURL=Storage.4fb8a37f.js.map