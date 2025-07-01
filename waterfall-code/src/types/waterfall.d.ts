import Swiper from 'swiper';

export type Waterfall = {
  name: string;
  swiper: Swiper;
};

declare global {
  interface Window {
    waterfalls: Waterfall[];
  }
}