import { defineConfig } from "eslint-define-config";

// https://github.com/ota-meshi/eslint-plugin-yml
const config = defineConfig({
	extends: ["plugin:yml/recommended", "plugin:yml/prettier"],

	overrides: [
		{
			files: ["*.yml", "*.yaml"],
			parser: "yaml-eslint-parser",
		},
	],

	rules: {
		/**
		 * RATIONALE:
		 * Not helpful, for example in the case of setting the GitHub Actions workflow:
		 * ```yml
		 * on:
		 *       pull_request_target:
		 * ```
		 * which is valid pattern as there is no universal one for "all", such
		 * as "*"
		 */
		"yml/no-empty-mapping-value": ["off"],
	},
});

export default config;
