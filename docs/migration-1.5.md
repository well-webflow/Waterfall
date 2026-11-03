# Migrating to Waterfall 1.5

1.5 renames **39 attributes** so that one rule describes every attribute derived from a Swiper parameter:

> **`waterfall-` + the Swiper parameter in kebab-case.** Grouped parameters always keep their group name.

There are no exceptions and no sub-rules. If you know the Swiper parameter, you know the attribute.

**These are breaking changes with no backwards compatibility.** An old attribute name is not recognised and is silently ignored, so a slider using one keeps working with that setting at its default. Search your project for `waterfall-` and compare against the tables below.

Attributes with no Swiper equivalent are **unchanged**: the breakpoint suffixes, `waterfall-playback-mode`, `waterfall-smooth-autoplay`, the autoplay-control attributes, slide manipulation, callbacks, `data-swiper-parallax*`, and every `waterfall-el` value.

## Attribute renames

### Effect groups keep `Effect` (16)

| Old attribute                       | New attribute                              | Swiper parameter               |
| ----------------------------------- | ------------------------------------------ | ------------------------------ |
| `waterfall-cards-per-slide-offset`  | `waterfall-cards-effect-per-slide-offset`  | `cardsEffect.perSlideOffset`   |
| `waterfall-cards-per-slide-rotate`  | `waterfall-cards-effect-per-slide-rotate`  | `cardsEffect.perSlideRotate`   |
| `waterfall-cards-rotate`            | `waterfall-cards-effect-rotate`            | `cardsEffect.rotate`           |
| `waterfall-cards-slide-shadows`     | `waterfall-cards-effect-slide-shadows`     | `cardsEffect.slideShadows`     |
| `waterfall-coverflow-depth`         | `waterfall-coverflow-effect-depth`         | `coverflowEffect.depth`        |
| `waterfall-coverflow-modifier`      | `waterfall-coverflow-effect-modifier`      | `coverflowEffect.modifier`     |
| `waterfall-coverflow-rotate`        | `waterfall-coverflow-effect-rotate`        | `coverflowEffect.rotate`       |
| `waterfall-coverflow-scale`         | `waterfall-coverflow-effect-scale`         | `coverflowEffect.scale`        |
| `waterfall-coverflow-slide-shadows` | `waterfall-coverflow-effect-slide-shadows` | `coverflowEffect.slideShadows` |
| `waterfall-coverflow-stretch`       | `waterfall-coverflow-effect-stretch`       | `coverflowEffect.stretch`      |
| `waterfall-cube-shadow`             | `waterfall-cube-effect-shadow`             | `cubeEffect.shadow`            |
| `waterfall-cube-shadow-offset`      | `waterfall-cube-effect-shadow-offset`      | `cubeEffect.shadowOffset`      |
| `waterfall-cube-shadow-scale`       | `waterfall-cube-effect-shadow-scale`       | `cubeEffect.shadowScale`       |
| `waterfall-cube-slide-shadows`      | `waterfall-cube-effect-slide-shadows`      | `cubeEffect.slideShadows`      |
| `waterfall-flip-limit-rotation`     | `waterfall-flip-effect-limit-rotation`     | `flipEffect.limitRotation`     |
| `waterfall-flip-slide-shadows`      | `waterfall-flip-effect-slide-shadows`      | `flipEffect.slideShadows`      |

### `mousewheel` is no longer shortened to `mouse` (9)

| Old attribute                          | New attribute                              | Swiper parameter               |
| -------------------------------------- | ------------------------------------------ | ------------------------------ |
| `waterfall-mouse-enabled`              | `waterfall-mousewheel-enabled`             | `mousewheel.enabled`           |
| `waterfall-mouse-events-target`        | `waterfall-mousewheel-events-target`       | `mousewheel.eventsTarget`      |
| `waterfall-mouse-force-to-axis`        | `waterfall-mousewheel-force-to-axis`       | `mousewheel.forceToAxis`       |
| `waterfall-mouse-invert`               | `waterfall-mousewheel-invert`              | `mousewheel.invert`            |
| `waterfall-mouse-no-mouse-wheel-class` | `waterfall-mousewheel-no-mousewheel-class` | `mousewheel.noMousewheelClass` |
| `waterfall-mouse-release-on-edges`     | `waterfall-mousewheel-release-on-edges`    | `mousewheel.releaseOnEdges`    |
| `waterfall-mouse-sensitivity`          | `waterfall-mousewheel-sensitivity`         | `mousewheel.sensitivity`       |
| `waterfall-mouse-threshold-delta`      | `waterfall-mousewheel-threshold-delta`     | `mousewheel.thresholdDelta`    |
| `waterfall-mouse-threshold-time`       | `waterfall-mousewheel-threshold-time`      | `mousewheel.thresholdTime`     |

