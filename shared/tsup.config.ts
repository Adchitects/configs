import { defineConfig } from "tsup";

import { getNodeESMOptions} from "@adchitects/tsup-config";

export default defineConfig((options) => ({
	...getNodeESMOptions(options),
	entry: ["source/*.ts"],
}));
