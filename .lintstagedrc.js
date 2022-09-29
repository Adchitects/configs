// https://github.com/okonet/lint-staged

const config = {
	// Prettier
	"*": (file) => [`prettier --check "${file}"`],

	// ESLint
	// TODO: Configure when ESLint is ready
	// "*.{js,json,ts,yml,yaml}": ["eslint"],

	// depcheck & syncpack
	// "**/package.json": () => [
	// 	"depcheck",
	// 	"syncpack list-mismatches",
	// 	"syncpack format",
	// ],

	// markdownlint
	// TODO: Configure when markdownlintLint is ready
	// "*.md": [`markdownlint --ignore "./.changeset/*.md"`],

	// TypeScript types (in each package, because of different configs)
	// "./shared/**/*.ts": () => `tsc --project ./shared/tsconfig.json --noEmit`,
	// "./packages/eslint/source/**/*.ts": () =>
	// 	`tsc --project ./packages/eslint/tsconfig.json --noEmit`,
	// "./packages/prettier/source/**/*.ts": () =>
	// 	`tsc --project ./packages/prettier/tsconfig.json --noEmit`,
	// "./packages/stylelint/source/**/*.ts": () =>
	// 	`tsc --project ./packages/stylelint/tsconfig.json --noEmit`,
};

export default config;
