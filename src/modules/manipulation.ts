import {
  ATTR_MANIPULATION_ADD_INDEX,
  ATTR_MANIPULATION_ADD_SLIDE,
  ATTR_MANIPULATION_APPEND_SLIDE,
  ATTR_MANIPULATION_PREPEND_SLIDE,
  ATTR_MANIPULATION_REMOVE_INDEX,
  ATTR_MANIPULATION_REMOVE_SLIDE,
} from "../lib/attributes";

function handleSlideManipulation(attr: string, action: "append" | "prepend" | "remove" | "add") {
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

    if (action === "append") {
      swiper.appendSlide(el.outerHTML);
    } else if (action === "prepend") {
      swiper.prependSlide(el.outerHTML);
    } else if (action === "add") {
      let index = Number(el.getAttribute(ATTR_MANIPULATION_ADD_INDEX));
      if (!index) index = 1;
      swiper.addSlide(index, [el.outerHTML]);
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
