import { parseBoolean, parseNumber, parseSlidesPerView, parseString } from "../util";
import {
  ATTR_BREAKPOINTS_BASE,
  ATTR_CENTERED_SLIDES,
  ATTR_SLIDES_PER_GROUP,
  ATTR_SLIDES_PER_VIEW,
  ATTR_SPACE_BETWEEN,
  BREAKPOINTS,
  Breakpoint,
  breakpointAttr,
} from "../lib/attributes";
import { SwiperOptions } from "swiper/types";

type BreakpointValue = number | boolean | "auto";

// Settings that can be overridden per breakpoint, with the Swiper default used when nothing is set
const BREAKPOINT_SETTINGS: {
  key: keyof SwiperOptions;
  attr: string;
  parse: (el: HTMLElement, attr: string) => BreakpointValue | undefined;
  swiperDefault: BreakpointValue;
}[] = [
  { key: "slidesPerView", attr: ATTR_SLIDES_PER_VIEW, parse: parseSlidesPerView, swiperDefault: 1 },
  { key: "slidesPerGroup", attr: ATTR_SLIDES_PER_GROUP, parse: parseNumber, swiperDefault: 1 },
  { key: "spaceBetween", attr: ATTR_SPACE_BETWEEN, parse: parseNumber, swiperDefault: 0 },
  { key: "centeredSlides", attr: ATTR_CENTERED_SLIDES, parse: parseBoolean, swiperDefault: false },
];

// Webflow's breakpoints as Swiper min-widths. Each range lists the breakpoints it reads, nearest first:
// like Webflow styles, values cascade outward from Desktop and fall back to the base attribute.
const RANGES: { minWidth: number; cascade: Breakpoint[] }[] = [
  { minWidth: 0, cascade: ["mobile", "mobile-large", "tablet"] }, // Mobile portrait: 479px and below
  { minWidth: 480, cascade: ["mobile-large", "tablet"] }, // Mobile landscape: 480px - 767px
  { minWidth: 768, cascade: ["tablet"] }, // Tablet: 768px - 991px
  { minWidth: 992, cascade: ["desktop"] }, // Desktop: 992px - 1279px
  { minWidth: 1280, cascade: ["desktop-small", "desktop"] }, // 1280px - 1439px
  { minWidth: 1440, cascade: ["desktop-large", "desktop-small", "desktop"] }, // 1440px and up
];

export function breakpointsConfig(config: SwiperOptions, el: HTMLElement) {
  config.breakpointsBase = parseString(el, ATTR_BREAKPOINTS_BASE, "window");

  const breakpoints: Record<number, Record<string, BreakpointValue>> = {};

  BREAKPOINT_SETTINGS.forEach(({ key, attr, parse, swiperDefault }) => {
    const overrides: Partial<Record<Breakpoint, BreakpointValue>> = {};
    BREAKPOINTS.forEach((breakpoint) => {
      const value = parse(el, breakpointAttr(attr, breakpoint));
      if (value !== undefined) overrides[breakpoint] = value;
    });
    if (Object.keys(overrides).length === 0) return;

    // Swiper only applies the keys a breakpoint sets, so every range gets a resolved value
    const base = parse(el, attr) ?? swiperDefault;
    RANGES.forEach(({ minWidth, cascade }) => {
      const match = cascade.find((breakpoint) => overrides[breakpoint] !== undefined);
      breakpoints[minWidth] = { ...breakpoints[minWidth], [key]: match ? overrides[match]! : base };
    });
  });

  config.breakpoints = breakpoints;
}
