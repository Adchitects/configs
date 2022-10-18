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

/** Checks if the `package.json` file has the keywords */
export function hasKeywords(expectedKeywords: Array<string>): boolean {
	const { keywords } = readPackageJSON();

	for (const keyword of new Set(keywords)) {
		if (expectedKeywords.includes(keyword)) {
			// Has!
			return true;
		}
	}

	// Nope :(
	return false;
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

