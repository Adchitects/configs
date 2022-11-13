# @adchitects/tsup-config

![package version badge]

➡️ **Extendable [tsup] configuration**, part of the
[adchitects/configs] project.

[package version badge]: https://img.shields.io/npm/v/@adchitects/tsup-config/latest?style=for-the-badge&logo=npm
[tsup]: https://tsup.egoist.dev/
[adchitects/configs]: https://github.com/adchitects/configs

---

## Prerequisites

[![node.js version support badge]][node.js]
[![supported tsup version badge]][tsup]

[node.js version support badge]: https://img.shields.io/node/v-lts/@adchitects/tsup-config?style=for-the-badge&logo=nodedotjs
[supported tsup version badge]: https://img.shields.io/github/package-json/dependency-version/adchitects/configs/peer/tsup?filename=packages%2Ftsup%2Fpackage.json&logo=tsup&style=for-the-badge

ℹ️ This configuration package require these tools to use locally on your
device(s):

1. ![node.js icon] Latest [Node.js] LTS _(Long-Term Support)_ version
1. One of Node.js package managers:
    - ![pnpm icon] [pnpm]
    - ![yarn icon] [yarn]
    - ![npm icon] [npm]
1. Latest [tsup] version

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
     pnpm install --save-dev tsup @adchitects/tsup-config
    ```

1. **Create a [tsup configuration file] - `tsup.config.ts`**.

1. **Import a specific [getter] from this module package configuration and use it.**\
   NOTE: This one below is an example!

    ```ts
    import { defineConfig } from "tsup";

    import { setNodeUniveralOptions } from "@adchitects/tsup-config";

    export default defineConfig((options) => ({
    	...setNodeUniveralOptions(options),
    	entry: ["./source/**/*.ts"],
    }));
    ```

📖 For the [tsup CLI] usage, please refer to its documentation.

[getter]: #available-options-getters
[tsup configuration file]: https://tsup.egoist.dev/#using-custom-configuration
[tsup cli]: https://tsup.egoist.dev/#usage

---

## Available options getters

| Name                       | Purpose                                                                   |
| -------------------------- | ------------------------------------------------------------------------- |
| `getBaseOptions()`         | For **general** usage                                                     |
| `getComponentsOptions()`   | For building a **component** package                                      |
| `getNodeCJSOptions()`      | For building a Node.js package in **CommonJS** format                     |
| `getNodeESMOptions()`      | For building a Node.js package in **ES Modules** format                   |
| `getNodeUniveralOptions()` | For building a Node.js package in both **CommonJS and ES Modules** format |

---

## Used configurations & plugins

[![Dependencies badge]][dependencies url]

⚙️ This configuration module loads configurations and plugins options
_conditionally_.

[dependencies badge]: https://img.shields.io/librariesio/release/npm/@adchitects/tsup-config?style=for-the-badge
[dependencies url]: https://libraries.io/npm/@adchitects%2Ftsup-config

### Configurations

None so far.

### Plugins

None so far.

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

None so far.
