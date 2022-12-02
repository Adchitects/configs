import { defineConfig } from "eslint-define-config";

const ALLOWED_ABBREVATIONS = [
	/**
	 * RATIONALE:
	 * This is descriptive & obvious enough.
	 */
	"args",
	"Args",
	/**
	 * RATIONALE:
	 * This is descriptive & obvious enough.
	 */
	"params",
	"Params",
	/**
	 * RATIONALE:
	 * This is descriptive & obvious enough.
	 */
	"props",
	"Props",
	/**
	 * RATIONALE:
	 * Every React developer knows what is it, no need to make it more obvious.
	 */
	"ref",
	"Ref",
];

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
		"unicorn/prevent-abbreviations": ["warn", { ignore: ALLOWED_ABBREVATIONS }],
	},
});

export default config;
