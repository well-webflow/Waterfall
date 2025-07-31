import { Waterfall } from "types/waterfall";
import { getSwipersByName, parseAttr, parseString } from "../util";
import Swiper from "swiper";
import { ATTR_CONTROLLER_CONTROL, ATTR_CONTROLLER_BY, ATTR_CONTROLLER_INVERSE } from "../lib/attributes";

export function controllerConfig(el: HTMLElement, waterfalls: Waterfall[]) {
  const controllerSelector = parseString(el, ATTR_CONTROLLER_CONTROL, "");
  if (!controllerSelector) return;
  const swipers: Swiper[] = getSwipersByName(waterfalls, controllerSelector);

  return {
    by: parseAttr(el, ATTR_CONTROLLER_BY, "slide"),
    control: swipers,
    inverse: parseAttr(el, ATTR_CONTROLLER_INVERSE, false),
  };
}
