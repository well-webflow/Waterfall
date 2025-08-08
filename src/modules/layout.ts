import { ATTR_GRID_FILL, ATTR_GRID_ROWS } from "lib/attributes";
import { parseNumber, parseString } from "../util";

export function gridConfig(el: HTMLElement) {
  return {
    fill: parseString(el, ATTR_GRID_FILL, "column"),
    rows: parseNumber(el, ATTR_GRID_ROWS, 1),
  };
}
