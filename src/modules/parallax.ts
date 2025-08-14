import { ATTR_PARALLAX_ENABLED } from "lib/attributes";
import { parseBoolean } from "../util";
import { SwiperOptions } from "swiper/types";

export default function parallaxConfig(config: SwiperOptions, el: HTMLElement) {
  config.parallax = {
    enabled: parseBoolean(el, ATTR_PARALLAX_ENABLED, false),
  };
}
