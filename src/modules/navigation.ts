import {
  ATTR_ALLOW_SLIDE_NEXT,
  ATTR_ALLOW_SLIDE_PREV,
  ATTR_NAVIGATION_DISABLED_CLASS,
  ATTR_NAVIGATION_ENABLED,
  ATTR_NAVIGATION_HIDDEN_CLASS,
  ATTR_NAVIGATION_HIDE_ON_CLICK,
  ATTR_NAVIGATION_LOCK_CLASS,
  ATTR_NAVIGATION_NAVIGATION_DISABLED_CLASS,
  ATTR_WATERFALL,
} from "lib/attributes";
import { ATTR_WATERFALL_ELEMENT, EL_NAVIGATION_NEXT, EL_NAVIGATION_PREV } from "lib/elements";
import { parseBoolean, parseString } from "../util";

export function navigationConfig(config: any, el: HTMLElement, name: string) {
  config.allowSlideNext = parseBoolean(el, ATTR_ALLOW_SLIDE_NEXT, true);
  config.allowSlidePrev = parseBoolean(el, ATTR_ALLOW_SLIDE_PREV, true);
  config.disabledClass = parseString(el, ATTR_NAVIGATION_DISABLED_CLASS, "swiper-button-disabled");
  config.enabled = parseBoolean(el, ATTR_NAVIGATION_ENABLED);
  config.hiddenClass = parseString(el, ATTR_NAVIGATION_HIDDEN_CLASS, "swiper-button-hidden");
  config.hideOnClick = parseBoolean(el, ATTR_NAVIGATION_HIDE_ON_CLICK, false);
  config.lockClass = parseString(el, ATTR_NAVIGATION_LOCK_CLASS, "swiper-button-lock");
  config.navigationDisabledClass = parseString(
    el,
    ATTR_NAVIGATION_NAVIGATION_DISABLED_CLASS,
    "swiper-navigation-disabled",
  );
  config.navigation = {
    nextEl: `[${ATTR_WATERFALL}='${name}'] [${ATTR_WATERFALL_ELEMENT}=${EL_NAVIGATION_NEXT}]`,
    prevEl: `[${ATTR_WATERFALL}='${name}'] [${ATTR_WATERFALL_ELEMENT}=${EL_NAVIGATION_PREV}]`,
  };
}
