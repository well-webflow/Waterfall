import { SwiperOptions } from "swiper/types";
import Swiper from "swiper";
import { ATTR_CALLBACK_SLIDE_CHANGE } from "../lib/attributes";
import { parseString } from "../util";

export type SlideChangeCallbackParams = {
  swiper: Swiper;
  activeIndex: number;
  previousIndex: number;
  activeSlide: HTMLElement | null;
  previousSlide: HTMLElement | null;
};

export function callbacksConfig(config: SwiperOptions, el: HTMLElement) {
  const slideChangeCallbackName = parseString(el, ATTR_CALLBACK_SLIDE_CHANGE, undefined);

  if (slideChangeCallbackName) {
    // Store the previous index to pass to the callback
    let previousIndex = 0;

    config.on = {
      ...config.on,
      slideChange: function (this: Swiper) {
        const swiper = this;
        const activeIndex = swiper.activeIndex;
        const activeSlide = swiper.slides[activeIndex] as HTMLElement | null;
        const previousSlide = swiper.slides[previousIndex] as HTMLElement | null;

        // Get the callback function from window object
        const callbackFn = (window as any)[slideChangeCallbackName];

        if (typeof callbackFn === "function") {
          callbackFn({
            swiper,
            activeIndex,
            previousIndex,
            activeSlide,
            previousSlide,
          } as SlideChangeCallbackParams);
        } else {
          console.warn(
            `Waterfall: Callback function "${slideChangeCallbackName}" not found on window object.`
          );
        }

        // Update previousIndex for next change
        previousIndex = activeIndex;
      },
    };
  }
}
