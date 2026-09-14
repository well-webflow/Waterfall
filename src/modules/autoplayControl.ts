import {
  ATTR_AUTOPLAY,
  ATTR_AUTOPLAY_CONTROL_DEFAULT_STATE,
  ATTR_AUTOPLAY_CONTROL_ENABLED,
  ATTR_WATERFALL,
} from "lib/attributes";
import {
  ATTR_WATERFALL_ELEMENT,
  EL_AUTOPLAY_CONTROL,
  EL_AUTOPLAY_CONTROL_PAUSE,
  EL_AUTOPLAY_CONTROL_PLAY,
} from "lib/elements";
import { parseBoolean, parseString } from "../util";
import type Swiper from "swiper";

export function initAutoplayControl(el: HTMLElement, name: string, swiper: Swiper) {
  // Only initialize if autoplay control is enabled
  const autoplayControlEnabled = parseBoolean(el, ATTR_AUTOPLAY_CONTROL_ENABLED, false);
  const autoplayEnabled = parseBoolean(el, ATTR_AUTOPLAY, false);

  if (!autoplayControlEnabled || !autoplayEnabled) {
    return;
  }

  // Get elements
  const controlButtonSelector = `[${ATTR_WATERFALL}='${name}'] [${ATTR_WATERFALL_ELEMENT}='${EL_AUTOPLAY_CONTROL}']`;
  const pauseIconSelector = `[${ATTR_WATERFALL}='${name}'] [${ATTR_WATERFALL_ELEMENT}='${EL_AUTOPLAY_CONTROL_PAUSE}']`;
  const playIconSelector = `[${ATTR_WATERFALL}='${name}'] [${ATTR_WATERFALL_ELEMENT}='${EL_AUTOPLAY_CONTROL_PLAY}']`;

  const controlButton = document.querySelector(controlButtonSelector) as HTMLElement;
  const pauseIcon = document.querySelector(pauseIconSelector) as HTMLElement;
  const playIcon = document.querySelector(playIconSelector) as HTMLElement;

  if (!controlButton || !pauseIcon || !playIcon) {
    return;
  }

  // Get default state (playing or paused)
  const defaultState = parseString(el, ATTR_AUTOPLAY_CONTROL_DEFAULT_STATE, "playing");

  // Update UI based on state
  function updateUI(playing: boolean) {
    if (playing) {
      // Force pause icon to show
      pauseIcon.style.setProperty("display", "block", "important");
      pauseIcon.style.setProperty("visibility", "visible", "important");

      // Force play icon to hide
      playIcon.style.setProperty("display", "none", "important");
      playIcon.style.setProperty("visibility", "hidden", "important");
    } else {
      // Force play icon to show
      playIcon.style.setProperty("display", "block", "important");
      playIcon.style.setProperty("visibility", "visible", "important");

      // Force pause icon to hide
      pauseIcon.style.setProperty("display", "none", "important");
      pauseIcon.style.setProperty("visibility", "hidden", "important");
    }
  }

  if (swiper.autoplay) {
    if (defaultState === "paused") {
      swiper.autoplay.stop();
      updateUI(false);
    } else {
      // Ensure autoplay starts for "playing" state
      swiper.autoplay.start();
      updateUI(true);
    }
  }

  // Add click handler
  controlButton.addEventListener("click", () => {
    if (!swiper.autoplay) {
      return;
    }

    if (swiper.autoplay.running) {
      swiper.autoplay.stop();
      updateUI(false);
    } else {
      swiper.autoplay.start();
      updateUI(true);
    }
  });
}
