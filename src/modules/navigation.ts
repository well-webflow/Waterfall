import {
  ATTR_NAVIGATION_DISABLED_CLASS,
  ATTR_NAVIGATION_ENABLED,
  ATTR_NAVIGATION_HIDDEN_CLASS,
  ATTR_NAVIGATION_HIDE_ON_CLICK,
  ATTR_NAVIGATION_LOCK_CLASS,
  ATTR_NAVIGATION_NAVIGATION_DISABLED_CLASS,
  ATTR_WATERFALL,
  ATTR_WATERFALL_ELEMENT,
} from "lib/attributes";
import { parseAttr } from "../util";

export function navigationConfig($this: JQuery<HTMLElement>, name: string) {
  return {
    disabledClass: parseAttr($this, ATTR_NAVIGATION_DISABLED_CLASS, "swiper-button-disabled"),
    enabled: parseAttr($this, ATTR_NAVIGATION_ENABLED, null),
    hiddenClass: parseAttr($this, ATTR_NAVIGATION_HIDDEN_CLASS, "swiper-button-hidden"),
    hideOnClick: parseAttr($this, ATTR_NAVIGATION_HIDE_ON_CLICK, false),
    lockClass: parseAttr($this, ATTR_NAVIGATION_LOCK_CLASS, "swiper-button-lock"),
    navigationDisabledClass: parseAttr($this, ATTR_NAVIGATION_NAVIGATION_DISABLED_CLASS, "swiper-navigation-disabled"),
    nextEl: `[${ATTR_WATERFALL}='${name}'] [${ATTR_WATERFALL_ELEMENT}='next']`,
    prevEl: `[${ATTR_WATERFALL}='${name}'] [${ATTR_WATERFALL_ELEMENT}='prev']`,
  };
}
