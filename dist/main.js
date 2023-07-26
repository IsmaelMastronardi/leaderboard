"use strict";(self.webpackChunkleaderboard=self.webpackChunkleaderboard||[]).push([[179],{426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,".tilteSection {\n  display: flex;\n  justify-content: center;\n}\n\n.pageTitle {\n  font-size: 40px;\n}\n\n.leaderboardSection {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10vw;\n}\n\n.scoreArticle {\n  width: 240px;\n}\n\n.scoreDiv {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 36px;\n}\n\n.secondTitle {\n  margin: 0;\n}\n\n.fSubmit,\n.refreshBtn {\n  font-size: 14px;\n  padding: 4px;\n  padding-left: 6px;\n  padding-right: 6px;\n  background-color: white;\n  border: 1px solid;\n  border-radius: 2px;\n  box-shadow: 3px 2px 5px black;\n  transition: 0.1s;\n}\n\n.fSubmit:hover,\n.refreshBtn:hover {\n  background-color: rgb(233, 233, 233);\n}\n\n.fSubmit:active,\n.refreshBtn:active {\n  background-color: rgb(199, 199, 199);\n}\n\n.scoreList {\n  list-style: none;\n  padding: 0;\n  border: 2px solid;\n}\n\n.scoreItem {\n  font-size: 16px;\n  font-weight: bold;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-left: 4px;\n}\n\n.greyItem {\n  background-color: rgb(189, 189, 189);\n}\n\n.scoreForm {\n  margin-top: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: end;\n}\n\n.formScore,\n.formName {\n  border: 2px solid;\n  padding: 4px;\n  font-size: 14px;\n  font-weight: bold;\n}\n",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],p=a[d]||0,l="".concat(d," ").concat(p);a[d]=p+1;var u=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var p=t(a[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},987:(n,e,t)=>{var r=t(379),o=t.n(r),a=t(795),i=t.n(a),c=t(569),s=t.n(c),d=t(565),p=t.n(d),l=t(216),u=t.n(l),f=t(589),m=t.n(f),v=t(426),h={};h.styleTagTransform=m(),h.setAttributes=p(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=u(),o()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals}},n=>{n(n.s=987)}]);