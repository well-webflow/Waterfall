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
  console.log(`[Waterfall Autoplay Control] Initializing for: ${name}`);

  // Only initialize if autoplay control is enabled
  const autoplayControlEnabled = parseBoolean(el, ATTR_AUTOPLAY_CONTROL_ENABLED, false);
  const autoplayEnabled = parseBoolean(el, ATTR_AUTOPLAY, false);

  console.log(`[Waterfall Autoplay Control] ${name} - Control enabled: ${autoplayControlEnabled}, Autoplay enabled: ${autoplayEnabled}`);

  if (!autoplayControlEnabled || !autoplayEnabled) {
    console.log(`[Waterfall Autoplay Control] ${name} - Skipping initialization (control or autoplay not enabled)`);
    return;
  }

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

  console.log(`[Waterfall Autoplay Control] ${name} - Elements found:`, {
    controlButton: !!controlButton,
    pauseIcon: !!pauseIcon,
    playIcon: !!playIcon
  });

  if (!controlButton || !pauseIcon || !playIcon) {
    console.log(`[Waterfall Autoplay Control] ${name} - Skipping initialization (elements not found)`);
    return;
  }

  // Get default state (playing or paused)
  const defaultState = parseString(el, ATTR_AUTOPLAY_CONTROL_DEFAULT_STATE, "playing");
  console.log(`[Waterfall Autoplay Control] ${name} - Default state: ${defaultState}`);

  // Update UI based on state
  function updateUI(playing: boolean) {
    console.log(`[Waterfall Autoplay Control] ${name} - Updating UI: ${playing ? 'PLAYING (show pause)' : 'PAUSED (show play)'}`);
    if (playing) {
      pauseIcon.style.display = "block";
      playIcon.style.display = "none";
    } else {
      pauseIcon.style.display = "none";
      playIcon.style.display = "block";
    }
  }

  // Apply initial state to swiper and update UI
  if (swiper.autoplay) {
    if (defaultState === "paused") {
      console.log(`[Waterfall Autoplay Control] ${name} - Stopping autoplay (paused state)`);
      swiper.autoplay.stop();
      updateUI(false);
    } else {
      // Ensure autoplay starts for "playing" state
      console.log(`[Waterfall Autoplay Control] ${name} - Starting autoplay (playing state)`);
      swiper.autoplay.start();
      updateUI(true);
    }
  }

  // Add click handler
  controlButton.addEventListener("click", () => {
    if (!swiper.autoplay) return;

    if (swiper.autoplay.running) {
      swiper.autoplay.stop();
      updateUI(false);
    } else {
      swiper.autoplay.start();
      updateUI(true);
    }
  });
}
