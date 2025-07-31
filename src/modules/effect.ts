import {
  ATTR_EFFECT_CROSSFADE,
  ATTR_COVERFLOW_DEPTH,
  ATTR_COVERFLOW_MODIFIER,
  ATTR_COVERFLOW_ROTATE,
  ATTR_COVERFLOW_SCALE,
  ATTR_COVERFLOW_SLIDE_SHADOWS,
  ATTR_COVERFLOW_STRETCH,
  ATTR_FLIP_LIMIT_ROTATION,
  ATTR_FLIP_SLIDE_SHADOWS,
  ATTR_CUBE_SHADOW,
  ATTR_CUBE_SHADOW_OFFSET,
  ATTR_CUBE_SHADOW_SCALE,
  ATTR_CUBE_SLIDE_SHADOWS,
  ATTR_CARDS_PER_SLIDE_OFFSET,
  ATTR_CARDS_PER_SLIDE_ROTATE,
  ATTR_CARDS_ROTATE,
  ATTR_CARDS_SLIDE_SHADOWS,
} from "lib/attributes";
import { parseAttr } from "../util";

export function fadeConfig(el: HTMLElement) {
  return {
    crossFade: parseAttr(el, ATTR_EFFECT_CROSSFADE, false),
  };
}

export function coverflowEffect(el: HTMLElement) {
  return {
    depth: parseAttr(el, ATTR_COVERFLOW_DEPTH, 100),
    modifier: parseAttr(el, ATTR_COVERFLOW_MODIFIER, 1),
    rotate: parseAttr(el, ATTR_COVERFLOW_ROTATE, 50),
    scale: parseAttr(el, ATTR_COVERFLOW_SCALE, 1),
    slideShadows: parseAttr(el, ATTR_COVERFLOW_SLIDE_SHADOWS, true),
    stretch: parseAttr(el, ATTR_COVERFLOW_STRETCH, 0),
  };
}

export function flipEffect(el: HTMLElement) {
  return {
    limitRotation: parseAttr(el, ATTR_FLIP_LIMIT_ROTATION, true),
    slideShadows: parseAttr(el, ATTR_FLIP_SLIDE_SHADOWS, true),
  };
}

export function cubeEffect(el: HTMLElement) {
  return {
    shadow: parseAttr(el, ATTR_CUBE_SHADOW, true),
    shadowOffset: parseAttr(el, ATTR_CUBE_SHADOW_OFFSET, 20),
    shadowScale: parseAttr(el, ATTR_CUBE_SHADOW_SCALE, 0.94),
    slideShadows: parseAttr(el, ATTR_CUBE_SLIDE_SHADOWS, true),
  };
}

export function cardsEffect(el: HTMLElement) {
  return {
    perSlideOffset: parseAttr(el, ATTR_CARDS_PER_SLIDE_OFFSET, 8),
    perSlideRotate: parseAttr(el, ATTR_CARDS_PER_SLIDE_ROTATE, 2),
    rotate: parseAttr(el, ATTR_CARDS_ROTATE, true),
    slideShadows: parseAttr(el, ATTR_CARDS_SLIDE_SHADOWS, true),
  };
}

//NOTE - Creative Effect Not implemented
