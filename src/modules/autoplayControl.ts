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

  if (!autoplayControlEnabled || !autoplayEnabled) return;

  // Get elements
  const controlButton = document.querySelector(
    `[${ATTR_WATERFALL}='${name}'] [${ATTR_WATERFALL_ELEMENT}='${EL_AUTOPLAY_CONTROL}']`
  ) as HTMLElement;
  const pauseIcon = document.querySelector(
    `[${ATTR_WATERFALL}='${name}'] [${ATTR_WATERFALL_ELEMENT}='${EL_AUTOPLAY_CONTROL_PAUSE}']`
  ) as HTMLElement;
  const playIcon = document.querySelector(
    `[${ATTR_WATERFALL}='${name}'] [${ATTR_WATERFALL_ELEMENT}='${EL_AUTOPLAY_CONTROL_PLAY}']`
  ) as HTMLElement;

  if (!controlButton || !pauseIcon || !playIcon) return;

  // Get default state (playing or paused)
  const defaultState = parseString(el, ATTR_AUTOPLAY_CONTROL_DEFAULT_STATE, "playing");

  // Set initial state
  let isPlaying = defaultState === "playing";

  // Update UI based on state
  function updateUI() {
    if (isPlaying) {
      pauseIcon.style.display = "block";
      playIcon.style.display = "none";
    } else {
      pauseIcon.style.display = "none";
      playIcon.style.display = "block";
    }
  }

  // Initialize UI
  updateUI();

  // Apply initial state to swiper
  if (defaultState === "paused" && swiper.autoplay) {
    swiper.autoplay.stop();
  }

  // Add click handler
  controlButton.addEventListener("click", () => {
    if (!swiper.autoplay) return;

    if (swiper.autoplay.running) {
      swiper.autoplay.stop();
      isPlaying = false;
    } else {
      swiper.autoplay.start();
      isPlaying = true;
    }

    updateUI();
  });
}
