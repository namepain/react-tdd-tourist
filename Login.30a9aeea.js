parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"B10s":[function(require,module,exports) {

},{}],"Jg6N":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("antd/es/button/style");var e=o(require("antd/es/button"));require("antd/es/checkbox/style");var t=o(require("antd/es/checkbox"));require("antd/es/form/style");var r=o(require("antd/es/form"));require("antd/es/input/style");var a=o(require("antd/es/input"));require("antd/es/icon/style");var l=o(require("antd/es/icon")),u=o(require("react")),s=require("react-router-dom");function o(e){return e&&e.__esModule?e:{default:e}}function n(o){var n=o.form,d=n.getFieldDecorator,i=n.validateFields,f=(0,s.useHistory)();return u.default.createElement(r.default,{onSubmit:function(e){e.preventDefault(),i(function(e,t){e||(console.log("Received values of form: ",t),localStorage.setItem("userInfo",JSON.stringify({userName:"陈工",role:"bigBoss"})),f.push("/dashboard"))})},className:"login-form fix__center"},u.default.createElement(r.default.Item,null,d("username",{rules:[{required:!0,message:"Please input your username!"}]})(u.default.createElement(a.default,{prefix:u.default.createElement(l.default,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),u.default.createElement(r.default.Item,null,d("password",{rules:[{required:!0,message:"Please input your Password!"}]})(u.default.createElement(a.default,{prefix:u.default.createElement(l.default,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),u.default.createElement(r.default.Item,null,d("remember",{valuePropName:"checked",initialValue:!0})(u.default.createElement(t.default,null,"Remember me")),u.default.createElement("a",{className:"login-form-forgot",href:""},"Forgot password"),u.default.createElement(e.default,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"),"Or ",u.default.createElement("a",{href:""},"register now!")))}require("./index.css");var d=r.default.create({name:"normal_login"})(n);exports.default=d;
},{"antd/es/button/style":"OIRi","antd/es/button":"RVa2","antd/es/checkbox/style":"PtN0","antd/es/checkbox":"IKAS","antd/es/form/style":"QC5y","antd/es/form":"ngFF","antd/es/input/style":"peUN","antd/es/input":"NNj3","antd/es/icon/style":"G8Zo","antd/es/icon":"BNbg","react":"HdMw","react-router-dom":"rx6s","./index.css":"B10s"}]},{},[], null)
//# sourceMappingURL=Login.30a9aeea.js.map