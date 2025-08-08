import Swiper from "swiper";

export function debugController(swipers: Swiper[], controllerSelector: string) {
  if (!swipers.length) console.error(`No controller swipers found for selector "${controllerSelector}"`);
  console.log(`Controller Swipers for selector "${controllerSelector}":`, swipers);
}
