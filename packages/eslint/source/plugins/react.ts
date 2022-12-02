import { hasModule } from "@workspace/shared/module";
import { defineConfig } from "eslint-define-config";

const IGNORE_PROPERTIES = [
	/**
	 * RATIONALE:
	 * Support for Emotion (CSS-in_JS library), it has own "parser".
	 */
	(hasModule("@emotion/css") || hasModule("@emotion/react")) && "css",
];

// https://github.com/jsx-eslint/eslint-plugin-react
const config = defineConfig({
	extends: ["plugin:react/recommended", "plugin:react/jsx-runtime"],

	rules: {
		"react/no-unknown-property": ["error", { ignore: IGNORE_PROPERTIES.filter(Boolean) }],
	},

	settings: {
		react: {
			version: "detect",
		},
	},
});

export default config;
