import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import {
  parseAttr,
  removeNullOrUndefinedKeys,
  printDebug,
  parseString,
} from "./util";
import { navigationConfig } from "./modules/navigation";
import { breakpointsConfig } from "./modules/breakpoints";
import { paginationConfig } from "./modules/pagination";
import { scrollbarConfig } from "./modules/scrollbar";
import { autoplayConfig, freeModeConfig } from "./modules/playback";
import {
  coverflowEffect,
  fadeConfig,
  flipEffect,
  cardsEffect,
  cubeEffect,
} from "./modules/effect";
import { gridConfig } from "./modules/layout";
import { generalConfig } from "./modules/general";
import { initSlideCount } from "./modules/slideCount";
import { thumbsConfig } from "./modules/thumbs";
import { Waterfall } from "./types/waterfall";
import { keyboardConfig, mouseConfig } from "./modules/input";
import {
  hashNavigationConfig,
  historyNavigationConfig,
} from "./modules/hashhistory";
import { controllerConfig } from "./modules/controller";
import { SwiperOptions } from "swiper/types";
import { accessibilityConfig } from "./modules/accessibility";

console.log(`🚿 Hello from Wellflow Waterfall v${APP_VERSION}`);

const waterfalls: Waterfall[] = [];

// Initialize Thumb Sliders first
$('[waterfall][waterfall-preload="true"]').each((index, el) =>
  initConfig(el, index),
);

// Initialize all other sliders
$("[waterfall]")
  .not('[waterfall-preload="true"]')
  .not('[waterfall-postload="true"]')
  .each((index, el) => initConfig(el, index));

$('[waterfall][waterfall-postload="true"]').each((index, el) =>
  initConfig(el, index),
);

function initConfig(el: HTMLElement, index: number) {
  {
    const $this = $(el);

    const name = parseString($this, "waterfall", `Swiper ${index}`);
    if (!name) return;

    const debug = Boolean(parseAttr($this, "debug-mode", false) || false);
    const debugAdvanced = Boolean(
      parseAttr($this, "advanced-debug-mode", false) || false,
    );
    console.log(
      `Initializing Waterfall: ${name} ${debug ? `[${debugAdvanced ? "ADVANCED " : ""}DEBUG]` : ""}`,
    );

    // GENERAL CONFIG
    const swiperConfig: any = generalConfig($this);

    // BREAKPOINTS
    swiperConfig.breakpoints = breakpointsConfig($this);

    // PLAYBACK
    const playbackMode = parseAttr($this, "playback-mode", "none");
    if (playbackMode === "loop") swiperConfig.loop = true;
    if (playbackMode === "rewind") swiperConfig.rewind = true;
    if (playbackMode === "none") {
      swiperConfig.loop = false;
      swiperConfig.rewind = false;
    }
    swiperConfig.autoplay = autoplayConfig($this);

    // NAVIGATION
    swiperConfig.navigation = navigationConfig($this, name);

    // PAGINATION
    let pagination = $this.find("[waterfall-el='pagination-bullet']").length;
    if (pagination) swiperConfig.pagination = paginationConfig($this);

    // SCROLLBAR
    const $scrollbar = $this.find("[waterfall-el='scrollbar']");
    if ($scrollbar) swiperConfig.scrollbar = scrollbarConfig($this);

    // EFFECT
    swiperConfig.fadeEffect = fadeConfig($this);
    swiperConfig.coverflowEffect = coverflowEffect($this);
    swiperConfig.flipEffect = flipEffect($this);
    swiperConfig.cardsEffect = cardsEffect($this);
    swiperConfig.cubeEffect = cubeEffect($this);

    // FREE MODE
    swiperConfig.freeMode = freeModeConfig($this);

    // GRID
    swiperConfig.grid = gridConfig($this);

    // THUMBS
    const isThumbs = parseAttr($this, "waterfall-thumbs", null) === true;
    if (!isThumbs) swiperConfig.thumbs = thumbsConfig($this, waterfalls);

    // ZOOM - NOT IMPLEMENTED

    // KEYBOARD
    swiperConfig.keyboard = keyboardConfig($this);

    // MOUSE
    swiperConfig.mousewheel = mouseConfig($this);

    // VIRTUAL SLIDES - NOT IMPLEMENTED

    // HASH NAVIGATION
    swiperConfig.hashNavigation = hashNavigationConfig($this);

    // HISTORY NAVIGATION
    swiperConfig.history = historyNavigationConfig($this);

    // CONTROLLER
    swiperConfig.controller = controllerConfig($this, waterfalls);

    // A11Y
    swiperConfig.a11y = accessibilityConfig($this);

    // Clean up the config and debug
    if (debugAdvanced) printDebug(debug, "CONFIG (UNCLEANED)", swiperConfig);
    const config: SwiperOptions = removeNullOrUndefinedKeys(swiperConfig);
    printDebug(debug, "CONFIG", config);

    // Initialize swiper
    const swiper = new Swiper($this.find(".swiper")[0], config);

    // Add to sliders array
    waterfalls.push({ name, swiper: swiper });
  }
}

initSlideCount();
