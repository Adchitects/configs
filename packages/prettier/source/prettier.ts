import type { Options } from "prettier";

// @see https://prettier.io/docs/en/options.html
const config: Options = {
	printWidth: 80,

	tabWidth: 4,
	useTabs: true,

	singleQuote: false,
	quoteProps: "consistent",

	semi: true,
	trailingComma: "all",

	bracketSpacing: true,
	arrowParens: "always",

	rangeStart: 0,
	rangeEnd: Number.POSITIVE_INFINITY,

	endOfLine: "lf",
};

export default config;
