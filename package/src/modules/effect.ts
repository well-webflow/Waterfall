import { parseAttr } from '../util';

export function fadeConfig($this: JQuery<HTMLElement>) {
  return {
    crossFade: parseAttr($this, 'fade-cross-fade', false),
  };
}

export function coverflowEffect($this: JQuery<HTMLElement>) {
  return {
    depth: parseAttr($this, 'coverflow-depth', 100),
    modifier: parseAttr($this, 'coverflow-modifier', 1),
    rotate: parseAttr($this, 'coverflow-rotate', 50),
    scale: parseAttr($this, 'coverflow-scale', 1),
    slideShadows: parseAttr($this, 'coverflow-slide-shadows', true),
    stretch: parseAttr($this, 'coverflow-stretch', 0),
  };
}

export function flipEffect($this: JQuery<HTMLElement>) {
  return {
    limitRotation: parseAttr($this, 'flip-limit-rotation', true),
    slideShadows: parseAttr($this, 'flip-slide-shadows', true),
  };
}

export function cubeEffect($this: JQuery<HTMLElement>) {
  return {
    shadow: parseAttr($this, 'cube-shadow', true),
    shadowOffset: parseAttr($this, 'cube-shadow-offset', 20),
    shadowScale: parseAttr($this, 'cube-shadow-scale', 0.94),
    slideShadows: parseAttr($this, 'cube-slide-shadows', true),
  };
}

export function cardsEffect($this: JQuery<HTMLElement>) {
  return {
    perSlideOffset: parseAttr($this, 'cards-per-slide-offset', 8),
    perSlideRotate: parseAttr($this, 'cards-per-slide-rotate', 2),
    rotate: parseAttr($this, 'cards-rotate', true),
    slideShadows: parseAttr($this, 'cards-slide-shadows', true),
  };
}

//NOTE - Creative Effect Not implemented
