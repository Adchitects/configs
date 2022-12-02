import type { Options } from "tsup";

/**
 * Base configuration to be used across the projects
 */
export function getBaseOptions(options: Options): Options {
	const { watch } = options;

	return {
		clean: true,
		dts: true,
		minify: !watch,
		outDir: "./dist",
		sourcemap: !watch,
		splitting: false,
		target: "esnext",
		treeshake: false,
	};
}

/**
 * Optimal configuration for building component(s)
 */
export function getComponentOptions(options: Options): Options {
	const { watch } = options;

	return {
		...getBaseOptions(options),
		entry: ["./source/**/*.ts", "./source/**/*[!spec|stories|test].tsx"],
		format: ["esm"],
		platform: "browser",
		splitting: !watch,
		treeshake: !watch,
	};
}

/**
 * Optimal configuration for building package in CommonJS format
 */
export function getNodeCJSOptions(options: Options): Options {
	return {
		...getBaseOptions(options),
		format: ["cjs"],
		platform: "node",
		target: "node18",
	};
}

/**
 * Optimal configuration for building package in ES Modules format
 */
export function getNodeESMOptions(options: Options): Options {
	return {
		...getBaseOptions(options),
		format: ["esm"],
		platform: "node",
	};
}

/**
 * Optimal configuration for building package in both CommonJS and ES Modules format
 */
export function getNodeUniveralOptions(options: Options): Options {
	return {
		...getBaseOptions(options),
		format: ["cjs", "esm"],
		platform: "node",
		target: "node18",
	};
}
