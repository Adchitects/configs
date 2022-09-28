import { createMergedConfig } from "@workspace/shared/configuration";
import { hasModule } from "@workspace/shared/module";

import stylelint from "./stylelint.js";

const mergedConfig = createMergedConfig([
	// Base
	stylelint,
]);

// eslint-disable-next-line unicorn/prefer-module
module.exports = mergedConfig;
