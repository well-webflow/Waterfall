import { ATTR_MANIPULATION_ADD_SLIDE } from "../lib/attributes";

export function addSlides() {
  // Ensure the waterfall object is defined
  if (!Array.isArray(window.waterfalls)) {
    console.error(
      "[SlideAdder] window.waterfalls is not an array or not defined.",
    );
    return;
  }

  // Track the .w-dyn-list elements that originally contained matched slides
  const dynListsToRemove: Set<Element> = new Set();

  // Find all elements with the wtf-add-slide attribute and add them to the corresponding Waterfall
  const addSlideElements = document.querySelectorAll(
    `[${ATTR_MANIPULATION_ADD_SLIDE}]`,
  );

  addSlideElements.forEach((el) => {
    // Get the target Waterfall name from the attribute
    const targetName = el.getAttribute(ATTR_MANIPULATION_ADD_SLIDE);
    // Find the matchhing Waterfall by name
    const matchedWaterfall = window.waterfalls.find(
      (wf) => wf.name === targetName,
    );
    if (!matchedWaterfall) {
      console.warn(
        `[SlideAdder] No Waterfall found with name: "${targetName}"`,
      );
      return;
    }

    const swiper = matchedWaterfall.swiper;
    if (!swiper || typeof swiper.appendSlide !== "function") {
      console.error(
        `[SlideAdder] Invalid Swiper instance in Waterfall "${targetName}"`,
      );
      return;
    }

    // Remove the wtf-add-slide attribute
    el.removeAttribute(ATTR_MANIPULATION_ADD_SLIDE);

    // Add to swiper
    swiper.appendSlide(el.outerHTML);

    // Track parent .w-dyn-list
    const dynList = el.closest(".w-dyn-list");
    if (dynList) {
      dynListsToRemove.add(dynList);
    }
  });

  // Cleanup matched .w-dyn-list containers
  dynListsToRemove.forEach((list) => {
    list.remove();
  });
}
