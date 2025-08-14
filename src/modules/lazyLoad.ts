import { ATTR_LAZY_PRELOAD_PREV_NEXT, ATTR_LAZY_PRELOADER_CLASS } from "lib/attributes";
import { parseNumber, parseString } from "../util";
import { SwiperOptions } from "swiper/types";

export default function lazyLoadConfig(config: SwiperOptions, el: HTMLElement) {
  config.lazyPreloadPrevNext = parseNumber(el, ATTR_LAZY_PRELOAD_PREV_NEXT, 0);
  config.lazyPreloaderClass = parseString(el, ATTR_LAZY_PRELOADER_CLASS, "swiper-lazy-preloader");
}
