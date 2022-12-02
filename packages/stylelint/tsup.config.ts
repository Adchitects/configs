import { defineConfig } from "tsup";

import { getNodeCJSOptions } from "@adchitects/tsup-config";

export default defineConfig((options) => ({
	...getNodeCJSOptions(options),
	bundle: true,
	dts: false,
	entry: ["source/**/*.ts"],
	noExternal: ["@workspace/shared"],
}));
