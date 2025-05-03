// eslint.config.js
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig([
  {
    files: ["*.js", "*.jsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        node: "readonly",
        browser: "readonly",
      },
    },
    rules: {
      "react/prop-types": "off", // Example rule modification
    },
    plugins: ["react"],
  },
]);
