import type { Config } from "stylelint";

import { getIgnorePatterns } from "@workspace/shared/configuration";

const config: Partial<Config> = {
	ignoreFiles: [
		// Unignore files starting with dot (usually configuration files)
		"!.*",
		// Ignore...
		"**/node_modules",
		"**/.git",
		"**/build",
		"**/dist",
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

	rules: {
		// https://stylelint.io/user-guide/rules/list

		/**
		 * @see https://stylelint.io/user-guide/rules/list/declaration-empty-line-before
		 * RATIONALE: Prevent conflicting with `order` plugin
		 */
		"declaration-empty-line-before": undefined,

		/**
		 * @see: https://stylelint.io/user-guide/rules/list/selector-pseudo-class-no-unknown
		 * RATIONALE: Allow using CSS Modules
		 */
		"selector-pseudo-class-no-unknown": [
			true,
			{ ignorePseudoClasses: ["local", "global"] },
		],

		/**
		 * @see: https://stylelint.io/user-guide/rules/list/declaration-block-no-redundant-longhand-properties
		 * RATIONALE: Longhand properties are more readable and descriptive.
		 * Not everyone is a CSS Ninja.
		 * For the argument related to "write less code"... it's minifiers job. No need to do it for them.
		 * Thus, for the reasons above, this rule is just being disabled, not enforced.
		 */
		"declaration-block-no-redundant-longhand-properties": undefined,
	},
};

export default config;