(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode(':root{--swiper-theme-color: #007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function, initial);box-sizing:content-box}.swiper-android .swiper-slide,.swiper-ios .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-slide,.swiper-3d .swiper-cube-shadow{transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-slides-offset-before);scroll-margin-inline-start:var(--swiper-slides-offset-before)}.swiper-css-mode.swiper-horizontal>.swiper-wrapper>.swiper-slide:last-child{margin-inline-end:var(--swiper-slides-offset-after)}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-slides-offset-before);scroll-margin-block-start:var(--swiper-slides-offset-before)}.swiper-css-mode.swiper-vertical>.swiper-wrapper>.swiper-slide:last-child{margin-block-end:var(--swiper-slides-offset-after)}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-slide-shadow-bottom{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:#00000026}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,#00000080,#0000)}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color, var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}:is(.swiper:not(.swiper-watch-progress),.swiper-watch-progress .swiper-slide-visible) .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color: #fff}.swiper-lazy-preloader-black{--swiper-preloader-color: #000}@keyframes swiper-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.swiper-virtual .swiper-slide{-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper:after{content:"";position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper:after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper:after{width:1px;height:var(--swiper-virtual-size)}:root{--swiper-navigation-size: 44px}.swiper-button-prev,.swiper-button-next{position:absolute;width:var(--swiper-navigation-size);height:var(--swiper-navigation-size);z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color, var(--swiper-theme-color))}:is(.swiper-button-prev,.swiper-button-next).swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}:is(.swiper-button-prev,.swiper-button-next).swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled :is(.swiper-button-prev,.swiper-button-next){display:none!important}:is(.swiper-button-prev,.swiper-button-next) ::slotted(svg),:is(.swiper-button-prev,.swiper-button-next) svg{width:100%;height:100%;object-fit:contain;transform-origin:center;fill:currentColor;pointer-events:none}.swiper-button-lock{display:none}.swiper-button-prev,.swiper-button-next{top:var(--swiper-navigation-top-offset, 50%);margin-top:calc(0px - (var(--swiper-navigation-size) / 2))}.swiper-button-prev{left:var(--swiper-navigation-sides-offset, 4px);right:auto}.swiper-button-prev ::slotted(.swiper-navigation-icon),.swiper-button-prev .swiper-navigation-icon{transform:rotate(180deg)}.swiper-button-next{right:var(--swiper-navigation-sides-offset, 4px);left:auto}.swiper-horizontal .swiper-button-prev,.swiper-horizontal .swiper-button-next,.swiper-horizontal~.swiper-button-prev,.swiper-horizontal~.swiper-button-next{top:var(--swiper-navigation-top-offset, 50%);margin-top:calc(0px - (var(--swiper-navigation-size) / 2));margin-left:0}.swiper-horizontal .swiper-button-prev,.swiper-horizontal~.swiper-button-prev,.swiper-horizontal.swiper-rtl .swiper-button-next,.swiper-horizontal.swiper-rtl~.swiper-button-next{left:var(--swiper-navigation-sides-offset, 4px);right:auto}.swiper-horizontal .swiper-button-next,.swiper-horizontal~.swiper-button-next,.swiper-horizontal.swiper-rtl .swiper-button-prev,.swiper-horizontal.swiper-rtl~.swiper-button-prev{right:var(--swiper-navigation-sides-offset, 4px);left:auto}:is(.swiper-horizontal .swiper-button-prev,.swiper-horizontal~.swiper-button-prev,.swiper-horizontal.swiper-rtl .swiper-button-next,.swiper-horizontal.swiper-rtl~.swiper-button-next) ::slotted(.swiper-navigation-icon),:is(.swiper-horizontal .swiper-button-prev,.swiper-horizontal~.swiper-button-prev,.swiper-horizontal.swiper-rtl .swiper-button-next,.swiper-horizontal.swiper-rtl~.swiper-button-next) .swiper-navigation-icon{transform:rotate(180deg)}:is(.swiper-horizontal.swiper-rtl .swiper-button-prev,.swiper-horizontal.swiper-rtl~.swiper-button-prev) ::slotted(.swiper-navigation-icon),:is(.swiper-horizontal.swiper-rtl .swiper-button-prev,.swiper-horizontal.swiper-rtl~.swiper-button-prev) .swiper-navigation-icon{transform:rotate(0)}.swiper-vertical .swiper-button-prev,.swiper-vertical .swiper-button-next,.swiper-vertical~.swiper-button-prev,.swiper-vertical~.swiper-button-next{left:var(--swiper-navigation-top-offset, 50%);right:auto;margin-left:calc(0px - (var(--swiper-navigation-size) / 2));margin-top:0}.swiper-vertical .swiper-button-prev,.swiper-vertical~.swiper-button-prev{top:var(--swiper-navigation-sides-offset, 4px);bottom:auto}:is(.swiper-vertical .swiper-button-prev,.swiper-vertical~.swiper-button-prev) ::slotted(.swiper-navigation-icon),:is(.swiper-vertical .swiper-button-prev,.swiper-vertical~.swiper-button-prev) .swiper-navigation-icon{transform:rotate(-90deg)}.swiper-vertical .swiper-button-next,.swiper-vertical~.swiper-button-next{bottom:var(--swiper-navigation-sides-offset, 4px);top:auto}:is(.swiper-vertical .swiper-button-next,.swiper-vertical~.swiper-button-next) ::slotted(.swiper-navigation-icon),:is(.swiper-vertical .swiper-button-next,.swiper-vertical~.swiper-button-next) .swiper-navigation-icon{transform:rotate(90deg)}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-pagination-fraction,.swiper-pagination-custom,.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal{bottom:var(--swiper-pagination-bottom, 8px);top:var(--swiper-pagination-top, auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));height:var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius, 50%);background:var(--swiper-pagination-bullet-inactive-color, #000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color, var(--swiper-theme-color))}.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets{right:var(--swiper-pagination-right, 8px);left:var(--swiper-pagination-left, auto);top:50%;transform:translate3d(0,-50%,0)}:is(.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets) .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap, 6px) 0;display:block}:is(.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets).swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}:is(.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets).swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}:is(.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-horizontal.swiper-pagination-bullets) .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap, 4px)}:is(.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-horizontal.swiper-pagination-bullets).swiper-pagination-bullets-dynamic{left:50%;transform:translate(-50%);white-space:nowrap}:is(.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-horizontal.swiper-pagination-bullets).swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color, inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, .25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color, var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size, 4px);left:0;top:0}.swiper-vertical>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite{width:var(--swiper-pagination-progressbar-size, 4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius, 10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color, rgba(0, 0, 0, .1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset, 1%);bottom:var(--swiper-scrollbar-bottom, 4px);top:var(--swiper-scrollbar-top, auto);z-index:50;height:var(--swiper-scrollbar-size, 4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%))}.swiper-vertical>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-vertical{position:absolute;left:var(--swiper-scrollbar-left, auto);right:var(--swiper-scrollbar-right, 4px);top:var(--swiper-scrollbar-sides-offset, 1%);z-index:50;width:var(--swiper-scrollbar-size, 4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color, rgba(0, 0, 0, .5));border-radius:var(--swiper-scrollbar-border-radius, 10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>img,.swiper-zoom-container>svg,.swiper-zoom-container>canvas{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move;touch-action:none}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-fade .swiper-slide-active,.swiper-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper.swiper-cube{overflow:visible}.swiper-cube .swiper-slide{pointer-events:none;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-cube.swiper-rtl .swiper-slide{transform-origin:100% 0}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-next,.swiper-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:"";background:#000;position:absolute;inset:0;filter:blur(50px)}.swiper-cube .swiper-slide-next+.swiper-slide{pointer-events:auto;visibility:visible}.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-top,.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-bottom,.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-left,.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-right{z-index:0;backface-visibility:hidden}.swiper.swiper-flip{overflow:visible}.swiper-flip .swiper-slide{pointer-events:none;backface-visibility:hidden;z-index:1}.swiper-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-flip .swiper-slide-active,.swiper-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-top,.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-bottom,.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-left,.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-right{z-index:0;backface-visibility:hidden}.swiper-creative .swiper-slide{backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper.swiper-cards{overflow:visible}.swiper-cards .swiper-slide{transform-origin:center bottom;backface-visibility:hidden;overflow:hidden}')),document.head.appendChild(i)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
function de(e = "") {
  return e.trim().split(" ").filter((t) => !!t.trim());
}
function Mt(e) {
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
function It(e) {
  return window.getComputedStyle(e, null);
}
function Ke(e, t = "x") {
  const s = It(e), a = s.transform || s.webkitTransform;
  if (!a || a === "none")
    return 0;
  const n = new DOMMatrixReadOnly(a);
  return t === "x" ? n.m41 : n.m42;
}
function _e(e) {
  return typeof e == "object" && e !== null && e.constructor === Object && Object.prototype.toString.call(e).slice(8, -1) === "Object";
}
function wt(e) {
  return typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : !!e && typeof e == "object" && (e.nodeType === 1 || e.nodeType === 11);
}
function se(e, ...t) {
  const s = Object(e);
  for (let a = 0; a < t.length; a += 1) {
    const n = t[a];
    if (n == null || wt(n))
      continue;
    const i = n, u = Object.keys(Object(i)).filter((o) => o !== "__proto__" && o !== "constructor" && o !== "prototype");
    for (const o of u) {
      const r = Object.getOwnPropertyDescriptor(i, o);
      if (!r || !r.enumerable)
        continue;
      const m = i[o];
      _e(s[o]) && _e(m) ? m.__swiper__ ? s[o] = m : se(s[o], m) : !_e(s[o]) && _e(m) ? (s[o] = {}, m.__swiper__ ? s[o] = m : se(s[o], m)) : s[o] = m;
    }
  }
  return s;
}
function fe(e, t, s) {
  e.style.setProperty(t, s);
}
function me(e) {
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
function Rt(e, t) {
  const s = [t];
  for (; s.length > 0; ) {
    const a = s.shift();
    if (e === a)
      return !0;
    s.push(...a.children, ...a.shadowRoot ? a.shadowRoot.children : [], ...a.assignedElements ? a.assignedElements() : []);
  }
  return !1;
}
function Pt(e, t) {
  let s = t.contains(e);
  return !s && t instanceof HTMLSlotElement && (s = [...t.assignedElements()].includes(e), s || (s = Rt(e, t))), s;
}
function Ne(e) {
  try {
    console.warn(e);
  } catch {
  }
}
function ne(e, t = []) {
  const s = document.createElement(e);
  return s.classList.add(...Array.isArray(t) ? t : de(t)), s;
}
function ze(e) {
  const t = e.getBoundingClientRect();
  return {
    top: t.top + window.scrollY - (e.clientTop || 0),
    left: t.left + window.scrollX - (e.clientLeft || 0)
  };
}
function Ot(e, t) {
  const s = [];
  let a = e.previousElementSibling;
  for (; a; )
    (!t || a.matches(t)) && s.push(a), a = a.previousElementSibling;
  return s;
}
function Dt(e, t) {
  const s = [];
  let a = e.nextElementSibling;
  for (; a; )
    (!t || a.matches(t)) && s.push(a), a = a.nextElementSibling;
  return s;
}
function ce(e, t) {
  return window.getComputedStyle(e, null).getPropertyValue(t);
}
function Le(e) {
  if (!(!e || !e.parentNode))
    return [...e.parentNode.children].indexOf(e);
}
function ue(e, t) {
  const s = [];
  let a = e.parentElement;
  for (; a; )
    (!t || a.matches(t)) && s.push(a), a = a.parentElement;
  return s;
}
function xe(e, t) {
  t && e.addEventListener("transitionend", function(a) {
    a.target === e && t.call(e, a);
  }, { once: !0 });
}
function Ze(e, t, s) {
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
function le(e, t = "") {
  const s = globalThis.trustedTypes;
  typeof s < "u" ? e.innerHTML = s.createPolicy("html", { createHTML: (a) => a }).createHTML(t) : e.innerHTML = t;
}
let Ye;
function Nt() {
  return typeof window > "u" ? { touch: !1 } : {
    touch: "ontouchstart" in window || navigator.maxTouchPoints > 0
  };
}
function gt() {
  return Ye || (Ye = Nt()), Ye;
}
let Fe;
function zt({ userAgent: e } = {}) {
  if (typeof window > "u")
    return { ios: !1, android: !1 };
  const t = gt(), s = navigator.platform, a = e || navigator.userAgent, n = { ios: !1, android: !1 }, i = /(Android);?[\s/]+([\d.]+)?/.test(a), u = /(iPhone\sOS|iOS|iPod)/.test(a), o = /iPad/.test(a), r = s === "MacIntel" && t.touch && navigator.maxTouchPoints > 1, m = o || r;
  return i && !(s === "Win32") && (n.os = "android", n.android = !0), (m || u) && (n.os = "ios", n.ios = !0), n;
}
function Tt(e = {}) {
  return Fe || (Fe = zt(e)), Fe;
}
let Xe;
function kt() {
  if (typeof window > "u")
    return { isSafari: !1, isWebView: !1, need3dFix: !1 };
  const e = Tt(), t = navigator.userAgent, s = t.toLowerCase(), a = s.includes("safari") && !s.includes("chrome") && !s.includes("android"), n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t), i = a || n && e.ios;
  return { isSafari: a, isWebView: n, need3dFix: i };
}
function Et() {
  return Xe || (Xe = kt()), Xe;
}
const Oe = (e, t) => {
  if (!e || e.destroyed || !e.params)
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
}, Qe = (e) => {
  if (!e || e.destroyed || !e.params)
    return;
  let t = e.params.lazyPreloadPrevNext;
  const s = e.slides.length;
  if (!s || !t || t < 0)
    return;
  t = Math.min(t, s);
  const a = e.params.slidesPerView === "auto" ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView), n = e.activeIndex;
  if (e.params.grid && (e.params.grid.rows ?? 1) > 1) {
    const u = n, o = [u - t];
    o.push(...Array.from({ length: t }).map((r, m) => u + a + m)), e.slides.forEach((r, m) => {
      r.column !== void 0 && o.includes(r.column) && Ue(e, m);
    });
    return;
  }
  const i = n + a - 1;
  if (e.params.rewind || e.params.loop)
    for (let u = n - t; u <= i + t; u += 1) {
      const o = (u % s + s) % s;
      (o < n || o > i) && Ue(e, o);
    }
  else
    for (let u = Math.max(n - t, 0); u <= Math.min(i + t, s - 1); u += 1)
      u !== n && (u > i || u < n) && Ue(e, u);
};
function $t(e, t = "window", s) {
  if (!e || t === "container" && !s)
    return;
  let a = !1;
  const n = t === "window" ? window.innerHeight : s.clientHeight, i = Object.keys(e).map((u) => {
    if (typeof u == "string" && u.indexOf("@") === 0) {
      const o = parseFloat(u.substr(1));
      return { value: n * o, point: u };
    }
    return { value: u, point: u };
  });
  i.sort((u, o) => parseInt(String(u.value), 10) - parseInt(String(o.value), 10));
  for (let u = 0; u < i.length; u += 1) {
    const { point: o, value: r } = i[u];
    t === "window" ? window.matchMedia(`(min-width: ${r}px)`).matches && (a = o) : r <= s.clientWidth && (a = o);
  }
  return a || "max";
}
const it = (e, t) => !!(e.grid && t.grid && t.grid.rows > 1);
function Gt() {
  const e = this, { realIndex: t, initialized: s, params: a, el: n } = e, i = a.breakpoints;
  if (!i || i && Object.keys(i).length === 0)
    return;
  const u = a.breakpointsBase === "window" || !a.breakpointsBase ? a.breakpointsBase : "container", o = ["window", "container"].includes(a.breakpointsBase) || !a.breakpointsBase ? e.el : document.querySelector(a.breakpointsBase), r = e.getBreakpoint(i, u, o);
  if (!r || e.currentBreakpoint === r)
    return;
  const m = i, c = (r in m ? m[r] : void 0) || e.originalParams, T = it(e, a), d = it(e, c), l = e.params.grabCursor, g = c.grabCursor, v = a.enabled;
  T && !d ? (n.classList.remove(`${a.containerModifierClass}grid`, `${a.containerModifierClass}grid-column`), e.emitContainerClasses()) : !T && d && (n.classList.add(`${a.containerModifierClass}grid`), (c.grid.fill && c.grid.fill === "column" || !c.grid.fill && a.grid.fill === "column") && n.classList.add(`${a.containerModifierClass}grid-column`), e.emitContainerClasses()), l && !g ? e.unsetGrabCursor() : !l && g && e.setGrabCursor();
  const S = (A, w) => A[w];
  ["navigation", "pagination", "scrollbar"].forEach((A) => {
    const w = S(c, A);
    if (typeof w > "u")
      return;
    const _ = S(a, A), P = typeof _ == "object" && _ !== null && _.enabled, b = typeof w == "object" && w !== null && w.enabled, M = e[A];
    P && !b && M?.disable?.(), !P && b && M?.enable?.();
  });
  const h = c.direction && c.direction !== a.direction, p = a.loop && (c.slidesPerView !== a.slidesPerView || h), E = a.loop;
  h && s && e.changeDirection(), se(e.params, c);
  const y = e.params.enabled, I = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev
  }), v && !y ? e.disable() : !v && y && e.enable(), e.currentBreakpoint = r, e.emit("_beforeBreakpoint", c), s && (p ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !E && I ? (e.loopCreate(t), e.updateSlides()) : E && !I && e.loopDestroy()), e.emit("breakpoint", c);
}
var Bt = { setBreakpoint: Gt, getBreakpoint: $t };
function Ht() {
  const e = this, { isLocked: t, params: s } = e, { slidesOffsetBefore: a } = s;
  if (a) {
    const n = e.slides.length - 1, i = e.slidesGrid[n] + e.slidesSizesGrid[n] + a * 2;
    e.isLocked = e.size > i;
  } else
    e.isLocked = e.snapGrid.length === 1;
  s.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked), s.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var Vt = { checkOverflow: Ht };
