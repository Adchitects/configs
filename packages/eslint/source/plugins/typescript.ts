import { defineConfig } from "eslint-define-config";

const commentRuleOptions = "allow-with-description";

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
				"ts-expect-error": commentRuleOptions,
				"ts-ignore": commentRuleOptions,
				"ts-nocheck": commentRuleOptions,
				"ts-check": commentRuleOptions,
				"minimumDescriptionLength": 3,
			},
		],
	},
});

export default config;
