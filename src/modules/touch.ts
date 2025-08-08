import {
  ATTR_ALLOW_TOUCH_MOVE,
  ATTR_EDGE_SWIPE_DETECTION,
  ATTR_EDGE_SWIPE_THRESHOLD,
  ATTR_FOCUSABLE_ELEMENTS,
  ATTR_FOLLOW_FINGER,
  ATTR_GRAB_CURSOR,
  ATTR_LONG_SWIPES,
  ATTR_LONG_SWIPES_MS,
  ATTR_LONG_SWIPES_RATIO,
  ATTR_NO_SWIPING,
  ATTR_NO_SWIPING_CLASS,
  ATTR_NO_SWIPING_SELECTOR,
  ATTR_PREVENT_CLICKS,
  ATTR_PREVENT_CLICKS_PROPAGATION,
  ATTR_PREVENT_INTERACTION_ON_TRANSITION,
  ATTR_RESISTANCE,
  ATTR_RESISTANCE_RATIO,
  ATTR_SHORT_SWIPES,
  ATTR_SIMULATE_TOUCH,
  ATTR_SLIDE_TO_CLICKED_SLIDE,
  ATTR_THRESHOLD,
  ATTR_TOUCH_ANGLE,
  ATTR_TOUCH_EVENTS_TARGET,
  ATTR_TOUCH_MOVE_STOP_PROPAGATION,
  ATTR_TOUCH_RATIO,
  ATTR_TOUCH_RELEASE_ON_EDGES,
  ATTR_TOUCH_START_FORCE_PREVENT_DEFAULT,
  ATTR_TOUCH_START_PREVENT_DEFAULT,
} from "lib/attributes";
import { parseBoolean, parseNumber, parseString } from "../util";

export function touchConfig(config: any, el: HTMLElement) {
  config.allowTouchMove = parseBoolean(el, ATTR_ALLOW_TOUCH_MOVE, true);
  config.edgeSwipeDetection = parseBoolean(el, ATTR_EDGE_SWIPE_DETECTION, false);
  config.edgeSwipeThreshold = parseNumber(el, ATTR_EDGE_SWIPE_THRESHOLD, 20);
  config.focusableElements = parseString(
    el,
    ATTR_FOCUSABLE_ELEMENTS,
    "input, select, option, textarea, button, video, label",
  );
  config.followFinger = parseBoolean(el, ATTR_FOLLOW_FINGER, true);
  config.grabCursor = parseBoolean(el, ATTR_GRAB_CURSOR, false);
  config.longSwipes = parseBoolean(el, ATTR_LONG_SWIPES, true); // NOTE no effect
  config.longSwipesMs = parseNumber(el, ATTR_LONG_SWIPES_MS, 300); // NOTE no effect
  config.longSwipesRatio = parseNumber(el, ATTR_LONG_SWIPES_RATIO, 0.5); // NOTE no effect
  config.noSwiping = parseBoolean(el, ATTR_NO_SWIPING, true);
  config.noSwipingClass = parseString(el, ATTR_NO_SWIPING_CLASS, "swiper-no-swiping");
  config.noSwipingSelector = parseString(el, ATTR_NO_SWIPING_SELECTOR);
  config.preventClicks = parseBoolean(el, ATTR_PREVENT_CLICKS, true);
  config.preventClicksPropagation = parseBoolean(el, ATTR_PREVENT_CLICKS_PROPAGATION, true);
  config.preventInteractionOnTransition = parseBoolean(el, ATTR_PREVENT_INTERACTION_ON_TRANSITION, false);
  config.resistance = parseBoolean(el, ATTR_RESISTANCE, true);
  config.resistanceRatio = parseNumber(el, ATTR_RESISTANCE_RATIO, 0.85);
  config.shortSwipes = parseBoolean(el, ATTR_SHORT_SWIPES, true);
  config.simulateTouch = parseBoolean(el, ATTR_SIMULATE_TOUCH, true);
  config.slideToClickedSlide = parseBoolean(el, ATTR_SLIDE_TO_CLICKED_SLIDE, false);
  config.threshold = parseNumber(el, ATTR_THRESHOLD, 5);
  config.touchAngle = parseNumber(el, ATTR_TOUCH_ANGLE, 45);
  config.touchEventsTarget = parseString(el, ATTR_TOUCH_EVENTS_TARGET, "wrapper");
  config.touchMoveStopPropagation = parseBoolean(el, ATTR_TOUCH_MOVE_STOP_PROPAGATION, false);
  config.touchRatio = parseNumber(el, ATTR_TOUCH_RATIO, 1);
  config.touchReleaseOnEdges = parseBoolean(el, ATTR_TOUCH_RELEASE_ON_EDGES, false);
  config.touchStartForcePreventDefault = parseBoolean(el, ATTR_TOUCH_START_FORCE_PREVENT_DEFAULT, false);
  config.touchStartPreventDefault = parseBoolean(el, ATTR_TOUCH_START_PREVENT_DEFAULT, true);
}
