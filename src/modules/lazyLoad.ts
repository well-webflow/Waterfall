import { ATTR_LAZY_PRELOAD_PREV_NEXT, ATTR_LAZY_PRELOADER_CLASS } from "lib/attributes";
import { parseNumber, parseString } from "../util";

export default function lazyLoadConfig(config: any, el: HTMLElement) {
  config.lazyPreloadPrevNext = parseNumber(el, ATTR_LAZY_PRELOAD_PREV_NEXT, 0);
  config.lazyPreloaderClass = parseString(el, ATTR_LAZY_PRELOADER_CLASS, "swiper-lazy-preloader");
}
