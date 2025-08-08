import {
  ATTR_ZOOM_CONTAINER_CLASS,
  ATTR_ZOOM_LIMIT_TO_ORIGINAL_SIZE,
  ATTR_ZOOM_MAX_RATIO,
  ATTR_ZOOM_MIN_RATIO,
  ATTR_ZOOM_PAN_ON_MOUSE_MOVE,
  ATTR_ZOOM_TOGGLE,
  ATTR_ZOOMED_SLIDE_CLASS,
} from "lib/attributes";
import { parseBoolean, parseNumber, parseString } from "../util";

export function zoomConfig(config: any, el: HTMLElement) {
  config.zoom = {
    containerClass: parseString(el, ATTR_ZOOM_CONTAINER_CLASS, "swiper-zoom-container"),
    limitToOriginalSize: parseBoolean(el, ATTR_ZOOM_LIMIT_TO_ORIGINAL_SIZE, false),
    maxRatio: parseNumber(el, ATTR_ZOOM_MAX_RATIO, 3),
    minRatio: parseNumber(el, ATTR_ZOOM_MIN_RATIO, 1),
    panOnMouseMove: parseBoolean(el, ATTR_ZOOM_PAN_ON_MOUSE_MOVE, false),
    toggle: parseBoolean(el, ATTR_ZOOM_TOGGLE, true),
    zoomedSlideClass: parseString(el, ATTR_ZOOMED_SLIDE_CLASS, "swiper-slide-zoomed"),
  };
}
