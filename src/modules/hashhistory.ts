import {
  ATTR_HASH_REPLACE_STATE,
  ATTR_HASH_WATCH_STATE,
  ATTR_HISTORY_KEEP_QUERY,
  ATTR_HISTORY_KEY,
  ATTR_HISTORY_REPLACE_STATE,
  ATTR_HISTORY_ROOT,
} from "lib/attributes";
import { parseBoolean, parseString } from "../util";

export function hashNavigationConfig(config: any, el: HTMLElement) {
  config.hashNavigation = {
    //getSlideIndex
    replaceState: parseBoolean(el, ATTR_HASH_REPLACE_STATE, false),
    watchState: parseBoolean(el, ATTR_HASH_WATCH_STATE, false),
  };
}

export function historyNavigationConfig(config: any, el: HTMLElement) {
  config.history = {
    keepQuery: parseBoolean(el, ATTR_HISTORY_KEEP_QUERY, false),
    key: parseString(el, ATTR_HISTORY_KEY, "slides"),
    replaceState: parseBoolean(el, ATTR_HISTORY_REPLACE_STATE, false),
    root: parseString(el, ATTR_HISTORY_ROOT, ""),
  };
}
