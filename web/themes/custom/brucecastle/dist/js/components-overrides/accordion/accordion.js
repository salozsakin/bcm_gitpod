!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=106)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,e(34))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(5),o=e(8),i=e(13);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,e){var r=e(0),o=e(18),i=e(2),c=e(19),u=e(22),a=e(38),f=o("wks"),s=r.Symbol,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,n,e){var r=e(3);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(5),o=e(23),i=e(7),c=e(14),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(0),o=e(12),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(25),o=e(16);t.exports=function(t){return r(o(t))}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(0),o=e(4);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(3);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports={}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(9),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r=e(30),o=e(9);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.7.0",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n,e){var r=e(21),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(5),o=e(1),i=e(29);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(0),o=e(4),i=e(2),c=e(12),u=e(17),a=e(33),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,n,e,u){var a,f=!!u&&!!u.unsafe,p=!!u&&!!u.enumerable,d=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),(a=s(e)).source||(a.source=l.join("string"==typeof n?n:""))),t!==r?(f?!d&&t[n]&&(p=!0):delete t[n],p?t[n]=e:o(t,n,e)):p?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},function(t,n,e){var r=e(1),o=e(11),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},,function(t,n,e){var r=e(5),o=e(42),i=e(13),c=e(10),u=e(14),a=e(2),f=e(23),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=c(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,e){var r=e(18),o=e(19),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,e){var r=e(0),o=e(3),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n){t.exports=!1},function(t,n,e){var r=e(45),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){var r,o,i,c=e(35),u=e(0),a=e(3),f=e(4),s=e(2),l=e(9),p=e(28),d=e(15),v=u.WeakMap;if(c){var y=l.state||(l.state=new v),h=y.get,b=y.has,x=y.set;r=function(t,n){return n.facade=t,x.call(y,t,n),n},o=function(t){return h.call(y,t)||{}},i=function(t){return b.call(y,t)}}else{var g=p("state");d[g]=!0,r=function(t,n){return n.facade=t,f(t,g,n),n},o=function(t){return s(t,g)?t[g]:{}},i=function(t){return s(t,g)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var r=e(0),o=e(17),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(2),o=e(10),i=e(47).indexOf,c=e(15);t.exports=function(t,n){var e,u=o(t),a=0,f=[];for(e in u)!r(c,e)&&r(u,e)&&f.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){var r=e(11);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(22);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){var r=e(0),o=e(27).f,i=e(4),c=e(24),u=e(12),a=e(43),f=e(49);t.exports=function(t,n){var e,s,l,p,d,v=t.target,y=t.global,h=t.stat;if(e=y?r:h?r[v]||u(v,{}):(r[v]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(d=o(e,s))&&d.value:e[s],!f(y?s:v+(h?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(e,s,p,t)}}},function(t,n,e){var r=e(21),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n,e){var r=e(16);t.exports=function(t){return Object(r(t))}},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(2),o=e(44),i=e(27),c=e(8);t.exports=function(t,n){for(var e=o(n),u=c.f,a=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||u(t,s,a(n,s))}}},function(t,n,e){var r=e(31),o=e(46),i=e(48),c=e(7);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(0);t.exports=r},function(t,n,e){var r=e(36),o=e(32).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(10),o=e(20),i=e(40),c=function(t){return function(n,e,c){var u,a=r(n),f=o(a.length),s=i(c,f);if(t&&e!=e){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(1),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==f||e!=a&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},,function(t,n,e){var r=e(3),o=e(37),i=e(6)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},,,,,,,,,,,function(t,n,e){var r,o,i=e(0),c=e(67),u=i.process,a=u&&u.versions,f=a&&a.v8;f?o=(r=f.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},,,function(t,n,e){"use strict";var r=e(14),o=e(8),i=e(13);t.exports=function(t,n,e){var c=r(n);c in t?o.f(t,c,i(0,e)):t[c]=e}},function(t,n,e){var r=e(1),o=e(6),i=e(62),c=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,e){var r=e(31);t.exports=r("navigator","userAgent")||""},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";e.r(n);e(107);Drupal.behaviors.accordion={attach:function(t){for(var n=t.querySelectorAll(".accordion"),e=0;e<n.length;e++)this.init(n[e],e)},init:function(t,n){var e=t.querySelectorAll(".accordion-pane"),r=e.length,o="accordion--initialised",i="accordion-pane__content--open",c=t.dataset.accordionTabsSwitch||null,u=window.matchMedia("(max-width: '".concat(c,"')")),a=[],f=function(){u.matches||null===c?function(){if(!t.classList.contains(o)){for(var c=function(r){var o=e[r],c=o.querySelectorAll(".accordion-pane__content"),u=o.querySelectorAll(".accordion-pane__title"),f=u[0].textContent,s=document.createElement("button"),l=document.createTextNode(f),p="accordion-content-".concat(n,"-").concat(r),d=document.createElement("div");d.setAttribute("class","accordion-pane__more-icon");var v=document.createElement("div");v.setAttribute("class","accordion-pane__less-icon"),v.style.display="none",c[0].setAttribute("id",p),s.appendChild(l),s.appendChild(d),s.appendChild(v),s.setAttribute("aria-expanded","false"),s.setAttribute("aria-controls",p),s.addEventListener("click",(function(n){var e=n.target.getAttribute("aria-controls"),r=t.querySelectorAll("#".concat(e));"false"===n.target.getAttribute("aria-expanded")?(n.target.setAttribute("aria-expanded","true"),r[0].classList.add(i),d.style.display="none",v.style.display="block",a.push(r[0])):(n.target.setAttribute("aria-expanded","false"),r[0].classList.remove(i),d.style.display="block",v.style.display="none"),document.querySelectorAll(".accordion__close-button")[0].addEventListener("click",(function(){for(var t=0;t<a.length;t++)a[t].classList.remove(i),d.style.display="block",v.style.display="none",a[t].closest(".accordion-pane").querySelector("button").setAttribute("aria-expanded","false")}))})),u[0].children[0].innerHTML="",u[0].children[0].appendChild(s)},u=0;u<r;u++)c(u);t.classList.add(o)}}():function(){for(var n,c=0;c<r;c++)0<(n=t.querySelectorAll(".accordion-pane__title")[c].querySelectorAll("button")).length&&(n[0].outerHTML=n[0].innerHTML),e[c].querySelectorAll(".accordion-pane__content")[0].removeAttribute("id"),e[c].querySelectorAll(".accordion-pane__content")[0].classList.contains(i)&&e[c].querySelectorAll(".accordion-pane__content")[0].classList.remove(i);t.classList.remove(o)}()};window.matchMedia&&(u.addListener((function(){f()})),f())}}},function(t,n,e){"use strict";var r=e(39),o=e(1),i=e(37),c=e(3),u=e(41),a=e(20),f=e(65),s=e(51),l=e(66),p=e(6),d=e(62),v=p("isConcatSpreadable"),y=d>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),h=l("concat"),b=function(t){if(!c(t))return!1;var n=t[v];return void 0!==n?!!n:i(t)};r({target:"Array",proto:!0,forced:!y||!h},{concat:function(t){var n,e,r,o,i,c=u(this),l=s(c,0),p=0;for(n=-1,r=arguments.length;n<r;n++)if(b(i=-1===n?c:arguments[n])){if(p+(o=a(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(e=0;e<o;e++,p++)e in i&&f(l,p,i[e])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(l,p++,i)}return l.length=p,l}})}]);