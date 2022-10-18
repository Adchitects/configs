import { defineConfig } from "eslint-define-config";

// https://github.com/ota-meshi/eslint-plugin-regexp
const config = defineConfig({
	extends: ["plugin:regexp/recommended"],
});

export default config;
