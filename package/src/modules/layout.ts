import { parseAttr } from '../util';

export function gridConfig($this: JQuery<HTMLElement>) {
  return {
    fill: parseAttr($this, 'grid-fill', 'column'),
    rows: parseAttr($this, 'grid-rows', 1),
  };
}
