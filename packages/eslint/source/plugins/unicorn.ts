import { defineConfig } from "eslint-define-config";

// https://github.com/sindresorhus/eslint-plugin-unicorn
const config = defineConfig({
	extends: ["plugin:unicorn/recommended"],
	rules: {
		/**
		 * RATIONALE:
		 *  fm:We could use `ls-lint` instead.
		 * There we no discussion on file naming convention yet.
		 */
		"unicorn/filename-case": ["off"],

		/**
		 * RATIONALE:
		 *  Warn about it, is not an bug, just a code readability issue.
		 */
		"unicorn/prevent-abbreviations": ["warn"],
	},
});

export default config;
