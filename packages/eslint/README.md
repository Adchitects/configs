# @terminal-nerds/eslint-config

![package version badge]

➡️ **Extendable ![eslint icon] [ESLint] configuration**, part of the
[terminal-nerds/configs] project.

[package version badge]: https://img.shields.io/npm/v/@terminal-nerds/eslint-config/latest?style=for-the-badge&logo=npm
[eslint]: https://eslint.org/
[eslint icon]: https://api.iconify.design/logos/eslint.svg
[terminal-nerds/configs]: https://github.com/terminal-nerds/configs

---

## Prerequisites

[![node.js version support badge]][node.js]
[![supported eslint version badge]][eslint]

[node.js version support badge]: https://img.shields.io/node/v-lts/@terminal-nerds/eslint-config?style=for-the-badge&logo=nodedotjs
[supported eslint version badge]: https://img.shields.io/github/package-json/dependency-version/terminal-nerds/configs/peer/eslint?filename=packages%2Feslint%2Fpackage.json&logo=eslint&style=for-the-badge

ℹ️ This configuration package require these tools to use locally on your
device(s):

1. ![node.js icon] Latest [Node.js] LTS _(Long-Term Support)_ version
1. One of Node.js package managers:
    - ![pnpm icon] [pnpm]
    - ![yarn icon] [yarn]
    - ![npm icon] [npm]
