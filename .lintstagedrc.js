import { readFileSync } from "node:fs";

const PRETTIER_IGNORE_LIST = readFileSync(new URL(".prettierignore", import.meta.url))
	.toString()
	.split("\n");

/**
 * @param path {string}
 */
function isOnPrettierIgnoreList(path) {
	for (const ignorePath of PRETTIER_IGNORE_LIST) {
		if (path.includes(ignorePath)) {
			return true;
		}
	}

	return false;
}

/**
 * @param paths {Array<string>}
 */
function executePrettierOnFiles(paths) {
	const filesToCheck = [];

	for (const path of paths) {
		if (!isOnPrettierIgnoreList(path)) {
			filesToCheck.push(path);
		}
	}

	return filesToCheck.length > 0
		? [`prettier --check ${filesToCheck.map((path) => '"' + path + '"'.join(" "))}`]
		: [];
}

// https://github.com/okonet/lint-staged
const config = {
	// Prettier
	"*": (files) => executePrettierOnFiles(files),

	// ESLint
	"*.{js,json,ts,yml,yaml}": ["eslint"],

	// depcheck & syncpack
	"**/package.json": () => ["depcheck", "syncpack list-mismatches", "syncpack format"],

	// markdownlint
	"*.md": [`markdownlint --ignore "./.changeset/*.md"`],

	// TypeScript types (in each package, because of different configs)
	"./shared/**/*.ts": () => `tsc --project ./shared/tsconfig.json --noEmit`,
	"./packages/eslint/source/**/*.ts": () => `tsc --project ./packages/eslint/tsconfig.json --noEmit`,
	"./packages/prettier/source/**/*.ts": () => `tsc --project ./packages/prettier/tsconfig.json --noEmit`,
	"./packages/stylelint/source/**/*.ts": () => `tsc --project ./packages/stylelint/tsconfig.json --noEmit`,
};

export default config;
