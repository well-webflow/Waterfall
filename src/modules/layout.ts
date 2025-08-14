import {
  ATTR_AUTO_HEIGHT,
  ATTR_CENTER_INSUFFICIENT_SLIDES,
  ATTR_CENTERED_SLIDES,
  ATTR_DIRECTION,
  ATTR_GRID_FILL,
  ATTR_GRID_ROWS,
  ATTR_HEIGHT,
  ATTR_SLIDES_OFFSET_AFTER,
  ATTR_SLIDES_OFFSET_BEFORE,
  ATTR_SLIDES_PER_GROUP,
  ATTR_SLIDES_PER_GROUP_AUTO,
  ATTR_SLIDES_PER_GROUP_SKIP,
  ATTR_SLIDES_PER_VIEW,
  ATTR_SPACE_BETWEEN,
  ATTR_WIDTH,
} from "lib/attributes";
import { parseAny, parseBoolean, parseNumber, parseString } from "../util";
import { SwiperOptions } from "swiper/types";

export function layoutConfig(config: SwiperOptions, el: HTMLElement) {
  config.autoHeight = parseBoolean(el, ATTR_AUTO_HEIGHT, false);
  config.centerInsufficientSlides = parseBoolean(el, ATTR_CENTER_INSUFFICIENT_SLIDES, false);
  config.centeredSlides = parseBoolean(el, ATTR_CENTERED_SLIDES, false);
  config.direction = parseAny(el, ATTR_DIRECTION, "horizontal");
  config.grid = {
    fill: parseAny(el, ATTR_GRID_FILL, "column"),
    rows: parseNumber(el, ATTR_GRID_ROWS, 1),
  };
  config.height = parseNumber(el, ATTR_HEIGHT);
  config.slidesOffsetAfter = parseNumber(el, ATTR_SLIDES_OFFSET_AFTER, 0);
  config.slidesOffsetBefore = parseNumber(el, ATTR_SLIDES_OFFSET_BEFORE, 0);
  config.slidesPerGroup = parseNumber(el, ATTR_SLIDES_PER_GROUP, 1);
  config.slidesPerGroupAuto = parseBoolean(el, ATTR_SLIDES_PER_GROUP_AUTO, false);
  config.slidesPerGroupSkip = parseNumber(el, ATTR_SLIDES_PER_GROUP_SKIP, 0);
  config.slidesPerView = parseNumber(el, ATTR_SLIDES_PER_VIEW, 1);
  config.spaceBetween = parseNumber(el, ATTR_SPACE_BETWEEN, 0);
  config.width = parseNumber(el, ATTR_WIDTH);
}
