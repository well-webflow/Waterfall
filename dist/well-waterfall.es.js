(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode(':root{--swiper-theme-color: #007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function, initial);box-sizing:content-box}.swiper-android .swiper-slide,.swiper-ios .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-slide,.swiper-3d .swiper-cube-shadow{transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-slides-offset-before);scroll-margin-inline-start:var(--swiper-slides-offset-before)}.swiper-css-mode.swiper-horizontal>.swiper-wrapper>.swiper-slide:last-child{margin-inline-end:var(--swiper-slides-offset-after)}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-slides-offset-before);scroll-margin-block-start:var(--swiper-slides-offset-before)}.swiper-css-mode.swiper-vertical>.swiper-wrapper>.swiper-slide:last-child{margin-block-end:var(--swiper-slides-offset-after)}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-slide-shadow-bottom{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:#00000026}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,#00000080,#0000)}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color, var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}:is(.swiper:not(.swiper-watch-progress),.swiper-watch-progress .swiper-slide-visible) .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color: #fff}.swiper-lazy-preloader-black{--swiper-preloader-color: #000}@keyframes swiper-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.swiper-virtual .swiper-slide{-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper:after{content:"";position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper:after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper:after{width:1px;height:var(--swiper-virtual-size)}:root{--swiper-navigation-size: 44px}.swiper-button-prev,.swiper-button-next{position:absolute;width:var(--swiper-navigation-size);height:var(--swiper-navigation-size);z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color, var(--swiper-theme-color))}:is(.swiper-button-prev,.swiper-button-next).swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}:is(.swiper-button-prev,.swiper-button-next).swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled :is(.swiper-button-prev,.swiper-button-next){display:none!important}:is(.swiper-button-prev,.swiper-button-next) ::slotted(svg),:is(.swiper-button-prev,.swiper-button-next) svg{width:100%;height:100%;object-fit:contain;transform-origin:center;fill:currentColor;pointer-events:none}.swiper-button-lock{display:none}.swiper-button-prev,.swiper-button-next{top:var(--swiper-navigation-top-offset, 50%);margin-top:calc(0px - (var(--swiper-navigation-size) / 2))}.swiper-button-prev{left:var(--swiper-navigation-sides-offset, 4px);right:auto}.swiper-button-prev ::slotted(.swiper-navigation-icon),.swiper-button-prev .swiper-navigation-icon{transform:rotate(180deg)}.swiper-button-next{right:var(--swiper-navigation-sides-offset, 4px);left:auto}.swiper-horizontal .swiper-button-prev,.swiper-horizontal .swiper-button-next,.swiper-horizontal~.swiper-button-prev,.swiper-horizontal~.swiper-button-next{top:var(--swiper-navigation-top-offset, 50%);margin-top:calc(0px - (var(--swiper-navigation-size) / 2));margin-left:0}.swiper-horizontal .swiper-button-prev,.swiper-horizontal~.swiper-button-prev,.swiper-horizontal.swiper-rtl .swiper-button-next,.swiper-horizontal.swiper-rtl~.swiper-button-next{left:var(--swiper-navigation-sides-offset, 4px);right:auto}.swiper-horizontal .swiper-button-next,.swiper-horizontal~.swiper-button-next,.swiper-horizontal.swiper-rtl .swiper-button-prev,.swiper-horizontal.swiper-rtl~.swiper-button-prev{right:var(--swiper-navigation-sides-offset, 4px);left:auto}:is(.swiper-horizontal .swiper-button-prev,.swiper-horizontal~.swiper-button-prev,.swiper-horizontal.swiper-rtl .swiper-button-next,.swiper-horizontal.swiper-rtl~.swiper-button-next) ::slotted(.swiper-navigation-icon),:is(.swiper-horizontal .swiper-button-prev,.swiper-horizontal~.swiper-button-prev,.swiper-horizontal.swiper-rtl .swiper-button-next,.swiper-horizontal.swiper-rtl~.swiper-button-next) .swiper-navigation-icon{transform:rotate(180deg)}:is(.swiper-horizontal.swiper-rtl .swiper-button-prev,.swiper-horizontal.swiper-rtl~.swiper-button-prev) ::slotted(.swiper-navigation-icon),:is(.swiper-horizontal.swiper-rtl .swiper-button-prev,.swiper-horizontal.swiper-rtl~.swiper-button-prev) .swiper-navigation-icon{transform:rotate(0)}.swiper-vertical .swiper-button-prev,.swiper-vertical .swiper-button-next,.swiper-vertical~.swiper-button-prev,.swiper-vertical~.swiper-button-next{left:var(--swiper-navigation-top-offset, 50%);right:auto;margin-left:calc(0px - (var(--swiper-navigation-size) / 2));margin-top:0}.swiper-vertical .swiper-button-prev,.swiper-vertical~.swiper-button-prev{top:var(--swiper-navigation-sides-offset, 4px);bottom:auto}:is(.swiper-vertical .swiper-button-prev,.swiper-vertical~.swiper-button-prev) ::slotted(.swiper-navigation-icon),:is(.swiper-vertical .swiper-button-prev,.swiper-vertical~.swiper-button-prev) .swiper-navigation-icon{transform:rotate(-90deg)}.swiper-vertical .swiper-button-next,.swiper-vertical~.swiper-button-next{bottom:var(--swiper-navigation-sides-offset, 4px);top:auto}:is(.swiper-vertical .swiper-button-next,.swiper-vertical~.swiper-button-next) ::slotted(.swiper-navigation-icon),:is(.swiper-vertical .swiper-button-next,.swiper-vertical~.swiper-button-next) .swiper-navigation-icon{transform:rotate(90deg)}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-pagination-fraction,.swiper-pagination-custom,.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal{bottom:var(--swiper-pagination-bottom, 8px);top:var(--swiper-pagination-top, auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));height:var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius, 50%);background:var(--swiper-pagination-bullet-inactive-color, #000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color, var(--swiper-theme-color))}.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets{right:var(--swiper-pagination-right, 8px);left:var(--swiper-pagination-left, auto);top:50%;transform:translate3d(0,-50%,0)}:is(.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets) .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap, 6px) 0;display:block}:is(.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets).swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}:is(.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets).swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}:is(.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-horizontal.swiper-pagination-bullets) .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap, 4px)}:is(.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-horizontal.swiper-pagination-bullets).swiper-pagination-bullets-dynamic{left:50%;transform:translate(-50%);white-space:nowrap}:is(.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-horizontal.swiper-pagination-bullets).swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color, inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, .25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color, var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size, 4px);left:0;top:0}.swiper-vertical>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite{width:var(--swiper-pagination-progressbar-size, 4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius, 10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color, rgba(0, 0, 0, .1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset, 1%);bottom:var(--swiper-scrollbar-bottom, 4px);top:var(--swiper-scrollbar-top, auto);z-index:50;height:var(--swiper-scrollbar-size, 4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%))}.swiper-vertical>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-vertical{position:absolute;left:var(--swiper-scrollbar-left, auto);right:var(--swiper-scrollbar-right, 4px);top:var(--swiper-scrollbar-sides-offset, 1%);z-index:50;width:var(--swiper-scrollbar-size, 4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color, rgba(0, 0, 0, .5));border-radius:var(--swiper-scrollbar-border-radius, 10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>img,.swiper-zoom-container>svg,.swiper-zoom-container>canvas{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move;touch-action:none}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-fade .swiper-slide-active,.swiper-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper.swiper-cube{overflow:visible}.swiper-cube .swiper-slide{pointer-events:none;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-cube.swiper-rtl .swiper-slide{transform-origin:100% 0}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-next,.swiper-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:"";background:#000;position:absolute;inset:0;filter:blur(50px)}.swiper-cube .swiper-slide-next+.swiper-slide{pointer-events:auto;visibility:visible}.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-top,.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-bottom,.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-left,.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-right{z-index:0;backface-visibility:hidden}.swiper.swiper-flip{overflow:visible}.swiper-flip .swiper-slide{pointer-events:none;backface-visibility:hidden;z-index:1}.swiper-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-flip .swiper-slide-active,.swiper-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-top,.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-bottom,.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-left,.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-right{z-index:0;backface-visibility:hidden}.swiper-creative .swiper-slide{backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper.swiper-cards{overflow:visible}.swiper-cards .swiper-slide{transform-origin:center bottom;backface-visibility:hidden;overflow:hidden}')),document.head.appendChild(i)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
function fe(e = "") {
  return e.trim().split(" ").filter((t) => !!t.trim());
}
function Ht(e) {
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
function Ft(e) {
  return window.getComputedStyle(e, null);
}
function Ke(e, t = "x") {
  const s = Ft(e), a = s.transform || s.webkitTransform;
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
function Vt(e) {
  return typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : !!e && typeof e == "object" && (e.nodeType === 1 || e.nodeType === 11);
}
function se(e, ...t) {
  const s = Object(e);
  for (let a = 0; a < t.length; a += 1) {
    const n = t[a];
    if (n == null || Vt(n))
      continue;
    const i = n, u = Object.keys(Object(i));
    for (let d = 0, l = u.length; d < l; d += 1) {
      const p = u[d];
      if (p === "__proto__" || p === "constructor" || p === "prototype")
        continue;
      const c = Object.getOwnPropertyDescriptor(i, p);
      if (!c || !c.enumerable)
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
function Wt(e, t) {
  const s = [t];
  for (; s.length > 0; ) {
    const a = s.shift();
    if (e === a)
      return !0;
    s.push(...a.children, ...a.shadowRoot ? a.shadowRoot.children : [], ...a.assignedElements ? a.assignedElements() : []);
  }
  return !1;
}
function Yt(e, t) {
  let s = t.contains(e);
  return !s && t instanceof HTMLSlotElement && (s = [...t.assignedElements()].includes(e), s || (s = Wt(e, t))), s;
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
function Xt(e, t) {
  const s = [];
  let a = e.previousElementSibling;
  for (; a; )
    (!t || a.matches(t)) && s.push(a), a = a.previousElementSibling;
  return s;
}
function Ut(e, t) {
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
function le(e, t = "") {
  const s = globalThis.trustedTypes;
  typeof s < "u" ? e.innerHTML = s.createPolicy("html", { createHTML: (a) => a }).createHTML(t) : e.innerHTML = t;
}
let We;
function qt() {
  return typeof window > "u" ? { touch: !1 } : {
    touch: "ontouchstart" in window || navigator.maxTouchPoints > 0
  };
}
function Et() {
  return We || (We = qt()), We;
}
let Ye;
function jt({ userAgent: e } = {}) {
  if (typeof window > "u")
    return { ios: !1, android: !1 };
  const t = Et(), s = navigator.platform, a = e || navigator.userAgent, n = { ios: !1, android: !1 }, i = /(Android);?[\s/]+([\d.]+)?/.test(a), u = /(iPhone\sOS|iOS|iPod)/.test(a), d = /iPad/.test(a), l = s === "MacIntel" && t.touch && navigator.maxTouchPoints > 1, p = d || l;
  return i && !(s === "Win32") && (n.os = "android", n.android = !0), (p || u) && (n.os = "ios", n.ios = !0), n;
}
function St(e = {}) {
  return Ye || (Ye = jt(e)), Ye;
}
let Xe;
function Kt() {
  if (typeof window > "u")
    return { isSafari: !1, isWebView: !1, need3dFix: !1 };
  const e = St(), t = navigator.userAgent, s = t.toLowerCase(), a = s.includes("safari") && !s.includes("chrome") && !s.includes("android"), n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t), i = a || n && e.ios;
  return { isSafari: a, isWebView: n, need3dFix: i };
}
function yt() {
  return Xe || (Xe = Kt()), Xe;
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
    const u = n, d = [u - t];
    d.push(...Array.from({ length: t }).map((l, p) => u + a + p)), e.slides.forEach((l, p) => {
      l.column !== void 0 && d.includes(l.column) && Ue(e, p);
    });
    return;
  }
  const i = n + a - 1;
  if (e.params.rewind || e.params.loop)
    for (let u = n - t; u <= i + t; u += 1) {
      const d = (u % s + s) % s;
      (d < n || d > i) && Ue(e, d);
    }
  else
    for (let u = Math.max(n - t, 0); u <= Math.min(i + t, s - 1); u += 1)
      u !== n && (u > i || u < n) && Ue(e, u);
};
function Zt(e, t = "window", s) {
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
    const { point: d, value: l } = i[u];
    t === "window" ? window.matchMedia(`(min-width: ${l}px)`).matches && (a = d) : l <= s.clientWidth && (a = d);
  }
  return a || "max";
}
const it = (e, t) => !!(e.grid && t.grid && t.grid.rows > 1);
function Qt() {
  const e = this, { realIndex: t, initialized: s, params: a, el: n } = e, i = a.breakpoints;
  if (!i || i && Object.keys(i).length === 0)
    return;
  const u = a.breakpointsBase === "window" || !a.breakpointsBase ? a.breakpointsBase : "container", d = ["window", "container"].includes(a.breakpointsBase) || !a.breakpointsBase ? e.el : document.querySelector(a.breakpointsBase), l = e.getBreakpoint(i, u, d);
  if (!l || e.currentBreakpoint === l)
    return;
  const p = i, f = (l in p ? p[l] : void 0) || e.originalParams, T = it(e, a), o = it(e, f), r = e.params.grabCursor, h = f.grabCursor, E = a.enabled;
  T && !o ? (n.classList.remove(`${a.containerModifierClass}grid`, `${a.containerModifierClass}grid-column`), e.emitContainerClasses()) : !T && o && (n.classList.add(`${a.containerModifierClass}grid`), (f.grid.fill && f.grid.fill === "column" || !f.grid.fill && a.grid.fill === "column") && n.classList.add(`${a.containerModifierClass}grid-column`), e.emitContainerClasses()), r && !h ? e.unsetGrabCursor() : !r && h && e.setGrabCursor();
  const S = (A, O) => A[O];
  ["navigation", "pagination", "scrollbar"].forEach((A) => {
    const O = S(f, A);
    if (typeof O > "u")
      return;
    const C = S(a, A), k = typeof C == "object" && C !== null && C.enabled, _ = typeof O == "object" && O !== null && O.enabled, b = e[A];
    k && !_ && b?.disable?.(), !k && _ && b?.enable?.();
  });
  const g = f.direction && f.direction !== a.direction, m = a.loop && (f.slidesPerView !== a.slidesPerView || g), v = a.loop;
  g && s && e.changeDirection(), se(e.params, f);
  const y = e.params.enabled, L = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev
  }), E && !y ? e.disable() : !E && y && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", f), s && (m ? (e.loopDestroy(), e.updateSlides(), e.loopCreate(t)) : !v && L ? (e.updateSlides(), e.loopCreate(t)) : v && !L && e.loopDestroy()), e.emit("breakpoint", f);
}
var Jt = { setBreakpoint: Qt, getBreakpoint: Zt };
function es() {
  const e = this, { isLocked: t, params: s } = e, { slidesOffsetBefore: a } = s;
  if (a) {
    const n = e.slides.length - 1, i = e.slidesGrid[n] + e.slidesSizesGrid[n] + a * 2;
    e.isLocked = e.size > i;
  } else
    e.isLocked = e.snapGrid.length === 1;
  s.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked), s.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var ts = { checkOverflow: es };
function ss(e, t) {
  const s = [];
  return e.forEach((a) => {
    typeof a == "object" ? Object.keys(a).forEach((n) => {
      a[n] && s.push(t + n);
    }) : typeof a == "string" && s.push(t + a);
  }), s;
}
function as() {
  const e = this, { classNames: t, params: s, rtl: a, el: n, device: i } = e, u = ss([
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
function ns() {
  const e = this, { el: t, classNames: s } = e;
  !t || typeof t == "string" || (t.classList.remove(...s), e.emitContainerClasses());
}
var is = { addClasses: as, removeClasses: ns };
const At = {
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
var rs = {
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
function ls(e) {
  const t = this;
  t.destroyed || t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
}
function os() {
  const e = this;
  e.destroyed || e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
function ds(e) {
  const t = this;
  t.destroyed || (Qe(t, e.target), !(e.type === "error" || t.params.cssMode || t.params.slidesPerView !== "auto" && !t.params.autoHeight) && t.update());
}
function cs() {
  const e = this, { params: t, el: s } = e;
  if (s && s.offsetWidth === 0)
    return;
  const { wrapperEl: a } = e, n = t.cssMode && a ? a.style.scrollSnapType : "none";
  n !== "none" && (a.style.scrollSnapType = "none", requestAnimationFrame(() => {
    e.destroyed || (a.style.scrollSnapType = n);
  })), t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: i, allowSlidePrev: u, snapGrid: d } = e, l = e.virtual && e.params.virtual?.enabled;
  e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
  const p = l && t.loop;
  if ((t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !p) {
    const c = l ? e.virtual.slides.length : e.slides.length;
    e.slideTo(c - 1, 0, !1, !0);
  } else
    e.params.loop && !l ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
  if (t.cssMode && e.onScroll && e.onScroll(), e.autoplay && e.autoplay.running && e.autoplay.paused) {
    const c = e.autoplay;
    clearTimeout(c.resizeTimeout), c.resizeTimeout = setTimeout(() => {
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
    }, 500);
  }
  e.allowSlidePrev = u, e.allowSlideNext = i, e.params.watchOverflow && d !== e.snapGrid && e.checkOverflow();
}
function _t(e) {
  let t, s;
  const a = e.el;
  return typeof e.params.width < "u" && e.params.width !== null ? t = e.params.width : t = a.clientWidth, typeof e.params.height < "u" && e.params.height !== null ? s = e.params.height : s = a.clientHeight, t === 0 && e.isHorizontal() || s === 0 && e.isVertical() ? null : (t = t - parseInt(ue(a, "padding-left") || "0", 10) - parseInt(ue(a, "padding-right") || "0", 10), s = s - parseInt(ue(a, "padding-top") || "0", 10) - parseInt(ue(a, "padding-bottom") || "0", 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), { width: t, height: s });
}
function xt(e) {
  const { params: t, el: s } = e;
  if (!t.updateOnWindowResize || !t.resizeObserver || typeof window.ResizeObserver > "u")
    return !1;
  const a = e.isHorizontal(), n = a ? s.clientWidth : s.clientHeight;
  if (n === e._clientSize)
    return !1;
  const i = _t(e);
  return !i || (a ? i.width : i.height) !== e.size ? !0 : (e._clientSize = n, !1);
}
function fs() {
  const e = this, t = e.el, s = _t(e);
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
function us() {
  const e = this;
  if (e.destroyed)
    return;
  const { wrapperEl: t, rtlTranslate: s, enabled: a } = e;
  if (!a || xt(e))
    return;
  e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, e.translate === 0 && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
  let n;
  const i = e.maxTranslate() - e.minTranslate();
  i === 0 ? n = 0 : n = (e.translate - e.minTranslate()) / i, n !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
}
function ps(e) {
  const t = this;
  if (t.destroyed)
    return;
  const s = t.touchEventsData;
  let a = e.originalEvent ?? e;
  if (a.type === "touchend" || a.type === "touchcancel") {
    const y = [...a.changedTouches].find((L) => L.identifier === s.touchId);
    if (!y || y.identifier !== s.touchId)
      return;
  } else if (s.touchId !== null || a.pointerId !== s.pointerId)
    return;
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(a.type) && !(["pointercancel", "contextmenu"].includes(a.type) && (t.browser.isSafari || t.browser.isWebView)))
    return;
  s.pointerId = null, s.touchId = null, s.startEventPath = void 0, s.lastMoveEvent = void 0;
  const { params: i, touches: u, rtlTranslate: d, slidesGrid: l, enabled: p } = t;
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
  if (s.lastClickTime = ae(), Se(() => {
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
  let r = 0, h = t.slidesSizesGrid[0];
  for (let v = 0; v < l.length; v += v < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
    const y = v < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    typeof l[v + y] < "u" ? (o || T >= l[v] && T < l[v + y]) && (r = v, h = l[v + y] - l[v]) : (o || T >= l[v]) && (r = v, h = l[l.length - 1] - l[l.length - 2]);
  }
  let E = null, S = null;
  i.rewind && (t.isBeginning ? S = i.virtual?.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (E = 0));
  const g = (T - l[r]) / h, m = r < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
  if (f > i.longSwipesMs) {
    if (!i.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" && (g >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? E : r + m) : t.slideTo(r)), t.swipeDirection === "prev" && (g > 1 - i.longSwipesRatio ? t.slideTo(r + m) : S !== null && g < 0 && Math.abs(g) > i.longSwipesRatio ? t.slideTo(S) : t.slideTo(r));
  } else {
    if (!i.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation && (a.target === t.navigation.nextEl || a.target === t.navigation.prevEl) ? a.target === t.navigation.nextEl ? t.slideTo(r + m) : t.slideTo(r) : (t.swipeDirection === "next" && t.slideTo(E !== null ? E : r + m), t.swipeDirection === "prev" && t.slideTo(S !== null ? S : r));
  }
}
function ms(e) {
  const t = this;
  if (t.destroyed)
    return;
  const s = t.touchEventsData, { params: a, touches: n, rtlTranslate: i, enabled: u } = t;
  if (!u || !a.simulateTouch && e.pointerType === "mouse")
    return;
  const d = e, l = d.originalEvent ?? d;
  if (l.type === "pointermove" && (s.touchId !== null || l.pointerId !== s.pointerId))
    return;
  let p;
  if (l.type === "touchmove") {
    const A = [...l.changedTouches].find((O) => O.identifier === s.touchId);
    if (!A || A.identifier !== s.touchId)
      return;
    p = A;
  } else
    p = l;
  if (!s.isTouched) {
    s.startMoving && s.isScrolling && t.emit("touchMoveOpposite", l);
    return;
  }
  if (s.lastMoveEvent === l)
    return;
  s.lastMoveEvent = l;
  for (const L of s.startEventPath ?? []) {
    if (L === t.el)
      break;
    const A = L.swiper;
    A && A !== t && !A.destroyed && A.params.nested && A.touchEventsData.isTouched && A.onTouchMove(e);
  }
  const c = p.pageX, f = p.pageY;
  if (l.preventedByNestedSwiper) {
    n.startX = c, n.startY = f;
    return;
  }
  if (!t.allowTouchMove) {
    l.target.matches(s.focusableElements) || (t.allowClick = !1), s.isTouched && (Object.assign(n, {
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
  if (document.activeElement && document.activeElement.matches(s.focusableElements) && document.activeElement !== l.target && l.pointerType !== "mouse" && document.activeElement.blur(), document.activeElement && l.target === document.activeElement && l.target.matches(s.focusableElements)) {
    s.isMoved = !0, t.allowClick = !1;
    return;
  }
  s.allowTouchCallbacks && t.emit("touchMove", l), n.previousX = n.currentX, n.previousY = n.currentY, n.currentX = c, n.currentY = f;
  const T = n.currentX - n.startX, o = n.currentY - n.startY;
  if (t.params.threshold && Math.sqrt(T ** 2 + o ** 2) < t.params.threshold)
    return;
  if (typeof s.isScrolling > "u") {
    let L;
    t.isHorizontal() && n.currentY === n.startY || t.isVertical() && n.currentX === n.startX ? s.isScrolling = !1 : T * T + o * o >= 25 && (L = Math.atan2(Math.abs(o), Math.abs(T)) * 180 / Math.PI, s.isScrolling = t.isHorizontal() ? L > a.touchAngle : 90 - L > a.touchAngle);
  }
  if (s.isScrolling && t.emit("touchMoveOpposite", l), typeof s.startMoving > "u" && (n.currentX !== n.startX || n.currentY !== n.startY) && (s.startMoving = !0), s.isScrolling || l.type === "touchmove" && s.preventTouchMoveFromPointerMove) {
    s.isTouched = !1;
    return;
  }
  if (!s.startMoving)
    return;
  t.allowClick = !1, !a.cssMode && l.cancelable && l.preventDefault(), a.touchMoveStopPropagation && !a.nested && l.stopPropagation();
  let r = t.isHorizontal() ? T : o, h = t.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
  a.oneWayMovement && (r = Math.abs(r) * (i ? 1 : -1), h = Math.abs(h) * (i ? 1 : -1)), n.diff = r, r *= a.touchRatio, i && (r = -r, h = -h);
  const E = t.touchesDirection;
  t.swipeDirection = r > 0 ? "prev" : "next", t.touchesDirection = h > 0 ? "prev" : "next";
  const S = t.params.loop && !a.cssMode, g = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
  if (!s.isMoved) {
    if (S && g && t.loopFix({ direction: t.swipeDirection }), s.startTranslate = t.getTranslate(), t.setTransition(0), t.animating) {
      const L = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: {
          bySwiperTouchMove: !0
        }
      });
      t.wrapperEl.dispatchEvent(L);
    }
    s.allowMomentumBounce = !1, a.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0), t.emit("sliderFirstMove", l);
  }
  if ((/* @__PURE__ */ new Date()).getTime(), a._loopSwapReset !== !1 && s.isMoved && s.allowThresholdMove && E !== t.touchesDirection && S && g && Math.abs(r) >= 1) {
    Object.assign(n, {
      startX: c,
      startY: f,
      currentX: c,
      currentY: f,
      startTranslate: s.currentTranslate
    }), s.loopSwapReset = !0, s.startTranslate = s.currentTranslate;
    return;
  }
  t.emit("sliderMove", l), s.isMoved = !0;
  const m = s.startTranslate ?? 0;
  s.currentTranslate = r + m;
  let v = !0, y = a.resistanceRatio;
  if (a.touchReleaseOnEdges && (y = 0), r > 0 ? (S && g && s.allowThresholdMove && s.currentTranslate > (a.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] - (a.slidesPerView !== "auto" && t.slides.length - a.slidesPerView >= 2 ? t.slidesSizesGrid[t.activeIndex + 1] + t.params.spaceBetween : 0) - t.params.spaceBetween : t.minTranslate()) && t.loopFix({ direction: "prev", setTranslate: !0, activeSlideIndex: 0 }), s.currentTranslate > t.minTranslate() && (v = !1, a.resistance && (s.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + m + r) ** y))) : r < 0 && (S && g && s.allowThresholdMove && s.currentTranslate < (a.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween + (a.slidesPerView !== "auto" && t.slides.length - a.slidesPerView >= 2 ? t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween : 0) : t.maxTranslate()) && t.loopFix({
    direction: "next",
    setTranslate: !0,
    activeSlideIndex: t.slides.length - (a.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(String(a.slidesPerView))))
  }), s.currentTranslate < t.maxTranslate() && (v = !1, a.resistance && (s.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - m - r) ** y))), v && (l.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === "next" && (s.currentTranslate ?? 0) < m && (s.currentTranslate = m), !t.allowSlidePrev && t.swipeDirection === "prev" && (s.currentTranslate ?? 0) > m && (s.currentTranslate = m), !t.allowSlidePrev && !t.allowSlideNext && (s.currentTranslate = m), a.threshold > 0)
    if (Math.abs(r) > a.threshold || s.allowThresholdMove) {
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
function hs(e, t) {
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
function rt(e, t, s) {
  const { params: a } = e, n = a.edgeSwipeDetection, i = a.edgeSwipeThreshold;
  return n && (s <= i || s >= window.innerWidth - i) ? n === "prevent" ? (t.preventDefault(), !0) : !1 : !0;
}
function gs(e) {
  const t = this;
  if (t.destroyed)
    return;
  const s = e.originalEvent ?? e, a = t.touchEventsData;
  if (s.type === "pointerdown") {
    const g = s;
    if (a.pointerId !== null && a.pointerId !== g.pointerId)
      return;
    a.pointerId = g.pointerId;
  } else s.type === "touchstart" && s.targetTouches.length === 1 && (a.touchId = s.targetTouches[0].identifier);
  if (s.type === "touchstart") {
    rt(t, s, s.targetTouches[0].pageX);
    return;
  }
  const { params: n, touches: i, enabled: u } = t;
  if (!u || !n.simulateTouch && s.pointerType === "mouse" || t.animating && n.preventInteractionOnTransition)
    return;
  !t.animating && n.cssMode && n.loop && t.loopFix();
  let d = s.target;
  if (n.touchEventsTarget === "wrapper" && !Yt(d, t.wrapperEl))
    return;
  const l = s;
  if (typeof l.which == "number" && l.which === 3 || typeof l.button == "number" && l.button > 0 || a.isTouched && a.isMoved)
    return;
  const p = !!n.noSwipingClass && n.noSwipingClass !== "", c = s.composedPath ? s.composedPath() : s.path;
  p && s.target && s.target.shadowRoot && c && (d = c[0]);
  const f = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`, T = !!(s.target && s.target.shadowRoot);
  if (n.noSwiping && (T ? hs(f, d) : d.closest(f))) {
    t.allowClick = !0;
    return;
  }
  if (n.swipeHandler && typeof n.swipeHandler == "string" && !d.closest(n.swipeHandler))
    return;
  const o = s;
  i.currentX = o.pageX, i.currentY = o.pageY;
  const r = i.currentX, h = i.currentY;
  if (!rt(t, s, r))
    return;
  Object.assign(a, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), i.startX = r, i.startY = h, a.touchStartTime = ae(), a.startEventPath = c, t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (a.allowThresholdMove = !1);
  let E = !0;
  d.matches(a.focusableElements) && (E = !1, d.nodeName === "SELECT" && (a.isTouched = !1)), document.activeElement && document.activeElement.matches(a.focusableElements) && document.activeElement !== d && (o.pointerType === "mouse" || o.pointerType !== "mouse" && !d.matches(a.focusableElements)) && document.activeElement.blur();
  const S = E && t.allowTouchMove && n.touchStartPreventDefault;
  (n.touchStartForcePreventDefault || S) && !d.isContentEditable && s.preventDefault(), n.freeMode && n.freeMode.enabled && t.freeMode && t.animating && !n.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", s);
}
const Ct = (e, t) => {
  const { params: s, el: a, wrapperEl: n, device: i } = e, u = !!s.nested, d = t === "on" ? "addEventListener" : "removeEventListener", l = t;
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
    e[l](c, cs, !0);
  };
  s.updateOnWindowResize ? p(i.ios || i.android ? "resize orientationchange observerUpdate" : "resize observerUpdate") : p("observerUpdate"), s.lazyPreload && (a[d]("load", e.onLoad, { capture: !0 }), a[d]("error", e.onLoad, { capture: !0 }));
};
function Ts() {
  const e = this, { params: t } = e;
  e.onTouchStart = gs.bind(e), e.onTouchMove = ms.bind(e), e.onTouchEnd = ps.bind(e), e.onDocumentTouchStart = os.bind(e), t.cssMode && (e.onScroll = us.bind(e)), e.onClick = ls.bind(e), e.onLoad = ds.bind(e), Ct(e, "on");
}
function vs() {
  Ct(this, "off");
}
var Es = {
  attachEvents: Ts,
  detachEvents: vs
};
function Ss(e) {
  const t = this;
  if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
    return;
  const s = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
    t.__preventObserver__ = !1;
  });
}
function ys() {
  const e = this;
  e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = !1;
  }));
}
var bs = {
  setGrabCursor: Ss,
  unsetGrabCursor: ys
};
function As(e, t) {
  const s = this, { params: a, slidesEl: n } = s;
  if (!a.loop || s.virtual && s.params.virtual?.enabled)
    return;
  const i = () => {
    Q(n, `.${a.slideClass}, swiper-slide`).forEach((r, h) => {
      r.setAttribute("data-swiper-slide-index", String(h));
    });
  }, u = () => {
    const o = Q(n, `.${a.slideBlankClass}`);
    o.forEach((r) => {
      r.remove();
    }), o.length > 0 && (s.recalcSlides(), s.updateSlides());
  }, d = s.grid && a.grid && a.grid.rows > 1;
  a.loopAddBlankSlides && (a.slidesPerGroup > 1 || d) && u();
  const l = a.slidesPerGroup * (d ? a.grid.rows : 1), p = s.slides.length % l !== 0, c = d && s.slides.length % a.grid.rows !== 0, f = (o) => {
    for (let r = 0; r < o; r += 1) {
      const h = s.isElement ? ne("swiper-slide", [a.slideBlankClass]) : ne("div", [a.slideClass, a.slideBlankClass]);
      s.slidesEl.append(h);
    }
  };
  if (p) {
    if (a.loopAddBlankSlides) {
      const o = l - s.slides.length % l;
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
function _s() {
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
function xs(e = {}) {
  const { slideRealIndex: t, slideTo: s = !0, direction: a, setTranslate: n, activeSlideIndex: i, initial: u, byController: d, byMousewheel: l } = e;
  let p = i;
  const c = this;
  if (!c.params.loop || c.params.watchOverflow && c.isLocked)
    return;
  c.emit("beforeLoopFix"), c.__loopFixInProgress__ = !0;
  const { slides: f, allowSlidePrev: T, allowSlideNext: o, slidesEl: r, params: h } = c, { centeredSlides: E, slidesOffsetBefore: S, slidesOffsetAfter: g, initialSlide: m } = h, v = E || !!S || !!g;
  if (c.allowSlidePrev = !0, c.allowSlideNext = !0, c.virtual && h.virtual?.enabled) {
    if (s) {
      const R = c.virtual.slides.length, N = c.virtual.slidesBefore ?? 0;
      !v && c.snapIndex === 0 ? c.slideTo(R, 0, !1, !0) : v && c.snapIndex < h.slidesPerView ? c.slideTo(R + c.snapIndex, 0, !1, !0) : c.snapIndex === c.snapGrid.length - 1 && c.slideTo(N, 0, !1, !0);
    }
    c.allowSlidePrev = T, c.allowSlideNext = o, c.__loopFixInProgress__ = !1, c.emit("loopFix");
    return;
  }
  let y = h.slidesPerView;
  y === "auto" ? y = c.slidesPerViewDynamic() : (y = Math.ceil(parseFloat(String(h.slidesPerView))), v && y % 2 === 0 && (y = y + 1));
  const L = h.slidesPerGroupAuto ? y : h.slidesPerGroup, A = (R) => (typeof R == "function" ? R.call(c) : R) || 0, O = c.slidesGrid.length > 1 ? (c.slidesGrid[c.slidesGrid.length - 1] - c.slidesGrid[0]) / (c.slidesGrid.length - 1) : c.size, C = O > 0 ? A(S) / O : 0, k = O > 0 ? A(g) / O : 0;
  let _ = v ? Math.max(L, (E ? Math.ceil(y / 2) : 0) + Math.ceil(Math.max(C, k))) : L;
  _ % L !== 0 && (_ += L - _ % L), _ += h.loopAdditionalSlides, c.loopedSlides = _;
  const b = c.grid && h.grid && h.grid.rows > 1;
  f.length < y + _ || c.params.effect === "cards" && f.length < y + _ * 2 ? Ne("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && h.grid.fill === "row" && Ne("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  const M = [], x = [], I = b ? Math.ceil(f.length / h.grid.rows) : f.length;
  _ > (I - y) / 2 && (_ = Math.max(L, Math.floor((I - y - 1) / 2 / L) * L), c.loopedSlides = _);
  const $ = u && I - m < y && !v;
  let V = $ ? m : c.activeIndex;
  typeof p > "u" ? p = c.getSlideIndex(f.find((R) => R.classList.contains(h.slideActiveClass))) : V = p;
  const j = a === "next" || !a, P = a === "prev" || !a;
  let z = 0, G = 0;
  const q = (b ? f[p].column ?? 0 : p) + (v && typeof n > "u" ? (E ? -y / 2 + 0.5 : 0) - C : 0);
  if (q < _) {
    z = Math.max(_ - q, L);
    for (let R = 0; R < z; R += 1) {
      const N = R - Math.floor(R / I) * I;
      if (b) {
        const B = I - N - 1;
        for (let K = f.length - 1; K >= 0; K -= 1)
          f[K].column === B && M.push(K);
      } else
        M.push(I - N - 1);
    }
  } else if (q + y > I - _) {
    G = Math.max(q - (I - _ * 2), L), $ && (G = Math.max(G, y - I + m + 1)), G = Math.max(G, Math.ceil(q + y - I));
    for (let R = 0; R < G; R += 1) {
      const N = R - Math.floor(R / I) * I;
      b ? f.forEach((B, K) => {
        B.column === N && x.push(K);
      }) : x.push(N);
    }
  }
  if (c.__preventObserver__ = !0, requestAnimationFrame(() => {
    c.__preventObserver__ = !1;
  }), c.params.effect === "cards" && f.length < y + _ * 2 && (x.includes(p) && x.splice(x.indexOf(p), 1), M.includes(p) && M.splice(M.indexOf(p), 1)), P && M.forEach((R) => {
    const N = f[R];
    N.swiperLoopMoveDOM = !0, r.prepend(N), N.swiperLoopMoveDOM = !1;
  }), j && x.forEach((R) => {
    const N = f[R];
    N.swiperLoopMoveDOM = !0, r.append(N), N.swiperLoopMoveDOM = !1;
  }), c.recalcSlides(), h.slidesPerView === "auto" ? c.updateSlides() : b && (M.length > 0 && P || x.length > 0 && j) && c.slides.forEach((R, N) => {
    c.grid.updateSlide(N, R, c.slides);
  }), h.watchSlidesProgress && c.updateSlidesOffset(), s) {
    if (M.length > 0 && P) {
      if (typeof t > "u") {
        const R = c.slidesGrid[V], B = c.slidesGrid[V + z] - R;
        l ? c.setTranslate(c.translate - B) : (c.slideTo(V + Math.ceil(z), 0, !1, !0), n && (c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - B, c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - B));
      } else if (n) {
        const R = b ? M.length / h.grid.rows : M.length;
        c.slideTo(c.activeIndex + R, 0, !1, !0), c.touchEventsData.currentTranslate = c.translate;
      }
    } else if (x.length > 0 && j)
      if (typeof t > "u") {
        const R = c.slidesGrid[V], B = c.slidesGrid[V - G] - R;
        l ? c.setTranslate(c.translate - B) : (c.slideTo(V - G, 0, !1, !0), n && (c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - B, c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - B));
      } else {
        const R = b ? x.length / h.grid.rows : x.length;
        c.slideTo(c.activeIndex - R, 0, !1, !0);
      }
  }
  c.allowSlidePrev = T, c.allowSlideNext = o;
  const w = c.controller?.control;
  if (w && !d) {
    const R = {
      slideRealIndex: t,
      direction: a,
      setTranslate: n,
      activeSlideIndex: p,
      byController: !0
    };
    Array.isArray(w) ? w.forEach((N) => {
      !N.destroyed && N.params.loop && N.loopFix({
        ...R,
        slideTo: N.params.slidesPerView === h.slidesPerView ? s : !1
      });
    }) : w instanceof c.constructor && w.params.loop && w.loopFix({
      ...R,
      slideTo: w.params.slidesPerView === h.slidesPerView ? s : !1
    });
  }
  c.__loopFixInProgress__ = !1, c.emit("loopFix");
}
var Cs = {
  loopCreate: As,
  loopFix: xs,
  loopDestroy: _s
};
function Ls(e, t) {
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
const Ms = ({ swiper: e, extendParams: t, on: s }) => {
  const a = [], n = (d, l = {}) => {
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
      attributes: typeof l.attributes > "u" ? !0 : l.attributes,
      childList: e.isElement || (typeof l.childList > "u" ? !0 : l.childList),
      characterData: typeof l.characterData > "u" ? !0 : l.characterData
    }), a.push(c);
  }, i = () => {
    if (e.params.observer) {
      if (e.params.observeParents) {
        const d = me(e.hostEl);
        for (let l = 0; l < d.length; l += 1)
          n(d[l]);
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
}, Is = ({ swiper: e, on: t, emit: s }) => {
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
        f.forEach(({ contentBoxSize: r, contentRect: h, target: E }) => {
          if (E && E !== e.el)
            return;
          const S = Array.isArray(r) ? r[0] : r;
          T = h ? h.width : S.inlineSize, o = h ? h.height : S.blockSize;
        }), (T !== p || o !== c) && (p = T, c = o, i());
      });
    }), a.observe(e.el);
  }, d = () => {
    n && window.cancelAnimationFrame(n), a && a.unobserve && e.el && (a.unobserve(e.el), a = null);
  }, l = () => {
    !e || e.destroyed || !e.initialized || s("orientationchange");
  };
  t("init", () => {
    if (e.params.resizeObserver && typeof window.ResizeObserver < "u") {
      u();
      return;
    }
    window.addEventListener("resize", i), window.addEventListener("orientationchange", l);
  }), t("destroy", () => {
    d(), window.removeEventListener("resize", i), window.removeEventListener("orientationchange", l);
  });
};
function Ps(e, t = !0, s) {
  const a = this, { enabled: n, params: i, animating: u } = a;
  if (!n || a.destroyed)
    return a;
  typeof e > "u" && (e = a.params.speed);
  let d = i.slidesPerGroup;
  i.slidesPerView === "auto" && i.slidesPerGroup === 1 && i.slidesPerGroupAuto && (d = Math.max(a.slidesPerViewDynamic("current", !0), 1));
  const l = a.activeIndex < i.slidesPerGroupSkip ? 1 : d, p = a.virtual && i.virtual?.enabled;
  if (i.loop) {
    if (u && !p && i.loopPreventsSliding)
      return !1;
    if (a.loopFix({ direction: "next" }), a._clientLeft = a.wrapperEl.clientLeft, a.activeIndex === a.slides.length - 1 && i.cssMode)
      return requestAnimationFrame(() => {
        a.slideTo(a.activeIndex + l, e, t, s);
      }), !0;
  }
  return i.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + l, e, t, s);
}
function Rs(e, t = !0, s) {
  const a = this, { params: n, snapGrid: i, slidesGrid: u, rtlTranslate: d, enabled: l, animating: p } = a;
  if (!l || a.destroyed)
    return a;
  typeof e > "u" && (e = a.params.speed);
  const c = a.virtual && n.virtual?.enabled;
  if (n.loop) {
    if (p && !c && n.loopPreventsSliding)
      return !1;
    a.loopFix({ direction: "prev" }), a._clientLeft = a.wrapperEl.clientLeft;
  }
  const f = d ? a.translate : -a.translate;
  function T(g) {
    return g < 0 ? -Math.floor(Math.abs(g)) : Math.floor(g);
  }
  const o = T(f), r = i.map((g) => T(g)), h = n.freeMode && n.freeMode.enabled;
  let E = i[r.indexOf(o) - 1];
  if (typeof E > "u" && (n.cssMode || h)) {
    let g;
    i.forEach((m, v) => {
      o >= m && (g = v);
    }), typeof g < "u" && (E = h ? i[g] : i[g > 0 ? g - 1 : g]);
  }
  let S = 0;
  if (typeof E < "u" && (S = u.indexOf(E), S < 0 && (S = a.activeIndex - 1), n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto)) {
    const g = a.slidesPerViewDynamic("previous", !0) - 1;
    S = Math.max(a.activeIndex - Math.max(g, 1), 0);
  }
  if (n.rewind && a.isBeginning) {
    const g = a.params.virtual?.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
    return a.slideTo(g, e, t, s);
  } else if (n.loop && a.activeIndex === 0 && n.cssMode)
    return requestAnimationFrame(() => {
      a.slideTo(S, e, t, s);
    }), !0;
  return a.slideTo(S, e, t, s);
}
function Os(e, t = !0, s) {
  const a = this;
  if (!a.destroyed)
    return typeof e > "u" && (e = a.params.speed), a.slideTo(a.activeIndex, e, t, s);
}
function ws(e = 0, t, s = !0, a, n) {
  typeof e == "string" && (e = parseInt(e, 10));
  const i = this;
  let u = e;
  u < 0 && (u = 0);
  const { params: d, snapGrid: l, slidesGrid: p, previousIndex: c, activeIndex: f, rtlTranslate: T, wrapperEl: o, enabled: r } = i;
  if (!r && !a && !n || i.destroyed || i.animating && d.preventInteractionOnTransition)
    return !1;
  typeof t > "u" && (t = i.params.speed);
  const h = Math.min(i.params.slidesPerGroupSkip, u);
  let E = h + Math.floor((u - h) / i.params.slidesPerGroup);
  E >= l.length && (E = l.length - 1);
  const S = -l[E];
  if (d.normalizeSlideIndex)
    for (let A = 0; A < p.length; A += 1) {
      const O = -Math.floor(S * 100), C = Math.floor(p[A] * 100), k = Math.floor(p[A + 1] * 100);
      typeof p[A + 1] < "u" ? O >= C && O < k - (k - C) / 2 ? u = A : O >= C && O < k && (u = A + 1) : O >= C && (u = A);
    }
  if (i.initialized && u !== f && (!i.allowSlideNext && (T ? S > i.translate && S > i.minTranslate() : S < i.translate && S < i.minTranslate()) || !i.allowSlidePrev && S > i.translate && S > i.maxTranslate() && (f || 0) !== u))
    return !1;
  u !== (c || 0) && s && i.emit("beforeSlideChangeStart"), i.updateProgress(S);
  let g;
  u > f ? g = "next" : u < f ? g = "prev" : g = "reset";
  const m = i.virtual && i.params.virtual?.enabled;
  if (!(m && n) && (T && -S === i.translate || !T && S === i.translate))
    return i.updateActiveIndex(u), d.autoHeight && i.updateAutoHeight(), i.updateSlidesClasses(), d.effect !== "slide" && i.setTranslate(S), g !== "reset" && (i.transitionStart(s, g), i.transitionEnd(s, g)), !1;
  if (d.cssMode) {
    xt(i) && i.updateActiveIndex(u);
    const A = i.isHorizontal(), O = T ? S : -S;
    return t === 0 ? (m && (i.wrapperEl.style.scrollSnapType = "none", i._immediateVirtual = !0), m && !i._cssModeVirtualInitialSet && (i.params.initialSlide ?? 0) > 0 ? (i._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
      o[A ? "scrollLeft" : "scrollTop"] = O;
    })) : o[A ? "scrollLeft" : "scrollTop"] = O, m && requestAnimationFrame(() => {
      i.wrapperEl.style.scrollSnapType = "", i._immediateVirtual = !1;
    })) : o.scrollTo({
      [A ? "left" : "top"]: O,
      behavior: "smooth"
    }), !0;
  }
  const L = yt().isSafari;
  return m && !n && L && i.isElement && i.virtual.update(!1, !1, u), i.setTransition(t), i.setTranslate(S), i.updateActiveIndex(u), i.updateSlidesClasses(), i.emit("beforeTransitionStart", t, a), i.transitionStart(s, g), t === 0 ? i.transitionEnd(s, g) : i.animating || (i.animating = !0, i.onSlideToWrapperTransitionEnd || (i.onSlideToWrapperTransitionEnd = function(O) {
    !i || i.destroyed || O.target === this && (i.wrapperEl.removeEventListener("transitionend", i.onSlideToWrapperTransitionEnd), i.onSlideToWrapperTransitionEnd = null, delete i.onSlideToWrapperTransitionEnd, i.transitionEnd(s, g));
  }), i.wrapperEl.addEventListener("transitionend", i.onSlideToWrapperTransitionEnd)), !0;
}
function Ds() {
  const e = this;
  if (e.destroyed)
    return;
  const { params: t, slidesEl: s, clickedSlide: a, clickedIndex: n } = e;
  if (a === void 0 || n === void 0)
    return;
  const i = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let u = e.getSlideIndexWhenGrid(n), d;
  const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`, p = e.grid && e.params.grid && e.params.grid.rows > 1;
  if (t.loop) {
    if (e.animating)
      return;
    d = parseInt(a.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? e.slideToLoop(d) : u > (p ? (e.slides.length - i) / 2 - (e.params.grid.rows - 1) : e.slides.length - i) ? (e.loopFix(), u = e.getSlideIndex(Q(s, `${l}[data-swiper-slide-index="${d}"]`)[0]), Se(() => {
      e.slideTo(u);
    })) : e.slideTo(u);
  } else
    e.slideTo(u);
}
function Ns(e, t = !0, s, a = 0.5) {
  const n = this;
  if (n.destroyed)
    return;
  typeof e > "u" && (e = n.params.speed);
  let i = n.activeIndex;
  const u = Math.min(n.params.slidesPerGroupSkip, i), d = u + Math.floor((i - u) / n.params.slidesPerGroup), l = n.rtlTranslate ? n.translate : -n.translate;
  if (l >= n.snapGrid[d]) {
    const p = n.snapGrid[d], c = n.snapGrid[d + 1];
    l - p > (c - p) * a && (i += n.params.slidesPerGroup);
  } else {
    const p = n.snapGrid[d - 1], c = n.snapGrid[d];
    l - p <= (c - p) * a && (i -= n.params.slidesPerGroup);
  }
  return i = Math.max(i, 0), i = Math.min(i, n.slidesGrid.length - 1), n.slideTo(i, e, t, s);
}
function zs(e = 0, t, s = !0, a) {
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
        const h = u * n.params.grid.rows;
        d = n.slides.find((S) => Number(S.getAttribute("data-swiper-slide-index")) === h)?.column ?? 0;
      } else
        d = n.getSlideIndexByData(u);
      const l = i ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length, { centeredSlides: p, slidesOffsetBefore: c, slidesOffsetAfter: f } = n.params, T = p || !!c || !!f;
      let o;
      n.params.slidesPerView === "auto" ? o = n.slidesPerViewDynamic() : (o = Math.ceil(parseFloat(String(n.params.slidesPerView))), T && o % 2 === 0 && (o = o + 1));
      let r = l - d < o;
      if (p) {
        const h = Math.floor(o / 2);
        r = d < h || l - 1 - d < h;
      } else T && (r = r || d < Math.ceil(o / 2));
      if (a && T && n.params.slidesPerView !== "auto" && !i && (r = !1), r) {
        const h = T ? d < n.activeIndex ? "prev" : "next" : d - n.activeIndex - 1 < n.params.slidesPerView ? "next" : "prev";
        n.loopFix({
          direction: h,
          slideTo: !0,
          activeSlideIndex: h === "next" ? d + 1 : d - l + 1,
          slideRealIndex: h === "next" ? n.realIndex : void 0
        });
      }
      if (i) {
        const h = u * n.params.grid.rows;
        u = n.slides.find((S) => Number(S.getAttribute("data-swiper-slide-index")) === h)?.column ?? 0;
      } else
        u = n.getSlideIndexByData(u);
    }
  return requestAnimationFrame(() => {
    n.slideTo(u, t, s, a);
  }), n;
}
var ks = {
  slideTo: ws,
  slideToLoop: zs,
  slideNext: Ps,
  slidePrev: Rs,
  slideReset: Os,
  slideToClosest: Ns,
  slideToClickedSlide: Ds
};
function $s(e, t) {
  const s = this;
  s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`, s.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : ""), s.emit("setTransition", e, t);
}
function Lt({ swiper: e, runCallbacks: t, direction: s, step: a }) {
  const { activeIndex: n, previousIndex: i } = e;
  let u = s;
  u || (n > i ? u = "next" : n < i ? u = "prev" : u = "reset"), e.emit(`transition${a}`), t && u === "reset" ? e.emit(`slideResetTransition${a}`) : t && n !== i && (e.emit(`slideChangeTransition${a}`), u === "next" ? e.emit(`slideNextTransition${a}`) : e.emit(`slidePrevTransition${a}`));
}
function Gs(e = !0, t) {
  const s = this, { params: a } = s;
  s.animating = !1, !a.cssMode && (s.setTransition(0), Lt({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
}
function Bs(e = !0, t) {
  const s = this, { params: a } = s;
  a.cssMode || (a.autoHeight && s.updateAutoHeight(), Lt({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
}
var Hs = {
  setTransition: $s,
  transitionStart: Bs,
  transitionEnd: Gs
};
function Fs(e = this.isHorizontal() ? "x" : "y") {
  const t = this, { params: s, rtlTranslate: a, translate: n, wrapperEl: i } = t;
  if (s.virtualTranslate)
    return a ? -n : n;
  if (s.cssMode)
    return n;
  let u = Ke(i, e);
  return u += t.cssOverflowAdjustment(), a && (u = -u), u || 0;
}
function Vs() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Ws() {
  return -this.snapGrid[0];
}
function Ys(e, t) {
  const s = this, { rtlTranslate: a, params: n, wrapperEl: i, progress: u } = s;
  let d = 0, l = 0;
  const p = 0;
  s.isHorizontal() ? d = a ? -e : e : l = e, n.roundLengths && (d = Math.floor(d), l = Math.floor(l)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : l, n.cssMode ? i[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -l : n.virtualTranslate || (s.isHorizontal() ? d -= s.cssOverflowAdjustment() : l -= s.cssOverflowAdjustment(), i.style.transform = `translate3d(${d}px, ${l}px, ${p}px)`);
  let c;
  const f = s.maxTranslate() - s.minTranslate();
  f === 0 ? c = 0 : c = (e - s.minTranslate()) / f, c !== u && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
}
function Xs(e = 0, t = this.params.speed, s = !0, a = !0, n) {
  const i = this, { params: u, wrapperEl: d } = i;
  if (i.animating && u.preventInteractionOnTransition)
    return !1;
  const l = i.minTranslate(), p = i.maxTranslate();
  let c;
  if (a && e > l ? c = l : a && e < p ? c = p : c = e, i.updateProgress(c), u.cssMode) {
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
var Us = {
  getTranslate: Fs,
  setTranslate: Ys,
  minTranslate: Ws,
  maxTranslate: Vs,
  translateTo: Xs
};
function qs(e) {
  const { slidesGrid: t, params: s } = e, a = e.rtlTranslate ? e.translate : -e.translate;
  let n;
  for (let i = 0; i < t.length; i += 1)
    typeof t[i + 1] < "u" ? a >= t[i] && a < t[i + 1] - (t[i + 1] - t[i]) / 2 ? n = i : a >= t[i] && a < t[i + 1] && (n = i + 1) : a >= t[i] && (n = i);
  return s.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0), n;
}
function js(e) {
  const t = this, s = t.rtlTranslate ? t.translate : -t.translate, { snapGrid: a, params: n, activeIndex: i, realIndex: u, snapIndex: d } = t;
  let l = e, p;
  const c = (o) => {
    const r = t.virtual.slides;
    let h = o - (t.virtual.slidesBefore ?? 0);
    return h < 0 && (h = r.length + h), h >= r.length && (h -= r.length), h;
  };
  if (typeof l > "u" && (l = qs(t)), a.indexOf(s) >= 0)
    p = a.indexOf(s);
  else {
    const o = Math.min(n.slidesPerGroupSkip, l);
    p = o + Math.floor((l - o) / n.slidesPerGroup);
  }
  if (p >= a.length && (p = a.length - 1), l === i && !t.params.loop) {
    p !== d && (t.snapIndex = p, t.emit("snapIndexChange"));
    return;
  }
  if (l === i && t.params.loop && t.virtual && t.params.virtual?.enabled) {
    t.realIndex = c(l);
    return;
  }
  const f = t.grid && n.grid && n.grid.rows > 1;
  let T;
  if (t.virtual && n.virtual?.enabled)
    n.loop ? T = c(l) : T = l;
  else if (f) {
    const o = t.slides.find((h) => h.column === l);
    let r = parseInt(o.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(r) && (r = Math.max(t.slides.indexOf(o), 0)), T = Math.floor(r / n.grid.rows);
  } else if (t.slides[l]) {
    const o = t.slides[l].getAttribute("data-swiper-slide-index");
    o ? T = parseInt(o, 10) : T = l;
  } else
    T = l;
  Object.assign(t, {
    previousSnapIndex: d,
    snapIndex: p,
    previousRealIndex: u,
    realIndex: T,
    previousIndex: i,
    activeIndex: l
  }), t.initialized && bt(t), !t.__loopFixInProgress__ && (t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && ((t.__lastEmittedRealIndex__ ?? u) !== T && t.emit("realIndexChange"), t.emit("slideChange")), t.__lastEmittedRealIndex__ = T);
}
function Ks(e) {
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
        const l = u(d);
        l && s.push(l);
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
function Zs(e, t) {
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
function Qs(e) {
  const t = this;
  if (typeof e > "u") {
    const c = t.rtlTranslate ? -1 : 1;
    e = t && t.translate && t.translate * c || 0;
  }
  const s = t.params, a = t.maxTranslate() - t.minTranslate();
  let { progress: n, isBeginning: i, isEnd: u } = t, d = t.progressLoop;
  const l = i, p = u;
  if (a === 0)
    n = 0, i = !0, u = !0;
  else {
    n = (e - t.minTranslate()) / a;
    const c = Math.abs(e - t.minTranslate()) < 1, f = Math.abs(e - t.maxTranslate()) < 1;
    i = c || n <= 0, u = f || n >= 1, c && (n = 0), f && (n = 1);
  }
  if (s.loop) {
    const c = t.getSlideIndexByData(0), f = t.getSlideIndexByData(t.slides.length - 1), T = t.slidesGrid[c], o = t.slidesGrid[f], r = t.slidesGrid[t.slidesGrid.length - 1], h = Math.abs(e);
    h >= T ? d = (h - T) / r : d = (h + r - o) / r, d > 1 && (d -= 1);
  }
  Object.assign(t, {
    progress: n,
    progressLoop: d,
    isBeginning: i,
    isEnd: u
  }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), i && !l && t.emit("reachBeginning toEdge"), u && !p && t.emit("reachEnd toEdge"), (l && !i || p && !u) && t.emit("fromEdge"), t.emit("progress", n);
}
function Js() {
  const e = this;
  function t(_, b) {
    return parseFloat(_.getPropertyValue(e.getDirectionLabel(b)) || "0");
  }
  const s = e.params, { wrapperEl: a, slidesEl: n, rtlTranslate: i, wrongRTL: u } = e, d = !!(e.virtual && s.virtual?.enabled), l = d ? e.virtual.slides.length : e.slides.length, p = Q(n, `.${e.params.slideClass}, swiper-slide`), c = d ? e.virtual.slides.length : p.length;
  let f = [];
  const T = [], o = [], r = (_) => typeof _ == "function" ? _.call(e) : _, h = r(s.slidesOffsetBefore), E = r(s.slidesOffsetAfter), S = e.snapGrid.length, g = e.slidesGrid.length, m = e.size - h - E;
  let v = s.spaceBetween, y = -h, L = 0, A = 0;
  if (typeof m > "u")
    return;
  typeof v == "string" && v.indexOf("%") >= 0 ? v = parseFloat(v.replace("%", "")) / 100 * m : typeof v == "string" && (v = parseFloat(v)), e.virtualSize = -v - h - E, p.forEach((_) => {
    i ? _.style.marginLeft = "" : _.style.marginRight = "", _.style.marginBottom = "", _.style.marginTop = "";
  }), s.centeredSlides && s.cssMode && (pe(a, "--swiper-centered-offset-before", ""), pe(a, "--swiper-centered-offset-after", "")), s.cssMode && (pe(a, "--swiper-slides-offset-before", `${h}px`), pe(a, "--swiper-slides-offset-after", `${E}px`));
  const O = s.grid && s.grid.rows > 1 && e.grid;
  O ? e.grid.initSlides(p) : e.grid && e.grid.unsetSlides();
  let C = 0;
  const k = s.slidesPerView === "auto" && s.breakpoints && Object.keys(s.breakpoints).filter((_) => typeof s.breakpoints[_]?.slidesPerView < "u").length > 0;
  for (let _ = 0; _ < c; _ += 1) {
    C = 0;
    const b = p[_];
    if (!(b && (O && e.grid.updateSlide(_, b, p), ue(b, "display") === "none"))) {
      if (d && s.slidesPerView === "auto")
        s.virtual?.slidesPerViewAutoSlideSize && (C = s.virtual.slidesPerViewAutoSlideSize), C && b && (s.roundLengths && (C = Math.floor(C)), b.style[e.getDirectionLabel("width")] = `${C}px`);
      else if (s.slidesPerView === "auto") {
        k && (b.style[e.getDirectionLabel("width")] = "");
        const M = getComputedStyle(b), x = b.style.transform, I = b.style.webkitTransform;
        if (x && (b.style.transform = "none"), I && (b.style.webkitTransform = "none"), s.roundLengths)
          C = e.isHorizontal() ? Ze(b, "width") : Ze(b, "height");
        else {
          const $ = t(M, "width"), V = t(M, "padding-left"), j = t(M, "padding-right"), P = t(M, "margin-left"), z = t(M, "margin-right"), G = M.getPropertyValue("box-sizing");
          if (G && G === "border-box")
            C = $ + P + z;
          else {
            const { clientWidth: F, offsetWidth: q } = b;
            C = $ + V + j + P + z + (q - F);
          }
        }
        x && (b.style.transform = x), I && (b.style.webkitTransform = I), s.roundLengths && (C = Math.floor(C));
      } else
        C = (m - (s.slidesPerView - 1) * v) / s.slidesPerView, s.roundLengths && (C = Math.floor(C)), b && (b.style[e.getDirectionLabel("width")] = `${C}px`);
      b && (b.swiperSlideSize = C), o.push(C), s.centeredSlides ? (y = y + C / 2 + L / 2 + v, L === 0 && _ !== 0 && (y = y - m / 2 - v), _ === 0 && (y = y - m / 2 - v), Math.abs(y) < 1 / 1e3 && (y = 0), s.roundLengths && (y = Math.floor(y)), A % s.slidesPerGroup === 0 && f.push(y), T.push(y)) : (s.roundLengths && (y = Math.floor(y)), (A - Math.min(e.params.slidesPerGroupSkip, A)) % e.params.slidesPerGroup === 0 && f.push(y), T.push(y), y = y + C + v), e.virtualSize += C + v, L = C, A += 1;
    }
  }
  if (e.virtualSize = Math.max(e.virtualSize, m) + E, i && u && (s.effect === "slide" || s.effect === "coverflow") && (a.style.width = `${e.virtualSize + v}px`), s.setWrapperSize && (a.style[e.getDirectionLabel("width")] = `${e.virtualSize + v}px`), O && e.grid.updateWrapperSize(C, f), !s.centeredSlides) {
    const _ = s.slidesPerView !== "auto" && s.slidesPerView % 1 !== 0, b = s.snapToSlideEdge && !s.loop && (s.slidesPerView === "auto" || _);
    let M = f.length;
    if (b) {
      let I;
      if (s.slidesPerView === "auto") {
        I = 1;
        let $ = 0;
        for (let V = o.length - 1; V >= 0 && ($ += o[V] + (V < o.length - 1 ? v : 0), $ <= m); V -= 1)
          I = o.length - V;
      } else
        I = Math.floor(s.slidesPerView);
      M = Math.max(c - I, 0);
    }
    const x = [];
    for (let I = 0; I < f.length; I += 1) {
      let $ = f[I];
      s.roundLengths && ($ = Math.floor($)), b ? I <= M && x.push($) : f[I] <= e.virtualSize - m && x.push($);
    }
    f = x, Math.floor(e.virtualSize - m) - Math.floor(f[f.length - 1]) > 1 && (b || f.push(e.virtualSize - m));
  }
  if (d && s.loop) {
    const _ = o[0] + v, b = e.virtual.slidesBefore ?? 0, M = e.virtual.slidesAfter ?? 0, x = b + M;
    if (s.slidesPerGroup > 1) {
      const I = Math.ceil(x / s.slidesPerGroup), $ = _ * s.slidesPerGroup;
      for (let V = 0; V < I; V += 1)
        f.push(f[f.length - 1] + $);
    }
    for (let I = 0; I < x; I += 1)
      s.slidesPerGroup === 1 && f.push(f[f.length - 1] + _), T.push(T[T.length - 1] + _), e.virtualSize += _;
  }
  if (f.length === 0 && (f = [0]), v !== 0) {
    const _ = e.isHorizontal() && i ? "marginLeft" : e.getDirectionLabel("marginRight");
    p.filter((b, M) => !s.cssMode || s.loop ? !0 : M !== p.length - 1).forEach((b) => {
      b.style[_] = `${v}px`;
    });
  }
  if (s.centeredSlides && s.centeredSlidesBounds) {
    let _ = 0;
    o.forEach((M) => {
      _ += M + (v || 0);
    }), _ -= v;
    const b = _ > m ? _ - m : 0;
    f = f.map((M) => M <= 0 ? -h : M > b ? b + E : M);
  }
  if (s.centerInsufficientSlides) {
    let _ = 0;
    if (o.forEach((b) => {
      _ += b + (v || 0);
    }), _ -= v, _ < m) {
      const b = (m - _) / 2;
      f.forEach((M, x) => {
        f[x] = M - b;
      }), T.forEach((M, x) => {
        T[x] = M + b;
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
    const _ = -e.snapGrid[0], b = -e.slidesGrid[0];
    e.snapGrid = e.snapGrid.map((M) => M + _), e.slidesGrid = e.slidesGrid.map((M) => M + b);
  }
  if (c !== l && e.emit("slidesLengthChange"), f.length !== S && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), T.length !== g && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !d && !s.cssMode && (s.effect === "slide" || s.effect === "fade")) {
    const _ = `${s.containerModifierClass}backface-hidden`, b = e.el.classList.contains(_);
    c <= s.maxBackfaceHiddenSlides ? b || e.el.classList.add(_) : b && e.el.classList.remove(_);
  }
}
const qe = (e, t, s) => {
  t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s);
};
function ea() {
  const e = this, { slides: t, params: s, slidesEl: a, activeIndex: n } = e, i = !!(e.virtual && s.virtual?.enabled), u = e.grid && s.grid && s.grid.rows > 1, d = (f) => Q(a, `.${s.slideClass}${f}, swiper-slide${f}`)[0];
  let l, p, c;
  if (i)
    if (s.loop) {
      const f = e.virtual.slides;
      let T = n - (e.virtual.slidesBefore ?? 0);
      T < 0 && (T = f.length + T), T >= f.length && (T -= f.length), l = d(`[data-swiper-slide-index="${T}"]`);
    } else
      l = d(`[data-swiper-slide-index="${n}"]`);
  else u ? (l = t.find((f) => f.column === n), c = t.find((f) => f.column === n + 1), p = t.find((f) => f.column === n - 1)) : l = t[n];
  l && (u || (c = Ut(l, `.${s.slideClass}, swiper-slide`)[0], s.loop && !c && (c = t[0]), p = Xt(l, `.${s.slideClass}, swiper-slide`)[0], s.loop && !p === 0 && (p = t[t.length - 1]))), t.forEach((f) => {
    qe(f, f === l, s.slideActiveClass), qe(f, f === c, s.slideNextClass), qe(f, f === p, s.slidePrevClass);
  }), e.emitSlidesClasses();
}
function ta() {
  const e = this, t = e.slides, s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
  for (let a = 0; a < t.length; a += 1)
    t[a].swiperSlideOffset = (e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop) - s - e.cssOverflowAdjustment();
}
const lt = (e, t, s) => {
  t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s);
};
function sa(e = this && this.translate || 0) {
  const t = this, s = t.params, { slides: a, rtlTranslate: n, snapGrid: i } = t;
  if (a.length === 0)
    return;
  typeof a[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let u = -e;
  n && (u = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
  let d = s.spaceBetween;
  typeof d == "string" && d.indexOf("%") >= 0 ? d = parseFloat(d.replace("%", "")) / 100 * t.size : typeof d == "string" && (d = parseFloat(d));
  for (let l = 0; l < a.length; l += 1) {
    const p = a[l];
    let c = p.swiperSlideOffset ?? 0;
    s.cssMode && s.centeredSlides && (c -= a[0].swiperSlideOffset ?? 0);
    const f = p.swiperSlideSize ?? 0, T = (u + (s.centeredSlides ? t.minTranslate() : 0) - c) / (f + d), o = (u - i[0] + (s.centeredSlides ? t.minTranslate() : 0) - c) / (f + d), r = -(u - c), h = r + t.slidesSizesGrid[l], E = r >= 0 && r <= t.size - t.slidesSizesGrid[l], S = r >= 0 && r < t.size - 1 || h > 1 && h <= t.size || r <= 0 && h >= t.size;
    S && (t.visibleSlides.push(p), t.visibleSlidesIndexes.push(l)), lt(p, S, s.slideVisibleClass), lt(p, E, s.slideFullyVisibleClass), p.progress = n ? -T : T, p.originalProgress = n ? -o : o;
  }
}
var aa = {
  updateSize: fs,
  updateSlides: Js,
  updateAutoHeight: Ks,
  updateSlidesOffset: ta,
  updateSlidesProgress: sa,
  updateProgress: Qs,
  updateSlidesClasses: ea,
  updateActiveIndex: js,
  updateClickedSlide: Zs
};
const na = {
  eventsEmitter: rs,
  update: aa,
  translate: Us,
  transition: Hs,
  slide: ks,
  loop: Cs,
  grabCursor: bs,
  events: Es,
  breakpoints: Jt,
  checkOverflow: ts,
  classes: is
}, Je = {};
class te {
  static extendedDefaults;
  static defaults;
  constructor(...t) {
    let s, a;
    if (t.length === 1 && t[0] !== null && typeof t[0] == "object" && Object.prototype.toString.call(t[0]).slice(8, -1) === "Object" ? a = t[0] : [s, a] = t, a || (a = {}), a = se({}, a), s && !a.el && (a.el = s), a.el && typeof a.el == "string" && typeof document < "u" && document.querySelectorAll(a.el).length > 1) {
      const d = [];
      return document.querySelectorAll(a.el).forEach((l) => {
        const p = se({}, a, { el: l });
        d.push(new te(p));
      }), d;
    }
    const n = this;
    n.__swiper__ = !0, n.support = Et(), n.device = St({ userAgent: a.userAgent ?? void 0 }), n.browser = yt(), n.eventsListeners = {}, n.eventsAnyListeners = [], n.modules = [...n.__modules__ || []], a.modules && Array.isArray(a.modules) && a.modules.forEach((d) => {
      const l = d;
      typeof l == "function" && n.modules.indexOf(l) < 0 && n.modules.push(l);
    });
    const i = {};
    n.modules.forEach((d) => {
      d({
        params: a,
        swiper: n,
        extendParams: Ls(a, i),
        on: n.on.bind(n),
        once: n.once.bind(n),
        off: n.off.bind(n),
        emit: n.emit.bind(n)
      });
    });
    const u = se({}, At, i);
    if (n.params = se({}, u, Je, a), n.originalParams = se({}, n.params), n.passedParams = se({}, a), n.params && n.params.on) {
      const d = n.params.on;
      Object.keys(d).forEach((l) => {
        const p = d[l];
        p && n.on(l, p);
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
    const { params: a, slides: n, slidesGrid: i, slidesSizesGrid: u, size: d, activeIndex: l } = this;
    let p = 1;
    if (typeof a.slidesPerView == "number")
      return a.slidesPerView;
    if (!d)
      return p;
    if (a.centeredSlides) {
      let c = n[l] ? Math.ceil(n[l].swiperSlideSize ?? 0) : 0, f = !1;
      for (let T = l + 1; T < n.length; T += 1)
        n[T] && !f && (c += Math.ceil(n[T].swiperSlideSize ?? 0), p += 1, c > d && (f = !0));
      for (let T = l - 1; T >= 0; T -= 1)
        n[T] && !f && (c += n[T].swiperSlideSize ?? 0, p += 1, c > d && (f = !0));
    } else if (t === "current")
      for (let c = l + 1; c < n.length; c += 1)
        (s ? i[c] + u[c] - i[l] < d : i[c] - i[l] < d) && (p += 1);
    else
      for (let c = l - 1; c >= 0; c -= 1)
        i[l] - i[c] < d && (p += 1);
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
    if (typeof a == "string" ? n = document.querySelector(a) : ke(a) && (n = a), !n)
      return !1;
    n.swiper = s;
    const i = n.parentNode;
    i && i.host && i.host.nodeName === s.params.swiperElementNodeName.toUpperCase() && (s.isElement = !0);
    const u = () => `.${(s.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let l = n && n.shadowRoot ? n.shadowRoot.querySelector(u()) : Q(n, u())[0];
    !l && s.params.createElements && (l = ne("div", s.params.wrapperClass), n.append(l), Q(n, `.${s.params.slideClass}`).forEach((c) => {
      l.append(c);
    }));
    const p = s.isElement ? n.parentNode.host : null;
    return Object.assign(s, {
      el: n,
      wrapperEl: l,
      slidesEl: s.isElement && !p.slideSlots ? p : l,
      hostEl: s.isElement ? p : n,
      mounted: !0,
      // RTL
      rtl: n.dir.toLowerCase() === "rtl" || ue(n, "direction") === "rtl",
      rtlTranslate: s.params.direction === "horizontal" && (n.dir.toLowerCase() === "rtl" || ue(n, "direction") === "rtl"),
      wrongRTL: ue(l, "display") === "-webkit-box"
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
    const a = this, { params: n, el: i, wrapperEl: u, slides: d } = a;
    return typeof a.params > "u" || a.destroyed || (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), n.loop && a.loopDestroy(), s && (a.removeClasses(), i && typeof i != "string" && i.removeAttribute("style"), u && u.removeAttribute("style"), d && d.length && d.forEach((l) => {
      l.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), l.removeAttribute("style"), l.removeAttribute("data-swiper-slide-index");
    })), a.emit("destroy"), Object.keys(a.eventsListeners).forEach((l) => {
      a.off(l);
    }), t !== !1 && (a.el && typeof a.el != "string" && (a.el.swiper = null), Ht(a)), a.destroyed = !0), null;
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
    return At;
  }
});
const ot = na, ia = te.prototype;
Object.keys(ot).forEach((e) => {
  const t = ot[e];
  Object.keys(t).forEach((s) => {
    ia[s] = t[s];
  });
});
te.use([Is, Ms]);
const ra = ({ swiper: e, extendParams: t, on: s, emit: a }) => {
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
  function l(r, h) {
    const E = i();
    if (E.cache && e.virtual.cache[h])
      return e.virtual.cache[h];
    let S;
    if (E.renderSlide) {
      const g = E.renderSlide.call(e, r, h);
      if (typeof g == "string") {
        const m = d();
        le(m, g), S = m.children[0];
      } else
        S = g;
    } else e.isElement ? S = ne("swiper-slide") : S = ne("div", e.params.slideClass);
    return S.setAttribute("data-swiper-slide-index", String(h)), E.renderSlide || le(S, r), E.cache && (e.virtual.cache[h] = S), S;
  }
  function p(r, h, E) {
    const { slidesPerGroup: S, centeredSlides: g, slidesPerView: m, loop: v, initialSlide: y } = e.params;
    if (h && !v && (y ?? 0) > 0)
      return;
    const { addSlidesBefore: L, addSlidesAfter: A, slidesPerViewAutoSlideSize: O } = i(), { from: C, to: k, slides: _, slidesGrid: b, offset: M } = e.virtual;
    e.params.cssMode || e.updateActiveIndex();
    const x = typeof E > "u" ? e.activeIndex || 0 : E;
    let I;
    e.rtlTranslate ? I = "right" : I = e.isHorizontal() ? "left" : "top";
    let $;
    if (m === "auto")
      if (O) {
        let W = e.size;
        W || (W = e.isHorizontal() ? e.el.getBoundingClientRect().width : e.el.getBoundingClientRect().height), $ = Math.max(1, Math.ceil(W / O));
      } else
        $ = 1;
    else
      $ = m ?? 1;
    const V = S ?? 1;
    let j, P;
    g ? (j = Math.floor($ / 2) + V + A, P = Math.floor($ / 2) + V + L) : (j = $ + (V - 1) + A, P = (v ? $ : V) + L);
    let z = x - P, G = x + j;
    v || (z = Math.max(z, 0), G = Math.min(G, _.length - 1));
    let F = (e.slidesGrid[z] || 0) - (e.slidesGrid[0] || 0);
    v && x >= P ? (z -= P, g || (F += e.slidesGrid[0])) : v && x < P && (z = -P, g && (F += e.slidesGrid[0])), Object.assign(e.virtual, {
      from: z,
      to: G,
      offset: F,
      slidesGrid: e.slidesGrid,
      slidesBefore: P,
      slidesAfter: j
    });
    function q() {
      e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), a("virtualUpdate");
    }
    if (C === z && k === G && !r) {
      e.slidesGrid !== b && F !== M && e.slides.forEach((W) => {
        W.style.setProperty(I, `${F - Math.abs(e.cssOverflowAdjustment())}px`);
      }), e.updateProgress(), a("virtualUpdate");
      return;
    }
    const w = i();
    if (w.renderExternal) {
      const W = [];
      for (let U = z; U <= G; U += 1)
        W.push(_[U]);
      w.renderExternal.call(e, {
        offset: F,
        from: z,
        to: G,
        slides: W
      }), w.renderExternalUpdate ? q() : a("virtualUpdate");
      return;
    }
    const R = [], N = [], B = (W) => {
      let U = W;
      return W < 0 ? U = _.length + W : U >= _.length && (U = U - _.length), U;
    };
    if (r)
      e.slides.filter((W) => W.matches(`.${e.params.slideClass}, swiper-slide`)).forEach((W) => {
        W.remove();
      });
    else
      for (let W = C; W <= k; W += 1)
        if (W < z || W > G) {
          const U = B(W);
          e.slides.filter((J) => J.matches(`.${e.params.slideClass}[data-swiper-slide-index="${U}"], swiper-slide[data-swiper-slide-index="${U}"]`)).forEach((J) => {
            J.remove();
          });
        }
    const K = v ? -_.length : 0, ie = v ? _.length * 2 : _.length;
    for (let W = K; W < ie; W += 1)
      if (W >= z && W <= G) {
        const U = B(W);
        typeof k > "u" || r ? N.push(U) : (W > k && N.push(U), W < C && R.push(U));
      }
    if (N.forEach((W) => {
      e.slidesEl.append(l(_[W], W));
    }), v)
      for (let W = R.length - 1; W >= 0; W -= 1) {
        const U = R[W];
        e.slidesEl.prepend(l(_[U], U));
      }
    else
      R.sort((W, U) => U - W), R.forEach((W) => {
        e.slidesEl.prepend(l(_[W], W));
      });
    Q(e.slidesEl, ".swiper-slide, swiper-slide").forEach((W) => {
      W.style.setProperty(I, `${F - Math.abs(e.cssOverflowAdjustment())}px`);
    }), q();
  }
  function c(r) {
    if (r !== null && typeof r == "object" && "length" in r) {
      const h = r;
      for (let E = 0; E < h.length; E += 1)
        h[E] && e.virtual.slides.push(h[E]);
    } else
      e.virtual.slides.push(r);
    p(!0);
  }
  function f(r) {
    const h = e.activeIndex;
    let E = h + 1, S = 1;
    if (Array.isArray(r)) {
      for (let g = 0; g < r.length; g += 1)
        r[g] && e.virtual.slides.unshift(r[g]);
      E = h + r.length, S = r.length;
    } else
      e.virtual.slides.unshift(r);
    if (i().cache) {
      const g = e.virtual.cache, m = {};
      Object.keys(g).forEach((v) => {
        const y = g[Number(v)], L = y.getAttribute("data-swiper-slide-index");
        L && y.setAttribute("data-swiper-slide-index", String(parseInt(L, 10) + S)), m[parseInt(v, 10) + S] = y;
      }), e.virtual.cache = m;
    }
    p(!0), e.slideTo(E, 0);
  }
  function T(r) {
    if (typeof r > "u" || r === null)
      return;
    let h = e.activeIndex;
    const E = (S) => {
      Object.keys(e.virtual.cache).forEach((g) => {
        const m = Number(g);
        if (m > S) {
          const v = e.virtual.cache[m];
          e.virtual.cache[m - 1] = v, v.setAttribute("data-swiper-slide-index", String(m - 1)), delete e.virtual.cache[m];
        }
      });
    };
    if (Array.isArray(r))
      for (let S = r.length - 1; S >= 0; S -= 1)
        i().cache && (delete e.virtual.cache[r[S]], E(r[S])), e.virtual.slides.splice(r[S], 1), r[S] < h && (h -= 1), h = Math.max(h, 0);
    else
      i().cache && (delete e.virtual.cache[r], E(r)), e.virtual.slides.splice(r, 1), r < h && (h -= 1), h = Math.max(h, 0);
    p(!0), e.slideTo(h, 0);
  }
  function o() {
    e.virtual.slides = [], i().cache && (e.virtual.cache = {}), p(!0), e.slideTo(0, 0);
  }
  s("beforeInit", () => {
    if (!i().enabled)
      return;
    let r = !1;
    const h = e.passedParams.virtual;
    if (!h || typeof h != "object" || h.slides === void 0) {
      const S = [...e.slidesEl.children].filter((g) => g.matches(`.${e.params.slideClass}, swiper-slide`));
      S && S.length && (e.virtual.slides = [...S], r = !0, S.forEach((g, m) => {
        g.setAttribute("data-swiper-slide-index", String(m)), e.virtual.cache[m] = g, g.remove();
      }));
    }
    r || (e.virtual.slides = i().slides), e.classNames.push(`${e.params.containerModifierClass}virtual`), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0, p(!1, !0);
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
}, la = ({ swiper: e, extendParams: t, on: s, emit: a }) => {
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
  function i(l) {
    if (!e.enabled)
      return;
    const { rtlTranslate: p } = e, c = "originalEvent" in l && l.originalEvent ? l.originalEvent : l, f = c.keyCode || c.charCode, T = n(), o = !!T.pageUpDown, r = o && f === 33, h = o && f === 34, E = f === 37, S = f === 39, g = f === 38, m = f === 40;
    if (!e.allowSlideNext && (e.isHorizontal() && S || e.isVertical() && m || h) || !e.allowSlidePrev && (e.isHorizontal() && E || e.isVertical() && g || r))
      return !1;
    if (c.shiftKey || c.altKey || c.ctrlKey || c.metaKey)
      return;
    const v = document.activeElement;
    if (v && (v.isContentEditable || v.nodeName && (v.nodeName.toLowerCase() === "input" || v.nodeName.toLowerCase() === "textarea")))
      return;
    if (T.onlyInViewport && (r || h || E || S || g || m)) {
      let L = !1;
      if (me(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 && me(e.el, `.${e.params.slideActiveClass}`).length === 0)
        return;
      const A = e.el, O = A.clientWidth, C = A.clientHeight, k = window.innerWidth, _ = window.innerHeight, b = ze(A);
      p && (b.left -= A.scrollLeft);
      const M = [
        [b.left, b.top],
        [b.left + O, b.top],
        [b.left, b.top + C],
        [b.left + O, b.top + C]
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
    const y = T.speed;
    e.isHorizontal() ? ((r || h || E || S) && c.cancelable && c.preventDefault(), ((h || S) && !p || (r || E) && p) && e.slideNext(y), ((r || E) && !p || (h || S) && p) && e.slidePrev(y)) : ((r || h || g || m) && c.cancelable && c.preventDefault(), (h || m) && e.slideNext(y), (r || g) && e.slidePrev(y)), a("keyPress", f);
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
}, oa = ({ swiper: e, extendParams: t, on: s, emit: a }) => {
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
  const l = [];
  function p() {
    return e.params.mousewheel;
  }
  function c(m) {
    const A = m;
    let O = 0, C = 0, k = 0, _ = 0;
    return A.detail !== void 0 && (C = A.detail), A.wheelDelta !== void 0 && (C = -A.wheelDelta / 120), A.wheelDeltaY !== void 0 && (C = -A.wheelDeltaY / 120), A.wheelDeltaX !== void 0 && (O = -A.wheelDeltaX / 120), A.axis !== void 0 && A.HORIZONTAL_AXIS !== void 0 && A.axis === A.HORIZONTAL_AXIS && (O = C, C = 0), k = O * 10, _ = C * 10, A.deltaY !== void 0 && (_ = A.deltaY), A.deltaX !== void 0 && (k = A.deltaX), A.shiftKey && !k && (k = _, _ = 0), (k || _) && A.deltaMode && (A.deltaMode === 1 ? (k *= 40, _ *= 40) : (k *= 800, _ *= 800)), k && !O && (O = k < 1 ? -1 : 1), _ && !C && (C = _ < 1 ? -1 : 1), {
      spinX: O,
      spinY: C,
      pixelX: k,
      pixelY: _
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
  function r(m) {
    const v = p();
    if (m.direction < 0) {
      if (e.isEnd && !e.params.loop && v.releaseOnEdges)
        return !0;
    } else if (e.isBeginning && !e.params.loop && v.releaseOnEdges)
      return !0;
    return !1;
  }
  function h(m) {
    let v = "originalEvent" in m && m.originalEvent ? m.originalEvent : m, y = !0;
    if (!e.enabled)
      return !1;
    const L = p();
    if (m.target.closest(`.${L.noMousewheelClass}`))
      return !1;
    e.params.cssMode && v.preventDefault();
    let A = e.el;
    L.eventsTarget !== "container" && (A = document.querySelector(L.eventsTarget));
    const O = A && A.contains(v.target);
    if (!d && !O && !L.releaseOnEdges)
      return !0;
    let C = 0;
    const k = e.rtlTranslate ? -1 : 1, _ = c(v);
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
    let b = e.getTranslate() + C * (L.sensitivity ?? 1);
    b >= e.minTranslate() && (b = e.minTranslate()), b <= e.maxTranslate() && (b = e.maxTranslate()), y = e.params.loop ? !0 : !(b === e.minTranslate() || b === e.maxTranslate()), y && e.params.nested && v.stopPropagation();
    const M = e.params.freeMode;
    if (!e.params.freeMode || !M?.enabled) {
      const x = {
        time: ae(),
        delta: Math.abs(C),
        direction: Math.sign(C),
        raw: m
      };
      l.length >= 2 && l.shift();
      const I = l.length ? l[l.length - 1] : void 0;
      if (l.push(x), I ? (x.direction !== I.direction || x.delta > I.delta || x.time > I.time + 150) && o(x) : o(x), r(x))
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
        const V = e.isBeginning, j = e.isEnd;
        if ($ >= e.minTranslate() && ($ = e.minTranslate()), $ <= e.maxTranslate() && ($ = e.maxTranslate()), e.setTransition(0), e.setTranslate($), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses(), (!V && e.isBeginning || !j && e.isEnd) && e.updateSlidesClasses(), e.params.loop && e.loopFix({
          direction: x.direction < 0 ? "next" : "prev",
          byMousewheel: !0
        }), M?.sticky) {
          clearTimeout(n), n = void 0, l.length >= 15 && l.shift();
          const z = l.length ? l[l.length - 1] : void 0, G = l[0];
          if (l.push(x), z && (x.delta > z.delta || x.direction !== z.direction))
            l.splice(0);
          else if (l.length >= 15 && G && x.time - G.time < 500 && G.delta - x.delta >= 1 && x.delta <= 6) {
            const F = C > 0 ? 0.8 : 0.2;
            u = x, l.splice(0), n = Se(() => {
              e.destroyed || !e.params || e.slideToClosest(e.params.speed, !0, void 0, F);
            }, 0);
          }
          n || (n = Se(() => {
            if (e.destroyed || !e.params)
              return;
            const F = 0.5;
            u = x, l.splice(0), e.slideToClosest(e.params.speed, !0, void 0, F);
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
    let y = e.el;
    v.eventsTarget !== "container" && (y = document.querySelector(v.eventsTarget)), y[m]("mouseenter", f), y[m]("mouseleave", T), y[m]("wheel", h);
  }
  function S() {
    return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", h), !0) : e.mousewheel.enabled ? !1 : (E("addEventListener"), e.mousewheel.enabled = !0, !0);
  }
  function g() {
    return e.params.cssMode ? (e.wrapperEl.addEventListener("wheel", h), !0) : e.mousewheel.enabled ? (E("removeEventListener"), e.mousewheel.enabled = !1, !0) : !1;
  }
  s("init", () => {
    const m = p();
    !m.enabled && e.params.cssMode && g(), m.enabled && S();
  }), e.mousewheel = {
    enabled: !1,
    enable: S,
    disable: g
  }, s("destroy", () => {
    e.params.cssMode && S(), e.mousewheel.enabled && g();
  });
};
function st(e, t, s, a) {
  const n = s ?? {}, i = t ?? {};
  return e.params.createElements && Object.keys(a).forEach((u) => {
    if (!n[u] && n.auto === !0) {
      let d = Q(e.el, `.${a[u]}`)[0];
      d || (d = ne("div", a[u]), d.className = a[u], e.el.append(d)), n[u] = d, i[u] = d;
    }
  }), n;
}
const dt = '<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0.28 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>', da = ({ swiper: e, extendParams: t, on: s, emit: a }) => {
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
  function i(r) {
    let h;
    return r && typeof r == "string" && e.isElement && (h = e.el.querySelector(r) || e.hostEl.querySelector(r), h) ? h : (r && (typeof r == "string" && (h = [...document.querySelectorAll(r)]), e.params.uniqueNavElements && typeof r == "string" && h && h.length > 1 && e.el.querySelectorAll(r).length === 1 ? h = e.el.querySelector(r) : h && h.length === 1 && (h = h[0])), r && !h ? r : h);
  }
  function u(r, h) {
    const E = n();
    X(r).forEach((g) => {
      g && (g.classList[h ? "add" : "remove"](...E.disabledClass.split(" ")), g.tagName === "BUTTON" && (g.disabled = h), e.params.watchOverflow && e.enabled && g.classList[e.isLocked ? "add" : "remove"](E.lockClass));
    });
  }
  function d() {
    const { nextEl: r, prevEl: h } = e.navigation;
    if (e.params.loop) {
      u(h, !1), u(r, !1);
      return;
    }
    u(h, e.isBeginning && !e.params.rewind), u(r, e.isEnd && !e.params.rewind);
  }
  function l(r) {
    r.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), a("navigationPrev"));
  }
  function p(r) {
    r.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), a("navigationNext"));
  }
  function c() {
    e.params.navigation = st(e, e.originalParams.navigation, e.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    });
    const r = n();
    if (!(r.nextEl || r.prevEl))
      return;
    const h = i(r.nextEl), E = i(r.prevEl);
    Object.assign(e.navigation, {
      nextEl: h,
      prevEl: E
    });
    const S = X(h), g = X(E), m = (v, y) => {
      if (v) {
        if (r.addIcons && v.matches(".swiper-button-next,.swiper-button-prev") && !v.querySelector("svg")) {
          const L = document.createElement("div");
          le(L, dt);
          const A = L.querySelector("svg");
          A && v.appendChild(A), L.remove();
        }
        v.addEventListener("click", y === "next" ? p : l);
      }
      !e.enabled && v && v.classList.add(...r.lockClass.split(" "));
    };
    S.forEach((v) => m(v, "next")), g.forEach((v) => m(v, "prev"));
  }
  function f() {
    const r = n(), { nextEl: h, prevEl: E } = e.navigation, S = X(h), g = X(E), m = (v, y) => {
      v.removeEventListener("click", y === "next" ? p : l), v.classList.remove(...r.disabledClass.split(" "));
    };
    S.forEach((v) => m(v, "next")), g.forEach((v) => m(v, "prev"));
  }
  s("init", () => {
    n().enabled === !1 ? o() : (c(), d());
  }), s("toEdge fromEdge lock unlock", () => {
    d();
  }), s("destroy", () => {
    f();
  }), s("enable disable", () => {
    const r = n(), { nextEl: h, prevEl: E } = e.navigation, S = X(h), g = X(E);
    if (e.enabled) {
      d();
      return;
    }
    [...S, ...g].filter((m) => !!m).forEach((m) => m.classList.add(r.lockClass));
  }), s("click", (r, h) => {
    const E = n(), { nextEl: S, prevEl: g } = e.navigation, m = X(S), v = X(g), y = h.target;
    let L = v.includes(y) || m.includes(y);
    if (e.isElement && !L) {
      const A = h.composedPath ? h.composedPath() : [];
      A.length && (L = A.find((O) => m.includes(O) || v.includes(O)));
    }
    if (E.hideOnClick && !L) {
      if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === y || e.pagination.el.contains(y)))
        return;
      let A;
      m.length ? A = m[0].classList.contains(E.hiddenClass) : v.length && (A = v[0].classList.contains(E.hiddenClass)), a(A === !0 ? "navigationShow" : "navigationHide"), [...m, ...v].filter((O) => !!O).forEach((O) => O.classList.toggle(E.hiddenClass));
    }
  });
  const T = () => {
    const r = n();
    e.el.classList.remove(...r.navigationDisabledClass.split(" ")), c(), d();
  }, o = () => {
    const r = n();
    e.el.classList.add(...r.navigationDisabledClass.split(" ")), f();
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
const ca = (e) => !!e.virtual && !!e.params.virtual?.enabled, fa = (e) => !!e.params.freeMode?.enabled, ct = (e) => {
  if (ca(e))
    return e.virtual.slides.length;
  const t = e.params.grid?.rows;
  return e.grid && t && t > 1 ? e.slides.length / Math.ceil(t) : e.slides.length;
}, ua = ({ swiper: e, extendParams: t, on: s, emit: a }) => {
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
      formatFractionCurrent: (g) => g,
      formatFractionTotal: (g) => g,
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
  function l() {
    return !d().el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0;
  }
  function p(g, m) {
    const { bulletActiveClass: v } = d();
    if (!g)
      return;
    let y = g[`${m === "prev" ? "previous" : "next"}ElementSibling`];
    y && (y.classList.add(`${v}-${m}`), y = y[`${m === "prev" ? "previous" : "next"}ElementSibling`], y && y.classList.add(`${v}-${m}-${m}`));
  }
  function c(g, m, v) {
    if (g = g % v, m = m % v, m === g + 1)
      return "next";
    if (m === g - 1)
      return "previous";
  }
  function f(g) {
    const v = g.target.closest(de(d().bulletClass));
    if (!v)
      return;
    g.preventDefault();
    const y = (Le(v) ?? 0) * (e.params.slidesPerGroup ?? 1);
    if (e.params.loop) {
      if (e.realIndex === y)
        return;
      const L = c(e.realIndex, y, e.slides.length);
      L === "next" ? e.slideNext() : L === "previous" ? e.slidePrev() : e.slideToLoop(y);
    } else
      e.slideTo(y);
  }
  function T() {
    const g = e.rtl, m = d();
    if (l())
      return;
    const v = X(e.pagination.el);
    let y, L;
    const A = ct(e), O = e.params.loop ? Math.ceil(A / (e.params.slidesPerGroup ?? 1)) : e.snapGrid.length;
    if (e.params.loop ? (L = e.previousRealIndex || 0, y = (e.params.slidesPerGroup ?? 1) > 1 ? Math.floor(e.realIndex / (e.params.slidesPerGroup ?? 1)) : e.realIndex) : typeof e.snapIndex < "u" ? (y = e.snapIndex, L = e.previousSnapIndex) : (L = e.previousIndex || 0, y = e.activeIndex || 0), m.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
      const C = e.pagination.bullets;
      let k = 0, _ = 0, b = 0;
      if (m.dynamicBullets) {
        i = Ze(C[0], e.isHorizontal() ? "width" : "height");
        const M = e.isHorizontal() ? "width" : "height";
        v.forEach((x) => {
          x.style[M] = `${(i ?? 0) * (m.dynamicMainBullets + 4)}px`;
        }), m.dynamicMainBullets > 1 && L !== void 0 && (u += y - (L || 0), u > m.dynamicMainBullets - 1 ? u = m.dynamicMainBullets - 1 : u < 0 && (u = 0)), k = Math.max(y - u, 0), _ = k + (Math.min(C.length, m.dynamicMainBullets) - 1), b = (_ + k) / 2;
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
          x === y ? M.classList.add(...m.bulletActiveClass.split(" ")) : e.isElement && M.setAttribute("part", "bullet"), m.dynamicBullets && x !== void 0 && (x >= k && x <= _ && M.classList.add(...`${m.bulletActiveClass}-main`.split(" ")), x === k && p(M, "prev"), x === _ && p(M, "next"));
        });
      else {
        const M = C[y];
        if (M && M.classList.add(...m.bulletActiveClass.split(" ")), e.isElement && C.forEach((x, I) => {
          x.setAttribute("part", I === y ? "bullet-active" : "bullet");
        }), m.dynamicBullets) {
          const x = C[k], I = C[_];
          for (let $ = k; $ <= _; $ += 1)
            C[$] && C[$].classList.add(...`${m.bulletActiveClass}-main`.split(" "));
          p(x, "prev"), p(I, "next");
        }
      }
      if (m.dynamicBullets) {
        const M = Math.min(C.length, m.dynamicMainBullets + 4), x = ((i ?? 0) * M - (i ?? 0)) / 2 - b * (i ?? 0), I = g ? "right" : "left", $ = e.isHorizontal() ? I : "top";
        C.forEach((V) => {
          V.style[$] = `${x}px`;
        });
      }
    }
    v.forEach((C, k) => {
      if (m.type === "fraction" && (C.querySelectorAll(de(m.currentClass)).forEach((_) => {
        _.textContent = String(m.formatFractionCurrent(y + 1));
      }), C.querySelectorAll(de(m.totalClass)).forEach((_) => {
        _.textContent = String(m.formatFractionTotal(O));
      })), m.type === "progressbar") {
        let _;
        m.progressbarOpposite ? _ = e.isHorizontal() ? "vertical" : "horizontal" : _ = e.isHorizontal() ? "horizontal" : "vertical";
        const b = (y + 1) / O;
        let M = 1, x = 1;
        _ === "horizontal" ? M = b : x = b, C.querySelectorAll(de(m.progressbarFillClass)).forEach((I) => {
          I.style.transform = `translate3d(0,0,0) scaleX(${M}) scaleY(${x})`, I.style.transitionDuration = `${e.params.speed}ms`;
        });
      }
      m.type === "custom" && m.renderCustom ? (le(C, m.renderCustom(e, y + 1, O)), k === 0 && a("paginationRender", C)) : (k === 0 && a("paginationRender", C), a("paginationUpdate", C)), e.params.watchOverflow && e.enabled && C.classList[e.isLocked ? "add" : "remove"](m.lockClass);
    });
  }
  function o() {
    const g = d();
    if (l())
      return;
    const m = ct(e), v = X(e.pagination.el);
    let y = "";
    if (g.type === "bullets") {
      let L = e.params.loop ? Math.ceil(m / (e.params.slidesPerGroup ?? 1)) : e.snapGrid.length;
      e.params.freeMode && fa(e) && L > m && (L = m);
      for (let A = 0; A < L; A += 1)
        g.renderBullet ? y += g.renderBullet.call(e, A, g.bulletClass) : y += `<${g.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${g.bulletClass}"></${g.bulletElement}>`;
    }
    g.type === "fraction" && (g.renderFraction ? y = g.renderFraction.call(e, g.currentClass, g.totalClass) : y = `<span class="${g.currentClass}"></span> / <span class="${g.totalClass}"></span>`), g.type === "progressbar" && (g.renderProgressbar ? y = g.renderProgressbar.call(e, g.progressbarFillClass) : y = `<span class="${g.progressbarFillClass}"></span>`), e.pagination.bullets = [], v.forEach((L) => {
      g.type !== "custom" && le(L, y || ""), g.type === "bullets" && e.pagination.bullets.push(...Array.from(L.querySelectorAll(de(g.bulletClass))));
    }), g.type !== "custom" && a("paginationRender", v[0]);
  }
  function r() {
    e.params.pagination = st(e, e.originalParams.pagination, e.params.pagination, { el: "swiper-pagination" });
    const g = d();
    if (!g.el)
      return;
    let m;
    if (typeof g.el == "string" && e.isElement && (m = e.el.querySelector(g.el)), !m && typeof g.el == "string" && (m = [...document.querySelectorAll(g.el)]), m || (m = g.el), !m || Array.isArray(m) && m.length === 0)
      return;
    if (e.params.uniqueNavElements && typeof g.el == "string" && Array.isArray(m) && m.length > 1 && (m = [...e.el.querySelectorAll(g.el)], m.length > 1)) {
      const y = m.find((L) => me(L, ".swiper")[0] === e.el);
      y && (m = y);
    }
    Array.isArray(m) && m.length === 1 && (m = m[0]), Object.assign(e.pagination, {
      el: m
    }), X(m).forEach((y) => {
      g.type === "bullets" && g.clickable && y.classList.add(...(g.clickableClass || "").split(" ")), y.classList.add(g.modifierClass + g.type), y.classList.add(e.isHorizontal() ? g.horizontalClass : g.verticalClass), g.type === "bullets" && g.dynamicBullets && (y.classList.add(`${g.modifierClass}${g.type}-dynamic`), u = 0, g.dynamicMainBullets < 1 && (g.dynamicMainBullets = 1)), g.type === "progressbar" && g.progressbarOpposite && y.classList.add(g.progressbarOppositeClass), g.clickable && y.addEventListener("click", f), e.enabled || y.classList.add(g.lockClass);
    });
  }
  function h() {
    const g = d();
    if (l())
      return;
    const m = e.pagination.el;
    m && X(m).forEach((y) => {
      y.classList.remove(g.hiddenClass), y.classList.remove(g.modifierClass + g.type), y.classList.remove(e.isHorizontal() ? g.horizontalClass : g.verticalClass), g.clickable && (y.classList.remove(...(g.clickableClass || "").split(" ")), y.removeEventListener("click", f));
    }), e.pagination.bullets && e.pagination.bullets.forEach((v) => v.classList.remove(...g.bulletActiveClass.split(" ")));
  }
  s("changeDirection", () => {
    if (!e.pagination || !e.pagination.el)
      return;
    const g = d();
    X(e.pagination.el).forEach((v) => {
      v.classList.remove(g.horizontalClass, g.verticalClass), v.classList.add(e.isHorizontal() ? g.horizontalClass : g.verticalClass);
    });
  }), s("init", () => {
    d().enabled === !1 ? S() : (r(), o(), T());
  }), s("activeIndexChange", () => {
    typeof e.snapIndex > "u" && T();
  }), s("snapIndexChange", () => {
    T();
  }), s("snapGridLengthChange", () => {
    o(), T();
  }), s("destroy", () => {
    h();
  }), s("enable disable", () => {
    const { el: g } = e.pagination;
    if (g) {
      const m = d();
      X(g).forEach((y) => y.classList[e.enabled ? "remove" : "add"](m.lockClass));
    }
  }), s("lock unlock", () => {
    T();
  }), s("click", (g, m) => {
    const v = m.target, y = X(e.pagination.el), L = d();
    if (L.el && L.hideOnClick && y && y.length > 0 && !v.classList.contains(L.bulletClass)) {
      if (e.navigation && (e.navigation.nextEl && v === e.navigation.nextEl || e.navigation.prevEl && v === e.navigation.prevEl))
        return;
      const A = y[0].classList.contains(L.hiddenClass);
      a(A === !0 ? "paginationShow" : "paginationHide"), y.forEach((O) => O.classList.toggle(L.hiddenClass));
    }
  });
  const E = () => {
    const g = d();
    e.el.classList.remove(g.paginationDisabledClass);
    const { el: m } = e.pagination;
    m && X(m).forEach((y) => y.classList.remove(g.paginationDisabledClass)), r(), o(), T();
  }, S = () => {
    const g = d();
    e.el.classList.add(g.paginationDisabledClass);
    const { el: m } = e.pagination;
    m && X(m).forEach((y) => y.classList.add(g.paginationDisabledClass)), h();
  };
  Object.assign(e.pagination, {
    enable: E,
    disable: S,
    render: o,
    update: T,
    init: r,
    destroy: h
  });
}, pa = ({ swiper: e, extendParams: t, on: s, emit: a }) => {
  let n = !1, i = null, u = null, d = 0, l = 0, p = 0, c = 0;
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
    const { rtlTranslate: b } = e, { dragEl: M } = e.scrollbar, x = e.params.loop ? e.progressLoop ?? 0 : e.progress;
    let I = l, $ = (p - l) * x;
    b ? ($ = -$, $ > 0 ? (I = l - $, $ = 0) : -$ + l > p && (I = p + $)) : $ < 0 ? (I = l + $, $ = 0) : $ + l > p && (I = p - $), e.isHorizontal() ? (M.style.transform = `translate3d(${$}px, 0, 0)`, M.style.width = `${I}px`) : (M.style.transform = `translate3d(0px, ${$}px, 0)`, M.style.height = `${I}px`);
  }
  function o() {
    const b = f();
    if (!b.el || !e.scrollbar.el)
      return;
    const { el: M } = e.scrollbar;
    T(), b.hide && (i && clearTimeout(i), M.style.opacity = "1", i = setTimeout(() => {
      M.style.opacity = "0", M.style.transitionDuration = "400ms";
    }, 1e3));
  }
  function r(b) {
    !f().el || !e.scrollbar.el || (e.scrollbar.dragEl.style.transitionDuration = `${b}ms`);
  }
  function h() {
    const b = f();
    if (!b.el || !e.scrollbar.el)
      return;
    const { scrollbar: M } = e, { dragEl: x, el: I } = M;
    x.style.width = "", x.style.height = "", p = e.isHorizontal() ? I.offsetWidth : I.offsetHeight, c = e.size / (e.virtualSize + (e.params.slidesOffsetBefore ?? 0) - (e.params.centeredSlides ? e.snapGrid[0] : 0)), b.dragSize === "auto" ? l = p * c : l = parseInt(String(b.dragSize), 10), T(), c >= 1 ? I.style.display = "none" : I.style.display = "", b.hide && (I.style.opacity = "0"), e.params.watchOverflow && e.enabled && M.el.classList[e.isLocked ? "add" : "remove"](b.lockClass);
  }
  function E(b) {
    return e.isHorizontal() ? b.clientX ?? b.touches?.[0]?.clientX ?? 0 : b.clientY ?? b.touches?.[0]?.clientY ?? 0;
  }
  function S(b) {
    const { scrollbar: M, rtlTranslate: x } = e, { el: I } = M;
    let $;
    $ = (E(b) - ze(I)[e.isHorizontal() ? "left" : "top"] - (d !== null ? d : l / 2)) / (p - l), $ = Math.max(Math.min($, 1), 0), x && ($ = 1 - $);
    const V = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * $;
    e.updateProgress(V), e.setTranslate(V), e.updateActiveIndex(), e.updateSlidesClasses();
  }
  function g(b) {
    const M = f(), { scrollbar: x, wrapperEl: I } = e, { el: $, dragEl: V } = x;
    n = !0, d = b.target === V ? E(b) - b.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null, b.preventDefault(), b.stopPropagation(), I.style.transitionDuration = "100ms", V.style.transitionDuration = "100ms", S(b), u && clearTimeout(u), $.style.transitionDuration = "0ms", M.hide && ($.style.opacity = "1"), e.params.cssMode && (e.wrapperEl.style.scrollSnapType = "none"), a("scrollbarDragStart", b);
  }
  function m(b) {
    const { scrollbar: M, wrapperEl: x } = e, { el: I, dragEl: $ } = M;
    n && (b.cancelable && b.preventDefault(), S(b), x.style.transitionDuration = "0ms", I.style.transitionDuration = "0ms", $.style.transitionDuration = "0ms", a("scrollbarDragMove", b));
  }
  function v(b) {
    const M = f(), { scrollbar: x, wrapperEl: I } = e, { el: $ } = x;
    n && (n = !1, e.params.cssMode && (e.wrapperEl.style.scrollSnapType = "", I.style.transitionDuration = ""), M.hide && (u && clearTimeout(u), u = Se(() => {
      $.style.opacity = "0", $.style.transitionDuration = "400ms";
    }, 1e3)), a("scrollbarDragEnd", b), M.snapOnRelease && e.slideToClosest());
  }
  function y(b) {
    const { scrollbar: M, params: x } = e, I = M.el;
    if (!I)
      return;
    const $ = x.passiveListeners ? { passive: !1, capture: !1 } : !1, V = x.passiveListeners ? { passive: !0, capture: !1 } : !1, j = b === "on" ? "addEventListener" : "removeEventListener";
    I[j]("pointerdown", g, $), document[j]("pointermove", m, $), document[j]("pointerup", v, V);
  }
  function L() {
    !f().el || !e.scrollbar.el || y("on");
  }
  function A() {
    !f().el || !e.scrollbar.el || y("off");
  }
  function O() {
    const { scrollbar: b, el: M } = e;
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
    let V = null;
    $ && (V = $.querySelector(de(x.dragClass)), V || (V = ne("div", x.dragClass), $.append(V))), Object.assign(b, {
      el: $,
      dragEl: V
    }), x.draggable && L(), $ && $.classList[e.enabled ? "remove" : "add"](...fe(x.lockClass));
  }
  function C() {
    const b = f(), M = e.scrollbar.el;
    M && M.classList.remove(...fe(e.isHorizontal() ? b.horizontalClass : b.verticalClass)), A();
  }
  s("changeDirection", () => {
    if (!e.scrollbar || !e.scrollbar.el)
      return;
    const b = f();
    X(e.scrollbar.el).forEach((x) => {
      x.classList.remove(b.horizontalClass, b.verticalClass), x.classList.add(e.isHorizontal() ? b.horizontalClass : b.verticalClass);
    });
  }), s("init", () => {
    f().enabled === !1 ? _() : (O(), h(), o());
  }), s("update resize observerUpdate lock unlock changeDirection", () => {
    h();
  }), s("setTranslate", () => {
    o();
  }), s("setTransition", (b, M) => {
    r(M);
  }), s("enable disable", () => {
    const { el: b } = e.scrollbar;
    b && b.classList[e.enabled ? "remove" : "add"](...fe(f().lockClass));
  }), s("destroy", () => {
    C();
  });
  const k = () => {
    const b = f();
    e.el.classList.remove(...fe(b.scrollbarDisabledClass)), e.scrollbar.el && e.scrollbar.el.classList.remove(...fe(b.scrollbarDisabledClass)), O(), h(), o();
  }, _ = () => {
    const b = f();
    e.el.classList.add(...fe(b.scrollbarDisabledClass)), e.scrollbar.el && e.scrollbar.el.classList.add(...fe(b.scrollbarDisabledClass)), C();
  };
  Object.assign(e.scrollbar, {
    enable: k,
    disable: _,
    updateSize: h,
    setTranslate: o,
    init: O,
    destroy: C
  });
}, ma = ({ swiper: e, extendParams: t, on: s }) => {
  t({
    parallax: {
      enabled: !1
    }
  });
  function a() {
    return e.params.parallax;
  }
  const n = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]", i = (l, p) => {
    const { rtl: c } = e, f = c ? -1 : 1, T = l.getAttribute("data-swiper-parallax") || "0";
    let o = l.getAttribute("data-swiper-parallax-x"), r = l.getAttribute("data-swiper-parallax-y");
    const h = l.getAttribute("data-swiper-parallax-scale"), E = l.getAttribute("data-swiper-parallax-opacity"), S = l.getAttribute("data-swiper-parallax-rotate");
    if (o || r ? (o = o || "0", r = r || "0") : e.isHorizontal() ? (o = T, r = "0") : (r = T, o = "0"), o.indexOf("%") >= 0 ? o = `${parseInt(o, 10) * p * f}%` : o = `${Number(o) * p * f}px`, r.indexOf("%") >= 0 ? r = `${parseInt(r, 10) * p}%` : r = `${Number(r) * p}px`, typeof E < "u" && E !== null) {
      const m = Number(E), v = m - (m - 1) * (1 - Math.abs(p));
      l.style.opacity = String(v);
    }
    let g = `translate3d(${o}, ${r}, 0px)`;
    if (typeof h < "u" && h !== null) {
      const m = Number(h), v = m - (m - 1) * (1 - Math.abs(p));
      g += ` scale(${v})`;
    }
    if (S && typeof S < "u" && S !== null) {
      const m = Number(S) * p * -1;
      g += ` rotate(${m}deg)`;
    }
    l.style.transform = g;
  }, u = () => {
    const { el: l, slides: p, progress: c, snapGrid: f } = e, T = Q(l, n);
    e.isElement && T.push(...Q(e.hostEl, n)), T.forEach((o) => {
      i(o, c);
    }), p.forEach((o, r) => {
      let h = o.progress ?? 0;
      (e.params.slidesPerGroup ?? 1) > 1 && e.params.slidesPerView !== "auto" && (h += Math.ceil(r / 2) - c * (f.length - 1)), h = Math.min(Math.max(h, -1), 1), o.querySelectorAll(`${n}, [data-swiper-parallax-rotate]`).forEach((S) => {
        i(S, h);
      });
    });
  }, d = (l = e.params.speed ?? 300) => {
    const { el: p, hostEl: c } = e, f = [...p.querySelectorAll(n)];
    e.isElement && f.push(...c.querySelectorAll(n)), f.forEach((T) => {
      const o = T.getAttribute("data-swiper-parallax-duration");
      let r = (o ? parseInt(o, 10) : 0) || l;
      l === 0 && (r = 0), T.style.transitionDuration = `${r}ms`;
    });
  };
  s("beforeInit", () => {
    a().enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
  }), s("init", () => {
    a().enabled && u();
  }), s("setTranslate", () => {
    a().enabled && u();
  }), s("setTransition", (l, p) => {
    a().enabled && d(p);
  });
}, ha = ({ swiper: e, extendParams: t, on: s, emit: a }) => {
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
  let i = 1, u = !1, d = !1, l = { x: 0, y: 0 };
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
  }, r = {
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
  }, h = {
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
    set(w) {
      if (E !== w) {
        const R = o.imageEl, N = o.slideEl;
        a("zoomChange", w, R, N);
      }
      E = w;
    }
  });
  function S() {
    if (T.length < 2)
      return 1;
    const w = T[0].pageX, R = T[0].pageY, N = T[1].pageX, B = T[1].pageY;
    return Math.sqrt((N - w) ** 2 + (B - R) ** 2);
  }
  function g() {
    const w = n(), R = o.imageWrapEl?.getAttribute("data-swiper-zoom"), N = R != null ? Number(R) : w.maxRatio, B = o.imageEl;
    if (w.limitToOriginalSize && B && B.naturalWidth) {
      const K = B.naturalWidth / B.offsetWidth;
      return Math.min(K, N);
    }
    return N;
  }
  function m() {
    if (T.length < 2 || !o.imageEl)
      return [null, null];
    const w = o.imageEl.getBoundingClientRect();
    return [
      (T[0].pageX + (T[1].pageX - T[0].pageX) / 2 - w.x - window.scrollX) / i,
      (T[0].pageY + (T[1].pageY - T[0].pageY) / 2 - w.y - window.scrollY) / i
    ];
  }
  function v() {
    return e.isElement ? "swiper-slide" : `.${e.params.slideClass}`;
  }
  function y(w) {
    const R = v(), N = w.target;
    return N ? !!(N.matches(R) || e.slides.filter((B) => B.contains(N)).length > 0) : !1;
  }
  function L(w) {
    const R = `.${n().containerClass}`, N = w.target;
    return N ? !!(N.matches(R) || [...e.hostEl.querySelectorAll(R)].filter((B) => B.contains(N)).length > 0) : !1;
  }
  function A(w) {
    if (w.pointerType === "mouse" && T.splice(0, T.length), !y(w))
      return;
    const R = n();
    if (c = !1, f = !1, T.push(w), !(T.length < 2)) {
      if (c = !0, o.scaleStart = S(), !o.slideEl) {
        const N = w.target;
        o.slideEl = N?.closest(`.${e.params.slideClass}, swiper-slide`) ?? void 0, o.slideEl || (o.slideEl = e.slides[e.activeIndex]);
        let B = o.slideEl?.querySelector(`.${R.containerClass}`) ?? null;
        if (B && (B = B.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0] ?? null), o.imageEl = B ?? void 0, B ? o.imageWrapEl = me(B, `.${R.containerClass}`)[0] ?? void 0 : o.imageWrapEl = void 0, !o.imageWrapEl) {
          o.imageEl = void 0;
          return;
        }
        o.maxRatio = g();
      }
      if (o.imageEl) {
        const [N, B] = m();
        o.originX = N ?? 0, o.originY = B ?? 0, o.imageEl.style.transitionDuration = "0ms";
      }
      u = !0;
    }
  }
  function O(w) {
    if (!y(w))
      return;
    const R = n(), N = e.zoom, B = T.findIndex((K) => K.pointerId === w.pointerId);
    B >= 0 && (T[B] = w), !(T.length < 2) && (f = !0, o.scaleMove = S(), o.imageEl && (N.scale = o.scaleMove / (o.scaleStart ?? 1) * i, N.scale > o.maxRatio && (N.scale = o.maxRatio - 1 + (N.scale - o.maxRatio + 1) ** 0.5), N.scale < R.minRatio && (N.scale = R.minRatio + 1 - (R.minRatio - N.scale + 1) ** 0.5), o.imageEl.style.transform = `translate3d(0,0,0) scale(${N.scale})`));
  }
  function C(w) {
    if (!y(w) || w.pointerType === "mouse" && w.type === "pointerout")
      return;
    const R = n(), N = e.zoom, B = T.findIndex((K) => K.pointerId === w.pointerId);
    B >= 0 && T.splice(B, 1), !(!c || !f) && (c = !1, f = !1, o.imageEl && (N.scale = Math.max(Math.min(N.scale, o.maxRatio), R.minRatio), o.imageEl.style.transitionDuration = `${e.params.speed}ms`, o.imageEl.style.transform = `translate3d(0,0,0) scale(${N.scale})`, i = N.scale, u = !1, N.scale > 1 && o.slideEl ? o.slideEl.classList.add(`${R.zoomedSlideClass}`) : N.scale <= 1 && o.slideEl && o.slideEl.classList.remove(`${R.zoomedSlideClass}`), N.scale === 1 && (o.originX = 0, o.originY = 0, o.slideEl = void 0)));
  }
  let k;
  function _() {
    e.touchEventsData.preventTouchMoveFromPointerMove = !1;
  }
  function b() {
    k !== void 0 && clearTimeout(k), e.touchEventsData.preventTouchMoveFromPointerMove = !0, k = setTimeout(() => {
      e.destroyed || _();
    });
  }
  function M(w) {
    const R = e.device;
    if (r.isTouched)
      return;
    const N = T.length > 0 ? T[0] : w;
    r.touchesStart.x = N.pageX, r.touchesStart.y = N.pageY, o.imageEl && (R.android && w.cancelable && w.preventDefault(), r.isTouched = !0);
  }
  function x(w) {
    const N = w.pointerType === "mouse" && n().panOnMouseMove;
    if (!y(w) || !L(w))
      return;
    const B = e.zoom;
    if (!o.imageEl)
      return;
    if (!r.isTouched || !o.slideEl) {
      N && V(w);
      return;
    }
    if (N) {
      V(w);
      return;
    }
    r.isMoved || (r.width = o.imageEl.offsetWidth || o.imageEl.clientWidth, r.height = o.imageEl.offsetHeight || o.imageEl.clientHeight, r.startX = Ke(o.imageWrapEl, "x") || 0, r.startY = Ke(o.imageWrapEl, "y") || 0, o.slideWidth = o.slideEl.offsetWidth, o.slideHeight = o.slideEl.offsetHeight, o.imageWrapEl.style.transitionDuration = "0ms");
    const K = r.width * B.scale, ie = r.height * B.scale;
    r.minX = Math.min(o.slideWidth / 2 - K / 2, 0), r.maxX = -r.minX, r.minY = Math.min(o.slideHeight / 2 - ie / 2, 0), r.maxY = -r.minY, r.touchesCurrent.x = T.length > 0 ? T[0].pageX : w.pageX, r.touchesCurrent.y = T.length > 0 ? T[0].pageY : w.pageY, Math.max(Math.abs(r.touchesCurrent.x - (r.touchesStart.x ?? 0)), Math.abs(r.touchesCurrent.y - (r.touchesStart.y ?? 0))) > 5 && (e.allowClick = !1);
    const U = r.startX ?? 0, J = r.startY ?? 0;
    if (!r.isMoved && !u) {
      if (e.isHorizontal() && (Math.floor(r.minX) === Math.floor(U) && r.touchesCurrent.x < (r.touchesStart.x ?? 0) || Math.floor(r.maxX) === Math.floor(U) && r.touchesCurrent.x > (r.touchesStart.x ?? 0))) {
        r.isTouched = !1, _();
        return;
      }
      if (!e.isHorizontal() && (Math.floor(r.minY) === Math.floor(J) && r.touchesCurrent.y < (r.touchesStart.y ?? 0) || Math.floor(r.maxY) === Math.floor(J) && r.touchesCurrent.y > (r.touchesStart.y ?? 0))) {
        r.isTouched = !1, _();
        return;
      }
    }
    w.cancelable && w.preventDefault(), w.stopPropagation(), b(), r.isMoved = !0;
    const Z = (B.scale - i) / (o.maxRatio - n().minRatio), { originX: ee, originY: oe } = o;
    r.currentX = r.touchesCurrent.x - (r.touchesStart.x ?? 0) + U + Z * (r.width - ee * 2), r.currentY = r.touchesCurrent.y - (r.touchesStart.y ?? 0) + J + Z * (r.height - oe * 2), r.currentX < r.minX && (r.currentX = r.minX + 1 - (r.minX - r.currentX + 1) ** 0.8), r.currentX > r.maxX && (r.currentX = r.maxX - 1 + (r.currentX - r.maxX + 1) ** 0.8), r.currentY < r.minY && (r.currentY = r.minY + 1 - (r.minY - r.currentY + 1) ** 0.8), r.currentY > r.maxY && (r.currentY = r.maxY - 1 + (r.currentY - r.maxY + 1) ** 0.8), h.prevPositionX || (h.prevPositionX = r.touchesCurrent.x), h.prevPositionY || (h.prevPositionY = r.touchesCurrent.y), h.prevTime || (h.prevTime = Date.now()), h.x = (r.touchesCurrent.x - h.prevPositionX) / (Date.now() - h.prevTime) / 2, h.y = (r.touchesCurrent.y - h.prevPositionY) / (Date.now() - h.prevTime) / 2, Math.abs(r.touchesCurrent.x - h.prevPositionX) < 2 && (h.x = 0), Math.abs(r.touchesCurrent.y - h.prevPositionY) < 2 && (h.y = 0), h.prevPositionX = r.touchesCurrent.x, h.prevPositionY = r.touchesCurrent.y, h.prevTime = Date.now(), o.imageWrapEl.style.transform = `translate3d(${r.currentX}px, ${r.currentY}px,0)`;
  }
  function I() {
    const w = e.zoom;
    if (T.length = 0, !o.imageEl)
      return;
    if (!r.isTouched || !r.isMoved) {
      r.isTouched = !1, r.isMoved = !1;
      return;
    }
    r.isTouched = !1, r.isMoved = !1;
    let R = 300, N = 300;
    const B = h.x ?? 0, K = h.y ?? 0, ie = B * R, W = r.currentX + ie, U = K * N, J = r.currentY + U;
    B !== 0 && (R = Math.abs((W - r.currentX) / B)), K !== 0 && (N = Math.abs((J - r.currentY) / K));
    const Z = Math.max(R, N);
    r.currentX = W, r.currentY = J;
    const ee = r.width * w.scale, oe = r.height * w.scale;
    r.minX = Math.min(o.slideWidth / 2 - ee / 2, 0), r.maxX = -r.minX, r.minY = Math.min(o.slideHeight / 2 - oe / 2, 0), r.maxY = -r.minY, r.currentX = Math.max(Math.min(r.currentX, r.maxX), r.minX), r.currentY = Math.max(Math.min(r.currentY, r.maxY), r.minY), o.imageWrapEl.style.transitionDuration = `${Z}ms`, o.imageWrapEl.style.transform = `translate3d(${r.currentX}px, ${r.currentY}px,0)`;
  }
  function $() {
    const w = e.zoom;
    o.slideEl && e.activeIndex !== e.slides.indexOf(o.slideEl) && (o.imageEl && (o.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), o.imageWrapEl && (o.imageWrapEl.style.transform = "translate3d(0,0,0)"), o.slideEl.classList.remove(`${n().zoomedSlideClass}`), w.scale = 1, i = 1, o.slideEl = void 0, o.imageEl = void 0, o.imageWrapEl = void 0, o.originX = 0, o.originY = 0);
  }
  function V(w) {
    if (i <= 1 || !o.imageWrapEl || !y(w) || !L(w))
      return;
    const R = window.getComputedStyle(o.imageWrapEl).transform, N = new window.DOMMatrix(R);
    if (!d) {
      d = !0, l.x = w.clientX, l.y = w.clientY, r.startX = N.e, r.startY = N.f, r.width = o.imageEl.offsetWidth || o.imageEl.clientWidth, r.height = o.imageEl.offsetHeight || o.imageEl.clientHeight, o.slideWidth = o.slideEl.offsetWidth, o.slideHeight = o.slideEl.offsetHeight;
      return;
    }
    const B = (w.clientX - l.x) * p, K = (w.clientY - l.y) * p, ie = r.width * i, W = r.height * i, U = o.slideWidth, J = o.slideHeight, Z = Math.min(U / 2 - ie / 2, 0), ee = -Z, oe = Math.min(J / 2 - W / 2, 0), Pe = -oe, ge = Math.max(Math.min(r.startX + B, ee), Z), Te = Math.max(Math.min(r.startY + K, Pe), oe);
    o.imageWrapEl.style.transitionDuration = "0ms", o.imageWrapEl.style.transform = `translate3d(${ge}px, ${Te}px, 0)`, l.x = w.clientX, l.y = w.clientY, r.startX = ge, r.startY = Te, r.currentX = ge, r.currentY = Te;
  }
  function j(w) {
    const R = e.zoom, N = n();
    if (!o.slideEl) {
      if (w && typeof w != "number" && "target" in w && w.target && (o.slideEl = w.target.closest(`.${e.params.slideClass}, swiper-slide`) ?? void 0), !o.slideEl) {
        const nt = e.params.virtual;
        nt && nt.enabled && e.virtual ? o.slideEl = Q(e.slidesEl, `.${e.params.slideActiveClass}`)[0] ?? void 0 : o.slideEl = e.slides[e.activeIndex];
      }
      let Ee = o.slideEl?.querySelector(`.${N.containerClass}`) ?? null;
      Ee && (Ee = Ee.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0] ?? null), o.imageEl = Ee ?? void 0, Ee ? o.imageWrapEl = me(Ee, `.${N.containerClass}`)[0] ?? void 0 : o.imageWrapEl = void 0;
    }
    if (!o.imageEl || !o.imageWrapEl || !o.slideEl)
      return;
    o.maxRatio = g(), e.params.cssMode && (e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.touchAction = "none"), o.slideEl.classList.add(`${N.zoomedSlideClass}`);
    let B, K, ie, W, U, J, Z, ee, oe, Pe, ge, Te, Re, Oe, Ge, Be, He, Fe;
    const Bt = w && typeof w != "number";
    typeof r.touchesStart.x > "u" && Bt ? (B = w.pageX, K = w.pageY) : (B = r.touchesStart.x, K = r.touchesStart.y);
    const Ve = i, ve = typeof w == "number" ? w : null;
    i === 1 && ve && (B = void 0, K = void 0, r.touchesStart.x = void 0, r.touchesStart.y = void 0);
    const at = g();
    R.scale = ve || at, i = ve || at, w && !(i === 1 && ve) ? (He = o.slideEl.offsetWidth, Fe = o.slideEl.offsetHeight, ie = ze(o.slideEl).left + window.scrollX, W = ze(o.slideEl).top + window.scrollY, U = ie + He / 2 - (B ?? 0), J = W + Fe / 2 - (K ?? 0), oe = o.imageEl.offsetWidth || o.imageEl.clientWidth, Pe = o.imageEl.offsetHeight || o.imageEl.clientHeight, ge = oe * R.scale, Te = Pe * R.scale, Re = Math.min(He / 2 - ge / 2, 0), Oe = Math.min(Fe / 2 - Te / 2, 0), Ge = -Re, Be = -Oe, Ve > 0 && ve && typeof r.currentX == "number" && typeof r.currentY == "number" ? (Z = r.currentX * R.scale / Ve, ee = r.currentY * R.scale / Ve) : (Z = U * R.scale, ee = J * R.scale), Z < Re && (Z = Re), Z > Ge && (Z = Ge), ee < Oe && (ee = Oe), ee > Be && (ee = Be)) : (Z = 0, ee = 0), ve && R.scale === 1 && (o.originX = 0, o.originY = 0), r.currentX = Z, r.currentY = ee, o.imageWrapEl.style.transitionDuration = "300ms", o.imageWrapEl.style.transform = `translate3d(${Z}px, ${ee}px,0)`, o.imageEl.style.transitionDuration = "300ms", o.imageEl.style.transform = `translate3d(0,0,0) scale(${R.scale})`;
  }
  function P() {
    const w = e.zoom, R = n();
    if (!o.slideEl) {
      const N = e.params.virtual;
      N && N.enabled && e.virtual ? o.slideEl = Q(e.slidesEl, `.${e.params.slideActiveClass}`)[0] ?? void 0 : o.slideEl = e.slides[e.activeIndex];
      let B = o.slideEl?.querySelector(`.${R.containerClass}`) ?? null;
      B && (B = B.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0] ?? null), o.imageEl = B ?? void 0, B ? o.imageWrapEl = me(B, `.${R.containerClass}`)[0] ?? void 0 : o.imageWrapEl = void 0;
    }
    !o.imageEl || !o.imageWrapEl || !o.slideEl || (o.maxRatio = g(), e.params.cssMode && (e.wrapperEl.style.overflow = "", e.wrapperEl.style.touchAction = ""), w.scale = 1, i = 1, r.currentX = void 0, r.currentY = void 0, r.touchesStart.x = void 0, r.touchesStart.y = void 0, o.imageWrapEl.style.transitionDuration = "300ms", o.imageWrapEl.style.transform = "translate3d(0,0,0)", o.imageEl.style.transitionDuration = "300ms", o.imageEl.style.transform = "translate3d(0,0,0) scale(1)", o.slideEl.classList.remove(`${R.zoomedSlideClass}`), o.slideEl = void 0, o.originX = 0, o.originY = 0, R.panOnMouseMove && (l = { x: 0, y: 0 }, d && (d = !1, r.startX = 0, r.startY = 0)));
  }
  function z(w) {
    const R = e.zoom;
    R.scale && R.scale !== 1 ? P() : j(w);
  }
  function G() {
    const w = e.params.passiveListeners ? { passive: !0, capture: !1 } : !1, R = e.params.passiveListeners ? { passive: !1, capture: !0 } : !0;
    return { passiveListener: w, activeListenerWithCapture: R };
  }
  function F() {
    const w = e.zoom;
    if (w.enabled)
      return;
    w.enabled = !0;
    const { passiveListener: R, activeListenerWithCapture: N } = G();
    e.wrapperEl.addEventListener("pointerdown", A, R), e.wrapperEl.addEventListener("pointermove", O, N), ["pointerup", "pointercancel", "pointerout"].forEach((B) => {
      e.wrapperEl.addEventListener(B, C, R);
    }), e.wrapperEl.addEventListener("pointermove", x, N);
  }
  function q() {
    const w = e.zoom;
    if (!w.enabled)
      return;
    w.enabled = !1;
    const { passiveListener: R, activeListenerWithCapture: N } = G();
    e.wrapperEl.removeEventListener("pointerdown", A, R), e.wrapperEl.removeEventListener("pointermove", O, N), ["pointerup", "pointercancel", "pointerout"].forEach((B) => {
      e.wrapperEl.removeEventListener(B, C, R);
    }), e.wrapperEl.removeEventListener("pointermove", x, N);
  }
  s("init", () => {
    n().enabled && F();
  }), s("destroy", () => {
    q();
  }), s("touchStart", (w, R) => {
    e.zoom.enabled && M(R);
  }), s("touchEnd", () => {
    e.zoom.enabled && I();
  }), s("doubleTap", (w, R) => {
    !e.animating && n().enabled && e.zoom.enabled && n().toggle && z(R);
  }), s("transitionEnd", () => {
    e.zoom.enabled && n().enabled && $();
  }), s("slideChange", () => {
    e.zoom.enabled && n().enabled && e.params.cssMode && $();
  }), Object.assign(e.zoom, {
    enable: F,
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
const ga = ({ swiper: e, extendParams: t, on: s }) => {
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
  function n(l) {
    e.controller.spline = e.params.loop ? new ft(e.slidesGrid, l.slidesGrid) : new ft(e.snapGrid, l.snapGrid);
  }
  function i(l, p) {
    const c = e.controller.control;
    let f, T;
    const o = e.constructor;
    function r(h) {
      if (h.destroyed)
        return;
      const E = e.rtlTranslate ? -e.translate : e.translate, S = a();
      S.by === "slide" ? (n(h), T = -e.controller.spline.interpolate(-E)) : T = 0, (!T || S.by === "container") && (f = (h.maxTranslate() - h.minTranslate()) / (e.maxTranslate() - e.minTranslate()), (Number.isNaN(f) || !Number.isFinite(f)) && (f = 1), T = (E - e.minTranslate()) * f + h.minTranslate()), S.inverse && (T = h.maxTranslate() - T), h.updateProgress(T), h.setTranslate(T, e), h.updateActiveIndex(), h.updateSlidesClasses();
    }
    if (Array.isArray(c))
      for (let h = 0; h < c.length; h += 1) {
        const E = c[h];
        E && E !== p && E instanceof o && r(E);
      }
    else c instanceof o && p !== c && r(c);
  }
  function u(l, p) {
    const c = e.constructor, f = e.controller.control;
    function T(o) {
      o.destroyed || (o.setTransition(l, e), l !== 0 && (o.transitionStart(), o.params.autoHeight && Se(() => {
        o.updateAutoHeight();
      }), Ce(o.wrapperEl, () => {
        f && o.transitionEnd();
      })));
    }
    if (Array.isArray(f))
      for (let o = 0; o < f.length; o += 1) {
        const r = f[o];
        r && r !== p && r instanceof c && T(r);
      }
    else f instanceof c && p !== f && T(f);
  }
  function d() {
    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
  }
  s("beforeInit", () => {
    const l = a().control;
    if (typeof window < "u" && (typeof l == "string" || ke(l))) {
      (typeof l == "string" ? [...document.querySelectorAll(l)] : [l]).forEach((c) => {
        e.controller.control || (e.controller.control = []);
        const f = e.controller.control;
        if (c && c.swiper)
          f.push(c.swiper);
        else if (c) {
          const T = `${e.params.eventsPrefix}init`, o = (r) => {
            const h = r.detail;
            h && h[0] && f.push(h[0]), e.update(), c.removeEventListener(T, o);
          };
          c.addEventListener(T, o);
        }
      });
      return;
    }
    e.controller.control = l;
  }), s("update", () => {
    d();
  }), s("resize", () => {
    d();
  }), s("observerUpdate", () => {
    d();
  }), s("setTranslate", (l, p, c) => {
    e.controller.control && (!Array.isArray(e.controller.control) && e.controller.control.destroyed || e.controller.setTranslate(p, c));
  }), s("setTransition", (l, p, c) => {
    e.controller.control && (!Array.isArray(e.controller.control) && e.controller.control.destroyed || e.controller.setTransition(p, c));
  }), Object.assign(e.controller, {
    setTranslate: i,
    setTransition: u
  });
}, ut = (e) => !!e.virtual && !!e.params.virtual?.enabled, Ta = ({ swiper: e, extendParams: t, on: s }) => {
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
  function l(P) {
    const z = a;
    !z || !P || le(z, P);
  }
  function p(P = 16) {
    const z = () => Math.round(16 * Math.random()).toString(16);
    return "x".repeat(P).replace(/x/g, z);
  }
  function c(P) {
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
    X(P).forEach((F) => {
      F.setAttribute("role", z);
    });
  }
  function o(P, z) {
    X(P).forEach((F) => {
      F.setAttribute("aria-roledescription", z);
    });
  }
  function r(P, z) {
    X(P).forEach((F) => {
      F.setAttribute("aria-label", z);
    });
  }
  function h(P, z) {
    X(P).forEach((F) => {
      F.setAttribute("id", z);
    });
  }
  function E(P, z) {
    X(P).forEach((F) => {
      F.setAttribute("aria-live", z);
    });
  }
  function S(P) {
    X(P).forEach((G) => {
      G.setAttribute("aria-disabled", "true");
    });
  }
  function g(P) {
    X(P).forEach((G) => {
      G.removeAttribute("aria-disabled");
    });
  }
  function m(P) {
    if (P.keyCode !== 13 && P.keyCode !== 32)
      return;
    const z = d(), G = e.params.pagination, F = P.target;
    if (!(e.pagination && e.pagination.el && (F === e.pagination.el || e.pagination.el.contains(F)) && !F.matches(de(G?.bulletClass)))) {
      if (e.navigation && e.navigation.prevEl && e.navigation.nextEl) {
        const q = X(e.navigation.prevEl);
        X(e.navigation.nextEl).includes(F) && (e.isEnd && !e.params.loop || e.slideNext(), e.isEnd ? l(z.lastSlideMessage) : l(z.nextSlideMessage)), q.includes(F) && (e.isBeginning && !e.params.loop || e.slidePrev(), e.isBeginning ? l(z.firstSlideMessage) : l(z.prevSlideMessage));
      }
      e.pagination && F.matches(de(G?.bulletClass)) && F.click();
    }
  }
  function v() {
    if (e.params.loop || e.params.rewind || !e.navigation)
      return;
    const { nextEl: P, prevEl: z } = e.navigation;
    z && (e.isBeginning ? (S(z), f(z)) : (g(z), c(z))), P && (e.isEnd ? (S(P), f(P)) : (g(P), c(P)));
  }
  function y() {
    return !!(e.pagination && e.pagination.bullets && e.pagination.bullets.length);
  }
  function L() {
    const P = e.params.pagination;
    return y() && !!P?.clickable;
  }
  function A() {
    const P = d();
    if (!y())
      return;
    const z = e.params.pagination;
    e.pagination.bullets.forEach((G) => {
      z.clickable && (c(G), z.renderBullet || (T(G, "button"), r(G, P.paginationBulletMessage.replace(/\{\{index\}\}/, String((Le(G) ?? 0) + 1))))), G.matches(de(z.bulletActiveClass)) ? G.setAttribute("aria-current", "true") : G.removeAttribute("aria-current");
    });
  }
  const O = (P, z, G) => {
    c(P), P.tagName !== "BUTTON" && (T(P, "button"), P.addEventListener("keydown", m)), r(P, G);
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
  let b = [];
  const M = () => {
    b.forEach((P) => P.removeAttribute("inert")), b = [];
  }, x = (P) => {
    if (P.key !== "Tab" || !e.params.loop || e.destroyed)
      return;
    const G = P.target?.closest?.(`.${e.params.slideClass}, swiper-slide`);
    if (!G || !e.slides.includes(G))
      return;
    const F = parseInt(G.getAttribute("data-swiper-slide-index") || "", 10);
    if (Number.isNaN(F))
      return;
    const q = ut(e) ? e.virtual.slides.length : e.slides.length;
    (P.shiftKey ? F === 0 : F === q - 1) && (M(), e.slides.forEach((R) => {
      R === G || R.hasAttribute("inert") || (R.setAttribute("inert", ""), b.push(R));
    }), setTimeout(M, 0));
  }, I = (P) => {
    const z = d();
    if (e.a11y.clicked || !z.scrollOnFocus || (/* @__PURE__ */ new Date()).getTime() - u < 100)
      return;
    const F = P.target.closest(`.${e.params.slideClass}, swiper-slide`);
    if (!F || !e.slides.includes(F))
      return;
    i = F;
    const q = ut(e), w = (q ? parseInt(F.getAttribute("data-swiper-slide-index") || "0", 10) : e.slides.indexOf(F)) === e.activeIndex, R = e.params.watchSlidesProgress && e.visibleSlides && e.visibleSlides.includes(F);
    if (w || R)
      return;
    const N = P.sourceCapabilities;
    N && N.firesTouchEvents || (e.isHorizontal() ? e.el.scrollLeft = 0 : e.el.scrollTop = 0, requestAnimationFrame(() => {
      n || (e.params.loop ? e.slideToLoop(e.getSlideIndexWhenGrid(parseInt(F.getAttribute("data-swiper-slide-index") || "0", 10)), 0) : q ? e.slideTo(e.getSlideIndexWhenGrid(parseInt(F.getAttribute("data-swiper-slide-index") || "0", 10)), 0) : e.slideTo(e.getSlideIndexWhenGrid(e.slides.indexOf(F)), 0), n = !1);
    }));
  }, $ = () => {
    const P = d();
    P.itemRoleDescriptionMessage && o(e.slides, P.itemRoleDescriptionMessage), P.slideRole && T(e.slides, P.slideRole);
    const z = e.slides.length, G = P.slideLabelMessage;
    G && e.slides.forEach((F, q) => {
      const w = e.params.loop ? parseInt(F.getAttribute("data-swiper-slide-index") || "0", 10) : q, R = G.replace(/\{\{index\}\}/, String(w + 1)).replace(/\{\{slidesLength\}\}/, String(z));
      r(F, R);
    });
  }, V = () => {
    const P = d();
    a && e.el.append(a);
    const z = e.el;
    P.containerRoleDescriptionMessage && o(z, P.containerRoleDescriptionMessage), P.containerMessage && r(z, P.containerMessage), P.containerRole && T(z, P.containerRole);
    const G = e.wrapperEl, F = String(P.id || G.getAttribute("id") || `swiper-wrapper-${p(16)}`);
    if (h(G, F), P.wrapperLiveRegion) {
      const N = e.params.autoplay, B = e.params.autoplay && N?.enabled ? "off" : "polite";
      E(G, B);
    }
    $();
    const q = e.navigation ? e.navigation : { nextEl: void 0, prevEl: void 0 }, w = X(q.nextEl), R = X(q.prevEl);
    w && w.forEach((N) => O(N, F, P.nextSlideMessage)), R && R.forEach((N) => O(N, F, P.prevSlideMessage)), L() && X(e.pagination.el).forEach((B) => {
      B.addEventListener("keydown", m);
    }), document.addEventListener("visibilitychange", _), e.el.addEventListener("focus", I, !0), e.el.addEventListener("keydown", x, !0), e.el.addEventListener("pointerdown", C, !0), e.el.addEventListener("pointerup", k, !0);
  };
  function j() {
    a && a.remove();
    const P = e.navigation ? e.navigation : { nextEl: void 0, prevEl: void 0 }, z = X(P.nextEl), G = X(P.prevEl);
    z && z.forEach((F) => F.removeEventListener("keydown", m)), G && G.forEach((F) => F.removeEventListener("keydown", m)), L() && X(e.pagination.el).forEach((q) => {
      q.removeEventListener("keydown", m);
    }), document.removeEventListener("visibilitychange", _), e.el && typeof e.el != "string" && (e.el.removeEventListener("focus", I, !0), e.el.removeEventListener("keydown", x, !0), e.el.removeEventListener("pointerdown", C, !0), e.el.removeEventListener("pointerup", k, !0)), M();
  }
  s("beforeInit", () => {
    a = ne("span", d().notificationClass), a.setAttribute("aria-live", "assertive"), a.setAttribute("aria-atomic", "true");
  }), s("afterInit", () => {
    d().enabled && V();
  }), s("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
    d().enabled && $();
  }), s("fromEdge toEdge afterInit lock unlock", () => {
    d().enabled && v();
  }), s("paginationUpdate", () => {
    d().enabled && A();
  }), s("destroy", () => {
    d().enabled && j();
  });
}, va = ({ swiper: e, extendParams: t, on: s }) => {
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
    let r;
    o ? r = new URL(o) : r = window.location;
    const h = r.pathname.slice(1).split("/").filter((m) => m !== ""), E = h.length, S = h[E - 2], g = h[E - 1];
    return { key: S, value: g };
  }, l = (o, r) => {
    const h = i();
    if (!a || !h.enabled)
      return;
    let E;
    e.params.url ? E = new URL(e.params.url) : E = window.location;
    const S = !!e.params.virtual?.enabled, g = e.virtual && S ? e.slidesEl.querySelector(`[data-swiper-slide-index="${r}"]`) : e.slides[r];
    if (!g)
      return;
    let m = u(g.getAttribute("data-history") || "");
    const v = h.root;
    v.length > 0 ? m = `${v[v.length - 1] === "/" ? v.slice(0, v.length - 1) : v}/${o ? `${o}/` : ""}${m}` : E.pathname.includes(o || "") || (m = `${o ? `${o}/` : ""}${m}`), h.keepQuery && (m += E.search);
    const y = window.history.state;
    y && y.value === m || (h.replaceState ? window.history.replaceState({ value: m }, "", m) : window.history.pushState({ value: m }, "", m));
  }, p = (o, r, h) => {
    if (r)
      for (let E = 0, S = e.slides.length; E < S; E += 1) {
        const g = e.slides[E];
        if (u(g.getAttribute("data-history") || "") === r) {
          const v = e.getSlideIndex(g);
          e.slideTo(v, o, h);
        }
      }
    else
      e.slideTo(0, o, h);
  }, c = () => {
    n = d(e.params.url), p(e.params.speed, n.value, !1);
  }, f = () => {
    const o = e.params.history;
    if (o) {
      if (!window.history || !window.history.pushState) {
        o.enabled = !1;
        const r = e.params.hashNavigation;
        r && (r.enabled = !0);
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
    a && l(i().key, e.activeIndex);
  }), s("slideChange", () => {
    a && e.params.cssMode && l(i().key, e.activeIndex);
  });
}, je = (e) => !!e.virtual && !!e.params.virtual?.enabled, Ea = ({ swiper: e, extendParams: t, emit: s, on: a }) => {
  let n = !1;
  t({
    hashNavigation: {
      enabled: !1,
      replaceState: !1,
      watchState: !1,
      getSlideIndex(c, f) {
        if (je(e)) {
          const o = e.slides.find((h) => h.getAttribute("data-hash") === f);
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
    const c = document.location.hash.replace("#", ""), f = je(e) ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex], T = f ? f.getAttribute("data-hash") : "";
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
    const f = je(e) ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex], T = f ? f.getAttribute("data-hash") || f.getAttribute("data-history") : "";
    c.replaceState && window.history && window.history.replaceState ? (window.history.replaceState(null, "", `#${T}` || ""), s("hashSet")) : (document.location.hash = T || "", s("hashSet"));
  }, l = () => {
    const c = i(), f = e.params.history;
    if (!c.enabled || f && f.enabled)
      return;
    n = !0;
    const T = document.location.hash.replace("#", "");
    if (T) {
      const r = c.getSlideIndex(e, T);
      e.slideTo(r || 0, 0, e.params.runCallbacksOnInit, !0);
    }
    c.watchState && window.addEventListener("hashchange", u);
  }, p = () => {
    i().watchState && window.removeEventListener("hashchange", u);
  };
  a("init", () => {
    i().enabled && l();
  }), a("destroy", () => {
    i().enabled && p();
  }), a("transitionEnd _freeModeNoMomentumRelease", () => {
    n && d();
  }), a("slideChange", () => {
    n && e.params.cssMode && d();
  });
}, Sa = ({ swiper: e, extendParams: t, on: s, emit: a, params: n }) => {
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
  let d, l, p = u, c = u, f = 0, T = (/* @__PURE__ */ new Date()).getTime(), o = !1, r = !1, h = !1, E, S = !1, g = !1;
  function m(P) {
    if (!e || e.destroyed || !e.wrapperEl || P.target !== e.wrapperEl)
      return;
    e.wrapperEl.removeEventListener("transitionend", m);
    const z = P.detail;
    g || z && z.bySwiperTouchMove || _();
  }
  const v = () => {
    if (e.destroyed || !e.autoplay.running)
      return;
    e.autoplay.paused ? o = !0 : o && (c = f, o = !1);
    const P = e.autoplay.paused ? f : T + c - (/* @__PURE__ */ new Date()).getTime();
    e.autoplay.timeLeft = P, a("autoplayTimeLeft", P, P / p), l = requestAnimationFrame(() => {
      v();
    });
  }, y = () => {
    let P;
    const z = !!e.params.virtual?.enabled;
    if (e.virtual && z ? P = e.slides.find((F) => F.classList.contains("swiper-slide-active")) : P = e.slides[e.activeIndex], !P)
      return;
    const G = P.getAttribute("data-swiper-autoplay");
    if (G != null)
      return parseInt(G, 10);
  }, L = () => {
    let P = i().delay;
    const z = y();
    return typeof z == "number" && !Number.isNaN(z) && z > 0 && (P = z), P;
  }, A = (P) => {
    if (e.destroyed || !e.autoplay.running)
      return 0;
    l !== void 0 && cancelAnimationFrame(l), v();
    let z = P;
    typeof z > "u" && (z = L(), p = z, c = z), f = z;
    const G = e.params.speed, F = () => {
      if (!e || e.destroyed)
        return;
      const q = i();
      q.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(G, !0, !0), a("autoplay")) : q.stopOnLastSlide || (e.slideTo(e.slides.length - 1, G, !0, !0), a("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(G, !0, !0), a("autoplay")) : q.stopOnLastSlide || (e.slideTo(0, G, !0, !0), a("autoplay")), e.params.cssMode && (T = (/* @__PURE__ */ new Date()).getTime(), requestAnimationFrame(() => {
        A();
      }));
    };
    return z > 0 ? (d !== void 0 && clearTimeout(d), d = setTimeout(() => {
      F();
    }, z)) : requestAnimationFrame(() => {
      F();
    }), z;
  }, O = () => e.destroyed ? !1 : (T = (/* @__PURE__ */ new Date()).getTime(), e.autoplay.running = !0, A(), a("autoplayStart"), !0), C = () => e.destroyed ? !1 : (e.autoplay.running = !1, d !== void 0 && clearTimeout(d), l !== void 0 && cancelAnimationFrame(l), a("autoplayStop"), !0), k = (P, z) => {
    if (e.destroyed || !e.autoplay.running)
      return;
    d !== void 0 && clearTimeout(d), P || (S = !0);
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
  }, b = () => {
    e.destroyed || !e.autoplay.running || (document.visibilityState === "hidden" && (S = !0, k(!0)), document.visibilityState === "visible" && _());
  }, M = (P) => {
    P.pointerType === "mouse" && (S = !0, g = !0, !(e.animating || e.autoplay.paused) && k(!0));
  }, x = (P) => {
    P.pointerType === "mouse" && (g = !1, e.autoplay.paused && _());
  }, I = () => {
    i().pauseOnMouseEnter && (e.el.addEventListener("pointerenter", M), e.el.addEventListener("pointerleave", x));
  }, $ = () => {
    e.el && typeof e.el != "string" && (e.el.removeEventListener("pointerenter", M), e.el.removeEventListener("pointerleave", x));
  }, V = () => {
    document.addEventListener("visibilitychange", b);
  }, j = () => {
    document.removeEventListener("visibilitychange", b);
  };
  s("init", () => {
    i().enabled && (I(), V(), O());
  }), s("destroy", () => {
    $(), j(), e.autoplay.running && C();
  }), s("_freeModeStaticRelease", () => {
    (h || S) && _();
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
      r = !0, h = !1, S = !1, E = setTimeout(() => {
        S = !0, h = !0, k(!0);
      }, 200);
    }
  }), s("touchEnd", () => {
    if (!(e.destroyed || !e.autoplay.running || !r)) {
      if (E !== void 0 && clearTimeout(E), d !== void 0 && clearTimeout(d), i().disableOnInteraction) {
        h = !1, r = !1;
        return;
      }
      h && e.params.cssMode && _(), h = !1, r = !1;
    }
  }), s("slideChange", () => {
    e.destroyed || !e.autoplay.running || e.autoplay.paused && (f = L(), p = L());
  }), Object.assign(e.autoplay, {
    start: O,
    stop: C,
    pause: k,
    resume: _
  });
}, ya = ({ swiper: e, extendParams: t, on: s }) => {
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
    const T = f.clickedIndex, o = f.clickedSlide, r = i();
    if (o && o.classList.contains(r.slideThumbActiveClass) || typeof T > "u" || T === null)
      return;
    let h;
    if (f.params.loop) {
      const E = f.clickedSlide?.getAttribute("data-swiper-slide-index");
      h = E == null ? T : parseInt(E, 10);
    } else
      h = T;
    e.params.loop ? e.slideToLoop(h) : e.slideTo(h);
  }
  function l() {
    const f = i();
    if (a)
      return !1;
    a = !0;
    const T = e.constructor;
    if (f.swiper instanceof T) {
      if (f.swiper.destroyed)
        return a = !1, !1;
      const r = f.swiper;
      e.thumbs.swiper = r, Object.assign(r.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), Object.assign(r.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), r.update();
    } else if (xe(f.swiper)) {
      const r = Object.assign({}, f.swiper);
      Object.assign(r, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), e.thumbs.swiper = new T(r), n = !0;
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
    let r = 1;
    const h = i(), E = h.slideThumbActiveClass, S = e.params.slidesPerView;
    if (typeof S == "number" && S > 1 && !e.params.centeredSlides && (r = S), h.multipleActiveThumbs || (r = 1), r = Math.floor(r), o.slides.forEach((g) => g.classList.remove(E)), o.params.loop || u())
      for (let g = 0; g < r; g += 1)
        Q(o.slidesEl, `[data-swiper-slide-index="${e.realIndex + g}"]`).forEach((m) => {
          m.classList.add(E);
        });
    else
      for (let g = 0; g < r; g += 1) {
        const m = o.slides[e.realIndex + g];
        m && m.classList.add(E);
      }
    (T?.autoScroll ?? !0) && c(f ? 0 : void 0);
  }
  function c(f) {
    const T = e.thumbs.swiper;
    if (!T || T.destroyed)
      return;
    const o = T.params.slidesPerView, r = o === "auto" ? T.slidesPerViewDynamic() : o ?? 1, h = i().autoScrollOffset, E = h && !T.params.loop;
    if (e.realIndex !== T.realIndex || E) {
      const S = T.activeIndex;
      let g, m;
      if (T.params.loop) {
        const v = T.slides.find((y) => y.getAttribute("data-swiper-slide-index") === `${e.realIndex}`);
        g = v ? T.slides.indexOf(v) : -1, m = e.activeIndex > e.previousIndex ? "next" : "prev";
      } else
        g = e.realIndex, m = g > (e.previousRealIndex ?? 0) ? "next" : "prev";
      E && (g += m === "next" ? h : -1 * h), T.visibleSlidesIndexes && T.visibleSlidesIndexes.indexOf(g) < 0 && (T.params.centeredSlides ? g > S ? g = g - Math.floor(r / 2) + 1 : g = g + Math.floor(r / 2) - 1 : g > S && T.params.slidesPerGroup, T.slideTo(g, f));
    }
  }
  s("beforeInit", () => {
    const f = e.params.thumbs;
    if (!(!f || !f.swiper))
      if (typeof f.swiper == "string" || ke(f.swiper)) {
        const T = () => {
          const r = typeof f.swiper == "string" ? document.querySelector(f.swiper) : f.swiper;
          if (r && r.swiper)
            f.swiper = r.swiper, l(), p(!0);
          else if (r) {
            const h = `${e.params.eventsPrefix}init`, E = (S) => {
              const g = S.detail;
              f.swiper = g[0], r.removeEventListener(h, E), l(), p(!0), f.swiper.update(), e.update();
            };
            r.addEventListener(h, E);
          }
          return r;
        }, o = () => {
          if (e.destroyed)
            return;
          T() || requestAnimationFrame(o);
        };
        requestAnimationFrame(o);
      } else
        l(), p(!0);
  }), s("slideChange update resize observerUpdate", () => {
    p();
  }), s("setTransition", (f, T) => {
    const o = e.thumbs.swiper;
    !o || o.destroyed || o.setTransition(T);
  }), s("beforeDestroy", () => {
    const f = e.thumbs.swiper;
    !f || f.destroyed || n && f.destroy();
  }), Object.assign(e.thumbs, {
    init: l,
    update: p
  });
}, ba = ({ swiper: e, extendParams: t, emit: s, once: a }) => {
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
    const l = e.getTranslate();
    e.setTranslate(l), e.setTransition(0), e.touchEventsData.velocities.length = 0, e.freeMode.onTouchEnd({ currentPos: e.rtl ? e.translate : -e.translate });
  }
  function u() {
    if (e.params.cssMode)
      return;
    const { touchEventsData: l, touches: p } = e;
    l.velocities.length === 0 && l.velocities.push({
      position: p[e.isHorizontal() ? "startX" : "startY"],
      time: l.touchStartTime ?? ae()
    }), l.velocities.push({
      position: p[e.isHorizontal() ? "currentX" : "currentY"],
      time: ae()
    });
  }
  function d({ currentPos: l }) {
    if (e.params.cssMode)
      return;
    const { wrapperEl: p, rtlTranslate: c, snapGrid: f, touchEventsData: T } = e, o = e.params, r = n(), h = ae(), E = h - (T.touchStartTime ?? h);
    if (l < -e.minTranslate()) {
      e.slideTo(e.activeIndex);
      return;
    }
    if (l > -e.maxTranslate()) {
      e.slides.length < f.length ? e.slideTo(f.length - 1) : e.slideTo(e.slides.length - 1);
      return;
    }
    if (r.momentum) {
      if (T.velocities.length > 1) {
        const O = T.velocities.pop(), C = T.velocities.pop(), k = O.position - C.position, _ = O.time - C.time;
        e.velocity = k / _, e.velocity /= 2, Math.abs(e.velocity) < r.minimumVelocity && (e.velocity = 0), (_ > 150 || ae() - O.time > 300) && (e.velocity = 0);
      } else
        e.velocity = 0;
      e.velocity *= r.momentumVelocityRatio, T.velocities.length = 0;
      let S = 1e3 * r.momentumRatio;
      const g = e.velocity * S;
      let m = e.translate + g;
      c && (m = -m);
      let v = !1, y;
      const L = Math.abs(e.velocity) * 20 * r.momentumBounceRatio;
      let A = !1;
      if (m < e.maxTranslate())
        r.momentumBounce ? (m + e.maxTranslate() < -L && (m = e.maxTranslate() - L), y = e.maxTranslate(), v = !0, T.allowMomentumBounce = !0) : m = e.maxTranslate(), o.loop && o.centeredSlides && (A = !0);
      else if (m > e.minTranslate())
        r.momentumBounce ? (m - e.minTranslate() > L && (m = e.minTranslate() + L), y = e.minTranslate(), v = !0, T.allowMomentumBounce = !0) : m = e.minTranslate(), o.loop && o.centeredSlides && (A = !0);
      else if (r.sticky) {
        let O = 0;
        for (let C = 0; C < f.length; C += 1)
          if (f[C] > -m) {
            O = C;
            break;
          }
        Math.abs(f[O] - m) < Math.abs((f[O - 1] ?? f[O]) - m) || e.swipeDirection === "next" ? m = f[O] : m = f[O - 1], m = -m;
      }
      if (A && a("transitionEnd", () => {
        e.loopFix();
      }), e.velocity !== 0) {
        if (c ? S = Math.abs((-m - e.translate) / e.velocity) : S = Math.abs((m - e.translate) / e.velocity), r.sticky) {
          const O = Math.abs((c ? -m : m) - e.translate), C = e.slidesSizesGrid[e.activeIndex], k = o.speed;
          O < C ? S = k : O < 2 * C ? S = k * 1.5 : S = k * 2.5;
        }
      } else if (r.sticky) {
        e.slideToClosest();
        return;
      }
      r.momentumBounce && v && y !== void 0 ? (e.updateProgress(y), e.setTransition(S), e.setTranslate(m), e.transitionStart(!0, e.swipeDirection), e.animating = !0, Ce(p, () => {
        !e || e.destroyed || !T.allowMomentumBounce || (s("momentumBounce"), e.setTransition(o.speed), setTimeout(() => {
          e.setTranslate(y), Ce(p, () => {
            !e || e.destroyed || e.transitionEnd();
          });
        }, 0));
      })) : e.velocity ? (s("_freeModeNoMomentumRelease"), e.updateProgress(m), e.setTransition(S), e.setTranslate(m), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, Ce(p, () => {
        !e || e.destroyed || e.transitionEnd();
      }))) : e.updateProgress(m), e.updateActiveIndex(), e.updateSlidesClasses();
    } else if (r.sticky) {
      e.slideToClosest();
      return;
    } else
      s("_freeModeNoMomentumRelease");
    (!r.momentum || E >= o.longSwipesMs) && (s("_freeModeStaticRelease"), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses());
  }
  e.freeMode = {
    onTouchStart: i,
    onTouchMove: u,
    onTouchEnd: d
  };
}, Aa = ({ swiper: e, extendParams: t, on: s }) => {
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
  const l = () => {
    let E = e.params.spaceBetween ?? 0;
    return typeof E == "string" && E.indexOf("%") >= 0 ? E = parseFloat(E.replace("%", "")) / 100 * e.size : typeof E == "string" && (E = parseFloat(E)), E;
  }, p = () => {
    const E = e.params.virtual;
    return !!e.virtual && typeof E == "object" && E !== null && !!E.enabled;
  }, c = (E) => {
    const { slidesPerView: S } = e.params, { rows: g, fill: m } = a(), v = p() ? e.virtual.slides.length : E.length;
    u = Math.floor(v / g), Math.floor(v / g) === v / g ? n = v : n = Math.ceil(v / g) * g, S !== "auto" && m === "row" && (n = Math.max(n, Math.floor(S ?? 1) * g)), i = n / g;
  }, f = () => {
    e.slides && e.slides.forEach((E) => {
      E.swiperSlideGridSet && (E.style.height = "", E.style.setProperty(e.getDirectionLabel("margin-top"), ""));
    });
  }, T = (E, S, g) => {
    const { slidesPerGroup: m } = e.params, v = l(), { rows: y, fill: L } = a(), A = p() ? e.virtual.slides.length : g.length;
    let O, C, k;
    if (L === "row" && (m ?? 1) > 1) {
      const b = m ?? 1, M = Math.floor(E / (b * y)), x = E - y * b * M, I = M === 0 ? b : Math.min(Math.ceil((A - M * y * b) / y), b);
      k = Math.floor(x / I), C = x - k * I + M * b, O = C + k * n / y, S.style.order = String(O);
    } else L === "column" ? (C = Math.floor(E / y), k = E - C * y, (C > u || C === u && k === y - 1) && (k += 1, k >= y && (k = 0, C += 1))) : (k = Math.floor(E / i), C = E - k * i);
    const _ = S;
    _.row = k, _.column = C, S.style.height = `calc((100% - ${(y - 1) * v}px) / ${y})`, S.style.setProperty(e.getDirectionLabel("margin-top"), k !== 0 && v ? `${v}px` : ""), _.swiperSlideGridSet = !0;
  }, o = (E, S) => {
    const { centeredSlides: g, roundLengths: m } = e.params, v = l(), { rows: y } = a();
    if (e.virtualSize = (E + v) * n, e.virtualSize = Math.ceil(e.virtualSize / y) - v, e.params.cssMode || e.wrapperEl.style.setProperty(e.getDirectionLabel("width"), `${e.virtualSize + v}px`), g) {
      const L = [];
      for (let A = 0; A < S.length; A += 1) {
        let O = S[A];
        m && (O = Math.floor(O)), S[A] < e.virtualSize + S[0] && L.push(O);
      }
      S.splice(0, S.length), S.push(...L);
    }
  }, r = () => {
    const E = e.params.grid;
    d = !!(E && (E.rows ?? 1) > 1);
  }, h = () => {
    const { params: E, el: S } = e, g = E.grid, m = !!(g && (g.rows ?? 1) > 1);
    d && !m ? (S.classList.remove(`${E.containerModifierClass}grid`, `${E.containerModifierClass}grid-column`), u = 1, e.emitContainerClasses()) : !d && m && (S.classList.add(`${E.containerModifierClass}grid`), g.fill === "column" && S.classList.add(`${E.containerModifierClass}grid-column`), e.emitContainerClasses()), d = m;
  };
  s("init", r), s("update", h), e.grid = {
    initSlides: c,
    unsetSlides: f,
    updateSlide: T,
    updateWrapperSize: o
  };
};
function _a(e, t) {
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
  let l = u > e ? u + 1 : u;
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
    l = u > e ? u + t.length : u;
  } else
    i.append(t);
  for (let c = 0; c < p.length; c += 1)
    i.append(p[c]);
  s.recalcSlides(), a.loop && s.loopCreate(), (!a.observer || s.isElement) && s.update(), a.loop ? s.slideTo(l + (s.loopedSlides ?? 0), 0, !1) : s.slideTo(l, 0, !1);
}
function xa(e) {
  const t = this, { params: s, slidesEl: a } = t;
  s.loop && t.loopDestroy();
  const n = (i) => {
    if (typeof i == "string") {
      const u = document.createElement("div");
      le(u, i);
      const d = u.children[0];
      d && a.append(d), le(u, "");
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
function Ca(e) {
  const t = this, { params: s, activeIndex: a, slidesEl: n } = t;
  s.loop && t.loopDestroy();
  let i = a + 1;
  const u = (d) => {
    if (typeof d == "string") {
      const l = document.createElement("div");
      le(l, d);
      const p = l.children[0];
      p && n.prepend(p), le(l, "");
    } else
      n.prepend(d);
  };
  if (Array.isArray(e)) {
    for (let d = 0; d < e.length; d += 1) {
      const l = e[d];
      l && u(l);
    }
    i = a + e.length;
  } else
    u(e);
  t.recalcSlides(), s.loop && t.loopCreate(), (!s.observer || t.isElement) && t.update(), t.slideTo(i, 0, !1);
}
function La() {
  const e = this, t = [];
  for (let s = 0; s < e.slides.length; s += 1)
    t.push(s);
  e.removeSlide(t);
}
function Ma(e) {
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
const Ia = ({ swiper: e }) => {
  Object.assign(e, {
    appendSlide: xa.bind(e),
    prependSlide: Ca.bind(e),
    addSlide: _a.bind(e),
    removeSlide: Ma.bind(e),
    removeAllSlides: La.bind(e)
  });
};
function Ae(e) {
  const { effect: t, swiper: s, on: a, setTranslate: n, setTransition: i, overwriteParams: u, perspective: d, recreateShadows: l, getEffectParams: p } = e;
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
    if (s.params.effect === t && l) {
      const f = p ? p() : void 0;
      if (!f || !f.slideShadows)
        return;
      s.slides.forEach((T) => {
        T.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((o) => o.remove());
      }), l();
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
function Me({ swiper: e, duration: t, transformElements: s, allSlides: a }) {
  const { activeIndex: n } = e, i = (u) => {
    if (!u.parentElement)
      return e.slides.find((d) => d.shadowRoot && d.shadowRoot === u.parentNode);
    if (ke(u.parentElement))
      return u.parentElement;
  };
  if (e.params.virtualTranslate && t !== 0) {
    let u = !1, d;
    a ? d = s : d = s.filter((l) => {
      const p = l.classList.contains("swiper-slide-transform") ? i(l) : l;
      return !!p && e.getSlideIndex(p) === n;
    }), d.forEach((l) => {
      Ce(l, () => {
        if (u || !e || e.destroyed)
          return;
        u = !0, e.animating = !1;
        const p = new CustomEvent("transitionend", { bubbles: !0, cancelable: !0 });
        e.wrapperEl.dispatchEvent(p);
      });
    });
  }
}
const Pa = ({ swiper: e, extendParams: t, on: s }) => {
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
    const l = n();
    return l.mode === "default" && l.crossFade ? "cross-fade" : l.mode;
  }
  Ae({
    effect: "fade",
    swiper: e,
    on: s,
    setTranslate: () => {
      const { slides: l } = e, p = n(), c = i(), f = c === "out-in" && a > 0, T = a;
      a = 0;
      const o = [], r = [];
      let h = !1;
      for (let E = 0; E < l.length; E += 1) {
        const S = l[E];
        let m = -(S.swiperSlideOffset ?? 0);
        e.params.virtualTranslate || (m -= e.translate);
        let v = 0;
        e.isHorizontal() || (v = m, m = 0);
        const y = S.progress ?? 0;
        let L;
        c === "cross-fade" ? L = Math.max(1 - Math.abs(y), 0) : c === "out-in" ? L = Math.max(1 - 2 * Math.abs(y), 0) : L = 1 + Math.min(Math.max(y, -1), 0);
        const A = Ie(p, S);
        if (f) {
          const O = parseFloat(A.style.opacity);
          L === 0 && O > 0 && (h = !0), L > 0 && r.push(A), o.push(A);
        }
        A.style.opacity = String(L), A.style.transform = `translate3d(${m}px, ${v}px, 0px)`;
      }
      f && (o.forEach((E) => {
        const S = h && r.includes(E);
        E.style.transitionDuration = `${T / 2}ms`, E.style.transitionDelay = S ? `${T / 2}ms` : "0ms";
      }), Me({
        swiper: e,
        duration: T,
        transformElements: r,
        allSlides: !0
      }));
    },
    setTransition: (l) => {
      const p = i(), c = e.slides.map((f) => he(f));
      if (c.forEach((f) => {
        f.style.transitionDuration = `${l}ms`, p === "out-in" && l === 0 && (f.style.transitionDelay = "");
      }), p === "out-in" && l > 0 && !e.params.cssMode) {
        a = l;
        return;
      }
      Me({ swiper: e, duration: l, transformElements: c, allSlides: !0 });
    },
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
  const n = (l, p, c) => {
    let f = c ? l.querySelector(".swiper-slide-shadow-left") : l.querySelector(".swiper-slide-shadow-top"), T = c ? l.querySelector(".swiper-slide-shadow-right") : l.querySelector(".swiper-slide-shadow-bottom");
    f || (f = ne("div", `swiper-slide-shadow-cube swiper-slide-shadow-${c ? "left" : "top"}`.split(" ")), l.append(f)), T || (T = ne("div", `swiper-slide-shadow-cube swiper-slide-shadow-${c ? "right" : "bottom"}`.split(" ")), l.append(T)), f && (f.style.opacity = String(Math.max(-p, 0))), T && (T.style.opacity = String(Math.max(p, 0)));
  };
  Ae({
    effect: "cube",
    swiper: e,
    on: s,
    setTranslate: () => {
      const { el: l, wrapperEl: p, slides: c, width: f, height: T, rtlTranslate: o, size: r } = e, h = $e(e), E = a(), S = e.isHorizontal(), g = !!(e.virtual && e.params.virtual?.enabled);
      let m = 0, v = null;
      E.shadow && (S ? (v = e.wrapperEl.querySelector(".swiper-cube-shadow"), v || (v = ne("div", "swiper-cube-shadow"), e.wrapperEl.append(v)), v.style.height = `${f}px`) : (v = l.querySelector(".swiper-cube-shadow"), v || (v = ne("div", "swiper-cube-shadow"), l.append(v))));
      for (let y = 0; y < c.length; y += 1) {
        const L = c[y];
        let A = y;
        g && (A = parseInt(L.getAttribute("data-swiper-slide-index") ?? "0", 10));
        let O = A * 90, C = Math.floor(O / 360);
        o && (O = -O, C = Math.floor(-O / 360));
        const k = Math.max(Math.min(L.progress ?? 0, 1), -1);
        let _ = 0, b = 0, M = 0;
        A % 4 === 0 ? (_ = -C * 4 * r, M = 0) : (A - 1) % 4 === 0 ? (_ = 0, M = -C * 4 * r) : (A - 2) % 4 === 0 ? (_ = r + C * 4 * r, M = r) : (A - 3) % 4 === 0 && (_ = -r, M = 3 * r + r * 4 * C), o && (_ = -_), S || (b = _, _ = 0);
        const x = `rotateX(${h(S ? 0 : -O)}deg) rotateY(${h(S ? O : 0)}deg) translate3d(${_}px, ${b}px, ${M}px)`;
        k <= 1 && k > -1 && (m = A * 90 + k * 90, o && (m = -A * 90 - k * 90)), L.style.transform = x, E.slideShadows && n(L, k, S);
      }
      if (p.style.transformOrigin = `50% 50% -${r / 2}px`, p.style.setProperty("-webkit-transform-origin", `50% 50% -${r / 2}px`), E.shadow && v)
        if (S)
          v.style.transform = `translate3d(0px, ${f / 2 + E.shadowOffset}px, ${-f / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${E.shadowScale})`;
        else {
          const y = Math.abs(m) - Math.floor(Math.abs(m) / 90) * 90, L = 1.5 - (Math.sin(y * 2 * Math.PI / 360) / 2 + Math.cos(y * 2 * Math.PI / 360) / 2), A = E.shadowScale, O = E.shadowScale / L, C = E.shadowOffset;
          v.style.transform = `scale3d(${A}, 1, ${O}) translate3d(0px, ${T / 2 + C}px, ${-T / 2 / O}px) rotateX(-89.99deg)`;
        }
      p.style.transform = `translate3d(0px,0,0px) rotateX(${h(e.isHorizontal() ? 0 : m)}deg) rotateY(${h(e.isHorizontal() ? -m : 0)}deg)`, p.style.setProperty("--swiper-cube-translate-z", "0px");
    },
    setTransition: (l) => {
      const { el: p, slides: c } = e;
      if (c.forEach((f) => {
        f.style.transitionDuration = `${l}ms`, f.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((T) => {
          T.style.transitionDuration = `${l}ms`;
        });
      }), e.params.cubeEffect?.shadow && !e.isHorizontal()) {
        const f = p.querySelector(".swiper-cube-shadow");
        f && (f.style.transitionDuration = `${l}ms`);
      }
    },
    recreateShadows: () => {
      const l = e.isHorizontal();
      e.slides.forEach((p) => {
        const c = Math.max(Math.min(p.progress ?? 0, 1), -1);
        n(p, c, l);
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
function ye(e, t, s) {
  const a = `swiper-slide-shadow${s ? `-${s}` : ""}${e ? ` swiper-slide-shadow-${e}` : ""}`, n = he(t), i = `.${a.split(" ").join(".")}`, u = n.querySelector(i);
  if (u)
    return u;
  const d = ne("div", a.split(" "));
  return n.append(d), d;
}
const Oa = ({ swiper: e, extendParams: t, on: s }) => {
  t({
    flipEffect: {
      slideShadows: !0,
      limitRotation: !0
    }
  });
  function a() {
    return e.params.flipEffect;
  }
  const n = (l, p) => {
    let c = e.isHorizontal() ? l.querySelector(".swiper-slide-shadow-left") : l.querySelector(".swiper-slide-shadow-top"), f = e.isHorizontal() ? l.querySelector(".swiper-slide-shadow-right") : l.querySelector(".swiper-slide-shadow-bottom");
    c || (c = ye("flip", l, e.isHorizontal() ? "left" : "top")), f || (f = ye("flip", l, e.isHorizontal() ? "right" : "bottom")), c && (c.style.opacity = String(Math.max(-p, 0))), f && (f.style.opacity = String(Math.max(p, 0)));
  };
  Ae({
    effect: "flip",
    swiper: e,
    on: s,
    setTranslate: () => {
      const { slides: l, rtlTranslate: p } = e, c = a(), f = $e(e);
      for (let T = 0; T < l.length; T += 1) {
        const o = l[T];
        let r = o.progress ?? 0;
        c.limitRotation && (r = Math.max(Math.min(r, 1), -1));
        const h = o.swiperSlideOffset ?? 0;
        let S = -180 * r, g = 0, m = e.params.cssMode ? -h - e.translate : -h, v = 0;
        e.isHorizontal() ? p && (S = -S) : (v = m, m = 0, g = -S, S = 0), o.style.zIndex = String(-Math.abs(Math.round(r)) + l.length), c.slideShadows && n(o, r);
        const y = `translate3d(${m}px, ${v}px, 0px) rotateX(${f(g)}deg) rotateY(${f(S)}deg)`, L = Ie(c, o);
        L.style.transform = y;
      }
    },
    setTransition: (l) => {
      const p = e.slides.map((c) => he(c));
      p.forEach((c) => {
        c.style.transitionDuration = `${l}ms`, c.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((f) => {
          f.style.transitionDuration = `${l}ms`;
        });
      }), Me({ swiper: e, duration: l, transformElements: p });
    },
    recreateShadows: () => {
      const l = a();
      e.slides.forEach((p) => {
        let c = p.progress ?? 0;
        l.limitRotation && (c = Math.max(Math.min(c, 1), -1)), n(p, c);
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
}, wa = ({ swiper: e, extendParams: t, on: s }) => {
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
      const { width: u, height: d, slides: l, slidesSizesGrid: p } = e, c = a(), f = e.isHorizontal(), T = e.translate, o = f ? -T + u / 2 : -T + d / 2, r = f ? c.rotate : -c.rotate, h = c.depth, E = $e(e);
      for (let S = 0, g = l.length; S < g; S += 1) {
        const m = l[S], v = p[S], y = m.swiperSlideOffset ?? 0, L = (o - y - v / 2) / v, A = typeof c.modifier == "function" ? c.modifier(L) : L * c.modifier;
        let O = f ? r * A : 0, C = f ? 0 : r * A, k = -h * Math.abs(A), _ = typeof c.stretch == "string" && c.stretch.indexOf("%") !== -1 ? parseFloat(c.stretch) / 100 * v : c.stretch, b = f ? 0 : _ * A, M = f ? _ * A : 0, x = 1 - (1 - c.scale) * Math.abs(A);
        Math.abs(M) < 1e-3 && (M = 0), Math.abs(b) < 1e-3 && (b = 0), Math.abs(k) < 1e-3 && (k = 0), Math.abs(O) < 1e-3 && (O = 0), Math.abs(C) < 1e-3 && (C = 0), Math.abs(x) < 1e-3 && (x = 0);
        const I = `translate3d(${M}px,${b}px,${k}px)  rotateX(${E(C)}deg) rotateY(${E(O)}deg) scale(${x})`, $ = Ie(c, m);
        if ($.style.transform = I, m.style.zIndex = String(-Math.abs(Math.round(A)) + 1), c.slideShadows) {
          let V = f ? m.querySelector(".swiper-slide-shadow-left") : m.querySelector(".swiper-slide-shadow-top"), j = f ? m.querySelector(".swiper-slide-shadow-right") : m.querySelector(".swiper-slide-shadow-bottom");
          V || (V = ye("coverflow", m, f ? "left" : "top")), j || (j = ye("coverflow", m, f ? "right" : "bottom")), V && (V.style.opacity = String(A > 0 ? A : 0)), j && (j.style.opacity = String(-A > 0 ? -A : 0));
        }
      }
    },
    setTransition: (u) => {
      e.slides.map((l) => he(l)).forEach((l) => {
        l.style.transitionDuration = `${u}ms`, l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((p) => {
          p.style.transitionDuration = `${u}ms`;
        });
      });
    },
    perspective: () => !0,
    overwriteParams: () => ({
      watchSlidesProgress: !0
    })
  });
}, Da = ({ swiper: e, extendParams: t, on: s }) => {
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
  Ae({
    effect: "creative",
    swiper: e,
    on: s,
    setTranslate: () => {
      const { slides: d, wrapperEl: l, slidesSizesGrid: p } = e, c = a(), { progressMultiplier: f } = c, T = e.params.centeredSlides, o = $e(e);
      if (T) {
        const r = p[0] / 2 - (e.params.slidesOffsetBefore ?? 0);
        l.style.transform = `translateX(calc(50% - ${r}px))`;
      }
      for (let r = 0; r < d.length; r += 1) {
        const h = d[r], E = h.progress ?? 0, S = Math.min(Math.max(E, -c.limitProgress), c.limitProgress);
        let g = S;
        T || (g = Math.min(Math.max(h.originalProgress ?? 0, -c.limitProgress), c.limitProgress));
        const m = h.swiperSlideOffset ?? 0, v = [
          e.params.cssMode ? -m - e.translate : -m,
          0,
          0
        ], y = [0, 0, 0];
        let L = !1;
        e.isHorizontal() || (v[1] = v[0], v[0] = 0);
        let A = {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          scale: 1,
          opacity: 1
        };
        S < 0 ? (A = c.next, L = !0) : S > 0 && (A = c.prev, L = !0), v.forEach((x, I) => {
          v[I] = `calc(${x}px + (${n(A.translate[I])} * ${Math.abs(S * f)}))`;
        }), y.forEach((x, I) => {
          y[I] = A.rotate[I] * Math.abs(S * f);
        }), h.style.zIndex = String(-Math.abs(Math.round(E)) + d.length);
        const O = v.join(", "), C = `rotateX(${o(y[0])}deg) rotateY(${o(y[1])}deg) rotateZ(${o(y[2])}deg)`, k = g < 0 ? `scale(${1 + (1 - A.scale) * g * f})` : `scale(${1 - (1 - A.scale) * g * f})`, _ = g < 0 ? 1 + (1 - A.opacity) * g * f : 1 - (1 - A.opacity) * g * f, b = `translate3d(${O}) ${C} ${k}`;
        if (L && A.shadow || !L) {
          let x = h.querySelector(".swiper-slide-shadow");
          if (!x && A.shadow && (x = ye("creative", h)), x) {
            const I = c.shadowPerProgress ? S * (1 / c.limitProgress) : S;
            x.style.opacity = String(Math.min(Math.max(Math.abs(I), 0), 1));
          }
        }
        const M = Ie(c, h);
        M.style.transform = b, M.style.opacity = String(_), A.origin && (M.style.transformOrigin = A.origin);
      }
    },
    setTransition: (d) => {
      const l = e.slides.map((p) => he(p));
      l.forEach((p) => {
        p.style.transitionDuration = `${d}ms`, p.querySelectorAll(".swiper-slide-shadow").forEach((c) => {
          c.style.transitionDuration = `${d}ms`;
        });
      }), Me({ swiper: e, duration: d, transformElements: l, allSlides: !0 });
    },
    perspective: () => a().perspective,
    overwriteParams: () => ({
      watchSlidesProgress: !0,
      virtualTranslate: !e.params.cssMode
    })
  });
}, Na = ({ swiper: e, extendParams: t, on: s }) => {
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
      const { slides: u, activeIndex: d, rtlTranslate: l } = e, p = a(), { startTranslate: c, isTouched: f } = e.touchEventsData, T = l ? -e.translate : e.translate;
      for (let o = 0; o < u.length; o += 1) {
        const r = u[o], h = r.progress ?? 0, E = Math.min(Math.max(h, -4), 4);
        let S = r.swiperSlideOffset ?? 0;
        e.params.centeredSlides && !e.params.cssMode && (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`), e.params.centeredSlides && e.params.cssMode && (S -= u[0].swiperSlideOffset ?? 0);
        let g = e.params.cssMode ? -S - e.translate : -S, m = 0;
        const v = -100 * Math.abs(E);
        let y = 1, L = -p.perSlideRotate * E, A = p.perSlideOffset - Math.abs(E) * 0.75;
        const O = e.virtual && e.params.virtual?.enabled ? e.virtual.from + o : o, C = (O === d || O === d - 1) && E > 0 && E < 1 && (f || e.params.cssMode) && (T ?? 0) < (c ?? 0), k = (O === d || O === d + 1) && E < 0 && E > -1 && (f || e.params.cssMode) && (T ?? 0) > (c ?? 0);
        if (C || k) {
          const x = (1 - Math.abs((Math.abs(E) - 0.5) / 0.5)) ** 0.5;
          L += -28 * E * x, y += -0.5 * x, A += 96 * x, m = `${(p.rotate || e.isHorizontal() ? -25 : 0) * x * Math.abs(E)}%`;
        }
        if (E < 0 ? g = `calc(${g}px ${l ? "-" : "+"} (${A * Math.abs(E)}%))` : E > 0 ? g = `calc(${g}px ${l ? "-" : "+"} (${-A * Math.abs(E)}%))` : g = `${g}px`, !e.isHorizontal()) {
          const x = m;
          m = g, g = x;
        }
        const _ = E < 0 ? `${1 + (1 - y) * E}` : `${1 - (1 - y) * E}`, b = `
        translate3d(${g}, ${m}, ${v}px)
        rotateZ(${p.rotate ? l ? -L : L : 0}deg)
        scale(${_})
      `;
        if (p.slideShadows) {
          let x = r.querySelector(".swiper-slide-shadow");
          x || (x = ye("cards", r)), x && (x.style.opacity = String(Math.min(Math.max((Math.abs(E) - 0.5) / 0.5, 0), 1)));
        }
        r.style.zIndex = String(-Math.abs(Math.round(h)) + u.length);
        const M = Ie(p, r);
        M.style.transform = b;
      }
    },
    setTransition: (u) => {
      const d = e.slides.map((l) => he(l));
      d.forEach((l) => {
        l.style.transitionDuration = `${u}ms`, l.querySelectorAll(".swiper-slide-shadow").forEach((p) => {
          p.style.transitionDuration = `${u}ms`;
        });
      }), Me({ swiper: e, duration: u, transformElements: d });
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
}, za = [
  ra,
  la,
  oa,
  da,
  ua,
  pa,
  ma,
  ha,
  ga,
  Ta,
  va,
  Ea,
  Sa,
  ya,
  ba,
  Aa,
  Ia,
  Pa,
  Ra,
  Oa,
  wa,
  Da,
  Na
];
te.use(za);
function Mt(e) {
  return e?.getAttribute("class")?.trim() || void 0;
}
function H(e, t, s) {
  const a = e.getAttribute(t)?.trim();
  if (!(!a || a === s))
    return a;
}
function It(e, t, s) {
  const a = e.getAttribute(t)?.trim();
  if (!a) return;
  if (a.toLowerCase() === "auto") return "auto";
  const n = Number(a);
  if (!(isNaN(n) || n === s))
    return n;
}
function be(e, t, s) {
  const a = e.getAttribute(t)?.trim();
  if (!(!a || a === s))
    return a;
}
function Y(e, t, s) {
  const a = e.getAttribute(t)?.trim();
  if (!a) return;
  const n = Number(a);
  if (!(isNaN(n) || n === s))
    return n;
}
function D(e, t, s) {
  const a = e.getAttribute(t)?.trim()?.toLowerCase();
  if (a) {
    if (a === "true") return s === !0 ? void 0 : !0;
    if (a === "false") return s === !1 ? void 0 : !1;
  }
}
function pt(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return t === Object.prototype || t === null;
}
function Pt(e) {
  if (!pt(e)) return e;
  const t = e;
  for (const s in t) {
    const a = t[s];
    a == null ? delete t[s] : pt(a) && (Pt(a), Object.keys(a).length === 0 && delete t[s]);
  }
  return e;
}
function Rt(e, t) {
  return e.find((s) => s.name?.toLowerCase() === t?.toLowerCase());
}
function ka(e, t, s) {
  const a = Rt(e, t);
  return a ? a.swiper ? a : (console.error(`[MANIPULATION] Invalid Swiper instance in Waterfall "${t}"`), null) : (console.warn(`[MANIPULATION] No Waterfall found with name: "${t}"`, s), null);
}
function $a(e, t, s) {
  const a = e.filter((n) => n.name?.toLowerCase() === t?.toLowerCase()).map((n) => n.swiper);
  return s && console.log(`📊 Found ${a.length} matching waterfall(s) for "${t}"`), a;
}
function Ga() {
  document.querySelectorAll('[waterfall] .swiper-wrapper[role="list"]').forEach((e) => {
    e.removeAttribute("role");
  });
}
const ce = "waterfall", Ba = "waterfall-debug-mode", Ha = "waterfall-a11y-container-message", Fa = "waterfall-a11y-container-role", Va = "waterfall-a11y-container-role-description-message", Wa = "waterfall-a11y-enabled", Ya = "waterfall-a11y-first-slide-message", Xa = "waterfall-a11y-id", Ua = "waterfall-a11y-item-role-description-message", qa = "waterfall-a11y-last-slide-message", ja = "waterfall-a11y-next-slide-message", Ka = "waterfall-a11y-notification-class", Za = "waterfall-a11y-pagination-bullet-message", Qa = "waterfall-a11y-prev-slide-message", Ja = "waterfall-a11y-scroll-on-focus", en = "waterfall-a11y-slide-label-message", tn = "waterfall-a11y-slide-role", sn = ["mobile", "mobile-large", "tablet", "desktop", "desktop-small", "desktop-large"], an = (e, t) => `${e}-${t}`, et = "waterfall-controller-control", nn = "waterfall-controller-by", rn = "waterfall-controller-inverse", ln = "waterfall-fade-effect-mode", on = "waterfall-coverflow-effect-depth", dn = "waterfall-coverflow-effect-modifier", cn = "waterfall-coverflow-effect-rotate", fn = "waterfall-coverflow-effect-scale", un = "waterfall-coverflow-effect-slide-shadows", pn = "waterfall-coverflow-effect-stretch", mn = "waterfall-flip-effect-limit-rotation", hn = "waterfall-flip-effect-slide-shadows", gn = "waterfall-cube-effect-shadow", Tn = "waterfall-cube-effect-shadow-offset", vn = "waterfall-cube-effect-shadow-scale", En = "waterfall-cube-effect-slide-shadows", Sn = "waterfall-cards-effect-per-slide-offset", yn = "waterfall-cards-effect-per-slide-rotate", bn = "waterfall-cards-effect-rotate", An = "waterfall-cards-effect-slide-shadows", _n = "waterfall-allow-slide-next", xn = "waterfall-allow-slide-prev", Cn = "waterfall-allow-touch-move", Ln = "waterfall-auto-height", Mn = "waterfall-breakpoints-base", In = "waterfall-center-insufficient-slides", Ot = "waterfall-centered-slides", Pn = "waterfall-centered-slides-bounds", Rn = "waterfall-container-modifier-class", On = "waterfall-create-elements", wn = "waterfall-css-mode", Dn = "waterfall-direction", Nn = "waterfall-edge-swipe-detection", zn = "waterfall-edge-swipe-threshold", kn = "waterfall-effect", $n = "waterfall-enabled", Gn = "waterfall-events-prefix", Bn = "waterfall-focusable-elements", Hn = "waterfall-follow-finger", Fn = "waterfall-grab-cursor", Vn = "waterfall-height", Wn = "waterfall-init", Yn = "waterfall-initial-slide", Xn = "waterfall-lazy-preload-prev-next", Un = "waterfall-lazy-preloader-class", qn = "waterfall-long-swipes", jn = "waterfall-long-swipes-ms", Kn = "waterfall-long-swipes-ratio", mt = "waterfall-loop", Zn = "waterfall-loop-add-blank-slides", Qn = "waterfall-loop-additional-slides", Jn = "waterfall-loop-prevents-sliding", ei = "waterfall-max-backface-hidden-slides", ti = "waterfall-nested", si = "waterfall-no-swiping", ai = "waterfall-no-swiping-class", ni = "waterfall-no-swiping-selector", ii = "waterfall-normalize-slide-index", ri = "waterfall-observe-parents", li = "waterfall-observe-slide-children", oi = "waterfall-observer", di = "waterfall-one-way-movement", ci = "waterfall-passive-listeners", fi = "waterfall-prevent-clicks", ui = "waterfall-prevent-clicks-propagation", pi = "waterfall-prevent-interaction-on-transition", mi = "waterfall-resistance", hi = "waterfall-resistance-ratio", gi = "waterfall-resize-observer", ht = "waterfall-rewind", Ti = "waterfall-round-lengths", vi = "waterfall-run-callbacks-on-init", Ei = "waterfall-set-wrapper-size", Si = "waterfall-short-swipes", yi = "waterfall-simulate-touch", bi = "waterfall-slide-active-class", Ai = "waterfall-slide-class", _i = "waterfall-slide-blank-class", xi = "waterfall-slide-fully-visible-class", Ci = "waterfall-slide-next-class", Li = "waterfall-slide-prev-class", Mi = "waterfall-slide-to-clicked-slide", Ii = "waterfall-slide-visible-class", Pi = "waterfall-slides-offset-after", Ri = "waterfall-slides-offset-before", wt = "waterfall-slides-per-group", Oi = "waterfall-slides-per-group-auto", wi = "waterfall-slides-per-group-skip", Dt = "waterfall-slides-per-view", Nt = "waterfall-space-between", Di = "waterfall-speed", Ni = "waterfall-swipe-handler", zi = "waterfall-swiper-element-node-name", ki = "waterfall-threshold", $i = "waterfall-touch-angle", Gi = "waterfall-touch-events-target", Bi = "waterfall-touch-move-stop-propagation", Hi = "waterfall-touch-ratio", Fi = "waterfall-touch-release-on-edges", Vi = "waterfall-touch-start-force-prevent-default", Wi = "waterfall-touch-start-prevent-default", Yi = "waterfall-unique-nav-elements", Xi = "waterfall-update-on-window-resize", Ui = "waterfall-url", qi = "waterfall-user-agent", ji = "waterfall-virtual-translate", Ki = "waterfall-watch-overflow", Zi = "waterfall-watch-slides-progress", Qi = "waterfall-width", Ji = "waterfall-wrapper-class", er = "waterfall-hash-navigation-replace-state", tr = "waterfall-hash-navigation-watch-state", sr = "waterfall-history-keep-query", ar = "waterfall-history-key", nr = "waterfall-history-replace-state", ir = "waterfall-history-root", rr = "waterfall-keyboard-enabled", lr = "waterfall-keyboard-only-in-viewport", or = "waterfall-keyboard-page-up-down", dr = "waterfall-mousewheel-enabled", cr = "waterfall-mousewheel-events-target", fr = "waterfall-mousewheel-force-to-axis", ur = "waterfall-mousewheel-invert", pr = "waterfall-mousewheel-no-mousewheel-class", mr = "waterfall-mousewheel-release-on-edges", hr = "waterfall-mousewheel-sensitivity", gr = "waterfall-mousewheel-threshold-delta", Tr = "waterfall-mousewheel-threshold-time", vr = "waterfall-grid-rows", Er = "waterfall-grid-fill", Sr = "waterfall-navigation-disabled-class", yr = "waterfall-navigation-enabled", br = "waterfall-navigation-hidden-class", Ar = "waterfall-navigation-hide-on-click", _r = "waterfall-navigation-lock-class", xr = "waterfall-navigation-navigation-disabled-class", Cr = "waterfall-pagination-type", Lr = "waterfall-pagination-bullet-class", Mr = "waterfall-pagination-bullet-active-class", Ir = "waterfall-pagination-clickable", Pr = "waterfall-pagination-clickable-class", Rr = "waterfall-pagination-current-class", Or = "waterfall-pagination-dynamic-bullets", wr = "waterfall-pagination-dynamic-main-bullets", Dr = "waterfall-pagination-enabled", Nr = "waterfall-pagination-hidden-class", zr = "waterfall-pagination-hide-on-click", kr = "waterfall-pagination-horizontal-class", $r = "waterfall-pagination-lock-class", Gr = "waterfall-pagination-modifier-class", Br = "waterfall-pagination-pagination-disabled-class", Hr = "waterfall-pagination-progressbar-fill-class", Fr = "waterfall-pagination-progressbar-opposite", Vr = "waterfall-pagination-progressbar-opposite-class", Wr = "waterfall-pagination-total-class", Yr = "waterfall-pagination-vertical-class", zt = "waterfall-autoplay", kt = "waterfall-smooth-autoplay", Xr = "waterfall-autoplay-delay", Ur = "waterfall-autoplay-disable-on-interaction", qr = "waterfall-autoplay-reverse-direction", $t = "waterfall-autoplay-pause-on-mouse-enter", jr = "waterfall-autoplay-stop-on-last-slide", Kr = "waterfall-autoplay-wait-for-transition", Zr = "waterfall-autoplay-control-enabled", Qr = "waterfall-autoplay-control-default-state", Jr = "waterfall-free-mode-enabled", el = "waterfall-free-mode-minimum-velocity", tl = "waterfall-free-mode-momentum", sl = "waterfall-free-mode-momentum-bounce", al = "waterfall-free-mode-momentum-bounce-ratio", nl = "waterfall-free-mode-momentum-ratio", il = "waterfall-free-mode-momentum-velocity-ratio", rl = "waterfall-free-mode-sticky", ll = "waterfall-scrollbar-drag-class", ol = "waterfall-scrollbar-drag-size", dl = "waterfall-scrollbar-draggable", cl = "waterfall-scrollbar-enabled", fl = "waterfall-scrollbar-hide", ul = "waterfall-scrollbar-horizontal-class", pl = "waterfall-scrollbar-lock-class", ml = "waterfall-scrollbar-scrollbar-disabled-class", hl = "waterfall-scrollbar-vertical-class", gl = "waterfall-scrollbar-snap-on-release", tt = "waterfall-thumbs-swiper", Tl = "waterfall-thumbs-auto-scroll-offset", vl = "waterfall-thumbs-multiple-active-thumbs", El = "waterfall-thumbs-slide-thumb-active-class", Sl = "waterfall-thumbs-thumbs-container-class", yl = "waterfall-add-slide", gt = "waterfall-add-index", bl = "waterfall-append-slide", Al = "waterfall-prepend-slide", _l = "waterfall-remove-slide", Tt = "waterfall-remove-index", xl = "waterfall-zoom-container-class", Cl = "waterfall-zoom-limit-to-original-size", Ll = "waterfall-zoom-max-ratio", Ml = "waterfall-zoom-min-ratio", Il = "waterfall-zoom-pan-on-mouse-move", Pl = "waterfall-zoom-toggle", Rl = "waterfall-zoom-zoomed-slide-class", Ol = "waterfall-parallax-enabled", wl = "data-swiper-parallax", Dl = "data-swiper-parallax-x", Nl = "data-swiper-parallax-y", zl = "data-swiper-parallax-scale", kl = "data-swiper-parallax-opacity", $l = "data-swiper-parallax-rotate", Mo = "data-swiper-parallax-duration", Gl = "waterfall-callback-slide-change", re = "waterfall-el", Bl = "pagination", Hl = "pagination-bullet", Fl = "navigation-next", Vl = "navigation-prev", Wl = "scrollbar", Yl = "scrollbar-drag", Xl = "slide-count", Ul = "autoplay-control", ql = "autoplay-control-pause", jl = "autoplay-control-play";
function Kl(e, t, s) {
  e.allowSlideNext = D(t, _n, !0), e.allowSlidePrev = D(t, xn, !0), e.navigation = {
    disabledClass: H(t, Sr, "swiper-button-disabled"),
    enabled: D(t, yr),
    hiddenClass: H(t, br, "swiper-button-hidden"),
    hideOnClick: D(t, Ar, !1),
    lockClass: H(t, _r, "swiper-button-lock"),
    navigationDisabledClass: H(t, xr, "swiper-navigation-disabled"),
    nextEl: `[${ce}='${s}'] [${re}=${Fl}]`,
    prevEl: `[${ce}='${s}'] [${re}=${Vl}]`
  };
}
const Zl = [
  { key: "slidesPerView", attr: Dt, parse: It, swiperDefault: 1 },
  { key: "slidesPerGroup", attr: wt, parse: Y, swiperDefault: 1 },
  { key: "spaceBetween", attr: Nt, parse: Y, swiperDefault: 0 },
  { key: "centeredSlides", attr: Ot, parse: D, swiperDefault: !1 }
], Ql = [
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
function Jl(e, t) {
  e.breakpointsBase = H(t, Mn, "window");
  const s = {};
  Zl.forEach(({ key: a, attr: n, parse: i, swiperDefault: u }) => {
    const d = {};
    if (sn.forEach((p) => {
      const c = i(t, an(n, p));
      c !== void 0 && (d[p] = c);
    }), Object.keys(d).length === 0) return;
    const l = i(t, n) ?? u;
    Ql.forEach(({ minWidth: p, cascade: c }) => {
      const f = c.find((T) => d[T] !== void 0);
      s[p] = { ...s[p], [a]: f ? d[f] : l };
    });
  }), e.breakpoints = s;
}
function eo(e, t) {
  const s = t.querySelector(`[${re}=${Bl}]`);
  if (!s) return;
  const a = H(t, Cr), n = t.querySelector(`[${re}=${Hl}]`);
  e.pagination = {
    bulletActiveClass: H(t, Mr, "swiper-pagination-bullet-active"),
    bulletClass: H(t, Lr) ?? Mt(n),
    bulletElement: n?.tagName?.toLowerCase() || "span",
    clickable: D(t, Ir, !1),
    clickableClass: H(t, Pr, "swiper-pagination-clickable"),
    currentClass: H(t, Rr, "swiper-pagination-current"),
    dynamicBullets: D(t, Or, !1),
    dynamicMainBullets: Y(t, wr, 1),
    el: s || null,
    enabled: D(t, Dr),
    hiddenClass: H(t, Nr, "swiper-pagination-hidden"),
    hideOnClick: D(t, zr, !0),
    horizontalClass: H(t, kr, "swiper-pagination-horizontal"),
    lockClass: H(t, $r, "swiper-pagination-lock"),
    modifierClass: H(t, Gr, "swiper-pagination-"),
    paginationDisabledClass: H(
      t,
      Br,
      "swiper-pagination-disabled"
    ),
    progressbarFillClass: H(
      t,
      Hr,
      "swiper-pagination-progressbar-fill"
    ),
    progressbarOpposite: D(t, Fr, !1),
    progressbarOppositeClass: H(
      t,
      Vr,
      "swiper-pagination-progressbar-opposite"
    ),
    renderBullet: i(),
    totalClass: H(t, Wr, "swiper-pagination-total"),
    type: u(),
    verticalClass: H(t, Yr, "swiper-pagination-vertical")
  };
  function i() {
    if (a === "numberBullets")
      return (d, l) => `<span class="${l}">${d + 1}</span>`;
    if (a === "bullets")
      return (d, l) => `<span class="${l}"></span>`;
  }
  function u() {
    return a === "numberBullets" || a === "bullets" ? "bullets" : a === "fraction" ? "fraction" : a === "progressbar" ? "progressbar" : a === "custom" ? "custom" : "bullets";
  }
}
function to(e, t) {
  const s = t.querySelector(`[${re}=${Wl}]`);
  if (!s) return;
  const a = s.querySelector(`[${re}=${Yl}]`), n = H(t, ll);
  n && a?.remove(), e.scrollbar = {
    dragClass: n ?? Mt(a),
    dragSize: be(t, ol, "auto"),
    draggable: D(t, dl, !1),
    el: s || null,
    enabled: D(t, cl),
    hide: D(t, fl, !0),
    horizontalClass: H(t, ul, "swiper-scrollbar-horizontal"),
    lockClass: H(t, pl, "swiper-scrollbar-lock"),
    scrollbarDisabledClass: H(t, ml, "swiper-scrollbar-disabled"),
    snapOnRelease: D(t, gl, !0),
    // NOTE doc says false but actually true
    verticalClass: H(t, hl, "swiper-scrollbar-vertical")
  };
}
function so(e, t) {
  const s = D(t, mt, !1), a = D(t, ht, !1);
  s && a && console.warn(
    `[PLAYBACK] "${mt}" and "${ht}" cannot both be true. Using loop and ignoring rewind.`,
    t
  ), e.loop = s, e.rewind = s ? void 0 : a, e.loopAddBlankSlides = D(t, Zn, !0), e.loopAdditionalSlides = Y(t, Qn, 0), e.loopPreventsSliding = D(t, Jn, !0);
  const n = D(t, zt, !1), i = D(t, kt, !1);
  let u = Y(t, Xr, void 0);
  if (i && (u = 0), n) {
    ao();
    const d = D(t, $t, !1);
    e.autoplay = {
      // Explicit, so that a slider with no other autoplay attributes still reaches Swiper with
      // autoplay on: removeNullOrUndefinedKeys drops an object whose every key parsed to undefined.
      enabled: !0,
      delay: u,
      disableOnInteraction: D(t, Ur, !1),
      // documentation says default is true, doesn't appear to be correct
      reverseDirection: D(t, qr, !1),
      // Swiper's own hover pause does nothing while a transition is running, which is all of the
      // time at delay 0. initSmoothAutoplayHover takes that case over.
      pauseOnMouseEnter: u === 0 ? !1 : d,
      stopOnLastSlide: D(t, jr, !1),
      waitForTransition: D(t, Kr, !0)
    };
  }
  e.speed = Y(t, Di, 300), e.oneWayMovement = D(t, di, !1);
}
function ao() {
  document.querySelectorAll(`[${kt}='true'] .swiper-wrapper`).forEach((e) => {
    e.style.transitionTimingFunction = "linear";
  });
}
function no(e, t) {
  const s = H(t, kn, "slide");
  e.effect = s, s === "fade" ? e.fadeEffect = { mode: be(t, ln, "default") } : s === "coverflow" ? e.coverflowEffect = {
    depth: Y(t, on, 100),
    modifier: Y(t, dn, 1),
    rotate: Y(t, cn, 50),
    scale: Y(t, fn, 1),
    slideShadows: D(t, un, !0),
    stretch: Y(t, pn, 0)
  } : s === "flip" ? e.flipEffect = {
    limitRotation: D(t, mn, !0),
    slideShadows: D(t, hn, !0)
  } : s === "cube" ? e.cubeEffect = {
    shadow: D(t, gn, !0),
    shadowOffset: Y(t, Tn, 20),
    shadowScale: Y(t, vn, 0.94),
    slideShadows: D(t, En, !0)
  } : s === "cards" && (e.cardsEffect = {
    perSlideOffset: Y(t, Sn, 8),
    perSlideRotate: Y(t, yn, 2),
    rotate: D(t, bn, !0),
    slideShadows: D(t, An, !0)
  });
}
function io(e, t) {
  e.autoHeight = D(t, Ln, !1), e.centerInsufficientSlides = D(t, In, !1), e.centeredSlides = D(t, Ot, !1), e.centeredSlidesBounds = D(t, Pn, !1), e.direction = be(t, Dn, "horizontal"), e.grid = {
    fill: be(t, Er, "column"),
    rows: Y(t, vr, 1)
  }, e.height = Y(t, Vn), e.slidesOffsetAfter = Y(t, Pi, 0), e.slidesOffsetBefore = Y(t, Ri, 0), e.slidesPerGroup = Y(t, wt, 1), e.slidesPerGroupAuto = D(t, Oi, !1), e.slidesPerGroupSkip = Y(t, wi, 0), e.slidesPerView = It(t, Dt, 1), e.spaceBetween = Y(t, Nt, 0), e.width = Y(t, Qi);
}
function ro(e, t) {
  e.containerModifierClass = H(t, Rn, "swiper-"), e.initialSlide = Y(t, Yn, 0), e.nested = D(t, ti, !1), e.normalizeSlideIndex = D(t, ii, !0), e.slideActiveClass = H(t, bi, "swiper-slide-active"), e.slideBlankClass = H(t, _i, "swiper-slide-blank"), e.slideClass = H(t, Ai, "swiper-slide"), e.slideFullyVisibleClass = H(t, xi, "swiper-slide-fully-visible"), e.slideNextClass = H(t, Ci, "swiper-slide-next"), e.slidePrevClass = H(t, Li, "swiper-slide-prev"), e.slideVisibleClass = H(t, Ii, "swiper-slide-visible"), e.swipeHandler = H(t, Ni), e.swiperElementNodeName = H(t, zi, "SWIPER-CONTAINER"), e.wrapperClass = H(t, Ji, "swiper-wrapper");
}
function lo() {
  document.querySelectorAll(".swiper-wrapper").forEach((e) => {
    e.querySelectorAll(".swiper-slide").forEach((t, s) => {
      const a = t.querySelector(`[${re}=${Xl}]`);
      a && (a.textContent = (s + 1).toString());
    });
  });
}
function oo(e, t, s, a) {
  const n = H(t, tt, "");
  if (!n || n === "")
    return;
  const i = Rt(s, n);
  if (!i) {
    a && console.warn("A matching thumbs waterfall was not found for ", n);
    return;
  }
  return e.thumbs = {
    autoScrollOffset: Y(t, Tl, 0),
    multipleActiveThumbs: D(t, vl, !1),
    slideThumbActiveClass: H(t, El, "swiper-slide-thumb-active"),
    swiper: i.swiper,
    thumbsContainerClass: H(t, Sl, "swiper-thumbs")
  }, e;
}
function co(e, t) {
  e.keyboard = {
    enabled: D(t, rr, !1),
    onlyInViewport: D(t, lr, !0),
    pageUpDown: D(t, or, !0)
  };
}
function fo(e, t) {
  e.hashNavigation = {
    //getSlideIndex
    replaceState: D(t, er, !1),
    watchState: D(t, tr, !1)
  };
}
function uo(e, t) {
  e.history = {
    keepQuery: D(t, sr, !1),
    key: H(t, ar, "slides"),
    replaceState: D(t, nr, !1),
    root: H(t, ir, "")
  };
}
function po(e, t, s, a) {
  const n = H(t, et, "");
  if (!n) return;
  const i = $a(s, n, a);
  a && (i.length ? console.log(`Controller Swipers for selector "${n}":`, i) : console.error(`No controller swipers found for selector "${n}"`)), e.controller = {
    by: be(t, nn, "slide"),
    control: i,
    inverse: D(t, rn, !1)
  };
}
function mo(e, t) {
  e.a11y = {
    containerMessage: H(t, Ha),
    containerRole: H(t, Fa),
    containerRoleDescriptionMessage: H(t, Va),
    enabled: D(t, Wa, !0),
    firstSlideMessage: H(t, Ya, "This is the first slide"),
    id: H(t, Xa),
    itemRoleDescriptionMessage: H(t, Ua),
    lastSlideMessage: H(t, qa, "This is the last slide"),
    nextSlideMessage: H(t, ja, "Next slide"),
    notificationClass: H(t, Ka, "swiper-notification"),
    paginationBulletMessage: H(t, Za, "Go to slide {{index}}"),
    prevSlideMessage: H(t, Qa, "Previous slide"),
    scrollOnFocus: D(t, Ja, !0),
    slideLabelMessage: H(t, en, "{{index}} / {{slidesLength}}"),
    slideRole: H(t, tn, "group")
  };
}
function we(e, t) {
  if (!Array.isArray(window.waterfalls)) {
    console.error("window.waterfalls is not an array or not defined.");
    return;
  }
  const s = /* @__PURE__ */ new Set();
  document.querySelectorAll(`[${e}]`).forEach((a) => {
    const n = a.getAttribute(e);
    if (!n) return;
    const i = ka(window.waterfalls, n, a);
    if (!i) return;
    const u = i.swiper, d = a.cloneNode(!0);
    if (d.removeAttribute(e), t === "add" ? d.removeAttribute(gt) : t === "remove" && d.removeAttribute(Tt), d.classList.contains("swiper-slide") || d.classList.add("swiper-slide"), t === "append")
      u.appendSlide(d.outerHTML);
    else if (t === "prepend")
      u.prependSlide(d.outerHTML);
    else if (t === "add") {
      let p = Number(a.getAttribute(gt));
      p || (p = 1);
      const c = document.createElement("div");
      c.innerHTML = d.outerHTML;
      const f = c.children[0];
      f && u.addSlide(p, f);
    } else if (t === "remove") {
      const p = Number(a.getAttribute(Tt));
      p !== -1 ? u.removeSlide(p) : console.warn(`[MANIPULATION] Slide not found in Swiper for removal: ${n}`);
    }
    a.remove();
    const l = a.closest(".w-dyn-list");
    l && s.add(l), u.update();
  }), s.forEach((a) => a.remove());
}
function ho() {
  we(yl, "add"), we(bl, "append"), we(Al, "prepend"), we(_l, "remove");
}
function go(e, t) {
  e.zoom = {
    containerClass: H(t, xl, "swiper-zoom-container"),
    limitToOriginalSize: D(t, Cl, !1),
    maxRatio: Y(t, Ll, 3),
    minRatio: Y(t, Ml, 1),
    panOnMouseMove: D(t, Il, !1),
    toggle: D(t, Pl, !0),
    zoomedSlideClass: H(t, Rl, "swiper-slide-zoomed")
  };
}
function To(e, t) {
  e.allowTouchMove = D(t, Cn, !0), e.edgeSwipeDetection = D(t, Nn, !1), e.edgeSwipeThreshold = Y(t, zn, 20), e.focusableElements = H(
    t,
    Bn,
    "input, select, option, textarea, button, video, label"
  ), e.followFinger = D(t, Hn, !0), e.grabCursor = D(t, Fn, !1), e.longSwipes = D(t, qn, !0), e.longSwipesMs = Y(t, jn, 300), e.longSwipesRatio = Y(t, Kn, 0.5), e.noSwiping = D(t, si, !0), e.noSwipingClass = H(t, ai, "swiper-no-swiping"), e.noSwipingSelector = H(t, ni), e.preventClicks = D(t, fi, !0), e.preventClicksPropagation = D(t, ui, !0), e.preventInteractionOnTransition = D(t, pi, !1), e.resistance = D(t, mi, !0), e.resistanceRatio = Y(t, hi, 0.85), e.shortSwipes = D(t, Si, !0), e.simulateTouch = D(t, yi, !0), e.slideToClickedSlide = D(t, Mi, !1), e.threshold = Y(t, ki, 5), e.touchAngle = Y(t, $i, 45), e.touchEventsTarget = be(t, Gi, "wrapper"), e.touchMoveStopPropagation = D(t, Bi, !1), e.touchRatio = Y(t, Hi, 1), e.touchReleaseOnEdges = D(t, Fi, !1), e.touchStartForcePreventDefault = D(t, Vi, !1), e.touchStartPreventDefault = D(t, Wi, !0);
}
function vo(e, t) {
  e.mousewheel = {
    enabled: D(t, dr, !1),
    eventsTarget: H(t, cr, "container"),
    forceToAxis: D(t, fr, !1),
    invert: D(t, ur, !1),
    noMousewheelClass: H(t, pr, "swiper-no-mousewheel"),
    releaseOnEdges: D(t, mr, !1),
    sensitivity: Y(t, hr, 1),
    thresholdDelta: Y(t, gr),
    thresholdTime: Y(t, Tr)
  };
}
function Eo(e, t) {
  e.freeMode = {
    enabled: D(t, Jr, !1),
    minimumVelocity: Y(t, el, 0.02),
    momentum: D(t, tl, !0),
    momentumBounce: D(t, sl, !0),
    momentumBounceRatio: Y(t, al, 1),
    momentumRatio: Y(t, nl, 1),
    momentumVelocityRatio: Y(t, il, 1),
    sticky: D(t, rl, !1)
  };
}
function So(e, t) {
  e.lazyPreloadPrevNext = Y(t, Xn, 0), e.lazyPreloaderClass = H(t, Un, "swiper-lazy-preloader");
}
function yo(e, t) {
  e.createElements = D(t, On, !1), e.cssMode = D(t, wn, !1), e.enabled = D(t, $n, !0), e.eventsPrefix = H(t, Gn, "swiper"), e.init = D(t, Wn, !0), e.maxBackfaceHiddenSlides = Y(t, ei, 10), e.passiveListeners = D(t, ci, !0), e.roundLengths = D(t, Ti, !1), e.runCallbacksOnInit = D(t, vi, !0), e.setWrapperSize = D(t, Ei, !1), e.uniqueNavElements = D(t, Yi, !0), e.virtualTranslate = D(t, ji, !1), e.url = H(t, Ui), e.userAgent = H(t, qi);
}
function bo(e, t) {
  e.observeParents = D(t, ri, !1), e.observeSlideChildren = D(t, li, !1), e.observer = D(t, oi, !1), e.resizeObserver = D(t, gi, !0), e.updateOnWindowResize = D(t, Xi, !0), e.watchOverflow = D(t, Ki, !0), e.watchSlidesProgress = D(t, Zi, !1);
}
const Ao = [
  wl,
  Dl,
  Nl,
  zl,
  kl,
  $l
].map((e) => `[${e}]`).join(", ");
function _o(e, t) {
  const a = D(t, Ol) ?? t.querySelector(Ao) !== null;
  e.parallax = { enabled: a };
}
function xo(e, t) {
  const s = H(t, Gl, void 0);
  if (s) {
    let a = 0;
    e.on = {
      ...e.on,
      slideChange: (n) => {
        const i = n.activeIndex, u = n.slides[i], d = n.slides[a], l = window[s];
        typeof l == "function" ? l({
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
function Co(e, t, s) {
  const a = D(e, Zr, !0) !== !1, n = D(e, zt, !1);
  if (!a || !n) return;
  const i = `[${ce}='${t}'] [${re}='${Ul}']`, u = `[${ce}='${t}'] [${re}='${ql}']`, d = `[${ce}='${t}'] [${re}='${jl}']`, l = document.querySelector(i), p = document.querySelector(u), c = document.querySelector(d);
  if (!l || !p || !c) return;
  const f = H(e, Qr, "playing");
  function T(o) {
    o ? (p.style.setProperty("display", "block", "important"), p.style.setProperty("visibility", "visible", "important"), c.style.setProperty("display", "none", "important"), c.style.setProperty("visibility", "hidden", "important")) : (c.style.setProperty("display", "block", "important"), c.style.setProperty("visibility", "visible", "important"), p.style.setProperty("display", "none", "important"), p.style.setProperty("visibility", "hidden", "important"));
  }
  s.autoplay && (f === "paused" ? (s.autoplay.stop(), T(!1)) : (s.autoplay.start(), T(!0))), l.addEventListener("click", () => {
    s.autoplay && (s.autoplay.running ? (s.autoplay.stop(), T(!1)) : (s.autoplay.start(), T(!0)));
  });
}
function Lo(e, t) {
  const s = D(e, $t, !1), a = t.params.autoplay;
  if (s !== !0 || !t.autoplay || typeof a != "object" || !a.enabled || a.delay !== 0) return;
  let n = "idle", i = 0, u = 0, d = 0, l = !1, p;
  const c = () => parseFloat(getComputedStyle(t.wrapperEl).transitionDuration) * 1e3 || 0;
  t.on("transitionStart", () => {
    i = performance.now(), u = c();
  }), t.on("autoplayStop", () => {
    l || (n = "idle");
  });
  function f() {
    clearTimeout(p), t.off("transitionEnd", f), !(n !== "resuming" || t.destroyed) && (n = "idle", t.autoplay.running || t.autoplay.start());
  }
  function T(S) {
    t.once("transitionEnd", f), p = setTimeout(f, S + 100);
  }
  function o() {
    if (t.destroyed || n === "frozen" || n === "idle" && !t.autoplay.running) return;
    clearTimeout(p), t.off("transitionEnd", f), n = "frozen", d = t.animating ? Math.max(0, u - (performance.now() - i)) : 0;
    const S = t.getTranslate();
    l = !0, t.autoplay.stop(), l = !1, t.setTransition(0), t.setTranslate(S), t.animating = !1;
  }
  function r() {
    if (!(t.destroyed || n !== "frozen")) {
      if (n = "resuming", t.animating) {
        T(c());
        return;
      }
      if (d > 0 && t.slideTo(t.activeIndex, d, !1) && t.animating) {
        T(d);
        return;
      }
      f();
    }
  }
  const h = (S) => {
    S.pointerType === "mouse" && o();
  }, E = (S) => {
    S.pointerType === "mouse" && r();
  };
  t.el.addEventListener("pointerenter", h), t.el.addEventListener("pointerleave", E), t.on("destroy", () => {
    clearTimeout(p), t.el?.removeEventListener("pointerenter", h), t.el?.removeEventListener("pointerleave", E);
  });
}
console.log(
  "🚿 Hello from Wellspring Waterfall (v1.5.3). To learn more, visit https://heywellspring.com/apps/waterfall"
);
const De = [];
window.waterfalls = De;
function vt(e, t) {
  let s = t;
  return document.querySelectorAll(e).forEach((a) => {
    Gt(a, s++);
  }), s;
}
let _e = 0;
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(`[${ce}]`).forEach((e) => {
    e.hasAttribute(tt) || e.hasAttribute(et) || Gt(e, _e++);
  }), _e = vt(`[${ce}][${tt}]`, _e), _e = vt(`[${ce}][${et}]`, _e), lo(), Ga();
});
function Gt(e, t) {
  {
    const s = H(e, ce, `Swiper ${t}`);
    if (!s) return;
    const a = !!D(e, Ba, !1);
    a && console.warn(`Initializing Waterfall: ${s}`);
    const n = {};
    ro(n, e), Jl(n, e), so(n, e), Kl(n, e, s), eo(n, e), to(n, e), no(n, e), Eo(n, e), io(n, e), oo(n, e, De, a), co(n, e), vo(n, e), To(n, e), fo(n, e), uo(n, e), po(n, e, De, a), mo(n, e), So(n, e), bo(n, e), go(n, e), _o(n, e), xo(n, e), yo(n, e), ho(), a && console.warn(n);
    const i = Pt(n), u = e.querySelector(".swiper");
    a && console.log("SWIPER: ", u);
    const d = u?.querySelectorAll(".swiper-slide") || [];
    if (a && console.log("SWIPER SLIDES: ", d), d.length === 0) {
      console.warn(`Skipping "${s}": no .swiper-slide elements found.`);
      return;
    }
    const l = new te(u, i);
    De.push({ name: s, swiper: l }), Co(e, s, l), Lo(e, l);
  }
}
export {
  Ha as ATTR_A11Y_CONTAINER_MESSAGE,
  Fa as ATTR_A11Y_CONTAINER_ROLE,
  Va as ATTR_A11Y_CONTAINER_ROLE_DESCRIPTION_MESSAGE,
  Wa as ATTR_A11Y_ENABLED,
  Ya as ATTR_A11Y_FIRST_SLIDE_MESSAGE,
  Xa as ATTR_A11Y_ID,
  Ua as ATTR_A11Y_ITEM_ROLE_DESCRIPTION_MESSAGE,
  qa as ATTR_A11Y_LAST_SLIDE_MESSAGE,
  ja as ATTR_A11Y_NEXT_SLIDE_MESSAGE,
  Ka as ATTR_A11Y_NOTIFICATION_CLASS,
  Za as ATTR_A11Y_PAGINATION_BULLET_MESSAGE,
  Qa as ATTR_A11Y_PREV_SLIDE_MESSAGE,
  Ja as ATTR_A11Y_SCROLL_ON_FOCUS,
  en as ATTR_A11Y_SLIDE_LABEL_MESSAGE,
  tn as ATTR_A11Y_SLIDE_ROLE,
  _n as ATTR_ALLOW_SLIDE_NEXT,
  xn as ATTR_ALLOW_SLIDE_PREV,
  Cn as ATTR_ALLOW_TOUCH_MOVE,
  zt as ATTR_AUTOPLAY,
  Qr as ATTR_AUTOPLAY_CONTROL_DEFAULT_STATE,
  Zr as ATTR_AUTOPLAY_CONTROL_ENABLED,
  Xr as ATTR_AUTOPLAY_DELAY,
  Ur as ATTR_AUTOPLAY_DISABLE_ON_INTERACTION,
  $t as ATTR_AUTOPLAY_PAUSE_ON_MOUSE_ENTER,
  qr as ATTR_AUTOPLAY_REVERSE_DIRECTION,
  jr as ATTR_AUTOPLAY_STOP_ON_LAST_SLIDE,
  Kr as ATTR_AUTOPLAY_WAIT_FOR_TRANSITION,
  Ln as ATTR_AUTO_HEIGHT,
  Mn as ATTR_BREAKPOINTS_BASE,
  Gl as ATTR_CALLBACK_SLIDE_CHANGE,
  Sn as ATTR_CARDS_EFFECT_PER_SLIDE_OFFSET,
  yn as ATTR_CARDS_EFFECT_PER_SLIDE_ROTATE,
  bn as ATTR_CARDS_EFFECT_ROTATE,
  An as ATTR_CARDS_EFFECT_SLIDE_SHADOWS,
  Ot as ATTR_CENTERED_SLIDES,
  Pn as ATTR_CENTERED_SLIDES_BOUNDS,
  In as ATTR_CENTER_INSUFFICIENT_SLIDES,
  Rn as ATTR_CONTAINER_MODIFIER_CLASS,
  nn as ATTR_CONTROLLER_BY,
  et as ATTR_CONTROLLER_CONTROL,
  rn as ATTR_CONTROLLER_INVERSE,
  on as ATTR_COVERFLOW_EFFECT_DEPTH,
  dn as ATTR_COVERFLOW_EFFECT_MODIFIER,
  cn as ATTR_COVERFLOW_EFFECT_ROTATE,
  fn as ATTR_COVERFLOW_EFFECT_SCALE,
  un as ATTR_COVERFLOW_EFFECT_SLIDE_SHADOWS,
  pn as ATTR_COVERFLOW_EFFECT_STRETCH,
  On as ATTR_CREATE_ELEMENTS,
  wn as ATTR_CSS_MODE,
  gn as ATTR_CUBE_EFFECT_SHADOW,
  Tn as ATTR_CUBE_EFFECT_SHADOW_OFFSET,
  vn as ATTR_CUBE_EFFECT_SHADOW_SCALE,
  En as ATTR_CUBE_EFFECT_SLIDE_SHADOWS,
  Ba as ATTR_DEBUG_MODE,
  Dn as ATTR_DIRECTION,
  Nn as ATTR_EDGE_SWIPE_DETECTION,
  zn as ATTR_EDGE_SWIPE_THRESHOLD,
  kn as ATTR_EFFECT,
  $n as ATTR_ENABLED,
  Gn as ATTR_EVENTS_PREFIX,
  ln as ATTR_FADE_EFFECT_MODE,
  mn as ATTR_FLIP_EFFECT_LIMIT_ROTATION,
  hn as ATTR_FLIP_EFFECT_SLIDE_SHADOWS,
  Bn as ATTR_FOCUSABLE_ELEMENTS,
  Hn as ATTR_FOLLOW_FINGER,
  Jr as ATTR_FREE_MODE_ENABLED,
  el as ATTR_FREE_MODE_MINIMUM_VELOCITY,
  tl as ATTR_FREE_MODE_MOMENTUM,
  sl as ATTR_FREE_MODE_MOMENTUM_BOUNCE,
  al as ATTR_FREE_MODE_MOMENTUM_BOUNCE_RATIO,
  nl as ATTR_FREE_MODE_MOMENTUM_RATIO,
  il as ATTR_FREE_MODE_MOMENTUM_VELOCITY_RATIO,
  rl as ATTR_FREE_MODE_STICKY,
  Fn as ATTR_GRAB_CURSOR,
  Er as ATTR_GRID_FILL,
  vr as ATTR_GRID_ROWS,
  er as ATTR_HASH_NAVIGATION_REPLACE_STATE,
  tr as ATTR_HASH_NAVIGATION_WATCH_STATE,
  Vn as ATTR_HEIGHT,
  sr as ATTR_HISTORY_KEEP_QUERY,
  ar as ATTR_HISTORY_KEY,
  nr as ATTR_HISTORY_REPLACE_STATE,
  ir as ATTR_HISTORY_ROOT,
  Wn as ATTR_INIT,
  Yn as ATTR_INITIAL_SLIDE,
  rr as ATTR_KEYBOARD_ENABLED,
  lr as ATTR_KEYBOARD_ONLY_IN_VIEWPORT,
  or as ATTR_KEYBOARD_PAGE_UP_DOWN,
  Un as ATTR_LAZY_PRELOADER_CLASS,
  Xn as ATTR_LAZY_PRELOAD_PREV_NEXT,
  qn as ATTR_LONG_SWIPES,
  jn as ATTR_LONG_SWIPES_MS,
  Kn as ATTR_LONG_SWIPES_RATIO,
  mt as ATTR_LOOP,
  Qn as ATTR_LOOP_ADD_ADDITIONAL_SLIDES,
  Zn as ATTR_LOOP_ADD_BLANK_SLIDES,
  Jn as ATTR_LOOP_PREVENTS_SLIDING,
  gt as ATTR_MANIPULATION_ADD_INDEX,
  yl as ATTR_MANIPULATION_ADD_SLIDE,
  bl as ATTR_MANIPULATION_APPEND_SLIDE,
  Al as ATTR_MANIPULATION_PREPEND_SLIDE,
  Tt as ATTR_MANIPULATION_REMOVE_INDEX,
  _l as ATTR_MANIPULATION_REMOVE_SLIDE,
  ei as ATTR_MAX_BACKFACE_HIDDEN_SLIDES,
  dr as ATTR_MOUSEWHEEL_ENABLED,
  cr as ATTR_MOUSEWHEEL_EVENTS_TARGET,
  fr as ATTR_MOUSEWHEEL_FORCE_TO_AXIS,
  ur as ATTR_MOUSEWHEEL_INVERT,
  pr as ATTR_MOUSEWHEEL_NO_MOUSEWHEEL_CLASS,
  mr as ATTR_MOUSEWHEEL_RELEASE_ON_EDGES,
  hr as ATTR_MOUSEWHEEL_SENSITIVITY,
  gr as ATTR_MOUSEWHEEL_THRESHOLD_DELTA,
  Tr as ATTR_MOUSEWHEEL_THRESHOLD_TIME,
  Sr as ATTR_NAVIGATION_DISABLED_CLASS,
  yr as ATTR_NAVIGATION_ENABLED,
  br as ATTR_NAVIGATION_HIDDEN_CLASS,
  Ar as ATTR_NAVIGATION_HIDE_ON_CLICK,
  _r as ATTR_NAVIGATION_LOCK_CLASS,
  xr as ATTR_NAVIGATION_NAVIGATION_DISABLED_CLASS,
  ti as ATTR_NESTED,
  ii as ATTR_NORMALIZE_SLIDE_INDEX,
  si as ATTR_NO_SWIPING,
  ai as ATTR_NO_SWIPING_CLASS,
  ni as ATTR_NO_SWIPING_SELECTOR,
  oi as ATTR_OBSERVER,
  li as ATTR_OBSERVE_SLIDE_CHILDREN,
  ri as ATTR_OBSERVE_SLIDE_PARENTS,
  di as ATTR_ONE_WAY_MOVEMENT,
  Mr as ATTR_PAGINATION_BULLET_ACTIVE_CLASS,
  Lr as ATTR_PAGINATION_BULLET_CLASS,
  Ir as ATTR_PAGINATION_CLICKABLE,
  Pr as ATTR_PAGINATION_CLICKABLE_CLASS,
  Rr as ATTR_PAGINATION_CURRENT_CLASS,
  Or as ATTR_PAGINATION_DYNAMIC_BULLETS,
  wr as ATTR_PAGINATION_DYNAMIC_MAIN_BULLETS,
  Dr as ATTR_PAGINATION_ENABLED,
  Nr as ATTR_PAGINATION_HIDDEN_CLASS,
  zr as ATTR_PAGINATION_HIDE_ON_CLICK,
  kr as ATTR_PAGINATION_HORIZONTAL_CLASS,
  $r as ATTR_PAGINATION_LOCK_CLASS,
  Gr as ATTR_PAGINATION_MODIFIER_CLASS,
  Br as ATTR_PAGINATION_PAGINATION_DISABLED_CLASS,
  Hr as ATTR_PAGINATION_PROGRESSBAR_FILL_CLASS,
  Fr as ATTR_PAGINATION_PROGRESSBAR_OPPOSITE,
  Vr as ATTR_PAGINATION_PROGRESSBAR_OPPOSITE_CLASS,
  Wr as ATTR_PAGINATION_TOTAL_CLASS,
  Cr as ATTR_PAGINATION_TYPE,
  Yr as ATTR_PAGINATION_VERTICAL_CLASS,
  wl as ATTR_PARALLAX,
  Mo as ATTR_PARALLAX_DURATION,
  Ol as ATTR_PARALLAX_ENABLED,
  kl as ATTR_PARALLAX_OPACITY,
  $l as ATTR_PARALLAX_ROTATE,
  zl as ATTR_PARALLAX_SCALE,
  Dl as ATTR_PARALLAX_X,
  Nl as ATTR_PARALLAX_Y,
  ci as ATTR_PASSIVE_LISTENERS,
  fi as ATTR_PREVENT_CLICKS,
  ui as ATTR_PREVENT_CLICKS_PROPAGATION,
  pi as ATTR_PREVENT_INTERACTION_ON_TRANSITION,
  mi as ATTR_RESISTANCE,
  hi as ATTR_RESISTANCE_RATIO,
  gi as ATTR_RESIZE_OBSERVER,
  ht as ATTR_REWIND,
  Ti as ATTR_ROUND_LENGTHS,
  vi as ATTR_RUN_CALLBACKS_ON_INIT,
  dl as ATTR_SCROLLBAR_DRAGGABLE,
  ll as ATTR_SCROLLBAR_DRAG_CLASS,
  ol as ATTR_SCROLLBAR_DRAG_SIZE,
  cl as ATTR_SCROLLBAR_ENABLED,
  fl as ATTR_SCROLLBAR_HIDE,
  ul as ATTR_SCROLLBAR_HORIZONTAL_CLASS,
  pl as ATTR_SCROLLBAR_LOCK_CLASS,
  ml as ATTR_SCROLLBAR_SCROLLBAR_DISABLED_CLASS,
  gl as ATTR_SCROLLBAR_SNAP_ON_RELEASE,
  hl as ATTR_SCROLLBAR_VERTICAL_CLASS,
  Ei as ATTR_SET_WRAPPER_SIZE,
  Si as ATTR_SHORT_SWIPES,
  yi as ATTR_SIMULATE_TOUCH,
  Pi as ATTR_SLIDES_OFFSET_AFTER,
  Ri as ATTR_SLIDES_OFFSET_BEFORE,
  wt as ATTR_SLIDES_PER_GROUP,
  Oi as ATTR_SLIDES_PER_GROUP_AUTO,
  wi as ATTR_SLIDES_PER_GROUP_SKIP,
  Dt as ATTR_SLIDES_PER_VIEW,
  bi as ATTR_SLIDE_ACTIVE_CLASS,
  _i as ATTR_SLIDE_BLANK_CLASS,
  Ai as ATTR_SLIDE_CLASS,
  xi as ATTR_SLIDE_FULLY_VISIBLE_CLASS,
  Ci as ATTR_SLIDE_NEXT_CLASS,
  Li as ATTR_SLIDE_PREV_CLASS,
  Mi as ATTR_SLIDE_TO_CLICKED_SLIDE,
  Ii as ATTR_SLIDE_VISIBLE_CLASS,
  kt as ATTR_SMOOTH_AUTOPLAY,
  Nt as ATTR_SPACE_BETWEEN,
  Di as ATTR_SPEED,
  zi as ATTR_SWIPER_ELEMENT_NODE_NAME,
  Ni as ATTR_SWIPE_HANDLER,
  ki as ATTR_THRESHOLD,
  Tl as ATTR_THUMBS_AUTO_SCROLL_OFFSET,
  vl as ATTR_THUMBS_MULTIPLE_ACTIVE_THUMBS,
  El as ATTR_THUMBS_SLIDE_THUMB_ACTIVE_CLASS,
  tt as ATTR_THUMBS_SWIPER,
  Sl as ATTR_THUMBS_THUMBS_CONTAINER_CLASS,
  $i as ATTR_TOUCH_ANGLE,
  Gi as ATTR_TOUCH_EVENTS_TARGET,
  Bi as ATTR_TOUCH_MOVE_STOP_PROPAGATION,
  Hi as ATTR_TOUCH_RATIO,
  Fi as ATTR_TOUCH_RELEASE_ON_EDGES,
  Vi as ATTR_TOUCH_START_FORCE_PREVENT_DEFAULT,
  Wi as ATTR_TOUCH_START_PREVENT_DEFAULT,
  Yi as ATTR_UNIQUE_NAV_ELEMENTS,
  Xi as ATTR_UPDATE_ON_WINDOW_RESIZE,
  Ui as ATTR_URL,
  qi as ATTR_USER_AGENT,
  ji as ATTR_VIRTUAL_TRANSLATE,
  Ki as ATTR_WATCH_OVERFLOW,
  Zi as ATTR_WATCH_SLIDES_PROGRESS,
  ce as ATTR_WATERFALL,
  re as ATTR_WATERFALL_ELEMENT,
  Qi as ATTR_WIDTH,
  Ji as ATTR_WRAPPER_CLASS,
  xl as ATTR_ZOOM_CONTAINER_CLASS,
  Cl as ATTR_ZOOM_LIMIT_TO_ORIGINAL_SIZE,
  Ll as ATTR_ZOOM_MAX_RATIO,
  Ml as ATTR_ZOOM_MIN_RATIO,
  Il as ATTR_ZOOM_PAN_ON_MOUSE_MOVE,
  Pl as ATTR_ZOOM_TOGGLE,
  Rl as ATTR_ZOOM_ZOOMED_SLIDE_CLASS,
  sn as BREAKPOINTS,
  Ul as EL_AUTOPLAY_CONTROL,
  ql as EL_AUTOPLAY_CONTROL_PAUSE,
  jl as EL_AUTOPLAY_CONTROL_PLAY,
  Fl as EL_NAVIGATION_NEXT,
  Vl as EL_NAVIGATION_PREV,
  Bl as EL_PAGINATION,
  Hl as EL_PAGINATION_BULLET,
  Wl as EL_SCROLLBAR,
  Yl as EL_SCROLLBAR_DRAG,
  Xl as EL_SLIDE_COUNT,
  an as breakpointAttr
};
//# sourceMappingURL=well-waterfall.es.js.map
