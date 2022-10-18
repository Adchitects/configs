import { defineConfig } from "eslint-define-config";

import { hasModule } from "@workspace/shared/module";

function getExtendedConfig() {
	if (hasModule("react")) {
		return "plugin:testing-library/react";
	} else if (hasModule("svelte")) {
		return "plugin:testing-library/svelte";
	} else {
		return "plugin:testing-library/dom";
	}
}

// https://github.com/testing-library/eslint-plugin-testing-library
const config = defineConfig({
	extends: [getExtendedConfig()],
});

export default config;
