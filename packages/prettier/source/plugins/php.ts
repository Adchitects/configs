// https://github.com/prettier/plugin-php
const config = {
  plugins: ["@prettier/plugin-php"],

  // TODO: @acwo: Tweak it to what you need, the below ones is just quick examples from the docs
  phpVersion: "8.1",
  trailingCommaPHP: true,
  braceStyle: "psr-2",
};

export default config;
