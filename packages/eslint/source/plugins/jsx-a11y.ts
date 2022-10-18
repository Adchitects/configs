import { defineConfig } from "eslint-define-config";

// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
const config = defineConfig({
	extends: ["plugin:jsx-a11y/recommended"],
});

export default config;
