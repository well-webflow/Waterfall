import { Waterfall } from "types/waterfall";
import { getSwipersByName, parseAttr, parseString } from "../util";
import Swiper from "swiper";
import {
  ATTR_CONTROLLER_CONTROL,
  ATTR_CONTROLLER_BY,
  ATTR_CONTROLLER_INVERSE,
} from "../lib/attributes";

export function controllerConfig(
  $this: JQuery<HTMLElement>,
  waterfalls: Waterfall[],
) {
  const controllerSelector = parseString($this, ATTR_CONTROLLER_CONTROL, "");
  if (!controllerSelector) return;
  const swipers: Swiper[] = getSwipersByName(waterfalls, controllerSelector);

  return {
    by: parseAttr($this, ATTR_CONTROLLER_BY, "slide"),
    control: swipers,
    inverse: parseAttr($this, ATTR_CONTROLLER_INVERSE, false),
  };
}
