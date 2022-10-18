import { defineConfig } from "eslint-define-config";

// https://github.com/jsx-eslint/eslint-plugin-react
const config = defineConfig({
	extends: ["plugin:react/recommended", "plugin:react/jsx-runtime"],

	rules: {
		/** */
	},

	settings: {
		react: {
			version: "detect",
		},
	},
});

export default config;
