import { defineConfig } from "tsup";

import { getNodeUniveralOptions } from "./source/index.js";

export default defineConfig((options) => ({
	...getNodeUniveralOptions(options),
	entry: ["./source/**/*.ts"],
}));
