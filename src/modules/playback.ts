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
  ATTR_PAUSE_ON_MOUSE_ENTER,
  ATTR_REVERSE_DIRECTION,
  ATTR_SMOOTH_AUTOPLAY,
  ATTR_STOP_ON_LAST_SLIDE,
} from "lib/attributes";
import { parseAttr } from "../util";

export function autoplayConfig(el: HTMLElement) {
  const autoplayMode = parseAttr(el, ATTR_AUTOPLAY, false);
  if (!autoplayMode) return null;
  // Add CSS for Smooth Autoplay
  $(`[${ATTR_SMOOTH_AUTOPLAY}='true']`).find(".swiper-wrapper").css("transition-timing-function", "linear");
  return {
    delay: parseAttr(el, ATTR_DELAY, 3000),
    disableOnInteraction: parseAttr(el, ATTR_DISABLE_ON_INTERACTION, false), // documentation says default is true, doesn't appear to be correct
    reverseDirection: parseAttr(el, ATTR_REVERSE_DIRECTION, false),
    pauseOnMouseEnter: parseAttr(el, ATTR_PAUSE_ON_MOUSE_ENTER, false),
    stopOnLastSlide: parseAttr(el, ATTR_STOP_ON_LAST_SLIDE, false),
  };
}

export function freeModeConfig(el: HTMLElement) {
  return {
    enabled: parseAttr(el, ATTR_FREE_MODE_ENABLED, false),
    minimumVelocity: parseAttr(el, ATTR_FREE_MODE_MINIMUM_VELOCITY, 0.02),
    momentum: parseAttr(el, ATTR_FREE_MODE_MOMENTUM, true),
    momentumBounce: parseAttr(el, ATTR_FREE_MODE_MOMENTUM_BOUNCE, true),
    momentumBounceRatio: parseAttr(el, ATTR_FREE_MODE_MOMENTUM_BOUNCE_RATIO, 1),
    momentumRatio: parseAttr(el, ATTR_FREE_MODE_MOMENTUM_RATIO, 1),
    momentumVelocityRatio: parseAttr(el, ATTR_FREE_MODE_MOMENTUM_VELOCITY_RATIO, 1),
    sticky: parseAttr(el, ATTR_FREE_MODE_STICKY, false),
  };
}
