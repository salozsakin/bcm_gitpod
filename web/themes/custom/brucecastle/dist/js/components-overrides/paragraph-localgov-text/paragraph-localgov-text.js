!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=123)}([function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,r(35))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(1);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,r){var e=r(4),o=r(8),u=r(13);t.exports=e?function(t,n,r){return o.f(t,n,u(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(0),o=r(18),u=r(2),i=r(19),c=r(22),f=r(38),a=o("wks"),s=e.Symbol,p=f?s:s&&s.withoutSetter||i;t.exports=function(t){return u(a,t)||(c&&u(s,t)?a[t]=s[t]:a[t]=p("Symbol."+t)),a[t]}},function(t,n,r){var e=r(3);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,r){var e=r(4),o=r(23),u=r(7),i=r(15),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(u(t),n=i(n,!0),u(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(0),o=r(12),u=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=u},function(t,n,r){var e=r(26),o=r(16);t.exports=function(t){return e(o(t))}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(0),o=r(5);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){t.exports={}},function(t,n,r){var e=r(3);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var e=r(9),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},function(t,n,r){var e=r(32),o=r(9);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.7.0",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n,r){var e=r(21),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(1);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,n,r){var e=r(4),o=r(1),u=r(30);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(u("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(0),o=r(5),u=r(2),i=r(12),c=r(17),f=r(33),a=f.get,s=f.enforce,p=String(String).split("String");(t.exports=function(t,n,r,c){var f,a=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof n||u(r,"name")||o(r,"name",n),(f=s(r)).source||(f.source=p.join("string"==typeof n?n:""))),t!==e?(a?!v&&t[n]&&(l=!0):delete t[n],l?t[n]=r:o(t,n,r)):l?t[n]=r:i(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||c(this)}))},function(t,n,r){var e={};e[r(6)("toStringTag")]="z",t.exports="[object z]"===String(e)},function(t,n,r){var e=r(1),o=r(11),u="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?u.call(t,""):Object(t)}:Object},function(t,n,r){var e=r(4),o=r(42),u=r(13),i=r(10),c=r(15),f=r(2),a=r(23),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=i(t),n=c(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return u(!o.f.call(t,n),t[n])}},function(t,n,r){var e=r(18),o=r(19),u=e("keys");t.exports=function(t){return u[t]||(u[t]=o(t))}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,r){var e=r(0),o=r(3),u=e.document,i=o(u)&&o(u.createElement);t.exports=function(t){return i?u.createElement(t):{}}},function(t,n,r){var e=r(45),o=r(0),u=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?u(e[t])||u(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},function(t,n){t.exports=!1},function(t,n,r){var e,o,u,i=r(36),c=r(0),f=r(3),a=r(5),s=r(2),p=r(9),l=r(28),v=r(14),y=c.WeakMap;if(i){var d=p.state||(p.state=new y),g=d.get,h=d.has,b=d.set;e=function(t,n){return n.facade=t,b.call(d,t,n),n},o=function(t){return g.call(d,t)||{}},u=function(t){return h.call(d,t)}}else{var x=l("state");v[x]=!0,e=function(t,n){return n.facade=t,a(t,x,n),n},o=function(t){return s(t,x)?t[x]:{}},u=function(t){return s(t,x)}}t.exports={set:e,get:o,has:u,enforce:function(t){return u(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!f(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n,r){var e=r(2),o=r(10),u=r(47).indexOf,i=r(14);t.exports=function(t,n){var r,c=o(t),f=0,a=[];for(r in c)!e(i,r)&&e(c,r)&&a.push(r);for(;n.length>f;)e(c,r=n[f++])&&(~u(a,r)||a.push(r));return a}},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){var e=r(0),o=r(17),u=e.WeakMap;t.exports="function"==typeof u&&/native code/.test(o(u))},function(t,n,r){var e=r(11);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){var e=r(22);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,r){var e=r(0),o=r(27).f,u=r(5),i=r(24),c=r(12),f=r(43),a=r(49);t.exports=function(t,n){var r,s,p,l,v,y=t.target,d=t.global,g=t.stat;if(r=d?e:g?e[y]||c(y,{}):(e[y]||{}).prototype)for(s in n){if(l=n[s],p=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!a(d?s:y+(g?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;f(l,p)}(t.sham||p&&p.sham)&&u(l,"sham",!0),i(r,s,l,t)}}},function(t,n,r){var e=r(21),o=Math.max,u=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):u(r,n)}},function(t,n,r){var e=r(16);t.exports=function(t){return Object(e(t))}},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,u=o&&!e.call({1:2},1);n.f=u?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(2),o=r(44),u=r(27),i=r(8);t.exports=function(t,n){for(var r=o(n),c=i.f,f=u.f,a=0;a<r.length;a++){var s=r[a];e(t,s)||c(t,s,f(n,s))}}},function(t,n,r){var e=r(31),o=r(46),u=r(48),i=r(7);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(i(t)),r=u.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(0);t.exports=e},function(t,n,r){var e=r(34),o=r(29).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){var e=r(10),o=r(20),u=r(40),i=function(t){return function(n,r,i){var c,f=e(n),a=o(f.length),s=u(i,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(1),o=/#|\.prototype\./,u=function(t,n){var r=c[i(t)];return r==a||r!=f&&("function"==typeof n?e(n):!!n)},i=u.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=u.data={},f=u.NATIVE="N",a=u.POLYFILL="P";t.exports=u},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,r){var e=r(3),o=r(37),u=r(6)("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[u])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},function(t,n,r){var e=r(4),o=r(1),u=r(2),i=Object.defineProperty,c={},f=function(t){throw t};t.exports=function(t,n){if(u(c,t))return c[t];n||(n={});var r=[][t],a=!!u(n,"ACCESSORS")&&n.ACCESSORS,s=u(n,0)?n[0]:f,p=u(n,1)?n[1]:void 0;return c[t]=!!r&&!o((function(){if(a&&!e)return!0;var t={length:-1};a?i(t,1,{enumerable:!0,get:f}):t[1]=1,r.call(t,s,p)}))}},function(t,n,r){var e=r(25),o=r(24),u=r(54);e||o(Object.prototype,"toString",u,{unsafe:!0})},function(t,n,r){"use strict";var e=r(25),o=r(55);t.exports=e?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,n,r){var e=r(25),o=r(11),u=r(6)("toStringTag"),i="Arguments"==o(function(){return arguments}());t.exports=e?o:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),u))?r:i?o(n):"Object"==(e=o(n))&&"function"==typeof n.callee?"Arguments":e}},function(t,n,r){var e=r(57),o=r(26),u=r(41),i=r(20),c=r(51),f=[].push,a=function(t){var n=1==t,r=2==t,a=3==t,s=4==t,p=6==t,l=5==t||p;return function(v,y,d,g){for(var h,b,x=u(v),m=o(x),O=e(y,d,3),S=i(m.length),j=0,w=g||c,P=n?w(v,S):r?w(v,0):void 0;S>j;j++)if((l||j in m)&&(b=O(h=m[j],j,x),t))if(n)P[j]=b;else if(b)switch(t){case 3:return!0;case 5:return h;case 6:return j;case 2:f.call(P,h)}else if(s)return!1;return p?-1:a||s?s:P}};t.exports={forEach:a(0),map:a(1),filter:a(2),some:a(3),every:a(4),find:a(5),findIndex:a(6)}},function(t,n,r){var e=r(50);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},,,function(t,n,r){var e,o=r(7),u=r(64),i=r(29),c=r(14),f=r(66),a=r(30),s=r(28),p=s("IE_PROTO"),l=function(){},v=function(t){return"<script>"+t+"<\/script>"},y=function(){try{e=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;y=e?function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n}(e):((n=a("iframe")).style.display="none",f.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var r=i.length;r--;)delete y.prototype[i[r]];return y()};c[p]=!0,t.exports=Object.create||function(t,n){var r;return null!==t?(l.prototype=o(t),r=new l,l.prototype=null,r[p]=t):r=y(),void 0===n?r:u(r,n)}},,,function(t,n,r){var e=r(6),o=r(60),u=r(8),i=e("unscopables"),c=Array.prototype;null==c[i]&&u.f(c,i,{configurable:!0,value:o(null)}),t.exports=function(t){c[i][t]=!0}},function(t,n,r){var e=r(4),o=r(8),u=r(7),i=r(65);t.exports=e?Object.defineProperties:function(t,n){u(t);for(var r,e=i(n),c=e.length,f=0;c>f;)o.f(t,r=e[f++],n[r]);return t}},function(t,n,r){var e=r(34),o=r(29);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n,r){var e=r(31);t.exports=e("document","documentElement")},,,,,,function(t,n,r){"use strict";var e=r(39),o=r(56).find,u=r(63),i=r(52),c=!0,f=i("find");"find"in[]&&Array(1).find((function(){c=!1})),e({target:"Array",proto:!0,forced:c||!f},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),u("find")},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,r){"use strict";r.r(n);var e,o;r(72),r(53);e=Drupal,o=jQuery,e.behaviors.paragraphText={attach:function(){console.log("hola");var t=o(".field--name-localgov-text");console.log(t.find("[data-hspace]").getAttribute())}}}]);