import { ATTR_GRID_FILL, ATTR_GRID_ROWS } from "lib/attributes";
import { parseAttr } from "../util";

export function gridConfig(el: HTMLElement) {
  return {
    fill: parseAttr(el, ATTR_GRID_FILL, "column"),
    rows: parseAttr(el, ATTR_GRID_ROWS, 1),
  };
}
