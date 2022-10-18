import { defineConfig } from "eslint-define-config";

// https://github.com/dangreenisrael/eslint-plugin-jest-formatting
const config = defineConfig({
	extends: ["plugin:jest-formatting/recommended"],
});

export default config;
