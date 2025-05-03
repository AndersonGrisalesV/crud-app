import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    parser: "@babel/eslint-parser", // Use Babel ESLint parser
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true, // Enable JSX syntax
      },
    },
    plugins: ["react"], // React plugin for JSX
    extends: ["eslint:recommended", "plugin:react/recommended"],
    rules: {
      "react/prop-types": "off", // Disable prop-types rule if not needed
    },
    files: ["src/**/*.js"], // Apply to JavaScript files in src
  },
]);
