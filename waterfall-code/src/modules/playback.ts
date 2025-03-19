import { parseAttr } from '../util';

export function autoplayConfig($this: JQuery<HTMLElement>) {
  const autoplayMode = parseAttr($this, 'autoplay-mode', false);
  if (!autoplayMode) return null;
  // Add CSS for Smooth Autoplay
  $("[smooth-autoplay='true']")
    .find('.swiper-wrapper')
    .css('transition-timing-function', 'linear');
  return {
    delay: parseAttr($this, 'delay', 3000),
    disableOnInteraction: parseAttr($this, 'disable-on-interaction', false), // documentation says default is true, doesn't appear to be correct
    reverseDirection: parseAttr($this, 'reverse-direction', false),
    pauseOnMouseEnter: parseAttr($this, 'pause-on-mouse-enter', false),
    stopOnLastSlide: parseAttr($this, 'stop-on-last-slide', false),
  };
}

export function freeModeConfig($this: JQuery<HTMLElement>) {
  return {
    enabled: parseAttr($this, 'free-mode-enabled', false),
    minimumVelocity: parseAttr($this, 'free-mode-minimum-velocity', 0.02),
    momentum: parseAttr($this, 'free-mode-momentum', true),
    momentumBounce: parseAttr($this, 'free-mode-momentum-bounce', true),
    momentumBounceRatio: parseAttr($this, 'free-mode-momentum-bounce-ratio', 1),
    momentumRatio: parseAttr($this, 'free-mode-momentum-ratio', 1),
    momentumVelocityRatio: parseAttr(
      $this,
      'free-mode-momentum-velocity-ratio',
      1,
    ),
    sticky: parseAttr($this, 'free-mode-sticky', false),
  };
}
