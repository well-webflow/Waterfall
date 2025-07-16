import { ATTR_SLIDE_COUNT, ATTR_WATERFALL_ELEMENT } from "lib/attributes";

/**
 * Creates a Slide Count element that displays the current slide number.
 */
export function initSlideCount() {
  document.querySelectorAll(".swiper-wrapper").forEach((swiperWrapper) => {
    swiperWrapper.querySelectorAll(".swiper-slide").forEach((slide, index) => {
      const countEl = slide.querySelector(`[${ATTR_WATERFALL_ELEMENT}=${ATTR_SLIDE_COUNT}]`);
      if (countEl) {
        countEl.textContent = (index + 1).toString();
      }
    });
  });
}
