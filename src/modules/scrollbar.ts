import {
  ATTR_SCROLLBAR_DRAG_SIZE,
  ATTR_SCROLLBAR_DRAGGABLE,
  ATTR_SCROLLBAR_ENABLED,
  ATTR_SCROLLBAR_HIDE,
  ATTR_SCROLLBAR_HORIZONTAL_CLASS,
  ATTR_SCROLLBAR_LOCK_CLASS,
  ATTR_SCROLLBAR_SCROLLBAR_DISABLED_CLASS,
  ATTR_SCROLLBAR_SNAP_ON_RELEASE,
  ATTR_SCROLLBAR_VERTICAL_CLASS,
} from "lib/attributes";
import { parseAttr } from "../util";
import { ATTR_WATERFALL_ELEMENT, EL_SCROLLBAR, EL_SCROLLBAR_DRAG } from "lib/elements";

export function scrollbarConfig(element: HTMLElement) {
  const scrollbar = element.querySelector<HTMLElement>(`[${ATTR_WATERFALL_ELEMENT}=${EL_SCROLLBAR}]`);
  const scrollbarDrag = scrollbar?.querySelector<HTMLElement>(`[${ATTR_WATERFALL_ELEMENT}=${EL_SCROLLBAR_DRAG}]`);

  return {
    dragClass: scrollbarDrag?.getAttribute("class") || "",
    dragSize: parseAttr(element, ATTR_SCROLLBAR_DRAG_SIZE, "auto"),
    draggable: parseAttr(element, ATTR_SCROLLBAR_DRAGGABLE, false),
    el: scrollbar || null,
    enabled: parseAttr(element, ATTR_SCROLLBAR_ENABLED, null),
    hide: parseAttr(element, ATTR_SCROLLBAR_HIDE, true),
    horizontalClass: parseAttr(element, ATTR_SCROLLBAR_HORIZONTAL_CLASS, "swiper-scrollbar-horizontal"),
    lockClass: parseAttr(element, ATTR_SCROLLBAR_LOCK_CLASS, "swiper-scrollbar-lock"),
    scrollbarDisabledClass: parseAttr(element, ATTR_SCROLLBAR_SCROLLBAR_DISABLED_CLASS, "swiper-scrollbar-disabled"),
    snapOnRelease: parseAttr(element, ATTR_SCROLLBAR_SNAP_ON_RELEASE, true), // doc says false but actually true
    verticalClass: parseAttr(element, ATTR_SCROLLBAR_VERTICAL_CLASS, "swiper-scrollbar-vertical"),
  };
}
