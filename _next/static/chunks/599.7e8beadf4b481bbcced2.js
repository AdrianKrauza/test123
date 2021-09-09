"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[599],{8293:function(t){function e(t,e){var r,n;if("function"===typeof e)void 0!==(n=e(t))&&(t=n);else if(Array.isArray(e))for(r=0;r<e.length;r++)void 0!==(n=e[r](t))&&(t=n);return t}function r(t,e){return"-"===t[0]&&Array.isArray(e)&&/^-\d+$/.test(t)?e.length+parseInt(t,10):t}function n(t){return"[object Object]"===Object.prototype.toString.call(t)}function i(t){return Object(t)===t}function o(t){return 0===Object.keys(t).length}var s=["__proto__","prototype","constructor"],c=function(t){return-1===s.indexOf(t)};function a(t,e){t.indexOf("[")>=0&&(t=t.replace(/\[/g,e).replace(/]/g,""));var r=t.split(e);if(r.filter(c).length!==r.length)throw Error("Refusing to update blacklisted property "+t);return r}var u=Object.prototype.hasOwnProperty;function p(t,e,r,n){if(!(this instanceof p))return new p(t,e,r,n);"undefined"===typeof e&&(e=!1),"undefined"===typeof r&&(r=!0),"undefined"===typeof n&&(n=!0),this.separator=t||".",this.override=e,this.useArray=r,this.useBrackets=n,this.keepArray=!1,this.cleanup=[]}var f=new p(".",!1,!0,!0);function l(t){return function(){return f[t].apply(f,arguments)}}p.prototype._fill=function(t,r,n,s){var c=t.shift();if(t.length>0){if(r[c]=r[c]||(this.useArray&&function(t){return/^\d+$/.test(t)}(t[0])?[]:{}),!i(r[c])){if(!this.override){if(!i(n)||!o(n))throw new Error("Trying to redefine `"+c+"` which is a "+typeof r[c]);return}r[c]={}}this._fill(t,r[c],n,s)}else{if(!this.override&&i(r[c])&&!o(r[c])){if(!i(n)||!o(n))throw new Error("Trying to redefine non-empty obj['"+c+"']");return}r[c]=e(n,s)}},p.prototype.object=function(t,r){var n=this;return Object.keys(t).forEach((function(i){var o=void 0===r?null:r[i],s=a(i,n.separator).join(n.separator);-1!==s.indexOf(n.separator)?(n._fill(s.split(n.separator),t,t[i],o),delete t[i]):t[i]=e(t[i],o)})),t},p.prototype.str=function(t,r,n,i){var o=a(t,this.separator).join(this.separator);return-1!==t.indexOf(this.separator)?this._fill(o.split(this.separator),n,r,i):n[t]=e(r,i),n},p.prototype.pick=function(t,e,n,i){var o,s,c,u,p;for(s=a(t,this.separator),o=0;o<s.length;o++){if(u=r(s[o],e),!e||"object"!==typeof e||!(u in e))return;if(o===s.length-1)return n?(c=e[u],i&&Array.isArray(e)?e.splice(u,1):delete e[u],Array.isArray(e)&&(p=s.slice(0,-1).join("."),-1===this.cleanup.indexOf(p)&&this.cleanup.push(p)),c):e[u];e=e[u]}return n&&Array.isArray(e)&&(e=e.filter((function(t){return void 0!==t}))),e},p.prototype.delete=function(t,e){return this.remove(t,e,!0)},p.prototype.remove=function(t,e,r){var n;if(this.cleanup=[],Array.isArray(t)){for(n=0;n<t.length;n++)this.pick(t[n],e,!0,r);return r||this._cleanup(e),e}return this.pick(t,e,!0,r)},p.prototype._cleanup=function(t){var e,r,n,i;if(this.cleanup.length){for(r=0;r<this.cleanup.length;r++)e=(e=(i=(n=this.cleanup[r].split(".")).splice(0,-1).join("."))?this.pick(i,t):t)[n[0]].filter((function(t){return void 0!==t})),this.set(this.cleanup[r],e,t);this.cleanup=[]}},p.prototype.del=p.prototype.remove,p.prototype.move=function(t,r,n,i,o){return"function"===typeof i||Array.isArray(i)?this.set(r,e(this.pick(t,n,!0),i),n,o):(o=i,this.set(r,this.pick(t,n,!0),n,o)),n},p.prototype.transfer=function(t,r,n,i,o,s){return"function"===typeof o||Array.isArray(o)?this.set(r,e(this.pick(t,n,!0),o),i,s):(s=o,this.set(r,this.pick(t,n,!0),i,s)),i},p.prototype.copy=function(t,r,n,i,o,s){return"function"===typeof o||Array.isArray(o)?this.set(r,e(JSON.parse(JSON.stringify(this.pick(t,n,!1))),o),i,s):(s=o,this.set(r,this.pick(t,n,!1),i,s)),i},p.prototype.set=function(t,e,r,i){var o,s,c,p;if("undefined"===typeof e)return r;for(c=a(t,this.separator),o=0;o<c.length;o++){if(p=c[o],o===c.length-1)if(i&&n(e)&&n(r[p]))for(s in e)u.call(e,s)&&(r[p][s]=e[s]);else if(i&&Array.isArray(r[p])&&Array.isArray(e))for(var f=0;f<e.length;f++)r[c[o]].push(e[f]);else r[p]=e;else u.call(r,p)&&(n(r[p])||Array.isArray(r[p]))||(/^\d+$/.test(c[o+1])?r[p]=[]:r[p]={});r=r[p]}return r},p.prototype.transform=function(t,e,r){return e=e||{},r=r||{},Object.keys(t).forEach(function(n){this.set(t[n],this.pick(n,e),r)}.bind(this)),r},p.prototype.dot=function(t,e,r){e=e||{},r=r||[];var s=Array.isArray(t);return Object.keys(t).forEach(function(c){var a=s&&this.useBrackets?"["+c+"]":c;if(i(t[c])&&(n(t[c])&&!o(t[c])||Array.isArray(t[c])&&!this.keepArray&&0!==t[c].length)){if(s&&this.useBrackets){var u=r[r.length-1]||"";return this.dot(t[c],e,r.slice(0,-1).concat(u+a))}return this.dot(t[c],e,r.concat(a))}s&&this.useBrackets?e[r.join(this.separator).concat("["+c+"]")]=t[c]:e[r.concat(a).join(this.separator)]=t[c]}.bind(this)),e},p.pick=l("pick"),p.move=l("move"),p.transfer=l("transfer"),p.transform=l("transform"),p.copy=l("copy"),p.object=l("object"),p.str=l("str"),p.set=l("set"),p.delete=l("delete"),p.del=p.remove=l("remove"),p.dot=l("dot"),["override","overwrite"].forEach((function(t){Object.defineProperty(p,t,{get:function(){return f.override},set:function(t){f.override=!!t}})})),["useArray","keepArray","useBrackets"].forEach((function(t){Object.defineProperty(p,t,{get:function(){return f[t]},set:function(e){f[t]=e}})})),p._process=e,t.exports=p},1599:function(t,e,r){r.r(e);var n=r(5893),i=r(4942),o=r(1451),s=r(9163),c=r(7294),a=r(8293),u=r.n(a),p=r(3540),f=r(4008);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){(0,i.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d=s.ZP.div.withConfig({displayName:"addComponents__Container",componentId:"sc-18ukivo-0"})(["position:absolute;z-index:100;left:0;top:0;width:100vw;height:100vh;display:",";background-color:#00000066;"],(function(t){return t.active?"block":"none"}));e.default=function(t){var e=t.pageData,r=t.setPageData,i=(0,c.useState)(!1),s=i[0],a=i[1],l=(0,c.useRef)(),y=(0,c.useRef)();(0,f.Z)(y,(function(){return s&&a(!1)}));var g=Object.values(p.Z).map((function(t){return t.reduce((function(t,e){var r=e.name,n=e.defaultValue;return u().str(r,n,t)}),{})})),v=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=(0,o.Z)(e.pageBuilder);n?i.push.apply(i,(0,o.Z)(JSON.parse("[".concat(t,"]")))):i.push(g[t]),r((function(t){return h(h({},t),{},{pageBuilder:i})}))};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{onClick:function(){return a((function(t){return!t}))},className:"m-auto block mt-8 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold  rounded text-lg py-2 px-3 items-center",children:"Add new components"}),(0,n.jsx)(d,{active:s,children:(0,n.jsx)("div",{className:" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ",children:(0,n.jsxs)("div",{ref:y,className:"grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8",children:[g.map((function(t,e){return(0,n.jsxs)("div",{onClick:function(){return v(e)},className:"bg-white hover:bg-gray-200 transition-all duration-500 ",children:[(0,n.jsx)("img",{className:"object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80",src:"https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:""}),(0,n.jsx)("p",{className:"my-2 text-center text-xl font-bold leading-none sm:text-2xl",children:t.__component})]})})),(0,n.jsxs)("div",{className:"bg-white hover:bg-gray-200 transition-all duration-500 ",children:[(0,n.jsx)("textarea",{ref:l,className:"object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"}),(0,n.jsx)("p",{onClick:function(){return v(l.current.value,!0)},className:"my-2 text-center text-xl font-bold leading-none sm:text-2xl",children:"custom code"})]})]})})})]})}},4008:function(t,e,r){var n=r(7294);e.Z=function(t,e){var r=function(r){t.current&&!t.current.contains(r.target)&&e()};(0,n.useEffect)((function(){return document.addEventListener("click",r),function(){document.removeEventListener("click",r)}}))}}}]);