import {
  ATTR_HASH_REPLACE_STATE,
  ATTR_HASH_WATCH_STATE,
  ATTR_HISTORY_KEEP_QUERY,
  ATTR_HISTORY_KEY,
  ATTR_HISTORY_REPLACE_STATE,
  ATTR_HISTORY_ROOT,
} from "lib/attributes";
import { parseAttr } from "../util";

export function hashNavigationConfig($this: JQuery<HTMLElement>) {
  return {
    //getSlideIndex
    replaceState: parseAttr($this, ATTR_HASH_REPLACE_STATE, false),
    watchState: parseAttr($this, ATTR_HASH_WATCH_STATE, false),
  };
}

export function historyNavigationConfig($this: JQuery<HTMLElement>) {
  return {
    keepQuery: parseAttr($this, ATTR_HISTORY_KEEP_QUERY, false),
    key: parseAttr($this, ATTR_HISTORY_KEY, "slides"),
    replaceState: parseAttr($this, ATTR_HISTORY_REPLACE_STATE, false),
    root: parseAttr($this, ATTR_HISTORY_ROOT, ""),
  };
}