### `autoplay.` options carry the group prefix (5)

| Old attribute                      | New attribute                               | Swiper parameter                |
| ---------------------------------- | ------------------------------------------- | ------------------------------- |
| `waterfall-delay`                  | `waterfall-autoplay-delay`                  | `autoplay.delay`                |
| `waterfall-disable-on-interaction` | `waterfall-autoplay-disable-on-interaction` | `autoplay.disableOnInteraction` |
| `waterfall-pause-on-mouse-enter`   | `waterfall-autoplay-pause-on-mouse-enter`   | `autoplay.pauseOnMouseEnter`    |
| `waterfall-reverse-direction`      | `waterfall-autoplay-reverse-direction`      | `autoplay.reverseDirection`     |
| `waterfall-stop-on-last-slide`     | `waterfall-autoplay-stop-on-last-slide`     | `autoplay.stopOnLastSlide`      |

### `hashNavigation` is no longer shortened to `hash` (2)

| Old attribute                  | New attribute                             | Swiper parameter              |
| ------------------------------ | ----------------------------------------- | ----------------------------- |
| `waterfall-hash-replace-state` | `waterfall-hash-navigation-replace-state` | `hashNavigation.replaceState` |
| `waterfall-hash-watch-state`   | `waterfall-hash-navigation-watch-state`   | `hashNavigation.watchState`   |

### `thumbs.` and `zoom.` options carry the group prefix (5)

| Old attribute                        | New attribute                               | Swiper parameter               |
| ------------------------------------ | ------------------------------------------- | ------------------------------ |
| `waterfall-controller`               | `waterfall-controller-control`              | `controller.control`           |
| `waterfall-slide-thumb-active-class` | `waterfall-thumbs-slide-thumb-active-class` | `thumbs.slideThumbActiveClass` |
| `waterfall-thumbs`                   | `waterfall-thumbs-swiper`                   | `thumbs.swiper`                |
| `waterfall-thumbs-container-class`   | `waterfall-thumbs-thumbs-container-class`   | `thumbs.thumbsContainerClass`  |
| `waterfall-zoomed-slide-class`       | `waterfall-zoom-zoomed-slide-class`         | `zoom.zoomedSlideClass`        |

### Previously irregular (2)

| Old attribute                     | New attribute                | Swiper parameter |
| --------------------------------- | ---------------------------- | ---------------- |
| `waterfall-autoplay-mode`         | `waterfall-autoplay`         | `autoplay`       |
| `waterfall-data-one-way-movement` | `waterfall-one-way-movement` | `oneWayMovement` |

## Constant renames

The exported constants were renamed to match. If you import from `well-waterfall/attributes`, update these 36:

