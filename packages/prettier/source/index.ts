import { createMergedConfig } from "@workspace/shared/configuration";
import { hasKeywords } from "@workspace/shared/module";

import prettier from "./prettier.js";

import phpPlugin from "./plugins/php.js";

const mergedConfig = createMergedConfig([
	// Base
	prettier,

	// Plugins
	hasKeywords(["php", "adchitects-php-project"]) && phpPlugin,
]);

// eslint-disable-next-line unicorn/prefer-module
module.exports = mergedConfig;
export default mergedConfig;
