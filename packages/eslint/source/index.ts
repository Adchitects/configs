// This is a workaround for https://github.com/eslint/eslint/issues/3458
import "@rushstack/eslint-patch/modern-module-resolution";

import { createMergedConfig } from "@workspace/shared/configuration";
import { isContinuousIntegration } from "@workspace/shared/environment";
import { hasModule } from "@workspace/shared/module";

import eslint from "./eslint.js";

import pluginCompat from "./plugins/compat.js";
import pluginDiff from "./plugins/diff.js";
import pluginJSXA11y from "./plugins/jsx-a11y.js";
import pluginSonarJS from "./plugins/sonarjs.js";
import pluginReact from "./plugins/react.js";
import pluginReactHooks from "./plugins/react-hooks.js";
import pluginRegexp from "./plugins/regexp.js";
import pluginSQL from "./plugins/sql.js";
import pluginStorybook from "./plugins/storybook.js";
import pluginTestingLibrary from "./plugins/testing-library.js";
import pluginTypeScript from "./plugins/typescript.js";
import pluginUnicorn from "./plugins/unicorn.js";
import pluginYML from "./plugins/yml.js";

import configNext from "./configs/next.js";
import configPrettier from "./configs/prettier.js";

const mergedConfig = createMergedConfig([
	// Base
	eslint,

	// Plugins
	pluginCompat,
	isContinuousIntegration() && pluginDiff,
	(hasModule("react") || hasModule("preact")) && pluginJSXA11y,
	(hasModule("react") || hasModule("preact")) && pluginReact,
	(hasModule("react") || hasModule("preact")) && pluginReactHooks,
	pluginRegexp,
	pluginSonarJS,
	pluginSQL,
	hasModule("sb") && pluginStorybook,
	hasModule("@testing-library/jest-dom") && pluginTestingLibrary,
	hasModule("typescript") && pluginTypeScript,
	pluginUnicorn,
	pluginYML,

	// Configs
	/**
	 * NOTE: Must come as last to override rules related to the code format.
	 * Let Prettier take care of it.
	 */
	hasModule("next") && configNext,
	hasModule("prettier") && configPrettier,
]);

// eslint-disable-next-line unicorn/prefer-module
module.exports = mergedConfig;
