!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=130)}([function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,r(31))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(5),o=r(11),i=r(12);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(1);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,r){var e=r(0),o=r(14),i=r(2),u=r(15),c=r(16),a=r(34),f=o("wks"),s=e.Symbol,l=a?s:s&&s.withoutSetter||u;t.exports=function(t){return i(f,t)||(c&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,n,r){var e=r(0),o=r(10),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(3);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,r){var e=r(0),o=r(4);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n,r){var e=r(5),o=r(24),i=r(9),u=r(19),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(i(t),n=u(n,!0),i(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(7),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},function(t,n,r){var e=r(29),o=r(7);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.7.0",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n,r){var e=r(1);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,n,r){var e={};e[r(6)("toStringTag")]="z",t.exports="[object z]"===String(e)},,function(t,n,r){var e=r(3);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports={}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var e=r(23),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(5),o=r(1),i=r(28);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(0),o=r(4),i=r(2),u=r(10),c=r(13),a=r(30),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,n,r,c){var a,f=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof n||i(r,"name")||o(r,"name",n),(a=s(r)).source||(a.source=l.join("string"==typeof n?n:""))),t!==e?(f?!v&&t[n]&&(p=!0):delete t[n],p?t[n]=r:o(t,n,r)):p?t[n]=r:u(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||c(this)}))},function(t,n,r){var e=r(1),o=r(8),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,r){var e=r(14),o=r(15),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,r){var e=r(0),o=r(3),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n){t.exports=!1},function(t,n,r){var e,o,i,u=r(32),c=r(0),a=r(3),f=r(4),s=r(2),l=r(7),p=r(27),v=r(20),y=c.WeakMap;if(u){var h=l.state||(l.state=new y),g=h.get,d=h.has,S=h.set;e=function(t,n){return n.facade=t,S.call(h,t,n),n},o=function(t){return g.call(h,t)||{}},i=function(t){return d.call(h,t)}}else{var b=p("state");v[b]=!0,e=function(t,n){return n.facade=t,f(t,b,n),n},o=function(t){return s(t,b)?t[b]:{}},i=function(t){return s(t,b)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!a(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){var e=r(0),o=r(13),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,r){var e=r(8);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){var e=r(16);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},,function(t,n,r){var e=r(21);t.exports=function(t){return Object(e(t))}},,,function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,r){var e=r(3),o=r(33),i=r(6)("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},function(t,n,r){var e=r(5),o=r(1),i=r(2),u=Object.defineProperty,c={},a=function(t){throw t};t.exports=function(t,n){if(i(c,t))return c[t];n||(n={});var r=[][t],f=!!i(n,"ACCESSORS")&&n.ACCESSORS,s=i(n,0)?n[0]:a,l=i(n,1)?n[1]:void 0;return c[t]=!!r&&!o((function(){if(f&&!e)return!0;var t={length:-1};f?u(t,1,{enumerable:!0,get:a}):t[1]=1,r.call(t,s,l)}))}},,function(t,n,r){var e=r(17),o=r(25),i=r(44);e||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,n,r){"use strict";var e=r(17),o=r(45);t.exports=e?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,n,r){var e=r(17),o=r(8),i=r(6)("toStringTag"),u="Arguments"==o(function(){return arguments}());t.exports=e?o:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?r:u?o(n):"Object"==(e=o(n))&&"function"==typeof n.callee?"Arguments":e}},function(t,n,r){var e=r(47),o=r(26),i=r(36),u=r(22),c=r(40),a=[].push,f=function(t){var n=1==t,r=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,y,h,g){for(var d,S,b=i(v),x=o(b),m=e(y,h,3),j=u(x.length),L=0,T=g||c,w=n?T(v,j):r?T(v,0):void 0;j>L;L++)if((p||L in x)&&(S=m(d=x[L],L,b),t))if(n)w[L]=S;else if(S)switch(t){case 3:return!0;case 5:return d;case 6:return L;case 2:a.call(w,d)}else if(s)return!1;return l?-1:f||s?s:w}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,n,r){var e=r(39);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,r){"use strict";var e=r(1);t.exports=function(t,n){var r=[][t];return!!r&&e((function(){r.call(null,n||function(){throw 1},1)}))}},,,function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},,,,,,,,,function(t,n,r){var e=r(0),o=r(51),i=r(61),u=r(4);for(var c in o){var a=e[c],f=a&&a.prototype;if(f&&f.forEach!==i)try{u(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,n,r){"use strict";var e=r(46).forEach,o=r(48),i=r(41),u=o("forEach"),c=i("forEach");t.exports=u&&c?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,r){"use strict";r.r(n);r(43),r(60);Drupal.behaviors.paragraphText={attach:function(t){t.querySelectorAll(".field--name-localgov-text").forEach((function(t){t.querySelectorAll(["[data-vspace]"]).forEach((function(t){t.style.marginTop="".concat(t.getAttribute("data-vspace"),"px"),t.style.marginBottom="".concat(t.getAttribute("data-vspace"),"px")})),t.querySelectorAll(["[data-hspace]"]).forEach((function(t){t.style.marginRight="".concat(t.getAttribute("data-hspace"),"px"),t.style.marginLeft="".concat(t.getAttribute("data-hspace"),"px")})),t.querySelectorAll(["[data-border]"]).forEach((function(t){var n=t.querySelector("img");n&&(n.style.border=t.getAttribute("data-border"))}))}))}}}]);