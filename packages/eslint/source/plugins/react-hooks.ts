import { defineConfig } from "eslint-define-config";

// https://www.npmjs.com/package/eslint-plugin-react-hooks
const config = defineConfig({
	extends: ["plugin:react-hooks/recommended"],
});

export default config;
