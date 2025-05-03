import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
  // Base configuration for all JavaScript files
  {
    files: ["**/*.js"],
    plugins: { js },
    extends: ["js/recommended"],
  },

  // Backend Node.js files
  {
    files: ["backend/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  // Jest test files
  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node,
      },
    },
  },

  // Browser files (if needed)
  {
    files: ["frontend/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
]);
