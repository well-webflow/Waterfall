import { ATTR_GRID_FILL, ATTR_GRID_ROWS } from "lib/attributes";
import { parseAttr } from "../util";

export function gridConfig($this: JQuery<HTMLElement>) {
  return {
    fill: parseAttr($this, ATTR_GRID_FILL, "column"),
    rows: parseAttr($this, ATTR_GRID_ROWS, 1),
  };
}
