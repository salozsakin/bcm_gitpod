!function(t){var r={};function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)n.d(e,o,function(r){return t[r]}.bind(null,o));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n(n.s=121)}([function(t,r,n){(function(r){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r&&r)||function(){return this}()||Function("return this")()}).call(this,n(34))},function(t,r){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,r){var n={}.hasOwnProperty;t.exports=function(t,r){return n.call(t,r)}},function(t,r){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,r,n){var e=n(5),o=n(8),i=n(13);t.exports=e?function(t,r,n){return o.f(t,r,i(1,n))}:function(t,r,n){return t[r]=n,t}},function(t,r,n){var e=n(1);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,r,n){var e=n(0),o=n(18),i=n(2),u=n(19),c=n(22),f=n(38),s=o("wks"),a=e.Symbol,l=f?a:a&&a.withoutSetter||u;t.exports=function(t){return i(s,t)||(c&&i(a,t)?s[t]=a[t]:s[t]=l("Symbol."+t)),s[t]}},function(t,r,n){var e=n(3);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,r,n){var e=n(5),o=n(23),i=n(7),u=n(14),c=Object.defineProperty;r.f=e?c:function(t,r,n){if(i(t),r=u(r,!0),i(n),o)try{return c(t,r,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[r]=n.value),t}},function(t,r,n){var e=n(0),o=n(12),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,r,n){var e=n(25),o=n(16);t.exports=function(t){return e(o(t))}},function(t,r){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,r,n){var e=n(0),o=n(4);t.exports=function(t,r){try{o(e,t,r)}catch(n){e[t]=r}return r}},function(t,r){t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},function(t,r,n){var e=n(3);t.exports=function(t,r){if(!e(t))return t;var n,o;if(r&&"function"==typeof(n=t.toString)&&!e(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!e(o=n.call(t)))return o;if(!r&&"function"==typeof(n=t.toString)&&!e(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,r){t.exports={}},function(t,r){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,r,n){var e=n(9),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},function(t,r,n){var e=n(30),o=n(9);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.7.0",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,r){var n=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+e).toString(36)}},function(t,r,n){var e=n(21),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,r){var n=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:n)(t)}},function(t,r,n){var e=n(1);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,r,n){var e=n(5),o=n(1),i=n(29);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,r,n){var e=n(0),o=n(4),i=n(2),u=n(12),c=n(17),f=n(33),s=f.get,a=f.enforce,l=String(String).split("String");(t.exports=function(t,r,n,c){var f,s=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof r||i(n,"name")||o(n,"name",r),(f=a(n)).source||(f.source=l.join("string"==typeof r?r:""))),t!==e?(s?!v&&t[r]&&(p=!0):delete t[r],p?t[r]=n:o(t,r,n)):p?t[r]=n:u(r,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||c(this)}))},function(t,r,n){var e=n(1),o=n(11),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,r,n){var e={};e[n(6)("toStringTag")]="z",t.exports="[object z]"===String(e)},function(t,r,n){var e=n(5),o=n(42),i=n(13),u=n(10),c=n(14),f=n(2),s=n(23),a=Object.getOwnPropertyDescriptor;r.f=e?a:function(t,r){if(t=u(t),r=c(r,!0),s)try{return a(t,r)}catch(t){}if(f(t,r))return i(!o.f.call(t,r),t[r])}},function(t,r,n){var e=n(18),o=n(19),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,r,n){var e=n(0),o=n(3),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,r){t.exports=!1},function(t,r,n){var e=n(45),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,r){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][r]||o[t]&&o[t][r]}},function(t,r){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,r,n){var e,o,i,u=n(35),c=n(0),f=n(3),s=n(4),a=n(2),l=n(9),p=n(28),v=n(15),y=c.WeakMap;if(u){var g=l.state||(l.state=new y),d=g.get,h=g.has,x=g.set;e=function(t,r){return r.facade=t,x.call(g,t,r),r},o=function(t){return d.call(g,t)||{}},i=function(t){return h.call(g,t)}}else{var b=p("state");v[b]=!0,e=function(t,r){return r.facade=t,s(t,b,r),r},o=function(t){return a(t,b)?t[b]:{}},i=function(t){return a(t,b)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(r){var n;if(!f(r)||(n=o(r)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,r){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,r,n){var e=n(0),o=n(17),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,r,n){var e=n(2),o=n(10),i=n(47).indexOf,u=n(15);t.exports=function(t,r){var n,c=o(t),f=0,s=[];for(n in c)!e(u,n)&&e(c,n)&&s.push(n);for(;r.length>f;)e(c,n=r[f++])&&(~i(s,n)||s.push(n));return s}},function(t,r,n){var e=n(11);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,r,n){var e=n(22);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,r,n){var e=n(0),o=n(27).f,i=n(4),u=n(24),c=n(12),f=n(43),s=n(49);t.exports=function(t,r){var n,a,l,p,v,y=t.target,g=t.global,d=t.stat;if(n=g?e:d?e[y]||c(y,{}):(e[y]||{}).prototype)for(a in r){if(p=r[a],l=t.noTargetGet?(v=o(n,a))&&v.value:n[a],!s(g?a:y+(d?".":"#")+a,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;f(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(n,a,p,t)}}},function(t,r,n){var e=n(21),o=Math.max,i=Math.min;t.exports=function(t,r){var n=e(t);return n<0?o(n+r,0):i(n,r)}},function(t,r,n){var e=n(16);t.exports=function(t){return Object(e(t))}},function(t,r,n){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);r.f=i?function(t){var r=o(this,t);return!!r&&r.enumerable}:e},function(t,r,n){var e=n(2),o=n(44),i=n(27),u=n(8);t.exports=function(t,r){for(var n=o(r),c=u.f,f=i.f,s=0;s<n.length;s++){var a=n[s];e(t,a)||c(t,a,f(r,a))}}},function(t,r,n){var e=n(31),o=n(46),i=n(48),u=n(7);t.exports=e("Reflect","ownKeys")||function(t){var r=o.f(u(t)),n=i.f;return n?r.concat(n(t)):r}},function(t,r,n){var e=n(0);t.exports=e},function(t,r,n){var e=n(36),o=n(32).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,r,n){var e=n(10),o=n(20),i=n(40),u=function(t){return function(r,n,u){var c,f=e(r),s=o(f.length),a=i(u,s);if(t&&n!=n){for(;s>a;)if((c=f[a++])!=c)return!0}else for(;s>a;a++)if((t||a in f)&&f[a]===n)return t||a||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,r){r.f=Object.getOwnPropertySymbols},function(t,r,n){var e=n(1),o=/#|\.prototype\./,i=function(t,r){var n=c[u(t)];return n==s||n!=f&&("function"==typeof r?e(r):!!r)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},f=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,r){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,r,n){var e=n(3),o=n(37),i=n(6)("species");t.exports=function(t,r){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?e(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===r?0:r)}},function(t,r,n){var e=n(5),o=n(1),i=n(2),u=Object.defineProperty,c={},f=function(t){throw t};t.exports=function(t,r){if(i(c,t))return c[t];r||(r={});var n=[][t],s=!!i(r,"ACCESSORS")&&r.ACCESSORS,a=i(r,0)?r[0]:f,l=i(r,1)?r[1]:void 0;return c[t]=!!n&&!o((function(){if(s&&!e)return!0;var t={length:-1};s?u(t,1,{enumerable:!0,get:f}):t[1]=1,n.call(t,a,l)}))}},function(t,r,n){var e=n(26),o=n(24),i=n(54);e||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,r,n){"use strict";var e=n(26),o=n(55);t.exports=e?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,r,n){var e=n(26),o=n(11),i=n(6)("toStringTag"),u="Arguments"==o(function(){return arguments}());t.exports=e?o:function(t){var r,n,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,r){try{return t[r]}catch(t){}}(r=Object(t),i))?n:u?o(r):"Object"==(e=o(r))&&"function"==typeof r.callee?"Arguments":e}},function(t,r,n){var e=n(57),o=n(25),i=n(41),u=n(20),c=n(51),f=[].push,s=function(t){var r=1==t,n=2==t,s=3==t,a=4==t,l=6==t,p=5==t||l;return function(v,y,g,d){for(var h,x,b=i(v),S=o(b),O=e(y,g,3),m=u(S.length),w=0,j=d||c,T=r?j(v,m):n?j(v,0):void 0;m>w;w++)if((p||w in S)&&(x=O(h=S[w],w,b),t))if(r)T[w]=x;else if(x)switch(t){case 3:return!0;case 5:return h;case 6:return w;case 2:f.call(T,h)}else if(a)return!1;return l?-1:s||a?a:T}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},function(t,r,n){var e=n(50);t.exports=function(t,r,n){if(e(t),void 0===r)return t;switch(n){case 0:return function(){return t.call(r)};case 1:return function(n){return t.call(r,n)};case 2:return function(n,e){return t.call(r,n,e)};case 3:return function(n,e,o){return t.call(r,n,e,o)}}return function(){return t.apply(r,arguments)}}},function(t,r,n){"use strict";var e=n(1);t.exports=function(t,r){var n=[][t];return!!n&&e((function(){n.call(null,r||function(){throw 1},1)}))}},function(t,r){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,r,n){var e=n(0),o=n(59),i=n(61),u=n(4);for(var c in o){var f=e[c],s=f&&f.prototype;if(s&&s.forEach!==i)try{u(s,"forEach",i)}catch(t){s.forEach=i}}},function(t,r,n){"use strict";var e=n(56).forEach,o=n(58),i=n(52),u=o("forEach"),c=i("forEach");t.exports=u&&c?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},,,function(t,r,n){var e,o=n(7),i=n(69),u=n(32),c=n(15),f=n(71),s=n(29),a=n(28),l=a("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"<\/script>"},y=function(){try{e=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,r;y=e?function(t){t.write(v("")),t.close();var r=t.parentWindow.Object;return t=null,r}(e):((r=s("iframe")).style.display="none",f.appendChild(r),r.src=String("javascript:"),(t=r.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var n=u.length;n--;)delete y.prototype[u[n]];return y()};c[l]=!0,t.exports=Object.create||function(t,r){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[l]=t):n=y(),void 0===r?n:i(n,r)}},,,,function(t,r,n){var e=n(6),o=n(64),i=n(8),u=e("unscopables"),c=Array.prototype;null==c[u]&&i.f(c,u,{configurable:!0,value:o(null)}),t.exports=function(t){c[u][t]=!0}},function(t,r,n){var e=n(5),o=n(8),i=n(7),u=n(70);t.exports=e?Object.defineProperties:function(t,r){i(t);for(var n,e=u(r),c=e.length,f=0;c>f;)o.f(t,n=e[f++],r[n]);return t}},function(t,r,n){var e=n(36),o=n(32);t.exports=Object.keys||function(t){return e(t,o)}},function(t,r,n){var e=n(31);t.exports=e("document","documentElement")},function(t,r){t.exports={}},,,function(t,r,n){"use strict";var e=n(10),o=n(68),i=n(72),u=n(33),c=n(122),f=u.set,s=u.getterFor("Array Iterator");t.exports=c(Array,"Array",(function(t,r){f(this,{type:"Array Iterator",target:e(t),index:0,kind:r})}),(function(){var t=s(this),r=t.target,n=t.kind,e=t.index++;return!r||e>=r.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:e,done:!1}:"values"==n?{value:r[e],done:!1}:{value:[e,r[e]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,r,n){"use strict";var e,o,i,u=n(77),c=n(4),f=n(2),s=n(6),a=n(30),l=s("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=u(u(i)))!==Object.prototype&&(e=o):p=!0),null==e&&(e={}),a||f(e,l)||c(e,l,(function(){return this})),t.exports={IteratorPrototype:e,BUGGY_SAFARI_ITERATORS:p}},function(t,r,n){var e=n(2),o=n(41),i=n(28),u=n(124),c=i("IE_PROTO"),f=Object.prototype;t.exports=u?Object.getPrototypeOf:function(t){return t=o(t),e(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?f:null}},function(t,r,n){var e=n(8).f,o=n(2),i=n(6)("toStringTag");t.exports=function(t,r,n){t&&!o(t=n?t:t.prototype,i)&&e(t,i,{configurable:!0,value:r})}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,r,n){"use strict";n.r(r);var e;n(53),n(60),n(75),n(127);(e=n(128)).keys().forEach(e)},function(t,r,n){"use strict";var e=n(39),o=n(123),i=n(77),u=n(125),c=n(78),f=n(4),s=n(24),a=n(6),l=n(30),p=n(72),v=n(76),y=v.IteratorPrototype,g=v.BUGGY_SAFARI_ITERATORS,d=a("iterator"),h=function(){return this};t.exports=function(t,r,n,a,v,x,b){o(n,r,a);var S,O,m,w=function(t){if(t===v&&E)return E;if(!g&&t in _)return _[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},j=r+" Iterator",T=!1,_=t.prototype,P=_[d]||_["@@iterator"]||v&&_[v],E=!g&&P||w(v),L="Array"==r&&_.entries||P;if(L&&(S=i(L.call(new t)),y!==Object.prototype&&S.next&&(l||i(S)===y||(u?u(S,y):"function"!=typeof S[d]&&f(S,d,h)),c(S,j,!0,!0),l&&(p[j]=h))),"values"==v&&P&&"values"!==P.name&&(T=!0,E=function(){return P.call(this)}),l&&!b||_[d]===E||f(_,d,E),p[r]=E,v)if(O={values:w("values"),keys:x?E:w("keys"),entries:w("entries")},b)for(m in O)(g||T||!(m in _))&&s(_,m,O[m]);else e({target:r,proto:!0,forced:g||T},O);return O}},function(t,r,n){"use strict";var e=n(76).IteratorPrototype,o=n(64),i=n(13),u=n(78),c=n(72),f=function(){return this};t.exports=function(t,r,n){var s=r+" Iterator";return t.prototype=o(e,{next:i(1,n)}),u(t,s,!1,!0),c[s]=f,t}},function(t,r,n){var e=n(1);t.exports=!e((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,r,n){var e=n(7),o=n(126);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),r=n instanceof Array}catch(t){}return function(n,i){return e(n),o(i),r?t.call(n,i):n.__proto__=i,n}}():void 0)},function(t,r,n){var e=n(3);t.exports=function(t){if(!e(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,r,n){var e=n(0),o=n(59),i=n(75),u=n(4),c=n(6),f=c("iterator"),s=c("toStringTag"),a=i.values;for(var l in o){var p=e[l],v=p&&p.prototype;if(v){if(v[f]!==a)try{u(v,f,a)}catch(t){v[f]=a}if(v[s]||u(v,s,l),o[l])for(var y in i)if(v[y]!==i[y])try{u(v,y,i[y])}catch(t){v[y]=i[y]}}}},function(t,r,n){var e={"./icons/calendar.svg":129,"./icons/carousel-arrow-left.svg":130,"./icons/carousel-arrow-right.svg":131,"./icons/carousel-play.svg":132,"./icons/carousel-stop.svg":133,"./icons/chevron.svg":134,"./icons/minus-circle.svg":135,"./icons/plus-circle.svg":136,"./icons/quote-close.svg":137,"./icons/quote.svg":138,"./logo-haringey.svg":139,"./logo.svg":140};function o(t){var r=i(t);return n(r)}function i(t){if(!n.o(e,t)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return e[t]}o.keys=function(){return Object.keys(e)},o.resolve=i,t.exports=o,o.id=128},function(t,r,n){"use strict";n.r(r),r.default={id:"calendar-usage",viewBox:"0 0 16 17",url:n.p+"../dist/icons.svg#calendar",toString:function(){return this.url}}},function(t,r,n){"use strict";n.r(r),r.default={id:"carousel-arrow-left-usage",viewBox:"0 0 24 24",url:n.p+"../dist/icons.svg#carousel-arrow-left",toString:function(){return this.url}}},function(t,r,n){"use strict";n.r(r),r.default={id:"carousel-arrow-right-usage",viewBox:"0 0 24 24",url:n.p+"../dist/icons.svg#carousel-arrow-right",toString:function(){return this.url}}},function(t,r,n){"use strict";n.r(r),r.default={id:"carousel-play-usage",viewBox:"0 0 24 27",url:n.p+"../dist/icons.svg#carousel-play",toString:function(){return this.url}}},function(t,r,n){"use strict";n.r(r),r.default={id:"carousel-stop-usage",viewBox:"0 0 16 16",url:n.p+"../dist/icons.svg#carousel-stop",toString:function(){return this.url}}},function(t,r,n){"use strict";n.r(r),r.default={id:"chevron-usage",viewBox:"0 0 8 12",url:n.p+"../dist/icons.svg#chevron",toString:function(){return this.url}}},function(t,r,n){"use strict";n.r(r),r.default={id:"minus-circle-usage",viewBox:"0 0 24 24",url:n.p+"../dist/icons.svg#minus-circle",toString:function(){return this.url}}},function(t,r,n){"use strict";n.r(r),r.default={id:"plus-circle-usage",viewBox:"0 0 20 20",url:n.p+"../dist/icons.svg#plus-circle",toString:function(){return this.url}}},function(t,r,n){"use strict";n.r(r),r.default={id:"quote-close-usage",viewBox:"0 0 60 49",url:n.p+"../dist/icons.svg#quote-close",toString:function(){return this.url}}},function(t,r,n){"use strict";n.r(r),r.default={id:"quote-usage",viewBox:"0 0 60 49",url:n.p+"../dist/icons.svg#quote",toString:function(){return this.url}}},function(t,r,n){"use strict";n.r(r),r.default=n.p+"9ea77ea8f2bf10f400c6ddc1950a208b.svg"},function(t,r,n){"use strict";n.r(r),r.default=n.p+"cec14d489cb70ee838b6de4cbd2b7b3a.svg"}]);