function Wt(e, t) {
  const s = [];
  return e.forEach((a) => {
    typeof a == "object" ? Object.keys(a).forEach((n) => {
      a[n] && s.push(t + n);
    }) : typeof a == "string" && s.push(t + a);
  }), s;
}
function Yt() {
  const e = this, { classNames: t, params: s, rtl: a, el: n, device: i } = e, u = Wt([
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
function Ft() {
  const e = this, { el: t, classNames: s } = e;
  !t || typeof t == "string" || (t.classList.remove(...s), e.emitContainerClasses());
}
var Xt = { addClasses: Yt, removeClasses: Ft };
const vt = {
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
  lazyPreloaderClass: "swiper-lazy-preloader",
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: !0,
  // Internals
  _emitClasses: !1
};
var Ut = {
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
      t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((o) => {
        o.apply(n, [u, ...a]);
      }), t.eventsListeners && t.eventsListeners[u] && t.eventsListeners[u].forEach((o) => {
        o.apply(n, a);
      });
    }), t;
  }
};
function qt(e) {
  const t = this;
  t.destroyed || t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
}
function jt() {
  const e = this;
  e.destroyed || e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
function Kt(e) {
  const t = this;
  t.destroyed || (Oe(t, e.target), !(t.params.cssMode || t.params.slidesPerView !== "auto" && !t.params.autoHeight) && t.update());
}
function Zt() {
  const e = this, { params: t, el: s } = e;
  if (s && s.offsetWidth === 0)
    return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: a, allowSlidePrev: n, snapGrid: i } = e, u = e.virtual && e.params.virtual?.enabled;
  e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
  const o = u && t.loop;
  if ((t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !o) {
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
function Qt() {
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
function Jt(e) {
  const t = this;
  if (t.destroyed)
    return;
  const s = t.touchEventsData;
  let a = e.originalEvent ?? e;
  if (a.type === "touchend" || a.type === "touchcancel") {
    const y = [...a.changedTouches].find((I) => I.identifier === s.touchId);
    if (!y || y.identifier !== s.touchId)
      return;
  } else if (s.touchId !== null || a.pointerId !== s.pointerId)
    return;
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(a.type) && !(["pointercancel", "contextmenu"].includes(a.type) && (t.browser.isSafari || t.browser.isWebView)))
    return;
  s.pointerId = null, s.touchId = null;
  const { params: i, touches: u, rtlTranslate: o, slidesGrid: r, enabled: m } = t;
  if (!m || !i.simulateTouch && a.pointerType === "mouse")
    return;
  if (s.allowTouchCallbacks && t.emit("touchEnd", a), s.allowTouchCallbacks = !1, !s.isTouched) {
    s.isMoved && i.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, s.startMoving = !1;
    return;
  }
  i.grabCursor && s.isMoved && s.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
  const f = ae(), c = f - s.touchStartTime;
  if (t.allowClick) {
    const E = a.path ?? (a.composedPath && a.composedPath());
    t.updateClickedSlide(E && E[0], E), t.emit("tap click", a), c < 300 && f - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", a);
  }
  if (s.lastClickTime = ae(), Se(() => {
    t.destroyed || (t.allowClick = !0);
  }), !s.isTouched || !s.isMoved || !t.swipeDirection || u.diff === 0 && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset) {
    s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
    return;
  }
  s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
  let T;
  if (i.followFinger ? T = o ? t.translate : -t.translate : T = -(s.currentTranslate ?? 0), i.cssMode)
    return;
  if (i.freeMode && i.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: T });
    return;
  }
  const d = T >= -t.maxTranslate() && !t.params.loop;
  let l = 0, g = t.slidesSizesGrid[0];
  for (let E = 0; E < r.length; E += E < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
    const y = E < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    typeof r[E + y] < "u" ? (d || T >= r[E] && T < r[E + y]) && (l = E, g = r[E + y] - r[E]) : (d || T >= r[E]) && (l = E, g = r[r.length - 1] - r[r.length - 2]);
  }
  let v = null, S = null;
  i.rewind && (t.isBeginning ? S = i.virtual?.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (v = 0));
  const h = (T - r[l]) / g, p = l < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
  if (c > i.longSwipesMs) {
    if (!i.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" && (h >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? v : l + p) : t.slideTo(l)), t.swipeDirection === "prev" && (h > 1 - i.longSwipesRatio ? t.slideTo(l + p) : S !== null && h < 0 && Math.abs(h) > i.longSwipesRatio ? t.slideTo(S) : t.slideTo(l));
  } else {
    if (!i.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation && (a.target === t.navigation.nextEl || a.target === t.navigation.prevEl) ? a.target === t.navigation.nextEl ? t.slideTo(l + p) : t.slideTo(l) : (t.swipeDirection === "next" && t.slideTo(v !== null ? v : l + p), t.swipeDirection === "prev" && t.slideTo(S !== null ? S : l));
  }
}
function es(e) {
  const t = this;
  if (t.destroyed)
    return;
  const s = t.touchEventsData, { params: a, touches: n, rtlTranslate: i, enabled: u } = t;
  if (!u || !a.simulateTouch && e.pointerType === "mouse")
    return;
  const o = e, r = o.originalEvent ?? o;
  if (r.type === "pointermove" && (s.touchId !== null || r.pointerId !== s.pointerId))
    return;
  let m;
  if (r.type === "touchmove") {
    const A = [...r.changedTouches].find((w) => w.identifier === s.touchId);
    if (!A || A.identifier !== s.touchId)
      return;
    m = A;
  } else
    m = r;
  if (!s.isTouched) {
    s.startMoving && s.isScrolling && t.emit("touchMoveOpposite", r);
    return;
  }
  const f = m.pageX, c = m.pageY;
  if (r.preventedByNestedSwiper) {
    n.startX = f, n.startY = c;
    return;
  }
  if (!t.allowTouchMove) {
    r.target.matches(s.focusableElements) || (t.allowClick = !1), s.isTouched && (Object.assign(n, {
      startX: f,
      startY: c,
      currentX: f,
      currentY: c
    }), s.touchStartTime = ae());
    return;
  }
  if (a.touchReleaseOnEdges && !a.loop)
    if (t.isVertical()) {
      if (c < n.startY && t.translate <= t.maxTranslate() || c > n.startY && t.translate >= t.minTranslate()) {
        s.isTouched = !1, s.isMoved = !1;
        return;
      }
    } else {
      if (i && (f > n.startX && -t.translate <= t.maxTranslate() || f < n.startX && -t.translate >= t.minTranslate()))
        return;
      if (!i && (f < n.startX && t.translate <= t.maxTranslate() || f > n.startX && t.translate >= t.minTranslate()))
        return;
    }
  if (document.activeElement && document.activeElement.matches(s.focusableElements) && document.activeElement !== r.target && r.pointerType !== "mouse" && document.activeElement.blur(), document.activeElement && r.target === document.activeElement && r.target.matches(s.focusableElements)) {
    s.isMoved = !0, t.allowClick = !1;
    return;
  }
  s.allowTouchCallbacks && t.emit("touchMove", r), n.previousX = n.currentX, n.previousY = n.currentY, n.currentX = f, n.currentY = c;
  const T = n.currentX - n.startX, d = n.currentY - n.startY;
  if (t.params.threshold && Math.sqrt(T ** 2 + d ** 2) < t.params.threshold)
    return;
  if (typeof s.isScrolling > "u") {
    let I;
    t.isHorizontal() && n.currentY === n.startY || t.isVertical() && n.currentX === n.startX ? s.isScrolling = !1 : T * T + d * d >= 25 && (I = Math.atan2(Math.abs(d), Math.abs(T)) * 180 / Math.PI, s.isScrolling = t.isHorizontal() ? I > a.touchAngle : 90 - I > a.touchAngle);
  }
  if (s.isScrolling && t.emit("touchMoveOpposite", r), typeof s.startMoving > "u" && (n.currentX !== n.startX || n.currentY !== n.startY) && (s.startMoving = !0), s.isScrolling || r.type === "touchmove" && s.preventTouchMoveFromPointerMove) {
    s.isTouched = !1;
    return;
  }
  if (!s.startMoving)
    return;
  t.allowClick = !1, !a.cssMode && r.cancelable && r.preventDefault(), a.touchMoveStopPropagation && !a.nested && r.stopPropagation();
  let l = t.isHorizontal() ? T : d, g = t.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
  a.oneWayMovement && (l = Math.abs(l) * (i ? 1 : -1), g = Math.abs(g) * (i ? 1 : -1)), n.diff = l, l *= a.touchRatio, i && (l = -l, g = -g);
  const v = t.touchesDirection;
  t.swipeDirection = l > 0 ? "prev" : "next", t.touchesDirection = g > 0 ? "prev" : "next";
  const S = t.params.loop && !a.cssMode, h = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
  if (!s.isMoved) {
    if (S && h && t.loopFix({ direction: t.swipeDirection }), s.startTranslate = t.getTranslate(), t.setTransition(0), t.animating) {
      const I = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: {
          bySwiperTouchMove: !0
        }
      });
      t.wrapperEl.dispatchEvent(I);
    }
    s.allowMomentumBounce = !1, a.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0), t.emit("sliderFirstMove", r);
  }
  if ((/* @__PURE__ */ new Date()).getTime(), a._loopSwapReset !== !1 && s.isMoved && s.allowThresholdMove && v !== t.touchesDirection && S && h && Math.abs(l) >= 1) {
    Object.assign(n, {
      startX: f,
      startY: c,
      currentX: f,
      currentY: c,
      startTranslate: s.currentTranslate
    }), s.loopSwapReset = !0, s.startTranslate = s.currentTranslate;
    return;
  }
  t.emit("sliderMove", r), s.isMoved = !0;
  const p = s.startTranslate ?? 0;
  s.currentTranslate = l + p;
  let E = !0, y = a.resistanceRatio;
  if (a.touchReleaseOnEdges && (y = 0), l > 0 ? (S && h && s.allowThresholdMove && s.currentTranslate > (a.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] - (a.slidesPerView !== "auto" && t.slides.length - a.slidesPerView >= 2 ? t.slidesSizesGrid[t.activeIndex + 1] + t.params.spaceBetween : 0) - t.params.spaceBetween : t.minTranslate()) && t.loopFix({ direction: "prev", setTranslate: !0, activeSlideIndex: 0 }), s.currentTranslate > t.minTranslate() && (E = !1, a.resistance && (s.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + p + l) ** y))) : l < 0 && (S && h && s.allowThresholdMove && s.currentTranslate < (a.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween + (a.slidesPerView !== "auto" && t.slides.length - a.slidesPerView >= 2 ? t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween : 0) : t.maxTranslate()) && t.loopFix({
    direction: "next",
    setTranslate: !0,
    activeSlideIndex: t.slides.length - (a.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(String(a.slidesPerView))))
  }), s.currentTranslate < t.maxTranslate() && (E = !1, a.resistance && (s.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - p - l) ** y))), E && (r.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === "next" && (s.currentTranslate ?? 0) < p && (s.currentTranslate = p), !t.allowSlidePrev && t.swipeDirection === "prev" && (s.currentTranslate ?? 0) > p && (s.currentTranslate = p), !t.allowSlidePrev && !t.allowSlideNext && (s.currentTranslate = p), a.threshold > 0)
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
function ts(e, t) {
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
function ss(e) {
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
  let o = s.target;
  if (n.touchEventsTarget === "wrapper" && !Pt(o, t.wrapperEl))
    return;
  const r = s;
  if (typeof r.which == "number" && r.which === 3 || typeof r.button == "number" && r.button > 0 || a.isTouched && a.isMoved)
    return;
  const m = !!n.noSwipingClass && n.noSwipingClass !== "", f = s.composedPath ? s.composedPath() : s.path;
  m && s.target && s.target.shadowRoot && f && (o = f[0]);
  const c = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`, T = !!(s.target && s.target.shadowRoot);
  if (n.noSwiping && (T ? ts(c, o) : o.closest(c))) {
    t.allowClick = !0;
    return;
  }
  if (n.swipeHandler && typeof n.swipeHandler == "string" && !o.closest(n.swipeHandler))
    return;
  const d = s;
  i.currentX = d.pageX, i.currentY = d.pageY;
  const l = i.currentX, g = i.currentY;
  if (!lt(t, s, l))
    return;
  Object.assign(a, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), i.startX = l, i.startY = g, a.touchStartTime = ae(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (a.allowThresholdMove = !1);
  let v = !0;
  o.matches(a.focusableElements) && (v = !1, o.nodeName === "SELECT" && (a.isTouched = !1)), document.activeElement && document.activeElement.matches(a.focusableElements) && document.activeElement !== o && (d.pointerType === "mouse" || d.pointerType !== "mouse" && !o.matches(a.focusableElements)) && document.activeElement.blur();
  const S = v && t.allowTouchMove && n.touchStartPreventDefault;
  (n.touchStartForcePreventDefault || S) && !o.isContentEditable && s.preventDefault(), n.freeMode && n.freeMode.enabled && t.freeMode && t.animating && !n.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", s);
}
const St = (e, t) => {
  const { params: s, el: a, wrapperEl: n, device: i } = e, u = !!s.nested, o = t === "on" ? "addEventListener" : "removeEventListener", r = t;
  if (!a || typeof a == "string")
    return;
  document[o]("touchstart", e.onDocumentTouchStart, {
    passive: !1,
    capture: u
  }), a[o]("touchstart", e.onTouchStart, { passive: !1 }), a[o]("pointerdown", e.onTouchStart, { passive: !1 }), document[o]("touchmove", e.onTouchMove, {
    passive: !1,
    capture: u
  }), document[o]("pointermove", e.onTouchMove, {
    passive: !1,
    capture: u
  }), document[o]("touchend", e.onTouchEnd, { passive: !0 }), document[o]("pointerup", e.onTouchEnd, { passive: !0 }), document[o]("pointercancel", e.onTouchEnd, { passive: !0 }), document[o]("touchcancel", e.onTouchEnd, { passive: !0 }), document[o]("pointerout", e.onTouchEnd, { passive: !0 }), document[o]("pointerleave", e.onTouchEnd, { passive: !0 }), document[o]("contextmenu", e.onTouchEnd, { passive: !0 }), (s.preventClicks || s.preventClicksPropagation) && a[o]("click", e.onClick, !0), s.cssMode && n[o]("scroll", e.onScroll);
  const m = (f) => {
    e[r](f, Zt, !0);
  };
  s.updateOnWindowResize ? m(i.ios || i.android ? "resize orientationchange observerUpdate" : "resize observerUpdate") : m("observerUpdate"), a[o]("load", e.onLoad, { capture: !0 });
};
function as() {
  const e = this, { params: t } = e;
  e.onTouchStart = ss.bind(e), e.onTouchMove = es.bind(e), e.onTouchEnd = Jt.bind(e), e.onDocumentTouchStart = jt.bind(e), t.cssMode && (e.onScroll = Qt.bind(e)), e.onClick = qt.bind(e), e.onLoad = Kt.bind(e), St(e, "on");
}
function ns() {
  St(this, "off");
}
var is = {
  attachEvents: as,
  detachEvents: ns
};
function ls(e) {
  const t = this;
  if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
    return;
  const s = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
    t.__preventObserver__ = !1;
  });
}
function rs() {
  const e = this;
  e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = !1;
  }));
}
var os = {
  setGrabCursor: ls,
  unsetGrabCursor: rs
};
function ds(e, t) {
  const s = this, { params: a, slidesEl: n } = s;
  if (!a.loop || s.virtual && s.params.virtual?.enabled)
    return;
  const i = () => {
    Q(n, `.${a.slideClass}, swiper-slide`).forEach((l, g) => {
      l.setAttribute("data-swiper-slide-index", String(g));
    });
  }, u = () => {
    const d = Q(n, `.${a.slideBlankClass}`);
    d.forEach((l) => {
      l.remove();
    }), d.length > 0 && (s.recalcSlides(), s.updateSlides());
  }, o = s.grid && a.grid && a.grid.rows > 1;
  a.loopAddBlankSlides && (a.slidesPerGroup > 1 || o) && u();
  const r = a.slidesPerGroup * (o ? a.grid.rows : 1), m = s.slides.length % r !== 0, f = o && s.slides.length % a.grid.rows !== 0, c = (d) => {
    for (let l = 0; l < d; l += 1) {
      const g = s.isElement ? ne("swiper-slide", [a.slideBlankClass]) : ne("div", [a.slideClass, a.slideBlankClass]);
      s.slidesEl.append(g);
    }
  };
  if (m) {
    if (a.loopAddBlankSlides) {
      const d = r - s.slides.length % r;
      c(d), s.recalcSlides(), s.updateSlides();
    } else
      Ne("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    i();
  } else if (f) {
    if (a.loopAddBlankSlides) {
      const d = a.grid.rows - s.slides.length % a.grid.rows;
      c(d), s.recalcSlides(), s.updateSlides();
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
function cs() {
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
function fs(e = {}) {
  const { slideRealIndex: t, slideTo: s = !0, direction: a, setTranslate: n, activeSlideIndex: i, initial: u, byController: o, byMousewheel: r } = e;
  let m = i;
  const f = this;
  if (!f.params.loop)
    return;
  f.emit("beforeLoopFix");
  const { slides: c, allowSlidePrev: T, allowSlideNext: d, slidesEl: l, params: g } = f, { centeredSlides: v, slidesOffsetBefore: S, slidesOffsetAfter: h, initialSlide: p } = g, E = v || !!S || !!h;
  if (f.allowSlidePrev = !0, f.allowSlideNext = !0, f.virtual && g.virtual?.enabled) {
    if (s) {
      const $ = f.virtual.slides.length, Y = f.virtual.slidesBefore ?? 0;
      !E && f.snapIndex === 0 ? f.slideTo($, 0, !1, !0) : E && f.snapIndex < g.slidesPerView ? f.slideTo($ + f.snapIndex, 0, !1, !0) : f.snapIndex === f.snapGrid.length - 1 && f.slideTo(Y, 0, !1, !0);
    }
    f.allowSlidePrev = T, f.allowSlideNext = d, f.emit("loopFix");
    return;
  }
  let y = g.slidesPerView;
  y === "auto" ? y = f.slidesPerViewDynamic() : (y = Math.ceil(parseFloat(String(g.slidesPerView))), E && y % 2 === 0 && (y = y + 1));
  const I = g.slidesPerGroupAuto ? y : g.slidesPerGroup;
  let A = E ? Math.max(I, Math.ceil(y / 2)) : I;
  A % I !== 0 && (A += I - A % I), A += g.loopAdditionalSlides, f.loopedSlides = A;
  const w = f.grid && g.grid && g.grid.rows > 1;
  c.length < y + A || f.params.effect === "cards" && c.length < y + A * 2 ? Ne("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : w && g.grid.fill === "row" && Ne("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  const _ = [], P = [], b = w ? Math.ceil(c.length / g.grid.rows) : c.length, M = u && b - p < y && !E;
  let C = M ? p : f.activeIndex;
  typeof m > "u" ? m = f.getSlideIndex(c.find(($) => $.classList.contains(g.slideActiveClass))) : C = m;
  const x = a === "next" || !a, R = a === "prev" || !a;
  let L = 0, N = 0;
  const z = (w ? c[m].column ?? 0 : m) + (E && typeof n > "u" ? -y / 2 + 0.5 : 0);
  if (z < A) {
    L = Math.max(A - z, I);
    for (let $ = 0; $ < A - z; $ += 1) {
      const Y = $ - Math.floor($ / b) * b;
      if (w) {
        const q = b - Y - 1;
        for (let O = c.length - 1; O >= 0; O -= 1)
          c[O].column === q && _.push(O);
      } else
        _.push(b - Y - 1);
    }
  } else if (z + y > b - A) {
    N = Math.max(z - (b - A * 2), I), M && (N = Math.max(N, y - b + p + 1));
    for (let $ = 0; $ < N; $ += 1) {
      const Y = $ - Math.floor($ / b) * b;
      w ? c.forEach((q, O) => {
        q.column === Y && P.push(O);
      }) : P.push(Y);
    }
  }
  if (f.__preventObserver__ = !0, requestAnimationFrame(() => {
    f.__preventObserver__ = !1;
  }), f.params.effect === "cards" && c.length < y + A * 2 && (P.includes(m) && P.splice(P.indexOf(m), 1), _.includes(m) && _.splice(_.indexOf(m), 1)), R && _.forEach(($) => {
    const Y = c[$];
    Y.swiperLoopMoveDOM = !0, l.prepend(Y), Y.swiperLoopMoveDOM = !1;
  }), x && P.forEach(($) => {
    const Y = c[$];
    Y.swiperLoopMoveDOM = !0, l.append(Y), Y.swiperLoopMoveDOM = !1;
  }), f.recalcSlides(), g.slidesPerView === "auto" ? f.updateSlides() : w && (_.length > 0 && R || P.length > 0 && x) && f.slides.forEach(($, Y) => {
    f.grid.updateSlide(Y, $, f.slides);
  }), g.watchSlidesProgress && f.updateSlidesOffset(), s) {
    if (_.length > 0 && R) {
      if (typeof t > "u") {
        const $ = f.slidesGrid[C], q = f.slidesGrid[C + L] - $;
        r ? f.setTranslate(f.translate - q) : (f.slideTo(C + Math.ceil(L), 0, !1, !0), n && (f.touchEventsData.startTranslate = f.touchEventsData.startTranslate - q, f.touchEventsData.currentTranslate = f.touchEventsData.currentTranslate - q));
      } else if (n) {
        const $ = w ? _.length / g.grid.rows : _.length;
        f.slideTo(f.activeIndex + $, 0, !1, !0), f.touchEventsData.currentTranslate = f.translate;
      }
    } else if (P.length > 0 && x)
      if (typeof t > "u") {
        const $ = f.slidesGrid[C], q = f.slidesGrid[C - N] - $;
        r ? f.setTranslate(f.translate - q) : (f.slideTo(C - N, 0, !1, !0), n && (f.touchEventsData.startTranslate = f.touchEventsData.startTranslate - q, f.touchEventsData.currentTranslate = f.touchEventsData.currentTranslate - q));
      } else {
        const $ = w ? P.length / g.grid.rows : P.length;
        f.slideTo(f.activeIndex - $, 0, !1, !0);
      }
  }
  f.allowSlidePrev = T, f.allowSlideNext = d;
  const V = f.controller?.control;
  if (V && !o) {
    const $ = {
      slideRealIndex: t,
      direction: a,
      setTranslate: n,
      activeSlideIndex: m,
      byController: !0
    };
    Array.isArray(V) ? V.forEach((Y) => {
      !Y.destroyed && Y.params.loop && Y.loopFix({
        ...$,
        slideTo: Y.params.slidesPerView === g.slidesPerView ? s : !1
      });
    }) : V instanceof f.constructor && V.params.loop && V.loopFix({
      ...$,
      slideTo: V.params.slidesPerView === g.slidesPerView ? s : !1
    });
  }
  f.emit("loopFix");
}
var us = {
  loopCreate: ds,
  loopFix: fs,
  loopDestroy: cs
};
function ps(e, t) {
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
const ms = ({ swiper: e, extendParams: t, on: s }) => {
  const a = [], n = (o, r = {}) => {
    const m = window.MutationObserver || window.WebkitMutationObserver;
    if (!m)
      return;
    const f = new m((c) => {
      if (e.__preventObserver__)
        return;
      if (c.length === 1) {
        e.emit("observerUpdate", c[0]);
        return;
      }
      const T = function() {
        e.emit("observerUpdate", c[0]);
      };
      window.requestAnimationFrame ? window.requestAnimationFrame(T) : window.setTimeout(T, 0);
    });
    f.observe(o, {
      attributes: typeof r.attributes > "u" ? !0 : r.attributes,
      childList: e.isElement || (typeof r.childList > "u" ? !0 : r.childList),
      characterData: typeof r.characterData > "u" ? !0 : r.characterData
    }), a.push(f);
  }, i = () => {
    if (e.params.observer) {
      if (e.params.observeParents) {
        const o = ue(e.hostEl);
        for (let r = 0; r < o.length; r += 1)
          n(o[r]);
      }
      n(e.hostEl, {
        childList: e.params.observeSlideChildren
      }), n(e.wrapperEl, { attributes: !1 });
    }
  }, u = () => {
    a.forEach((o) => {
      o.disconnect();
    }), a.splice(0, a.length);
  };
  t({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), s("init", i), s("destroy", u);
}, hs = ({ swiper: e, on: t, emit: s }) => {
  let a = null, n = null;
  const i = () => {
    !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"));
  }, u = () => {
    !e || e.destroyed || !e.initialized || (a = new ResizeObserver((m) => {
      n = window.requestAnimationFrame(() => {
        const { width: f, height: c } = e;
        let T = f, d = c;
        m.forEach(({ contentBoxSize: l, contentRect: g, target: v }) => {
          if (v && v !== e.el)
            return;
          const S = Array.isArray(l) ? l[0] : l;
          T = g ? g.width : S.inlineSize, d = g ? g.height : S.blockSize;
        }), (T !== f || d !== c) && i();
      });
    }), a.observe(e.el));
  }, o = () => {
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
    o(), window.removeEventListener("resize", i), window.removeEventListener("orientationchange", r);
  });
};
function gs(e, t = !0, s) {
  const a = this, { enabled: n, params: i, animating: u } = a;
  if (!n || a.destroyed)
    return a;
  typeof e > "u" && (e = a.params.speed);
  let o = i.slidesPerGroup;
  i.slidesPerView === "auto" && i.slidesPerGroup === 1 && i.slidesPerGroupAuto && (o = Math.max(a.slidesPerViewDynamic("current", !0), 1));
  const r = a.activeIndex < i.slidesPerGroupSkip ? 1 : o, m = a.virtual && i.virtual?.enabled;
  if (i.loop) {
    if (u && !m && i.loopPreventsSliding)
      return !1;
    if (a.loopFix({ direction: "next" }), a._clientLeft = a.wrapperEl.clientLeft, a.activeIndex === a.slides.length - 1 && i.cssMode)
      return requestAnimationFrame(() => {
        a.slideTo(a.activeIndex + r, e, t, s);
      }), !0;
  }
  return i.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + r, e, t, s);
}
function Ts(e, t = !0, s) {
  const a = this, { params: n, snapGrid: i, slidesGrid: u, rtlTranslate: o, enabled: r, animating: m } = a;
  if (!r || a.destroyed)
    return a;
  typeof e > "u" && (e = a.params.speed);
  const f = a.virtual && n.virtual?.enabled;
  if (n.loop) {
    if (m && !f && n.loopPreventsSliding)
      return !1;
    a.loopFix({ direction: "prev" }), a._clientLeft = a.wrapperEl.clientLeft;
  }
  const c = o ? a.translate : -a.translate;
  function T(h) {
    return h < 0 ? -Math.floor(Math.abs(h)) : Math.floor(h);
  }
  const d = T(c), l = i.map((h) => T(h)), g = n.freeMode && n.freeMode.enabled;
  let v = i[l.indexOf(d) - 1];
  if (typeof v > "u" && (n.cssMode || g)) {
    let h;
    i.forEach((p, E) => {
      d >= p && (h = E);
    }), typeof h < "u" && (v = g ? i[h] : i[h > 0 ? h - 1 : h]);
  }
  let S = 0;
  if (typeof v < "u" && (S = u.indexOf(v), S < 0 && (S = a.activeIndex - 1), n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (S = S - a.slidesPerViewDynamic("previous", !0) + 1, S = Math.max(S, 0))), n.rewind && a.isBeginning) {
    const h = a.params.virtual?.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
    return a.slideTo(h, e, t, s);
  } else if (n.loop && a.activeIndex === 0 && n.cssMode)
    return requestAnimationFrame(() => {
      a.slideTo(S, e, t, s);
    }), !0;
  return a.slideTo(S, e, t, s);
}
function Es(e, t = !0, s) {
  const a = this;
  if (!a.destroyed)
    return typeof e > "u" && (e = a.params.speed), a.slideTo(a.activeIndex, e, t, s);
}
function vs(e = 0, t, s = !0, a, n) {
  typeof e == "string" && (e = parseInt(e, 10));
  const i = this;
  let u = e;
  u < 0 && (u = 0);
  const { params: o, snapGrid: r, slidesGrid: m, previousIndex: f, activeIndex: c, rtlTranslate: T, wrapperEl: d, enabled: l } = i;
  if (!l && !a && !n || i.destroyed || i.animating && o.preventInteractionOnTransition)
    return !1;
  typeof t > "u" && (t = i.params.speed);
  const g = Math.min(i.params.slidesPerGroupSkip, u);
  let v = g + Math.floor((u - g) / i.params.slidesPerGroup);
  v >= r.length && (v = r.length - 1);
  const S = -r[v];
  if (o.normalizeSlideIndex)
    for (let A = 0; A < m.length; A += 1) {
      const w = -Math.floor(S * 100), _ = Math.floor(m[A] * 100), P = Math.floor(m[A + 1] * 100);
      typeof m[A + 1] < "u" ? w >= _ && w < P - (P - _) / 2 ? u = A : w >= _ && w < P && (u = A + 1) : w >= _ && (u = A);
    }
  if (i.initialized && u !== c && (!i.allowSlideNext && (T ? S > i.translate && S > i.minTranslate() : S < i.translate && S < i.minTranslate()) || !i.allowSlidePrev && S > i.translate && S > i.maxTranslate() && (c || 0) !== u))
    return !1;
  u !== (f || 0) && s && i.emit("beforeSlideChangeStart"), i.updateProgress(S);
  let h;
  u > c ? h = "next" : u < c ? h = "prev" : h = "reset";
  const p = i.virtual && i.params.virtual?.enabled;
  if (!(p && n) && (T && -S === i.translate || !T && S === i.translate))
    return i.updateActiveIndex(u), o.autoHeight && i.updateAutoHeight(), i.updateSlidesClasses(), o.effect !== "slide" && i.setTranslate(S), h !== "reset" && (i.transitionStart(s, h), i.transitionEnd(s, h)), !1;
  if (o.cssMode) {
    const A = i.isHorizontal(), w = T ? S : -S;
    return t === 0 ? (p && (i.wrapperEl.style.scrollSnapType = "none", i._immediateVirtual = !0), p && !i._cssModeVirtualInitialSet && (i.params.initialSlide ?? 0) > 0 ? (i._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
      d[A ? "scrollLeft" : "scrollTop"] = w;
    })) : d[A ? "scrollLeft" : "scrollTop"] = w, p && requestAnimationFrame(() => {
      i.wrapperEl.style.scrollSnapType = "", i._immediateVirtual = !1;
    })) : d.scrollTo({
      [A ? "left" : "top"]: w,
      behavior: "smooth"
    }), !0;
  }
  const I = Et().isSafari;
  return p && !n && I && i.isElement && i.virtual.update(!1, !1, u), i.setTransition(t), i.setTranslate(S), i.updateActiveIndex(u), i.updateSlidesClasses(), i.emit("beforeTransitionStart", t, a), i.transitionStart(s, h), t === 0 ? i.transitionEnd(s, h) : i.animating || (i.animating = !0, i.onSlideToWrapperTransitionEnd || (i.onSlideToWrapperTransitionEnd = function(w) {
    !i || i.destroyed || w.target === this && (i.wrapperEl.removeEventListener("transitionend", i.onSlideToWrapperTransitionEnd), i.onSlideToWrapperTransitionEnd = null, delete i.onSlideToWrapperTransitionEnd, i.transitionEnd(s, h));
  }), i.wrapperEl.addEventListener("transitionend", i.onSlideToWrapperTransitionEnd)), !0;
}
function Ss() {
  const e = this;
  if (e.destroyed)
    return;
  const { params: t, slidesEl: s, clickedSlide: a, clickedIndex: n } = e;
  if (a === void 0 || n === void 0)
    return;
  const i = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let u = e.getSlideIndexWhenGrid(n), o;
  const r = e.isElement ? "swiper-slide" : `.${t.slideClass}`, m = e.grid && e.params.grid && e.params.grid.rows > 1;
  if (t.loop) {
    if (e.animating)
      return;
    o = parseInt(a.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? e.slideToLoop(o) : u > (m ? (e.slides.length - i) / 2 - (e.params.grid.rows - 1) : e.slides.length - i) ? (e.loopFix(), u = e.getSlideIndex(Q(s, `${r}[data-swiper-slide-index="${o}"]`)[0]), Se(() => {
      e.slideTo(u);
    })) : e.slideTo(u);
  } else
    e.slideTo(u);
}
function bs(e, t = !0, s, a = 0.5) {
  const n = this;
  if (n.destroyed)
    return;
  typeof e > "u" && (e = n.params.speed);
  let i = n.activeIndex;
  const u = Math.min(n.params.slidesPerGroupSkip, i), o = u + Math.floor((i - u) / n.params.slidesPerGroup), r = n.rtlTranslate ? n.translate : -n.translate;
  if (r >= n.snapGrid[o]) {
    const m = n.snapGrid[o], f = n.snapGrid[o + 1];
    r - m > (f - m) * a && (i += n.params.slidesPerGroup);
  } else {
    const m = n.snapGrid[o - 1], f = n.snapGrid[o];
    r - m <= (f - m) * a && (i -= n.params.slidesPerGroup);
  }
  return i = Math.max(i, 0), i = Math.min(i, n.slidesGrid.length - 1), n.slideTo(i, e, t, s);
}
function ys(e = 0, t, s = !0, a) {
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
      let o;
      if (i) {
        const g = u * n.params.grid.rows;
        o = n.slides.find((S) => Number(S.getAttribute("data-swiper-slide-index")) === g)?.column ?? 0;
      } else
        o = n.getSlideIndexByData(u);
      const r = i ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length, { centeredSlides: m, slidesOffsetBefore: f, slidesOffsetAfter: c } = n.params, T = m || !!f || !!c;
      let d;
      n.params.slidesPerView === "auto" ? d = n.slidesPerViewDynamic() : (d = Math.ceil(parseFloat(String(n.params.slidesPerView))), T && d % 2 === 0 && (d = d + 1));
      let l = r - o < d;
      if (T && (l = l || o < Math.ceil(d / 2)), a && T && n.params.slidesPerView !== "auto" && !i && (l = !1), l) {
        const g = T ? o < n.activeIndex ? "prev" : "next" : o - n.activeIndex - 1 < n.params.slidesPerView ? "next" : "prev";
        n.loopFix({
          direction: g,
          slideTo: !0,
          activeSlideIndex: g === "next" ? o + 1 : o - r + 1,
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
var As = {
  slideTo: vs,
  slideToLoop: ys,
  slideNext: gs,
  slidePrev: Ts,
  slideReset: Es,
  slideToClosest: bs,
  slideToClickedSlide: Ss
};
function _s(e, t) {
  const s = this;
  s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`, s.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : ""), s.emit("setTransition", e, t);
}
function bt({ swiper: e, runCallbacks: t, direction: s, step: a }) {
  const { activeIndex: n, previousIndex: i } = e;
  let u = s;
  u || (n > i ? u = "next" : n < i ? u = "prev" : u = "reset"), e.emit(`transition${a}`), t && u === "reset" ? e.emit(`slideResetTransition${a}`) : t && n !== i && (e.emit(`slideChangeTransition${a}`), u === "next" ? e.emit(`slideNextTransition${a}`) : e.emit(`slidePrevTransition${a}`));
}
function xs(e = !0, t) {
  const s = this, { params: a } = s;
  s.animating = !1, !a.cssMode && (s.setTransition(0), bt({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
}
function Ls(e = !0, t) {
  const s = this, { params: a } = s;
  a.cssMode || (a.autoHeight && s.updateAutoHeight(), bt({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
}
var Cs = {
  setTransition: _s,
  transitionStart: Ls,
  transitionEnd: xs
};
function Ms(e = this.isHorizontal() ? "x" : "y") {
  const t = this, { params: s, rtlTranslate: a, translate: n, wrapperEl: i } = t;
  if (s.virtualTranslate)
    return a ? -n : n;
  if (s.cssMode)
    return n;
  let u = Ke(i, e);
  return u += t.cssOverflowAdjustment(), a && (u = -u), u || 0;
}
function Is() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function ws() {
  return -this.snapGrid[0];
}
function Rs(e, t) {
  const s = this, { rtlTranslate: a, params: n, wrapperEl: i, progress: u } = s;
  let o = 0, r = 0;
  const m = 0;
  s.isHorizontal() ? o = a ? -e : e : r = e, n.roundLengths && (o = Math.floor(o), r = Math.floor(r)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? o : r, n.cssMode ? i[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -o : -r : n.virtualTranslate || (s.isHorizontal() ? o -= s.cssOverflowAdjustment() : r -= s.cssOverflowAdjustment(), i.style.transform = `translate3d(${o}px, ${r}px, ${m}px)`);
  let f;
  const c = s.maxTranslate() - s.minTranslate();
  c === 0 ? f = 0 : f = (e - s.minTranslate()) / c, f !== u && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
}
function Ps(e = 0, t = this.params.speed, s = !0, a = !0, n) {
  const i = this, { params: u, wrapperEl: o } = i;
  if (i.animating && u.preventInteractionOnTransition)
    return !1;
  const r = i.minTranslate(), m = i.maxTranslate();
  let f;
  if (a && e > r ? f = r : a && e < m ? f = m : f = e, i.updateProgress(f), u.cssMode) {
    const c = i.isHorizontal();
    return t === 0 ? o[c ? "scrollLeft" : "scrollTop"] = -f : o.scrollTo({
      [c ? "left" : "top"]: -f,
      behavior: "smooth"
    }), !0;
  }
  return t === 0 ? (i.setTransition(0), i.setTranslate(f), s && (i.emit("beforeTransitionStart", t, n), i.emit("transitionEnd"))) : (i.setTransition(t), i.setTranslate(f), s && (i.emit("beforeTransitionStart", t, n), i.emit("transitionStart")), i.animating || (i.animating = !0, i.onTranslateToWrapperTransitionEnd || (i.onTranslateToWrapperTransitionEnd = function(T) {
    !i || i.destroyed || T.target === this && (i.wrapperEl.removeEventListener("transitionend", i.onTranslateToWrapperTransitionEnd), i.onTranslateToWrapperTransitionEnd = null, delete i.onTranslateToWrapperTransitionEnd, i.animating = !1, s && i.emit("transitionEnd"));
  }), i.wrapperEl.addEventListener("transitionend", i.onTranslateToWrapperTransitionEnd))), !0;
}
var Os = {
  getTranslate: Ms,
  setTranslate: Rs,
  minTranslate: ws,
  maxTranslate: Is,
  translateTo: Ps
};
function Ds(e) {
  const { slidesGrid: t, params: s } = e, a = e.rtlTranslate ? e.translate : -e.translate;
  let n;
  for (let i = 0; i < t.length; i += 1)
    typeof t[i + 1] < "u" ? a >= t[i] && a < t[i + 1] - (t[i + 1] - t[i]) / 2 ? n = i : a >= t[i] && a < t[i + 1] && (n = i + 1) : a >= t[i] && (n = i);
  return s.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0), n;
}
function Ns(e) {
  const t = this, s = t.rtlTranslate ? t.translate : -t.translate, { snapGrid: a, params: n, activeIndex: i, realIndex: u, snapIndex: o } = t;
  let r = e, m;
  const f = (d) => {
    const l = t.virtual.slides;
    let g = d - (t.virtual.slidesBefore ?? 0);
    return g < 0 && (g = l.length + g), g >= l.length && (g -= l.length), g;
  };
  if (typeof r > "u" && (r = Ds(t)), a.indexOf(s) >= 0)
    m = a.indexOf(s);
  else {
    const d = Math.min(n.slidesPerGroupSkip, r);
    m = d + Math.floor((r - d) / n.slidesPerGroup);
  }
  if (m >= a.length && (m = a.length - 1), r === i && !t.params.loop) {
    m !== o && (t.snapIndex = m, t.emit("snapIndexChange"));
    return;
  }
  if (r === i && t.params.loop && t.virtual && t.params.virtual?.enabled) {
    t.realIndex = f(r);
    return;
  }
  const c = t.grid && n.grid && n.grid.rows > 1;
  let T;
  if (t.virtual && n.virtual?.enabled)
    n.loop ? T = f(r) : T = r;
  else if (c) {
    const d = t.slides.find((g) => g.column === r);
    let l = parseInt(d.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(l) && (l = Math.max(t.slides.indexOf(d), 0)), T = Math.floor(l / n.grid.rows);
  } else if (t.slides[r]) {
    const d = t.slides[r].getAttribute("data-swiper-slide-index");
    d ? T = parseInt(d, 10) : T = r;
  } else
    T = r;
  Object.assign(t, {
    previousSnapIndex: o,
    snapIndex: m,
    previousRealIndex: u,
    realIndex: T,
    previousIndex: i,
    activeIndex: r
  }), t.initialized && Qe(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (u !== T && t.emit("realIndexChange"), t.emit("slideChange"));
}
function zs(e) {
  const t = this, s = [], a = t.virtual && t.params.virtual?.enabled;
  let n = 0, i;
  typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
  const u = (o) => a ? t.slides[t.getSlideIndexByData(o)] : t.slides[o];
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((o) => {
        s.push(o);
      });
    else
      for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
        const o = t.activeIndex + i;
        if (o > t.slides.length && !a)
          break;
        const r = u(o);
        r && s.push(r);
      }
  else {
    const o = u(t.activeIndex);
    o && s.push(o);
  }
  for (i = 0; i < s.length; i += 1)
    if (typeof s[i] < "u") {
      const o = s[i].offsetHeight;
      n = o > n ? o : n;
    }
  (n || n === 0) && (t.wrapperEl.style.height = `${n}px`);
}
function ks(e, t) {
  const s = this, a = s.params;
  let n = e.closest(`.${a.slideClass}, swiper-slide`);
  !n && s.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((o) => {
    !n && o.matches && o.matches(`.${a.slideClass}, swiper-slide`) && (n = o);
  });
  let i = !1, u;
  if (n) {
    for (let o = 0; o < s.slides.length; o += 1)
      if (s.slides[o] === n) {
        i = !0, u = o;
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
function $s(e) {
  const t = this;
  if (typeof e > "u") {
    const f = t.rtlTranslate ? -1 : 1;
    e = t && t.translate && t.translate * f || 0;
  }
  const s = t.params, a = t.maxTranslate() - t.minTranslate();
  let { progress: n, isBeginning: i, isEnd: u } = t, o = t.progressLoop;
  const r = i, m = u;
  if (a === 0)
    n = 0, i = !0, u = !0;
  else {
    n = (e - t.minTranslate()) / a;
    const f = Math.abs(e - t.minTranslate()) < 1, c = Math.abs(e - t.maxTranslate()) < 1;
    i = f || n <= 0, u = c || n >= 1, f && (n = 0), c && (n = 1);
  }
  if (s.loop) {
    const f = t.getSlideIndexByData(0), c = t.getSlideIndexByData(t.slides.length - 1), T = t.slidesGrid[f], d = t.slidesGrid[c], l = t.slidesGrid[t.slidesGrid.length - 1], g = Math.abs(e);
    g >= T ? o = (g - T) / l : o = (g + l - d) / l, o > 1 && (o -= 1);
  }
  Object.assign(t, {
    progress: n,
    progressLoop: o,
    isBeginning: i,
    isEnd: u
  }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), i && !r && t.emit("reachBeginning toEdge"), u && !m && t.emit("reachEnd toEdge"), (r && !i || m && !u) && t.emit("fromEdge"), t.emit("progress", n);
}
function Gs() {
  const e = this;
  let t, s;
  const a = e.el;
  typeof e.params.width < "u" && e.params.width !== null ? t = e.params.width : t = a.clientWidth, typeof e.params.height < "u" && e.params.height !== null ? s = e.params.height : s = a.clientHeight, !(t === 0 && e.isHorizontal() || s === 0 && e.isVertical()) && (t = t - parseInt(ce(a, "padding-left") || "0", 10) - parseInt(ce(a, "padding-right") || "0", 10), s = s - parseInt(ce(a, "padding-top") || "0", 10) - parseInt(ce(a, "padding-bottom") || "0", 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
    width: t,
    height: s,
    size: e.isHorizontal() ? t : s
  }));
}
function Bs() {
  const e = this;
  function t(b, M) {
    return parseFloat(b.getPropertyValue(e.getDirectionLabel(M)) || "0");
  }
  const s = e.params, { wrapperEl: a, slidesEl: n, rtlTranslate: i, wrongRTL: u } = e, o = !!(e.virtual && s.virtual?.enabled), r = o ? e.virtual.slides.length : e.slides.length, m = Q(n, `.${e.params.slideClass}, swiper-slide`), f = o ? e.virtual.slides.length : m.length;
  let c = [];
  const T = [], d = [], l = (b) => typeof b == "function" ? b.call(e) : b, g = l(s.slidesOffsetBefore), v = l(s.slidesOffsetAfter), S = e.snapGrid.length, h = e.slidesGrid.length, p = e.size - g - v;
  let E = s.spaceBetween, y = -g, I = 0, A = 0;
  if (typeof p > "u")
    return;
  typeof E == "string" && E.indexOf("%") >= 0 ? E = parseFloat(E.replace("%", "")) / 100 * p : typeof E == "string" && (E = parseFloat(E)), e.virtualSize = -E - g - v, m.forEach((b) => {
    i ? b.style.marginLeft = "" : b.style.marginRight = "", b.style.marginBottom = "", b.style.marginTop = "";
  }), s.centeredSlides && s.cssMode && (fe(a, "--swiper-centered-offset-before", ""), fe(a, "--swiper-centered-offset-after", "")), s.cssMode && (fe(a, "--swiper-slides-offset-before", `${g}px`), fe(a, "--swiper-slides-offset-after", `${v}px`));
  const w = s.grid && s.grid.rows > 1 && e.grid;
  w ? e.grid.initSlides(m) : e.grid && e.grid.unsetSlides();
  let _ = 0;
  const P = s.slidesPerView === "auto" && s.breakpoints && Object.keys(s.breakpoints).filter((b) => typeof s.breakpoints[b]?.slidesPerView < "u").length > 0;
  for (let b = 0; b < f; b += 1) {
    _ = 0;
    const M = m[b];
    if (!(M && (w && e.grid.updateSlide(b, M, m), ce(M, "display") === "none"))) {
      if (o && s.slidesPerView === "auto")
        s.virtual?.slidesPerViewAutoSlideSize && (_ = s.virtual.slidesPerViewAutoSlideSize), _ && M && (s.roundLengths && (_ = Math.floor(_)), M.style[e.getDirectionLabel("width")] = `${_}px`);
      else if (s.slidesPerView === "auto") {
        P && (M.style[e.getDirectionLabel("width")] = "");
        const C = getComputedStyle(M), x = M.style.transform, R = M.style.webkitTransform;
        if (x && (M.style.transform = "none"), R && (M.style.webkitTransform = "none"), s.roundLengths)
          _ = e.isHorizontal() ? Ze(M, "width") : Ze(M, "height");
        else {
          const L = t(C, "width"), N = t(C, "padding-left"), k = t(C, "padding-right"), z = t(C, "margin-left"), V = t(C, "margin-right"), $ = C.getPropertyValue("box-sizing");
          if ($ && $ === "border-box")
            _ = L + z + V;
          else {
            const { clientWidth: Y, offsetWidth: q } = M;
            _ = L + N + k + z + V + (q - Y);
          }
        }
        x && (M.style.transform = x), R && (M.style.webkitTransform = R), s.roundLengths && (_ = Math.floor(_));
      } else
        _ = (p - (s.slidesPerView - 1) * E) / s.slidesPerView, s.roundLengths && (_ = Math.floor(_)), M && (M.style[e.getDirectionLabel("width")] = `${_}px`);
      M && (M.swiperSlideSize = _), d.push(_), s.centeredSlides ? (y = y + _ / 2 + I / 2 + E, I === 0 && b !== 0 && (y = y - p / 2 - E), b === 0 && (y = y - p / 2 - E), Math.abs(y) < 1 / 1e3 && (y = 0), s.roundLengths && (y = Math.floor(y)), A % s.slidesPerGroup === 0 && c.push(y), T.push(y)) : (s.roundLengths && (y = Math.floor(y)), (A - Math.min(e.params.slidesPerGroupSkip, A)) % e.params.slidesPerGroup === 0 && c.push(y), T.push(y), y = y + _ + E), e.virtualSize += _ + E, I = _, A += 1;
    }
  }
  if (e.virtualSize = Math.max(e.virtualSize, p) + v, i && u && (s.effect === "slide" || s.effect === "coverflow") && (a.style.width = `${e.virtualSize + E}px`), s.setWrapperSize && (a.style[e.getDirectionLabel("width")] = `${e.virtualSize + E}px`), w && e.grid.updateWrapperSize(_, c), !s.centeredSlides) {
    const b = s.slidesPerView !== "auto" && s.slidesPerView % 1 !== 0, M = s.snapToSlideEdge && !s.loop && (s.slidesPerView === "auto" || b);
    let C = c.length;
    if (M) {
      let R;
      if (s.slidesPerView === "auto") {
        R = 1;
        let L = 0;
        for (let N = d.length - 1; N >= 0 && (L += d[N] + (N < d.length - 1 ? E : 0), L <= p); N -= 1)
          R = d.length - N;
      } else
        R = Math.floor(s.slidesPerView);
      C = Math.max(f - R, 0);
    }
    const x = [];
    for (let R = 0; R < c.length; R += 1) {
      let L = c[R];
      s.roundLengths && (L = Math.floor(L)), M ? R <= C && x.push(L) : c[R] <= e.virtualSize - p && x.push(L);
    }
    c = x, Math.floor(e.virtualSize - p) - Math.floor(c[c.length - 1]) > 1 && (M || c.push(e.virtualSize - p));
  }
  if (o && s.loop) {
    const b = d[0] + E, M = e.virtual.slidesBefore ?? 0, C = e.virtual.slidesAfter ?? 0, x = M + C;
    if (s.slidesPerGroup > 1) {
      const R = Math.ceil(x / s.slidesPerGroup), L = b * s.slidesPerGroup;
      for (let N = 0; N < R; N += 1)
        c.push(c[c.length - 1] + L);
    }
    for (let R = 0; R < x; R += 1)
      s.slidesPerGroup === 1 && c.push(c[c.length - 1] + b), T.push(T[T.length - 1] + b), e.virtualSize += b;
  }
  if (c.length === 0 && (c = [0]), E !== 0) {
    const b = e.isHorizontal() && i ? "marginLeft" : e.getDirectionLabel("marginRight");
    m.filter((M, C) => !s.cssMode || s.loop ? !0 : C !== m.length - 1).forEach((M) => {
      M.style[b] = `${E}px`;
    });
  }
  if (s.centeredSlides && s.centeredSlidesBounds) {
    let b = 0;
    d.forEach((C) => {
      b += C + (E || 0);
    }), b -= E;
    const M = b > p ? b - p : 0;
    c = c.map((C) => C <= 0 ? -g : C > M ? M + v : C);
  }
  if (s.centerInsufficientSlides) {
    let b = 0;
    if (d.forEach((M) => {
      b += M + (E || 0);
    }), b -= E, b < p) {
      const M = (p - b) / 2;
      c.forEach((C, x) => {
        c[x] = C - M;
      }), T.forEach((C, x) => {
        T[x] = C + M;
      });
    }
  }
  if (Object.assign(e, {
    slides: m,
    snapGrid: c,
    slidesGrid: T,
    slidesSizesGrid: d
  }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
    fe(a, "--swiper-centered-offset-before", `${-c[0]}px`), fe(a, "--swiper-centered-offset-after", `${e.size / 2 - d[d.length - 1] / 2}px`);
    const b = -e.snapGrid[0], M = -e.slidesGrid[0];
    e.snapGrid = e.snapGrid.map((C) => C + b), e.slidesGrid = e.slidesGrid.map((C) => C + M);
  }
  if (f !== r && e.emit("slidesLengthChange"), c.length !== S && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), T.length !== h && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !o && !s.cssMode && (s.effect === "slide" || s.effect === "fade")) {
    const b = `${s.containerModifierClass}backface-hidden`, M = e.el.classList.contains(b);
    f <= s.maxBackfaceHiddenSlides ? M || e.el.classList.add(b) : M && e.el.classList.remove(b);
  }
}
const qe = (e, t, s) => {
  t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s);
};
function Hs() {
  const e = this, { slides: t, params: s, slidesEl: a, activeIndex: n } = e, i = !!(e.virtual && s.virtual?.enabled), u = e.grid && s.grid && s.grid.rows > 1, o = (c) => Q(a, `.${s.slideClass}${c}, swiper-slide${c}`)[0];
  let r, m, f;
  if (i)
    if (s.loop) {
      const c = e.virtual.slides;
      let T = n - (e.virtual.slidesBefore ?? 0);
      T < 0 && (T = c.length + T), T >= c.length && (T -= c.length), r = o(`[data-swiper-slide-index="${T}"]`);
    } else
      r = o(`[data-swiper-slide-index="${n}"]`);
  else u ? (r = t.find((c) => c.column === n), f = t.find((c) => c.column === n + 1), m = t.find((c) => c.column === n - 1)) : r = t[n];
  r && (u || (f = Dt(r, `.${s.slideClass}, swiper-slide`)[0], s.loop && !f && (f = t[0]), m = Ot(r, `.${s.slideClass}, swiper-slide`)[0], s.loop && !m === 0 && (m = t[t.length - 1]))), t.forEach((c) => {
    qe(c, c === r, s.slideActiveClass), qe(c, c === f, s.slideNextClass), qe(c, c === m, s.slidePrevClass);
  }), e.emitSlidesClasses();
}
function Vs() {
  const e = this, t = e.slides, s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
  for (let a = 0; a < t.length; a += 1)
    t[a].swiperSlideOffset = (e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop) - s - e.cssOverflowAdjustment();
}
const rt = (e, t, s) => {
  t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s);
};
function Ws(e = this && this.translate || 0) {
  const t = this, s = t.params, { slides: a, rtlTranslate: n, snapGrid: i } = t;
  if (a.length === 0)
    return;
  typeof a[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let u = -e;
  n && (u = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
  let o = s.spaceBetween;
  typeof o == "string" && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * t.size : typeof o == "string" && (o = parseFloat(o));
  for (let r = 0; r < a.length; r += 1) {
    const m = a[r];
    let f = m.swiperSlideOffset ?? 0;
    s.cssMode && s.centeredSlides && (f -= a[0].swiperSlideOffset ?? 0);
    const c = m.swiperSlideSize ?? 0, T = (u + (s.centeredSlides ? t.minTranslate() : 0) - f) / (c + o), d = (u - i[0] + (s.centeredSlides ? t.minTranslate() : 0) - f) / (c + o), l = -(u - f), g = l + t.slidesSizesGrid[r], v = l >= 0 && l <= t.size - t.slidesSizesGrid[r], S = l >= 0 && l < t.size - 1 || g > 1 && g <= t.size || l <= 0 && g >= t.size;
    S && (t.visibleSlides.push(m), t.visibleSlidesIndexes.push(r)), rt(m, S, s.slideVisibleClass), rt(m, v, s.slideFullyVisibleClass), m.progress = n ? -T : T, m.originalProgress = n ? -d : d;
  }
}
var Ys = {
  updateSize: Gs,
  updateSlides: Bs,
  updateAutoHeight: zs,
  updateSlidesOffset: Vs,
  updateSlidesProgress: Ws,
  updateProgress: $s,
  updateSlidesClasses: Hs,
  updateActiveIndex: Ns,
  updateClickedSlide: ks
};
const Fs = {
  eventsEmitter: Ut,
  update: Ys,
  translate: Os,
  transition: Cs,
  slide: As,
  loop: us,
  grabCursor: os,
  events: is,
  breakpoints: Bt,
  checkOverflow: Vt,
  classes: Xt
}, Je = {};
class te {
  static extendedDefaults;
  static defaults;
  constructor(...t) {
    let s, a;
    if (t.length === 1 && t[0] !== null && typeof t[0] == "object" && Object.prototype.toString.call(t[0]).slice(8, -1) === "Object" ? a = t[0] : [s, a] = t, a || (a = {}), a = se({}, a), s && !a.el && (a.el = s), a.el && typeof a.el == "string" && typeof document < "u" && document.querySelectorAll(a.el).length > 1) {
      const o = [];
      return document.querySelectorAll(a.el).forEach((r) => {
        const m = se({}, a, { el: r });
        o.push(new te(m));
      }), o;
    }
    const n = this;
    n.__swiper__ = !0, n.support = gt(), n.device = Tt({ userAgent: a.userAgent ?? void 0 }), n.browser = Et(), n.eventsListeners = {}, n.eventsAnyListeners = [], n.modules = [...n.__modules__ || []], a.modules && Array.isArray(a.modules) && a.modules.forEach((o) => {
      const r = o;
      typeof r == "function" && n.modules.indexOf(r) < 0 && n.modules.push(r);
    });
    const i = {};
    n.modules.forEach((o) => {
      o({
        params: a,
        swiper: n,
        extendParams: ps(a, i),
        on: n.on.bind(n),
        once: n.once.bind(n),
        off: n.off.bind(n),
        emit: n.emit.bind(n)
      });
    });
    const u = se({}, vt, i);
    if (n.params = se({}, u, Je, a), n.originalParams = se({}, n.params), n.passedParams = se({}, a), n.params && n.params.on) {
      const o = n.params.on;
      Object.keys(o).forEach((r) => {
        const m = o[r];
        m && n.on(r, m);
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
    const { params: a, slides: n, slidesGrid: i, slidesSizesGrid: u, size: o, activeIndex: r } = this;
    let m = 1;
    if (typeof a.slidesPerView == "number")
      return a.slidesPerView;
    if (!o)
      return m;
    if (a.centeredSlides) {
      let f = n[r] ? Math.ceil(n[r].swiperSlideSize ?? 0) : 0, c = !1;
      for (let T = r + 1; T < n.length; T += 1)
        n[T] && !c && (f += Math.ceil(n[T].swiperSlideSize ?? 0), m += 1, f > o && (c = !0));
      for (let T = r - 1; T >= 0; T -= 1)
        n[T] && !c && (f += n[T].swiperSlideSize ?? 0, m += 1, f > o && (c = !0));
    } else if (t === "current")
      for (let f = r + 1; f < n.length; f += 1)
        (s ? i[f] + u[f] - i[r] < o : i[f] - i[r] < o) && (m += 1);
    else
      for (let f = r - 1; f >= 0; f -= 1)
        i[r] - i[f] < o && (m += 1);
    return m;
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
    a.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach((u) => {
      u.complete && Oe(t, u);
    }), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();
    function n() {
      const u = t.rtlTranslate ? t.translate * -1 : t.translate, o = Math.min(Math.max(u, t.maxTranslate()), t.minTranslate());
      t.setTranslate(o), t.updateActiveIndex(), t.updateSlidesClasses();
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
    return t || (t = n === "horizontal" ? "vertical" : "horizontal"), t === n || t !== "horizontal" && t !== "vertical" || (a.el.classList.remove(`${a.params.containerModifierClass}${n}`), a.el.classList.add(`${a.params.containerModifierClass}${t}`), a.emitContainerClasses(), a.params.direction = t, a.slides.forEach((i) => {
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
    !r && s.params.createElements && (r = ne("div", s.params.wrapperClass), n.append(r), Q(n, `.${s.params.slideClass}`).forEach((f) => {
      r.append(f);
    }));
    const m = s.isElement ? n.parentNode.host : null;
    return Object.assign(s, {
      el: n,
      wrapperEl: r,
      slidesEl: s.isElement && !m.slideSlots ? m : r,
      hostEl: s.isElement ? m : n,
      mounted: !0,
      // RTL
      rtl: n.dir.toLowerCase() === "rtl" || ce(n, "direction") === "rtl",
      rtlTranslate: s.params.direction === "horizontal" && (n.dir.toLowerCase() === "rtl" || ce(n, "direction") === "rtl"),
      wrongRTL: ce(r, "display") === "-webkit-box"
    }), !0;
  }
  /**
   * Initialize slider
   */
  init(t) {
    const s = this;
    if (s.initialized || s.mount(t) === !1)
      return s;
    s.emit("beforeInit"), s.params.breakpoints && s.setBreakpoint(), s.addClasses(), s.updateSize(), s.updateSlides(), s.params.watchOverflow && s.checkOverflow(), s.params.grabCursor && s.enabled && s.setGrabCursor(), s.params.loop && s.virtual && s.params.virtual?.enabled ? s.slideTo((s.params.initialSlide ?? 0) + (s.virtual.slidesBefore ?? 0), 0, s.params.runCallbacksOnInit, !1, !0) : s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit, !1, !0), s.params.loop && s.loopCreate(void 0, !0), s.attachEvents();
    const n = [...s.el.querySelectorAll('[loading="lazy"]')];
    return s.isElement && n.push(...s.hostEl.querySelectorAll('[loading="lazy"]')), n.forEach((i) => {
      i.complete ? Oe(s, i) : i.addEventListener("load", (u) => {
        Oe(s, u.target);
      });
    }), Qe(s), s.initialized = !0, Qe(s), s.emit("init"), s.emit("afterInit"), s;
  }
  /**
   * Destroy slider instance and detach all events listeners
   *
   * @param deleteInstance Set it to false (by default it is true) to not to delete Swiper instance
   * @param cleanStyles Set it to true (by default it is true) and all custom styles will be removed from slides, wrapper and container.
   * Useful if you need to destroy Swiper and to init again with new options or in different direction
   */
  destroy(t = !0, s = !0) {
    const a = this, { params: n, el: i, wrapperEl: u, slides: o } = a;
    return typeof a.params > "u" || a.destroyed || (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), n.loop && a.loopDestroy(), s && (a.removeClasses(), i && typeof i != "string" && i.removeAttribute("style"), u && u.removeAttribute("style"), o && o.length && o.forEach((r) => {
      r.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), r.removeAttribute("style"), r.removeAttribute("data-swiper-slide-index");
    })), a.emit("destroy"), Object.keys(a.eventsListeners).forEach((r) => {
      a.off(r);
    }), t !== !1 && (a.el && typeof a.el != "string" && (a.el.swiper = null), Mt(a)), a.destroyed = !0), null;
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
    return vt;
  }
});
const ot = Fs, Xs = te.prototype;
Object.keys(ot).forEach((e) => {
  const t = ot[e];
  Object.keys(t).forEach((s) => {
    Xs[s] = t[s];
  });
});
te.use([hs, ms]);
const Us = ({ swiper: e, extendParams: t, on: s, emit: a }) => {
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
  const o = () => u ??= document.createElement("div");
  function r(l, g) {
    const v = i();
    if (v.cache && e.virtual.cache[g])
      return e.virtual.cache[g];
    let S;
    if (v.renderSlide) {
      const h = v.renderSlide.call(e, l, g);
      if (typeof h == "string") {
        const p = o();
        le(p, h), S = p.children[0];
      } else
        S = h;
    } else e.isElement ? S = ne("swiper-slide") : S = ne("div", e.params.slideClass);
    return S.setAttribute("data-swiper-slide-index", String(g)), v.renderSlide || le(S, l), v.cache && (e.virtual.cache[g] = S), S;
  }
  function m(l, g, v) {
    const { slidesPerGroup: S, centeredSlides: h, slidesPerView: p, loop: E, initialSlide: y } = e.params;
    if (g && !E && (y ?? 0) > 0)
      return;
    const { addSlidesBefore: I, addSlidesAfter: A, slidesPerViewAutoSlideSize: w } = i(), { from: _, to: P, slides: b, slidesGrid: M, offset: C } = e.virtual;
    e.params.cssMode || e.updateActiveIndex();
    const x = typeof v > "u" ? e.activeIndex || 0 : v;
    let R;
    e.rtlTranslate ? R = "right" : R = e.isHorizontal() ? "left" : "top";
    let L;
    if (p === "auto")
      if (w) {
        let X = e.size;
        X || (X = e.isHorizontal() ? e.el.getBoundingClientRect().width : e.el.getBoundingClientRect().height), L = Math.max(1, Math.ceil(X / w));
      } else
        L = 1;
    else
      L = p ?? 1;
    const N = S ?? 1;
    let k, z;
    h ? (k = Math.floor(L / 2) + N + A, z = Math.floor(L / 2) + N + I) : (k = L + (N - 1) + A, z = (E ? L : N) + I);
    let V = x - z, $ = x + k;
    E || (V = Math.max(V, 0), $ = Math.min($, b.length - 1));
    let Y = (e.slidesGrid[V] || 0) - (e.slidesGrid[0] || 0);
    E && x >= z ? (V -= z, h || (Y += e.slidesGrid[0])) : E && x < z && (V = -z, h && (Y += e.slidesGrid[0])), Object.assign(e.virtual, {
      from: V,
      to: $,
      offset: Y,
      slidesGrid: e.slidesGrid,
      slidesBefore: z,
      slidesAfter: k
    });
    function q() {
      e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), a("virtualUpdate");
    }
    if (_ === V && P === $ && !l) {
      e.slidesGrid !== M && Y !== C && e.slides.forEach((X) => {
        X.style.setProperty(R, `${Y - Math.abs(e.cssOverflowAdjustment())}px`);
      }), e.updateProgress(), a("virtualUpdate");
      return;
    }
    const O = i();
    if (O.renderExternal) {
      const X = [];
      for (let j = V; j <= $; j += 1)
        X.push(b[j]);
      O.renderExternal.call(e, {
        offset: Y,
        from: V,
        to: $,
        slides: X
      }), O.renderExternalUpdate ? q() : a("virtualUpdate");
      return;
    }
    const G = [], H = [], F = (X) => {
      let j = X;
      return X < 0 ? j = b.length + X : j >= b.length && (j = j - b.length), j;
    };
    if (l)
      e.slides.filter((X) => X.matches(`.${e.params.slideClass}, swiper-slide`)).forEach((X) => {
        X.remove();
      });
    else
      for (let X = _; X <= P; X += 1)
        if (X < V || X > $) {
          const j = F(X);
          e.slides.filter((J) => J.matches(`.${e.params.slideClass}[data-swiper-slide-index="${j}"], swiper-slide[data-swiper-slide-index="${j}"]`)).forEach((J) => {
            J.remove();
          });
        }
    const K = E ? -b.length : 0, ie = E ? b.length * 2 : b.length;
    for (let X = K; X < ie; X += 1)
      if (X >= V && X <= $) {
        const j = F(X);
        typeof P > "u" || l ? H.push(j) : (X > P && H.push(j), X < _ && G.push(j));
      }
    if (H.forEach((X) => {
      e.slidesEl.append(r(b[X], X));
    }), E)
      for (let X = G.length - 1; X >= 0; X -= 1) {
        const j = G[X];
        e.slidesEl.prepend(r(b[j], j));
      }
    else
      G.sort((X, j) => j - X), G.forEach((X) => {
        e.slidesEl.prepend(r(b[X], X));
      });
    Q(e.slidesEl, ".swiper-slide, swiper-slide").forEach((X) => {
      X.style.setProperty(R, `${Y - Math.abs(e.cssOverflowAdjustment())}px`);
    }), q();
  }
  function f(l) {
    if (l !== null && typeof l == "object" && "length" in l) {
      const g = l;
      for (let v = 0; v < g.length; v += 1)
        g[v] && e.virtual.slides.push(g[v]);
    } else
      e.virtual.slides.push(l);
    m(!0);
  }
  function c(l) {
    const g = e.activeIndex;
    let v = g + 1, S = 1;
    if (Array.isArray(l)) {
      for (let h = 0; h < l.length; h += 1)
        l[h] && e.virtual.slides.unshift(l[h]);
      v = g + l.length, S = l.length;
    } else
      e.virtual.slides.unshift(l);
    if (i().cache) {
      const h = e.virtual.cache, p = {};
      Object.keys(h).forEach((E) => {
        const y = h[Number(E)], I = y.getAttribute("data-swiper-slide-index");
        I && y.setAttribute("data-swiper-slide-index", String(parseInt(I, 10) + S)), p[parseInt(E, 10) + S] = y;
      }), e.virtual.cache = p;
    }
    m(!0), e.slideTo(v, 0);
  }
  function T(l) {
    if (typeof l > "u" || l === null)
      return;
    let g = e.activeIndex;
    const v = (S) => {
      Object.keys(e.virtual.cache).forEach((h) => {
        const p = Number(h);
        if (p > S) {
          const E = e.virtual.cache[p];
          e.virtual.cache[p - 1] = E, E.setAttribute("data-swiper-slide-index", String(p - 1)), delete e.virtual.cache[p];
        }
      });
    };
    if (Array.isArray(l))
      for (let S = l.length - 1; S >= 0; S -= 1)
        i().cache && (delete e.virtual.cache[l[S]], v(l[S])), e.virtual.slides.splice(l[S], 1), l[S] < g && (g -= 1), g = Math.max(g, 0);
    else
      i().cache && (delete e.virtual.cache[l], v(l)), e.virtual.slides.splice(l, 1), l < g && (g -= 1), g = Math.max(g, 0);
    m(!0), e.slideTo(g, 0);
  }
  function d() {
    e.virtual.slides = [], i().cache && (e.virtual.cache = {}), m(!0), e.slideTo(0, 0);
  }
  s("beforeInit", () => {
    if (!i().enabled)
      return;
    let l = !1;
    const g = e.passedParams.virtual;
    if (!g || typeof g != "object" || g.slides === void 0) {
      const S = [...e.slidesEl.children].filter((h) => h.matches(`.${e.params.slideClass}, swiper-slide`));
      S && S.length && (e.virtual.slides = [...S], l = !0, S.forEach((h, p) => {
        h.setAttribute("data-swiper-slide-index", String(p)), e.virtual.cache[p] = h, h.remove();
      }));
    }
    l || (e.virtual.slides = i().slides), e.classNames.push(`${e.params.containerModifierClass}virtual`), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0, m(!1, !0);
  }), s("setTranslate", () => {
    i().enabled && (e.params.cssMode && !e._immediateVirtual ? (clearTimeout(n), n = setTimeout(() => {
      m();
    }, 100)) : m());
  }), s("init update resize", () => {
    i().enabled && e.params.cssMode && fe(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`);
  }), Object.assign(e.virtual, {
    appendSlide: f,
    prependSlide: c,
    removeSlide: T,
    removeAllSlides: d,
    update: m
  });
}, qs = ({ swiper: e, extendParams: t, on: s, emit: a }) => {
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
    const { rtlTranslate: m } = e, f = "originalEvent" in r && r.originalEvent ? r.originalEvent : r, c = f.keyCode || f.charCode, T = n(), d = !!T.pageUpDown, l = d && c === 33, g = d && c === 34, v = c === 37, S = c === 39, h = c === 38, p = c === 40;
    if (!e.allowSlideNext && (e.isHorizontal() && S || e.isVertical() && p || g) || !e.allowSlidePrev && (e.isHorizontal() && v || e.isVertical() && h || l))
      return !1;
    if (f.shiftKey || f.altKey || f.ctrlKey || f.metaKey)
      return;
    const E = document.activeElement;
    if (E && (E.isContentEditable || E.nodeName && (E.nodeName.toLowerCase() === "input" || E.nodeName.toLowerCase() === "textarea")))
      return;
    if (T.onlyInViewport && (l || g || v || S || h || p)) {
      let I = !1;
      if (ue(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 && ue(e.el, `.${e.params.slideActiveClass}`).length === 0)
        return;
      const A = e.el, w = A.clientWidth, _ = A.clientHeight, P = window.innerWidth, b = window.innerHeight, M = ze(A);
      m && (M.left -= A.scrollLeft);
      const C = [
        [M.left, M.top],
        [M.left + w, M.top],
        [M.left, M.top + _],
        [M.left + w, M.top + _]
      ];
      for (let x = 0; x < C.length; x += 1) {
        const R = C[x];
        if (R[0] >= 0 && R[0] <= P && R[1] >= 0 && R[1] <= b) {
          if (R[0] === 0 && R[1] === 0)
            continue;
          I = !0;
        }
      }
      if (!I)
        return;
    }
    const y = T.speed;
    e.isHorizontal() ? ((l || g || v || S) && f.cancelable && f.preventDefault(), ((g || S) && !m || (l || v) && m) && e.slideNext(y), ((l || v) && !m || (g || S) && m) && e.slidePrev(y)) : ((l || g || h || p) && f.cancelable && f.preventDefault(), (g || p) && e.slideNext(y), (l || h) && e.slidePrev(y)), a("keyPress", c);
  }
  function u() {
    e.keyboard.enabled || (document.addEventListener("keydown", i), e.keyboard.enabled = !0);
  }
  function o() {
    e.keyboard.enabled && (document.removeEventListener("keydown", i), e.keyboard.enabled = !1);
  }
  e.keyboard = {
    enabled: !1,
    enable: u,
    disable: o
  }, s("init", () => {
    n().enabled && u();
  }), s("destroy", () => {
    e.keyboard.enabled && o();
  });
}, js = ({ swiper: e, extendParams: t, on: s, emit: a }) => {
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
  let n, i = ae(), u, o = !1;
  const r = [];
  function m() {
    return e.params.mousewheel;
  }
  function f(p) {
    const A = p;
    let w = 0, _ = 0, P = 0, b = 0;
    return A.detail !== void 0 && (_ = A.detail), A.wheelDelta !== void 0 && (_ = -A.wheelDelta / 120), A.wheelDeltaY !== void 0 && (_ = -A.wheelDeltaY / 120), A.wheelDeltaX !== void 0 && (w = -A.wheelDeltaX / 120), A.axis !== void 0 && A.HORIZONTAL_AXIS !== void 0 && A.axis === A.HORIZONTAL_AXIS && (w = _, _ = 0), P = w * 10, b = _ * 10, A.deltaY !== void 0 && (b = A.deltaY), A.deltaX !== void 0 && (P = A.deltaX), A.shiftKey && !P && (P = b, b = 0), (P || b) && A.deltaMode && (A.deltaMode === 1 ? (P *= 40, b *= 40) : (P *= 800, b *= 800)), P && !w && (w = P < 1 ? -1 : 1), b && !_ && (_ = b < 1 ? -1 : 1), {
      spinX: w,
      spinY: _,
      pixelX: P,
      pixelY: b
    };
  }
  function c() {
    e.enabled && (o = !0);
  }
  function T() {
    e.enabled && (o = !1);
  }
  function d(p) {
    const E = m();
    return E.thresholdDelta && p.delta < E.thresholdDelta || E.thresholdTime && ae() - i < E.thresholdTime ? !1 : p.delta >= 6 && ae() - i < 60 ? !0 : (p.direction < 0 ? (!e.isEnd || e.params.loop) && !e.animating && (e.slideNext(), a("scroll", p.raw)) : (!e.isBeginning || e.params.loop) && !e.animating && (e.slidePrev(), a("scroll", p.raw)), i = new window.Date().getTime(), !1);
  }
  function l(p) {
    const E = m();
    if (p.direction < 0) {
      if (e.isEnd && !e.params.loop && E.releaseOnEdges)
        return !0;
    } else if (e.isBeginning && !e.params.loop && E.releaseOnEdges)
      return !0;
    return !1;
  }
  function g(p) {
    let E = "originalEvent" in p && p.originalEvent ? p.originalEvent : p, y = !0;
    if (!e.enabled)
      return !1;
    const I = m();
    if (p.target.closest(`.${I.noMousewheelClass}`))
      return !1;
    e.params.cssMode && E.preventDefault();
    let A = e.el;
    I.eventsTarget !== "container" && (A = document.querySelector(I.eventsTarget));
    const w = A && A.contains(E.target);
    if (!o && !w && !I.releaseOnEdges)
      return !0;
    let _ = 0;
    const P = e.rtlTranslate ? -1 : 1, b = f(E);
    if (I.forceToAxis)
      if (e.isHorizontal())
        if (Math.abs(b.pixelX) > Math.abs(b.pixelY))
          _ = -b.pixelX * P;
        else
          return !0;
      else if (Math.abs(b.pixelY) > Math.abs(b.pixelX))
        _ = -b.pixelY;
      else
        return !0;
    else
      _ = Math.abs(b.pixelX) > Math.abs(b.pixelY) ? -b.pixelX * P : -b.pixelY;
    if (_ === 0)
      return !0;
    I.invert && (_ = -_);
    let M = e.getTranslate() + _ * (I.sensitivity ?? 1);
    M >= e.minTranslate() && (M = e.minTranslate()), M <= e.maxTranslate() && (M = e.maxTranslate()), y = e.params.loop ? !0 : !(M === e.minTranslate() || M === e.maxTranslate()), y && e.params.nested && E.stopPropagation();
    const C = e.params.freeMode;
    if (!e.params.freeMode || !C?.enabled) {
      const x = {
        time: ae(),
        delta: Math.abs(_),
        direction: Math.sign(_),
        raw: p
      };
      r.length >= 2 && r.shift();
      const R = r.length ? r[r.length - 1] : void 0;
      if (r.push(x), R ? (x.direction !== R.direction || x.delta > R.delta || x.time > R.time + 150) && d(x) : d(x), l(x))
        return !0;
    } else {
      const x = {
        time: ae(),
        delta: Math.abs(_),
        direction: Math.sign(_)
      }, R = u && x.time < u.time + 500 && x.delta <= u.delta && x.direction === u.direction;
      if (!R) {
        u = void 0;
        let L = e.getTranslate() + _ * (I.sensitivity ?? 1);
        const N = e.isBeginning, k = e.isEnd;
        if (L >= e.minTranslate() && (L = e.minTranslate()), L <= e.maxTranslate() && (L = e.maxTranslate()), e.setTransition(0), e.setTranslate(L), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses(), (!N && e.isBeginning || !k && e.isEnd) && e.updateSlidesClasses(), e.params.loop && e.loopFix({
          direction: x.direction < 0 ? "next" : "prev",
          byMousewheel: !0
        }), C?.sticky) {
          clearTimeout(n), n = void 0, r.length >= 15 && r.shift();
          const V = r.length ? r[r.length - 1] : void 0, $ = r[0];
          if (r.push(x), V && (x.delta > V.delta || x.direction !== V.direction))
            r.splice(0);
          else if (r.length >= 15 && $ && x.time - $.time < 500 && $.delta - x.delta >= 1 && x.delta <= 6) {
            const Y = _ > 0 ? 0.8 : 0.2;
            u = x, r.splice(0), n = Se(() => {
              e.destroyed || !e.params || e.slideToClosest(e.params.speed, !0, void 0, Y);
            }, 0);
          }
          n || (n = Se(() => {
            if (e.destroyed || !e.params)
              return;
            const Y = 0.5;
            u = x, r.splice(0), e.slideToClosest(e.params.speed, !0, void 0, Y);
          }, 500));
        }
        R || a("scroll", E);
        const z = e.params.autoplay;
        if (e.params.autoplay && z?.disableOnInteraction && e.autoplay.stop(), I.releaseOnEdges && (L === e.minTranslate() || L === e.maxTranslate()))
          return !0;
      }
    }
    return E.cancelable && E.preventDefault(), !1;
  }
  function v(p) {
    const E = m();
    let y = e.el;
    E.eventsTarget !== "container" && (y = document.querySelector(E.eventsTarget)), y[p]("mouseenter", c), y[p]("mouseleave", T), y[p]("wheel", g);
  }
  function S() {
    return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", g), !0) : e.mousewheel.enabled ? !1 : (v("addEventListener"), e.mousewheel.enabled = !0, !0);
  }
  function h() {
    return e.params.cssMode ? (e.wrapperEl.addEventListener("wheel", g), !0) : e.mousewheel.enabled ? (v("removeEventListener"), e.mousewheel.enabled = !1, !0) : !1;
  }
  s("init", () => {
    const p = m();
    !p.enabled && e.params.cssMode && h(), p.enabled && S();
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
      let o = Q(e.el, `.${a[u]}`)[0];
      o || (o = ne("div", a[u]), o.className = a[u], e.el.append(o)), n[u] = o, i[u] = o;
    }
  }), n;
}
const dt = '<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>', Ks = ({ swiper: e, extendParams: t, on: s, emit: a }) => {
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
    const v = n();
    U(l).forEach((h) => {
      h && (h.classList[g ? "add" : "remove"](...v.disabledClass.split(" ")), h.tagName === "BUTTON" && (h.disabled = g), e.params.watchOverflow && e.enabled && h.classList[e.isLocked ? "add" : "remove"](v.lockClass));
    });
  }
  function o() {
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
  function m(l) {
    l.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), a("navigationNext"));
  }
  function f() {
    e.params.navigation = st(e, e.originalParams.navigation, e.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    });
    const l = n();
    if (!(l.nextEl || l.prevEl))
      return;
    const g = i(l.nextEl), v = i(l.prevEl);
    Object.assign(e.navigation, {
      nextEl: g,
      prevEl: v
    });
    const S = U(g), h = U(v), p = (E, y) => {
      if (E) {
        if (l.addIcons && E.matches(".swiper-button-next,.swiper-button-prev") && !E.querySelector("svg")) {
          const I = document.createElement("div");
          le(I, dt);
          const A = I.querySelector("svg");
          A && E.appendChild(A), I.remove();
        }
        E.addEventListener("click", y === "next" ? m : r);
      }
      !e.enabled && E && E.classList.add(...l.lockClass.split(" "));
    };
    S.forEach((E) => p(E, "next")), h.forEach((E) => p(E, "prev"));
  }
  function c() {
    const l = n(), { nextEl: g, prevEl: v } = e.navigation, S = U(g), h = U(v), p = (E, y) => {
      E.removeEventListener("click", y === "next" ? m : r), E.classList.remove(...l.disabledClass.split(" "));
    };
    S.forEach((E) => p(E, "next")), h.forEach((E) => p(E, "prev"));
  }
  s("init", () => {
    n().enabled === !1 ? d() : (f(), o());
  }), s("toEdge fromEdge lock unlock", () => {
    o();
  }), s("destroy", () => {
    c();
  }), s("enable disable", () => {
    const l = n(), { nextEl: g, prevEl: v } = e.navigation, S = U(g), h = U(v);
    if (e.enabled) {
      o();
      return;
    }
    [...S, ...h].filter((p) => !!p).forEach((p) => p.classList.add(l.lockClass));
  }), s("click", (l, g) => {
    const v = n(), { nextEl: S, prevEl: h } = e.navigation, p = U(S), E = U(h), y = g.target;
    let I = E.includes(y) || p.includes(y);
    if (e.isElement && !I) {
      const A = g.composedPath ? g.composedPath() : [];
      A.length && (I = A.find((w) => p.includes(w) || E.includes(w)));
    }
    if (v.hideOnClick && !I) {
      if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === y || e.pagination.el.contains(y)))
        return;
      let A;
      p.length ? A = p[0].classList.contains(v.hiddenClass) : E.length && (A = E[0].classList.contains(v.hiddenClass)), a(A === !0 ? "navigationShow" : "navigationHide"), [...p, ...E].filter((w) => !!w).forEach((w) => w.classList.toggle(v.hiddenClass));
    }
  });
  const T = () => {
    const l = n();
    e.el.classList.remove(...l.navigationDisabledClass.split(" ")), f(), o();
  }, d = () => {
    const l = n();
    e.el.classList.add(...l.navigationDisabledClass.split(" ")), c();
  };
  Object.assign(e.navigation, {
    enable: T,
    disable: d,
    update: o,
    init: f,
    destroy: c
  });
};
function oe(e = "") {
  return `.${e.trim().replace(/([.:!+/()[\]#>~*^$|=,'"@{}\\])/g, "\\$1").replace(/ /g, ".")}`;
}
const Zs = (e) => !!e.virtual && !!e.params.virtual?.enabled, Qs = (e) => !!e.params.freeMode?.enabled, ct = (e) => {
  if (Zs(e))
    return e.virtual.slides.length;
  const t = e.params.grid?.rows;
  return e.grid && t && t > 1 ? e.slides.length / Math.ceil(t) : e.slides.length;
}, Js = ({ swiper: e, extendParams: t, on: s, emit: a }) => {
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
  function o() {
    return e.params.pagination;
  }
  function r() {
    return !o().el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0;
  }
  function m(h, p) {
    const { bulletActiveClass: E } = o();
    if (!h)
      return;
    let y = h[`${p === "prev" ? "previous" : "next"}ElementSibling`];
    y && (y.classList.add(`${E}-${p}`), y = y[`${p === "prev" ? "previous" : "next"}ElementSibling`], y && y.classList.add(`${E}-${p}-${p}`));
  }
  function f(h, p, E) {
    if (h = h % E, p = p % E, p === h + 1)
      return "next";
    if (p === h - 1)
      return "previous";
  }
  function c(h) {
    const E = h.target.closest(oe(o().bulletClass));
    if (!E)
      return;
    h.preventDefault();
    const y = (Le(E) ?? 0) * (e.params.slidesPerGroup ?? 1);
    if (e.params.loop) {
      if (e.realIndex === y)
        return;
      const I = f(e.realIndex, y, e.slides.length);
      I === "next" ? e.slideNext() : I === "previous" ? e.slidePrev() : e.slideToLoop(y);
    } else
      e.slideTo(y);
  }
  function T() {
    const h = e.rtl, p = o();
    if (r())
      return;
    const E = U(e.pagination.el);
    let y, I;
    const A = ct(e), w = e.params.loop ? Math.ceil(A / (e.params.slidesPerGroup ?? 1)) : e.snapGrid.length;
    if (e.params.loop ? (I = e.previousRealIndex || 0, y = (e.params.slidesPerGroup ?? 1) > 1 ? Math.floor(e.realIndex / (e.params.slidesPerGroup ?? 1)) : e.realIndex) : typeof e.snapIndex < "u" ? (y = e.snapIndex, I = e.previousSnapIndex) : (I = e.previousIndex || 0, y = e.activeIndex || 0), p.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
      const _ = e.pagination.bullets;
      let P = 0, b = 0, M = 0;
      if (p.dynamicBullets) {
        i = Ze(_[0], e.isHorizontal() ? "width" : "height");
        const C = e.isHorizontal() ? "width" : "height";
        E.forEach((x) => {
          x.style[C] = `${(i ?? 0) * (p.dynamicMainBullets + 4)}px`;
        }), p.dynamicMainBullets > 1 && I !== void 0 && (u += y - (I || 0), u > p.dynamicMainBullets - 1 ? u = p.dynamicMainBullets - 1 : u < 0 && (u = 0)), P = Math.max(y - u, 0), b = P + (Math.min(_.length, p.dynamicMainBullets) - 1), M = (b + P) / 2;
      }
      if (_.forEach((C) => {
        const x = [
          "",
          "-next",
          "-next-next",
          "-prev",
          "-prev-prev",
          "-main"
        ].map((R) => `${p.bulletActiveClass}${R}`).flatMap((R) => typeof R == "string" && R.includes(" ") ? R.split(" ") : [R]);
        C.classList.remove(...x);
      }), E.length > 1)
        _.forEach((C) => {
          const x = Le(C);
          x === y ? C.classList.add(...p.bulletActiveClass.split(" ")) : e.isElement && C.setAttribute("part", "bullet"), p.dynamicBullets && x !== void 0 && (x >= P && x <= b && C.classList.add(...`${p.bulletActiveClass}-main`.split(" ")), x === P && m(C, "prev"), x === b && m(C, "next"));
        });
      else {
        const C = _[y];
        if (C && C.classList.add(...p.bulletActiveClass.split(" ")), e.isElement && _.forEach((x, R) => {
          x.setAttribute("part", R === y ? "bullet-active" : "bullet");
        }), p.dynamicBullets) {
          const x = _[P], R = _[b];
          for (let L = P; L <= b; L += 1)
            _[L] && _[L].classList.add(...`${p.bulletActiveClass}-main`.split(" "));
          m(x, "prev"), m(R, "next");
        }
      }
      if (p.dynamicBullets) {
        const C = Math.min(_.length, p.dynamicMainBullets + 4), x = ((i ?? 0) * C - (i ?? 0)) / 2 - M * (i ?? 0), R = h ? "right" : "left", L = e.isHorizontal() ? R : "top";
        _.forEach((N) => {
          N.style[L] = `${x}px`;
        });
      }
    }
    E.forEach((_, P) => {
      if (p.type === "fraction" && (_.querySelectorAll(oe(p.currentClass)).forEach((b) => {
        b.textContent = String(p.formatFractionCurrent(y + 1));
      }), _.querySelectorAll(oe(p.totalClass)).forEach((b) => {
        b.textContent = String(p.formatFractionTotal(w));
      })), p.type === "progressbar") {
        let b;
        p.progressbarOpposite ? b = e.isHorizontal() ? "vertical" : "horizontal" : b = e.isHorizontal() ? "horizontal" : "vertical";
        const M = (y + 1) / w;
        let C = 1, x = 1;
        b === "horizontal" ? C = M : x = M, _.querySelectorAll(oe(p.progressbarFillClass)).forEach((R) => {
          R.style.transform = `translate3d(0,0,0) scaleX(${C}) scaleY(${x})`, R.style.transitionDuration = `${e.params.speed}ms`;
        });
      }
      p.type === "custom" && p.renderCustom ? (le(_, p.renderCustom(e, y + 1, w)), P === 0 && a("paginationRender", _)) : (P === 0 && a("paginationRender", _), a("paginationUpdate", _)), e.params.watchOverflow && e.enabled && _.classList[e.isLocked ? "add" : "remove"](p.lockClass);
    });
  }
  function d() {
    const h = o();
    if (r())
      return;
    const p = ct(e), E = U(e.pagination.el);
    let y = "";
    if (h.type === "bullets") {
      let I = e.params.loop ? Math.ceil(p / (e.params.slidesPerGroup ?? 1)) : e.snapGrid.length;
      e.params.freeMode && Qs(e) && I > p && (I = p);
      for (let A = 0; A < I; A += 1)
        h.renderBullet ? y += h.renderBullet.call(e, A, h.bulletClass) : y += `<${h.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${h.bulletClass}"></${h.bulletElement}>`;
    }
    h.type === "fraction" && (h.renderFraction ? y = h.renderFraction.call(e, h.currentClass, h.totalClass) : y = `<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`), h.type === "progressbar" && (h.renderProgressbar ? y = h.renderProgressbar.call(e, h.progressbarFillClass) : y = `<span class="${h.progressbarFillClass}"></span>`), e.pagination.bullets = [], E.forEach((I) => {
      h.type !== "custom" && le(I, y || ""), h.type === "bullets" && e.pagination.bullets.push(...Array.from(I.querySelectorAll(oe(h.bulletClass))));
    }), h.type !== "custom" && a("paginationRender", E[0]);
  }
  function l() {
    e.params.pagination = st(e, e.originalParams.pagination, e.params.pagination, { el: "swiper-pagination" });
    const h = o();
    if (!h.el)
      return;
    let p;
    if (typeof h.el == "string" && e.isElement && (p = e.el.querySelector(h.el)), !p && typeof h.el == "string" && (p = [...document.querySelectorAll(h.el)]), p || (p = h.el), !p || Array.isArray(p) && p.length === 0)
      return;
    if (e.params.uniqueNavElements && typeof h.el == "string" && Array.isArray(p) && p.length > 1 && (p = [...e.el.querySelectorAll(h.el)], p.length > 1)) {
      const y = p.find((I) => ue(I, ".swiper")[0] === e.el);
      y && (p = y);
    }
    Array.isArray(p) && p.length === 1 && (p = p[0]), Object.assign(e.pagination, {
      el: p
    }), U(p).forEach((y) => {
      h.type === "bullets" && h.clickable && y.classList.add(...(h.clickableClass || "").split(" ")), y.classList.add(h.modifierClass + h.type), y.classList.add(e.isHorizontal() ? h.horizontalClass : h.verticalClass), h.type === "bullets" && h.dynamicBullets && (y.classList.add(`${h.modifierClass}${h.type}-dynamic`), u = 0, h.dynamicMainBullets < 1 && (h.dynamicMainBullets = 1)), h.type === "progressbar" && h.progressbarOpposite && y.classList.add(h.progressbarOppositeClass), h.clickable && y.addEventListener("click", c), e.enabled || y.classList.add(h.lockClass);
    });
  }
  function g() {
    const h = o();
    if (r())
      return;
    const p = e.pagination.el;
    p && U(p).forEach((y) => {
      y.classList.remove(h.hiddenClass), y.classList.remove(h.modifierClass + h.type), y.classList.remove(e.isHorizontal() ? h.horizontalClass : h.verticalClass), h.clickable && (y.classList.remove(...(h.clickableClass || "").split(" ")), y.removeEventListener("click", c));
    }), e.pagination.bullets && e.pagination.bullets.forEach((E) => E.classList.remove(...h.bulletActiveClass.split(" ")));
  }
  s("changeDirection", () => {
    if (!e.pagination || !e.pagination.el)
      return;
    const h = o();
    U(e.pagination.el).forEach((E) => {
      E.classList.remove(h.horizontalClass, h.verticalClass), E.classList.add(e.isHorizontal() ? h.horizontalClass : h.verticalClass);
    });
  }), s("init", () => {
    o().enabled === !1 ? S() : (l(), d(), T());
  }), s("activeIndexChange", () => {
    typeof e.snapIndex > "u" && T();
  }), s("snapIndexChange", () => {
    T();
  }), s("snapGridLengthChange", () => {
    d(), T();
  }), s("destroy", () => {
    g();
  }), s("enable disable", () => {
    const { el: h } = e.pagination;
    if (h) {
      const p = o();
      U(h).forEach((y) => y.classList[e.enabled ? "remove" : "add"](p.lockClass));
    }
  }), s("lock unlock", () => {
    T();
  }), s("click", (h, p) => {
    const E = p.target, y = U(e.pagination.el), I = o();
    if (I.el && I.hideOnClick && y && y.length > 0 && !E.classList.contains(I.bulletClass)) {
      if (e.navigation && (e.navigation.nextEl && E === e.navigation.nextEl || e.navigation.prevEl && E === e.navigation.prevEl))
        return;
      const A = y[0].classList.contains(I.hiddenClass);
      a(A === !0 ? "paginationShow" : "paginationHide"), y.forEach((w) => w.classList.toggle(I.hiddenClass));
    }
  });
  const v = () => {
    const h = o();
    e.el.classList.remove(h.paginationDisabledClass);
    const { el: p } = e.pagination;
    p && U(p).forEach((y) => y.classList.remove(h.paginationDisabledClass)), l(), d(), T();
  }, S = () => {
    const h = o();
    e.el.classList.add(h.paginationDisabledClass);
    const { el: p } = e.pagination;
    p && U(p).forEach((y) => y.classList.add(h.paginationDisabledClass)), g();
  };
  Object.assign(e.pagination, {
    enable: v,
    disable: S,
    render: d,
    update: T,
    init: l,
    destroy: g
  });
}, ea = ({ swiper: e, extendParams: t, on: s, emit: a }) => {
  let n = !1, i = null, u = null, o = 0, r = 0, m = 0, f = 0;
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
  function c() {
    return e.params.scrollbar;
  }
  function T() {
    const b = c();
    if (!b.el || !e.scrollbar.el)
      return;
    const { scrollbar: M, rtlTranslate: C } = e, { dragEl: x, el: R } = M, L = e.params.loop ? e.progressLoop ?? 0 : e.progress;
    let N = r, k = (m - r) * L;
    C ? (k = -k, k > 0 ? (N = r - k, k = 0) : -k + r > m && (N = m + k)) : k < 0 ? (N = r + k, k = 0) : k + r > m && (N = m - k), e.isHorizontal() ? (x.style.transform = `translate3d(${k}px, 0, 0)`, x.style.width = `${N}px`) : (x.style.transform = `translate3d(0px, ${k}px, 0)`, x.style.height = `${N}px`), b.hide && (i && clearTimeout(i), R.style.opacity = "1", i = setTimeout(() => {
      R.style.opacity = "0", R.style.transitionDuration = "400ms";
    }, 1e3));
  }
  function d(b) {
    !c().el || !e.scrollbar.el || (e.scrollbar.dragEl.style.transitionDuration = `${b}ms`);
  }
  function l() {
    const b = c();
    if (!b.el || !e.scrollbar.el)
      return;
    const { scrollbar: M } = e, { dragEl: C, el: x } = M;
    C.style.width = "", C.style.height = "", m = e.isHorizontal() ? x.offsetWidth : x.offsetHeight, f = e.size / (e.virtualSize + (e.params.slidesOffsetBefore ?? 0) - (e.params.centeredSlides ? e.snapGrid[0] : 0)), b.dragSize === "auto" ? r = m * f : r = parseInt(String(b.dragSize), 10), e.isHorizontal() ? C.style.width = `${r}px` : C.style.height = `${r}px`, f >= 1 ? x.style.display = "none" : x.style.display = "", b.hide && (x.style.opacity = "0"), e.params.watchOverflow && e.enabled && M.el.classList[e.isLocked ? "add" : "remove"](b.lockClass);
  }
  function g(b) {
    return e.isHorizontal() ? b.clientX ?? b.touches?.[0]?.clientX ?? 0 : b.clientY ?? b.touches?.[0]?.clientY ?? 0;
  }
  function v(b) {
    const { scrollbar: M, rtlTranslate: C } = e, { el: x } = M;
    let R;
    R = (g(b) - ze(x)[e.isHorizontal() ? "left" : "top"] - (o !== null ? o : r / 2)) / (m - r), R = Math.max(Math.min(R, 1), 0), C && (R = 1 - R);
    const L = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * R;
    e.updateProgress(L), e.setTranslate(L), e.updateActiveIndex(), e.updateSlidesClasses();
  }
  function S(b) {
    const M = c(), { scrollbar: C, wrapperEl: x } = e, { el: R, dragEl: L } = C;
    n = !0, o = b.target === L ? g(b) - b.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null, b.preventDefault(), b.stopPropagation(), x.style.transitionDuration = "100ms", L.style.transitionDuration = "100ms", v(b), u && clearTimeout(u), R.style.transitionDuration = "0ms", M.hide && (R.style.opacity = "1"), e.params.cssMode && (e.wrapperEl.style.scrollSnapType = "none"), a("scrollbarDragStart", b);
  }
  function h(b) {
    const { scrollbar: M, wrapperEl: C } = e, { el: x, dragEl: R } = M;
    n && (b.cancelable && b.preventDefault(), v(b), C.style.transitionDuration = "0ms", x.style.transitionDuration = "0ms", R.style.transitionDuration = "0ms", a("scrollbarDragMove", b));
  }
  function p(b) {
    const M = c(), { scrollbar: C, wrapperEl: x } = e, { el: R } = C;
    n && (n = !1, e.params.cssMode && (e.wrapperEl.style.scrollSnapType = "", x.style.transitionDuration = ""), M.hide && (u && clearTimeout(u), u = Se(() => {
      R.style.opacity = "0", R.style.transitionDuration = "400ms";
    }, 1e3)), a("scrollbarDragEnd", b), M.snapOnRelease && e.slideToClosest());
  }
  function E(b) {
    const { scrollbar: M, params: C } = e, x = M.el;
    if (!x)
      return;
    const R = C.passiveListeners ? { passive: !1, capture: !1 } : !1, L = C.passiveListeners ? { passive: !0, capture: !1 } : !1, N = b === "on" ? "addEventListener" : "removeEventListener";
    x[N]("pointerdown", S, R), document[N]("pointermove", h, R), document[N]("pointerup", p, L);
  }
  function y() {
    !c().el || !e.scrollbar.el || E("on");
  }
  function I() {
    !c().el || !e.scrollbar.el || E("off");
  }
  function A() {
    const { scrollbar: b, el: M } = e;
    e.params.scrollbar = st(e, e.originalParams.scrollbar, e.params.scrollbar, { el: "swiper-scrollbar" });
    const C = c();
    if (!C.el)
      return;
    let x;
    if (typeof C.el == "string" && e.isElement && (x = e.el.querySelector(C.el)), !x && typeof C.el == "string") {
      if (x = document.querySelectorAll(C.el), !x.length)
        return;
    } else x || (x = C.el);
    e.params.uniqueNavElements && typeof C.el == "string" && x.length > 1 && M.querySelectorAll(C.el).length === 1 && (x = M.querySelector(C.el)), x.length > 0 && (x = x[0]);
    const R = x;
    R.classList.add(e.isHorizontal() ? C.horizontalClass : C.verticalClass);
    let L = null;
    R && (L = R.querySelector(oe(C.dragClass)), L || (L = ne("div", C.dragClass), R.append(L))), Object.assign(b, {
      el: R,
      dragEl: L
    }), C.draggable && y(), R && R.classList[e.enabled ? "remove" : "add"](...de(C.lockClass));
  }
  function w() {
    const b = c(), M = e.scrollbar.el;
    M && M.classList.remove(...de(e.isHorizontal() ? b.horizontalClass : b.verticalClass)), I();
  }
  s("changeDirection", () => {
    if (!e.scrollbar || !e.scrollbar.el)
      return;
    const b = c();
    U(e.scrollbar.el).forEach((C) => {
      C.classList.remove(b.horizontalClass, b.verticalClass), C.classList.add(e.isHorizontal() ? b.horizontalClass : b.verticalClass);
    });
  }), s("init", () => {
    c().enabled === !1 ? P() : (A(), l(), T());
  }), s("update resize observerUpdate lock unlock changeDirection", () => {
    l();
  }), s("setTranslate", () => {
    T();
  }), s("setTransition", (b, M) => {
    d(M);
  }), s("enable disable", () => {
    const { el: b } = e.scrollbar;
    b && b.classList[e.enabled ? "remove" : "add"](...de(c().lockClass));
  }), s("destroy", () => {
    w();
  });
  const _ = () => {
    const b = c();
    e.el.classList.remove(...de(b.scrollbarDisabledClass)), e.scrollbar.el && e.scrollbar.el.classList.remove(...de(b.scrollbarDisabledClass)), A(), l(), T();
  }, P = () => {
    const b = c();
    e.el.classList.add(...de(b.scrollbarDisabledClass)), e.scrollbar.el && e.scrollbar.el.classList.add(...de(b.scrollbarDisabledClass)), w();
  };
  Object.assign(e.scrollbar, {
    enable: _,
    disable: P,
    updateSize: l,
    setTranslate: T,
    init: A,
    destroy: w
  });
}, ta = ({ swiper: e, extendParams: t, on: s }) => {
  t({
    parallax: {
      enabled: !1
    }
  });
  function a() {
    return e.params.parallax;
  }
  const n = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]", i = (r, m) => {
    const { rtl: f } = e, c = f ? -1 : 1, T = r.getAttribute("data-swiper-parallax") || "0";
    let d = r.getAttribute("data-swiper-parallax-x"), l = r.getAttribute("data-swiper-parallax-y");
    const g = r.getAttribute("data-swiper-parallax-scale"), v = r.getAttribute("data-swiper-parallax-opacity"), S = r.getAttribute("data-swiper-parallax-rotate");
    if (d || l ? (d = d || "0", l = l || "0") : e.isHorizontal() ? (d = T, l = "0") : (l = T, d = "0"), d.indexOf("%") >= 0 ? d = `${parseInt(d, 10) * m * c}%` : d = `${Number(d) * m * c}px`, l.indexOf("%") >= 0 ? l = `${parseInt(l, 10) * m}%` : l = `${Number(l) * m}px`, typeof v < "u" && v !== null) {
      const p = Number(v), E = p - (p - 1) * (1 - Math.abs(m));
      r.style.opacity = String(E);
    }
    let h = `translate3d(${d}, ${l}, 0px)`;
    if (typeof g < "u" && g !== null) {
      const p = Number(g), E = p - (p - 1) * (1 - Math.abs(m));
      h += ` scale(${E})`;
    }
    if (S && typeof S < "u" && S !== null) {
      const p = Number(S) * m * -1;
      h += ` rotate(${p}deg)`;
    }
    r.style.transform = h;
  }, u = () => {
    const { el: r, slides: m, progress: f, snapGrid: c } = e, T = Q(r, n);
    e.isElement && T.push(...Q(e.hostEl, n)), T.forEach((d) => {
      i(d, f);
    }), m.forEach((d, l) => {
      let g = d.progress ?? 0;
      (e.params.slidesPerGroup ?? 1) > 1 && e.params.slidesPerView !== "auto" && (g += Math.ceil(l / 2) - f * (c.length - 1)), g = Math.min(Math.max(g, -1), 1), d.querySelectorAll(`${n}, [data-swiper-parallax-rotate]`).forEach((S) => {
        i(S, g);
      });
    });
  }, o = (r = e.params.speed ?? 300) => {
    const { el: m, hostEl: f } = e, c = [...m.querySelectorAll(n)];
    e.isElement && c.push(...f.querySelectorAll(n)), c.forEach((T) => {
      const d = T.getAttribute("data-swiper-parallax-duration");
      let l = (d ? parseInt(d, 10) : 0) || r;
      r === 0 && (l = 0), T.style.transitionDuration = `${l}ms`;
    });
  };
  s("beforeInit", () => {
    a().enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
  }), s("init", () => {
    a().enabled && u();
  }), s("setTranslate", () => {
    a().enabled && u();
  }), s("setTransition", (r, m) => {
    a().enabled && o(m);
  });
}, sa = ({ swiper: e, extendParams: t, on: s, emit: a }) => {
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
  let i = 1, u = !1, o = !1, r = { x: 0, y: 0 };
  const m = -3;
  let f = !1, c = !1;
  const T = [], d = {
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
  let v = 1;
  Object.defineProperty(e.zoom, "scale", {
    get() {
      return v;
    },
    set(O) {
      if (v !== O) {
        const G = d.imageEl, H = d.slideEl;
        a("zoomChange", O, G, H);
      }
      v = O;
    }
  });
  function S() {
    if (T.length < 2)
      return 1;
    const O = T[0].pageX, G = T[0].pageY, H = T[1].pageX, F = T[1].pageY;
    return Math.sqrt((H - O) ** 2 + (F - G) ** 2);
  }
  function h() {
    const O = n(), G = d.imageWrapEl?.getAttribute("data-swiper-zoom"), H = G != null ? Number(G) : O.maxRatio, F = d.imageEl;
    if (O.limitToOriginalSize && F && F.naturalWidth) {
      const K = F.naturalWidth / F.offsetWidth;
      return Math.min(K, H);
    }
    return H;
  }
  function p() {
    if (T.length < 2 || !d.imageEl)
      return [null, null];
    const O = d.imageEl.getBoundingClientRect();
    return [
      (T[0].pageX + (T[1].pageX - T[0].pageX) / 2 - O.x - window.scrollX) / i,
      (T[0].pageY + (T[1].pageY - T[0].pageY) / 2 - O.y - window.scrollY) / i
    ];
  }
  function E() {
    return e.isElement ? "swiper-slide" : `.${e.params.slideClass}`;
  }
  function y(O) {
    const G = E(), H = O.target;
    return H ? !!(H.matches(G) || e.slides.filter((F) => F.contains(H)).length > 0) : !1;
  }
  function I(O) {
    const G = `.${n().containerClass}`, H = O.target;
    return H ? !!(H.matches(G) || [...e.hostEl.querySelectorAll(G)].filter((F) => F.contains(H)).length > 0) : !1;
  }
  function A(O) {
    if (O.pointerType === "mouse" && T.splice(0, T.length), !y(O))
      return;
    const G = n();
    if (f = !1, c = !1, T.push(O), !(T.length < 2)) {
      if (f = !0, d.scaleStart = S(), !d.slideEl) {
        const H = O.target;
        d.slideEl = H?.closest(`.${e.params.slideClass}, swiper-slide`) ?? void 0, d.slideEl || (d.slideEl = e.slides[e.activeIndex]);
        let F = d.slideEl?.querySelector(`.${G.containerClass}`) ?? null;
        if (F && (F = F.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0] ?? null), d.imageEl = F ?? void 0, F ? d.imageWrapEl = ue(F, `.${G.containerClass}`)[0] ?? void 0 : d.imageWrapEl = void 0, !d.imageWrapEl) {
          d.imageEl = void 0;
          return;
        }
        d.maxRatio = h();
      }
      if (d.imageEl) {
        const [H, F] = p();
        d.originX = H ?? 0, d.originY = F ?? 0, d.imageEl.style.transitionDuration = "0ms";
      }
      u = !0;
    }
  }
  function w(O) {
    if (!y(O))
      return;
    const G = n(), H = e.zoom, F = T.findIndex((K) => K.pointerId === O.pointerId);
    F >= 0 && (T[F] = O), !(T.length < 2) && (c = !0, d.scaleMove = S(), d.imageEl && (H.scale = d.scaleMove / (d.scaleStart ?? 1) * i, H.scale > d.maxRatio && (H.scale = d.maxRatio - 1 + (H.scale - d.maxRatio + 1) ** 0.5), H.scale < G.minRatio && (H.scale = G.minRatio + 1 - (G.minRatio - H.scale + 1) ** 0.5), d.imageEl.style.transform = `translate3d(0,0,0) scale(${H.scale})`));
  }
  function _(O) {
    if (!y(O) || O.pointerType === "mouse" && O.type === "pointerout")
      return;
    const G = n(), H = e.zoom, F = T.findIndex((K) => K.pointerId === O.pointerId);
    F >= 0 && T.splice(F, 1), !(!f || !c) && (f = !1, c = !1, d.imageEl && (H.scale = Math.max(Math.min(H.scale, d.maxRatio), G.minRatio), d.imageEl.style.transitionDuration = `${e.params.speed}ms`, d.imageEl.style.transform = `translate3d(0,0,0) scale(${H.scale})`, i = H.scale, u = !1, H.scale > 1 && d.slideEl ? d.slideEl.classList.add(`${G.zoomedSlideClass}`) : H.scale <= 1 && d.slideEl && d.slideEl.classList.remove(`${G.zoomedSlideClass}`), H.scale === 1 && (d.originX = 0, d.originY = 0, d.slideEl = void 0)));
  }
  let P;
  function b() {
    e.touchEventsData.preventTouchMoveFromPointerMove = !1;
  }
  function M() {
    P !== void 0 && clearTimeout(P), e.touchEventsData.preventTouchMoveFromPointerMove = !0, P = setTimeout(() => {
      e.destroyed || b();
    });
  }
  function C(O) {
    const G = e.device;
    if (l.isTouched)
      return;
    const H = T.length > 0 ? T[0] : O;
    l.touchesStart.x = H.pageX, l.touchesStart.y = H.pageY, d.imageEl && (G.android && O.cancelable && O.preventDefault(), l.isTouched = !0);
  }
  function x(O) {
    const H = O.pointerType === "mouse" && n().panOnMouseMove;
    if (!y(O) || !I(O))
      return;
    const F = e.zoom;
    if (!d.imageEl)
      return;
    if (!l.isTouched || !d.slideEl) {
      H && N(O);
      return;
    }
    if (H) {
      N(O);
      return;
    }
    l.isMoved || (l.width = d.imageEl.offsetWidth || d.imageEl.clientWidth, l.height = d.imageEl.offsetHeight || d.imageEl.clientHeight, l.startX = Ke(d.imageWrapEl, "x") || 0, l.startY = Ke(d.imageWrapEl, "y") || 0, d.slideWidth = d.slideEl.offsetWidth, d.slideHeight = d.slideEl.offsetHeight, d.imageWrapEl.style.transitionDuration = "0ms");
    const K = l.width * F.scale, ie = l.height * F.scale;
    l.minX = Math.min(d.slideWidth / 2 - K / 2, 0), l.maxX = -l.minX, l.minY = Math.min(d.slideHeight / 2 - ie / 2, 0), l.maxY = -l.minY, l.touchesCurrent.x = T.length > 0 ? T[0].pageX : O.pageX, l.touchesCurrent.y = T.length > 0 ? T[0].pageY : O.pageY, Math.max(Math.abs(l.touchesCurrent.x - (l.touchesStart.x ?? 0)), Math.abs(l.touchesCurrent.y - (l.touchesStart.y ?? 0))) > 5 && (e.allowClick = !1);
    const j = l.startX ?? 0, J = l.startY ?? 0;
    if (!l.isMoved && !u) {
      if (e.isHorizontal() && (Math.floor(l.minX) === Math.floor(j) && l.touchesCurrent.x < (l.touchesStart.x ?? 0) || Math.floor(l.maxX) === Math.floor(j) && l.touchesCurrent.x > (l.touchesStart.x ?? 0))) {
        l.isTouched = !1, b();
        return;
      }
      if (!e.isHorizontal() && (Math.floor(l.minY) === Math.floor(J) && l.touchesCurrent.y < (l.touchesStart.y ?? 0) || Math.floor(l.maxY) === Math.floor(J) && l.touchesCurrent.y > (l.touchesStart.y ?? 0))) {
        l.isTouched = !1, b();
        return;
      }
    }
    O.cancelable && O.preventDefault(), O.stopPropagation(), M(), l.isMoved = !0;
    const Z = (F.scale - i) / (d.maxRatio - n().minRatio), { originX: ee, originY: re } = d;
    l.currentX = l.touchesCurrent.x - (l.touchesStart.x ?? 0) + j + Z * (l.width - ee * 2), l.currentY = l.touchesCurrent.y - (l.touchesStart.y ?? 0) + J + Z * (l.height - re * 2), l.currentX < l.minX && (l.currentX = l.minX + 1 - (l.minX - l.currentX + 1) ** 0.8), l.currentX > l.maxX && (l.currentX = l.maxX - 1 + (l.currentX - l.maxX + 1) ** 0.8), l.currentY < l.minY && (l.currentY = l.minY + 1 - (l.minY - l.currentY + 1) ** 0.8), l.currentY > l.maxY && (l.currentY = l.maxY - 1 + (l.currentY - l.maxY + 1) ** 0.8), g.prevPositionX || (g.prevPositionX = l.touchesCurrent.x), g.prevPositionY || (g.prevPositionY = l.touchesCurrent.y), g.prevTime || (g.prevTime = Date.now()), g.x = (l.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2, g.y = (l.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2, Math.abs(l.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0), Math.abs(l.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0), g.prevPositionX = l.touchesCurrent.x, g.prevPositionY = l.touchesCurrent.y, g.prevTime = Date.now(), d.imageWrapEl.style.transform = `translate3d(${l.currentX}px, ${l.currentY}px,0)`;
  }
  function R() {
    const O = e.zoom;
    if (T.length = 0, !d.imageEl)
      return;
    if (!l.isTouched || !l.isMoved) {
      l.isTouched = !1, l.isMoved = !1;
      return;
    }
    l.isTouched = !1, l.isMoved = !1;
    let G = 300, H = 300;
    const F = g.x ?? 0, K = g.y ?? 0, ie = F * G, X = l.currentX + ie, j = K * H, J = l.currentY + j;
    F !== 0 && (G = Math.abs((X - l.currentX) / F)), K !== 0 && (H = Math.abs((J - l.currentY) / K));
    const Z = Math.max(G, H);
    l.currentX = X, l.currentY = J;
    const ee = l.width * O.scale, re = l.height * O.scale;
    l.minX = Math.min(d.slideWidth / 2 - ee / 2, 0), l.maxX = -l.minX, l.minY = Math.min(d.slideHeight / 2 - re / 2, 0), l.maxY = -l.minY, l.currentX = Math.max(Math.min(l.currentX, l.maxX), l.minX), l.currentY = Math.max(Math.min(l.currentY, l.maxY), l.minY), d.imageWrapEl.style.transitionDuration = `${Z}ms`, d.imageWrapEl.style.transform = `translate3d(${l.currentX}px, ${l.currentY}px,0)`;
  }
  function L() {
    const O = e.zoom;
    d.slideEl && e.activeIndex !== e.slides.indexOf(d.slideEl) && (d.imageEl && (d.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), d.imageWrapEl && (d.imageWrapEl.style.transform = "translate3d(0,0,0)"), d.slideEl.classList.remove(`${n().zoomedSlideClass}`), O.scale = 1, i = 1, d.slideEl = void 0, d.imageEl = void 0, d.imageWrapEl = void 0, d.originX = 0, d.originY = 0);
  }
  function N(O) {
    if (i <= 1 || !d.imageWrapEl || !y(O) || !I(O))
      return;
    const G = window.getComputedStyle(d.imageWrapEl).transform, H = new window.DOMMatrix(G);
    if (!o) {
      o = !0, r.x = O.clientX, r.y = O.clientY, l.startX = H.e, l.startY = H.f, l.width = d.imageEl.offsetWidth || d.imageEl.clientWidth, l.height = d.imageEl.offsetHeight || d.imageEl.clientHeight, d.slideWidth = d.slideEl.offsetWidth, d.slideHeight = d.slideEl.offsetHeight;
      return;
    }
    const F = (O.clientX - r.x) * m, K = (O.clientY - r.y) * m, ie = l.width * i, X = l.height * i, j = d.slideWidth, J = d.slideHeight, Z = Math.min(j / 2 - ie / 2, 0), ee = -Z, re = Math.min(J / 2 - X / 2, 0), Ie = -re, he = Math.max(Math.min(l.startX + F, ee), Z), ge = Math.max(Math.min(l.startY + K, Ie), re);
    d.imageWrapEl.style.transitionDuration = "0ms", d.imageWrapEl.style.transform = `translate3d(${he}px, ${ge}px, 0)`, r.x = O.clientX, r.y = O.clientY, l.startX = he, l.startY = ge, l.currentX = he, l.currentY = ge;
  }
  function k(O) {
    const G = e.zoom, H = n();
    if (!d.slideEl) {
      if (O && typeof O != "number" && "target" in O && O.target && (d.slideEl = O.target.closest(`.${e.params.slideClass}, swiper-slide`) ?? void 0), !d.slideEl) {
        const nt = e.params.virtual;
        nt && nt.enabled && e.virtual ? d.slideEl = Q(e.slidesEl, `.${e.params.slideActiveClass}`)[0] ?? void 0 : d.slideEl = e.slides[e.activeIndex];
      }
      let Ee = d.slideEl?.querySelector(`.${H.containerClass}`) ?? null;
      Ee && (Ee = Ee.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0] ?? null), d.imageEl = Ee ?? void 0, Ee ? d.imageWrapEl = ue(Ee, `.${H.containerClass}`)[0] ?? void 0 : d.imageWrapEl = void 0;
    }
    if (!d.imageEl || !d.imageWrapEl || !d.slideEl)
      return;
    d.maxRatio = h(), e.params.cssMode && (e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.touchAction = "none"), d.slideEl.classList.add(`${H.zoomedSlideClass}`);
    let F, K, ie, X, j, J, Z, ee, re, Ie, he, ge, we, Re, Ge, Be, He, Ve;
    const Ct = O && typeof O != "number";
    typeof l.touchesStart.x > "u" && Ct ? (F = O.pageX, K = O.pageY) : (F = l.touchesStart.x, K = l.touchesStart.y);
    const We = i, Te = typeof O == "number" ? O : null;
    i === 1 && Te && (F = void 0, K = void 0, l.touchesStart.x = void 0, l.touchesStart.y = void 0);
    const at = h();
    G.scale = Te || at, i = Te || at, O && !(i === 1 && Te) ? (He = d.slideEl.offsetWidth, Ve = d.slideEl.offsetHeight, ie = ze(d.slideEl).left + window.scrollX, X = ze(d.slideEl).top + window.scrollY, j = ie + He / 2 - (F ?? 0), J = X + Ve / 2 - (K ?? 0), re = d.imageEl.offsetWidth || d.imageEl.clientWidth, Ie = d.imageEl.offsetHeight || d.imageEl.clientHeight, he = re * G.scale, ge = Ie * G.scale, we = Math.min(He / 2 - he / 2, 0), Re = Math.min(Ve / 2 - ge / 2, 0), Ge = -we, Be = -Re, We > 0 && Te && typeof l.currentX == "number" && typeof l.currentY == "number" ? (Z = l.currentX * G.scale / We, ee = l.currentY * G.scale / We) : (Z = j * G.scale, ee = J * G.scale), Z < we && (Z = we), Z > Ge && (Z = Ge), ee < Re && (ee = Re), ee > Be && (ee = Be)) : (Z = 0, ee = 0), Te && G.scale === 1 && (d.originX = 0, d.originY = 0), l.currentX = Z, l.currentY = ee, d.imageWrapEl.style.transitionDuration = "300ms", d.imageWrapEl.style.transform = `translate3d(${Z}px, ${ee}px,0)`, d.imageEl.style.transitionDuration = "300ms", d.imageEl.style.transform = `translate3d(0,0,0) scale(${G.scale})`;
  }
  function z() {
    const O = e.zoom, G = n();
    if (!d.slideEl) {
      const H = e.params.virtual;
      H && H.enabled && e.virtual ? d.slideEl = Q(e.slidesEl, `.${e.params.slideActiveClass}`)[0] ?? void 0 : d.slideEl = e.slides[e.activeIndex];
      let F = d.slideEl?.querySelector(`.${G.containerClass}`) ?? null;
      F && (F = F.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0] ?? null), d.imageEl = F ?? void 0, F ? d.imageWrapEl = ue(F, `.${G.containerClass}`)[0] ?? void 0 : d.imageWrapEl = void 0;
    }
    !d.imageEl || !d.imageWrapEl || !d.slideEl || (d.maxRatio = h(), e.params.cssMode && (e.wrapperEl.style.overflow = "", e.wrapperEl.style.touchAction = ""), O.scale = 1, i = 1, l.currentX = void 0, l.currentY = void 0, l.touchesStart.x = void 0, l.touchesStart.y = void 0, d.imageWrapEl.style.transitionDuration = "300ms", d.imageWrapEl.style.transform = "translate3d(0,0,0)", d.imageEl.style.transitionDuration = "300ms", d.imageEl.style.transform = "translate3d(0,0,0) scale(1)", d.slideEl.classList.remove(`${G.zoomedSlideClass}`), d.slideEl = void 0, d.originX = 0, d.originY = 0, G.panOnMouseMove && (r = { x: 0, y: 0 }, o && (o = !1, l.startX = 0, l.startY = 0)));
  }
  function V(O) {
    const G = e.zoom;
    G.scale && G.scale !== 1 ? z() : k(O);
  }
  function $() {
    const O = e.params.passiveListeners ? { passive: !0, capture: !1 } : !1, G = e.params.passiveListeners ? { passive: !1, capture: !0 } : !0;
    return { passiveListener: O, activeListenerWithCapture: G };
  }
  function Y() {
    const O = e.zoom;
    if (O.enabled)
      return;
    O.enabled = !0;
    const { passiveListener: G, activeListenerWithCapture: H } = $();
    e.wrapperEl.addEventListener("pointerdown", A, G), e.wrapperEl.addEventListener("pointermove", w, H), ["pointerup", "pointercancel", "pointerout"].forEach((F) => {
      e.wrapperEl.addEventListener(F, _, G);
    }), e.wrapperEl.addEventListener("pointermove", x, H);
  }
  function q() {
    const O = e.zoom;
    if (!O.enabled)
      return;
    O.enabled = !1;
    const { passiveListener: G, activeListenerWithCapture: H } = $();
    e.wrapperEl.removeEventListener("pointerdown", A, G), e.wrapperEl.removeEventListener("pointermove", w, H), ["pointerup", "pointercancel", "pointerout"].forEach((F) => {
      e.wrapperEl.removeEventListener(F, _, G);
    }), e.wrapperEl.removeEventListener("pointermove", x, H);
  }
  s("init", () => {
    n().enabled && Y();
  }), s("destroy", () => {
    q();
  }), s("touchStart", (O, G) => {
    e.zoom.enabled && C(G);
  }), s("touchEnd", () => {
    e.zoom.enabled && R();
  }), s("doubleTap", (O, G) => {
    !e.animating && n().enabled && e.zoom.enabled && n().toggle && V(G);
  }), s("transitionEnd", () => {
    e.zoom.enabled && n().enabled && L();
  }), s("slideChange", () => {
    e.zoom.enabled && n().enabled && e.params.cssMode && L();
  }), Object.assign(e.zoom, {
    enable: Y,
    disable: q,
    in: k,
    out: z,
    toggle: V
  });
};
class ft {
  x;
  y;
  lastIndex;
  binarySearch;
  constructor(t, s) {
    let a, n, i;
    this.binarySearch = (u, o) => {
      for (n = -1, a = u.length; a - n > 1; )
        i = a + n >> 1, u[i] <= o ? n = i : a = i;
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
const aa = ({ swiper: e, extendParams: t, on: s }) => {
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
  function i(r, m) {
    const f = e.controller.control;
    let c, T;
    const d = e.constructor;
    function l(g) {
      if (g.destroyed)
        return;
      const v = e.rtlTranslate ? -e.translate : e.translate, S = a();
      S.by === "slide" ? (n(g), T = -e.controller.spline.interpolate(-v)) : T = 0, (!T || S.by === "container") && (c = (g.maxTranslate() - g.minTranslate()) / (e.maxTranslate() - e.minTranslate()), (Number.isNaN(c) || !Number.isFinite(c)) && (c = 1), T = (v - e.minTranslate()) * c + g.minTranslate()), S.inverse && (T = g.maxTranslate() - T), g.updateProgress(T), g.setTranslate(T, e), g.updateActiveIndex(), g.updateSlidesClasses();
    }
    if (Array.isArray(f))
      for (let g = 0; g < f.length; g += 1) {
        const v = f[g];
        v && v !== m && v instanceof d && l(v);
      }
    else f instanceof d && m !== f && l(f);
  }
  function u(r, m) {
    const f = e.constructor, c = e.controller.control;
    function T(d) {
      d.destroyed || (d.setTransition(r, e), r !== 0 && (d.transitionStart(), d.params.autoHeight && Se(() => {
        d.updateAutoHeight();
      }), xe(d.wrapperEl, () => {
        c && d.transitionEnd();
      })));
    }
    if (Array.isArray(c))
      for (let d = 0; d < c.length; d += 1) {
        const l = c[d];
        l && l !== m && l instanceof f && T(l);
      }
    else c instanceof f && m !== c && T(c);
  }
  function o() {
    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
  }
  s("beforeInit", () => {
    const r = a().control;
    if (typeof window < "u" && (typeof r == "string" || r instanceof HTMLElement)) {
      (typeof r == "string" ? [...document.querySelectorAll(r)] : [r]).forEach((f) => {
        e.controller.control || (e.controller.control = []);
        const c = e.controller.control;
        if (f && f.swiper)
          c.push(f.swiper);
        else if (f) {
          const T = `${e.params.eventsPrefix}init`, d = (l) => {
            const g = l.detail;
            g && g[0] && c.push(g[0]), e.update(), f.removeEventListener(T, d);
          };
          f.addEventListener(T, d);
        }
      });
      return;
    }
    e.controller.control = r;
  }), s("update", () => {
    o();
  }), s("resize", () => {
    o();
  }), s("observerUpdate", () => {
    o();
  }), s("setTranslate", (r, m, f) => {
    e.controller.control && (!Array.isArray(e.controller.control) && e.controller.control.destroyed || e.controller.setTranslate(m, f));
  }), s("setTransition", (r, m, f) => {
    e.controller.control && (!Array.isArray(e.controller.control) && e.controller.control.destroyed || e.controller.setTransition(m, f));
  }), Object.assign(e.controller, {
    setTranslate: i,
    setTransition: u
  });
}, na = (e) => !!e.virtual && !!e.params.virtual?.enabled, ia = ({ swiper: e, extendParams: t, on: s }) => {
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
  function o() {
    return e.params.a11y;
  }
  function r(L) {
    const N = a;
    !N || !L || le(N, L);
  }
  function m(L = 16) {
    const N = () => Math.round(16 * Math.random()).toString(16);
    return "x".repeat(L).replace(/x/g, N);
  }
  function f(L) {
    U(L).forEach((k) => {
      k.setAttribute("tabIndex", "0");
    });
  }
  function c(L) {
    U(L).forEach((k) => {
      k.setAttribute("tabIndex", "-1");
    });
  }
  function T(L, N) {
    U(L).forEach((z) => {
      z.setAttribute("role", N);
    });
  }
  function d(L, N) {
    U(L).forEach((z) => {
      z.setAttribute("aria-roledescription", N);
    });
  }
  function l(L, N) {
    U(L).forEach((z) => {
      z.setAttribute("aria-label", N);
    });
  }
  function g(L, N) {
    U(L).forEach((z) => {
      z.setAttribute("id", N);
    });
  }
  function v(L, N) {
    U(L).forEach((z) => {
      z.setAttribute("aria-live", N);
    });
  }
  function S(L) {
    U(L).forEach((k) => {
      k.setAttribute("aria-disabled", "true");
    });
  }
  function h(L) {
    U(L).forEach((k) => {
      k.removeAttribute("aria-disabled");
    });
  }
  function p(L) {
    if (L.keyCode !== 13 && L.keyCode !== 32)
      return;
    const N = o(), k = e.params.pagination, z = L.target;
    if (!(e.pagination && e.pagination.el && (z === e.pagination.el || e.pagination.el.contains(z)) && !z.matches(oe(k?.bulletClass)))) {
      if (e.navigation && e.navigation.prevEl && e.navigation.nextEl) {
        const V = U(e.navigation.prevEl);
        U(e.navigation.nextEl).includes(z) && (e.isEnd && !e.params.loop || e.slideNext(), e.isEnd ? r(N.lastSlideMessage) : r(N.nextSlideMessage)), V.includes(z) && (e.isBeginning && !e.params.loop || e.slidePrev(), e.isBeginning ? r(N.firstSlideMessage) : r(N.prevSlideMessage));
      }
      e.pagination && z.matches(oe(k?.bulletClass)) && z.click();
    }
  }
  function E() {
    if (e.params.loop || e.params.rewind || !e.navigation)
      return;
    const { nextEl: L, prevEl: N } = e.navigation;
    N && (e.isBeginning ? (S(N), c(N)) : (h(N), f(N))), L && (e.isEnd ? (S(L), c(L)) : (h(L), f(L)));
  }
  function y() {
    return !!(e.pagination && e.pagination.bullets && e.pagination.bullets.length);
  }
  function I() {
    const L = e.params.pagination;
    return y() && !!L?.clickable;
  }
  function A() {
    const L = o();
    if (!y())
      return;
    const N = e.params.pagination;
    e.pagination.bullets.forEach((k) => {
      N.clickable && (f(k), N.renderBullet || (T(k, "button"), l(k, L.paginationBulletMessage.replace(/\{\{index\}\}/, String((Le(k) ?? 0) + 1))))), k.matches(oe(N.bulletActiveClass)) ? k.setAttribute("aria-current", "true") : k.removeAttribute("aria-current");
    });
  }
  const w = (L, N, k) => {
    f(L), L.tagName !== "BUTTON" && (T(L, "button"), L.addEventListener("keydown", p)), l(L, k);
  }, _ = (L) => {
    i && i !== L.target && !i.contains(L.target) && (n = !0), e.a11y.clicked = !0;
  }, P = () => {
    n = !1, requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        e.destroyed || (e.a11y.clicked = !1);
      });
    });
  }, b = (L) => {
    u = (/* @__PURE__ */ new Date()).getTime();
  }, M = (L) => {
    const N = o();
    if (e.a11y.clicked || !N.scrollOnFocus || (/* @__PURE__ */ new Date()).getTime() - u < 100)
      return;
    const z = L.target.closest(`.${e.params.slideClass}, swiper-slide`);
    if (!z || !e.slides.includes(z))
      return;
    i = z;
    const V = na(e), $ = (V ? parseInt(z.getAttribute("data-swiper-slide-index") || "0", 10) : e.slides.indexOf(z)) === e.activeIndex, Y = e.params.watchSlidesProgress && e.visibleSlides && e.visibleSlides.includes(z);
    if ($ || Y)
      return;
    const q = L.sourceCapabilities;
    q && q.firesTouchEvents || (e.isHorizontal() ? e.el.scrollLeft = 0 : e.el.scrollTop = 0, requestAnimationFrame(() => {
      n || (e.params.loop ? e.slideToLoop(e.getSlideIndexWhenGrid(parseInt(z.getAttribute("data-swiper-slide-index") || "0", 10)), 0) : V ? e.slideTo(e.getSlideIndexWhenGrid(parseInt(z.getAttribute("data-swiper-slide-index") || "0", 10)), 0) : e.slideTo(e.getSlideIndexWhenGrid(e.slides.indexOf(z)), 0), n = !1);
    }));
  }, C = () => {
    const L = o();
    L.itemRoleDescriptionMessage && d(e.slides, L.itemRoleDescriptionMessage), L.slideRole && T(e.slides, L.slideRole);
    const N = e.slides.length, k = L.slideLabelMessage;
    k && e.slides.forEach((z, V) => {
      const $ = e.params.loop ? parseInt(z.getAttribute("data-swiper-slide-index") || "0", 10) : V, Y = k.replace(/\{\{index\}\}/, String($ + 1)).replace(/\{\{slidesLength\}\}/, String(N));
      l(z, Y);
    });
  }, x = () => {
    const L = o();
    a && e.el.append(a);
    const N = e.el;
    L.containerRoleDescriptionMessage && d(N, L.containerRoleDescriptionMessage), L.containerMessage && l(N, L.containerMessage), L.containerRole && T(N, L.containerRole);
    const k = e.wrapperEl, z = String(L.id || k.getAttribute("id") || `swiper-wrapper-${m(16)}`);
    if (g(k, z), L.wrapperLiveRegion) {
      const q = e.params.autoplay, O = e.params.autoplay && q?.enabled ? "off" : "polite";
      v(k, O);
    }
    C();
    const V = e.navigation ? e.navigation : { nextEl: void 0, prevEl: void 0 }, $ = U(V.nextEl), Y = U(V.prevEl);
    $ && $.forEach((q) => w(q, z, L.nextSlideMessage)), Y && Y.forEach((q) => w(q, z, L.prevSlideMessage)), I() && U(e.pagination.el).forEach((O) => {
      O.addEventListener("keydown", p);
    }), document.addEventListener("visibilitychange", b), e.el.addEventListener("focus", M, !0), e.el.addEventListener("pointerdown", _, !0), e.el.addEventListener("pointerup", P, !0);
  };
  function R() {
    a && a.remove();
    const L = e.navigation ? e.navigation : { nextEl: void 0, prevEl: void 0 }, N = U(L.nextEl), k = U(L.prevEl);
    N && N.forEach((z) => z.removeEventListener("keydown", p)), k && k.forEach((z) => z.removeEventListener("keydown", p)), I() && U(e.pagination.el).forEach((V) => {
      V.removeEventListener("keydown", p);
    }), document.removeEventListener("visibilitychange", b), e.el && typeof e.el != "string" && (e.el.removeEventListener("focus", M, !0), e.el.removeEventListener("pointerdown", _, !0), e.el.removeEventListener("pointerup", P, !0));
  }
  s("beforeInit", () => {
    a = ne("span", o().notificationClass), a.setAttribute("aria-live", "assertive"), a.setAttribute("aria-atomic", "true");
  }), s("afterInit", () => {
    o().enabled && x();
  }), s("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
    o().enabled && C();
  }), s("fromEdge toEdge afterInit lock unlock", () => {
    o().enabled && E();
  }), s("paginationUpdate", () => {
    o().enabled && A();
  }), s("destroy", () => {
    o().enabled && R();
  });
}, la = ({ swiper: e, extendParams: t, on: s }) => {
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
  const u = (d) => d.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""), o = (d) => {
    let l;
    d ? l = new URL(d) : l = window.location;
    const g = l.pathname.slice(1).split("/").filter((p) => p !== ""), v = g.length, S = g[v - 2], h = g[v - 1];
    return { key: S, value: h };
  }, r = (d, l) => {
    const g = i();
    if (!a || !g.enabled)
      return;
    let v;
    e.params.url ? v = new URL(e.params.url) : v = window.location;
    const S = !!e.params.virtual?.enabled, h = e.virtual && S ? e.slidesEl.querySelector(`[data-swiper-slide-index="${l}"]`) : e.slides[l];
    if (!h)
      return;
    let p = u(h.getAttribute("data-history") || "");
    const E = g.root;
    E.length > 0 ? p = `${E[E.length - 1] === "/" ? E.slice(0, E.length - 1) : E}/${d ? `${d}/` : ""}${p}` : v.pathname.includes(d || "") || (p = `${d ? `${d}/` : ""}${p}`), g.keepQuery && (p += v.search);
    const y = window.history.state;
    y && y.value === p || (g.replaceState ? window.history.replaceState({ value: p }, "", p) : window.history.pushState({ value: p }, "", p));
  }, m = (d, l, g) => {
    if (l)
      for (let v = 0, S = e.slides.length; v < S; v += 1) {
        const h = e.slides[v];
        if (u(h.getAttribute("data-history") || "") === l) {
          const E = e.getSlideIndex(h);
          e.slideTo(E, d, g);
        }
      }
    else
      e.slideTo(0, d, g);
  }, f = () => {
    n = o(e.params.url), m(e.params.speed, n.value, !1);
  }, c = () => {
    const d = e.params.history;
    if (d) {
      if (!window.history || !window.history.pushState) {
        d.enabled = !1;
        const l = e.params.hashNavigation;
        l && (l.enabled = !0);
        return;
      }
      if (a = !0, n = o(e.params.url), !n.key && !n.value) {
        d.replaceState || window.addEventListener("popstate", f);
        return;
      }
      m(0, n.value, e.params.runCallbacksOnInit), d.replaceState || window.addEventListener("popstate", f);
    }
  }, T = () => {
    i().replaceState || window.removeEventListener("popstate", f);
  };
  s("init", () => {
    i().enabled && c();
  }), s("destroy", () => {
    i().enabled && T();
  }), s("transitionEnd _freeModeNoMomentumRelease", () => {
    a && r(i().key, e.activeIndex);
  }), s("slideChange", () => {
    a && e.params.cssMode && r(i().key, e.activeIndex);
  });
}, je = (e) => !!e.virtual && !!e.params.virtual?.enabled, ra = ({ swiper: e, extendParams: t, emit: s, on: a }) => {
  let n = !1;
  t({
    hashNavigation: {
      enabled: !1,
      replaceState: !1,
      watchState: !1,
      getSlideIndex(f, c) {
        if (je(e)) {
          const d = e.slides.find((g) => g.getAttribute("data-hash") === c);
          return d ? parseInt(d.getAttribute("data-swiper-slide-index") || "0", 10) : 0;
        }
        const T = Q(e.slidesEl, `.${e.params.slideClass}[data-hash="${c}"], swiper-slide[data-hash="${c}"]`)[0];
        return T ? e.getSlideIndex(T) : 0;
      }
    }
  });
  function i() {
    return e.params.hashNavigation;
  }
  const u = () => {
    s("hashChange");
    const f = document.location.hash.replace("#", ""), c = je(e) ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex], T = c ? c.getAttribute("data-hash") : "";
    if (f !== T) {
      const d = i().getSlideIndex(e, f);
      if (typeof d > "u" || Number.isNaN(d))
        return;
      e.slideTo(d);
    }
  }, o = () => {
    const f = i();
    if (!n || !f.enabled)
      return;
    const c = je(e) ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex], T = c ? c.getAttribute("data-hash") || c.getAttribute("data-history") : "";
    f.replaceState && window.history && window.history.replaceState ? (window.history.replaceState(null, "", `#${T}` || ""), s("hashSet")) : (document.location.hash = T || "", s("hashSet"));
  }, r = () => {
    const f = i(), c = e.params.history;
    if (!f.enabled || c && c.enabled)
      return;
    n = !0;
    const T = document.location.hash.replace("#", "");
    if (T) {
      const l = f.getSlideIndex(e, T);
      e.slideTo(l || 0, 0, e.params.runCallbacksOnInit, !0);
    }
    f.watchState && window.addEventListener("hashchange", u);
  }, m = () => {
    i().watchState && window.removeEventListener("hashchange", u);
  };
  a("init", () => {
    i().enabled && r();
  }), a("destroy", () => {
    i().enabled && m();
  }), a("transitionEnd _freeModeNoMomentumRelease", () => {
    n && o();
  }), a("slideChange", () => {
    n && e.params.cssMode && o();
  });
}, oa = ({ swiper: e, extendParams: t, on: s, emit: a, params: n }) => {
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
  let o, r, m = u, f = u, c = 0, T = (/* @__PURE__ */ new Date()).getTime(), d = !1, l = !1, g = !1, v, S = !1, h = !1;
  function p(z) {
    if (!e || e.destroyed || !e.wrapperEl || z.target !== e.wrapperEl)
      return;
    e.wrapperEl.removeEventListener("transitionend", p);
    const V = z.detail;
    h || V && V.bySwiperTouchMove || b();
  }
  const E = () => {
    if (e.destroyed || !e.autoplay.running)
      return;
    e.autoplay.paused ? d = !0 : d && (f = c, d = !1);
    const z = e.autoplay.paused ? c : T + f - (/* @__PURE__ */ new Date()).getTime();
    e.autoplay.timeLeft = z, a("autoplayTimeLeft", z, z / m), r = requestAnimationFrame(() => {
      E();
    });
  }, y = () => {
    let z;
    const V = !!e.params.virtual?.enabled;
    if (e.virtual && V ? z = e.slides.find((Y) => Y.classList.contains("swiper-slide-active")) : z = e.slides[e.activeIndex], !z)
      return;
    const $ = z.getAttribute("data-swiper-autoplay");
    if ($ != null)
      return parseInt($, 10);
  }, I = () => {
    let z = i().delay;
    const V = y();
    return typeof V == "number" && !Number.isNaN(V) && V > 0 && (z = V), z;
  }, A = (z) => {
    if (e.destroyed || !e.autoplay.running)
      return 0;
    r !== void 0 && cancelAnimationFrame(r), E();
    let V = z;
    typeof V > "u" && (V = I(), m = V, f = V), c = V;
    const $ = e.params.speed, Y = () => {
      if (!e || e.destroyed)
        return;
      const q = i();
      q.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev($, !0, !0), a("autoplay")) : q.stopOnLastSlide || (e.slideTo(e.slides.length - 1, $, !0, !0), a("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext($, !0, !0), a("autoplay")) : q.stopOnLastSlide || (e.slideTo(0, $, !0, !0), a("autoplay")), e.params.cssMode && (T = (/* @__PURE__ */ new Date()).getTime(), requestAnimationFrame(() => {
        A();
      }));
    };
    return V > 0 ? (o !== void 0 && clearTimeout(o), o = setTimeout(() => {
      Y();
    }, V)) : requestAnimationFrame(() => {
      Y();
    }), V;
  }, w = () => (T = (/* @__PURE__ */ new Date()).getTime(), e.autoplay.running = !0, A(), a("autoplayStart"), !0), _ = () => (e.autoplay.running = !1, o !== void 0 && clearTimeout(o), r !== void 0 && cancelAnimationFrame(r), a("autoplayStop"), !0), P = (z, V) => {
    if (e.destroyed || !e.autoplay.running)
      return;
    o !== void 0 && clearTimeout(o), z || (S = !0);
    const $ = () => {
      a("autoplayPause"), i().waitForTransition ? e.wrapperEl.addEventListener("transitionend", p) : b();
    };
    if (e.autoplay.paused = !0, V) {
      $();
      return;
    }
    c = (c || i().delay) - ((/* @__PURE__ */ new Date()).getTime() - T), !(e.isEnd && c < 0 && !e.params.loop) && (c < 0 && (c = 0), $());
  }, b = () => {
    e.isEnd && c < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (T = (/* @__PURE__ */ new Date()).getTime(), S ? (S = !1, A(c)) : A(), e.autoplay.paused = !1, a("autoplayResume"));
  }, M = () => {
    e.destroyed || !e.autoplay.running || (document.visibilityState === "hidden" && (S = !0, P(!0)), document.visibilityState === "visible" && b());
  }, C = (z) => {
    z.pointerType === "mouse" && (S = !0, h = !0, !(e.animating || e.autoplay.paused) && P(!0));
  }, x = (z) => {
    z.pointerType === "mouse" && (h = !1, e.autoplay.paused && b());
  }, R = () => {
    i().pauseOnMouseEnter && (e.el.addEventListener("pointerenter", C), e.el.addEventListener("pointerleave", x));
  }, L = () => {
    e.el && typeof e.el != "string" && (e.el.removeEventListener("pointerenter", C), e.el.removeEventListener("pointerleave", x));
  }, N = () => {
    document.addEventListener("visibilitychange", M);
  }, k = () => {
    document.removeEventListener("visibilitychange", M);
  };
  s("init", () => {
    i().enabled && (R(), N(), w());
  }), s("destroy", () => {
    L(), k(), e.autoplay.running && _();
  }), s("_freeModeStaticRelease", () => {
    (g || S) && b();
  }), s("_freeModeNoMomentumRelease", () => {
    i().disableOnInteraction ? _() : P(!0, !0);
  }), s("beforeTransitionStart", (z, V, $) => {
    e.destroyed || !e.autoplay.running || ($ || !i().disableOnInteraction ? P(!0, !0) : _());
  }), s("sliderFirstMove", () => {
    if (!(e.destroyed || !e.autoplay.running)) {
      if (i().disableOnInteraction) {
        _();
        return;
      }
      l = !0, g = !1, S = !1, v = setTimeout(() => {
        S = !0, g = !0, P(!0);
      }, 200);
    }
  }), s("touchEnd", () => {
    if (!(e.destroyed || !e.autoplay.running || !l)) {
      if (v !== void 0 && clearTimeout(v), o !== void 0 && clearTimeout(o), i().disableOnInteraction) {
        g = !1, l = !1;
        return;
      }
      g && e.params.cssMode && b(), g = !1, l = !1;
    }
  }), s("slideChange", () => {
    e.destroyed || !e.autoplay.running || e.autoplay.paused && (c = I(), m = I());
  }), Object.assign(e.autoplay, {
    start: w,
    stop: _,
    pause: P,
    resume: b
  });
}, da = ({ swiper: e, extendParams: t, on: s }) => {
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
    const c = e.thumbs.swiper;
    if (!c || c.destroyed)
      return !1;
    const T = c.params.virtual;
    return !!T && !!T.enabled;
  }
  function o() {
    const c = e.thumbs.swiper;
    if (!c || c.destroyed)
      return;
    const T = c.clickedIndex, d = c.clickedSlide, l = i();
    if (d && d.classList.contains(l.slideThumbActiveClass) || typeof T > "u" || T === null)
      return;
    let g;
    if (c.params.loop) {
      const v = c.clickedSlide?.getAttribute("data-swiper-slide-index");
      g = v == null ? T : parseInt(v, 10);
    } else
      g = T;
    e.params.loop ? e.slideToLoop(g) : e.slideTo(g);
  }
  function r() {
    const c = i();
    if (a)
      return !1;
    a = !0;
    const T = e.constructor;
    if (c.swiper instanceof T) {
      if (c.swiper.destroyed)
        return a = !1, !1;
      const l = c.swiper;
      e.thumbs.swiper = l, Object.assign(l.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), Object.assign(l.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), l.update();
    } else if (_e(c.swiper)) {
      const l = Object.assign({}, c.swiper);
      Object.assign(l, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), e.thumbs.swiper = new T(l), n = !0;
    }
    const d = e.thumbs.swiper;
    return d ? (d.el.classList.add(c.thumbsContainerClass), d.on("tap", o), u() && d.on("virtualUpdate", () => {
      m(!1, { autoScroll: !1 });
    }), !0) : !1;
  }
  function m(c, T) {
    const d = e.thumbs.swiper;
    if (!d || d.destroyed)
      return;
    let l = 1;
    const g = i(), v = g.slideThumbActiveClass, S = e.params.slidesPerView;
    if (typeof S == "number" && S > 1 && !e.params.centeredSlides && (l = S), g.multipleActiveThumbs || (l = 1), l = Math.floor(l), d.slides.forEach((h) => h.classList.remove(v)), d.params.loop || u())
      for (let h = 0; h < l; h += 1)
        Q(d.slidesEl, `[data-swiper-slide-index="${e.realIndex + h}"]`).forEach((p) => {
          p.classList.add(v);
        });
    else
      for (let h = 0; h < l; h += 1) {
        const p = d.slides[e.realIndex + h];
        p && p.classList.add(v);
      }
    (T?.autoScroll ?? !0) && f(c ? 0 : void 0);
  }
  function f(c) {
    const T = e.thumbs.swiper;
    if (!T || T.destroyed)
      return;
    const d = T.params.slidesPerView, l = d === "auto" ? T.slidesPerViewDynamic() : d ?? 1, g = i().autoScrollOffset, v = g && !T.params.loop;
    if (e.realIndex !== T.realIndex || v) {
      const S = T.activeIndex;
      let h, p;
      if (T.params.loop) {
        const E = T.slides.find((y) => y.getAttribute("data-swiper-slide-index") === `${e.realIndex}`);
        h = E ? T.slides.indexOf(E) : -1, p = e.activeIndex > e.previousIndex ? "next" : "prev";
      } else
        h = e.realIndex, p = h > e.previousIndex ? "next" : "prev";
      v && (h += p === "next" ? g : -1 * g), T.visibleSlidesIndexes && T.visibleSlidesIndexes.indexOf(h) < 0 && (T.params.centeredSlides ? h > S ? h = h - Math.floor(l / 2) + 1 : h = h + Math.floor(l / 2) - 1 : h > S && T.params.slidesPerGroup, T.slideTo(h, c));
    }
  }
  s("beforeInit", () => {
    const c = e.params.thumbs;
    if (!(!c || !c.swiper))
      if (typeof c.swiper == "string" || c.swiper instanceof HTMLElement) {
        const T = () => {
          const l = typeof c.swiper == "string" ? document.querySelector(c.swiper) : c.swiper;
          if (l && l.swiper)
            c.swiper = l.swiper, r(), m(!0);
          else if (l) {
            const g = `${e.params.eventsPrefix}init`, v = (S) => {
              const h = S.detail;
              c.swiper = h[0], l.removeEventListener(g, v), r(), m(!0), c.swiper.update(), e.update();
            };
            l.addEventListener(g, v);
          }
          return l;
        }, d = () => {
          if (e.destroyed)
            return;
          T() || requestAnimationFrame(d);
        };
        requestAnimationFrame(d);
      } else
        r(), m(!0);
  }), s("slideChange update resize observerUpdate", () => {
    m();
  }), s("setTransition", (c, T) => {
    const d = e.thumbs.swiper;
    !d || d.destroyed || d.setTransition(T);
  }), s("beforeDestroy", () => {
    const c = e.thumbs.swiper;
    !c || c.destroyed || n && c.destroy();
  }), Object.assign(e.thumbs, {
    init: r,
    update: m
  });
}, ca = ({ swiper: e, extendParams: t, emit: s, once: a }) => {
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
    const { touchEventsData: r, touches: m } = e;
    r.velocities.length === 0 && r.velocities.push({
      position: m[e.isHorizontal() ? "startX" : "startY"],
      time: r.touchStartTime ?? ae()
    }), r.velocities.push({
      position: m[e.isHorizontal() ? "currentX" : "currentY"],
      time: ae()
    });
  }
  function o({ currentPos: r }) {
    if (e.params.cssMode)
      return;
    const { wrapperEl: m, rtlTranslate: f, snapGrid: c, touchEventsData: T } = e, d = e.params, l = n(), g = ae(), v = g - (T.touchStartTime ?? g);
    if (r < -e.minTranslate()) {
      e.slideTo(e.activeIndex);
      return;
    }
    if (r > -e.maxTranslate()) {
      e.slides.length < c.length ? e.slideTo(c.length - 1) : e.slideTo(e.slides.length - 1);
      return;
    }
    if (l.momentum) {
      if (T.velocities.length > 1) {
        const w = T.velocities.pop(), _ = T.velocities.pop(), P = w.position - _.position, b = w.time - _.time;
        e.velocity = P / b, e.velocity /= 2, Math.abs(e.velocity) < l.minimumVelocity && (e.velocity = 0), (b > 150 || ae() - w.time > 300) && (e.velocity = 0);
      } else
        e.velocity = 0;
      e.velocity *= l.momentumVelocityRatio, T.velocities.length = 0;
      let S = 1e3 * l.momentumRatio;
      const h = e.velocity * S;
      let p = e.translate + h;
      f && (p = -p);
      let E = !1, y;
      const I = Math.abs(e.velocity) * 20 * l.momentumBounceRatio;
      let A = !1;
      if (p < e.maxTranslate())
        l.momentumBounce ? (p + e.maxTranslate() < -I && (p = e.maxTranslate() - I), y = e.maxTranslate(), E = !0, T.allowMomentumBounce = !0) : p = e.maxTranslate(), d.loop && d.centeredSlides && (A = !0);
      else if (p > e.minTranslate())
        l.momentumBounce ? (p - e.minTranslate() > I && (p = e.minTranslate() + I), y = e.minTranslate(), E = !0, T.allowMomentumBounce = !0) : p = e.minTranslate(), d.loop && d.centeredSlides && (A = !0);
      else if (l.sticky) {
        let w = 0;
        for (let _ = 0; _ < c.length; _ += 1)
          if (c[_] > -p) {
            w = _;
            break;
          }
        Math.abs(c[w] - p) < Math.abs((c[w - 1] ?? c[w]) - p) || e.swipeDirection === "next" ? p = c[w] : p = c[w - 1], p = -p;
      }
      if (A && a("transitionEnd", () => {
        e.loopFix();
      }), e.velocity !== 0) {
        if (f ? S = Math.abs((-p - e.translate) / e.velocity) : S = Math.abs((p - e.translate) / e.velocity), l.sticky) {
          const w = Math.abs((f ? -p : p) - e.translate), _ = e.slidesSizesGrid[e.activeIndex], P = d.speed;
          w < _ ? S = P : w < 2 * _ ? S = P * 1.5 : S = P * 2.5;
        }
      } else if (l.sticky) {
        e.slideToClosest();
        return;
      }
      l.momentumBounce && E && y !== void 0 ? (e.updateProgress(y), e.setTransition(S), e.setTranslate(p), e.transitionStart(!0, e.swipeDirection), e.animating = !0, xe(m, () => {
        !e || e.destroyed || !T.allowMomentumBounce || (s("momentumBounce"), e.setTransition(d.speed), setTimeout(() => {
          e.setTranslate(y), xe(m, () => {
            !e || e.destroyed || e.transitionEnd();
          });
        }, 0));
      })) : e.velocity ? (s("_freeModeNoMomentumRelease"), e.updateProgress(p), e.setTransition(S), e.setTranslate(p), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, xe(m, () => {
        !e || e.destroyed || e.transitionEnd();
      }))) : e.updateProgress(p), e.updateActiveIndex(), e.updateSlidesClasses();
    } else if (l.sticky) {
      e.slideToClosest();
      return;
    } else
      s("_freeModeNoMomentumRelease");
    (!l.momentum || v >= d.longSwipesMs) && (s("_freeModeStaticRelease"), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses());
  }
  e.freeMode = {
    onTouchStart: i,
    onTouchMove: u,
    onTouchEnd: o
  };
}, fa = ({ swiper: e, extendParams: t, on: s }) => {
  t({
    grid: {
      rows: 1,
      fill: "column"
    }
  });
  function a() {
    return e.params.grid;
  }
  let n, i, u, o;
  const r = () => {
    let v = e.params.spaceBetween ?? 0;
    return typeof v == "string" && v.indexOf("%") >= 0 ? v = parseFloat(v.replace("%", "")) / 100 * e.size : typeof v == "string" && (v = parseFloat(v)), v;
  }, m = () => {
    const v = e.params.virtual;
    return !!e.virtual && typeof v == "object" && v !== null && !!v.enabled;
  }, f = (v) => {
    const { slidesPerView: S } = e.params, { rows: h, fill: p } = a(), E = m() ? e.virtual.slides.length : v.length;
    u = Math.floor(E / h), Math.floor(E / h) === E / h ? n = E : n = Math.ceil(E / h) * h, S !== "auto" && p === "row" && (n = Math.max(n, Math.floor(S ?? 1) * h)), i = n / h;
  }, c = () => {
    e.slides && e.slides.forEach((v) => {
      v.swiperSlideGridSet && (v.style.height = "", v.style.setProperty(e.getDirectionLabel("margin-top"), ""));
    });
  }, T = (v, S, h) => {
    const { slidesPerGroup: p } = e.params, E = r(), { rows: y, fill: I } = a(), A = m() ? e.virtual.slides.length : h.length;
    let w, _, P;
    if (I === "row" && (p ?? 1) > 1) {
      const M = p ?? 1, C = Math.floor(v / (M * y)), x = v - y * M * C, R = C === 0 ? M : Math.min(Math.ceil((A - C * y * M) / y), M);
      P = Math.floor(x / R), _ = x - P * R + C * M, w = _ + P * n / y, S.style.order = String(w);
    } else I === "column" ? (_ = Math.floor(v / y), P = v - _ * y, (_ > u || _ === u && P === y - 1) && (P += 1, P >= y && (P = 0, _ += 1))) : (P = Math.floor(v / i), _ = v - P * i);
    const b = S;
    b.row = P, b.column = _, S.style.height = `calc((100% - ${(y - 1) * E}px) / ${y})`, S.style.setProperty(e.getDirectionLabel("margin-top"), P !== 0 && E ? `${E}px` : ""), b.swiperSlideGridSet = !0;
  }, d = (v, S) => {
    const { centeredSlides: h, roundLengths: p } = e.params, E = r(), { rows: y } = a();
    if (e.virtualSize = (v + E) * n, e.virtualSize = Math.ceil(e.virtualSize / y) - E, e.params.cssMode || e.wrapperEl.style.setProperty(e.getDirectionLabel("width"), `${e.virtualSize + E}px`), h) {
      const I = [];
      for (let A = 0; A < S.length; A += 1) {
        let w = S[A];
        p && (w = Math.floor(w)), S[A] < e.virtualSize + S[0] && I.push(w);
      }
      S.splice(0, S.length), S.push(...I);
    }
  }, l = () => {
    const v = e.params.grid;
    o = !!(v && (v.rows ?? 1) > 1);
  }, g = () => {
    const { params: v, el: S } = e, h = v.grid, p = !!(h && (h.rows ?? 1) > 1);
    o && !p ? (S.classList.remove(`${v.containerModifierClass}grid`, `${v.containerModifierClass}grid-column`), u = 1, e.emitContainerClasses()) : !o && p && (S.classList.add(`${v.containerModifierClass}grid`), h.fill === "column" && S.classList.add(`${v.containerModifierClass}grid-column`), e.emitContainerClasses()), o = p;
  };
  s("init", l), s("update", g), e.grid = {
    initSlides: f,
    unsetSlides: c,
    updateSlide: T,
    updateWrapperSize: d
  };
};
function ua(e, t) {
  const s = this, { params: a, activeIndex: n, slidesEl: i } = s;
  let u = n;
  a.loop && (u -= s.loopedSlides ?? 0, s.loopDestroy(), s.recalcSlides());
  const o = s.slides.length;
  if (e <= 0) {
    s.prependSlide(t);
    return;
  }
  if (e >= o) {
    s.appendSlide(t);
    return;
  }
  let r = u > e ? u + 1 : u;
  const m = [];
  for (let f = o - 1; f >= e; f -= 1) {
    const c = s.slides[f];
    c && (c.remove(), m.unshift(c));
  }
  if (Array.isArray(t)) {
    for (let f = 0; f < t.length; f += 1) {
      const c = t[f];
      c && i.append(c);
    }
    r = u > e ? u + t.length : u;
  } else
    i.append(t);
  for (let f = 0; f < m.length; f += 1)
    i.append(m[f]);
  s.recalcSlides(), a.loop && s.loopCreate(), (!a.observer || s.isElement) && s.update(), a.loop ? s.slideTo(r + (s.loopedSlides ?? 0), 0, !1) : s.slideTo(r, 0, !1);
}
function pa(e) {
  const t = this, { params: s, slidesEl: a } = t;
  s.loop && t.loopDestroy();
  const n = (i) => {
    if (typeof i == "string") {
      const u = document.createElement("div");
      le(u, i);
      const o = u.children[0];
      o && a.append(o), le(u, "");
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
function ma(e) {
  const t = this, { params: s, activeIndex: a, slidesEl: n } = t;
  s.loop && t.loopDestroy();
  let i = a + 1;
  const u = (o) => {
    if (typeof o == "string") {
      const r = document.createElement("div");
      le(r, o);
      const m = r.children[0];
      m && n.prepend(m), le(r, "");
    } else
      n.prepend(o);
  };
  if (Array.isArray(e)) {
    for (let o = 0; o < e.length; o += 1) {
      const r = e[o];
      r && u(r);
    }
    i = a + e.length;
  } else
    u(e);
  t.recalcSlides(), s.loop && t.loopCreate(), (!s.observer || t.isElement) && t.update(), t.slideTo(i, 0, !1);
}
function ha() {
  const e = this, t = [];
  for (let s = 0; s < e.slides.length; s += 1)
    t.push(s);
  e.removeSlide(t);
}
function ga(e) {
  const t = this, { params: s, activeIndex: a } = t;
  let n = a;
  s.loop && (n -= t.loopedSlides ?? 0, t.loopDestroy());
  let i = n;
  if (Array.isArray(e)) {
    for (let u = 0; u < e.length; u += 1) {
      const o = e[u];
      t.slides[o] && t.slides[o].remove(), o < i && (i -= 1);
    }
    i = Math.max(i, 0);
  } else {
    const u = e;
    t.slides[u] && t.slides[u].remove(), u < i && (i -= 1), i = Math.max(i, 0);
  }
  t.recalcSlides(), s.loop && t.loopCreate(), (!s.observer || t.isElement) && t.update(), s.loop ? t.slideTo(i + (t.loopedSlides ?? 0), 0, !1) : t.slideTo(i, 0, !1);
}
const Ta = ({ swiper: e }) => {
  Object.assign(e, {
    appendSlide: pa.bind(e),
    prependSlide: ma.bind(e),
    addSlide: ua.bind(e),
    removeSlide: ga.bind(e),
    removeAllSlides: ha.bind(e)
  });
};
function ye(e) {
  const { effect: t, swiper: s, on: a, setTranslate: n, setTransition: i, overwriteParams: u, perspective: o, recreateShadows: r, getEffectParams: m } = e;
  a("beforeInit", () => {
    if (s.params.effect !== t)
      return;
    s.classNames.push(`${s.params.containerModifierClass}${t}`), o && o() && s.classNames.push(`${s.params.containerModifierClass}3d`);
    const c = u ? u() : {};
    Object.assign(s.params, c), Object.assign(s.originalParams, c);
  }), a("setTranslate _virtualUpdated", () => {
    s.params.effect === t && n();
  }), a("setTransition", (c, T) => {
    s.params.effect === t && i(T);
  }), a("transitionEnd", () => {
    if (s.params.effect === t && r) {
      const c = m ? m() : void 0;
      if (!c || !c.slideShadows)
        return;
      s.slides.forEach((T) => {
        T.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((d) => d.remove());
      }), r();
    }
  });
  let f = !1;
  a("virtualUpdate", () => {
    s.params.effect === t && (s.slides.length || (f = !0), requestAnimationFrame(() => {
      f && s.slides && s.slides.length && (n(), f = !1);
    }));
  });
}
function Me(e, t) {
  const s = me(t);
  return s !== t && (s.style.backfaceVisibility = "hidden", s.style.setProperty("-webkit-backface-visibility", "hidden")), s;
}
function $e({ swiper: e, duration: t, transformElements: s, allSlides: a }) {
  const { activeIndex: n } = e, i = (u) => {
    if (!u.parentElement)
      return e.slides.find((o) => o.shadowRoot && o.shadowRoot === u.parentNode);
    if (u.parentElement instanceof HTMLElement)
      return u.parentElement;
  };
  if (e.params.virtualTranslate && t !== 0) {
    let u = !1, o;
    a ? o = s : o = s.filter((r) => {
      const m = r.classList.contains("swiper-slide-transform") ? i(r) : r;
      return !!m && e.getSlideIndex(m) === n;
    }), o.forEach((r) => {
      xe(r, () => {
        if (u || !e || e.destroyed)
          return;
        u = !0, e.animating = !1;
        const m = new CustomEvent("transitionend", { bubbles: !0, cancelable: !0 });
        e.wrapperEl.dispatchEvent(m);
      });
    });
  }
}
const Ea = ({ swiper: e, extendParams: t, on: s }) => {
  t({
    fadeEffect: {
      crossFade: !1
    }
  });
  function a() {
    return e.params.fadeEffect;
  }
  ye({
    effect: "fade",
    swiper: e,
    on: s,
    setTranslate: () => {
      const { slides: u } = e, o = a();
      for (let r = 0; r < u.length; r += 1) {
        const m = u[r];
        let c = -(m.swiperSlideOffset ?? 0);
        e.params.virtualTranslate || (c -= e.translate);
        let T = 0;
        e.isHorizontal() || (T = c, c = 0);
        const d = m.progress ?? 0, l = o.crossFade ? Math.max(1 - Math.abs(d), 0) : 1 + Math.min(Math.max(d, -1), 0), g = Me(o, m);
        g.style.opacity = String(l), g.style.transform = `translate3d(${c}px, ${T}px, 0px)`;
      }
    },
    setTransition: (u) => {
      const o = e.slides.map((r) => me(r));
      o.forEach((r) => {
        r.style.transitionDuration = `${u}ms`;
      }), $e({ swiper: e, duration: u, transformElements: o, allSlides: !0 });
    },
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      spaceBetween: 0,
      virtualTranslate: !e.params.cssMode
    })
  });
}, va = ({ swiper: e, extendParams: t, on: s }) => {
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
  const n = (r, m, f) => {
    let c = f ? r.querySelector(".swiper-slide-shadow-left") : r.querySelector(".swiper-slide-shadow-top"), T = f ? r.querySelector(".swiper-slide-shadow-right") : r.querySelector(".swiper-slide-shadow-bottom");
    c || (c = ne("div", `swiper-slide-shadow-cube swiper-slide-shadow-${f ? "left" : "top"}`.split(" ")), r.append(c)), T || (T = ne("div", `swiper-slide-shadow-cube swiper-slide-shadow-${f ? "right" : "bottom"}`.split(" ")), r.append(T)), c && (c.style.opacity = String(Math.max(-m, 0))), T && (T.style.opacity = String(Math.max(m, 0)));
  };
  ye({
    effect: "cube",
    swiper: e,
    on: s,
    setTranslate: () => {
      const { el: r, wrapperEl: m, slides: f, width: c, height: T, rtlTranslate: d, size: l } = e, g = ke(e), v = a(), S = e.isHorizontal(), h = !!(e.virtual && e.params.virtual?.enabled);
      let p = 0, E = null;
      v.shadow && (S ? (E = e.wrapperEl.querySelector(".swiper-cube-shadow"), E || (E = ne("div", "swiper-cube-shadow"), e.wrapperEl.append(E)), E.style.height = `${c}px`) : (E = r.querySelector(".swiper-cube-shadow"), E || (E = ne("div", "swiper-cube-shadow"), r.append(E))));
      for (let y = 0; y < f.length; y += 1) {
        const I = f[y];
        let A = y;
        h && (A = parseInt(I.getAttribute("data-swiper-slide-index") ?? "0", 10));
        let w = A * 90, _ = Math.floor(w / 360);
        d && (w = -w, _ = Math.floor(-w / 360));
        const P = Math.max(Math.min(I.progress ?? 0, 1), -1);
        let b = 0, M = 0, C = 0;
        A % 4 === 0 ? (b = -_ * 4 * l, C = 0) : (A - 1) % 4 === 0 ? (b = 0, C = -_ * 4 * l) : (A - 2) % 4 === 0 ? (b = l + _ * 4 * l, C = l) : (A - 3) % 4 === 0 && (b = -l, C = 3 * l + l * 4 * _), d && (b = -b), S || (M = b, b = 0);
        const x = `rotateX(${g(S ? 0 : -w)}deg) rotateY(${g(S ? w : 0)}deg) translate3d(${b}px, ${M}px, ${C}px)`;
        P <= 1 && P > -1 && (p = A * 90 + P * 90, d && (p = -A * 90 - P * 90)), I.style.transform = x, v.slideShadows && n(I, P, S);
      }
      if (m.style.transformOrigin = `50% 50% -${l / 2}px`, m.style.setProperty("-webkit-transform-origin", `50% 50% -${l / 2}px`), v.shadow && E)
        if (S)
          E.style.transform = `translate3d(0px, ${c / 2 + v.shadowOffset}px, ${-c / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${v.shadowScale})`;
        else {
          const y = Math.abs(p) - Math.floor(Math.abs(p) / 90) * 90, I = 1.5 - (Math.sin(y * 2 * Math.PI / 360) / 2 + Math.cos(y * 2 * Math.PI / 360) / 2), A = v.shadowScale, w = v.shadowScale / I, _ = v.shadowOffset;
          E.style.transform = `scale3d(${A}, 1, ${w}) translate3d(0px, ${T / 2 + _}px, ${-T / 2 / w}px) rotateX(-89.99deg)`;
        }
      m.style.transform = `translate3d(0px,0,0px) rotateX(${g(e.isHorizontal() ? 0 : p)}deg) rotateY(${g(e.isHorizontal() ? -p : 0)}deg)`, m.style.setProperty("--swiper-cube-translate-z", "0px");
    },
    setTransition: (r) => {
      const { el: m, slides: f } = e;
      if (f.forEach((c) => {
        c.style.transitionDuration = `${r}ms`, c.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((T) => {
          T.style.transitionDuration = `${r}ms`;
        });
      }), e.params.cubeEffect?.shadow && !e.isHorizontal()) {
        const c = m.querySelector(".swiper-cube-shadow");
        c && (c.style.transitionDuration = `${r}ms`);
      }
    },
    recreateShadows: () => {
      const r = e.isHorizontal();
      e.slides.forEach((m) => {
        const f = Math.max(Math.min(m.progress ?? 0, 1), -1);
        n(m, f, r);
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
  const a = `swiper-slide-shadow${s ? `-${s}` : ""}${e ? ` swiper-slide-shadow-${e}` : ""}`, n = me(t), i = `.${a.split(" ").join(".")}`, u = n.querySelector(i);
  if (u)
    return u;
  const o = ne("div", a.split(" "));
  return n.append(o), o;
}
const Sa = ({ swiper: e, extendParams: t, on: s }) => {
  t({
    flipEffect: {
      slideShadows: !0,
      limitRotation: !0
    }
  });
  function a() {
    return e.params.flipEffect;
  }
  const n = (r, m) => {
    let f = e.isHorizontal() ? r.querySelector(".swiper-slide-shadow-left") : r.querySelector(".swiper-slide-shadow-top"), c = e.isHorizontal() ? r.querySelector(".swiper-slide-shadow-right") : r.querySelector(".swiper-slide-shadow-bottom");
    f || (f = be("flip", r, e.isHorizontal() ? "left" : "top")), c || (c = be("flip", r, e.isHorizontal() ? "right" : "bottom")), f && (f.style.opacity = String(Math.max(-m, 0))), c && (c.style.opacity = String(Math.max(m, 0)));
  };
  ye({
    effect: "flip",
    swiper: e,
    on: s,
    setTranslate: () => {
      const { slides: r, rtlTranslate: m } = e, f = a(), c = ke(e);
      for (let T = 0; T < r.length; T += 1) {
        const d = r[T];
        let l = d.progress ?? 0;
        f.limitRotation && (l = Math.max(Math.min(l, 1), -1));
        const g = d.swiperSlideOffset ?? 0;
        let S = -180 * l, h = 0, p = e.params.cssMode ? -g - e.translate : -g, E = 0;
        e.isHorizontal() ? m && (S = -S) : (E = p, p = 0, h = -S, S = 0), d.style.zIndex = String(-Math.abs(Math.round(l)) + r.length), f.slideShadows && n(d, l);
        const y = `translate3d(${p}px, ${E}px, 0px) rotateX(${c(h)}deg) rotateY(${c(S)}deg)`, I = Me(f, d);
        I.style.transform = y;
      }
    },
    setTransition: (r) => {
      const m = e.slides.map((f) => me(f));
      m.forEach((f) => {
        f.style.transitionDuration = `${r}ms`, f.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((c) => {
          c.style.transitionDuration = `${r}ms`;
        });
      }), $e({ swiper: e, duration: r, transformElements: m });
    },
    recreateShadows: () => {
      const r = a();
      e.slides.forEach((m) => {
        let f = m.progress ?? 0;
        r.limitRotation && (f = Math.max(Math.min(f, 1), -1)), n(m, f);
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
}, ba = ({ swiper: e, extendParams: t, on: s }) => {
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
      const { width: u, height: o, slides: r, slidesSizesGrid: m } = e, f = a(), c = e.isHorizontal(), T = e.translate, d = c ? -T + u / 2 : -T + o / 2, l = c ? f.rotate : -f.rotate, g = f.depth, v = ke(e);
      for (let S = 0, h = r.length; S < h; S += 1) {
        const p = r[S], E = m[S], y = p.swiperSlideOffset ?? 0, I = (d - y - E / 2) / E, A = typeof f.modifier == "function" ? f.modifier(I) : I * f.modifier;
        let w = c ? l * A : 0, _ = c ? 0 : l * A, P = -g * Math.abs(A), b = typeof f.stretch == "string" && f.stretch.indexOf("%") !== -1 ? parseFloat(f.stretch) / 100 * E : f.stretch, M = c ? 0 : b * A, C = c ? b * A : 0, x = 1 - (1 - f.scale) * Math.abs(A);
        Math.abs(C) < 1e-3 && (C = 0), Math.abs(M) < 1e-3 && (M = 0), Math.abs(P) < 1e-3 && (P = 0), Math.abs(w) < 1e-3 && (w = 0), Math.abs(_) < 1e-3 && (_ = 0), Math.abs(x) < 1e-3 && (x = 0);
        const R = `translate3d(${C}px,${M}px,${P}px)  rotateX(${v(_)}deg) rotateY(${v(w)}deg) scale(${x})`, L = Me(f, p);
        if (L.style.transform = R, p.style.zIndex = String(-Math.abs(Math.round(A)) + 1), f.slideShadows) {
          let N = c ? p.querySelector(".swiper-slide-shadow-left") : p.querySelector(".swiper-slide-shadow-top"), k = c ? p.querySelector(".swiper-slide-shadow-right") : p.querySelector(".swiper-slide-shadow-bottom");
          N || (N = be("coverflow", p, c ? "left" : "top")), k || (k = be("coverflow", p, c ? "right" : "bottom")), N && (N.style.opacity = String(A > 0 ? A : 0)), k && (k.style.opacity = String(-A > 0 ? -A : 0));
        }
      }
    },
    setTransition: (u) => {
      e.slides.map((r) => me(r)).forEach((r) => {
        r.style.transitionDuration = `${u}ms`, r.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((m) => {
          m.style.transitionDuration = `${u}ms`;
        });
      });
    },
    perspective: () => !0,
    overwriteParams: () => ({
      watchSlidesProgress: !0
    })
  });
}, ya = ({ swiper: e, extendParams: t, on: s }) => {
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
  const n = (o) => typeof o == "string" ? o : `${o}px`;
  ye({
    effect: "creative",
    swiper: e,
    on: s,
    setTranslate: () => {
      const { slides: o, wrapperEl: r, slidesSizesGrid: m } = e, f = a(), { progressMultiplier: c } = f, T = e.params.centeredSlides, d = ke(e);
      if (T) {
        const l = m[0] / 2 - (e.params.slidesOffsetBefore ?? 0);
        r.style.transform = `translateX(calc(50% - ${l}px))`;
      }
      for (let l = 0; l < o.length; l += 1) {
        const g = o[l], v = g.progress ?? 0, S = Math.min(Math.max(v, -f.limitProgress), f.limitProgress);
        let h = S;
        T || (h = Math.min(Math.max(g.originalProgress ?? 0, -f.limitProgress), f.limitProgress));
        const p = g.swiperSlideOffset ?? 0, E = [
          e.params.cssMode ? -p - e.translate : -p,
          0,
          0
        ], y = [0, 0, 0];
        let I = !1;
        e.isHorizontal() || (E[1] = E[0], E[0] = 0);
        let A = {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          scale: 1,
          opacity: 1
        };
        S < 0 ? (A = f.next, I = !0) : S > 0 && (A = f.prev, I = !0), E.forEach((x, R) => {
          E[R] = `calc(${x}px + (${n(A.translate[R])} * ${Math.abs(S * c)}))`;
        }), y.forEach((x, R) => {
          y[R] = A.rotate[R] * Math.abs(S * c);
        }), g.style.zIndex = String(-Math.abs(Math.round(v)) + o.length);
        const w = E.join(", "), _ = `rotateX(${d(y[0])}deg) rotateY(${d(y[1])}deg) rotateZ(${d(y[2])}deg)`, P = h < 0 ? `scale(${1 + (1 - A.scale) * h * c})` : `scale(${1 - (1 - A.scale) * h * c})`, b = h < 0 ? 1 + (1 - A.opacity) * h * c : 1 - (1 - A.opacity) * h * c, M = `translate3d(${w}) ${_} ${P}`;
        if (I && A.shadow || !I) {
          let x = g.querySelector(".swiper-slide-shadow");
          if (!x && A.shadow && (x = be("creative", g)), x) {
            const R = f.shadowPerProgress ? S * (1 / f.limitProgress) : S;
            x.style.opacity = String(Math.min(Math.max(Math.abs(R), 0), 1));
          }
        }
        const C = Me(f, g);
        C.style.transform = M, C.style.opacity = String(b), A.origin && (C.style.transformOrigin = A.origin);
      }
    },
    setTransition: (o) => {
      const r = e.slides.map((m) => me(m));
      r.forEach((m) => {
        m.style.transitionDuration = `${o}ms`, m.querySelectorAll(".swiper-slide-shadow").forEach((f) => {
          f.style.transitionDuration = `${o}ms`;
        });
      }), $e({ swiper: e, duration: o, transformElements: r, allSlides: !0 });
    },
    perspective: () => a().perspective,
    overwriteParams: () => ({
      watchSlidesProgress: !0,
      virtualTranslate: !e.params.cssMode
    })
  });
}, Aa = ({ swiper: e, extendParams: t, on: s }) => {
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
      const { slides: u, activeIndex: o, rtlTranslate: r } = e, m = a(), { startTranslate: f, isTouched: c } = e.touchEventsData, T = r ? -e.translate : e.translate;
      for (let d = 0; d < u.length; d += 1) {
        const l = u[d], g = l.progress ?? 0, v = Math.min(Math.max(g, -4), 4);
        let S = l.swiperSlideOffset ?? 0;
        e.params.centeredSlides && !e.params.cssMode && (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`), e.params.centeredSlides && e.params.cssMode && (S -= u[0].swiperSlideOffset ?? 0);
        let h = e.params.cssMode ? -S - e.translate : -S, p = 0;
        const E = -100 * Math.abs(v);
        let y = 1, I = -m.perSlideRotate * v, A = m.perSlideOffset - Math.abs(v) * 0.75;
        const w = e.virtual && e.params.virtual?.enabled ? e.virtual.from + d : d, _ = (w === o || w === o - 1) && v > 0 && v < 1 && (c || e.params.cssMode) && (T ?? 0) < (f ?? 0), P = (w === o || w === o + 1) && v < 0 && v > -1 && (c || e.params.cssMode) && (T ?? 0) > (f ?? 0);
        if (_ || P) {
          const x = (1 - Math.abs((Math.abs(v) - 0.5) / 0.5)) ** 0.5;
          I += -28 * v * x, y += -0.5 * x, A += 96 * x, p = `${(m.rotate || e.isHorizontal() ? -25 : 0) * x * Math.abs(v)}%`;
        }
        if (v < 0 ? h = `calc(${h}px ${r ? "-" : "+"} (${A * Math.abs(v)}%))` : v > 0 ? h = `calc(${h}px ${r ? "-" : "+"} (-${A * Math.abs(v)}%))` : h = `${h}px`, !e.isHorizontal()) {
          const x = p;
          p = h, h = x;
        }
        const b = v < 0 ? `${1 + (1 - y) * v}` : `${1 - (1 - y) * v}`, M = `
        translate3d(${h}, ${p}, ${E}px)
        rotateZ(${m.rotate ? r ? -I : I : 0}deg)
        scale(${b})
      `;
        if (m.slideShadows) {
          let x = l.querySelector(".swiper-slide-shadow");
          x || (x = be("cards", l)), x && (x.style.opacity = String(Math.min(Math.max((Math.abs(v) - 0.5) / 0.5, 0), 1)));
        }
        l.style.zIndex = String(-Math.abs(Math.round(g)) + u.length);
        const C = Me(m, l);
        C.style.transform = M;
      }
    },
    setTransition: (u) => {
      const o = e.slides.map((r) => me(r));
      o.forEach((r) => {
        r.style.transitionDuration = `${u}ms`, r.querySelectorAll(".swiper-slide-shadow").forEach((m) => {
          m.style.transitionDuration = `${u}ms`;
        });
      }), $e({ swiper: e, duration: u, transformElements: o });
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
}, _a = [
  Us,
  qs,
  js,
  Ks,
  Js,
  ea,
  ta,
  sa,
  aa,
  ia,
  la,
  ra,
  oa,
  da,
  ca,
  fa,
  Ta,
  Ea,
  va,
  Sa,
  ba,
  ya,
  Aa
];
te.use(_a);
function B(e, t, s) {
  const a = e.getAttribute(t)?.trim();
  if (!(!a || a === s))
    return a;
}
function xa(e, t, s) {
  const a = e.getAttribute(t)?.trim();
  if (!a) return;
  if (a.toLowerCase() === "auto") return "auto";
  const n = Number(a);
  if (!(isNaN(n) || n === s))
    return n;
}
function Ce(e, t, s) {
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
function D(e, t, s) {
  const a = e.getAttribute(t)?.trim()?.toLowerCase();
  if (a) {
    if (a === "true") return s === !0 ? void 0 : !0;
    if (a === "false") return s === !1 ? void 0 : !1;
  }
}
function La(e) {
  return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function yt(e) {
  if (typeof e != "object" || e === null) return e;
  for (const t in e) {
    const s = e[t];
    s == null ? delete e[t] : typeof s == "object" && s !== null && !La(s) && (yt(s), Object.keys(s).length === 0 && delete e[t]);
  }
  return e;
}
function At(e, t) {
  return e.find((s) => s.name?.toLowerCase() === t?.toLowerCase());
}
function Ca(e, t, s) {
  const a = At(e, t);
  return a ? a.swiper ? a : (console.error(`[MANIPULATION] Invalid Swiper instance in Waterfall "${t}"`), null) : (console.warn(`[MANIPULATION] No Waterfall found with name: "${t}"`, s), null);
}
function Ma(e, t, s) {
  const a = e.filter((n) => n.name?.toLowerCase() === t?.toLowerCase()).map((n) => n.swiper);
  return s && console.log(`📊 Found ${a.length} matching waterfall(s) for "${t}"`), a;
}
function Ia() {
  document.querySelectorAll('[waterfall] .swiper-wrapper[role="list"]').forEach((e) => {
    e.removeAttribute("role");
  });
}
const ve = "waterfall", To = "waterfall-preload", Eo = "waterfall-postload", vo = "waterfall-content", wa = "waterfall-debug-mode", So = "waterfall-advanced-debug-mode", bo = "waterfall-a11y", Ra = "waterfall-a11y-container-message", Pa = "waterfall-a11y-container-role", Oa = "waterfall-a11y-container-role-description-message", Da = "waterfall-a11y-enabled", Na = "waterfall-a11y-first-slide-message", za = "waterfall-a11y-id", ka = "waterfall-a11y-item-role-description-message", $a = "waterfall-a11y-last-slide-message", Ga = "waterfall-a11y-next-slide-message", Ba = "waterfall-a11y-notification-class", Ha = "waterfall-a11y-pagination-bullet-message", Va = "waterfall-a11y-prev-slide-message", Wa = "waterfall-a11y-scroll-on-focus", Ya = "waterfall-a11y-slide-label-message", Fa = "waterfall-a11y-slide-role", Xa = "waterfall-centered-slides-lmobile", Ua = "waterfall-slides-per-view-lmobile", qa = "waterfall-slides-per-group-lmobile", ja = "waterfall-space-between-lmobile", Ka = "waterfall-centered-slides-tablet", Za = "waterfall-slides-per-view-tablet", yo = "waterfall-slides-per-group-tablet", Qa = "waterfall-space-between-tablet", Ja = "waterfall-centered-slides-desktop", en = "waterfall-slides-per-view-desktop", tn = "waterfall-slides-per-group-desktop", sn = "waterfall-space-between-desktop", an = "waterfall-centered-slides-large", nn = "waterfall-slides-per-view-large", ut = "waterfall-slides-per-group-large", ln = "waterfall-space-between-large", rn = "waterfall-centered-slides-xlarge", on = "waterfall-slides-per-view-xlarge", dn = "waterfall-slides-per-group-xlarge", cn = "waterfall-space-between-xlarge", et = "waterfall-controller", fn = "waterfall-controller-by", un = "waterfall-controller-inverse", Ao = "waterfall-effect-crossfade", pn = "waterfall-coverflow-depth", mn = "waterfall-coverflow-modifier", hn = "waterfall-coverflow-rotate", gn = "waterfall-coverflow-scale", Tn = "waterfall-coverflow-slide-shadows", En = "waterfall-coverflow-stretch", vn = "waterfall-flip-limit-rotation", Sn = "waterfall-flip-slide-shadows", bn = "waterfall-cube-shadow", yn = "waterfall-cube-shadow-offset", An = "waterfall-cube-shadow-scale", _n = "waterfall-cube-slide-shadows", xn = "waterfall-cards-per-slide-offset", Ln = "waterfall-cards-per-slide-rotate", Cn = "waterfall-cards-rotate", Mn = "waterfall-cards-slide-shadows", In = "waterfall-allow-slide-next", wn = "waterfall-allow-slide-prev", Rn = "waterfall-allow-touch-move", Pn = "waterfall-auto-height", On = "waterfall-breakpoints-base", Dn = "waterfall-center-insufficient-slides", Nn = "waterfall-centered-slides", _o = "waterfall-centered-slides-bounds", zn = "waterfall-container-modifier-class", kn = "waterfall-create-elements", $n = "waterfall-css-mode", Gn = "waterfall-direction", Bn = "waterfall-edge-swipe-detection", Hn = "waterfall-edge-swipe-threshold", Vn = "waterfall-effect", Wn = "waterfall-enabled", Yn = "waterfall-events-prefix", Fn = "waterfall-focusable-elements", Xn = "waterfall-follow-finger", Un = "waterfall-grab-cursor", qn = "waterfall-height", jn = "waterfall-init", Kn = "waterfall-initial-slide", Zn = "waterfall-lazy-preload-prev-next", Qn = "waterfall-lazy-preloader-class", Jn = "waterfall-long-swipes", ei = "waterfall-long-swipes-ms", ti = "waterfall-long-swipes-ratio", xo = "waterfall-loop-mode", si = "waterfall-loop-add-blank-slides", ai = "waterfall-loop-additional-slides", ni = "waterfall-loop-prevents-sliding", ii = "waterfall-max-backface-hidden-slides", li = "waterfall-nested", ri = "waterfall-no-swiping", oi = "waterfall-no-swiping-class", di = "waterfall-no-swiping-selector", ci = "waterfall-normalize-slide-index", fi = "waterfall-observe-parents", ui = "waterfall-observe-slide-children", pi = "waterfall-observer", mi = "waterfall-data-one-way-movement", hi = "waterfall-passive-listeners", gi = "waterfall-prevent-clicks", Ti = "waterfall-prevent-clicks-propagation", Ei = "waterfall-prevent-interaction-on-transition", vi = "waterfall-resistance", Si = "waterfall-resistance-ratio", bi = "waterfall-resize-observer", Lo = "waterfall-rewind", yi = "waterfall-round-lengths", Ai = "waterfall-run-callbacks-on-init", _i = "waterfall-set-wrapper-size", xi = "waterfall-short-swipes", Li = "waterfall-simulate-touch", Ci = "waterfall-slide-active-class", Mi = "waterfall-slide-class", Ii = "waterfall-slide-blank-class", wi = "waterfall-slide-fully-visible-class", Ri = "waterfall-slide-next-class", Pi = "waterfall-slide-prev-class", Oi = "waterfall-slide-to-clicked-slide", Di = "waterfall-slide-visible-class", Ni = "waterfall-slides-offset-after", zi = "waterfall-slides-offset-before", ki = "waterfall-slides-per-group", $i = "waterfall-slides-per-group-auto", Gi = "waterfall-slides-per-group-skip", Bi = "waterfall-slides-per-view", Hi = "waterfall-space-between", Vi = "waterfall-speed", Wi = "waterfall-swipe-handler", Yi = "waterfall-swiper-element-node-name", Fi = "waterfall-threshold", Xi = "waterfall-touch-angle", Ui = "waterfall-touch-events-target", qi = "waterfall-touch-move-stop-propagation", ji = "waterfall-touch-ratio", Ki = "waterfall-touch-release-on-edges", Zi = "waterfall-touch-start-force-prevent-default", Qi = "waterfall-touch-start-prevent-default", Ji = "waterfall-unique-nav-elements", el = "waterfall-update-on-window-resize", tl = "waterfall-url", sl = "waterfall-user-agent", Co = "waterfall-virtual-translate", al = "waterfall-watch-overflow", nl = "waterfall-watch-slides-progress", il = "waterfall-width", ll = "waterfall-wrapper-class", rl = "waterfall-hash-replace-state", ol = "waterfall-hash-watch-state", dl = "waterfall-history-keep-query", cl = "waterfall-history-key", fl = "waterfall-history-replace-state", ul = "waterfall-history-root", pl = "waterfall-keyboard-enabled", ml = "waterfall-keyboard-only-in-viewport", hl = "waterfall-keyboard-page-up-down", gl = "waterfall-mouse-enabled", Tl = "waterfall-mouse-events-target", El = "waterfall-mouse-force-to-axis", vl = "waterfall-mouse-invert", Sl = "waterfall-mouse-no-mouse-wheel-class", bl = "waterfall-mouse-release-on-edges", yl = "waterfall-mouse-sensitivity", Al = "waterfall-mouse-threshold-delta", _l = "waterfall-mouse-threshold-time", xl = "waterfall-grid-rows", Ll = "waterfall-grid-fill", Cl = "waterfall-navigation-disabled-class", Ml = "waterfall-navigation-enabled", Il = "waterfall-navigation-hidden-class", wl = "waterfall-navigation-hide-on-click", _t = "waterfall-navigation-lock-class", Rl = "waterfall-navigation-navigation-disabled-class", Pl = "waterfall-pagination-type", Mo = "waterfall-pagination-bullet-class", Ol = "waterfall-pagination-bullet-active-class", Dl = "waterfall-pagination-clickable", Nl = "waterfall-pagination-clickable-class", zl = "waterfall-pagination-current-class", kl = "waterfall-pagination-dynamic-bullets", $l = "waterfall-pagination-dynamic-main-bullets", Gl = "waterfall-pagination-enabled", Bl = "waterfall-pagination-hidden-class", Hl = "waterfall-pagination-hide-on-click", Vl = "waterfall-pagination-horizontal-class", Io = "waterfall-pagination-lock-class", Wl = "waterfall-pagination-modifier-class", Yl = "waterfall-pagination-pagination-disabled-class", Fl = "waterfall-pagination-progressbar-fill-class", Xl = "waterfall-pagination-progressbar-opposite", Ul = "waterfall-pagination-progressbar-opposite-class", ql = "waterfall-pagination-total-class", jl = "waterfall-pagination-vertical-class", Kl = "waterfall-autoplay-mode", xt = "waterfall-smooth-autoplay", Zl = "waterfall-delay", Ql = "waterfall-disable-on-interaction", Jl = "waterfall-reverse-direction", er = "waterfall-pause-on-mouse-enter", tr = "waterfall-stop-on-last-slide", wo = "waterfall-wait-for-transition", sr = "waterfall-free-mode-enabled", ar = "waterfall-free-mode-minimum-velocity", nr = "waterfall-free-mode-momentum", ir = "waterfall-free-mode-momentum-bounce", lr = "waterfall-free-mode-momentum-bounce-ratio", rr = "waterfall-free-mode-momentum-ratio", or = "waterfall-free-mode-momentum-velocity-ratio", dr = "waterfall-free-mode-sticky", Ro = "waterfall-scrollbar-drag-class", cr = "waterfall-scrollbar-drag-size", fr = "waterfall-scrollbar-draggable", ur = "waterfall-scrollbar-enabled", pr = "waterfall-scrollbar-hide", mr = "waterfall-scrollbar-horizontal-class", hr = "waterfall-scrollbar-lock-class", gr = "waterfall-scrollbar-scrollbar-disabled-class", Tr = "waterfall-scrollbar-vertical-class", Er = "waterfall-scrollbar-snap-on-release", tt = "waterfall-thumbs", vr = "waterfall-thumbs-auto-scroll-offset", Sr = "waterfall-thumbs-multiple-active-thumbs", br = "waterfall-slide-thumb-active-class", yr = "waterfall-thumbs-container-class", Ar = "waterfall-add-slide", pt = "waterfall-add-index", _r = "waterfall-append-slide", xr = "waterfall-prepend-slide", Lr = "waterfall-remove-slide", mt = "waterfall-remove-index", Po = "waterfall-remove-all-slides", Oo = "waterfall-zoom", Do = "waterfall-zoom-enabled", Cr = "waterfall-zoom-container-class", Mr = "waterfall-zoom-limit-to-original-size", Ir = "waterfall-zoom-max-ratio", wr = "waterfall-zoom-min-ratio", Rr = "waterfall-zoom-pan-on-mouse-move", Pr = "waterfall-zoom-toggle", Or = "waterfall-zoomed-slide-class", No = "waterfall-zoom-fade", Dr = "waterfall-parallax-enabled", zo = "data-swiper-parallax", ko = "data-swiper-parallax-x", $o = "data-swiper-parallax-y", Go = "data-swiper-parallax-scale", Bo = "data-swiper-parallax-opacity", Ho = "data-swiper-parallax-duration", Nr = "waterfall-callback-slide-change", zr = "waterfall-playback-mode", pe = "waterfall-el", kr = "pagination", $r = "pagination-bullet", Vo = "pagination-bullet-active", Wo = "waterfall-navigation", Gr = "navigation-next", Br = "navigation-prev", Hr = "scrollbar", Vr = "scrollbar-drag", Wr = "slide-count";
function Yr(e, t, s) {
  e.allowSlideNext = D(t, In, !0), e.allowSlidePrev = D(t, wn, !0), e.navigation = {
    disabledClass: B(t, Cl, "swiper-button-disabled"),
    enabled: D(t, Ml),
    hiddenClass: B(t, Il, "swiper-button-hidden"),
    hideOnClick: D(t, wl, !1),
    lockClass: B(t, _t, "swiper-button-lock"),
    navigationDisabledClass: B(t, Rl, "swiper-navigation-disabled"),
    nextEl: `[${ve}='${s}'] [${pe}=${Gr}]`,
    prevEl: `[${ve}='${s}'] [${pe}=${Br}]`
  };
}
function Fr(e, t) {
  e.breakpointsBase = B(t, On, "window"), e.breakpoints = {
    478: {
      centeredSlides: D(t, Xa),
      slidesPerView: W(t, Ua),
      slidesPerGroup: W(t, qa),
      spaceBetween: W(t, ja)
    },
    767: {
      centeredSlides: D(t, Ka),
      slidesPerView: W(t, Za),
      slidesPerGroup: W(t, ut),
      spaceBetween: W(t, Qa)
    },
    991: {
      centeredSlides: D(t, Ja),
      slidesPerView: W(t, en),
      slidesPerGroup: W(t, tn),
      spaceBetween: W(t, sn)
    },
    1280: {
      centeredSlides: D(t, an),
      slidesPerView: W(t, nn),
      slidesPerGroup: W(t, ut),
      spaceBetween: W(t, ln)
    },
    1440: {
      centeredSlides: D(t, rn),
      slidesPerView: W(t, on),
      slidesPerGroup: W(t, dn),
      spaceBetween: W(t, cn)
    }
  };
}
function Xr(e, t) {
  const s = t.querySelector(`[${pe}=${kr}]`);
  if (!s) return;
  const a = B(t, Pl), n = t.querySelector(`[${pe}=${$r}]`);
  e.pagination = {
    bulletActiveClass: B(t, Ol, "swiper-pagination-bullet-active"),
    bulletClass: n?.getAttribute("class")?.trim() || "swiper-pagination-bullet",
    bulletElement: n?.tagName?.toLowerCase() || "span",
    clickable: D(t, Dl, !1),
    clickableClass: B(t, Nl, "swiper-pagination-clickable"),
    currentClass: B(t, zl, "swiper-pagination-current"),
    dynamicBullets: D(t, kl, !1),
    dynamicMainBullets: W(t, $l, 1),
    el: s || null,
    enabled: D(t, Gl),
    hiddenClass: B(t, Bl, "swiper-pagination-hidden"),
    hideOnClick: D(t, Hl, !0),
    horizontalClass: B(t, Vl, "swiper-pagination-horizontal"),
    lockClass: B(t, _t, "swiper-pagination-lock"),
    modifierClass: B(t, Wl, "swiper-pagination-"),
    paginationDisabledClass: B(
      t,
      Yl,
      "swiper-pagination-disabled"
    ),
    progressbarFillClass: B(
      t,
      Fl,
      "swiper-pagination-progressbar-fill"
    ),
    progressbarOpposite: D(t, Xl, !1),
    progressbarOppositeClass: B(
      t,
      Ul,
      "swiper-pagination-progressbar-opposite"
    ),
    renderBullet: i(),
    totalClass: B(t, ql, "swiper-pagination-total"),
    type: u(),
    verticalClass: B(t, jl, "swiper-pagination-vertical")
  };
  function i() {
    if (a === "numberBullets")
      return (o, r) => `<span class="${r}">${o + 1}</span>`;
    if (a === "bullets")
      return (o, r) => `<span class="${r}"></span>`;
  }
  function u() {
    return a === "numberBullets" || a === "bullets" ? "bullets" : a === "fraction" ? "fraction" : a === "progressbar" ? "progressbar" : a === "custom" ? "custom" : "bullets";
  }
}
function Ur(e, t) {
  const s = t.querySelector(`[${pe}=${Hr}]`);
  if (!s) return;
  const a = s?.querySelector(`[${pe}=${Vr}]`);
  e.scrollbar = {
    dragClass: a?.getAttribute("class") || "",
    dragSize: Ce(t, cr, "auto"),
    draggable: D(t, fr, !1),
    el: s || null,
    enabled: D(t, ur),
    hide: D(t, pr, !0),
    horizontalClass: B(t, mr, "swiper-scrollbar-horizontal"),
    lockClass: B(t, hr, "swiper-scrollbar-lock"),
    scrollbarDisabledClass: B(t, gr, "swiper-scrollbar-disabled"),
    snapOnRelease: D(t, Er, !0),
    // NOTE doc says false but actually true
    verticalClass: B(t, Tr, "swiper-scrollbar-vertical")
  };
}
function qr(e, t) {
  const s = B(t, zr, "none");
  s === "loop" && (e.loop = !0), s === "rewind" && (e.rewind = !0), s === "none" && (e.loop = !1, e.rewind = !1), e.loopAddBlankSlides = D(t, si, !0), e.loopAdditionalSlides = W(t, ai, 0), e.loopPreventsSliding = D(t, ni, !0);
  const a = D(t, Kl, !1), n = D(t, xt, !1);
  let i = W(t, Zl, void 0);
  n && (i = 0), a && (jr(), e.autoplay = {
    delay: i,
    disableOnInteraction: D(t, Ql, !1),
    // documentation says default is true, doesn't appear to be correct
    reverseDirection: D(t, Jl, !1),
    pauseOnMouseEnter: D(t, er, !1),
    stopOnLastSlide: D(t, tr, !1)
  }), e.speed = W(t, Vi, 300), e.oneWayMovement = D(t, mi, !1);
}
function jr() {
  document.querySelectorAll(`[${xt}='true'] .swiper-wrapper`).forEach((e) => {
    e.style.transitionTimingFunction = "linear";
  });
}
function Kr(e, t) {
  const s = B(t, Vn, "slide");
  e.effect = s, s === "fade" ? e.fadeEffect = { crossFade: !0 } : s === "coverflow" ? e.coverflowEffect = {
    depth: W(t, pn, 100),
    modifier: W(t, mn, 1),
    rotate: W(t, hn, 50),
    scale: W(t, gn, 1),
    slideShadows: D(t, Tn, !0),
    stretch: W(t, En, 0)
  } : s === "flip" ? e.flipEffect = {
    limitRotation: D(t, vn, !0),
    slideShadows: D(t, Sn, !0)
  } : s === "cube" ? e.cubeEffect = {
    shadow: D(t, bn, !0),
    shadowOffset: W(t, yn, 20),
    shadowScale: W(t, An, 0.94),
    slideShadows: D(t, _n, !0)
  } : s === "cards" && (e.cardsEffect = {
    perSlideOffset: W(t, xn, 8),
    perSlideRotate: W(t, Ln, 2),
    rotate: D(t, Cn, !0),
    slideShadows: D(t, Mn, !0)
  });
}
function Zr(e, t) {
  e.autoHeight = D(t, Pn, !1), e.centerInsufficientSlides = D(t, Dn, !1), e.centeredSlides = D(t, Nn, !1), e.direction = Ce(t, Gn, "horizontal"), e.grid = {
    fill: Ce(t, Ll, "column"),
    rows: W(t, xl, 1)
  }, e.height = W(t, qn), e.slidesOffsetAfter = W(t, Ni, 0), e.slidesOffsetBefore = W(t, zi, 0), e.slidesPerGroup = W(t, ki, 1), e.slidesPerGroupAuto = D(t, $i, !1), e.slidesPerGroupSkip = W(t, Gi, 0), e.slidesPerView = xa(t, Bi, 1), e.spaceBetween = W(t, Hi, 0), e.width = W(t, il);
}
function Qr(e, t) {
  e.containerModifierClass = B(t, zn, "swiper-"), e.initialSlide = W(t, Kn, 0), e.nested = D(t, li, !1), e.normalizeSlideIndex = D(t, ci, !0), e.slideActiveClass = B(t, Ci, "swiper-slide-active"), e.slideBlankClass = B(t, Ii, "swiper-slide-blank"), e.slideClass = B(t, Mi, "swiper-slide"), e.slideFullyVisibleClass = B(t, wi, "swiper-slide-fully-visible"), e.slideNextClass = B(t, Ri, "swiper-slide-next"), e.slidePrevClass = B(t, Pi, "swiper-slide-prev"), e.slideVisibleClass = B(t, Di, "swiper-slide-visible"), e.swipeHandler = B(t, Wi), e.swiperElementNodeName = B(t, Yi, "SWIPER-CONTAINER"), e.wrapperClass = B(t, ll, "swiper-wrapper");
}
function Jr() {
  document.querySelectorAll(".swiper-wrapper").forEach((e) => {
    e.querySelectorAll(".swiper-slide").forEach((t, s) => {
      const a = t.querySelector(`[${pe}=${Wr}]`);
      a && (a.textContent = (s + 1).toString());
    });
  });
}
function eo(e, t, s, a) {
  const n = B(t, tt, "");
  if (!n || n === "")
    return;
  const i = At(s, n);
  if (!i) {
    a && console.warn("A matching thumbs waterfall was not found for ", n);
    return;
  }
  return e.thumbs = {
    autoScrollOffset: W(t, vr, 0),
    multipleActiveThumbs: D(t, Sr, !1),
    slideThumbActiveClass: B(t, br, "swiper-slide-thumb-active"),
    swiper: i.swiper,
    thumbsContainerClass: B(t, yr, "swiper-thumbs")
  }, e;
}
function to(e, t) {
  e.keyboard = {
    enabled: D(t, pl, !1),
    onlyInViewport: D(t, ml, !0),
    pageUpDown: D(t, hl, !0)
  };
}
function so(e, t) {
  e.hashNavigation = {
    //getSlideIndex
    replaceState: D(t, rl, !1),
    watchState: D(t, ol, !1)
  };
}
function ao(e, t) {
  e.history = {
    keepQuery: D(t, dl, !1),
    key: B(t, cl, "slides"),
    replaceState: D(t, fl, !1),
    root: B(t, ul, "")
  };
}
function no(e, t, s, a) {
  const n = B(t, et, "");
  if (!n) return;
  const i = Ma(s, n, a);
  a && (i.length ? console.log(`Controller Swipers for selector "${n}":`, i) : console.error(`No controller swipers found for selector "${n}"`)), e.controller = {
    by: Ce(t, fn, "slide"),
    control: i,
    inverse: D(t, un, !1)
  };
}
function io(e, t) {
  return e.a11y = {
    containerMessage: B(t, Ra, ""),
    containerRole: B(t, Pa, ""),
    containerRoleDescriptionMessage: B(t, Oa, ""),
    enabled: D(t, Da, !0),
    firstSlideMessage: B(t, Na, "This is the first slide"),
    id: B(t, za, ""),
    itemRoleDescriptionMessage: B(t, ka, ""),
    lastSlideMessage: B(t, $a, "This is the last slide"),
    nextSlideMessage: B(t, Ga, "Next slide"),
    notificationClass: B(t, Ba, "swiper-notification"),
    paginationBulletMessage: B(t, Ha, "Go to slide {{index}}"),
    prevSlideMessage: B(t, Va, "Previous slide"),
    scrollOnFocus: D(t, Wa, !0),
    slideLabelMessage: B(t, Ya, "{{index}} / {{slidesLength}}"),
    slideRole: B(t, Fa, "group")
  }, e;
}
function Pe(e, t) {
  if (!Array.isArray(window.waterfalls)) {
    console.error("window.waterfalls is not an array or not defined.");
    return;
  }
  const s = /* @__PURE__ */ new Set();
  document.querySelectorAll(`[${e}]`).forEach((a) => {
    const n = a.getAttribute(e);
    if (!n) return;
    const i = Ca(window.waterfalls, n, a);
    if (!i) return;
    const u = i.swiper, o = a.cloneNode(!0);
    if (o.removeAttribute(e), t === "add" ? o.removeAttribute(pt) : t === "remove" && o.removeAttribute(mt), o.classList.contains("swiper-slide") || o.classList.add("swiper-slide"), t === "append")
      u.appendSlide(o.outerHTML);
    else if (t === "prepend")
      u.prependSlide(o.outerHTML);
    else if (t === "add") {
      let m = Number(a.getAttribute(pt));
      m || (m = 1);
      const f = document.createElement("div");
      f.innerHTML = o.outerHTML;
      const c = f.children[0];
      c && u.addSlide(m, c);
    } else if (t === "remove") {
      const m = Number(a.getAttribute(mt));
      m !== -1 ? u.removeSlide(m) : console.warn(`[MANIPULATION] Slide not found in Swiper for removal: ${n}`);
    }
    a.remove();
    const r = a.closest(".w-dyn-list");
    r && s.add(r), u.update();
  }), s.forEach((a) => a.remove());
}
function lo() {
  Pe(Ar, "add"), Pe(_r, "append"), Pe(xr, "prepend"), Pe(Lr, "remove");
}
function ro(e, t) {
  e.zoom = {
    containerClass: B(t, Cr, "swiper-zoom-container"),
    limitToOriginalSize: D(t, Mr, !1),
    maxRatio: W(t, Ir, 3),
    minRatio: W(t, wr, 1),
    panOnMouseMove: D(t, Rr, !1),
    toggle: D(t, Pr, !0),
    zoomedSlideClass: B(t, Or, "swiper-slide-zoomed")
  };
}
function oo(e, t) {
  e.allowTouchMove = D(t, Rn, !0), e.edgeSwipeDetection = D(t, Bn, !1), e.edgeSwipeThreshold = W(t, Hn, 20), e.focusableElements = B(
    t,
    Fn,
    "input, select, option, textarea, button, video, label"
  ), e.followFinger = D(t, Xn, !0), e.grabCursor = D(t, Un, !1), e.longSwipes = D(t, Jn, !0), e.longSwipesMs = W(t, ei, 300), e.longSwipesRatio = W(t, ti, 0.5), e.noSwiping = D(t, ri, !0), e.noSwipingClass = B(t, oi, "swiper-no-swiping"), e.noSwipingSelector = B(t, di), e.preventClicks = D(t, gi, !0), e.preventClicksPropagation = D(t, Ti, !0), e.preventInteractionOnTransition = D(t, Ei, !1), e.resistance = D(t, vi, !0), e.resistanceRatio = W(t, Si, 0.85), e.shortSwipes = D(t, xi, !0), e.simulateTouch = D(t, Li, !0), e.slideToClickedSlide = D(t, Oi, !1), e.threshold = W(t, Fi, 5), e.touchAngle = W(t, Xi, 45), e.touchEventsTarget = Ce(t, Ui, "wrapper"), e.touchMoveStopPropagation = D(t, qi, !1), e.touchRatio = W(t, ji, 1), e.touchReleaseOnEdges = D(t, Ki, !1), e.touchStartForcePreventDefault = D(t, Zi, !1), e.touchStartPreventDefault = D(t, Qi, !0);
}
function co(e, t) {
  e.mousewheel = {
    enabled: D(t, gl, !1),
    eventsTarget: B(t, Tl, "container"),
    forceToAxis: D(t, El, !1),
    invert: D(t, vl, !1),
    noMousewheelClass: B(t, Sl, "swiper-no-mousewheel"),
    releaseOnEdges: D(t, bl, !1),
    sensitivity: W(t, yl, 1),
    thresholdDelta: W(t, Al),
    thresholdTime: W(t, _l)
  };
}
function fo(e, t) {
  e.freeMode = {
    enabled: D(t, sr, !1),
    minimumVelocity: W(t, ar, 0.02),
    momentum: D(t, nr, !0),
    momentumBounce: D(t, ir, !0),
    momentumBounceRatio: W(t, lr, 1),
    momentumRatio: W(t, rr, 1),
    momentumVelocityRatio: W(t, or, 1),
    sticky: D(t, dr, !1)
  };
}
function uo(e, t) {
  e.lazyPreloadPrevNext = W(t, Zn, 0), e.lazyPreloaderClass = B(t, Qn, "swiper-lazy-preloader");
}
function po(e, t) {
  e.createElements = D(t, kn, !1), e.cssMode = D(t, $n, !1), e.enabled = D(t, Wn, !0), e.eventsPrefix = B(t, Yn, "swiper"), e.init = D(t, jn, !0), e.maxBackfaceHiddenSlides = W(t, ii, 10), e.passiveListeners = D(t, hi, !0), e.roundLengths = D(t, yi, !1), e.runCallbacksOnInit = D(t, Ai, !0), e.setWrapperSize = D(t, _i, !1), e.uniqueNavElements = D(t, Ji, !0), e.url = B(t, tl), e.userAgent = B(t, sl);
}
function mo(e, t) {
  e.observeParents = D(t, fi, !1), e.observeSlideChildren = D(t, ui, !1), e.observer = D(t, pi, !1), e.resizeObserver = D(t, bi, !0), e.updateOnWindowResize = D(t, el, !0), e.watchOverflow = D(t, al, !0), e.watchSlidesProgress = D(t, nl, !1);
}
function ho(e, t) {
  e.parallax = {
    enabled: D(t, Dr, !1)
  };
}
function go(e, t) {
  const s = B(t, Nr, void 0);
  if (s) {
    let a = 0;
    e.on = {
      ...e.on,
      slideChange: function() {
        const n = this, i = n.activeIndex, u = n.slides[i], o = n.slides[a], r = window[s];
        typeof r == "function" ? r({
          swiper: n,
          activeIndex: i,
          previousIndex: a,
          activeSlide: u,
          previousSlide: o
        }) : console.warn(
          `Waterfall: Callback function "${s}" not found on window object.`
        ), a = i;
      }
    };
  }
}
console.log("🚿 Hello from Wellflow Waterfall v1.2.14");
const De = [];
window.waterfalls = De;
function ht(e, t) {
  let s = t;
  return document.querySelectorAll(e).forEach((a) => {
    Lt(a, s++);
  }), s;
}
let Ae = 0;
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(`[${ve}]`).forEach((e) => {
    e.hasAttribute(tt) || e.hasAttribute(et) || Lt(e, Ae++);
  }), Ae = ht(`[${ve}][${tt}]`, Ae), Ae = ht(`[${ve}][${et}]`, Ae), Jr(), Ia();
});
function Lt(e, t) {
  {
    const s = B(e, ve, `Swiper ${t}`);
    if (!s) return;
    const a = !!D(e, wa, !1);
    a && console.warn(`Initializing Waterfall: ${s}`);
    let n = {};
    Qr(n, e), Fr(n, e), qr(n, e), Yr(n, e, s), Xr(n, e), Ur(n, e), Kr(n, e), fo(n, e), Zr(n, e), eo(n, e, De, a), to(n, e), co(n, e), oo(n, e), so(n, e), ao(n, e), no(n, e, De, a), io(n, e), uo(n, e), mo(n, e), ro(n, e), ho(n, e), go(n, e), po(n, e), lo(), a && console.warn(n);
    const i = yt(n), u = e.querySelector(".swiper");
    a && console.log("SWIPER: ", u);
    const o = u?.querySelectorAll(".swiper-slide") || [];
    if (a && console.log("SWIPER SLIDES: ", o), o.length === 0) {
      console.warn(`Skipping "${s}": no .swiper-slide elements found.`);
      return;
    }
    const r = new te(u, i);
    De.push({ name: s, swiper: r });
  }
}
export {
  bo as ATTR_A11Y,
  Ra as ATTR_A11Y_CONTAINER_MESSAGE,
  Pa as ATTR_A11Y_CONTAINER_ROLE,
  Oa as ATTR_A11Y_CONTAINER_ROLE_DESCRIPTION_MESSAGE,
  Da as ATTR_A11Y_ENABLED,
  Na as ATTR_A11Y_FIRST_SLIDE_MESSAGE,
  za as ATTR_A11Y_ID,
  ka as ATTR_A11Y_ITEM_ROLE_DESCRIPTION_MESSAGE,
  $a as ATTR_A11Y_LAST_SLIDE_MESSAGE,
  Ga as ATTR_A11Y_NEXT_SLIDE_MESSAGE,
  Ba as ATTR_A11Y_NOTIFICATION_CLASS,
  Ha as ATTR_A11Y_PAGINATION_BULLET_MESSAGE,
  Va as ATTR_A11Y_PREV_SLIDE_MESSAGE,
  Wa as ATTR_A11Y_SCROLL_ON_FOCUS,
  Ya as ATTR_A11Y_SLIDE_LABEL_MESSAGE,
  Fa as ATTR_A11Y_SLIDE_ROLE,
  So as ATTR_ADVANCED_DEBUG_MODE,
  In as ATTR_ALLOW_SLIDE_NEXT,
  wn as ATTR_ALLOW_SLIDE_PREV,
  Rn as ATTR_ALLOW_TOUCH_MOVE,
  Kl as ATTR_AUTOPLAY,
  Pn as ATTR_AUTO_HEIGHT,
  On as ATTR_BREAKPOINTS_BASE,
  Nr as ATTR_CALLBACK_SLIDE_CHANGE,
  xn as ATTR_CARDS_PER_SLIDE_OFFSET,
  Ln as ATTR_CARDS_PER_SLIDE_ROTATE,
  Cn as ATTR_CARDS_ROTATE,
  Mn as ATTR_CARDS_SLIDE_SHADOWS,
  Nn as ATTR_CENTERED_SLIDES,
  _o as ATTR_CENTERED_SLIDES_BOUNDS,
  Dn as ATTR_CENTER_INSUFFICIENT_SLIDES,
  zn as ATTR_CONTAINER_MODIFIER_CLASS,
  et as ATTR_CONTROLLER,
  fn as ATTR_CONTROLLER_BY,
  un as ATTR_CONTROLLER_INVERSE,
  pn as ATTR_COVERFLOW_DEPTH,
  mn as ATTR_COVERFLOW_MODIFIER,
  hn as ATTR_COVERFLOW_ROTATE,
  gn as ATTR_COVERFLOW_SCALE,
  Tn as ATTR_COVERFLOW_SLIDE_SHADOWS,
  En as ATTR_COVERFLOW_STRETCH,
  kn as ATTR_CREATE_ELEMENTS,
  $n as ATTR_CSS_MODE,
  bn as ATTR_CUBE_SHADOW,
  yn as ATTR_CUBE_SHADOW_OFFSET,
  An as ATTR_CUBE_SHADOW_SCALE,
  _n as ATTR_CUBE_SLIDE_SHADOWS,
  wa as ATTR_DEBUG_MODE,
  Zl as ATTR_DELAY,
  Ja as ATTR_DESKTOP_CENTERED_SLIDES,
  tn as ATTR_DESKTOP_SLIDES_PER_GROUP,
  en as ATTR_DESKTOP_SLIDES_PER_VIEW,
  sn as ATTR_DESKTOP_SPACE_BETWEEN,
  Gn as ATTR_DIRECTION,
  Ql as ATTR_DISABLE_ON_INTERACTION,
  Bn as ATTR_EDGE_SWIPE_DETECTION,
  Hn as ATTR_EDGE_SWIPE_THRESHOLD,
  Vn as ATTR_EFFECT,
  Ao as ATTR_EFFECT_CROSSFADE,
  Wn as ATTR_ENABLED,
  Yn as ATTR_EVENTS_PREFIX,
  vn as ATTR_FLIP_LIMIT_ROTATION,
  Sn as ATTR_FLIP_SLIDE_SHADOWS,
  Fn as ATTR_FOCUSABLE_ELEMENTS,
  Xn as ATTR_FOLLOW_FINGER,
  sr as ATTR_FREE_MODE_ENABLED,
  ar as ATTR_FREE_MODE_MINIMUM_VELOCITY,
  nr as ATTR_FREE_MODE_MOMENTUM,
  ir as ATTR_FREE_MODE_MOMENTUM_BOUNCE,
  lr as ATTR_FREE_MODE_MOMENTUM_BOUNCE_RATIO,
  rr as ATTR_FREE_MODE_MOMENTUM_RATIO,
  or as ATTR_FREE_MODE_MOMENTUM_VELOCITY_RATIO,
  dr as ATTR_FREE_MODE_STICKY,
  Un as ATTR_GRAB_CURSOR,
  Ll as ATTR_GRID_FILL,
  xl as ATTR_GRID_ROWS,
  rl as ATTR_HASH_REPLACE_STATE,
  ol as ATTR_HASH_WATCH_STATE,
  qn as ATTR_HEIGHT,
  dl as ATTR_HISTORY_KEEP_QUERY,
  cl as ATTR_HISTORY_KEY,
  fl as ATTR_HISTORY_REPLACE_STATE,
  ul as ATTR_HISTORY_ROOT,
  jn as ATTR_INIT,
  Kn as ATTR_INITIAL_SLIDE,
  pl as ATTR_KEYBOARD_ENABLED,
  ml as ATTR_KEYBOARD_ONLY_IN_VIEWPORT,
  hl as ATTR_KEYBOARD_PAGE_UP_DOWN,
  an as ATTR_LARGE_CENTERED_SLIDES,
  ut as ATTR_LARGE_SLIDES_PER_GROUP,
  nn as ATTR_LARGE_SLIDES_PER_VIEW,
  ln as ATTR_LARGE_SPACE_BETWEEN,
  Qn as ATTR_LAZY_PRELOADER_CLASS,
  Zn as ATTR_LAZY_PRELOAD_PREV_NEXT,
  Xa as ATTR_LMOBILE_CENTERED_SLIDES,
  qa as ATTR_LMOBILE_SLIDES_PER_GROUP,
  Ua as ATTR_LMOBILE_SLIDES_PER_VIEW,
  ja as ATTR_LMOBILE_SPACE_BETWEEN,
  Jn as ATTR_LONG_SWIPES,
  ei as ATTR_LONG_SWIPES_MS,
  ti as ATTR_LONG_SWIPES_RATIO,
  xo as ATTR_LOOP,
  ai as ATTR_LOOP_ADD_ADDITIONAL_SLIDES,
  si as ATTR_LOOP_ADD_BLANK_SLIDES,
  ni as ATTR_LOOP_PREVENTS_SLIDING,
  pt as ATTR_MANIPULATION_ADD_INDEX,
  Ar as ATTR_MANIPULATION_ADD_SLIDE,
  _r as ATTR_MANIPULATION_APPEND_SLIDE,
  xr as ATTR_MANIPULATION_PREPEND_SLIDE,
  Po as ATTR_MANIPULATION_REMOVE_ALL_SLIDES,
  mt as ATTR_MANIPULATION_REMOVE_INDEX,
  Lr as ATTR_MANIPULATION_REMOVE_SLIDE,
  ii as ATTR_MAX_BACKFACE_HIDDEN_SLIDES,
  gl as ATTR_MOUSE_ENABLED,
  Tl as ATTR_MOUSE_EVENTS_TARGET,
  El as ATTR_MOUSE_FORCE_TO_AXIS,
  vl as ATTR_MOUSE_INVERT,
  Sl as ATTR_MOUSE_NO_MOUSE_WHEEL_CLASS,
  bl as ATTR_MOUSE_RELEASE_ON_EDGES,
  yl as ATTR_MOUSE_SENSITIVITY,
  Al as ATTR_MOUSE_THRESHOLD_DELTA,
  _l as ATTR_MOUSE_THRESHOLD_TIME,
  Cl as ATTR_NAVIGATION_DISABLED_CLASS,
  Ml as ATTR_NAVIGATION_ENABLED,
  Il as ATTR_NAVIGATION_HIDDEN_CLASS,
  wl as ATTR_NAVIGATION_HIDE_ON_CLICK,
  _t as ATTR_NAVIGATION_LOCK_CLASS,
  Rl as ATTR_NAVIGATION_NAVIGATION_DISABLED_CLASS,
  li as ATTR_NESTED,
  ci as ATTR_NORMALIZE_SLIDE_INDEX,
  ri as ATTR_NO_SWIPING,
  oi as ATTR_NO_SWIPING_CLASS,
  di as ATTR_NO_SWIPING_SELECTOR,
  pi as ATTR_OBSERVER,
  ui as ATTR_OBSERVE_SLIDE_CHILDREN,
  fi as ATTR_OBSERVE_SLIDE_PARENTS,
  mi as ATTR_ONE_WAY_MOVEMENT,
  Ol as ATTR_PAGINATION_BULLET_ACTIVE_CLASS,
  Mo as ATTR_PAGINATION_BULLET_CLASS,
  Dl as ATTR_PAGINATION_CLICKABLE,
  Nl as ATTR_PAGINATION_CLICKABLE_CLASS,
  zl as ATTR_PAGINATION_CURRENT_CLASS,
  kl as ATTR_PAGINATION_DYNAMIC_BULLETS,
  $l as ATTR_PAGINATION_DYNAMIC_MAIN_BULLETS,
  Gl as ATTR_PAGINATION_ENABLED,
  Bl as ATTR_PAGINATION_HIDDEN_CLASS,
  Hl as ATTR_PAGINATION_HIDE_ON_CLICK,
  Vl as ATTR_PAGINATION_HORIZONTAL_CLASS,
  Io as ATTR_PAGINATION_LOCK_CLASS,
  Wl as ATTR_PAGINATION_MODIFIER_CLASS,
  Yl as ATTR_PAGINATION_PAGINATION_DISABLED_CLASS,
  Fl as ATTR_PAGINATION_PROGRESSBAR_FILL_CLASS,
  Xl as ATTR_PAGINATION_PROGRESSBAR_OPPOSITE,
  Ul as ATTR_PAGINATION_PROGRESSBAR_OPPOSITE_CLASS,
  ql as ATTR_PAGINATION_TOTAL_CLASS,
  Pl as ATTR_PAGINATION_TYPE,
  jl as ATTR_PAGINATION_VERTICAL_CLASS,
  zo as ATTR_PARALLAX,
  Ho as ATTR_PARALLAX_DURATION,
  Dr as ATTR_PARALLAX_ENABLED,
  Bo as ATTR_PARALLAX_OPACITY,
  Go as ATTR_PARALLAX_SCALE,
  ko as ATTR_PARALLAX_X,
  $o as ATTR_PARALLAX_Y,
  hi as ATTR_PASSIVE_LISTENERS,
  er as ATTR_PAUSE_ON_MOUSE_ENTER,
  zr as ATTR_PLAYBACK_MODE,
  gi as ATTR_PREVENT_CLICKS,
  Ti as ATTR_PREVENT_CLICKS_PROPAGATION,
  Ei as ATTR_PREVENT_INTERACTION_ON_TRANSITION,
  vi as ATTR_RESISTANCE,
  Si as ATTR_RESISTANCE_RATIO,
  bi as ATTR_RESIZE_OBSERVER,
  Jl as ATTR_REVERSE_DIRECTION,
  Lo as ATTR_REWIND,
  yi as ATTR_ROUND_LENGTHS,
  Ai as ATTR_RUN_CALLBACKS_ON_INIT,
  fr as ATTR_SCROLLBAR_DRAGGABLE,
  Ro as ATTR_SCROLLBAR_DRAG_CLASS,
  cr as ATTR_SCROLLBAR_DRAG_SIZE,
  ur as ATTR_SCROLLBAR_ENABLED,
  pr as ATTR_SCROLLBAR_HIDE,
  mr as ATTR_SCROLLBAR_HORIZONTAL_CLASS,
  hr as ATTR_SCROLLBAR_LOCK_CLASS,
  gr as ATTR_SCROLLBAR_SCROLLBAR_DISABLED_CLASS,
  Er as ATTR_SCROLLBAR_SNAP_ON_RELEASE,
  Tr as ATTR_SCROLLBAR_VERTICAL_CLASS,
  _i as ATTR_SET_WRAPPER_SIZE,
  xi as ATTR_SHORT_SWIPES,
  Li as ATTR_SIMULATE_TOUCH,
  Ni as ATTR_SLIDES_OFFSET_AFTER,
  zi as ATTR_SLIDES_OFFSET_BEFORE,
  ki as ATTR_SLIDES_PER_GROUP,
  $i as ATTR_SLIDES_PER_GROUP_AUTO,
  Gi as ATTR_SLIDES_PER_GROUP_SKIP,
  Bi as ATTR_SLIDES_PER_VIEW,
  Ci as ATTR_SLIDE_ACTIVE_CLASS,
  Ii as ATTR_SLIDE_BLANK_CLASS,
  Mi as ATTR_SLIDE_CLASS,
  wi as ATTR_SLIDE_FULLY_VISIBLE_CLASS,
  Ri as ATTR_SLIDE_NEXT_CLASS,
  Pi as ATTR_SLIDE_PREV_CLASS,
  Oi as ATTR_SLIDE_TO_CLICKED_SLIDE,
  Di as ATTR_SLIDE_VISIBLE_CLASS,
  xt as ATTR_SMOOTH_AUTOPLAY,
  Hi as ATTR_SPACE_BETWEEN,
  Vi as ATTR_SPEED,
  tr as ATTR_STOP_ON_LAST_SLIDE,
  Yi as ATTR_SWIPER_ELEMENT_NODE_NAME,
  Wi as ATTR_SWIPE_HANDLER,
  Ka as ATTR_TABLET_CENTERED_SLIDES,
  yo as ATTR_TABLET_SLIDES_PER_GROUP,
  Za as ATTR_TABLET_SLIDES_PER_VIEW,
  Qa as ATTR_TABLET_SPACE_BETWEEN,
  Fi as ATTR_THRESHOLD,
  tt as ATTR_THUMBS,
  vr as ATTR_THUMBS_AUTO_SCROLL_OFFSET,
  yr as ATTR_THUMBS_CONTAINER_CLASS,
  Sr as ATTR_THUMBS_MULTIPLE_ACTIVE_THUMBS,
  br as ATTR_THUMBS_SLIDE_THUMB_ACTIVE_CLASS,
  Xi as ATTR_TOUCH_ANGLE,
  Ui as ATTR_TOUCH_EVENTS_TARGET,
  qi as ATTR_TOUCH_MOVE_STOP_PROPAGATION,
  ji as ATTR_TOUCH_RATIO,
  Ki as ATTR_TOUCH_RELEASE_ON_EDGES,
  Zi as ATTR_TOUCH_START_FORCE_PREVENT_DEFAULT,
  Qi as ATTR_TOUCH_START_PREVENT_DEFAULT,
  Ji as ATTR_UNIQUE_NAV_ELEMENTS,
  el as ATTR_UPDATE_ON_WINDOW_RESIZE,
  tl as ATTR_URL,
  sl as ATTR_USER_AGENT,
  Co as ATTR_VIRTUAL_TRANSLATE,
  wo as ATTR_WAIT_FOR_TRANSITION,
  al as ATTR_WATCH_OVERFLOW,
  nl as ATTR_WATCH_SLIDES_PROGRESS,
  ve as ATTR_WATERFALL,
  vo as ATTR_WATERFALL_CONTENT,
  pe as ATTR_WATERFALL_ELEMENT,
  Eo as ATTR_WATERFALL_POSTLOAD,
  To as ATTR_WATERFALL_PRELOAD,
  il as ATTR_WIDTH,
  ll as ATTR_WRAPPER_CLASS,
  rn as ATTR_XLARGE_CENTERED_SLIDES,
  dn as ATTR_XLARGE_SLIDES_PER_GROUP,
  on as ATTR_XLARGE_SLIDES_PER_VIEW,
  cn as ATTR_XLARGE_SPACE_BETWEEN,
  Oo as ATTR_ZOOM,
  Or as ATTR_ZOOMED_SLIDE_CLASS,
  Cr as ATTR_ZOOM_CONTAINER_CLASS,
  Do as ATTR_ZOOM_ENABLED,
  No as ATTR_ZOOM_FADE,
  Mr as ATTR_ZOOM_LIMIT_TO_ORIGINAL_SIZE,
  Ir as ATTR_ZOOM_MAX_RATIO,
  wr as ATTR_ZOOM_MIN_RATIO,
  Rr as ATTR_ZOOM_PAN_ON_MOUSE_MOVE,
  Pr as ATTR_ZOOM_TOGGLE,
  Wo as EL_NAVIGATION,
  Gr as EL_NAVIGATION_NEXT,
  Br as EL_NAVIGATION_PREV,
  kr as EL_PAGINATION,
  $r as EL_PAGINATION_BULLET,
  Vo as EL_PAGINATION_BULLET_ACTIVE,
  Hr as EL_SCROLLBAR,
  Vr as EL_SCROLLBAR_DRAG,
  Wr as EL_SLIDE_COUNT
};
//# sourceMappingURL=well-waterfall.es.js.map
