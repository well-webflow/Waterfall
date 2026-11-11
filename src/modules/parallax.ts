import {
  ATTR_PARALLAX,
  ATTR_PARALLAX_ENABLED,
  ATTR_PARALLAX_OPACITY,
  ATTR_PARALLAX_ROTATE,
  ATTR_PARALLAX_SCALE,
  ATTR_PARALLAX_X,
  ATTR_PARALLAX_Y,
} from "lib/attributes";
import { parseBoolean } from "../util";
import { SwiperOptions } from "swiper/types";

// The attributes Swiper's parallax module actually acts on. `data-swiper-parallax-duration` is
// left out on purpose: Swiper only reads it off elements it has already matched, so on its own it
// never makes an element move.
const PARALLAX_ELEMENT_SELECTOR = [
  ATTR_PARALLAX,
  ATTR_PARALLAX_X,
  ATTR_PARALLAX_Y,
  ATTR_PARALLAX_SCALE,
  ATTR_PARALLAX_OPACITY,
  ATTR_PARALLAX_ROTATE,
]
  .map((attr) => `[${attr}]`)
  .join(", ");

export default function parallaxConfig(config: SwiperOptions, el: HTMLElement) {
  // Parallax turns itself on for a slider that has something to animate, so the `data-swiper-*`
  // attributes are the whole setup and no slider pays for a feature it does not use - switching it
  // on makes Swiper force `watchSlidesProgress`, and then walk every slide on every transition.
  //
  // `waterfall-parallax-enabled` still overrides the detection either way, and an explicit `true`
  // is the way to cover slides that only gain their parallax attributes after init.
  //
  // parseBoolean is called without a default on purpose: the third argument names the value to
  // treat as redundant and drop, so passing either one here would collapse that attribute into
  // the same `undefined` as leaving it off, and the override would be lost.
  const requested = parseBoolean(el, ATTR_PARALLAX_ENABLED);
  const enabled = requested ?? el.querySelector(PARALLAX_ELEMENT_SELECTOR) !== null;

  config.parallax = { enabled };
}
