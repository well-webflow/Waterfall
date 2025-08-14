import { Waterfall } from "types/waterfall";
import { getSwipersByName, parseAny, parseBoolean, parseString } from "../util";
import Swiper from "swiper";
import { ATTR_CONTROLLER, ATTR_CONTROLLER_BY, ATTR_CONTROLLER_INVERSE } from "../lib/attributes";
import { SwiperOptions } from "swiper/types";

export function controllerConfig(config: SwiperOptions, el: HTMLElement, waterfalls: Waterfall[], debug: boolean) {
  const controllerSelector = parseString(el, ATTR_CONTROLLER, "");
  if (!controllerSelector) return;
  const swipers: Swiper[] = getSwipersByName(waterfalls, controllerSelector, debug);

  if (debug) {
    if (!swipers.length) console.error(`No controller swipers found for selector "${controllerSelector}"`);
    else console.log(`Controller Swipers for selector "${controllerSelector}":`, swipers);
  }

  config.controller = {
    by: parseAny(el, ATTR_CONTROLLER_BY, "slide"),
    control: swipers,
    inverse: parseBoolean(el, ATTR_CONTROLLER_INVERSE, false),
  };
}
