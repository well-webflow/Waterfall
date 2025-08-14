import { A11yOptions, SwiperOptions } from "swiper/types";
import { parseBoolean, parseString } from "../util";
import {
  ATTR_A11Y_CONTAINER_MESSAGE,
  ATTR_A11Y_CONTAINER_ROLE,
  ATTR_A11Y_CONTAINER_ROLE_DESCRIPTION_MESSAGE,
  ATTR_A11Y_ENABLED,
  ATTR_A11Y_FIRST_SLIDE_MESSAGE,
  ATTR_A11Y_ID,
  ATTR_A11Y_ITEM_ROLE_DESCRIPTION_MESSAGE,
  ATTR_A11Y_LAST_SLIDE_MESSAGE,
  ATTR_A11Y_NEXT_SLIDE_MESSAGE,
  ATTR_A11Y_NOTIFICATION_CLASS,
  ATTR_A11Y_PAGINATION_BULLET_MESSAGE,
  ATTR_A11Y_PREV_SLIDE_MESSAGE,
  ATTR_A11Y_SCROLL_ON_FOCUS,
  ATTR_A11Y_SLIDE_LABEL_MESSAGE,
  ATTR_A11Y_SLIDE_ROLE,
} from "../lib/attributes";

export function accessibilityConfig(config: SwiperOptions, el: HTMLElement) {
  config.a11y = {
    containerMessage: parseString(el, ATTR_A11Y_CONTAINER_MESSAGE, ""),
    containerRole: parseString(el, ATTR_A11Y_CONTAINER_ROLE, ""),
    containerRoleDescriptionMessage: parseString(el, ATTR_A11Y_CONTAINER_ROLE_DESCRIPTION_MESSAGE, ""),
    enabled: parseBoolean(el, ATTR_A11Y_ENABLED, true),
    firstSlideMessage: parseString(el, ATTR_A11Y_FIRST_SLIDE_MESSAGE, "This is the first slide"),
    id: parseString(el, ATTR_A11Y_ID, ""),
    itemRoleDescriptionMessage: parseString(el, ATTR_A11Y_ITEM_ROLE_DESCRIPTION_MESSAGE, ""),
    lastSlideMessage: parseString(el, ATTR_A11Y_LAST_SLIDE_MESSAGE, "This is the last slide"),
    nextSlideMessage: parseString(el, ATTR_A11Y_NEXT_SLIDE_MESSAGE, "Next slide"),
    notificationClass: parseString(el, ATTR_A11Y_NOTIFICATION_CLASS, "swiper-notification"),
    paginationBulletMessage: parseString(el, ATTR_A11Y_PAGINATION_BULLET_MESSAGE, "Go to slide {{index}}"),
    prevSlideMessage: parseString(el, ATTR_A11Y_PREV_SLIDE_MESSAGE, "Previous slide"),
    scrollOnFocus: parseBoolean(el, ATTR_A11Y_SCROLL_ON_FOCUS, true),
    slideLabelMessage: parseString(el, ATTR_A11Y_SLIDE_LABEL_MESSAGE, "{{index}} / {{slidesLength}}"),
    slideRole: parseString(el, ATTR_A11Y_SLIDE_ROLE, "group"),
  };

  return config;
}
