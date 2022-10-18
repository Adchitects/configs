import { defineConfig } from "eslint-define-config";

// https://github.com/prettier/eslint-config-prettier
const config = defineConfig({
	extends: ["next/core-web-vitals"],
	ignorePatterns: ["**/.next"],
});

export default config;