1. Latest ![eslint icon] [ESLint] version

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
     pnpm install --save-dev eslint @terminal-nerds/eslint-config
    ```

1. **Create an ![eslint icon] [ESLint configuration file] - `.eslintrc.(c)js`**.

1. **Extend this module package configuration.**

    ```js
    const config = {
    	extends: "@terminal-nerds",

    	env: {
    		// Specify the environment(s)
    		// https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments
    		browser: true,
    		node: true,
    	},
    };

    module.exports = config;
    ```

📖 For the ![eslint icon] [ESLint CLI] usage, please refer to its documentation.

[eslint configuration file]: https://eslint.org/docs/user-guide/configuring/configuration-files#using-configuration-files
[eslint cli]: https://eslint.org/docs/user-guide/command-line-interface

---

## Used configurations & plugins

[![Dependencies badge]][dependencies url]

⚙️ This configuration module loads configurations and plugins options
_conditionally_.

[dependencies badge]: https://img.shields.io/librariesio/release/npm/@terminal-nerds/eslint-config?style=for-the-badge
[dependencies url]: https://libraries.io/npm/@terminal-nerds%2Feslint-config

### Configurations

| Configurations           | Version                                 | Loading condition(s)     |
| ------------------------ | --------------------------------------- | ------------------------ |
| [eslint-config-next]     | ![eslint-config-next version badge]     | `next` as dependency     |
| [eslint-config-prettier] | ![eslint-config-prettier version badge] | `prettier` as dependency |

[eslint-config-next]: https://nextjs.org/docs/basic-features/eslint#eslint-config
[eslint-config-next version badge]: https://img.shields.io/npm/v/eslint-config-next?logo=npm&style=flat-square
[eslint-config-prettier]: https://github.com/prettier/eslint-config-prettier
[eslint-config-prettier version badge]: https://img.shields.io/npm/v/eslint-config-prettier?logo=npm&style=flat-square

### Plugins

| Plugin                                | Version                                              | Loading condition(s)                                                         |
| ------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------- |
| [@typescript-eslint/eslint-plugin]    | ![@typescript-eslint/eslint-plugin version badge]    | `typescript` as dependency                                                   |
| [eslint-plugin-compat]                | ![eslint-plugin-compat version badge]                | -                                                                            |
| [eslint-plugin-diff]                  | ![eslint-plugin-diff version badge]                  | Set one of environment variables: `CI` or `CONTINUOUS_INTEGRATION` to `true` |
| [eslint-plugin-import]                | ![eslint-plugin-import version badge]                | -                                                                            |
| [eslint-plugin-jest]                  | ![eslint-plugin-jest version badge]                  | `jest` or `vitest` as dependency                                             |
| [eslint-plugin-jest-dom]              | ![eslint-plugin-jest-dom version badge]              | `@testing-library/jest-dom` as dependency                                    |
| [eslint-plugin-jest-formatting]       | ![eslint-plugin-jest-formatting version badge]       | `jest` or `vitest` as dependency                                             |
| [eslint-plugin-json-schema-validator] | ![eslint-plugin-json-schema-validator version badge] | -                                                                            |
| [eslint-plugin-jsonc]                 | ![eslint-plugin-jsonc version badge]                 | -                                                                            |
| [eslint-plugin-jsx-a11y]              | ![eslint-plugin-jsx-a11y version badge]              | `react` or `preact` as dependency                                            |
| [eslint-plugin-node]                  | ![eslint-plugin-node version badge]                  | -                                                                            |
| [eslint-plugin-react]                 | ![eslint-plugin-react version badge]                 | `react` or `preact` as dependency                                            |
| [eslint-plugin-react-hooks]           | ![eslint-plugin-react-hooks version badge]           | `react` or `preact` as dependency                                            |
| [eslint-plugin-regexp]                | ![eslint-plugin-regexp version badge]                | -                                                                            |
| [eslint-plugin-sonarjs]               | ![eslint-plugin-sonarjs version badge]               | -                                                                            |
| [eslint-plugin-sql]                   | ![eslint-plugin-sql version badge]                   | -                                                                            |
| [eslint-plugin-storybook]             | ![eslint-plugin-storybook version badge]             | `sb` as dependency                                                           |
| [eslint-plugin-testing-library]       | ![eslint-plugin-testing-library version badge]       | `@testing-library/jest-dom` as dependency                                    |
| [eslint-plugin-unicorn]               | ![eslint-plugin-unicorn version badge]               | -                                                                            |
| [eslint-plugin-yml]                   | ![eslint-plugin-yml version badge]                   | -                                                                            |

[@typescript-eslint/eslint-plugin]: https://github.com/typescript-eslint/typescript-eslint
[@typescript-eslint/eslint-plugin version badge]: https://img.shields.io/npm/v/@typescript-eslint/eslint-plugin?logo=npm&style=flat-square
[eslint-plugin-compat]: https://github.com/amilajack/eslint-plugin-compat
[eslint-plugin-compat version badge]: https://img.shields.io/npm/v/eslint-plugin-compat?logo=npm&style=flat-square
[eslint-plugin-diff]: https://github.com/paleite/eslint-plugin-diff
[eslint-plugin-diff version badge]: https://img.shields.io/npm/v/eslint-plugin-diff?logo=npm&style=flat-square
[eslint-plugin-import]: https://github.com/import-js/eslint-plugin-import
[eslint-plugin-import version badge]: https://img.shields.io/npm/v/eslint-plugin-import?logo=npm&style=flat-square
[eslint-plugin-jest]: https://github.com/jest-community/eslint-plugin-jest
[eslint-plugin-jest version badge]: https://img.shields.io/npm/v/eslint-plugin-jest?logo=npm&style=flat-square
[eslint-plugin-jest-dom]: https://github.com/jest-community/eslint-plugin-jest-dom
[eslint-plugin-jest-dom version badge]: https://img.shields.io/npm/v/eslint-plugin-jest-dom?logo=npm&style=flat-square
[eslint-plugin-jest-formatting]: https://github.com/dangreenisrael/eslint-plugin-jest-formatting
[eslint-plugin-jest-formatting version badge]: https://img.shields.io/npm/v/eslint-plugin-jest-formatting?logo=npm&style=flat-square
[eslint-plugin-json-schema-validator]: https://github.com/ota-meshi/eslint-plugin-json-schema-validator
[eslint-plugin-json-schema-validator version badge]: https://img.shields.io/npm/v/eslint-plugin-json-schema-validator?logo=npm&style=flat-square
[eslint-plugin-jsonc]: https://github.com/ota-meshi/eslint-plugin-jsonc
[eslint-plugin-jsonc version badge]: https://img.shields.io/npm/v/eslint-plugin-jsonc?logo=npm&style=flat-square
[eslint-plugin-jsx-a11y]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
[eslint-plugin-jsx-a11y version badge]: https://img.shields.io/npm/v/eslint-plugin-jsx-a11y?logo=npm&style=flat-square
[eslint-plugin-node]: https://github.com/mysticatea/eslint-plugin-node
[eslint-plugin-node version badge]: https://img.shields.io/npm/v/eslint-plugin-node?logo=npm&style=flat-square
[eslint-plugin-react]: https://github.com/yannickcr/eslint-plugin-react
[eslint-plugin-react version badge]: https://img.shields.io/npm/v/eslint-plugin-react?logo=npm&style=flat-square
[eslint-plugin-react-hooks]: https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
[eslint-plugin-react-hooks version badge]: https://img.shields.io/npm/v/eslint-plugin-react-hooks?logo=npm&style=flat-square
[eslint-plugin-regexp]: https://github.com/ota-meshi/eslint-plugin-regexp
[eslint-plugin-regexp version badge]: https://img.shields.io/npm/v/eslint-plugin-regexp?logo=npm&style=flat-square
[eslint-plugin-sonarjs]: https://github.com/SonarSource/eslint-plugin-sonarjs
[eslint-plugin-sonarjs version badge]: https://img.shields.io/npm/v/eslint-plugin-sonarjs?logo=npm&style=flat-square
[eslint-plugin-sql]: https://github.com/gajus/eslint-plugin-sql
[eslint-plugin-sql version badge]: https://img.shields.io/npm/v/eslint-plugin-sql?logo=npm&style=flat-square
[eslint-plugin-storybook]: https://github.com/storybookjs/eslint-plugin-storybook
[eslint-plugin-storybook version badge]: https://img.shields.io/npm/v/eslint-plugin-storybook?logo=npm&style=flat-square
[eslint-plugin-testing-library]: https://github.com/testing-library/eslint-plugin-testing-library
[eslint-plugin-testing-library version badge]: https://img.shields.io/npm/v/eslint-plugin-testing-library?logo=npm&style=flat-square
[eslint-plugin-unicorn]: https://github.com/sindresorhus/eslint-plugin-unicorn
[eslint-plugin-unicorn version badge]: https://img.shields.io/npm/v/eslint-plugin-unicorn?logo=npm&style=flat-square
[eslint-plugin-yml]: https://github.com/ota-meshi/eslint-plugin-yml
[eslint-plugin-yml version badge]: https://img.shields.io/npm/v/eslint-plugin-yml?logo=npm&style=flat-square

---

## Security

[![workflow security badge]][security policy]

🔐 For more information, please refer to the [Security section] at the root of the
[terminal-nerds/configs] monorepo.

[workflow security badge]: https://img.shields.io/github/workflow/status/terminal-nerds/configs/Maintenance?label=Security&logo=github&style=for-the-badge
[security section]: https://github.com/terminal-nerds/configs#security
[security policy]: https://github.com/terminal-nerds/configs/security/policy

---

## Contributing

[![contributors badge]][contributors url]

🤝 **Contributions of any kind are welcome!**

Please refer to the monorepo _([terminal-nerds/configs])_ project's
[CONTRIBUTING file] for more information if you wish to get involved.

[contributing file]: https://github.com/terminal-nerds/configs/blob/main/.github/CONTRIBUTING.md
[contributors badge]: https://img.shields.io/github/contributors/terminal-nerds/configs?style=for-the-badge
[contributors url]: https://github.com/terminal-nerds/configs#contributors

---

## License

[![license badge]][license]

⚖️ For more information, please refer to the [License section] at the root of
the [terminal-nerds/configs] monorepo.

[license badge]: https://img.shields.io/github/license/terminal-nerds/configs?style=for-the-badge
[license]: https://github.com/terminal-nerds/configs/blob/main/LICENSE.md
[license section]: https://github.com/terminal-nerds/configs#License

---

## Resources

-   [Awesome ESLint]

[awesome eslint]: https://github.com/dustinspecker/awesome-eslint
