import { defineConfig } from "tsup";

export default defineConfig({
	clean: true,
	entry: ["source/index.ts"],
	format: ["cjs"],
	minify: true,
	noExternal: ["@workspace/shared"],
	sourcemap: true,
	splitting: false,
	target: ["node16"],
});