| Old constant                      | New constant                           |
| --------------------------------- | -------------------------------------- |
| `ATTR_CARDS_PER_SLIDE_OFFSET`     | `ATTR_CARDS_EFFECT_PER_SLIDE_OFFSET`   |
| `ATTR_CARDS_PER_SLIDE_ROTATE`     | `ATTR_CARDS_EFFECT_PER_SLIDE_ROTATE`   |
| `ATTR_CARDS_ROTATE`               | `ATTR_CARDS_EFFECT_ROTATE`             |
| `ATTR_CARDS_SLIDE_SHADOWS`        | `ATTR_CARDS_EFFECT_SLIDE_SHADOWS`      |
| `ATTR_CONTROLLER`                 | `ATTR_CONTROLLER_CONTROL`              |
| `ATTR_COVERFLOW_DEPTH`            | `ATTR_COVERFLOW_EFFECT_DEPTH`          |
| `ATTR_COVERFLOW_MODIFIER`         | `ATTR_COVERFLOW_EFFECT_MODIFIER`       |
| `ATTR_COVERFLOW_ROTATE`           | `ATTR_COVERFLOW_EFFECT_ROTATE`         |
| `ATTR_COVERFLOW_SCALE`            | `ATTR_COVERFLOW_EFFECT_SCALE`          |
| `ATTR_COVERFLOW_SLIDE_SHADOWS`    | `ATTR_COVERFLOW_EFFECT_SLIDE_SHADOWS`  |
| `ATTR_COVERFLOW_STRETCH`          | `ATTR_COVERFLOW_EFFECT_STRETCH`        |
| `ATTR_CUBE_SHADOW`                | `ATTR_CUBE_EFFECT_SHADOW`              |
| `ATTR_CUBE_SHADOW_OFFSET`         | `ATTR_CUBE_EFFECT_SHADOW_OFFSET`       |
| `ATTR_CUBE_SHADOW_SCALE`          | `ATTR_CUBE_EFFECT_SHADOW_SCALE`        |
| `ATTR_CUBE_SLIDE_SHADOWS`         | `ATTR_CUBE_EFFECT_SLIDE_SHADOWS`       |
| `ATTR_DELAY`                      | `ATTR_AUTOPLAY_DELAY`                  |
| `ATTR_DISABLE_ON_INTERACTION`     | `ATTR_AUTOPLAY_DISABLE_ON_INTERACTION` |
| `ATTR_FLIP_LIMIT_ROTATION`        | `ATTR_FLIP_EFFECT_LIMIT_ROTATION`      |
| `ATTR_FLIP_SLIDE_SHADOWS`         | `ATTR_FLIP_EFFECT_SLIDE_SHADOWS`       |
| `ATTR_HASH_REPLACE_STATE`         | `ATTR_HASH_NAVIGATION_REPLACE_STATE`   |
| `ATTR_HASH_WATCH_STATE`           | `ATTR_HASH_NAVIGATION_WATCH_STATE`     |
| `ATTR_MOUSE_ENABLED`              | `ATTR_MOUSEWHEEL_ENABLED`              |
| `ATTR_MOUSE_EVENTS_TARGET`        | `ATTR_MOUSEWHEEL_EVENTS_TARGET`        |
| `ATTR_MOUSE_FORCE_TO_AXIS`        | `ATTR_MOUSEWHEEL_FORCE_TO_AXIS`        |
| `ATTR_MOUSE_INVERT`               | `ATTR_MOUSEWHEEL_INVERT`               |
| `ATTR_MOUSE_NO_MOUSE_WHEEL_CLASS` | `ATTR_MOUSEWHEEL_NO_MOUSEWHEEL_CLASS`  |
| `ATTR_MOUSE_RELEASE_ON_EDGES`     | `ATTR_MOUSEWHEEL_RELEASE_ON_EDGES`     |
| `ATTR_MOUSE_SENSITIVITY`          | `ATTR_MOUSEWHEEL_SENSITIVITY`          |
| `ATTR_MOUSE_THRESHOLD_DELTA`      | `ATTR_MOUSEWHEEL_THRESHOLD_DELTA`      |
| `ATTR_MOUSE_THRESHOLD_TIME`       | `ATTR_MOUSEWHEEL_THRESHOLD_TIME`       |
| `ATTR_PAUSE_ON_MOUSE_ENTER`       | `ATTR_AUTOPLAY_PAUSE_ON_MOUSE_ENTER`   |
| `ATTR_REVERSE_DIRECTION`          | `ATTR_AUTOPLAY_REVERSE_DIRECTION`      |
| `ATTR_STOP_ON_LAST_SLIDE`         | `ATTR_AUTOPLAY_STOP_ON_LAST_SLIDE`     |
| `ATTR_THUMBS`                     | `ATTR_THUMBS_SWIPER`                   |
| `ATTR_THUMBS_CONTAINER_CLASS`     | `ATTR_THUMBS_THUMBS_CONTAINER_CLASS`   |
| `ATTR_ZOOMED_SLIDE_CLASS`         | `ATTR_ZOOM_ZOOMED_SLIDE_CLASS`         |

`ATTR_AUTOPLAY` and `ATTR_ONE_WAY_MOVEMENT` keep their names; only their values changed.

## Behaviour and API changes beyond renaming

These are separate from the naming work above and each one changes what a slider does.

### Loop and rewind replace `waterfall-playback-mode`

`waterfall-playback-mode` is gone. Loop and rewind are now the two Swiper booleans they always were:

| Old                                | New                       |
| ---------------------------------- | ------------------------- |
| `waterfall-playback-mode="loop"`   | `waterfall-loop="true"`   |
| `waterfall-playback-mode="rewind"` | `waterfall-rewind="true"` |
| `waterfall-playback-mode="none"`   | omit both                 |

They remain mutually exclusive, as Swiper requires. Setting both to `true` uses loop, ignores rewind, and logs a warning. The Wellspring App still presents one mutually-exclusive choice of loop / rewind / none and writes whichever single attribute applies.

### `fade` no longer cross-fades by default

**This changes how every existing `fade` slider looks.** Swiper 14 deprecated `fadeEffect.crossFade` in favour of `fadeEffect.mode`, so Waterfall now exposes `waterfall-fade-effect-mode`:

