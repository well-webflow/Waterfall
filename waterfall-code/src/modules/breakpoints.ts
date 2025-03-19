import { parseAttr } from '../util';

export function breakpointsConfig($this: JQuery<HTMLElement>) {
  return {
    478: {
      centeredSlides: parseAttr($this, 'lmobile-centered-slides', null),
      slidesPerView: parseAttr($this, 'lmobile-slides-per-view', null),
      slidesPerGroup: parseAttr($this, 'lmobile-slides-per-group', null),
      spaceBetween: parseAttr($this, 'lmobile-space-between', null),
    },
    767: {
      centeredSlides: parseAttr($this, 'tablet-centered-slides', null),
      slidesPerView: parseAttr($this, 'tablet-slides-per-view', null),
      slidesPerGroup: parseAttr($this, 'tablet-slides-per-group', null),
      spaceBetween: parseAttr($this, 'tablet-space-between', null),
    },
    991: {
      centeredSlides: parseAttr($this, 'desktop-centered-slides', null),
      slidesPerView: parseAttr($this, 'desktop-slides-per-view', null),
      slidesPerGroup: parseAttr($this, 'desktop-slides-per-group', null),
      spaceBetween: parseAttr($this, 'desktop-space-between', null),
    },
    1280: {
      centeredSlides: parseAttr($this, 'large-centered-slides', null),
      slidesPerView: parseAttr($this, 'large-slides-per-view', null),
      slidesPerGroup: parseAttr($this, 'large-slides-per-group', null),
      spaceBetween: parseAttr($this, 'large-space-between', null),
    },
    1440: {
      centeredSlides: parseAttr($this, 'xlarge-centered-slides', null),
      slidesPerView: parseAttr($this, 'xlarge-slides-per-view', null),
      slidesPerGroup: parseAttr($this, 'xlarge-slides-per-group', null),
      spaceBetween: parseAttr($this, 'xlarge-space-between', null),
    },
  };
}
