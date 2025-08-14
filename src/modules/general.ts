import {
  ATTR_CONTAINER_MODIFIER_CLASS,
  ATTR_SLIDE_FULLY_VISIBLE_CLASS,
  ATTR_INITIAL_SLIDE,
  ATTR_NESTED,
  ATTR_NORMALIZE_SLIDE_INDEX,
  ATTR_SLIDE_ACTIVE_CLASS,
  ATTR_SLIDE_BLANK_CLASS,
  ATTR_SLIDE_CLASS,
  ATTR_SLIDE_NEXT_CLASS,
  ATTR_SLIDE_PREV_CLASS,
  ATTR_SLIDE_VISIBLE_CLASS,
  ATTR_SWIPE_HANDLER,
  ATTR_SWIPER_ELEMENT_NODE_NAME,
  ATTR_WRAPPER_CLASS,
} from "lib/attributes";
import { parseBoolean, parseNumber, parseString } from "../util";
import { SwiperOptions } from "swiper/types";

export function generalConfig(config: SwiperOptions, el: HTMLElement) {
  config.containerModifierClass = parseString(el, ATTR_CONTAINER_MODIFIER_CLASS, "swiper-");
  config.initialSlide = parseNumber(el, ATTR_INITIAL_SLIDE, 0);
  config.nested = parseBoolean(el, ATTR_NESTED, false);
  config.normalizeSlideIndex = parseBoolean(el, ATTR_NORMALIZE_SLIDE_INDEX, true);
  config.slideActiveClass = parseString(el, ATTR_SLIDE_ACTIVE_CLASS, "swiper-slide-active");
  config.slideBlankClass = parseString(el, ATTR_SLIDE_BLANK_CLASS, "swiper-slide-blank");
  config.slideClass = parseString(el, ATTR_SLIDE_CLASS, "swiper-slide");
  config.slideFullyVisibleClass = parseString(el, ATTR_SLIDE_FULLY_VISIBLE_CLASS, "swiper-slide-fully-visible");
  config.slideNextClass = parseString(el, ATTR_SLIDE_NEXT_CLASS, "swiper-slide-next");
  config.slidePrevClass = parseString(el, ATTR_SLIDE_PREV_CLASS, "swiper-slide-prev");
  config.slideVisibleClass = parseString(el, ATTR_SLIDE_VISIBLE_CLASS, "swiper-slide-visible");
  config.swipeHandler = parseString(el, ATTR_SWIPE_HANDLER);
  config.swiperElementNodeName = parseString(el, ATTR_SWIPER_ELEMENT_NODE_NAME, "SWIPER-CONTAINER");
  config.wrapperClass = parseString(el, ATTR_WRAPPER_CLASS, "swiper-wrapper");
}
