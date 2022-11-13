import { defineConfig } from "eslint-define-config";

// https://github.com/storybookjs/eslint-plugin-storybook
const config = defineConfig({
	overrides: [
		{
			files: ["*.stories.@(js|jsx|ts|tsx|svelte|vue)"],
			extends: ["plugin:storybook/recommended", "plugin:storybook/csf", "plugin:storybook/csf-strict"],
		},
	],
	rules: {
		/**
		 * RATIONALE:
		 * Doesn't help very much with i.e. monorepo containing components packages.
		 * It needs to be adjusted sometimes, so lets allow it.
		 * NOTE: Title is being set automatically in CSF v3.
		 */
		"storybook/no-title-property-in-meta": "off",
	},
});

export default config;
