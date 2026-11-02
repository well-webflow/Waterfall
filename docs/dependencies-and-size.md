# Dependencies and Size

Measured against **Waterfall v1.5.0** with **SwiperJS 14.4.0** bundled. Re-measure after any dependency bump — see [Re-measuring](#re-measuring) at the bottom.

## Dependencies

**Waterfall has zero runtime dependencies.**

```bash
$ npm ls --omit=dev --all
well-waterfall@1.5.0
`-- (empty)
```

Nothing is fetched at runtime and nothing needs to be installed alongside it. Two things that are usually dependencies are handled differently here:

|                     | How it's handled                                                                                                                                      |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **SwiperJS 14.4.0** | A `devDependency`, compiled **into** the bundle at build time. Not a peer dependency — you never install or load it yourself.                         |
| **Swiper's CSS**    | Injected by JavaScript at runtime (via `vite-plugin-css-injected-by-js`). There is **no stylesheet to link** — the bundle adds its own `<style>` tag. |

> **If you already load SwiperJS on your site, remove it.** Waterfall carries its own copy, and two versions of Swiper on one page will conflict.

### Build-time dependencies

These matter only if you clone the repo. They never reach your site.

| Purpose                             | Packages                                                                                                                                                                                |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Slider engine (bundled into output) | `swiper`                                                                                                                                                                                |
| Build                               | `vite`, `vite-plugin-dts`, `vite-plugin-css-injected-by-js`                                                                                                                             |
| Language                            | `typescript`, `@types/node`, `@types/jquery`                                                                                                                                            |
| Lint and format                     | `eslint`, `@eslint/js`, `typescript-eslint`, `@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin`, `eslint-plugin-prettier`, `eslint-config-prettier`, `prettier`, `globals` |

16 direct devDependencies, ~400 packages resolved, **137 MB** in `node_modules`.

---

## What the browser downloads

The CDN script tag serves the UMD build. This is the only number most people need:

| Build                                     | Raw      | Gzip        | Brotli      |
| ----------------------------------------- | -------- | ----------- | ----------- |
| **`well-waterfall.umd.js`** (CDN default) | 204.6 KB | **58.6 KB** | **50.9 KB** |
| `well-waterfall.es.js` (ESM, bundlers)    | 260.5 KB | 65.5 KB     | 56.0 KB     |
| `attributes.js` (names only, no runtime)  | 17.3 KB  | 4.5 KB      | 3.8 KB      |

Over a real connection you receive the **brotli** figure — about **51 KB** — because jsDelivr and Webflow both negotiate compression. Sourcemaps are published but are only fetched when DevTools is open with sourcemaps enabled.

That single file contains everything: the Swiper engine, Swiper's full CSS, and all of Waterfall's attribute handling. No second request, no stylesheet.

### Where the weight goes

| Part                           | Raw          | Gzip         |
| ------------------------------ | ------------ | ------------ |
| SwiperJS engine (minified)     | 154.8 KB     | 44.4 KB      |
| Swiper CSS (minified, inlined) | 14.6 KB      | 3.0 KB       |
| **Waterfall's own code**       | **~35.2 KB** | **~11.2 KB** |
| **Total**                      | **204.6 KB** | **58.6 KB**  |

**Waterfall costs about 11 KB gzipped over loading Swiper yourself.** For that you get all 235 attributes, element detection, slider linking, and the Webflow CMS fixes — and you drop the hand-written config script you'd otherwise maintain.

### Only need the attribute names?

Tools that generate or validate Waterfall markup can import just the constants, with no Swiper and no runtime:

```js
import { ATTR_WATERFALL, EL_NAVIGATION_NEXT, breakpointAttr } from "well-waterfall/attributes";
```

**4.5 KB gzipped**, and nothing touches the DOM.

---

## npm install size

|                      | Size         |
| -------------------- | ------------ |
| Tarball (downloaded) | **475.3 KB** |
| Unpacked (on disk)   | **2.06 MB**  |
| Files                | 38           |

The unpacked figure looks large relative to the bundle because **sourcemaps are ~1.49 MB of it — 72%**. The code your bundler actually processes is the 260 KB ESM build, and sourcemaps are never shipped to visitors.

The package publishes `dist` only; no source, tests, or config.

---

## Browser and platform support

|                   |                                                                                                 |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| Formats published | ESM (`import`), UMD (`<script>`)                                                                |
| Types             | Bundled (`dist/index.d.ts`) — no `@types/` package needed                                       |
| Browsers          | Whatever SwiperJS 14 supports: modern evergreen browsers. Swiper 14 dropped IE and legacy Edge. |
| Webflow           | Any plan. Script goes in Footer Code; no Site Plan feature is required.                         |

---

## Re-measuring

After a Swiper bump or a build change, regenerate every number on this page:

```bash
npm run build
```

Browser payload, per build:

```bash
for f in dist/well-waterfall.umd.js dist/well-waterfall.es.js dist/attributes.js; do
  printf "%-28s raw=%7s gzip=%7s brotli=%7s\n" "$(basename "$f")" \
    "$(wc -c < "$f")" "$(gzip -9 -c "$f" | wc -c)" "$(brotli -q 11 -c "$f" | wc -c)"
done
```

npm package size:

```bash
npm pack --dry-run
```

Confirm the zero-dependency claim still holds:

```bash
npm ls --omit=dev --all
```
