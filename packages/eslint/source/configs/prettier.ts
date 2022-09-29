import { defineConfig } from "eslint-define-config";

// https://github.com/prettier/eslint-config-prettier
const config = defineConfig({
	extends: ["prettier"],
});

export default config;
