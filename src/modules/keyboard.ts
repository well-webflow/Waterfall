import { ATTR_KEYBOARD_ENABLED, ATTR_KEYBOARD_ONLY_IN_VIEWPORT, ATTR_KEYBOARD_PAGE_UP_DOWN } from "lib/attributes";
import { parseBoolean } from "../util";

export function keyboardConfig(config: any, el: HTMLElement) {
  config.keyboard = {
    enabled: parseBoolean(el, ATTR_KEYBOARD_ENABLED, false),
    onlyInViewport: parseBoolean(el, ATTR_KEYBOARD_ONLY_IN_VIEWPORT, true),
    pageUpDown: parseBoolean(el, ATTR_KEYBOARD_PAGE_UP_DOWN, true),
  };
}
