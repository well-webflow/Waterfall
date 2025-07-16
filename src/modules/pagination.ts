import {
  ATTR_NAVIGATION_LOCK_CLASS,
  ATTR_PAGINATION,
  ATTR_PAGINATION_BULLET,
  ATTR_PAGINATION_BULLET_ACTIVE,
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
  ATTR_WATERFALL_ELEMENT,
} from "lib/attributes";
import { getUniqueClasses, parseAttr } from "../util";

export function paginationConfig($this: JQuery<HTMLElement>) {
  let paginationType = parseAttr($this, ATTR_PAGINATION_TYPE, "");

  let $paginationBullet = $this.find(`[${ATTR_WATERFALL_ELEMENT}=${ATTR_PAGINATION_BULLET}]`);
  let paginationBulletActive = $this.find(`[${ATTR_WATERFALL_ELEMENT}=${ATTR_PAGINATION_BULLET_ACTIVE}]`);

  return {
    bulletActiveClass: getUniqueClasses(paginationBulletActive, $paginationBullet),
    bulletClass: $paginationBullet.attr("class"),
    bulletElement: $paginationBullet.prop("tagName")?.toLowerCase() || "span", //FIXME - some issue here
    clickable: parseAttr($this, ATTR_PAGINATION_CLICKABLE, false),
    clickableClass: parseAttr($this, ATTR_PAGINATION_CLICKABLE_CLASS, "swiper-pagination-clickable"),
    currentClass: parseAttr($this, ATTR_PAGINATION_CURRENT_CLASS, "swiper-pagination-current"),
    dynamicBullets: parseAttr($this, ATTR_PAGINATION_DYNAMIC_BULLETS, "swiper-pagination-current"),
    dynamicMainBullets: parseAttr($this, ATTR_PAGINATION_DYNAMIC_MAIN_BULLETS, 1),
    el: $this.find(`[${ATTR_WATERFALL_ELEMENT}=${ATTR_PAGINATION}]`)[0],
    enabled: parseAttr($this, ATTR_PAGINATION_ENABLED, null),
    //formatFractionCurrent: null, //NOTE - not implemented
    //formatFractionTotal: null, //NOTE - not implemented
    hiddenClass: parseAttr($this, ATTR_PAGINATION_HIDDEN_CLASS, "swiper-pagination-hidden"),
    hideOnClick: parseAttr($this, ATTR_PAGINATION_HIDE_ON_CLICK, true),
    horizontalClass: parseAttr($this, ATTR_PAGINATION_HORIZONTAL_CLASS, "swiper-pagination-horizontal"),
    lockClass: parseAttr($this, ATTR_NAVIGATION_LOCK_CLASS, "swiper-pagination-lock"),
    modifierClass: parseAttr($this, ATTR_PAGINATION_MODIFIER_CLASS, "swiper-pagination-"),
    paginationDisabledClass: parseAttr($this, ATTR_PAGINATION_PAGINATION_DISABLED_CLASS, "swiper-pagination-disabled"),
    progressbarFillClass: parseAttr(
      $this,
      ATTR_PAGINATION_PROGRESSBAR_FILL_CLASS,
      "swiper-pagination-progressbar-fill",
    ),
    progressbarOpposite: parseAttr(
      $this,
      ATTR_PAGINATION_PROGRESSBAR_OPPOSITE,
      "swiper-pagination-progressbar-opposite",
    ),
    renderBullet: customRenderBullet(),
    //renderCustom: null,
    //renderFraction: null,
    //renderProgressBar: null,
    totalClass: parseAttr($this, ATTR_PAGINATION_TOTAL_CLASS, "swiper-pagination-total"),
    type: getPaginationType(),
    verticalClass: parseAttr($this, ATTR_PAGINATION_VERTICAL_CLASS, "swiper-pagination-vertical"),
  };

  // Custom pagination type rendering functions
  function customRenderBullet() {
    let renderBullet: RenderBulletFunction | null = null;
    if (paginationType === "numberBullets") {
      renderBullet = function (index, className) {
        return `<span class="${className}">${index + 1}</span>`;
      };
    }
    if (paginationType === "bullets") {
      renderBullet = function (index, className) {
        return `<span class="${className}"></span>`;
      };
    }
    return renderBullet;
  }

  // Custom function to get extended pagination types
  function getPaginationType() {
    if (paginationType === "numberBullets" || paginationType === "bullets") return "bullets";
    if (paginationType === "fraction") return "fraction";
    if (paginationType === "progressbar") return "progressbar";
    if (paginationType === "custom") return "custom";
    else return "bullets"; // default
  }
}

type RenderBulletFunction = (index: number, className: string) => string;
