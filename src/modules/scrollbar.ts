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
import { ATTR_WATERFALL_ELEMENT, EL_SCROLLBAR, EL_SCROLLBAR_DRAG } from "lib/elements";
import { parseAny, parseBoolean, parseString } from "../util";
import { SwiperOptions } from "swiper/types";

export function scrollbarConfig(config: SwiperOptions, element: HTMLElement) {
  const scrollbar = element.querySelector<HTMLElement>(`[${ATTR_WATERFALL_ELEMENT}=${EL_SCROLLBAR}]`);
  if (!scrollbar) return;
  const scrollbarDrag = scrollbar?.querySelector<HTMLElement>(`[${ATTR_WATERFALL_ELEMENT}=${EL_SCROLLBAR_DRAG}]`);

  config.scrollbar = {
    dragClass: scrollbarDrag?.getAttribute("class") || "",
    dragSize: parseAny(element, ATTR_SCROLLBAR_DRAG_SIZE, "auto"),
    draggable: parseBoolean(element, ATTR_SCROLLBAR_DRAGGABLE, false),
    el: scrollbar || null,
    enabled: parseBoolean(element, ATTR_SCROLLBAR_ENABLED),
    hide: parseBoolean(element, ATTR_SCROLLBAR_HIDE, true),
    horizontalClass: parseString(element, ATTR_SCROLLBAR_HORIZONTAL_CLASS, "swiper-scrollbar-horizontal"),
    lockClass: parseString(element, ATTR_SCROLLBAR_LOCK_CLASS, "swiper-scrollbar-lock"),
    scrollbarDisabledClass: parseString(element, ATTR_SCROLLBAR_SCROLLBAR_DISABLED_CLASS, "swiper-scrollbar-disabled"),
    snapOnRelease: parseBoolean(element, ATTR_SCROLLBAR_SNAP_ON_RELEASE, true), // NOTE doc says false but actually true
    verticalClass: parseString(element, ATTR_SCROLLBAR_VERTICAL_CLASS, "swiper-scrollbar-vertical"),
  };
}
