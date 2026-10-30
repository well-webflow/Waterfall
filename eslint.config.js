import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettierRecommended from "eslint-plugin-prettier/recommended";

export default tseslint.config(
  { ignores: ["dist/**"] },
  // Library source: runs in the browser, APP_VERSION is injected by Vite.
  {
    files: ["src/**/*.ts"],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      globals: { ...globals.browser, APP_VERSION: "readonly" },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
    },
  },
  // Build tooling: runs in Node.
  {
    files: ["vite.config.ts", "scripts/**/*.js"],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      globals: globals.node,
    },
  },
  prettierRecommended,
);
