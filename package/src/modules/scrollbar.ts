import { parseAttr } from '../util';

export function scrollbarConfig($this: JQuery<HTMLElement>) {
  const $scrollbar = $this.find("[waterfall-el='scrollbar']");
  const $scrollbarDrag = $($scrollbar).find("[waterfall-el='scrollbar-drag']");

  return {
    dragClass: $scrollbarDrag.attr('class'),
    dragSize: parseAttr($this, 'scrollbar-drag-size', 'auto'),
    draggable: parseAttr($this, 'scrollbar-draggable', false),
    el: $scrollbar[0],
    enabled: parseAttr($this, 'scrollbar-enabled', null),
    hide: parseAttr($this, 'scrollbar-hide', true),
    horizontalClass: parseAttr(
      $this,
      'scrollbar-horizontal-class',
      'swiper-scrollbar-horizontal',
    ),
    lockClass: parseAttr(
      $this,
      'scrollbar-lock-class',
      'swiper-scrollbar-lock',
    ),
    scrollbarDisabledClass: parseAttr(
      $this,
      'scrollbar-disabled-class',
      'swiper-scrollbar-disabled',
    ),
    snapOnRelease: parseAttr($this, 'snap-on-release', true), // documentation says default is false, but is lying lmao
    verticalClass: parseAttr(
      $this,
      'scrollbar-vertical-class',
      'swiper-scrollbar-vertical',
    ),
  };
}
