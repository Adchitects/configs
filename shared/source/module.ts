import { readPackageUpSync } from "read-pkg-up";
import type { PackageJson } from "type-fest";

export function readPackageJSON(): PackageJson {
	const file = readPackageUpSync();

	if (file) {
		return file.packageJson;
	} else {
		throw new Error('Cannot locate "package.json" file!');
	}
}

export function hasModule(name: string): boolean {
	const { dependencies, devDependencies } = readPackageJSON();

	return new Map(
		Object.entries({
			...devDependencies,
			...dependencies,
		}),
	).has(name);
}

export function isESModule() {
	const { type } = readPackageJSON();

	return type === "module";
}

export function isCommonJS() {
	const { type } = readPackageJSON();

	return type === "commonjs";
}
