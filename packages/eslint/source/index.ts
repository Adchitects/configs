// This is a workaround for https://github.com/eslint/eslint/issues/3458
import "@rushstack/eslint-patch/modern-module-resolution";

import { createMergedConfig } from "@workspace/shared/configuration";
import { isContinuousIntegration } from "@workspace/shared/environment";
import { hasModule } from "@workspace/shared/module";

import eslint from "./eslint.js";

import pluginCompat from "./plugins/compat.js";
import pluginDiff from "./plugins/diff.js";
import pluginTypeScript from "./plugins/typescript.js";
import pluginYML from "./plugins/yml.js";

import configNext from "./configs/next.js";
import configPrettier from "./configs/prettier.js";

const mergedConfig = createMergedConfig([
	// Base
	eslint,

	// Plugins
	pluginCompat,
	isContinuousIntegration() && pluginDiff,
	hasModule("typescript") && pluginTypeScript,
	pluginYML,

	// Configs
	/**
	 * NOTE: Must come as last to override rules related to the code format.
	 * Let Prettier take care of it.
	 */
	hasModule("next") && configNext,
	hasModule("prettier") && configPrettier,
]);

// eslint-disable-next-line unicorn/prefer-module
module.exports = mergedConfig;
