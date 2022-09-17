# Configs

[![pnpm workspace badge]][pnpm workspace]
[![changesets badge]][changesets]
[![turborepo badge]][turborepo]\
[![stackshare badge]][stackshare url]

➡️ This project is a [monorepo] made with [pnpm workspace] and powered by
[changesets], [turborepo].

[monorepo]: https://en.wikipedia.org/wiki/Monorepo
[pnpm workspace]: https://pnpm.io/workspaces
[pnpm workspace badge]: https://img.shields.io/badge/-pnpm%20workspace-informational?style=for-the-badge&logo=pnpm
[changesets]: https://github.com/changesets/changesets
[changesets badge]: https://img.shields.io/badge/-changesets-gray?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKCAYAAACE2W/HAAABYUlEQVQoU02RvUoDQRDHZ3b3TiwsjI0xWFjb+gIKoqIIKUSCCjY+ho3voO9gF7wq+AaBVOJXY4JaCH5FMSbeJTf+Z3OeWVhmv37zn/kvCwYR6dTBmA1mXsj2Pmyed+6N4dkgdBJYQ4Eh5gzU+1EYN6xJaDFqi3NGAQ6cHYIOJECD+36mJikWMVJ0cbISvfns+tgFVkJrCUkoWho3PivgC4T5eEAcY9sbEPX6xOvRMxQYChYJGAmwHrO12vLEqgcz2LYTSgCxgl3McvQkoQJQc1CtlwtWu/szY9QHuvuS9Af1dlDqVvWRh4YwXVamtaV85Ip6cvspolCckkCRt88eJIRJXtEYut75h3Pw6kMEpghM4QTxG3G32hLfn/bmezR0szfjmRxsvEvaTQBl5qwV2Zc2ddJM1ckQ7jrnpLlf8ucerL/KIUo7UlMAtjaKPDfaz+Rx8wV/V9D/C1JTaR2UTn8B1OeSRP02JSkAAAAASUVORK5CYII=
[turborepo]: https://github.com/vercel/turborepo
[turborepo badge]: https://img.shields.io/badge/-turborepo-gray?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAklJREFUOE91kU9oE1EQxuftbpqkmBRJKRYVih6iIEEELcYoBUF6EQ8lPWihtoInNVYQAhZKLRQiikgvRQ968KDtIRUKKpVWq6IHRaonUVs0BitRBJtkk+xmn9+sG9lG/eC382dnZt/OE1TThFS3fNK7LVKOSKKdkoSuSnWYFLNfNa2pynr/tfc94uefescRbMOpXCBoemarJMjUxLhHpacVw/pqyCbFp5Y6qVo+plliK2z/i6GWu/VD7Hjfue8bSUp74L8UG/4S7xjKLsWSH9e63/+voR1FEVAED0GWm+ITssF8+W6aSJ5Np8ILnFP44dI6+PPgObgKboIlMALEZLeorDH0uUA5n6r1uAewPwX2grcgCS4BAwyCM4ACpdaxgF6KJk8/a+PYrQMIcAG0DNz/2eXkv8Fq3JA8OjM92Hevj333CXZwAroPfjg+mzTgXYRAGyeCRuGGt2LYe7EnOuKjslZtGXEj8DjvdLsgvxLS1N/7d59gBu/4FzpBh9PAVecBD3gD7K82mYWuRrPoZd894DXiMaf4ASzfBC9zAJTBCUBzBy82Byt61FeWsxzXi7+YABnAp6mCJ2B3rXB+z8iFR7HR27XYvQPOcdMVh2bYEsjXij/vHw3lCnqrYjXwFa9WJpJolxsG/PV5jiVJJbPt1MnFSGL5w6bjTe4ae5W5cH+gSuotTVjbNUnXNaE8lsLKauRbMcxS3FCp1yRVCq/S27Iw/uqvAbVEcXNPVJHyMDa7iyzLUIRy2RDikCQr7V807gia5J2s0i8UIcDwgEVTwgAAAABJRU5ErkJggg==
[stackshare badge]: https://img.shields.io/badge/-tech%20stack-yellow?style=for-the-badge&logo=stackshare
[stackshare url]: https://stackshare.io/adchitects/configs

