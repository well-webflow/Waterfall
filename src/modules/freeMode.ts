import {
  ATTR_FREE_MODE_ENABLED,
  ATTR_FREE_MODE_MINIMUM_VELOCITY,
  ATTR_FREE_MODE_MOMENTUM,
  ATTR_FREE_MODE_MOMENTUM_BOUNCE,
  ATTR_FREE_MODE_MOMENTUM_BOUNCE_RATIO,
  ATTR_FREE_MODE_MOMENTUM_RATIO,
  ATTR_FREE_MODE_MOMENTUM_VELOCITY_RATIO,
  ATTR_FREE_MODE_STICKY,
} from "lib/attributes";
import { parseBoolean, parseNumber } from "../util";
import { SwiperOptions } from "swiper/types";

export function freeModeConfig(config: SwiperOptions, el: HTMLElement) {
  config.freeMode = {
    enabled: parseBoolean(el, ATTR_FREE_MODE_ENABLED, false),
    minimumVelocity: parseNumber(el, ATTR_FREE_MODE_MINIMUM_VELOCITY, 0.02),
    momentum: parseBoolean(el, ATTR_FREE_MODE_MOMENTUM, true),
    momentumBounce: parseBoolean(el, ATTR_FREE_MODE_MOMENTUM_BOUNCE, true),
    momentumBounceRatio: parseNumber(el, ATTR_FREE_MODE_MOMENTUM_BOUNCE_RATIO, 1),
    momentumRatio: parseNumber(el, ATTR_FREE_MODE_MOMENTUM_RATIO, 1),
    momentumVelocityRatio: parseNumber(el, ATTR_FREE_MODE_MOMENTUM_VELOCITY_RATIO, 1),
    sticky: parseBoolean(el, ATTR_FREE_MODE_STICKY, false),
  };
}
