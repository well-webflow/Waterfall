(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode(':root{--swiper-theme-color: #007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function, initial);box-sizing:content-box}.swiper-android .swiper-slide,.swiper-ios .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-slide,.swiper-3d .swiper-cube-shadow{transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-slides-offset-before);scroll-margin-inline-start:var(--swiper-slides-offset-before)}.swiper-css-mode.swiper-horizontal>.swiper-wrapper>.swiper-slide:last-child{margin-inline-end:var(--swiper-slides-offset-after)}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-slides-offset-before);scroll-margin-block-start:var(--swiper-slides-offset-before)}.swiper-css-mode.swiper-vertical>.swiper-wrapper>.swiper-slide:last-child{margin-block-end:var(--swiper-slides-offset-after)}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-slide-shadow-bottom{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:#00000026}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,#00000080,#0000)}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color, var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}:is(.swiper:not(.swiper-watch-progress),.swiper-watch-progress .swiper-slide-visible) .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color: #fff}.swiper-lazy-preloader-black{--swiper-preloader-color: #000}@keyframes swiper-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.swiper-virtual .swiper-slide{-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper:after{content:"";position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper:after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper:after{width:1px;height:var(--swiper-virtual-size)}:root{--swiper-navigation-size: 44px}.swiper-button-prev,.swiper-button-next{position:absolute;width:var(--swiper-navigation-size);height:var(--swiper-navigation-size);z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color, var(--swiper-theme-color))}:is(.swiper-button-prev,.swiper-button-next).swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}:is(.swiper-button-prev,.swiper-button-next).swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled :is(.swiper-button-prev,.swiper-button-next){display:none!important}:is(.swiper-button-prev,.swiper-button-next) ::slotted(svg),:is(.swiper-button-prev,.swiper-button-next) svg{width:100%;height:100%;object-fit:contain;transform-origin:center;fill:currentColor;pointer-events:none}.swiper-button-lock{display:none}.swiper-button-prev,.swiper-button-next{top:var(--swiper-navigation-top-offset, 50%);margin-top:calc(0px - (var(--swiper-navigation-size) / 2))}.swiper-button-prev{left:var(--swiper-navigation-sides-offset, 4px);right:auto}.swiper-button-prev ::slotted(.swiper-navigation-icon),.swiper-button-prev .swiper-navigation-icon{transform:rotate(180deg)}.swiper-button-next{right:var(--swiper-navigation-sides-offset, 4px);left:auto}.swiper-horizontal .swiper-button-prev,.swiper-horizontal .swiper-button-next,.swiper-horizontal~.swiper-button-prev,.swiper-horizontal~.swiper-button-next{top:var(--swiper-navigation-top-offset, 50%);margin-top:calc(0px - (var(--swiper-navigation-size) / 2));margin-left:0}.swiper-horizontal .swiper-button-prev,.swiper-horizontal~.swiper-button-prev,.swiper-horizontal.swiper-rtl .swiper-button-next,.swiper-horizontal.swiper-rtl~.swiper-button-next{left:var(--swiper-navigation-sides-offset, 4px);right:auto}.swiper-horizontal .swiper-button-next,.swiper-horizontal~.swiper-button-next,.swiper-horizontal.swiper-rtl .swiper-button-prev,.swiper-horizontal.swiper-rtl~.swiper-button-prev{right:var(--swiper-navigation-sides-offset, 4px);left:auto}:is(.swiper-horizontal .swiper-button-prev,.swiper-horizontal~.swiper-button-prev,.swiper-horizontal.swiper-rtl .swiper-button-next,.swiper-horizontal.swiper-rtl~.swiper-button-next) ::slotted(.swiper-navigation-icon),:is(.swiper-horizontal .swiper-button-prev,.swiper-horizontal~.swiper-button-prev,.swiper-horizontal.swiper-rtl .swiper-button-next,.swiper-horizontal.swiper-rtl~.swiper-button-next) .swiper-navigation-icon{transform:rotate(180deg)}:is(.swiper-horizontal.swiper-rtl .swiper-button-prev,.swiper-horizontal.swiper-rtl~.swiper-button-prev) ::slotted(.swiper-navigation-icon),:is(.swiper-horizontal.swiper-rtl .swiper-button-prev,.swiper-horizontal.swiper-rtl~.swiper-button-prev) .swiper-navigation-icon{transform:rotate(0)}.swiper-vertical .swiper-button-prev,.swiper-vertical .swiper-button-next,.swiper-vertical~.swiper-button-prev,.swiper-vertical~.swiper-button-next{left:var(--swiper-navigation-top-offset, 50%);right:auto;margin-left:calc(0px - (var(--swiper-navigation-size) / 2));margin-top:0}.swiper-vertical .swiper-button-prev,.swiper-vertical~.swiper-button-prev{top:var(--swiper-navigation-sides-offset, 4px);bottom:auto}:is(.swiper-vertical .swiper-button-prev,.swiper-vertical~.swiper-button-prev) ::slotted(.swiper-navigation-icon),:is(.swiper-vertical .swiper-button-prev,.swiper-vertical~.swiper-button-prev) .swiper-navigation-icon{transform:rotate(-90deg)}.swiper-vertical .swiper-button-next,.swiper-vertical~.swiper-button-next{bottom:var(--swiper-navigation-sides-offset, 4px);top:auto}:is(.swiper-vertical .swiper-button-next,.swiper-vertical~.swiper-button-next) ::slotted(.swiper-navigation-icon),:is(.swiper-vertical .swiper-button-next,.swiper-vertical~.swiper-button-next) .swiper-navigation-icon{transform:rotate(90deg)}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-pagination-fraction,.swiper-pagination-custom,.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal{bottom:var(--swiper-pagination-bottom, 8px);top:var(--swiper-pagination-top, auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));height:var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius, 50%);background:var(--swiper-pagination-bullet-inactive-color, #000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color, var(--swiper-theme-color))}.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets{right:var(--swiper-pagination-right, 8px);left:var(--swiper-pagination-left, auto);top:50%;transform:translate3d(0,-50%,0)}:is(.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets) .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap, 6px) 0;display:block}:is(.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets).swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}:is(.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets).swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}:is(.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-horizontal.swiper-pagination-bullets) .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap, 4px)}:is(.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-horizontal.swiper-pagination-bullets).swiper-pagination-bullets-dynamic{left:50%;transform:translate(-50%);white-space:nowrap}:is(.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-horizontal.swiper-pagination-bullets).swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color, inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, .25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color, var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size, 4px);left:0;top:0}.swiper-vertical>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite{width:var(--swiper-pagination-progressbar-size, 4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius, 10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color, rgba(0, 0, 0, .1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset, 1%);bottom:var(--swiper-scrollbar-bottom, 4px);top:var(--swiper-scrollbar-top, auto);z-index:50;height:var(--swiper-scrollbar-size, 4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%))}.swiper-vertical>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-vertical{position:absolute;left:var(--swiper-scrollbar-left, auto);right:var(--swiper-scrollbar-right, 4px);top:var(--swiper-scrollbar-sides-offset, 1%);z-index:50;width:var(--swiper-scrollbar-size, 4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color, rgba(0, 0, 0, .5));border-radius:var(--swiper-scrollbar-border-radius, 10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>img,.swiper-zoom-container>svg,.swiper-zoom-container>canvas{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move;touch-action:none}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-fade .swiper-slide-active,.swiper-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper.swiper-cube{overflow:visible}.swiper-cube .swiper-slide{pointer-events:none;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-cube.swiper-rtl .swiper-slide{transform-origin:100% 0}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-next,.swiper-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:"";background:#000;position:absolute;inset:0;filter:blur(50px)}.swiper-cube .swiper-slide-next+.swiper-slide{pointer-events:auto;visibility:visible}.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-top,.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-bottom,.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-left,.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-right{z-index:0;backface-visibility:hidden}.swiper.swiper-flip{overflow:visible}.swiper-flip .swiper-slide{pointer-events:none;backface-visibility:hidden;z-index:1}.swiper-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-flip .swiper-slide-active,.swiper-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-top,.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-bottom,.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-left,.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-right{z-index:0;backface-visibility:hidden}.swiper-creative .swiper-slide{backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper.swiper-cards{overflow:visible}.swiper-cards .swiper-slide{transform-origin:center bottom;backface-visibility:hidden;overflow:hidden}')),document.head.appendChild(i)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
function fe(e = "") {
  return e.trim().split(" ").filter((t) => !!t.trim());
}
function Gt(e) {
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
function Se(e, t = 0) {
  return setTimeout(e, t);
}
function ae() {
  return Date.now();
}
function Bt(e) {
  return window.getComputedStyle(e, null);
}
function Ke(e, t = "x") {
  const s = Bt(e), a = s.transform || s.webkitTransform;
  if (!a || a === "none")
    return 0;
  const n = new DOMMatrixReadOnly(a);
  return t === "x" ? n.m41 : n.m42;
}
function xe(e) {
  return typeof e == "object" && e !== null && !!e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object";
}
function ke(e) {
  if (!e || typeof e != "object")
    return !1;
  const s = e.ownerDocument?.defaultView?.HTMLElement ?? (typeof HTMLElement < "u" ? HTMLElement : void 0);
  return !!s && e instanceof s;
}
function Ht(e) {
  return typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : !!e && typeof e == "object" && (e.nodeType === 1 || e.nodeType === 11);
}
function se(e, ...t) {
  const s = Object(e);
  for (let a = 0; a < t.length; a += 1) {
    const n = t[a];
    if (n == null || Ht(n))
      continue;
    const i = n, u = Object.keys(Object(i));
    for (let c = 0, r = u.length; c < r; c += 1) {
      const p = u[c];
      if (p === "__proto__" || p === "constructor" || p === "prototype")
        continue;
      const d = Object.getOwnPropertyDescriptor(i, p);
      if (!d || !d.enumerable)
        continue;
      const f = i[p];
      xe(s[p]) && xe(f) ? f.__swiper__ ? s[p] = f : se(s[p], f) : !xe(s[p]) && xe(f) ? (s[p] = {}, f.__swiper__ ? s[p] = f : se(s[p], f)) : s[p] = f;
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
function Vt(e, t) {
  const s = [t];
  for (; s.length > 0; ) {
    const a = s.shift();
    if (e === a)
      return !0;
    s.push(...a.children, ...a.shadowRoot ? a.shadowRoot.children : [], ...a.assignedElements ? a.assignedElements() : []);
  }
  return !1;
}
function Ft(e, t) {
  let s = t.contains(e);
  return !s && t instanceof HTMLSlotElement && (s = [...t.assignedElements()].includes(e), s || (s = Vt(e, t))), s;
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
function Yt(e, t) {
  const s = [];
  let a = e.previousElementSibling;
  for (; a; )
    (!t || a.matches(t)) && s.push(a), a = a.previousElementSibling;
  return s;
}
function Wt(e, t) {
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
function Ce(e, t) {
  t && e.addEventListener("transitionend", function s(a) {
    a.target === e && (e.removeEventListener("transitionend", s), t.call(e, a));
  });
}
function Ze(e, t, s) {
  {
    const a = window.getComputedStyle(e, null);
    return e[t === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(a.getPropertyValue(t === "width" ? "margin-right" : "margin-top")) + parseFloat(a.getPropertyValue(t === "width" ? "margin-left" : "margin-bottom"));
  }
}
function X(e) {
  return (Array.isArray(e) ? e : [e]).filter((t) => !!t);
}
function $e(e) {
  return (t) => Math.abs(t) > 0 && e.browser && e.browser.need3dFix && Math.abs(t) % 90 === 0 ? t + 1e-3 : t;
}
function re(e, t = "") {
  const s = globalThis.trustedTypes;
  typeof s < "u" ? e.innerHTML = s.createPolicy("html", { createHTML: (a) => a }).createHTML(t) : e.innerHTML = t;
}
let Ye;
function Xt() {
  return typeof window > "u" ? { touch: !1 } : {
    touch: "ontouchstart" in window || navigator.maxTouchPoints > 0
  };
}
function vt() {
  return Ye || (Ye = Xt()), Ye;
}
let We;
function Ut({ userAgent: e } = {}) {
  if (typeof window > "u")
    return { ios: !1, android: !1 };
  const t = vt(), s = navigator.platform, a = e || navigator.userAgent, n = { ios: !1, android: !1 }, i = /(Android);?[\s/]+([\d.]+)?/.test(a), u = /(iPhone\sOS|iOS|iPod)/.test(a), c = /iPad/.test(a), r = s === "MacIntel" && t.touch && navigator.maxTouchPoints > 1, p = c || r;
  return i && !(s === "Win32") && (n.os = "android", n.android = !0), (p || u) && (n.os = "ios", n.ios = !0), n;
}
function Et(e = {}) {
  return We || (We = Ut(e)), We;
}
let Xe;
function qt() {
  if (typeof window > "u")
    return { isSafari: !1, isWebView: !1, need3dFix: !1 };
  const e = Et(), t = navigator.userAgent, s = t.toLowerCase(), a = s.includes("safari") && !s.includes("chrome") && !s.includes("android"), n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t), i = a || n && e.ios;
  return { isSafari: a, isWebView: n, need3dFix: i };
}
function St() {
  return Xe || (Xe = qt()), Xe;
}
const Qe = (e, t) => {
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
}, Ue = (e, t) => {
  if (!e.slides[t])
    return;
  const s = e.slides[t].querySelector('[loading="lazy"]');
  s && s.removeAttribute("loading");
}, bt = (e) => {
  if (!e || e.destroyed || !e.params || !e.params.lazyPreload)
    return;
  let t = e.params.lazyPreloadPrevNext;
  const s = e.slides.length;
  if (!s || !t || t < 0)
    return;
  t = Math.min(t, s);
  const a = e.params.slidesPerView === "auto" ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView), n = e.activeIndex;
  if (e.params.grid && (e.params.grid.rows ?? 1) > 1) {
    const u = n, c = [u - t];
    c.push(...Array.from({ length: t }).map((r, p) => u + a + p)), e.slides.forEach((r, p) => {
      r.column !== void 0 && c.includes(r.column) && Ue(e, p);
    });
    return;
  }
  const i = n + a - 1;
  if (e.params.rewind || e.params.loop)
    for (let u = n - t; u <= i + t; u += 1) {
      const c = (u % s + s) % s;
      (c < n || c > i) && Ue(e, c);
    }
  else
    for (let u = Math.max(n - t, 0); u <= Math.min(i + t, s - 1); u += 1)
      u !== n && (u > i || u < n) && Ue(e, u);
};
function jt(e, t = "window", s) {
  if (!e || t === "container" && !s)
    return;
  let a = !1;
  const n = t === "window" ? window.innerHeight : s.clientHeight, i = Object.keys(e).map((u) => {
    if (typeof u == "string" && u.indexOf("@") === 0) {
      const c = parseFloat(u.substr(1));
      return { value: n * c, point: u };
    }
    return { value: u, point: u };
  });
  i.sort((u, c) => parseInt(String(u.value), 10) - parseInt(String(c.value), 10));
  for (let u = 0; u < i.length; u += 1) {
    const { point: c, value: r } = i[u];
    t === "window" ? window.matchMedia(`(min-width: ${r}px)`).matches && (a = c) : r <= s.clientWidth && (a = c);
  }
  return a || "max";
}
const it = (e, t) => !!(e.grid && t.grid && t.grid.rows > 1);
function Kt() {
  const e = this, { realIndex: t, initialized: s, params: a, el: n } = e, i = a.breakpoints;
  if (!i || i && Object.keys(i).length === 0)
    return;
  const u = a.breakpointsBase === "window" || !a.breakpointsBase ? a.breakpointsBase : "container", c = ["window", "container"].includes(a.breakpointsBase) || !a.breakpointsBase ? e.el : document.querySelector(a.breakpointsBase), r = e.getBreakpoint(i, u, c);
  if (!r || e.currentBreakpoint === r)
    return;
  const p = i, f = (r in p ? p[r] : void 0) || e.originalParams, T = it(e, a), o = it(e, f), l = e.params.grabCursor, g = f.grabCursor, E = a.enabled;
  T && !o ? (n.classList.remove(`${a.containerModifierClass}grid`, `${a.containerModifierClass}grid-column`), e.emitContainerClasses()) : !T && o && (n.classList.add(`${a.containerModifierClass}grid`), (f.grid.fill && f.grid.fill === "column" || !f.grid.fill && a.grid.fill === "column") && n.classList.add(`${a.containerModifierClass}grid-column`), e.emitContainerClasses()), l && !g ? e.unsetGrabCursor() : !l && g && e.setGrabCursor();
  const S = (A, w) => A[w];
  ["navigation", "pagination", "scrollbar"].forEach((A) => {
    const w = S(f, A);
    if (typeof w > "u")
      return;
    const C = S(a, A), k = typeof C == "object" && C !== null && C.enabled, _ = typeof w == "object" && w !== null && w.enabled, y = e[A];
    k && !_ && y?.disable?.(), !k && _ && y?.enable?.();
  });
  const h = f.direction && f.direction !== a.direction, m = a.loop && (f.slidesPerView !== a.slidesPerView || h), v = a.loop;
  h && s && e.changeDirection(), se(e.params, f);
  const b = e.params.enabled, L = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev
  }), E && !b ? e.disable() : !E && b && e.enable(), e.currentBreakpoint = r, e.emit("_beforeBreakpoint", f), s && (m ? (e.loopDestroy(), e.updateSlides(), e.loopCreate(t)) : !v && L ? (e.updateSlides(), e.loopCreate(t)) : v && !L && e.loopDestroy()), e.emit("breakpoint", f);
}
var Zt = { setBreakpoint: Kt, getBreakpoint: jt };
function Qt() {
  const e = this, { isLocked: t, params: s } = e, { slidesOffsetBefore: a } = s;
  if (a) {
    const n = e.slides.length - 1, i = e.slidesGrid[n] + e.slidesSizesGrid[n] + a * 2;
    e.isLocked = e.size > i;
  } else
    e.isLocked = e.snapGrid.length === 1;
  s.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked), s.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var Jt = { checkOverflow: Qt };
function es(e, t) {
  const s = [];
  return e.forEach((a) => {
    typeof a == "object" ? Object.keys(a).forEach((n) => {
      a[n] && s.push(t + n);
    }) : typeof a == "string" && s.push(t + a);
  }), s;
}
function ts() {
  const e = this, { classNames: t, params: s, rtl: a, el: n, device: i } = e, u = es([
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
function ss() {
  const e = this, { el: t, classNames: s } = e;
  !t || typeof t == "string" || (t.classList.remove(...s), e.emitContainerClasses());
}
var as = { addClasses: ts, removeClasses: ss };
const yt = {
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
var ns = {
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
      t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((c) => {
        c.apply(n, [u, ...a]);
      }), t.eventsListeners && t.eventsListeners[u] && t.eventsListeners[u].forEach((c) => {
        c.apply(n, a);
      });
    }), t;
  }
};
function is(e) {
  const t = this;
  t.destroyed || t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
}
function ls() {
  const e = this;
  e.destroyed || e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
function rs(e) {
  const t = this;
  t.destroyed || (Qe(t, e.target), !(e.type === "error" || t.params.cssMode || t.params.slidesPerView !== "auto" && !t.params.autoHeight) && t.update());
}
function os() {
  const e = this, { params: t, el: s } = e;
  if (s && s.offsetWidth === 0)
    return;
  const { wrapperEl: a } = e, n = t.cssMode && a ? a.style.scrollSnapType : "none";
  n !== "none" && (a.style.scrollSnapType = "none", requestAnimationFrame(() => {
    e.destroyed || (a.style.scrollSnapType = n);
  })), t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: i, allowSlidePrev: u, snapGrid: c } = e, r = e.virtual && e.params.virtual?.enabled;
  e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
  const p = r && t.loop;
  if ((t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !p) {
    const d = r ? e.virtual.slides.length : e.slides.length;
    e.slideTo(d - 1, 0, !1, !0);
  } else
    e.params.loop && !r ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
  if (t.cssMode && e.onScroll && e.onScroll(), e.autoplay && e.autoplay.running && e.autoplay.paused) {
    const d = e.autoplay;
    clearTimeout(d.resizeTimeout), d.resizeTimeout = setTimeout(() => {
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
    }, 500);
  }
  e.allowSlidePrev = u, e.allowSlideNext = i, e.params.watchOverflow && c !== e.snapGrid && e.checkOverflow();
}
function At(e) {
  let t, s;
  const a = e.el;
  return typeof e.params.width < "u" && e.params.width !== null ? t = e.params.width : t = a.clientWidth, typeof e.params.height < "u" && e.params.height !== null ? s = e.params.height : s = a.clientHeight, t === 0 && e.isHorizontal() || s === 0 && e.isVertical() ? null : (t = t - parseInt(ue(a, "padding-left") || "0", 10) - parseInt(ue(a, "padding-right") || "0", 10), s = s - parseInt(ue(a, "padding-top") || "0", 10) - parseInt(ue(a, "padding-bottom") || "0", 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), { width: t, height: s });
}
function _t(e) {
  const { params: t, el: s } = e;
  if (!t.updateOnWindowResize || !t.resizeObserver || typeof window.ResizeObserver > "u")
    return !1;
  const a = e.isHorizontal(), n = a ? s.clientWidth : s.clientHeight;
  if (n === e._clientSize)
    return !1;
  const i = At(e);
  return !i || (a ? i.width : i.height) !== e.size ? !0 : (e._clientSize = n, !1);
}
function ds() {
  const e = this, t = e.el, s = At(e);
  if (!s)
    return;
  const { width: a, height: n } = s;
  Object.assign(e, {
    width: a,
    height: n,
    size: e.isHorizontal() ? a : n,
    _clientSize: e.isHorizontal() ? t.clientWidth : t.clientHeight
  });
}
function cs() {
  const e = this;
  if (e.destroyed)
    return;
  const { wrapperEl: t, rtlTranslate: s, enabled: a } = e;
  if (!a || _t(e))
    return;
  e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, e.translate === 0 && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
  let n;
  const i = e.maxTranslate() - e.minTranslate();
  i === 0 ? n = 0 : n = (e.translate - e.minTranslate()) / i, n !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
}
function fs(e) {
  const t = this;
  if (t.destroyed)
    return;
  const s = t.touchEventsData;
  let a = e.originalEvent ?? e;
  if (a.type === "touchend" || a.type === "touchcancel") {
    const b = [...a.changedTouches].find((L) => L.identifier === s.touchId);
    if (!b || b.identifier !== s.touchId)
      return;
  } else if (s.touchId !== null || a.pointerId !== s.pointerId)
    return;
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(a.type) && !(["pointercancel", "contextmenu"].includes(a.type) && (t.browser.isSafari || t.browser.isWebView)))
    return;
  s.pointerId = null, s.touchId = null, s.startEventPath = void 0, s.lastMoveEvent = void 0;
  const { params: i, touches: u, rtlTranslate: c, slidesGrid: r, enabled: p } = t;
  if (!p || !i.simulateTouch && a.pointerType === "mouse")
    return;
  if (s.allowTouchCallbacks && t.emit("touchEnd", a), s.allowTouchCallbacks = !1, !s.isTouched) {
    s.isMoved && i.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, s.startMoving = !1;
    return;
  }
  i.grabCursor && s.isMoved && s.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
  const d = ae(), f = d - s.touchStartTime;
  if (t.allowClick) {
    const v = a.path ?? (a.composedPath && a.composedPath());
    t.updateClickedSlide(v && v[0], v), t.emit("tap click", a), f < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", a);
  }
  if (s.lastClickTime = ae(), Se(() => {
    t.destroyed || (t.allowClick = !0);
  }), !s.isTouched || !s.isMoved || !t.swipeDirection || u.diff === 0 && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset) {
    s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
    return;
  }
  s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
  let T;
  if (i.followFinger ? T = c ? t.translate : -t.translate : T = -(s.currentTranslate ?? 0), i.cssMode)
    return;
  if (i.freeMode && i.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: T });
    return;
  }
  const o = T >= -t.maxTranslate() && !t.params.loop;
  let l = 0, g = t.slidesSizesGrid[0];
  for (let v = 0; v < r.length; v += v < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
    const b = v < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    typeof r[v + b] < "u" ? (o || T >= r[v] && T < r[v + b]) && (l = v, g = r[v + b] - r[v]) : (o || T >= r[v]) && (l = v, g = r[r.length - 1] - r[r.length - 2]);
  }
  let E = null, S = null;
  i.rewind && (t.isBeginning ? S = i.virtual?.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (E = 0));
  const h = (T - r[l]) / g, m = l < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
  if (f > i.longSwipesMs) {
    if (!i.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" && (h >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? E : l + m) : t.slideTo(l)), t.swipeDirection === "prev" && (h > 1 - i.longSwipesRatio ? t.slideTo(l + m) : S !== null && h < 0 && Math.abs(h) > i.longSwipesRatio ? t.slideTo(S) : t.slideTo(l));
  } else {
    if (!i.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation && (a.target === t.navigation.nextEl || a.target === t.navigation.prevEl) ? a.target === t.navigation.nextEl ? t.slideTo(l + m) : t.slideTo(l) : (t.swipeDirection === "next" && t.slideTo(E !== null ? E : l + m), t.swipeDirection === "prev" && t.slideTo(S !== null ? S : l));
  }
}
function us(e) {
  const t = this;
  if (t.destroyed)
    return;
  const s = t.touchEventsData, { params: a, touches: n, rtlTranslate: i, enabled: u } = t;
  if (!u || !a.simulateTouch && e.pointerType === "mouse")
    return;
  const c = e, r = c.originalEvent ?? c;
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
  for (const L of s.startEventPath ?? []) {
    if (L === t.el)
      break;
    const A = L.swiper;
    A && A !== t && !A.destroyed && A.params.nested && A.touchEventsData.isTouched && A.onTouchMove(e);
  }
  const d = p.pageX, f = p.pageY;
  if (r.preventedByNestedSwiper) {
    n.startX = d, n.startY = f;
    return;
  }
  if (!t.allowTouchMove) {
    r.target.matches(s.focusableElements) || (t.allowClick = !1), s.isTouched && (Object.assign(n, {
      startX: d,
      startY: f,
      currentX: d,
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
      if (i && (d > n.startX && -t.translate <= t.maxTranslate() || d < n.startX && -t.translate >= t.minTranslate()))
        return;
      if (!i && (d < n.startX && t.translate <= t.maxTranslate() || d > n.startX && t.translate >= t.minTranslate()))
        return;
    }
  if (document.activeElement && document.activeElement.matches(s.focusableElements) && document.activeElement !== r.target && r.pointerType !== "mouse" && document.activeElement.blur(), document.activeElement && r.target === document.activeElement && r.target.matches(s.focusableElements)) {
    s.isMoved = !0, t.allowClick = !1;
    return;
  }
  s.allowTouchCallbacks && t.emit("touchMove", r), n.previousX = n.currentX, n.previousY = n.currentY, n.currentX = d, n.currentY = f;
  const T = n.currentX - n.startX, o = n.currentY - n.startY;
  if (t.params.threshold && Math.sqrt(T ** 2 + o ** 2) < t.params.threshold)
    return;
  if (typeof s.isScrolling > "u") {
    let L;
    t.isHorizontal() && n.currentY === n.startY || t.isVertical() && n.currentX === n.startX ? s.isScrolling = !1 : T * T + o * o >= 25 && (L = Math.atan2(Math.abs(o), Math.abs(T)) * 180 / Math.PI, s.isScrolling = t.isHorizontal() ? L > a.touchAngle : 90 - L > a.touchAngle);
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
  const E = t.touchesDirection;
  t.swipeDirection = l > 0 ? "prev" : "next", t.touchesDirection = g > 0 ? "prev" : "next";
  const S = t.params.loop && !a.cssMode, h = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
  if (!s.isMoved) {
    if (S && h && t.loopFix({ direction: t.swipeDirection }), s.startTranslate = t.getTranslate(), t.setTransition(0), t.animating) {
      const L = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: {
          bySwiperTouchMove: !0
        }
      });
      t.wrapperEl.dispatchEvent(L);
    }
    s.allowMomentumBounce = !1, a.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0), t.emit("sliderFirstMove", r);
  }
  if ((/* @__PURE__ */ new Date()).getTime(), a._loopSwapReset !== !1 && s.isMoved && s.allowThresholdMove && E !== t.touchesDirection && S && h && Math.abs(l) >= 1) {
    Object.assign(n, {
      startX: d,
      startY: f,
      currentX: d,
      currentY: f,
      startTranslate: s.currentTranslate
    }), s.loopSwapReset = !0, s.startTranslate = s.currentTranslate;
    return;
  }
  t.emit("sliderMove", r), s.isMoved = !0;
  const m = s.startTranslate ?? 0;
  s.currentTranslate = l + m;
  let v = !0, b = a.resistanceRatio;
  if (a.touchReleaseOnEdges && (b = 0), l > 0 ? (S && h && s.allowThresholdMove && s.currentTranslate > (a.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] - (a.slidesPerView !== "auto" && t.slides.length - a.slidesPerView >= 2 ? t.slidesSizesGrid[t.activeIndex + 1] + t.params.spaceBetween : 0) - t.params.spaceBetween : t.minTranslate()) && t.loopFix({ direction: "prev", setTranslate: !0, activeSlideIndex: 0 }), s.currentTranslate > t.minTranslate() && (v = !1, a.resistance && (s.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + m + l) ** b))) : l < 0 && (S && h && s.allowThresholdMove && s.currentTranslate < (a.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween + (a.slidesPerView !== "auto" && t.slides.length - a.slidesPerView >= 2 ? t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween : 0) : t.maxTranslate()) && t.loopFix({
    direction: "next",
    setTranslate: !0,
    activeSlideIndex: t.slides.length - (a.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(String(a.slidesPerView))))
  }), s.currentTranslate < t.maxTranslate() && (v = !1, a.resistance && (s.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - m - l) ** b))), v && (r.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === "next" && (s.currentTranslate ?? 0) < m && (s.currentTranslate = m), !t.allowSlidePrev && t.swipeDirection === "prev" && (s.currentTranslate ?? 0) > m && (s.currentTranslate = m), !t.allowSlidePrev && !t.allowSlideNext && (s.currentTranslate = m), a.threshold > 0)
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
function ps(e, t) {
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
function lt(e, t, s) {
  const { params: a } = e, n = a.edgeSwipeDetection, i = a.edgeSwipeThreshold;
  return n && (s <= i || s >= window.innerWidth - i) ? n === "prevent" ? (t.preventDefault(), !0) : !1 : !0;
}
function ms(e) {
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
    lt(t, s, s.targetTouches[0].pageX);
    return;
  }
  const { params: n, touches: i, enabled: u } = t;
  if (!u || !n.simulateTouch && s.pointerType === "mouse" || t.animating && n.preventInteractionOnTransition)
    return;
  !t.animating && n.cssMode && n.loop && t.loopFix();
  let c = s.target;
  if (n.touchEventsTarget === "wrapper" && !Ft(c, t.wrapperEl))
    return;
  const r = s;
  if (typeof r.which == "number" && r.which === 3 || typeof r.button == "number" && r.button > 0 || a.isTouched && a.isMoved)
    return;
  const p = !!n.noSwipingClass && n.noSwipingClass !== "", d = s.composedPath ? s.composedPath() : s.path;
  p && s.target && s.target.shadowRoot && d && (c = d[0]);
  const f = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`, T = !!(s.target && s.target.shadowRoot);
  if (n.noSwiping && (T ? ps(f, c) : c.closest(f))) {
    t.allowClick = !0;
    return;
  }
  if (n.swipeHandler && typeof n.swipeHandler == "string" && !c.closest(n.swipeHandler))
    return;
  const o = s;
  i.currentX = o.pageX, i.currentY = o.pageY;
  const l = i.currentX, g = i.currentY;
  if (!lt(t, s, l))
    return;
  Object.assign(a, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), i.startX = l, i.startY = g, a.touchStartTime = ae(), a.startEventPath = d, t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (a.allowThresholdMove = !1);
  let E = !0;
  c.matches(a.focusableElements) && (E = !1, c.nodeName === "SELECT" && (a.isTouched = !1)), document.activeElement && document.activeElement.matches(a.focusableElements) && document.activeElement !== c && (o.pointerType === "mouse" || o.pointerType !== "mouse" && !c.matches(a.focusableElements)) && document.activeElement.blur();
  const S = E && t.allowTouchMove && n.touchStartPreventDefault;
  (n.touchStartForcePreventDefault || S) && !c.isContentEditable && s.preventDefault(), n.freeMode && n.freeMode.enabled && t.freeMode && t.animating && !n.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", s);
}
const xt = (e, t) => {
  const { params: s, el: a, wrapperEl: n, device: i } = e, u = !!s.nested, c = t === "on" ? "addEventListener" : "removeEventListener", r = t;
  if (!a || typeof a == "string")
    return;
  document[c]("touchstart", e.onDocumentTouchStart, {
    passive: !1,
    capture: u
  }), a[c]("touchstart", e.onTouchStart, { passive: !1 }), a[c]("pointerdown", e.onTouchStart, { passive: !1 }), document[c]("touchmove", e.onTouchMove, {
    passive: !1,
    capture: u
  }), document[c]("pointermove", e.onTouchMove, {
    passive: !1,
    capture: u
  }), document[c]("touchend", e.onTouchEnd, { passive: !0 }), document[c]("pointerup", e.onTouchEnd, { passive: !0 }), document[c]("pointercancel", e.onTouchEnd, { passive: !0 }), document[c]("touchcancel", e.onTouchEnd, { passive: !0 }), document[c]("pointerout", e.onTouchEnd, { passive: !0 }), document[c]("pointerleave", e.onTouchEnd, { passive: !0 }), document[c]("contextmenu", e.onTouchEnd, { passive: !0 }), (s.preventClicks || s.preventClicksPropagation) && a[c]("click", e.onClick, !0), s.cssMode && n[c]("scroll", e.onScroll);
  const p = (d) => {
    e[r](d, os, !0);
  };
  s.updateOnWindowResize ? p(i.ios || i.android ? "resize orientationchange observerUpdate" : "resize observerUpdate") : p("observerUpdate"), s.lazyPreload && (a[c]("load", e.onLoad, { capture: !0 }), a[c]("error", e.onLoad, { capture: !0 }));
};
function hs() {
  const e = this, { params: t } = e;
  e.onTouchStart = ms.bind(e), e.onTouchMove = us.bind(e), e.onTouchEnd = fs.bind(e), e.onDocumentTouchStart = ls.bind(e), t.cssMode && (e.onScroll = cs.bind(e)), e.onClick = is.bind(e), e.onLoad = rs.bind(e), xt(e, "on");
}
function gs() {
  xt(this, "off");
}
var Ts = {
  attachEvents: hs,
  detachEvents: gs
};
function vs(e) {
  const t = this;
  if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
    return;
  const s = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
    t.__preventObserver__ = !1;
  });
}
function Es() {
  const e = this;
  e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = !1;
  }));
}
var Ss = {
  setGrabCursor: vs,
  unsetGrabCursor: Es
};
function bs(e, t) {
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
  }, c = s.grid && a.grid && a.grid.rows > 1;
  a.loopAddBlankSlides && (a.slidesPerGroup > 1 || c) && u();
  const r = a.slidesPerGroup * (c ? a.grid.rows : 1), p = s.slides.length % r !== 0, d = c && s.slides.length % a.grid.rows !== 0, f = (o) => {
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
  } else if (d) {
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
function ys() {
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
function As(e = {}) {
  const { slideRealIndex: t, slideTo: s = !0, direction: a, setTranslate: n, activeSlideIndex: i, initial: u, byController: c, byMousewheel: r } = e;
  let p = i;
  const d = this;
  if (!d.params.loop || d.params.watchOverflow && d.isLocked)
    return;
  d.emit("beforeLoopFix"), d.__loopFixInProgress__ = !0;
  const { slides: f, allowSlidePrev: T, allowSlideNext: o, slidesEl: l, params: g } = d, { centeredSlides: E, slidesOffsetBefore: S, slidesOffsetAfter: h, initialSlide: m } = g, v = E || !!S || !!h;
  if (d.allowSlidePrev = !0, d.allowSlideNext = !0, d.virtual && g.virtual?.enabled) {
    if (s) {
      const R = d.virtual.slides.length, D = d.virtual.slidesBefore ?? 0;
      !v && d.snapIndex === 0 ? d.slideTo(R, 0, !1, !0) : v && d.snapIndex < g.slidesPerView ? d.slideTo(R + d.snapIndex, 0, !1, !0) : d.snapIndex === d.snapGrid.length - 1 && d.slideTo(D, 0, !1, !0);
    }
    d.allowSlidePrev = T, d.allowSlideNext = o, d.__loopFixInProgress__ = !1, d.emit("loopFix");
    return;
  }
  let b = g.slidesPerView;
  b === "auto" ? b = d.slidesPerViewDynamic() : (b = Math.ceil(parseFloat(String(g.slidesPerView))), v && b % 2 === 0 && (b = b + 1));
  const L = g.slidesPerGroupAuto ? b : g.slidesPerGroup, A = (R) => (typeof R == "function" ? R.call(d) : R) || 0, w = d.slidesGrid.length > 1 ? (d.slidesGrid[d.slidesGrid.length - 1] - d.slidesGrid[0]) / (d.slidesGrid.length - 1) : d.size, C = w > 0 ? A(S) / w : 0, k = w > 0 ? A(h) / w : 0;
  let _ = v ? Math.max(L, (E ? Math.ceil(b / 2) : 0) + Math.ceil(Math.max(C, k))) : L;
  _ % L !== 0 && (_ += L - _ % L), _ += g.loopAdditionalSlides, d.loopedSlides = _;
  const y = d.grid && g.grid && g.grid.rows > 1;
  f.length < b + _ || d.params.effect === "cards" && f.length < b + _ * 2 ? Ne("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : y && g.grid.fill === "row" && Ne("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  const M = [], x = [], I = y ? Math.ceil(f.length / g.grid.rows) : f.length;
  _ > (I - b) / 2 && (_ = Math.max(L, Math.floor((I - b - 1) / 2 / L) * L), d.loopedSlides = _);
  const $ = u && I - m < b && !v;
  let F = $ ? m : d.activeIndex;
  typeof p > "u" ? p = d.getSlideIndex(f.find((R) => R.classList.contains(g.slideActiveClass))) : F = p;
  const j = a === "next" || !a, P = a === "prev" || !a;
  let z = 0, G = 0;
  const q = (y ? f[p].column ?? 0 : p) + (v && typeof n > "u" ? (E ? -b / 2 + 0.5 : 0) - C : 0);
  if (q < _) {
    z = Math.max(_ - q, L);
    for (let R = 0; R < z; R += 1) {
      const D = R - Math.floor(R / I) * I;
      if (y) {
        const B = I - D - 1;
        for (let K = f.length - 1; K >= 0; K -= 1)
          f[K].column === B && M.push(K);
      } else
        M.push(I - D - 1);
    }
  } else if (q + b > I - _) {
    G = Math.max(q - (I - _ * 2), L), $ && (G = Math.max(G, b - I + m + 1)), G = Math.max(G, Math.ceil(q + b - I));
    for (let R = 0; R < G; R += 1) {
      const D = R - Math.floor(R / I) * I;
      y ? f.forEach((B, K) => {
        B.column === D && x.push(K);
      }) : x.push(D);
    }
  }
  if (d.__preventObserver__ = !0, requestAnimationFrame(() => {
    d.__preventObserver__ = !1;
  }), d.params.effect === "cards" && f.length < b + _ * 2 && (x.includes(p) && x.splice(x.indexOf(p), 1), M.includes(p) && M.splice(M.indexOf(p), 1)), P && M.forEach((R) => {
    const D = f[R];
    D.swiperLoopMoveDOM = !0, l.prepend(D), D.swiperLoopMoveDOM = !1;
  }), j && x.forEach((R) => {
    const D = f[R];
    D.swiperLoopMoveDOM = !0, l.append(D), D.swiperLoopMoveDOM = !1;
  }), d.recalcSlides(), g.slidesPerView === "auto" ? d.updateSlides() : y && (M.length > 0 && P || x.length > 0 && j) && d.slides.forEach((R, D) => {
    d.grid.updateSlide(D, R, d.slides);
  }), g.watchSlidesProgress && d.updateSlidesOffset(), s) {
    if (M.length > 0 && P) {
      if (typeof t > "u") {
        const R = d.slidesGrid[F], B = d.slidesGrid[F + z] - R;
        r ? d.setTranslate(d.translate - B) : (d.slideTo(F + Math.ceil(z), 0, !1, !0), n && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - B, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - B));
      } else if (n) {
        const R = y ? M.length / g.grid.rows : M.length;
        d.slideTo(d.activeIndex + R, 0, !1, !0), d.touchEventsData.currentTranslate = d.translate;
      }
    } else if (x.length > 0 && j)
      if (typeof t > "u") {
        const R = d.slidesGrid[F], B = d.slidesGrid[F - G] - R;
        r ? d.setTranslate(d.translate - B) : (d.slideTo(F - G, 0, !1, !0), n && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - B, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - B));
      } else {
        const R = y ? x.length / g.grid.rows : x.length;
        d.slideTo(d.activeIndex - R, 0, !1, !0);
      }
  }
  d.allowSlidePrev = T, d.allowSlideNext = o;
  const O = d.controller?.control;
  if (O && !c) {
    const R = {
      slideRealIndex: t,
      direction: a,
      setTranslate: n,
      activeSlideIndex: p,
      byController: !0
    };
    Array.isArray(O) ? O.forEach((D) => {
      !D.destroyed && D.params.loop && D.loopFix({
        ...R,
        slideTo: D.params.slidesPerView === g.slidesPerView ? s : !1
      });
    }) : O instanceof d.constructor && O.params.loop && O.loopFix({
      ...R,
      slideTo: O.params.slidesPerView === g.slidesPerView ? s : !1
    });
  }
  d.__loopFixInProgress__ = !1, d.emit("loopFix");
}
var _s = {
  loopCreate: bs,
  loopFix: As,
  loopDestroy: ys
};
function xs(e, t) {
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
const Cs = ({ swiper: e, extendParams: t, on: s }) => {
  const a = [], n = (c, r = {}) => {
    const p = window.MutationObserver || window.WebkitMutationObserver;
    if (!p)
      return;
    const d = new p((f) => {
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
    d.observe(c, {
      attributes: typeof r.attributes > "u" ? !0 : r.attributes,
      childList: e.isElement || (typeof r.childList > "u" ? !0 : r.childList),
      characterData: typeof r.characterData > "u" ? !0 : r.characterData
    }), a.push(d);
  }, i = () => {
    if (e.params.observer) {
      if (e.params.observeParents) {
        const c = me(e.hostEl);
        for (let r = 0; r < c.length; r += 1)
          n(c[r]);
      }
      n(e.hostEl, {
        childList: e.params.observeSlideChildren
      }), n(e.wrapperEl, { attributes: !1 });
    }
  }, u = () => {
    a.forEach((c) => {
      c.disconnect();
    }), a.splice(0, a.length);
  };
  t({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), s("init", i), s("destroy", u);
}, Ls = ({ swiper: e, on: t, emit: s }) => {
  let a = null, n = null;
  const i = () => {
    !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"));
  }, u = () => {
    if (!e || e.destroyed || !e.initialized)
      return;
    let p = e.width, d = e.height;
    a = new ResizeObserver((f) => {
      n = window.requestAnimationFrame(() => {
        let T = p, o = d;
        f.forEach(({ contentBoxSize: l, contentRect: g, target: E }) => {
          if (E && E !== e.el)
            return;
          const S = Array.isArray(l) ? l[0] : l;
          T = g ? g.width : S.inlineSize, o = g ? g.height : S.blockSize;
        }), (T !== p || o !== d) && (p = T, d = o, i());
      });
    }), a.observe(e.el);
  }, c = () => {
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
    c(), window.removeEventListener("resize", i), window.removeEventListener("orientationchange", r);
  });
};
function Ms(e, t = !0, s) {
  const a = this, { enabled: n, params: i, animating: u } = a;
  if (!n || a.destroyed)
    return a;
  typeof e > "u" && (e = a.params.speed);
  let c = i.slidesPerGroup;
  i.slidesPerView === "auto" && i.slidesPerGroup === 1 && i.slidesPerGroupAuto && (c = Math.max(a.slidesPerViewDynamic("current", !0), 1));
  const r = a.activeIndex < i.slidesPerGroupSkip ? 1 : c, p = a.virtual && i.virtual?.enabled;
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
function Is(e, t = !0, s) {
  const a = this, { params: n, snapGrid: i, slidesGrid: u, rtlTranslate: c, enabled: r, animating: p } = a;
  if (!r || a.destroyed)
    return a;
  typeof e > "u" && (e = a.params.speed);
  const d = a.virtual && n.virtual?.enabled;
  if (n.loop) {
    if (p && !d && n.loopPreventsSliding)
      return !1;
    a.loopFix({ direction: "prev" }), a._clientLeft = a.wrapperEl.clientLeft;
  }
  const f = c ? a.translate : -a.translate;
  function T(h) {
    return h < 0 ? -Math.floor(Math.abs(h)) : Math.floor(h);
  }
  const o = T(f), l = i.map((h) => T(h)), g = n.freeMode && n.freeMode.enabled;
  let E = i[l.indexOf(o) - 1];
  if (typeof E > "u" && (n.cssMode || g)) {
    let h;
    i.forEach((m, v) => {
      o >= m && (h = v);
    }), typeof h < "u" && (E = g ? i[h] : i[h > 0 ? h - 1 : h]);
  }
  let S = 0;
  if (typeof E < "u" && (S = u.indexOf(E), S < 0 && (S = a.activeIndex - 1), n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto)) {
    const h = a.slidesPerViewDynamic("previous", !0) - 1;
    S = Math.max(a.activeIndex - Math.max(h, 1), 0);
  }
  if (n.rewind && a.isBeginning) {
    const h = a.params.virtual?.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
    return a.slideTo(h, e, t, s);
  } else if (n.loop && a.activeIndex === 0 && n.cssMode)
    return requestAnimationFrame(() => {
      a.slideTo(S, e, t, s);
    }), !0;
  return a.slideTo(S, e, t, s);
}
function Ps(e, t = !0, s) {
  const a = this;
  if (!a.destroyed)
    return typeof e > "u" && (e = a.params.speed), a.slideTo(a.activeIndex, e, t, s);
}
function Rs(e = 0, t, s = !0, a, n) {
  typeof e == "string" && (e = parseInt(e, 10));
  const i = this;
  let u = e;
  u < 0 && (u = 0);
  const { params: c, snapGrid: r, slidesGrid: p, previousIndex: d, activeIndex: f, rtlTranslate: T, wrapperEl: o, enabled: l } = i;
  if (!l && !a && !n || i.destroyed || i.animating && c.preventInteractionOnTransition)
    return !1;
  typeof t > "u" && (t = i.params.speed);
  const g = Math.min(i.params.slidesPerGroupSkip, u);
  let E = g + Math.floor((u - g) / i.params.slidesPerGroup);
  E >= r.length && (E = r.length - 1);
  const S = -r[E];
  if (c.normalizeSlideIndex)
    for (let A = 0; A < p.length; A += 1) {
      const w = -Math.floor(S * 100), C = Math.floor(p[A] * 100), k = Math.floor(p[A + 1] * 100);
      typeof p[A + 1] < "u" ? w >= C && w < k - (k - C) / 2 ? u = A : w >= C && w < k && (u = A + 1) : w >= C && (u = A);
    }
  if (i.initialized && u !== f && (!i.allowSlideNext && (T ? S > i.translate && S > i.minTranslate() : S < i.translate && S < i.minTranslate()) || !i.allowSlidePrev && S > i.translate && S > i.maxTranslate() && (f || 0) !== u))
    return !1;
  u !== (d || 0) && s && i.emit("beforeSlideChangeStart"), i.updateProgress(S);
  let h;
  u > f ? h = "next" : u < f ? h = "prev" : h = "reset";
  const m = i.virtual && i.params.virtual?.enabled;
  if (!(m && n) && (T && -S === i.translate || !T && S === i.translate))
    return i.updateActiveIndex(u), c.autoHeight && i.updateAutoHeight(), i.updateSlidesClasses(), c.effect !== "slide" && i.setTranslate(S), h !== "reset" && (i.transitionStart(s, h), i.transitionEnd(s, h)), !1;
  if (c.cssMode) {
    _t(i) && i.updateActiveIndex(u);
    const A = i.isHorizontal(), w = T ? S : -S;
    return t === 0 ? (m && (i.wrapperEl.style.scrollSnapType = "none", i._immediateVirtual = !0), m && !i._cssModeVirtualInitialSet && (i.params.initialSlide ?? 0) > 0 ? (i._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
      o[A ? "scrollLeft" : "scrollTop"] = w;
    })) : o[A ? "scrollLeft" : "scrollTop"] = w, m && requestAnimationFrame(() => {
      i.wrapperEl.style.scrollSnapType = "", i._immediateVirtual = !1;
    })) : o.scrollTo({
      [A ? "left" : "top"]: w,
      behavior: "smooth"
    }), !0;
  }
  const L = St().isSafari;
  return m && !n && L && i.isElement && i.virtual.update(!1, !1, u), i.setTransition(t), i.setTranslate(S), i.updateActiveIndex(u), i.updateSlidesClasses(), i.emit("beforeTransitionStart", t, a), i.transitionStart(s, h), t === 0 ? i.transitionEnd(s, h) : i.animating || (i.animating = !0, i.onSlideToWrapperTransitionEnd || (i.onSlideToWrapperTransitionEnd = function(w) {
    !i || i.destroyed || w.target === this && (i.wrapperEl.removeEventListener("transitionend", i.onSlideToWrapperTransitionEnd), i.onSlideToWrapperTransitionEnd = null, delete i.onSlideToWrapperTransitionEnd, i.transitionEnd(s, h));
  }), i.wrapperEl.addEventListener("transitionend", i.onSlideToWrapperTransitionEnd)), !0;
}
function ws() {
  const e = this;
  if (e.destroyed)
    return;
  const { params: t, slidesEl: s, clickedSlide: a, clickedIndex: n } = e;
  if (a === void 0 || n === void 0)
    return;
  const i = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let u = e.getSlideIndexWhenGrid(n), c;
  const r = e.isElement ? "swiper-slide" : `.${t.slideClass}`, p = e.grid && e.params.grid && e.params.grid.rows > 1;
  if (t.loop) {
    if (e.animating)
      return;
    c = parseInt(a.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? e.slideToLoop(c) : u > (p ? (e.slides.length - i) / 2 - (e.params.grid.rows - 1) : e.slides.length - i) ? (e.loopFix(), u = e.getSlideIndex(Q(s, `${r}[data-swiper-slide-index="${c}"]`)[0]), Se(() => {
      e.slideTo(u);
    })) : e.slideTo(u);
  } else
    e.slideTo(u);
}
function Os(e, t = !0, s, a = 0.5) {
  const n = this;
  if (n.destroyed)
    return;
  typeof e > "u" && (e = n.params.speed);
  let i = n.activeIndex;
  const u = Math.min(n.params.slidesPerGroupSkip, i), c = u + Math.floor((i - u) / n.params.slidesPerGroup), r = n.rtlTranslate ? n.translate : -n.translate;
  if (r >= n.snapGrid[c]) {
    const p = n.snapGrid[c], d = n.snapGrid[c + 1];
    r - p > (d - p) * a && (i += n.params.slidesPerGroup);
  } else {
    const p = n.snapGrid[c - 1], d = n.snapGrid[c];
    r - p <= (d - p) * a && (i -= n.params.slidesPerGroup);
  }
  return i = Math.max(i, 0), i = Math.min(i, n.slidesGrid.length - 1), n.slideTo(i, e, t, s);
}
function Ds(e = 0, t, s = !0, a) {
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
      let c;
      if (i) {
        const g = u * n.params.grid.rows;
        c = n.slides.find((S) => Number(S.getAttribute("data-swiper-slide-index")) === g)?.column ?? 0;
      } else
        c = n.getSlideIndexByData(u);
      const r = i ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length, { centeredSlides: p, slidesOffsetBefore: d, slidesOffsetAfter: f } = n.params, T = p || !!d || !!f;
      let o;
      n.params.slidesPerView === "auto" ? o = n.slidesPerViewDynamic() : (o = Math.ceil(parseFloat(String(n.params.slidesPerView))), T && o % 2 === 0 && (o = o + 1));
      let l = r - c < o;
      if (p) {
        const g = Math.floor(o / 2);
        l = c < g || r - 1 - c < g;
      } else T && (l = l || c < Math.ceil(o / 2));
      if (a && T && n.params.slidesPerView !== "auto" && !i && (l = !1), l) {
        const g = T ? c < n.activeIndex ? "prev" : "next" : c - n.activeIndex - 1 < n.params.slidesPerView ? "next" : "prev";
        n.loopFix({
          direction: g,
          slideTo: !0,
          activeSlideIndex: g === "next" ? c + 1 : c - r + 1,
          slideRealIndex: g === "next" ? n.realIndex : void 0
        });
      }
      if (i) {
        const g = u * n.params.grid.rows;
        u = n.slides.find((S) => Number(S.getAttribute("data-swiper-slide-index")) === g)?.column ?? 0;
      } else
        u = n.getSlideIndexByData(u);
    }
  return requestAnimationFrame(() => {
    n.slideTo(u, t, s, a);
  }), n;
}
var Ns = {
  slideTo: Rs,
  slideToLoop: Ds,
  slideNext: Ms,
  slidePrev: Is,
  slideReset: Ps,
  slideToClosest: Os,
  slideToClickedSlide: ws
};
function zs(e, t) {
  const s = this;
  s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`, s.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : ""), s.emit("setTransition", e, t);
}
function Ct({ swiper: e, runCallbacks: t, direction: s, step: a }) {
  const { activeIndex: n, previousIndex: i } = e;
  let u = s;
  u || (n > i ? u = "next" : n < i ? u = "prev" : u = "reset"), e.emit(`transition${a}`), t && u === "reset" ? e.emit(`slideResetTransition${a}`) : t && n !== i && (e.emit(`slideChangeTransition${a}`), u === "next" ? e.emit(`slideNextTransition${a}`) : e.emit(`slidePrevTransition${a}`));
}
function ks(e = !0, t) {
  const s = this, { params: a } = s;
  s.animating = !1, !a.cssMode && (s.setTransition(0), Ct({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
}
function $s(e = !0, t) {
  const s = this, { params: a } = s;
  a.cssMode || (a.autoHeight && s.updateAutoHeight(), Ct({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
}
var Gs = {
  setTransition: zs,
  transitionStart: $s,
  transitionEnd: ks
};
function Bs(e = this.isHorizontal() ? "x" : "y") {
  const t = this, { params: s, rtlTranslate: a, translate: n, wrapperEl: i } = t;
  if (s.virtualTranslate)
    return a ? -n : n;
  if (s.cssMode)
    return n;
  let u = Ke(i, e);
  return u += t.cssOverflowAdjustment(), a && (u = -u), u || 0;
}
function Hs() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Vs() {
  return -this.snapGrid[0];
}
function Fs(e, t) {
  const s = this, { rtlTranslate: a, params: n, wrapperEl: i, progress: u } = s;
  let c = 0, r = 0;
  const p = 0;
  s.isHorizontal() ? c = a ? -e : e : r = e, n.roundLengths && (c = Math.floor(c), r = Math.floor(r)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? c : r, n.cssMode ? i[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -c : -r : n.virtualTranslate || (s.isHorizontal() ? c -= s.cssOverflowAdjustment() : r -= s.cssOverflowAdjustment(), i.style.transform = `translate3d(${c}px, ${r}px, ${p}px)`);
  let d;
  const f = s.maxTranslate() - s.minTranslate();
  f === 0 ? d = 0 : d = (e - s.minTranslate()) / f, d !== u && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
}
function Ys(e = 0, t = this.params.speed, s = !0, a = !0, n) {
  const i = this, { params: u, wrapperEl: c } = i;
  if (i.animating && u.preventInteractionOnTransition)
    return !1;
  const r = i.minTranslate(), p = i.maxTranslate();
  let d;
  if (a && e > r ? d = r : a && e < p ? d = p : d = e, i.updateProgress(d), u.cssMode) {
    const f = i.isHorizontal();
    return t === 0 ? c[f ? "scrollLeft" : "scrollTop"] = -d : c.scrollTo({
      [f ? "left" : "top"]: -d,
      behavior: "smooth"
    }), !0;
  }
  return t === 0 ? (i.setTransition(0), i.setTranslate(d), s && (i.emit("beforeTransitionStart", t, n), i.emit("transitionEnd"))) : (i.setTransition(t), i.setTranslate(d), s && (i.emit("beforeTransitionStart", t, n), i.emit("transitionStart")), i.animating || (i.animating = !0, i.onTranslateToWrapperTransitionEnd || (i.onTranslateToWrapperTransitionEnd = function(T) {
    !i || i.destroyed || T.target === this && (i.wrapperEl.removeEventListener("transitionend", i.onTranslateToWrapperTransitionEnd), i.onTranslateToWrapperTransitionEnd = null, delete i.onTranslateToWrapperTransitionEnd, i.animating = !1, s && i.emit("transitionEnd"));
  }), i.wrapperEl.addEventListener("transitionend", i.onTranslateToWrapperTransitionEnd))), !0;
}
var Ws = {
  getTranslate: Bs,
  setTranslate: Fs,
  minTranslate: Vs,
  maxTranslate: Hs,
  translateTo: Ys
};
function Xs(e) {
  const { slidesGrid: t, params: s } = e, a = e.rtlTranslate ? e.translate : -e.translate;
  let n;
  for (let i = 0; i < t.length; i += 1)
    typeof t[i + 1] < "u" ? a >= t[i] && a < t[i + 1] - (t[i + 1] - t[i]) / 2 ? n = i : a >= t[i] && a < t[i + 1] && (n = i + 1) : a >= t[i] && (n = i);
  return s.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0), n;
}
function Us(e) {
  const t = this, s = t.rtlTranslate ? t.translate : -t.translate, { snapGrid: a, params: n, activeIndex: i, realIndex: u, snapIndex: c } = t;
  let r = e, p;
  const d = (o) => {
    const l = t.virtual.slides;
    let g = o - (t.virtual.slidesBefore ?? 0);
    return g < 0 && (g = l.length + g), g >= l.length && (g -= l.length), g;
  };
  if (typeof r > "u" && (r = Xs(t)), a.indexOf(s) >= 0)
    p = a.indexOf(s);
  else {
    const o = Math.min(n.slidesPerGroupSkip, r);
    p = o + Math.floor((r - o) / n.slidesPerGroup);
  }
  if (p >= a.length && (p = a.length - 1), r === i && !t.params.loop) {
    p !== c && (t.snapIndex = p, t.emit("snapIndexChange"));
    return;
  }
  if (r === i && t.params.loop && t.virtual && t.params.virtual?.enabled) {
    t.realIndex = d(r);
    return;
  }
  const f = t.grid && n.grid && n.grid.rows > 1;
  let T;
  if (t.virtual && n.virtual?.enabled)
    n.loop ? T = d(r) : T = r;
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
    previousSnapIndex: c,
    snapIndex: p,
    previousRealIndex: u,
    realIndex: T,
    previousIndex: i,
    activeIndex: r
  }), t.initialized && bt(t), !t.__loopFixInProgress__ && (t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && ((t.__lastEmittedRealIndex__ ?? u) !== T && t.emit("realIndexChange"), t.emit("slideChange")), t.__lastEmittedRealIndex__ = T);
}
function qs(e) {
  const t = this, s = [], a = t.virtual && t.params.virtual?.enabled;
  let n = 0, i;
  typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
  const u = (c) => a ? t.slides[t.getSlideIndexByData(c)] : t.slides[c];
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((c) => {
        s.push(c);
      });
    else
      for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
        const c = t.activeIndex + i;
        if (c > t.slides.length && !a)
          break;
        const r = u(c);
        r && s.push(r);
      }
  else {
    const c = u(t.activeIndex);
    c && s.push(c);
  }
  for (i = 0; i < s.length; i += 1)
    if (typeof s[i] < "u") {
      const c = s[i].offsetHeight;
      n = c > n ? c : n;
    }
  (n || n === 0) && (t.wrapperEl.style.height = `${n}px`);
}
function js(e, t) {
  const s = this, a = s.params;
  let n = e.closest(`.${a.slideClass}, swiper-slide`);
  !n && s.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((c) => {
    !n && c.matches && c.matches(`.${a.slideClass}, swiper-slide`) && (n = c);
  });
  let i = !1, u;
  if (n) {
    for (let c = 0; c < s.slides.length; c += 1)
      if (s.slides[c] === n) {
        i = !0, u = c;
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
function Ks(e) {
  const t = this;
  if (typeof e > "u") {
    const d = t.rtlTranslate ? -1 : 1;
    e = t && t.translate && t.translate * d || 0;
  }
  const s = t.params, a = t.maxTranslate() - t.minTranslate();
  let { progress: n, isBeginning: i, isEnd: u } = t, c = t.progressLoop;
  const r = i, p = u;
  if (a === 0)
    n = 0, i = !0, u = !0;
  else {
    n = (e - t.minTranslate()) / a;
    const d = Math.abs(e - t.minTranslate()) < 1, f = Math.abs(e - t.maxTranslate()) < 1;
    i = d || n <= 0, u = f || n >= 1, d && (n = 0), f && (n = 1);
  }
  if (s.loop) {
    const d = t.getSlideIndexByData(0), f = t.getSlideIndexByData(t.slides.length - 1), T = t.slidesGrid[d], o = t.slidesGrid[f], l = t.slidesGrid[t.slidesGrid.length - 1], g = Math.abs(e);
    g >= T ? c = (g - T) / l : c = (g + l - o) / l, c > 1 && (c -= 1);
  }
  Object.assign(t, {
    progress: n,
    progressLoop: c,
    isBeginning: i,
    isEnd: u
  }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), i && !r && t.emit("reachBeginning toEdge"), u && !p && t.emit("reachEnd toEdge"), (r && !i || p && !u) && t.emit("fromEdge"), t.emit("progress", n);
}
function Zs() {
  const e = this;
  function t(_, y) {
    return parseFloat(_.getPropertyValue(e.getDirectionLabel(y)) || "0");
  }
  const s = e.params, { wrapperEl: a, slidesEl: n, rtlTranslate: i, wrongRTL: u } = e, c = !!(e.virtual && s.virtual?.enabled), r = c ? e.virtual.slides.length : e.slides.length, p = Q(n, `.${e.params.slideClass}, swiper-slide`), d = c ? e.virtual.slides.length : p.length;
  let f = [];
  const T = [], o = [], l = (_) => typeof _ == "function" ? _.call(e) : _, g = l(s.slidesOffsetBefore), E = l(s.slidesOffsetAfter), S = e.snapGrid.length, h = e.slidesGrid.length, m = e.size - g - E;
  let v = s.spaceBetween, b = -g, L = 0, A = 0;
  if (typeof m > "u")
    return;
  typeof v == "string" && v.indexOf("%") >= 0 ? v = parseFloat(v.replace("%", "")) / 100 * m : typeof v == "string" && (v = parseFloat(v)), e.virtualSize = -v - g - E, p.forEach((_) => {
    i ? _.style.marginLeft = "" : _.style.marginRight = "", _.style.marginBottom = "", _.style.marginTop = "";
  }), s.centeredSlides && s.cssMode && (pe(a, "--swiper-centered-offset-before", ""), pe(a, "--swiper-centered-offset-after", "")), s.cssMode && (pe(a, "--swiper-slides-offset-before", `${g}px`), pe(a, "--swiper-slides-offset-after", `${E}px`));
  const w = s.grid && s.grid.rows > 1 && e.grid;
  w ? e.grid.initSlides(p) : e.grid && e.grid.unsetSlides();
  let C = 0;
  const k = s.slidesPerView === "auto" && s.breakpoints && Object.keys(s.breakpoints).filter((_) => typeof s.breakpoints[_]?.slidesPerView < "u").length > 0;
  for (let _ = 0; _ < d; _ += 1) {
    C = 0;
    const y = p[_];
    if (!(y && (w && e.grid.updateSlide(_, y, p), ue(y, "display") === "none"))) {
      if (c && s.slidesPerView === "auto")
        s.virtual?.slidesPerViewAutoSlideSize && (C = s.virtual.slidesPerViewAutoSlideSize), C && y && (s.roundLengths && (C = Math.floor(C)), y.style[e.getDirectionLabel("width")] = `${C}px`);
      else if (s.slidesPerView === "auto") {
        k && (y.style[e.getDirectionLabel("width")] = "");
        const M = getComputedStyle(y), x = y.style.transform, I = y.style.webkitTransform;
        if (x && (y.style.transform = "none"), I && (y.style.webkitTransform = "none"), s.roundLengths)
          C = e.isHorizontal() ? Ze(y, "width") : Ze(y, "height");
        else {
          const $ = t(M, "width"), F = t(M, "padding-left"), j = t(M, "padding-right"), P = t(M, "margin-left"), z = t(M, "margin-right"), G = M.getPropertyValue("box-sizing");
          if (G && G === "border-box")
            C = $ + P + z;
          else {
            const { clientWidth: V, offsetWidth: q } = y;
            C = $ + F + j + P + z + (q - V);
          }
        }
        x && (y.style.transform = x), I && (y.style.webkitTransform = I), s.roundLengths && (C = Math.floor(C));
      } else
        C = (m - (s.slidesPerView - 1) * v) / s.slidesPerView, s.roundLengths && (C = Math.floor(C)), y && (y.style[e.getDirectionLabel("width")] = `${C}px`);
      y && (y.swiperSlideSize = C), o.push(C), s.centeredSlides ? (b = b + C / 2 + L / 2 + v, L === 0 && _ !== 0 && (b = b - m / 2 - v), _ === 0 && (b = b - m / 2 - v), Math.abs(b) < 1 / 1e3 && (b = 0), s.roundLengths && (b = Math.floor(b)), A % s.slidesPerGroup === 0 && f.push(b), T.push(b)) : (s.roundLengths && (b = Math.floor(b)), (A - Math.min(e.params.slidesPerGroupSkip, A)) % e.params.slidesPerGroup === 0 && f.push(b), T.push(b), b = b + C + v), e.virtualSize += C + v, L = C, A += 1;
    }
  }
  if (e.virtualSize = Math.max(e.virtualSize, m) + E, i && u && (s.effect === "slide" || s.effect === "coverflow") && (a.style.width = `${e.virtualSize + v}px`), s.setWrapperSize && (a.style[e.getDirectionLabel("width")] = `${e.virtualSize + v}px`), w && e.grid.updateWrapperSize(C, f), !s.centeredSlides) {
    const _ = s.slidesPerView !== "auto" && s.slidesPerView % 1 !== 0, y = s.snapToSlideEdge && !s.loop && (s.slidesPerView === "auto" || _);
    let M = f.length;
    if (y) {
      let I;
      if (s.slidesPerView === "auto") {
        I = 1;
        let $ = 0;
        for (let F = o.length - 1; F >= 0 && ($ += o[F] + (F < o.length - 1 ? v : 0), $ <= m); F -= 1)
          I = o.length - F;
      } else
        I = Math.floor(s.slidesPerView);
      M = Math.max(d - I, 0);
    }
    const x = [];
    for (let I = 0; I < f.length; I += 1) {
      let $ = f[I];
      s.roundLengths && ($ = Math.floor($)), y ? I <= M && x.push($) : f[I] <= e.virtualSize - m && x.push($);
    }
    f = x, Math.floor(e.virtualSize - m) - Math.floor(f[f.length - 1]) > 1 && (y || f.push(e.virtualSize - m));
  }
  if (c && s.loop) {
    const _ = o[0] + v, y = e.virtual.slidesBefore ?? 0, M = e.virtual.slidesAfter ?? 0, x = y + M;
    if (s.slidesPerGroup > 1) {
      const I = Math.ceil(x / s.slidesPerGroup), $ = _ * s.slidesPerGroup;
      for (let F = 0; F < I; F += 1)
        f.push(f[f.length - 1] + $);
    }
    for (let I = 0; I < x; I += 1)
      s.slidesPerGroup === 1 && f.push(f[f.length - 1] + _), T.push(T[T.length - 1] + _), e.virtualSize += _;
  }
  if (f.length === 0 && (f = [0]), v !== 0) {
    const _ = e.isHorizontal() && i ? "marginLeft" : e.getDirectionLabel("marginRight");
    p.filter((y, M) => !s.cssMode || s.loop ? !0 : M !== p.length - 1).forEach((y) => {
      y.style[_] = `${v}px`;
    });
  }
  if (s.centeredSlides && s.centeredSlidesBounds) {
    let _ = 0;
    o.forEach((M) => {
      _ += M + (v || 0);
    }), _ -= v;
    const y = _ > m ? _ - m : 0;
    f = f.map((M) => M <= 0 ? -g : M > y ? y + E : M);
  }
  if (s.centerInsufficientSlides) {
    let _ = 0;
    if (o.forEach((y) => {
      _ += y + (v || 0);
    }), _ -= v, _ < m) {
      const y = (m - _) / 2;
      f.forEach((M, x) => {
        f[x] = M - y;
      }), T.forEach((M, x) => {
        T[x] = M + y;
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
    const _ = -e.snapGrid[0], y = -e.slidesGrid[0];
    e.snapGrid = e.snapGrid.map((M) => M + _), e.slidesGrid = e.slidesGrid.map((M) => M + y);
  }
  if (d !== r && e.emit("slidesLengthChange"), f.length !== S && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), T.length !== h && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !c && !s.cssMode && (s.effect === "slide" || s.effect === "fade")) {
    const _ = `${s.containerModifierClass}backface-hidden`, y = e.el.classList.contains(_);
    d <= s.maxBackfaceHiddenSlides ? y || e.el.classList.add(_) : y && e.el.classList.remove(_);
  }
}
const qe = (e, t, s) => {
  t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s);
};
function Qs() {
  const e = this, { slides: t, params: s, slidesEl: a, activeIndex: n } = e, i = !!(e.virtual && s.virtual?.enabled), u = e.grid && s.grid && s.grid.rows > 1, c = (f) => Q(a, `.${s.slideClass}${f}, swiper-slide${f}`)[0];
  let r, p, d;
  if (i)
    if (s.loop) {
      const f = e.virtual.slides;
      let T = n - (e.virtual.slidesBefore ?? 0);
      T < 0 && (T = f.length + T), T >= f.length && (T -= f.length), r = c(`[data-swiper-slide-index="${T}"]`);
    } else
      r = c(`[data-swiper-slide-index="${n}"]`);
  else u ? (r = t.find((f) => f.column === n), d = t.find((f) => f.column === n + 1), p = t.find((f) => f.column === n - 1)) : r = t[n];
  r && (u || (d = Wt(r, `.${s.slideClass}, swiper-slide`)[0], s.loop && !d && (d = t[0]), p = Yt(r, `.${s.slideClass}, swiper-slide`)[0], s.loop && !p === 0 && (p = t[t.length - 1]))), t.forEach((f) => {
    qe(f, f === r, s.slideActiveClass), qe(f, f === d, s.slideNextClass), qe(f, f === p, s.slidePrevClass);
  }), e.emitSlidesClasses();
}
function Js() {
  const e = this, t = e.slides, s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
  for (let a = 0; a < t.length; a += 1)
    t[a].swiperSlideOffset = (e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop) - s - e.cssOverflowAdjustment();
}
const rt = (e, t, s) => {
  t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s);
};
function ea(e = this && this.translate || 0) {
  const t = this, s = t.params, { slides: a, rtlTranslate: n, snapGrid: i } = t;
  if (a.length === 0)
    return;
  typeof a[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let u = -e;
  n && (u = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
  let c = s.spaceBetween;
  typeof c == "string" && c.indexOf("%") >= 0 ? c = parseFloat(c.replace("%", "")) / 100 * t.size : typeof c == "string" && (c = parseFloat(c));
  for (let r = 0; r < a.length; r += 1) {
    const p = a[r];
    let d = p.swiperSlideOffset ?? 0;
    s.cssMode && s.centeredSlides && (d -= a[0].swiperSlideOffset ?? 0);
    const f = p.swiperSlideSize ?? 0, T = (u + (s.centeredSlides ? t.minTranslate() : 0) - d) / (f + c), o = (u - i[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (f + c), l = -(u - d), g = l + t.slidesSizesGrid[r], E = l >= 0 && l <= t.size - t.slidesSizesGrid[r], S = l >= 0 && l < t.size - 1 || g > 1 && g <= t.size || l <= 0 && g >= t.size;
    S && (t.visibleSlides.push(p), t.visibleSlidesIndexes.push(r)), rt(p, S, s.slideVisibleClass), rt(p, E, s.slideFullyVisibleClass), p.progress = n ? -T : T, p.originalProgress = n ? -o : o;
  }
}
var ta = {
  updateSize: ds,
  updateSlides: Zs,
  updateAutoHeight: qs,
  updateSlidesOffset: Js,
  updateSlidesProgress: ea,
  updateProgress: Ks,
  updateSlidesClasses: Qs,
  updateActiveIndex: Us,
  updateClickedSlide: js
};
const sa = {
  eventsEmitter: ns,
  update: ta,
  translate: Ws,
  transition: Gs,
  slide: Ns,
  loop: _s,
  grabCursor: Ss,
  events: Ts,
  breakpoints: Zt,
  checkOverflow: Jt,
  classes: as
}, Je = {};
class te {
  static extendedDefaults;
  static defaults;
  constructor(...t) {
    let s, a;
    if (t.length === 1 && t[0] !== null && typeof t[0] == "object" && Object.prototype.toString.call(t[0]).slice(8, -1) === "Object" ? a = t[0] : [s, a] = t, a || (a = {}), a = se({}, a), s && !a.el && (a.el = s), a.el && typeof a.el == "string" && typeof document < "u" && document.querySelectorAll(a.el).length > 1) {
      const c = [];
      return document.querySelectorAll(a.el).forEach((r) => {
        const p = se({}, a, { el: r });
        c.push(new te(p));
      }), c;
    }
    const n = this;
    n.__swiper__ = !0, n.support = vt(), n.device = Et({ userAgent: a.userAgent ?? void 0 }), n.browser = St(), n.eventsListeners = {}, n.eventsAnyListeners = [], n.modules = [...n.__modules__ || []], a.modules && Array.isArray(a.modules) && a.modules.forEach((c) => {
      const r = c;
      typeof r == "function" && n.modules.indexOf(r) < 0 && n.modules.push(r);
    });
    const i = {};
    n.modules.forEach((c) => {
      c({
        params: a,
        swiper: n,
        extendParams: xs(a, i),
        on: n.on.bind(n),
        once: n.once.bind(n),
        off: n.off.bind(n),
        emit: n.emit.bind(n)
      });
    });
    const u = se({}, yt, i);
    if (n.params = se({}, u, Je, a), n.originalParams = se({}, n.params), n.passedParams = se({}, a), n.params && n.params.on) {
      const c = n.params.on;
      Object.keys(c).forEach((r) => {
        const p = c[r];
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
    const { params: a, slides: n, slidesGrid: i, slidesSizesGrid: u, size: c, activeIndex: r } = this;
    let p = 1;
    if (typeof a.slidesPerView == "number")
      return a.slidesPerView;
    if (!c)
      return p;
    if (a.centeredSlides) {
      let d = n[r] ? Math.ceil(n[r].swiperSlideSize ?? 0) : 0, f = !1;
      for (let T = r + 1; T < n.length; T += 1)
        n[T] && !f && (d += Math.ceil(n[T].swiperSlideSize ?? 0), p += 1, d > c && (f = !0));
      for (let T = r - 1; T >= 0; T -= 1)
        n[T] && !f && (d += n[T].swiperSlideSize ?? 0, p += 1, d > c && (f = !0));
    } else if (t === "current")
      for (let d = r + 1; d < n.length; d += 1)
        (s ? i[d] + u[d] - i[r] < c : i[d] - i[r] < c) && (p += 1);
    else
      for (let d = r - 1; d >= 0; d -= 1)
        i[r] - i[d] < c && (p += 1);
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
    if (a.breakpoints && t.setBreakpoint(), a.lazyPreload && [...t.el.querySelectorAll('[loading="lazy"]')].forEach((u) => {
      u.complete && Qe(t, u);
    }), t.updateSize(), typeof t.size > "u") {
      t.emit("update");
      return;
    }
    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();
    function n() {
      const u = t.rtlTranslate ? t.translate * -1 : t.translate, c = Math.min(Math.max(u, t.maxTranslate()), t.minTranslate());
      t.setTranslate(c), t.updateActiveIndex(), t.updateSlidesClasses();
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
    if (typeof a == "string" ? n = document.querySelector(a) : ke(a) && (n = a), !n)
      return !1;
    n.swiper = s;
    const i = n.parentNode;
    i && i.host && i.host.nodeName === s.params.swiperElementNodeName.toUpperCase() && (s.isElement = !0);
    const u = () => `.${(s.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let r = n && n.shadowRoot ? n.shadowRoot.querySelector(u()) : Q(n, u())[0];
    !r && s.params.createElements && (r = ne("div", s.params.wrapperClass), n.append(r), Q(n, `.${s.params.slideClass}`).forEach((d) => {
      r.append(d);
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
        i.complete && Qe(s, i);
      });
    }
    return s.initialized = !0, bt(s), s.emit("init"), s.emit("afterInit"), s;
  }
  /**
   * Destroy slider instance and detach all events listeners
   *
   * @param deleteInstance Set it to false (by default it is true) to not to delete Swiper instance
   * @param cleanStyles Set it to true (by default it is true) and all custom styles will be removed from slides, wrapper and container.
   * Useful if you need to destroy Swiper and to init again with new options or in different direction
   */
  destroy(t = !0, s = !0) {
    const a = this, { params: n, el: i, wrapperEl: u, slides: c } = a;
    return typeof a.params > "u" || a.destroyed || (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), n.loop && a.loopDestroy(), s && (a.removeClasses(), i && typeof i != "string" && i.removeAttribute("style"), u && u.removeAttribute("style"), c && c.length && c.forEach((r) => {
      r.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), r.removeAttribute("style"), r.removeAttribute("data-swiper-slide-index");
    })), a.emit("destroy"), Object.keys(a.eventsListeners).forEach((r) => {
      a.off(r);
    }), t !== !1 && (a.el && typeof a.el != "string" && (a.el.swiper = null), Gt(a)), a.destroyed = !0), null;
  }
  static extendDefaults(t) {
    se(Je, t);
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
    return Je;
  }
});
Object.defineProperty(te, "defaults", {
  get() {
    return yt;
  }
});
const ot = sa, aa = te.prototype;
Object.keys(ot).forEach((e) => {
  const t = ot[e];
  Object.keys(t).forEach((s) => {
    aa[s] = t[s];
  });
});
te.use([Ls, Cs]);
const na = ({ swiper: e, extendParams: t, on: s, emit: a }) => {
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
  const c = () => u ??= document.createElement("div");
  function r(l, g) {
    const E = i();
    if (E.cache && e.virtual.cache[g])
      return e.virtual.cache[g];
    let S;
    if (E.renderSlide) {
      const h = E.renderSlide.call(e, l, g);
      if (typeof h == "string") {
        const m = c();
        re(m, h), S = m.children[0];
      } else
        S = h;
    } else e.isElement ? S = ne("swiper-slide") : S = ne("div", e.params.slideClass);
    return S.setAttribute("data-swiper-slide-index", String(g)), E.renderSlide || re(S, l), E.cache && (e.virtual.cache[g] = S), S;
  }
  function p(l, g, E) {
    const { slidesPerGroup: S, centeredSlides: h, slidesPerView: m, loop: v, initialSlide: b } = e.params;
    if (g && !v && (b ?? 0) > 0)
      return;
    const { addSlidesBefore: L, addSlidesAfter: A, slidesPerViewAutoSlideSize: w } = i(), { from: C, to: k, slides: _, slidesGrid: y, offset: M } = e.virtual;
    e.params.cssMode || e.updateActiveIndex();
    const x = typeof E > "u" ? e.activeIndex || 0 : E;
    let I;
    e.rtlTranslate ? I = "right" : I = e.isHorizontal() ? "left" : "top";
    let $;
    if (m === "auto")
      if (w) {
        let Y = e.size;
        Y || (Y = e.isHorizontal() ? e.el.getBoundingClientRect().width : e.el.getBoundingClientRect().height), $ = Math.max(1, Math.ceil(Y / w));
      } else
        $ = 1;
    else
      $ = m ?? 1;
    const F = S ?? 1;
    let j, P;
    h ? (j = Math.floor($ / 2) + F + A, P = Math.floor($ / 2) + F + L) : (j = $ + (F - 1) + A, P = (v ? $ : F) + L);
    let z = x - P, G = x + j;
    v || (z = Math.max(z, 0), G = Math.min(G, _.length - 1));
    let V = (e.slidesGrid[z] || 0) - (e.slidesGrid[0] || 0);
    v && x >= P ? (z -= P, h || (V += e.slidesGrid[0])) : v && x < P && (z = -P, h && (V += e.slidesGrid[0])), Object.assign(e.virtual, {
      from: z,
      to: G,
      offset: V,
      slidesGrid: e.slidesGrid,
      slidesBefore: P,
      slidesAfter: j
    });
    function q() {
      e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), a("virtualUpdate");
    }
    if (C === z && k === G && !l) {
      e.slidesGrid !== y && V !== M && e.slides.forEach((Y) => {
        Y.style.setProperty(I, `${V - Math.abs(e.cssOverflowAdjustment())}px`);
      }), e.updateProgress(), a("virtualUpdate");
      return;
    }
    const O = i();
    if (O.renderExternal) {
      const Y = [];
      for (let U = z; U <= G; U += 1)
        Y.push(_[U]);
      O.renderExternal.call(e, {
        offset: V,
        from: z,
        to: G,
        slides: Y
      }), O.renderExternalUpdate ? q() : a("virtualUpdate");
      return;
    }
    const R = [], D = [], B = (Y) => {
      let U = Y;
      return Y < 0 ? U = _.length + Y : U >= _.length && (U = U - _.length), U;
    };
    if (l)
      e.slides.filter((Y) => Y.matches(`.${e.params.slideClass}, swiper-slide`)).forEach((Y) => {
        Y.remove();
      });
    else
      for (let Y = C; Y <= k; Y += 1)
        if (Y < z || Y > G) {
          const U = B(Y);
          e.slides.filter((J) => J.matches(`.${e.params.slideClass}[data-swiper-slide-index="${U}"], swiper-slide[data-swiper-slide-index="${U}"]`)).forEach((J) => {
            J.remove();
          });
        }
    const K = v ? -_.length : 0, ie = v ? _.length * 2 : _.length;
    for (let Y = K; Y < ie; Y += 1)
      if (Y >= z && Y <= G) {
        const U = B(Y);
        typeof k > "u" || l ? D.push(U) : (Y > k && D.push(U), Y < C && R.push(U));
      }
    if (D.forEach((Y) => {
      e.slidesEl.append(r(_[Y], Y));
    }), v)
      for (let Y = R.length - 1; Y >= 0; Y -= 1) {
        const U = R[Y];
        e.slidesEl.prepend(r(_[U], U));
      }
    else
      R.sort((Y, U) => U - Y), R.forEach((Y) => {
        e.slidesEl.prepend(r(_[Y], Y));
      });
    Q(e.slidesEl, ".swiper-slide, swiper-slide").forEach((Y) => {
      Y.style.setProperty(I, `${V - Math.abs(e.cssOverflowAdjustment())}px`);
    }), q();
  }
  function d(l) {
    if (l !== null && typeof l == "object" && "length" in l) {
      const g = l;
      for (let E = 0; E < g.length; E += 1)
        g[E] && e.virtual.slides.push(g[E]);
    } else
      e.virtual.slides.push(l);
    p(!0);
  }
  function f(l) {
    const g = e.activeIndex;
    let E = g + 1, S = 1;
    if (Array.isArray(l)) {
      for (let h = 0; h < l.length; h += 1)
        l[h] && e.virtual.slides.unshift(l[h]);
      E = g + l.length, S = l.length;
    } else
      e.virtual.slides.unshift(l);
    if (i().cache) {
      const h = e.virtual.cache, m = {};
      Object.keys(h).forEach((v) => {
        const b = h[Number(v)], L = b.getAttribute("data-swiper-slide-index");
        L && b.setAttribute("data-swiper-slide-index", String(parseInt(L, 10) + S)), m[parseInt(v, 10) + S] = b;
      }), e.virtual.cache = m;
    }
    p(!0), e.slideTo(E, 0);
  }
  function T(l) {
    if (typeof l > "u" || l === null)
      return;
    let g = e.activeIndex;
    const E = (S) => {
      Object.keys(e.virtual.cache).forEach((h) => {
        const m = Number(h);
        if (m > S) {
          const v = e.virtual.cache[m];
          e.virtual.cache[m - 1] = v, v.setAttribute("data-swiper-slide-index", String(m - 1)), delete e.virtual.cache[m];
        }
      });
    };
    if (Array.isArray(l))
      for (let S = l.length - 1; S >= 0; S -= 1)
        i().cache && (delete e.virtual.cache[l[S]], E(l[S])), e.virtual.slides.splice(l[S], 1), l[S] < g && (g -= 1), g = Math.max(g, 0);
    else
      i().cache && (delete e.virtual.cache[l], E(l)), e.virtual.slides.splice(l, 1), l < g && (g -= 1), g = Math.max(g, 0);
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
      const S = [...e.slidesEl.children].filter((h) => h.matches(`.${e.params.slideClass}, swiper-slide`));
      S && S.length && (e.virtual.slides = [...S], l = !0, S.forEach((h, m) => {
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
    appendSlide: d,
    prependSlide: f,
    removeSlide: T,
    removeAllSlides: o,
    update: p
  });
}, ia = ({ swiper: e, extendParams: t, on: s, emit: a }) => {
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
    const { rtlTranslate: p } = e, d = "originalEvent" in r && r.originalEvent ? r.originalEvent : r, f = d.keyCode || d.charCode, T = n(), o = !!T.pageUpDown, l = o && f === 33, g = o && f === 34, E = f === 37, S = f === 39, h = f === 38, m = f === 40;
    if (!e.allowSlideNext && (e.isHorizontal() && S || e.isVertical() && m || g) || !e.allowSlidePrev && (e.isHorizontal() && E || e.isVertical() && h || l))
      return !1;
    if (d.shiftKey || d.altKey || d.ctrlKey || d.metaKey)
      return;
    const v = document.activeElement;
    if (v && (v.isContentEditable || v.nodeName && (v.nodeName.toLowerCase() === "input" || v.nodeName.toLowerCase() === "textarea")))
      return;
    if (T.onlyInViewport && (l || g || E || S || h || m)) {
      let L = !1;
      if (me(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 && me(e.el, `.${e.params.slideActiveClass}`).length === 0)
        return;
      const A = e.el, w = A.clientWidth, C = A.clientHeight, k = window.innerWidth, _ = window.innerHeight, y = ze(A);
      p && (y.left -= A.scrollLeft);
      const M = [
        [y.left, y.top],
        [y.left + w, y.top],
        [y.left, y.top + C],
        [y.left + w, y.top + C]
      ];
      for (let x = 0; x < M.length; x += 1) {
        const I = M[x];
        if (I[0] >= 0 && I[0] <= k && I[1] >= 0 && I[1] <= _) {
          if (I[0] === 0 && I[1] === 0)
            continue;
          L = !0;
        }
      }
      if (!L)
        return;
    }
    const b = T.speed;
    e.isHorizontal() ? ((l || g || E || S) && d.cancelable && d.preventDefault(), ((g || S) && !p || (l || E) && p) && e.slideNext(b), ((l || E) && !p || (g || S) && p) && e.slidePrev(b)) : ((l || g || h || m) && d.cancelable && d.preventDefault(), (g || m) && e.slideNext(b), (l || h) && e.slidePrev(b)), a("keyPress", f);
  }
  function u() {
    e.keyboard.enabled || (document.addEventListener("keydown", i), e.keyboard.enabled = !0);
  }
  function c() {
    e.keyboard.enabled && (document.removeEventListener("keydown", i), e.keyboard.enabled = !1);
  }
  e.keyboard = {
    enabled: !1,
    enable: u,
    disable: c
  }, s("init", () => {
    n().enabled && u();
  }), s("destroy", () => {
    e.keyboard.enabled && c();
  });
}, la = ({ swiper: e, extendParams: t, on: s, emit: a }) => {
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
  let n, i = ae(), u, c = !1;
  const r = [];
  function p() {
    return e.params.mousewheel;
  }
  function d(m) {
    const A = m;
    let w = 0, C = 0, k = 0, _ = 0;
    return A.detail !== void 0 && (C = A.detail), A.wheelDelta !== void 0 && (C = -A.wheelDelta / 120), A.wheelDeltaY !== void 0 && (C = -A.wheelDeltaY / 120), A.wheelDeltaX !== void 0 && (w = -A.wheelDeltaX / 120), A.axis !== void 0 && A.HORIZONTAL_AXIS !== void 0 && A.axis === A.HORIZONTAL_AXIS && (w = C, C = 0), k = w * 10, _ = C * 10, A.deltaY !== void 0 && (_ = A.deltaY), A.deltaX !== void 0 && (k = A.deltaX), A.shiftKey && !k && (k = _, _ = 0), (k || _) && A.deltaMode && (A.deltaMode === 1 ? (k *= 40, _ *= 40) : (k *= 800, _ *= 800)), k && !w && (w = k < 1 ? -1 : 1), _ && !C && (C = _ < 1 ? -1 : 1), {
      spinX: w,
      spinY: C,
      pixelX: k,
      pixelY: _
    };
  }
  function f() {
    e.enabled && (c = !0);
  }
  function T() {
    e.enabled && (c = !1);
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
    let v = "originalEvent" in m && m.originalEvent ? m.originalEvent : m, b = !0;
    if (!e.enabled)
      return !1;
    const L = p();
    if (m.target.closest(`.${L.noMousewheelClass}`))
      return !1;
    e.params.cssMode && v.preventDefault();
    let A = e.el;
    L.eventsTarget !== "container" && (A = document.querySelector(L.eventsTarget));
    const w = A && A.contains(v.target);
    if (!c && !w && !L.releaseOnEdges)
      return !0;
    let C = 0;
    const k = e.rtlTranslate ? -1 : 1, _ = d(v);
    if (L.forceToAxis)
      if (e.isHorizontal())
        if (Math.abs(_.pixelX) > Math.abs(_.pixelY))
          C = -_.pixelX * k;
        else
          return !0;
      else if (Math.abs(_.pixelY) > Math.abs(_.pixelX))
        C = -_.pixelY;
      else
        return !0;
    else
      C = Math.abs(_.pixelX) > Math.abs(_.pixelY) ? -_.pixelX * k : -_.pixelY;
    if (C === 0)
      return !0;
    L.invert && (C = -C);
    let y = e.getTranslate() + C * (L.sensitivity ?? 1);
    y >= e.minTranslate() && (y = e.minTranslate()), y <= e.maxTranslate() && (y = e.maxTranslate()), b = e.params.loop ? !0 : !(y === e.minTranslate() || y === e.maxTranslate()), b && e.params.nested && v.stopPropagation();
    const M = e.params.freeMode;
    if (!e.params.freeMode || !M?.enabled) {
      const x = {
        time: ae(),
        delta: Math.abs(C),
        direction: Math.sign(C),
        raw: m
      };
      r.length >= 2 && r.shift();
      const I = r.length ? r[r.length - 1] : void 0;
      if (r.push(x), I ? (x.direction !== I.direction || x.delta > I.delta || x.time > I.time + 150) && o(x) : o(x), l(x))
        return !0;
    } else {
      const x = {
        time: ae(),
        delta: Math.abs(C),
        direction: Math.sign(C)
      }, I = u && x.time < u.time + 500 && x.delta <= u.delta && x.direction === u.direction;
      if (!I) {
        u = void 0;
        let $ = e.getTranslate() + C * (L.sensitivity ?? 1);
        const F = e.isBeginning, j = e.isEnd;
        if ($ >= e.minTranslate() && ($ = e.minTranslate()), $ <= e.maxTranslate() && ($ = e.maxTranslate()), e.setTransition(0), e.setTranslate($), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses(), (!F && e.isBeginning || !j && e.isEnd) && e.updateSlidesClasses(), e.params.loop && e.loopFix({
          direction: x.direction < 0 ? "next" : "prev",
          byMousewheel: !0
        }), M?.sticky) {
          clearTimeout(n), n = void 0, r.length >= 15 && r.shift();
          const z = r.length ? r[r.length - 1] : void 0, G = r[0];
          if (r.push(x), z && (x.delta > z.delta || x.direction !== z.direction))
            r.splice(0);
          else if (r.length >= 15 && G && x.time - G.time < 500 && G.delta - x.delta >= 1 && x.delta <= 6) {
            const V = C > 0 ? 0.8 : 0.2;
            u = x, r.splice(0), n = Se(() => {
              e.destroyed || !e.params || e.slideToClosest(e.params.speed, !0, void 0, V);
            }, 0);
          }
          n || (n = Se(() => {
            if (e.destroyed || !e.params)
              return;
            const V = 0.5;
            u = x, r.splice(0), e.slideToClosest(e.params.speed, !0, void 0, V);
          }, 500));
        }
        I || a("scroll", v);
        const P = e.params.autoplay;
        if (e.params.autoplay && P?.disableOnInteraction && e.autoplay.stop(), L.releaseOnEdges && ($ === e.minTranslate() || $ === e.maxTranslate()))
          return !0;
      }
    }
    return v.cancelable && v.preventDefault(), !1;
  }
  function E(m) {
    const v = p();
    let b = e.el;
    v.eventsTarget !== "container" && (b = document.querySelector(v.eventsTarget)), b[m]("mouseenter", f), b[m]("mouseleave", T), b[m]("wheel", g);
  }
  function S() {
    return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", g), !0) : e.mousewheel.enabled ? !1 : (E("addEventListener"), e.mousewheel.enabled = !0, !0);
  }
  function h() {
    return e.params.cssMode ? (e.wrapperEl.addEventListener("wheel", g), !0) : e.mousewheel.enabled ? (E("removeEventListener"), e.mousewheel.enabled = !1, !0) : !1;
  }
  s("init", () => {
    const m = p();
    !m.enabled && e.params.cssMode && h(), m.enabled && S();
  }), e.mousewheel = {
    enabled: !1,
    enable: S,
    disable: h
  }, s("destroy", () => {
    e.params.cssMode && S(), e.mousewheel.enabled && h();
  });
};
function st(e, t, s, a) {
  const n = s ?? {}, i = t ?? {};
  return e.params.createElements && Object.keys(a).forEach((u) => {
    if (!n[u] && n.auto === !0) {
      let c = Q(e.el, `.${a[u]}`)[0];
      c || (c = ne("div", a[u]), c.className = a[u], e.el.append(c)), n[u] = c, i[u] = c;
    }
  }), n;
}
const dt = '<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0.28 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>', ra = ({ swiper: e, extendParams: t, on: s, emit: a }) => {
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
    arrowSvg: dt
  };
  function n() {
    return e.params.navigation;
  }
  function i(l) {
    let g;
    return l && typeof l == "string" && e.isElement && (g = e.el.querySelector(l) || e.hostEl.querySelector(l), g) ? g : (l && (typeof l == "string" && (g = [...document.querySelectorAll(l)]), e.params.uniqueNavElements && typeof l == "string" && g && g.length > 1 && e.el.querySelectorAll(l).length === 1 ? g = e.el.querySelector(l) : g && g.length === 1 && (g = g[0])), l && !g ? l : g);
  }
  function u(l, g) {
    const E = n();
    X(l).forEach((h) => {
      h && (h.classList[g ? "add" : "remove"](...E.disabledClass.split(" ")), h.tagName === "BUTTON" && (h.disabled = g), e.params.watchOverflow && e.enabled && h.classList[e.isLocked ? "add" : "remove"](E.lockClass));
    });
  }
  function c() {
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
  function d() {
    e.params.navigation = st(e, e.originalParams.navigation, e.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    });
    const l = n();
    if (!(l.nextEl || l.prevEl))
      return;
    const g = i(l.nextEl), E = i(l.prevEl);
    Object.assign(e.navigation, {
      nextEl: g,
      prevEl: E
    });
    const S = X(g), h = X(E), m = (v, b) => {
      if (v) {
        if (l.addIcons && v.matches(".swiper-button-next,.swiper-button-prev") && !v.querySelector("svg")) {
          const L = document.createElement("div");
          re(L, dt);
          const A = L.querySelector("svg");
          A && v.appendChild(A), L.remove();
        }
        v.addEventListener("click", b === "next" ? p : r);
      }
      !e.enabled && v && v.classList.add(...l.lockClass.split(" "));
    };
    S.forEach((v) => m(v, "next")), h.forEach((v) => m(v, "prev"));
  }
  function f() {
    const l = n(), { nextEl: g, prevEl: E } = e.navigation, S = X(g), h = X(E), m = (v, b) => {
      v.removeEventListener("click", b === "next" ? p : r), v.classList.remove(...l.disabledClass.split(" "));
    };
    S.forEach((v) => m(v, "next")), h.forEach((v) => m(v, "prev"));
  }
  s("init", () => {
    n().enabled === !1 ? o() : (d(), c());
  }), s("toEdge fromEdge lock unlock", () => {
    c();
  }), s("destroy", () => {
    f();
  }), s("enable disable", () => {
    const l = n(), { nextEl: g, prevEl: E } = e.navigation, S = X(g), h = X(E);
    if (e.enabled) {
      c();
      return;
    }
    [...S, ...h].filter((m) => !!m).forEach((m) => m.classList.add(l.lockClass));
  }), s("click", (l, g) => {
    const E = n(), { nextEl: S, prevEl: h } = e.navigation, m = X(S), v = X(h), b = g.target;
    let L = v.includes(b) || m.includes(b);
    if (e.isElement && !L) {
      const A = g.composedPath ? g.composedPath() : [];
      A.length && (L = A.find((w) => m.includes(w) || v.includes(w)));
    }
    if (E.hideOnClick && !L) {
      if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === b || e.pagination.el.contains(b)))
        return;
      let A;
      m.length ? A = m[0].classList.contains(E.hiddenClass) : v.length && (A = v[0].classList.contains(E.hiddenClass)), a(A === !0 ? "navigationShow" : "navigationHide"), [...m, ...v].filter((w) => !!w).forEach((w) => w.classList.toggle(E.hiddenClass));
    }
  });
  const T = () => {
    const l = n();
    e.el.classList.remove(...l.navigationDisabledClass.split(" ")), d(), c();
  }, o = () => {
    const l = n();
    e.el.classList.add(...l.navigationDisabledClass.split(" ")), f();
  };
  Object.assign(e.navigation, {
    enable: T,
    disable: o,
    update: c,
    init: d,
    destroy: f
  });
};
function de(e = "") {
  return `.${e.trim().replace(/([.:!+/()[\]#>~*^$|=,'"@{}\\])/g, "\\$1").replace(/ /g, ".")}`;
}
const oa = (e) => !!e.virtual && !!e.params.virtual?.enabled, da = (e) => !!e.params.freeMode?.enabled, ct = (e) => {
  if (oa(e))
    return e.virtual.slides.length;
  const t = e.params.grid?.rows;
  return e.grid && t && t > 1 ? e.slides.length / Math.ceil(t) : e.slides.length;
}, ca = ({ swiper: e, extendParams: t, on: s, emit: a }) => {
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
  function c() {
    return e.params.pagination;
  }
  function r() {
    return !c().el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0;
  }
  function p(h, m) {
    const { bulletActiveClass: v } = c();
    if (!h)
      return;
    let b = h[`${m === "prev" ? "previous" : "next"}ElementSibling`];
    b && (b.classList.add(`${v}-${m}`), b = b[`${m === "prev" ? "previous" : "next"}ElementSibling`], b && b.classList.add(`${v}-${m}-${m}`));
  }
  function d(h, m, v) {
    if (h = h % v, m = m % v, m === h + 1)
      return "next";
    if (m === h - 1)
      return "previous";
  }
  function f(h) {
    const v = h.target.closest(de(c().bulletClass));
    if (!v)
      return;
    h.preventDefault();
    const b = (Le(v) ?? 0) * (e.params.slidesPerGroup ?? 1);
    if (e.params.loop) {
      if (e.realIndex === b)
        return;
      const L = d(e.realIndex, b, e.slides.length);
      L === "next" ? e.slideNext() : L === "previous" ? e.slidePrev() : e.slideToLoop(b);
    } else
      e.slideTo(b);
  }
  function T() {
    const h = e.rtl, m = c();
    if (r())
      return;
    const v = X(e.pagination.el);
    let b, L;
    const A = ct(e), w = e.params.loop ? Math.ceil(A / (e.params.slidesPerGroup ?? 1)) : e.snapGrid.length;
    if (e.params.loop ? (L = e.previousRealIndex || 0, b = (e.params.slidesPerGroup ?? 1) > 1 ? Math.floor(e.realIndex / (e.params.slidesPerGroup ?? 1)) : e.realIndex) : typeof e.snapIndex < "u" ? (b = e.snapIndex, L = e.previousSnapIndex) : (L = e.previousIndex || 0, b = e.activeIndex || 0), m.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
      const C = e.pagination.bullets;
      let k = 0, _ = 0, y = 0;
      if (m.dynamicBullets) {
        i = Ze(C[0], e.isHorizontal() ? "width" : "height");
        const M = e.isHorizontal() ? "width" : "height";
        v.forEach((x) => {
          x.style[M] = `${(i ?? 0) * (m.dynamicMainBullets + 4)}px`;
        }), m.dynamicMainBullets > 1 && L !== void 0 && (u += b - (L || 0), u > m.dynamicMainBullets - 1 ? u = m.dynamicMainBullets - 1 : u < 0 && (u = 0)), k = Math.max(b - u, 0), _ = k + (Math.min(C.length, m.dynamicMainBullets) - 1), y = (_ + k) / 2;
      }
      if (C.forEach((M) => {
        const x = [
          "",
          "-next",
          "-next-next",
          "-prev",
          "-prev-prev",
          "-main"
        ].map((I) => `${m.bulletActiveClass}${I}`).flatMap((I) => typeof I == "string" && I.includes(" ") ? I.split(" ") : [I]);
        M.classList.remove(...x);
      }), v.length > 1)
        C.forEach((M) => {
          const x = Le(M);
          x === b ? M.classList.add(...m.bulletActiveClass.split(" ")) : e.isElement && M.setAttribute("part", "bullet"), m.dynamicBullets && x !== void 0 && (x >= k && x <= _ && M.classList.add(...`${m.bulletActiveClass}-main`.split(" ")), x === k && p(M, "prev"), x === _ && p(M, "next"));
        });
      else {
        const M = C[b];
        if (M && M.classList.add(...m.bulletActiveClass.split(" ")), e.isElement && C.forEach((x, I) => {
          x.setAttribute("part", I === b ? "bullet-active" : "bullet");
        }), m.dynamicBullets) {
          const x = C[k], I = C[_];
          for (let $ = k; $ <= _; $ += 1)
            C[$] && C[$].classList.add(...`${m.bulletActiveClass}-main`.split(" "));
          p(x, "prev"), p(I, "next");
        }
      }
      if (m.dynamicBullets) {
        const M = Math.min(C.length, m.dynamicMainBullets + 4), x = ((i ?? 0) * M - (i ?? 0)) / 2 - y * (i ?? 0), I = h ? "right" : "left", $ = e.isHorizontal() ? I : "top";
        C.forEach((F) => {
          F.style[$] = `${x}px`;
        });
      }
    }
    v.forEach((C, k) => {
      if (m.type === "fraction" && (C.querySelectorAll(de(m.currentClass)).forEach((_) => {
        _.textContent = String(m.formatFractionCurrent(b + 1));
      }), C.querySelectorAll(de(m.totalClass)).forEach((_) => {
        _.textContent = String(m.formatFractionTotal(w));
      })), m.type === "progressbar") {
        let _;
        m.progressbarOpposite ? _ = e.isHorizontal() ? "vertical" : "horizontal" : _ = e.isHorizontal() ? "horizontal" : "vertical";
        const y = (b + 1) / w;
        let M = 1, x = 1;
        _ === "horizontal" ? M = y : x = y, C.querySelectorAll(de(m.progressbarFillClass)).forEach((I) => {
          I.style.transform = `translate3d(0,0,0) scaleX(${M}) scaleY(${x})`, I.style.transitionDuration = `${e.params.speed}ms`;
        });
      }
      m.type === "custom" && m.renderCustom ? (re(C, m.renderCustom(e, b + 1, w)), k === 0 && a("paginationRender", C)) : (k === 0 && a("paginationRender", C), a("paginationUpdate", C)), e.params.watchOverflow && e.enabled && C.classList[e.isLocked ? "add" : "remove"](m.lockClass);
    });
  }
  function o() {
    const h = c();
    if (r())
      return;
    const m = ct(e), v = X(e.pagination.el);
    let b = "";
    if (h.type === "bullets") {
      let L = e.params.loop ? Math.ceil(m / (e.params.slidesPerGroup ?? 1)) : e.snapGrid.length;
      e.params.freeMode && da(e) && L > m && (L = m);
      for (let A = 0; A < L; A += 1)
        h.renderBullet ? b += h.renderBullet.call(e, A, h.bulletClass) : b += `<${h.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${h.bulletClass}"></${h.bulletElement}>`;
    }
    h.type === "fraction" && (h.renderFraction ? b = h.renderFraction.call(e, h.currentClass, h.totalClass) : b = `<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`), h.type === "progressbar" && (h.renderProgressbar ? b = h.renderProgressbar.call(e, h.progressbarFillClass) : b = `<span class="${h.progressbarFillClass}"></span>`), e.pagination.bullets = [], v.forEach((L) => {
      h.type !== "custom" && re(L, b || ""), h.type === "bullets" && e.pagination.bullets.push(...Array.from(L.querySelectorAll(de(h.bulletClass))));
    }), h.type !== "custom" && a("paginationRender", v[0]);
  }
  function l() {
    e.params.pagination = st(e, e.originalParams.pagination, e.params.pagination, { el: "swiper-pagination" });
    const h = c();
    if (!h.el)
      return;
    let m;
    if (typeof h.el == "string" && e.isElement && (m = e.el.querySelector(h.el)), !m && typeof h.el == "string" && (m = [...document.querySelectorAll(h.el)]), m || (m = h.el), !m || Array.isArray(m) && m.length === 0)
      return;
    if (e.params.uniqueNavElements && typeof h.el == "string" && Array.isArray(m) && m.length > 1 && (m = [...e.el.querySelectorAll(h.el)], m.length > 1)) {
      const b = m.find((L) => me(L, ".swiper")[0] === e.el);
      b && (m = b);
    }
    Array.isArray(m) && m.length === 1 && (m = m[0]), Object.assign(e.pagination, {
      el: m
    }), X(m).forEach((b) => {
      h.type === "bullets" && h.clickable && b.classList.add(...(h.clickableClass || "").split(" ")), b.classList.add(h.modifierClass + h.type), b.classList.add(e.isHorizontal() ? h.horizontalClass : h.verticalClass), h.type === "bullets" && h.dynamicBullets && (b.classList.add(`${h.modifierClass}${h.type}-dynamic`), u = 0, h.dynamicMainBullets < 1 && (h.dynamicMainBullets = 1)), h.type === "progressbar" && h.progressbarOpposite && b.classList.add(h.progressbarOppositeClass), h.clickable && b.addEventListener("click", f), e.enabled || b.classList.add(h.lockClass);
    });
  }
  function g() {
    const h = c();
    if (r())
      return;
    const m = e.pagination.el;
    m && X(m).forEach((b) => {
      b.classList.remove(h.hiddenClass), b.classList.remove(h.modifierClass + h.type), b.classList.remove(e.isHorizontal() ? h.horizontalClass : h.verticalClass), h.clickable && (b.classList.remove(...(h.clickableClass || "").split(" ")), b.removeEventListener("click", f));
    }), e.pagination.bullets && e.pagination.bullets.forEach((v) => v.classList.remove(...h.bulletActiveClass.split(" ")));
  }
  s("changeDirection", () => {
    if (!e.pagination || !e.pagination.el)
      return;
    const h = c();
    X(e.pagination.el).forEach((v) => {
      v.classList.remove(h.horizontalClass, h.verticalClass), v.classList.add(e.isHorizontal() ? h.horizontalClass : h.verticalClass);
    });
  }), s("init", () => {
    c().enabled === !1 ? S() : (l(), o(), T());
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
      const m = c();
      X(h).forEach((b) => b.classList[e.enabled ? "remove" : "add"](m.lockClass));
    }
  }), s("lock unlock", () => {
    T();
  }), s("click", (h, m) => {
    const v = m.target, b = X(e.pagination.el), L = c();
    if (L.el && L.hideOnClick && b && b.length > 0 && !v.classList.contains(L.bulletClass)) {
      if (e.navigation && (e.navigation.nextEl && v === e.navigation.nextEl || e.navigation.prevEl && v === e.navigation.prevEl))
        return;
      const A = b[0].classList.contains(L.hiddenClass);
      a(A === !0 ? "paginationShow" : "paginationHide"), b.forEach((w) => w.classList.toggle(L.hiddenClass));
    }
  });
  const E = () => {
    const h = c();
    e.el.classList.remove(h.paginationDisabledClass);
    const { el: m } = e.pagination;
    m && X(m).forEach((b) => b.classList.remove(h.paginationDisabledClass)), l(), o(), T();
  }, S = () => {
    const h = c();
    e.el.classList.add(h.paginationDisabledClass);
    const { el: m } = e.pagination;
    m && X(m).forEach((b) => b.classList.add(h.paginationDisabledClass)), g();
  };
  Object.assign(e.pagination, {
    enable: E,
    disable: S,
    render: o,
    update: T,
    init: l,
    destroy: g
  });
}, fa = ({ swiper: e, extendParams: t, on: s, emit: a }) => {
  let n = !1, i = null, u = null, c = 0, r = 0, p = 0, d = 0;
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
    const { rtlTranslate: y } = e, { dragEl: M } = e.scrollbar, x = e.params.loop ? e.progressLoop ?? 0 : e.progress;
    let I = r, $ = (p - r) * x;
    y ? ($ = -$, $ > 0 ? (I = r - $, $ = 0) : -$ + r > p && (I = p + $)) : $ < 0 ? (I = r + $, $ = 0) : $ + r > p && (I = p - $), e.isHorizontal() ? (M.style.transform = `translate3d(${$}px, 0, 0)`, M.style.width = `${I}px`) : (M.style.transform = `translate3d(0px, ${$}px, 0)`, M.style.height = `${I}px`);
  }
  function o() {
    const y = f();
    if (!y.el || !e.scrollbar.el)
      return;
    const { el: M } = e.scrollbar;
    T(), y.hide && (i && clearTimeout(i), M.style.opacity = "1", i = setTimeout(() => {
      M.style.opacity = "0", M.style.transitionDuration = "400ms";
    }, 1e3));
  }
  function l(y) {
    !f().el || !e.scrollbar.el || (e.scrollbar.dragEl.style.transitionDuration = `${y}ms`);
  }
  function g() {
    const y = f();
    if (!y.el || !e.scrollbar.el)
      return;
    const { scrollbar: M } = e, { dragEl: x, el: I } = M;
    x.style.width = "", x.style.height = "", p = e.isHorizontal() ? I.offsetWidth : I.offsetHeight, d = e.size / (e.virtualSize + (e.params.slidesOffsetBefore ?? 0) - (e.params.centeredSlides ? e.snapGrid[0] : 0)), y.dragSize === "auto" ? r = p * d : r = parseInt(String(y.dragSize), 10), T(), d >= 1 ? I.style.display = "none" : I.style.display = "", y.hide && (I.style.opacity = "0"), e.params.watchOverflow && e.enabled && M.el.classList[e.isLocked ? "add" : "remove"](y.lockClass);
  }
  function E(y) {
    return e.isHorizontal() ? y.clientX ?? y.touches?.[0]?.clientX ?? 0 : y.clientY ?? y.touches?.[0]?.clientY ?? 0;
  }
  function S(y) {
    const { scrollbar: M, rtlTranslate: x } = e, { el: I } = M;
    let $;
    $ = (E(y) - ze(I)[e.isHorizontal() ? "left" : "top"] - (c !== null ? c : r / 2)) / (p - r), $ = Math.max(Math.min($, 1), 0), x && ($ = 1 - $);
    const F = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * $;
    e.updateProgress(F), e.setTranslate(F), e.updateActiveIndex(), e.updateSlidesClasses();
  }
  function h(y) {
    const M = f(), { scrollbar: x, wrapperEl: I } = e, { el: $, dragEl: F } = x;
    n = !0, c = y.target === F ? E(y) - y.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null, y.preventDefault(), y.stopPropagation(), I.style.transitionDuration = "100ms", F.style.transitionDuration = "100ms", S(y), u && clearTimeout(u), $.style.transitionDuration = "0ms", M.hide && ($.style.opacity = "1"), e.params.cssMode && (e.wrapperEl.style.scrollSnapType = "none"), a("scrollbarDragStart", y);
  }
  function m(y) {
    const { scrollbar: M, wrapperEl: x } = e, { el: I, dragEl: $ } = M;
    n && (y.cancelable && y.preventDefault(), S(y), x.style.transitionDuration = "0ms", I.style.transitionDuration = "0ms", $.style.transitionDuration = "0ms", a("scrollbarDragMove", y));
  }
  function v(y) {
    const M = f(), { scrollbar: x, wrapperEl: I } = e, { el: $ } = x;
    n && (n = !1, e.params.cssMode && (e.wrapperEl.style.scrollSnapType = "", I.style.transitionDuration = ""), M.hide && (u && clearTimeout(u), u = Se(() => {
      $.style.opacity = "0", $.style.transitionDuration = "400ms";
    }, 1e3)), a("scrollbarDragEnd", y), M.snapOnRelease && e.slideToClosest());
  }
  function b(y) {
    const { scrollbar: M, params: x } = e, I = M.el;
    if (!I)
      return;
    const $ = x.passiveListeners ? { passive: !1, capture: !1 } : !1, F = x.passiveListeners ? { passive: !0, capture: !1 } : !1, j = y === "on" ? "addEventListener" : "removeEventListener";
    I[j]("pointerdown", h, $), document[j]("pointermove", m, $), document[j]("pointerup", v, F);
  }
  function L() {
    !f().el || !e.scrollbar.el || b("on");
  }
  function A() {
    !f().el || !e.scrollbar.el || b("off");
  }
  function w() {
    const { scrollbar: y, el: M } = e;
    e.params.scrollbar = st(e, e.originalParams.scrollbar, e.params.scrollbar, { el: "swiper-scrollbar" });
    const x = f();
    if (!x.el)
      return;
    let I;
    if (typeof x.el == "string" && e.isElement && (I = e.el.querySelector(x.el)), !I && typeof x.el == "string") {
      if (I = document.querySelectorAll(x.el), !I.length)
        return;
    } else I || (I = x.el);
    e.params.uniqueNavElements && typeof x.el == "string" && I.length > 1 && M.querySelectorAll(x.el).length === 1 && (I = M.querySelector(x.el)), I.length > 0 && (I = I[0]);
    const $ = I;
    $.classList.add(e.isHorizontal() ? x.horizontalClass : x.verticalClass);
    let F = null;
    $ && (F = $.querySelector(de(x.dragClass)), F || (F = ne("div", x.dragClass), $.append(F))), Object.assign(y, {
      el: $,
      dragEl: F
    }), x.draggable && L(), $ && $.classList[e.enabled ? "remove" : "add"](...fe(x.lockClass));
  }
  function C() {
    const y = f(), M = e.scrollbar.el;
    M && M.classList.remove(...fe(e.isHorizontal() ? y.horizontalClass : y.verticalClass)), A();
  }
  s("changeDirection", () => {
    if (!e.scrollbar || !e.scrollbar.el)
      return;
    const y = f();
    X(e.scrollbar.el).forEach((x) => {
      x.classList.remove(y.horizontalClass, y.verticalClass), x.classList.add(e.isHorizontal() ? y.horizontalClass : y.verticalClass);
    });
  }), s("init", () => {
    f().enabled === !1 ? _() : (w(), g(), o());
  }), s("update resize observerUpdate lock unlock changeDirection", () => {
    g();
  }), s("setTranslate", () => {
    o();
  }), s("setTransition", (y, M) => {
    l(M);
  }), s("enable disable", () => {
    const { el: y } = e.scrollbar;
    y && y.classList[e.enabled ? "remove" : "add"](...fe(f().lockClass));
  }), s("destroy", () => {
    C();
  });
  const k = () => {
    const y = f();
    e.el.classList.remove(...fe(y.scrollbarDisabledClass)), e.scrollbar.el && e.scrollbar.el.classList.remove(...fe(y.scrollbarDisabledClass)), w(), g(), o();
  }, _ = () => {
    const y = f();
    e.el.classList.add(...fe(y.scrollbarDisabledClass)), e.scrollbar.el && e.scrollbar.el.classList.add(...fe(y.scrollbarDisabledClass)), C();
  };
  Object.assign(e.scrollbar, {
    enable: k,
    disable: _,
    updateSize: g,
    setTranslate: o,
    init: w,
    destroy: C
  });
}, ua = ({ swiper: e, extendParams: t, on: s }) => {
  t({
    parallax: {
      enabled: !1
    }
  });
  function a() {
    return e.params.parallax;
  }
  const n = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]", i = (r, p) => {
    const { rtl: d } = e, f = d ? -1 : 1, T = r.getAttribute("data-swiper-parallax") || "0";
    let o = r.getAttribute("data-swiper-parallax-x"), l = r.getAttribute("data-swiper-parallax-y");
    const g = r.getAttribute("data-swiper-parallax-scale"), E = r.getAttribute("data-swiper-parallax-opacity"), S = r.getAttribute("data-swiper-parallax-rotate");
    if (o || l ? (o = o || "0", l = l || "0") : e.isHorizontal() ? (o = T, l = "0") : (l = T, o = "0"), o.indexOf("%") >= 0 ? o = `${parseInt(o, 10) * p * f}%` : o = `${Number(o) * p * f}px`, l.indexOf("%") >= 0 ? l = `${parseInt(l, 10) * p}%` : l = `${Number(l) * p}px`, typeof E < "u" && E !== null) {
      const m = Number(E), v = m - (m - 1) * (1 - Math.abs(p));
      r.style.opacity = String(v);
    }
    let h = `translate3d(${o}, ${l}, 0px)`;
    if (typeof g < "u" && g !== null) {
      const m = Number(g), v = m - (m - 1) * (1 - Math.abs(p));
      h += ` scale(${v})`;
    }
    if (S && typeof S < "u" && S !== null) {
      const m = Number(S) * p * -1;
      h += ` rotate(${m}deg)`;
    }
    r.style.transform = h;
  }, u = () => {
    const { el: r, slides: p, progress: d, snapGrid: f } = e, T = Q(r, n);
    e.isElement && T.push(...Q(e.hostEl, n)), T.forEach((o) => {
      i(o, d);
    }), p.forEach((o, l) => {
      let g = o.progress ?? 0;
      (e.params.slidesPerGroup ?? 1) > 1 && e.params.slidesPerView !== "auto" && (g += Math.ceil(l / 2) - d * (f.length - 1)), g = Math.min(Math.max(g, -1), 1), o.querySelectorAll(`${n}, [data-swiper-parallax-rotate]`).forEach((S) => {
        i(S, g);
      });
    });
  }, c = (r = e.params.speed ?? 300) => {
    const { el: p, hostEl: d } = e, f = [...p.querySelectorAll(n)];
    e.isElement && f.push(...d.querySelectorAll(n)), f.forEach((T) => {
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
    a().enabled && c(p);
  });
}, pa = ({ swiper: e, extendParams: t, on: s, emit: a }) => {
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
  let i = 1, u = !1, c = !1, r = { x: 0, y: 0 };
  const p = -3;
  let d = !1, f = !1;
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
  let E = 1;
  Object.defineProperty(e.zoom, "scale", {
    get() {
      return E;
    },
    set(O) {
      if (E !== O) {
        const R = o.imageEl, D = o.slideEl;
        a("zoomChange", O, R, D);
      }
      E = O;
    }
  });
  function S() {
    if (T.length < 2)
      return 1;
    const O = T[0].pageX, R = T[0].pageY, D = T[1].pageX, B = T[1].pageY;
    return Math.sqrt((D - O) ** 2 + (B - R) ** 2);
  }
  function h() {
    const O = n(), R = o.imageWrapEl?.getAttribute("data-swiper-zoom"), D = R != null ? Number(R) : O.maxRatio, B = o.imageEl;
    if (O.limitToOriginalSize && B && B.naturalWidth) {
      const K = B.naturalWidth / B.offsetWidth;
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
  function b(O) {
    const R = v(), D = O.target;
    return D ? !!(D.matches(R) || e.slides.filter((B) => B.contains(D)).length > 0) : !1;
  }
  function L(O) {
    const R = `.${n().containerClass}`, D = O.target;
    return D ? !!(D.matches(R) || [...e.hostEl.querySelectorAll(R)].filter((B) => B.contains(D)).length > 0) : !1;
  }
  function A(O) {
    if (O.pointerType === "mouse" && T.splice(0, T.length), !b(O))
      return;
    const R = n();
    if (d = !1, f = !1, T.push(O), !(T.length < 2)) {
      if (d = !0, o.scaleStart = S(), !o.slideEl) {
        const D = O.target;
        o.slideEl = D?.closest(`.${e.params.slideClass}, swiper-slide`) ?? void 0, o.slideEl || (o.slideEl = e.slides[e.activeIndex]);
        let B = o.slideEl?.querySelector(`.${R.containerClass}`) ?? null;
        if (B && (B = B.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0] ?? null), o.imageEl = B ?? void 0, B ? o.imageWrapEl = me(B, `.${R.containerClass}`)[0] ?? void 0 : o.imageWrapEl = void 0, !o.imageWrapEl) {
          o.imageEl = void 0;
          return;
        }
        o.maxRatio = h();
      }
      if (o.imageEl) {
        const [D, B] = m();
        o.originX = D ?? 0, o.originY = B ?? 0, o.imageEl.style.transitionDuration = "0ms";
      }
      u = !0;
    }
  }
  function w(O) {
    if (!b(O))
      return;
    const R = n(), D = e.zoom, B = T.findIndex((K) => K.pointerId === O.pointerId);
    B >= 0 && (T[B] = O), !(T.length < 2) && (f = !0, o.scaleMove = S(), o.imageEl && (D.scale = o.scaleMove / (o.scaleStart ?? 1) * i, D.scale > o.maxRatio && (D.scale = o.maxRatio - 1 + (D.scale - o.maxRatio + 1) ** 0.5), D.scale < R.minRatio && (D.scale = R.minRatio + 1 - (R.minRatio - D.scale + 1) ** 0.5), o.imageEl.style.transform = `translate3d(0,0,0) scale(${D.scale})`));
  }
  function C(O) {
    if (!b(O) || O.pointerType === "mouse" && O.type === "pointerout")
      return;
    const R = n(), D = e.zoom, B = T.findIndex((K) => K.pointerId === O.pointerId);
    B >= 0 && T.splice(B, 1), !(!d || !f) && (d = !1, f = !1, o.imageEl && (D.scale = Math.max(Math.min(D.scale, o.maxRatio), R.minRatio), o.imageEl.style.transitionDuration = `${e.params.speed}ms`, o.imageEl.style.transform = `translate3d(0,0,0) scale(${D.scale})`, i = D.scale, u = !1, D.scale > 1 && o.slideEl ? o.slideEl.classList.add(`${R.zoomedSlideClass}`) : D.scale <= 1 && o.slideEl && o.slideEl.classList.remove(`${R.zoomedSlideClass}`), D.scale === 1 && (o.originX = 0, o.originY = 0, o.slideEl = void 0)));
  }
  let k;
  function _() {
    e.touchEventsData.preventTouchMoveFromPointerMove = !1;
  }
  function y() {
    k !== void 0 && clearTimeout(k), e.touchEventsData.preventTouchMoveFromPointerMove = !0, k = setTimeout(() => {
      e.destroyed || _();
    });
  }
  function M(O) {
    const R = e.device;
    if (l.isTouched)
      return;
    const D = T.length > 0 ? T[0] : O;
    l.touchesStart.x = D.pageX, l.touchesStart.y = D.pageY, o.imageEl && (R.android && O.cancelable && O.preventDefault(), l.isTouched = !0);
  }
  function x(O) {
    const D = O.pointerType === "mouse" && n().panOnMouseMove;
    if (!b(O) || !L(O))
      return;
    const B = e.zoom;
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
    l.isMoved || (l.width = o.imageEl.offsetWidth || o.imageEl.clientWidth, l.height = o.imageEl.offsetHeight || o.imageEl.clientHeight, l.startX = Ke(o.imageWrapEl, "x") || 0, l.startY = Ke(o.imageWrapEl, "y") || 0, o.slideWidth = o.slideEl.offsetWidth, o.slideHeight = o.slideEl.offsetHeight, o.imageWrapEl.style.transitionDuration = "0ms");
    const K = l.width * B.scale, ie = l.height * B.scale;
    l.minX = Math.min(o.slideWidth / 2 - K / 2, 0), l.maxX = -l.minX, l.minY = Math.min(o.slideHeight / 2 - ie / 2, 0), l.maxY = -l.minY, l.touchesCurrent.x = T.length > 0 ? T[0].pageX : O.pageX, l.touchesCurrent.y = T.length > 0 ? T[0].pageY : O.pageY, Math.max(Math.abs(l.touchesCurrent.x - (l.touchesStart.x ?? 0)), Math.abs(l.touchesCurrent.y - (l.touchesStart.y ?? 0))) > 5 && (e.allowClick = !1);
    const U = l.startX ?? 0, J = l.startY ?? 0;
    if (!l.isMoved && !u) {
      if (e.isHorizontal() && (Math.floor(l.minX) === Math.floor(U) && l.touchesCurrent.x < (l.touchesStart.x ?? 0) || Math.floor(l.maxX) === Math.floor(U) && l.touchesCurrent.x > (l.touchesStart.x ?? 0))) {
        l.isTouched = !1, _();
        return;
      }
      if (!e.isHorizontal() && (Math.floor(l.minY) === Math.floor(J) && l.touchesCurrent.y < (l.touchesStart.y ?? 0) || Math.floor(l.maxY) === Math.floor(J) && l.touchesCurrent.y > (l.touchesStart.y ?? 0))) {
        l.isTouched = !1, _();
        return;
      }
    }
    O.cancelable && O.preventDefault(), O.stopPropagation(), y(), l.isMoved = !0;
    const Z = (B.scale - i) / (o.maxRatio - n().minRatio), { originX: ee, originY: oe } = o;
    l.currentX = l.touchesCurrent.x - (l.touchesStart.x ?? 0) + U + Z * (l.width - ee * 2), l.currentY = l.touchesCurrent.y - (l.touchesStart.y ?? 0) + J + Z * (l.height - oe * 2), l.currentX < l.minX && (l.currentX = l.minX + 1 - (l.minX - l.currentX + 1) ** 0.8), l.currentX > l.maxX && (l.currentX = l.maxX - 1 + (l.currentX - l.maxX + 1) ** 0.8), l.currentY < l.minY && (l.currentY = l.minY + 1 - (l.minY - l.currentY + 1) ** 0.8), l.currentY > l.maxY && (l.currentY = l.maxY - 1 + (l.currentY - l.maxY + 1) ** 0.8), g.prevPositionX || (g.prevPositionX = l.touchesCurrent.x), g.prevPositionY || (g.prevPositionY = l.touchesCurrent.y), g.prevTime || (g.prevTime = Date.now()), g.x = (l.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2, g.y = (l.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2, Math.abs(l.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0), Math.abs(l.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0), g.prevPositionX = l.touchesCurrent.x, g.prevPositionY = l.touchesCurrent.y, g.prevTime = Date.now(), o.imageWrapEl.style.transform = `translate3d(${l.currentX}px, ${l.currentY}px,0)`;
  }
  function I() {
    const O = e.zoom;
    if (T.length = 0, !o.imageEl)
      return;
    if (!l.isTouched || !l.isMoved) {
      l.isTouched = !1, l.isMoved = !1;
      return;
    }
    l.isTouched = !1, l.isMoved = !1;
    let R = 300, D = 300;
    const B = g.x ?? 0, K = g.y ?? 0, ie = B * R, Y = l.currentX + ie, U = K * D, J = l.currentY + U;
    B !== 0 && (R = Math.abs((Y - l.currentX) / B)), K !== 0 && (D = Math.abs((J - l.currentY) / K));
    const Z = Math.max(R, D);
    l.currentX = Y, l.currentY = J;
    const ee = l.width * O.scale, oe = l.height * O.scale;
    l.minX = Math.min(o.slideWidth / 2 - ee / 2, 0), l.maxX = -l.minX, l.minY = Math.min(o.slideHeight / 2 - oe / 2, 0), l.maxY = -l.minY, l.currentX = Math.max(Math.min(l.currentX, l.maxX), l.minX), l.currentY = Math.max(Math.min(l.currentY, l.maxY), l.minY), o.imageWrapEl.style.transitionDuration = `${Z}ms`, o.imageWrapEl.style.transform = `translate3d(${l.currentX}px, ${l.currentY}px,0)`;
  }
  function $() {
    const O = e.zoom;
    o.slideEl && e.activeIndex !== e.slides.indexOf(o.slideEl) && (o.imageEl && (o.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), o.imageWrapEl && (o.imageWrapEl.style.transform = "translate3d(0,0,0)"), o.slideEl.classList.remove(`${n().zoomedSlideClass}`), O.scale = 1, i = 1, o.slideEl = void 0, o.imageEl = void 0, o.imageWrapEl = void 0, o.originX = 0, o.originY = 0);
  }
  function F(O) {
    if (i <= 1 || !o.imageWrapEl || !b(O) || !L(O))
      return;
    const R = window.getComputedStyle(o.imageWrapEl).transform, D = new window.DOMMatrix(R);
    if (!c) {
      c = !0, r.x = O.clientX, r.y = O.clientY, l.startX = D.e, l.startY = D.f, l.width = o.imageEl.offsetWidth || o.imageEl.clientWidth, l.height = o.imageEl.offsetHeight || o.imageEl.clientHeight, o.slideWidth = o.slideEl.offsetWidth, o.slideHeight = o.slideEl.offsetHeight;
      return;
    }
    const B = (O.clientX - r.x) * p, K = (O.clientY - r.y) * p, ie = l.width * i, Y = l.height * i, U = o.slideWidth, J = o.slideHeight, Z = Math.min(U / 2 - ie / 2, 0), ee = -Z, oe = Math.min(J / 2 - Y / 2, 0), Pe = -oe, ge = Math.max(Math.min(l.startX + B, ee), Z), Te = Math.max(Math.min(l.startY + K, Pe), oe);
    o.imageWrapEl.style.transitionDuration = "0ms", o.imageWrapEl.style.transform = `translate3d(${ge}px, ${Te}px, 0)`, r.x = O.clientX, r.y = O.clientY, l.startX = ge, l.startY = Te, l.currentX = ge, l.currentY = Te;
  }
  function j(O) {
    const R = e.zoom, D = n();
    if (!o.slideEl) {
      if (O && typeof O != "number" && "target" in O && O.target && (o.slideEl = O.target.closest(`.${e.params.slideClass}, swiper-slide`) ?? void 0), !o.slideEl) {
        const nt = e.params.virtual;
        nt && nt.enabled && e.virtual ? o.slideEl = Q(e.slidesEl, `.${e.params.slideActiveClass}`)[0] ?? void 0 : o.slideEl = e.slides[e.activeIndex];
      }
      let Ee = o.slideEl?.querySelector(`.${D.containerClass}`) ?? null;
      Ee && (Ee = Ee.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0] ?? null), o.imageEl = Ee ?? void 0, Ee ? o.imageWrapEl = me(Ee, `.${D.containerClass}`)[0] ?? void 0 : o.imageWrapEl = void 0;
    }
    if (!o.imageEl || !o.imageWrapEl || !o.slideEl)
      return;
    o.maxRatio = h(), e.params.cssMode && (e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.touchAction = "none"), o.slideEl.classList.add(`${D.zoomedSlideClass}`);
    let B, K, ie, Y, U, J, Z, ee, oe, Pe, ge, Te, Re, we, Ge, Be, He, Ve;
    const $t = O && typeof O != "number";
    typeof l.touchesStart.x > "u" && $t ? (B = O.pageX, K = O.pageY) : (B = l.touchesStart.x, K = l.touchesStart.y);
    const Fe = i, ve = typeof O == "number" ? O : null;
    i === 1 && ve && (B = void 0, K = void 0, l.touchesStart.x = void 0, l.touchesStart.y = void 0);
    const at = h();
    R.scale = ve || at, i = ve || at, O && !(i === 1 && ve) ? (He = o.slideEl.offsetWidth, Ve = o.slideEl.offsetHeight, ie = ze(o.slideEl).left + window.scrollX, Y = ze(o.slideEl).top + window.scrollY, U = ie + He / 2 - (B ?? 0), J = Y + Ve / 2 - (K ?? 0), oe = o.imageEl.offsetWidth || o.imageEl.clientWidth, Pe = o.imageEl.offsetHeight || o.imageEl.clientHeight, ge = oe * R.scale, Te = Pe * R.scale, Re = Math.min(He / 2 - ge / 2, 0), we = Math.min(Ve / 2 - Te / 2, 0), Ge = -Re, Be = -we, Fe > 0 && ve && typeof l.currentX == "number" && typeof l.currentY == "number" ? (Z = l.currentX * R.scale / Fe, ee = l.currentY * R.scale / Fe) : (Z = U * R.scale, ee = J * R.scale), Z < Re && (Z = Re), Z > Ge && (Z = Ge), ee < we && (ee = we), ee > Be && (ee = Be)) : (Z = 0, ee = 0), ve && R.scale === 1 && (o.originX = 0, o.originY = 0), l.currentX = Z, l.currentY = ee, o.imageWrapEl.style.transitionDuration = "300ms", o.imageWrapEl.style.transform = `translate3d(${Z}px, ${ee}px,0)`, o.imageEl.style.transitionDuration = "300ms", o.imageEl.style.transform = `translate3d(0,0,0) scale(${R.scale})`;
  }
  function P() {
    const O = e.zoom, R = n();
    if (!o.slideEl) {
      const D = e.params.virtual;
      D && D.enabled && e.virtual ? o.slideEl = Q(e.slidesEl, `.${e.params.slideActiveClass}`)[0] ?? void 0 : o.slideEl = e.slides[e.activeIndex];
      let B = o.slideEl?.querySelector(`.${R.containerClass}`) ?? null;
      B && (B = B.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0] ?? null), o.imageEl = B ?? void 0, B ? o.imageWrapEl = me(B, `.${R.containerClass}`)[0] ?? void 0 : o.imageWrapEl = void 0;
    }
    !o.imageEl || !o.imageWrapEl || !o.slideEl || (o.maxRatio = h(), e.params.cssMode && (e.wrapperEl.style.overflow = "", e.wrapperEl.style.touchAction = ""), O.scale = 1, i = 1, l.currentX = void 0, l.currentY = void 0, l.touchesStart.x = void 0, l.touchesStart.y = void 0, o.imageWrapEl.style.transitionDuration = "300ms", o.imageWrapEl.style.transform = "translate3d(0,0,0)", o.imageEl.style.transitionDuration = "300ms", o.imageEl.style.transform = "translate3d(0,0,0) scale(1)", o.slideEl.classList.remove(`${R.zoomedSlideClass}`), o.slideEl = void 0, o.originX = 0, o.originY = 0, R.panOnMouseMove && (r = { x: 0, y: 0 }, c && (c = !1, l.startX = 0, l.startY = 0)));
  }
  function z(O) {
    const R = e.zoom;
    R.scale && R.scale !== 1 ? P() : j(O);
  }
  function G() {
    const O = e.params.passiveListeners ? { passive: !0, capture: !1 } : !1, R = e.params.passiveListeners ? { passive: !1, capture: !0 } : !0;
    return { passiveListener: O, activeListenerWithCapture: R };
  }
  function V() {
    const O = e.zoom;
    if (O.enabled)
      return;
    O.enabled = !0;
    const { passiveListener: R, activeListenerWithCapture: D } = G();
    e.wrapperEl.addEventListener("pointerdown", A, R), e.wrapperEl.addEventListener("pointermove", w, D), ["pointerup", "pointercancel", "pointerout"].forEach((B) => {
      e.wrapperEl.addEventListener(B, C, R);
    }), e.wrapperEl.addEventListener("pointermove", x, D);
  }
  function q() {
    const O = e.zoom;
    if (!O.enabled)
      return;
    O.enabled = !1;
    const { passiveListener: R, activeListenerWithCapture: D } = G();
    e.wrapperEl.removeEventListener("pointerdown", A, R), e.wrapperEl.removeEventListener("pointermove", w, D), ["pointerup", "pointercancel", "pointerout"].forEach((B) => {
      e.wrapperEl.removeEventListener(B, C, R);
    }), e.wrapperEl.removeEventListener("pointermove", x, D);
  }
  s("init", () => {
    n().enabled && V();
  }), s("destroy", () => {
    q();
  }), s("touchStart", (O, R) => {
    e.zoom.enabled && M(R);
  }), s("touchEnd", () => {
    e.zoom.enabled && I();
  }), s("doubleTap", (O, R) => {
    !e.animating && n().enabled && e.zoom.enabled && n().toggle && z(R);
  }), s("transitionEnd", () => {
    e.zoom.enabled && n().enabled && $();
  }), s("slideChange", () => {
    e.zoom.enabled && n().enabled && e.params.cssMode && $();
  }), Object.assign(e.zoom, {
    enable: V,
    disable: q,
    in: j,
    out: P,
    toggle: z
  });
};
class ft {
  x;
  y;
  lastIndex;
  binarySearch;
  constructor(t, s) {
    let a, n, i;
    this.binarySearch = (u, c) => {
      for (n = -1, a = u.length; a - n > 1; )
        i = a + n >> 1, u[i] <= c ? n = i : a = i;
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
const ma = ({ swiper: e, extendParams: t, on: s }) => {
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
    e.controller.spline = e.params.loop ? new ft(e.slidesGrid, r.slidesGrid) : new ft(e.snapGrid, r.snapGrid);
  }
  function i(r, p) {
    const d = e.controller.control;
    let f, T;
    const o = e.constructor;
    function l(g) {
      if (g.destroyed)
        return;
      const E = e.rtlTranslate ? -e.translate : e.translate, S = a();
      S.by === "slide" ? (n(g), T = -e.controller.spline.interpolate(-E)) : T = 0, (!T || S.by === "container") && (f = (g.maxTranslate() - g.minTranslate()) / (e.maxTranslate() - e.minTranslate()), (Number.isNaN(f) || !Number.isFinite(f)) && (f = 1), T = (E - e.minTranslate()) * f + g.minTranslate()), S.inverse && (T = g.maxTranslate() - T), g.updateProgress(T), g.setTranslate(T, e), g.updateActiveIndex(), g.updateSlidesClasses();
    }
    if (Array.isArray(d))
      for (let g = 0; g < d.length; g += 1) {
        const E = d[g];
        E && E !== p && E instanceof o && l(E);
      }
    else d instanceof o && p !== d && l(d);
  }
  function u(r, p) {
    const d = e.constructor, f = e.controller.control;
    function T(o) {
      o.destroyed || (o.setTransition(r, e), r !== 0 && (o.transitionStart(), o.params.autoHeight && Se(() => {
        o.updateAutoHeight();
      }), Ce(o.wrapperEl, () => {
        f && o.transitionEnd();
      })));
    }
    if (Array.isArray(f))
      for (let o = 0; o < f.length; o += 1) {
        const l = f[o];
        l && l !== p && l instanceof d && T(l);
      }
    else f instanceof d && p !== f && T(f);
  }
  function c() {
    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
  }
  s("beforeInit", () => {
    const r = a().control;
    if (typeof window < "u" && (typeof r == "string" || ke(r))) {
      (typeof r == "string" ? [...document.querySelectorAll(r)] : [r]).forEach((d) => {
        e.controller.control || (e.controller.control = []);
        const f = e.controller.control;
        if (d && d.swiper)
          f.push(d.swiper);
        else if (d) {
          const T = `${e.params.eventsPrefix}init`, o = (l) => {
            const g = l.detail;
            g && g[0] && f.push(g[0]), e.update(), d.removeEventListener(T, o);
          };
          d.addEventListener(T, o);
        }
      });
      return;
    }
    e.controller.control = r;
  }), s("update", () => {
    c();
  }), s("resize", () => {
    c();
  }), s("observerUpdate", () => {
    c();
  }), s("setTranslate", (r, p, d) => {
    e.controller.control && (!Array.isArray(e.controller.control) && e.controller.control.destroyed || e.controller.setTranslate(p, d));
  }), s("setTransition", (r, p, d) => {
    e.controller.control && (!Array.isArray(e.controller.control) && e.controller.control.destroyed || e.controller.setTransition(p, d));
  }), Object.assign(e.controller, {
    setTranslate: i,
    setTransition: u
  });
}, ut = (e) => !!e.virtual && !!e.params.virtual?.enabled, ha = ({ swiper: e, extendParams: t, on: s }) => {
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
  function c() {
    return e.params.a11y;
  }
  function r(P) {
    const z = a;
    !z || !P || re(z, P);
  }
  function p(P = 16) {
    const z = () => Math.round(16 * Math.random()).toString(16);
    return "x".repeat(P).replace(/x/g, z);
  }
  function d(P) {
    X(P).forEach((G) => {
      G.setAttribute("tabIndex", "0");
    });
  }
  function f(P) {
    X(P).forEach((G) => {
      G.setAttribute("tabIndex", "-1");
    });
  }
  function T(P, z) {
    X(P).forEach((V) => {
      V.setAttribute("role", z);
    });
  }
  function o(P, z) {
    X(P).forEach((V) => {
      V.setAttribute("aria-roledescription", z);
    });
  }
  function l(P, z) {
    X(P).forEach((V) => {
      V.setAttribute("aria-label", z);
    });
  }
  function g(P, z) {
    X(P).forEach((V) => {
      V.setAttribute("id", z);
    });
  }
  function E(P, z) {
    X(P).forEach((V) => {
      V.setAttribute("aria-live", z);
    });
  }
  function S(P) {
    X(P).forEach((G) => {
      G.setAttribute("aria-disabled", "true");
    });
  }
  function h(P) {
    X(P).forEach((G) => {
      G.removeAttribute("aria-disabled");
    });
  }
  function m(P) {
    if (P.keyCode !== 13 && P.keyCode !== 32)
      return;
    const z = c(), G = e.params.pagination, V = P.target;
    if (!(e.pagination && e.pagination.el && (V === e.pagination.el || e.pagination.el.contains(V)) && !V.matches(de(G?.bulletClass)))) {
      if (e.navigation && e.navigation.prevEl && e.navigation.nextEl) {
        const q = X(e.navigation.prevEl);
        X(e.navigation.nextEl).includes(V) && (e.isEnd && !e.params.loop || e.slideNext(), e.isEnd ? r(z.lastSlideMessage) : r(z.nextSlideMessage)), q.includes(V) && (e.isBeginning && !e.params.loop || e.slidePrev(), e.isBeginning ? r(z.firstSlideMessage) : r(z.prevSlideMessage));
      }
      e.pagination && V.matches(de(G?.bulletClass)) && V.click();
    }
  }
  function v() {
    if (e.params.loop || e.params.rewind || !e.navigation)
      return;
    const { nextEl: P, prevEl: z } = e.navigation;
    z && (e.isBeginning ? (S(z), f(z)) : (h(z), d(z))), P && (e.isEnd ? (S(P), f(P)) : (h(P), d(P)));
  }
  function b() {
    return !!(e.pagination && e.pagination.bullets && e.pagination.bullets.length);
  }
  function L() {
    const P = e.params.pagination;
    return b() && !!P?.clickable;
  }
  function A() {
    const P = c();
    if (!b())
      return;
    const z = e.params.pagination;
    e.pagination.bullets.forEach((G) => {
      z.clickable && (d(G), z.renderBullet || (T(G, "button"), l(G, P.paginationBulletMessage.replace(/\{\{index\}\}/, String((Le(G) ?? 0) + 1))))), G.matches(de(z.bulletActiveClass)) ? G.setAttribute("aria-current", "true") : G.removeAttribute("aria-current");
    });
  }
  const w = (P, z, G) => {
    d(P), P.tagName !== "BUTTON" && (T(P, "button"), P.addEventListener("keydown", m)), l(P, G);
  }, C = (P) => {
    i && i !== P.target && !i.contains(P.target) && (n = !0), e.a11y.clicked = !0;
  }, k = () => {
    n = !1, requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        e.destroyed || (e.a11y.clicked = !1);
      });
    });
  }, _ = (P) => {
    u = (/* @__PURE__ */ new Date()).getTime();
  };
  let y = [];
  const M = () => {
    y.forEach((P) => P.removeAttribute("inert")), y = [];
  }, x = (P) => {
    if (P.key !== "Tab" || !e.params.loop || e.destroyed)
      return;
    const G = P.target?.closest?.(`.${e.params.slideClass}, swiper-slide`);
    if (!G || !e.slides.includes(G))
      return;
    const V = parseInt(G.getAttribute("data-swiper-slide-index") || "", 10);
    if (Number.isNaN(V))
      return;
    const q = ut(e) ? e.virtual.slides.length : e.slides.length;
    (P.shiftKey ? V === 0 : V === q - 1) && (M(), e.slides.forEach((R) => {
      R === G || R.hasAttribute("inert") || (R.setAttribute("inert", ""), y.push(R));
    }), setTimeout(M, 0));
  }, I = (P) => {
    const z = c();
    if (e.a11y.clicked || !z.scrollOnFocus || (/* @__PURE__ */ new Date()).getTime() - u < 100)
      return;
    const V = P.target.closest(`.${e.params.slideClass}, swiper-slide`);
    if (!V || !e.slides.includes(V))
      return;
    i = V;
    const q = ut(e), O = (q ? parseInt(V.getAttribute("data-swiper-slide-index") || "0", 10) : e.slides.indexOf(V)) === e.activeIndex, R = e.params.watchSlidesProgress && e.visibleSlides && e.visibleSlides.includes(V);
    if (O || R)
      return;
    const D = P.sourceCapabilities;
    D && D.firesTouchEvents || (e.isHorizontal() ? e.el.scrollLeft = 0 : e.el.scrollTop = 0, requestAnimationFrame(() => {
      n || (e.params.loop ? e.slideToLoop(e.getSlideIndexWhenGrid(parseInt(V.getAttribute("data-swiper-slide-index") || "0", 10)), 0) : q ? e.slideTo(e.getSlideIndexWhenGrid(parseInt(V.getAttribute("data-swiper-slide-index") || "0", 10)), 0) : e.slideTo(e.getSlideIndexWhenGrid(e.slides.indexOf(V)), 0), n = !1);
    }));
  }, $ = () => {
    const P = c();
    P.itemRoleDescriptionMessage && o(e.slides, P.itemRoleDescriptionMessage), P.slideRole && T(e.slides, P.slideRole);
    const z = e.slides.length, G = P.slideLabelMessage;
    G && e.slides.forEach((V, q) => {
      const O = e.params.loop ? parseInt(V.getAttribute("data-swiper-slide-index") || "0", 10) : q, R = G.replace(/\{\{index\}\}/, String(O + 1)).replace(/\{\{slidesLength\}\}/, String(z));
      l(V, R);
    });
  }, F = () => {
    const P = c();
    a && e.el.append(a);
    const z = e.el;
    P.containerRoleDescriptionMessage && o(z, P.containerRoleDescriptionMessage), P.containerMessage && l(z, P.containerMessage), P.containerRole && T(z, P.containerRole);
    const G = e.wrapperEl, V = String(P.id || G.getAttribute("id") || `swiper-wrapper-${p(16)}`);
    if (g(G, V), P.wrapperLiveRegion) {
      const D = e.params.autoplay, B = e.params.autoplay && D?.enabled ? "off" : "polite";
      E(G, B);
    }
    $();
    const q = e.navigation ? e.navigation : { nextEl: void 0, prevEl: void 0 }, O = X(q.nextEl), R = X(q.prevEl);
    O && O.forEach((D) => w(D, V, P.nextSlideMessage)), R && R.forEach((D) => w(D, V, P.prevSlideMessage)), L() && X(e.pagination.el).forEach((B) => {
      B.addEventListener("keydown", m);
    }), document.addEventListener("visibilitychange", _), e.el.addEventListener("focus", I, !0), e.el.addEventListener("keydown", x, !0), e.el.addEventListener("pointerdown", C, !0), e.el.addEventListener("pointerup", k, !0);
  };
  function j() {
    a && a.remove();
    const P = e.navigation ? e.navigation : { nextEl: void 0, prevEl: void 0 }, z = X(P.nextEl), G = X(P.prevEl);
    z && z.forEach((V) => V.removeEventListener("keydown", m)), G && G.forEach((V) => V.removeEventListener("keydown", m)), L() && X(e.pagination.el).forEach((q) => {
      q.removeEventListener("keydown", m);
    }), document.removeEventListener("visibilitychange", _), e.el && typeof e.el != "string" && (e.el.removeEventListener("focus", I, !0), e.el.removeEventListener("keydown", x, !0), e.el.removeEventListener("pointerdown", C, !0), e.el.removeEventListener("pointerup", k, !0)), M();
  }
  s("beforeInit", () => {
    a = ne("span", c().notificationClass), a.setAttribute("aria-live", "assertive"), a.setAttribute("aria-atomic", "true");
  }), s("afterInit", () => {
    c().enabled && F();
  }), s("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
    c().enabled && $();
  }), s("fromEdge toEdge afterInit lock unlock", () => {
    c().enabled && v();
  }), s("paginationUpdate", () => {
    c().enabled && A();
  }), s("destroy", () => {
    c().enabled && j();
  });
}, ga = ({ swiper: e, extendParams: t, on: s }) => {
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
  const u = (o) => o.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""), c = (o) => {
    let l;
    o ? l = new URL(o) : l = window.location;
    const g = l.pathname.slice(1).split("/").filter((m) => m !== ""), E = g.length, S = g[E - 2], h = g[E - 1];
    return { key: S, value: h };
  }, r = (o, l) => {
    const g = i();
    if (!a || !g.enabled)
      return;
    let E;
    e.params.url ? E = new URL(e.params.url) : E = window.location;
    const S = !!e.params.virtual?.enabled, h = e.virtual && S ? e.slidesEl.querySelector(`[data-swiper-slide-index="${l}"]`) : e.slides[l];
    if (!h)
      return;
    let m = u(h.getAttribute("data-history") || "");
    const v = g.root;
    v.length > 0 ? m = `${v[v.length - 1] === "/" ? v.slice(0, v.length - 1) : v}/${o ? `${o}/` : ""}${m}` : E.pathname.includes(o || "") || (m = `${o ? `${o}/` : ""}${m}`), g.keepQuery && (m += E.search);
    const b = window.history.state;
    b && b.value === m || (g.replaceState ? window.history.replaceState({ value: m }, "", m) : window.history.pushState({ value: m }, "", m));
  }, p = (o, l, g) => {
    if (l)
      for (let E = 0, S = e.slides.length; E < S; E += 1) {
        const h = e.slides[E];
        if (u(h.getAttribute("data-history") || "") === l) {
          const v = e.getSlideIndex(h);
          e.slideTo(v, o, g);
        }
      }
    else
      e.slideTo(0, o, g);
  }, d = () => {
    n = c(e.params.url), p(e.params.speed, n.value, !1);
  }, f = () => {
    const o = e.params.history;
    if (o) {
      if (!window.history || !window.history.pushState) {
        o.enabled = !1;
        const l = e.params.hashNavigation;
        l && (l.enabled = !0);
        return;
      }
      if (a = !0, n = c(e.params.url), !n.key && !n.value) {
        o.replaceState || window.addEventListener("popstate", d);
        return;
      }
      p(0, n.value, e.params.runCallbacksOnInit), o.replaceState || window.addEventListener("popstate", d);
    }
  }, T = () => {
    i().replaceState || window.removeEventListener("popstate", d);
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
}, je = (e) => !!e.virtual && !!e.params.virtual?.enabled, Ta = ({ swiper: e, extendParams: t, emit: s, on: a }) => {
  let n = !1;
  t({
    hashNavigation: {
      enabled: !1,
      replaceState: !1,
      watchState: !1,
      getSlideIndex(d, f) {
        if (je(e)) {
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
    const d = document.location.hash.replace("#", ""), f = je(e) ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex], T = f ? f.getAttribute("data-hash") : "";
    if (d !== T) {
      const o = i().getSlideIndex(e, d);
      if (typeof o > "u" || Number.isNaN(o))
        return;
      e.slideTo(o);
    }
  }, c = () => {
    const d = i();
    if (!n || !d.enabled)
      return;
    const f = je(e) ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex], T = f ? f.getAttribute("data-hash") || f.getAttribute("data-history") : "";
    d.replaceState && window.history && window.history.replaceState ? (window.history.replaceState(null, "", `#${T}` || ""), s("hashSet")) : (document.location.hash = T || "", s("hashSet"));
  }, r = () => {
    const d = i(), f = e.params.history;
    if (!d.enabled || f && f.enabled)
      return;
    n = !0;
    const T = document.location.hash.replace("#", "");
    if (T) {
      const l = d.getSlideIndex(e, T);
      e.slideTo(l || 0, 0, e.params.runCallbacksOnInit, !0);
    }
    d.watchState && window.addEventListener("hashchange", u);
  }, p = () => {
    i().watchState && window.removeEventListener("hashchange", u);
  };
  a("init", () => {
    i().enabled && r();
  }), a("destroy", () => {
    i().enabled && p();
  }), a("transitionEnd _freeModeNoMomentumRelease", () => {
    n && c();
  }), a("slideChange", () => {
    n && e.params.cssMode && c();
  });
}, va = ({ swiper: e, extendParams: t, on: s, emit: a, params: n }) => {
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
  let c, r, p = u, d = u, f = 0, T = (/* @__PURE__ */ new Date()).getTime(), o = !1, l = !1, g = !1, E, S = !1, h = !1;
  function m(P) {
    if (!e || e.destroyed || !e.wrapperEl || P.target !== e.wrapperEl)
      return;
    e.wrapperEl.removeEventListener("transitionend", m);
    const z = P.detail;
    h || z && z.bySwiperTouchMove || _();
  }
  const v = () => {
    if (e.destroyed || !e.autoplay.running)
      return;
    e.autoplay.paused ? o = !0 : o && (d = f, o = !1);
    const P = e.autoplay.paused ? f : T + d - (/* @__PURE__ */ new Date()).getTime();
    e.autoplay.timeLeft = P, a("autoplayTimeLeft", P, P / p), r = requestAnimationFrame(() => {
      v();
    });
  }, b = () => {
    let P;
    const z = !!e.params.virtual?.enabled;
    if (e.virtual && z ? P = e.slides.find((V) => V.classList.contains("swiper-slide-active")) : P = e.slides[e.activeIndex], !P)
      return;
    const G = P.getAttribute("data-swiper-autoplay");
    if (G != null)
      return parseInt(G, 10);
  }, L = () => {
    let P = i().delay;
    const z = b();
    return typeof z == "number" && !Number.isNaN(z) && z > 0 && (P = z), P;
  }, A = (P) => {
    if (e.destroyed || !e.autoplay.running)
      return 0;
    r !== void 0 && cancelAnimationFrame(r), v();
    let z = P;
    typeof z > "u" && (z = L(), p = z, d = z), f = z;
    const G = e.params.speed, V = () => {
      if (!e || e.destroyed)
        return;
      const q = i();
      q.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(G, !0, !0), a("autoplay")) : q.stopOnLastSlide || (e.slideTo(e.slides.length - 1, G, !0, !0), a("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(G, !0, !0), a("autoplay")) : q.stopOnLastSlide || (e.slideTo(0, G, !0, !0), a("autoplay")), e.params.cssMode && (T = (/* @__PURE__ */ new Date()).getTime(), requestAnimationFrame(() => {
        A();
      }));
    };
    return z > 0 ? (c !== void 0 && clearTimeout(c), c = setTimeout(() => {
      V();
    }, z)) : requestAnimationFrame(() => {
      V();
    }), z;
  }, w = () => e.destroyed ? !1 : (T = (/* @__PURE__ */ new Date()).getTime(), e.autoplay.running = !0, A(), a("autoplayStart"), !0), C = () => e.destroyed ? !1 : (e.autoplay.running = !1, c !== void 0 && clearTimeout(c), r !== void 0 && cancelAnimationFrame(r), a("autoplayStop"), !0), k = (P, z) => {
    if (e.destroyed || !e.autoplay.running)
      return;
    c !== void 0 && clearTimeout(c), P || (S = !0);
    const G = () => {
      a("autoplayPause"), i().waitForTransition ? e.wrapperEl.addEventListener("transitionend", m) : _();
    };
    if (e.autoplay.paused = !0, z) {
      G();
      return;
    }
    f = (f || i().delay) - ((/* @__PURE__ */ new Date()).getTime() - T), !(e.isEnd && f < 0 && !e.params.loop) && (f < 0 && (f = 0), G());
  }, _ = () => {
    e.isEnd && f < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (T = (/* @__PURE__ */ new Date()).getTime(), S ? (S = !1, A(f)) : A(), e.autoplay.paused = !1, a("autoplayResume"));
  }, y = () => {
    e.destroyed || !e.autoplay.running || (document.visibilityState === "hidden" && (S = !0, k(!0)), document.visibilityState === "visible" && _());
  }, M = (P) => {
    P.pointerType === "mouse" && (S = !0, h = !0, !(e.animating || e.autoplay.paused) && k(!0));
  }, x = (P) => {
    P.pointerType === "mouse" && (h = !1, e.autoplay.paused && _());
  }, I = () => {
    i().pauseOnMouseEnter && (e.el.addEventListener("pointerenter", M), e.el.addEventListener("pointerleave", x));
  }, $ = () => {
    e.el && typeof e.el != "string" && (e.el.removeEventListener("pointerenter", M), e.el.removeEventListener("pointerleave", x));
  }, F = () => {
    document.addEventListener("visibilitychange", y);
  }, j = () => {
    document.removeEventListener("visibilitychange", y);
  };
  s("init", () => {
    i().enabled && (I(), F(), w());
  }), s("destroy", () => {
    $(), j(), e.autoplay.running && C();
  }), s("_freeModeStaticRelease", () => {
    (g || S) && _();
  }), s("_freeModeNoMomentumRelease", () => {
    i().disableOnInteraction ? C() : k(!0, !0);
  }), s("beforeTransitionStart", (P, z, G) => {
    e.destroyed || !e.autoplay.running || (G || !i().disableOnInteraction ? k(!0, !0) : C());
  }), s("sliderFirstMove", () => {
    if (!(e.destroyed || !e.autoplay.running)) {
      if (i().disableOnInteraction) {
        C();
        return;
      }
      l = !0, g = !1, S = !1, E = setTimeout(() => {
        S = !0, g = !0, k(!0);
      }, 200);
    }
  }), s("touchEnd", () => {
    if (!(e.destroyed || !e.autoplay.running || !l)) {
      if (E !== void 0 && clearTimeout(E), c !== void 0 && clearTimeout(c), i().disableOnInteraction) {
        g = !1, l = !1;
        return;
      }
      g && e.params.cssMode && _(), g = !1, l = !1;
    }
  }), s("slideChange", () => {
    e.destroyed || !e.autoplay.running || e.autoplay.paused && (f = L(), p = L());
  }), Object.assign(e.autoplay, {
    start: w,
    stop: C,
    pause: k,
    resume: _
  });
}, Ea = ({ swiper: e, extendParams: t, on: s }) => {
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
  function c() {
    const f = e.thumbs.swiper;
    if (!f || f.destroyed)
      return;
    const T = f.clickedIndex, o = f.clickedSlide, l = i();
    if (o && o.classList.contains(l.slideThumbActiveClass) || typeof T > "u" || T === null)
      return;
    let g;
    if (f.params.loop) {
      const E = f.clickedSlide?.getAttribute("data-swiper-slide-index");
      g = E == null ? T : parseInt(E, 10);
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
    } else if (xe(f.swiper)) {
      const l = Object.assign({}, f.swiper);
      Object.assign(l, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), e.thumbs.swiper = new T(l), n = !0;
    }
    const o = e.thumbs.swiper;
    return o ? (o.el.classList.add(f.thumbsContainerClass), o.on("tap", c), u() && o.on("virtualUpdate", () => {
      p(!1, { autoScroll: !1 });
    }), !0) : !1;
  }
  function p(f, T) {
    const o = e.thumbs.swiper;
    if (!o || o.destroyed)
      return;
    let l = 1;
    const g = i(), E = g.slideThumbActiveClass, S = e.params.slidesPerView;
    if (typeof S == "number" && S > 1 && !e.params.centeredSlides && (l = S), g.multipleActiveThumbs || (l = 1), l = Math.floor(l), o.slides.forEach((h) => h.classList.remove(E)), o.params.loop || u())
      for (let h = 0; h < l; h += 1)
        Q(o.slidesEl, `[data-swiper-slide-index="${e.realIndex + h}"]`).forEach((m) => {
          m.classList.add(E);
        });
    else
      for (let h = 0; h < l; h += 1) {
        const m = o.slides[e.realIndex + h];
        m && m.classList.add(E);
      }
    (T?.autoScroll ?? !0) && d(f ? 0 : void 0);
  }
  function d(f) {
    const T = e.thumbs.swiper;
    if (!T || T.destroyed)
      return;
    const o = T.params.slidesPerView, l = o === "auto" ? T.slidesPerViewDynamic() : o ?? 1, g = i().autoScrollOffset, E = g && !T.params.loop;
    if (e.realIndex !== T.realIndex || E) {
      const S = T.activeIndex;
      let h, m;
      if (T.params.loop) {
        const v = T.slides.find((b) => b.getAttribute("data-swiper-slide-index") === `${e.realIndex}`);
        h = v ? T.slides.indexOf(v) : -1, m = e.activeIndex > e.previousIndex ? "next" : "prev";
      } else
        h = e.realIndex, m = h > (e.previousRealIndex ?? 0) ? "next" : "prev";
      E && (h += m === "next" ? g : -1 * g), T.visibleSlidesIndexes && T.visibleSlidesIndexes.indexOf(h) < 0 && (T.params.centeredSlides ? h > S ? h = h - Math.floor(l / 2) + 1 : h = h + Math.floor(l / 2) - 1 : h > S && T.params.slidesPerGroup, T.slideTo(h, f));
    }
  }
  s("beforeInit", () => {
    const f = e.params.thumbs;
    if (!(!f || !f.swiper))
      if (typeof f.swiper == "string" || ke(f.swiper)) {
        const T = () => {
          const l = typeof f.swiper == "string" ? document.querySelector(f.swiper) : f.swiper;
          if (l && l.swiper)
            f.swiper = l.swiper, r(), p(!0);
          else if (l) {
            const g = `${e.params.eventsPrefix}init`, E = (S) => {
              const h = S.detail;
              f.swiper = h[0], l.removeEventListener(g, E), r(), p(!0), f.swiper.update(), e.update();
            };
            l.addEventListener(g, E);
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
}, Sa = ({ swiper: e, extendParams: t, emit: s, once: a }) => {
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
  function c({ currentPos: r }) {
    if (e.params.cssMode)
      return;
    const { wrapperEl: p, rtlTranslate: d, snapGrid: f, touchEventsData: T } = e, o = e.params, l = n(), g = ae(), E = g - (T.touchStartTime ?? g);
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
        const w = T.velocities.pop(), C = T.velocities.pop(), k = w.position - C.position, _ = w.time - C.time;
        e.velocity = k / _, e.velocity /= 2, Math.abs(e.velocity) < l.minimumVelocity && (e.velocity = 0), (_ > 150 || ae() - w.time > 300) && (e.velocity = 0);
      } else
        e.velocity = 0;
      e.velocity *= l.momentumVelocityRatio, T.velocities.length = 0;
      let S = 1e3 * l.momentumRatio;
      const h = e.velocity * S;
      let m = e.translate + h;
      d && (m = -m);
      let v = !1, b;
      const L = Math.abs(e.velocity) * 20 * l.momentumBounceRatio;
      let A = !1;
      if (m < e.maxTranslate())
        l.momentumBounce ? (m + e.maxTranslate() < -L && (m = e.maxTranslate() - L), b = e.maxTranslate(), v = !0, T.allowMomentumBounce = !0) : m = e.maxTranslate(), o.loop && o.centeredSlides && (A = !0);
      else if (m > e.minTranslate())
        l.momentumBounce ? (m - e.minTranslate() > L && (m = e.minTranslate() + L), b = e.minTranslate(), v = !0, T.allowMomentumBounce = !0) : m = e.minTranslate(), o.loop && o.centeredSlides && (A = !0);
      else if (l.sticky) {
        let w = 0;
        for (let C = 0; C < f.length; C += 1)
          if (f[C] > -m) {
            w = C;
            break;
          }
        Math.abs(f[w] - m) < Math.abs((f[w - 1] ?? f[w]) - m) || e.swipeDirection === "next" ? m = f[w] : m = f[w - 1], m = -m;
      }
      if (A && a("transitionEnd", () => {
        e.loopFix();
      }), e.velocity !== 0) {
        if (d ? S = Math.abs((-m - e.translate) / e.velocity) : S = Math.abs((m - e.translate) / e.velocity), l.sticky) {
          const w = Math.abs((d ? -m : m) - e.translate), C = e.slidesSizesGrid[e.activeIndex], k = o.speed;
          w < C ? S = k : w < 2 * C ? S = k * 1.5 : S = k * 2.5;
        }
      } else if (l.sticky) {
        e.slideToClosest();
        return;
      }
      l.momentumBounce && v && b !== void 0 ? (e.updateProgress(b), e.setTransition(S), e.setTranslate(m), e.transitionStart(!0, e.swipeDirection), e.animating = !0, Ce(p, () => {
        !e || e.destroyed || !T.allowMomentumBounce || (s("momentumBounce"), e.setTransition(o.speed), setTimeout(() => {
          e.setTranslate(b), Ce(p, () => {
            !e || e.destroyed || e.transitionEnd();
          });
        }, 0));
      })) : e.velocity ? (s("_freeModeNoMomentumRelease"), e.updateProgress(m), e.setTransition(S), e.setTranslate(m), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, Ce(p, () => {
        !e || e.destroyed || e.transitionEnd();
      }))) : e.updateProgress(m), e.updateActiveIndex(), e.updateSlidesClasses();
    } else if (l.sticky) {
      e.slideToClosest();
      return;
    } else
      s("_freeModeNoMomentumRelease");
    (!l.momentum || E >= o.longSwipesMs) && (s("_freeModeStaticRelease"), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses());
  }
  e.freeMode = {
    onTouchStart: i,
    onTouchMove: u,
    onTouchEnd: c
  };
}, ba = ({ swiper: e, extendParams: t, on: s }) => {
  t({
    grid: {
      rows: 1,
      fill: "column"
    }
  });
  function a() {
    return e.params.grid;
  }
  let n, i, u, c;
  const r = () => {
    let E = e.params.spaceBetween ?? 0;
    return typeof E == "string" && E.indexOf("%") >= 0 ? E = parseFloat(E.replace("%", "")) / 100 * e.size : typeof E == "string" && (E = parseFloat(E)), E;
  }, p = () => {
    const E = e.params.virtual;
    return !!e.virtual && typeof E == "object" && E !== null && !!E.enabled;
  }, d = (E) => {
    const { slidesPerView: S } = e.params, { rows: h, fill: m } = a(), v = p() ? e.virtual.slides.length : E.length;
    u = Math.floor(v / h), Math.floor(v / h) === v / h ? n = v : n = Math.ceil(v / h) * h, S !== "auto" && m === "row" && (n = Math.max(n, Math.floor(S ?? 1) * h)), i = n / h;
  }, f = () => {
    e.slides && e.slides.forEach((E) => {
      E.swiperSlideGridSet && (E.style.height = "", E.style.setProperty(e.getDirectionLabel("margin-top"), ""));
    });
  }, T = (E, S, h) => {
    const { slidesPerGroup: m } = e.params, v = r(), { rows: b, fill: L } = a(), A = p() ? e.virtual.slides.length : h.length;
    let w, C, k;
    if (L === "row" && (m ?? 1) > 1) {
      const y = m ?? 1, M = Math.floor(E / (y * b)), x = E - b * y * M, I = M === 0 ? y : Math.min(Math.ceil((A - M * b * y) / b), y);
      k = Math.floor(x / I), C = x - k * I + M * y, w = C + k * n / b, S.style.order = String(w);
    } else L === "column" ? (C = Math.floor(E / b), k = E - C * b, (C > u || C === u && k === b - 1) && (k += 1, k >= b && (k = 0, C += 1))) : (k = Math.floor(E / i), C = E - k * i);
    const _ = S;
    _.row = k, _.column = C, S.style.height = `calc((100% - ${(b - 1) * v}px) / ${b})`, S.style.setProperty(e.getDirectionLabel("margin-top"), k !== 0 && v ? `${v}px` : ""), _.swiperSlideGridSet = !0;
  }, o = (E, S) => {
    const { centeredSlides: h, roundLengths: m } = e.params, v = r(), { rows: b } = a();
    if (e.virtualSize = (E + v) * n, e.virtualSize = Math.ceil(e.virtualSize / b) - v, e.params.cssMode || e.wrapperEl.style.setProperty(e.getDirectionLabel("width"), `${e.virtualSize + v}px`), h) {
      const L = [];
      for (let A = 0; A < S.length; A += 1) {
        let w = S[A];
        m && (w = Math.floor(w)), S[A] < e.virtualSize + S[0] && L.push(w);
      }
      S.splice(0, S.length), S.push(...L);
    }
  }, l = () => {
    const E = e.params.grid;
    c = !!(E && (E.rows ?? 1) > 1);
  }, g = () => {
    const { params: E, el: S } = e, h = E.grid, m = !!(h && (h.rows ?? 1) > 1);
    c && !m ? (S.classList.remove(`${E.containerModifierClass}grid`, `${E.containerModifierClass}grid-column`), u = 1, e.emitContainerClasses()) : !c && m && (S.classList.add(`${E.containerModifierClass}grid`), h.fill === "column" && S.classList.add(`${E.containerModifierClass}grid-column`), e.emitContainerClasses()), c = m;
  };
  s("init", l), s("update", g), e.grid = {
    initSlides: d,
    unsetSlides: f,
    updateSlide: T,
    updateWrapperSize: o
  };
};
function ya(e, t) {
  const s = this, { params: a, activeIndex: n, slidesEl: i } = s;
  let u = n;
  a.loop && (u -= s.loopedSlides ?? 0, s.loopDestroy(), s.recalcSlides());
  const c = s.slides.length;
  if (e <= 0) {
    s.prependSlide(t);
    return;
  }
  if (e >= c) {
    s.appendSlide(t);
    return;
  }
  let r = u > e ? u + 1 : u;
  const p = [];
  for (let d = c - 1; d >= e; d -= 1) {
    const f = s.slides[d];
    f && (f.remove(), p.unshift(f));
  }
  if (Array.isArray(t)) {
    for (let d = 0; d < t.length; d += 1) {
      const f = t[d];
      f && i.append(f);
    }
    r = u > e ? u + t.length : u;
  } else
    i.append(t);
  for (let d = 0; d < p.length; d += 1)
    i.append(p[d]);
  s.recalcSlides(), a.loop && s.loopCreate(), (!a.observer || s.isElement) && s.update(), a.loop ? s.slideTo(r + (s.loopedSlides ?? 0), 0, !1) : s.slideTo(r, 0, !1);
}
function Aa(e) {
  const t = this, { params: s, slidesEl: a } = t;
  s.loop && t.loopDestroy();
  const n = (i) => {
    if (typeof i == "string") {
      const u = document.createElement("div");
      re(u, i);
      const c = u.children[0];
      c && a.append(c), re(u, "");
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
function _a(e) {
  const t = this, { params: s, activeIndex: a, slidesEl: n } = t;
  s.loop && t.loopDestroy();
  let i = a + 1;
  const u = (c) => {
    if (typeof c == "string") {
      const r = document.createElement("div");
      re(r, c);
      const p = r.children[0];
      p && n.prepend(p), re(r, "");
    } else
      n.prepend(c);
  };
  if (Array.isArray(e)) {
    for (let c = 0; c < e.length; c += 1) {
      const r = e[c];
      r && u(r);
    }
    i = a + e.length;
  } else
    u(e);
  t.recalcSlides(), s.loop && t.loopCreate(), (!s.observer || t.isElement) && t.update(), t.slideTo(i, 0, !1);
}
function xa() {
  const e = this, t = [];
  for (let s = 0; s < e.slides.length; s += 1)
    t.push(s);
  e.removeSlide(t);
}
function Ca(e) {
  const t = this, { params: s, activeIndex: a } = t;
  let n = a;
  s.loop && (n -= t.loopedSlides ?? 0, t.loopDestroy());
  let i = n;
  if (Array.isArray(e)) {
    for (let u = 0; u < e.length; u += 1) {
      const c = e[u];
      t.slides[c] && t.slides[c].remove(), c < i && (i -= 1);
    }
    i = Math.max(i, 0);
  } else {
    const u = e;
    t.slides[u] && t.slides[u].remove(), u < i && (i -= 1), i = Math.max(i, 0);
  }
  t.recalcSlides(), s.loop && t.loopCreate(), (!s.observer || t.isElement) && t.update(), s.loop ? t.slideTo(i + (t.loopedSlides ?? 0), 0, !1) : t.slideTo(i, 0, !1);
}
const La = ({ swiper: e }) => {
  Object.assign(e, {
    appendSlide: Aa.bind(e),
    prependSlide: _a.bind(e),
    addSlide: ya.bind(e),
    removeSlide: Ca.bind(e),
    removeAllSlides: xa.bind(e)
  });
};
function Ae(e) {
  const { effect: t, swiper: s, on: a, setTranslate: n, setTransition: i, overwriteParams: u, perspective: c, recreateShadows: r, getEffectParams: p } = e;
  a("beforeInit", () => {
    if (s.params.effect !== t)
      return;
    s.classNames.push(`${s.params.containerModifierClass}${t}`), c && c() && s.classNames.push(`${s.params.containerModifierClass}3d`);
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
  let d = !1;
  a("virtualUpdate", () => {
    s.params.effect === t && (s.slides.length || (d = !0), requestAnimationFrame(() => {
      d && s.slides && s.slides.length && (n(), d = !1);
    }));
  });
}
function Ie(e, t) {
  const s = he(t);
  return s !== t && (s.style.backfaceVisibility = "hidden", s.style.setProperty("-webkit-backface-visibility", "hidden")), s;
}
function Me({ swiper: e, duration: t, transformElements: s, allSlides: a }) {
  const { activeIndex: n } = e, i = (u) => {
    if (!u.parentElement)
      return e.slides.find((c) => c.shadowRoot && c.shadowRoot === u.parentNode);
    if (ke(u.parentElement))
      return u.parentElement;
  };
  if (e.params.virtualTranslate && t !== 0) {
    let u = !1, c;
    a ? c = s : c = s.filter((r) => {
      const p = r.classList.contains("swiper-slide-transform") ? i(r) : r;
      return !!p && e.getSlideIndex(p) === n;
    }), c.forEach((r) => {
      Ce(r, () => {
        if (u || !e || e.destroyed)
          return;
        u = !0, e.animating = !1;
        const p = new CustomEvent("transitionend", { bubbles: !0, cancelable: !0 });
        e.wrapperEl.dispatchEvent(p);
      });
    });
  }
}
const Ma = ({ swiper: e, extendParams: t, on: s }) => {
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
  Ae({
    effect: "fade",
    swiper: e,
    on: s,
    setTranslate: () => {
      const { slides: r } = e, p = n(), d = i(), f = d === "out-in" && a > 0, T = a;
      a = 0;
      const o = [], l = [];
      let g = !1;
      for (let E = 0; E < r.length; E += 1) {
        const S = r[E];
        let m = -(S.swiperSlideOffset ?? 0);
        e.params.virtualTranslate || (m -= e.translate);
        let v = 0;
        e.isHorizontal() || (v = m, m = 0);
        const b = S.progress ?? 0;
        let L;
        d === "cross-fade" ? L = Math.max(1 - Math.abs(b), 0) : d === "out-in" ? L = Math.max(1 - 2 * Math.abs(b), 0) : L = 1 + Math.min(Math.max(b, -1), 0);
        const A = Ie(p, S);
        if (f) {
          const w = parseFloat(A.style.opacity);
          L === 0 && w > 0 && (g = !0), L > 0 && l.push(A), o.push(A);
        }
        A.style.opacity = String(L), A.style.transform = `translate3d(${m}px, ${v}px, 0px)`;
      }
      f && (o.forEach((E) => {
        const S = g && l.includes(E);
        E.style.transitionDuration = `${T / 2}ms`, E.style.transitionDelay = S ? `${T / 2}ms` : "0ms";
      }), Me({
        swiper: e,
        duration: T,
        transformElements: l,
        allSlides: !0
      }));
    },
    setTransition: (r) => {
      const p = i(), d = e.slides.map((f) => he(f));
      if (d.forEach((f) => {
        f.style.transitionDuration = `${r}ms`, p === "out-in" && r === 0 && (f.style.transitionDelay = "");
      }), p === "out-in" && r > 0 && !e.params.cssMode) {
        a = r;
        return;
      }
      Me({ swiper: e, duration: r, transformElements: d, allSlides: !0 });
    },
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      spaceBetween: 0,
      virtualTranslate: !e.params.cssMode
    })
  });
}, Ia = ({ swiper: e, extendParams: t, on: s }) => {
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
  const n = (r, p, d) => {
    let f = d ? r.querySelector(".swiper-slide-shadow-left") : r.querySelector(".swiper-slide-shadow-top"), T = d ? r.querySelector(".swiper-slide-shadow-right") : r.querySelector(".swiper-slide-shadow-bottom");
    f || (f = ne("div", `swiper-slide-shadow-cube swiper-slide-shadow-${d ? "left" : "top"}`.split(" ")), r.append(f)), T || (T = ne("div", `swiper-slide-shadow-cube swiper-slide-shadow-${d ? "right" : "bottom"}`.split(" ")), r.append(T)), f && (f.style.opacity = String(Math.max(-p, 0))), T && (T.style.opacity = String(Math.max(p, 0)));
  };
  Ae({
    effect: "cube",
    swiper: e,
    on: s,
    setTranslate: () => {
      const { el: r, wrapperEl: p, slides: d, width: f, height: T, rtlTranslate: o, size: l } = e, g = $e(e), E = a(), S = e.isHorizontal(), h = !!(e.virtual && e.params.virtual?.enabled);
      let m = 0, v = null;
      E.shadow && (S ? (v = e.wrapperEl.querySelector(".swiper-cube-shadow"), v || (v = ne("div", "swiper-cube-shadow"), e.wrapperEl.append(v)), v.style.height = `${f}px`) : (v = r.querySelector(".swiper-cube-shadow"), v || (v = ne("div", "swiper-cube-shadow"), r.append(v))));
      for (let b = 0; b < d.length; b += 1) {
        const L = d[b];
        let A = b;
        h && (A = parseInt(L.getAttribute("data-swiper-slide-index") ?? "0", 10));
        let w = A * 90, C = Math.floor(w / 360);
        o && (w = -w, C = Math.floor(-w / 360));
        const k = Math.max(Math.min(L.progress ?? 0, 1), -1);
        let _ = 0, y = 0, M = 0;
        A % 4 === 0 ? (_ = -C * 4 * l, M = 0) : (A - 1) % 4 === 0 ? (_ = 0, M = -C * 4 * l) : (A - 2) % 4 === 0 ? (_ = l + C * 4 * l, M = l) : (A - 3) % 4 === 0 && (_ = -l, M = 3 * l + l * 4 * C), o && (_ = -_), S || (y = _, _ = 0);
        const x = `rotateX(${g(S ? 0 : -w)}deg) rotateY(${g(S ? w : 0)}deg) translate3d(${_}px, ${y}px, ${M}px)`;
        k <= 1 && k > -1 && (m = A * 90 + k * 90, o && (m = -A * 90 - k * 90)), L.style.transform = x, E.slideShadows && n(L, k, S);
      }
      if (p.style.transformOrigin = `50% 50% -${l / 2}px`, p.style.setProperty("-webkit-transform-origin", `50% 50% -${l / 2}px`), E.shadow && v)
        if (S)
          v.style.transform = `translate3d(0px, ${f / 2 + E.shadowOffset}px, ${-f / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${E.shadowScale})`;
        else {
          const b = Math.abs(m) - Math.floor(Math.abs(m) / 90) * 90, L = 1.5 - (Math.sin(b * 2 * Math.PI / 360) / 2 + Math.cos(b * 2 * Math.PI / 360) / 2), A = E.shadowScale, w = E.shadowScale / L, C = E.shadowOffset;
          v.style.transform = `scale3d(${A}, 1, ${w}) translate3d(0px, ${T / 2 + C}px, ${-T / 2 / w}px) rotateX(-89.99deg)`;
        }
      p.style.transform = `translate3d(0px,0,0px) rotateX(${g(e.isHorizontal() ? 0 : m)}deg) rotateY(${g(e.isHorizontal() ? -m : 0)}deg)`, p.style.setProperty("--swiper-cube-translate-z", "0px");
    },
    setTransition: (r) => {
      const { el: p, slides: d } = e;
      if (d.forEach((f) => {
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
        const d = Math.max(Math.min(p.progress ?? 0, 1), -1);
        n(p, d, r);
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
  const c = ne("div", a.split(" "));
  return n.append(c), c;
}
const Pa = ({ swiper: e, extendParams: t, on: s }) => {
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
    let d = e.isHorizontal() ? r.querySelector(".swiper-slide-shadow-left") : r.querySelector(".swiper-slide-shadow-top"), f = e.isHorizontal() ? r.querySelector(".swiper-slide-shadow-right") : r.querySelector(".swiper-slide-shadow-bottom");
    d || (d = be("flip", r, e.isHorizontal() ? "left" : "top")), f || (f = be("flip", r, e.isHorizontal() ? "right" : "bottom")), d && (d.style.opacity = String(Math.max(-p, 0))), f && (f.style.opacity = String(Math.max(p, 0)));
  };
  Ae({
    effect: "flip",
    swiper: e,
    on: s,
    setTranslate: () => {
      const { slides: r, rtlTranslate: p } = e, d = a(), f = $e(e);
      for (let T = 0; T < r.length; T += 1) {
        const o = r[T];
        let l = o.progress ?? 0;
        d.limitRotation && (l = Math.max(Math.min(l, 1), -1));
        const g = o.swiperSlideOffset ?? 0;
        let S = -180 * l, h = 0, m = e.params.cssMode ? -g - e.translate : -g, v = 0;
        e.isHorizontal() ? p && (S = -S) : (v = m, m = 0, h = -S, S = 0), o.style.zIndex = String(-Math.abs(Math.round(l)) + r.length), d.slideShadows && n(o, l);
        const b = `translate3d(${m}px, ${v}px, 0px) rotateX(${f(h)}deg) rotateY(${f(S)}deg)`, L = Ie(d, o);
        L.style.transform = b;
      }
    },
    setTransition: (r) => {
      const p = e.slides.map((d) => he(d));
      p.forEach((d) => {
        d.style.transitionDuration = `${r}ms`, d.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((f) => {
          f.style.transitionDuration = `${r}ms`;
        });
      }), Me({ swiper: e, duration: r, transformElements: p });
    },
    recreateShadows: () => {
      const r = a();
      e.slides.forEach((p) => {
        let d = p.progress ?? 0;
        r.limitRotation && (d = Math.max(Math.min(d, 1), -1)), n(p, d);
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
}, Ra = ({ swiper: e, extendParams: t, on: s }) => {
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
  Ae({
    effect: "coverflow",
    swiper: e,
    on: s,
    setTranslate: () => {
      const { width: u, height: c, slides: r, slidesSizesGrid: p } = e, d = a(), f = e.isHorizontal(), T = e.translate, o = f ? -T + u / 2 : -T + c / 2, l = f ? d.rotate : -d.rotate, g = d.depth, E = $e(e);
      for (let S = 0, h = r.length; S < h; S += 1) {
        const m = r[S], v = p[S], b = m.swiperSlideOffset ?? 0, L = (o - b - v / 2) / v, A = typeof d.modifier == "function" ? d.modifier(L) : L * d.modifier;
        let w = f ? l * A : 0, C = f ? 0 : l * A, k = -g * Math.abs(A), _ = typeof d.stretch == "string" && d.stretch.indexOf("%") !== -1 ? parseFloat(d.stretch) / 100 * v : d.stretch, y = f ? 0 : _ * A, M = f ? _ * A : 0, x = 1 - (1 - d.scale) * Math.abs(A);
        Math.abs(M) < 1e-3 && (M = 0), Math.abs(y) < 1e-3 && (y = 0), Math.abs(k) < 1e-3 && (k = 0), Math.abs(w) < 1e-3 && (w = 0), Math.abs(C) < 1e-3 && (C = 0), Math.abs(x) < 1e-3 && (x = 0);
        const I = `translate3d(${M}px,${y}px,${k}px)  rotateX(${E(C)}deg) rotateY(${E(w)}deg) scale(${x})`, $ = Ie(d, m);
        if ($.style.transform = I, m.style.zIndex = String(-Math.abs(Math.round(A)) + 1), d.slideShadows) {
          let F = f ? m.querySelector(".swiper-slide-shadow-left") : m.querySelector(".swiper-slide-shadow-top"), j = f ? m.querySelector(".swiper-slide-shadow-right") : m.querySelector(".swiper-slide-shadow-bottom");
          F || (F = be("coverflow", m, f ? "left" : "top")), j || (j = be("coverflow", m, f ? "right" : "bottom")), F && (F.style.opacity = String(A > 0 ? A : 0)), j && (j.style.opacity = String(-A > 0 ? -A : 0));
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
}, wa = ({ swiper: e, extendParams: t, on: s }) => {
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
  const n = (c) => typeof c == "string" ? c : `${c}px`;
  Ae({
    effect: "creative",
    swiper: e,
    on: s,
    setTranslate: () => {
      const { slides: c, wrapperEl: r, slidesSizesGrid: p } = e, d = a(), { progressMultiplier: f } = d, T = e.params.centeredSlides, o = $e(e);
      if (T) {
        const l = p[0] / 2 - (e.params.slidesOffsetBefore ?? 0);
        r.style.transform = `translateX(calc(50% - ${l}px))`;
      }
      for (let l = 0; l < c.length; l += 1) {
        const g = c[l], E = g.progress ?? 0, S = Math.min(Math.max(E, -d.limitProgress), d.limitProgress);
        let h = S;
        T || (h = Math.min(Math.max(g.originalProgress ?? 0, -d.limitProgress), d.limitProgress));
        const m = g.swiperSlideOffset ?? 0, v = [
          e.params.cssMode ? -m - e.translate : -m,
          0,
          0
        ], b = [0, 0, 0];
        let L = !1;
        e.isHorizontal() || (v[1] = v[0], v[0] = 0);
        let A = {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          scale: 1,
          opacity: 1
        };
        S < 0 ? (A = d.next, L = !0) : S > 0 && (A = d.prev, L = !0), v.forEach((x, I) => {
          v[I] = `calc(${x}px + (${n(A.translate[I])} * ${Math.abs(S * f)}))`;
        }), b.forEach((x, I) => {
          b[I] = A.rotate[I] * Math.abs(S * f);
        }), g.style.zIndex = String(-Math.abs(Math.round(E)) + c.length);
        const w = v.join(", "), C = `rotateX(${o(b[0])}deg) rotateY(${o(b[1])}deg) rotateZ(${o(b[2])}deg)`, k = h < 0 ? `scale(${1 + (1 - A.scale) * h * f})` : `scale(${1 - (1 - A.scale) * h * f})`, _ = h < 0 ? 1 + (1 - A.opacity) * h * f : 1 - (1 - A.opacity) * h * f, y = `translate3d(${w}) ${C} ${k}`;
        if (L && A.shadow || !L) {
          let x = g.querySelector(".swiper-slide-shadow");
          if (!x && A.shadow && (x = be("creative", g)), x) {
            const I = d.shadowPerProgress ? S * (1 / d.limitProgress) : S;
            x.style.opacity = String(Math.min(Math.max(Math.abs(I), 0), 1));
          }
        }
        const M = Ie(d, g);
        M.style.transform = y, M.style.opacity = String(_), A.origin && (M.style.transformOrigin = A.origin);
      }
    },
    setTransition: (c) => {
      const r = e.slides.map((p) => he(p));
      r.forEach((p) => {
        p.style.transitionDuration = `${c}ms`, p.querySelectorAll(".swiper-slide-shadow").forEach((d) => {
          d.style.transitionDuration = `${c}ms`;
        });
      }), Me({ swiper: e, duration: c, transformElements: r, allSlides: !0 });
    },
    perspective: () => a().perspective,
    overwriteParams: () => ({
      watchSlidesProgress: !0,
      virtualTranslate: !e.params.cssMode
    })
  });
}, Oa = ({ swiper: e, extendParams: t, on: s }) => {
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
  Ae({
    effect: "cards",
    swiper: e,
    on: s,
    setTranslate: () => {
      const { slides: u, activeIndex: c, rtlTranslate: r } = e, p = a(), { startTranslate: d, isTouched: f } = e.touchEventsData, T = r ? -e.translate : e.translate;
      for (let o = 0; o < u.length; o += 1) {
        const l = u[o], g = l.progress ?? 0, E = Math.min(Math.max(g, -4), 4);
        let S = l.swiperSlideOffset ?? 0;
        e.params.centeredSlides && !e.params.cssMode && (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`), e.params.centeredSlides && e.params.cssMode && (S -= u[0].swiperSlideOffset ?? 0);
        let h = e.params.cssMode ? -S - e.translate : -S, m = 0;
        const v = -100 * Math.abs(E);
        let b = 1, L = -p.perSlideRotate * E, A = p.perSlideOffset - Math.abs(E) * 0.75;
        const w = e.virtual && e.params.virtual?.enabled ? e.virtual.from + o : o, C = (w === c || w === c - 1) && E > 0 && E < 1 && (f || e.params.cssMode) && (T ?? 0) < (d ?? 0), k = (w === c || w === c + 1) && E < 0 && E > -1 && (f || e.params.cssMode) && (T ?? 0) > (d ?? 0);
        if (C || k) {
          const x = (1 - Math.abs((Math.abs(E) - 0.5) / 0.5)) ** 0.5;
          L += -28 * E * x, b += -0.5 * x, A += 96 * x, m = `${(p.rotate || e.isHorizontal() ? -25 : 0) * x * Math.abs(E)}%`;
        }
        if (E < 0 ? h = `calc(${h}px ${r ? "-" : "+"} (${A * Math.abs(E)}%))` : E > 0 ? h = `calc(${h}px ${r ? "-" : "+"} (${-A * Math.abs(E)}%))` : h = `${h}px`, !e.isHorizontal()) {
          const x = m;
          m = h, h = x;
        }
        const _ = E < 0 ? `${1 + (1 - b) * E}` : `${1 - (1 - b) * E}`, y = `
        translate3d(${h}, ${m}, ${v}px)
        rotateZ(${p.rotate ? r ? -L : L : 0}deg)
        scale(${_})
      `;
        if (p.slideShadows) {
          let x = l.querySelector(".swiper-slide-shadow");
          x || (x = be("cards", l)), x && (x.style.opacity = String(Math.min(Math.max((Math.abs(E) - 0.5) / 0.5, 0), 1)));
        }
        l.style.zIndex = String(-Math.abs(Math.round(g)) + u.length);
        const M = Ie(p, l);
        M.style.transform = y;
      }
    },
    setTransition: (u) => {
      const c = e.slides.map((r) => he(r));
      c.forEach((r) => {
        r.style.transitionDuration = `${u}ms`, r.querySelectorAll(".swiper-slide-shadow").forEach((p) => {
          p.style.transitionDuration = `${u}ms`;
        });
      }), Me({ swiper: e, duration: u, transformElements: c });
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
}, Da = [
  na,
  ia,
  la,
  ra,
  ca,
  fa,
  ua,
  pa,
  ma,
  ha,
  ga,
  Ta,
  va,
  Ea,
  Sa,
  ba,
  La,
  Ma,
  Ia,
  Pa,
  Ra,
  wa,
  Oa
];
te.use(Da);
function Lt(e) {
  return e?.getAttribute("class")?.trim() || void 0;
}
function H(e, t, s) {
  const a = e.getAttribute(t)?.trim();
  if (!(!a || a === s))
    return a;
}
function Mt(e, t, s) {
  const a = e.getAttribute(t)?.trim();
  if (!a) return;
  if (a.toLowerCase() === "auto") return "auto";
  const n = Number(a);
  if (!(isNaN(n) || n === s))
    return n;
}
function ye(e, t, s) {
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
function Na(e) {
  return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function It(e) {
  if (typeof e != "object" || e === null) return e;
  const t = e;
  for (const s in t) {
    const a = t[s];
    a == null ? delete t[s] : typeof a == "object" && a !== null && !Na(a) && (It(a), Object.keys(a).length === 0 && delete t[s]);
  }
  return e;
}
function Pt(e, t) {
  return e.find((s) => s.name?.toLowerCase() === t?.toLowerCase());
}
function za(e, t, s) {
  const a = Pt(e, t);
  return a ? a.swiper ? a : (console.error(`[MANIPULATION] Invalid Swiper instance in Waterfall "${t}"`), null) : (console.warn(`[MANIPULATION] No Waterfall found with name: "${t}"`, s), null);
}
function ka(e, t, s) {
  const a = e.filter((n) => n.name?.toLowerCase() === t?.toLowerCase()).map((n) => n.swiper);
  return s && console.log(`📊 Found ${a.length} matching waterfall(s) for "${t}"`), a;
}
function $a() {
  document.querySelectorAll('[waterfall] .swiper-wrapper[role="list"]').forEach((e) => {
    e.removeAttribute("role");
  });
}
const ce = "waterfall", Ga = "waterfall-debug-mode", Ba = "waterfall-a11y-container-message", Ha = "waterfall-a11y-container-role", Va = "waterfall-a11y-container-role-description-message", Fa = "waterfall-a11y-enabled", Ya = "waterfall-a11y-first-slide-message", Wa = "waterfall-a11y-id", Xa = "waterfall-a11y-item-role-description-message", Ua = "waterfall-a11y-last-slide-message", qa = "waterfall-a11y-next-slide-message", ja = "waterfall-a11y-notification-class", Ka = "waterfall-a11y-pagination-bullet-message", Za = "waterfall-a11y-prev-slide-message", Qa = "waterfall-a11y-scroll-on-focus", Ja = "waterfall-a11y-slide-label-message", en = "waterfall-a11y-slide-role", tn = ["mobile", "mobile-large", "tablet", "desktop", "desktop-small", "desktop-large"], sn = (e, t) => `${e}-${t}`, et = "waterfall-controller-control", an = "waterfall-controller-by", nn = "waterfall-controller-inverse", ln = "waterfall-fade-effect-mode", rn = "waterfall-coverflow-effect-depth", on = "waterfall-coverflow-effect-modifier", dn = "waterfall-coverflow-effect-rotate", cn = "waterfall-coverflow-effect-scale", fn = "waterfall-coverflow-effect-slide-shadows", un = "waterfall-coverflow-effect-stretch", pn = "waterfall-flip-effect-limit-rotation", mn = "waterfall-flip-effect-slide-shadows", hn = "waterfall-cube-effect-shadow", gn = "waterfall-cube-effect-shadow-offset", Tn = "waterfall-cube-effect-shadow-scale", vn = "waterfall-cube-effect-slide-shadows", En = "waterfall-cards-effect-per-slide-offset", Sn = "waterfall-cards-effect-per-slide-rotate", bn = "waterfall-cards-effect-rotate", yn = "waterfall-cards-effect-slide-shadows", An = "waterfall-allow-slide-next", _n = "waterfall-allow-slide-prev", xn = "waterfall-allow-touch-move", Cn = "waterfall-auto-height", Ln = "waterfall-breakpoints-base", Mn = "waterfall-center-insufficient-slides", Rt = "waterfall-centered-slides", In = "waterfall-centered-slides-bounds", Pn = "waterfall-container-modifier-class", Rn = "waterfall-create-elements", wn = "waterfall-css-mode", On = "waterfall-direction", Dn = "waterfall-edge-swipe-detection", Nn = "waterfall-edge-swipe-threshold", zn = "waterfall-effect", kn = "waterfall-enabled", $n = "waterfall-events-prefix", Gn = "waterfall-focusable-elements", Bn = "waterfall-follow-finger", Hn = "waterfall-grab-cursor", Vn = "waterfall-height", Fn = "waterfall-init", Yn = "waterfall-initial-slide", Wn = "waterfall-lazy-preload-prev-next", Xn = "waterfall-lazy-preloader-class", Un = "waterfall-long-swipes", qn = "waterfall-long-swipes-ms", jn = "waterfall-long-swipes-ratio", pt = "waterfall-loop", Kn = "waterfall-loop-add-blank-slides", Zn = "waterfall-loop-additional-slides", Qn = "waterfall-loop-prevents-sliding", Jn = "waterfall-max-backface-hidden-slides", ei = "waterfall-nested", ti = "waterfall-no-swiping", si = "waterfall-no-swiping-class", ai = "waterfall-no-swiping-selector", ni = "waterfall-normalize-slide-index", ii = "waterfall-observe-parents", li = "waterfall-observe-slide-children", ri = "waterfall-observer", oi = "waterfall-one-way-movement", di = "waterfall-passive-listeners", ci = "waterfall-prevent-clicks", fi = "waterfall-prevent-clicks-propagation", ui = "waterfall-prevent-interaction-on-transition", pi = "waterfall-resistance", mi = "waterfall-resistance-ratio", hi = "waterfall-resize-observer", mt = "waterfall-rewind", gi = "waterfall-round-lengths", Ti = "waterfall-run-callbacks-on-init", vi = "waterfall-set-wrapper-size", Ei = "waterfall-short-swipes", Si = "waterfall-simulate-touch", bi = "waterfall-slide-active-class", yi = "waterfall-slide-class", Ai = "waterfall-slide-blank-class", _i = "waterfall-slide-fully-visible-class", xi = "waterfall-slide-next-class", Ci = "waterfall-slide-prev-class", Li = "waterfall-slide-to-clicked-slide", Mi = "waterfall-slide-visible-class", Ii = "waterfall-slides-offset-after", Pi = "waterfall-slides-offset-before", wt = "waterfall-slides-per-group", Ri = "waterfall-slides-per-group-auto", wi = "waterfall-slides-per-group-skip", Ot = "waterfall-slides-per-view", Dt = "waterfall-space-between", Oi = "waterfall-speed", Di = "waterfall-swipe-handler", Ni = "waterfall-swiper-element-node-name", zi = "waterfall-threshold", ki = "waterfall-touch-angle", $i = "waterfall-touch-events-target", Gi = "waterfall-touch-move-stop-propagation", Bi = "waterfall-touch-ratio", Hi = "waterfall-touch-release-on-edges", Vi = "waterfall-touch-start-force-prevent-default", Fi = "waterfall-touch-start-prevent-default", Yi = "waterfall-unique-nav-elements", Wi = "waterfall-update-on-window-resize", Xi = "waterfall-url", Ui = "waterfall-user-agent", qi = "waterfall-virtual-translate", ji = "waterfall-watch-overflow", Ki = "waterfall-watch-slides-progress", Zi = "waterfall-width", Qi = "waterfall-wrapper-class", Ji = "waterfall-hash-navigation-replace-state", el = "waterfall-hash-navigation-watch-state", tl = "waterfall-history-keep-query", sl = "waterfall-history-key", al = "waterfall-history-replace-state", nl = "waterfall-history-root", il = "waterfall-keyboard-enabled", ll = "waterfall-keyboard-only-in-viewport", rl = "waterfall-keyboard-page-up-down", ol = "waterfall-mousewheel-enabled", dl = "waterfall-mousewheel-events-target", cl = "waterfall-mousewheel-force-to-axis", fl = "waterfall-mousewheel-invert", ul = "waterfall-mousewheel-no-mousewheel-class", pl = "waterfall-mousewheel-release-on-edges", ml = "waterfall-mousewheel-sensitivity", hl = "waterfall-mousewheel-threshold-delta", gl = "waterfall-mousewheel-threshold-time", Tl = "waterfall-grid-rows", vl = "waterfall-grid-fill", El = "waterfall-navigation-disabled-class", Sl = "waterfall-navigation-enabled", bl = "waterfall-navigation-hidden-class", yl = "waterfall-navigation-hide-on-click", Al = "waterfall-navigation-lock-class", _l = "waterfall-navigation-navigation-disabled-class", xl = "waterfall-pagination-type", Cl = "waterfall-pagination-bullet-class", Ll = "waterfall-pagination-bullet-active-class", Ml = "waterfall-pagination-clickable", Il = "waterfall-pagination-clickable-class", Pl = "waterfall-pagination-current-class", Rl = "waterfall-pagination-dynamic-bullets", wl = "waterfall-pagination-dynamic-main-bullets", Ol = "waterfall-pagination-enabled", Dl = "waterfall-pagination-hidden-class", Nl = "waterfall-pagination-hide-on-click", zl = "waterfall-pagination-horizontal-class", kl = "waterfall-pagination-lock-class", $l = "waterfall-pagination-modifier-class", Gl = "waterfall-pagination-pagination-disabled-class", Bl = "waterfall-pagination-progressbar-fill-class", Hl = "waterfall-pagination-progressbar-opposite", Vl = "waterfall-pagination-progressbar-opposite-class", Fl = "waterfall-pagination-total-class", Yl = "waterfall-pagination-vertical-class", Nt = "waterfall-autoplay", zt = "waterfall-smooth-autoplay", Wl = "waterfall-autoplay-delay", Xl = "waterfall-autoplay-disable-on-interaction", Ul = "waterfall-autoplay-reverse-direction", ql = "waterfall-autoplay-pause-on-mouse-enter", jl = "waterfall-autoplay-stop-on-last-slide", Kl = "waterfall-autoplay-wait-for-transition", Zl = "waterfall-autoplay-control-enabled", Ql = "waterfall-autoplay-control-default-state", Jl = "waterfall-free-mode-enabled", er = "waterfall-free-mode-minimum-velocity", tr = "waterfall-free-mode-momentum", sr = "waterfall-free-mode-momentum-bounce", ar = "waterfall-free-mode-momentum-bounce-ratio", nr = "waterfall-free-mode-momentum-ratio", ir = "waterfall-free-mode-momentum-velocity-ratio", lr = "waterfall-free-mode-sticky", rr = "waterfall-scrollbar-drag-class", or = "waterfall-scrollbar-drag-size", dr = "waterfall-scrollbar-draggable", cr = "waterfall-scrollbar-enabled", fr = "waterfall-scrollbar-hide", ur = "waterfall-scrollbar-horizontal-class", pr = "waterfall-scrollbar-lock-class", mr = "waterfall-scrollbar-scrollbar-disabled-class", hr = "waterfall-scrollbar-vertical-class", gr = "waterfall-scrollbar-snap-on-release", tt = "waterfall-thumbs-swiper", Tr = "waterfall-thumbs-auto-scroll-offset", vr = "waterfall-thumbs-multiple-active-thumbs", Er = "waterfall-thumbs-slide-thumb-active-class", Sr = "waterfall-thumbs-thumbs-container-class", br = "waterfall-add-slide", ht = "waterfall-add-index", yr = "waterfall-append-slide", Ar = "waterfall-prepend-slide", _r = "waterfall-remove-slide", gt = "waterfall-remove-index", xr = "waterfall-zoom-container-class", Cr = "waterfall-zoom-limit-to-original-size", Lr = "waterfall-zoom-max-ratio", Mr = "waterfall-zoom-min-ratio", Ir = "waterfall-zoom-pan-on-mouse-move", Pr = "waterfall-zoom-toggle", Rr = "waterfall-zoom-zoomed-slide-class", wr = "waterfall-parallax-enabled", So = "data-swiper-parallax", bo = "data-swiper-parallax-x", yo = "data-swiper-parallax-y", Ao = "data-swiper-parallax-scale", _o = "data-swiper-parallax-opacity", xo = "data-swiper-parallax-duration", Or = "waterfall-callback-slide-change", le = "waterfall-el", Dr = "pagination", Nr = "pagination-bullet", zr = "navigation-next", kr = "navigation-prev", $r = "scrollbar", Gr = "scrollbar-drag", Br = "slide-count", Hr = "autoplay-control", Vr = "autoplay-control-pause", Fr = "autoplay-control-play";
function Yr(e, t, s) {
  e.allowSlideNext = N(t, An, !0), e.allowSlidePrev = N(t, _n, !0), e.navigation = {
    disabledClass: H(t, El, "swiper-button-disabled"),
    enabled: N(t, Sl),
    hiddenClass: H(t, bl, "swiper-button-hidden"),
    hideOnClick: N(t, yl, !1),
    lockClass: H(t, Al, "swiper-button-lock"),
    navigationDisabledClass: H(t, _l, "swiper-navigation-disabled"),
    nextEl: `[${ce}='${s}'] [${le}=${zr}]`,
    prevEl: `[${ce}='${s}'] [${le}=${kr}]`
  };
}
const Wr = [
  { key: "slidesPerView", attr: Ot, parse: Mt, swiperDefault: 1 },
  { key: "slidesPerGroup", attr: wt, parse: W, swiperDefault: 1 },
  { key: "spaceBetween", attr: Dt, parse: W, swiperDefault: 0 },
  { key: "centeredSlides", attr: Rt, parse: N, swiperDefault: !1 }
], Xr = [
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
function Ur(e, t) {
  e.breakpointsBase = H(t, Ln, "window");
  const s = {};
  Wr.forEach(({ key: a, attr: n, parse: i, swiperDefault: u }) => {
    const c = {};
    if (tn.forEach((p) => {
      const d = i(t, sn(n, p));
      d !== void 0 && (c[p] = d);
    }), Object.keys(c).length === 0) return;
    const r = i(t, n) ?? u;
    Xr.forEach(({ minWidth: p, cascade: d }) => {
      const f = d.find((T) => c[T] !== void 0);
      s[p] = { ...s[p], [a]: f ? c[f] : r };
    });
  }), e.breakpoints = s;
}
function qr(e, t) {
  const s = t.querySelector(`[${le}=${Dr}]`);
  if (!s) return;
  const a = H(t, xl), n = t.querySelector(`[${le}=${Nr}]`);
  e.pagination = {
    bulletActiveClass: H(t, Ll, "swiper-pagination-bullet-active"),
    bulletClass: H(t, Cl) ?? Lt(n),
    bulletElement: n?.tagName?.toLowerCase() || "span",
    clickable: N(t, Ml, !1),
    clickableClass: H(t, Il, "swiper-pagination-clickable"),
    currentClass: H(t, Pl, "swiper-pagination-current"),
    dynamicBullets: N(t, Rl, !1),
    dynamicMainBullets: W(t, wl, 1),
    el: s || null,
    enabled: N(t, Ol),
    hiddenClass: H(t, Dl, "swiper-pagination-hidden"),
    hideOnClick: N(t, Nl, !0),
    horizontalClass: H(t, zl, "swiper-pagination-horizontal"),
    lockClass: H(t, kl, "swiper-pagination-lock"),
    modifierClass: H(t, $l, "swiper-pagination-"),
    paginationDisabledClass: H(
      t,
      Gl,
      "swiper-pagination-disabled"
    ),
    progressbarFillClass: H(
      t,
      Bl,
      "swiper-pagination-progressbar-fill"
    ),
    progressbarOpposite: N(t, Hl, !1),
    progressbarOppositeClass: H(
      t,
      Vl,
      "swiper-pagination-progressbar-opposite"
    ),
    renderBullet: i(),
    totalClass: H(t, Fl, "swiper-pagination-total"),
    type: u(),
    verticalClass: H(t, Yl, "swiper-pagination-vertical")
  };
  function i() {
    if (a === "numberBullets")
      return (c, r) => `<span class="${r}">${c + 1}</span>`;
    if (a === "bullets")
      return (c, r) => `<span class="${r}"></span>`;
  }
  function u() {
    return a === "numberBullets" || a === "bullets" ? "bullets" : a === "fraction" ? "fraction" : a === "progressbar" ? "progressbar" : a === "custom" ? "custom" : "bullets";
  }
}
function jr(e, t) {
  const s = t.querySelector(`[${le}=${$r}]`);
  if (!s) return;
  const a = s.querySelector(`[${le}=${Gr}]`), n = H(t, rr);
  n && a?.remove(), e.scrollbar = {
    dragClass: n ?? Lt(a),
    dragSize: ye(t, or, "auto"),
    draggable: N(t, dr, !1),
    el: s || null,
    enabled: N(t, cr),
    hide: N(t, fr, !0),
    horizontalClass: H(t, ur, "swiper-scrollbar-horizontal"),
    lockClass: H(t, pr, "swiper-scrollbar-lock"),
    scrollbarDisabledClass: H(t, mr, "swiper-scrollbar-disabled"),
    snapOnRelease: N(t, gr, !0),
    // NOTE doc says false but actually true
    verticalClass: H(t, hr, "swiper-scrollbar-vertical")
  };
}
function Kr(e, t) {
  const s = N(t, pt, !1), a = N(t, mt, !1);
  s && a && console.warn(
    `[PLAYBACK] "${pt}" and "${mt}" cannot both be true. Using loop and ignoring rewind.`,
    t
  ), e.loop = s, e.rewind = s ? void 0 : a, e.loopAddBlankSlides = N(t, Kn, !0), e.loopAdditionalSlides = W(t, Zn, 0), e.loopPreventsSliding = N(t, Qn, !0);
  const n = N(t, Nt, !1), i = N(t, zt, !1);
  let u = W(t, Wl, void 0);
  i && (u = 0), n && (Zr(), e.autoplay = {
    delay: u,
    disableOnInteraction: N(t, Xl, !1),
    // documentation says default is true, doesn't appear to be correct
    reverseDirection: N(t, Ul, !1),
    pauseOnMouseEnter: N(t, ql, !1),
    stopOnLastSlide: N(t, jl, !1),
    waitForTransition: N(t, Kl, !0)
  }), e.speed = W(t, Oi, 300), e.oneWayMovement = N(t, oi, !1);
}
function Zr() {
  document.querySelectorAll(`[${zt}='true'] .swiper-wrapper`).forEach((e) => {
    e.style.transitionTimingFunction = "linear";
  });
}
function Qr(e, t) {
  const s = H(t, zn, "slide");
  e.effect = s, s === "fade" ? e.fadeEffect = { mode: ye(t, ln, "default") } : s === "coverflow" ? e.coverflowEffect = {
    depth: W(t, rn, 100),
    modifier: W(t, on, 1),
    rotate: W(t, dn, 50),
    scale: W(t, cn, 1),
    slideShadows: N(t, fn, !0),
    stretch: W(t, un, 0)
  } : s === "flip" ? e.flipEffect = {
    limitRotation: N(t, pn, !0),
    slideShadows: N(t, mn, !0)
  } : s === "cube" ? e.cubeEffect = {
    shadow: N(t, hn, !0),
    shadowOffset: W(t, gn, 20),
    shadowScale: W(t, Tn, 0.94),
    slideShadows: N(t, vn, !0)
  } : s === "cards" && (e.cardsEffect = {
    perSlideOffset: W(t, En, 8),
    perSlideRotate: W(t, Sn, 2),
    rotate: N(t, bn, !0),
    slideShadows: N(t, yn, !0)
  });
}
function Jr(e, t) {
  e.autoHeight = N(t, Cn, !1), e.centerInsufficientSlides = N(t, Mn, !1), e.centeredSlides = N(t, Rt, !1), e.centeredSlidesBounds = N(t, In, !1), e.direction = ye(t, On, "horizontal"), e.grid = {
    fill: ye(t, vl, "column"),
    rows: W(t, Tl, 1)
  }, e.height = W(t, Vn), e.slidesOffsetAfter = W(t, Ii, 0), e.slidesOffsetBefore = W(t, Pi, 0), e.slidesPerGroup = W(t, wt, 1), e.slidesPerGroupAuto = N(t, Ri, !1), e.slidesPerGroupSkip = W(t, wi, 0), e.slidesPerView = Mt(t, Ot, 1), e.spaceBetween = W(t, Dt, 0), e.width = W(t, Zi);
}
function eo(e, t) {
  e.containerModifierClass = H(t, Pn, "swiper-"), e.initialSlide = W(t, Yn, 0), e.nested = N(t, ei, !1), e.normalizeSlideIndex = N(t, ni, !0), e.slideActiveClass = H(t, bi, "swiper-slide-active"), e.slideBlankClass = H(t, Ai, "swiper-slide-blank"), e.slideClass = H(t, yi, "swiper-slide"), e.slideFullyVisibleClass = H(t, _i, "swiper-slide-fully-visible"), e.slideNextClass = H(t, xi, "swiper-slide-next"), e.slidePrevClass = H(t, Ci, "swiper-slide-prev"), e.slideVisibleClass = H(t, Mi, "swiper-slide-visible"), e.swipeHandler = H(t, Di), e.swiperElementNodeName = H(t, Ni, "SWIPER-CONTAINER"), e.wrapperClass = H(t, Qi, "swiper-wrapper");
}
function to() {
  document.querySelectorAll(".swiper-wrapper").forEach((e) => {
    e.querySelectorAll(".swiper-slide").forEach((t, s) => {
      const a = t.querySelector(`[${le}=${Br}]`);
      a && (a.textContent = (s + 1).toString());
    });
  });
}
function so(e, t, s, a) {
  const n = H(t, tt, "");
  if (!n || n === "")
    return;
  const i = Pt(s, n);
  if (!i) {
    a && console.warn("A matching thumbs waterfall was not found for ", n);
    return;
  }
  return e.thumbs = {
    autoScrollOffset: W(t, Tr, 0),
    multipleActiveThumbs: N(t, vr, !1),
    slideThumbActiveClass: H(t, Er, "swiper-slide-thumb-active"),
    swiper: i.swiper,
    thumbsContainerClass: H(t, Sr, "swiper-thumbs")
  }, e;
}
function ao(e, t) {
  e.keyboard = {
    enabled: N(t, il, !1),
    onlyInViewport: N(t, ll, !0),
    pageUpDown: N(t, rl, !0)
  };
}
function no(e, t) {
  e.hashNavigation = {
    //getSlideIndex
    replaceState: N(t, Ji, !1),
    watchState: N(t, el, !1)
  };
}
function io(e, t) {
  e.history = {
    keepQuery: N(t, tl, !1),
    key: H(t, sl, "slides"),
    replaceState: N(t, al, !1),
    root: H(t, nl, "")
  };
}
function lo(e, t, s, a) {
  const n = H(t, et, "");
  if (!n) return;
  const i = ka(s, n, a);
  a && (i.length ? console.log(`Controller Swipers for selector "${n}":`, i) : console.error(`No controller swipers found for selector "${n}"`)), e.controller = {
    by: ye(t, an, "slide"),
    control: i,
    inverse: N(t, nn, !1)
  };
}
function ro(e, t) {
  e.a11y = {
    containerMessage: H(t, Ba),
    containerRole: H(t, Ha),
    containerRoleDescriptionMessage: H(t, Va),
    enabled: N(t, Fa, !0),
    firstSlideMessage: H(t, Ya, "This is the first slide"),
    id: H(t, Wa),
    itemRoleDescriptionMessage: H(t, Xa),
    lastSlideMessage: H(t, Ua, "This is the last slide"),
    nextSlideMessage: H(t, qa, "Next slide"),
    notificationClass: H(t, ja, "swiper-notification"),
    paginationBulletMessage: H(t, Ka, "Go to slide {{index}}"),
    prevSlideMessage: H(t, Za, "Previous slide"),
    scrollOnFocus: N(t, Qa, !0),
    slideLabelMessage: H(t, Ja, "{{index}} / {{slidesLength}}"),
    slideRole: H(t, en, "group")
  };
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
    const i = za(window.waterfalls, n, a);
    if (!i) return;
    const u = i.swiper, c = a.cloneNode(!0);
    if (c.removeAttribute(e), t === "add" ? c.removeAttribute(ht) : t === "remove" && c.removeAttribute(gt), c.classList.contains("swiper-slide") || c.classList.add("swiper-slide"), t === "append")
      u.appendSlide(c.outerHTML);
    else if (t === "prepend")
      u.prependSlide(c.outerHTML);
    else if (t === "add") {
      let p = Number(a.getAttribute(ht));
      p || (p = 1);
      const d = document.createElement("div");
      d.innerHTML = c.outerHTML;
      const f = d.children[0];
      f && u.addSlide(p, f);
    } else if (t === "remove") {
      const p = Number(a.getAttribute(gt));
      p !== -1 ? u.removeSlide(p) : console.warn(`[MANIPULATION] Slide not found in Swiper for removal: ${n}`);
    }
    a.remove();
    const r = a.closest(".w-dyn-list");
    r && s.add(r), u.update();
  }), s.forEach((a) => a.remove());
}
function oo() {
  Oe(br, "add"), Oe(yr, "append"), Oe(Ar, "prepend"), Oe(_r, "remove");
}
function co(e, t) {
  e.zoom = {
    containerClass: H(t, xr, "swiper-zoom-container"),
    limitToOriginalSize: N(t, Cr, !1),
    maxRatio: W(t, Lr, 3),
    minRatio: W(t, Mr, 1),
    panOnMouseMove: N(t, Ir, !1),
    toggle: N(t, Pr, !0),
    zoomedSlideClass: H(t, Rr, "swiper-slide-zoomed")
  };
}
function fo(e, t) {
  e.allowTouchMove = N(t, xn, !0), e.edgeSwipeDetection = N(t, Dn, !1), e.edgeSwipeThreshold = W(t, Nn, 20), e.focusableElements = H(
    t,
    Gn,
    "input, select, option, textarea, button, video, label"
  ), e.followFinger = N(t, Bn, !0), e.grabCursor = N(t, Hn, !1), e.longSwipes = N(t, Un, !0), e.longSwipesMs = W(t, qn, 300), e.longSwipesRatio = W(t, jn, 0.5), e.noSwiping = N(t, ti, !0), e.noSwipingClass = H(t, si, "swiper-no-swiping"), e.noSwipingSelector = H(t, ai), e.preventClicks = N(t, ci, !0), e.preventClicksPropagation = N(t, fi, !0), e.preventInteractionOnTransition = N(t, ui, !1), e.resistance = N(t, pi, !0), e.resistanceRatio = W(t, mi, 0.85), e.shortSwipes = N(t, Ei, !0), e.simulateTouch = N(t, Si, !0), e.slideToClickedSlide = N(t, Li, !1), e.threshold = W(t, zi, 5), e.touchAngle = W(t, ki, 45), e.touchEventsTarget = ye(t, $i, "wrapper"), e.touchMoveStopPropagation = N(t, Gi, !1), e.touchRatio = W(t, Bi, 1), e.touchReleaseOnEdges = N(t, Hi, !1), e.touchStartForcePreventDefault = N(t, Vi, !1), e.touchStartPreventDefault = N(t, Fi, !0);
}
function uo(e, t) {
  e.mousewheel = {
    enabled: N(t, ol, !1),
    eventsTarget: H(t, dl, "container"),
    forceToAxis: N(t, cl, !1),
    invert: N(t, fl, !1),
    noMousewheelClass: H(t, ul, "swiper-no-mousewheel"),
    releaseOnEdges: N(t, pl, !1),
    sensitivity: W(t, ml, 1),
    thresholdDelta: W(t, hl),
    thresholdTime: W(t, gl)
  };
}
function po(e, t) {
  e.freeMode = {
    enabled: N(t, Jl, !1),
    minimumVelocity: W(t, er, 0.02),
    momentum: N(t, tr, !0),
    momentumBounce: N(t, sr, !0),
    momentumBounceRatio: W(t, ar, 1),
    momentumRatio: W(t, nr, 1),
    momentumVelocityRatio: W(t, ir, 1),
    sticky: N(t, lr, !1)
  };
}
function mo(e, t) {
  e.lazyPreloadPrevNext = W(t, Wn, 0), e.lazyPreloaderClass = H(t, Xn, "swiper-lazy-preloader");
}
function ho(e, t) {
  e.createElements = N(t, Rn, !1), e.cssMode = N(t, wn, !1), e.enabled = N(t, kn, !0), e.eventsPrefix = H(t, $n, "swiper"), e.init = N(t, Fn, !0), e.maxBackfaceHiddenSlides = W(t, Jn, 10), e.passiveListeners = N(t, di, !0), e.roundLengths = N(t, gi, !1), e.runCallbacksOnInit = N(t, Ti, !0), e.setWrapperSize = N(t, vi, !1), e.uniqueNavElements = N(t, Yi, !0), e.virtualTranslate = N(t, qi, !1), e.url = H(t, Xi), e.userAgent = H(t, Ui);
}
function go(e, t) {
  e.observeParents = N(t, ii, !1), e.observeSlideChildren = N(t, li, !1), e.observer = N(t, ri, !1), e.resizeObserver = N(t, hi, !0), e.updateOnWindowResize = N(t, Wi, !0), e.watchOverflow = N(t, ji, !0), e.watchSlidesProgress = N(t, Ki, !1);
}
function To(e, t) {
  e.parallax = {
    enabled: N(t, wr, !1)
  };
}
function vo(e, t) {
  const s = H(t, Or, void 0);
  if (s) {
    let a = 0;
    e.on = {
      ...e.on,
      slideChange: (n) => {
        const i = n.activeIndex, u = n.slides[i], c = n.slides[a], r = window[s];
        typeof r == "function" ? r({
          swiper: n,
          activeIndex: i,
          previousIndex: a,
          activeSlide: u,
          previousSlide: c
        }) : console.warn(`Waterfall: Callback function "${s}" not found on window object.`), a = i;
      }
    };
  }
}
function Eo(e, t, s) {
  const a = N(e, Zl, !1), n = N(e, Nt, !1);
  if (!a || !n) return;
  const i = `[${ce}='${t}'] [${le}='${Hr}']`, u = `[${ce}='${t}'] [${le}='${Vr}']`, c = `[${ce}='${t}'] [${le}='${Fr}']`, r = document.querySelector(i), p = document.querySelector(u), d = document.querySelector(c);
  if (!r || !p || !d) return;
  const f = H(e, Ql, "playing");
  function T(o) {
    o ? (p.style.setProperty("display", "block", "important"), p.style.setProperty("visibility", "visible", "important"), d.style.setProperty("display", "none", "important"), d.style.setProperty("visibility", "hidden", "important")) : (d.style.setProperty("display", "block", "important"), d.style.setProperty("visibility", "visible", "important"), p.style.setProperty("display", "none", "important"), p.style.setProperty("visibility", "hidden", "important"));
  }
  s.autoplay && (f === "paused" ? (s.autoplay.stop(), T(!1)) : (s.autoplay.start(), T(!0))), r.addEventListener("click", () => {
    s.autoplay && (s.autoplay.running ? (s.autoplay.stop(), T(!1)) : (s.autoplay.start(), T(!0)));
  });
}
console.log(
  "🚿 Hello from Wellspring Waterfall (v1.5.1). To learn more, visit https://heywellspring.com/apps/waterfall"
);
const De = [];
window.waterfalls = De;
function Tt(e, t) {
  let s = t;
  return document.querySelectorAll(e).forEach((a) => {
    kt(a, s++);
  }), s;
}
let _e = 0;
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(`[${ce}]`).forEach((e) => {
    e.hasAttribute(tt) || e.hasAttribute(et) || kt(e, _e++);
  }), _e = Tt(`[${ce}][${tt}]`, _e), _e = Tt(`[${ce}][${et}]`, _e), to(), $a();
});
function kt(e, t) {
  {
    const s = H(e, ce, `Swiper ${t}`);
    if (!s) return;
    const a = !!N(e, Ga, !1);
    a && console.warn(`Initializing Waterfall: ${s}`);
    const n = {};
    eo(n, e), Ur(n, e), Kr(n, e), Yr(n, e, s), qr(n, e), jr(n, e), Qr(n, e), po(n, e), Jr(n, e), so(n, e, De, a), ao(n, e), uo(n, e), fo(n, e), no(n, e), io(n, e), lo(n, e, De, a), ro(n, e), mo(n, e), go(n, e), co(n, e), To(n, e), vo(n, e), ho(n, e), oo(), a && console.warn(n);
    const i = It(n), u = e.querySelector(".swiper");
    a && console.log("SWIPER: ", u);
    const c = u?.querySelectorAll(".swiper-slide") || [];
    if (a && console.log("SWIPER SLIDES: ", c), c.length === 0) {
      console.warn(`Skipping "${s}": no .swiper-slide elements found.`);
      return;
    }
    const r = new te(u, i);
    De.push({ name: s, swiper: r }), Eo(e, s, r);
  }
}
export {
  Ba as ATTR_A11Y_CONTAINER_MESSAGE,
  Ha as ATTR_A11Y_CONTAINER_ROLE,
  Va as ATTR_A11Y_CONTAINER_ROLE_DESCRIPTION_MESSAGE,
  Fa as ATTR_A11Y_ENABLED,
  Ya as ATTR_A11Y_FIRST_SLIDE_MESSAGE,
  Wa as ATTR_A11Y_ID,
  Xa as ATTR_A11Y_ITEM_ROLE_DESCRIPTION_MESSAGE,
  Ua as ATTR_A11Y_LAST_SLIDE_MESSAGE,
  qa as ATTR_A11Y_NEXT_SLIDE_MESSAGE,
  ja as ATTR_A11Y_NOTIFICATION_CLASS,
  Ka as ATTR_A11Y_PAGINATION_BULLET_MESSAGE,
  Za as ATTR_A11Y_PREV_SLIDE_MESSAGE,
  Qa as ATTR_A11Y_SCROLL_ON_FOCUS,
  Ja as ATTR_A11Y_SLIDE_LABEL_MESSAGE,
  en as ATTR_A11Y_SLIDE_ROLE,
  An as ATTR_ALLOW_SLIDE_NEXT,
  _n as ATTR_ALLOW_SLIDE_PREV,
  xn as ATTR_ALLOW_TOUCH_MOVE,
  Nt as ATTR_AUTOPLAY,
  Ql as ATTR_AUTOPLAY_CONTROL_DEFAULT_STATE,
  Zl as ATTR_AUTOPLAY_CONTROL_ENABLED,
  Wl as ATTR_AUTOPLAY_DELAY,
  Xl as ATTR_AUTOPLAY_DISABLE_ON_INTERACTION,
  ql as ATTR_AUTOPLAY_PAUSE_ON_MOUSE_ENTER,
  Ul as ATTR_AUTOPLAY_REVERSE_DIRECTION,
  jl as ATTR_AUTOPLAY_STOP_ON_LAST_SLIDE,
  Kl as ATTR_AUTOPLAY_WAIT_FOR_TRANSITION,
  Cn as ATTR_AUTO_HEIGHT,
  Ln as ATTR_BREAKPOINTS_BASE,
  Or as ATTR_CALLBACK_SLIDE_CHANGE,
  En as ATTR_CARDS_EFFECT_PER_SLIDE_OFFSET,
  Sn as ATTR_CARDS_EFFECT_PER_SLIDE_ROTATE,
  bn as ATTR_CARDS_EFFECT_ROTATE,
  yn as ATTR_CARDS_EFFECT_SLIDE_SHADOWS,
  Rt as ATTR_CENTERED_SLIDES,
  In as ATTR_CENTERED_SLIDES_BOUNDS,
  Mn as ATTR_CENTER_INSUFFICIENT_SLIDES,
  Pn as ATTR_CONTAINER_MODIFIER_CLASS,
  an as ATTR_CONTROLLER_BY,
  et as ATTR_CONTROLLER_CONTROL,
  nn as ATTR_CONTROLLER_INVERSE,
  rn as ATTR_COVERFLOW_EFFECT_DEPTH,
  on as ATTR_COVERFLOW_EFFECT_MODIFIER,
  dn as ATTR_COVERFLOW_EFFECT_ROTATE,
  cn as ATTR_COVERFLOW_EFFECT_SCALE,
  fn as ATTR_COVERFLOW_EFFECT_SLIDE_SHADOWS,
  un as ATTR_COVERFLOW_EFFECT_STRETCH,
  Rn as ATTR_CREATE_ELEMENTS,
  wn as ATTR_CSS_MODE,
  hn as ATTR_CUBE_EFFECT_SHADOW,
  gn as ATTR_CUBE_EFFECT_SHADOW_OFFSET,
  Tn as ATTR_CUBE_EFFECT_SHADOW_SCALE,
  vn as ATTR_CUBE_EFFECT_SLIDE_SHADOWS,
  Ga as ATTR_DEBUG_MODE,
  On as ATTR_DIRECTION,
  Dn as ATTR_EDGE_SWIPE_DETECTION,
  Nn as ATTR_EDGE_SWIPE_THRESHOLD,
  zn as ATTR_EFFECT,
  kn as ATTR_ENABLED,
  $n as ATTR_EVENTS_PREFIX,
  ln as ATTR_FADE_EFFECT_MODE,
  pn as ATTR_FLIP_EFFECT_LIMIT_ROTATION,
  mn as ATTR_FLIP_EFFECT_SLIDE_SHADOWS,
  Gn as ATTR_FOCUSABLE_ELEMENTS,
  Bn as ATTR_FOLLOW_FINGER,
  Jl as ATTR_FREE_MODE_ENABLED,
  er as ATTR_FREE_MODE_MINIMUM_VELOCITY,
  tr as ATTR_FREE_MODE_MOMENTUM,
  sr as ATTR_FREE_MODE_MOMENTUM_BOUNCE,
  ar as ATTR_FREE_MODE_MOMENTUM_BOUNCE_RATIO,
  nr as ATTR_FREE_MODE_MOMENTUM_RATIO,
  ir as ATTR_FREE_MODE_MOMENTUM_VELOCITY_RATIO,
  lr as ATTR_FREE_MODE_STICKY,
  Hn as ATTR_GRAB_CURSOR,
  vl as ATTR_GRID_FILL,
  Tl as ATTR_GRID_ROWS,
  Ji as ATTR_HASH_NAVIGATION_REPLACE_STATE,
  el as ATTR_HASH_NAVIGATION_WATCH_STATE,
  Vn as ATTR_HEIGHT,
  tl as ATTR_HISTORY_KEEP_QUERY,
  sl as ATTR_HISTORY_KEY,
  al as ATTR_HISTORY_REPLACE_STATE,
  nl as ATTR_HISTORY_ROOT,
  Fn as ATTR_INIT,
  Yn as ATTR_INITIAL_SLIDE,
  il as ATTR_KEYBOARD_ENABLED,
  ll as ATTR_KEYBOARD_ONLY_IN_VIEWPORT,
  rl as ATTR_KEYBOARD_PAGE_UP_DOWN,
  Xn as ATTR_LAZY_PRELOADER_CLASS,
  Wn as ATTR_LAZY_PRELOAD_PREV_NEXT,
  Un as ATTR_LONG_SWIPES,
  qn as ATTR_LONG_SWIPES_MS,
  jn as ATTR_LONG_SWIPES_RATIO,
  pt as ATTR_LOOP,
  Zn as ATTR_LOOP_ADD_ADDITIONAL_SLIDES,
  Kn as ATTR_LOOP_ADD_BLANK_SLIDES,
  Qn as ATTR_LOOP_PREVENTS_SLIDING,
  ht as ATTR_MANIPULATION_ADD_INDEX,
  br as ATTR_MANIPULATION_ADD_SLIDE,
  yr as ATTR_MANIPULATION_APPEND_SLIDE,
  Ar as ATTR_MANIPULATION_PREPEND_SLIDE,
  gt as ATTR_MANIPULATION_REMOVE_INDEX,
  _r as ATTR_MANIPULATION_REMOVE_SLIDE,
  Jn as ATTR_MAX_BACKFACE_HIDDEN_SLIDES,
  ol as ATTR_MOUSEWHEEL_ENABLED,
  dl as ATTR_MOUSEWHEEL_EVENTS_TARGET,
  cl as ATTR_MOUSEWHEEL_FORCE_TO_AXIS,
  fl as ATTR_MOUSEWHEEL_INVERT,
  ul as ATTR_MOUSEWHEEL_NO_MOUSEWHEEL_CLASS,
  pl as ATTR_MOUSEWHEEL_RELEASE_ON_EDGES,
  ml as ATTR_MOUSEWHEEL_SENSITIVITY,
  hl as ATTR_MOUSEWHEEL_THRESHOLD_DELTA,
  gl as ATTR_MOUSEWHEEL_THRESHOLD_TIME,
  El as ATTR_NAVIGATION_DISABLED_CLASS,
  Sl as ATTR_NAVIGATION_ENABLED,
  bl as ATTR_NAVIGATION_HIDDEN_CLASS,
  yl as ATTR_NAVIGATION_HIDE_ON_CLICK,
  Al as ATTR_NAVIGATION_LOCK_CLASS,
  _l as ATTR_NAVIGATION_NAVIGATION_DISABLED_CLASS,
  ei as ATTR_NESTED,
  ni as ATTR_NORMALIZE_SLIDE_INDEX,
  ti as ATTR_NO_SWIPING,
  si as ATTR_NO_SWIPING_CLASS,
  ai as ATTR_NO_SWIPING_SELECTOR,
  ri as ATTR_OBSERVER,
  li as ATTR_OBSERVE_SLIDE_CHILDREN,
  ii as ATTR_OBSERVE_SLIDE_PARENTS,
  oi as ATTR_ONE_WAY_MOVEMENT,
  Ll as ATTR_PAGINATION_BULLET_ACTIVE_CLASS,
  Cl as ATTR_PAGINATION_BULLET_CLASS,
  Ml as ATTR_PAGINATION_CLICKABLE,
  Il as ATTR_PAGINATION_CLICKABLE_CLASS,
  Pl as ATTR_PAGINATION_CURRENT_CLASS,
  Rl as ATTR_PAGINATION_DYNAMIC_BULLETS,
  wl as ATTR_PAGINATION_DYNAMIC_MAIN_BULLETS,
  Ol as ATTR_PAGINATION_ENABLED,
  Dl as ATTR_PAGINATION_HIDDEN_CLASS,
  Nl as ATTR_PAGINATION_HIDE_ON_CLICK,
  zl as ATTR_PAGINATION_HORIZONTAL_CLASS,
  kl as ATTR_PAGINATION_LOCK_CLASS,
  $l as ATTR_PAGINATION_MODIFIER_CLASS,
  Gl as ATTR_PAGINATION_PAGINATION_DISABLED_CLASS,
  Bl as ATTR_PAGINATION_PROGRESSBAR_FILL_CLASS,
  Hl as ATTR_PAGINATION_PROGRESSBAR_OPPOSITE,
  Vl as ATTR_PAGINATION_PROGRESSBAR_OPPOSITE_CLASS,
  Fl as ATTR_PAGINATION_TOTAL_CLASS,
  xl as ATTR_PAGINATION_TYPE,
  Yl as ATTR_PAGINATION_VERTICAL_CLASS,
  So as ATTR_PARALLAX,
  xo as ATTR_PARALLAX_DURATION,
  wr as ATTR_PARALLAX_ENABLED,
  _o as ATTR_PARALLAX_OPACITY,
  Ao as ATTR_PARALLAX_SCALE,
  bo as ATTR_PARALLAX_X,
  yo as ATTR_PARALLAX_Y,
  di as ATTR_PASSIVE_LISTENERS,
  ci as ATTR_PREVENT_CLICKS,
  fi as ATTR_PREVENT_CLICKS_PROPAGATION,
  ui as ATTR_PREVENT_INTERACTION_ON_TRANSITION,
  pi as ATTR_RESISTANCE,
  mi as ATTR_RESISTANCE_RATIO,
  hi as ATTR_RESIZE_OBSERVER,
  mt as ATTR_REWIND,
  gi as ATTR_ROUND_LENGTHS,
  Ti as ATTR_RUN_CALLBACKS_ON_INIT,
  dr as ATTR_SCROLLBAR_DRAGGABLE,
  rr as ATTR_SCROLLBAR_DRAG_CLASS,
  or as ATTR_SCROLLBAR_DRAG_SIZE,
  cr as ATTR_SCROLLBAR_ENABLED,
  fr as ATTR_SCROLLBAR_HIDE,
  ur as ATTR_SCROLLBAR_HORIZONTAL_CLASS,
  pr as ATTR_SCROLLBAR_LOCK_CLASS,
  mr as ATTR_SCROLLBAR_SCROLLBAR_DISABLED_CLASS,
  gr as ATTR_SCROLLBAR_SNAP_ON_RELEASE,
  hr as ATTR_SCROLLBAR_VERTICAL_CLASS,
  vi as ATTR_SET_WRAPPER_SIZE,
  Ei as ATTR_SHORT_SWIPES,
  Si as ATTR_SIMULATE_TOUCH,
  Ii as ATTR_SLIDES_OFFSET_AFTER,
  Pi as ATTR_SLIDES_OFFSET_BEFORE,
  wt as ATTR_SLIDES_PER_GROUP,
  Ri as ATTR_SLIDES_PER_GROUP_AUTO,
  wi as ATTR_SLIDES_PER_GROUP_SKIP,
  Ot as ATTR_SLIDES_PER_VIEW,
  bi as ATTR_SLIDE_ACTIVE_CLASS,
  Ai as ATTR_SLIDE_BLANK_CLASS,
  yi as ATTR_SLIDE_CLASS,
  _i as ATTR_SLIDE_FULLY_VISIBLE_CLASS,
  xi as ATTR_SLIDE_NEXT_CLASS,
  Ci as ATTR_SLIDE_PREV_CLASS,
  Li as ATTR_SLIDE_TO_CLICKED_SLIDE,
  Mi as ATTR_SLIDE_VISIBLE_CLASS,
  zt as ATTR_SMOOTH_AUTOPLAY,
  Dt as ATTR_SPACE_BETWEEN,
  Oi as ATTR_SPEED,
  Ni as ATTR_SWIPER_ELEMENT_NODE_NAME,
  Di as ATTR_SWIPE_HANDLER,
  zi as ATTR_THRESHOLD,
  Tr as ATTR_THUMBS_AUTO_SCROLL_OFFSET,
  vr as ATTR_THUMBS_MULTIPLE_ACTIVE_THUMBS,
  Er as ATTR_THUMBS_SLIDE_THUMB_ACTIVE_CLASS,
  tt as ATTR_THUMBS_SWIPER,
  Sr as ATTR_THUMBS_THUMBS_CONTAINER_CLASS,
  ki as ATTR_TOUCH_ANGLE,
  $i as ATTR_TOUCH_EVENTS_TARGET,
  Gi as ATTR_TOUCH_MOVE_STOP_PROPAGATION,
  Bi as ATTR_TOUCH_RATIO,
  Hi as ATTR_TOUCH_RELEASE_ON_EDGES,
  Vi as ATTR_TOUCH_START_FORCE_PREVENT_DEFAULT,
  Fi as ATTR_TOUCH_START_PREVENT_DEFAULT,
  Yi as ATTR_UNIQUE_NAV_ELEMENTS,
  Wi as ATTR_UPDATE_ON_WINDOW_RESIZE,
  Xi as ATTR_URL,
  Ui as ATTR_USER_AGENT,
  qi as ATTR_VIRTUAL_TRANSLATE,
  ji as ATTR_WATCH_OVERFLOW,
  Ki as ATTR_WATCH_SLIDES_PROGRESS,
  ce as ATTR_WATERFALL,
  le as ATTR_WATERFALL_ELEMENT,
  Zi as ATTR_WIDTH,
  Qi as ATTR_WRAPPER_CLASS,
  xr as ATTR_ZOOM_CONTAINER_CLASS,
  Cr as ATTR_ZOOM_LIMIT_TO_ORIGINAL_SIZE,
  Lr as ATTR_ZOOM_MAX_RATIO,
  Mr as ATTR_ZOOM_MIN_RATIO,
  Ir as ATTR_ZOOM_PAN_ON_MOUSE_MOVE,
  Pr as ATTR_ZOOM_TOGGLE,
  Rr as ATTR_ZOOM_ZOOMED_SLIDE_CLASS,
  tn as BREAKPOINTS,
  Hr as EL_AUTOPLAY_CONTROL,
  Vr as EL_AUTOPLAY_CONTROL_PAUSE,
  Fr as EL_AUTOPLAY_CONTROL_PLAY,
  zr as EL_NAVIGATION_NEXT,
  kr as EL_NAVIGATION_PREV,
  Dr as EL_PAGINATION,
  Nr as EL_PAGINATION_BULLET,
  $r as EL_SCROLLBAR,
  Gr as EL_SCROLLBAR_DRAG,
  Br as EL_SLIDE_COUNT,
  sn as breakpointAttr
};
//# sourceMappingURL=well-waterfall.es.js.map
