import {
  ATTR_KEYBOARD_ENABLED,
  ATTR_KEYBOARD_ONLY_IN_VIEWPORT,
  ATTR_KEYBOARD_PAGE_UP_DOWN,
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

export function keyboardConfig(el: HTMLElement) {
  return {
    enabled: parseBoolean(el, ATTR_KEYBOARD_ENABLED, false),
    onlyInViewport: parseBoolean(el, ATTR_KEYBOARD_ONLY_IN_VIEWPORT, true),
    pageUpDown: parseBoolean(el, ATTR_KEYBOARD_PAGE_UP_DOWN, true),
  };
}

export function mouseConfig(el: HTMLElement) {
  return {
    enabled: parseBoolean(el, ATTR_MOUSE_ENABLED, false),
    eventsTarget: parseString(el, ATTR_MOUSE_EVENTS_TARGET, "container"),
    forceToAxis: parseBoolean(el, ATTR_MOUSE_FORCE_TO_AXIS, false),
    invert: parseBoolean(el, ATTR_MOUSE_INVERT, false),
    noMouseWheelClass: parseString(el, ATTR_MOUSE_NO_MOUSE_WHEEL_CLASS, "swiper-no-mousewheel"),
    releaseOnEdges: parseBoolean(el, ATTR_MOUSE_RELEASE_ON_EDGES, false),
    sensitivity: parseNumber(el, ATTR_MOUSE_SENSITIVITY, 1),
    thresholdDelta: parseNumber(el, ATTR_MOUSE_THRESHOLD_DELTA),
    thresholdTime: parseNumber(el, ATTR_MOUSE_THRESHOLD_TIME),
  };
}
