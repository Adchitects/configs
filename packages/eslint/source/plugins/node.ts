import { defineConfig } from "eslint-define-config";

// https://github.com/mysticatea/eslint-plugin-node
const config = defineConfig({
	extends: ["plugin:node/recommended-script"],
	rules: {
		/**
		 * RATIONALE:
		 * Allow `plugin-import` to handle them
		 */
		"node/no-extraneous-import": ["off"],
		"node/no-unpublished-import": ["off"],
		"node/no-unpublished-require": ["off"],
		"node/no-missing-import": ["off"],

		// FIXME: TypeScript might have features not supported in a specific Node.js version.
		// @see https://github.com/mysticatea/eslint-plugin-node/issues/250
		"node/no-unsupported-features/es-syntax": [
			"off",
			// "error",
			// { ignores: ["modules"] },
		],
	},
	settings: {
		node: {
			// eslint-disable-next-line unicorn/prefer-module
			resolvePaths: [__dirname],
			tryExtensions: [".cjs", ".js", ".mjs", ".ts"],
		},
	},
});

export default config;
