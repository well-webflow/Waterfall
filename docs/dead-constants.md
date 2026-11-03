# Dead Constants — Resolved

All 17 dead constants found by `npm run reference` in 1.4.2 are now resolved. `npm run reference` reports **zero** dead constants: every exported attribute and element constant is both read by a module and documented.

| Constant                                                                      | Disposition                                                                                                                                                   |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ATTR_CENTERED_SLIDES_BOUNDS`                                                 | **Implemented** — wired in `modules/layout.ts`.                                                                                                               |
| `ATTR_VIRTUAL_TRANSLATE`                                                      | **Implemented** — wired in `modules/advanced.ts`.                                                                                                             |
| `ATTR_WAIT_FOR_TRANSITION`                                                    | **Implemented and renamed** to `ATTR_AUTOPLAY_WAIT_FOR_TRANSITION`; it is an autoplay option, so it took the autoplay prefix. Wired in `modules/playback.ts`. |
| `ATTR_PAGINATION_BULLET_CLASS`                                                | **Implemented** — overrides the `pagination-bullet` donor element as the source of `pagination.bulletClass`.                                                  |
| `ATTR_SCROLLBAR_DRAG_CLASS`                                                   | **Implemented** — overrides the `scrollbar-drag` donor element as the source of `scrollbar.dragClass`.                                                        |
| `ATTR_EFFECT_CROSSFADE`                                                       | **Replaced** by `ATTR_FADE_EFFECT_MODE`, since Swiper 14 deprecated `fadeEffect.crossFade` in favour of `fadeEffect.mode`.                                    |
| `ATTR_LOOP`                                                                   | **Repurposed** — value changed from `waterfall-loop-mode` to `waterfall-loop` and now read in `modules/playback.ts`.                                          |
| `ATTR_REWIND`                                                                 | **Repurposed** — now read in `modules/playback.ts`.                                                                                                           |
| `ATTR_A11Y`                                                                   | **Removed** — `ATTR_A11Y_ENABLED` is the real switch.                                                                                                         |
| `ATTR_ZOOM`, `ATTR_ZOOM_ENABLED`                                              | **Removed** — zoom has no enable gate; `zoomConfig` runs unconditionally.                                                                                     |
| `ATTR_ZOOM_FADE`                                                              | **Removed** — not a Swiper option.                                                                                                                            |
| `ATTR_WATERFALL_PRELOAD`, `ATTR_WATERFALL_POSTLOAD`, `ATTR_WATERFALL_CONTENT` | **Removed** — vestigial.                                                                                                                                      |
| `EL_PAGINATION_BULLET_ACTIVE`                                                 | **Removed** — use `waterfall-pagination-bullet-active-class`.                                                                                                 |
| `EL_NAVIGATION`                                                               | **Removed** — vestigial; `EL_NAVIGATION_NEXT` / `EL_NAVIGATION_PREV` are the real elements.                                                                   |

`EL_SCROLLBAR_DRAG` was never dead: it donates the drag handle's class, and still does. `waterfall-scrollbar-drag-class` overrides it rather than replacing it.

See [migration-1.5.md](migration-1.5.md) for what each change means for existing sites.

## Keeping it at zero

`npm run reference` fails the build (`reference:check`) if a module reads an attribute the docs do not describe, or if a documented attribute has no constant. It only warns about a constant that is neither read nor documented, so a new dead export is visible but not fatal.
