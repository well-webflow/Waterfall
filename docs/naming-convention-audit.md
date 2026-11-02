# Naming Convention Audit

Mechanical check of whether attribute names can be derived from Swiper parameter names. Re-run after the 1.5 renames.

## Result

**The convention holds with no exceptions.**

> `waterfall-` + the Swiper parameter in kebab-case. Grouped parameters keep their group name.

|                                           | Before 1.5 | After 1.5 |
| ----------------------------------------- | ---------- | --------- |
| Derivable from the convention             | 161        | **200**   |
| Deviating                                 | 39         | **0**     |
| No single Swiper parameter to derive from | 39         | 40        |
| Total documented rows                     | 240        | 240       |

The 39 deviations were removed by the renames in [migration-1.5.md](migration-1.5.md), which also lists what each one was. Seven ad-hoc sub-rules (`Effect` dropped from effect groups, `mousewheel` shortened to `mouse`, the `autoplay.` prefix dropped, `hashNavigation` shortened to `hash`, group prefixes dropped for lone members, group-name-only enablers, and a de-duplicated group name) are now a single rule.

## What the convention still cannot cover

40 attributes have no single Swiper parameter behind them, so they must stay documented explicitly:

| Group                  | Attributes                                                                       |
| ---------------------- | -------------------------------------------------------------------------------- |
| Core                   | `waterfall`, `waterfall-debug-mode`                                              |
| Responsive breakpoints | 6 breakpoint suffixes, 4 `-{breakpoint}` patterns, `waterfall-breakpoints-base`  |
| Playback               | `waterfall-playback-mode` (maps to Swiper's `loop` **and** `rewind`)             |
| Autoplay               | `waterfall-smooth-autoplay`                                                      |
| Autoplay control       | `waterfall-autoplay-control-enabled`, `waterfall-autoplay-control-default-state` |
| Parallax               | 6 native `data-swiper-parallax*` attributes                                      |
| Callbacks              | `waterfall-callback-slide-change`                                                |
| Slide manipulation     | 6 attributes                                                                     |
| Elements               | 10 `waterfall-el` values                                                         |

## Keeping it true

`npm run reference` regenerates the README tables and audits them against the constants in `src/lib`. It reports any attribute a module reads but the docs do not describe, and any documented attribute with no constant behind it. `npm run reference:check` is the non-writing form for CI.

The convention check itself is not yet part of that script — it was run ad hoc for this audit. Wiring it in would make a future deviation fail the build rather than wait for someone to notice.
