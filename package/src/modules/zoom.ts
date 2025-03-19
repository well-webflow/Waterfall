import { parseAttr } from '../util';

export function zoomConfig($el: JQuery<HTMLElement>) {
  return {
    containerClass: parseAttr(
      $el,
      'zoom-container-class',
      'swiper-zoom-container',
    ),
    limitToOriginalSize: parseAttr($el, 'zoom-limit-to-original-size', false),
    maxRatio: parseAttr($el, 'zoom-max-ratio', 3),
    minRatio: parseAttr($el, 'zoom-min-ratio', 1),
    panOnMouseMove: parseAttr($el, 'zoom-pan-on-mouse-move', false),
    toggle: parseAttr($el, 'zoom-toggle', true),
    zoomedSlideClass: parseAttr(
      $el,
      'zoomed-slide-class',
      'swiper-slide-zoomed',
    ),
  };
}
