import { ThumbsOptions } from 'swiper/types';
import { parseAttr, parseBoolean, parseNumber, parseString } from '../util';
import { Waterfall } from 'types/waterfall';

function getThumbsSwiper(
  el: JQuery<HTMLElement>,
  sliders: Waterfall[],
): Waterfall | null {
  const sliderName = parseAttr(el, 'thumbs-name', null);
  if (sliderName === null) return null;

  const foundSlider = sliders.find(
    (slider: Waterfall) => slider.name === sliderName,
  );

  if (foundSlider) return foundSlider;
  console.log('A matching thumbs waterfall was not found for ', sliderName);
  return null; // Return null if no match is found
}

export function thumbsConfig(el: JQuery<HTMLElement>, swipers: Waterfall[]) {
  const waterfall = getThumbsSwiper(el, swipers);
  if (!waterfall) return;

  let config: ThumbsOptions = {
    autoScrollOffset: parseNumber(el, 'auto-scroll-offset', 0),
    multipleActiveThumbs: parseBoolean(el, 'multiple-active-thumbs', false),
    slideThumbActiveClass: parseString(
      el,
      'slide-thumb-active-class',
      'swiper-slide-thumb-active',
    ),
    swiper: waterfall.swiper,
    thumbsContainerClass: parseString(
      el,
      'thumbs-container-class',
      'swiper-thumbs',
    ),
  };
  return config;
}
