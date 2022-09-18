import { createMergedConfig } from "@workspace/shared/configuration";
// import { hasModule } from "@workspace/shared/module";

import prettier from "./prettier.js";

const mergedConfig = createMergedConfig([
	// Base
	prettier,

	// Plugins
    // ...
]);

// eslint-disable-next-line unicorn/prefer-module
module.exports = mergedConfig;
