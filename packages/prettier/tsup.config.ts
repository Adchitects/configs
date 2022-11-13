import { defineConfig } from "tsup";

import { getNodeCJSOptions } from "@adchitects/tsup-config";

export default defineConfig((options) => ({
	...getNodeCJSOptions(options),
	entry: ["source/**/*.ts"],
	noExternal: ["@workspace/shared"],
}));
