(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode(':root{--swiper-theme-color: #007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function, initial);box-sizing:content-box}.swiper-android .swiper-slide,.swiper-ios .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-slide,.swiper-3d .swiper-cube-shadow{transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-slides-offset-before);scroll-margin-inline-start:var(--swiper-slides-offset-before)}.swiper-css-mode.swiper-horizontal>.swiper-wrapper>.swiper-slide:last-child{margin-inline-end:var(--swiper-slides-offset-after)}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-slides-offset-before);scroll-margin-block-start:var(--swiper-slides-offset-before)}.swiper-css-mode.swiper-vertical>.swiper-wrapper>.swiper-slide:last-child{margin-block-end:var(--swiper-slides-offset-after)}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-slide-shadow-bottom{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:#00000026}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,#00000080,#0000)}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color, var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}:is(.swiper:not(.swiper-watch-progress),.swiper-watch-progress .swiper-slide-visible) .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color: #fff}.swiper-lazy-preloader-black{--swiper-preloader-color: #000}@keyframes swiper-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.swiper-virtual .swiper-slide{-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper:after{content:"";position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper:after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper:after{width:1px;height:var(--swiper-virtual-size)}:root{--swiper-navigation-size: 44px}.swiper-button-prev,.swiper-button-next{position:absolute;width:var(--swiper-navigation-size);height:var(--swiper-navigation-size);z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color, var(--swiper-theme-color))}:is(.swiper-button-prev,.swiper-button-next).swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}:is(.swiper-button-prev,.swiper-button-next).swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled :is(.swiper-button-prev,.swiper-button-next){display:none!important}:is(.swiper-button-prev,.swiper-button-next) ::slotted(svg),:is(.swiper-button-prev,.swiper-button-next) svg{width:100%;height:100%;object-fit:contain;transform-origin:center;fill:currentColor;pointer-events:none}.swiper-button-lock{display:none}.swiper-button-prev,.swiper-button-next{top:var(--swiper-navigation-top-offset, 50%);margin-top:calc(0px - (var(--swiper-navigation-size) / 2))}.swiper-button-prev{left:var(--swiper-navigation-sides-offset, 4px);right:auto}.swiper-button-prev ::slotted(.swiper-navigation-icon),.swiper-button-prev .swiper-navigation-icon{transform:rotate(180deg)}.swiper-button-next{right:var(--swiper-navigation-sides-offset, 4px);left:auto}.swiper-horizontal .swiper-button-prev,.swiper-horizontal .swiper-button-next,.swiper-horizontal~.swiper-button-prev,.swiper-horizontal~.swiper-button-next{top:var(--swiper-navigation-top-offset, 50%);margin-top:calc(0px - (var(--swiper-navigation-size) / 2));margin-left:0}.swiper-horizontal .swiper-button-prev,.swiper-horizontal~.swiper-button-prev,.swiper-horizontal.swiper-rtl .swiper-button-next,.swiper-horizontal.swiper-rtl~.swiper-button-next{left:var(--swiper-navigation-sides-offset, 4px);right:auto}.swiper-horizontal .swiper-button-next,.swiper-horizontal~.swiper-button-next,.swiper-horizontal.swiper-rtl .swiper-button-prev,.swiper-horizontal.swiper-rtl~.swiper-button-prev{right:var(--swiper-navigation-sides-offset, 4px);left:auto}:is(.swiper-horizontal .swiper-button-prev,.swiper-horizontal~.swiper-button-prev,.swiper-horizontal.swiper-rtl .swiper-button-next,.swiper-horizontal.swiper-rtl~.swiper-button-next) ::slotted(.swiper-navigation-icon),:is(.swiper-horizontal .swiper-button-prev,.swiper-horizontal~.swiper-button-prev,.swiper-horizontal.swiper-rtl .swiper-button-next,.swiper-horizontal.swiper-rtl~.swiper-button-next) .swiper-navigation-icon{transform:rotate(180deg)}:is(.swiper-horizontal.swiper-rtl .swiper-button-prev,.swiper-horizontal.swiper-rtl~.swiper-button-prev) ::slotted(.swiper-navigation-icon),:is(.swiper-horizontal.swiper-rtl .swiper-button-prev,.swiper-horizontal.swiper-rtl~.swiper-button-prev) .swiper-navigation-icon{transform:rotate(0)}.swiper-vertical .swiper-button-prev,.swiper-vertical .swiper-button-next,.swiper-vertical~.swiper-button-prev,.swiper-vertical~.swiper-button-next{left:var(--swiper-navigation-top-offset, 50%);right:auto;margin-left:calc(0px - (var(--swiper-navigation-size) / 2));margin-top:0}.swiper-vertical .swiper-button-prev,.swiper-vertical~.swiper-button-prev{top:var(--swiper-navigation-sides-offset, 4px);bottom:auto}:is(.swiper-vertical .swiper-button-prev,.swiper-vertical~.swiper-button-prev) ::slotted(.swiper-navigation-icon),:is(.swiper-vertical .swiper-button-prev,.swiper-vertical~.swiper-button-prev) .swiper-navigation-icon{transform:rotate(-90deg)}.swiper-vertical .swiper-button-next,.swiper-vertical~.swiper-button-next{bottom:var(--swiper-navigation-sides-offset, 4px);top:auto}:is(.swiper-vertical .swiper-button-next,.swiper-vertical~.swiper-button-next) ::slotted(.swiper-navigation-icon),:is(.swiper-vertical .swiper-button-next,.swiper-vertical~.swiper-button-next) .swiper-navigation-icon{transform:rotate(90deg)}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-pagination-fraction,.swiper-pagination-custom,.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal{bottom:var(--swiper-pagination-bottom, 8px);top:var(--swiper-pagination-top, auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));height:var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius, 50%);background:var(--swiper-pagination-bullet-inactive-color, #000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color, var(--swiper-theme-color))}.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets{right:var(--swiper-pagination-right, 8px);left:var(--swiper-pagination-left, auto);top:50%;transform:translate3d(0,-50%,0)}:is(.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets) .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap, 6px) 0;display:block}:is(.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets).swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}:is(.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets).swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}:is(.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-horizontal.swiper-pagination-bullets) .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap, 4px)}:is(.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-horizontal.swiper-pagination-bullets).swiper-pagination-bullets-dynamic{left:50%;transform:translate(-50%);white-space:nowrap}:is(.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-horizontal.swiper-pagination-bullets).swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color, inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, .25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color, var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size, 4px);left:0;top:0}.swiper-vertical>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite{width:var(--swiper-pagination-progressbar-size, 4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius, 10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color, rgba(0, 0, 0, .1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset, 1%);bottom:var(--swiper-scrollbar-bottom, 4px);top:var(--swiper-scrollbar-top, auto);z-index:50;height:var(--swiper-scrollbar-size, 4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%))}.swiper-vertical>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-vertical{position:absolute;left:var(--swiper-scrollbar-left, auto);right:var(--swiper-scrollbar-right, 4px);top:var(--swiper-scrollbar-sides-offset, 1%);z-index:50;width:var(--swiper-scrollbar-size, 4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color, rgba(0, 0, 0, .5));border-radius:var(--swiper-scrollbar-border-radius, 10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>img,.swiper-zoom-container>svg,.swiper-zoom-container>canvas{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move;touch-action:none}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-fade .swiper-slide-active,.swiper-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper.swiper-cube{overflow:visible}.swiper-cube .swiper-slide{pointer-events:none;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-cube.swiper-rtl .swiper-slide{transform-origin:100% 0}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-next,.swiper-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:"";background:#000;position:absolute;inset:0;filter:blur(50px)}.swiper-cube .swiper-slide-next+.swiper-slide{pointer-events:auto;visibility:visible}.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-top,.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-bottom,.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-left,.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-right{z-index:0;backface-visibility:hidden}.swiper.swiper-flip{overflow:visible}.swiper-flip .swiper-slide{pointer-events:none;backface-visibility:hidden;z-index:1}.swiper-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-flip .swiper-slide-active,.swiper-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-top,.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-bottom,.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-left,.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-right{z-index:0;backface-visibility:hidden}.swiper-creative .swiper-slide{backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper.swiper-cards{overflow:visible}.swiper-cards .swiper-slide{transform-origin:center bottom;backface-visibility:hidden;overflow:hidden}')),document.head.appendChild(i)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
function fe(e = "") {
  return e.trim().split(" ").filter((t) => !!t.trim());
}
function Ot(e) {
  Object.keys(e).forEach((t) => {
    try {
      e[t] = null;
    } catch {
    }
    try {
      delete e[t];
    } catch {
    }
  });
}
function Ee(e, t = 0) {
  return setTimeout(e, t);
}
function ae() {
  return Date.now();
}
function Dt(e) {
  return window.getComputedStyle(e, null);
}
function je(e, t = "x") {
  const s = Dt(e), a = s.transform || s.webkitTransform;
  if (!a || a === "none")
    return 0;
  const n = new DOMMatrixReadOnly(a);
  return t === "x" ? n.m41 : n.m42;
}
function _e(e) {
  return typeof e == "object" && e !== null && !!e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object";
}
function Nt(e) {
  return typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : !!e && typeof e == "object" && (e.nodeType === 1 || e.nodeType === 11);
}
function se(e, ...t) {
  const s = Object(e);
  for (let a = 0; a < t.length; a += 1) {
    const n = t[a];
    if (n == null || Nt(n))
      continue;
    const i = n, u = Object.keys(Object(i));
    for (let d = 0, r = u.length; d < r; d += 1) {
      const p = u[d];
      if (p === "__proto__" || p === "constructor" || p === "prototype")
        continue;
      const c = Object.getOwnPropertyDescriptor(i, p);
      if (!c || !c.enumerable)
        continue;
      const f = i[p];
      _e(s[p]) && _e(f) ? f.__swiper__ ? s[p] = f : se(s[p], f) : !_e(s[p]) && _e(f) ? (s[p] = {}, f.__swiper__ ? s[p] = f : se(s[p], f)) : s[p] = f;
    }
  }
  return s;
}
function pe(e, t, s) {
  e.style.setProperty(t, s);
}
function he(e) {
  const t = e.querySelector(".swiper-slide-transform");
  if (t)
    return t;
  if (e.shadowRoot) {
    const s = e.shadowRoot.querySelector(".swiper-slide-transform");
    if (s)
      return s;
  }
  return e;
}
function Q(e, t = "") {
  const s = [...e.children];
  return e instanceof HTMLSlotElement && s.push(...e.assignedElements()), t ? s.filter((a) => a.matches(t)) : s;
}
function zt(e, t) {
  const s = [t];
  for (; s.length > 0; ) {
    const a = s.shift();
    if (e === a)
      return !0;
    s.push(...a.children, ...a.shadowRoot ? a.shadowRoot.children : [], ...a.assignedElements ? a.assignedElements() : []);
  }
  return !1;
}
function kt(e, t) {
  let s = t.contains(e);
  return !s && t instanceof HTMLSlotElement && (s = [...t.assignedElements()].includes(e), s || (s = zt(e, t))), s;
}
function Ne(e) {
  try {
    console.warn(e);
  } catch {
  }
}
function ne(e, t = []) {
  const s = document.createElement(e);
  return s.classList.add(...Array.isArray(t) ? t : fe(t)), s;
}
function ze(e) {
  const t = e.getBoundingClientRect();
  return {
    top: t.top - (e.clientTop || 0),
    left: t.left - (e.clientLeft || 0)
  };
}
function $t(e, t) {
  const s = [];
  let a = e.previousElementSibling;
  for (; a; )
    (!t || a.matches(t)) && s.push(a), a = a.previousElementSibling;
  return s;
}
function Gt(e, t) {
  const s = [];
  let a = e.nextElementSibling;
  for (; a; )
    (!t || a.matches(t)) && s.push(a), a = a.nextElementSibling;
  return s;
}
function ue(e, t) {
  return window.getComputedStyle(e, null).getPropertyValue(t);
}
function Le(e) {
  if (!(!e || !e.parentNode))
    return [...e.parentNode.children].indexOf(e);
}
function me(e, t) {
  const s = [];
  let a = e.parentElement;
  for (; a; )
    (!t || a.matches(t)) && s.push(a), a = a.parentElement;
  return s;
}
function xe(e, t) {
  t && e.addEventListener("transitionend", function s(a) {
    a.target === e && (e.removeEventListener("transitionend", s), t.call(e, a));
  });
}
function Ke(e, t, s) {
  {
    const a = window.getComputedStyle(e, null);
    return e[t === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(a.getPropertyValue(t === "width" ? "margin-right" : "margin-top")) + parseFloat(a.getPropertyValue(t === "width" ? "margin-left" : "margin-bottom"));
  }
}
function U(e) {
  return (Array.isArray(e) ? e : [e]).filter((t) => !!t);
}
function ke(e) {
  return (t) => Math.abs(t) > 0 && e.browser && e.browser.need3dFix && Math.abs(t) % 90 === 0 ? t + 1e-3 : t;
}
function re(e, t = "") {
  const s = globalThis.trustedTypes;
  typeof s < "u" ? e.innerHTML = s.createPolicy("html", { createHTML: (a) => a }).createHTML(t) : e.innerHTML = t;
}
let Ye;
function Bt() {
  return typeof window > "u" ? { touch: !1 } : {
    touch: "ontouchstart" in window || navigator.maxTouchPoints > 0
  };
}
function ht() {
  return Ye || (Ye = Bt()), Ye;
}
let Fe;
function Ht({ userAgent: e } = {}) {
  if (typeof window > "u")
    return { ios: !1, android: !1 };
  const t = ht(), s = navigator.platform, a = e || navigator.userAgent, n = { ios: !1, android: !1 }, i = /(Android);?[\s/]+([\d.]+)?/.test(a), u = /(iPhone\sOS|iOS|iPod)/.test(a), d = /iPad/.test(a), r = s === "MacIntel" && t.touch && navigator.maxTouchPoints > 1, p = d || r;
  return i && !(s === "Win32") && (n.os = "android", n.android = !0), (p || u) && (n.os = "ios", n.ios = !0), n;
}
function gt(e = {}) {
  return Fe || (Fe = Ht(e)), Fe;
}
let We;
function Vt() {
  if (typeof window > "u")
    return { isSafari: !1, isWebView: !1, need3dFix: !1 };
  const e = gt(), t = navigator.userAgent, s = t.toLowerCase(), a = s.includes("safari") && !s.includes("chrome") && !s.includes("android"), n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t), i = a || n && e.ios;
  return { isSafari: a, isWebView: n, need3dFix: i };
}
function Tt() {
  return We || (We = Vt()), We;
}
const Ze = (e, t) => {
  if (!e || e.destroyed || !e.params || !e.params.lazyPreload)
    return;
  const s = () => e.isElement ? "swiper-slide" : `.${e.params.slideClass}`, a = t.closest(s());
  if (a) {
    let n = a.querySelector(`.${e.params.lazyPreloaderClass}`);
    !n && e.isElement && (a.shadowRoot ? n = a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
      if (a.shadowRoot) {
        const i = a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`);
        i && !i.lazyPreloaderManaged && i.remove();
      }
    })), n && !n.lazyPreloaderManaged && n.remove();
  }
}, Xe = (e, t) => {
  if (!e.slides[t])
    return;
  const s = e.slides[t].querySelector('[loading="lazy"]');
  s && s.removeAttribute("loading");
}, vt = (e) => {
  if (!e || e.destroyed || !e.params || !e.params.lazyPreload)
    return;
  let t = e.params.lazyPreloadPrevNext;
  const s = e.slides.length;
  if (!s || !t || t < 0)
    return;
  t = Math.min(t, s);
  const a = e.params.slidesPerView === "auto" ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView), n = e.activeIndex;
  if (e.params.grid && (e.params.grid.rows ?? 1) > 1) {
    const u = n, d = [u - t];
    d.push(...Array.from({ length: t }).map((r, p) => u + a + p)), e.slides.forEach((r, p) => {
      r.column !== void 0 && d.includes(r.column) && Xe(e, p);
    });
    return;
  }
  const i = n + a - 1;
  if (e.params.rewind || e.params.loop)
    for (let u = n - t; u <= i + t; u += 1) {
      const d = (u % s + s) % s;
      (d < n || d > i) && Xe(e, d);
    }
  else
    for (let u = Math.max(n - t, 0); u <= Math.min(i + t, s - 1); u += 1)
      u !== n && (u > i || u < n) && Xe(e, u);
};
function Yt(e, t = "window", s) {
  if (!e || t === "container" && !s)
    return;
  let a = !1;
  const n = t === "window" ? window.innerHeight : s.clientHeight, i = Object.keys(e).map((u) => {
    if (typeof u == "string" && u.indexOf("@") === 0) {
      const d = parseFloat(u.substr(1));
      return { value: n * d, point: u };
    }
    return { value: u, point: u };
  });
  i.sort((u, d) => parseInt(String(u.value), 10) - parseInt(String(d.value), 10));
  for (let u = 0; u < i.length; u += 1) {
    const { point: d, value: r } = i[u];
    t === "window" ? window.matchMedia(`(min-width: ${r}px)`).matches && (a = d) : r <= s.clientWidth && (a = d);
  }
  return a || "max";
}
const nt = (e, t) => !!(e.grid && t.grid && t.grid.rows > 1);
function Ft() {
  const e = this, { realIndex: t, initialized: s, params: a, el: n } = e, i = a.breakpoints;
  if (!i || i && Object.keys(i).length === 0)
    return;
  const u = a.breakpointsBase === "window" || !a.breakpointsBase ? a.breakpointsBase : "container", d = ["window", "container"].includes(a.breakpointsBase) || !a.breakpointsBase ? e.el : document.querySelector(a.breakpointsBase), r = e.getBreakpoint(i, u, d);
  if (!r || e.currentBreakpoint === r)
    return;
  const p = i, f = (r in p ? p[r] : void 0) || e.originalParams, T = nt(e, a), o = nt(e, f), l = e.params.grabCursor, g = f.grabCursor, S = a.enabled;
  T && !o ? (n.classList.remove(`${a.containerModifierClass}grid`, `${a.containerModifierClass}grid-column`), e.emitContainerClasses()) : !T && o && (n.classList.add(`${a.containerModifierClass}grid`), (f.grid.fill && f.grid.fill === "column" || !f.grid.fill && a.grid.fill === "column") && n.classList.add(`${a.containerModifierClass}grid-column`), e.emitContainerClasses()), l && !g ? e.unsetGrabCursor() : !l && g && e.setGrabCursor();
  const E = (A, w) => A[w];
  ["navigation", "pagination", "scrollbar"].forEach((A) => {
    const w = E(f, A);
    if (typeof w > "u")
      return;
    const x = E(a, A), k = typeof x == "object" && x !== null && x.enabled, b = typeof w == "object" && w !== null && w.enabled, L = e[A];
    k && !b && L?.disable?.(), !k && b && L?.enable?.();
  });
  const h = f.direction && f.direction !== a.direction, m = a.loop && (f.slidesPerView !== a.slidesPerView || h), v = a.loop;
  h && s && e.changeDirection(), se(e.params, f);
  const y = e.params.enabled, C = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev
  }), S && !y ? e.disable() : !S && y && e.enable(), e.currentBreakpoint = r, e.emit("_beforeBreakpoint", f), s && (m ? (e.loopDestroy(), e.updateSlides(), e.loopCreate(t)) : !v && C ? (e.updateSlides(), e.loopCreate(t)) : v && !C && e.loopDestroy()), e.emit("breakpoint", f);
}
var Wt = { setBreakpoint: Ft, getBreakpoint: Yt };
function Xt() {
  const e = this, { isLocked: t, params: s } = e, { slidesOffsetBefore: a } = s;
  if (a) {
    const n = e.slides.length - 1, i = e.slidesGrid[n] + e.slidesSizesGrid[n] + a * 2;
    e.isLocked = e.size > i;
  } else
    e.isLocked = e.snapGrid.length === 1;
  s.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked), s.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var Ut = { checkOverflow: Xt };
function qt(e, t) {
  const s = [];
  return e.forEach((a) => {
    typeof a == "object" ? Object.keys(a).forEach((n) => {
      a[n] && s.push(t + n);
    }) : typeof a == "string" && s.push(t + a);
  }), s;
}
function jt() {
  const e = this, { classNames: t, params: s, rtl: a, el: n, device: i } = e, u = qt([
    "initialized",
    s.direction,
    { "free-mode": e.params.freeMode && s.freeMode.enabled },
    { autoheight: s.autoHeight },
    { rtl: a },
    { grid: s.grid && s.grid.rows > 1 },
    { "grid-column": s.grid && s.grid.rows > 1 && s.grid.fill === "column" },
    { android: i.android },
    { ios: i.ios },
    { "css-mode": s.cssMode },
    { centered: s.cssMode && s.centeredSlides },
    { "watch-progress": s.watchSlidesProgress }
  ], s.containerModifierClass);
  t.push(...u), n.classList.add(...t), e.emitContainerClasses();
}
function Kt() {
  const e = this, { el: t, classNames: s } = e;
  !t || typeof t == "string" || (t.classList.remove(...s), e.emitContainerClasses());
}
var Zt = { addClasses: jt, removeClasses: Kt };
const St = {
  init: !0,
  direction: "horizontal",
  oneWayMovement: !1,
  swiperElementNodeName: "SWIPER-CONTAINER",
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: !1,
  updateOnWindowResize: !0,
  resizeObserver: !0,
  nested: !1,
  createElements: !1,
  eventsPrefix: "swiper",
  enabled: !0,
  focusableElements: "input, select, option, textarea, button, video, label",
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: !1,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: !1,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: !1,
  // Set wrapper width
  setWrapperSize: !1,
  // Virtual Translate
  virtualTranslate: !1,
  // Effects
  effect: "slide",
  // Breakpoints
  breakpoints: void 0,
  breakpointsBase: "window",
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: !1,
  centeredSlides: !1,
  centeredSlidesBounds: !1,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  normalizeSlideIndex: !0,
  centerInsufficientSlides: !1,
  snapToSlideEdge: !1,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: !0,
  // Round length
  roundLengths: !1,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: !0,
  shortSwipes: !0,
  longSwipes: !0,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: !0,
  allowTouchMove: !0,
  threshold: 5,
  touchMoveStopPropagation: !1,
  touchStartPreventDefault: !0,
  touchStartForcePreventDefault: !1,
  touchReleaseOnEdges: !1,
  // Unique Navigation Elements
  uniqueNavElements: !0,
  // Resistance
  resistance: !0,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: !1,
  // Cursor
  grabCursor: !1,
  // Clicks
  preventClicks: !0,
  preventClicksPropagation: !0,
  slideToClickedSlide: !1,
  // loop
  loop: !1,
  loopAddBlankSlides: !0,
  loopAdditionalSlides: 0,
  loopPreventsSliding: !0,
  // rewind
  rewind: !1,
  // Swiping/no swiping
  allowSlidePrev: !0,
  allowSlideNext: !0,
  swipeHandler: null,
  noSwiping: !0,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: !0,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: "swiper-",
  slideClass: "swiper-slide",
  slideBlankClass: "swiper-slide-blank",
  slideActiveClass: "swiper-slide-active",
  slideVisibleClass: "swiper-slide-visible",
  slideFullyVisibleClass: "swiper-slide-fully-visible",
  slideNextClass: "swiper-slide-next",
  slidePrevClass: "swiper-slide-prev",
  wrapperClass: "swiper-wrapper",
  lazyPreload: !0,
  lazyPreloaderClass: "swiper-lazy-preloader",
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: !0,
  // Internals
  _emitClasses: !1
};
var Qt = {
  on(e, t, s) {
    const a = this;
    if (!a.eventsListeners || a.destroyed || typeof t != "function")
      return a;
    const n = s ? "unshift" : "push";
    return e.split(" ").forEach((i) => {
      a.eventsListeners[i] || (a.eventsListeners[i] = []), a.eventsListeners[i][n](t);
    }), a;
  },
  once(e, t, s) {
    const a = this;
    if (!a.eventsListeners || a.destroyed || typeof t != "function")
      return a;
    const n = function(...u) {
      a.off(e, n), n.__emitterProxy && delete n.__emitterProxy, t.apply(a, u);
    };
    return n.__emitterProxy = t, a.on(e, n, s);
  },
  onAny(e, t) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof e != "function")
      return s;
    const a = t ? "unshift" : "push";
    return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners)
      return t;
    const s = t.eventsAnyListeners.indexOf(e);
    return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
  },
  off(e, t) {
    const s = this;
    return !s.eventsListeners || s.destroyed || !s.eventsListeners || e.split(" ").forEach((a) => {
      typeof t > "u" ? s.eventsListeners[a] = [] : s.eventsListeners[a] && s.eventsListeners[a].forEach((n, i) => {
        (n === t || n.__emitterProxy && n.__emitterProxy === t) && s.eventsListeners[a].splice(i, 1);
      });
    }), s;
  },
  emit(...e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsListeners)
      return t;
    let s, a, n;
    if (typeof e[0] == "string" || Array.isArray(e[0]))
      s = e[0], a = e.slice(1, e.length), n = t;
    else {
      const u = e[0];
      s = u.events, a = u.data ?? [], n = u.context || t;
    }
    return a.unshift(n), (Array.isArray(s) ? s : s.split(" ")).forEach((u) => {
      t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((d) => {
        d.apply(n, [u, ...a]);
      }), t.eventsListeners && t.eventsListeners[u] && t.eventsListeners[u].forEach((d) => {
        d.apply(n, a);
      });
    }), t;
  }
};
function Jt(e) {
  const t = this;
  t.destroyed || t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
}
function es() {
  const e = this;
  e.destroyed || e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
function ts(e) {
  const t = this;
  t.destroyed || (Ze(t, e.target), !(e.type === "error" || t.params.cssMode || t.params.slidesPerView !== "auto" && !t.params.autoHeight) && t.update());
}
function ss() {
  const e = this, { params: t, el: s } = e;
  if (s && s.offsetWidth === 0)
    return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: a, allowSlidePrev: n, snapGrid: i } = e, u = e.virtual && e.params.virtual?.enabled;
  e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
  const d = u && t.loop;
  if ((t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !d) {
    const r = u ? e.virtual.slides.length : e.slides.length;
    e.slideTo(r - 1, 0, !1, !0);
  } else
    e.params.loop && !u ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
  if (e.autoplay && e.autoplay.running && e.autoplay.paused) {
    const r = e.autoplay;
    clearTimeout(r.resizeTimeout), r.resizeTimeout = setTimeout(() => {
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
    }, 500);
  }
  e.allowSlidePrev = n, e.allowSlideNext = a, e.params.watchOverflow && i !== e.snapGrid && e.checkOverflow();
}
function as() {
  const e = this;
  if (e.destroyed)
    return;
  const { wrapperEl: t, rtlTranslate: s, enabled: a } = e;
  if (!a)
    return;
  e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, e.translate === 0 && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
  let n;
  const i = e.maxTranslate() - e.minTranslate();
  i === 0 ? n = 0 : n = (e.translate - e.minTranslate()) / i, n !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
}
function ns(e) {
  const t = this;
  if (t.destroyed)
    return;
  const s = t.touchEventsData;
  let a = e.originalEvent ?? e;
  if (a.type === "touchend" || a.type === "touchcancel") {
    const y = [...a.changedTouches].find((C) => C.identifier === s.touchId);
    if (!y || y.identifier !== s.touchId)
      return;
  } else if (s.touchId !== null || a.pointerId !== s.pointerId)
    return;
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(a.type) && !(["pointercancel", "contextmenu"].includes(a.type) && (t.browser.isSafari || t.browser.isWebView)))
    return;
  s.pointerId = null, s.touchId = null, s.startEventPath = void 0, s.lastMoveEvent = void 0;
  const { params: i, touches: u, rtlTranslate: d, slidesGrid: r, enabled: p } = t;
  if (!p || !i.simulateTouch && a.pointerType === "mouse")
    return;
  if (s.allowTouchCallbacks && t.emit("touchEnd", a), s.allowTouchCallbacks = !1, !s.isTouched) {
    s.isMoved && i.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, s.startMoving = !1;
    return;
  }
  i.grabCursor && s.isMoved && s.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
  const c = ae(), f = c - s.touchStartTime;
  if (t.allowClick) {
    const v = a.path ?? (a.composedPath && a.composedPath());
    t.updateClickedSlide(v && v[0], v), t.emit("tap click", a), f < 300 && c - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", a);
  }
  if (s.lastClickTime = ae(), Ee(() => {
    t.destroyed || (t.allowClick = !0);
  }), !s.isTouched || !s.isMoved || !t.swipeDirection || u.diff === 0 && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset) {
    s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
    return;
  }
  s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
  let T;
  if (i.followFinger ? T = d ? t.translate : -t.translate : T = -(s.currentTranslate ?? 0), i.cssMode)
    return;
  if (i.freeMode && i.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: T });
    return;
  }
  const o = T >= -t.maxTranslate() && !t.params.loop;
  let l = 0, g = t.slidesSizesGrid[0];
  for (let v = 0; v < r.length; v += v < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
    const y = v < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    typeof r[v + y] < "u" ? (o || T >= r[v] && T < r[v + y]) && (l = v, g = r[v + y] - r[v]) : (o || T >= r[v]) && (l = v, g = r[r.length - 1] - r[r.length - 2]);
  }
  let S = null, E = null;
  i.rewind && (t.isBeginning ? E = i.virtual?.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (S = 0));
  const h = (T - r[l]) / g, m = l < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
  if (f > i.longSwipesMs) {
    if (!i.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" && (h >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? S : l + m) : t.slideTo(l)), t.swipeDirection === "prev" && (h > 1 - i.longSwipesRatio ? t.slideTo(l + m) : E !== null && h < 0 && Math.abs(h) > i.longSwipesRatio ? t.slideTo(E) : t.slideTo(l));
  } else {
    if (!i.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation && (a.target === t.navigation.nextEl || a.target === t.navigation.prevEl) ? a.target === t.navigation.nextEl ? t.slideTo(l + m) : t.slideTo(l) : (t.swipeDirection === "next" && t.slideTo(S !== null ? S : l + m), t.swipeDirection === "prev" && t.slideTo(E !== null ? E : l));
  }
}
function is(e) {
  const t = this;
  if (t.destroyed)
    return;
  const s = t.touchEventsData, { params: a, touches: n, rtlTranslate: i, enabled: u } = t;
  if (!u || !a.simulateTouch && e.pointerType === "mouse")
    return;
  const d = e, r = d.originalEvent ?? d;
  if (r.type === "pointermove" && (s.touchId !== null || r.pointerId !== s.pointerId))
    return;
  let p;
  if (r.type === "touchmove") {
    const A = [...r.changedTouches].find((w) => w.identifier === s.touchId);
    if (!A || A.identifier !== s.touchId)
      return;
    p = A;
  } else
    p = r;
  if (!s.isTouched) {
    s.startMoving && s.isScrolling && t.emit("touchMoveOpposite", r);
    return;
  }
  if (s.lastMoveEvent === r)
    return;
  s.lastMoveEvent = r;
  for (const C of s.startEventPath ?? []) {
    if (C === t.el)
      break;
    const A = C.swiper;
    A && A !== t && !A.destroyed && A.params.nested && A.touchEventsData.isTouched && A.onTouchMove(e);
  }
  const c = p.pageX, f = p.pageY;
  if (r.preventedByNestedSwiper) {
    n.startX = c, n.startY = f;
    return;
  }
  if (!t.allowTouchMove) {
    r.target.matches(s.focusableElements) || (t.allowClick = !1), s.isTouched && (Object.assign(n, {
      startX: c,
      startY: f,
      currentX: c,
      currentY: f
    }), s.touchStartTime = ae());
    return;
  }
  if (a.touchReleaseOnEdges && !a.loop)
    if (t.isVertical()) {
      if (f < n.startY && t.translate <= t.maxTranslate() || f > n.startY && t.translate >= t.minTranslate()) {
        s.isTouched = !1, s.isMoved = !1;
        return;
      }
    } else {
      if (i && (c > n.startX && -t.translate <= t.maxTranslate() || c < n.startX && -t.translate >= t.minTranslate()))
        return;
      if (!i && (c < n.startX && t.translate <= t.maxTranslate() || c > n.startX && t.translate >= t.minTranslate()))
        return;
    }
  if (document.activeElement && document.activeElement.matches(s.focusableElements) && document.activeElement !== r.target && r.pointerType !== "mouse" && document.activeElement.blur(), document.activeElement && r.target === document.activeElement && r.target.matches(s.focusableElements)) {
    s.isMoved = !0, t.allowClick = !1;
    return;
  }
  s.allowTouchCallbacks && t.emit("touchMove", r), n.previousX = n.currentX, n.previousY = n.currentY, n.currentX = c, n.currentY = f;
  const T = n.currentX - n.startX, o = n.currentY - n.startY;
  if (t.params.threshold && Math.sqrt(T ** 2 + o ** 2) < t.params.threshold)
    return;
  if (typeof s.isScrolling > "u") {
    let C;
    t.isHorizontal() && n.currentY === n.startY || t.isVertical() && n.currentX === n.startX ? s.isScrolling = !1 : T * T + o * o >= 25 && (C = Math.atan2(Math.abs(o), Math.abs(T)) * 180 / Math.PI, s.isScrolling = t.isHorizontal() ? C > a.touchAngle : 90 - C > a.touchAngle);
  }
  if (s.isScrolling && t.emit("touchMoveOpposite", r), typeof s.startMoving > "u" && (n.currentX !== n.startX || n.currentY !== n.startY) && (s.startMoving = !0), s.isScrolling || r.type === "touchmove" && s.preventTouchMoveFromPointerMove) {
    s.isTouched = !1;
    return;
  }
  if (!s.startMoving)
    return;
  t.allowClick = !1, !a.cssMode && r.cancelable && r.preventDefault(), a.touchMoveStopPropagation && !a.nested && r.stopPropagation();
  let l = t.isHorizontal() ? T : o, g = t.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
  a.oneWayMovement && (l = Math.abs(l) * (i ? 1 : -1), g = Math.abs(g) * (i ? 1 : -1)), n.diff = l, l *= a.touchRatio, i && (l = -l, g = -g);
  const S = t.touchesDirection;
  t.swipeDirection = l > 0 ? "prev" : "next", t.touchesDirection = g > 0 ? "prev" : "next";
  const E = t.params.loop && !a.cssMode, h = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
  if (!s.isMoved) {
    if (E && h && t.loopFix({ direction: t.swipeDirection }), s.startTranslate = t.getTranslate(), t.setTransition(0), t.animating) {
      const C = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: {
          bySwiperTouchMove: !0
        }
      });
      t.wrapperEl.dispatchEvent(C);
    }
    s.allowMomentumBounce = !1, a.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0), t.emit("sliderFirstMove", r);
  }
  if ((/* @__PURE__ */ new Date()).getTime(), a._loopSwapReset !== !1 && s.isMoved && s.allowThresholdMove && S !== t.touchesDirection && E && h && Math.abs(l) >= 1) {
    Object.assign(n, {
      startX: c,
      startY: f,
      currentX: c,
      currentY: f,
      startTranslate: s.currentTranslate
    }), s.loopSwapReset = !0, s.startTranslate = s.currentTranslate;
    return;
  }
  t.emit("sliderMove", r), s.isMoved = !0;
  const m = s.startTranslate ?? 0;
  s.currentTranslate = l + m;
  let v = !0, y = a.resistanceRatio;
  if (a.touchReleaseOnEdges && (y = 0), l > 0 ? (E && h && s.allowThresholdMove && s.currentTranslate > (a.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] - (a.slidesPerView !== "auto" && t.slides.length - a.slidesPerView >= 2 ? t.slidesSizesGrid[t.activeIndex + 1] + t.params.spaceBetween : 0) - t.params.spaceBetween : t.minTranslate()) && t.loopFix({ direction: "prev", setTranslate: !0, activeSlideIndex: 0 }), s.currentTranslate > t.minTranslate() && (v = !1, a.resistance && (s.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + m + l) ** y))) : l < 0 && (E && h && s.allowThresholdMove && s.currentTranslate < (a.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween + (a.slidesPerView !== "auto" && t.slides.length - a.slidesPerView >= 2 ? t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween : 0) : t.maxTranslate()) && t.loopFix({
    direction: "next",
    setTranslate: !0,
    activeSlideIndex: t.slides.length - (a.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(String(a.slidesPerView))))
  }), s.currentTranslate < t.maxTranslate() && (v = !1, a.resistance && (s.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - m - l) ** y))), v && (r.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === "next" && (s.currentTranslate ?? 0) < m && (s.currentTranslate = m), !t.allowSlidePrev && t.swipeDirection === "prev" && (s.currentTranslate ?? 0) > m && (s.currentTranslate = m), !t.allowSlidePrev && !t.allowSlideNext && (s.currentTranslate = m), a.threshold > 0)
    if (Math.abs(l) > a.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        s.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, s.currentTranslate = s.startTranslate, n.diff = t.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY;
        return;
      }
    } else {
      s.currentTranslate = s.startTranslate;
      return;
    }
  !a.followFinger || a.cssMode || ((a.freeMode && a.freeMode.enabled && t.freeMode || a.watchSlidesProgress) && (t.updateActiveIndex(), t.updateSlidesClasses()), a.freeMode && a.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(), t.updateProgress(s.currentTranslate), t.setTranslate(s.currentTranslate ?? 0));
}
function ls(e, t) {
  function s(a) {
    if (!a || a === document || a === window)
      return null;
    let n = a;
    n.assignedSlot && (n = n.assignedSlot);
    const i = n.closest(e);
    if (!i && !n.getRootNode)
      return null;
    const u = n.getRootNode();
    return i || s(u.host);
  }
  return s(t);
}
function it(e, t, s) {
  const { params: a } = e, n = a.edgeSwipeDetection, i = a.edgeSwipeThreshold;
  return n && (s <= i || s >= window.innerWidth - i) ? n === "prevent" ? (t.preventDefault(), !0) : !1 : !0;
}
function rs(e) {
  const t = this;
  if (t.destroyed)
    return;
  const s = e.originalEvent ?? e, a = t.touchEventsData;
  if (s.type === "pointerdown") {
    const h = s;
    if (a.pointerId !== null && a.pointerId !== h.pointerId)
      return;
    a.pointerId = h.pointerId;
  } else s.type === "touchstart" && s.targetTouches.length === 1 && (a.touchId = s.targetTouches[0].identifier);
  if (s.type === "touchstart") {
    it(t, s, s.targetTouches[0].pageX);
    return;
  }
  const { params: n, touches: i, enabled: u } = t;
  if (!u || !n.simulateTouch && s.pointerType === "mouse" || t.animating && n.preventInteractionOnTransition)
    return;
  !t.animating && n.cssMode && n.loop && t.loopFix();
  let d = s.target;
  if (n.touchEventsTarget === "wrapper" && !kt(d, t.wrapperEl))
    return;
  const r = s;
  if (typeof r.which == "number" && r.which === 3 || typeof r.button == "number" && r.button > 0 || a.isTouched && a.isMoved)
    return;
  const p = !!n.noSwipingClass && n.noSwipingClass !== "", c = s.composedPath ? s.composedPath() : s.path;
  p && s.target && s.target.shadowRoot && c && (d = c[0]);
  const f = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`, T = !!(s.target && s.target.shadowRoot);
  if (n.noSwiping && (T ? ls(f, d) : d.closest(f))) {
    t.allowClick = !0;
    return;
  }
  if (n.swipeHandler && typeof n.swipeHandler == "string" && !d.closest(n.swipeHandler))
    return;
  const o = s;
  i.currentX = o.pageX, i.currentY = o.pageY;
  const l = i.currentX, g = i.currentY;
  if (!it(t, s, l))
    return;
  Object.assign(a, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), i.startX = l, i.startY = g, a.touchStartTime = ae(), a.startEventPath = c, t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (a.allowThresholdMove = !1);
  let S = !0;
  d.matches(a.focusableElements) && (S = !1, d.nodeName === "SELECT" && (a.isTouched = !1)), document.activeElement && document.activeElement.matches(a.focusableElements) && document.activeElement !== d && (o.pointerType === "mouse" || o.pointerType !== "mouse" && !d.matches(a.focusableElements)) && document.activeElement.blur();
  const E = S && t.allowTouchMove && n.touchStartPreventDefault;
  (n.touchStartForcePreventDefault || E) && !d.isContentEditable && s.preventDefault(), n.freeMode && n.freeMode.enabled && t.freeMode && t.animating && !n.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", s);
}
const Et = (e, t) => {
  const { params: s, el: a, wrapperEl: n, device: i } = e, u = !!s.nested, d = t === "on" ? "addEventListener" : "removeEventListener", r = t;
  if (!a || typeof a == "string")
    return;
  document[d]("touchstart", e.onDocumentTouchStart, {
    passive: !1,
    capture: u
  }), a[d]("touchstart", e.onTouchStart, { passive: !1 }), a[d]("pointerdown", e.onTouchStart, { passive: !1 }), document[d]("touchmove", e.onTouchMove, {
    passive: !1,
    capture: u
  }), document[d]("pointermove", e.onTouchMove, {
    passive: !1,
    capture: u
  }), document[d]("touchend", e.onTouchEnd, { passive: !0 }), document[d]("pointerup", e.onTouchEnd, { passive: !0 }), document[d]("pointercancel", e.onTouchEnd, { passive: !0 }), document[d]("touchcancel", e.onTouchEnd, { passive: !0 }), document[d]("pointerout", e.onTouchEnd, { passive: !0 }), document[d]("pointerleave", e.onTouchEnd, { passive: !0 }), document[d]("contextmenu", e.onTouchEnd, { passive: !0 }), (s.preventClicks || s.preventClicksPropagation) && a[d]("click", e.onClick, !0), s.cssMode && n[d]("scroll", e.onScroll);
  const p = (c) => {
    e[r](c, ss, !0);
  };
  s.updateOnWindowResize ? p(i.ios || i.android ? "resize orientationchange observerUpdate" : "resize observerUpdate") : p("observerUpdate"), s.lazyPreload && (a[d]("load", e.onLoad, { capture: !0 }), a[d]("error", e.onLoad, { capture: !0 }));
};
function os() {
  const e = this, { params: t } = e;
  e.onTouchStart = rs.bind(e), e.onTouchMove = is.bind(e), e.onTouchEnd = ns.bind(e), e.onDocumentTouchStart = es.bind(e), t.cssMode && (e.onScroll = as.bind(e)), e.onClick = Jt.bind(e), e.onLoad = ts.bind(e), Et(e, "on");
}
function ds() {
  Et(this, "off");
}
var cs = {
  attachEvents: os,
  detachEvents: ds
};
function fs(e) {
  const t = this;
  if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
    return;
  const s = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
    t.__preventObserver__ = !1;
  });
}
function us() {
  const e = this;
  e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = !1;
  }));
}
var ps = {
  setGrabCursor: fs,
  unsetGrabCursor: us
};
function ms(e, t) {
  const s = this, { params: a, slidesEl: n } = s;
  if (!a.loop || s.virtual && s.params.virtual?.enabled)
    return;
  const i = () => {
    Q(n, `.${a.slideClass}, swiper-slide`).forEach((l, g) => {
      l.setAttribute("data-swiper-slide-index", String(g));
    });
  }, u = () => {
    const o = Q(n, `.${a.slideBlankClass}`);
    o.forEach((l) => {
      l.remove();
    }), o.length > 0 && (s.recalcSlides(), s.updateSlides());
  }, d = s.grid && a.grid && a.grid.rows > 1;
  a.loopAddBlankSlides && (a.slidesPerGroup > 1 || d) && u();
  const r = a.slidesPerGroup * (d ? a.grid.rows : 1), p = s.slides.length % r !== 0, c = d && s.slides.length % a.grid.rows !== 0, f = (o) => {
    for (let l = 0; l < o; l += 1) {
      const g = s.isElement ? ne("swiper-slide", [a.slideBlankClass]) : ne("div", [a.slideClass, a.slideBlankClass]);
      s.slidesEl.append(g);
    }
  };
  if (p) {
    if (a.loopAddBlankSlides) {
      const o = r - s.slides.length % r;
      f(o), s.recalcSlides(), s.updateSlides();
    } else
      Ne("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    i();
  } else if (c) {
    if (a.loopAddBlankSlides) {
      const o = a.grid.rows - s.slides.length % a.grid.rows;
      f(o), s.recalcSlides(), s.updateSlides();
    } else
      Ne("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    i();
  } else
    i();
  const T = a.centeredSlides || !!a.slidesOffsetBefore || !!a.slidesOffsetAfter;
  s.loopFix({
    slideRealIndex: e,
    direction: T ? void 0 : "next",
    initial: t
  });
}
function hs() {
  const e = this, { params: t, slidesEl: s } = e;
  if (!t.loop || !s || e.virtual && e.params.virtual?.enabled)
    return;
  e.recalcSlides();
  const a = [];
  e.slides.forEach((n) => {
    const i = n, u = typeof i.swiperSlideIndex > "u" ? Number(n.getAttribute("data-swiper-slide-index")) : i.swiperSlideIndex;
    a[u] = n;
  }), e.slides.forEach((n) => {
    n.removeAttribute("data-swiper-slide-index");
  }), a.forEach((n) => {
    s.append(n);
  }), e.recalcSlides(), e.slideTo(e.realIndex, 0);
}
function gs(e = {}) {
  const { slideRealIndex: t, slideTo: s = !0, direction: a, setTranslate: n, activeSlideIndex: i, initial: u, byController: d, byMousewheel: r } = e;
  let p = i;
  const c = this;
  if (!c.params.loop || c.params.watchOverflow && c.isLocked)
    return;
  c.emit("beforeLoopFix"), c.__loopFixInProgress__ = !0;
  const { slides: f, allowSlidePrev: T, allowSlideNext: o, slidesEl: l, params: g } = c, { centeredSlides: S, slidesOffsetBefore: E, slidesOffsetAfter: h, initialSlide: m } = g, v = S || !!E || !!h;
  if (c.allowSlidePrev = !0, c.allowSlideNext = !0, c.virtual && g.virtual?.enabled) {
    if (s) {
      const P = c.virtual.slides.length, D = c.virtual.slidesBefore ?? 0;
      !v && c.snapIndex === 0 ? c.slideTo(P, 0, !1, !0) : v && c.snapIndex < g.slidesPerView ? c.slideTo(P + c.snapIndex, 0, !1, !0) : c.snapIndex === c.snapGrid.length - 1 && c.slideTo(D, 0, !1, !0);
    }
    c.allowSlidePrev = T, c.allowSlideNext = o, c.__loopFixInProgress__ = !1, c.emit("loopFix");
    return;
  }
  let y = g.slidesPerView;
  y === "auto" ? y = c.slidesPerViewDynamic() : (y = Math.ceil(parseFloat(String(g.slidesPerView))), v && y % 2 === 0 && (y = y + 1));
  const C = g.slidesPerGroupAuto ? y : g.slidesPerGroup, A = (P) => (typeof P == "function" ? P.call(c) : P) || 0, w = c.slidesGrid.length > 1 ? (c.slidesGrid[c.slidesGrid.length - 1] - c.slidesGrid[0]) / (c.slidesGrid.length - 1) : c.size, x = w > 0 ? A(E) / w : 0, k = w > 0 ? A(h) / w : 0;
  let b = v ? Math.max(C, (S ? Math.ceil(y / 2) : 0) + Math.ceil(Math.max(x, k))) : C;
  b % C !== 0 && (b += C - b % C), b += g.loopAdditionalSlides, c.loopedSlides = b;
  const L = c.grid && g.grid && g.grid.rows > 1;
  f.length < y + b || c.params.effect === "cards" && f.length < y + b * 2 ? Ne("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : L && g.grid.fill === "row" && Ne("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  const M = [], _ = [], R = L ? Math.ceil(f.length / g.grid.rows) : f.length, V = u && R - m < y && !v;
  let F = V ? m : c.activeIndex;
  typeof p > "u" ? p = c.getSlideIndex(f.find((P) => P.classList.contains(g.slideActiveClass))) : F = p;
  const X = a === "next" || !a, I = a === "prev" || !a;
  let z = 0, $ = 0;
  const j = (L ? f[p].column ?? 0 : p) + (v && typeof n > "u" ? (S ? -y / 2 + 0.5 : 0) - x : 0);
  if (j < b) {
    z = Math.max(b - j, C);
    for (let P = 0; P < b - j; P += 1) {
      const D = P - Math.floor(P / R) * R;
      if (L) {
        const G = R - D - 1;
        for (let K = f.length - 1; K >= 0; K -= 1)
          f[K].column === G && M.push(K);
      } else
        M.push(R - D - 1);
    }
  } else if (j + y > R - b) {
    $ = Math.max(j - (R - b * 2), C), V && ($ = Math.max($, y - R + m + 1));
    for (let P = 0; P < $; P += 1) {
      const D = P - Math.floor(P / R) * R;
      L ? f.forEach((G, K) => {
        G.column === D && _.push(K);
      }) : _.push(D);
    }
  }
  if (c.__preventObserver__ = !0, requestAnimationFrame(() => {
    c.__preventObserver__ = !1;
  }), c.params.effect === "cards" && f.length < y + b * 2 && (_.includes(p) && _.splice(_.indexOf(p), 1), M.includes(p) && M.splice(M.indexOf(p), 1)), I && M.forEach((P) => {
    const D = f[P];
    D.swiperLoopMoveDOM = !0, l.prepend(D), D.swiperLoopMoveDOM = !1;
  }), X && _.forEach((P) => {
    const D = f[P];
    D.swiperLoopMoveDOM = !0, l.append(D), D.swiperLoopMoveDOM = !1;
  }), c.recalcSlides(), g.slidesPerView === "auto" ? c.updateSlides() : L && (M.length > 0 && I || _.length > 0 && X) && c.slides.forEach((P, D) => {
    c.grid.updateSlide(D, P, c.slides);
  }), g.watchSlidesProgress && c.updateSlidesOffset(), s) {
    if (M.length > 0 && I) {
      if (typeof t > "u") {
        const P = c.slidesGrid[F], G = c.slidesGrid[F + z] - P;
        r ? c.setTranslate(c.translate - G) : (c.slideTo(F + Math.ceil(z), 0, !1, !0), n && (c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - G, c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - G));
      } else if (n) {
        const P = L ? M.length / g.grid.rows : M.length;
        c.slideTo(c.activeIndex + P, 0, !1, !0), c.touchEventsData.currentTranslate = c.translate;
      }
    } else if (_.length > 0 && X)
      if (typeof t > "u") {
        const P = c.slidesGrid[F], G = c.slidesGrid[F - $] - P;
        r ? c.setTranslate(c.translate - G) : (c.slideTo(F - $, 0, !1, !0), n && (c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - G, c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - G));
      } else {
        const P = L ? _.length / g.grid.rows : _.length;
        c.slideTo(c.activeIndex - P, 0, !1, !0);
      }
  }
  c.allowSlidePrev = T, c.allowSlideNext = o;
  const O = c.controller?.control;
  if (O && !d) {
    const P = {
      slideRealIndex: t,
      direction: a,
      setTranslate: n,
      activeSlideIndex: p,
      byController: !0
    };
    Array.isArray(O) ? O.forEach((D) => {
      !D.destroyed && D.params.loop && D.loopFix({
        ...P,
        slideTo: D.params.slidesPerView === g.slidesPerView ? s : !1
      });
    }) : O instanceof c.constructor && O.params.loop && O.loopFix({
      ...P,
      slideTo: O.params.slidesPerView === g.slidesPerView ? s : !1
    });
  }
  c.__loopFixInProgress__ = !1, c.emit("loopFix");
}
var Ts = {
  loopCreate: ms,
  loopFix: gs,
  loopDestroy: hs
};
function vs(e, t) {
  return function(a = {}) {
    const n = Object.keys(a)[0], i = a[n];
    if (typeof i != "object" || i === null) {
      se(t, a);
      return;
    }
    if (e[n] === !0 && (e[n] = { enabled: !0 }), n === "navigation" && e[n] && e[n].enabled && !e[n].prevEl && !e[n].nextEl && (e[n].auto = !0), ["pagination", "scrollbar"].indexOf(n) >= 0 && e[n] && e[n].enabled && !e[n].el && (e[n].auto = !0), !(n in e && "enabled" in i)) {
      se(t, a);
      return;
    }
    typeof e[n] == "object" && !("enabled" in e[n]) && (e[n].enabled = !0), e[n] || (e[n] = { enabled: !1 }), se(t, a);
  };
}
const Ss = ({ swiper: e, extendParams: t, on: s }) => {
  const a = [], n = (d, r = {}) => {
    const p = window.MutationObserver || window.WebkitMutationObserver;
    if (!p)
      return;
    const c = new p((f) => {
      if (e.__preventObserver__)
        return;
      if (f.length === 1) {
        e.emit("observerUpdate", f[0]);
        return;
      }
      const T = function() {
        e.emit("observerUpdate", f[0]);
      };
      window.requestAnimationFrame ? window.requestAnimationFrame(T) : window.setTimeout(T, 0);
    });
    c.observe(d, {
      attributes: typeof r.attributes > "u" ? !0 : r.attributes,
      childList: e.isElement || (typeof r.childList > "u" ? !0 : r.childList),
      characterData: typeof r.characterData > "u" ? !0 : r.characterData
    }), a.push(c);
  }, i = () => {
    if (e.params.observer) {
      if (e.params.observeParents) {
        const d = me(e.hostEl);
        for (let r = 0; r < d.length; r += 1)
          n(d[r]);
      }
      n(e.hostEl, {
        childList: e.params.observeSlideChildren
      }), n(e.wrapperEl, { attributes: !1 });
    }
  }, u = () => {
    a.forEach((d) => {
      d.disconnect();
    }), a.splice(0, a.length);
  };
  t({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), s("init", i), s("destroy", u);
}, Es = ({ swiper: e, on: t, emit: s }) => {
  let a = null, n = null;
  const i = () => {
    !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"));
  }, u = () => {
    if (!e || e.destroyed || !e.initialized)
      return;
    let p = e.width, c = e.height;
    a = new ResizeObserver((f) => {
      n = window.requestAnimationFrame(() => {
        let T = p, o = c;
        f.forEach(({ contentBoxSize: l, contentRect: g, target: S }) => {
          if (S && S !== e.el)
            return;
          const E = Array.isArray(l) ? l[0] : l;
          T = g ? g.width : E.inlineSize, o = g ? g.height : E.blockSize;
        }), (T !== p || o !== c) && (p = T, c = o, i());
      });
    }), a.observe(e.el);
  }, d = () => {
    n && window.cancelAnimationFrame(n), a && a.unobserve && e.el && (a.unobserve(e.el), a = null);
  }, r = () => {
    !e || e.destroyed || !e.initialized || s("orientationchange");
  };
  t("init", () => {
    if (e.params.resizeObserver && typeof window.ResizeObserver < "u") {
      u();
      return;
    }
    window.addEventListener("resize", i), window.addEventListener("orientationchange", r);
  }), t("destroy", () => {
    d(), window.removeEventListener("resize", i), window.removeEventListener("orientationchange", r);
  });
};
function bs(e, t = !0, s) {
  const a = this, { enabled: n, params: i, animating: u } = a;
  if (!n || a.destroyed)
    return a;
  typeof e > "u" && (e = a.params.speed);
  let d = i.slidesPerGroup;
  i.slidesPerView === "auto" && i.slidesPerGroup === 1 && i.slidesPerGroupAuto && (d = Math.max(a.slidesPerViewDynamic("current", !0), 1));
  const r = a.activeIndex < i.slidesPerGroupSkip ? 1 : d, p = a.virtual && i.virtual?.enabled;
  if (i.loop) {
    if (u && !p && i.loopPreventsSliding)
      return !1;
    if (a.loopFix({ direction: "next" }), a._clientLeft = a.wrapperEl.clientLeft, a.activeIndex === a.slides.length - 1 && i.cssMode)
      return requestAnimationFrame(() => {
        a.slideTo(a.activeIndex + r, e, t, s);
      }), !0;
  }
  return i.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + r, e, t, s);
}
function ys(e, t = !0, s) {
  const a = this, { params: n, snapGrid: i, slidesGrid: u, rtlTranslate: d, enabled: r, animating: p } = a;
  if (!r || a.destroyed)
    return a;
  typeof e > "u" && (e = a.params.speed);
  const c = a.virtual && n.virtual?.enabled;
  if (n.loop) {
    if (p && !c && n.loopPreventsSliding)
      return !1;
    a.loopFix({ direction: "prev" }), a._clientLeft = a.wrapperEl.clientLeft;
  }
  const f = d ? a.translate : -a.translate;
  function T(h) {
    return h < 0 ? -Math.floor(Math.abs(h)) : Math.floor(h);
  }
  const o = T(f), l = i.map((h) => T(h)), g = n.freeMode && n.freeMode.enabled;
  let S = i[l.indexOf(o) - 1];
  if (typeof S > "u" && (n.cssMode || g)) {
    let h;
    i.forEach((m, v) => {
      o >= m && (h = v);
    }), typeof h < "u" && (S = g ? i[h] : i[h > 0 ? h - 1 : h]);
  }
  let E = 0;
  if (typeof S < "u" && (E = u.indexOf(S), E < 0 && (E = a.activeIndex - 1), n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (E = E - a.slidesPerViewDynamic("previous", !0) + 1, E = Math.max(E, 0))), n.rewind && a.isBeginning) {
    const h = a.params.virtual?.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
    return a.slideTo(h, e, t, s);
  } else if (n.loop && a.activeIndex === 0 && n.cssMode)
    return requestAnimationFrame(() => {
      a.slideTo(E, e, t, s);
    }), !0;
  return a.slideTo(E, e, t, s);
}
function As(e, t = !0, s) {
  const a = this;
  if (!a.destroyed)
    return typeof e > "u" && (e = a.params.speed), a.slideTo(a.activeIndex, e, t, s);
}
function _s(e = 0, t, s = !0, a, n) {
  typeof e == "string" && (e = parseInt(e, 10));
  const i = this;
  let u = e;
  u < 0 && (u = 0);
  const { params: d, snapGrid: r, slidesGrid: p, previousIndex: c, activeIndex: f, rtlTranslate: T, wrapperEl: o, enabled: l } = i;
  if (!l && !a && !n || i.destroyed || i.animating && d.preventInteractionOnTransition)
    return !1;
  typeof t > "u" && (t = i.params.speed);
  const g = Math.min(i.params.slidesPerGroupSkip, u);
  let S = g + Math.floor((u - g) / i.params.slidesPerGroup);
  S >= r.length && (S = r.length - 1);
  const E = -r[S];
  if (d.normalizeSlideIndex)
    for (let A = 0; A < p.length; A += 1) {
      const w = -Math.floor(E * 100), x = Math.floor(p[A] * 100), k = Math.floor(p[A + 1] * 100);
      typeof p[A + 1] < "u" ? w >= x && w < k - (k - x) / 2 ? u = A : w >= x && w < k && (u = A + 1) : w >= x && (u = A);
    }
  if (i.initialized && u !== f && (!i.allowSlideNext && (T ? E > i.translate && E > i.minTranslate() : E < i.translate && E < i.minTranslate()) || !i.allowSlidePrev && E > i.translate && E > i.maxTranslate() && (f || 0) !== u))
    return !1;
  u !== (c || 0) && s && i.emit("beforeSlideChangeStart"), i.updateProgress(E);
  let h;
  u > f ? h = "next" : u < f ? h = "prev" : h = "reset";
  const m = i.virtual && i.params.virtual?.enabled;
  if (!(m && n) && (T && -E === i.translate || !T && E === i.translate))
    return i.updateActiveIndex(u), d.autoHeight && i.updateAutoHeight(), i.updateSlidesClasses(), d.effect !== "slide" && i.setTranslate(E), h !== "reset" && (i.transitionStart(s, h), i.transitionEnd(s, h)), !1;
  if (d.cssMode) {
    const A = i.isHorizontal(), w = T ? E : -E;
    return t === 0 ? (m && (i.wrapperEl.style.scrollSnapType = "none", i._immediateVirtual = !0), m && !i._cssModeVirtualInitialSet && (i.params.initialSlide ?? 0) > 0 ? (i._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
      o[A ? "scrollLeft" : "scrollTop"] = w;
    })) : o[A ? "scrollLeft" : "scrollTop"] = w, m && requestAnimationFrame(() => {
      i.wrapperEl.style.scrollSnapType = "", i._immediateVirtual = !1;
    })) : o.scrollTo({
      [A ? "left" : "top"]: w,
      behavior: "smooth"
    }), !0;
  }
  const C = Tt().isSafari;
  return m && !n && C && i.isElement && i.virtual.update(!1, !1, u), i.setTransition(t), i.setTranslate(E), i.updateActiveIndex(u), i.updateSlidesClasses(), i.emit("beforeTransitionStart", t, a), i.transitionStart(s, h), t === 0 ? i.transitionEnd(s, h) : i.animating || (i.animating = !0, i.onSlideToWrapperTransitionEnd || (i.onSlideToWrapperTransitionEnd = function(w) {
    !i || i.destroyed || w.target === this && (i.wrapperEl.removeEventListener("transitionend", i.onSlideToWrapperTransitionEnd), i.onSlideToWrapperTransitionEnd = null, delete i.onSlideToWrapperTransitionEnd, i.transitionEnd(s, h));
  }), i.wrapperEl.addEventListener("transitionend", i.onSlideToWrapperTransitionEnd)), !0;
}
function xs() {
  const e = this;
  if (e.destroyed)
    return;
  const { params: t, slidesEl: s, clickedSlide: a, clickedIndex: n } = e;
  if (a === void 0 || n === void 0)
    return;
  const i = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let u = e.getSlideIndexWhenGrid(n), d;
  const r = e.isElement ? "swiper-slide" : `.${t.slideClass}`, p = e.grid && e.params.grid && e.params.grid.rows > 1;
  if (t.loop) {
    if (e.animating)
      return;
    d = parseInt(a.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? e.slideToLoop(d) : u > (p ? (e.slides.length - i) / 2 - (e.params.grid.rows - 1) : e.slides.length - i) ? (e.loopFix(), u = e.getSlideIndex(Q(s, `${r}[data-swiper-slide-index="${d}"]`)[0]), Ee(() => {
      e.slideTo(u);
    })) : e.slideTo(u);
  } else
    e.slideTo(u);
}
function Ls(e, t = !0, s, a = 0.5) {
  const n = this;
  if (n.destroyed)
    return;
  typeof e > "u" && (e = n.params.speed);
  let i = n.activeIndex;
  const u = Math.min(n.params.slidesPerGroupSkip, i), d = u + Math.floor((i - u) / n.params.slidesPerGroup), r = n.rtlTranslate ? n.translate : -n.translate;
  if (r >= n.snapGrid[d]) {
    const p = n.snapGrid[d], c = n.snapGrid[d + 1];
    r - p > (c - p) * a && (i += n.params.slidesPerGroup);
  } else {
    const p = n.snapGrid[d - 1], c = n.snapGrid[d];
    r - p <= (c - p) * a && (i -= n.params.slidesPerGroup);
  }
  return i = Math.max(i, 0), i = Math.min(i, n.slidesGrid.length - 1), n.slideTo(i, e, t, s);
}
function Cs(e = 0, t, s = !0, a) {
  typeof e == "string" && (e = parseInt(e, 10));
  const n = this;
  if (n.destroyed)
    return;
  typeof t > "u" && (t = n.params.speed);
  const i = n.grid && n.params.grid && n.params.grid.rows > 1;
  let u = e;
  if (n.params.loop)
    if (n.virtual && n.params.virtual?.enabled)
      u = u + (n.virtual.slidesBefore ?? 0);
    else {
      let d;
      if (i) {
        const g = u * n.params.grid.rows;
        d = n.slides.find((E) => Number(E.getAttribute("data-swiper-slide-index")) === g)?.column ?? 0;
      } else
        d = n.getSlideIndexByData(u);
      const r = i ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length, { centeredSlides: p, slidesOffsetBefore: c, slidesOffsetAfter: f } = n.params, T = p || !!c || !!f;
      let o;
      n.params.slidesPerView === "auto" ? o = n.slidesPerViewDynamic() : (o = Math.ceil(parseFloat(String(n.params.slidesPerView))), T && o % 2 === 0 && (o = o + 1));
      let l = r - d < o;
      if (T && (l = l || d < Math.ceil(o / 2)), a && T && n.params.slidesPerView !== "auto" && !i && (l = !1), l) {
        const g = T ? d < n.activeIndex ? "prev" : "next" : d - n.activeIndex - 1 < n.params.slidesPerView ? "next" : "prev";
        n.loopFix({
          direction: g,
          slideTo: !0,
          activeSlideIndex: g === "next" ? d + 1 : d - r + 1,
          slideRealIndex: g === "next" ? n.realIndex : void 0
        });
      }
      if (i) {
        const g = u * n.params.grid.rows;
        u = n.slides.find((E) => Number(E.getAttribute("data-swiper-slide-index")) === g)?.column ?? 0;
      } else
        u = n.getSlideIndexByData(u);
    }
  return requestAnimationFrame(() => {
    n.slideTo(u, t, s, a);
  }), n;
}
var Ms = {
  slideTo: _s,
  slideToLoop: Cs,
  slideNext: bs,
  slidePrev: ys,
  slideReset: As,
  slideToClosest: Ls,
  slideToClickedSlide: xs
};
function Is(e, t) {
  const s = this;
  s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`, s.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : ""), s.emit("setTransition", e, t);
}
function bt({ swiper: e, runCallbacks: t, direction: s, step: a }) {
  const { activeIndex: n, previousIndex: i } = e;
  let u = s;
  u || (n > i ? u = "next" : n < i ? u = "prev" : u = "reset"), e.emit(`transition${a}`), t && u === "reset" ? e.emit(`slideResetTransition${a}`) : t && n !== i && (e.emit(`slideChangeTransition${a}`), u === "next" ? e.emit(`slideNextTransition${a}`) : e.emit(`slidePrevTransition${a}`));
}
function Rs(e = !0, t) {
  const s = this, { params: a } = s;
  s.animating = !1, !a.cssMode && (s.setTransition(0), bt({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
}
function Ps(e = !0, t) {
  const s = this, { params: a } = s;
  a.cssMode || (a.autoHeight && s.updateAutoHeight(), bt({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
}
var ws = {
  setTransition: Is,
  transitionStart: Ps,
  transitionEnd: Rs
};
function Os(e = this.isHorizontal() ? "x" : "y") {
  const t = this, { params: s, rtlTranslate: a, translate: n, wrapperEl: i } = t;
  if (s.virtualTranslate)
    return a ? -n : n;
  if (s.cssMode)
    return n;
  let u = je(i, e);
  return u += t.cssOverflowAdjustment(), a && (u = -u), u || 0;
}
function Ds() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Ns() {
  return -this.snapGrid[0];
}
function zs(e, t) {
  const s = this, { rtlTranslate: a, params: n, wrapperEl: i, progress: u } = s;
  let d = 0, r = 0;
  const p = 0;
  s.isHorizontal() ? d = a ? -e : e : r = e, n.roundLengths && (d = Math.floor(d), r = Math.floor(r)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : r, n.cssMode ? i[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -r : n.virtualTranslate || (s.isHorizontal() ? d -= s.cssOverflowAdjustment() : r -= s.cssOverflowAdjustment(), i.style.transform = `translate3d(${d}px, ${r}px, ${p}px)`);
  let c;
  const f = s.maxTranslate() - s.minTranslate();
  f === 0 ? c = 0 : c = (e - s.minTranslate()) / f, c !== u && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
}
function ks(e = 0, t = this.params.speed, s = !0, a = !0, n) {
  const i = this, { params: u, wrapperEl: d } = i;
  if (i.animating && u.preventInteractionOnTransition)
    return !1;
  const r = i.minTranslate(), p = i.maxTranslate();
  let c;
  if (a && e > r ? c = r : a && e < p ? c = p : c = e, i.updateProgress(c), u.cssMode) {
    const f = i.isHorizontal();
    return t === 0 ? d[f ? "scrollLeft" : "scrollTop"] = -c : d.scrollTo({
      [f ? "left" : "top"]: -c,
      behavior: "smooth"
    }), !0;
  }
  return t === 0 ? (i.setTransition(0), i.setTranslate(c), s && (i.emit("beforeTransitionStart", t, n), i.emit("transitionEnd"))) : (i.setTransition(t), i.setTranslate(c), s && (i.emit("beforeTransitionStart", t, n), i.emit("transitionStart")), i.animating || (i.animating = !0, i.onTranslateToWrapperTransitionEnd || (i.onTranslateToWrapperTransitionEnd = function(T) {
    !i || i.destroyed || T.target === this && (i.wrapperEl.removeEventListener("transitionend", i.onTranslateToWrapperTransitionEnd), i.onTranslateToWrapperTransitionEnd = null, delete i.onTranslateToWrapperTransitionEnd, i.animating = !1, s && i.emit("transitionEnd"));
  }), i.wrapperEl.addEventListener("transitionend", i.onTranslateToWrapperTransitionEnd))), !0;
}
var $s = {
  getTranslate: Os,
  setTranslate: zs,
  minTranslate: Ns,
  maxTranslate: Ds,
  translateTo: ks
};
function Gs(e) {
  const { slidesGrid: t, params: s } = e, a = e.rtlTranslate ? e.translate : -e.translate;
  let n;
  for (let i = 0; i < t.length; i += 1)
    typeof t[i + 1] < "u" ? a >= t[i] && a < t[i + 1] - (t[i + 1] - t[i]) / 2 ? n = i : a >= t[i] && a < t[i + 1] && (n = i + 1) : a >= t[i] && (n = i);
  return s.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0), n;
}
function Bs(e) {
  const t = this, s = t.rtlTranslate ? t.translate : -t.translate, { snapGrid: a, params: n, activeIndex: i, realIndex: u, snapIndex: d } = t;
  let r = e, p;
  const c = (o) => {
    const l = t.virtual.slides;
    let g = o - (t.virtual.slidesBefore ?? 0);
    return g < 0 && (g = l.length + g), g >= l.length && (g -= l.length), g;
  };
  if (typeof r > "u" && (r = Gs(t)), a.indexOf(s) >= 0)
    p = a.indexOf(s);
  else {
    const o = Math.min(n.slidesPerGroupSkip, r);
    p = o + Math.floor((r - o) / n.slidesPerGroup);
  }
  if (p >= a.length && (p = a.length - 1), r === i && !t.params.loop) {
    p !== d && (t.snapIndex = p, t.emit("snapIndexChange"));
    return;
  }
  if (r === i && t.params.loop && t.virtual && t.params.virtual?.enabled) {
    t.realIndex = c(r);
    return;
  }
  const f = t.grid && n.grid && n.grid.rows > 1;
  let T;
  if (t.virtual && n.virtual?.enabled)
    n.loop ? T = c(r) : T = r;
  else if (f) {
    const o = t.slides.find((g) => g.column === r);
    let l = parseInt(o.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(l) && (l = Math.max(t.slides.indexOf(o), 0)), T = Math.floor(l / n.grid.rows);
  } else if (t.slides[r]) {
    const o = t.slides[r].getAttribute("data-swiper-slide-index");
    o ? T = parseInt(o, 10) : T = r;
  } else
    T = r;
  Object.assign(t, {
    previousSnapIndex: d,
    snapIndex: p,
    previousRealIndex: u,
    realIndex: T,
    previousIndex: i,
    activeIndex: r
  }), t.initialized && vt(t), !t.__loopFixInProgress__ && (t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && ((t.__lastEmittedRealIndex__ ?? u) !== T && t.emit("realIndexChange"), t.emit("slideChange")), t.__lastEmittedRealIndex__ = T);
}
function Hs(e) {
  const t = this, s = [], a = t.virtual && t.params.virtual?.enabled;
  let n = 0, i;
  typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
  const u = (d) => a ? t.slides[t.getSlideIndexByData(d)] : t.slides[d];
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((d) => {
        s.push(d);
      });
    else
      for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
        const d = t.activeIndex + i;
        if (d > t.slides.length && !a)
          break;
        const r = u(d);
        r && s.push(r);
      }
  else {
    const d = u(t.activeIndex);
    d && s.push(d);
  }
  for (i = 0; i < s.length; i += 1)
    if (typeof s[i] < "u") {
      const d = s[i].offsetHeight;
      n = d > n ? d : n;
    }
  (n || n === 0) && (t.wrapperEl.style.height = `${n}px`);
}
function Vs(e, t) {
  const s = this, a = s.params;
  let n = e.closest(`.${a.slideClass}, swiper-slide`);
  !n && s.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((d) => {
    !n && d.matches && d.matches(`.${a.slideClass}, swiper-slide`) && (n = d);
  });
  let i = !1, u;
  if (n) {
    for (let d = 0; d < s.slides.length; d += 1)
      if (s.slides[d] === n) {
        i = !0, u = d;
        break;
      }
  }
  if (n && i)
    s.clickedSlide = n, s.virtual && s.params.virtual?.enabled ? s.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = u;
  else {
    s.clickedSlide = void 0, s.clickedIndex = void 0;
    return;
  }
  a.slideToClickedSlide && s.clickedIndex !== void 0 && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide();
}
function Ys(e) {
  const t = this;
  if (typeof e > "u") {
    const c = t.rtlTranslate ? -1 : 1;
    e = t && t.translate && t.translate * c || 0;
  }
  const s = t.params, a = t.maxTranslate() - t.minTranslate();
  let { progress: n, isBeginning: i, isEnd: u } = t, d = t.progressLoop;
  const r = i, p = u;
  if (a === 0)
    n = 0, i = !0, u = !0;
  else {
    n = (e - t.minTranslate()) / a;
    const c = Math.abs(e - t.minTranslate()) < 1, f = Math.abs(e - t.maxTranslate()) < 1;
    i = c || n <= 0, u = f || n >= 1, c && (n = 0), f && (n = 1);
  }
  if (s.loop) {
    const c = t.getSlideIndexByData(0), f = t.getSlideIndexByData(t.slides.length - 1), T = t.slidesGrid[c], o = t.slidesGrid[f], l = t.slidesGrid[t.slidesGrid.length - 1], g = Math.abs(e);
    g >= T ? d = (g - T) / l : d = (g + l - o) / l, d > 1 && (d -= 1);
  }
  Object.assign(t, {
    progress: n,
    progressLoop: d,
    isBeginning: i,
    isEnd: u
  }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), i && !r && t.emit("reachBeginning toEdge"), u && !p && t.emit("reachEnd toEdge"), (r && !i || p && !u) && t.emit("fromEdge"), t.emit("progress", n);
}
function Fs() {
  const e = this;
  let t, s;
  const a = e.el;
  typeof e.params.width < "u" && e.params.width !== null ? t = e.params.width : t = a.clientWidth, typeof e.params.height < "u" && e.params.height !== null ? s = e.params.height : s = a.clientHeight, !(t === 0 && e.isHorizontal() || s === 0 && e.isVertical()) && (t = t - parseInt(ue(a, "padding-left") || "0", 10) - parseInt(ue(a, "padding-right") || "0", 10), s = s - parseInt(ue(a, "padding-top") || "0", 10) - parseInt(ue(a, "padding-bottom") || "0", 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
    width: t,
    height: s,
    size: e.isHorizontal() ? t : s
  }));
}
function Ws() {
  const e = this;
  function t(b, L) {
    return parseFloat(b.getPropertyValue(e.getDirectionLabel(L)) || "0");
  }
  const s = e.params, { wrapperEl: a, slidesEl: n, rtlTranslate: i, wrongRTL: u } = e, d = !!(e.virtual && s.virtual?.enabled), r = d ? e.virtual.slides.length : e.slides.length, p = Q(n, `.${e.params.slideClass}, swiper-slide`), c = d ? e.virtual.slides.length : p.length;
  let f = [];
  const T = [], o = [], l = (b) => typeof b == "function" ? b.call(e) : b, g = l(s.slidesOffsetBefore), S = l(s.slidesOffsetAfter), E = e.snapGrid.length, h = e.slidesGrid.length, m = e.size - g - S;
  let v = s.spaceBetween, y = -g, C = 0, A = 0;
  if (typeof m > "u")
    return;
  typeof v == "string" && v.indexOf("%") >= 0 ? v = parseFloat(v.replace("%", "")) / 100 * m : typeof v == "string" && (v = parseFloat(v)), e.virtualSize = -v - g - S, p.forEach((b) => {
    i ? b.style.marginLeft = "" : b.style.marginRight = "", b.style.marginBottom = "", b.style.marginTop = "";
  }), s.centeredSlides && s.cssMode && (pe(a, "--swiper-centered-offset-before", ""), pe(a, "--swiper-centered-offset-after", "")), s.cssMode && (pe(a, "--swiper-slides-offset-before", `${g}px`), pe(a, "--swiper-slides-offset-after", `${S}px`));
  const w = s.grid && s.grid.rows > 1 && e.grid;
  w ? e.grid.initSlides(p) : e.grid && e.grid.unsetSlides();
  let x = 0;
  const k = s.slidesPerView === "auto" && s.breakpoints && Object.keys(s.breakpoints).filter((b) => typeof s.breakpoints[b]?.slidesPerView < "u").length > 0;
  for (let b = 0; b < c; b += 1) {
    x = 0;
    const L = p[b];
    if (!(L && (w && e.grid.updateSlide(b, L, p), ue(L, "display") === "none"))) {
      if (d && s.slidesPerView === "auto")
        s.virtual?.slidesPerViewAutoSlideSize && (x = s.virtual.slidesPerViewAutoSlideSize), x && L && (s.roundLengths && (x = Math.floor(x)), L.style[e.getDirectionLabel("width")] = `${x}px`);
      else if (s.slidesPerView === "auto") {
        k && (L.style[e.getDirectionLabel("width")] = "");
        const M = getComputedStyle(L), _ = L.style.transform, R = L.style.webkitTransform;
        if (_ && (L.style.transform = "none"), R && (L.style.webkitTransform = "none"), s.roundLengths)
          x = e.isHorizontal() ? Ke(L, "width") : Ke(L, "height");
        else {
          const V = t(M, "width"), F = t(M, "padding-left"), X = t(M, "padding-right"), I = t(M, "margin-left"), z = t(M, "margin-right"), $ = M.getPropertyValue("box-sizing");
          if ($ && $ === "border-box")
            x = V + I + z;
          else {
            const { clientWidth: H, offsetWidth: j } = L;
            x = V + F + X + I + z + (j - H);
          }
        }
        _ && (L.style.transform = _), R && (L.style.webkitTransform = R), s.roundLengths && (x = Math.floor(x));
      } else
        x = (m - (s.slidesPerView - 1) * v) / s.slidesPerView, s.roundLengths && (x = Math.floor(x)), L && (L.style[e.getDirectionLabel("width")] = `${x}px`);
      L && (L.swiperSlideSize = x), o.push(x), s.centeredSlides ? (y = y + x / 2 + C / 2 + v, C === 0 && b !== 0 && (y = y - m / 2 - v), b === 0 && (y = y - m / 2 - v), Math.abs(y) < 1 / 1e3 && (y = 0), s.roundLengths && (y = Math.floor(y)), A % s.slidesPerGroup === 0 && f.push(y), T.push(y)) : (s.roundLengths && (y = Math.floor(y)), (A - Math.min(e.params.slidesPerGroupSkip, A)) % e.params.slidesPerGroup === 0 && f.push(y), T.push(y), y = y + x + v), e.virtualSize += x + v, C = x, A += 1;
    }
  }
  if (e.virtualSize = Math.max(e.virtualSize, m) + S, i && u && (s.effect === "slide" || s.effect === "coverflow") && (a.style.width = `${e.virtualSize + v}px`), s.setWrapperSize && (a.style[e.getDirectionLabel("width")] = `${e.virtualSize + v}px`), w && e.grid.updateWrapperSize(x, f), !s.centeredSlides) {
    const b = s.slidesPerView !== "auto" && s.slidesPerView % 1 !== 0, L = s.snapToSlideEdge && !s.loop && (s.slidesPerView === "auto" || b);
    let M = f.length;
    if (L) {
      let R;
      if (s.slidesPerView === "auto") {
        R = 1;
        let V = 0;
        for (let F = o.length - 1; F >= 0 && (V += o[F] + (F < o.length - 1 ? v : 0), V <= m); F -= 1)
          R = o.length - F;
      } else
        R = Math.floor(s.slidesPerView);
      M = Math.max(c - R, 0);
    }
    const _ = [];
    for (let R = 0; R < f.length; R += 1) {
      let V = f[R];
      s.roundLengths && (V = Math.floor(V)), L ? R <= M && _.push(V) : f[R] <= e.virtualSize - m && _.push(V);
    }
    f = _, Math.floor(e.virtualSize - m) - Math.floor(f[f.length - 1]) > 1 && (L || f.push(e.virtualSize - m));
  }
  if (d && s.loop) {
    const b = o[0] + v, L = e.virtual.slidesBefore ?? 0, M = e.virtual.slidesAfter ?? 0, _ = L + M;
    if (s.slidesPerGroup > 1) {
      const R = Math.ceil(_ / s.slidesPerGroup), V = b * s.slidesPerGroup;
      for (let F = 0; F < R; F += 1)
        f.push(f[f.length - 1] + V);
    }
    for (let R = 0; R < _; R += 1)
      s.slidesPerGroup === 1 && f.push(f[f.length - 1] + b), T.push(T[T.length - 1] + b), e.virtualSize += b;
  }
  if (f.length === 0 && (f = [0]), v !== 0) {
    const b = e.isHorizontal() && i ? "marginLeft" : e.getDirectionLabel("marginRight");
    p.filter((L, M) => !s.cssMode || s.loop ? !0 : M !== p.length - 1).forEach((L) => {
      L.style[b] = `${v}px`;
    });
  }
  if (s.centeredSlides && s.centeredSlidesBounds) {
    let b = 0;
    o.forEach((M) => {
      b += M + (v || 0);
    }), b -= v;
    const L = b > m ? b - m : 0;
    f = f.map((M) => M <= 0 ? -g : M > L ? L + S : M);
  }
  if (s.centerInsufficientSlides) {
    let b = 0;
    if (o.forEach((L) => {
      b += L + (v || 0);
    }), b -= v, b < m) {
      const L = (m - b) / 2;
      f.forEach((M, _) => {
        f[_] = M - L;
      }), T.forEach((M, _) => {
        T[_] = M + L;
      });
    }
  }
  if (Object.assign(e, {
    slides: p,
    snapGrid: f,
    slidesGrid: T,
    slidesSizesGrid: o
  }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
    pe(a, "--swiper-centered-offset-before", `${-f[0]}px`), pe(a, "--swiper-centered-offset-after", `${e.size / 2 - o[o.length - 1] / 2}px`);
    const b = -e.snapGrid[0], L = -e.slidesGrid[0];
    e.snapGrid = e.snapGrid.map((M) => M + b), e.slidesGrid = e.slidesGrid.map((M) => M + L);
  }
  if (c !== r && e.emit("slidesLengthChange"), f.length !== E && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), T.length !== h && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !d && !s.cssMode && (s.effect === "slide" || s.effect === "fade")) {
    const b = `${s.containerModifierClass}backface-hidden`, L = e.el.classList.contains(b);
    c <= s.maxBackfaceHiddenSlides ? L || e.el.classList.add(b) : L && e.el.classList.remove(b);
  }
}
const Ue = (e, t, s) => {
  t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s);
};
function Xs() {
  const e = this, { slides: t, params: s, slidesEl: a, activeIndex: n } = e, i = !!(e.virtual && s.virtual?.enabled), u = e.grid && s.grid && s.grid.rows > 1, d = (f) => Q(a, `.${s.slideClass}${f}, swiper-slide${f}`)[0];
  let r, p, c;
  if (i)
    if (s.loop) {
      const f = e.virtual.slides;
      let T = n - (e.virtual.slidesBefore ?? 0);
      T < 0 && (T = f.length + T), T >= f.length && (T -= f.length), r = d(`[data-swiper-slide-index="${T}"]`);
    } else
      r = d(`[data-swiper-slide-index="${n}"]`);
  else u ? (r = t.find((f) => f.column === n), c = t.find((f) => f.column === n + 1), p = t.find((f) => f.column === n - 1)) : r = t[n];
  r && (u || (c = Gt(r, `.${s.slideClass}, swiper-slide`)[0], s.loop && !c && (c = t[0]), p = $t(r, `.${s.slideClass}, swiper-slide`)[0], s.loop && !p === 0 && (p = t[t.length - 1]))), t.forEach((f) => {
    Ue(f, f === r, s.slideActiveClass), Ue(f, f === c, s.slideNextClass), Ue(f, f === p, s.slidePrevClass);
  }), e.emitSlidesClasses();
}
function Us() {
  const e = this, t = e.slides, s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
  for (let a = 0; a < t.length; a += 1)
    t[a].swiperSlideOffset = (e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop) - s - e.cssOverflowAdjustment();
}
const lt = (e, t, s) => {
  t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s);
};
function qs(e = this && this.translate || 0) {
  const t = this, s = t.params, { slides: a, rtlTranslate: n, snapGrid: i } = t;
  if (a.length === 0)
    return;
  typeof a[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let u = -e;
  n && (u = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
  let d = s.spaceBetween;
  typeof d == "string" && d.indexOf("%") >= 0 ? d = parseFloat(d.replace("%", "")) / 100 * t.size : typeof d == "string" && (d = parseFloat(d));
  for (let r = 0; r < a.length; r += 1) {
    const p = a[r];
    let c = p.swiperSlideOffset ?? 0;
    s.cssMode && s.centeredSlides && (c -= a[0].swiperSlideOffset ?? 0);
    const f = p.swiperSlideSize ?? 0, T = (u + (s.centeredSlides ? t.minTranslate() : 0) - c) / (f + d), o = (u - i[0] + (s.centeredSlides ? t.minTranslate() : 0) - c) / (f + d), l = -(u - c), g = l + t.slidesSizesGrid[r], S = l >= 0 && l <= t.size - t.slidesSizesGrid[r], E = l >= 0 && l < t.size - 1 || g > 1 && g <= t.size || l <= 0 && g >= t.size;
    E && (t.visibleSlides.push(p), t.visibleSlidesIndexes.push(r)), lt(p, E, s.slideVisibleClass), lt(p, S, s.slideFullyVisibleClass), p.progress = n ? -T : T, p.originalProgress = n ? -o : o;
  }
}
var js = {
  updateSize: Fs,
  updateSlides: Ws,
  updateAutoHeight: Hs,
  updateSlidesOffset: Us,
  updateSlidesProgress: qs,
  updateProgress: Ys,
  updateSlidesClasses: Xs,
  updateActiveIndex: Bs,
  updateClickedSlide: Vs
};
const Ks = {
  eventsEmitter: Qt,
  update: js,
  translate: $s,
  transition: ws,
  slide: Ms,
  loop: Ts,
  grabCursor: ps,
  events: cs,
  breakpoints: Wt,
  checkOverflow: Ut,
  classes: Zt
}, Qe = {};
class te {
  static extendedDefaults;
  static defaults;
  constructor(...t) {
    let s, a;
    if (t.length === 1 && t[0] !== null && typeof t[0] == "object" && Object.prototype.toString.call(t[0]).slice(8, -1) === "Object" ? a = t[0] : [s, a] = t, a || (a = {}), a = se({}, a), s && !a.el && (a.el = s), a.el && typeof a.el == "string" && typeof document < "u" && document.querySelectorAll(a.el).length > 1) {
      const d = [];
      return document.querySelectorAll(a.el).forEach((r) => {
        const p = se({}, a, { el: r });
        d.push(new te(p));
      }), d;
    }
    const n = this;
    n.__swiper__ = !0, n.support = ht(), n.device = gt({ userAgent: a.userAgent ?? void 0 }), n.browser = Tt(), n.eventsListeners = {}, n.eventsAnyListeners = [], n.modules = [...n.__modules__ || []], a.modules && Array.isArray(a.modules) && a.modules.forEach((d) => {
      const r = d;
      typeof r == "function" && n.modules.indexOf(r) < 0 && n.modules.push(r);
    });
    const i = {};
    n.modules.forEach((d) => {
      d({
        params: a,
        swiper: n,
        extendParams: vs(a, i),
        on: n.on.bind(n),
        once: n.once.bind(n),
        off: n.off.bind(n),
        emit: n.emit.bind(n)
      });
    });
    const u = se({}, St, i);
    if (n.params = se({}, u, Qe, a), n.originalParams = se({}, n.params), n.passedParams = se({}, a), n.params && n.params.on) {
      const d = n.params.on;
      Object.keys(d).forEach((r) => {
        const p = d[r];
        p && n.on(r, p);
      });
    }
    return n.params && n.params.onAny && n.onAny(n.params.onAny), Object.assign(n, {
      enabled: n.params.enabled,
      el: s,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return n.params.direction === "horizontal";
      },
      isVertical() {
        return n.params.direction === "vertical";
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: !0,
      isEnd: !1,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: !1,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: n.params.allowSlideNext,
      allowSlidePrev: n.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        // Form elements to match
        focusableElements: n.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: void 0,
        // Velocities
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        pointerId: null,
        touchId: null
      },
      // Clicks
      allowClick: !0,
      // Touches
      allowTouchMove: n.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    }), n.emit("_swiper"), n.params.init && n.init(), n;
  }
  getDirectionLabel(t) {
    return this.isHorizontal() ? t : {
      width: "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      marginRight: "marginBottom"
    }[t];
  }
  /**
   * !INTERNAL
   */
  isHorizontal() {
    return this.params.direction === "horizontal";
  }
  isVertical() {
    return this.params.direction === "vertical";
  }
  cssOverflowAdjustment() {
    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
  }
  getSlideIndex(t) {
    const { slidesEl: s, params: a } = this, n = Q(s, `.${a.slideClass}, swiper-slide`), i = Le(n[0]);
    return Le(t) - (i ?? 0);
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(this.slides.find((s) => Number(s.getAttribute("data-swiper-slide-index")) === t));
  }
  getSlideIndexWhenGrid(t) {
    return this.grid && this.params.grid && this.params.grid.rows > 1 && (this.params.grid.fill === "column" ? t = Math.floor(t / this.params.grid.rows) : this.params.grid.fill === "row" && (t = t % Math.ceil(this.slides.length / this.params.grid.rows))), t;
  }
  recalcSlides() {
    const { slidesEl: t, params: s } = this;
    this.slides = Q(t, `.${s.slideClass}, swiper-slide`);
  }
  /**
   * Enable Swiper (if it was disabled)
   */
  enable() {
    this.enabled || (this.enabled = !0, this.params.grabCursor && this.setGrabCursor(), this.emit("enable"));
  }
  /**
   * Disable Swiper (if it was enabled). When Swiper is disabled, it will hide all navigation elements and won't respond to any events and interactions
   */
  disable() {
    this.enabled && (this.enabled = !1, this.params.grabCursor && this.unsetGrabCursor(), this.emit("disable"));
  }
  /**
   * Set Swiper translate progress (from 0 to 1). Where 0 - its initial position (offset) on first slide, and 1 - its maximum position (offset) on last slide
   *
   * @param progress Swiper translate progress (from 0 to 1).
   * @param speed Transition duration (in ms).
   */
  setProgress(t, s) {
    t = Math.min(Math.max(t, 0), 1);
    const a = this.minTranslate(), i = (this.maxTranslate() - a) * t + a;
    this.translateTo(i, typeof s > "u" ? 0 : s), this.updateActiveIndex(), this.updateSlidesClasses();
  }
  emitContainerClasses() {
    if (!this.params._emitClasses || !this.el)
      return;
    const t = this.el.className.split(" ").filter((s) => s.indexOf("swiper") === 0 || s.indexOf(this.params.containerModifierClass) === 0);
    this.emit("_containerClasses", t.join(" "));
  }
  getSlideClasses(t) {
    return this.destroyed ? "" : t.className.split(" ").filter((s) => s.indexOf("swiper-slide") === 0 || s.indexOf(this.params.slideClass) === 0).join(" ");
  }
  emitSlidesClasses() {
    if (!this.params._emitClasses || !this.el)
      return;
    const t = [];
    this.slides.forEach((s) => {
      const a = this.getSlideClasses(s);
      t.push({ slideEl: s, classNames: a }), this.emit("_slideClass", s, a);
    }), this.emit("_slideClasses", t);
  }
  /**
   * Get dynamically calculated amount of slides per view, useful only when slidesPerView set to `auto`
   */
  slidesPerViewDynamic(t = "current", s = !1) {
    const { params: a, slides: n, slidesGrid: i, slidesSizesGrid: u, size: d, activeIndex: r } = this;
    let p = 1;
    if (typeof a.slidesPerView == "number")
      return a.slidesPerView;
    if (!d)
      return p;
    if (a.centeredSlides) {
      let c = n[r] ? Math.ceil(n[r].swiperSlideSize ?? 0) : 0, f = !1;
      for (let T = r + 1; T < n.length; T += 1)
        n[T] && !f && (c += Math.ceil(n[T].swiperSlideSize ?? 0), p += 1, c > d && (f = !0));
      for (let T = r - 1; T >= 0; T -= 1)
        n[T] && !f && (c += n[T].swiperSlideSize ?? 0, p += 1, c > d && (f = !0));
    } else if (t === "current")
      for (let c = r + 1; c < n.length; c += 1)
        (s ? i[c] + u[c] - i[r] < d : i[c] - i[r] < d) && (p += 1);
    else
      for (let c = r - 1; c >= 0; c -= 1)
        i[r] - i[c] < d && (p += 1);
    return p;
  }
  /**
   * You should call it after you add/remove slides
   * manually, or after you hide/show it, or do any
   * custom DOM modifications with Swiper
   * This method also includes subcall of the following
   * methods which you can use separately:
   */
  update() {
    const t = this;
    if (!t || t.destroyed)
      return;
    const { snapGrid: s, params: a } = t;
    a.breakpoints && t.setBreakpoint(), a.lazyPreload && [...t.el.querySelectorAll('[loading="lazy"]')].forEach((u) => {
      u.complete && Ze(t, u);
    }), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();
    function n() {
      const u = t.rtlTranslate ? t.translate * -1 : t.translate, d = Math.min(Math.max(u, t.maxTranslate()), t.minTranslate());
      t.setTranslate(d), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let i;
    if (a.freeMode?.enabled && !a.cssMode)
      n(), a.autoHeight && t.updateAutoHeight();
    else {
      if ((a.slidesPerView === "auto" || a.slidesPerView > 1) && t.isEnd && !a.centeredSlides) {
        const u = t.virtual && a.virtual?.enabled ? t.virtual.slides.length : t.slides.length;
        i = t.slideTo(u - 1, 0, !1, !0);
      } else
        i = t.slideTo(t.activeIndex, 0, !1, !0);
      i || n();
    }
    a.watchOverflow && s !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  /**
   * Changes slider direction from horizontal to vertical and back.
   *
   * @param direction New direction. If not specified, then will automatically changed to opposite direction
   * @param needUpdate Will call swiper.update(). Default true
   */
  changeDirection(t, s = !0) {
    const a = this, n = a.params.direction;
    return t || (t = n === "horizontal" ? "vertical" : "horizontal"), t === n || t !== "horizontal" && t !== "vertical" || (a.el.classList.remove(`${a.params.containerModifierClass}${n}`), a.el.classList.add(`${a.params.containerModifierClass}${t}`), a.emitContainerClasses(), a.params.direction = t, a.rtlTranslate = t === "horizontal" && a.rtl, a.slides.forEach((i) => {
      t === "vertical" ? i.style.width = "" : i.style.height = "";
    }), a.emit("changeDirection"), s && a.update()), a;
  }
  /**
   * Changes slider language
   *
   * @param direction New direction. Should be `rtl` or `ltr`
   */
  changeLanguageDirection(t) {
    const s = this;
    s.rtl && t === "rtl" || !s.rtl && t === "ltr" || (s.rtl = t === "rtl", s.rtlTranslate = s.params.direction === "horizontal" && s.rtl, s.rtl ? (s.el.classList.add(`${s.params.containerModifierClass}rtl`), s.el.dir = "rtl") : (s.el.classList.remove(`${s.params.containerModifierClass}rtl`), s.el.dir = "ltr"), s.update());
  }
  mount(t) {
    const s = this;
    if (s.mounted)
      return !0;
    if (typeof document > "u")
      return !1;
    const a = t ?? s.params.el;
    let n = null;
    if (typeof a == "string" ? n = document.querySelector(a) : a instanceof HTMLElement && (n = a), !n)
      return !1;
    n.swiper = s;
    const i = n.parentNode;
    i && i.host && i.host.nodeName === s.params.swiperElementNodeName.toUpperCase() && (s.isElement = !0);
    const u = () => `.${(s.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let r = n && n.shadowRoot ? n.shadowRoot.querySelector(u()) : Q(n, u())[0];
    !r && s.params.createElements && (r = ne("div", s.params.wrapperClass), n.append(r), Q(n, `.${s.params.slideClass}`).forEach((c) => {
      r.append(c);
    }));
    const p = s.isElement ? n.parentNode.host : null;
    return Object.assign(s, {
      el: n,
      wrapperEl: r,
      slidesEl: s.isElement && !p.slideSlots ? p : r,
      hostEl: s.isElement ? p : n,
      mounted: !0,
      // RTL
      rtl: n.dir.toLowerCase() === "rtl" || ue(n, "direction") === "rtl",
      rtlTranslate: s.params.direction === "horizontal" && (n.dir.toLowerCase() === "rtl" || ue(n, "direction") === "rtl"),
      wrongRTL: ue(r, "display") === "-webkit-box"
    }), !0;
  }
  /**
   * Initialize slider
   */
  init(t) {
    const s = this;
    if (s.initialized || s.mount(t) === !1)
      return s;
    if (s.emit("beforeInit"), s.params.breakpoints && s.setBreakpoint(), s.addClasses(), s.updateSize(), s.updateSlides(), s.params.watchOverflow && s.checkOverflow(), s.params.grabCursor && s.enabled && s.setGrabCursor(), s.params.loop && s.virtual && s.params.virtual?.enabled ? s.slideTo((s.params.initialSlide ?? 0) + (s.virtual.slidesBefore ?? 0), 0, s.params.runCallbacksOnInit, !1, !0) : s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit, !1, !0), s.params.loop && s.loopCreate(void 0, !0), s.attachEvents(), s.params.lazyPreload) {
      const n = [
        ...s.el.querySelectorAll('[loading="lazy"]')
      ];
      s.isElement && n.push(...s.hostEl.querySelectorAll('[loading="lazy"]')), n.forEach((i) => {
        i.complete && Ze(s, i);
      });
    }
    return s.initialized = !0, vt(s), s.emit("init"), s.emit("afterInit"), s;
  }
  /**
   * Destroy slider instance and detach all events listeners
   *
   * @param deleteInstance Set it to false (by default it is true) to not to delete Swiper instance
   * @param cleanStyles Set it to true (by default it is true) and all custom styles will be removed from slides, wrapper and container.
   * Useful if you need to destroy Swiper and to init again with new options or in different direction
   */
  destroy(t = !0, s = !0) {
    const a = this, { params: n, el: i, wrapperEl: u, slides: d } = a;
    return typeof a.params > "u" || a.destroyed || (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), n.loop && a.loopDestroy(), s && (a.removeClasses(), i && typeof i != "string" && i.removeAttribute("style"), u && u.removeAttribute("style"), d && d.length && d.forEach((r) => {
      r.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), r.removeAttribute("style"), r.removeAttribute("data-swiper-slide-index");
    })), a.emit("destroy"), Object.keys(a.eventsListeners).forEach((r) => {
      a.off(r);
    }), t !== !1 && (a.el && typeof a.el != "string" && (a.el.swiper = null), Ot(a)), a.destroyed = !0), null;
  }
  static extendDefaults(t) {
    se(Qe, t);
  }
  static installModule(t) {
    te.prototype.__modules__ || (te.prototype.__modules__ = []);
    const s = te.prototype.__modules__;
    typeof t == "function" && s.indexOf(t) < 0 && s.push(t);
  }
  static use(t) {
    return Array.isArray(t) ? (t.forEach((s) => te.installModule(s)), te) : (te.installModule(t), te);
  }
}
Object.defineProperty(te, "extendedDefaults", {
  get() {
    return Qe;
  }
});
Object.defineProperty(te, "defaults", {
  get() {
    return St;
  }
});
const rt = Ks, Zs = te.prototype;
Object.keys(rt).forEach((e) => {
  const t = rt[e];
  Object.keys(t).forEach((s) => {
    Zs[s] = t[s];
  });
});
te.use([Es, Ss]);
const Qs = ({ swiper: e, extendParams: t, on: s, emit: a }) => {
  t({
    virtual: {
      enabled: !1,
      slides: [],
      cache: !0,
      slidesPerViewAutoSlideSize: 320,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: !0,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  });
  let n;
  e.virtual = {
    cache: {},
    from: 0,
    // -1 marks "nothing rendered yet": no real update can produce to < from,
    // so the first update() never mistakes slide 0 for an already-rendered
    // slide and always appends the full [from, to] window (#8202).
    to: -1,
    slides: [],
    offset: 0,
    slidesGrid: []
  };
  function i() {
    return e.params.virtual;
  }
  let u;
  const d = () => u ??= document.createElement("div");
  function r(l, g) {
    const S = i();
    if (S.cache && e.virtual.cache[g])
      return e.virtual.cache[g];
    let E;
    if (S.renderSlide) {
      const h = S.renderSlide.call(e, l, g);
      if (typeof h == "string") {
        const m = d();
        re(m, h), E = m.children[0];
      } else
        E = h;
    } else e.isElement ? E = ne("swiper-slide") : E = ne("div", e.params.slideClass);
    return E.setAttribute("data-swiper-slide-index", String(g)), S.renderSlide || re(E, l), S.cache && (e.virtual.cache[g] = E), E;
  }
  function p(l, g, S) {
    const { slidesPerGroup: E, centeredSlides: h, slidesPerView: m, loop: v, initialSlide: y } = e.params;
    if (g && !v && (y ?? 0) > 0)
      return;
    const { addSlidesBefore: C, addSlidesAfter: A, slidesPerViewAutoSlideSize: w } = i(), { from: x, to: k, slides: b, slidesGrid: L, offset: M } = e.virtual;
    e.params.cssMode || e.updateActiveIndex();
    const _ = typeof S > "u" ? e.activeIndex || 0 : S;
    let R;
    e.rtlTranslate ? R = "right" : R = e.isHorizontal() ? "left" : "top";
    let V;
    if (m === "auto")
      if (w) {
        let Y = e.size;
        Y || (Y = e.isHorizontal() ? e.el.getBoundingClientRect().width : e.el.getBoundingClientRect().height), V = Math.max(1, Math.ceil(Y / w));
      } else
        V = 1;
    else
      V = m ?? 1;
    const F = E ?? 1;
    let X, I;
    h ? (X = Math.floor(V / 2) + F + A, I = Math.floor(V / 2) + F + C) : (X = V + (F - 1) + A, I = (v ? V : F) + C);
    let z = _ - I, $ = _ + X;
    v || (z = Math.max(z, 0), $ = Math.min($, b.length - 1));
    let H = (e.slidesGrid[z] || 0) - (e.slidesGrid[0] || 0);
    v && _ >= I ? (z -= I, h || (H += e.slidesGrid[0])) : v && _ < I && (z = -I, h && (H += e.slidesGrid[0])), Object.assign(e.virtual, {
      from: z,
      to: $,
      offset: H,
      slidesGrid: e.slidesGrid,
      slidesBefore: I,
      slidesAfter: X
    });
    function j() {
      e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), a("virtualUpdate");
    }
    if (x === z && k === $ && !l) {
      e.slidesGrid !== L && H !== M && e.slides.forEach((Y) => {
        Y.style.setProperty(R, `${H - Math.abs(e.cssOverflowAdjustment())}px`);
      }), e.updateProgress(), a("virtualUpdate");
      return;
    }
    const O = i();
    if (O.renderExternal) {
      const Y = [];
      for (let q = z; q <= $; q += 1)
        Y.push(b[q]);
      O.renderExternal.call(e, {
        offset: H,
        from: z,
        to: $,
        slides: Y
      }), O.renderExternalUpdate ? j() : a("virtualUpdate");
      return;
    }
    const P = [], D = [], G = (Y) => {
      let q = Y;
      return Y < 0 ? q = b.length + Y : q >= b.length && (q = q - b.length), q;
    };
    if (l)
      e.slides.filter((Y) => Y.matches(`.${e.params.slideClass}, swiper-slide`)).forEach((Y) => {
        Y.remove();
      });
    else
      for (let Y = x; Y <= k; Y += 1)
        if (Y < z || Y > $) {
          const q = G(Y);
          e.slides.filter((J) => J.matches(`.${e.params.slideClass}[data-swiper-slide-index="${q}"], swiper-slide[data-swiper-slide-index="${q}"]`)).forEach((J) => {
            J.remove();
          });
        }
    const K = v ? -b.length : 0, ie = v ? b.length * 2 : b.length;
    for (let Y = K; Y < ie; Y += 1)
      if (Y >= z && Y <= $) {
        const q = G(Y);
        typeof k > "u" || l ? D.push(q) : (Y > k && D.push(q), Y < x && P.push(q));
      }
    if (D.forEach((Y) => {
      e.slidesEl.append(r(b[Y], Y));
    }), v)
      for (let Y = P.length - 1; Y >= 0; Y -= 1) {
        const q = P[Y];
        e.slidesEl.prepend(r(b[q], q));
      }
    else
      P.sort((Y, q) => q - Y), P.forEach((Y) => {
        e.slidesEl.prepend(r(b[Y], Y));
      });
    Q(e.slidesEl, ".swiper-slide, swiper-slide").forEach((Y) => {
      Y.style.setProperty(R, `${H - Math.abs(e.cssOverflowAdjustment())}px`);
    }), j();
  }
  function c(l) {
    if (l !== null && typeof l == "object" && "length" in l) {
      const g = l;
      for (let S = 0; S < g.length; S += 1)
        g[S] && e.virtual.slides.push(g[S]);
    } else
      e.virtual.slides.push(l);
    p(!0);
  }
  function f(l) {
    const g = e.activeIndex;
    let S = g + 1, E = 1;
    if (Array.isArray(l)) {
      for (let h = 0; h < l.length; h += 1)
        l[h] && e.virtual.slides.unshift(l[h]);
      S = g + l.length, E = l.length;
    } else
      e.virtual.slides.unshift(l);
    if (i().cache) {
      const h = e.virtual.cache, m = {};
      Object.keys(h).forEach((v) => {
        const y = h[Number(v)], C = y.getAttribute("data-swiper-slide-index");
        C && y.setAttribute("data-swiper-slide-index", String(parseInt(C, 10) + E)), m[parseInt(v, 10) + E] = y;
      }), e.virtual.cache = m;
    }
    p(!0), e.slideTo(S, 0);
  }
  function T(l) {
    if (typeof l > "u" || l === null)
      return;
    let g = e.activeIndex;
    const S = (E) => {
      Object.keys(e.virtual.cache).forEach((h) => {
        const m = Number(h);
        if (m > E) {
          const v = e.virtual.cache[m];
          e.virtual.cache[m - 1] = v, v.setAttribute("data-swiper-slide-index", String(m - 1)), delete e.virtual.cache[m];
        }
      });
    };
    if (Array.isArray(l))
      for (let E = l.length - 1; E >= 0; E -= 1)
        i().cache && (delete e.virtual.cache[l[E]], S(l[E])), e.virtual.slides.splice(l[E], 1), l[E] < g && (g -= 1), g = Math.max(g, 0);
    else
      i().cache && (delete e.virtual.cache[l], S(l)), e.virtual.slides.splice(l, 1), l < g && (g -= 1), g = Math.max(g, 0);
    p(!0), e.slideTo(g, 0);
  }
  function o() {
    e.virtual.slides = [], i().cache && (e.virtual.cache = {}), p(!0), e.slideTo(0, 0);
  }
  s("beforeInit", () => {
    if (!i().enabled)
      return;
    let l = !1;
    const g = e.passedParams.virtual;
    if (!g || typeof g != "object" || g.slides === void 0) {
      const E = [...e.slidesEl.children].filter((h) => h.matches(`.${e.params.slideClass}, swiper-slide`));
      E && E.length && (e.virtual.slides = [...E], l = !0, E.forEach((h, m) => {
        h.setAttribute("data-swiper-slide-index", String(m)), e.virtual.cache[m] = h, h.remove();
      }));
    }
    l || (e.virtual.slides = i().slides), e.classNames.push(`${e.params.containerModifierClass}virtual`), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0, p(!1, !0);
  }), s("setTranslate", () => {
    i().enabled && (e.params.cssMode && !e._immediateVirtual ? (clearTimeout(n), n = setTimeout(() => {
      p();
    }, 100)) : p());
  }), s("init update resize", () => {
    i().enabled && e.params.cssMode && pe(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`);
  }), Object.assign(e.virtual, {
    appendSlide: c,
    prependSlide: f,
    removeSlide: T,
    removeAllSlides: o,
    update: p
  });
}, Js = ({ swiper: e, extendParams: t, on: s, emit: a }) => {
  t({
    keyboard: {
      enabled: !1,
      onlyInViewport: !0,
      pageUpDown: !0,
      speed: void 0
    }
  });
  function n() {
    return e.params.keyboard;
  }
  function i(r) {
    if (!e.enabled)
      return;
    const { rtlTranslate: p } = e, c = "originalEvent" in r && r.originalEvent ? r.originalEvent : r, f = c.keyCode || c.charCode, T = n(), o = !!T.pageUpDown, l = o && f === 33, g = o && f === 34, S = f === 37, E = f === 39, h = f === 38, m = f === 40;
    if (!e.allowSlideNext && (e.isHorizontal() && E || e.isVertical() && m || g) || !e.allowSlidePrev && (e.isHorizontal() && S || e.isVertical() && h || l))
      return !1;
    if (c.shiftKey || c.altKey || c.ctrlKey || c.metaKey)
      return;
    const v = document.activeElement;
    if (v && (v.isContentEditable || v.nodeName && (v.nodeName.toLowerCase() === "input" || v.nodeName.toLowerCase() === "textarea")))
      return;
    if (T.onlyInViewport && (l || g || S || E || h || m)) {
      let C = !1;
      if (me(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 && me(e.el, `.${e.params.slideActiveClass}`).length === 0)
        return;
      const A = e.el, w = A.clientWidth, x = A.clientHeight, k = window.innerWidth, b = window.innerHeight, L = ze(A);
      p && (L.left -= A.scrollLeft);
      const M = [
        [L.left, L.top],
        [L.left + w, L.top],
        [L.left, L.top + x],
        [L.left + w, L.top + x]
      ];
      for (let _ = 0; _ < M.length; _ += 1) {
        const R = M[_];
        if (R[0] >= 0 && R[0] <= k && R[1] >= 0 && R[1] <= b) {
          if (R[0] === 0 && R[1] === 0)
            continue;
          C = !0;
        }
      }
      if (!C)
        return;
    }
    const y = T.speed;
    e.isHorizontal() ? ((l || g || S || E) && c.cancelable && c.preventDefault(), ((g || E) && !p || (l || S) && p) && e.slideNext(y), ((l || S) && !p || (g || E) && p) && e.slidePrev(y)) : ((l || g || h || m) && c.cancelable && c.preventDefault(), (g || m) && e.slideNext(y), (l || h) && e.slidePrev(y)), a("keyPress", f);
  }
  function u() {
    e.keyboard.enabled || (document.addEventListener("keydown", i), e.keyboard.enabled = !0);
  }
  function d() {
    e.keyboard.enabled && (document.removeEventListener("keydown", i), e.keyboard.enabled = !1);
  }
  e.keyboard = {
    enabled: !1,
    enable: u,
    disable: d
  }, s("init", () => {
    n().enabled && u();
  }), s("destroy", () => {
    e.keyboard.enabled && d();
  });
}, ea = ({ swiper: e, extendParams: t, on: s, emit: a }) => {
  t({
    mousewheel: {
      enabled: !1,
      releaseOnEdges: !1,
      invert: !1,
      forceToAxis: !1,
      sensitivity: 1,
      eventsTarget: "container",
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: "swiper-no-mousewheel"
    }
  });
  let n, i = ae(), u, d = !1;
  const r = [];
  function p() {
    return e.params.mousewheel;
  }
  function c(m) {
    const A = m;
    let w = 0, x = 0, k = 0, b = 0;
    return A.detail !== void 0 && (x = A.detail), A.wheelDelta !== void 0 && (x = -A.wheelDelta / 120), A.wheelDeltaY !== void 0 && (x = -A.wheelDeltaY / 120), A.wheelDeltaX !== void 0 && (w = -A.wheelDeltaX / 120), A.axis !== void 0 && A.HORIZONTAL_AXIS !== void 0 && A.axis === A.HORIZONTAL_AXIS && (w = x, x = 0), k = w * 10, b = x * 10, A.deltaY !== void 0 && (b = A.deltaY), A.deltaX !== void 0 && (k = A.deltaX), A.shiftKey && !k && (k = b, b = 0), (k || b) && A.deltaMode && (A.deltaMode === 1 ? (k *= 40, b *= 40) : (k *= 800, b *= 800)), k && !w && (w = k < 1 ? -1 : 1), b && !x && (x = b < 1 ? -1 : 1), {
      spinX: w,
      spinY: x,
      pixelX: k,
      pixelY: b
    };
  }
  function f() {
    e.enabled && (d = !0);
  }
  function T() {
    e.enabled && (d = !1);
  }
  function o(m) {
    const v = p();
    return v.thresholdDelta && m.delta < v.thresholdDelta || v.thresholdTime && ae() - i < v.thresholdTime ? !1 : m.delta >= 6 && ae() - i < 60 ? !0 : (m.direction < 0 ? (!e.isEnd || e.params.loop) && !e.animating && (e.slideNext(), a("scroll", m.raw)) : (!e.isBeginning || e.params.loop) && !e.animating && (e.slidePrev(), a("scroll", m.raw)), i = new window.Date().getTime(), !1);
  }
  function l(m) {
    const v = p();
    if (m.direction < 0) {
      if (e.isEnd && !e.params.loop && v.releaseOnEdges)
        return !0;
    } else if (e.isBeginning && !e.params.loop && v.releaseOnEdges)
      return !0;
    return !1;
  }
  function g(m) {
    let v = "originalEvent" in m && m.originalEvent ? m.originalEvent : m, y = !0;
    if (!e.enabled)
      return !1;
    const C = p();
    if (m.target.closest(`.${C.noMousewheelClass}`))
      return !1;
    e.params.cssMode && v.preventDefault();
    let A = e.el;
    C.eventsTarget !== "container" && (A = document.querySelector(C.eventsTarget));
    const w = A && A.contains(v.target);
    if (!d && !w && !C.releaseOnEdges)
      return !0;
    let x = 0;
    const k = e.rtlTranslate ? -1 : 1, b = c(v);
    if (C.forceToAxis)
      if (e.isHorizontal())
        if (Math.abs(b.pixelX) > Math.abs(b.pixelY))
          x = -b.pixelX * k;
        else
          return !0;
      else if (Math.abs(b.pixelY) > Math.abs(b.pixelX))
        x = -b.pixelY;
      else
        return !0;
    else
      x = Math.abs(b.pixelX) > Math.abs(b.pixelY) ? -b.pixelX * k : -b.pixelY;
    if (x === 0)
      return !0;
    C.invert && (x = -x);
    let L = e.getTranslate() + x * (C.sensitivity ?? 1);
    L >= e.minTranslate() && (L = e.minTranslate()), L <= e.maxTranslate() && (L = e.maxTranslate()), y = e.params.loop ? !0 : !(L === e.minTranslate() || L === e.maxTranslate()), y && e.params.nested && v.stopPropagation();
    const M = e.params.freeMode;
    if (!e.params.freeMode || !M?.enabled) {
      const _ = {
        time: ae(),
        delta: Math.abs(x),
        direction: Math.sign(x),
        raw: m
      };
      r.length >= 2 && r.shift();
      const R = r.length ? r[r.length - 1] : void 0;
      if (r.push(_), R ? (_.direction !== R.direction || _.delta > R.delta || _.time > R.time + 150) && o(_) : o(_), l(_))
        return !0;
    } else {
      const _ = {
        time: ae(),
        delta: Math.abs(x),
        direction: Math.sign(x)
      }, R = u && _.time < u.time + 500 && _.delta <= u.delta && _.direction === u.direction;
      if (!R) {
        u = void 0;
        let V = e.getTranslate() + x * (C.sensitivity ?? 1);
        const F = e.isBeginning, X = e.isEnd;
        if (V >= e.minTranslate() && (V = e.minTranslate()), V <= e.maxTranslate() && (V = e.maxTranslate()), e.setTransition(0), e.setTranslate(V), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses(), (!F && e.isBeginning || !X && e.isEnd) && e.updateSlidesClasses(), e.params.loop && e.loopFix({
          direction: _.direction < 0 ? "next" : "prev",
          byMousewheel: !0
        }), M?.sticky) {
          clearTimeout(n), n = void 0, r.length >= 15 && r.shift();
          const z = r.length ? r[r.length - 1] : void 0, $ = r[0];
          if (r.push(_), z && (_.delta > z.delta || _.direction !== z.direction))
            r.splice(0);
          else if (r.length >= 15 && $ && _.time - $.time < 500 && $.delta - _.delta >= 1 && _.delta <= 6) {
            const H = x > 0 ? 0.8 : 0.2;
            u = _, r.splice(0), n = Ee(() => {
              e.destroyed || !e.params || e.slideToClosest(e.params.speed, !0, void 0, H);
            }, 0);
          }
          n || (n = Ee(() => {
            if (e.destroyed || !e.params)
              return;
            const H = 0.5;
            u = _, r.splice(0), e.slideToClosest(e.params.speed, !0, void 0, H);
          }, 500));
        }
        R || a("scroll", v);
        const I = e.params.autoplay;
        if (e.params.autoplay && I?.disableOnInteraction && e.autoplay.stop(), C.releaseOnEdges && (V === e.minTranslate() || V === e.maxTranslate()))
          return !0;
      }
    }
    return v.cancelable && v.preventDefault(), !1;
  }
  function S(m) {
    const v = p();
    let y = e.el;
    v.eventsTarget !== "container" && (y = document.querySelector(v.eventsTarget)), y[m]("mouseenter", f), y[m]("mouseleave", T), y[m]("wheel", g);
  }
  function E() {
    return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", g), !0) : e.mousewheel.enabled ? !1 : (S("addEventListener"), e.mousewheel.enabled = !0, !0);
  }
  function h() {
    return e.params.cssMode ? (e.wrapperEl.addEventListener("wheel", g), !0) : e.mousewheel.enabled ? (S("removeEventListener"), e.mousewheel.enabled = !1, !0) : !1;
  }
  s("init", () => {
    const m = p();
    !m.enabled && e.params.cssMode && h(), m.enabled && E();
  }), e.mousewheel = {
    enabled: !1,
    enable: E,
    disable: h
  }, s("destroy", () => {
    e.params.cssMode && E(), e.mousewheel.enabled && h();
  });
};
function tt(e, t, s, a) {
  const n = s ?? {}, i = t ?? {};
  return e.params.createElements && Object.keys(a).forEach((u) => {
    if (!n[u] && n.auto === !0) {
      let d = Q(e.el, `.${a[u]}`)[0];
      d || (d = ne("div", a[u]), d.className = a[u], e.el.append(d)), n[u] = d, i[u] = d;
    }
  }), n;
}
const ot = '<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>', ta = ({ swiper: e, extendParams: t, on: s, emit: a }) => {
  t({
    navigation: {
      nextEl: null,
      prevEl: null,
      addIcons: !0,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  }), e.navigation = {
    nextEl: null,
    prevEl: null,
    arrowSvg: ot
  };
  function n() {
    return e.params.navigation;
  }
  function i(l) {
    let g;
    return l && typeof l == "string" && e.isElement && (g = e.el.querySelector(l) || e.hostEl.querySelector(l), g) ? g : (l && (typeof l == "string" && (g = [...document.querySelectorAll(l)]), e.params.uniqueNavElements && typeof l == "string" && g && g.length > 1 && e.el.querySelectorAll(l).length === 1 ? g = e.el.querySelector(l) : g && g.length === 1 && (g = g[0])), l && !g ? l : g);
  }
  function u(l, g) {
    const S = n();
    U(l).forEach((h) => {
      h && (h.classList[g ? "add" : "remove"](...S.disabledClass.split(" ")), h.tagName === "BUTTON" && (h.disabled = g), e.params.watchOverflow && e.enabled && h.classList[e.isLocked ? "add" : "remove"](S.lockClass));
    });
  }
  function d() {
    const { nextEl: l, prevEl: g } = e.navigation;
    if (e.params.loop) {
      u(g, !1), u(l, !1);
      return;
    }
    u(g, e.isBeginning && !e.params.rewind), u(l, e.isEnd && !e.params.rewind);
  }
  function r(l) {
    l.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), a("navigationPrev"));
  }
  function p(l) {
    l.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), a("navigationNext"));
  }
  function c() {
    e.params.navigation = tt(e, e.originalParams.navigation, e.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    });
    const l = n();
    if (!(l.nextEl || l.prevEl))
      return;
    const g = i(l.nextEl), S = i(l.prevEl);
    Object.assign(e.navigation, {
      nextEl: g,
      prevEl: S
    });
    const E = U(g), h = U(S), m = (v, y) => {
      if (v) {
        if (l.addIcons && v.matches(".swiper-button-next,.swiper-button-prev") && !v.querySelector("svg")) {
          const C = document.createElement("div");
          re(C, ot);
          const A = C.querySelector("svg");
          A && v.appendChild(A), C.remove();
        }
        v.addEventListener("click", y === "next" ? p : r);
      }
      !e.enabled && v && v.classList.add(...l.lockClass.split(" "));
    };
    E.forEach((v) => m(v, "next")), h.forEach((v) => m(v, "prev"));
  }
  function f() {
    const l = n(), { nextEl: g, prevEl: S } = e.navigation, E = U(g), h = U(S), m = (v, y) => {
      v.removeEventListener("click", y === "next" ? p : r), v.classList.remove(...l.disabledClass.split(" "));
    };
    E.forEach((v) => m(v, "next")), h.forEach((v) => m(v, "prev"));
  }
  s("init", () => {
    n().enabled === !1 ? o() : (c(), d());
  }), s("toEdge fromEdge lock unlock", () => {
    d();
  }), s("destroy", () => {
    f();
  }), s("enable disable", () => {
    const l = n(), { nextEl: g, prevEl: S } = e.navigation, E = U(g), h = U(S);
    if (e.enabled) {
      d();
      return;
    }
    [...E, ...h].filter((m) => !!m).forEach((m) => m.classList.add(l.lockClass));
  }), s("click", (l, g) => {
    const S = n(), { nextEl: E, prevEl: h } = e.navigation, m = U(E), v = U(h), y = g.target;
    let C = v.includes(y) || m.includes(y);
    if (e.isElement && !C) {
      const A = g.composedPath ? g.composedPath() : [];
      A.length && (C = A.find((w) => m.includes(w) || v.includes(w)));
    }
    if (S.hideOnClick && !C) {
      if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === y || e.pagination.el.contains(y)))
        return;
      let A;
      m.length ? A = m[0].classList.contains(S.hiddenClass) : v.length && (A = v[0].classList.contains(S.hiddenClass)), a(A === !0 ? "navigationShow" : "navigationHide"), [...m, ...v].filter((w) => !!w).forEach((w) => w.classList.toggle(S.hiddenClass));
    }
  });
  const T = () => {
    const l = n();
    e.el.classList.remove(...l.navigationDisabledClass.split(" ")), c(), d();
  }, o = () => {
    const l = n();
    e.el.classList.add(...l.navigationDisabledClass.split(" ")), f();
  };
  Object.assign(e.navigation, {
    enable: T,
    disable: o,
    update: d,
    init: c,
    destroy: f
  });
};
function de(e = "") {
  return `.${e.trim().replace(/([.:!+/()[\]#>~*^$|=,'"@{}\\])/g, "\\$1").replace(/ /g, ".")}`;
}
const sa = (e) => !!e.virtual && !!e.params.virtual?.enabled, aa = (e) => !!e.params.freeMode?.enabled, dt = (e) => {
  if (sa(e))
    return e.virtual.slides.length;
  const t = e.params.grid?.rows;
  return e.grid && t && t > 1 ? e.slides.length / Math.ceil(t) : e.slides.length;
}, na = ({ swiper: e, extendParams: t, on: s, emit: a }) => {
  const n = "swiper-pagination";
  t({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (h) => h,
      formatFractionTotal: (h) => h,
      bulletClass: `${n}-bullet`,
      bulletActiveClass: `${n}-bullet-active`,
      modifierClass: `${n}-`,
      currentClass: `${n}-current`,
      totalClass: `${n}-total`,
      hiddenClass: `${n}-hidden`,
      progressbarFillClass: `${n}-progressbar-fill`,
      progressbarOppositeClass: `${n}-progressbar-opposite`,
      clickableClass: `${n}-clickable`,
      lockClass: `${n}-lock`,
      horizontalClass: `${n}-horizontal`,
      verticalClass: `${n}-vertical`,
      paginationDisabledClass: `${n}-disabled`
    }
  }), e.pagination = {
    el: null,
    bullets: []
  };
  let i, u = 0;
  function d() {
    return e.params.pagination;
  }
  function r() {
    return !d().el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0;
  }
  function p(h, m) {
    const { bulletActiveClass: v } = d();
    if (!h)
      return;
    let y = h[`${m === "prev" ? "previous" : "next"}ElementSibling`];
    y && (y.classList.add(`${v}-${m}`), y = y[`${m === "prev" ? "previous" : "next"}ElementSibling`], y && y.classList.add(`${v}-${m}-${m}`));
  }
  function c(h, m, v) {
    if (h = h % v, m = m % v, m === h + 1)
      return "next";
    if (m === h - 1)
      return "previous";
  }
  function f(h) {
    const v = h.target.closest(de(d().bulletClass));
    if (!v)
      return;
    h.preventDefault();
    const y = (Le(v) ?? 0) * (e.params.slidesPerGroup ?? 1);
    if (e.params.loop) {
      if (e.realIndex === y)
        return;
      const C = c(e.realIndex, y, e.slides.length);
      C === "next" ? e.slideNext() : C === "previous" ? e.slidePrev() : e.slideToLoop(y);
    } else
      e.slideTo(y);
  }
  function T() {
    const h = e.rtl, m = d();
    if (r())
      return;
    const v = U(e.pagination.el);
    let y, C;
    const A = dt(e), w = e.params.loop ? Math.ceil(A / (e.params.slidesPerGroup ?? 1)) : e.snapGrid.length;
    if (e.params.loop ? (C = e.previousRealIndex || 0, y = (e.params.slidesPerGroup ?? 1) > 1 ? Math.floor(e.realIndex / (e.params.slidesPerGroup ?? 1)) : e.realIndex) : typeof e.snapIndex < "u" ? (y = e.snapIndex, C = e.previousSnapIndex) : (C = e.previousIndex || 0, y = e.activeIndex || 0), m.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
      const x = e.pagination.bullets;
      let k = 0, b = 0, L = 0;
      if (m.dynamicBullets) {
        i = Ke(x[0], e.isHorizontal() ? "width" : "height");
        const M = e.isHorizontal() ? "width" : "height";
        v.forEach((_) => {
          _.style[M] = `${(i ?? 0) * (m.dynamicMainBullets + 4)}px`;
        }), m.dynamicMainBullets > 1 && C !== void 0 && (u += y - (C || 0), u > m.dynamicMainBullets - 1 ? u = m.dynamicMainBullets - 1 : u < 0 && (u = 0)), k = Math.max(y - u, 0), b = k + (Math.min(x.length, m.dynamicMainBullets) - 1), L = (b + k) / 2;
      }
      if (x.forEach((M) => {
        const _ = [
          "",
          "-next",
          "-next-next",
          "-prev",
          "-prev-prev",
          "-main"
        ].map((R) => `${m.bulletActiveClass}${R}`).flatMap((R) => typeof R == "string" && R.includes(" ") ? R.split(" ") : [R]);
        M.classList.remove(..._);
      }), v.length > 1)
        x.forEach((M) => {
          const _ = Le(M);
          _ === y ? M.classList.add(...m.bulletActiveClass.split(" ")) : e.isElement && M.setAttribute("part", "bullet"), m.dynamicBullets && _ !== void 0 && (_ >= k && _ <= b && M.classList.add(...`${m.bulletActiveClass}-main`.split(" ")), _ === k && p(M, "prev"), _ === b && p(M, "next"));
        });
      else {
        const M = x[y];
        if (M && M.classList.add(...m.bulletActiveClass.split(" ")), e.isElement && x.forEach((_, R) => {
          _.setAttribute("part", R === y ? "bullet-active" : "bullet");
        }), m.dynamicBullets) {
          const _ = x[k], R = x[b];
          for (let V = k; V <= b; V += 1)
            x[V] && x[V].classList.add(...`${m.bulletActiveClass}-main`.split(" "));
          p(_, "prev"), p(R, "next");
        }
      }
      if (m.dynamicBullets) {
        const M = Math.min(x.length, m.dynamicMainBullets + 4), _ = ((i ?? 0) * M - (i ?? 0)) / 2 - L * (i ?? 0), R = h ? "right" : "left", V = e.isHorizontal() ? R : "top";
        x.forEach((F) => {
          F.style[V] = `${_}px`;
        });
      }
    }
    v.forEach((x, k) => {
      if (m.type === "fraction" && (x.querySelectorAll(de(m.currentClass)).forEach((b) => {
        b.textContent = String(m.formatFractionCurrent(y + 1));
      }), x.querySelectorAll(de(m.totalClass)).forEach((b) => {
        b.textContent = String(m.formatFractionTotal(w));
      })), m.type === "progressbar") {
        let b;
        m.progressbarOpposite ? b = e.isHorizontal() ? "vertical" : "horizontal" : b = e.isHorizontal() ? "horizontal" : "vertical";
        const L = (y + 1) / w;
        let M = 1, _ = 1;
        b === "horizontal" ? M = L : _ = L, x.querySelectorAll(de(m.progressbarFillClass)).forEach((R) => {
          R.style.transform = `translate3d(0,0,0) scaleX(${M}) scaleY(${_})`, R.style.transitionDuration = `${e.params.speed}ms`;
        });
      }
      m.type === "custom" && m.renderCustom ? (re(x, m.renderCustom(e, y + 1, w)), k === 0 && a("paginationRender", x)) : (k === 0 && a("paginationRender", x), a("paginationUpdate", x)), e.params.watchOverflow && e.enabled && x.classList[e.isLocked ? "add" : "remove"](m.lockClass);
    });
  }
  function o() {
    const h = d();
    if (r())
      return;
    const m = dt(e), v = U(e.pagination.el);
    let y = "";
    if (h.type === "bullets") {
      let C = e.params.loop ? Math.ceil(m / (e.params.slidesPerGroup ?? 1)) : e.snapGrid.length;
      e.params.freeMode && aa(e) && C > m && (C = m);
      for (let A = 0; A < C; A += 1)
        h.renderBullet ? y += h.renderBullet.call(e, A, h.bulletClass) : y += `<${h.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${h.bulletClass}"></${h.bulletElement}>`;
    }
    h.type === "fraction" && (h.renderFraction ? y = h.renderFraction.call(e, h.currentClass, h.totalClass) : y = `<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`), h.type === "progressbar" && (h.renderProgressbar ? y = h.renderProgressbar.call(e, h.progressbarFillClass) : y = `<span class="${h.progressbarFillClass}"></span>`), e.pagination.bullets = [], v.forEach((C) => {
      h.type !== "custom" && re(C, y || ""), h.type === "bullets" && e.pagination.bullets.push(...Array.from(C.querySelectorAll(de(h.bulletClass))));
    }), h.type !== "custom" && a("paginationRender", v[0]);
  }
  function l() {
    e.params.pagination = tt(e, e.originalParams.pagination, e.params.pagination, { el: "swiper-pagination" });
    const h = d();
    if (!h.el)
      return;
    let m;
    if (typeof h.el == "string" && e.isElement && (m = e.el.querySelector(h.el)), !m && typeof h.el == "string" && (m = [...document.querySelectorAll(h.el)]), m || (m = h.el), !m || Array.isArray(m) && m.length === 0)
      return;
    if (e.params.uniqueNavElements && typeof h.el == "string" && Array.isArray(m) && m.length > 1 && (m = [...e.el.querySelectorAll(h.el)], m.length > 1)) {
      const y = m.find((C) => me(C, ".swiper")[0] === e.el);
      y && (m = y);
    }
    Array.isArray(m) && m.length === 1 && (m = m[0]), Object.assign(e.pagination, {
      el: m
    }), U(m).forEach((y) => {
      h.type === "bullets" && h.clickable && y.classList.add(...(h.clickableClass || "").split(" ")), y.classList.add(h.modifierClass + h.type), y.classList.add(e.isHorizontal() ? h.horizontalClass : h.verticalClass), h.type === "bullets" && h.dynamicBullets && (y.classList.add(`${h.modifierClass}${h.type}-dynamic`), u = 0, h.dynamicMainBullets < 1 && (h.dynamicMainBullets = 1)), h.type === "progressbar" && h.progressbarOpposite && y.classList.add(h.progressbarOppositeClass), h.clickable && y.addEventListener("click", f), e.enabled || y.classList.add(h.lockClass);
    });
  }
  function g() {
    const h = d();
    if (r())
      return;
    const m = e.pagination.el;
    m && U(m).forEach((y) => {
      y.classList.remove(h.hiddenClass), y.classList.remove(h.modifierClass + h.type), y.classList.remove(e.isHorizontal() ? h.horizontalClass : h.verticalClass), h.clickable && (y.classList.remove(...(h.clickableClass || "").split(" ")), y.removeEventListener("click", f));
    }), e.pagination.bullets && e.pagination.bullets.forEach((v) => v.classList.remove(...h.bulletActiveClass.split(" ")));
  }
  s("changeDirection", () => {
    if (!e.pagination || !e.pagination.el)
      return;
    const h = d();
    U(e.pagination.el).forEach((v) => {
      v.classList.remove(h.horizontalClass, h.verticalClass), v.classList.add(e.isHorizontal() ? h.horizontalClass : h.verticalClass);
    });
  }), s("init", () => {
    d().enabled === !1 ? E() : (l(), o(), T());
  }), s("activeIndexChange", () => {
    typeof e.snapIndex > "u" && T();
  }), s("snapIndexChange", () => {
    T();
  }), s("snapGridLengthChange", () => {
    o(), T();
  }), s("destroy", () => {
    g();
  }), s("enable disable", () => {
    const { el: h } = e.pagination;
    if (h) {
      const m = d();
      U(h).forEach((y) => y.classList[e.enabled ? "remove" : "add"](m.lockClass));
    }
  }), s("lock unlock", () => {
    T();
  }), s("click", (h, m) => {
    const v = m.target, y = U(e.pagination.el), C = d();
    if (C.el && C.hideOnClick && y && y.length > 0 && !v.classList.contains(C.bulletClass)) {
      if (e.navigation && (e.navigation.nextEl && v === e.navigation.nextEl || e.navigation.prevEl && v === e.navigation.prevEl))
        return;
      const A = y[0].classList.contains(C.hiddenClass);
      a(A === !0 ? "paginationShow" : "paginationHide"), y.forEach((w) => w.classList.toggle(C.hiddenClass));
    }
  });
  const S = () => {
    const h = d();
    e.el.classList.remove(h.paginationDisabledClass);
    const { el: m } = e.pagination;
    m && U(m).forEach((y) => y.classList.remove(h.paginationDisabledClass)), l(), o(), T();
  }, E = () => {
    const h = d();
    e.el.classList.add(h.paginationDisabledClass);
    const { el: m } = e.pagination;
    m && U(m).forEach((y) => y.classList.add(h.paginationDisabledClass)), g();
  };
  Object.assign(e.pagination, {
    enable: S,
    disable: E,
    render: o,
    update: T,
    init: l,
    destroy: g
  });
}, ia = ({ swiper: e, extendParams: t, on: s, emit: a }) => {
  let n = !1, i = null, u = null, d = 0, r = 0, p = 0, c = 0;
  t({
    scrollbar: {
      el: null,
      dragSize: "auto",
      hide: !1,
      draggable: !1,
      snapOnRelease: !0,
      lockClass: "swiper-scrollbar-lock",
      dragClass: "swiper-scrollbar-drag",
      scrollbarDisabledClass: "swiper-scrollbar-disabled",
      horizontalClass: "swiper-scrollbar-horizontal",
      verticalClass: "swiper-scrollbar-vertical"
    }
  }), e.scrollbar = {
    el: null,
    dragEl: null
  };
  function f() {
    return e.params.scrollbar;
  }
  function T() {
    const b = f();
    if (!b.el || !e.scrollbar.el)
      return;
    const { scrollbar: L, rtlTranslate: M } = e, { dragEl: _, el: R } = L, V = e.params.loop ? e.progressLoop ?? 0 : e.progress;
    let F = r, X = (p - r) * V;
    M ? (X = -X, X > 0 ? (F = r - X, X = 0) : -X + r > p && (F = p + X)) : X < 0 ? (F = r + X, X = 0) : X + r > p && (F = p - X), e.isHorizontal() ? (_.style.transform = `translate3d(${X}px, 0, 0)`, _.style.width = `${F}px`) : (_.style.transform = `translate3d(0px, ${X}px, 0)`, _.style.height = `${F}px`), b.hide && (i && clearTimeout(i), R.style.opacity = "1", i = setTimeout(() => {
      R.style.opacity = "0", R.style.transitionDuration = "400ms";
    }, 1e3));
  }
  function o(b) {
    !f().el || !e.scrollbar.el || (e.scrollbar.dragEl.style.transitionDuration = `${b}ms`);
  }
  function l() {
    const b = f();
    if (!b.el || !e.scrollbar.el)
      return;
    const { scrollbar: L } = e, { dragEl: M, el: _ } = L;
    M.style.width = "", M.style.height = "", p = e.isHorizontal() ? _.offsetWidth : _.offsetHeight, c = e.size / (e.virtualSize + (e.params.slidesOffsetBefore ?? 0) - (e.params.centeredSlides ? e.snapGrid[0] : 0)), b.dragSize === "auto" ? r = p * c : r = parseInt(String(b.dragSize), 10), e.isHorizontal() ? M.style.width = `${r}px` : M.style.height = `${r}px`, c >= 1 ? _.style.display = "none" : _.style.display = "", b.hide && (_.style.opacity = "0"), e.params.watchOverflow && e.enabled && L.el.classList[e.isLocked ? "add" : "remove"](b.lockClass);
  }
  function g(b) {
    return e.isHorizontal() ? b.clientX ?? b.touches?.[0]?.clientX ?? 0 : b.clientY ?? b.touches?.[0]?.clientY ?? 0;
  }
  function S(b) {
    const { scrollbar: L, rtlTranslate: M } = e, { el: _ } = L;
    let R;
    R = (g(b) - ze(_)[e.isHorizontal() ? "left" : "top"] - (d !== null ? d : r / 2)) / (p - r), R = Math.max(Math.min(R, 1), 0), M && (R = 1 - R);
    const V = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * R;
    e.updateProgress(V), e.setTranslate(V), e.updateActiveIndex(), e.updateSlidesClasses();
  }
  function E(b) {
    const L = f(), { scrollbar: M, wrapperEl: _ } = e, { el: R, dragEl: V } = M;
    n = !0, d = b.target === V ? g(b) - b.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null, b.preventDefault(), b.stopPropagation(), _.style.transitionDuration = "100ms", V.style.transitionDuration = "100ms", S(b), u && clearTimeout(u), R.style.transitionDuration = "0ms", L.hide && (R.style.opacity = "1"), e.params.cssMode && (e.wrapperEl.style.scrollSnapType = "none"), a("scrollbarDragStart", b);
  }
  function h(b) {
    const { scrollbar: L, wrapperEl: M } = e, { el: _, dragEl: R } = L;
    n && (b.cancelable && b.preventDefault(), S(b), M.style.transitionDuration = "0ms", _.style.transitionDuration = "0ms", R.style.transitionDuration = "0ms", a("scrollbarDragMove", b));
  }
  function m(b) {
    const L = f(), { scrollbar: M, wrapperEl: _ } = e, { el: R } = M;
    n && (n = !1, e.params.cssMode && (e.wrapperEl.style.scrollSnapType = "", _.style.transitionDuration = ""), L.hide && (u && clearTimeout(u), u = Ee(() => {
      R.style.opacity = "0", R.style.transitionDuration = "400ms";
    }, 1e3)), a("scrollbarDragEnd", b), L.snapOnRelease && e.slideToClosest());
  }
  function v(b) {
    const { scrollbar: L, params: M } = e, _ = L.el;
    if (!_)
      return;
    const R = M.passiveListeners ? { passive: !1, capture: !1 } : !1, V = M.passiveListeners ? { passive: !0, capture: !1 } : !1, F = b === "on" ? "addEventListener" : "removeEventListener";
    _[F]("pointerdown", E, R), document[F]("pointermove", h, R), document[F]("pointerup", m, V);
  }
  function y() {
    !f().el || !e.scrollbar.el || v("on");
  }
  function C() {
    !f().el || !e.scrollbar.el || v("off");
  }
  function A() {
    const { scrollbar: b, el: L } = e;
    e.params.scrollbar = tt(e, e.originalParams.scrollbar, e.params.scrollbar, { el: "swiper-scrollbar" });
    const M = f();
    if (!M.el)
      return;
    let _;
    if (typeof M.el == "string" && e.isElement && (_ = e.el.querySelector(M.el)), !_ && typeof M.el == "string") {
      if (_ = document.querySelectorAll(M.el), !_.length)
        return;
    } else _ || (_ = M.el);
    e.params.uniqueNavElements && typeof M.el == "string" && _.length > 1 && L.querySelectorAll(M.el).length === 1 && (_ = L.querySelector(M.el)), _.length > 0 && (_ = _[0]);
    const R = _;
    R.classList.add(e.isHorizontal() ? M.horizontalClass : M.verticalClass);
    let V = null;
    R && (V = R.querySelector(de(M.dragClass)), V || (V = ne("div", M.dragClass), R.append(V))), Object.assign(b, {
      el: R,
      dragEl: V
    }), M.draggable && y(), R && R.classList[e.enabled ? "remove" : "add"](...fe(M.lockClass));
  }
  function w() {
    const b = f(), L = e.scrollbar.el;
    L && L.classList.remove(...fe(e.isHorizontal() ? b.horizontalClass : b.verticalClass)), C();
  }
  s("changeDirection", () => {
    if (!e.scrollbar || !e.scrollbar.el)
      return;
    const b = f();
    U(e.scrollbar.el).forEach((M) => {
      M.classList.remove(b.horizontalClass, b.verticalClass), M.classList.add(e.isHorizontal() ? b.horizontalClass : b.verticalClass);
    });
  }), s("init", () => {
    f().enabled === !1 ? k() : (A(), l(), T());
  }), s("update resize observerUpdate lock unlock changeDirection", () => {
    l();
  }), s("setTranslate", () => {
    T();
  }), s("setTransition", (b, L) => {
    o(L);
  }), s("enable disable", () => {
    const { el: b } = e.scrollbar;
    b && b.classList[e.enabled ? "remove" : "add"](...fe(f().lockClass));
  }), s("destroy", () => {
    w();
  });
  const x = () => {
    const b = f();
    e.el.classList.remove(...fe(b.scrollbarDisabledClass)), e.scrollbar.el && e.scrollbar.el.classList.remove(...fe(b.scrollbarDisabledClass)), A(), l(), T();
  }, k = () => {
    const b = f();
    e.el.classList.add(...fe(b.scrollbarDisabledClass)), e.scrollbar.el && e.scrollbar.el.classList.add(...fe(b.scrollbarDisabledClass)), w();
  };
  Object.assign(e.scrollbar, {
    enable: x,
    disable: k,
    updateSize: l,
    setTranslate: T,
    init: A,
    destroy: w
  });
}, la = ({ swiper: e, extendParams: t, on: s }) => {
  t({
    parallax: {
      enabled: !1
    }
  });
  function a() {
    return e.params.parallax;
  }
  const n = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]", i = (r, p) => {
    const { rtl: c } = e, f = c ? -1 : 1, T = r.getAttribute("data-swiper-parallax") || "0";
    let o = r.getAttribute("data-swiper-parallax-x"), l = r.getAttribute("data-swiper-parallax-y");
    const g = r.getAttribute("data-swiper-parallax-scale"), S = r.getAttribute("data-swiper-parallax-opacity"), E = r.getAttribute("data-swiper-parallax-rotate");
    if (o || l ? (o = o || "0", l = l || "0") : e.isHorizontal() ? (o = T, l = "0") : (l = T, o = "0"), o.indexOf("%") >= 0 ? o = `${parseInt(o, 10) * p * f}%` : o = `${Number(o) * p * f}px`, l.indexOf("%") >= 0 ? l = `${parseInt(l, 10) * p}%` : l = `${Number(l) * p}px`, typeof S < "u" && S !== null) {
      const m = Number(S), v = m - (m - 1) * (1 - Math.abs(p));
      r.style.opacity = String(v);
    }
    let h = `translate3d(${o}, ${l}, 0px)`;
    if (typeof g < "u" && g !== null) {
      const m = Number(g), v = m - (m - 1) * (1 - Math.abs(p));
      h += ` scale(${v})`;
    }
    if (E && typeof E < "u" && E !== null) {
      const m = Number(E) * p * -1;
      h += ` rotate(${m}deg)`;
    }
    r.style.transform = h;
  }, u = () => {
    const { el: r, slides: p, progress: c, snapGrid: f } = e, T = Q(r, n);
    e.isElement && T.push(...Q(e.hostEl, n)), T.forEach((o) => {
      i(o, c);
    }), p.forEach((o, l) => {
      let g = o.progress ?? 0;
      (e.params.slidesPerGroup ?? 1) > 1 && e.params.slidesPerView !== "auto" && (g += Math.ceil(l / 2) - c * (f.length - 1)), g = Math.min(Math.max(g, -1), 1), o.querySelectorAll(`${n}, [data-swiper-parallax-rotate]`).forEach((E) => {
        i(E, g);
      });
    });
  }, d = (r = e.params.speed ?? 300) => {
    const { el: p, hostEl: c } = e, f = [...p.querySelectorAll(n)];
    e.isElement && f.push(...c.querySelectorAll(n)), f.forEach((T) => {
      const o = T.getAttribute("data-swiper-parallax-duration");
      let l = (o ? parseInt(o, 10) : 0) || r;
      r === 0 && (l = 0), T.style.transitionDuration = `${l}ms`;
    });
  };
  s("beforeInit", () => {
    a().enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
  }), s("init", () => {
    a().enabled && u();
  }), s("setTranslate", () => {
    a().enabled && u();
  }), s("setTransition", (r, p) => {
    a().enabled && d(p);
  });
}, ra = ({ swiper: e, extendParams: t, on: s, emit: a }) => {
  t({
    zoom: {
      enabled: !1,
      limitToOriginalSize: !1,
      maxRatio: 3,
      minRatio: 1,
      panOnMouseMove: !1,
      toggle: !0,
      containerClass: "swiper-zoom-container",
      zoomedSlideClass: "swiper-slide-zoomed"
    }
  }), e.zoom = {
    enabled: !1
  };
  function n() {
    return e.params.zoom;
  }
  let i = 1, u = !1, d = !1, r = { x: 0, y: 0 };
  const p = -3;
  let c = !1, f = !1;
  const T = [], o = {
    originX: 0,
    originY: 0,
    slideEl: void 0,
    slideWidth: void 0,
    slideHeight: void 0,
    imageEl: void 0,
    imageWrapEl: void 0,
    maxRatio: 3
  }, l = {
    isTouched: void 0,
    isMoved: void 0,
    currentX: void 0,
    currentY: void 0,
    minX: void 0,
    minY: void 0,
    maxX: void 0,
    maxY: void 0,
    width: void 0,
    height: void 0,
    startX: void 0,
    startY: void 0,
    touchesStart: {},
    touchesCurrent: {}
  }, g = {
    x: void 0,
    y: void 0,
    prevPositionX: void 0,
    prevPositionY: void 0,
    prevTime: void 0
  };
  let S = 1;
  Object.defineProperty(e.zoom, "scale", {
    get() {
      return S;
    },
    set(O) {
      if (S !== O) {
        const P = o.imageEl, D = o.slideEl;
        a("zoomChange", O, P, D);
      }
      S = O;
    }
  });
  function E() {
    if (T.length < 2)
      return 1;
    const O = T[0].pageX, P = T[0].pageY, D = T[1].pageX, G = T[1].pageY;
    return Math.sqrt((D - O) ** 2 + (G - P) ** 2);
  }
  function h() {
    const O = n(), P = o.imageWrapEl?.getAttribute("data-swiper-zoom"), D = P != null ? Number(P) : O.maxRatio, G = o.imageEl;
    if (O.limitToOriginalSize && G && G.naturalWidth) {
      const K = G.naturalWidth / G.offsetWidth;
      return Math.min(K, D);
    }
    return D;
  }
  function m() {
    if (T.length < 2 || !o.imageEl)
      return [null, null];
    const O = o.imageEl.getBoundingClientRect();
    return [
      (T[0].pageX + (T[1].pageX - T[0].pageX) / 2 - O.x - window.scrollX) / i,
      (T[0].pageY + (T[1].pageY - T[0].pageY) / 2 - O.y - window.scrollY) / i
    ];
  }
  function v() {
    return e.isElement ? "swiper-slide" : `.${e.params.slideClass}`;
  }
  function y(O) {
    const P = v(), D = O.target;
    return D ? !!(D.matches(P) || e.slides.filter((G) => G.contains(D)).length > 0) : !1;
  }
  function C(O) {
    const P = `.${n().containerClass}`, D = O.target;
    return D ? !!(D.matches(P) || [...e.hostEl.querySelectorAll(P)].filter((G) => G.contains(D)).length > 0) : !1;
  }
  function A(O) {
    if (O.pointerType === "mouse" && T.splice(0, T.length), !y(O))
      return;
    const P = n();
    if (c = !1, f = !1, T.push(O), !(T.length < 2)) {
      if (c = !0, o.scaleStart = E(), !o.slideEl) {
        const D = O.target;
        o.slideEl = D?.closest(`.${e.params.slideClass}, swiper-slide`) ?? void 0, o.slideEl || (o.slideEl = e.slides[e.activeIndex]);
        let G = o.slideEl?.querySelector(`.${P.containerClass}`) ?? null;
        if (G && (G = G.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0] ?? null), o.imageEl = G ?? void 0, G ? o.imageWrapEl = me(G, `.${P.containerClass}`)[0] ?? void 0 : o.imageWrapEl = void 0, !o.imageWrapEl) {
          o.imageEl = void 0;
          return;
        }
        o.maxRatio = h();
      }
      if (o.imageEl) {
        const [D, G] = m();
        o.originX = D ?? 0, o.originY = G ?? 0, o.imageEl.style.transitionDuration = "0ms";
      }
      u = !0;
    }
  }
  function w(O) {
    if (!y(O))
      return;
    const P = n(), D = e.zoom, G = T.findIndex((K) => K.pointerId === O.pointerId);
    G >= 0 && (T[G] = O), !(T.length < 2) && (f = !0, o.scaleMove = E(), o.imageEl && (D.scale = o.scaleMove / (o.scaleStart ?? 1) * i, D.scale > o.maxRatio && (D.scale = o.maxRatio - 1 + (D.scale - o.maxRatio + 1) ** 0.5), D.scale < P.minRatio && (D.scale = P.minRatio + 1 - (P.minRatio - D.scale + 1) ** 0.5), o.imageEl.style.transform = `translate3d(0,0,0) scale(${D.scale})`));
  }
  function x(O) {
    if (!y(O) || O.pointerType === "mouse" && O.type === "pointerout")
      return;
    const P = n(), D = e.zoom, G = T.findIndex((K) => K.pointerId === O.pointerId);
    G >= 0 && T.splice(G, 1), !(!c || !f) && (c = !1, f = !1, o.imageEl && (D.scale = Math.max(Math.min(D.scale, o.maxRatio), P.minRatio), o.imageEl.style.transitionDuration = `${e.params.speed}ms`, o.imageEl.style.transform = `translate3d(0,0,0) scale(${D.scale})`, i = D.scale, u = !1, D.scale > 1 && o.slideEl ? o.slideEl.classList.add(`${P.zoomedSlideClass}`) : D.scale <= 1 && o.slideEl && o.slideEl.classList.remove(`${P.zoomedSlideClass}`), D.scale === 1 && (o.originX = 0, o.originY = 0, o.slideEl = void 0)));
  }
  let k;
  function b() {
    e.touchEventsData.preventTouchMoveFromPointerMove = !1;
  }
  function L() {
    k !== void 0 && clearTimeout(k), e.touchEventsData.preventTouchMoveFromPointerMove = !0, k = setTimeout(() => {
      e.destroyed || b();
    });
  }
  function M(O) {
    const P = e.device;
    if (l.isTouched)
      return;
    const D = T.length > 0 ? T[0] : O;
    l.touchesStart.x = D.pageX, l.touchesStart.y = D.pageY, o.imageEl && (P.android && O.cancelable && O.preventDefault(), l.isTouched = !0);
  }
  function _(O) {
    const D = O.pointerType === "mouse" && n().panOnMouseMove;
    if (!y(O) || !C(O))
      return;
    const G = e.zoom;
    if (!o.imageEl)
      return;
    if (!l.isTouched || !o.slideEl) {
      D && F(O);
      return;
    }
    if (D) {
      F(O);
      return;
    }
    l.isMoved || (l.width = o.imageEl.offsetWidth || o.imageEl.clientWidth, l.height = o.imageEl.offsetHeight || o.imageEl.clientHeight, l.startX = je(o.imageWrapEl, "x") || 0, l.startY = je(o.imageWrapEl, "y") || 0, o.slideWidth = o.slideEl.offsetWidth, o.slideHeight = o.slideEl.offsetHeight, o.imageWrapEl.style.transitionDuration = "0ms");
    const K = l.width * G.scale, ie = l.height * G.scale;
    l.minX = Math.min(o.slideWidth / 2 - K / 2, 0), l.maxX = -l.minX, l.minY = Math.min(o.slideHeight / 2 - ie / 2, 0), l.maxY = -l.minY, l.touchesCurrent.x = T.length > 0 ? T[0].pageX : O.pageX, l.touchesCurrent.y = T.length > 0 ? T[0].pageY : O.pageY, Math.max(Math.abs(l.touchesCurrent.x - (l.touchesStart.x ?? 0)), Math.abs(l.touchesCurrent.y - (l.touchesStart.y ?? 0))) > 5 && (e.allowClick = !1);
    const q = l.startX ?? 0, J = l.startY ?? 0;
    if (!l.isMoved && !u) {
      if (e.isHorizontal() && (Math.floor(l.minX) === Math.floor(q) && l.touchesCurrent.x < (l.touchesStart.x ?? 0) || Math.floor(l.maxX) === Math.floor(q) && l.touchesCurrent.x > (l.touchesStart.x ?? 0))) {
        l.isTouched = !1, b();
        return;
      }
      if (!e.isHorizontal() && (Math.floor(l.minY) === Math.floor(J) && l.touchesCurrent.y < (l.touchesStart.y ?? 0) || Math.floor(l.maxY) === Math.floor(J) && l.touchesCurrent.y > (l.touchesStart.y ?? 0))) {
        l.isTouched = !1, b();
        return;
      }
    }
    O.cancelable && O.preventDefault(), O.stopPropagation(), L(), l.isMoved = !0;
    const Z = (G.scale - i) / (o.maxRatio - n().minRatio), { originX: ee, originY: oe } = o;
    l.currentX = l.touchesCurrent.x - (l.touchesStart.x ?? 0) + q + Z * (l.width - ee * 2), l.currentY = l.touchesCurrent.y - (l.touchesStart.y ?? 0) + J + Z * (l.height - oe * 2), l.currentX < l.minX && (l.currentX = l.minX + 1 - (l.minX - l.currentX + 1) ** 0.8), l.currentX > l.maxX && (l.currentX = l.maxX - 1 + (l.currentX - l.maxX + 1) ** 0.8), l.currentY < l.minY && (l.currentY = l.minY + 1 - (l.minY - l.currentY + 1) ** 0.8), l.currentY > l.maxY && (l.currentY = l.maxY - 1 + (l.currentY - l.maxY + 1) ** 0.8), g.prevPositionX || (g.prevPositionX = l.touchesCurrent.x), g.prevPositionY || (g.prevPositionY = l.touchesCurrent.y), g.prevTime || (g.prevTime = Date.now()), g.x = (l.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2, g.y = (l.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2, Math.abs(l.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0), Math.abs(l.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0), g.prevPositionX = l.touchesCurrent.x, g.prevPositionY = l.touchesCurrent.y, g.prevTime = Date.now(), o.imageWrapEl.style.transform = `translate3d(${l.currentX}px, ${l.currentY}px,0)`;
  }
  function R() {
    const O = e.zoom;
    if (T.length = 0, !o.imageEl)
      return;
    if (!l.isTouched || !l.isMoved) {
      l.isTouched = !1, l.isMoved = !1;
      return;
    }
    l.isTouched = !1, l.isMoved = !1;
    let P = 300, D = 300;
    const G = g.x ?? 0, K = g.y ?? 0, ie = G * P, Y = l.currentX + ie, q = K * D, J = l.currentY + q;
    G !== 0 && (P = Math.abs((Y - l.currentX) / G)), K !== 0 && (D = Math.abs((J - l.currentY) / K));
    const Z = Math.max(P, D);
    l.currentX = Y, l.currentY = J;
    const ee = l.width * O.scale, oe = l.height * O.scale;
    l.minX = Math.min(o.slideWidth / 2 - ee / 2, 0), l.maxX = -l.minX, l.minY = Math.min(o.slideHeight / 2 - oe / 2, 0), l.maxY = -l.minY, l.currentX = Math.max(Math.min(l.currentX, l.maxX), l.minX), l.currentY = Math.max(Math.min(l.currentY, l.maxY), l.minY), o.imageWrapEl.style.transitionDuration = `${Z}ms`, o.imageWrapEl.style.transform = `translate3d(${l.currentX}px, ${l.currentY}px,0)`;
  }
  function V() {
    const O = e.zoom;
    o.slideEl && e.activeIndex !== e.slides.indexOf(o.slideEl) && (o.imageEl && (o.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), o.imageWrapEl && (o.imageWrapEl.style.transform = "translate3d(0,0,0)"), o.slideEl.classList.remove(`${n().zoomedSlideClass}`), O.scale = 1, i = 1, o.slideEl = void 0, o.imageEl = void 0, o.imageWrapEl = void 0, o.originX = 0, o.originY = 0);
  }
  function F(O) {
    if (i <= 1 || !o.imageWrapEl || !y(O) || !C(O))
      return;
    const P = window.getComputedStyle(o.imageWrapEl).transform, D = new window.DOMMatrix(P);
    if (!d) {
      d = !0, r.x = O.clientX, r.y = O.clientY, l.startX = D.e, l.startY = D.f, l.width = o.imageEl.offsetWidth || o.imageEl.clientWidth, l.height = o.imageEl.offsetHeight || o.imageEl.clientHeight, o.slideWidth = o.slideEl.offsetWidth, o.slideHeight = o.slideEl.offsetHeight;
      return;
    }
    const G = (O.clientX - r.x) * p, K = (O.clientY - r.y) * p, ie = l.width * i, Y = l.height * i, q = o.slideWidth, J = o.slideHeight, Z = Math.min(q / 2 - ie / 2, 0), ee = -Z, oe = Math.min(J / 2 - Y / 2, 0), Re = -oe, ge = Math.max(Math.min(l.startX + G, ee), Z), Te = Math.max(Math.min(l.startY + K, Re), oe);
    o.imageWrapEl.style.transitionDuration = "0ms", o.imageWrapEl.style.transform = `translate3d(${ge}px, ${Te}px, 0)`, r.x = O.clientX, r.y = O.clientY, l.startX = ge, l.startY = Te, l.currentX = ge, l.currentY = Te;
  }
  function X(O) {
    const P = e.zoom, D = n();
    if (!o.slideEl) {
      if (O && typeof O != "number" && "target" in O && O.target && (o.slideEl = O.target.closest(`.${e.params.slideClass}, swiper-slide`) ?? void 0), !o.slideEl) {
        const at = e.params.virtual;
        at && at.enabled && e.virtual ? o.slideEl = Q(e.slidesEl, `.${e.params.slideActiveClass}`)[0] ?? void 0 : o.slideEl = e.slides[e.activeIndex];
      }
      let Se = o.slideEl?.querySelector(`.${D.containerClass}`) ?? null;
      Se && (Se = Se.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0] ?? null), o.imageEl = Se ?? void 0, Se ? o.imageWrapEl = me(Se, `.${D.containerClass}`)[0] ?? void 0 : o.imageWrapEl = void 0;
    }
    if (!o.imageEl || !o.imageWrapEl || !o.slideEl)
      return;
    o.maxRatio = h(), e.params.cssMode && (e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.touchAction = "none"), o.slideEl.classList.add(`${D.zoomedSlideClass}`);
    let G, K, ie, Y, q, J, Z, ee, oe, Re, ge, Te, Pe, we, $e, Ge, Be, He;
    const wt = O && typeof O != "number";
    typeof l.touchesStart.x > "u" && wt ? (G = O.pageX, K = O.pageY) : (G = l.touchesStart.x, K = l.touchesStart.y);
    const Ve = i, ve = typeof O == "number" ? O : null;
    i === 1 && ve && (G = void 0, K = void 0, l.touchesStart.x = void 0, l.touchesStart.y = void 0);
    const st = h();
    P.scale = ve || st, i = ve || st, O && !(i === 1 && ve) ? (Be = o.slideEl.offsetWidth, He = o.slideEl.offsetHeight, ie = ze(o.slideEl).left + window.scrollX, Y = ze(o.slideEl).top + window.scrollY, q = ie + Be / 2 - (G ?? 0), J = Y + He / 2 - (K ?? 0), oe = o.imageEl.offsetWidth || o.imageEl.clientWidth, Re = o.imageEl.offsetHeight || o.imageEl.clientHeight, ge = oe * P.scale, Te = Re * P.scale, Pe = Math.min(Be / 2 - ge / 2, 0), we = Math.min(He / 2 - Te / 2, 0), $e = -Pe, Ge = -we, Ve > 0 && ve && typeof l.currentX == "number" && typeof l.currentY == "number" ? (Z = l.currentX * P.scale / Ve, ee = l.currentY * P.scale / Ve) : (Z = q * P.scale, ee = J * P.scale), Z < Pe && (Z = Pe), Z > $e && (Z = $e), ee < we && (ee = we), ee > Ge && (ee = Ge)) : (Z = 0, ee = 0), ve && P.scale === 1 && (o.originX = 0, o.originY = 0), l.currentX = Z, l.currentY = ee, o.imageWrapEl.style.transitionDuration = "300ms", o.imageWrapEl.style.transform = `translate3d(${Z}px, ${ee}px,0)`, o.imageEl.style.transitionDuration = "300ms", o.imageEl.style.transform = `translate3d(0,0,0) scale(${P.scale})`;
  }
  function I() {
    const O = e.zoom, P = n();
    if (!o.slideEl) {
      const D = e.params.virtual;
      D && D.enabled && e.virtual ? o.slideEl = Q(e.slidesEl, `.${e.params.slideActiveClass}`)[0] ?? void 0 : o.slideEl = e.slides[e.activeIndex];
      let G = o.slideEl?.querySelector(`.${P.containerClass}`) ?? null;
      G && (G = G.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0] ?? null), o.imageEl = G ?? void 0, G ? o.imageWrapEl = me(G, `.${P.containerClass}`)[0] ?? void 0 : o.imageWrapEl = void 0;
    }
    !o.imageEl || !o.imageWrapEl || !o.slideEl || (o.maxRatio = h(), e.params.cssMode && (e.wrapperEl.style.overflow = "", e.wrapperEl.style.touchAction = ""), O.scale = 1, i = 1, l.currentX = void 0, l.currentY = void 0, l.touchesStart.x = void 0, l.touchesStart.y = void 0, o.imageWrapEl.style.transitionDuration = "300ms", o.imageWrapEl.style.transform = "translate3d(0,0,0)", o.imageEl.style.transitionDuration = "300ms", o.imageEl.style.transform = "translate3d(0,0,0) scale(1)", o.slideEl.classList.remove(`${P.zoomedSlideClass}`), o.slideEl = void 0, o.originX = 0, o.originY = 0, P.panOnMouseMove && (r = { x: 0, y: 0 }, d && (d = !1, l.startX = 0, l.startY = 0)));
  }
  function z(O) {
    const P = e.zoom;
    P.scale && P.scale !== 1 ? I() : X(O);
  }
  function $() {
    const O = e.params.passiveListeners ? { passive: !0, capture: !1 } : !1, P = e.params.passiveListeners ? { passive: !1, capture: !0 } : !0;
    return { passiveListener: O, activeListenerWithCapture: P };
  }
  function H() {
    const O = e.zoom;
    if (O.enabled)
      return;
    O.enabled = !0;
    const { passiveListener: P, activeListenerWithCapture: D } = $();
    e.wrapperEl.addEventListener("pointerdown", A, P), e.wrapperEl.addEventListener("pointermove", w, D), ["pointerup", "pointercancel", "pointerout"].forEach((G) => {
      e.wrapperEl.addEventListener(G, x, P);
    }), e.wrapperEl.addEventListener("pointermove", _, D);
  }
  function j() {
    const O = e.zoom;
    if (!O.enabled)
      return;
    O.enabled = !1;
    const { passiveListener: P, activeListenerWithCapture: D } = $();
    e.wrapperEl.removeEventListener("pointerdown", A, P), e.wrapperEl.removeEventListener("pointermove", w, D), ["pointerup", "pointercancel", "pointerout"].forEach((G) => {
      e.wrapperEl.removeEventListener(G, x, P);
    }), e.wrapperEl.removeEventListener("pointermove", _, D);
  }
  s("init", () => {
    n().enabled && H();
  }), s("destroy", () => {
    j();
  }), s("touchStart", (O, P) => {
    e.zoom.enabled && M(P);
  }), s("touchEnd", () => {
    e.zoom.enabled && R();
  }), s("doubleTap", (O, P) => {
    !e.animating && n().enabled && e.zoom.enabled && n().toggle && z(P);
  }), s("transitionEnd", () => {
    e.zoom.enabled && n().enabled && V();
  }), s("slideChange", () => {
    e.zoom.enabled && n().enabled && e.params.cssMode && V();
  }), Object.assign(e.zoom, {
    enable: H,
    disable: j,
    in: X,
    out: I,
    toggle: z
  });
};
class ct {
  x;
  y;
  lastIndex;
  binarySearch;
  constructor(t, s) {
    let a, n, i;
    this.binarySearch = (u, d) => {
      for (n = -1, a = u.length; a - n > 1; )
        i = a + n >> 1, u[i] <= d ? n = i : a = i;
      return a;
    }, this.x = t, this.y = s, this.lastIndex = t.length - 1;
  }
  interpolate(t) {
    if (!t)
      return 0;
    const s = this.binarySearch(this.x, t), a = s - 1;
    return (t - this.x[a]) * (this.y[s] - this.y[a]) / (this.x[s] - this.x[a]) + this.y[a];
  }
}
const oa = ({ swiper: e, extendParams: t, on: s }) => {
  t({
    controller: {
      control: void 0,
      inverse: !1,
      by: "slide"
      // or 'container'
    }
  }), e.controller = {
    control: void 0
  };
  function a() {
    return e.params.controller;
  }
  function n(r) {
    e.controller.spline = e.params.loop ? new ct(e.slidesGrid, r.slidesGrid) : new ct(e.snapGrid, r.snapGrid);
  }
  function i(r, p) {
    const c = e.controller.control;
    let f, T;
    const o = e.constructor;
    function l(g) {
      if (g.destroyed)
        return;
      const S = e.rtlTranslate ? -e.translate : e.translate, E = a();
      E.by === "slide" ? (n(g), T = -e.controller.spline.interpolate(-S)) : T = 0, (!T || E.by === "container") && (f = (g.maxTranslate() - g.minTranslate()) / (e.maxTranslate() - e.minTranslate()), (Number.isNaN(f) || !Number.isFinite(f)) && (f = 1), T = (S - e.minTranslate()) * f + g.minTranslate()), E.inverse && (T = g.maxTranslate() - T), g.updateProgress(T), g.setTranslate(T, e), g.updateActiveIndex(), g.updateSlidesClasses();
    }
    if (Array.isArray(c))
      for (let g = 0; g < c.length; g += 1) {
        const S = c[g];
        S && S !== p && S instanceof o && l(S);
      }
    else c instanceof o && p !== c && l(c);
  }
  function u(r, p) {
    const c = e.constructor, f = e.controller.control;
    function T(o) {
      o.destroyed || (o.setTransition(r, e), r !== 0 && (o.transitionStart(), o.params.autoHeight && Ee(() => {
        o.updateAutoHeight();
      }), xe(o.wrapperEl, () => {
        f && o.transitionEnd();
      })));
    }
    if (Array.isArray(f))
      for (let o = 0; o < f.length; o += 1) {
        const l = f[o];
        l && l !== p && l instanceof c && T(l);
      }
    else f instanceof c && p !== f && T(f);
  }
  function d() {
    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
  }
  s("beforeInit", () => {
    const r = a().control;
    if (typeof window < "u" && (typeof r == "string" || r instanceof HTMLElement)) {
      (typeof r == "string" ? [...document.querySelectorAll(r)] : [r]).forEach((c) => {
        e.controller.control || (e.controller.control = []);
        const f = e.controller.control;
        if (c && c.swiper)
          f.push(c.swiper);
        else if (c) {
          const T = `${e.params.eventsPrefix}init`, o = (l) => {
            const g = l.detail;
            g && g[0] && f.push(g[0]), e.update(), c.removeEventListener(T, o);
          };
          c.addEventListener(T, o);
        }
      });
      return;
    }
    e.controller.control = r;
  }), s("update", () => {
    d();
  }), s("resize", () => {
    d();
  }), s("observerUpdate", () => {
    d();
  }), s("setTranslate", (r, p, c) => {
    e.controller.control && (!Array.isArray(e.controller.control) && e.controller.control.destroyed || e.controller.setTranslate(p, c));
  }), s("setTransition", (r, p, c) => {
    e.controller.control && (!Array.isArray(e.controller.control) && e.controller.control.destroyed || e.controller.setTransition(p, c));
  }), Object.assign(e.controller, {
    setTranslate: i,
    setTransition: u
  });
}, ft = (e) => !!e.virtual && !!e.params.virtual?.enabled, da = ({ swiper: e, extendParams: t, on: s }) => {
  t({
    a11y: {
      enabled: !0,
      notificationClass: "swiper-notification",
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
      firstSlideMessage: "This is the first slide",
      lastSlideMessage: "This is the last slide",
      paginationBulletMessage: "Go to slide {{index}}",
      slideLabelMessage: "{{index}} / {{slidesLength}}",
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      containerRole: null,
      itemRoleDescriptionMessage: null,
      slideRole: "group",
      id: null,
      scrollOnFocus: !0,
      wrapperLiveRegion: !0
    }
  }), e.a11y = {
    clicked: !1
  };
  let a = null, n = !1, i, u = (/* @__PURE__ */ new Date()).getTime();
  function d() {
    return e.params.a11y;
  }
  function r(I) {
    const z = a;
    !z || !I || re(z, I);
  }
  function p(I = 16) {
    const z = () => Math.round(16 * Math.random()).toString(16);
    return "x".repeat(I).replace(/x/g, z);
  }
  function c(I) {
    U(I).forEach(($) => {
      $.setAttribute("tabIndex", "0");
    });
  }
  function f(I) {
    U(I).forEach(($) => {
      $.setAttribute("tabIndex", "-1");
    });
  }
  function T(I, z) {
    U(I).forEach((H) => {
      H.setAttribute("role", z);
    });
  }
  function o(I, z) {
    U(I).forEach((H) => {
      H.setAttribute("aria-roledescription", z);
    });
  }
  function l(I, z) {
    U(I).forEach((H) => {
      H.setAttribute("aria-label", z);
    });
  }
  function g(I, z) {
    U(I).forEach((H) => {
      H.setAttribute("id", z);
    });
  }
  function S(I, z) {
    U(I).forEach((H) => {
      H.setAttribute("aria-live", z);
    });
  }
  function E(I) {
    U(I).forEach(($) => {
      $.setAttribute("aria-disabled", "true");
    });
  }
  function h(I) {
    U(I).forEach(($) => {
      $.removeAttribute("aria-disabled");
    });
  }
  function m(I) {
    if (I.keyCode !== 13 && I.keyCode !== 32)
      return;
    const z = d(), $ = e.params.pagination, H = I.target;
    if (!(e.pagination && e.pagination.el && (H === e.pagination.el || e.pagination.el.contains(H)) && !H.matches(de($?.bulletClass)))) {
      if (e.navigation && e.navigation.prevEl && e.navigation.nextEl) {
        const j = U(e.navigation.prevEl);
        U(e.navigation.nextEl).includes(H) && (e.isEnd && !e.params.loop || e.slideNext(), e.isEnd ? r(z.lastSlideMessage) : r(z.nextSlideMessage)), j.includes(H) && (e.isBeginning && !e.params.loop || e.slidePrev(), e.isBeginning ? r(z.firstSlideMessage) : r(z.prevSlideMessage));
      }
      e.pagination && H.matches(de($?.bulletClass)) && H.click();
    }
  }
  function v() {
    if (e.params.loop || e.params.rewind || !e.navigation)
      return;
    const { nextEl: I, prevEl: z } = e.navigation;
    z && (e.isBeginning ? (E(z), f(z)) : (h(z), c(z))), I && (e.isEnd ? (E(I), f(I)) : (h(I), c(I)));
  }
  function y() {
    return !!(e.pagination && e.pagination.bullets && e.pagination.bullets.length);
  }
  function C() {
    const I = e.params.pagination;
    return y() && !!I?.clickable;
  }
  function A() {
    const I = d();
    if (!y())
      return;
    const z = e.params.pagination;
    e.pagination.bullets.forEach(($) => {
      z.clickable && (c($), z.renderBullet || (T($, "button"), l($, I.paginationBulletMessage.replace(/\{\{index\}\}/, String((Le($) ?? 0) + 1))))), $.matches(de(z.bulletActiveClass)) ? $.setAttribute("aria-current", "true") : $.removeAttribute("aria-current");
    });
  }
  const w = (I, z, $) => {
    c(I), I.tagName !== "BUTTON" && (T(I, "button"), I.addEventListener("keydown", m)), l(I, $);
  }, x = (I) => {
    i && i !== I.target && !i.contains(I.target) && (n = !0), e.a11y.clicked = !0;
  }, k = () => {
    n = !1, requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        e.destroyed || (e.a11y.clicked = !1);
      });
    });
  }, b = (I) => {
    u = (/* @__PURE__ */ new Date()).getTime();
  };
  let L = [];
  const M = () => {
    L.forEach((I) => I.removeAttribute("inert")), L = [];
  }, _ = (I) => {
    if (I.key !== "Tab" || !e.params.loop || e.destroyed)
      return;
    const $ = I.target?.closest?.(`.${e.params.slideClass}, swiper-slide`);
    if (!$ || !e.slides.includes($))
      return;
    const H = parseInt($.getAttribute("data-swiper-slide-index") || "", 10);
    if (Number.isNaN(H))
      return;
    const j = ft(e) ? e.virtual.slides.length : e.slides.length;
    (I.shiftKey ? H === 0 : H === j - 1) && (M(), e.slides.forEach((P) => {
      P === $ || P.hasAttribute("inert") || (P.setAttribute("inert", ""), L.push(P));
    }), setTimeout(M, 0));
  }, R = (I) => {
    const z = d();
    if (e.a11y.clicked || !z.scrollOnFocus || (/* @__PURE__ */ new Date()).getTime() - u < 100)
      return;
    const H = I.target.closest(`.${e.params.slideClass}, swiper-slide`);
    if (!H || !e.slides.includes(H))
      return;
    i = H;
    const j = ft(e), O = (j ? parseInt(H.getAttribute("data-swiper-slide-index") || "0", 10) : e.slides.indexOf(H)) === e.activeIndex, P = e.params.watchSlidesProgress && e.visibleSlides && e.visibleSlides.includes(H);
    if (O || P)
      return;
    const D = I.sourceCapabilities;
    D && D.firesTouchEvents || (e.isHorizontal() ? e.el.scrollLeft = 0 : e.el.scrollTop = 0, requestAnimationFrame(() => {
      n || (e.params.loop ? e.slideToLoop(e.getSlideIndexWhenGrid(parseInt(H.getAttribute("data-swiper-slide-index") || "0", 10)), 0) : j ? e.slideTo(e.getSlideIndexWhenGrid(parseInt(H.getAttribute("data-swiper-slide-index") || "0", 10)), 0) : e.slideTo(e.getSlideIndexWhenGrid(e.slides.indexOf(H)), 0), n = !1);
    }));
  }, V = () => {
    const I = d();
    I.itemRoleDescriptionMessage && o(e.slides, I.itemRoleDescriptionMessage), I.slideRole && T(e.slides, I.slideRole);
    const z = e.slides.length, $ = I.slideLabelMessage;
    $ && e.slides.forEach((H, j) => {
      const O = e.params.loop ? parseInt(H.getAttribute("data-swiper-slide-index") || "0", 10) : j, P = $.replace(/\{\{index\}\}/, String(O + 1)).replace(/\{\{slidesLength\}\}/, String(z));
      l(H, P);
    });
  }, F = () => {
    const I = d();
    a && e.el.append(a);
    const z = e.el;
    I.containerRoleDescriptionMessage && o(z, I.containerRoleDescriptionMessage), I.containerMessage && l(z, I.containerMessage), I.containerRole && T(z, I.containerRole);
    const $ = e.wrapperEl, H = String(I.id || $.getAttribute("id") || `swiper-wrapper-${p(16)}`);
    if (g($, H), I.wrapperLiveRegion) {
      const D = e.params.autoplay, G = e.params.autoplay && D?.enabled ? "off" : "polite";
      S($, G);
    }
    V();
    const j = e.navigation ? e.navigation : { nextEl: void 0, prevEl: void 0 }, O = U(j.nextEl), P = U(j.prevEl);
    O && O.forEach((D) => w(D, H, I.nextSlideMessage)), P && P.forEach((D) => w(D, H, I.prevSlideMessage)), C() && U(e.pagination.el).forEach((G) => {
      G.addEventListener("keydown", m);
    }), document.addEventListener("visibilitychange", b), e.el.addEventListener("focus", R, !0), e.el.addEventListener("keydown", _, !0), e.el.addEventListener("pointerdown", x, !0), e.el.addEventListener("pointerup", k, !0);
  };
  function X() {
    a && a.remove();
    const I = e.navigation ? e.navigation : { nextEl: void 0, prevEl: void 0 }, z = U(I.nextEl), $ = U(I.prevEl);
    z && z.forEach((H) => H.removeEventListener("keydown", m)), $ && $.forEach((H) => H.removeEventListener("keydown", m)), C() && U(e.pagination.el).forEach((j) => {
      j.removeEventListener("keydown", m);
    }), document.removeEventListener("visibilitychange", b), e.el && typeof e.el != "string" && (e.el.removeEventListener("focus", R, !0), e.el.removeEventListener("keydown", _, !0), e.el.removeEventListener("pointerdown", x, !0), e.el.removeEventListener("pointerup", k, !0)), M();
  }
  s("beforeInit", () => {
    a = ne("span", d().notificationClass), a.setAttribute("aria-live", "assertive"), a.setAttribute("aria-atomic", "true");
  }), s("afterInit", () => {
    d().enabled && F();
  }), s("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
    d().enabled && V();
  }), s("fromEdge toEdge afterInit lock unlock", () => {
    d().enabled && v();
  }), s("paginationUpdate", () => {
    d().enabled && A();
  }), s("destroy", () => {
    d().enabled && X();
  });
}, ca = ({ swiper: e, extendParams: t, on: s }) => {
  t({
    history: {
      enabled: !1,
      root: "",
      replaceState: !1,
      key: "slides",
      keepQuery: !1
    }
  });
  let a = !1, n = { key: void 0, value: void 0 };
  function i() {
    return e.params.history;
  }
  const u = (o) => o.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""), d = (o) => {
    let l;
    o ? l = new URL(o) : l = window.location;
    const g = l.pathname.slice(1).split("/").filter((m) => m !== ""), S = g.length, E = g[S - 2], h = g[S - 1];
    return { key: E, value: h };
  }, r = (o, l) => {
    const g = i();
    if (!a || !g.enabled)
      return;
    let S;
    e.params.url ? S = new URL(e.params.url) : S = window.location;
    const E = !!e.params.virtual?.enabled, h = e.virtual && E ? e.slidesEl.querySelector(`[data-swiper-slide-index="${l}"]`) : e.slides[l];
    if (!h)
      return;
    let m = u(h.getAttribute("data-history") || "");
    const v = g.root;
    v.length > 0 ? m = `${v[v.length - 1] === "/" ? v.slice(0, v.length - 1) : v}/${o ? `${o}/` : ""}${m}` : S.pathname.includes(o || "") || (m = `${o ? `${o}/` : ""}${m}`), g.keepQuery && (m += S.search);
    const y = window.history.state;
    y && y.value === m || (g.replaceState ? window.history.replaceState({ value: m }, "", m) : window.history.pushState({ value: m }, "", m));
  }, p = (o, l, g) => {
    if (l)
      for (let S = 0, E = e.slides.length; S < E; S += 1) {
        const h = e.slides[S];
        if (u(h.getAttribute("data-history") || "") === l) {
          const v = e.getSlideIndex(h);
          e.slideTo(v, o, g);
        }
      }
    else
      e.slideTo(0, o, g);
  }, c = () => {
    n = d(e.params.url), p(e.params.speed, n.value, !1);
  }, f = () => {
    const o = e.params.history;
    if (o) {
      if (!window.history || !window.history.pushState) {
        o.enabled = !1;
        const l = e.params.hashNavigation;
        l && (l.enabled = !0);
        return;
      }
      if (a = !0, n = d(e.params.url), !n.key && !n.value) {
        o.replaceState || window.addEventListener("popstate", c);
        return;
      }
      p(0, n.value, e.params.runCallbacksOnInit), o.replaceState || window.addEventListener("popstate", c);
    }
  }, T = () => {
    i().replaceState || window.removeEventListener("popstate", c);
  };
  s("init", () => {
    i().enabled && f();
  }), s("destroy", () => {
    i().enabled && T();
  }), s("transitionEnd _freeModeNoMomentumRelease", () => {
    a && r(i().key, e.activeIndex);
  }), s("slideChange", () => {
    a && e.params.cssMode && r(i().key, e.activeIndex);
  });
}, qe = (e) => !!e.virtual && !!e.params.virtual?.enabled, fa = ({ swiper: e, extendParams: t, emit: s, on: a }) => {
  let n = !1;
  t({
    hashNavigation: {
      enabled: !1,
      replaceState: !1,
      watchState: !1,
      getSlideIndex(c, f) {
        if (qe(e)) {
          const o = e.slides.find((g) => g.getAttribute("data-hash") === f);
          return o ? parseInt(o.getAttribute("data-swiper-slide-index") || "0", 10) : 0;
        }
        const T = Q(e.slidesEl, `.${e.params.slideClass}[data-hash="${f}"], swiper-slide[data-hash="${f}"]`)[0];
        return T ? e.getSlideIndex(T) : 0;
      }
    }
  });
  function i() {
    return e.params.hashNavigation;
  }
  const u = () => {
    s("hashChange");
    const c = document.location.hash.replace("#", ""), f = qe(e) ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex], T = f ? f.getAttribute("data-hash") : "";
    if (c !== T) {
      const o = i().getSlideIndex(e, c);
      if (typeof o > "u" || Number.isNaN(o))
        return;
      e.slideTo(o);
    }
  }, d = () => {
    const c = i();
    if (!n || !c.enabled)
      return;
    const f = qe(e) ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex], T = f ? f.getAttribute("data-hash") || f.getAttribute("data-history") : "";
    c.replaceState && window.history && window.history.replaceState ? (window.history.replaceState(null, "", `#${T}` || ""), s("hashSet")) : (document.location.hash = T || "", s("hashSet"));
  }, r = () => {
    const c = i(), f = e.params.history;
    if (!c.enabled || f && f.enabled)
      return;
    n = !0;
    const T = document.location.hash.replace("#", "");
    if (T) {
      const l = c.getSlideIndex(e, T);
      e.slideTo(l || 0, 0, e.params.runCallbacksOnInit, !0);
    }
    c.watchState && window.addEventListener("hashchange", u);
  }, p = () => {
    i().watchState && window.removeEventListener("hashchange", u);
  };
  a("init", () => {
    i().enabled && r();
  }), a("destroy", () => {
    i().enabled && p();
  }), a("transitionEnd _freeModeNoMomentumRelease", () => {
    n && d();
  }), a("slideChange", () => {
    n && e.params.cssMode && d();
  });
}, ua = ({ swiper: e, extendParams: t, on: s, emit: a, params: n }) => {
  e.autoplay = {
    running: !1,
    paused: !1,
    timeLeft: 0
  }, t({
    autoplay: {
      enabled: !1,
      delay: 3e3,
      waitForTransition: !0,
      disableOnInteraction: !1,
      stopOnLastSlide: !1,
      reverseDirection: !1,
      pauseOnMouseEnter: !1
    }
  });
  function i() {
    return e.params.autoplay;
  }
  const u = typeof n.autoplay == "object" && n.autoplay && typeof n.autoplay.delay == "number" ? n.autoplay.delay : 3e3;
  let d, r, p = u, c = u, f = 0, T = (/* @__PURE__ */ new Date()).getTime(), o = !1, l = !1, g = !1, S, E = !1, h = !1;
  function m(I) {
    if (!e || e.destroyed || !e.wrapperEl || I.target !== e.wrapperEl)
      return;
    e.wrapperEl.removeEventListener("transitionend", m);
    const z = I.detail;
    h || z && z.bySwiperTouchMove || b();
  }
  const v = () => {
    if (e.destroyed || !e.autoplay.running)
      return;
    e.autoplay.paused ? o = !0 : o && (c = f, o = !1);
    const I = e.autoplay.paused ? f : T + c - (/* @__PURE__ */ new Date()).getTime();
    e.autoplay.timeLeft = I, a("autoplayTimeLeft", I, I / p), r = requestAnimationFrame(() => {
      v();
    });
  }, y = () => {
    let I;
    const z = !!e.params.virtual?.enabled;
    if (e.virtual && z ? I = e.slides.find((H) => H.classList.contains("swiper-slide-active")) : I = e.slides[e.activeIndex], !I)
      return;
    const $ = I.getAttribute("data-swiper-autoplay");
    if ($ != null)
      return parseInt($, 10);
  }, C = () => {
    let I = i().delay;
    const z = y();
    return typeof z == "number" && !Number.isNaN(z) && z > 0 && (I = z), I;
  }, A = (I) => {
    if (e.destroyed || !e.autoplay.running)
      return 0;
    r !== void 0 && cancelAnimationFrame(r), v();
    let z = I;
    typeof z > "u" && (z = C(), p = z, c = z), f = z;
    const $ = e.params.speed, H = () => {
      if (!e || e.destroyed)
        return;
      const j = i();
      j.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev($, !0, !0), a("autoplay")) : j.stopOnLastSlide || (e.slideTo(e.slides.length - 1, $, !0, !0), a("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext($, !0, !0), a("autoplay")) : j.stopOnLastSlide || (e.slideTo(0, $, !0, !0), a("autoplay")), e.params.cssMode && (T = (/* @__PURE__ */ new Date()).getTime(), requestAnimationFrame(() => {
        A();
      }));
    };
    return z > 0 ? (d !== void 0 && clearTimeout(d), d = setTimeout(() => {
      H();
    }, z)) : requestAnimationFrame(() => {
      H();
    }), z;
  }, w = () => (T = (/* @__PURE__ */ new Date()).getTime(), e.autoplay.running = !0, A(), a("autoplayStart"), !0), x = () => (e.autoplay.running = !1, d !== void 0 && clearTimeout(d), r !== void 0 && cancelAnimationFrame(r), a("autoplayStop"), !0), k = (I, z) => {
    if (e.destroyed || !e.autoplay.running)
      return;
    d !== void 0 && clearTimeout(d), I || (E = !0);
    const $ = () => {
      a("autoplayPause"), i().waitForTransition ? e.wrapperEl.addEventListener("transitionend", m) : b();
    };
    if (e.autoplay.paused = !0, z) {
      $();
      return;
    }
    f = (f || i().delay) - ((/* @__PURE__ */ new Date()).getTime() - T), !(e.isEnd && f < 0 && !e.params.loop) && (f < 0 && (f = 0), $());
  }, b = () => {
    e.isEnd && f < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (T = (/* @__PURE__ */ new Date()).getTime(), E ? (E = !1, A(f)) : A(), e.autoplay.paused = !1, a("autoplayResume"));
  }, L = () => {
    e.destroyed || !e.autoplay.running || (document.visibilityState === "hidden" && (E = !0, k(!0)), document.visibilityState === "visible" && b());
  }, M = (I) => {
    I.pointerType === "mouse" && (E = !0, h = !0, !(e.animating || e.autoplay.paused) && k(!0));
  }, _ = (I) => {
    I.pointerType === "mouse" && (h = !1, e.autoplay.paused && b());
  }, R = () => {
    i().pauseOnMouseEnter && (e.el.addEventListener("pointerenter", M), e.el.addEventListener("pointerleave", _));
  }, V = () => {
    e.el && typeof e.el != "string" && (e.el.removeEventListener("pointerenter", M), e.el.removeEventListener("pointerleave", _));
  }, F = () => {
    document.addEventListener("visibilitychange", L);
  }, X = () => {
    document.removeEventListener("visibilitychange", L);
  };
  s("init", () => {
    i().enabled && (R(), F(), w());
  }), s("destroy", () => {
    V(), X(), e.autoplay.running && x();
  }), s("_freeModeStaticRelease", () => {
    (g || E) && b();
  }), s("_freeModeNoMomentumRelease", () => {
    i().disableOnInteraction ? x() : k(!0, !0);
  }), s("beforeTransitionStart", (I, z, $) => {
    e.destroyed || !e.autoplay.running || ($ || !i().disableOnInteraction ? k(!0, !0) : x());
  }), s("sliderFirstMove", () => {
    if (!(e.destroyed || !e.autoplay.running)) {
      if (i().disableOnInteraction) {
        x();
        return;
      }
      l = !0, g = !1, E = !1, S = setTimeout(() => {
        E = !0, g = !0, k(!0);
      }, 200);
    }
  }), s("touchEnd", () => {
    if (!(e.destroyed || !e.autoplay.running || !l)) {
      if (S !== void 0 && clearTimeout(S), d !== void 0 && clearTimeout(d), i().disableOnInteraction) {
        g = !1, l = !1;
        return;
      }
      g && e.params.cssMode && b(), g = !1, l = !1;
    }
  }), s("slideChange", () => {
    e.destroyed || !e.autoplay.running || e.autoplay.paused && (f = C(), p = C());
  }), Object.assign(e.autoplay, {
    start: w,
    stop: x,
    pause: k,
    resume: b
  });
}, pa = ({ swiper: e, extendParams: t, on: s }) => {
  t({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: !0,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-thumbs"
    }
  });
  let a = !1, n = !1;
  e.thumbs = {
    swiper: null
  };
  function i() {
    return e.params.thumbs;
  }
  function u() {
    const f = e.thumbs.swiper;
    if (!f || f.destroyed)
      return !1;
    const T = f.params.virtual;
    return !!T && !!T.enabled;
  }
  function d() {
    const f = e.thumbs.swiper;
    if (!f || f.destroyed)
      return;
    const T = f.clickedIndex, o = f.clickedSlide, l = i();
    if (o && o.classList.contains(l.slideThumbActiveClass) || typeof T > "u" || T === null)
      return;
    let g;
    if (f.params.loop) {
      const S = f.clickedSlide?.getAttribute("data-swiper-slide-index");
      g = S == null ? T : parseInt(S, 10);
    } else
      g = T;
    e.params.loop ? e.slideToLoop(g) : e.slideTo(g);
  }
  function r() {
    const f = i();
    if (a)
      return !1;
    a = !0;
    const T = e.constructor;
    if (f.swiper instanceof T) {
      if (f.swiper.destroyed)
        return a = !1, !1;
      const l = f.swiper;
      e.thumbs.swiper = l, Object.assign(l.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), Object.assign(l.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), l.update();
    } else if (_e(f.swiper)) {
      const l = Object.assign({}, f.swiper);
      Object.assign(l, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), e.thumbs.swiper = new T(l), n = !0;
    }
    const o = e.thumbs.swiper;
    return o ? (o.el.classList.add(f.thumbsContainerClass), o.on("tap", d), u() && o.on("virtualUpdate", () => {
      p(!1, { autoScroll: !1 });
    }), !0) : !1;
  }
  function p(f, T) {
    const o = e.thumbs.swiper;
    if (!o || o.destroyed)
      return;
    let l = 1;
    const g = i(), S = g.slideThumbActiveClass, E = e.params.slidesPerView;
    if (typeof E == "number" && E > 1 && !e.params.centeredSlides && (l = E), g.multipleActiveThumbs || (l = 1), l = Math.floor(l), o.slides.forEach((h) => h.classList.remove(S)), o.params.loop || u())
      for (let h = 0; h < l; h += 1)
        Q(o.slidesEl, `[data-swiper-slide-index="${e.realIndex + h}"]`).forEach((m) => {
          m.classList.add(S);
        });
    else
      for (let h = 0; h < l; h += 1) {
        const m = o.slides[e.realIndex + h];
        m && m.classList.add(S);
      }
    (T?.autoScroll ?? !0) && c(f ? 0 : void 0);
  }
  function c(f) {
    const T = e.thumbs.swiper;
    if (!T || T.destroyed)
      return;
    const o = T.params.slidesPerView, l = o === "auto" ? T.slidesPerViewDynamic() : o ?? 1, g = i().autoScrollOffset, S = g && !T.params.loop;
    if (e.realIndex !== T.realIndex || S) {
      const E = T.activeIndex;
      let h, m;
      if (T.params.loop) {
        const v = T.slides.find((y) => y.getAttribute("data-swiper-slide-index") === `${e.realIndex}`);
        h = v ? T.slides.indexOf(v) : -1, m = e.activeIndex > e.previousIndex ? "next" : "prev";
      } else
        h = e.realIndex, m = h > e.previousIndex ? "next" : "prev";
      S && (h += m === "next" ? g : -1 * g), T.visibleSlidesIndexes && T.visibleSlidesIndexes.indexOf(h) < 0 && (T.params.centeredSlides ? h > E ? h = h - Math.floor(l / 2) + 1 : h = h + Math.floor(l / 2) - 1 : h > E && T.params.slidesPerGroup, T.slideTo(h, f));
    }
  }
  s("beforeInit", () => {
    const f = e.params.thumbs;
    if (!(!f || !f.swiper))
      if (typeof f.swiper == "string" || f.swiper instanceof HTMLElement) {
        const T = () => {
          const l = typeof f.swiper == "string" ? document.querySelector(f.swiper) : f.swiper;
          if (l && l.swiper)
            f.swiper = l.swiper, r(), p(!0);
          else if (l) {
            const g = `${e.params.eventsPrefix}init`, S = (E) => {
              const h = E.detail;
              f.swiper = h[0], l.removeEventListener(g, S), r(), p(!0), f.swiper.update(), e.update();
            };
            l.addEventListener(g, S);
          }
          return l;
        }, o = () => {
          if (e.destroyed)
            return;
          T() || requestAnimationFrame(o);
        };
        requestAnimationFrame(o);
      } else
        r(), p(!0);
  }), s("slideChange update resize observerUpdate", () => {
    p();
  }), s("setTransition", (f, T) => {
    const o = e.thumbs.swiper;
    !o || o.destroyed || o.setTransition(T);
  }), s("beforeDestroy", () => {
    const f = e.thumbs.swiper;
    !f || f.destroyed || n && f.destroy();
  }), Object.assign(e.thumbs, {
    init: r,
    update: p
  });
}, ma = ({ swiper: e, extendParams: t, emit: s, once: a }) => {
  t({
    freeMode: {
      enabled: !1,
      momentum: !0,
      momentumRatio: 1,
      momentumBounce: !0,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: !1,
      minimumVelocity: 0.02
    }
  });
  function n() {
    return e.params.freeMode;
  }
  function i() {
    if (e.params.cssMode)
      return;
    const r = e.getTranslate();
    e.setTranslate(r), e.setTransition(0), e.touchEventsData.velocities.length = 0, e.freeMode.onTouchEnd({ currentPos: e.rtl ? e.translate : -e.translate });
  }
  function u() {
    if (e.params.cssMode)
      return;
    const { touchEventsData: r, touches: p } = e;
    r.velocities.length === 0 && r.velocities.push({
      position: p[e.isHorizontal() ? "startX" : "startY"],
      time: r.touchStartTime ?? ae()
    }), r.velocities.push({
      position: p[e.isHorizontal() ? "currentX" : "currentY"],
      time: ae()
    });
  }
  function d({ currentPos: r }) {
    if (e.params.cssMode)
      return;
    const { wrapperEl: p, rtlTranslate: c, snapGrid: f, touchEventsData: T } = e, o = e.params, l = n(), g = ae(), S = g - (T.touchStartTime ?? g);
    if (r < -e.minTranslate()) {
      e.slideTo(e.activeIndex);
      return;
    }
    if (r > -e.maxTranslate()) {
      e.slides.length < f.length ? e.slideTo(f.length - 1) : e.slideTo(e.slides.length - 1);
      return;
    }
    if (l.momentum) {
      if (T.velocities.length > 1) {
        const w = T.velocities.pop(), x = T.velocities.pop(), k = w.position - x.position, b = w.time - x.time;
        e.velocity = k / b, e.velocity /= 2, Math.abs(e.velocity) < l.minimumVelocity && (e.velocity = 0), (b > 150 || ae() - w.time > 300) && (e.velocity = 0);
      } else
        e.velocity = 0;
      e.velocity *= l.momentumVelocityRatio, T.velocities.length = 0;
      let E = 1e3 * l.momentumRatio;
      const h = e.velocity * E;
      let m = e.translate + h;
      c && (m = -m);
      let v = !1, y;
      const C = Math.abs(e.velocity) * 20 * l.momentumBounceRatio;
      let A = !1;
      if (m < e.maxTranslate())
        l.momentumBounce ? (m + e.maxTranslate() < -C && (m = e.maxTranslate() - C), y = e.maxTranslate(), v = !0, T.allowMomentumBounce = !0) : m = e.maxTranslate(), o.loop && o.centeredSlides && (A = !0);
      else if (m > e.minTranslate())
        l.momentumBounce ? (m - e.minTranslate() > C && (m = e.minTranslate() + C), y = e.minTranslate(), v = !0, T.allowMomentumBounce = !0) : m = e.minTranslate(), o.loop && o.centeredSlides && (A = !0);
      else if (l.sticky) {
        let w = 0;
        for (let x = 0; x < f.length; x += 1)
          if (f[x] > -m) {
            w = x;
            break;
          }
        Math.abs(f[w] - m) < Math.abs((f[w - 1] ?? f[w]) - m) || e.swipeDirection === "next" ? m = f[w] : m = f[w - 1], m = -m;
      }
      if (A && a("transitionEnd", () => {
        e.loopFix();
      }), e.velocity !== 0) {
        if (c ? E = Math.abs((-m - e.translate) / e.velocity) : E = Math.abs((m - e.translate) / e.velocity), l.sticky) {
          const w = Math.abs((c ? -m : m) - e.translate), x = e.slidesSizesGrid[e.activeIndex], k = o.speed;
          w < x ? E = k : w < 2 * x ? E = k * 1.5 : E = k * 2.5;
        }
      } else if (l.sticky) {
        e.slideToClosest();
        return;
      }
      l.momentumBounce && v && y !== void 0 ? (e.updateProgress(y), e.setTransition(E), e.setTranslate(m), e.transitionStart(!0, e.swipeDirection), e.animating = !0, xe(p, () => {
        !e || e.destroyed || !T.allowMomentumBounce || (s("momentumBounce"), e.setTransition(o.speed), setTimeout(() => {
          e.setTranslate(y), xe(p, () => {
            !e || e.destroyed || e.transitionEnd();
          });
        }, 0));
      })) : e.velocity ? (s("_freeModeNoMomentumRelease"), e.updateProgress(m), e.setTransition(E), e.setTranslate(m), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, xe(p, () => {
        !e || e.destroyed || e.transitionEnd();
      }))) : e.updateProgress(m), e.updateActiveIndex(), e.updateSlidesClasses();
    } else if (l.sticky) {
      e.slideToClosest();
      return;
    } else
      s("_freeModeNoMomentumRelease");
    (!l.momentum || S >= o.longSwipesMs) && (s("_freeModeStaticRelease"), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses());
  }
  e.freeMode = {
    onTouchStart: i,
    onTouchMove: u,
    onTouchEnd: d
  };
}, ha = ({ swiper: e, extendParams: t, on: s }) => {
  t({
    grid: {
      rows: 1,
      fill: "column"
    }
  });
  function a() {
    return e.params.grid;
  }
  let n, i, u, d;
  const r = () => {
    let S = e.params.spaceBetween ?? 0;
    return typeof S == "string" && S.indexOf("%") >= 0 ? S = parseFloat(S.replace("%", "")) / 100 * e.size : typeof S == "string" && (S = parseFloat(S)), S;
  }, p = () => {
    const S = e.params.virtual;
    return !!e.virtual && typeof S == "object" && S !== null && !!S.enabled;
  }, c = (S) => {
    const { slidesPerView: E } = e.params, { rows: h, fill: m } = a(), v = p() ? e.virtual.slides.length : S.length;
    u = Math.floor(v / h), Math.floor(v / h) === v / h ? n = v : n = Math.ceil(v / h) * h, E !== "auto" && m === "row" && (n = Math.max(n, Math.floor(E ?? 1) * h)), i = n / h;
  }, f = () => {
    e.slides && e.slides.forEach((S) => {
      S.swiperSlideGridSet && (S.style.height = "", S.style.setProperty(e.getDirectionLabel("margin-top"), ""));
    });
  }, T = (S, E, h) => {
    const { slidesPerGroup: m } = e.params, v = r(), { rows: y, fill: C } = a(), A = p() ? e.virtual.slides.length : h.length;
    let w, x, k;
    if (C === "row" && (m ?? 1) > 1) {
      const L = m ?? 1, M = Math.floor(S / (L * y)), _ = S - y * L * M, R = M === 0 ? L : Math.min(Math.ceil((A - M * y * L) / y), L);
      k = Math.floor(_ / R), x = _ - k * R + M * L, w = x + k * n / y, E.style.order = String(w);
    } else C === "column" ? (x = Math.floor(S / y), k = S - x * y, (x > u || x === u && k === y - 1) && (k += 1, k >= y && (k = 0, x += 1))) : (k = Math.floor(S / i), x = S - k * i);
    const b = E;
    b.row = k, b.column = x, E.style.height = `calc((100% - ${(y - 1) * v}px) / ${y})`, E.style.setProperty(e.getDirectionLabel("margin-top"), k !== 0 && v ? `${v}px` : ""), b.swiperSlideGridSet = !0;
  }, o = (S, E) => {
    const { centeredSlides: h, roundLengths: m } = e.params, v = r(), { rows: y } = a();
    if (e.virtualSize = (S + v) * n, e.virtualSize = Math.ceil(e.virtualSize / y) - v, e.params.cssMode || e.wrapperEl.style.setProperty(e.getDirectionLabel("width"), `${e.virtualSize + v}px`), h) {
      const C = [];
      for (let A = 0; A < E.length; A += 1) {
        let w = E[A];
        m && (w = Math.floor(w)), E[A] < e.virtualSize + E[0] && C.push(w);
      }
      E.splice(0, E.length), E.push(...C);
    }
  }, l = () => {
    const S = e.params.grid;
    d = !!(S && (S.rows ?? 1) > 1);
  }, g = () => {
    const { params: S, el: E } = e, h = S.grid, m = !!(h && (h.rows ?? 1) > 1);
    d && !m ? (E.classList.remove(`${S.containerModifierClass}grid`, `${S.containerModifierClass}grid-column`), u = 1, e.emitContainerClasses()) : !d && m && (E.classList.add(`${S.containerModifierClass}grid`), h.fill === "column" && E.classList.add(`${S.containerModifierClass}grid-column`), e.emitContainerClasses()), d = m;
  };
  s("init", l), s("update", g), e.grid = {
    initSlides: c,
    unsetSlides: f,
    updateSlide: T,
    updateWrapperSize: o
  };
};
function ga(e, t) {
  const s = this, { params: a, activeIndex: n, slidesEl: i } = s;
  let u = n;
  a.loop && (u -= s.loopedSlides ?? 0, s.loopDestroy(), s.recalcSlides());
  const d = s.slides.length;
  if (e <= 0) {
    s.prependSlide(t);
    return;
  }
  if (e >= d) {
    s.appendSlide(t);
    return;
  }
  let r = u > e ? u + 1 : u;
  const p = [];
  for (let c = d - 1; c >= e; c -= 1) {
    const f = s.slides[c];
    f && (f.remove(), p.unshift(f));
  }
  if (Array.isArray(t)) {
    for (let c = 0; c < t.length; c += 1) {
      const f = t[c];
      f && i.append(f);
    }
    r = u > e ? u + t.length : u;
  } else
    i.append(t);
  for (let c = 0; c < p.length; c += 1)
    i.append(p[c]);
  s.recalcSlides(), a.loop && s.loopCreate(), (!a.observer || s.isElement) && s.update(), a.loop ? s.slideTo(r + (s.loopedSlides ?? 0), 0, !1) : s.slideTo(r, 0, !1);
}
function Ta(e) {
  const t = this, { params: s, slidesEl: a } = t;
  s.loop && t.loopDestroy();
  const n = (i) => {
    if (typeof i == "string") {
      const u = document.createElement("div");
      re(u, i);
      const d = u.children[0];
      d && a.append(d), re(u, "");
    } else
      a.append(i);
  };
  if (Array.isArray(e))
    for (let i = 0; i < e.length; i += 1) {
      const u = e[i];
      u && n(u);
    }
  else
    n(e);
  t.recalcSlides(), s.loop && t.loopCreate(), (!s.observer || t.isElement) && t.update();
}
function va(e) {
  const t = this, { params: s, activeIndex: a, slidesEl: n } = t;
  s.loop && t.loopDestroy();
  let i = a + 1;
  const u = (d) => {
    if (typeof d == "string") {
      const r = document.createElement("div");
      re(r, d);
      const p = r.children[0];
      p && n.prepend(p), re(r, "");
    } else
      n.prepend(d);
  };
  if (Array.isArray(e)) {
    for (let d = 0; d < e.length; d += 1) {
      const r = e[d];
      r && u(r);
    }
    i = a + e.length;
  } else
    u(e);
  t.recalcSlides(), s.loop && t.loopCreate(), (!s.observer || t.isElement) && t.update(), t.slideTo(i, 0, !1);
}
function Sa() {
  const e = this, t = [];
  for (let s = 0; s < e.slides.length; s += 1)
    t.push(s);
  e.removeSlide(t);
}
function Ea(e) {
  const t = this, { params: s, activeIndex: a } = t;
  let n = a;
  s.loop && (n -= t.loopedSlides ?? 0, t.loopDestroy());
  let i = n;
  if (Array.isArray(e)) {
    for (let u = 0; u < e.length; u += 1) {
      const d = e[u];
      t.slides[d] && t.slides[d].remove(), d < i && (i -= 1);
    }
    i = Math.max(i, 0);
  } else {
    const u = e;
    t.slides[u] && t.slides[u].remove(), u < i && (i -= 1), i = Math.max(i, 0);
  }
  t.recalcSlides(), s.loop && t.loopCreate(), (!s.observer || t.isElement) && t.update(), s.loop ? t.slideTo(i + (t.loopedSlides ?? 0), 0, !1) : t.slideTo(i, 0, !1);
}
const ba = ({ swiper: e }) => {
  Object.assign(e, {
    appendSlide: Ta.bind(e),
    prependSlide: va.bind(e),
    addSlide: ga.bind(e),
    removeSlide: Ea.bind(e),
    removeAllSlides: Sa.bind(e)
  });
};
function ye(e) {
  const { effect: t, swiper: s, on: a, setTranslate: n, setTransition: i, overwriteParams: u, perspective: d, recreateShadows: r, getEffectParams: p } = e;
  a("beforeInit", () => {
    if (s.params.effect !== t)
      return;
    s.classNames.push(`${s.params.containerModifierClass}${t}`), d && d() && s.classNames.push(`${s.params.containerModifierClass}3d`);
    const f = u ? u() : {};
    Object.assign(s.params, f), Object.assign(s.originalParams, f);
  }), a("setTranslate _virtualUpdated", () => {
    s.params.effect === t && n();
  }), a("setTransition", (f, T) => {
    s.params.effect === t && i(T);
  }), a("transitionEnd", () => {
    if (s.params.effect === t && r) {
      const f = p ? p() : void 0;
      if (!f || !f.slideShadows)
        return;
      s.slides.forEach((T) => {
        T.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((o) => o.remove());
      }), r();
    }
  });
  let c = !1;
  a("virtualUpdate", () => {
    s.params.effect === t && (s.slides.length || (c = !0), requestAnimationFrame(() => {
      c && s.slides && s.slides.length && (n(), c = !1);
    }));
  });
}
function Ie(e, t) {
  const s = he(t);
  return s !== t && (s.style.backfaceVisibility = "hidden", s.style.setProperty("-webkit-backface-visibility", "hidden")), s;
}
function Ce({ swiper: e, duration: t, transformElements: s, allSlides: a }) {
  const { activeIndex: n } = e, i = (u) => {
    if (!u.parentElement)
      return e.slides.find((d) => d.shadowRoot && d.shadowRoot === u.parentNode);
    if (u.parentElement instanceof HTMLElement)
      return u.parentElement;
  };
  if (e.params.virtualTranslate && t !== 0) {
    let u = !1, d;
    a ? d = s : d = s.filter((r) => {
      const p = r.classList.contains("swiper-slide-transform") ? i(r) : r;
      return !!p && e.getSlideIndex(p) === n;
    }), d.forEach((r) => {
      xe(r, () => {
        if (u || !e || e.destroyed)
          return;
        u = !0, e.animating = !1;
        const p = new CustomEvent("transitionend", { bubbles: !0, cancelable: !0 });
        e.wrapperEl.dispatchEvent(p);
      });
    });
  }
}
const ya = ({ swiper: e, extendParams: t, on: s }) => {
  t({
    fadeEffect: {
      crossFade: !1,
      mode: "default"
    }
  });
  let a = 0;
  function n() {
    return e.params.fadeEffect;
  }
  function i() {
    const r = n();
    return r.mode === "default" && r.crossFade ? "cross-fade" : r.mode;
  }
  ye({
    effect: "fade",
    swiper: e,
    on: s,
    setTranslate: () => {
      const { slides: r } = e, p = n(), c = i(), f = c === "out-in" && a > 0, T = a;
      a = 0;
      const o = [], l = [];
      let g = !1;
      for (let S = 0; S < r.length; S += 1) {
        const E = r[S];
        let m = -(E.swiperSlideOffset ?? 0);
        e.params.virtualTranslate || (m -= e.translate);
        let v = 0;
        e.isHorizontal() || (v = m, m = 0);
        const y = E.progress ?? 0;
        let C;
        c === "cross-fade" ? C = Math.max(1 - Math.abs(y), 0) : c === "out-in" ? C = Math.max(1 - 2 * Math.abs(y), 0) : C = 1 + Math.min(Math.max(y, -1), 0);
        const A = Ie(p, E);
        if (f) {
          const w = parseFloat(A.style.opacity);
          C === 0 && w > 0 && (g = !0), C > 0 && l.push(A), o.push(A);
        }
        A.style.opacity = String(C), A.style.transform = `translate3d(${m}px, ${v}px, 0px)`;
      }
      f && (o.forEach((S) => {
        const E = g && l.includes(S);
        S.style.transitionDuration = `${T / 2}ms`, S.style.transitionDelay = E ? `${T / 2}ms` : "0ms";
      }), Ce({
        swiper: e,
        duration: T,
        transformElements: l,
        allSlides: !0
      }));
    },
    setTransition: (r) => {
      const p = i(), c = e.slides.map((f) => he(f));
      if (c.forEach((f) => {
        f.style.transitionDuration = `${r}ms`, p === "out-in" && r === 0 && (f.style.transitionDelay = "");
      }), p === "out-in" && r > 0 && !e.params.cssMode) {
        a = r;
        return;
      }
      Ce({ swiper: e, duration: r, transformElements: c, allSlides: !0 });
    },
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      spaceBetween: 0,
      virtualTranslate: !e.params.cssMode
    })
  });
}, Aa = ({ swiper: e, extendParams: t, on: s }) => {
  t({
    cubeEffect: {
      slideShadows: !0,
      shadow: !0,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  });
  function a() {
    return e.params.cubeEffect;
  }
  const n = (r, p, c) => {
    let f = c ? r.querySelector(".swiper-slide-shadow-left") : r.querySelector(".swiper-slide-shadow-top"), T = c ? r.querySelector(".swiper-slide-shadow-right") : r.querySelector(".swiper-slide-shadow-bottom");
    f || (f = ne("div", `swiper-slide-shadow-cube swiper-slide-shadow-${c ? "left" : "top"}`.split(" ")), r.append(f)), T || (T = ne("div", `swiper-slide-shadow-cube swiper-slide-shadow-${c ? "right" : "bottom"}`.split(" ")), r.append(T)), f && (f.style.opacity = String(Math.max(-p, 0))), T && (T.style.opacity = String(Math.max(p, 0)));
  };
  ye({
    effect: "cube",
    swiper: e,
    on: s,
    setTranslate: () => {
      const { el: r, wrapperEl: p, slides: c, width: f, height: T, rtlTranslate: o, size: l } = e, g = ke(e), S = a(), E = e.isHorizontal(), h = !!(e.virtual && e.params.virtual?.enabled);
      let m = 0, v = null;
      S.shadow && (E ? (v = e.wrapperEl.querySelector(".swiper-cube-shadow"), v || (v = ne("div", "swiper-cube-shadow"), e.wrapperEl.append(v)), v.style.height = `${f}px`) : (v = r.querySelector(".swiper-cube-shadow"), v || (v = ne("div", "swiper-cube-shadow"), r.append(v))));
      for (let y = 0; y < c.length; y += 1) {
        const C = c[y];
        let A = y;
        h && (A = parseInt(C.getAttribute("data-swiper-slide-index") ?? "0", 10));
        let w = A * 90, x = Math.floor(w / 360);
        o && (w = -w, x = Math.floor(-w / 360));
        const k = Math.max(Math.min(C.progress ?? 0, 1), -1);
        let b = 0, L = 0, M = 0;
        A % 4 === 0 ? (b = -x * 4 * l, M = 0) : (A - 1) % 4 === 0 ? (b = 0, M = -x * 4 * l) : (A - 2) % 4 === 0 ? (b = l + x * 4 * l, M = l) : (A - 3) % 4 === 0 && (b = -l, M = 3 * l + l * 4 * x), o && (b = -b), E || (L = b, b = 0);
        const _ = `rotateX(${g(E ? 0 : -w)}deg) rotateY(${g(E ? w : 0)}deg) translate3d(${b}px, ${L}px, ${M}px)`;
        k <= 1 && k > -1 && (m = A * 90 + k * 90, o && (m = -A * 90 - k * 90)), C.style.transform = _, S.slideShadows && n(C, k, E);
      }
      if (p.style.transformOrigin = `50% 50% -${l / 2}px`, p.style.setProperty("-webkit-transform-origin", `50% 50% -${l / 2}px`), S.shadow && v)
        if (E)
          v.style.transform = `translate3d(0px, ${f / 2 + S.shadowOffset}px, ${-f / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${S.shadowScale})`;
        else {
          const y = Math.abs(m) - Math.floor(Math.abs(m) / 90) * 90, C = 1.5 - (Math.sin(y * 2 * Math.PI / 360) / 2 + Math.cos(y * 2 * Math.PI / 360) / 2), A = S.shadowScale, w = S.shadowScale / C, x = S.shadowOffset;
          v.style.transform = `scale3d(${A}, 1, ${w}) translate3d(0px, ${T / 2 + x}px, ${-T / 2 / w}px) rotateX(-89.99deg)`;
        }
      p.style.transform = `translate3d(0px,0,0px) rotateX(${g(e.isHorizontal() ? 0 : m)}deg) rotateY(${g(e.isHorizontal() ? -m : 0)}deg)`, p.style.setProperty("--swiper-cube-translate-z", "0px");
    },
    setTransition: (r) => {
      const { el: p, slides: c } = e;
      if (c.forEach((f) => {
        f.style.transitionDuration = `${r}ms`, f.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((T) => {
          T.style.transitionDuration = `${r}ms`;
        });
      }), e.params.cubeEffect?.shadow && !e.isHorizontal()) {
        const f = p.querySelector(".swiper-cube-shadow");
        f && (f.style.transitionDuration = `${r}ms`);
      }
    },
    recreateShadows: () => {
      const r = e.isHorizontal();
      e.slides.forEach((p) => {
        const c = Math.max(Math.min(p.progress ?? 0, 1), -1);
        n(p, c, r);
      });
    },
    getEffectParams: () => e.params.cubeEffect,
    perspective: () => !0,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: !1,
      virtualTranslate: !0
    })
  });
};
function be(e, t, s) {
  const a = `swiper-slide-shadow${s ? `-${s}` : ""}${e ? ` swiper-slide-shadow-${e}` : ""}`, n = he(t), i = `.${a.split(" ").join(".")}`, u = n.querySelector(i);
  if (u)
    return u;
  const d = ne("div", a.split(" "));
  return n.append(d), d;
}
const _a = ({ swiper: e, extendParams: t, on: s }) => {
  t({
    flipEffect: {
      slideShadows: !0,
      limitRotation: !0
    }
  });
  function a() {
    return e.params.flipEffect;
  }
  const n = (r, p) => {
    let c = e.isHorizontal() ? r.querySelector(".swiper-slide-shadow-left") : r.querySelector(".swiper-slide-shadow-top"), f = e.isHorizontal() ? r.querySelector(".swiper-slide-shadow-right") : r.querySelector(".swiper-slide-shadow-bottom");
    c || (c = be("flip", r, e.isHorizontal() ? "left" : "top")), f || (f = be("flip", r, e.isHorizontal() ? "right" : "bottom")), c && (c.style.opacity = String(Math.max(-p, 0))), f && (f.style.opacity = String(Math.max(p, 0)));
  };
  ye({
    effect: "flip",
    swiper: e,
    on: s,
    setTranslate: () => {
      const { slides: r, rtlTranslate: p } = e, c = a(), f = ke(e);
      for (let T = 0; T < r.length; T += 1) {
        const o = r[T];
        let l = o.progress ?? 0;
        c.limitRotation && (l = Math.max(Math.min(l, 1), -1));
        const g = o.swiperSlideOffset ?? 0;
        let E = -180 * l, h = 0, m = e.params.cssMode ? -g - e.translate : -g, v = 0;
        e.isHorizontal() ? p && (E = -E) : (v = m, m = 0, h = -E, E = 0), o.style.zIndex = String(-Math.abs(Math.round(l)) + r.length), c.slideShadows && n(o, l);
        const y = `translate3d(${m}px, ${v}px, 0px) rotateX(${f(h)}deg) rotateY(${f(E)}deg)`, C = Ie(c, o);
        C.style.transform = y;
      }
    },
    setTransition: (r) => {
      const p = e.slides.map((c) => he(c));
      p.forEach((c) => {
        c.style.transitionDuration = `${r}ms`, c.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((f) => {
          f.style.transitionDuration = `${r}ms`;
        });
      }), Ce({ swiper: e, duration: r, transformElements: p });
    },
    recreateShadows: () => {
      const r = a();
      e.slides.forEach((p) => {
        let c = p.progress ?? 0;
        r.limitRotation && (c = Math.max(Math.min(c, 1), -1)), n(p, c);
      });
    },
    getEffectParams: () => e.params.flipEffect,
    perspective: () => !0,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      spaceBetween: 0,
      virtualTranslate: !e.params.cssMode
    })
  });
}, xa = ({ swiper: e, extendParams: t, on: s }) => {
  t({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: !0
    }
  });
  function a() {
    return e.params.coverflowEffect;
  }
  ye({
    effect: "coverflow",
    swiper: e,
    on: s,
    setTranslate: () => {
      const { width: u, height: d, slides: r, slidesSizesGrid: p } = e, c = a(), f = e.isHorizontal(), T = e.translate, o = f ? -T + u / 2 : -T + d / 2, l = f ? c.rotate : -c.rotate, g = c.depth, S = ke(e);
      for (let E = 0, h = r.length; E < h; E += 1) {
        const m = r[E], v = p[E], y = m.swiperSlideOffset ?? 0, C = (o - y - v / 2) / v, A = typeof c.modifier == "function" ? c.modifier(C) : C * c.modifier;
        let w = f ? l * A : 0, x = f ? 0 : l * A, k = -g * Math.abs(A), b = typeof c.stretch == "string" && c.stretch.indexOf("%") !== -1 ? parseFloat(c.stretch) / 100 * v : c.stretch, L = f ? 0 : b * A, M = f ? b * A : 0, _ = 1 - (1 - c.scale) * Math.abs(A);
        Math.abs(M) < 1e-3 && (M = 0), Math.abs(L) < 1e-3 && (L = 0), Math.abs(k) < 1e-3 && (k = 0), Math.abs(w) < 1e-3 && (w = 0), Math.abs(x) < 1e-3 && (x = 0), Math.abs(_) < 1e-3 && (_ = 0);
        const R = `translate3d(${M}px,${L}px,${k}px)  rotateX(${S(x)}deg) rotateY(${S(w)}deg) scale(${_})`, V = Ie(c, m);
        if (V.style.transform = R, m.style.zIndex = String(-Math.abs(Math.round(A)) + 1), c.slideShadows) {
          let F = f ? m.querySelector(".swiper-slide-shadow-left") : m.querySelector(".swiper-slide-shadow-top"), X = f ? m.querySelector(".swiper-slide-shadow-right") : m.querySelector(".swiper-slide-shadow-bottom");
          F || (F = be("coverflow", m, f ? "left" : "top")), X || (X = be("coverflow", m, f ? "right" : "bottom")), F && (F.style.opacity = String(A > 0 ? A : 0)), X && (X.style.opacity = String(-A > 0 ? -A : 0));
        }
      }
    },
    setTransition: (u) => {
      e.slides.map((r) => he(r)).forEach((r) => {
        r.style.transitionDuration = `${u}ms`, r.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((p) => {
          p.style.transitionDuration = `${u}ms`;
        });
      });
    },
    perspective: () => !0,
    overwriteParams: () => ({
      watchSlidesProgress: !0
    })
  });
}, La = ({ swiper: e, extendParams: t, on: s }) => {
  t({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: !1,
      progressMultiplier: 1,
      perspective: !0,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });
  function a() {
    return e.params.creativeEffect;
  }
  const n = (d) => typeof d == "string" ? d : `${d}px`;
  ye({
    effect: "creative",
    swiper: e,
    on: s,
    setTranslate: () => {
      const { slides: d, wrapperEl: r, slidesSizesGrid: p } = e, c = a(), { progressMultiplier: f } = c, T = e.params.centeredSlides, o = ke(e);
      if (T) {
        const l = p[0] / 2 - (e.params.slidesOffsetBefore ?? 0);
        r.style.transform = `translateX(calc(50% - ${l}px))`;
      }
      for (let l = 0; l < d.length; l += 1) {
        const g = d[l], S = g.progress ?? 0, E = Math.min(Math.max(S, -c.limitProgress), c.limitProgress);
        let h = E;
        T || (h = Math.min(Math.max(g.originalProgress ?? 0, -c.limitProgress), c.limitProgress));
        const m = g.swiperSlideOffset ?? 0, v = [
          e.params.cssMode ? -m - e.translate : -m,
          0,
          0
        ], y = [0, 0, 0];
        let C = !1;
        e.isHorizontal() || (v[1] = v[0], v[0] = 0);
        let A = {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          scale: 1,
          opacity: 1
        };
        E < 0 ? (A = c.next, C = !0) : E > 0 && (A = c.prev, C = !0), v.forEach((_, R) => {
          v[R] = `calc(${_}px + (${n(A.translate[R])} * ${Math.abs(E * f)}))`;
        }), y.forEach((_, R) => {
          y[R] = A.rotate[R] * Math.abs(E * f);
        }), g.style.zIndex = String(-Math.abs(Math.round(S)) + d.length);
        const w = v.join(", "), x = `rotateX(${o(y[0])}deg) rotateY(${o(y[1])}deg) rotateZ(${o(y[2])}deg)`, k = h < 0 ? `scale(${1 + (1 - A.scale) * h * f})` : `scale(${1 - (1 - A.scale) * h * f})`, b = h < 0 ? 1 + (1 - A.opacity) * h * f : 1 - (1 - A.opacity) * h * f, L = `translate3d(${w}) ${x} ${k}`;
        if (C && A.shadow || !C) {
          let _ = g.querySelector(".swiper-slide-shadow");
          if (!_ && A.shadow && (_ = be("creative", g)), _) {
            const R = c.shadowPerProgress ? E * (1 / c.limitProgress) : E;
            _.style.opacity = String(Math.min(Math.max(Math.abs(R), 0), 1));
          }
        }
        const M = Ie(c, g);
        M.style.transform = L, M.style.opacity = String(b), A.origin && (M.style.transformOrigin = A.origin);
      }
    },
    setTransition: (d) => {
      const r = e.slides.map((p) => he(p));
      r.forEach((p) => {
        p.style.transitionDuration = `${d}ms`, p.querySelectorAll(".swiper-slide-shadow").forEach((c) => {
          c.style.transitionDuration = `${d}ms`;
        });
      }), Ce({ swiper: e, duration: d, transformElements: r, allSlides: !0 });
    },
    perspective: () => a().perspective,
    overwriteParams: () => ({
      watchSlidesProgress: !0,
      virtualTranslate: !e.params.cssMode
    })
  });
}, Ca = ({ swiper: e, extendParams: t, on: s }) => {
  t({
    cardsEffect: {
      slideShadows: !0,
      rotate: !0,
      perSlideRotate: 2,
      perSlideOffset: 8
    }
  });
  function a() {
    return e.params.cardsEffect;
  }
  ye({
    effect: "cards",
    swiper: e,
    on: s,
    setTranslate: () => {
      const { slides: u, activeIndex: d, rtlTranslate: r } = e, p = a(), { startTranslate: c, isTouched: f } = e.touchEventsData, T = r ? -e.translate : e.translate;
      for (let o = 0; o < u.length; o += 1) {
        const l = u[o], g = l.progress ?? 0, S = Math.min(Math.max(g, -4), 4);
        let E = l.swiperSlideOffset ?? 0;
        e.params.centeredSlides && !e.params.cssMode && (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`), e.params.centeredSlides && e.params.cssMode && (E -= u[0].swiperSlideOffset ?? 0);
        let h = e.params.cssMode ? -E - e.translate : -E, m = 0;
        const v = -100 * Math.abs(S);
        let y = 1, C = -p.perSlideRotate * S, A = p.perSlideOffset - Math.abs(S) * 0.75;
        const w = e.virtual && e.params.virtual?.enabled ? e.virtual.from + o : o, x = (w === d || w === d - 1) && S > 0 && S < 1 && (f || e.params.cssMode) && (T ?? 0) < (c ?? 0), k = (w === d || w === d + 1) && S < 0 && S > -1 && (f || e.params.cssMode) && (T ?? 0) > (c ?? 0);
        if (x || k) {
          const _ = (1 - Math.abs((Math.abs(S) - 0.5) / 0.5)) ** 0.5;
          C += -28 * S * _, y += -0.5 * _, A += 96 * _, m = `${(p.rotate || e.isHorizontal() ? -25 : 0) * _ * Math.abs(S)}%`;
        }
        if (S < 0 ? h = `calc(${h}px ${r ? "-" : "+"} (${A * Math.abs(S)}%))` : S > 0 ? h = `calc(${h}px ${r ? "-" : "+"} (${-A * Math.abs(S)}%))` : h = `${h}px`, !e.isHorizontal()) {
          const _ = m;
          m = h, h = _;
        }
        const b = S < 0 ? `${1 + (1 - y) * S}` : `${1 - (1 - y) * S}`, L = `
        translate3d(${h}, ${m}, ${v}px)
        rotateZ(${p.rotate ? r ? -C : C : 0}deg)
        scale(${b})
      `;
        if (p.slideShadows) {
          let _ = l.querySelector(".swiper-slide-shadow");
          _ || (_ = be("cards", l)), _ && (_.style.opacity = String(Math.min(Math.max((Math.abs(S) - 0.5) / 0.5, 0), 1)));
        }
        l.style.zIndex = String(-Math.abs(Math.round(g)) + u.length);
        const M = Ie(p, l);
        M.style.transform = L;
      }
    },
    setTransition: (u) => {
      const d = e.slides.map((r) => he(r));
      d.forEach((r) => {
        r.style.transitionDuration = `${u}ms`, r.querySelectorAll(".swiper-slide-shadow").forEach((p) => {
          p.style.transitionDuration = `${u}ms`;
        });
      }), Ce({ swiper: e, duration: u, transformElements: d });
    },
    perspective: () => !0,
    overwriteParams: () => ({
      _loopSwapReset: !1,
      watchSlidesProgress: !0,
      loopAdditionalSlides: a().rotate ? 3 : 2,
      centeredSlides: !0,
      virtualTranslate: !e.params.cssMode
    })
  });
}, Ma = [
  Qs,
  Js,
  ea,
  ta,
  na,
  ia,
  la,
  ra,
  oa,
  da,
  ca,
  fa,
  ua,
  pa,
  ma,
  ha,
  ba,
  ya,
  Aa,
  _a,
  xa,
  La,
  Ca
];
te.use(Ma);
function B(e, t, s) {
  const a = e.getAttribute(t)?.trim();
  if (!(!a || a === s))
    return a;
}
function yt(e, t, s) {
  const a = e.getAttribute(t)?.trim();
  if (!a) return;
  if (a.toLowerCase() === "auto") return "auto";
  const n = Number(a);
  if (!(isNaN(n) || n === s))
    return n;
}
function Me(e, t, s) {
  const a = e.getAttribute(t)?.trim();
  if (!(!a || a === s))
    return a;
}
function W(e, t, s) {
  const a = e.getAttribute(t)?.trim();
  if (!a) return;
  const n = Number(a);
  if (!(isNaN(n) || n === s))
    return n;
}
function N(e, t, s) {
  const a = e.getAttribute(t)?.trim()?.toLowerCase();
  if (a) {
    if (a === "true") return s === !0 ? void 0 : !0;
    if (a === "false") return s === !1 ? void 0 : !1;
  }
}
function Ia(e) {
  return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function At(e) {
  if (typeof e != "object" || e === null) return e;
  const t = e;
  for (const s in t) {
    const a = t[s];
    a == null ? delete t[s] : typeof a == "object" && a !== null && !Ia(a) && (At(a), Object.keys(a).length === 0 && delete t[s]);
  }
  return e;
}
function _t(e, t) {
  return e.find((s) => s.name?.toLowerCase() === t?.toLowerCase());
}
function Ra(e, t, s) {
  const a = _t(e, t);
  return a ? a.swiper ? a : (console.error(`[MANIPULATION] Invalid Swiper instance in Waterfall "${t}"`), null) : (console.warn(`[MANIPULATION] No Waterfall found with name: "${t}"`, s), null);
}
function Pa(e, t, s) {
  const a = e.filter((n) => n.name?.toLowerCase() === t?.toLowerCase()).map((n) => n.swiper);
  return s && console.log(`📊 Found ${a.length} matching waterfall(s) for "${t}"`), a;
}
function wa() {
  document.querySelectorAll('[waterfall] .swiper-wrapper[role="list"]').forEach((e) => {
    e.removeAttribute("role");
  });
}
const ce = "waterfall", oo = "waterfall-preload", co = "waterfall-postload", fo = "waterfall-content", Oa = "waterfall-debug-mode", uo = "waterfall-a11y", Da = "waterfall-a11y-container-message", Na = "waterfall-a11y-container-role", za = "waterfall-a11y-container-role-description-message", ka = "waterfall-a11y-enabled", $a = "waterfall-a11y-first-slide-message", Ga = "waterfall-a11y-id", Ba = "waterfall-a11y-item-role-description-message", Ha = "waterfall-a11y-last-slide-message", Va = "waterfall-a11y-next-slide-message", Ya = "waterfall-a11y-notification-class", Fa = "waterfall-a11y-pagination-bullet-message", Wa = "waterfall-a11y-prev-slide-message", Xa = "waterfall-a11y-scroll-on-focus", Ua = "waterfall-a11y-slide-label-message", qa = "waterfall-a11y-slide-role", ja = ["mobile", "mobile-large", "tablet", "desktop", "desktop-small", "desktop-large"], Ka = (e, t) => `${e}-${t}`, Je = "waterfall-controller", Za = "waterfall-controller-by", Qa = "waterfall-controller-inverse", po = "waterfall-effect-crossfade", Ja = "waterfall-coverflow-depth", en = "waterfall-coverflow-modifier", tn = "waterfall-coverflow-rotate", sn = "waterfall-coverflow-scale", an = "waterfall-coverflow-slide-shadows", nn = "waterfall-coverflow-stretch", ln = "waterfall-flip-limit-rotation", rn = "waterfall-flip-slide-shadows", on = "waterfall-cube-shadow", dn = "waterfall-cube-shadow-offset", cn = "waterfall-cube-shadow-scale", fn = "waterfall-cube-slide-shadows", un = "waterfall-cards-per-slide-offset", pn = "waterfall-cards-per-slide-rotate", mn = "waterfall-cards-rotate", hn = "waterfall-cards-slide-shadows", gn = "waterfall-allow-slide-next", Tn = "waterfall-allow-slide-prev", vn = "waterfall-allow-touch-move", Sn = "waterfall-auto-height", En = "waterfall-breakpoints-base", bn = "waterfall-center-insufficient-slides", xt = "waterfall-centered-slides", mo = "waterfall-centered-slides-bounds", yn = "waterfall-container-modifier-class", An = "waterfall-create-elements", _n = "waterfall-css-mode", xn = "waterfall-direction", Ln = "waterfall-edge-swipe-detection", Cn = "waterfall-edge-swipe-threshold", Mn = "waterfall-effect", In = "waterfall-enabled", Rn = "waterfall-events-prefix", Pn = "waterfall-focusable-elements", wn = "waterfall-follow-finger", On = "waterfall-grab-cursor", Dn = "waterfall-height", Nn = "waterfall-init", zn = "waterfall-initial-slide", kn = "waterfall-lazy-preload-prev-next", $n = "waterfall-lazy-preloader-class", Gn = "waterfall-long-swipes", Bn = "waterfall-long-swipes-ms", Hn = "waterfall-long-swipes-ratio", ho = "waterfall-loop-mode", Vn = "waterfall-loop-add-blank-slides", Yn = "waterfall-loop-additional-slides", Fn = "waterfall-loop-prevents-sliding", Wn = "waterfall-max-backface-hidden-slides", Xn = "waterfall-nested", Un = "waterfall-no-swiping", qn = "waterfall-no-swiping-class", jn = "waterfall-no-swiping-selector", Kn = "waterfall-normalize-slide-index", Zn = "waterfall-observe-parents", Qn = "waterfall-observe-slide-children", Jn = "waterfall-observer", ei = "waterfall-data-one-way-movement", ti = "waterfall-passive-listeners", si = "waterfall-prevent-clicks", ai = "waterfall-prevent-clicks-propagation", ni = "waterfall-prevent-interaction-on-transition", ii = "waterfall-resistance", li = "waterfall-resistance-ratio", ri = "waterfall-resize-observer", go = "waterfall-rewind", oi = "waterfall-round-lengths", di = "waterfall-run-callbacks-on-init", ci = "waterfall-set-wrapper-size", fi = "waterfall-short-swipes", ui = "waterfall-simulate-touch", pi = "waterfall-slide-active-class", mi = "waterfall-slide-class", hi = "waterfall-slide-blank-class", gi = "waterfall-slide-fully-visible-class", Ti = "waterfall-slide-next-class", vi = "waterfall-slide-prev-class", Si = "waterfall-slide-to-clicked-slide", Ei = "waterfall-slide-visible-class", bi = "waterfall-slides-offset-after", yi = "waterfall-slides-offset-before", Lt = "waterfall-slides-per-group", Ai = "waterfall-slides-per-group-auto", _i = "waterfall-slides-per-group-skip", Ct = "waterfall-slides-per-view", Mt = "waterfall-space-between", xi = "waterfall-speed", Li = "waterfall-swipe-handler", Ci = "waterfall-swiper-element-node-name", Mi = "waterfall-threshold", Ii = "waterfall-touch-angle", Ri = "waterfall-touch-events-target", Pi = "waterfall-touch-move-stop-propagation", wi = "waterfall-touch-ratio", Oi = "waterfall-touch-release-on-edges", Di = "waterfall-touch-start-force-prevent-default", Ni = "waterfall-touch-start-prevent-default", zi = "waterfall-unique-nav-elements", ki = "waterfall-update-on-window-resize", $i = "waterfall-url", Gi = "waterfall-user-agent", To = "waterfall-virtual-translate", Bi = "waterfall-watch-overflow", Hi = "waterfall-watch-slides-progress", Vi = "waterfall-width", Yi = "waterfall-wrapper-class", Fi = "waterfall-hash-replace-state", Wi = "waterfall-hash-watch-state", Xi = "waterfall-history-keep-query", Ui = "waterfall-history-key", qi = "waterfall-history-replace-state", ji = "waterfall-history-root", Ki = "waterfall-keyboard-enabled", Zi = "waterfall-keyboard-only-in-viewport", Qi = "waterfall-keyboard-page-up-down", Ji = "waterfall-mouse-enabled", el = "waterfall-mouse-events-target", tl = "waterfall-mouse-force-to-axis", sl = "waterfall-mouse-invert", al = "waterfall-mouse-no-mouse-wheel-class", nl = "waterfall-mouse-release-on-edges", il = "waterfall-mouse-sensitivity", ll = "waterfall-mouse-threshold-delta", rl = "waterfall-mouse-threshold-time", ol = "waterfall-grid-rows", dl = "waterfall-grid-fill", cl = "waterfall-navigation-disabled-class", fl = "waterfall-navigation-enabled", ul = "waterfall-navigation-hidden-class", pl = "waterfall-navigation-hide-on-click", ml = "waterfall-navigation-lock-class", hl = "waterfall-navigation-navigation-disabled-class", gl = "waterfall-pagination-type", vo = "waterfall-pagination-bullet-class", Tl = "waterfall-pagination-bullet-active-class", vl = "waterfall-pagination-clickable", Sl = "waterfall-pagination-clickable-class", El = "waterfall-pagination-current-class", bl = "waterfall-pagination-dynamic-bullets", yl = "waterfall-pagination-dynamic-main-bullets", Al = "waterfall-pagination-enabled", _l = "waterfall-pagination-hidden-class", xl = "waterfall-pagination-hide-on-click", Ll = "waterfall-pagination-horizontal-class", Cl = "waterfall-pagination-lock-class", Ml = "waterfall-pagination-modifier-class", Il = "waterfall-pagination-pagination-disabled-class", Rl = "waterfall-pagination-progressbar-fill-class", Pl = "waterfall-pagination-progressbar-opposite", wl = "waterfall-pagination-progressbar-opposite-class", Ol = "waterfall-pagination-total-class", Dl = "waterfall-pagination-vertical-class", It = "waterfall-autoplay-mode", Rt = "waterfall-smooth-autoplay", Nl = "waterfall-delay", zl = "waterfall-disable-on-interaction", kl = "waterfall-reverse-direction", $l = "waterfall-pause-on-mouse-enter", Gl = "waterfall-stop-on-last-slide", So = "waterfall-wait-for-transition", Bl = "waterfall-autoplay-control-enabled", Hl = "waterfall-autoplay-control-default-state", Vl = "waterfall-free-mode-enabled", Yl = "waterfall-free-mode-minimum-velocity", Fl = "waterfall-free-mode-momentum", Wl = "waterfall-free-mode-momentum-bounce", Xl = "waterfall-free-mode-momentum-bounce-ratio", Ul = "waterfall-free-mode-momentum-ratio", ql = "waterfall-free-mode-momentum-velocity-ratio", jl = "waterfall-free-mode-sticky", Eo = "waterfall-scrollbar-drag-class", Kl = "waterfall-scrollbar-drag-size", Zl = "waterfall-scrollbar-draggable", Ql = "waterfall-scrollbar-enabled", Jl = "waterfall-scrollbar-hide", er = "waterfall-scrollbar-horizontal-class", tr = "waterfall-scrollbar-lock-class", sr = "waterfall-scrollbar-scrollbar-disabled-class", ar = "waterfall-scrollbar-vertical-class", nr = "waterfall-scrollbar-snap-on-release", et = "waterfall-thumbs", ir = "waterfall-thumbs-auto-scroll-offset", lr = "waterfall-thumbs-multiple-active-thumbs", rr = "waterfall-slide-thumb-active-class", or = "waterfall-thumbs-container-class", dr = "waterfall-add-slide", ut = "waterfall-add-index", cr = "waterfall-append-slide", fr = "waterfall-prepend-slide", ur = "waterfall-remove-slide", pt = "waterfall-remove-index", bo = "waterfall-zoom", yo = "waterfall-zoom-enabled", pr = "waterfall-zoom-container-class", mr = "waterfall-zoom-limit-to-original-size", hr = "waterfall-zoom-max-ratio", gr = "waterfall-zoom-min-ratio", Tr = "waterfall-zoom-pan-on-mouse-move", vr = "waterfall-zoom-toggle", Sr = "waterfall-zoomed-slide-class", Ao = "waterfall-zoom-fade", Er = "waterfall-parallax-enabled", _o = "data-swiper-parallax", xo = "data-swiper-parallax-x", Lo = "data-swiper-parallax-y", Co = "data-swiper-parallax-scale", Mo = "data-swiper-parallax-opacity", Io = "data-swiper-parallax-duration", br = "waterfall-callback-slide-change", yr = "waterfall-playback-mode", le = "waterfall-el", Ar = "pagination", _r = "pagination-bullet", Ro = "pagination-bullet-active", Po = "waterfall-navigation", xr = "navigation-next", Lr = "navigation-prev", Cr = "scrollbar", Mr = "scrollbar-drag", Ir = "slide-count", Rr = "autoplay-control", Pr = "autoplay-control-pause", wr = "autoplay-control-play";
function Or(e, t, s) {
  e.allowSlideNext = N(t, gn, !0), e.allowSlidePrev = N(t, Tn, !0), e.navigation = {
    disabledClass: B(t, cl, "swiper-button-disabled"),
    enabled: N(t, fl),
    hiddenClass: B(t, ul, "swiper-button-hidden"),
    hideOnClick: N(t, pl, !1),
    lockClass: B(t, ml, "swiper-button-lock"),
    navigationDisabledClass: B(t, hl, "swiper-navigation-disabled"),
    nextEl: `[${ce}='${s}'] [${le}=${xr}]`,
    prevEl: `[${ce}='${s}'] [${le}=${Lr}]`
  };
}
const Dr = [
  { key: "slidesPerView", attr: Ct, parse: yt, swiperDefault: 1 },
  { key: "slidesPerGroup", attr: Lt, parse: W, swiperDefault: 1 },
  { key: "spaceBetween", attr: Mt, parse: W, swiperDefault: 0 },
  { key: "centeredSlides", attr: xt, parse: N, swiperDefault: !1 }
], Nr = [
  { minWidth: 0, cascade: ["mobile", "mobile-large", "tablet"] },
  // Mobile portrait: 479px and below
  { minWidth: 480, cascade: ["mobile-large", "tablet"] },
  // Mobile landscape: 480px - 767px
  { minWidth: 768, cascade: ["tablet"] },
  // Tablet: 768px - 991px
  { minWidth: 992, cascade: ["desktop"] },
  // Desktop: 992px - 1279px
  { minWidth: 1280, cascade: ["desktop-small", "desktop"] },
  // 1280px - 1439px
  { minWidth: 1440, cascade: ["desktop-large", "desktop-small", "desktop"] }
  // 1440px and up
];
function zr(e, t) {
  e.breakpointsBase = B(t, En, "window");
  const s = {};
  Dr.forEach(({ key: a, attr: n, parse: i, swiperDefault: u }) => {
    const d = {};
    if (ja.forEach((p) => {
      const c = i(t, Ka(n, p));
      c !== void 0 && (d[p] = c);
    }), Object.keys(d).length === 0) return;
    const r = i(t, n) ?? u;
    Nr.forEach(({ minWidth: p, cascade: c }) => {
      const f = c.find((T) => d[T] !== void 0);
      s[p] = { ...s[p], [a]: f ? d[f] : r };
    });
  }), e.breakpoints = s;
}
function kr(e, t) {
  const s = t.querySelector(`[${le}=${Ar}]`);
  if (!s) return;
  const a = B(t, gl), n = t.querySelector(`[${le}=${_r}]`);
  e.pagination = {
    bulletActiveClass: B(t, Tl, "swiper-pagination-bullet-active"),
    bulletClass: n?.getAttribute("class")?.trim() || "swiper-pagination-bullet",
    bulletElement: n?.tagName?.toLowerCase() || "span",
    clickable: N(t, vl, !1),
    clickableClass: B(t, Sl, "swiper-pagination-clickable"),
    currentClass: B(t, El, "swiper-pagination-current"),
    dynamicBullets: N(t, bl, !1),
    dynamicMainBullets: W(t, yl, 1),
    el: s || null,
    enabled: N(t, Al),
    hiddenClass: B(t, _l, "swiper-pagination-hidden"),
    hideOnClick: N(t, xl, !0),
    horizontalClass: B(t, Ll, "swiper-pagination-horizontal"),
    lockClass: B(t, Cl, "swiper-pagination-lock"),
    modifierClass: B(t, Ml, "swiper-pagination-"),
    paginationDisabledClass: B(
      t,
      Il,
      "swiper-pagination-disabled"
    ),
    progressbarFillClass: B(
      t,
      Rl,
      "swiper-pagination-progressbar-fill"
    ),
    progressbarOpposite: N(t, Pl, !1),
    progressbarOppositeClass: B(
      t,
      wl,
      "swiper-pagination-progressbar-opposite"
    ),
    renderBullet: i(),
    totalClass: B(t, Ol, "swiper-pagination-total"),
    type: u(),
    verticalClass: B(t, Dl, "swiper-pagination-vertical")
  };
  function i() {
    if (a === "numberBullets")
      return (d, r) => `<span class="${r}">${d + 1}</span>`;
    if (a === "bullets")
      return (d, r) => `<span class="${r}"></span>`;
  }
  function u() {
    return a === "numberBullets" || a === "bullets" ? "bullets" : a === "fraction" ? "fraction" : a === "progressbar" ? "progressbar" : a === "custom" ? "custom" : "bullets";
  }
}
function $r(e, t) {
  const s = t.querySelector(`[${le}=${Cr}]`);
  if (!s) return;
  const a = s?.querySelector(`[${le}=${Mr}]`);
  e.scrollbar = {
    dragClass: a?.getAttribute("class") || "",
    dragSize: Me(t, Kl, "auto"),
    draggable: N(t, Zl, !1),
    el: s || null,
    enabled: N(t, Ql),
    hide: N(t, Jl, !0),
    horizontalClass: B(t, er, "swiper-scrollbar-horizontal"),
    lockClass: B(t, tr, "swiper-scrollbar-lock"),
    scrollbarDisabledClass: B(t, sr, "swiper-scrollbar-disabled"),
    snapOnRelease: N(t, nr, !0),
    // NOTE doc says false but actually true
    verticalClass: B(t, ar, "swiper-scrollbar-vertical")
  };
}
function Gr(e, t) {
  const s = B(t, yr, "none");
  s === "loop" && (e.loop = !0), s === "rewind" && (e.rewind = !0), s === "none" && (e.loop = !1, e.rewind = !1), e.loopAddBlankSlides = N(t, Vn, !0), e.loopAdditionalSlides = W(t, Yn, 0), e.loopPreventsSliding = N(t, Fn, !0);
  const a = N(t, It, !1), n = N(t, Rt, !1);
  let i = W(t, Nl, void 0);
  n && (i = 0), a && (Br(), e.autoplay = {
    delay: i,
    disableOnInteraction: N(t, zl, !1),
    // documentation says default is true, doesn't appear to be correct
    reverseDirection: N(t, kl, !1),
    pauseOnMouseEnter: N(t, $l, !1),
    stopOnLastSlide: N(t, Gl, !1)
  }), e.speed = W(t, xi, 300), e.oneWayMovement = N(t, ei, !1);
}
function Br() {
  document.querySelectorAll(`[${Rt}='true'] .swiper-wrapper`).forEach((e) => {
    e.style.transitionTimingFunction = "linear";
  });
}
function Hr(e, t) {
  const s = B(t, Mn, "slide");
  e.effect = s, s === "fade" ? e.fadeEffect = { crossFade: !0 } : s === "coverflow" ? e.coverflowEffect = {
    depth: W(t, Ja, 100),
    modifier: W(t, en, 1),
    rotate: W(t, tn, 50),
    scale: W(t, sn, 1),
    slideShadows: N(t, an, !0),
    stretch: W(t, nn, 0)
  } : s === "flip" ? e.flipEffect = {
    limitRotation: N(t, ln, !0),
    slideShadows: N(t, rn, !0)
  } : s === "cube" ? e.cubeEffect = {
    shadow: N(t, on, !0),
    shadowOffset: W(t, dn, 20),
    shadowScale: W(t, cn, 0.94),
    slideShadows: N(t, fn, !0)
  } : s === "cards" && (e.cardsEffect = {
    perSlideOffset: W(t, un, 8),
    perSlideRotate: W(t, pn, 2),
    rotate: N(t, mn, !0),
    slideShadows: N(t, hn, !0)
  });
}
function Vr(e, t) {
  e.autoHeight = N(t, Sn, !1), e.centerInsufficientSlides = N(t, bn, !1), e.centeredSlides = N(t, xt, !1), e.direction = Me(t, xn, "horizontal"), e.grid = {
    fill: Me(t, dl, "column"),
    rows: W(t, ol, 1)
  }, e.height = W(t, Dn), e.slidesOffsetAfter = W(t, bi, 0), e.slidesOffsetBefore = W(t, yi, 0), e.slidesPerGroup = W(t, Lt, 1), e.slidesPerGroupAuto = N(t, Ai, !1), e.slidesPerGroupSkip = W(t, _i, 0), e.slidesPerView = yt(t, Ct, 1), e.spaceBetween = W(t, Mt, 0), e.width = W(t, Vi);
}
function Yr(e, t) {
  e.containerModifierClass = B(t, yn, "swiper-"), e.initialSlide = W(t, zn, 0), e.nested = N(t, Xn, !1), e.normalizeSlideIndex = N(t, Kn, !0), e.slideActiveClass = B(t, pi, "swiper-slide-active"), e.slideBlankClass = B(t, hi, "swiper-slide-blank"), e.slideClass = B(t, mi, "swiper-slide"), e.slideFullyVisibleClass = B(t, gi, "swiper-slide-fully-visible"), e.slideNextClass = B(t, Ti, "swiper-slide-next"), e.slidePrevClass = B(t, vi, "swiper-slide-prev"), e.slideVisibleClass = B(t, Ei, "swiper-slide-visible"), e.swipeHandler = B(t, Li), e.swiperElementNodeName = B(t, Ci, "SWIPER-CONTAINER"), e.wrapperClass = B(t, Yi, "swiper-wrapper");
}
function Fr() {
  document.querySelectorAll(".swiper-wrapper").forEach((e) => {
    e.querySelectorAll(".swiper-slide").forEach((t, s) => {
      const a = t.querySelector(`[${le}=${Ir}]`);
      a && (a.textContent = (s + 1).toString());
    });
  });
}
function Wr(e, t, s, a) {
  const n = B(t, et, "");
  if (!n || n === "")
    return;
  const i = _t(s, n);
  if (!i) {
    a && console.warn("A matching thumbs waterfall was not found for ", n);
    return;
  }
  return e.thumbs = {
    autoScrollOffset: W(t, ir, 0),
    multipleActiveThumbs: N(t, lr, !1),
    slideThumbActiveClass: B(t, rr, "swiper-slide-thumb-active"),
    swiper: i.swiper,
    thumbsContainerClass: B(t, or, "swiper-thumbs")
  }, e;
}
function Xr(e, t) {
  e.keyboard = {
    enabled: N(t, Ki, !1),
    onlyInViewport: N(t, Zi, !0),
    pageUpDown: N(t, Qi, !0)
  };
}
function Ur(e, t) {
  e.hashNavigation = {
    //getSlideIndex
    replaceState: N(t, Fi, !1),
    watchState: N(t, Wi, !1)
  };
}
function qr(e, t) {
  e.history = {
    keepQuery: N(t, Xi, !1),
    key: B(t, Ui, "slides"),
    replaceState: N(t, qi, !1),
    root: B(t, ji, "")
  };
}
function jr(e, t, s, a) {
  const n = B(t, Je, "");
  if (!n) return;
  const i = Pa(s, n, a);
  a && (i.length ? console.log(`Controller Swipers for selector "${n}":`, i) : console.error(`No controller swipers found for selector "${n}"`)), e.controller = {
    by: Me(t, Za, "slide"),
    control: i,
    inverse: N(t, Qa, !1)
  };
}
function Kr(e, t) {
  return e.a11y = {
    containerMessage: B(t, Da, ""),
    containerRole: B(t, Na, ""),
    containerRoleDescriptionMessage: B(t, za, ""),
    enabled: N(t, ka, !0),
    firstSlideMessage: B(t, $a, "This is the first slide"),
    id: B(t, Ga, ""),
    itemRoleDescriptionMessage: B(t, Ba, ""),
    lastSlideMessage: B(t, Ha, "This is the last slide"),
    nextSlideMessage: B(t, Va, "Next slide"),
    notificationClass: B(t, Ya, "swiper-notification"),
    paginationBulletMessage: B(t, Fa, "Go to slide {{index}}"),
    prevSlideMessage: B(t, Wa, "Previous slide"),
    scrollOnFocus: N(t, Xa, !0),
    slideLabelMessage: B(t, Ua, "{{index}} / {{slidesLength}}"),
    slideRole: B(t, qa, "group")
  }, e;
}
function Oe(e, t) {
  if (!Array.isArray(window.waterfalls)) {
    console.error("window.waterfalls is not an array or not defined.");
    return;
  }
  const s = /* @__PURE__ */ new Set();
  document.querySelectorAll(`[${e}]`).forEach((a) => {
    const n = a.getAttribute(e);
    if (!n) return;
    const i = Ra(window.waterfalls, n, a);
    if (!i) return;
    const u = i.swiper, d = a.cloneNode(!0);
    if (d.removeAttribute(e), t === "add" ? d.removeAttribute(ut) : t === "remove" && d.removeAttribute(pt), d.classList.contains("swiper-slide") || d.classList.add("swiper-slide"), t === "append")
      u.appendSlide(d.outerHTML);
    else if (t === "prepend")
      u.prependSlide(d.outerHTML);
    else if (t === "add") {
      let p = Number(a.getAttribute(ut));
      p || (p = 1);
      const c = document.createElement("div");
      c.innerHTML = d.outerHTML;
      const f = c.children[0];
      f && u.addSlide(p, f);
    } else if (t === "remove") {
      const p = Number(a.getAttribute(pt));
      p !== -1 ? u.removeSlide(p) : console.warn(`[MANIPULATION] Slide not found in Swiper for removal: ${n}`);
    }
    a.remove();
    const r = a.closest(".w-dyn-list");
    r && s.add(r), u.update();
  }), s.forEach((a) => a.remove());
}
function Zr() {
  Oe(dr, "add"), Oe(cr, "append"), Oe(fr, "prepend"), Oe(ur, "remove");
}
function Qr(e, t) {
  e.zoom = {
    containerClass: B(t, pr, "swiper-zoom-container"),
    limitToOriginalSize: N(t, mr, !1),
    maxRatio: W(t, hr, 3),
    minRatio: W(t, gr, 1),
    panOnMouseMove: N(t, Tr, !1),
    toggle: N(t, vr, !0),
    zoomedSlideClass: B(t, Sr, "swiper-slide-zoomed")
  };
}
function Jr(e, t) {
  e.allowTouchMove = N(t, vn, !0), e.edgeSwipeDetection = N(t, Ln, !1), e.edgeSwipeThreshold = W(t, Cn, 20), e.focusableElements = B(
    t,
    Pn,
    "input, select, option, textarea, button, video, label"
  ), e.followFinger = N(t, wn, !0), e.grabCursor = N(t, On, !1), e.longSwipes = N(t, Gn, !0), e.longSwipesMs = W(t, Bn, 300), e.longSwipesRatio = W(t, Hn, 0.5), e.noSwiping = N(t, Un, !0), e.noSwipingClass = B(t, qn, "swiper-no-swiping"), e.noSwipingSelector = B(t, jn), e.preventClicks = N(t, si, !0), e.preventClicksPropagation = N(t, ai, !0), e.preventInteractionOnTransition = N(t, ni, !1), e.resistance = N(t, ii, !0), e.resistanceRatio = W(t, li, 0.85), e.shortSwipes = N(t, fi, !0), e.simulateTouch = N(t, ui, !0), e.slideToClickedSlide = N(t, Si, !1), e.threshold = W(t, Mi, 5), e.touchAngle = W(t, Ii, 45), e.touchEventsTarget = Me(t, Ri, "wrapper"), e.touchMoveStopPropagation = N(t, Pi, !1), e.touchRatio = W(t, wi, 1), e.touchReleaseOnEdges = N(t, Oi, !1), e.touchStartForcePreventDefault = N(t, Di, !1), e.touchStartPreventDefault = N(t, Ni, !0);
}
function eo(e, t) {
  e.mousewheel = {
    enabled: N(t, Ji, !1),
    eventsTarget: B(t, el, "container"),
    forceToAxis: N(t, tl, !1),
    invert: N(t, sl, !1),
    noMousewheelClass: B(t, al, "swiper-no-mousewheel"),
    releaseOnEdges: N(t, nl, !1),
    sensitivity: W(t, il, 1),
    thresholdDelta: W(t, ll),
    thresholdTime: W(t, rl)
  };
}
function to(e, t) {
  e.freeMode = {
    enabled: N(t, Vl, !1),
    minimumVelocity: W(t, Yl, 0.02),
    momentum: N(t, Fl, !0),
    momentumBounce: N(t, Wl, !0),
    momentumBounceRatio: W(t, Xl, 1),
    momentumRatio: W(t, Ul, 1),
    momentumVelocityRatio: W(t, ql, 1),
    sticky: N(t, jl, !1)
  };
}
function so(e, t) {
  e.lazyPreloadPrevNext = W(t, kn, 0), e.lazyPreloaderClass = B(t, $n, "swiper-lazy-preloader");
}
function ao(e, t) {
  e.createElements = N(t, An, !1), e.cssMode = N(t, _n, !1), e.enabled = N(t, In, !0), e.eventsPrefix = B(t, Rn, "swiper"), e.init = N(t, Nn, !0), e.maxBackfaceHiddenSlides = W(t, Wn, 10), e.passiveListeners = N(t, ti, !0), e.roundLengths = N(t, oi, !1), e.runCallbacksOnInit = N(t, di, !0), e.setWrapperSize = N(t, ci, !1), e.uniqueNavElements = N(t, zi, !0), e.url = B(t, $i), e.userAgent = B(t, Gi);
}
function no(e, t) {
  e.observeParents = N(t, Zn, !1), e.observeSlideChildren = N(t, Qn, !1), e.observer = N(t, Jn, !1), e.resizeObserver = N(t, ri, !0), e.updateOnWindowResize = N(t, ki, !0), e.watchOverflow = N(t, Bi, !0), e.watchSlidesProgress = N(t, Hi, !1);
}
function io(e, t) {
  e.parallax = {
    enabled: N(t, Er, !1)
  };
}
function lo(e, t) {
  const s = B(t, br, void 0);
  if (s) {
    let a = 0;
    e.on = {
      ...e.on,
      slideChange: (n) => {
        const i = n.activeIndex, u = n.slides[i], d = n.slides[a], r = window[s];
        typeof r == "function" ? r({
          swiper: n,
          activeIndex: i,
          previousIndex: a,
          activeSlide: u,
          previousSlide: d
        }) : console.warn(`Waterfall: Callback function "${s}" not found on window object.`), a = i;
      }
    };
  }
}
function ro(e, t, s) {
  const a = N(e, Bl, !1), n = N(e, It, !1);
  if (!a || !n) return;
  const i = `[${ce}='${t}'] [${le}='${Rr}']`, u = `[${ce}='${t}'] [${le}='${Pr}']`, d = `[${ce}='${t}'] [${le}='${wr}']`, r = document.querySelector(i), p = document.querySelector(u), c = document.querySelector(d);
  if (!r || !p || !c) return;
  const f = B(e, Hl, "playing");
  function T(o) {
    o ? (p.style.setProperty("display", "block", "important"), p.style.setProperty("visibility", "visible", "important"), c.style.setProperty("display", "none", "important"), c.style.setProperty("visibility", "hidden", "important")) : (c.style.setProperty("display", "block", "important"), c.style.setProperty("visibility", "visible", "important"), p.style.setProperty("display", "none", "important"), p.style.setProperty("visibility", "hidden", "important"));
  }
  s.autoplay && (f === "paused" ? (s.autoplay.stop(), T(!1)) : (s.autoplay.start(), T(!0))), r.addEventListener("click", () => {
    s.autoplay && (s.autoplay.running ? (s.autoplay.stop(), T(!1)) : (s.autoplay.start(), T(!0)));
  });
}
console.log(
  "🚿 Hello from Wellspring Waterfall (v1.4.2). To learn more, visit https://wellspring-app.webflow.io/apps/waterfall"
);
const De = [];
window.waterfalls = De;
function mt(e, t) {
  let s = t;
  return document.querySelectorAll(e).forEach((a) => {
    Pt(a, s++);
  }), s;
}
let Ae = 0;
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(`[${ce}]`).forEach((e) => {
    e.hasAttribute(et) || e.hasAttribute(Je) || Pt(e, Ae++);
  }), Ae = mt(`[${ce}][${et}]`, Ae), Ae = mt(`[${ce}][${Je}]`, Ae), Fr(), wa();
});
function Pt(e, t) {
  {
    const s = B(e, ce, `Swiper ${t}`);
    if (!s) return;
    const a = !!N(e, Oa, !1);
    a && console.warn(`Initializing Waterfall: ${s}`);
    const n = {};
    Yr(n, e), zr(n, e), Gr(n, e), Or(n, e, s), kr(n, e), $r(n, e), Hr(n, e), to(n, e), Vr(n, e), Wr(n, e, De, a), Xr(n, e), eo(n, e), Jr(n, e), Ur(n, e), qr(n, e), jr(n, e, De, a), Kr(n, e), so(n, e), no(n, e), Qr(n, e), io(n, e), lo(n, e), ao(n, e), Zr(), a && console.warn(n);
    const i = At(n), u = e.querySelector(".swiper");
    a && console.log("SWIPER: ", u);
    const d = u?.querySelectorAll(".swiper-slide") || [];
    if (a && console.log("SWIPER SLIDES: ", d), d.length === 0) {
      console.warn(`Skipping "${s}": no .swiper-slide elements found.`);
      return;
    }
    const r = new te(u, i);
    De.push({ name: s, swiper: r }), ro(e, s, r);
  }
}
export {
  uo as ATTR_A11Y,
  Da as ATTR_A11Y_CONTAINER_MESSAGE,
  Na as ATTR_A11Y_CONTAINER_ROLE,
  za as ATTR_A11Y_CONTAINER_ROLE_DESCRIPTION_MESSAGE,
  ka as ATTR_A11Y_ENABLED,
  $a as ATTR_A11Y_FIRST_SLIDE_MESSAGE,
  Ga as ATTR_A11Y_ID,
  Ba as ATTR_A11Y_ITEM_ROLE_DESCRIPTION_MESSAGE,
  Ha as ATTR_A11Y_LAST_SLIDE_MESSAGE,
  Va as ATTR_A11Y_NEXT_SLIDE_MESSAGE,
  Ya as ATTR_A11Y_NOTIFICATION_CLASS,
  Fa as ATTR_A11Y_PAGINATION_BULLET_MESSAGE,
  Wa as ATTR_A11Y_PREV_SLIDE_MESSAGE,
  Xa as ATTR_A11Y_SCROLL_ON_FOCUS,
  Ua as ATTR_A11Y_SLIDE_LABEL_MESSAGE,
  qa as ATTR_A11Y_SLIDE_ROLE,
  gn as ATTR_ALLOW_SLIDE_NEXT,
  Tn as ATTR_ALLOW_SLIDE_PREV,
  vn as ATTR_ALLOW_TOUCH_MOVE,
  It as ATTR_AUTOPLAY,
  Hl as ATTR_AUTOPLAY_CONTROL_DEFAULT_STATE,
  Bl as ATTR_AUTOPLAY_CONTROL_ENABLED,
  Sn as ATTR_AUTO_HEIGHT,
  En as ATTR_BREAKPOINTS_BASE,
  br as ATTR_CALLBACK_SLIDE_CHANGE,
  un as ATTR_CARDS_PER_SLIDE_OFFSET,
  pn as ATTR_CARDS_PER_SLIDE_ROTATE,
  mn as ATTR_CARDS_ROTATE,
  hn as ATTR_CARDS_SLIDE_SHADOWS,
  xt as ATTR_CENTERED_SLIDES,
  mo as ATTR_CENTERED_SLIDES_BOUNDS,
  bn as ATTR_CENTER_INSUFFICIENT_SLIDES,
  yn as ATTR_CONTAINER_MODIFIER_CLASS,
  Je as ATTR_CONTROLLER,
  Za as ATTR_CONTROLLER_BY,
  Qa as ATTR_CONTROLLER_INVERSE,
  Ja as ATTR_COVERFLOW_DEPTH,
  en as ATTR_COVERFLOW_MODIFIER,
  tn as ATTR_COVERFLOW_ROTATE,
  sn as ATTR_COVERFLOW_SCALE,
  an as ATTR_COVERFLOW_SLIDE_SHADOWS,
  nn as ATTR_COVERFLOW_STRETCH,
  An as ATTR_CREATE_ELEMENTS,
  _n as ATTR_CSS_MODE,
  on as ATTR_CUBE_SHADOW,
  dn as ATTR_CUBE_SHADOW_OFFSET,
  cn as ATTR_CUBE_SHADOW_SCALE,
  fn as ATTR_CUBE_SLIDE_SHADOWS,
  Oa as ATTR_DEBUG_MODE,
  Nl as ATTR_DELAY,
  xn as ATTR_DIRECTION,
  zl as ATTR_DISABLE_ON_INTERACTION,
  Ln as ATTR_EDGE_SWIPE_DETECTION,
  Cn as ATTR_EDGE_SWIPE_THRESHOLD,
  Mn as ATTR_EFFECT,
  po as ATTR_EFFECT_CROSSFADE,
  In as ATTR_ENABLED,
  Rn as ATTR_EVENTS_PREFIX,
  ln as ATTR_FLIP_LIMIT_ROTATION,
  rn as ATTR_FLIP_SLIDE_SHADOWS,
  Pn as ATTR_FOCUSABLE_ELEMENTS,
  wn as ATTR_FOLLOW_FINGER,
  Vl as ATTR_FREE_MODE_ENABLED,
  Yl as ATTR_FREE_MODE_MINIMUM_VELOCITY,
  Fl as ATTR_FREE_MODE_MOMENTUM,
  Wl as ATTR_FREE_MODE_MOMENTUM_BOUNCE,
  Xl as ATTR_FREE_MODE_MOMENTUM_BOUNCE_RATIO,
  Ul as ATTR_FREE_MODE_MOMENTUM_RATIO,
  ql as ATTR_FREE_MODE_MOMENTUM_VELOCITY_RATIO,
  jl as ATTR_FREE_MODE_STICKY,
  On as ATTR_GRAB_CURSOR,
  dl as ATTR_GRID_FILL,
  ol as ATTR_GRID_ROWS,
  Fi as ATTR_HASH_REPLACE_STATE,
  Wi as ATTR_HASH_WATCH_STATE,
  Dn as ATTR_HEIGHT,
  Xi as ATTR_HISTORY_KEEP_QUERY,
  Ui as ATTR_HISTORY_KEY,
  qi as ATTR_HISTORY_REPLACE_STATE,
  ji as ATTR_HISTORY_ROOT,
  Nn as ATTR_INIT,
  zn as ATTR_INITIAL_SLIDE,
  Ki as ATTR_KEYBOARD_ENABLED,
  Zi as ATTR_KEYBOARD_ONLY_IN_VIEWPORT,
  Qi as ATTR_KEYBOARD_PAGE_UP_DOWN,
  $n as ATTR_LAZY_PRELOADER_CLASS,
  kn as ATTR_LAZY_PRELOAD_PREV_NEXT,
  Gn as ATTR_LONG_SWIPES,
  Bn as ATTR_LONG_SWIPES_MS,
  Hn as ATTR_LONG_SWIPES_RATIO,
  ho as ATTR_LOOP,
  Yn as ATTR_LOOP_ADD_ADDITIONAL_SLIDES,
  Vn as ATTR_LOOP_ADD_BLANK_SLIDES,
  Fn as ATTR_LOOP_PREVENTS_SLIDING,
  ut as ATTR_MANIPULATION_ADD_INDEX,
  dr as ATTR_MANIPULATION_ADD_SLIDE,
  cr as ATTR_MANIPULATION_APPEND_SLIDE,
  fr as ATTR_MANIPULATION_PREPEND_SLIDE,
  pt as ATTR_MANIPULATION_REMOVE_INDEX,
  ur as ATTR_MANIPULATION_REMOVE_SLIDE,
  Wn as ATTR_MAX_BACKFACE_HIDDEN_SLIDES,
  Ji as ATTR_MOUSE_ENABLED,
  el as ATTR_MOUSE_EVENTS_TARGET,
  tl as ATTR_MOUSE_FORCE_TO_AXIS,
  sl as ATTR_MOUSE_INVERT,
  al as ATTR_MOUSE_NO_MOUSE_WHEEL_CLASS,
  nl as ATTR_MOUSE_RELEASE_ON_EDGES,
  il as ATTR_MOUSE_SENSITIVITY,
  ll as ATTR_MOUSE_THRESHOLD_DELTA,
  rl as ATTR_MOUSE_THRESHOLD_TIME,
  cl as ATTR_NAVIGATION_DISABLED_CLASS,
  fl as ATTR_NAVIGATION_ENABLED,
  ul as ATTR_NAVIGATION_HIDDEN_CLASS,
  pl as ATTR_NAVIGATION_HIDE_ON_CLICK,
  ml as ATTR_NAVIGATION_LOCK_CLASS,
  hl as ATTR_NAVIGATION_NAVIGATION_DISABLED_CLASS,
  Xn as ATTR_NESTED,
  Kn as ATTR_NORMALIZE_SLIDE_INDEX,
  Un as ATTR_NO_SWIPING,
  qn as ATTR_NO_SWIPING_CLASS,
  jn as ATTR_NO_SWIPING_SELECTOR,
  Jn as ATTR_OBSERVER,
  Qn as ATTR_OBSERVE_SLIDE_CHILDREN,
  Zn as ATTR_OBSERVE_SLIDE_PARENTS,
  ei as ATTR_ONE_WAY_MOVEMENT,
  Tl as ATTR_PAGINATION_BULLET_ACTIVE_CLASS,
  vo as ATTR_PAGINATION_BULLET_CLASS,
  vl as ATTR_PAGINATION_CLICKABLE,
  Sl as ATTR_PAGINATION_CLICKABLE_CLASS,
  El as ATTR_PAGINATION_CURRENT_CLASS,
  bl as ATTR_PAGINATION_DYNAMIC_BULLETS,
  yl as ATTR_PAGINATION_DYNAMIC_MAIN_BULLETS,
  Al as ATTR_PAGINATION_ENABLED,
  _l as ATTR_PAGINATION_HIDDEN_CLASS,
  xl as ATTR_PAGINATION_HIDE_ON_CLICK,
  Ll as ATTR_PAGINATION_HORIZONTAL_CLASS,
  Cl as ATTR_PAGINATION_LOCK_CLASS,
  Ml as ATTR_PAGINATION_MODIFIER_CLASS,
  Il as ATTR_PAGINATION_PAGINATION_DISABLED_CLASS,
  Rl as ATTR_PAGINATION_PROGRESSBAR_FILL_CLASS,
  Pl as ATTR_PAGINATION_PROGRESSBAR_OPPOSITE,
  wl as ATTR_PAGINATION_PROGRESSBAR_OPPOSITE_CLASS,
  Ol as ATTR_PAGINATION_TOTAL_CLASS,
  gl as ATTR_PAGINATION_TYPE,
  Dl as ATTR_PAGINATION_VERTICAL_CLASS,
  _o as ATTR_PARALLAX,
  Io as ATTR_PARALLAX_DURATION,
  Er as ATTR_PARALLAX_ENABLED,
  Mo as ATTR_PARALLAX_OPACITY,
  Co as ATTR_PARALLAX_SCALE,
  xo as ATTR_PARALLAX_X,
  Lo as ATTR_PARALLAX_Y,
  ti as ATTR_PASSIVE_LISTENERS,
  $l as ATTR_PAUSE_ON_MOUSE_ENTER,
  yr as ATTR_PLAYBACK_MODE,
  si as ATTR_PREVENT_CLICKS,
  ai as ATTR_PREVENT_CLICKS_PROPAGATION,
  ni as ATTR_PREVENT_INTERACTION_ON_TRANSITION,
  ii as ATTR_RESISTANCE,
  li as ATTR_RESISTANCE_RATIO,
  ri as ATTR_RESIZE_OBSERVER,
  kl as ATTR_REVERSE_DIRECTION,
  go as ATTR_REWIND,
  oi as ATTR_ROUND_LENGTHS,
  di as ATTR_RUN_CALLBACKS_ON_INIT,
  Zl as ATTR_SCROLLBAR_DRAGGABLE,
  Eo as ATTR_SCROLLBAR_DRAG_CLASS,
  Kl as ATTR_SCROLLBAR_DRAG_SIZE,
  Ql as ATTR_SCROLLBAR_ENABLED,
  Jl as ATTR_SCROLLBAR_HIDE,
  er as ATTR_SCROLLBAR_HORIZONTAL_CLASS,
  tr as ATTR_SCROLLBAR_LOCK_CLASS,
  sr as ATTR_SCROLLBAR_SCROLLBAR_DISABLED_CLASS,
  nr as ATTR_SCROLLBAR_SNAP_ON_RELEASE,
  ar as ATTR_SCROLLBAR_VERTICAL_CLASS,
  ci as ATTR_SET_WRAPPER_SIZE,
  fi as ATTR_SHORT_SWIPES,
  ui as ATTR_SIMULATE_TOUCH,
  bi as ATTR_SLIDES_OFFSET_AFTER,
  yi as ATTR_SLIDES_OFFSET_BEFORE,
  Lt as ATTR_SLIDES_PER_GROUP,
  Ai as ATTR_SLIDES_PER_GROUP_AUTO,
  _i as ATTR_SLIDES_PER_GROUP_SKIP,
  Ct as ATTR_SLIDES_PER_VIEW,
  pi as ATTR_SLIDE_ACTIVE_CLASS,
  hi as ATTR_SLIDE_BLANK_CLASS,
  mi as ATTR_SLIDE_CLASS,
  gi as ATTR_SLIDE_FULLY_VISIBLE_CLASS,
  Ti as ATTR_SLIDE_NEXT_CLASS,
  vi as ATTR_SLIDE_PREV_CLASS,
  Si as ATTR_SLIDE_TO_CLICKED_SLIDE,
  Ei as ATTR_SLIDE_VISIBLE_CLASS,
  Rt as ATTR_SMOOTH_AUTOPLAY,
  Mt as ATTR_SPACE_BETWEEN,
  xi as ATTR_SPEED,
  Gl as ATTR_STOP_ON_LAST_SLIDE,
  Ci as ATTR_SWIPER_ELEMENT_NODE_NAME,
  Li as ATTR_SWIPE_HANDLER,
  Mi as ATTR_THRESHOLD,
  et as ATTR_THUMBS,
  ir as ATTR_THUMBS_AUTO_SCROLL_OFFSET,
  or as ATTR_THUMBS_CONTAINER_CLASS,
  lr as ATTR_THUMBS_MULTIPLE_ACTIVE_THUMBS,
  rr as ATTR_THUMBS_SLIDE_THUMB_ACTIVE_CLASS,
  Ii as ATTR_TOUCH_ANGLE,
  Ri as ATTR_TOUCH_EVENTS_TARGET,
  Pi as ATTR_TOUCH_MOVE_STOP_PROPAGATION,
  wi as ATTR_TOUCH_RATIO,
  Oi as ATTR_TOUCH_RELEASE_ON_EDGES,
  Di as ATTR_TOUCH_START_FORCE_PREVENT_DEFAULT,
  Ni as ATTR_TOUCH_START_PREVENT_DEFAULT,
  zi as ATTR_UNIQUE_NAV_ELEMENTS,
  ki as ATTR_UPDATE_ON_WINDOW_RESIZE,
  $i as ATTR_URL,
  Gi as ATTR_USER_AGENT,
  To as ATTR_VIRTUAL_TRANSLATE,
  So as ATTR_WAIT_FOR_TRANSITION,
  Bi as ATTR_WATCH_OVERFLOW,
  Hi as ATTR_WATCH_SLIDES_PROGRESS,
  ce as ATTR_WATERFALL,
  fo as ATTR_WATERFALL_CONTENT,
  le as ATTR_WATERFALL_ELEMENT,
  co as ATTR_WATERFALL_POSTLOAD,
  oo as ATTR_WATERFALL_PRELOAD,
  Vi as ATTR_WIDTH,
  Yi as ATTR_WRAPPER_CLASS,
  bo as ATTR_ZOOM,
  Sr as ATTR_ZOOMED_SLIDE_CLASS,
  pr as ATTR_ZOOM_CONTAINER_CLASS,
  yo as ATTR_ZOOM_ENABLED,
  Ao as ATTR_ZOOM_FADE,
  mr as ATTR_ZOOM_LIMIT_TO_ORIGINAL_SIZE,
  hr as ATTR_ZOOM_MAX_RATIO,
  gr as ATTR_ZOOM_MIN_RATIO,
  Tr as ATTR_ZOOM_PAN_ON_MOUSE_MOVE,
  vr as ATTR_ZOOM_TOGGLE,
  ja as BREAKPOINTS,
  Rr as EL_AUTOPLAY_CONTROL,
  Pr as EL_AUTOPLAY_CONTROL_PAUSE,
  wr as EL_AUTOPLAY_CONTROL_PLAY,
  Po as EL_NAVIGATION,
  xr as EL_NAVIGATION_NEXT,
  Lr as EL_NAVIGATION_PREV,
  Ar as EL_PAGINATION,
  _r as EL_PAGINATION_BULLET,
  Ro as EL_PAGINATION_BULLET_ACTIVE,
  Cr as EL_SCROLLBAR,
  Mr as EL_SCROLLBAR_DRAG,
  Ir as EL_SLIDE_COUNT,
  Ka as breakpointAttr
};
//# sourceMappingURL=well-waterfall.es.js.map
