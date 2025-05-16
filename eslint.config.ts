import eslintPluginAstro from "eslint-plugin-astro";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import { defineConfig } from "eslint/config";

export default defineConfig([
    prettierRecommended,
    ...eslintPluginAstro.configs.recommended,
]);
