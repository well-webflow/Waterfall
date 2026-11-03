# Waterfall Documentation — Outline

Proposed structure for Waterfall's user-facing documentation (v1.5.0, SwiperJS 14.4.0).

## Framing

**Audience, in priority order**

1. **Webflow designers** using the Wellspring App — no JavaScript, working in the Designer. Largest group; most of the docs should be written for them.
2. **Webflow designers adding attributes by hand** — comfortable with Custom Attributes, not with code.
3. **Developers** — npm install, `window.waterfalls`, callbacks, TypeScript.

**What already exists:** `README.md` is a complete _reference_ (235 attributes, every Swiper option mapped, element table, JS API). It is not a _learning path_ — there is no walkthrough, no recipes, no troubleshooting, and nothing Webflow-specific beyond two paragraphs.

**So the gap to fill is guides, not reference.** The outline below reuses the README tables as the reference layer and adds the task-oriented material around them.

---

## Part 1 — Start Here

### 1.1 What is Waterfall?

- One-paragraph pitch: SwiperJS sliders in Webflow, entirely with HTML attributes.
- What you get: free forever, no custom code, Swiper 14 bundled, works with CMS, becomes a Webflow component.
- What it is not: not a Webflow Interactions replacement, not a Swiper fork.
- Screenshot/GIF of a finished slider + the attribute panel that produced it.

### 1.2 Installation

- **With the Wellspring App** (recommended path — leads here).
- **Manually:** script tag in Footer Code, pinned version vs. latest.
- **npm** for developers.
- Already loading SwiperJS? Remove it — Waterfall bundles it.
- Confirming it works: the `🚿 Hello from Wellspring Waterfall (vX.Y.Z)` console line.
- **Dependencies and size** — zero runtime dependencies, ~51 KB over the wire. Drafted: [`dependencies-and-size.md`](dependencies-and-size.md).

### 1.3 Your First Slider (tutorial)

End-to-end build in the Designer, ~10 steps, with a screenshot per step:

1. Add the wrapper div, give it `waterfall="hero"`.
2. Add `.swiper` → `.swiper-wrapper` → `.swiper-slide` structure.
3. Add three slides with content.
4. Publish, confirm it swipes.
5. Set `waterfall-slides-per-view="3"` and `waterfall-space-between="24"`.
6. Add next/prev buttons with `waterfall-el`.
7. Add pagination.
8. Make it responsive with breakpoint attributes.
9. Turn it into a Webflow component.

### 1.4 Anatomy of a Waterfall

- Annotated diagram of the markup: wrapper → `.swiper` → `.swiper-wrapper` → `.swiper-slide`, with optional elements alongside.
- Why the extra `[waterfall]` wrapper exists (settings holder + scope boundary for controls).
- The name: unique per slider, used for linking (thumbs, controller) and targeting (slide manipulation).
- Initialization timing: `DOMContentLoaded`.

---

## Part 2 — Core Concepts

### 2.1 How Attributes Work

Promote the README section and expand it:

- Placement: on the `[waterfall]` wrapper unless stated otherwise.
- Naming convention: Swiper param → kebab-case → `waterfall-` prefix; grouped params include the group name (`freeMode.enabled` → `waterfall-free-mode-enabled`).
- Value types: `boolean` must be literal `true`/`false`; `number` has no units; `string` is trimmed.
- Defaults: omitting an attribute = the Swiper default.
- **New:** what happens with an invalid value (silently ignored) and how to notice.

### 2.2 Elements (`waterfall-el`)

- The scoping rule: elements must live inside their own `[waterfall]` wrapper.
- Table of the 10 documented element values (`src/lib/elements.ts` exports 12; two are unused — see the audit).
- Template elements explained — `pagination-bullet` and `scrollbar-drag` donate their tag and classes rather than being used directly. This is the most non-obvious concept in the library and deserves its own diagram.

### 2.3 Styling a Waterfall

**Not currently documented anywhere.** Needs to exist:

- Which Swiper CSS ships bundled and what it already does for you.
- Styling slides in Webflow vs. styling Swiper's generated elements.
- The state classes designers can target: `swiper-slide-active`, `-next`, `-prev`, `-visible`, `-fully-visible`.
- Overriding class names (`waterfall-slide-class` et al.) and when not to.
- Common layout traps: slide height, overflow/clipping, `space-between` vs. Webflow margins.

### 2.4 Debugging

- `waterfall-debug-mode="true"`: what it prints (generated config, elements found, linking).
- Reading the output to answer "why isn't this setting applying?"

---

## Part 3 — Feature Guides

One page per feature. Each page follows the same shape: **what it does → minimal example → attribute table (from README) → Webflow-specific notes → gotchas**. This is where the README's flat tables become usable.

### Layout and sizing

- **Slides per view and spacing** — including `auto` and its breakpoint limitation.
- **Direction** (horizontal/vertical) and the height requirement for vertical.
- **Centered slides, offsets, slides-per-group.**
- **Responsive breakpoints** — mapping Webflow's breakpoints to Waterfall's, mobile-first inheritance, the `slidesPerView: auto` caveat.
- **Grid** (multi-row).

### Motion and playback

- **Loop, rewind, speed.**
- **Autoplay** — delay, pause on interaction, disable on interaction.
- **Autoplay control button** — the play/pause element trio and icon swapping.
- **Effects** — fade, cube, coverflow, flip, cards; which ones conflict with loop/cssMode/multiple slides per view.
- **Free mode** — momentum, sticky, and when it replaces slide snapping.
- **Parallax.**

### Controls

