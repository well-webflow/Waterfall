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
import { parseAttr } from "../util";

export function keyboardConfig(el: HTMLElement) {
  return {
    enabled: parseAttr(el, ATTR_KEYBOARD_ENABLED, "false"),
    onlyInViewport: parseAttr(el, ATTR_KEYBOARD_ONLY_IN_VIEWPORT, "true"),
    pageUpDown: parseAttr(el, ATTR_KEYBOARD_PAGE_UP_DOWN, "true"),
  };
}

export function mouseConfig(el: HTMLElement) {
  return {
    enabled: parseAttr(el, ATTR_MOUSE_ENABLED, "false"),
    eventsTarget: parseAttr(el, ATTR_MOUSE_EVENTS_TARGET, "container"),
    forceToAxis: parseAttr(el, ATTR_MOUSE_FORCE_TO_AXIS, "false"),
    invert: parseAttr(el, ATTR_MOUSE_INVERT, "false"),
    noMouseWheelClass: parseAttr(el, ATTR_MOUSE_NO_MOUSE_WHEEL_CLASS, "swiper-no-mousewheel"),
    releaseOnEdges: parseAttr(el, ATTR_MOUSE_RELEASE_ON_EDGES, "false"),
    sensitivity: parseAttr(el, ATTR_MOUSE_SENSITIVITY, "1"),
    thresholdDelta: parseAttr(el, ATTR_MOUSE_THRESHOLD_DELTA, "null"),
    thresholdTime: parseAttr(el, ATTR_MOUSE_THRESHOLD_TIME, "null"),
  };
}
