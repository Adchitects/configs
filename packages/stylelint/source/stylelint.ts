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
		"at-rule-no-unknown": null,
		"block-no-empty": null,
		"color-hex-case": null,
		"color-hex-length": null,
		"comment-empty-line-before": null,
		"comment-no-empty": null,
		"scss/at-rule-no-unknown": true,
		/**
		 * @see: https://stylelint.io/user-guide/rules/list/declaration-block-no-redundant-longhand-properties
		 * RATIONALE: Longhand properties are more readable and descriptive.
		 * Not everyone is a CSS Ninja.
		 * For the argument related to "write less code"... it's minifiers job. No need to do it for them.
		 * Thus, for the reasons above, this rule is just being disabled, not enforced.
		 */
		"declaration-block-no-redundant-longhand-properties": undefined,
		"declaration-block-semicolon-newline-after": null,
		"declaration-block-trailing-semicolon": "always",
		"declaration-colon-space-before": "never",
		"declaration-colon-space-after": "always",
		/**
		 * @see https://stylelint.io/user-guide/rules/list/declaration-empty-line-before
		 * RATIONALE: Prevent conflicting with `order` plugin
		 */
		"declaration-empty-line-before": undefined,
		"no-duplicate-selectors": null,
		"function-url-quotes": "always",
		"media-feature-colon-space-before": "never",
		"media-feature-colon-space-after": "always",
		"media-feature-parentheses-space-inside": "never",
		"media-feature-range-operator-space-before": "always",
		"media-feature-range-operator-space-after": "always",
		"no-descending-specificity": null,
		"no-eol-whitespace": null,
		"rule-empty-line-before": ["always", {
			"ignore": ["after-comment", "first-nested"]
		}],
		"selector-combinator-space-after": "always",
		/**
		 * @see: https://stylelint.io/user-guide/rules/list/selector-pseudo-class-no-unknown
		 * RATIONALE: Allow using CSS Modules
		 */
		"selector-pseudo-class-no-unknown": [
			true,
			{ ignorePseudoClasses: ["local", "global"] },
		],
		"selector-pseudo-class-parentheses-space-inside": "never",
		"selector-pseudo-element-colon-notation": "double",
	},
};

export default config;
