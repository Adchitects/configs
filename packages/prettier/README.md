# @adchitects/prettier-config

![package version badge]

**Extendable ![prettier icon] [Prettier] configuration**, part of the
[adchitects/configs] project.

[adchitects/configs]: https://github.com/adchitects/configs
[package version badge]: https://img.shields.io/npm/v/@adchitects/prettier-config/latest?style=for-the-badge&logo=npm
[prettier]: https://prettier.io
[prettier icon]: https://api.iconify.design/logos/prettier.svg
[adchitects/configs]: https://github.com/adchitects/configs

---

## Prerequisites

[![node.js version support badge]][node.js]
[![supported prettier version badge]][prettier]

[node.js version support badge]: https://img.shields.io/node/v-lts/@adchitects/markdownlint-config?style=for-the-badge&logo=nodedotjs
[supported prettier version badge]: https://img.shields.io/github/package-json/dependency-version/adchitects/configs/peer/prettier?filename=packages%2Fprettier%2Fpackage.json&logo=prettier&style=for-the-badge

ℹ️ This configuration package require these tools to use locally on your
device(s):

1. ![node.js icon] Latest [Node.js] LTS _(Long-Term Support)_ version
1. One of Node.js package managers:
    - ![pnpm icon] [pnpm]
    - ![yarn icon] [yarn]
    - ![npm icon] [npm]
1. Latest ![prettier icon] [Prettier] version

[node.js]: https://nodejs.org/en/
[node.js icon]: https://api.iconify.design/logos/nodejs-icon.svg
[pnpm]: https://pnpm.io/
[pnpm icon]: https://api.iconify.design/vscode-icons/file-type-light-pnpm.svg
[npm]: https://npmjs.com/
[npm icon]: https://api.iconify.design/logos/npm-icon.svg
[yarn]: https://yarnpkg.com/
[yarn icon]: https://api.iconify.design/logos/yarn.svg

---

## Basic usage

👣 Follow the steps below:

1. **Install it with the ![node.js icon] [Node.js] package manager of your
   choice** _(in our case, we use ![pnpm icon] [pnpm])_.

    ```sh
     pnpm install --save-dev prettier @adchitects/prettier-config
    ```

    [node.js]: https://nodejs.org/en/
    [`pnpm`]: https://pnpm.io/

1. **Create an ![prettier icon] [Prettier configuration file] - `.prettierrc.(c)js`**.

1. **Extend this module package configuration.**

    ```js
    /** @type import("prettier").Options */
    const config = {
    	...require("@adchitects/prettier-config"),
    };

    module.exports = config;
    ```

📖 For [prettier icon] [Prettier CLI] usage, please refer to its documentation
_(we recommend to use [`pretty-quick`](pretty-quick) instead, for more
human-friendly output and performance)_.

[prettier configuration file]: https://prettier.io/docs/en/configuration.html
[prettier cli]: https://prettier.io/docs/en/cli.html
[pretty-quick]: https://github.com/azz/pretty-quick

---

## Used configurations & plugins

[![Dependencies badge]][dependencies url]

⚙️ This configuration module for [Prettier] loads plugins options _conditionally_.

[dependencies badge]: https://img.shields.io/librariesio/release/npm/@adchitects/prettier-config?style=for-the-badge
[dependencies url]: https://libraries.io/npm/@adchitects%2Fprettier-config

### Plugins

| Plugin                 | Version                               | Loading condition(s)                                         |
| ---------------------- | ------------------------------------- | ------------------------------------------------------------ |
| [@prettier/plugin-php] | ![@prettier/plugin-php version badge] | `php` or `adchitects-php-project` in package.json `keywords` |

[@prettier/plugin-php]: https://github.com/prettier/plugin-php
[@prettier/plugin-php version badge]: https://img.shields.io/npm/v/@prettier/plugin-php?logo=npm&style=flat-square

---

## Security

[![workflow security badge]][security policy]

🔐 For more information, please refer to the [Security section] at the root of the
[adchitects/configs] monorepo.

[workflow security badge]: https://img.shields.io/github/workflow/status/adchitects/configs/Maintenance?label=Security&logo=github&style=for-the-badge
[security section]: https://github.com/adchitects/configs#security
[security policy]: https://github.com/adchitects/configs/security/policy

---

## Contributing

[![contributors badge]][contributors url]

🤝 **Contributions of any kind are welcome!**

Please refer to the monorepo _([adchitects/configs])_ project's
[CONTRIBUTING file] for more information if you wish to get involved.

[contributing file]: https://github.com/adchitects/configs/blob/main/.github/CONTRIBUTING.md
[contributors badge]: https://img.shields.io/github/contributors/adchitects/configs?style=for-the-badge
[contributors url]: https://github.com/adchitects/configs#contributors

---

## License

[![license badge]][license]

⚖️ For more information, please refer to the [License section] at the root of
the [adchitects/configs] monorepo.

[license badge]: https://img.shields.io/github/license/adchitects/configs?style=for-the-badge
[license]: https://github.com/adchitects/configs/blob/main/LICENSE.md
[license section]: https://github.com/adchitects/configs#License