| Value        | Behaviour                                                        |
| ------------ | ---------------------------------------------------------------- |
| `default`    | The outgoing slide fades over the incoming one. **New default.** |
| `cross-fade` | Both slides fade at once. **This is what 1.4 always did.**       |
| `out-in`     | The current slide fades out fully, then the next fades in.       |

1.4 hardcoded `crossFade: true` and ignored the `waterfall-effect-crossfade` attribute entirely. 1.5 follows the documented contract that an omitted attribute takes Swiper's default, which is `default`. **To keep a 1.4 slider looking the same, add `waterfall-fade-effect-mode="cross-fade"`.**

### Bullet and drag classes gain an attribute override

Donor elements still work exactly as in 1.4 — this is unchanged behaviour. Two attributes were added that override them:

| What                    | Donated by (default)                      | Overriding attribute                |
| ----------------------- | ----------------------------------------- | ----------------------------------- |
| Pagination bullet class | the `pagination-bullet` element's `class` | `waterfall-pagination-bullet-class` |
| Scrollbar drag class    | the `scrollbar-drag` element's `class`    | `waterfall-scrollbar-drag-class`    |

The `pagination-bullet` element still donates its **tag name** as well. The `scrollbar-drag` element is still read, so leave it in your markup if you style the handle in the Designer.

With neither the element nor the attribute present, Swiper's own defaults apply (`swiper-pagination-bullet`, `swiper-scrollbar-drag`). That fixes a latent 1.4 bug: 1.4 defaulted `scrollbar.dragClass` to an empty string when no `scrollbar-drag` element was present, leaving the handle unstyleable.

### Newly working attributes

These were exported in 1.4 but never read. They now work:

| Attribute                                | Swiper option                | Default                    | Notes                                                                             |
| ---------------------------------------- | ---------------------------- | -------------------------- | --------------------------------------------------------------------------------- |
| `waterfall-centered-slides-bounds`       | `centeredSlidesBounds`       | `false`                    | Requires `waterfall-centered-slides="true"`. Not for use with loop or pagination. |
| `waterfall-virtual-translate`            | `virtualTranslate`           | `false`                    | Runs the slider without translating the wrapper.                                  |
| `waterfall-autoplay-wait-for-transition` | `autoplay.waitForTransition` | `true`                     | An **autoplay** option, so it carries the autoplay prefix.                        |
| `waterfall-pagination-bullet-class`      | `pagination.bulletClass`     | _(donor element)_          | See above.                                                                        |
| `waterfall-scrollbar-drag-class`         | `scrollbar.dragClass`        | _(donor element)_          | See above.                                                                        |

### Removed

Nothing read these and nothing documented them, so removing them changes no behaviour — but they were exported, so imports of them will now fail:

| Removed                                                        | Why                                                         |
| -------------------------------------------------------------- | ----------------------------------------------------------- |
| `waterfall-playback-mode`                                      | Replaced by `waterfall-loop` / `waterfall-rewind`.          |
| `waterfall-effect-crossfade`                                   | Never read; replaced by `waterfall-fade-effect-mode`.       |
| `waterfall-a11y`                                               | Never read; `waterfall-a11y-enabled` is the real switch.    |
| `waterfall-zoom`, `waterfall-zoom-enabled`                     | Never read; zoom has no enable gate.                        |
| `waterfall-zoom-fade`                                          | Not a Swiper option at all.                                 |
| `waterfall-preload`, `waterfall-postload`, `waterfall-content` | Vestigial.                                                  |
| `waterfall-el="pagination-bullet-active"`                      | Never read; use `waterfall-pagination-bullet-active-class`. |
| `waterfall-el="waterfall-navigation"`                          | Vestigial; use `navigation-next` / `navigation-prev`.       |

The corresponding `ATTR_*` and `EL_*` constants are gone from `well-waterfall/attributes`.

## SwiperJS 14.4.0

1.5 bundles SwiperJS 14.4.0 (released 2026-10-30), up from 14.3.0. It is a bug-fix-only release with no breaking changes, no new features and no deprecations of its own. Fixes that matter here: loop navigation with few slides, `slideToLoop` in centered loops, thumbs scrolling direction when the main slider loops, scrollbar drag repositioning on resize, navigation button clipping, and deferred layout for hidden containers.

Zoom is unchanged in 14.4.0 — all seven zoom parameters Waterfall already exposed are current, so no zoom attribute changed.

## Checking your work

Add `waterfall-debug-mode="true"` to a slider and compare the logged config against what you expect. An attribute that no longer applies will show its Swiper default rather than your value.
