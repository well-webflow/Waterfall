import {
  ATTR_MOUSEWHEEL_ENABLED,
  ATTR_MOUSEWHEEL_EVENTS_TARGET,
  ATTR_MOUSEWHEEL_FORCE_TO_AXIS,
  ATTR_MOUSEWHEEL_INVERT,
  ATTR_MOUSEWHEEL_NO_MOUSEWHEEL_CLASS,
  ATTR_MOUSEWHEEL_RELEASE_ON_EDGES,
  ATTR_MOUSEWHEEL_SENSITIVITY,
  ATTR_MOUSEWHEEL_THRESHOLD_DELTA,
  ATTR_MOUSEWHEEL_THRESHOLD_TIME,
} from "lib/attributes";
import { parseBoolean, parseNumber, parseString } from "../util";
import { SwiperOptions } from "swiper/types";

export function mouseConfig(config: SwiperOptions, el: HTMLElement) {
  config.mousewheel = {
    enabled: parseBoolean(el, ATTR_MOUSEWHEEL_ENABLED, false),
    eventsTarget: parseString(el, ATTR_MOUSEWHEEL_EVENTS_TARGET, "container"),
    forceToAxis: parseBoolean(el, ATTR_MOUSEWHEEL_FORCE_TO_AXIS, false),
    invert: parseBoolean(el, ATTR_MOUSEWHEEL_INVERT, false),
    noMousewheelClass: parseString(el, ATTR_MOUSEWHEEL_NO_MOUSEWHEEL_CLASS, "swiper-no-mousewheel"),
    releaseOnEdges: parseBoolean(el, ATTR_MOUSEWHEEL_RELEASE_ON_EDGES, false),
    sensitivity: parseNumber(el, ATTR_MOUSEWHEEL_SENSITIVITY, 1),
    thresholdDelta: parseNumber(el, ATTR_MOUSEWHEEL_THRESHOLD_DELTA),
    thresholdTime: parseNumber(el, ATTR_MOUSEWHEEL_THRESHOLD_TIME),
  };
}
