import { defineConfig } from "eslint-define-config";

// https://github.com/testing-library/eslint-plugin-jest-dom
const config = defineConfig({
	extends: ["plugin:jest-dom/recommended"],
});

export default config;
