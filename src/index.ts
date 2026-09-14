import Swiper from "swiper/bundle";
import "swiper/css/bundle";

import { SwiperOptions } from "swiper/types";
import { Waterfall } from "./types/waterfall";

import { removeNullOrUndefinedKeys, parseString, parseBoolean, fixWebflowCMSListARIARole } from "./util";
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
import { callbacksConfig } from "./modules/callbacks";
import { initAutoplayControl } from "./modules/autoplayControl";

import { ATTR_WATERFALL, ATTR_DEBUG_MODE, ATTR_THUMBS, ATTR_CONTROLLER } from "./lib/attributes";

export * from "./lib/attributes";
export * from "./lib/elements";
export type { SlideChangeCallbackParams } from "./modules/callbacks";

console.log(`🚿 Hello from Wellflow Waterfall v${APP_VERSION}`);

const waterfalls: Waterfall[] = [];
window.waterfalls = waterfalls;

let indexCounter = 0;

document.addEventListener("DOMContentLoaded", () => {
  // Collect all sliders that are referenced by thumbs or controller attributes
  const thumbsReferences = new Set<string>();
  document.querySelectorAll(`[${ATTR_WATERFALL}][${ATTR_THUMBS}]`).forEach((el) => {
    const thumbsName = parseString(el as HTMLElement, ATTR_THUMBS, "");
    if (thumbsName) thumbsReferences.add(thumbsName);
  });

  const controllerReferences = new Set<string>();
  document.querySelectorAll(`[${ATTR_WATERFALL}][${ATTR_CONTROLLER}]`).forEach((el) => {
    const controllerName = parseString(el as HTMLElement, ATTR_CONTROLLER, "");
    if (controllerName) controllerReferences.add(controllerName);
  });

  // Step 1: Initialize sliders that are referenced by thumbs (thumbnail sliders must exist first)
  document.querySelectorAll(`[${ATTR_WATERFALL}]`).forEach((el) => {
    const name = parseString(el as HTMLElement, ATTR_WATERFALL, "") || "";
    if (thumbsReferences.has(name)) {
      initConfig(el as HTMLElement, indexCounter++);
      console.log(`✅ Initialized Waterfall slider "${name}" that is referenced by a thumbnail slider.`);
    }
  });

  // Step 2: Initialize sliders that are referenced by controller (but not already initialized)
  document.querySelectorAll(`[${ATTR_WATERFALL}]`).forEach((el) => {
    const name = parseString(el as HTMLElement, ATTR_WATERFALL, "") || "";
    if (controllerReferences.has(name) && !waterfalls.find((w) => w.name === name)) {
      initConfig(el as HTMLElement, indexCounter++);
      console.log(`✅ Initialized Waterfall slider "${name}" that is referenced by a controller slider.`);
    }
  });

  // Step 3: Initialize all remaining sliders
  document.querySelectorAll(`[${ATTR_WATERFALL}]`).forEach((el) => {
    const name = parseString(el as HTMLElement, ATTR_WATERFALL, "") || "";
    if (!waterfalls.find((w) => w.name === name)) {
      initConfig(el as HTMLElement, indexCounter++);
    }
  });

  // SLIDE COUNT
  initSlideCount();

  // ARIA ROLE FIX FOR WEBFLOW CMS LIST
  fixWebflowCMSListARIARole();
});

// Config
function initConfig(el: HTMLElement, index: number) {
  {
    const name = parseString(el, ATTR_WATERFALL, `Swiper ${index}`);
    if (!name) return;

    const debug = Boolean(parseBoolean(el, ATTR_DEBUG_MODE, false) || false);
    if (debug) console.warn(`Initializing Waterfall: ${name}`);

    let swiperConfig: SwiperOptions = {};

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
    callbacksConfig(swiperConfig, el);
    advancedConfig(swiperConfig, el);

    // MANIPULATION - Add or remove slides
    manipulateSlides();

    // Clean up the config and debug
    if (debug) console.warn(swiperConfig);
    const config: SwiperOptions = removeNullOrUndefinedKeys(swiperConfig);

    // Initialize swiper
    const swiperEl = el.querySelector(".swiper");
    if (debug) console.log("SWIPER: ", swiperEl);
    const slides = swiperEl?.querySelectorAll(".swiper-slide") || [];
    if (debug) console.log("SWIPER SLIDES: ", slides);
    if (slides.length === 0) {
      console.warn(`Skipping "${name}": no .swiper-slide elements found.`);
      return;
    }
    const swiper = new Swiper(swiperEl as HTMLElement, config);
    waterfalls.push({ name, swiper });

    // Initialize autoplay control
    initAutoplayControl(el, name, swiper);
  }
}
