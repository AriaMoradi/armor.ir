// TODO: convert to .ts later, ref: https://github.com/prettier/prettier-vscode/issues/3623
/**
 * @typedef {import('prettier').Config} Config
 */

/** @type {Config} */
const config = {
  tabWidth: 2,
  printWidth: 80,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};

export default config;
