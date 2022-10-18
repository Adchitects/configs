import type { Config } from "stylelint";

// https://github.com/kristerkari/stylelint-high-performance-animation
const config: Partial<Config> = {
	plugins: ["stylelint-high-performance-animation"],

	rules: {
		"plugin/no-low-performance-animation-properties": true,
	},
};

export default config;
