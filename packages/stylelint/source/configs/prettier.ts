import type { Config } from "stylelint";

// https://github.com/prettier/stylelint-config-prettier
const config: Partial<Config> = {
	extends: ["stylelint-config-prettier"],
};

export default config;
