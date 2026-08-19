import { SwiperOptions } from 'swiper/types';
import { default as Swiper } from 'swiper';
export type SlideChangeCallbackParams = {
    swiper: Swiper;
    activeIndex: number;
    previousIndex: number;
    activeSlide: HTMLElement | null;
    previousSlide: HTMLElement | null;
};
export declare function callbacksConfig(config: SwiperOptions, el: HTMLElement): void;
