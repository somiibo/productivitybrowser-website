!function(){var e,t,n,r,o={},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return o[e](n,n.exports,a),n.exports}a.m=o,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},a.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var o=Object.create(null);a.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var u=2&r&&n;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){i[e]=function(){return n[e]}}));return i.default=function(){return n},a.d(o,i),o},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))},a.u=function(e){if(79===e)return"chunk.79.4f76f9dcb5835a9d5478.js"},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},r="ultimate-jekyll:",a.l=function(e,t,o,i){if(n[e])n[e].push(t);else{var u,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var d=l[s];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==r+o){u=d;break}}u||(c=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.setAttribute("data-webpack",r+o),u.src=e),n[e]=[t];var f=function(t,r){u.onerror=u.onload=null,clearTimeout(p);var o=n[e];if(delete n[e],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),c&&document.head.appendChild(u)}},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="https://productivitybrowser.com/assets/js/",function(){var e={321:0};a.f.j=function(t,n){var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var i=a.p+a.u(t),u=new Error;a.l(i,(function(n){if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,r[1](u)}}),"chunk-"+t,t)}};var t=function(t,n){var r,o,i=n[0],u=n[1],c=n[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in u)a.o(u,r)&&(a.m[r]=u[r]);if(c)c(a)}for(t&&t(n);l<i.length;l++)o=i[l],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0},n=self.webpackChunkultimate_jekyll=self.webpackChunkultimate_jekyll||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),Manager.log("Init main.js");var u,c=Manager.dom(),l=window.location.href;l.includes("/pricing")?c.loadScript({src:"https://cdn.itwcreativeworks.com/assets/general/js/pricing-page-handler/index.js"}):l.includes("/download")?c.loadScript({src:"https://cdn.itwcreativeworks.com/assets/general/js/download-page-handler/index.js"}):l.includes("/browser-extension")||l.includes("/extension")?c.loadScript({src:"https://cdn.itwcreativeworks.com/assets/general/js/browser-extension-page-handler/index.js"}):window.location.pathname.endsWith(".html")&&(window.location.pathname=window.location.pathname.replace(".html","")),c.select("form.slapform").each((function(e,t){c.select(e).on("submit",(function(e){e.preventDefault(),a.e(79).then(a.t.bind(a,79,23)).then((function(t){(u=u||new t.default).process(e)}))})),c.select(e.querySelector('button[type="submit"]')).removeAttribute("disabled").removeClass("disabled")}));var s=Manager.storage(),d=s.get("user.auth")||{},f=!1;function p(e){if(!f){var t=window.Configuration.global.tracking,n=e.phone?parseInt(e.phone.replace(/\+/gi,"")):null;gtag("set","user_id",e.uid),fbq("init",t.facebookPixel,{external_id:e.uid,em:e.email,ph:n}),ttq.identify({external_id:e.uid||"",email:e.email||"",phone_number:n?"+"+n:""}),f=!0}}d&&d.uid&&d.email&&p(d),Manager.auth().ready((function(e){p(e),s.set("user.auth.uid",e.uid),s.set("user.auth.email",e.email)}))}();