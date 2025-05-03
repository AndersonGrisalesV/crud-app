import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    parser: "@babel/eslint-parser", // Use Babel parser to handle JSX syntax
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module", // Set to module to support ES modules
      ecmaFeatures: {
        jsx: true, // Enable JSX parsing
      },
    },
    plugins: ["react"], // React plugin for JSX-specific rules
    extends: ["eslint:recommended", "plugin:react/recommended"], // Enable recommended ESLint and React rules
    rules: {
      "react/prop-types": "off", // Disable prop-types rule (optional, based on your preference)
    },
    files: ["src/**/*.js"], // Apply this config to all JavaScript files in the src directory
  },
]);
