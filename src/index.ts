import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { parseAttr, removeNullOrUndefinedKeys, printDebug, parseString } from "./util";
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

import {
  ATTR_WATERFALL_PRELOAD,
  ATTR_WATERFALL,
  ATTR_WATERFALL_POSTLOAD,
  ATTR_DEBUG_MODE,
  ATTR_ADVANCED_DEBUG_MODE,
  ATTR_PLAYBACK_MODE,
  ATTR_THUMBS,
} from "./lib/attributes";

export * from "./lib/attributes";
export * from "./lib/elements";

console.log(`🚿 Hello from Wellflow Waterfall v${APP_VERSION}`);

const waterfalls: Waterfall[] = [];
window.waterfalls = waterfalls;

function initAll(selector: string) {
  document.querySelectorAll(selector).forEach((el, index) => {
    initConfig(el as HTMLElement, index);
  });
}

// Initialize Thumb Sliders first
initAll(`[${ATTR_WATERFALL}][${ATTR_WATERFALL_PRELOAD}="true"]`);

// Initialize all other sliders
document.querySelectorAll(`[${ATTR_WATERFALL}]`).forEach((el, index) => {
  if (el.getAttribute(ATTR_WATERFALL_PRELOAD) === "true" || el.getAttribute(ATTR_WATERFALL_POSTLOAD) === "true") return;

  initConfig(el as HTMLElement, index);
});

// Initialize Postload sliders
initAll(`[${ATTR_WATERFALL}][${ATTR_WATERFALL_POSTLOAD}="true"]`);

function initConfig(el: HTMLElement, index: number) {
  {
    const name = parseString(el, ATTR_WATERFALL, `Swiper ${index}`);
    if (!name) return;

    const debug = Boolean(parseAttr(el, ATTR_DEBUG_MODE, false) || false);
    const debugAdvanced = Boolean(parseAttr(el, ATTR_ADVANCED_DEBUG_MODE, false) || false);
    console.log(`Initializing Waterfall: ${name} ${debug ? `[${debugAdvanced ? "ADVANCED " : ""}DEBUG]` : ""}`);

    // GENERAL CONFIG
    const swiperConfig: any = generalConfig(el);

    // BREAKPOINTS
    swiperConfig.breakpoints = breakpointsConfig(el);

    // PLAYBACK
    const playbackMode = parseAttr(el, ATTR_PLAYBACK_MODE, "none");
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
    const isThumbs = parseAttr(el, ATTR_THUMBS, null) === true;
    if (!isThumbs) swiperConfig.thumbs = thumbsConfig(el, waterfalls);

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
    swiperConfig.controller = controllerConfig(el, waterfalls);

    // A11Y
    swiperConfig.a11y = accessibilityConfig(el);

    // Clean up the config and debug
    if (debugAdvanced) printDebug(debug, "CONFIG (UNCLEANED)", swiperConfig);
    const config: SwiperOptions = removeNullOrUndefinedKeys(swiperConfig);
    printDebug(debug, "CONFIG", config);

    // Initialize swiper
    const swiperEl = el.querySelector(".swiper");
    const slides = swiperEl?.querySelectorAll(".swiper-slide") || [];
    if (slides.length === 0) {
      console.warn(`Skipping "${name}": no .swiper-slide elements found.`);
      return;
    }
    // INIT SWIPER
    const swiper = new Swiper(swiperEl as HTMLElement, config);
    waterfalls.push({ name, swiper });
  }
}

initSlideCount();

// MANIPULATION
document.addEventListener("DOMContentLoaded", function () {
  addSlides();
});
