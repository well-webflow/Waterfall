// Post-build: keep version numbers in README.md in sync with package.json and the bundled SwiperJS.
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const readJson = (path) => JSON.parse(readFileSync(resolve(root, path), "utf8"));

const { name, version } = readJson("package.json");
const { version: swiperVersion } = readJson("node_modules/swiper/package.json");

const readmePath = resolve(root, "README.md");
const original = readFileSync(readmePath, "utf8");

const updated = original
  // Pinned CDN links, e.g. well-waterfall@1.2.9
  .replace(new RegExp(`${name}@\\d+\\.\\d+\\.\\d+`, "g"), `${name}@${version}`)
  // Values wrapped in marker comments, e.g. <!-- version -->1.3.0<!-- /version -->
  .replace(/(<!-- version -->)[^<]*(<!-- \/version -->)/g, `$1${version}$2`)
  .replace(/(<!-- swiper-version -->)[^<]*(<!-- \/swiper-version -->)/g, `$1${swiperVersion}$2`);

if (updated === original) {
  console.log(`README.md already up to date (v${version}, SwiperJS ${swiperVersion})`);
} else {
  writeFileSync(readmePath, updated);
  console.log(`README.md updated to v${version} (SwiperJS ${swiperVersion})`);
}
