import { defineConfig } from "eslint-define-config";

// https://github.com/gajus/eslint-plugin-sql
const config = defineConfig({
	plugins: ["sql"],

	rules: {
		"sql/format": [
			"error",
			{
				ignoreExpressions: false,
				ignoreInline: true,
				ignoreTagless: false,
			},
		],

		"sql/no-unsafe-query": ["error", { allowLiteral: false }],
	},
});

export default config;
