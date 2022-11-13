import { defineConfig } from "eslint-define-config";

// https://github.com/emotion-js/emotion/tree/main/packages/eslint-plugin
const config = defineConfig({
	plugins: ["@emotion"],
	rules: {
		"@emotion/import-from-emotion": "error",
		"@emotion/jsx-import": "off",
		"@emotion/no-vanilla": "error",
		"@emotion/pkg-renaming": "error",
		"@emotion/styled-import": "error",
	},
});

export default config;
