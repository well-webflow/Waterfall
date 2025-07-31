import {
  ATTR_ZOOM_CONTAINER_CLASS,
  ATTR_ZOOM_LIMIT_TO_ORIGINAL_SIZE,
  ATTR_ZOOM_MAX_RATIO,
  ATTR_ZOOM_MIN_RATIO,
  ATTR_ZOOM_PAN_ON_MOUSE_MOVE,
  ATTR_ZOOM_TOGGLE,
  ATTR_ZOOMED_SLIDE_CLASS,
} from "lib/attributes";
import { parseAttr } from "../util";

export function zoomConfig(el: HTMLElement) {
  return {
    containerClass: parseAttr(el, ATTR_ZOOM_CONTAINER_CLASS, "swiper-zoom-container"),
    limitToOriginalSize: parseAttr(el, ATTR_ZOOM_LIMIT_TO_ORIGINAL_SIZE, false),
    maxRatio: parseAttr(el, ATTR_ZOOM_MAX_RATIO, 3),
    minRatio: parseAttr(el, ATTR_ZOOM_MIN_RATIO, 1),
    panOnMouseMove: parseAttr(el, ATTR_ZOOM_PAN_ON_MOUSE_MOVE, false),
    toggle: parseAttr(el, ATTR_ZOOM_TOGGLE, true),
    zoomedSlideClass: parseAttr(el, ATTR_ZOOMED_SLIDE_CLASS, "swiper-slide-zoomed"),
  };
}
