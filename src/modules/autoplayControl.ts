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
  console.log(`%c[Waterfall Autoplay Control] Initializing for: ${name}`, 'color: #667eea; font-weight: bold');

  // Only initialize if autoplay control is enabled
  const autoplayControlEnabled = parseBoolean(el, ATTR_AUTOPLAY_CONTROL_ENABLED, false);
  const autoplayEnabled = parseBoolean(el, ATTR_AUTOPLAY, false);

  console.log(`[Waterfall Autoplay Control] ${name} - Attributes check:`, {
    'waterfall-autoplay-control-enabled': el.getAttribute(ATTR_AUTOPLAY_CONTROL_ENABLED),
    'waterfall-autoplay-mode': el.getAttribute(ATTR_AUTOPLAY),
    'Parsed control enabled': autoplayControlEnabled,
    'Parsed autoplay enabled': autoplayEnabled
  });

  if (!autoplayControlEnabled || !autoplayEnabled) {
    console.warn(`[Waterfall Autoplay Control] ${name} - ❌ Skipping initialization:`, {
      'Control enabled': autoplayControlEnabled,
      'Autoplay enabled': autoplayEnabled,
      'Reason': !autoplayControlEnabled ? 'Control not enabled' : 'Autoplay not enabled'
    });
    return;
  }

  // Get elements
  const controlButtonSelector = `[${ATTR_WATERFALL}='${name}'] [${ATTR_WATERFALL_ELEMENT}='${EL_AUTOPLAY_CONTROL}']`;
  const pauseIconSelector = `[${ATTR_WATERFALL}='${name}'] [${ATTR_WATERFALL_ELEMENT}='${EL_AUTOPLAY_CONTROL_PAUSE}']`;
  const playIconSelector = `[${ATTR_WATERFALL}='${name}'] [${ATTR_WATERFALL_ELEMENT}='${EL_AUTOPLAY_CONTROL_PLAY}']`;

  console.log(`[Waterfall Autoplay Control] ${name} - Searching for elements with selectors:`, {
    'Button': controlButtonSelector,
    'Pause Icon': pauseIconSelector,
    'Play Icon': playIconSelector
  });

  const controlButton = document.querySelector(controlButtonSelector) as HTMLElement;
  const pauseIcon = document.querySelector(pauseIconSelector) as HTMLElement;
  const playIcon = document.querySelector(playIconSelector) as HTMLElement;

  console.log(`[Waterfall Autoplay Control] ${name} - Elements found:`, {
    'Control Button': !!controlButton,
    'Pause Icon': !!pauseIcon,
    'Play Icon': !!playIcon,
    'Control Button Element': controlButton,
    'Pause Icon Element': pauseIcon,
    'Play Icon Element': playIcon
  });

  if (!controlButton || !pauseIcon || !playIcon) {
    console.error(`[Waterfall Autoplay Control] ${name} - ❌ Missing elements:`, {
      'Control Button': controlButton ? '✅ Found' : '❌ Not found',
      'Pause Icon': pauseIcon ? '✅ Found' : '❌ Not found',
      'Play Icon': playIcon ? '✅ Found' : '❌ Not found',
      'Tip': 'Make sure all elements have the correct waterfall-el attributes'
    });
    return;
  }

  // Get default state (playing or paused)
  const defaultState = parseString(el, ATTR_AUTOPLAY_CONTROL_DEFAULT_STATE, "playing");
  console.log(`[Waterfall Autoplay Control] ${name} - Default state:`, {
    'Attribute value': el.getAttribute(ATTR_AUTOPLAY_CONTROL_DEFAULT_STATE),
    'Parsed value': defaultState,
    'Will start': defaultState !== "paused"
  });

  // Update UI based on state
  function updateUI(playing: boolean) {
    console.log(`%c[Waterfall Autoplay Control] ${name} - Updating UI: ${playing ? '▶️ PLAYING (show pause button)' : '⏸️ PAUSED (show play button)'}`, playing ? 'color: #43e97b' : 'color: #f5576c');

    const pauseIconBefore = pauseIcon.style.display;
    const playIconBefore = playIcon.style.display;

    if (playing) {
      pauseIcon.style.display = "block";
      playIcon.style.display = "none";
    } else {
      pauseIcon.style.display = "none";
      playIcon.style.display = "block";
    }

    console.log(`[Waterfall Autoplay Control] ${name} - Display styles:`, {
      'Pause Icon': { before: pauseIconBefore, after: pauseIcon.style.display },
      'Play Icon': { before: playIconBefore, after: playIcon.style.display }
    });
  }

  // Apply initial state to swiper and update UI
  console.log(`[Waterfall Autoplay Control] ${name} - Swiper autoplay object:`, {
    'Exists': !!swiper.autoplay,
    'Running': swiper.autoplay?.running,
    'Paused': swiper.autoplay?.paused
  });

  if (swiper.autoplay) {
    if (defaultState === "paused") {
      console.log(`%c[Waterfall Autoplay Control] ${name} - ⏸️ Stopping autoplay (paused state)`, 'color: #f5576c; font-weight: bold');
      swiper.autoplay.stop();
      updateUI(false);
    } else {
      // Ensure autoplay starts for "playing" state
      console.log(`%c[Waterfall Autoplay Control] ${name} - ▶️ Starting autoplay (playing state)`, 'color: #43e97b; font-weight: bold');
      swiper.autoplay.start();
      updateUI(true);
    }

    // Verify final state
    setTimeout(() => {
      console.log(`[Waterfall Autoplay Control] ${name} - Final verification:`, {
        'Autoplay running': swiper.autoplay.running,
        'Pause icon display': pauseIcon.style.display,
        'Play icon display': playIcon.style.display,
        'Expected': defaultState === "paused" ? 'Play icon visible' : 'Pause icon visible'
      });
    }, 100);
  } else {
    console.error(`[Waterfall Autoplay Control] ${name} - ❌ Swiper autoplay object not available`);
  }

  // Add click handler
  controlButton.addEventListener("click", () => {
    console.log(`%c[Waterfall Autoplay Control] ${name} - 🖱️ Button clicked`, 'color: #667eea; font-weight: bold');

    if (!swiper.autoplay) {
      console.error(`[Waterfall Autoplay Control] ${name} - ❌ Swiper autoplay not available on click`);
      return;
    }

    const wasRunning = swiper.autoplay.running;
    console.log(`[Waterfall Autoplay Control] ${name} - Current state before toggle:`, {
      'Autoplay running': wasRunning,
      'Will': wasRunning ? 'STOP' : 'START'
    });

    if (swiper.autoplay.running) {
      console.log(`%c[Waterfall Autoplay Control] ${name} - ⏸️ Stopping autoplay`, 'color: #f5576c');
      swiper.autoplay.stop();
      updateUI(false);
    } else {
      console.log(`%c[Waterfall Autoplay Control] ${name} - ▶️ Starting autoplay`, 'color: #43e97b');
      swiper.autoplay.start();
      updateUI(true);
    }

    // Verify state after toggle
    setTimeout(() => {
      console.log(`[Waterfall Autoplay Control] ${name} - State after toggle:`, {
        'Autoplay running': swiper.autoplay.running,
        'Pause icon display': pauseIcon.style.display,
        'Play icon display': playIcon.style.display
      });
    }, 50);
  });

  console.log(`%c[Waterfall Autoplay Control] ${name} - ✅ Initialization complete`, 'color: #43e97b; font-weight: bold');
}
