import { parseAttr } from '../util';

export function navigationConfig($this: JQuery<HTMLElement>, name: string) {
  return {
    disabledClass: parseAttr(
      $this,
      'nav-disabled-class',
      'swiper-button-disabled',
    ),
    enabled: parseAttr($this, 'nav-enabled', null),
    hiddenClass: parseAttr($this, 'nav-hidden-class', 'swiper-button-hidden'),
    hideOnClick: parseAttr($this, 'nav-hide-on-click', false),
    lockClass: parseAttr($this, 'nav-lock-class', 'swiper-button-lock'),
    navigationDisabledClass: parseAttr(
      $this,
      'nav-disabled-class',
      'swiper-navigation-disabled',
    ),
    nextEl: `[waterfall='${name}'] [waterfall-el='next']`,
    prevEl: `[waterfall='${name}'] [waterfall-el='prev']`,
  };
}
