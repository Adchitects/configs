import { defineConfig } from "tsup";

export default defineConfig({
	clean: true,
	dts: true,
	entry: ["source/*.ts"],
	format: ["esm"],
	minify: true,
	outDir: "dist/",
	sourcemap: true,
	splitting: true,
	target: ["node16"],
});
