import Swiper from 'swiper';
import { Waterfall } from 'types/waterfall';

export function printDebug(debug: boolean, str: string, el: any) {
  if (!debug) return;
  console.log(str, ': ', el);
}

export function getUniqueClasses(
  targetElement: JQuery<HTMLElement>,
  comparisonElement: JQuery<HTMLElement>,
) {
  if (!targetElement.length) return ''; // If no element, return an empty string

  let targetClasses = (targetElement.attr('class') || '').split(/\s+/);
  let comparisonClasses = (comparisonElement.attr('class') || '').split(/\s+/);

  let filtered = targetClasses.filter(
    (className) => className && !comparisonClasses.includes(className),
  );
  // Get the class attribute, split into an array, filter out the classToRemove, and join back into a string
  return filtered.join(' '); // Join the remaining classes into a string
}

export function parseString(
  el: JQuery<HTMLElement>,
  attrName: string,
  defaultValue: string,
) {
  const attrValue = $(el).attr(attrName)?.trim();
  if (!attrValue) return undefined;
  // Nullify the attribute if it matches the default value from SwiperJS
  if (attrValue === defaultValue) return undefined;
  return attrValue;
}

export function parseNumber(
  el: JQuery<HTMLElement>,
  attrName: string,
  defaultValue: number,
): number | undefined {
  const attrValue = $(el).attr(attrName)?.trim();
  if (!attrValue) return undefined;

  const parsedValue = Number(attrValue);
  if (isNaN(parsedValue)) return undefined;

  return parsedValue === defaultValue ? undefined : parsedValue;
}

export function parseBoolean(
  el: JQuery<HTMLElement>,
  attrName: string,
  defaultValue: boolean,
): boolean | undefined {
  const attrValue = $(el).attr(attrName)?.trim()?.toLowerCase();
  if (!attrValue) return undefined;

  if (attrValue === 'true') return true;
  if (attrValue === 'false') return false;

  return attrValue === defaultValue.toString() ? undefined : undefined;
}

export function parseAttr(
  el: JQuery<HTMLElement>,
  attrName: string,
  defaultValue: string | number | boolean | null,
): string | number | boolean | null {
  const attrValue = $(el).attr(attrName);
  if (!attrValue) return null;
  // Trim the input to avoid issues with leading/trailing spaces
  const trimmedInput = attrValue.trim();

  // Check if input is a number
  if (!isNaN(Number(trimmedInput))) {
    const parsedNumber = parseFloat(trimmedInput);
    if (parsedNumber === defaultValue) {
      return null; // Return null if it matches the default value
    }
    return parsedNumber; // Return the parsed number
  }

  // Check if input is a boolean
  if (trimmedInput.toLowerCase() === 'true') {
    if (defaultValue === true) {
      return null; // Return null if it matches the default value
    }
    return true;
  } else if (trimmedInput.toLowerCase() === 'false') {
    if (defaultValue === false) {
      return null; // Return null if it matches the default value
    }
    return false;
  }

  // Return null if the input matches the default value (as a string)
  if (trimmedInput === String(defaultValue)) {
    return null;
  }

  // Return the input as a string
  return trimmedInput;
}

export function removeNullOrUndefinedKeys(obj: any) {
  if (typeof obj !== 'object' || obj === null) {
    return obj; // Return non-objects or null as is
  }

  // Iterate over the keys in the object
  for (const key in obj) {
    if (obj[key] === null || obj[key] === undefined) {
      delete obj[key]; // ✅ Remove `null` or `undefined` keys
    } else if (
      typeof obj[key] === 'object' &&
      !(obj[key] instanceof HTMLElement)
    ) {
      // Recursively handle nested objects
      removeNullOrUndefinedKeys(obj[key]);
      // Remove empty objects after recursion
      if (Object.keys(obj[key]).length === 0) {
        delete obj[key];
      }
    }
  }

  return obj;
}

export function getSwipersByName(waterfalls: Waterfall[], selector: string) {
  const strArr = splitByUnderscores(selector);
  const swipers: Swiper[] = [];

  strArr.forEach((str) => {
    const waterfall = waterfalls.find((w) => {
      if (w.name === str) return true;
      return false;
    });
    if (waterfall) swipers.push(waterfall?.swiper);
  });
  return swipers;
}

function splitByUnderscores(str: string) {
  return str.split('_');
}
