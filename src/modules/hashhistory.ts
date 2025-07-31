import {
  ATTR_HASH_REPLACE_STATE,
  ATTR_HASH_WATCH_STATE,
  ATTR_HISTORY_KEEP_QUERY,
  ATTR_HISTORY_KEY,
  ATTR_HISTORY_REPLACE_STATE,
  ATTR_HISTORY_ROOT,
} from "lib/attributes";
import { parseAttr } from "../util";

export function hashNavigationConfig(el: HTMLElement) {
  return {
    //getSlideIndex
    replaceState: parseAttr(el, ATTR_HASH_REPLACE_STATE, false),
    watchState: parseAttr(el, ATTR_HASH_WATCH_STATE, false),
  };
}

export function historyNavigationConfig(el: HTMLElement) {
  return {
    keepQuery: parseAttr(el, ATTR_HISTORY_KEEP_QUERY, false),
    key: parseAttr(el, ATTR_HISTORY_KEY, "slides"),
    replaceState: parseAttr(el, ATTR_HISTORY_REPLACE_STATE, false),
    root: parseAttr(el, ATTR_HISTORY_ROOT, ""),
  };
}
