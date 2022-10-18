import { defineConfig } from "eslint-define-config";

import { hasModule } from "@workspace/shared/module";

const getExtendedConfigs = () => {
	const configs = ["plugin:import/recommended"];

	if (hasModule("typescript")) {
		configs.push("plugin:import/typescript");
	}

	return configs;
};

// https://github.com/import-js/eslint-plugin-import
const config = defineConfig({
	extends: getExtendedConfigs(),

	rules: {
		// @see: https://github.com/import-js/eslint-plugin-import/issues/1868
		"import/no-unresolved": ["off"], // Doesn't support ESM yet
	},
});

export default config;
