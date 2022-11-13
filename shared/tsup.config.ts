import { defineConfig } from "tsup";

import { getNodeUniveralOptions } from "@adchitects/tsup-config";

export default defineConfig((options) => ({
	...getNodeUniveralOptions(options),
	entry: ["source/*.ts"],
}));
