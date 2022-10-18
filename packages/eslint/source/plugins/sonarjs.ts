import { defineConfig } from "eslint-define-config";

// https://github.com/SonarSource/eslint-plugin-sonarjs
const config = defineConfig({
	extends: ["plugin:sonarjs/recommended"],
	plugins: ["sonarjs"],
});

export default config;
