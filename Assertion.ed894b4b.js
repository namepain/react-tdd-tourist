parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"T5bx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=d,require("antd/es/typography/style");var t=a(require("antd/es/typography")),e=a(require("react")),n=a(require("../../components/TheBlock"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,e){return s(t)||o(t,e)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],a=!0,r=!1,l=void 0;try{for(var o,s=t[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(u){r=!0,l=u}finally{try{a||null==s.return||s.return()}finally{if(r)throw l}}return n}}function s(t){if(Array.isArray(t))return t}var u=t.default.Title,c=[[".should()","cy.get('.should')\n        .should('have.text', '张麻子的脸上应该长着麻子')\n        .should('contain', '张麻子的脸上应该长着麻子')\n        .should('have.html', '张麻子的脸上应该长着麻子')\n        .should('be.visible')\n        .invoke('text')\n        .should('match', /麻子/i)\n    ",e.default.createElement("div",{className:"should"},"张麻子的脸上应该长着麻子")],[".and()","cy.get('.and')\n\t\t\t.should('have.class', 'and')\n\t\t\t.and('have.class', 'left')\n\t\t\t.and('have.class', 'right')\n\t\t",e.default.createElement("div",{className:"left and right"},"left and right")],["expect()","\n\t\t\texpect(true).to.be.true\n\t\t\tconst o = { foo: 'bar' }\n\t\t\texpect(o).to.equal(o)\n\t\t\texpect(o).to.deep.equal({ foo: 'bar' })\n\t\t\t// matching text using regular expression\n\t\t\texpect('FooBar').to.match(/bar$/i)\n\t\t"],["assert","\n\t\t\tconst person = {\n\t\t\t\tname: 'Joe',\n\t\t\t\tage: 20,\n\t\t\t}\n\t\t\tassert.isObject(person, 'value is object')\n\t\t"],["should width callback","\n\t\t\tcy.get('.shouldcallback').find('p')\n\t\t\t\t.should(($p) => {\n\t\t\t\t\t// return an array of texts from all of the p's\n\t\t\t\t\tlet texts = $p.map((i, el) =>\n\t\t\t\t\t\tCypress.$(el).text())\n\t\t\t\t\n\t\t\t\t\t// jquery map returns jquery object\n\t\t\t\t\t// and .get() convert this to simple array\n\t\t\t\t\ttexts = texts.get()\n\t\t\t\t\n\t\t\t\t\t// array should have length of 4\n\t\t\t\t\texpect(texts).to.have.length(4)\n\t\t\t\t\n\t\t\t\t\t// use second argument to expect(...) to provide clear\n\t\t\t\t\t// message with each assertion\n\t\t\t\t\texpect(texts, 'has expected text in each paragraph').to.deep.eq([\n\t\t\t\t\t\t'人们不愿意相信',\n\t\t\t\t\t\t'一个土匪的名字叫牧之',\n\t\t\t\t\t\t'人们更愿意相信',\n\t\t\t\t\t\t'他的名字叫麻子',\n\t\t\t\t\t])\n\t\t\t\t})\n\t\t",e.default.createElement("div",{className:"shouldcallback"},e.default.createElement("p",null,"人们不愿意相信"),e.default.createElement("p",null,"一个土匪的名字叫牧之"),e.default.createElement("p",null,"人们更愿意相信"),e.default.createElement("p",null,"他的名字叫麻子"))]];function d(){return e.default.createElement("div",{className:"assertion"},e.default.createElement(u,{level:3},"断 言"),c.map(function(t){var a=r(t,3),l=a[0],o=a[1],s=a[2];return e.default.createElement(n.default,{key:l,title:l,code:o},s)}))}
},{"antd/es/typography/style":"hrUw","antd/es/typography":"Bs9l","react":"HdMw","../../components/TheBlock":"dTsm"}]},{},[], null)
//# sourceMappingURL=Assertion.ed894b4b.js.map