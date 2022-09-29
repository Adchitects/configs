import { defineConfig } from "eslint-define-config";

// https://github.com/ota-meshi/eslint-plugin-json-schema-validator
const config = defineConfig({
	extends: ["plugin:json-schema-validator/recommended"],
});

export default config;
