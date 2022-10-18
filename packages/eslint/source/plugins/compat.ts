import { defineConfig } from "eslint-define-config";

// https://github.com/amilajack/eslint-plugin-compat
const config = defineConfig({
	extends: ["plugin:compat/recommended"],
});

export default config;
