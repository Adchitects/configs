import { defineConfig } from "eslint-define-config";

import { hasModule } from "@workspace/shared/module";

const COMMENT_RULE_OPTIONS = "allow-with-description";
const IGNORE_VAR_PATTERNS = [
	/**
	 * RATIONALE:
	 * Support for Emotion (CSS-in_JS library), it has own "parser".
	 */
	(hasModule("@emotion/css") || hasModule("@emotion/react")) && "css",
];

const config = defineConfig({
	// https://github.com/typescript-eslint/typescript-eslint
	extends: ["plugin:@typescript-eslint/recommended"],
	parserOptions: {
		parser: "@typescript-eslint/parser",
		// eslint-disable-next-line unicorn/prefer-module
		tsconfigRootDir: __dirname,
	},
	rules: {
		"@typescript-eslint/ban-ts-comment": [
			"warn",
			{
				"ts-expect-error": COMMENT_RULE_OPTIONS,
				"ts-ignore": COMMENT_RULE_OPTIONS,
				"ts-nocheck": COMMENT_RULE_OPTIONS,
				"ts-check": COMMENT_RULE_OPTIONS,
				"minimumDescriptionLength": 3,
			},
		],
		"@typescript-eslint/no-unused-vars": [
			"error",
			{ varsIgnorePattern: `(${IGNORE_VAR_PATTERNS.filter(Boolean).join("|")})` },
		],
	},
});

export default config;
