import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { removeNullOrUndefinedKeys, parseString, parseBoolean } from "./util";
import { navigationConfig } from "./modules/navigation";
import { breakpointsConfig } from "./modules/breakpoints";
import { paginationConfig } from "./modules/pagination";
import { scrollbarConfig } from "./modules/scrollbar";
import { autoplayConfig, freeModeConfig } from "./modules/playback";
import { coverflowEffect, fadeConfig, flipEffect, cardsEffect, cubeEffect } from "./modules/effect";
import { gridConfig } from "./modules/layout";
import { generalConfig } from "./modules/general";
import { initSlideCount } from "./modules/slideCount";
import { thumbsConfig } from "./modules/thumbs";
import { Waterfall } from "./types/waterfall";
import { keyboardConfig, mouseConfig } from "./modules/input";
import { hashNavigationConfig, historyNavigationConfig } from "./modules/hashhistory";
import { controllerConfig } from "./modules/controller";
import { SwiperOptions } from "swiper/types";
import { accessibilityConfig } from "./modules/accessibility";
import { addSlides } from "./modules/manipulation";
import { zoomConfig } from "./modules/zoom";

import { ATTR_WATERFALL, ATTR_DEBUG_MODE, ATTR_PLAYBACK_MODE, ATTR_THUMBS, ATTR_CONTROLLER } from "./lib/attributes";

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
    console.log(`Initializing Waterfall: ${name} ${debug ? `[DEBUG]` : ""}`);

    // GENERAL CONFIG
    const swiperConfig: any = generalConfig(el);

    // BREAKPOINTS
    swiperConfig.breakpoints = breakpointsConfig(el);

    // PLAYBACK
    const playbackMode = parseString(el, ATTR_PLAYBACK_MODE, "none");
    if (playbackMode === "loop") swiperConfig.loop = true;
    if (playbackMode === "rewind") swiperConfig.rewind = true;
    if (playbackMode === "none") {
      swiperConfig.loop = false;
      swiperConfig.rewind = false;
    }
    swiperConfig.autoplay = autoplayConfig(el);

    // NAVIGATION
    swiperConfig.navigation = navigationConfig(el, name);

    // PAGINATION
    const paginationEl = el.querySelector(`[waterfall-el='pagination-bullet']`);
    if (paginationEl) swiperConfig.pagination = paginationConfig(el);

    // SCROLLBAR
    const scrollbarEl = el.querySelector(`[waterfall-el='scrollbar']`);
    if (scrollbarEl) swiperConfig.scrollbar = scrollbarConfig(el);

    // EFFECT
    swiperConfig.fadeEffect = fadeConfig(el);
    swiperConfig.coverflowEffect = coverflowEffect(el);
    swiperConfig.flipEffect = flipEffect(el);
    swiperConfig.cardsEffect = cardsEffect(el);
    swiperConfig.cubeEffect = cubeEffect(el);

    // FREE MODE
    swiperConfig.freeMode = freeModeConfig(el);

    // GRID
    swiperConfig.grid = gridConfig(el);

    // THUMBS
    swiperConfig.thumbs = thumbsConfig(el, waterfalls, debug);

    // ZOOM - NOT IMPLEMENTED
    swiperConfig.zoom = zoomConfig(el);

    // KEYBOARD
    swiperConfig.keyboard = keyboardConfig(el);

    // MOUSE
    swiperConfig.mousewheel = mouseConfig(el);

    // VIRTUAL SLIDES - NOT IMPLEMENTED

    // HASH NAVIGATION
    swiperConfig.hashNavigation = hashNavigationConfig(el);

    // HISTORY NAVIGATION
    swiperConfig.history = historyNavigationConfig(el);

    // CONTROLLER
    swiperConfig.controller = controllerConfig(el, waterfalls, debug);

    // A11Y
    swiperConfig.a11y = accessibilityConfig(el);

    // Clean up the config and debug
    if (debug) console.log(`${name} Config (UNCLEANED):", ${swiperConfig}`);
    const config: SwiperOptions = removeNullOrUndefinedKeys(swiperConfig);
    if (debug) console.log(`${name} CONFIG: ${config}`);

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

initSlideCount();

// MANIPULATION
document.addEventListener("DOMContentLoaded", function () {
  addSlides();
});
