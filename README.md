[![npm version](https://img.shields.io/npm/v/well-waterfall.svg)](https://www.npmjs.com/package/well-waterfall) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# 🚿 Waterfall by Wellspring 🚿

Waterfall is a free-forever JavaScript library for Webflow that lets you build [SwiperJS](https://swiperjs.com/) sliders entirely with HTML attributes. The Wellspring App helps you create, edit, and manage Waterfalls inside the Webflow Designer with an easy-to-use interface and built-in documentation.

1.  **Free to Use.** Waterfall is free to use - no monthly subscription.
2.  **No Custom Code.** Every setting is an attribute, so no JavaScript is required.
3.  **Full Documentation.** Every attribute is listed below, and each setting is explained directly in the Wellspring App.
4.  **Turn Swipers into Components.** After creating a swiper, you can turn it into a Webflow component for reuse.

Current version: **v<!-- version -->1.4.2<!-- /version -->** · Bundled SwiperJS: **<!-- swiper-version -->14.3.0<!-- /swiper-version -->**

## Table of contents

- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Waterfall Layout](#waterfall-layout)
- [How Attributes Work](#how-attributes-work)
- [Attribute Reference](#attribute-reference)
  - [Core](#core)
  - [Layout](#layout)
  - [Responsive Breakpoints](#responsive-breakpoints)
  - [Playback (Loop, Rewind, Speed)](#playback-loop-rewind-speed)
  - [Autoplay](#autoplay)
  - [Autoplay Control Button](#autoplay-control-button)
  - [Navigation](#navigation)
  - [Pagination](#pagination)
  - [Scrollbar](#scrollbar)
  - [Effects](#effects)
  - [Free Mode](#free-mode)
  - [Grid](#grid)
  - [Thumbs](#thumbs)
  - [Controller](#controller)
  - [Touch & Swiping](#touch--swiping)
  - [Keyboard Control](#keyboard-control)
  - [Mousewheel Control](#mousewheel-control)
  - [Hash Navigation](#hash-navigation)
  - [History Navigation](#history-navigation)
  - [Zoom](#zoom)
  - [Parallax](#parallax)
  - [Lazy Loading](#lazy-loading)
  - [Accessibility (a11y)](#accessibility-a11y)
  - [Observer](#observer)
  - [CSS Classes](#css-classes)
  - [Advanced](#advanced)
  - [Callbacks](#callbacks)
  - [Slide Manipulation](#slide-manipulation)
- [Element Reference](#element-reference)
- [JavaScript API](#javascript-api)
- [Not Supported](#not-supported)
- [Development](#development)
- [Built With](#built-with)
- [Authors](#authors)
- [License](#license)

## Dependencies

Waterfall bundles SwiperJS <!-- swiper-version -->14.3.0<!-- /swiper-version --> (JavaScript and CSS) directly. If you already load SwiperJS on your site, you can remove it and just use Waterfall.

## Installation

Use the Wellspring App to install the code onto your site. If you are installing manually, add the script to the **Footer Code** (before the `</body>` tag) in your Webflow Project Settings.

**Specific Version (Stable - Recommended)**

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/well-waterfall@1.4.2"></script>
```

**Latest Version**

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/well-waterfall"></script>
```

**npm**

```bash
npm install well-waterfall
```

To use the attribute and element names in your own tools without loading Swiper or the runtime, import them from `well-waterfall/attributes`:

```js
import { ATTR_WATERFALL, EL_NAVIGATION_NEXT, breakpointAttr } from "well-waterfall/attributes";
```

Once loaded, the console prints `🚿 Hello from Wellspring Waterfall (vX.Y.Z)`, so you can confirm which version is running.

## Usage

**Use the Wellspring App**
This is the easiest way to manage Waterfall. The App lets you create, edit, and modify existing Waterfalls through a convenient interface inside the Designer.

**Add attributes manually**
Every setting is a plain HTML attribute, so you can also add them yourself in Webflow under **Element Settings → Custom Attributes**. See the [Attribute Reference](#attribute-reference) below.

## Waterfall Layout

Waterfall uses the standard SwiperJS markup with an added wrapper element that carries the `waterfall` attribute. Each Waterfall is identified by `[waterfall="SWIPER_NAME"]`, where `SWIPER_NAME` is a unique string. The name is also used to link sliders together (thumbs, controller) and to target them from outside (slide manipulation).

```html
<!-- Waterfall wrapper: all settings attributes go here -->
<div waterfall="SWIPER_NAME" waterfall-slides-per-view="3" waterfall-space-between="24">
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
    </div>
  </div>

  <!-- Optional elements (anywhere inside the wrapper) -->
  <div waterfall-el="pagination"></div>
  <button waterfall-el="navigation-prev">Prev</button>
  <button waterfall-el="navigation-next">Next</button>
  <div waterfall-el="scrollbar"><div waterfall-el="scrollbar-drag"></div></div>
</div>
```

Waterfalls initialize on `DOMContentLoaded`.

**Webflow CMS:** A Collection List works as a slider when you give the Collection List Wrapper the `swiper` class, the Collection List the `swiper-wrapper` class, and each Collection Item the `swiper-slide` class.

## How Attributes Work

- **Placement.** Unless noted otherwise, attributes go on the `[waterfall]` wrapper element.
- **Naming.** Each attribute is named after its SwiperJS parameter in kebab-case with a `waterfall-` prefix. Example: `direction` → `waterfall-direction`. Parameters inside an object include the group name: `freeMode.enabled` → `waterfall-free-mode-enabled`. A few attributes use shorter names; the tables below list the exact names.
- **Value types.**
  - `boolean`: the literal text `true` or `false`. Any other value is ignored.
  - `number`: a plain number without units (`24`, not `24px`).
  - `string`: text, used as-is (surrounding whitespace is trimmed).
- **Defaults.** Leaving an attribute out, or setting it to its default value, falls back to the SwiperJS default shown in the tables.
- **Debugging.** Add `waterfall-debug-mode="true"` to log the generated Swiper config, the elements found, and linking details to the console.

The attribute names are also exported as constants from `src/lib/attributes.ts` and `src/lib/elements.ts`.

## Attribute Reference

### Core

| Attribute                 | Swiper option  | Values  | Default      | Description                                                                                                             |
| ------------------------- | -------------- | ------- | ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `waterfall`               | —              | string  | _(required)_ | Unique name for this slider. Marks the element as a Waterfall.                                                          |
| `waterfall-debug-mode`    | —              | boolean | `false`      | Logs the generated config and initialization details to the console.                                                    |
| `waterfall-initial-slide` | `initialSlide` | number  | `0`          | Index of the slide to show first.                                                                                       |
| `waterfall-nested`        | `nested`       | boolean | `false`      | Set to `true` on a Swiper nested inside another Swiper with the same direction, so touch events are captured correctly. |

### Layout

| Attribute                              | Swiper option              | Values                     | Default      | Description                                                                                                    |
| -------------------------------------- | -------------------------- | -------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------- |
| `waterfall-direction`                  | `direction`                | `horizontal` \| `vertical` | `horizontal` | Slide direction.                                                                                               |
| `waterfall-slides-per-view`            | `slidesPerView`            | number \| `auto`           | `1`          | Number of slides visible at once. Decimals like `1.5` show partial slides; `auto` uses each slide's CSS width. |
| `waterfall-slides-per-group`           | `slidesPerGroup`           | number                     | `1`          | Number of slides to advance per navigation step.                                                               |
| `waterfall-slides-per-group-skip`      | `slidesPerGroupSkip`       | number                     | `0`          | Number of initial slides that advance one at a time before grouping starts.                                    |
| `waterfall-slides-per-group-auto`      | `slidesPerGroupAuto`       | boolean                    | `false`      | With `slidesPerView: auto`, advances by the number of slides currently visible.                                |
| `waterfall-space-between`              | `spaceBetween`             | number (px)                | `0`          | Gap between slides.                                                                                            |
| `waterfall-centered-slides`            | `centeredSlides`           | boolean                    | `false`      | Centers the active slide instead of aligning it to the left or top.                                            |
| `waterfall-center-insufficient-slides` | `centerInsufficientSlides` | boolean                    | `false`      | Centers the slides when there are fewer than `slidesPerView`.                                                  |
| `waterfall-normalize-slide-index`      | `normalizeSlideIndex`      | boolean                    | `true`       | Normalizes the active slide index when using `slidesPerGroup`.                                                 |
| `waterfall-auto-height`                | `autoHeight`               | boolean                    | `false`      | Resizes the slider height to match the active slide.                                                           |
| `waterfall-slides-offset-before`       | `slidesOffsetBefore`       | number (px)                | `0`          | Extra space before the first slide.                                                                            |
| `waterfall-slides-offset-after`        | `slidesOffsetAfter`        | number (px)                | `0`          | Extra space after the last slide.                                                                              |
| `waterfall-width`                      | `width`                    | number (px)                | —            | Forces a slider width. Useful only when the slider is hidden on init.                                          |
| `waterfall-height`                     | `height`                   | number (px)                | —            | Forces a slider height. Useful only when the slider is hidden on init.                                         |

### Responsive Breakpoints

Breakpoints match Webflow's breakpoints and cascade the same way Webflow styles do: outward from Desktop. A value set on Tablet also applies to Mobile Landscape and Mobile Portrait unless they override it, and a value set on Desktop also applies to 1280px and 1440px. Anywhere no breakpoint value applies, the base attribute (e.g. `waterfall-slides-per-view`) is used.

| Suffix           | Webflow breakpoint | Applies to      | Falls back to                      |
| ---------------- | ------------------ | --------------- | ---------------------------------- |
| `-mobile`        | Mobile portrait    | 479px and below | `-mobile-large`, `-tablet`, base   |
| `-mobile-large`  | Mobile landscape   | 480px – 767px   | `-tablet`, base                    |
| `-tablet`        | Tablet             | 768px – 991px   | base                               |
| `-desktop`       | Desktop            | 992px and up    | base                               |
| `-desktop-small` | 1280px             | 1280px and up   | `-desktop`, base                   |
| `-desktop-large` | 1440px             | 1440px and up   | `-desktop-small`, `-desktop`, base |

| Attribute pattern                         | Swiper option     | Values                  | Description                                                                                       |
| ----------------------------------------- | ----------------- | ----------------------- | ------------------------------------------------------------------------------------------------- |
| `waterfall-slides-per-view-{breakpoint}`  | `slidesPerView`   | number                  | Slides visible at this breakpoint, or `auto`.                                                     |
| `waterfall-slides-per-group-{breakpoint}` | `slidesPerGroup`  | number                  | Slides advanced per step at this breakpoint.                                                      |
| `waterfall-space-between-{breakpoint}`    | `spaceBetween`    | number (px)             | Gap between slides at this breakpoint.                                                            |
| `waterfall-centered-slides-{breakpoint}`  | `centeredSlides`  | boolean                 | Centers the active slide at this breakpoint.                                                      |
| `waterfall-breakpoints-base`              | `breakpointsBase` | `window` \| `container` | Measures breakpoints against the window width (default `window`) or the slider container's width. |

Example: `waterfall-slides-per-view="3"` + `waterfall-slides-per-view-tablet="2"` + `waterfall-slides-per-view-mobile-large="1"` shows 3 slides on Desktop and up, 2 on Tablet, and 1 on both mobile breakpoints.

### Playback (Loop, Rewind, Speed)

| Attribute                          | Swiper option          | Values                       | Default | Description                                                                                         |
| ---------------------------------- | ---------------------- | ---------------------------- | ------- | --------------------------------------------------------------------------------------------------- |
| `waterfall-playback-mode`          | `loop` / `rewind`      | `none` \| `loop` \| `rewind` | `none`  | `loop` wraps around endlessly. `rewind` jumps back to the first slide after the last one.           |
| `waterfall-speed`                  | `speed`                | number (ms)                  | `300`   | Transition duration between slides.                                                                 |
| `waterfall-loop-add-blank-slides`  | `loopAddBlankSlides`   | boolean                      | `true`  | With loop and grid/`slidesPerGroup`, adds blank slides when the slide count isn't evenly divisible. |
| `waterfall-loop-additional-slides` | `loopAdditionalSlides` | number                       | `0`     | Extra slides to clone for looping.                                                                  |
| `waterfall-loop-prevents-sliding`  | `loopPreventsSliding`  | boolean                      | `true`  | Blocks navigation while the loop is repositioning slides.                                           |
| `waterfall-data-one-way-movement`  | `oneWayMovement`       | boolean                      | `false` | Swiping in either direction advances to the next slide.                                             |

### Autoplay

| Attribute                          | Swiper option                   | Values      | Default | Description                                                                                                                                                |
| ---------------------------------- | ------------------------------- | ----------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `waterfall-autoplay-mode`          | `autoplay`                      | boolean     | `false` | Turns autoplay on. The other autoplay attributes apply only when this is `true`.                                                                           |
| `waterfall-delay`                  | `autoplay.delay`                | number (ms) | `3000`  | Time between transitions.                                                                                                                                  |
| `waterfall-smooth-autoplay`        | —                               | boolean     | `false` | Continuous "marquee" scrolling: sets the delay to `0` and applies linear easing to `.swiper-wrapper`. Pair it with a high `waterfall-speed` (e.g. `5000`). |
| `waterfall-disable-on-interaction` | `autoplay.disableOnInteraction` | boolean     | `false` | Stops autoplay permanently after the user interacts with the slider.                                                                                       |
| `waterfall-pause-on-mouse-enter`   | `autoplay.pauseOnMouseEnter`    | boolean     | `false` | Pauses while the pointer is over the slider.                                                                                                               |
| `waterfall-reverse-direction`      | `autoplay.reverseDirection`     | boolean     | `false` | Autoplays backwards.                                                                                                                                       |
| `waterfall-stop-on-last-slide`     | `autoplay.stopOnLastSlide`      | boolean     | `false` | Stops on the last slide. Has no effect in loop mode.                                                                                                       |

### Autoplay Control Button

A play/pause toggle for autoplaying sliders. It requires `waterfall-autoplay-mode="true"` and all three [elements](#element-reference) (`autoplay-control`, `autoplay-control-play`, `autoplay-control-pause`) inside the wrapper. The button shows the pause icon while playing and the play icon while paused.

| Attribute                                  | Values                | Default   | Description                                             |
| ------------------------------------------ | --------------------- | --------- | ------------------------------------------------------- |
| `waterfall-autoplay-control-enabled`       | boolean               | `false`   | Turns on the play/pause button.                         |
| `waterfall-autoplay-control-default-state` | `playing` \| `paused` | `playing` | Whether autoplay starts running or paused on page load. |

### Navigation

Navigation turns on automatically when a `navigation-next` or `navigation-prev` [element](#element-reference) is found inside the wrapper.

| Attribute                                        | Swiper option                        | Values  | Default                      | Description                                                       |
| ------------------------------------------------ | ------------------------------------ | ------- | ---------------------------- | ----------------------------------------------------------------- |
| `waterfall-navigation-enabled`                   | `navigation.enabled`                 | boolean | _(auto)_                     | Set to `false` to turn navigation off even when buttons exist.    |
| `waterfall-navigation-hide-on-click`             | `navigation.hideOnClick`             | boolean | `false`                      | Toggles button visibility when the slider is clicked.             |
| `waterfall-allow-slide-next`                     | `allowSlideNext`                     | boolean | `true`                       | Set to `false` to block sliding forward.                          |
| `waterfall-allow-slide-prev`                     | `allowSlidePrev`                     | boolean | `true`                       | Set to `false` to block sliding backward.                         |
| `waterfall-navigation-disabled-class`            | `navigation.disabledClass`           | string  | `swiper-button-disabled`     | Class added to a button when it can't be used (first/last slide). |
| `waterfall-navigation-hidden-class`              | `navigation.hiddenClass`             | string  | `swiper-button-hidden`       | Class added to hidden buttons.                                    |
| `waterfall-navigation-lock-class`                | `navigation.lockClass`               | string  | `swiper-button-lock`         | Class added when navigation is locked (not enough slides).        |
| `waterfall-navigation-navigation-disabled-class` | `navigation.navigationDisabledClass` | string  | `swiper-navigation-disabled` | Class added to the container when navigation is disabled.         |

### Pagination

Pagination turns on when a `pagination` [element](#element-reference) is found inside the wrapper. To style bullets in Webflow, add a `pagination-bullet` element: Waterfall copies its tag name and classes onto every generated bullet.

| Attribute                                         | Swiper option                         | Values                                                                  | Default                                  | Description                                                                                            |
| ------------------------------------------------- | ------------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `waterfall-pagination-type`                       | `pagination.type`                     | `bullets` \| `numberBullets` \| `fraction` \| `progressbar` \| `custom` | `bullets`                                | Pagination style. `numberBullets` shows bullets containing the slide number.                           |
| `waterfall-pagination-enabled`                    | `pagination.enabled`                  | boolean                                                                 | _(auto)_                                 | Set to `false` to turn pagination off even when the element exists.                                    |
| `waterfall-pagination-clickable`                  | `pagination.clickable`                | boolean                                                                 | `false`                                  | Clicking a bullet goes to that slide.                                                                  |
| `waterfall-pagination-dynamic-bullets`            | `pagination.dynamicBullets`           | boolean                                                                 | `false`                                  | Shows only a few bullets at a time; useful with many slides.                                           |
| `waterfall-pagination-dynamic-main-bullets`       | `pagination.dynamicMainBullets`       | number                                                                  | `1`                                      | Number of main bullets shown with dynamic bullets.                                                     |
| `waterfall-pagination-hide-on-click`              | `pagination.hideOnClick`              | boolean                                                                 | `false`                                  | Toggles pagination visibility when the slider is clicked.                                              |
| `waterfall-pagination-progressbar-opposite`       | `pagination.progressbarOpposite`      | boolean                                                                 | `false`                                  | Draws the progress bar in the opposite direction to the slider (e.g. vertical on a horizontal slider). |
| `waterfall-pagination-bullet-active-class`        | `pagination.bulletActiveClass`        | string                                                                  | `swiper-pagination-bullet-active`        | Class on the active bullet.                                                                            |
| `waterfall-pagination-clickable-class`            | `pagination.clickableClass`           | string                                                                  | `swiper-pagination-clickable`            | Class added when pagination is clickable.                                                              |
| `waterfall-pagination-current-class`              | `pagination.currentClass`             | string                                                                  | `swiper-pagination-current`              | Class on the current number in `fraction` pagination.                                                  |
| `waterfall-pagination-total-class`                | `pagination.totalClass`               | string                                                                  | `swiper-pagination-total`                | Class on the total number in `fraction` pagination.                                                    |
| `waterfall-pagination-hidden-class`               | `pagination.hiddenClass`              | string                                                                  | `swiper-pagination-hidden`               | Class added when pagination is hidden.                                                                 |
| `waterfall-pagination-horizontal-class`           | `pagination.horizontalClass`          | string                                                                  | `swiper-pagination-horizontal`           | Class added for horizontal sliders.                                                                    |
| `waterfall-pagination-vertical-class`             | `pagination.verticalClass`            | string                                                                  | `swiper-pagination-vertical`             | Class added for vertical sliders.                                                                      |
| `waterfall-pagination-lock-class`                 | `pagination.lockClass`                | string                                                                  | `swiper-pagination-lock`                 | Class added when pagination is locked (not enough slides).                                             |
| `waterfall-pagination-modifier-class`             | `pagination.modifierClass`            | string                                                                  | `swiper-pagination-`                     | Prefix for the type modifier class (e.g. `swiper-pagination-bullets`).                                 |
| `waterfall-pagination-pagination-disabled-class`  | `pagination.paginationDisabledClass`  | string                                                                  | `swiper-pagination-disabled`             | Class added when pagination is disabled.                                                               |
| `waterfall-pagination-progressbar-fill-class`     | `pagination.progressbarFillClass`     | string                                                                  | `swiper-pagination-progressbar-fill`     | Class on the progress bar fill.                                                                        |
| `waterfall-pagination-progressbar-opposite-class` | `pagination.progressbarOppositeClass` | string                                                                  | `swiper-pagination-progressbar-opposite` | Class added with an opposite progress bar.                                                             |

### Scrollbar

The scrollbar turns on when a `scrollbar` [element](#element-reference) is found inside the wrapper. The drag handle's class is taken from the `scrollbar-drag` element inside it.

| Attribute                                      | Swiper option                      | Values                | Default                       | Description                                                            |
| ---------------------------------------------- | ---------------------------------- | --------------------- | ----------------------------- | ---------------------------------------------------------------------- |
| `waterfall-scrollbar-enabled`                  | `scrollbar.enabled`                | boolean               | _(auto)_                      | Set to `false` to turn the scrollbar off even when the element exists. |
| `waterfall-scrollbar-draggable`                | `scrollbar.draggable`              | boolean               | `false`                       | Lets the user drag the scrollbar handle.                               |
| `waterfall-scrollbar-hide`                     | `scrollbar.hide`                   | boolean               | `false`                       | Hides the scrollbar after the user stops interacting.                  |
| `waterfall-scrollbar-snap-on-release`          | `scrollbar.snapOnRelease`          | boolean               | `true`                        | Snaps to the nearest slide when the handle is released.                |
| `waterfall-scrollbar-drag-size`                | `scrollbar.dragSize`               | number (px) \| `auto` | `auto`                        | Size of the drag handle.                                               |
| `waterfall-scrollbar-horizontal-class`         | `scrollbar.horizontalClass`        | string                | `swiper-scrollbar-horizontal` | Class added for horizontal sliders.                                    |
| `waterfall-scrollbar-vertical-class`           | `scrollbar.verticalClass`          | string                | `swiper-scrollbar-vertical`   | Class added for vertical sliders.                                      |
| `waterfall-scrollbar-lock-class`               | `scrollbar.lockClass`              | string                | `swiper-scrollbar-lock`       | Class added when the scrollbar is locked (not enough slides).          |
| `waterfall-scrollbar-scrollbar-disabled-class` | `scrollbar.scrollbarDisabledClass` | string                | `swiper-scrollbar-disabled`   | Class added when the scrollbar is disabled.                            |

### Effects

| Attribute          | Swiper option | Values                                                          | Default | Description                                                  |
| ------------------ | ------------- | --------------------------------------------------------------- | ------- | ------------------------------------------------------------ |
| `waterfall-effect` | `effect`      | `slide` \| `fade` \| `cube` \| `coverflow` \| `flip` \| `cards` | `slide` | Transition effect. `fade` always cross-fades between slides. |

The settings below apply only when the matching effect is selected.

**Coverflow** (`waterfall-effect="coverflow"`)

| Attribute                           | Swiper option                  | Values       | Default | Description                                       |
| ----------------------------------- | ------------------------------ | ------------ | ------- | ------------------------------------------------- |
| `waterfall-coverflow-rotate`        | `coverflowEffect.rotate`       | number (deg) | `50`    | Rotation of the side slides.                      |
| `waterfall-coverflow-stretch`       | `coverflowEffect.stretch`      | number (px)  | `0`     | Space between slides.                             |
| `waterfall-coverflow-depth`         | `coverflowEffect.depth`        | number (px)  | `100`   | Depth offset (Z translation).                     |
| `waterfall-coverflow-scale`         | `coverflowEffect.scale`        | number       | `1`     | Scale of the side slides.                         |
| `waterfall-coverflow-modifier`      | `coverflowEffect.modifier`     | number       | `1`     | Multiplier applied to rotate, depth, and stretch. |
| `waterfall-coverflow-slide-shadows` | `coverflowEffect.slideShadows` | boolean      | `true`  | Shows shadows on the slides.                      |

**Cube** (`waterfall-effect="cube"`)

| Attribute                      | Swiper option             | Values      | Default | Description                           |
| ------------------------------ | ------------------------- | ----------- | ------- | ------------------------------------- |
| `waterfall-cube-shadow`        | `cubeEffect.shadow`       | boolean     | `true`  | Shows the main shadow under the cube. |
| `waterfall-cube-shadow-offset` | `cubeEffect.shadowOffset` | number (px) | `20`    | Offset of the main shadow.            |
| `waterfall-cube-shadow-scale`  | `cubeEffect.shadowScale`  | number      | `0.94`  | Scale of the main shadow.             |
| `waterfall-cube-slide-shadows` | `cubeEffect.slideShadows` | boolean     | `true`  | Shows shadows on the slides.          |

**Flip** (`waterfall-effect="flip"`)

| Attribute                       | Swiper option              | Values  | Default | Description                             |
| ------------------------------- | -------------------------- | ------- | ------- | --------------------------------------- |
| `waterfall-flip-limit-rotation` | `flipEffect.limitRotation` | boolean | `true`  | Limits the rotation of the edge slides. |
| `waterfall-flip-slide-shadows`  | `flipEffect.slideShadows`  | boolean | `true`  | Shows shadows on the slides.            |

**Cards** (`waterfall-effect="cards"`)

| Attribute                          | Swiper option                | Values       | Default | Description                    |
| ---------------------------------- | ---------------------------- | ------------ | ------- | ------------------------------ |
| `waterfall-cards-per-slide-offset` | `cardsEffect.perSlideOffset` | number (px)  | `8`     | Offset between stacked cards.  |
| `waterfall-cards-per-slide-rotate` | `cardsEffect.perSlideRotate` | number (deg) | `2`     | Rotation of each stacked card. |
| `waterfall-cards-rotate`           | `cardsEffect.rotate`         | boolean      | `true`  | Rotates the cards.             |
| `waterfall-cards-slide-shadows`    | `cardsEffect.slideShadows`   | boolean      | `true`  | Shows shadows on the cards.    |

### Free Mode

| Attribute                                     | Swiper option                    | Values  | Default | Description                                              |
| --------------------------------------------- | -------------------------------- | ------- | ------- | -------------------------------------------------------- |
| `waterfall-free-mode-enabled`                 | `freeMode.enabled`               | boolean | `false` | Slides move freely without snapping to positions.        |
| `waterfall-free-mode-sticky`                  | `freeMode.sticky`                | boolean | `false` | Snaps to the nearest slide once the momentum ends.       |
| `waterfall-free-mode-momentum`                | `freeMode.momentum`              | boolean | `true`  | Slides keep moving after release.                        |
| `waterfall-free-mode-momentum-ratio`          | `freeMode.momentumRatio`         | number  | `1`     | Higher values increase the momentum distance.            |
| `waterfall-free-mode-momentum-velocity-ratio` | `freeMode.momentumVelocityRatio` | number  | `1`     | Higher values increase the momentum speed.               |
| `waterfall-free-mode-momentum-bounce`         | `freeMode.momentumBounce`        | boolean | `true`  | Bounces at the edges after momentum.                     |
| `waterfall-free-mode-momentum-bounce-ratio`   | `freeMode.momentumBounceRatio`   | number  | `1`     | Higher values increase the bounce effect.                |
| `waterfall-free-mode-minimum-velocity`        | `freeMode.minimumVelocity`       | number  | `0.02`  | Minimum touchmove velocity required to trigger momentum. |

### Grid

| Attribute             | Swiper option | Values            | Default  | Description                                         |
| --------------------- | ------------- | ----------------- | -------- | --------------------------------------------------- |
| `waterfall-grid-rows` | `grid.rows`   | number            | `1`      | Number of slide rows. Works best without loop mode. |
| `waterfall-grid-fill` | `grid.fill`   | `row` \| `column` | `column` | Whether slides fill the grid by row or by column.   |

### Thumbs

Links a main slider to a separate thumbnail slider. Add the attributes to the **main** slider; the value of `waterfall-thumbs` is the name of the thumbnail Waterfall. Waterfall initializes the thumbnail slider first, so the order of the sliders on the page doesn't matter.

```html
<div waterfall="gallery" waterfall-thumbs="gallery-thumbs">…</div>
<div waterfall="gallery-thumbs" waterfall-slides-per-view="4" waterfall-watch-slides-progress="true">…</div>
```

| Attribute                                 | Swiper option                  | Values         | Default                     | Description                                                                                  |
| ----------------------------------------- | ------------------------------ | -------------- | --------------------------- | -------------------------------------------------------------------------------------------- |
| `waterfall-thumbs`                        | `thumbs.swiper`                | Waterfall name | —                           | Name of the thumbnail slider to link.                                                        |
| `waterfall-thumbs-auto-scroll-offset`     | `thumbs.autoScrollOffset`      | number         | `0`                         | Offset from the edge at which the thumbnail slider scrolls to keep the active thumb visible. |
| `waterfall-thumbs-multiple-active-thumbs` | `thumbs.multipleActiveThumbs`  | boolean        | `true`                      | With multiple slides per view, highlights every thumb that is visible in the main slider.    |
| `waterfall-slide-thumb-active-class`      | `thumbs.slideThumbActiveClass` | string         | `swiper-slide-thumb-active` | Class added to the active thumbnail.                                                         |
| `waterfall-thumbs-container-class`        | `thumbs.thumbsContainerClass`  | string         | `swiper-thumbs`             | Class added to the thumbnail slider container.                                               |

### Controller

Makes one slider drive another. The value of `waterfall-controller` is the name of the Waterfall to control. The controlled slider is initialized first. For two-way sync, add `waterfall-controller` to both sliders.

| Attribute                      | Swiper option        | Values                 | Default | Description                                                                      |
| ------------------------------ | -------------------- | ---------------------- | ------- | -------------------------------------------------------------------------------- |
| `waterfall-controller`         | `controller.control` | Waterfall name         | —       | Name of the slider to control.                                                   |
| `waterfall-controller-by`      | `controller.by`      | `slide` \| `container` | `slide` | Syncs by slide index (`slide`) or by proportional scroll position (`container`). |
| `waterfall-controller-inverse` | `controller.inverse` | boolean                | `false` | Moves the controlled slider in the opposite direction.                           |

### Touch & Swiping

| Attribute                                     | Swiper option                    | Values                   | Default                                                 | Description                                                                       |
| --------------------------------------------- | -------------------------------- | ------------------------ | ------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `waterfall-allow-touch-move`                  | `allowTouchMove`                 | boolean                  | `true`                                                  | Set to `false` to turn off swiping; only navigation and pagination remain.        |
| `waterfall-simulate-touch`                    | `simulateTouch`                  | boolean                  | `true`                                                  | Lets desktop users drag slides with the mouse.                                    |
| `waterfall-grab-cursor`                       | `grabCursor`                     | boolean                  | `false`                                                 | Shows a "grab" cursor on hover.                                                   |
| `waterfall-follow-finger`                     | `followFinger`                   | boolean                  | `true`                                                  | Slides follow the finger during a swipe. When `false`, they move only on release. |
| `waterfall-slide-to-clicked-slide`            | `slideToClickedSlide`            | boolean                  | `false`                                                 | Clicking a slide transitions to it.                                               |
| `waterfall-threshold`                         | `threshold`                      | number (px)              | `5`                                                     | Minimum drag distance before a swipe starts.                                      |
| `waterfall-touch-ratio`                       | `touchRatio`                     | number                   | `1`                                                     | Touch sensitivity multiplier.                                                     |
| `waterfall-touch-angle`                       | `touchAngle`                     | number (deg)             | `45`                                                    | Maximum angle at which a touch counts as a swipe.                                 |
| `waterfall-short-swipes`                      | `shortSwipes`                    | boolean                  | `true`                                                  | Allows quick, short swipes to change slides.                                      |
| `waterfall-long-swipes`                       | `longSwipes`                     | boolean                  | `true`                                                  | Allows long swipes to change slides.                                              |
| `waterfall-long-swipes-ms`                    | `longSwipesMs`                   | number (ms)              | `300`                                                   | Minimum duration for a long swipe.                                                |
| `waterfall-long-swipes-ratio`                 | `longSwipesRatio`                | number                   | `0.5`                                                   | Fraction of the slide width a long swipe must cover to change slides.             |
| `waterfall-resistance`                        | `resistance`                     | boolean                  | `true`                                                  | Adds rubber-band resistance at the edges.                                         |
| `waterfall-resistance-ratio`                  | `resistanceRatio`                | number                   | `0.85`                                                  | Strength of edge resistance.                                                      |
| `waterfall-edge-swipe-detection`              | `edgeSwipeDetection`             | boolean                  | `false`                                                 | Releases touches near the screen edge so the browser's back/forward swipe works.  |
| `waterfall-edge-swipe-threshold`              | `edgeSwipeThreshold`             | number (px)              | `20`                                                    | Width of the edge area used for edge swipe detection.                             |
| `waterfall-touch-events-target`               | `touchEventsTarget`              | `wrapper` \| `container` | `wrapper`                                               | Element that listens for touch events.                                            |
| `waterfall-touch-move-stop-propagation`       | `touchMoveStopPropagation`       | boolean                  | `false`                                                 | Stops `touchmove` events from propagating.                                        |
| `waterfall-touch-release-on-edges`            | `touchReleaseOnEdges`            | boolean                  | `false`                                                 | Releases touch events at the slider edges so the page can scroll.                 |
| `waterfall-touch-start-prevent-default`       | `touchStartPreventDefault`       | boolean                  | `true`                                                  | Prevents default on `pointerdown` (blocks text selection while dragging).         |
| `waterfall-touch-start-force-prevent-default` | `touchStartForcePreventDefault`  | boolean                  | `false`                                                 | Always prevents default on `touchstart`.                                          |
| `waterfall-prevent-clicks`                    | `preventClicks`                  | boolean                  | `true`                                                  | Prevents accidental link clicks while swiping.                                    |
| `waterfall-prevent-clicks-propagation`        | `preventClicksPropagation`       | boolean                  | `true`                                                  | Stops click events from propagating while swiping.                                |
| `waterfall-prevent-interaction-on-transition` | `preventInteractionOnTransition` | boolean                  | `false`                                                 | Blocks interaction while a transition is running.                                 |
| `waterfall-no-swiping`                        | `noSwiping`                      | boolean                  | `true`                                                  | Turns on swipe blocking for elements matching the no-swiping class or selector.   |
| `waterfall-no-swiping-class`                  | `noSwipingClass`                 | string                   | `swiper-no-swiping`                                     | Swiping is blocked on elements with this class.                                   |
| `waterfall-no-swiping-selector`               | `noSwipingSelector`              | CSS selector             | —                                                       | Swiping is blocked on elements matching this selector (overrides the class).      |
| `waterfall-focusable-elements`                | `focusableElements`              | CSS selector             | `input, select, option, textarea, button, video, label` | Elements that keep native focus behavior instead of starting a swipe.             |
| `waterfall-swipe-handler`                     | `swipeHandler`                   | CSS selector             | —                                                       | Restricts swiping to this handle element.                                         |

### Keyboard Control

| Attribute                             | Swiper option             | Values  | Default | Description                                                |
| ------------------------------------- | ------------------------- | ------- | ------- | ---------------------------------------------------------- |
| `waterfall-keyboard-enabled`          | `keyboard.enabled`        | boolean | `false` | Arrow keys control the slider.                             |
| `waterfall-keyboard-only-in-viewport` | `keyboard.onlyInViewport` | boolean | `true`  | Responds to keys only while the slider is in the viewport. |
| `waterfall-keyboard-page-up-down`     | `keyboard.pageUpDown`     | boolean | `true`  | Page Up / Page Down also navigate.                         |

### Mousewheel Control

| Attribute                              | Swiper option                  | Values                                   | Default                | Description                                                           |
| -------------------------------------- | ------------------------------ | ---------------------------------------- | ---------------------- | --------------------------------------------------------------------- |
| `waterfall-mouse-enabled`              | `mousewheel.enabled`           | boolean                                  | `false`                | The mouse wheel controls the slider.                                  |
| `waterfall-mouse-force-to-axis`        | `mousewheel.forceToAxis`       | boolean                                  | `false`                | Only responds to wheel movement along the slider's direction.         |
| `waterfall-mouse-invert`               | `mousewheel.invert`            | boolean                                  | `false`                | Inverts the scroll direction.                                         |
| `waterfall-mouse-release-on-edges`     | `mousewheel.releaseOnEdges`    | boolean                                  | `false`                | Lets the page scroll once the slider reaches its first or last slide. |
| `waterfall-mouse-sensitivity`          | `mousewheel.sensitivity`       | number                                   | `1`                    | Wheel sensitivity multiplier.                                         |
| `waterfall-mouse-threshold-delta`      | `mousewheel.thresholdDelta`    | number                                   | —                      | Minimum wheel delta needed to trigger a slide change.                 |
| `waterfall-mouse-threshold-time`       | `mousewheel.thresholdTime`     | number (ms)                              | —                      | Minimum time between wheel-triggered slide changes.                   |
| `waterfall-mouse-events-target`        | `mousewheel.eventsTarget`      | `container` \| `wrapper` \| CSS selector | `container`            | Element that listens for wheel events.                                |
| `waterfall-mouse-no-mouse-wheel-class` | `mousewheel.noMousewheelClass` | string                                   | `swiper-no-mousewheel` | The mouse wheel is ignored over elements with this class.             |

### Hash Navigation

Syncs the active slide with the URL hash. Add `data-hash="my-slide"` to each slide. Setting either attribute below to `true` turns hash navigation on.

| Attribute                      | Swiper option                 | Values  | Default | Description                                                            |
| ------------------------------ | ----------------------------- | ------- | ------- | ---------------------------------------------------------------------- |
| `waterfall-hash-watch-state`   | `hashNavigation.watchState`   | boolean | `false` | Changes slides when the hash changes (e.g. browser back/forward).      |
| `waterfall-hash-replace-state` | `hashNavigation.replaceState` | boolean | `false` | Replaces the history entry instead of adding a new one on each change. |

### History Navigation

Syncs the active slide with the URL path (e.g. `/slides/my-slide`). Add `data-history="my-slide"` to each slide. Setting any attribute below to a non-default value turns history navigation on.

| Attribute                         | Swiper option          | Values  | Default  | Description                                             |
| --------------------------------- | ---------------------- | ------- | -------- | ------------------------------------------------------- |
| `waterfall-history-key`           | `history.key`          | string  | `slides` | URL segment placed before the slide name.               |
| `waterfall-history-root`          | `history.root`         | string  | `""`     | Base URL path for history entries.                      |
| `waterfall-history-replace-state` | `history.replaceState` | boolean | `false`  | Replaces the history entry instead of adding a new one. |
| `waterfall-history-keep-query`    | `history.keepQuery`    | boolean | `false`  | Keeps the URL query parameters when the URL is updated. |

### Zoom

Double-tap or pinch to zoom. Wrap each slide's image in `<div class="swiper-zoom-container">`. Setting any attribute below to a non-default value turns zoom on (e.g. `waterfall-zoom-max-ratio="4"`).

| Attribute                               | Swiper option              | Values  | Default                 | Description                                |
| --------------------------------------- | -------------------------- | ------- | ----------------------- | ------------------------------------------ |
| `waterfall-zoom-max-ratio`              | `zoom.maxRatio`            | number  | `3`                     | Maximum zoom level.                        |
| `waterfall-zoom-min-ratio`              | `zoom.minRatio`            | number  | `1`                     | Minimum zoom level.                        |
| `waterfall-zoom-toggle`                 | `zoom.toggle`              | boolean | `true`                  | Double-tap toggles zoom.                   |
| `waterfall-zoom-limit-to-original-size` | `zoom.limitToOriginalSize` | boolean | `false`                 | Never zooms past the image's natural size. |
| `waterfall-zoom-pan-on-mouse-move`      | `zoom.panOnMouseMove`      | boolean | `false`                 | Pans the zoomed image by moving the mouse. |
| `waterfall-zoom-container-class`        | `zoom.containerClass`      | string  | `swiper-zoom-container` | Class of the zoom container element.       |
| `waterfall-zoomed-slide-class`          | `zoom.zoomedSlideClass`    | string  | `swiper-slide-zoomed`   | Class added to the zoomed slide.           |

### Parallax

| Attribute                    | Swiper option      | Values  | Default | Description                                       |
| ---------------------------- | ------------------ | ------- | ------- | ------------------------------------------------- |
| `waterfall-parallax-enabled` | `parallax.enabled` | boolean | `false` | Turns on parallax for elements inside the slider. |

With parallax on, add SwiperJS's native parallax attributes to elements **inside** the slides (or on a background element inside `.swiper`):

| Attribute                       | Values                        | Description                                                                  |
| ------------------------------- | ----------------------------- | ---------------------------------------------------------------------------- |
| `data-swiper-parallax`          | px or % (e.g. `-300`, `-50%`) | Horizontal offset for horizontal sliders, vertical offset for vertical ones. |
| `data-swiper-parallax-x`        | px or %                       | Horizontal offset.                                                           |
| `data-swiper-parallax-y`        | px or %                       | Vertical offset.                                                             |
| `data-swiper-parallax-scale`    | number                        | Scale while the slide is out of view.                                        |
| `data-swiper-parallax-opacity`  | number (0–1)                  | Opacity while the slide is out of view.                                      |
| `data-swiper-parallax-duration` | number (ms)                   | Custom transition duration for this element.                                 |

### Lazy Loading

Add `loading="lazy"` to slide images (Webflow does this by default). Swiper can preload images in neighboring slides.

| Attribute                          | Swiper option         | Values | Default                 | Description                                                                      |
| ---------------------------------- | --------------------- | ------ | ----------------------- | -------------------------------------------------------------------------------- |
| `waterfall-lazy-preload-prev-next` | `lazyPreloadPrevNext` | number | `0`                     | Number of slides before and after the active slide whose lazy images load early. |
| `waterfall-lazy-preloader-class`   | `lazyPreloaderClass`  | string | `swiper-lazy-preloader` | Class of the preloader element that is removed once the image loads.             |

### Accessibility (a11y)

Accessibility is **on by default**. Message attributes support the `{{index}}` and `{{slidesLength}}` placeholders.

| Attribute                                           | Swiper option                          | Values  | Default                        | Description                                                            |
| --------------------------------------------------- | -------------------------------------- | ------- | ------------------------------ | ---------------------------------------------------------------------- |
| `waterfall-a11y-enabled`                            | `a11y.enabled`                         | boolean | `true`                         | Turns accessibility features on or off.                                |
| `waterfall-a11y-prev-slide-message`                 | `a11y.prevSlideMessage`                | string  | `Previous slide`               | Label for the previous button.                                         |
| `waterfall-a11y-next-slide-message`                 | `a11y.nextSlideMessage`                | string  | `Next slide`                   | Label for the next button.                                             |
| `waterfall-a11y-first-slide-message`                | `a11y.firstSlideMessage`               | string  | `This is the first slide`      | Announced on the first slide.                                          |
| `waterfall-a11y-last-slide-message`                 | `a11y.lastSlideMessage`                | string  | `This is the last slide`       | Announced on the last slide.                                           |
| `waterfall-a11y-pagination-bullet-message`          | `a11y.paginationBulletMessage`         | string  | `Go to slide {{index}}`        | Label for each pagination bullet.                                      |
| `waterfall-a11y-slide-label-message`                | `a11y.slideLabelMessage`               | string  | `{{index}} / {{slidesLength}}` | `aria-label` for each slide.                                           |
| `waterfall-a11y-container-message`                  | `a11y.containerMessage`                | string  | —                              | `aria-label` for the slider container.                                 |
| `waterfall-a11y-container-role`                     | `a11y.containerRole`                   | string  | —                              | `role` for the slider container.                                       |
| `waterfall-a11y-container-role-description-message` | `a11y.containerRoleDescriptionMessage` | string  | —                              | `aria-roledescription` for the container (e.g. `carousel`).            |
| `waterfall-a11y-item-role-description-message`      | `a11y.itemRoleDescriptionMessage`      | string  | —                              | `aria-roledescription` for each slide (e.g. `slide`).                  |
| `waterfall-a11y-slide-role`                         | `a11y.slideRole`                       | string  | `group`                        | `role` for each slide.                                                 |
| `waterfall-a11y-id`                                 | `a11y.id`                              | string  | _(random)_                     | ID for the wrapper, used by `aria-controls` on the navigation buttons. |
| `waterfall-a11y-notification-class`                 | `a11y.notificationClass`               | string  | `swiper-notification`          | Class of the live-region element used for announcements.               |
| `waterfall-a11y-scroll-on-focus`                    | `a11y.scrollOnFocus`                   | boolean | `true`                         | Scrolls to a slide when it receives keyboard focus.                    |

### Observer

| Attribute                           | Swiper option          | Values  | Default | Description                                                                                          |
| ----------------------------------- | ---------------------- | ------- | ------- | ---------------------------------------------------------------------------------------------------- |
| `waterfall-observer`                | `observer`             | boolean | `false` | Re-initializes the slider when its style or slides change. Useful for sliders inside tabs or modals. |
| `waterfall-observe-parents`         | `observeParents`       | boolean | `false` | Also watches parent elements for changes.                                                            |
| `waterfall-observe-slide-children`  | `observeSlideChildren` | boolean | `false` | Also watches for changes inside slides.                                                              |
| `waterfall-resize-observer`         | `resizeObserver`       | boolean | `true`  | Uses ResizeObserver to detect container size changes.                                                |
| `waterfall-update-on-window-resize` | `updateOnWindowResize` | boolean | `true`  | Recalculates the layout when the window is resized.                                                  |
| `waterfall-watch-overflow`          | `watchOverflow`        | boolean | `true`  | Disables the slider and hides navigation when there aren't enough slides to scroll.                  |
| `waterfall-watch-slides-progress`   | `watchSlidesProgress`  | boolean | `false` | Tracks each slide's progress and adds visibility classes. Required on thumbnail sliders.             |

### CSS Classes

Override the classes Swiper uses. Leave these at their defaults unless your markup uses different class names.

| Attribute                             | Swiper option            | Default                      |
| ------------------------------------- | ------------------------ | ---------------------------- |
| `waterfall-container-modifier-class`  | `containerModifierClass` | `swiper-`                    |
| `waterfall-wrapper-class`             | `wrapperClass`           | `swiper-wrapper`             |
| `waterfall-slide-class`               | `slideClass`             | `swiper-slide`               |
| `waterfall-slide-active-class`        | `slideActiveClass`       | `swiper-slide-active`        |
| `waterfall-slide-next-class`          | `slideNextClass`         | `swiper-slide-next`          |
| `waterfall-slide-prev-class`          | `slidePrevClass`         | `swiper-slide-prev`          |
| `waterfall-slide-visible-class`       | `slideVisibleClass`      | `swiper-slide-visible`       |
| `waterfall-slide-fully-visible-class` | `slideFullyVisibleClass` | `swiper-slide-fully-visible` |
| `waterfall-slide-blank-class`         | `slideBlankClass`        | `swiper-slide-blank`         |

### Advanced

Rarely needed. Some of these can break other features, so change them only if you know you need to.

| Attribute                              | Swiper option             | Values  | Default            | Description                                                                                             |
| -------------------------------------- | ------------------------- | ------- | ------------------ | ------------------------------------------------------------------------------------------------------- |
| `waterfall-enabled`                    | `enabled`                 | boolean | `true`             | Set to `false` to create the slider in a disabled state.                                                |
| `waterfall-init`                       | `init`                    | boolean | `true`             | Set to `false` to skip automatic initialization; call `swiper.init()` yourself.                         |
| `waterfall-css-mode`                   | `cssMode`                 | boolean | `false`            | Uses native CSS scroll-snap. Many features (effects, loop, some touch options) don't work in CSS mode.  |
| `waterfall-round-lengths`              | `roundLengths`            | boolean | `false`            | Rounds slide widths and heights to whole pixels to avoid blurry text.                                   |
| `waterfall-max-backface-hidden-slides` | `maxBackfaceHiddenSlides` | number  | `10`               | Above this slide count, `backface-visibility: hidden` is not applied (a Safari performance workaround). |
| `waterfall-passive-listeners`          | `passiveListeners`        | boolean | `true`             | Uses passive event listeners where possible.                                                            |
| `waterfall-run-callbacks-on-init`      | `runCallbacksOnInit`      | boolean | `true`             | Fires transition callbacks on initialization.                                                           |
| `waterfall-unique-nav-elements`        | `uniqueNavElements`       | boolean | `true`             | Looks for navigation elements only inside the slider.                                                   |
| `waterfall-set-wrapper-size`           | `setWrapperSize`          | boolean | `false`            | Sets the wrapper's width/height explicitly (for old browsers without flexbox).                          |
| `waterfall-create-elements`            | `createElements`          | boolean | `false`            | Auto-creates navigation/pagination/scrollbar elements. Prefer building them in Webflow instead.         |
| `waterfall-events-prefix`              | `eventsPrefix`            | string  | `swiper`           | Prefix for DOM events emitted by the slider.                                                            |
| `waterfall-swiper-element-node-name`   | `swiperElementNodeName`   | string  | `SWIPER-CONTAINER` | Node name used to detect Swiper Element (web component) containers.                                     |
| `waterfall-url`                        | `url`                     | string  | —                  | Page URL for server-side rendering with history navigation.                                             |
| `waterfall-user-agent`                 | `userAgent`               | string  | —                  | User agent for server-side rendering.                                                                   |

### Callbacks

| Attribute                         | Values               | Description                                               |
| --------------------------------- | -------------------- | --------------------------------------------------------- |
| `waterfall-callback-slide-change` | Global function name | Calls `window[name]` every time the active slide changes. |

The function receives a single object:

```html
<div waterfall="hero" waterfall-callback-slide-change="onHeroChange">…</div>

<script>
  window.onHeroChange = ({ swiper, activeIndex, previousIndex, activeSlide, previousSlide }) => {
    console.log(`Moved from slide ${previousIndex} to ${activeIndex}`, activeSlide);
  };
</script>
```

TypeScript users can import the parameter type: `import type { SlideChangeCallbackParams } from "well-waterfall";`

### Slide Manipulation

Moves elements from elsewhere on the page into a Waterfall when the page loads, for example to inject a CTA card or content from a second CMS list. Put the attribute on the element to insert; its value is the target Waterfall's name. The element is cloned into the slider (with the `swiper-slide` class added if missing) and the original is removed. If the original was inside a Webflow Collection List (`.w-dyn-list`), that list is removed too.

| Attribute                 | Values         | Description                                                                                                |
| ------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------- |
| `waterfall-append-slide`  | Waterfall name | Adds this element as the last slide.                                                                       |
| `waterfall-prepend-slide` | Waterfall name | Adds this element as the first slide.                                                                      |
| `waterfall-add-slide`     | Waterfall name | Inserts this element at the position given by `waterfall-add-index`.                                       |
| `waterfall-add-index`     | number         | Position for `waterfall-add-slide` (defaults to `1`).                                                      |
| `waterfall-remove-slide`  | Waterfall name | Removes the slide at `waterfall-remove-index` from the target slider. This element itself is also removed. |
| `waterfall-remove-index`  | number         | Index of the slide to remove.                                                                              |

```html
<div waterfall-append-slide="SWIPER_NAME" class="cta-card">Contact us</div>
```

## Element Reference

Elements are identified with the `waterfall-el` attribute and must be placed **inside** the `[waterfall]` wrapper, so each slider finds its own controls.

| `waterfall-el` value     | Purpose                                                                                   |
| ------------------------ | ----------------------------------------------------------------------------------------- |
| `navigation-next`        | Next slide button. Enables navigation.                                                    |
| `navigation-prev`        | Previous slide button. Enables navigation.                                                |
| `pagination`             | Pagination container. Enables pagination.                                                 |
| `pagination-bullet`      | Optional bullet template. Its tag name and classes are applied to every generated bullet. |
| `scrollbar`              | Scrollbar track. Enables the scrollbar.                                                   |
| `scrollbar-drag`         | Scrollbar handle, placed inside `scrollbar`. Its classes are applied to the drag handle.  |
| `slide-count`            | Placed inside a slide; its text is replaced with that slide's 1-based number.             |
| `autoplay-control`       | Play/pause button. See [Autoplay Control Button](#autoplay-control-button).               |
| `autoplay-control-play`  | Icon shown while autoplay is paused.                                                      |
| `autoplay-control-pause` | Icon shown while autoplay is playing.                                                     |

## JavaScript API

Every initialized Waterfall is added to `window.waterfalls`, giving you full access to the underlying [Swiper instance](https://swiperjs.com/swiper-api#methods-and-properties):

```js
// window.waterfalls: Array<{ name: string; swiper: Swiper }>
const hero = window.waterfalls.find((w) => w.name === "hero");
hero.swiper.slideNext();
hero.swiper.on("reachEnd", () => console.log("Reached the end"));
```

When installed from npm, the package also exports all attribute and element name constants (e.g. `ATTR_SLIDES_PER_VIEW`, `EL_PAGINATION`).

## Not Supported

- Creative Effect
- Virtual Slides
- Arbitrary Swiper event handlers via attributes (use `waterfall-callback-slide-change` or the [JavaScript API](#javascript-api))
- `slidesPerView: auto` at responsive breakpoints

## Development

```bash
npm install
npm run build
```

## Built With

- [SwiperJS <!-- swiper-version -->14.3.0<!-- /swiper-version -->](https://github.com/nolimits4web/swiper)
- TypeScript
- Vite

## Authors

- **Kevin Gerstner** - [kevingerstner](https://github.com/kevingerstner)

## License

ISC © Kevin Gerstner
