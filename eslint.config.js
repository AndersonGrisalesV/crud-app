// eslint.config.js
const { defineConfig } = require("eslint-define-config");
const reactPlugin = require("eslint-plugin-react");

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
    plugins: {
      react: reactPlugin,
    },
    rules: {
      "react/prop-types": "off", // Example rule modification
    },
  },
]);
