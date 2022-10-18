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
	settings: {
		jest: {
			/* eslint-disable-next-line
			   unicorn/prefer-module,
			   @typescript-eslint/no-var-requires
			*/
			version: require("jest/package.json").version,
		},
	},
});

export default config;
