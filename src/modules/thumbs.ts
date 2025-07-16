import { ThumbsOptions } from "swiper/types";
import { parseAttr, parseBoolean, parseNumber, parseString } from "../util";
import { Waterfall } from "types/waterfall";
import {
  ATTR_THUMBS_AUTO_SCROLL_OFFSET,
  ATTR_THUMBS_CONTAINER_CLASS,
  ATTR_THUMBS_MULTIPLE_ACTIVE_THUMBS,
  ATTR_THUMBS_NAME,
  ATTR_THUMBS_SLIDE_THUMB_ACTIVE_CLASS,
} from "lib/attributes";

function getThumbsSwiper(el: JQuery<HTMLElement>, sliders: Waterfall[]): Waterfall | null {
  const sliderName = parseAttr(el, ATTR_THUMBS_NAME, null);
  if (sliderName === null) return null;

  const foundSlider = sliders.find((slider: Waterfall) => slider.name === sliderName);

  if (foundSlider) return foundSlider;
  console.log("A matching thumbs waterfall was not found for ", sliderName);
  return null; // Return null if no match is found
}

export function thumbsConfig(el: JQuery<HTMLElement>, swipers: Waterfall[]) {
  const waterfall = getThumbsSwiper(el, swipers);
  if (!waterfall) return;

  let config: ThumbsOptions = {
    autoScrollOffset: parseNumber(el, ATTR_THUMBS_AUTO_SCROLL_OFFSET, 0),
    multipleActiveThumbs: parseBoolean(el, ATTR_THUMBS_MULTIPLE_ACTIVE_THUMBS, false),
    slideThumbActiveClass: parseString(el, ATTR_THUMBS_SLIDE_THUMB_ACTIVE_CLASS, "swiper-slide-thumb-active"),
    swiper: waterfall.swiper,
    thumbsContainerClass: parseString(el, ATTR_THUMBS_CONTAINER_CLASS, "swiper-thumbs"),
  };
  return config;
}
