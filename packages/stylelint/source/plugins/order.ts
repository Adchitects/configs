import type { Config } from "stylelint";

// https://github.com/hudochenkov/stylelint-order
const config: Partial<Config> = {
	plugins: ["stylelint-order"],

	rules: {
		"order/order": ["custom-properties", "declarations"],
		"order/properties-order": [
			// TODO: Add order rules there based on the existing config from `wp-starter-pack`
			// If you'd like to organize it better or need some inspiration, you can use this:
			// https://github.com/terminal-nerds/configs/blob/main/packages/stylelint/source/plugins/order/index.ts
		],
	},
};

export default config;
