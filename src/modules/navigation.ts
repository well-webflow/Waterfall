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
import { SwiperOptions } from "swiper/types";

export function navigationConfig(config: SwiperOptions, el: HTMLElement, name: string) {
  config.allowSlideNext = parseBoolean(el, ATTR_ALLOW_SLIDE_NEXT, true);
  config.allowSlidePrev = parseBoolean(el, ATTR_ALLOW_SLIDE_PREV, true);

  // Only configure navigation if it has navigation elements or is explicitly enabled
  const hasNavigationElements =
    el.querySelector(`[${ATTR_WATERFALL_ELEMENT}=${EL_NAVIGATION_NEXT}]`) ||
    el.querySelector(`[${ATTR_WATERFALL_ELEMENT}=${EL_NAVIGATION_PREV}]`);
  const navigationEnabled = parseBoolean(el, ATTR_NAVIGATION_ENABLED);

  if (hasNavigationElements || navigationEnabled) {
    config.navigation = {
      disabledClass: parseString(el, ATTR_NAVIGATION_DISABLED_CLASS, "swiper-button-disabled"),
      enabled: navigationEnabled,
      hiddenClass: parseString(el, ATTR_NAVIGATION_HIDDEN_CLASS, "swiper-button-hidden"),
      hideOnClick: parseBoolean(el, ATTR_NAVIGATION_HIDE_ON_CLICK, false),
      lockClass: parseString(el, ATTR_NAVIGATION_LOCK_CLASS, "swiper-button-lock"),
      navigationDisabledClass: parseString(el, ATTR_NAVIGATION_NAVIGATION_DISABLED_CLASS, "swiper-navigation-disabled"),
      nextEl: `[${ATTR_WATERFALL}='${name}'] [${ATTR_WATERFALL_ELEMENT}=${EL_NAVIGATION_NEXT}]`,
      prevEl: `[${ATTR_WATERFALL}='${name}'] [${ATTR_WATERFALL_ELEMENT}=${EL_NAVIGATION_PREV}]`,
    };
  }
}
