import { ATTR_PARALLAX_ENABLED } from "lib/attributes";
import { parseBoolean } from "../util";

export default function parallaxConfig(config: any, el: HTMLElement) {
  config.parallax = {
    enabled: parseBoolean(el, ATTR_PARALLAX_ENABLED, false),
  };
}
