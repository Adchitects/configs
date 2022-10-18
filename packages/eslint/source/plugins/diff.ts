import { defineConfig } from "eslint-define-config";

// https://github.com/paleite/eslint-plugin-diff
const config = defineConfig({
	extends: ["plugin:diff/diff"],
});

export default config;