## Project goal

🎯 The objective is to keep used **tool(s) configuration(s), which can be shared
and extendable** between the projects as an isolated, maintainable package,
added as a dependency. Thus, to save time configuring, installing, upgrading
plugins dependencies, etc.

---

## Packages

![workflow CI-CD badge]
[![CodeClimate issues badge]][codeclimate report]\
![node.js version support badge]
[![Dependencies badge]][dependencies url]

[codeclimate issues badge]: https://img.shields.io/codeclimate/issues/adchitects/configs?logo=codeclimate&style=for-the-badge
[codeclimate report]: https://codeclimate.com/github/adchitects/configs
[node.js version support badge]: https://img.shields.io/node/v-lts/@adchitects/eslint-config?style=for-the-badge&logo=nodedotjs
[dependencies badge]: https://img.shields.io/librariesio/github/adchitects/configs?style=for-the-badge
[dependencies url]: https://libraries.io/github/adchitects/configs "Dependencies status"
[workflow ci-cd badge]: https://img.shields.io/github/workflow/status/adchitects/configs/CI%20&%20CD?label=CI%20%26%20CD&logo=github&style=for-the-badge

📦 The following packages are available under the [packages/](./packages)
directory. Each of them has its own instructions _(in the `README.md` files)_
on how to use them.

**ℹ️ All of them are [scoped] - they are prefixed with `@adchitects/`.**
They are accessible for public use and downloadable from the [npmjs.com
registry].

[scoped]: https://docs.npmjs.com/cli/v6/using-npm/scope
[npmjs.com registry]: https://npmjs.com/org/adchitects

| Name                                                | Version                                                              |
| --------------------------------------------------- | -------------------------------------------------------------------- |
| [![eslint-config badge]][eslint-config]             | [![eslint-config version badge]][eslint-config npm page]             |
| [![markdownlint-config badge]][markdownlint-config] | [![markdownlint-config version badge]][markdownlint-config npm page] |
| [![prettier-config badge]][prettier-config]         | [![prettier-config version badge]][prettier-config npm page]         |
| [![stylelint-config badge]][stylelint-config]       | [![stylelint-config version badge]][stylelint-config npm page]       |
| [![syncpack-config badge]][syncpack-config]         | [![syncpack-config version badge]][syncpack-config npm page]         |
| [![typescript-config badge]][typescript-config]     | [![typescript-config version badge]][typescript-config npm page]     |

[eslint-config]: ./packages/eslint/README.md
[eslint-config badge]: https://img.shields.io/badge/eslint-config-informational?style=flat-square&logo=eslint
[eslint-config version badge]: https://img.shields.io/npm/v/@adchitects/eslint-config/latest?style=flat-square&logo=npm
[eslint-config npm page]: https://www.npmjs.com/package/@adchitects/eslint-config
[markdownlint-config]: ./packages/markdownlint/README.md
[markdownlint-config badge]: https://img.shields.io/badge/markdownlint-config-informational?style=flat-square&logo=markdown
[markdownlint-config version badge]: https://img.shields.io/npm/v/@adchitects/markdownlint-config/latest?style=flat-square&logo=npm
[markdownlint-config npm page]: https://www.npmjs.com/package/@adchitects/markdownlint-config
[prettier-config]: ./packages/prettier/README.md
[prettier-config badge]: https://img.shields.io/badge/prettier-config-informational?style=flat-square&logo=prettier
[prettier-config version badge]: https://img.shields.io/npm/v/@adchitects/prettier-config/latest?style=flat-square&logo=npm
[prettier-config npm page]: https://www.npmjs.com/package/@adchitects/prettier-config
[stylelint-config]: ./packages/stylelint/README.md
[stylelint-config badge]: https://img.shields.io/badge/stylelint-config-informational?style=flat-square&logo=stylelint
[stylelint-config version badge]: https://img.shields.io/npm/v/@adchitects/stylelint-config/latest?style=flat-square&logo=npm
[stylelint-config npm page]: https://www.npmjs.com/package/@adchitects/stylelint-config
[syncpack-config]: ./packages/syncpack/README.md
[syncpack-config badge]: https://img.shields.io/badge/syncpack-config-informational?style=flat-square&logo=nodedotjs
[syncpack-config version badge]: https://img.shields.io/npm/v/@adchitects/syncpack-config/latest?style=flat-square&logo=npm
[syncpack-config npm page]: https://www.npmjs.com/package/@adchitects/syncpack-config
[typescript-config]: ./packages/typescript/README.md
[typescript-config badge]: https://img.shields.io/badge/typescript-config-informational?style=flat-square&logo=typescript
[typescript-config version badge]: https://img.shields.io/npm/v/@adchitects/typescript-config/latest?style=flat-square&logo=npm
[typescript-config npm page]: https://www.npmjs.com/package/@adchitects/typescript-config

