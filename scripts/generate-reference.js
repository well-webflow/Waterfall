// Generates the reference tables in README.md from scripts/reference-data.json,
// and audits them against the attribute and element constants in src/lib.
//
//   node scripts/generate-reference.js          write README.md
//   node scripts/generate-reference.js --check  verify only, non-zero exit on drift
//
// Prose between the tables stays hand-written in README.md; only the regions
// between <!-- reference:KEY --> markers are generated.
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { dirname, resolve, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const check = process.argv.includes("--check");

const readmePath = resolve(root, "README.md");
const data = JSON.parse(readFileSync(resolve(root, "scripts/reference-data.json"), "utf8"));

/* ---------------------------------------------------------------- rendering */

// Markdown table in Prettier's style: every cell padded to its column width.
function renderTable({ header, rows }) {
  const widths = header.map((h, c) => Math.max(3, h.length, ...rows.map((r) => (r[c] ?? "").length)));
  const row = (cells) => `| ${cells.map((x, c) => (x ?? "").padEnd(widths[c])).join(" | ")} |`;
  return [row(header), `| ${widths.map((w) => "-".repeat(w)).join(" | ")} |`, ...rows.map(row)].join("\n");
}

const tables = new Map();
for (const section of data.sections) {
  for (const table of section.tables) tables.set(table.key, { ...table, section: section.heading });
}

/* ------------------------------------------------------------------ writing */

const original = readFileSync(readmePath, "utf8");
let updated = original;
const seen = new Set();

updated = updated.replace(
  /(<!-- reference:([^\s>]+) -->\n)[\s\S]*?(\n<!-- \/reference:\2 -->)/g,
  (match, open, key, close) => {
    const table = tables.get(key);
    if (!table) {
      console.error(`✗ README has a marker with no data: ${key}`);
      process.exitCode = 1;
      return match;
    }
    seen.add(key);
    return open + renderTable(table) + close;
  },
);

for (const key of tables.keys()) {
  if (!seen.has(key)) {
    console.error(`✗ reference-data.json has a table with no marker in README: ${key}`);
    process.exitCode = 1;
  }
}

/* ------------------------------------------------------------------- audit  */

const constantsOf = (file, prefix) =>
  Object.fromEntries(
    [
      ...readFileSync(resolve(root, file), "utf8").matchAll(
        new RegExp(`export const (${prefix}_[A-Z0-9_]+)\\s*=\\s*"([^"]+)"`, "g"),
      ),
    ].map((m) => [m[1], m[2]]),
  );

const attrs = constantsOf("src/lib/attributes.ts", "ATTR");
const els = constantsOf("src/lib/elements.ts", "EL");

// Which constants any module actually reads (src/lib is the declaration site, not a use).
const srcDir = resolve(root, "src");
const sources = [];
const walk = (dir) => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== "lib" && entry.name !== "types") walk(p);
    } else if (entry.name.endsWith(".ts")) {
      sources.push(readFileSync(p, "utf8"));
    }
  }
};
walk(srcDir);
const used = (name) => sources.some((s) => new RegExp(`\\b${name}\\b`).test(s));

// Every attribute or element the generated tables document.
const documented = new Set();
for (const t of tables.values()) {
  for (const r of t.rows) {
    const m = /^`([^`]+)`$/.exec(r[0] ?? "");
    if (m) documented.add(m[1].replace("-{breakpoint}", ""));
  }
}

// Attributes Swiper reads itself; no Waterfall module will reference them.
const external = new Set(data._externalAttributes?.names ?? []);

const report = { ok: 0, gap: [], dead: [], phantom: [] };
for (const [kind, map] of [
  ["attribute", attrs],
  ["element", els],
]) {
  for (const [name, value] of Object.entries(map)) {
    const isDocumented = documented.has(value);
    const isUsed = used(name) || external.has(value);
    if (isDocumented && isUsed) report.ok++;
    else if (!isDocumented && isUsed) report.gap.push(`${kind} ${value} (${name})`);
    else if (isDocumented && !isUsed) report.phantom.push(`${kind} ${value} (${name})`);
    else report.dead.push(`${kind} ${value} (${name})`);
  }
}

const allValues = new Set([...Object.values(attrs), ...Object.values(els)]);
const unknown = [...documented].filter((d) => !allValues.has(d) && !d.startsWith("-"));

/* ------------------------------------------------------------------ output  */

const rowCount = [...tables.values()].reduce((n, t) => n + t.rows.length, 0);
console.log(
  `${tables.size} tables, ${rowCount} rows, ${Object.keys(attrs).length} attribute + ${Object.keys(els).length} element constants`,
);
console.log(`  ✓ ${report.ok} documented and used`);

const warn = (label, list) => {
  if (!list.length) return;
  console.log(`  ! ${list.length} ${label}`);
  for (const x of list.sort()) console.log(`      ${x}`);
};
warn("documented but unread by any module", report.phantom);
warn("exported but neither documented nor read (dead)", report.dead);

if (unknown.length) {
  console.error(`  ✗ ${unknown.length} documented with no matching constant`);
  for (const x of unknown.sort()) console.error(`      ${x}`);
  process.exitCode = 1;
}
if (report.gap.length) {
  console.error(`  ✗ ${report.gap.length} read by a module but undocumented`);
  for (const x of report.gap.sort()) console.error(`      ${x}`);
  process.exitCode = 1;
}

if (updated === original) {
  console.log("README.md reference tables already up to date");
} else if (check) {
  console.error("✗ README.md reference tables are out of date — run `npm run reference`");
  process.exitCode = 1;
} else {
  writeFileSync(readmePath, updated);
  console.log("README.md reference tables regenerated");
}
