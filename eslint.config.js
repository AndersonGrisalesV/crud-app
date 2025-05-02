import { defineConfig } from "eslint-define-config";

export default defineConfig({
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    globals: {
      node: "readonly",
      browser: "readonly",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier", // If you want to integrate Prettier with ESLint
  ],
  plugins: ["react"],
  rules: {
    "react/prop-types": "off", // Example rule modification
  },
});
