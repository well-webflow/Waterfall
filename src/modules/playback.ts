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

export function autoplayConfig($this: JQuery<HTMLElement>) {
  const autoplayMode = parseAttr($this, ATTR_AUTOPLAY, false);
  if (!autoplayMode) return null;
  // Add CSS for Smooth Autoplay
  $(`[${ATTR_SMOOTH_AUTOPLAY}='true']`).find(".swiper-wrapper").css("transition-timing-function", "linear");
  return {
    delay: parseAttr($this, ATTR_DELAY, 3000),
    disableOnInteraction: parseAttr($this, ATTR_DISABLE_ON_INTERACTION, false), // documentation says default is true, doesn't appear to be correct
    reverseDirection: parseAttr($this, ATTR_REVERSE_DIRECTION, false),
    pauseOnMouseEnter: parseAttr($this, ATTR_PAUSE_ON_MOUSE_ENTER, false),
    stopOnLastSlide: parseAttr($this, ATTR_STOP_ON_LAST_SLIDE, false),
  };
}

export function freeModeConfig($this: JQuery<HTMLElement>) {
  return {
    enabled: parseAttr($this, ATTR_FREE_MODE_ENABLED, false),
    minimumVelocity: parseAttr($this, ATTR_FREE_MODE_MINIMUM_VELOCITY, 0.02),
    momentum: parseAttr($this, ATTR_FREE_MODE_MOMENTUM, true),
    momentumBounce: parseAttr($this, ATTR_FREE_MODE_MOMENTUM_BOUNCE, true),
    momentumBounceRatio: parseAttr($this, ATTR_FREE_MODE_MOMENTUM_BOUNCE_RATIO, 1),
    momentumRatio: parseAttr($this, ATTR_FREE_MODE_MOMENTUM_RATIO, 1),
    momentumVelocityRatio: parseAttr($this, ATTR_FREE_MODE_MOMENTUM_VELOCITY_RATIO, 1),
    sticky: parseAttr($this, ATTR_FREE_MODE_STICKY, false),
  };
}
