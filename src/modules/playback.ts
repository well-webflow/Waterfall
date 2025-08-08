import {
  ATTR_AUTOPLAY,
  ATTR_DELAY,
  ATTR_DISABLE_ON_INTERACTION,
  ATTR_FREE_MODE_ENABLED,
  ATTR_FREE_MODE_MINIMUM_VELOCITY,
  ATTR_FREE_MODE_MOMENTUM,
  ATTR_FREE_MODE_MOMENTUM_BOUNCE,
  ATTR_FREE_MODE_MOMENTUM_BOUNCE_RATIO,
  ATTR_FREE_MODE_MOMENTUM_RATIO,
  ATTR_FREE_MODE_MOMENTUM_VELOCITY_RATIO,
  ATTR_FREE_MODE_STICKY,
  ATTR_LOOP,
  ATTR_LOOP_ADD_ADDITIONAL_SLIDES,
  ATTR_LOOP_ADD_BLANK_SLIDES,
  ATTR_LOOP_PREVENTS_SLIDING,
  ATTR_ONE_WAY_MOVEMENT,
  ATTR_PAUSE_ON_MOUSE_ENTER,
  ATTR_PLAYBACK_MODE,
  ATTR_REVERSE_DIRECTION,
  ATTR_SMOOTH_AUTOPLAY,
  ATTR_SPEED,
  ATTR_STOP_ON_LAST_SLIDE,
} from "lib/attributes";
import { parseBoolean, parseNumber, parseString } from "../util";

export function playbackConfig(config: any, el: HTMLElement) {
  // Set Loop, Rewind, or None
  const playbackMode = parseString(el, ATTR_PLAYBACK_MODE, "none");
  if (playbackMode === "loop") config.loop = true;
  if (playbackMode === "rewind") config.rewind = true;
  if (playbackMode === "none") {
    config.loop = false;
    config.rewind = false;
  }
  config.loopAddBlankSlides = parseBoolean(el, ATTR_LOOP_ADD_BLANK_SLIDES, true);
  config.loopAdditionalSlides = parseNumber(el, ATTR_LOOP_ADD_ADDITIONAL_SLIDES, 0);
  config.loopPreventsSliding = parseBoolean(el, ATTR_LOOP_PREVENTS_SLIDING, true);
  // Autoplay
  const autoplayMode = parseBoolean(el, ATTR_AUTOPLAY, false);
  if (autoplayMode) {
    // Add CSS for Smooth Autoplay
    setSmoothAutoplay();
    config.autoplay = {
      delay: parseNumber(el, ATTR_DELAY, 3000),
      disableOnInteraction: parseBoolean(el, ATTR_DISABLE_ON_INTERACTION, false), // documentation says default is true, doesn't appear to be correct
      reverseDirection: parseBoolean(el, ATTR_REVERSE_DIRECTION, false),
      pauseOnMouseEnter: parseBoolean(el, ATTR_PAUSE_ON_MOUSE_ENTER, false),
      stopOnLastSlide: parseBoolean(el, ATTR_STOP_ON_LAST_SLIDE, false),
    };
  }
  // Other Options
  config.speed = parseNumber(el, ATTR_SPEED, 300);
  config.oneWayMovement = parseBoolean(el, ATTR_ONE_WAY_MOVEMENT, false);
}

function setSmoothAutoplay() {
  document.querySelectorAll<HTMLElement>(`[${ATTR_SMOOTH_AUTOPLAY}='true'] .swiper-wrapper`).forEach((el) => {
    el.style.transitionTimingFunction = "linear";
  });
}
