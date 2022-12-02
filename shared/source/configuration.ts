import { deepmerge } from "deepmerge-ts";

import { hasModule } from "./module.js";

type Config = Record<string, unknown>;

export function createMergedConfig(dirtyConfigsList: Array<unknown>): Config {
	const cleanConfigsList = dirtyConfigsList.filter(Boolean);

	return deepmerge(...cleanConfigsList) as Config;
}

type IgnoreConditions = Array<{
	module: string;
	patterns: string | Array<string>;
}>;

function getPatternsList(patterns: Array<string> | string) {
	return Array.isArray(patterns) ? patterns : [patterns];
}

export function getIgnorePatterns(conditions: IgnoreConditions): Array<string> {
	const ignoresMap = new Set<string>();
	const addPatterns = (patterns: string | Array<string>): void => {
		for (const pattern of patterns) {
			ignoresMap.add(pattern);
		}
	};

	for (const { module, patterns } of conditions) {
		if (hasModule(module)) {
			addPatterns(getPatternsList(patterns));
		}
	}

	return [...ignoresMap];
}
