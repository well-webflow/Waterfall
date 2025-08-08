import { ThumbsOptions } from "swiper/types";
import { parseBoolean, parseNumber, parseString } from "../util";
import { Waterfall } from "types/waterfall";
import {
  ATTR_THUMBS,
  ATTR_THUMBS_AUTO_SCROLL_OFFSET,
  ATTR_THUMBS_CONTAINER_CLASS,
  ATTR_THUMBS_MULTIPLE_ACTIVE_THUMBS,
  ATTR_THUMBS_SLIDE_THUMB_ACTIVE_CLASS,
} from "lib/attributes";

export function thumbsConfig(config: any, el: HTMLElement, swipers: Waterfall[], debug: boolean) {
  const thumbsName = parseString(el, ATTR_THUMBS, "");
  if (!thumbsName || thumbsName === "") {
    return;
  }

  const waterfall = swipers.find((slider: Waterfall) => slider.name === thumbsName);

  if (!waterfall) {
    if (debug) console.warn("A matching thumbs waterfall was not found for ", thumbsName);
    return;
  }

  config.thumbs = {
    autoScrollOffset: parseNumber(el, ATTR_THUMBS_AUTO_SCROLL_OFFSET, 0),
    multipleActiveThumbs: parseBoolean(el, ATTR_THUMBS_MULTIPLE_ACTIVE_THUMBS, false),
    slideThumbActiveClass: parseString(el, ATTR_THUMBS_SLIDE_THUMB_ACTIVE_CLASS, "swiper-slide-thumb-active"),
    swiper: waterfall.swiper,
    thumbsContainerClass: parseString(el, ATTR_THUMBS_CONTAINER_CLASS, "swiper-thumbs"),
  };
  return config;
}
