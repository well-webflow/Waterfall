import { getUniqueClasses, parseAttr } from '../util';

export function paginationConfig($this: JQuery<HTMLElement>) {
  let paginationType = parseAttr($this, 'pagination-type', '');

  let $paginationBullet = $this.find("[waterfall-el='pagination-bullet']");
  let paginationBulletActive = $this.find(
    "[waterfall-el='pagination-bullet-active']",
  );

  return {
    bulletActiveClass: getUniqueClasses(
      paginationBulletActive,
      $paginationBullet,
    ),
    bulletClass: $paginationBullet.attr('class'),
    bulletElement: $paginationBullet.prop('tagName')?.toLowerCase() || 'span', //ISSUE HERE
    clickable: parseAttr($this, 'pagination-clickable', false),
    clickableClass: parseAttr(
      $this,
      'pagination-clickable-class',
      'swiper-pagination-clickable',
    ),
    currentClass: parseAttr(
      $this,
      'pagination-current-class',
      'swiper-pagination-current',
    ),
    dynamicBullets: parseAttr(
      $this,
      'dynamic-bullets',
      'swiper-pagination-current',
    ),
    dynamicMainBullets: parseAttr($this, 'dynamic-main-bullets', 1),
    el: $this.find("[waterfall-el='pagination']")[0],
    enabled: parseAttr($this, 'pagination-enabled', null),
    //formatFractionCurrent: null,
    //formatFractionTotal: null,
    hiddenClass: parseAttr(
      $this,
      'pagination-hidden-class',
      'swiper-pagination-hidden',
    ),
    hideOnClick: parseAttr($this, 'pagination-hide-on-click', true),
    horizontalClass: parseAttr(
      $this,
      'pagination-horizontal-class',
      'swiper-pagination-horizontal',
    ),
    lockClass: parseAttr(
      $this,
      'pagination-lock-class',
      'swiper-pagination-lock',
    ),
    modifierClass: parseAttr(
      $this,
      'pagination-modifier-class',
      'swiper-pagination-',
    ),
    paginationDisabledClass: parseAttr(
      $this,
      'pagination-disabled-class',
      'swiper-pagination-disabled',
    ),
    progressbarFillClass: parseAttr(
      $this,
      'pagination-progressbar-fill-class',
      'swiper-pagination-progressbar-fill',
    ),
    progressbarOpposite: parseAttr(
      $this,
      'pagination-progressbar-opposite',
      'swiper-pagination-progressbar-opposite',
    ),
    renderBullet: customRenderBullet(),
    //renderCustom: null,
    //renderFraction: null,
    //renderProgressBar: null,
    totalClass: parseAttr(
      $this,
      'pagination-total-class',
      'swiper-pagination-total',
    ),
    type: getPaginationType(),
    verticalClass: parseAttr(
      $this,
      'pagination-vertical-class',
      'swiper-pagination-vertical',
    ),
  };

  // Custom pagination type rendering functions
  function customRenderBullet() {
    let renderBullet: RenderBulletFunction | null = null;
    if (paginationType === 'numberBullets') {
      renderBullet = function (index, className) {
        return `<span class="${className}">${index + 1}</span>`;
      };
    }
    if (paginationType === 'bullets') {
      renderBullet = function (index, className) {
        return `<span class="${className}"></span>`;
      };
    }
    return renderBullet;
  }

  // Custom function to get extended pagination types
  function getPaginationType() {
    if (paginationType === 'numberBullets' || paginationType === 'bullets')
      return 'bullets';
    if (paginationType === 'fraction') return 'fraction';
    if (paginationType === 'progressbar') return 'progressbar';
    if (paginationType === 'custom') return 'custom';
    else return 'bullets'; // default
  }
}

type RenderBulletFunction = (index: number, className: string) => string;
