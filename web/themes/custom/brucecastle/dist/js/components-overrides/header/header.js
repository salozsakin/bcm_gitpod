!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=129)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n(32))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(5),o=n(10),i=n(13);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,n){var r=n(0),o=n(16),i=n(2),c=n(17),u=n(19),a=n(37),s=o("wks"),f=r.Symbol,l=a?f:f&&f.withoutSetter||c;t.exports=function(t){return i(s,t)||(u&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},function(t,e,n){var r=n(0),o=n(11),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(3);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(5),o=n(24),i=n(9),c=n(14),u=Object.defineProperty;e.f=r?u:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(0),o=n(4);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},,function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(3);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(7),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(29),o=n(7);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.7.0",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e){t.exports={}},function(t,e,n){var r=n(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(22),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r={};r[n(6)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,e,n){var r=n(5),o=n(1),i=n(28);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(0),o=n(4),i=n(2),c=n(11),u=n(15),a=n(31),s=a.get,f=a.enforce,l=String(String).split("String");(t.exports=function(t,e,n,u){var a,s=!!u&&!!u.unsafe,d=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),(a=f(n)).source||(a.source=l.join("string"==typeof e?e:""))),t!==r?(s?!p&&t[e]&&(d=!0):delete t[e],d?t[e]=n:o(t,e,n)):d?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||u(this)}))},function(t,e,n){var r=n(1),o=n(8),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(16),o=n(17),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,n){var r=n(0),o=n(3),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e){t.exports=!1},,function(t,e,n){var r,o,i,c=n(33),u=n(0),a=n(3),s=n(4),f=n(2),l=n(7),d=n(27),p=n(18),v=u.WeakMap;if(c){var y=l.state||(l.state=new v),h=y.get,g=y.has,S=y.set;r=function(t,e){return e.facade=t,S.call(y,t,e),e},o=function(t){return h.call(y,t)||{}},i=function(t){return g.call(y,t)}}else{var b=d("state");p[b]=!0,r=function(t,e){return e.facade=t,s(t,b,e),e},o=function(t){return f(t,b)?t[b]:{}},i=function(t){return f(t,b)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(0),o=n(15),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},,,function(t,e,n){var r=n(8);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(19);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var r=n(20);t.exports=function(t){return Object(r(t))}},,function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(3),o=n(36),i=n(6)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},,,function(t,e,n){var r=n(5),o=n(1),i=n(2),c=Object.defineProperty,u={},a=function(t){throw t};t.exports=function(t,e){if(i(u,t))return u[t];e||(e={});var n=[][t],s=!!i(e,"ACCESSORS")&&e.ACCESSORS,f=i(e,0)?e[0]:a,l=i(e,1)?e[1]:void 0;return u[t]=!!n&&!o((function(){if(s&&!r)return!0;var t={length:-1};s?c(t,1,{enumerable:!0,get:a}):t[1]=1,n.call(t,f,l)}))}},,,,,,,,,function(t,e,n){var r=n(23),o=n(25),i=n(54);r||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,e,n){"use strict";var r=n(23),o=n(55);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,e,n){var r=n(23),o=n(8),i=n(6)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:c?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},function(t,e,n){var r=n(57),o=n(26),i=n(38),c=n(21),u=n(41),a=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,f=4==t,l=6==t,d=5==t||l;return function(p,v,y,h){for(var g,S,b=i(p),m=o(b),_=r(v,y,3),x=c(m.length),L=0,w=h||u,E=e?w(p,x):n?w(p,0):void 0;x>L;L++)if((d||L in m)&&(S=_(g=m[L],L,b),t))if(e)E[L]=S;else if(S)switch(t){case 3:return!0;case 5:return g;case 6:return L;case 2:a.call(E,g)}else if(f)return!1;return l?-1:s||f?f:E}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},function(t,e,n){var r=n(40);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){"use strict";var r=n(1);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){var r=n(0),o=n(59),i=n(61),c=n(4);for(var u in o){var a=r[u],s=a&&a.prototype;if(s&&s.forEach!==i)try{c(s,"forEach",i)}catch(t){s.forEach=i}}},function(t,e,n){"use strict";var r=n(56).forEach,o=n(58),i=n(44),c=o("forEach"),u=i("forEach");t.exports=c&&u?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var r;n(53),n(60);window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),(r=Drupal).behaviors.header={attach:function(t){function e(t){"false"===t.getAttribute("aria-expanded")?t.setAttribute("aria-expanded","true"):t.setAttribute("aria-expanded","false"),t.classList.contains("lgd-header__toggle--active")?t.classList.remove("lgd-header__toggle--active"):t.classList.add("lgd-header__toggle--active")}function n(){y.forEach((function(t){t.setAttribute("aria-expanded","false"),t.classList.remove("lgd-header__toggle--active")})),d.forEach((function(t){t.classList.remove("lgd-header__nav--active")}))}function o(){e(p),u(p),d.forEach((function(t){t.classList.contains("lgd-header__nav--active")?t.classList.remove("lgd-header__nav--active"):t.classList.add("lgd-header__nav--active")}))}function i(){e(v),u(v),f.classList.contains("lgd-header__nav--active")?f.classList.remove("lgd-header__nav--active"):f.classList.add("lgd-header__nav--active"),f.classList.contains("lgd-header__nav--active")&&h.focus()}function c(){h.addEventListener("keydown",(function(t){t.shiftKey&&"Tab"==t.key&&(t.preventDefault(),n(),v.focus())}))}function u(e){t.addEventListener("keydown",(function(t){"Escape"==t.key&&(t.preventDefault(),n(),e.focus())}))}function a(){n(),768>window.innerWidth?(v&&(v.removeEventListener("click",i,!0),v.removeEventListener("click",c,!0)),p&&p.addEventListener("click",o)):(p&&p.removeEventListener("click",o,!0),v&&(v.addEventListener("click",i),v.addEventListener("click",c)))}t=t||document;var s,f,l=window.innerWidth,d=[];t.querySelector(".lgd-header__nav--primary")&&(s=t.querySelector(".lgd-header__nav--primary"),d.push(s)),t.querySelector(".lgd-header__nav--secondary")&&(f=t.querySelector(".lgd-header__nav--secondary"),d.push(f));var p,v,y=t.querySelectorAll(".lgd-header__toggle");if(t.querySelector(".lgd-header__toggle--primary")&&(p=t.querySelector(".lgd-header__toggle--primary")),t.querySelector(".lgd-header__toggle--secondary")&&(v=t.querySelector(".lgd-header__toggle--secondary")),y.length){var h;y.forEach((function(t){t.classList.contains("js-processed")||t.classList.add("js-processed")})),f&&(h=f.querySelector(".menu a")),a(),window.addEventListener("resize",r.debounce((function(){window.innerWidth===l||(l=window.innerWidth,a())}),50,!1));var g=t.querySelector(".block-google-cse");if(g){var S=document.createElement("button"),b=document.createElement("img"),m=t.getElementById("google-cse-search-box-form");b.setAttribute("src","/themes/custom/brucecastle/images/icons/search-icon.svg"),b.setAttribute("class","google-cse-search-block__search-icon"),S.setAttribute("class","google-cse-search-block__search-button"),S.appendChild(b),g.appendChild(S),S.addEventListener("click",(function(){m.style.display=m.style.display&&"none"!==m.style.display?"none":"flex"})),window.addEventListener("resize",(function(){var t=window.innerWidth;m.style.display=800<t?"none":"flex"}))}}}}}]);