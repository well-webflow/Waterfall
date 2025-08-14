import {
  ATTR_NAVIGATION_LOCK_CLASS,
  ATTR_PAGINATION_BULLET_ACTIVE_CLASS,
  ATTR_PAGINATION_CLICKABLE,
  ATTR_PAGINATION_CLICKABLE_CLASS,
  ATTR_PAGINATION_CURRENT_CLASS,
  ATTR_PAGINATION_DYNAMIC_BULLETS,
  ATTR_PAGINATION_DYNAMIC_MAIN_BULLETS,
  ATTR_PAGINATION_ENABLED,
  ATTR_PAGINATION_HIDDEN_CLASS,
  ATTR_PAGINATION_HIDE_ON_CLICK,
  ATTR_PAGINATION_HORIZONTAL_CLASS,
  ATTR_PAGINATION_MODIFIER_CLASS,
  ATTR_PAGINATION_PAGINATION_DISABLED_CLASS,
  ATTR_PAGINATION_PROGRESSBAR_FILL_CLASS,
  ATTR_PAGINATION_PROGRESSBAR_OPPOSITE,
  ATTR_PAGINATION_PROGRESSBAR_OPPOSITE_CLASS,
  ATTR_PAGINATION_TOTAL_CLASS,
  ATTR_PAGINATION_TYPE,
  ATTR_PAGINATION_VERTICAL_CLASS,
} from "lib/attributes";
import { parseBoolean, parseNumber, parseString } from "../util";
import { ATTR_WATERFALL_ELEMENT, EL_PAGINATION, EL_PAGINATION_BULLET, EL_PAGINATION_BULLET_ACTIVE } from "lib/elements";
import { SwiperOptions } from "swiper/types";

export function paginationConfig(config: SwiperOptions, element: HTMLElement) {
  const paginationEl = element.querySelector<HTMLElement>(`[${ATTR_WATERFALL_ELEMENT}=${EL_PAGINATION}]`);
  if (!paginationEl) return;

  const paginationType = parseString(element, ATTR_PAGINATION_TYPE);

  const paginationBullet = element.querySelector<HTMLElement>(`[${ATTR_WATERFALL_ELEMENT}=${EL_PAGINATION_BULLET}]`);

  config.pagination = {
    bulletActiveClass: parseString(element, ATTR_PAGINATION_BULLET_ACTIVE_CLASS, "swiper-pagination-bullet-active"),
    bulletClass: paginationBullet?.getAttribute("class")?.trim() || "swiper-pagination-bullet",
    bulletElement: paginationBullet?.tagName?.toLowerCase() || "span",
    clickable: parseBoolean(element, ATTR_PAGINATION_CLICKABLE, false),
    clickableClass: parseString(element, ATTR_PAGINATION_CLICKABLE_CLASS, "swiper-pagination-clickable"),
    currentClass: parseString(element, ATTR_PAGINATION_CURRENT_CLASS, "swiper-pagination-current"),
    dynamicBullets: parseBoolean(element, ATTR_PAGINATION_DYNAMIC_BULLETS, false),
    dynamicMainBullets: parseNumber(element, ATTR_PAGINATION_DYNAMIC_MAIN_BULLETS, 1),
    el: paginationEl || null,
    enabled: parseBoolean(element, ATTR_PAGINATION_ENABLED),
    hiddenClass: parseString(element, ATTR_PAGINATION_HIDDEN_CLASS, "swiper-pagination-hidden"),
    hideOnClick: parseBoolean(element, ATTR_PAGINATION_HIDE_ON_CLICK, true),
    horizontalClass: parseString(element, ATTR_PAGINATION_HORIZONTAL_CLASS, "swiper-pagination-horizontal"),
    lockClass: parseString(element, ATTR_NAVIGATION_LOCK_CLASS, "swiper-pagination-lock"),
    modifierClass: parseString(element, ATTR_PAGINATION_MODIFIER_CLASS, "swiper-pagination-"),
    paginationDisabledClass: parseString(
      element,
      ATTR_PAGINATION_PAGINATION_DISABLED_CLASS,
      "swiper-pagination-disabled",
    ),
    progressbarFillClass: parseString(
      element,
      ATTR_PAGINATION_PROGRESSBAR_FILL_CLASS,
      "swiper-pagination-progressbar-fill",
    ),
    progressbarOpposite: parseBoolean(element, ATTR_PAGINATION_PROGRESSBAR_OPPOSITE, false),
    progressbarOppositeClass: parseString(
      element,
      ATTR_PAGINATION_PROGRESSBAR_OPPOSITE_CLASS,
      "swiper-pagination-progressbar-opposite",
    ),
    renderBullet: customRenderBullet(),
    totalClass: parseString(element, ATTR_PAGINATION_TOTAL_CLASS, "swiper-pagination-total"),
    type: getPaginationType(),
    verticalClass: parseString(element, ATTR_PAGINATION_VERTICAL_CLASS, "swiper-pagination-vertical"),
  };

  function customRenderBullet() {
    if (paginationType === "numberBullets") {
      return (index: number, className: string) => `<span class="${className}">${index + 1}</span>`;
    }
    if (paginationType === "bullets") {
      return (index: number, className: string) => `<span class="${className}"></span>`;
    }
    return undefined;
  }

  function getPaginationType() {
    if (paginationType === "numberBullets" || paginationType === "bullets") return "bullets";
    if (paginationType === "fraction") return "fraction";
    if (paginationType === "progressbar") return "progressbar";
    if (paginationType === "custom") return "custom";
    return "bullets"; // default
  }
}

