(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[497],{506:function(e,t,r){"use strict";r.d(t,{L:function(){return ce},Kq:function(){return G},AK:function(){return me},eh:function(){return Y},Hf:function(){return ye},xf:function(){return ae},LK:function(){return ue},zK:function(){return $},nR:function(){return le}});var n=r(178),o=r.n(n),i=r(7294),a=r.t(i,2);Math.round(1e10*Math.random());Boolean("undefined"!==typeof window&&window.document&&window.document.createElement);var s=r(3935);"undefined"!==typeof window&&i.useLayoutEffect;new Map;new Set(["id"]),new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]);let u=new Map,c=new Set;function l(){if("undefined"===typeof window)return;let e=t=>{let r=u.get(t.target);if(r&&(r.delete(t.propertyName),0===r.size&&(t.target.removeEventListener("transitioncancel",e),u.delete(t.target)),0===u.size)){for(let e of c)e();c.clear()}};document.body.addEventListener("transitionrun",(t=>{let r=u.get(t.target);r||(r=new Set,u.set(t.target,r),t.target.addEventListener("transitioncancel",e)),r.add(t.propertyName)})),document.body.addEventListener("transitionend",e)}"undefined"!==typeof document&&("loading"!==document.readyState?l():document.addEventListener("DOMContentLoaded",l));"undefined"!==typeof window&&window.visualViewport;new Map;function f(e){return"undefined"!==typeof window&&null!=window.navigator&&e.test(window.navigator.platform)}function d(){return f(/^Mac/)}function p(e){return!(0!==e.mozInputSource||!e.isTrusted)||0===e.detail&&!e.pointerType}const h=i.createContext(null);h.displayName="PressResponderContext";let v=null,y=new Set,m=!1,g=!1,b=!1;function w(e,t){for(let r of y)r(e,t)}function _(e){g=!0,function(e){return!(e.metaKey||!d()&&e.altKey||e.ctrlKey||"keyup"===e.type&&("Control"===e.key||"Shift"===e.key))}(e)&&(v="keyboard",w("keyboard",e))}function S(e){v="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(g=!0,w("pointer",e))}function j(e){p(e)&&(g=!0,v="virtual")}function O(e){e.target!==window&&e.target!==document&&(g||b||(v="virtual",w("virtual",e)),g=!1,b=!1)}function E(){g=!1,b=!0}function C(){if("undefined"===typeof window||m)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){g=!0,e.apply(this,arguments)},document.addEventListener("keydown",_,!0),document.addEventListener("keyup",_,!0),document.addEventListener("click",j,!0),window.addEventListener("focus",O,!0),window.addEventListener("blur",E,!1),"undefined"!==typeof PointerEvent?(document.addEventListener("pointerdown",S,!0),document.addEventListener("pointermove",S,!0),document.addEventListener("pointerup",S,!0)):(document.addEventListener("mousedown",S,!0),document.addEventListener("mousemove",S,!0),document.addEventListener("mouseup",S,!0)),m=!0}"undefined"!==typeof document&&("loading"!==document.readyState?C():document.addEventListener("DOMContentLoaded",C));new Set;const A=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"];A.join(":not([hidden]),");A.push('[tabindex]:not([tabindex="-1"]):not([disabled])');A.join(':not([hidden]):not([tabindex="-1"]),');function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function R(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"===typeof e)return M(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?M(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function L(e){return null!=e}function I(e){for(var t={},r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];for(var i=0,a=n;i<a.length;i++){var s=a[i];s in e&&(t[s]=e[s])}return t}function T(e){for(var t={},r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];for(var i=0,a=Object.keys(e);i<a.length;i++){var s=a[i];n.includes(s)||(t[s]=e[s])}return t}function P(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];if(0!==t.length)return function(e){for(var r,n=e,o=R(t);!(r=o()).done;){n=(0,r.value)(n)}return n}}var F="undefined"!==typeof window,z=Symbol("NONE"),N=F?i.useLayoutEffect:i.useEffect;function B(e,t,r){return Array.isArray(r)?i.createElement.apply(i,[e,t].concat(r)):r||"children"in t?i.createElement(e,t,r):i.createElement(e,t)}function D(e){for(var t=k({},e),r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];for(var i=0,a=n;i<a.length;i++)for(var s=a[i],u=0,c=Object.keys(s);u<c.length;u++){var l=c[u];t[l]=Z(l,t[l],s[l])}return t}function H(e,t){e&&("function"===typeof e?e(t):Object.isFrozen(e)||(e.current=t))}function U(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){for(var r,n=R(t);!(r=n()).done;){H(r.value,e)}}}function Z(e,t,r){return t===z||r===z?null:null==t?r:null==r?t:"className"===e?o()(t,r):"style"===e?k({},t,r):"ref"===e?U(t,r):typeof t!==typeof r?r:e.startsWith("on")&&"function"===typeof t?function(){var e;return"function"===typeof t&&(e=t.apply(void 0,arguments)),"function"===typeof r&&(e=r.apply(void 0,arguments)),e}:r}function K(e,t,r,n){var o=t.children,i=x(t,["children"]),a=Q(o,null!=r&&r);return B(e,k({ref:n},i),a)}function q(e,t){var r=e.as,n=e.hasGap;return K(null!=r?r:"div",x(e,["as","hasGap"]),n,t)}var W=(0,i.forwardRef)(q),V=function(e){return(0,i.forwardRef)((function(t,r){var n=t.hasGap,o=x(t,["hasGap"]);return K(e,o,n,r)}))},G=Object.assign(W,{div:V("div"),a:V("a"),button:V("button"),h1:V("h1"),h2:V("h2"),h3:V("h3"),h4:V("h4"),h5:V("h5"),h6:V("h6"),label:V("label"),form:V("form"),section:V("section"),head:V("head"),main:V("main"),nav:V("nav")});function $(e,t,r){if(null==e)return!1;var n=e[t];return null!=n&&(!0===n?r===t:!1!==n&&(Array.isArray(n)?n.includes(r):"string"===typeof n?n===r:void 0!==n[r]&&!1!==n[r]))}function Q(e,t){var r=t?"__wab_flex-container":"__wab_passthrough";return e?Array.isArray(e)?i.createElement.apply(a,["div",{className:r}].concat(e)):(0,i.createElement)("div",{className:r},e):null}function J(e,t,r,n){var o=ne(e),a=re(r,o.props);if("render"===o.type)return o.render(a,t);var s=t;"as"===o.type&&o.as&&(t===G?a.as=o.as:s=o.as);var u=a.children;o.wrapChildren&&(u=o.wrapChildren(function(e){return Array.isArray(e)?1===e.length?e[0]:i.createElement.apply(i,[i.Fragment,{}].concat(e)):e}(u))),n&&(u=Q(u,!0));var c=B(s,a,u);return o.wrap&&(c=o.wrap(c)),c}var X=new Map;function Y(e,t){null==t&&(t={});var r=t["data-plasmic-name"],n=t["data-plasmic-root"],o=t["data-plasmic-for-node"];delete t["data-plasmic-name"],delete t["data-plasmic-root"],delete t["data-plasmic-for-node"];for(var i=arguments.length,a=new Array(i>2?i-2:0),s=2;s<i;s++)a[s-2]=arguments[s];var u=ee.apply(void 0,[e,t].concat(a));if(r&&X.set(r,u),n){var c,l=o?null!=(c=X.get(o))?c:null:u;return X.clear(),l}return u}function ee(e,t){var r,n=t["data-plasmic-override"],o=t["data-plasmic-wrap-flex-child"],i=null!=(r=t["data-plasmic-trigger-props"])?r:[];delete t["data-plasmic-override"],delete t["data-plasmic-wrap-flex-child"],delete t["data-plasmic-trigger-props"];for(var a=arguments.length,s=new Array(a>2?a-2:0),u=2;u<a;u++)s[u-2]=arguments[u];return J(n,e,D.apply(void 0,[t,0===s.length?{}:{children:1===s.length?s[0]:s}].concat(i)),o)}var te=Symbol("UNSET");function re(e,t){if(!t)return e;for(var r=k({},e),n=0,o=Object.keys(t);n<o.length;n++){var i=o[n],a=e[i],s=t[i];s===te?delete r[i]:(null!=s||"className"===i||"style"===i||i.startsWith("on")&&"function"===typeof a||(s=z),r[i]=Z(i,a,s))}return r}function ne(e){if(!e)return{type:"default",props:{}};if(function(e){return"string"===typeof e||"number"===typeof e||i.isValidElement(e)}(e))return{type:"default",props:{children:e}};if("object"===typeof e)return"as"in e?k({},e,{props:e.props||{},type:"as"}):"render"in e?k({},e,{type:"render"}):"props"in e?k({},e,{props:e.props||{},type:"default"}):(t=Object.keys(e),r=["wrap","wrapChildren"],t.every((function(e){return r.includes(e)}))?k({},e,{props:{},type:"default"}):{type:"default",props:e});if("function"===typeof e)return{type:"render",render:e};var t,r;throw new Error("Unexpected override: "+e)}function oe(e,t){for(var r={},n=0,o=Array.from(new Set([].concat(Object.keys(e),Object.keys(t))));n<o.length;n++){var i=o[n];r[i]=ie(e[i],t[i])}return r}function ie(e,t){var r,n;if(!e)return t;if(!t)return e;var o=ne(e),i=ne(t),a=P.apply(void 0,[o.wrap,i.wrap].filter(L)),s=P.apply(void 0,[o.wrapChildren,i.wrapChildren].filter(L)),u=re(null!=(r=o.props)?r:{},i.props);if("render"===i.type)return{render:i.render,props:u,wrap:a,wrapChildren:s};if("render"===o.type)return{render:o.render,props:u,wrap:a,wrapChildren:s};var c=null!=(n="as"===i.type?i.as:void 0)?n:"as"===o.type?o.as:void 0;return k({props:u,wrap:a,wrapChildren:s},c?{as:c}:{})}function ae(e,t){var r,n,o,i,a,s,u,c,l=t.name,f=t.descendantNames,d=t.internalVariantPropNames,p=t.internalArgPropNames,h=["variants","args","overrides"],v=(i=T.apply(void 0,[I.apply(void 0,[e].concat(d))].concat(h)),a=null!=(r=e.variants)?r:{},k({},i,a)),y=(s=T.apply(void 0,[I.apply(void 0,[e].concat(p))].concat(h)),u=null!=(n=e.args)?n:{},k({},s,u)),m=oe(T.apply(void 0,[I.apply(void 0,[e].concat(f))].concat(p,d,h)),null!=(o=e.overrides)?o:{}),g=T.apply(void 0,[e,"variants","args","overrides"].concat(f,d,p));Object.keys(g).length>0&&(m=oe(m,((c={})[l]={props:g},c)));return{variants:v,args:y,overrides:m}}var se={};function ue(e){return Object.entries(e).filter((function(e){var t=e[1];return"PLEASE_RENDER_INSIDE_PROVIDER"===t})).forEach((function(t){var r=t[0];e[r]=void 0,se[r]})),e}function ce(e){if("nextjs"===e.platform&&e.href){var t=["href","replace","scroll","shallow","passHref","prefetch","locale"];return i.createElement(e.component,I.apply(void 0,[e].concat(t)),i.createElement("a",Object.assign({},T.apply(void 0,[e,"component","platform"].concat(t)))))}return"gatsby"===e.platform&&(r=e.href,/^\/(?!\/)/.test(r))?i.createElement(e.component,k({},T(e,"component","platform","href"),{to:e.href})):i.createElement("a",Object.assign({},T(e,"component","platform")));var r}function le(e){var t=e.as,r=e.defaultContents,n=e.value,o=x(e,["as","defaultContents","value"]),a=void 0===n?r:n;if(!a||Array.isArray(a)&&0===a.length)return null;var s=fe(a);return s&&(a=(0,i.createElement)("div",{className:"__wab_slot-string-wrapper"},s)),0===Object.keys(o).filter((function(e){return!!o[e]})).length?(0,i.createElement)(i.Fragment,null,a):(0,i.createElement)(t||"div",D({className:"__wab_slot"},o),a)}function fe(e){return(0,i.isValidElement)(e)&&e.type===i.Fragment?fe(e.props.children):"string"===typeof e?e:Array.isArray(e)&&1===e.length&&"string"===typeof e[0]?e[0]:void 0}var de=[],pe={};function he(){return F?Object.entries(pe).filter((function(e){var t=e[1];return window.matchMedia(t).matches})).map((function(e){return e[0]})):[]}var ve=void 0;function ye(e,t){return Object.assign(pe,t),ve=void 0,function(){var t=(0,i.useState)()[1],r=(0,i.useRef)(ve||[]);return N((function(){var e=function(){ve&&r.current.join("")!==ve.join("")&&(r.current=ve,t({}))};return de.push(e),void 0===ve&&(ve=he()),e(),function(){de.splice(de.indexOf(e),1)}}),[]),e?ve||[]:ve?ve[ve.length-1]:void 0}}F&&window.addEventListener("resize",(function(){var e=he();ve&&e.join("")===ve.join("")||(ve=e,s.unstable_batchedUpdates((function(){return de.forEach((function(e){return e()}))})))}));var me=o()},178:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var s in r)n.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},110:function(e,t,r){"use strict";r.d(t,{ZP:function(){return n.ZP},ih:function(){return n.ih}});var n=r(1072)},2167:function(e,t,r){"use strict";var n=r(3848),o=r(9448);t.default=void 0;var i=o(r(7294)),a=r(9414),s=r(4651),u=r(7426),c={};function l(e,t,r,n){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,o=(0,s.useRouter)(),f=i.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),r=n(t,2),i=r[0],s=r[1];return{href:i,as:e.as?(0,a.resolveHref)(o,e.as):s||i}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,y=e.shallow,m=e.scroll,g=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var b=(t=i.Children.only(h))&&"object"===typeof t&&t.ref,w=(0,u.useIntersection)({rootMargin:"200px"}),_=n(w,2),S=_[0],j=_[1],O=i.default.useCallback((function(e){S(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,S]);(0,i.useEffect)((function(){var e=j&&r&&(0,a.isLocalURL)(d),t="undefined"!==typeof g?g:o&&o.locale,n=c[d+"%"+p+(t?"%"+t:"")];e&&!n&&l(o,d,p,{locale:t})}),[p,d,j,g,r,o]);var E={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,i,s,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(r))&&(e.preventDefault(),null==s&&n.indexOf("#")>=0&&(s=!1),t[o?"replace":"push"](r,n,{shallow:i,locale:u,scroll:s}))}(e,o,d,p,v,y,m,g)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof g?g:o&&o.locale,A=o&&o.isLocaleDomain&&(0,a.getDomainLocale)(p,C,o&&o.locales,o&&o.domainLocales);E.href=A||(0,a.addBasePath)((0,a.addLocale)(p,C,o&&o.defaultLocale))}return i.default.cloneElement(t,E)};t.default=f},7426:function(e,t,r){"use strict";var n=r(3848);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!a,u=(0,o.useRef)(),c=(0,o.useState)(!1),l=n(c,2),f=l[0],d=l[1],p=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),r||f||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=s.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,i=n.observer,a=n.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),s.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return(0,o.useEffect)((function(){if(!a&&!f){var e=(0,i.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=r(7294),i=r(3447),a="undefined"!==typeof IntersectionObserver;var s=new Map},3398:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},6393:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var n,o=(n=r(7294))&&n.__esModule?n:{default:n},i=r(3398);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,i=e.hasQuery,a=void 0!==i&&i;return r||o&&a}},2775:function(e,t,r){"use strict";var n=r(1682);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var i,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(7294)),s=(i=r(3244))&&i.__esModule?i:{default:i},u=r(3398),c=r(1165),l=r(6393);function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var r=a.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?i=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var u=0,c=h.length;u<c;u++){var l=h[u];if(o.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?i=!1:r.add(l);else{var f=o.props[l],d=n[l]||new Set;"name"===l&&a||!d.has(f)?(d.add(f),n[l]=d):i=!1}}}return i}}()).reverse().map((function(e,r){var i=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,a.default.cloneElement(e,s)}return a.default.cloneElement(e,{key:i})}))}var y=function(e){var t=e.children,r=(0,a.useContext)(u.AmpStateContext),n=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(s.default,{reduceComponentsToState:v,headManager:n,inAmpMode:(0,l.isInAmpMode)(r)},t)};t.default=y},3244:function(e,t,r){"use strict";var n=r(3115),o=r(2553),i=r(2012),a=(r(450),r(9807)),s=r(7690),u=r(9828);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}t.__esModule=!0,t.default=void 0;var l=r(7294),f=function(e){a(r,e);var t=c(r);function r(e){var i;return o(this,r),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(n(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);t.default=f},8797:function(){},9008:function(e,t,r){e.exports=r(2775)},1664:function(e,t,r){e.exports=r(2167)},8164:function(e,t,r){var n=r(4360);e.exports=function(e){if(Array.isArray(e))return n(e)}},1682:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},5093:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:function(){return n}})},8347:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,{Z:function(){return n}})},4121:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(355);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}}(e,t)||(0,n.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},9999:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(5093);var o=r(355);function i(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},355:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(5093);function o(e,t){if(e){if("string"===typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,r){var n=r(8164),o=r(7381),i=r(3585),a=r(5725);e.exports=function(e){return n(e)||o(e)||i(e)||a()}},4155:function(e){var t,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var s,u=[],c=!1,l=-1;function f(){c&&s&&(c=!1,s.length?u=s.concat(u):l=-1,u.length&&d())}function d(){if(!c){var e=a(f);c=!0;for(var t=u.length;t;){for(s=u,u=[];++l<t;)s&&s[l].run();l=-1,t=u.length}s=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new p(e,t)),1!==u.length||c||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=h,n.addListener=h,n.once=h,n.off=h,n.removeListener=h,n.removeAllListeners=h,n.emit=h,n.prependListener=h,n.prependOnceListener=h,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},9887:function(e){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},4287:function(e,t,r){"use strict";var n=r(4155);function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var i="undefined"!==typeof n&&n.env&&!0,a=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(e){var t=void 0===e?{}:e,r=t.name,n=void 0===r?"stylesheet":r,o=t.optimizeForSpeed,s=void 0===o?i:o,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;u(a(n),"`name` must be a string"),this._name=n,this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}",u("boolean"===typeof s,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=s,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,r,n,s=e.prototype;return s.setOptimizeForSpeed=function(e){u("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),u(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},s.isOptimizeForSpeed=function(){return this._optimizeForSpeed},s.inject=function(){var e=this;if(u(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(i||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},s.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},s.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},s.insertRule=function(e,t){if(u(a(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(o){return i||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var n=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,n))}return this._rulesCount++},s.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(o){i||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var n=this._tags[e];u(n,"old rule at index `"+e+"` not found"),n.textContent=t}return e},s.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];u(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},s.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},s.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},s.makeStyleTag=function(e,t,r){t&&u(a(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return r?o.insertBefore(n,r):o.appendChild(n),n},t=e,(r=[{key:"length",get:function(){return this._rulesCount}}])&&o(t.prototype,r),n&&o(t,n),e}();function u(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=s},7884:function(e,t,r){"use strict";t.default=void 0;var n,o=r(7294);var i=new(((n=r(8122))&&n.__esModule?n:{default:n}).default),a=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).prevProps={},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return i.computeId(t,r)})).join(" ")};var o=n.prototype;return o.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},o.componentWillUnmount=function(){i.remove(this.props)},o.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},n}(o.Component);t.default=a},8122:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=i(r(9887)),o=i(r(4287));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,i=t.optimizeForSpeed,a=void 0!==i&&i,s=t.isBrowser,u=void 0===s?"undefined"!==typeof window:s;this._sheet=n||new o.default({name:"styled-jsx",optimizeForSpeed:a}),this._sheet.inject(),n&&"boolean"===typeof a&&(this._sheet.setOptimizeForSpeed(a),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,o=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var i=o.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=i,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var o=String(r),i=t+o;return e[i]||(e[i]="jsx-"+(0,n.default)(t+"-"+o)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var o=r+n;return t[o]||(t[o]=n.replace(e,r)),t[o]}},t.getIdAndRules=function(e){var t=this,r=e.children,n=e.dynamic,o=e.id;if(n){var i=this.computeId(o,n);return{styleId:i,rules:Array.isArray(r)?r.map((function(e){return t.computeSelector(i,e)})):[this.computeSelector(i,r)]}}return{styleId:this.computeId(o),rules:Array.isArray(r)?r:[r]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=a},5988:function(e,t,r){e.exports=r(7884)}}]);