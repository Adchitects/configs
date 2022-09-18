import { createMergedConfig } from "@workspace/shared/configuration";
import { hasModule } from "@workspace/shared/module";

import prettier from "./prettier.js";

import phpPlugin from "./plugins/php.js";

const mergedConfig = createMergedConfig([
	// Base
	prettier,

	// Plugins
    // TODO: @acwo I need your help to decide how to help detect when the project needs this plugin.
    // Is there any specific Node.js package which is ALWAYS used with PHP projects?
    hasModule("php") && phpPlugin,
]);

// eslint-disable-next-line unicorn/prefer-module
module.exports = mergedConfig;
