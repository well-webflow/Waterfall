/**
 * Smooth Autoplay Hover Pause
 * Swiper's own `autoplay.pauseOnMouseEnter` gives up while `swiper.animating` is true, so on a
 * smooth autoplay slider - delay 0, one transition running into the next - hovering never pauses
 * anything. Freeze the wrapper where it stands instead, then carry the interrupted transition to
 * its end when the pointer leaves.
 */

import { ATTR_AUTOPLAY_PAUSE_ON_MOUSE_ENTER } from "lib/attributes";
import { parseBoolean } from "../util";
import type Swiper from "swiper";

export function initSmoothAutoplayHover(el: HTMLElement, swiper: Swiper) {
  // Swiper handles the hover itself whenever there is a gap between transitions to pause in.
  const pauseOnMouseEnter = parseBoolean(el, ATTR_AUTOPLAY_PAUSE_ON_MOUSE_ENTER, false);
  const autoplay = swiper.params.autoplay;
  if (pauseOnMouseEnter !== true) return;
  if (!swiper.autoplay || typeof autoplay !== "object" || !autoplay.enabled || autoplay.delay !== 0) return;

  // "resuming" is the stretch between the pointer leaving and the interrupted transition finishing,
  // where autoplay is stopped but the slider is ours to freeze again.
  let state: "idle" | "frozen" | "resuming" = "idle";
  let segmentStart = 0; // when the running transition began
  let segmentDuration = 0; // how long that transition was given
  let remaining = 0; // what was left of it when the pointer arrived
  let stoppingSelf = false;
  let resumeTimer: ReturnType<typeof setTimeout> | undefined;

  const currentTransitionDuration = () => parseFloat(getComputedStyle(swiper.wrapperEl).transitionDuration) * 1000 || 0;

  swiper.on("transitionStart", () => {
    segmentStart = performance.now();
    segmentDuration = currentTransitionDuration();
  });

  // Autoplay stopped by anything else - the autoplay control, disableOnInteraction - hands the
  // slider back, so a pointer leaving later must not start it up again.
  swiper.on("autoplayStop", () => {
    if (!stoppingSelf) state = "idle";
  });

  function restart() {
    clearTimeout(resumeTimer);
    swiper.off("transitionEnd", restart);
    if (state !== "resuming" || swiper.destroyed) return;
    state = "idle";
    if (!swiper.autoplay.running) swiper.autoplay.start();
  }

  // An interrupted transition never fires `transitionend`, so waiting on that event alone can
  // leave autoplay stopped for good. Give it a deadline as well; restart() only acts once.
  function restartWhenDone(duration: number) {
    swiper.once("transitionEnd", restart);
    resumeTimer = setTimeout(restart, duration + 100);
  }

  function freeze() {
    if (swiper.destroyed || state === "frozen") return;
    if (state === "idle" && !swiper.autoplay.running) return;
    clearTimeout(resumeTimer);
    swiper.off("transitionEnd", restart);
    state = "frozen";
    remaining = swiper.animating ? Math.max(0, segmentDuration - (performance.now() - segmentStart)) : 0;

    // Pin the wrapper to the position it has reached mid-transition.
    const translate = swiper.getTranslate();
    stoppingSelf = true;
    swiper.autoplay.stop();
    stoppingSelf = false;
    swiper.setTransition(0);
    swiper.setTranslate(translate);
    swiper.animating = false;
  }

  function unfreeze() {
    if (swiper.destroyed || state !== "frozen") return;
    state = "resuming";

    // Something else - a navigation click, say - is already moving the slider.
    if (swiper.animating) {
      restartWhenDone(currentTransitionDuration());
      return;
    }

    // Finish the transition the pointer interrupted, then hand back to autoplay.
    if (remaining > 0 && swiper.slideTo(swiper.activeIndex, remaining, false) && swiper.animating) {
      restartWhenDone(remaining);
      return;
    }

    restart();
  }

  const onPointerEnter = (e: PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    freeze();
  };

  const onPointerLeave = (e: PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    unfreeze();
  };

  swiper.el.addEventListener("pointerenter", onPointerEnter);
  swiper.el.addEventListener("pointerleave", onPointerLeave);

  swiper.on("destroy", () => {
    clearTimeout(resumeTimer);
    swiper.el?.removeEventListener("pointerenter", onPointerEnter);
    swiper.el?.removeEventListener("pointerleave", onPointerLeave);
  });
}
