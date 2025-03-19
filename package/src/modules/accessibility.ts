import { A11yOptions } from "swiper/types";
import { parseBoolean, parseString } from "../util";

export function accessibilityConfig($this: JQuery<HTMLElement>) {
  let config: A11yOptions = {
    containerMessage: parseString($this, "a11y-container-message", ""),
    containerRole: parseString($this, "a11y-container-role", ""),
    containerRoleDescriptionMessage: parseString(
      $this,
      "a11y-container-role-description-message",
      "",
    ),
    enabled: parseBoolean($this, "a11y-enabled", true),
    firstSlideMessage: parseString(
      $this,
      "a11y-first-slide-message",
      "This is the first slide",
    ),
    id: parseString($this, "a11y-id", ""),
    itemRoleDescriptionMessage: parseString(
      $this,
      "a11y-item-role-description-message",
      "",
    ),
    lastSlideMessage: parseString(
      $this,
      "a11y-last-slide-message",
      "This is the last slide",
    ),
    nextSlideMessage: parseString(
      $this,
      "a11y-next-slide-message",
      "Next slide",
    ),
    notificationClass: parseString(
      $this,
      "a11y-notification-class",
      "swiper-notification",
    ),
    paginationBulletMessage: parseString(
      $this,
      "a11y-pagination-bullet-message",
      "Go to slide {{index}}",
    ),
    prevSlideMessage: parseString(
      $this,
      "a11y-prev-slide-message",
      "Previous slide",
    ),
    scrollOnFocus: parseBoolean($this, "a11y-scroll-on-focus", true),
    slideLabelMessage: parseString(
      $this,
      "a11y-slide-label-message",
      "{{index}} / {{slidesLength}}",
    ),
    slideRole: parseString($this, "a11y-slide-role", "group"),
  };

  return config;
}
