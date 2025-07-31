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
import { parseAttr } from "../util";

export function breakpointsConfig(el: HTMLElement) {
  return {
    478: {
      centeredSlides: parseAttr(el, ATTR_LMOBILE_CENTERED_SLIDES, null),
      slidesPerView: parseAttr(el, ATTR_LMOBILE_SLIDES_PER_VIEW, null),
      slidesPerGroup: parseAttr(el, ATTR_LMOBILE_SLIDES_PER_GROUP, null),
      spaceBetween: parseAttr(el, ATTR_LMOBILE_SPACE_BETWEEN, null),
    },
    767: {
      centeredSlides: parseAttr(el, ATTR_TABLET_CENTERED_SLIDES, null),
      slidesPerView: parseAttr(el, ATTR_TABLET_SLIDES_PER_VIEW, null),
      slidesPerGroup: parseAttr(el, ATTR_LARGE_SLIDES_PER_GROUP, null),
      spaceBetween: parseAttr(el, ATTR_TABLET_SPACE_BETWEEN, null),
    },
    991: {
      centeredSlides: parseAttr(el, ATTR_DESKTOP_CENTERED_SLIDES, null),
      slidesPerView: parseAttr(el, ATTR_DESKTOP_SLIDES_PER_VIEW, null),
      slidesPerGroup: parseAttr(el, ATTR_DESKTOP_SLIDES_PER_GROUP, null),
      spaceBetween: parseAttr(el, ATTR_DESKTOP_SPACE_BETWEEN, null),
    },
    1280: {
      centeredSlides: parseAttr(el, ATTR_LARGE_CENTERED_SLIDES, null),
      slidesPerView: parseAttr(el, ATTR_LARGE_SLIDES_PER_VIEW, null),
      slidesPerGroup: parseAttr(el, ATTR_LARGE_SLIDES_PER_GROUP, null),
      spaceBetween: parseAttr(el, ATTR_LARGE_SPACE_BETWEEN, null),
    },
    1440: {
      centeredSlides: parseAttr(el, ATTR_XLARGE_CENTERED_SLIDES, null),
      slidesPerView: parseAttr(el, ATTR_XLARGE_SLIDES_PER_VIEW, null),
      slidesPerGroup: parseAttr(el, ATTR_XLARGE_SLIDES_PER_GROUP, null),
      spaceBetween: parseAttr(el, ATTR_XLARGE_SPACE_BETWEEN, null),
    },
  };
}
