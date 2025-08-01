import {
  ATTR_NAVIGATION_LOCK_CLASS,
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
  ATTR_PAGINATION_TOTAL_CLASS,
  ATTR_PAGINATION_TYPE,
  ATTR_PAGINATION_VERTICAL_CLASS,
} from "lib/attributes";
import { getUniqueClasses, parseAttr } from "../util";
import { ATTR_WATERFALL_ELEMENT, EL_PAGINATION, EL_PAGINATION_BULLET, EL_PAGINATION_BULLET_ACTIVE } from "lib/elements";

export function paginationConfig(element: HTMLElement) {
  const paginationType = parseAttr(element, ATTR_PAGINATION_TYPE, "");

  const paginationBullet = element.querySelector<HTMLElement>(`[${ATTR_WATERFALL_ELEMENT}=${EL_PAGINATION_BULLET}]`);

  const paginationBulletActive = element.querySelector<HTMLElement>(
    `[${ATTR_WATERFALL_ELEMENT}=${EL_PAGINATION_BULLET_ACTIVE}]`,
  );
  const paginationEl = element.querySelector<HTMLElement>(`[${ATTR_WATERFALL_ELEMENT}=${EL_PAGINATION}]`);

  return {
    bulletActiveClass:
      paginationBulletActive && paginationBullet
        ? getUniqueClasses(paginationBulletActive, paginationBullet)
        : "swiper-pagination-bullet-active",
    bulletClass: paginationBullet?.getAttribute("class")?.trim() || "swiper-pagination-bullet",
    bulletElement: paginationBullet?.tagName?.toLowerCase() || "span",
    clickable: parseAttr(element, ATTR_PAGINATION_CLICKABLE, false),
    clickableClass: parseAttr(element, ATTR_PAGINATION_CLICKABLE_CLASS, "swiper-pagination-clickable"),
    currentClass: parseAttr(element, ATTR_PAGINATION_CURRENT_CLASS, "swiper-pagination-current"),
    dynamicBullets: parseAttr(element, ATTR_PAGINATION_DYNAMIC_BULLETS, "swiper-pagination-current"),
    dynamicMainBullets: parseAttr(element, ATTR_PAGINATION_DYNAMIC_MAIN_BULLETS, 1),
    el: paginationEl || null,
    enabled: parseAttr(element, ATTR_PAGINATION_ENABLED, null),
    hiddenClass: parseAttr(element, ATTR_PAGINATION_HIDDEN_CLASS, "swiper-pagination-hidden"),
    hideOnClick: parseAttr(element, ATTR_PAGINATION_HIDE_ON_CLICK, true),
    horizontalClass: parseAttr(element, ATTR_PAGINATION_HORIZONTAL_CLASS, "swiper-pagination-horizontal"),
    lockClass: parseAttr(element, ATTR_NAVIGATION_LOCK_CLASS, "swiper-pagination-lock"),
    modifierClass: parseAttr(element, ATTR_PAGINATION_MODIFIER_CLASS, "swiper-pagination-"),
    paginationDisabledClass: parseAttr(
      element,
      ATTR_PAGINATION_PAGINATION_DISABLED_CLASS,
      "swiper-pagination-disabled",
    ),
    progressbarFillClass: parseAttr(
      element,
      ATTR_PAGINATION_PROGRESSBAR_FILL_CLASS,
      "swiper-pagination-progressbar-fill",
    ),
    progressbarOpposite: parseAttr(
      element,
      ATTR_PAGINATION_PROGRESSBAR_OPPOSITE,
      "swiper-pagination-progressbar-opposite",
    ),
    renderBullet: customRenderBullet(),
    totalClass: parseAttr(element, ATTR_PAGINATION_TOTAL_CLASS, "swiper-pagination-total"),
    type: getPaginationType(),
    verticalClass: parseAttr(element, ATTR_PAGINATION_VERTICAL_CLASS, "swiper-pagination-vertical"),
  };

  function customRenderBullet() {
    let renderBullet: RenderBulletFunction | null = null;
    if (paginationType === "numberBullets") {
      renderBullet = (index, className) => `<span class="${className}">${index + 1}</span>`;
    }
    if (paginationType === "bullets") {
      renderBullet = (index, className) => `<span class="${className}"></span>`;
    }
    return renderBullet;
  }

  function getPaginationType() {
    if (paginationType === "numberBullets" || paginationType === "bullets") return "bullets";
    if (paginationType === "fraction") return "fraction";
    if (paginationType === "progressbar") return "progressbar";
    if (paginationType === "custom") return "custom";
    return "bullets"; // default
  }
}

type RenderBulletFunction = (index: number, className: string) => string;
