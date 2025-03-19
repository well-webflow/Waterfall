/**
 * Creates a Slide Count element that displays the current slide number.
 */
export function initSlideCount() {
  document.querySelectorAll('.swiper-wrapper').forEach((swiperWrapper) => {
    swiperWrapper.querySelectorAll('.swiper-slide').forEach((slide, index) => {
      const countEl = slide.querySelector('[waterfall-el="slide-count"]');
      if (countEl) {
        countEl.textContent = (index + 1).toString();
      }
    });
  });
}