---

## Security

![workflow maintenance badge]\
[![lgtm alerts badge]][lgtm report]
![Snyk vulnerabilities badge]
[![SonarCloud badge]][sonarcloud report]

🔐 Our team has a shared [Security Policy]. If you have concerns or found an
issue, please follow the instructions, and
remember about one thing:

> We are all ears, but please, **DO NOT create a GitHub issue for reporting a
> vulnerability**.

[workflow maintenance badge]: https://img.shields.io/github/workflow/status/adchitects/configs/Maintenance?label=Maintenance&logo=github&style=for-the-badge
[lgtm alerts badge]: https://img.shields.io/lgtm/alerts/github/adchitects/configs?style=for-the-badge&logo=lgtm
[lgtm report]: https://lgtm.com/projects/g/adchitects/configs
[snyk vulnerabilities badge]: https://img.shields.io/snyk/vulnerabilities/github/adchitects/configs?logo=snyk&style=for-the-badge
[sonarcloud badge]: https://img.shields.io/sonar/quality_gate/adchitects_configs/main?logo=sonarcloud&server=https%3A%2F%2Fsonarcloud.io&style=for-the-badge
[sonarcloud report]: https://sonarcloud.io/summary/overall?id=adchitects_configs
[security policy]: https://github.com/adchitects/configs/security/policy

---

## Contributing

[![contributors badge]][contributors url]

🤝 This project follows the [all-contributors] specification.\
**Therefore, contributions of any kind are welcome!**

Please refer to our [CONTRIBUTING] file for more information if you wish to get
involved.

[all-contributors]: https://github.com/all-contributors/all-contributors
[contributing]: ./.github/CONTRIBUTING.md
[contributors badge]: https://img.shields.io/github/contributors/adchitects/configs?style=for-the-badge
[contributors url]: #project-contributors

### Project contributors

🥰 Thanks goes to these wonderful people and bots _([emoji key])_:

[emoji key]: https://allcontributors.org/docs/en/emoji-key

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/xeho91"><img src="https://avatars.githubusercontent.com/u/18627568?v=4?s=60" width="60px;" alt=""/><br /><sub><b>Matt Kadlubowski</b></sub></a><br /><a href="https://github.com/adchitects/@adchitects/configs/commits?author=xeho91" title="Code">💻</a> <a href="#maintenance-xeho91" title="Maintenance">🚧</a></td>
      <td align="center"><a href="https://www.marcinowczarzak.pl/"><img src="https://avatars.githubusercontent.com/u/16150147?v=4?s=60" width="60px;" alt=""/><br /><sub><b>Marcin Owczarzak</b></sub></a><br /><a href="https://github.com/adchitects/@adchitects/configs/commits?author=acwo" title="Code">💻</a> <a href="#ideas-acwo" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-acwo" title="Maintenance">🚧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
