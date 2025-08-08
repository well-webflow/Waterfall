import {
  ATTR_MANIPULATION_ADD_SLIDE,
  ATTR_MANIPULATION_APPEND_SLIDE,
  ATTR_MANIPULATION_PREPEND_SLIDE,
  ATTR_MANIPULATION_REMOVE_SLIDE,
} from "../lib/attributes";

// Generic handler
function handleSlideManipulation(attr: string, action: "append" | "prepend" | "remove") {
  if (!Array.isArray(window.waterfalls)) {
    console.error("window.waterfalls is not an array or not defined.");
    return;
  }

  const dynListsToRemove = new Set<Element>();

  document.querySelectorAll(`[${attr}]`).forEach((el) => {
    const targetName = el.getAttribute(attr);
    const matchedWaterfall = window.waterfalls.find((wf) => wf.name === targetName);

    if (!matchedWaterfall) {
      console.warn(`[MANIPULATION] No Waterfall found with name: "${targetName}"`);
      return;
    }

    const swiper = matchedWaterfall.swiper;
    if (!swiper) {
      console.error(`[MANIPULATION] Invalid Swiper instance in Waterfall "${targetName}"`);
      return;
    }

    el.removeAttribute(attr);

    if (action === "append" && typeof swiper.appendSlide === "function") {
      swiper.appendSlide(el.outerHTML);
    } else if (action === "prepend" && typeof swiper.prependSlide === "function") {
      swiper.prependSlide(el.outerHTML);
    } else if (action === "remove" && typeof swiper.removeSlide === "function") {
      // Find the index of the slide in the swiper
      const slideIndex = Array.from(swiper.slides).findIndex((slide) => slide.outerHTML === el.outerHTML);
      if (slideIndex !== -1) {
        swiper.removeSlide(slideIndex);
      } else {
        console.warn(`[MANIPULATION] Slide not found in Swiper for removal: ${targetName}`);
      }
    }

    const dynList = el.closest(".w-dyn-list");
    if (dynList) dynListsToRemove.add(dynList);
  });

  dynListsToRemove.forEach((list) => list.remove());
}

export function addSlides() {
  handleSlideManipulation(ATTR_MANIPULATION_ADD_SLIDE, "append");
}
export function appendSlides() {
  handleSlideManipulation(ATTR_MANIPULATION_APPEND_SLIDE, "append");
}
export function prependSlides() {
  handleSlideManipulation(ATTR_MANIPULATION_PREPEND_SLIDE, "prepend");
}
export function removeSlides() {
  handleSlideManipulation(ATTR_MANIPULATION_REMOVE_SLIDE, "remove");
}
