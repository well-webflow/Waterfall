import {
  ATTR_NAVIGATION_DISABLED_CLASS,
  ATTR_NAVIGATION_ENABLED,
  ATTR_NAVIGATION_HIDDEN_CLASS,
  ATTR_NAVIGATION_HIDE_ON_CLICK,
  ATTR_NAVIGATION_LOCK_CLASS,
  ATTR_NAVIGATION_NAVIGATION_DISABLED_CLASS,
  ATTR_WATERFALL,
} from "lib/attributes";
import { parseAttr } from "../util";
import { ATTR_WATERFALL_ELEMENT, EL_NAVIGATION_NEXT, EL_NAVIGATION_PREV } from "lib/elements";

export function navigationConfig(el: HTMLElement, name: string) {
  return {
    disabledClass: parseAttr(el, ATTR_NAVIGATION_DISABLED_CLASS, "swiper-button-disabled"),
    enabled: parseAttr(el, ATTR_NAVIGATION_ENABLED, null),
    hiddenClass: parseAttr(el, ATTR_NAVIGATION_HIDDEN_CLASS, "swiper-button-hidden"),
    hideOnClick: parseAttr(el, ATTR_NAVIGATION_HIDE_ON_CLICK, false),
    lockClass: parseAttr(el, ATTR_NAVIGATION_LOCK_CLASS, "swiper-button-lock"),
    navigationDisabledClass: parseAttr(el, ATTR_NAVIGATION_NAVIGATION_DISABLED_CLASS, "swiper-navigation-disabled"),
    nextEl: `[${ATTR_WATERFALL}='${name}'] [${ATTR_WATERFALL_ELEMENT}=${EL_NAVIGATION_NEXT}]`,
    prevEl: `[${ATTR_WATERFALL}='${name}'] [${ATTR_WATERFALL_ELEMENT}=${EL_NAVIGATION_PREV}]`,
  };
}
