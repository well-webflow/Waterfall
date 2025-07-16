import {
  ATTR_SCROLLBAR,
  ATTR_SCROLLBAR_DRAG,
  ATTR_SCROLLBAR_DRAG_SIZE,
  ATTR_SCROLLBAR_DRAGGABLE,
  ATTR_SCROLLBAR_ENABLED,
  ATTR_SCROLLBAR_HIDE,
  ATTR_SCROLLBAR_HORIZONTAL_CLASS,
  ATTR_SCROLLBAR_LOCK_CLASS,
  ATTR_SCROLLBAR_SCROLLBAR_DISABLED_CLASS,
  ATTR_SCROLLBAR_SNAP_ON_RELEASE,
  ATTR_SCROLLBAR_VERTICAL_CLASS,
  ATTR_WATERFALL_ELEMENT,
} from "lib/attributes";
import { parseAttr } from "../util";

export function scrollbarConfig($this: JQuery<HTMLElement>) {
  const $scrollbar = $this.find(`[${ATTR_WATERFALL_ELEMENT}=${ATTR_SCROLLBAR}]`);
  const $scrollbarDrag = $($scrollbar).find(`[${ATTR_WATERFALL_ELEMENT}=${ATTR_SCROLLBAR_DRAG}]`);

  return {
    dragClass: $scrollbarDrag.attr("class"),
    dragSize: parseAttr($this, ATTR_SCROLLBAR_DRAG_SIZE, "auto"),
    draggable: parseAttr($this, ATTR_SCROLLBAR_DRAGGABLE, false),
    el: $scrollbar[0],
    enabled: parseAttr($this, ATTR_SCROLLBAR_ENABLED, null),
    hide: parseAttr($this, ATTR_SCROLLBAR_HIDE, true),
    horizontalClass: parseAttr($this, ATTR_SCROLLBAR_HORIZONTAL_CLASS, "swiper-scrollbar-horizontal"),
    lockClass: parseAttr($this, ATTR_SCROLLBAR_LOCK_CLASS, "swiper-scrollbar-lock"),
    scrollbarDisabledClass: parseAttr($this, ATTR_SCROLLBAR_SCROLLBAR_DISABLED_CLASS, "swiper-scrollbar-disabled"),
    snapOnRelease: parseAttr($this, ATTR_SCROLLBAR_SNAP_ON_RELEASE, true), //NOTE documentation says default is false, but is lying lmao
    verticalClass: parseAttr($this, ATTR_SCROLLBAR_VERTICAL_CLASS, "swiper-scrollbar-vertical"),
  };
}
