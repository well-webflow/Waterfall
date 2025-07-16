import { A11yOptions } from "swiper/types";
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

export function accessibilityConfig($this: JQuery<HTMLElement>) {
  let config: A11yOptions = {
    containerMessage: parseString($this, ATTR_A11Y_CONTAINER_MESSAGE, ""),
    containerRole: parseString($this, ATTR_A11Y_CONTAINER_ROLE, ""),
    containerRoleDescriptionMessage: parseString($this, ATTR_A11Y_CONTAINER_ROLE_DESCRIPTION_MESSAGE, ""),
    enabled: parseBoolean($this, ATTR_A11Y_ENABLED, true),
    firstSlideMessage: parseString($this, ATTR_A11Y_FIRST_SLIDE_MESSAGE, "This is the first slide"),
    id: parseString($this, ATTR_A11Y_ID, ""),
    itemRoleDescriptionMessage: parseString($this, ATTR_A11Y_ITEM_ROLE_DESCRIPTION_MESSAGE, ""),
    lastSlideMessage: parseString($this, ATTR_A11Y_LAST_SLIDE_MESSAGE, "This is the last slide"),
    nextSlideMessage: parseString($this, ATTR_A11Y_NEXT_SLIDE_MESSAGE, "Next slide"),
    notificationClass: parseString($this, ATTR_A11Y_NOTIFICATION_CLASS, "swiper-notification"),
    paginationBulletMessage: parseString($this, ATTR_A11Y_PAGINATION_BULLET_MESSAGE, "Go to slide {{index}}"),
    prevSlideMessage: parseString($this, ATTR_A11Y_PREV_SLIDE_MESSAGE, "Previous slide"),
    scrollOnFocus: parseBoolean($this, ATTR_A11Y_SCROLL_ON_FOCUS, true),
    slideLabelMessage: parseString($this, ATTR_A11Y_SLIDE_LABEL_MESSAGE, "{{index}} / {{slidesLength}}"),
    slideRole: parseString($this, ATTR_A11Y_SLIDE_ROLE, "group"),
  };

  return config;
}
