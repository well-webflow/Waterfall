import { Waterfall } from 'types/waterfall';
import { getSwipersByName, parseAttr, parseString } from '../util';
import Swiper from 'swiper';

export function controllerConfig(
  $this: JQuery<HTMLElement>,
  waterfalls: Waterfall[],
) {
  const controllerSelector = parseString($this, 'controller-control', '');
  if (!controllerSelector) return;
  const swipers: Swiper[] = getSwipersByName(waterfalls, controllerSelector);

  return {
    by: parseAttr($this, 'controller-by', 'slide'),
    control: swipers,
    inverse: parseAttr($this, 'controller-inverse', false),
  };
}
