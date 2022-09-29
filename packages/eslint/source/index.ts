// This is a workaround for https://github.com/eslint/eslint/issues/3458
import "@rushstack/eslint-patch/modern-module-resolution";

import { createMergedConfig } from "@workspace/shared/configuration";
import { hasModule } from "@workspace/shared/module";

import eslint from "./eslint.js";

import configNext from "./configs/next.js";
import configPrettier from "./configs/prettier.js";

const mergedConfig = createMergedConfig([
	// Base
	eslint,

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
