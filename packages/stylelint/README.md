# @adchitects/stylelint-config

![package version badge]

➡️ **Extendable ![stylelint icon] [Stylelint] configuration**, part of the
[adchitects/configs] project.

[package version badge]: https://img.shields.io/npm/v/@adchitects/stylelint-config/latest?style=for-the-badge&logo=npm
[stylelint]: https://stylelint.io/
[stylelint icon]: https://api.iconify.design/logos/stylelint.svg
[adchitects/configs]: https://github.com/adchitects/configs

---

## Prerequisites

[![node.js version support badge]][node.js]
[![supported stylelint version badge]][stylelint]

[node.js version support badge]: https://img.shields.io/node/v-lts/@adchitects/markdownlint-config?style=for-the-badge&logo=nodedotjs
[supported stylelint version badge]: https://img.shields.io/github/package-json/dependency-version/adchitects/configs/peer/stylelint?filename=packages%2Fstylelint%2Fpackage.json&logo=stylelint&style=for-the-badge

ℹ️ This configuration package require these tools to use locally on your
device(s):

1. ![node.js icon] Latest [Node.js] LTS _(Long-Term Support)_ version
1. One of Node.js package managers:
    - ![pnpm icon] [pnpm]
    - ![yarn icon] [yarn]
    - ![npm icon] [npm]
1. Latest ![stylelint icon] [Stylelint] version

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
     pnpm install --save-dev stylelint @adchitects/stylelint-config
    ```

1. **Create a ![stylelint icon] [stylelint configuration file] - `.stylelintrc.(c)js`**.

1. **Extend this module package configuration.**

    ```js
    /** @type {import("stylelint").Config} */
    const config = {
    	extends: "@adchitects/stylelint-config",
    };

    module.exports = config;
    ```

📖 For the ![stylelint icon] [Stylelint CLI] usage, please refer to its
documentation.

[stylelint configuration file]: https://stylelint.io/user-guide/configure
[stylelint cli]: https://stylelint.io/user-guide/usage/cli

---

## Used configurations & plugins

[![Dependencies badge]][dependencies url]

⚙️ This configuration module for [Stylelint] loads configurations and plugins
options _conditionally_.

[dependencies badge]: https://img.shields.io/librariesio/release/npm/@adchitects/stylelint-config?style=for-the-badge
[dependencies url]: https://libraries.io/npm/@adchitects%2Fstylelint-config

### Configurations

| Configurations                   | Version                                    | Loading condition(s)        |
| -------------------------------- | ------------------------------------------ | --------------------------- |
| [stylelint-config-prettier]      | ![stylelint-config-prettier version badge] | `prettier` as dependency    |
| [stylelint-config-standard]      | ![stylelint-config-prettier version badge] | **NO** `sass` as dependency |
| [stylelint-config-standard-scss] | ![stylelint-config-prettier version badge] | `sass` as dependency        |

[stylelint-config-prettier]: https://github.com/prettier/stylelint-config-prettier
[stylelint-config-prettier version badge]: https://img.shields.io/npm/v/stylelint-config-prettier?logo=npm&style=flat-square
[stylelint-config-standard]: https://github.com/stylelint/stylelint-config-standard
[stylelint-config-standard version badge]: https://img.shields.io/npm/v/stylelint-config-standard?logo=npm&style=flat-square
[stylelint-config-standard-scss]: https://github.com/stylelint-scss/stylelint-config-standard-scss
[stylelint-config-standard-scss version badge]: https://img.shields.io/npm/v/stylelint-config-standard-scss?logo=npm&style=flat-square

### Plugins

| Plugin                                      | Version                                                    | Loading condition(s) |
| ------------------------------------------- | ---------------------------------------------------------- | -------------------- |
| [stylelint-high-performance-animation]      | ![stylelint-high-performance-animation version badge]      | -                    |
| [stylelint-no-unsupported-browser-features] | ![stylelint-no-unsupported-browser-features version badge] | -                    |
| [stylelint-order]                           | ![stylelint-order version badge]                           | -                    |
| [stylelint-scss]                            | ![stylelint-scss version badge]                            | `sass` as dependency |

[stylelint-high-performance-animation]: https://github.com/kristerkari/stylelint-high-performance-animation
[stylelint-high-performance-animation version badge]: https://img.shields.io/npm/v/stylelint-high-performance-animation?logo=npm&style=flat-square
[stylelint-no-unsupported-browser-features]: https://github.com/ismay/stylelint-no-unsupported-browser-features
[stylelint-no-unsupported-browser-features version badge]: https://img.shields.io/npm/v/stylelint-no-unsupported-browser-features?logo=npm&style=flat-square
[stylelint-order]: https://github.com/hudochenkov/stylelint-order
[stylelint-order version badge]: https://img.shields.io/npm/v/stylelint-order?logo=npm&style=flat-square
[stylelint-scss]: https://github.com/sveltejs/stylelint-plugin-svelte3
[stylelint-scss version badge]: https://img.shields.io/npm/v/stylelint-scss?logo=npm&style=flat-square

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

---

## Resources

-   [Awesome Stylelint]

[awesome stylelint]: https://github.com/stylelint/awesome-stylelint
