import {
  ATTR_OBSERVE_SLIDE_CHILDREN,
  ATTR_OBSERVE_SLIDE_PARENTS,
  ATTR_OBSERVER,
  ATTR_RESIZE_OBSERVER,
  ATTR_UPDATE_ON_WINDOW_RESIZE,
  ATTR_WATCH_OVERFLOW,
  ATTR_WATCH_SLIDES_PROGRESS,
} from "lib/attributes";
import { parseBoolean } from "../util";

export default function observerConfig(config: any, el: HTMLElement) {
  config.observeParents = parseBoolean(el, ATTR_OBSERVE_SLIDE_PARENTS, false);
  config.observeSlideChildren = parseBoolean(el, ATTR_OBSERVE_SLIDE_CHILDREN, false);
  config.observer = parseBoolean(el, ATTR_OBSERVER, false);
  config.resizeObserver = parseBoolean(el, ATTR_RESIZE_OBSERVER, true);
  config.updateOnWindowResize = parseBoolean(el, ATTR_UPDATE_ON_WINDOW_RESIZE, true);
  config.watchOverflow = parseBoolean(el, ATTR_WATCH_OVERFLOW, true);
  config.watchSlidesProgress = parseBoolean(el, ATTR_WATCH_SLIDES_PROGRESS, false);
}
