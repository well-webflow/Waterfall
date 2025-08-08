import {
  ATTR_CREATE_ELEMENTS,
  ATTR_CSS_MODE,
  ATTR_ENABLED,
  ATTR_EVENTS_PREFIX,
  ATTR_INIT,
  ATTR_MAX_BACKFACE_HIDDEN_SLIDES,
  ATTR_PASSIVE_LISTENERS,
  ATTR_ROUND_LENGTHS,
  ATTR_RUN_CALLBACKS_ON_INIT,
  ATTR_SET_WRAPPER_SIZE,
  ATTR_UNIQUE_NAV_ELEMENTS,
  ATTR_URL,
  ATTR_USER_AGENT,
} from "lib/attributes";
import { parseBoolean, parseNumber, parseString } from "../util";

export default function advancedConfig(config: any, el: HTMLElement) {
  // NOTE Not using Create Elements because they should be created in Webflow instead
  config.createElements = parseBoolean(el, ATTR_CREATE_ELEMENTS, false);
  // NOTE This option breaks several properties when used
  config.cssMode = parseBoolean(el, ATTR_CSS_MODE, false);
  // NOTE Swipers cannot currently be programmatically enabled or disabled through the app
  config.enabled = parseBoolean(el, ATTR_ENABLED, true);
  // NOTE No reason to be changed
  config.eventsPrefix = parseString(el, ATTR_EVENTS_PREFIX, "swiper");
  // NOTE Swipers cannot currently be programmatically enabled or disabled through the app
  config.init = parseBoolean(el, ATTR_INIT, true);
  // NOTE Only for use with Swiper Element
  //injectStyles= null, // not needed
  //injectStylesUrls= null, // not needed
  // NOTE Already a sensible default value
  config.maxBackfaceHiddenSlides = parseNumber(el, ATTR_MAX_BACKFACE_HIDDEN_SLIDES, 10);
  // NOTE probably not needed, modules already work without this
  // modules= null
  // NOTE No way of adding events via attributes
  //on= null,
  //onAny= null
  // NOTE Very niche case of needing this
  config.passiveListeners = parseBoolean(el, ATTR_PASSIVE_LISTENERS, true);
  config.roundLengths = parseBoolean(el, ATTR_ROUND_LENGTHS, false);
  // NOTE Not sure when you'd want to turn off callbacks
  config.runCallbacksOnInit = parseBoolean(el, ATTR_RUN_CALLBACKS_ON_INIT, true);
  // NOTE Compatibility with really really old browsers
  config.setWrapperSize = parseBoolean(el, ATTR_SET_WRAPPER_SIZE, false);
  // NOTE Turning this off is a weird way of looking for navigation elements
  config.uniqueNavElements = parseBoolean(el, ATTR_UNIQUE_NAV_ELEMENTS, true);
  // NOTE Used for Server Side Rendering (SSR)
  config.url = parseString(el, ATTR_URL);
  config.userAgent = parseString(el, ATTR_USER_AGENT);
}
