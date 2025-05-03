import { defineConfig } from "eslint-define-config";

export default defineConfig({
  overrides: [
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
  ],
});
