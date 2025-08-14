import {
  ATTR_MOUSE_ENABLED,
  ATTR_MOUSE_EVENTS_TARGET,
  ATTR_MOUSE_FORCE_TO_AXIS,
  ATTR_MOUSE_INVERT,
  ATTR_MOUSE_NO_MOUSE_WHEEL_CLASS,
  ATTR_MOUSE_RELEASE_ON_EDGES,
  ATTR_MOUSE_SENSITIVITY,
  ATTR_MOUSE_THRESHOLD_DELTA,
  ATTR_MOUSE_THRESHOLD_TIME,
} from "lib/attributes";
import { parseBoolean, parseNumber, parseString } from "../util";
import { SwiperOptions } from "swiper/types";

export function mouseConfig(config: SwiperOptions, el: HTMLElement) {
  config.mousewheel = {
    enabled: parseBoolean(el, ATTR_MOUSE_ENABLED, false),
    eventsTarget: parseString(el, ATTR_MOUSE_EVENTS_TARGET, "container"),
    forceToAxis: parseBoolean(el, ATTR_MOUSE_FORCE_TO_AXIS, false),
    invert: parseBoolean(el, ATTR_MOUSE_INVERT, false),
    noMousewheelClass: parseString(el, ATTR_MOUSE_NO_MOUSE_WHEEL_CLASS, "swiper-no-mousewheel"),
    releaseOnEdges: parseBoolean(el, ATTR_MOUSE_RELEASE_ON_EDGES, false),
    sensitivity: parseNumber(el, ATTR_MOUSE_SENSITIVITY, 1),
    thresholdDelta: parseNumber(el, ATTR_MOUSE_THRESHOLD_DELTA),
    thresholdTime: parseNumber(el, ATTR_MOUSE_THRESHOLD_TIME),
  };
}
