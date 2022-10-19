import type { SyncpackConfig } from "syncpack/dist/constants";

const config: Partial<SyncpackConfig> = {
	// https://github.com/JamieMason/syncpack/#-configuration-file
	dev: true,
	filter: ".",
	indent: "\t",
	peer: true,
	prod: true,
	semverRange: "^",
	sortAz: ["engines", "files", "peerDependencies", "dependencies", "devDependencies"],
	sortFirst: [
		"$schema",
		"private",
		"type",
		"publishConfig",
		"name",
		"version",
		"description",
		"keywords",
		"author",
		"license",
		"homepage",
		"repository",
		"bugs",
		"engines",
		"packageManager",
		"volta",
		"main",
		"files",
		"exports",
		"typesVersions",
		"scripts",
		"peerDependencies",
		"dependencies",
		"devDependencies",
	],
	source: ["package.json", "packages/*/package.json", "shared/package.json"],
	versionGroups: [],
	workspace: false,
};

// eslint-disable-next-line unicorn/prefer-module
module.exports = config;
