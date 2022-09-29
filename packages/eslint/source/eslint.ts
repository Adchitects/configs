import { defineConfig } from "eslint-define-config";

import { getIgnorePatterns } from "@workspace/shared/configuration";

const config = defineConfig({
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},

	ignorePatterns: [
		// Unignore files starting with dot (usually configuration files)
		"!.*",
		// Ignore...
		"**/node_modules",
		"**/.git",
		"**/build",
		"**/dist",
		"**/package-lock.json",
		"**/pnpm-lock.yaml",
		...getIgnorePatterns([
			{
				module: "husky",
				patterns: "**/.husky",
			},
			{
				module: "turbo",
				patterns: "**/.turbo",
			},
			{
				module: "vercel",
				patterns: "**/.vercel",
			},
		]),
	],

	extends: ["eslint:recommended"],

	rules: {
		/**
		 * RATIONALE:
		 * Adjust to adapted code format and stop screaming on lines
		 * that aren't too long yet.
		 */
		"max-len": [
			"warn",
			{
				code: 100,
				tabWidth: 4,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreUrls: true,
			},
		],

		/**
		 * RATIONALE:
		 * Remind (warn) about possible logs that aren't supposed to be there.
		 */
		"no-console": ["warn", { allow: ["debug"] }],

		/**
		 * RATIONALE:
		 * The functions should have name to quickly explain their purpose - for the code readability.
		 */
		"func-names": ["error", "as-needed"],
	},
});

export default config;
