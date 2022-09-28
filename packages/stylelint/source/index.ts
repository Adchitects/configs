import { createMergedConfig } from "@workspace/shared/configuration";
import { hasModule } from "@workspace/shared/module";

import stylelint from "./stylelint.js";

import configPrettier from "./configs/prettier.js";
import configStandard from "./configs/standard.js";
import configStandardSCSS from "./configs/standard-scss.js";

import pluginHighPerformanceAnimation from "./plugins/high-performance-animation.js";
import pluginNoUnsupportedBrowserFeatures from "./plugins/no-unsupported-browser-features.js";
import pluginSCSS from "./plugins/scss.js";

const mergedConfig = createMergedConfig([
	// Base
	stylelint,

	// Plugins
	pluginHighPerformanceAnimation,
    pluginNoUnsupportedBrowserFeatures,
	hasModule("sass") && pluginSCSS,

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
