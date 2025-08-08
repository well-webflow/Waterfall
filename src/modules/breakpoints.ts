import { parseBoolean, parseNumber } from "../util";
import {
  ATTR_LMOBILE_CENTERED_SLIDES,
  ATTR_LMOBILE_SLIDES_PER_GROUP,
  ATTR_LMOBILE_SLIDES_PER_VIEW,
  ATTR_LMOBILE_SPACE_BETWEEN,
  ATTR_TABLET_CENTERED_SLIDES,
  ATTR_TABLET_SLIDES_PER_VIEW,
  ATTR_TABLET_SPACE_BETWEEN,
  ATTR_LARGE_SLIDES_PER_GROUP,
  ATTR_DESKTOP_CENTERED_SLIDES,
  ATTR_DESKTOP_SLIDES_PER_VIEW,
  ATTR_DESKTOP_SLIDES_PER_GROUP,
  ATTR_DESKTOP_SPACE_BETWEEN,
  ATTR_LARGE_CENTERED_SLIDES,
  ATTR_LARGE_SLIDES_PER_VIEW,
  ATTR_LARGE_SPACE_BETWEEN,
  ATTR_XLARGE_CENTERED_SLIDES,
  ATTR_XLARGE_SLIDES_PER_VIEW,
  ATTR_XLARGE_SLIDES_PER_GROUP,
  ATTR_XLARGE_SPACE_BETWEEN,
} from "../lib/attributes";

export function breakpointsConfig(el: HTMLElement) {
  return {
    478: {
      centeredSlides: parseBoolean(el, ATTR_LMOBILE_CENTERED_SLIDES),
      slidesPerView: parseNumber(el, ATTR_LMOBILE_SLIDES_PER_VIEW),
      slidesPerGroup: parseNumber(el, ATTR_LMOBILE_SLIDES_PER_GROUP),
      spaceBetween: parseNumber(el, ATTR_LMOBILE_SPACE_BETWEEN),
    },
    767: {
      centeredSlides: parseBoolean(el, ATTR_TABLET_CENTERED_SLIDES),
      slidesPerView: parseNumber(el, ATTR_TABLET_SLIDES_PER_VIEW),
      slidesPerGroup: parseNumber(el, ATTR_LARGE_SLIDES_PER_GROUP),
      spaceBetween: parseNumber(el, ATTR_TABLET_SPACE_BETWEEN),
    },
    991: {
      centeredSlides: parseBoolean(el, ATTR_DESKTOP_CENTERED_SLIDES),
      slidesPerView: parseNumber(el, ATTR_DESKTOP_SLIDES_PER_VIEW),
      slidesPerGroup: parseNumber(el, ATTR_DESKTOP_SLIDES_PER_GROUP),
      spaceBetween: parseNumber(el, ATTR_DESKTOP_SPACE_BETWEEN),
    },
    1280: {
      centeredSlides: parseBoolean(el, ATTR_LARGE_CENTERED_SLIDES),
      slidesPerView: parseNumber(el, ATTR_LARGE_SLIDES_PER_VIEW),
      slidesPerGroup: parseNumber(el, ATTR_LARGE_SLIDES_PER_GROUP),
      spaceBetween: parseNumber(el, ATTR_LARGE_SPACE_BETWEEN),
    },
    1440: {
      centeredSlides: parseBoolean(el, ATTR_XLARGE_CENTERED_SLIDES),
      slidesPerView: parseNumber(el, ATTR_XLARGE_SLIDES_PER_VIEW),
      slidesPerGroup: parseNumber(el, ATTR_XLARGE_SLIDES_PER_GROUP),
      spaceBetween: parseNumber(el, ATTR_XLARGE_SPACE_BETWEEN),
    },
  };
}
