// https://github.com/prettier/plugin-php
const config = {
	plugins: ["@prettier/plugin-php"],
	phpVersion: "7.4",
	printWidth: 999999, // default is 80 and we don't want to have it
	singleQuote: false,
	trailingCommaPHP: true,
	braceStyle: "1tbs",
};

export default config;
