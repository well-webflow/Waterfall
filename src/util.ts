import Swiper from "swiper";
import { Waterfall } from "types/waterfall";

export function printDebug(debug: boolean, str: string, el: any) {
  if (!debug) return;
  console.log(`${str}:`, el);
}

// ✅ Get unique classes without jQuery
export function getUniqueClasses(targetElement: HTMLElement, comparisonElement: HTMLElement): string {
  if (!targetElement) return "";

  const targetClasses = Array.from(targetElement.classList);
  const comparisonClasses = Array.from(comparisonElement.classList);

  const filtered = targetClasses.filter((className) => className && !comparisonClasses.includes(className));

  return filtered.join(" ");
}

// ✅ Parse attribute as string (ignoring default value)
export function parseString(el: HTMLElement, attrName: string, defaultValue: string): string | undefined {
  const attrValue = el.getAttribute(attrName)?.trim();
  if (!attrValue || attrValue === defaultValue) return undefined;
  return attrValue;
}

// ✅ Parse attribute as number
export function parseNumber(el: HTMLElement, attrName: string, defaultValue: number): number | undefined {
  const attrValue = el.getAttribute(attrName)?.trim();
  if (!attrValue) return undefined;

  const parsedValue = Number(attrValue);
  if (isNaN(parsedValue) || parsedValue === defaultValue) return undefined;

  return parsedValue;
}

// ✅ Parse attribute as boolean
export function parseBoolean(el: HTMLElement, attrName: string, defaultValue: boolean): boolean | undefined {
  const attrValue = el.getAttribute(attrName)?.trim()?.toLowerCase();
  if (!attrValue) return undefined;

  if (attrValue === "true") return defaultValue === true ? undefined : true;
  if (attrValue === "false") return defaultValue === false ? undefined : false;

  return undefined;
}

// ✅ Generic attribute parser
export function parseAttr(
  el: HTMLElement,
  attrName: string,
  defaultValue: string | number | boolean | null,
): string | number | boolean | null {
  const attrValue = el.getAttribute(attrName);
  if (!attrValue) return null;

  const trimmedInput = attrValue.trim();

  // Number check
  if (!isNaN(Number(trimmedInput))) {
    const parsedNumber = parseFloat(trimmedInput);
    return parsedNumber === defaultValue ? null : parsedNumber;
  }

  // Boolean check
  if (trimmedInput.toLowerCase() === "true") return defaultValue === true ? null : true;
  if (trimmedInput.toLowerCase() === "false") return defaultValue === false ? null : false;

  // String match check
  return trimmedInput === String(defaultValue) ? null : trimmedInput;
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

// ✅ Get swipers by name
export function getSwipersByName(waterfalls: Waterfall[], selector: string): Swiper[] {
  return selector.split("_").reduce<Swiper[]>((swipers, name) => {
    const waterfall = waterfalls.find((w) => w.name === name);
    if (waterfall) swipers.push(waterfall.swiper);
    return swipers;
  }, []);
}
