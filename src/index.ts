import Swiper from "swiper/bundle";
import "swiper/css/bundle";

import { SwiperOptions } from "swiper/types";
import { Waterfall } from "./types/waterfall";

import { removeNullOrUndefinedKeys, parseString, parseBoolean } from "./util";
import { navigationConfig } from "./modules/navigation";
import { breakpointsConfig } from "./modules/breakpoints";
import { paginationConfig } from "./modules/pagination";
import { scrollbarConfig } from "./modules/scrollbar";
import { playbackConfig } from "./modules/playback";
import { effectConfig } from "./modules/effect";
import { layoutConfig } from "./modules/layout";
import { generalConfig } from "./modules/general";
import { initSlideCount } from "./modules/slideCount";
import { thumbsConfig } from "./modules/thumbs";
import { keyboardConfig } from "./modules/keyboard";
import { hashNavigationConfig, historyNavigationConfig } from "./modules/hashhistory";
import { controllerConfig } from "./modules/controller";
import { accessibilityConfig } from "./modules/accessibility";
import { manipulateSlides } from "./modules/manipulation";
import { zoomConfig } from "./modules/zoom";
import { touchConfig } from "./modules/touch";
import { mouseConfig } from "./modules/mouse";
import { freeModeConfig } from "./modules/freeMode";
import lazyLoadConfig from "./modules/lazyLoad";
import advancedConfig from "./modules/advanced";
import observerConfig from "./modules/observer";
import parallaxConfig from "./modules/parallax";

import { ATTR_WATERFALL, ATTR_DEBUG_MODE, ATTR_THUMBS, ATTR_CONTROLLER } from "./lib/attributes";

export * from "./lib/attributes";
export * from "./lib/elements";

console.log(`🚿 Hello from Wellflow Waterfall v${APP_VERSION}`);

const waterfalls: Waterfall[] = [];
window.waterfalls = waterfalls;

function initAll(selector: string, startIndex: number): number {
  let index = startIndex;
  document.querySelectorAll(selector).forEach((el) => {
    initConfig(el as HTMLElement, index++);
  });
  return index; // Return updated index
}

let indexCounter = 0;

// Initialize all other sliders
document.querySelectorAll(`[${ATTR_WATERFALL}]`).forEach((el) => {
  if (el.hasAttribute(ATTR_THUMBS) || el.hasAttribute(ATTR_CONTROLLER)) return;
  initConfig(el as HTMLElement, indexCounter++);
});

// Initialize Controller Sliders last
indexCounter = initAll(`[${ATTR_WATERFALL}][${ATTR_THUMBS}]`, indexCounter);
indexCounter = initAll(`[${ATTR_WATERFALL}][${ATTR_CONTROLLER}]`, indexCounter);

// Config
function initConfig(el: HTMLElement, index: number) {
  {
    const name = parseString(el, ATTR_WATERFALL, `Swiper ${index}`);
    if (!name) return;

    const debug = Boolean(parseBoolean(el, ATTR_DEBUG_MODE, false) || false);
    if (debug) console.warn(`Initializing Waterfall: ${name}`);

    let swiperConfig: any = {};

    generalConfig(swiperConfig, el);
    breakpointsConfig(swiperConfig, el);
    playbackConfig(swiperConfig, el);
    navigationConfig(swiperConfig, el, name);
    paginationConfig(swiperConfig, el);
    scrollbarConfig(swiperConfig, el);
    effectConfig(swiperConfig, el);
    freeModeConfig(swiperConfig, el);
    layoutConfig(swiperConfig, el);
    thumbsConfig(swiperConfig, el, waterfalls, debug);
    keyboardConfig(swiperConfig, el);
    mouseConfig(swiperConfig, el);
    touchConfig(swiperConfig, el);
    // VIRTUAL SLIDES - NOT IMPLEMENTED
    hashNavigationConfig(swiperConfig, el);
    historyNavigationConfig(swiperConfig, el);
    controllerConfig(swiperConfig, el, waterfalls, debug);
    accessibilityConfig(swiperConfig, el);
    lazyLoadConfig(swiperConfig, el);
    observerConfig(swiperConfig, el);
    zoomConfig(swiperConfig, el);
    parallaxConfig(swiperConfig, el);
    advancedConfig(swiperConfig, el);

    // Clean up the config and debug
    if (debug) console.warn(swiperConfig);
    const config: SwiperOptions = removeNullOrUndefinedKeys(swiperConfig);

    // Initialize swiper
    const swiperEl = el.querySelector(".swiper");
    const slides = swiperEl?.querySelectorAll(".swiper-slide") || [];
    if (slides.length === 0) {
      console.warn(`Skipping "${name}": no .swiper-slide elements found.`);
      return;
    }
    const swiper = new Swiper(swiperEl as HTMLElement, config);
    waterfalls.push({ name, swiper });
  }
}

// MANIPULATION
manipulateSlides();

// SLIDE COUNT
initSlideCount();
