// https://github.com/okonet/lint-staged

const config = {
	// Prettier
	"*": (files) => [`prettier --check ${files.map((path) => '"' + path + '"').join(" ")}`],

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
