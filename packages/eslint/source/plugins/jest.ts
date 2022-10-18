import { defineConfig } from "eslint-define-config";

import { getIgnorePatterns } from "@workspace/shared/configuration";

// https://github.com/jest-community/eslint-plugin-jest
const config = defineConfig({
	extends: ["plugin:jest/recommended", "plugin:jest/style"],
	env: {
		"jest/globals": true,
	},
	ignorePatterns: getIgnorePatterns([
		{
			module: "c8",
			patterns: "**/coverage",
		},
	]),
});

export default config;
