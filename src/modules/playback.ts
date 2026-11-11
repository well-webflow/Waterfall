import {
  ATTR_AUTOPLAY,
  ATTR_AUTOPLAY_DELAY,
  ATTR_AUTOPLAY_DISABLE_ON_INTERACTION,
  ATTR_AUTOPLAY_PAUSE_ON_MOUSE_ENTER,
  ATTR_AUTOPLAY_REVERSE_DIRECTION,
  ATTR_AUTOPLAY_STOP_ON_LAST_SLIDE,
  ATTR_AUTOPLAY_WAIT_FOR_TRANSITION,
  ATTR_LOOP,
  ATTR_LOOP_ADD_ADDITIONAL_SLIDES,
  ATTR_LOOP_ADD_BLANK_SLIDES,
  ATTR_LOOP_PREVENTS_SLIDING,
  ATTR_ONE_WAY_MOVEMENT,
  ATTR_REWIND,
  ATTR_SMOOTH_AUTOPLAY,
  ATTR_SPEED,
} from "lib/attributes";
import { parseBoolean, parseNumber } from "../util";
import { SwiperOptions } from "swiper/types";

export function playbackConfig(config: SwiperOptions, el: HTMLElement) {
  // Loop and rewind are mutually exclusive in Swiper; loop wins if both are set.
  const loop = parseBoolean(el, ATTR_LOOP, false);
  const rewind = parseBoolean(el, ATTR_REWIND, false);
  if (loop && rewind) {
    console.warn(
      `[PLAYBACK] "${ATTR_LOOP}" and "${ATTR_REWIND}" cannot both be true. Using loop and ignoring rewind.`,
      el,
    );
  }
  config.loop = loop;
  config.rewind = loop ? undefined : rewind;
  config.loopAddBlankSlides = parseBoolean(el, ATTR_LOOP_ADD_BLANK_SLIDES, true);
  config.loopAdditionalSlides = parseNumber(el, ATTR_LOOP_ADD_ADDITIONAL_SLIDES, 0);
  config.loopPreventsSliding = parseBoolean(el, ATTR_LOOP_PREVENTS_SLIDING, true);
  // Autoplay
  const autoplayMode = parseBoolean(el, ATTR_AUTOPLAY, false);

  // Smooth Autoplay
  const smoothAutoplay = parseBoolean(el, ATTR_SMOOTH_AUTOPLAY, false);
  let delay = parseNumber(el, ATTR_AUTOPLAY_DELAY, undefined);
  if (smoothAutoplay) delay = 0;

  if (autoplayMode) {
    // Add CSS for Smooth Autoplay
    setSmoothAutoplay();
    const pauseOnMouseEnter = parseBoolean(el, ATTR_AUTOPLAY_PAUSE_ON_MOUSE_ENTER, false);
    config.autoplay = {
      // Explicit, so that a slider with no other autoplay attributes still reaches Swiper with
      // autoplay on: removeNullOrUndefinedKeys drops an object whose every key parsed to undefined.
      enabled: true,
      delay,
      disableOnInteraction: parseBoolean(el, ATTR_AUTOPLAY_DISABLE_ON_INTERACTION, false), // documentation says default is true, doesn't appear to be correct
      reverseDirection: parseBoolean(el, ATTR_AUTOPLAY_REVERSE_DIRECTION, false),
      // Swiper's own hover pause does nothing while a transition is running, which is all of the
      // time at delay 0. initSmoothAutoplayHover takes that case over.
      pauseOnMouseEnter: delay === 0 ? false : pauseOnMouseEnter,
      stopOnLastSlide: parseBoolean(el, ATTR_AUTOPLAY_STOP_ON_LAST_SLIDE, false),
      waitForTransition: parseBoolean(el, ATTR_AUTOPLAY_WAIT_FOR_TRANSITION, true),
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
