import {
  ATTR_MANIPULATION_ADD_INDEX,
  ATTR_MANIPULATION_ADD_SLIDE,
  ATTR_MANIPULATION_APPEND_SLIDE,
  ATTR_MANIPULATION_PREPEND_SLIDE,
  ATTR_MANIPULATION_REMOVE_INDEX,
  ATTR_MANIPULATION_REMOVE_SLIDE,
} from "../lib/attributes";
import { findWaterfallByName } from "../util";

function handleSlideManipulation(attr: string, action: "append" | "prepend" | "remove" | "add") {
  if (!Array.isArray(window.waterfalls)) {
    console.error("window.waterfalls is not an array or not defined.");
    return;
  }

  const dynListsToRemove = new Set<Element>();

  document.querySelectorAll(`[${attr}]`).forEach((el) => {
    const targetName = el.getAttribute(attr);
    if (!targetName) return;

    const matchedWaterfall = findWaterfallByName(window.waterfalls, targetName, el);
    if (!matchedWaterfall) return;

    const swiper = matchedWaterfall.swiper;

    const clone = el.cloneNode(true) as Element;
    clone.removeAttribute(attr);
    if (action === "add") {
      clone.removeAttribute(ATTR_MANIPULATION_ADD_INDEX);
    } else if (action === "remove") {
      clone.removeAttribute(ATTR_MANIPULATION_REMOVE_INDEX);
    }

    // Ensure the element has the swiper-slide class
    if (!clone.classList.contains("swiper-slide")) {
      clone.classList.add("swiper-slide");
    }

    if (action === "append") {
      swiper.appendSlide(clone.outerHTML);
    } else if (action === "prepend") {
      swiper.prependSlide(clone.outerHTML);
    } else if (action === "add") {
      let index = Number(el.getAttribute(ATTR_MANIPULATION_ADD_INDEX));
      if (!index) index = 1;
      // Parse HTML string into DOM element (addSlide doesn't handle strings properly)
      const tempDOM = document.createElement("div");
      tempDOM.innerHTML = clone.outerHTML;
      const slideElement = tempDOM.children[0] as HTMLElement;
      if (slideElement) {
        swiper.addSlide(index, slideElement);
      }
    } else if (action === "remove") {
      const slideIndex = Number(el.getAttribute(ATTR_MANIPULATION_REMOVE_INDEX));
      if (slideIndex !== -1) {
        swiper.removeSlide(slideIndex);
      } else {
        console.warn(`[MANIPULATION] Slide not found in Swiper for removal: ${targetName}`);
      }
    }

    // Remove the original slide
    el.remove();

    const dynList = el.closest(".w-dyn-list");
    if (dynList) dynListsToRemove.add(dynList);

    // Update the swiper
    swiper.update();
  });

  dynListsToRemove.forEach((list) => list.remove());
}

export function manipulateSlides() {
  handleSlideManipulation(ATTR_MANIPULATION_ADD_SLIDE, "add");
  handleSlideManipulation(ATTR_MANIPULATION_APPEND_SLIDE, "append");
  handleSlideManipulation(ATTR_MANIPULATION_PREPEND_SLIDE, "prepend");
  handleSlideManipulation(ATTR_MANIPULATION_REMOVE_SLIDE, "remove");
}
