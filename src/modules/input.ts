import { parseAttr } from '../util';

export function keyboardConfig($this: JQuery<HTMLElement>) {
  return {
    enabled: parseAttr($this, 'keyboard-enabled', 'false'),
    onlyInViewport: parseAttr($this, 'keyboard-only-in-viewport', 'true'),
    pageUpDown: parseAttr($this, 'keyboard-page-up-down', 'true'),
  };
}

export function mouseConfig($this: JQuery<HTMLElement>) {
  return {
    enabled: parseAttr($this, 'mouse-enabled', 'false'),
    eventsTarget: parseAttr($this, 'mouse-events-target', 'container'),
    forceToAxis: parseAttr($this, 'mouse-force-to-axis', 'false'),
    invert: parseAttr($this, 'mouse-invert', 'false'),
    noMouseWheelClass: parseAttr(
      $this,
      'no-mouse-wheel-class',
      'swiper-no-mousewheel',
    ),
    releaseOnEdges: parseAttr($this, 'mouse-release-on-edges', 'false'),
    sensitivity: parseAttr($this, 'mouse-sensitivity', '1'),
    thresholdDelta: parseAttr($this, 'mouse-threshold-delta', 'null'),
    thresholdTime: parseAttr($this, 'mouse-threshold-time', 'null'),
  };
}
