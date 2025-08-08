import {
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
  ATTR_EFFECT,
} from "lib/attributes";
import { parseBoolean, parseNumber, parseString } from "../util";

export function effectConfig(config: any, el: HTMLElement) {
  const effect = parseString(el, ATTR_EFFECT, "slide");
  config.effect = effect;

  if (effect === "fade") {
    config.fadeEffect = { crossFade: "true" };
  } else if (effect === "coverflow") {
    config.coverflowEffect = {
      depth: parseNumber(el, ATTR_COVERFLOW_DEPTH, 100),
      modifier: parseNumber(el, ATTR_COVERFLOW_MODIFIER, 1),
      rotate: parseNumber(el, ATTR_COVERFLOW_ROTATE, 50),
      scale: parseNumber(el, ATTR_COVERFLOW_SCALE, 1),
      slideShadows: parseBoolean(el, ATTR_COVERFLOW_SLIDE_SHADOWS, true),
      stretch: parseNumber(el, ATTR_COVERFLOW_STRETCH, 0),
    };
  } else if (effect === "flip") {
    config.flipEffect = {
      limitRotation: parseBoolean(el, ATTR_FLIP_LIMIT_ROTATION, true),
      slideShadows: parseBoolean(el, ATTR_FLIP_SLIDE_SHADOWS, true),
    };
  } else if (effect === "cube") {
    config.cubeEffect = {
      shadow: parseBoolean(el, ATTR_CUBE_SHADOW, true),
      shadowOffset: parseNumber(el, ATTR_CUBE_SHADOW_OFFSET, 20),
      shadowScale: parseNumber(el, ATTR_CUBE_SHADOW_SCALE, 0.94),
      slideShadows: parseBoolean(el, ATTR_CUBE_SLIDE_SHADOWS, true),
    };
  } else if (effect === "cards") {
    config.cardsEffect = {
      perSlideOffset: parseNumber(el, ATTR_CARDS_PER_SLIDE_OFFSET, 8),
      perSlideRotate: parseNumber(el, ATTR_CARDS_PER_SLIDE_ROTATE, 2),
      rotate: parseBoolean(el, ATTR_CARDS_ROTATE, true),
      slideShadows: parseBoolean(el, ATTR_CARDS_SLIDE_SHADOWS, true),
    };
  }
}
//NOTE - Creative Effect Not implemented
