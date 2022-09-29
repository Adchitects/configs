// This is a workaround for https://github.com/eslint/eslint/issues/3458
import "@rushstack/eslint-patch/modern-module-resolution";

import eslint from "./eslint.js";

const mergedConfig = createMergedConfig([
	// Base
	eslint,

]);

// eslint-disable-next-line unicorn/prefer-module
module.exports = mergedConfig;
