import { defineConfig } from "eslint-define-config";

// https://github.com/ota-meshi/eslint-plugin-jsonc
const config = defineConfig({
	extends: ["plugin:jsonc/recommended-with-jsonc", "plugin:jsonc/prettier"],

	overrides: [
		{
			files: ["*.json", "*.json5", "*.jsonc"],
			parser: "jsonc-eslint-parser",
		},
	],
});

export default config;
