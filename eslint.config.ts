import prettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginAstro from "eslint-plugin-astro";
import { defineConfig } from "eslint/config";

export default defineConfig([
  ...eslintPluginAstro.configs.recommended,
  prettierRecommended,
]);
