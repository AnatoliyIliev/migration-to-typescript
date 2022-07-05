(()=>{"use strict";var n={669:(n,e,r)=>{r.d(e,{Z:()=>i});var t=r(645),o=r.n(t)()((function(n){return n[1]}));o.push([n.id,".news__item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 1rem auto;\r\n    margin-bottom: 1.6%;\r\n    background: #fff;\r\n    color: #333;\r\n    line-height: 1.4;\r\n    font-family: Arial, sans-serif;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n}\r\n\r\n.news__item:hover .news__meta-photo {\r\n    transform: scale(1.3) rotate(3deg);\r\n}\r\n\r\n.news__item .news__meta {\r\n    position: relative;\r\n    height: 200px;\r\n}\r\n\r\n.news__item .news__meta-photo {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: center;\r\n    transition: transform 0.2s;\r\n}\r\n\r\n.news__item .news__meta-details,\r\n.news__item .news__meta-details ul {\r\n    margin: auto;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.news__item .news__meta-details {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: -120%;\r\n    margin: auto;\r\n    transition: left 0.2s;\r\n    background: rgba(0, 0, 0, 0.6);\r\n    color: #fff;\r\n    padding: 10px;\r\n    width: 100%;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.news__item .news__description {\r\n    padding: 1rem;\r\n    background: #fff;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.news__item .news__description h2 {\r\n    line-height: 1;\r\n    margin: 0;\r\n    font-size: 1.7rem;\r\n}\r\n\r\n.news__item .news__description h3 {\r\n    font-size: 1rem;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    color: #a2a2a2;\r\n    margin-top: 5px;\r\n}\r\n\r\n.news__item .news__description .news__read-more {\r\n    text-align: right;\r\n}\r\n\r\n.news__item .news__description .news__read-more a {\r\n    color: #5ad67d;\r\n    display: inline-block;\r\n    position: relative;\r\n    text-decoration: none;\r\n    font-weight: 800;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:after {\r\n    content: '→';\r\n    margin-left: -10px;\r\n    opacity: 0;\r\n    vertical-align: middle;\r\n    transition: margin 0.3s, opacity 0.3s;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:hover:after {\r\n    margin-left: 5px;\r\n    opacity: 1;\r\n}\r\n\r\n.news__item p {\r\n    margin: 1rem 0 0;\r\n}\r\n\r\n.news__item p:first-of-type {\r\n    margin-top: 1.25rem;\r\n    position: relative;\r\n}\r\n\r\n.news__item p:first-of-type:before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 5px;\r\n    background: #5ad67d;\r\n    width: 35px;\r\n    top: -0.75rem;\r\n    border-radius: 3px;\r\n}\r\n\r\n.news__item:hover .news__meta-details {\r\n    left: 0%;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n    .news__item {\r\n        flex-direction: row;\r\n        max-width: 700px;\r\n    }\r\n\r\n    .news__item .news__meta {\r\n        flex-basis: 40%;\r\n        height: auto;\r\n    }\r\n\r\n    .news__item .news__description {\r\n        flex-basis: 60%;\r\n    }\r\n\r\n    .news__item .news__description:before {\r\n        -webkit-transform: skewX(-3deg);\r\n        transform: skewX(-3deg);\r\n        content: '';\r\n        background: #fff;\r\n        width: 30px;\r\n        position: absolute;\r\n        left: -10px;\r\n        top: 0;\r\n        bottom: 0;\r\n        z-index: -1;\r\n    }\r\n\r\n    .news__item.alt {\r\n        flex-direction: row-reverse;\r\n    }\r\n\r\n    .news__item.alt .news__description:before {\r\n        left: inherit;\r\n        right: -10px;\r\n        -webkit-transform: skew(3deg);\r\n        transform: skew(3deg);\r\n    }\r\n\r\n    .news__item.alt .news__meta-details {\r\n        padding-left: 25px;\r\n    }\r\n}\r\n\r\n",""]);const i=o},501:(n,e,r)=>{r.d(e,{Z:()=>i});var t=r(645),o=r.n(t)()((function(n){return n[1]}));o.push([n.id,".sources {\r\n    display: grid;\r\n    grid-template-columns: repeat( auto-fit, minmax(220px, 1fr) );\r\n    width: 100%;\r\n    height: 120px;\r\n    overflow: auto;\r\n    align-items: center;\r\n    font: 300 1em 'Fira Sans', sans-serif;\r\n}\r\n\r\n.source__item {\r\n    background: none;\r\n    border: 2px solid #30c5ff;\r\n    font: inherit;\r\n    line-height: 1;\r\n    margin: 0.2em;\r\n    padding: 1em 2em;\r\n    color: #70d6ff;\r\n    transition: 0.25s;\r\n    cursor: pointer;\r\n}\r\n\r\n.source__item:hover,\r\n.source__item:focus,\r\n.buttonUp:hover,\r\n.buttonUp:hover::after  {\r\n    border-color: #3fcc59;\r\n    color: #69db7e;\r\n    box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\r\n    transform: translateY(-0.25em);\r\n}\r\n\r\n.source__item-name {\r\n    font-weight: 400;\r\n    white-space: nowrap;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n  .sources {\r\n    font-weight: 400;\r\n    font-size: 1em;\r\n    font-family: 'Fira Sans', sans-serif;\r\n  }\r\n\r\n  .source__item {\r\n    border: 2px solid #30c5ff;\r\n    padding: 0.5em 0.5em;\r\n  }\r\n}",""]);const i=o},767:(n,e,r)=>{r.d(e,{Z:()=>i});var t=r(645),o=r.n(t)()((function(n){return n[1]}));o.push([n.id,"body {\r\n    color: #fff;\r\n    background: #17181c;\r\n    font-family: sans-serif;\r\n}\r\n\r\nheader {\r\n    padding: 10px 30px;\r\n    position: relative;\r\n}\r\n\r\nheader h1 {\r\n    font-size: 40px;\r\n    font-weight: 800;\r\n}\r\n\r\nli,\r\np {\r\n    list-style-type: none;\r\n    margin: 5px;\r\n    margin-left: 15px;\r\n    padding: 0;\r\n    /* Убираем маркеры */\r\n}\r\n\r\n/*-------- FOOTER--------------*/\r\n\r\nfooter {\r\n    height: 100px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\nfooter .copyright {\r\n    font-size: 14px;\r\n    color: #333;\r\n    text-align: center;\r\n}\r\nfooter .copyright a {\r\n    color: #444;\r\n}\r\nfooter .copyright a:hover {\r\n    color: #555;\r\n}\r\nfooter .copyright:before {\r\n    content: '©';\r\n}\r\n\r\n.footer-items {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.footer-item_link, .footer-item {\r\n    color: #444;\r\n}\r\n\r\n.footer-item_link:hover,\r\n.footer-item_link:focus {\r\n    color: #555;\r\n}\r\n\r\n.footer__logo {\r\n    transition: transform 0.25s;\r\n}\r\n\r\n.footer__logo:hover,\r\n.footer__logo:focus {\r\n    transform: scale(1.1);    \r\n}\r\n\r\n@media (max-width: 640px) {\r\n    header h1 {\r\n        font-size: 40px;\r\n        font-weight: 800;\r\n        text-align: center; \r\n    }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n    footer {\r\n        flex-wrap: wrap;\r\n        column-gap: 20px;\r\n        row-gap: 5px;\r\n        justify-content: center;\r\n    }\r\n}\r\n\r\n",""]);const i=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=n(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<n.length;a++){var c=[].concat(n[a]);t&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),e.push(c))}},e}},379:(n,e,r)=>{var t,o=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),i=[];function s(n){for(var e=-1,r=0;r<i.length;r++)if(i[r].identifier===n){e=r;break}return e}function a(n,e){for(var r={},t=[],o=0;o<n.length;o++){var a=n[o],c=e.base?a[0]+e.base:a[0],l=r[c]||0,d="".concat(c," ").concat(l);r[c]=l+1;var u=s(d),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:d,updater:h(f,e),references:1}),t.push(d)}return t}function c(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var i=r.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var s=o(n.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var l,d=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function u(n,e,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=d(e,o);else{var i=document.createTextNode(o),s=n.childNodes;s[e]&&n.removeChild(s[e]),s.length?n.insertBefore(i,s[e]):n.appendChild(i)}}function f(n,e,r){var t=r.css,o=r.media,i=r.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var p=null,m=0;function h(n,e){var r,t,o;if(e.singleton){var i=m++;r=p||(p=c(e)),t=u.bind(null,r,i,!1),o=u.bind(null,r,i,!0)}else r=c(e),t=f.bind(null,r,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var r=a(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<r.length;t++){var o=s(r[t]);i[o].references--}for(var c=a(n,e),l=0;l<r.length;l++){var d=s(r[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}r=c}}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=r(379),e=r.n(n),t=r(669);e()(t.Z,{insert:"head",singleton:!1}),t.Z.locals;var o=r(501);e()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;class i{news;sources;constructor(){this.news=new class{draw(n){const e=n.length>=10?n.filter(((n,e)=>e<10)):n,r=document.createDocumentFragment(),t=document.querySelector("#newsItemTemp");e.forEach(((n,e)=>{const o=t.content.cloneNode(!0);e%2&&o.querySelector(".news__item").classList.add("alt"),o.querySelector(".news__meta-photo").style.backgroundImage=`url(${n.urlToImage||"img/news_placeholder.jpg"})`,o.querySelector(".news__meta-author").textContent=n.author||n.source.name,o.querySelector(".news__meta-date").textContent=n.publishedAt.slice(0,10).split("-").reverse().join("-"),o.querySelector(".news__description-title").textContent=n.title,o.querySelector(".news__description-source").textContent=n.source.name,o.querySelector(".news__description-content").textContent=n.description,o.querySelector(".news__read-more a").setAttribute("href",n.url),r.append(o)})),document.querySelector(".news").innerHTML="",document.querySelector(".news").appendChild(r)}},this.sources=new class{draw(n){const e=document.createDocumentFragment(),r=document.querySelector("#sourceItemTemp");n.forEach((n=>{const t=r.content.cloneNode(!0);t.querySelector(".source__item-name").textContent=n.name,t.querySelector(".source__item").setAttribute("data-source-id",n.id),e.append(t)})),document.querySelector(".sources").append(e)}}}drawNews(n){const e=n?.articles?n?.articles:[];this.news.draw(e)}drawSources(n){const e=n?.sources?n?.sources:[];this.sources.draw(e)}}var s=r(767);e()(s.Z,{insert:"head",singleton:!1}),s.Z.locals,(new class{controller;view;constructor(){this.controller=new class extends class extends class{baseLink;options;constructor(n,e){this.baseLink=n,this.options=e,this.baseLink=n,this.options=e}getResp({endpoint:n,options:e={}},r=(()=>{console.error("No callback for GET response")})){this.load("GET",n,r,e)}errorHandler(n){if(!n.ok)throw 401!==n.status&&404!==n.status||console.log(`Sorry, but there is ${n.status} error: ${n.statusText}`),Error(n.statusText);return n}makeUrl(n,e){const r={...this.options,...n};let t=`${this.baseLink}${e}?`;return Object.keys(r).forEach((n=>{t+=`${n}=${r[n]}&`})),t.slice(0,-1)}load(n,e,r,t={}){fetch(this.makeUrl(t,e),{method:n}).then(this.errorHandler).then((n=>n.json())).then((n=>r(n))).catch((n=>console.error(n)))}}{constructor(){super("https://nodenews.herokuapp.com/",{apiKey:"d77b2c93f9e7411291907430cc6d1043"})}}{getSources(n){super.getResp({endpoint:"sources"},n)}getNews(n,e){let r=n.target;const t=n.currentTarget;for(;r!==t;){if(r.classList.contains("source__item")){const n=r.getAttribute("data-source-id");return void(t.getAttribute("data-source")!==n&&(t.setAttribute("data-source",n),super.getResp({endpoint:"everything",options:{sources:n}},e)))}r=r.parentNode}}},this.view=new i}start(){document.querySelector(".sources").addEventListener("click",(n=>this.controller.getNews(n,(n=>this.view.drawNews(n))))),this.controller.getSources((n=>this.view.drawSources(n)))}}).start()})()})();