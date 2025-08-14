import Swiper from "swiper";
import { Waterfall } from "types/waterfall";

export function printDebug(debug: boolean, str: string, el: any) {
  if (!debug) return;
  console.log(`${str}:`, el);
}

export function getUniqueClasses(targetElement: HTMLElement, comparisonElement: HTMLElement): string {
  if (!targetElement.classList || !comparisonElement.classList) return "";

  const targetClasses = Array.from(targetElement.classList || []);
  const comparisonClasses = Array.from(comparisonElement.classList || []);

  const filtered = targetClasses.filter((className) => className && !comparisonClasses.includes(className));

  return filtered.length > 0 ? filtered.join(" ") : "";
}

// ✅ Parse attribute as string (ignoring default value)
export function parseString(el: HTMLElement, attrName: string, defaultValue?: string): string | undefined {
  const attrValue = el.getAttribute(attrName)?.trim();
  if (!attrValue || attrValue === defaultValue) return undefined;
  return attrValue;
}

export function parseAny(el: HTMLElement, attrName: string, defaultValue?: any): any | undefined {
  const attrValue = el.getAttribute(attrName)?.trim();
  if (!attrValue || attrValue === defaultValue) return undefined;
  return attrValue;
}

// ✅ Parse attribute as number
export function parseNumber(el: HTMLElement, attrName: string, defaultValue?: number): number | undefined {
  const attrValue = el.getAttribute(attrName)?.trim();
  if (!attrValue) return undefined;

  const parsedValue = Number(attrValue);
  const validAndUnique = isNaN(parsedValue) || parsedValue === defaultValue;
  if (validAndUnique) return undefined;
  return parsedValue;
}

// ✅ Parse attribute as boolean
export function parseBoolean(el: HTMLElement, attrName: string, defaultValue?: boolean): boolean | undefined {
  const attrValue = el.getAttribute(attrName)?.trim()?.toLowerCase();
  if (!attrValue) return undefined;

  if (attrValue === "true") return defaultValue === true ? undefined : true;
  if (attrValue === "false") return defaultValue === false ? undefined : false;

  return undefined;
}

function isHTMLElement(value: unknown): value is HTMLElement {
  return typeof HTMLElement !== "undefined" && value instanceof HTMLElement;
}

export function removeNullOrUndefinedKeys<T extends Record<string, any>>(obj: T): T {
  if (typeof obj !== "object" || obj === null) return obj;

  for (const key in obj) {
    const value = obj[key];
    if (value === null || value === undefined) {
      delete obj[key];
    } else if (typeof value === "object" && value !== null && !isHTMLElement(value)) {
      removeNullOrUndefinedKeys(value as Record<string, any>);
      if (Object.keys(value).length === 0) delete obj[key];
    }
  }

  return obj;
}

export function getSwipersByName(waterfalls: Waterfall[], selector: string, debug: boolean): Swiper[] {
  const matchedSwipers = waterfalls
    .filter((w) => {
      const match = w.name === selector;
      return match;
    })
    .map((w) => w.swiper);

  debug && console.log(`📊 Found ${matchedSwipers.length} matching swiper(s) for "${selector}"`);

  return matchedSwipers;
}
