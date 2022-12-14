import type { Config } from "stylelint";

// https://github.com/stylelint-scss/stylelint-scss
const config: Partial<Config> = {
	plugins: ["stylelint-scss"],

	rules: {
		// Rules from this plugin to be adjusted...
		"scss/at-rule-no-unknown": true,
	},
};

export default config;
