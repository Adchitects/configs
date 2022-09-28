import { createMergedConfig } from "@workspace/shared/configuration";
import { hasModule } from "@workspace/shared/module";

import stylelint from "./stylelint.js";

import configPrettier from "./configs/prettier.js";
import configStandard from "./configs/standard.js";
import configStandardSCSS from "./configs/standard-scss.js";

const mergedConfig = createMergedConfig([
	// Base
	stylelint,

	// Configurations
	!hasModule("sass") && configStandard,
	hasModule("sass") && configStandardSCSS,
	/**
	 * NOTE: Must come as last to override rules related to the code format.
	 * Let Prettier take care of it.
	 */
	hasModule("prettier") && configPrettier,
]);

// eslint-disable-next-line unicorn/prefer-module
module.exports = mergedConfig;
