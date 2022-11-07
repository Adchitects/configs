# @adchitects/browserslist-config

![package version badge]

➡️ **Extendable ![browserslist icon] [browserslist] configuration**, part of the
[adchitects/configs] project.

[adchitects/configs]: https://github.com/adchitects/configs
[package version badge]: https://img.shields.io/npm/v/@adchitects/browserslist-config/latest?style=for-the-badge&logo=npm
[browserslist]: https://browsersl.ist/
[browserslist icon]: https://api.iconify.design/logos/browserslist.svg
[adchitects/configs]: https://github.com/adchitects/configs

---

## Prerequisites

[![node.js version support badge]][node.js]
[![supported browserslist version badge]][browserslist]

[node.js version support badge]: https://img.shields.io/node/v-lts/@adchitects/browserslist-config?style=for-the-badge&logo=nodedotjs
[supported browserslist version badge]: https://img.shields.io/github/package-json/dependency-version/adchitects/configs/peer/browserslist?filename=packages%2Fbrowserslist%2Fpackage.json&logo=browserslist&style=for-the-badge

ℹ️ This configuration package require these tools to use locally on your
device(s):

1. ![node.js icon] Latest [Node.js] LTS _(Long-Term Support)_ version
1. One of Node.js package managers:
    - ![pnpm icon] [pnpm]
    - ![yarn icon] [yarn]
    - ![npm icon] [npm]
1. Latest ![browserslist icon] [browserslist] version

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
     pnpm install --save-dev eslint @adchitects/browserslist-config
    ```

1. **Create an ![browserslist icon] [browserslist configuration file] - `.browserslistrc`**.

1. **Extend this module package configuration.**

    ```txt
    # https://browsersl.ist/
    extends @adchitects/browserslist-config
    ```

📖 For the ![browserslist icon] [browserslist CLI] usage, please refer to its
documentation.

[browserslist configuration file]: https://github.com/browserslist/browserslist#browserslistrc
[browserslist cli]: https://github.com/browserslist/browserslist#js-api

---

## Used configurations & plugins

[![Dependencies badge]][dependencies url]

None, so far.

[dependencies badge]: https://img.shields.io/librariesio/release/npm/@adchitects/browserslist-config?style=for-the-badge
[dependencies url]: https://libraries.io/npm/@adchitects%2Fbrowserslist-config

---

## Security

[![workflow security badge]][security policy]

🔐 For more information, please refer to the [Security section] at the root of
the [adchitects/configs] monorepo.

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
