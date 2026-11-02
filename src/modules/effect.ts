import {
  ATTR_CARDS_EFFECT_PER_SLIDE_OFFSET,
  ATTR_CARDS_EFFECT_PER_SLIDE_ROTATE,
  ATTR_CARDS_EFFECT_ROTATE,
  ATTR_CARDS_EFFECT_SLIDE_SHADOWS,
  ATTR_COVERFLOW_EFFECT_DEPTH,
  ATTR_COVERFLOW_EFFECT_MODIFIER,
  ATTR_COVERFLOW_EFFECT_ROTATE,
  ATTR_COVERFLOW_EFFECT_SCALE,
  ATTR_COVERFLOW_EFFECT_SLIDE_SHADOWS,
  ATTR_COVERFLOW_EFFECT_STRETCH,
  ATTR_CUBE_EFFECT_SHADOW,
  ATTR_CUBE_EFFECT_SHADOW_OFFSET,
  ATTR_CUBE_EFFECT_SHADOW_SCALE,
  ATTR_CUBE_EFFECT_SLIDE_SHADOWS,
  ATTR_EFFECT,
  ATTR_FADE_EFFECT_MODE,
  ATTR_FLIP_EFFECT_LIMIT_ROTATION,
  ATTR_FLIP_EFFECT_SLIDE_SHADOWS,
} from "lib/attributes";
import { parseAny, parseBoolean, parseNumber, parseString } from "../util";
import { SwiperOptions } from "swiper/types";

// Swiper does not re-export this union, so derive it from the augmented options type.
type FadeEffectMode = NonNullable<NonNullable<SwiperOptions["fadeEffect"]>["mode"]>;

export function effectConfig(config: SwiperOptions, el: HTMLElement) {
  const effect = parseString(el, ATTR_EFFECT, "slide");
  config.effect = effect;

  if (effect === "fade") {
    // Swiper 14 deprecated fadeEffect.crossFade in favour of fadeEffect.mode.
    config.fadeEffect = { mode: parseAny<FadeEffectMode>(el, ATTR_FADE_EFFECT_MODE, "default") };
  } else if (effect === "coverflow") {
    config.coverflowEffect = {
      depth: parseNumber(el, ATTR_COVERFLOW_EFFECT_DEPTH, 100),
      modifier: parseNumber(el, ATTR_COVERFLOW_EFFECT_MODIFIER, 1),
      rotate: parseNumber(el, ATTR_COVERFLOW_EFFECT_ROTATE, 50),
      scale: parseNumber(el, ATTR_COVERFLOW_EFFECT_SCALE, 1),
      slideShadows: parseBoolean(el, ATTR_COVERFLOW_EFFECT_SLIDE_SHADOWS, true),
      stretch: parseNumber(el, ATTR_COVERFLOW_EFFECT_STRETCH, 0),
    };
  } else if (effect === "flip") {
    config.flipEffect = {
      limitRotation: parseBoolean(el, ATTR_FLIP_EFFECT_LIMIT_ROTATION, true),
      slideShadows: parseBoolean(el, ATTR_FLIP_EFFECT_SLIDE_SHADOWS, true),
    };
  } else if (effect === "cube") {
    config.cubeEffect = {
      shadow: parseBoolean(el, ATTR_CUBE_EFFECT_SHADOW, true),
      shadowOffset: parseNumber(el, ATTR_CUBE_EFFECT_SHADOW_OFFSET, 20),
      shadowScale: parseNumber(el, ATTR_CUBE_EFFECT_SHADOW_SCALE, 0.94),
      slideShadows: parseBoolean(el, ATTR_CUBE_EFFECT_SLIDE_SHADOWS, true),
    };
  } else if (effect === "cards") {
    config.cardsEffect = {
      perSlideOffset: parseNumber(el, ATTR_CARDS_EFFECT_PER_SLIDE_OFFSET, 8),
      perSlideRotate: parseNumber(el, ATTR_CARDS_EFFECT_PER_SLIDE_ROTATE, 2),
      rotate: parseBoolean(el, ATTR_CARDS_EFFECT_ROTATE, true),
      slideShadows: parseBoolean(el, ATTR_CARDS_EFFECT_SLIDE_SHADOWS, true),
    };
  }
}
//NOTE - Creative Effect Not implemented