- **Navigation buttons.**
- **Pagination** — bullets, dynamic bullets, fraction, progressbar, custom bullet template.
- **Scrollbar** — track, drag handle, draggable.
- **Slide count** (`slide-count` element).

### Linking sliders

- **Thumbs** — thumbnail gallery driving a main slider.
- **Controller** — two-way sync between sliders.
- How names connect them, and why linked sliders initialize second.

### Input

- **Touch and swiping** — resistance, threshold, `simulateTouch`, `touchStartPreventDefault` and its effect on links inside slides.
- **Keyboard.**
- **Mousewheel.**
- **Zoom.**

### URL and content

- **Hash navigation** and **history navigation** — the difference, and the Webflow publishing caveat.
- **Lazy loading** — how it interacts with Webflow's own image loading.
- **Slide manipulation** — `append`/`prepend`/`add`/`remove`, injecting a CTA card or a second CMS list. Explain the clone-and-remove behavior and the `.w-dyn-list` cleanup, which will surprise people.

### Accessibility

- What the a11y module does by default.
- The a11y attribute table (labels, messages).
- The Webflow CMS list ARIA role fix Waterfall applies automatically.
- Honest limits: autoplay and `prefers-reduced-motion`, focus order with loop.

### Advanced

- `enabled`, `init`, `cssMode`, `roundLengths`, `createElements`, the SSR options.
- Framed as "rarely needed, some of these break other features" — keep the README's warning tone.

---

## Part 4 — Webflow Workflows

The highest-value new material; nothing like it exists today.

### 4.1 CMS Collection Lists as sliders

- The three class assignments (Collection List Wrapper → `swiper`, Collection List → `swiper-wrapper`, Collection Item → `swiper-slide`).
- Item limits, empty states, nested collection lists.
- Combining a CMS list with manually added slides.

### 4.2 Turning a Waterfall into a component

- When to componentize, what to expose as a component property.
- Reusing one component with different names.

### 4.3 Multiple sliders on one page

- Naming discipline; why element scoping means controls never cross-talk.

### 4.4 Waterfall and Webflow Interactions

- What coexists, what fights (transforms on slides, display changes on the wrapper).

### 4.5 Waterfall inside tabs, modals, and accordions

- Hidden-on-load containers and the `observer` attributes as the fix.

---

## Part 5 — For Developers

### 5.1 JavaScript API

- `window.waterfalls` shape, finding a slider by name, calling Swiper methods, subscribing to Swiper events.
- Link out to the Swiper API rather than duplicating it.

### 5.2 Callbacks

- `waterfall-callback-slide-change` and the global-function pattern.
- The callback payload, and `SlideChangeCallbackParams` for TypeScript.

### 5.3 npm and the attributes subpath

- Importing the runtime vs. importing only names from `well-waterfall/attributes` (no Swiper, no runtime).
- Why the subpath exists: building your own tooling against the attribute names.

### 5.4 Types

- What ships in `dist/index.d.ts`, the `Waterfall` type, the `window` augmentation.

---

## Part 6 — Reference

Generated or copied from the README so there is exactly one source of truth.

### 6.1 Attribute reference

**Generated.** 35 tables / 240 rows live in `scripts/reference-data.json`; `npm run reference` renders them into the README between `<!-- reference:KEY -->` markers and audits them against `src/lib/attributes.ts`. Prose between tables stays hand-written. Any docs site should render from the same JSON rather than re-keying the tables.

### 6.2 Element reference

The `waterfall-el` table, generated from the same data file.

### 6.3 Not supported

Creative Effect, Virtual Slides, arbitrary event handlers via attributes, `slidesPerView: auto` at breakpoints — each with the recommended workaround.

### 6.4 Dependencies and size

Zero runtime dependencies, per-build payload table, where the bundle weight goes, npm install size, browser support, and the commands to re-measure after a Swiper bump. **Drafted:** [`dependencies-and-size.md`](dependencies-and-size.md).

### 6.5 Version history

- Current version and bundled Swiper version (already auto-synced by `scripts/sync-readme-version.js`).
- Changelog, and a note on pinning versions in production.

---

## Part 7 — Help

### 7.1 Troubleshooting

Symptom-first, since that is how people arrive:

- Nothing happens / no slider.
- Console line missing → script not loading.
- All slides stacked or full width.
- Buttons do nothing.
- Setting appears to be ignored (boolean typo, units on a number, attribute on the wrong element).
- Slider broken inside a tab or modal.
- Slider broken after a CMS item count change.
- Links inside slides not clickable.
- Two sliders controlling each other.

Each entry: symptom → cause → fix, with `waterfall-debug-mode` as the first diagnostic step.

### 7.2 FAQ

- Is it really free?
- Do I need the Wellspring App?
- Can I still use SwiperJS directly?
- Does it work outside Webflow?
- How do I upgrade?

### 7.3 Contributing

- Repo, `npm install` / `npm run build`, lint and typecheck scripts, license.

---

## Open questions

1. **Where do these docs live?** Options: the Webflow site already referenced in the console (`wellspring-dev.com/apps/waterfall`), a static docs site, or in-App panels. This changes page sizing and navigation depth.
2. **README's role after this.** Settled: `scripts/reference-data.json` is canonical and the README's tables are generated from it. A docs site should render from that same JSON. Guides stay hand-written.
3. **Live examples.** `demo.html` exists in the repo — worth turning into embeddable per-feature demos rather than writing static code blocks.
4. **Depth of the Wellspring App coverage.** The App has built-in documentation already; the docs should decide whether to duplicate, summarize, or link.
