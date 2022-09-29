# @adchitects/syncpack-config

![package version badge]

➡️ **Extendable [syncpack] configuration**, part of the
[adchitects/configs] project.

[adchitects/configs]: https://github.com/adchitects/configs
[package version badge]: https://img.shields.io/npm/v/@adchitects/syncpack-config/latest?style=for-the-badge&logo=npm
[syncpack]: https://github.com/JamieMason/syncpack
[adchitects/configs]: https://github.com/adchitects/configs

---

## Prerequisites

[![node.js version support badge]][node.js]
[![supported syncpack version badge]][syncpack cli]

[node.js version support badge]: https://img.shields.io/node/v-lts/@adchitects/syncpack-config?style=for-the-badge&logo=nodedotjs
[supported syncpack version badge]: https://img.shields.io/github/package-json/dependency-version/adchitects/configs/peer/syncpack?filename=packages%2Fsyncpack%2Fpackage.json&style=for-the-badge

ℹ️ This configuration package require these tools to use locally on your
device(s):

1. ![node.js icon] Latest [Node.js] LTS _(Long-Term Support)_ version
1. One of Node.js package managers:
    - ![pnpm icon] [pnpm]
    - ![yarn icon] [yarn]
    - ![npm icon] [npm]
1. Latest [syncpack] version

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
     pnpm install --save-dev syncpack @adchitects/syncpack-config
    ```

1. **Create an [syncpack configuration file] - `.syncpackrc.(c)js`**.

1. **Extend this module package configuration.**

    ```js
    const config = {
    	...require("@adchitects/syncpack-config"),
    };

    module.exports = config;
    ```

📖 For the [syncpack CLI] usage, please refer to its documentation.

[syncpack configuration file]: https://github.com/JamieMason/syncpack#-configuration-file
[syncpack cli]: https://github.com/JamieMason/syncpack#-commands

---

## Used configurations & plugins

[![Dependencies badge]][dependencies url]

None, so far.

[dependencies badge]: https://img.shields.io/librariesio/release/npm/@adchitects/syncpack-config?style=for-the-badge
[dependencies url]: https://libraries.io/npm/@adchitects%2Fsyncpack-config

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

Please refer to our [CONTRIBUTING file]
_(at the root of this project repository - [adchitects/configs])_
for more information if you wish to get involved.

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
