# `ts-package-template`

This is a NPM package template for TypeScript projects.

Features:

- Uses [Node.js](#)
- Uses [NPM](#)
- Uses [TypeScript](#) for X
- Uses [Prettier](#) for code formatting
- Uses [ESLint](#) for code linting
- Uses [GitHub Packages](#)
- Uses [GitHub Actions](#)
- Uses [Docker Compose](#)

## Useful links

- lint & format
  - https://eslint.org/
  - https://github.com/typescript-eslint/typescript-eslint
  - https://eslint.org/docs/rules/
  - https://prettier.io/
  - https://github.com/prettier/eslint-config-prettier
  - https://github.com/prettier/eslint-plugin-prettier
  - https://prettier.io/docs/en/options.html
- [GitHub Actions](https://help.github.com/en/actions)
  - [Configuring a workflow](https://help.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow)
    - [Creating a workflow file](https://help.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow#creating-a-workflow-file)
  - [Workflow syntax](https://help.github.com/en/actions/reference/workflow-syntax-for-github-actions)
  - [Events that trigger workflows](https://help.github.com/en/actions/reference/events-that-trigger-workflows)
  - [Software installed on GitHub-hosted runners](https://help.github.com/en/actions/reference/software-installed-on-github-hosted-runners)
  - [Creating and storing encrypted secrets](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)
- [GitHub Packages](https://help.github.com/en/packages)
  - [Configuring npm for use with GitHub Packages](https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages)
    - [Publishing multiple packages to the same repository](https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages#publishing-multiple-packages-to-the-same-repository)
- GitHub Actions + Packages
  - [Authenticating with the GITHUB_TOKEN](https://help.github.com/en/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)

## Requirements

TODO

## Installation

TODO describe scope configuration - github packages

```console
$ npm install --save "@damlys/ts-package-template"
```

## TypeScript API

```typescript
import { Greeter } from "@damlys/ts-package-template";

const greeter: Greeter = new Greeter("Bob");
greeter.greet(); // will return "Hello Bob!"
```

## JavaScript API

```javascript
const { Greeter } = require("@damlys/ts-package-template");

const greeter = new Greeter("Bob");
greeter.greet(); // will return "Hello Bob!"
```

## Development

```console
$ docker-compose run --rm workspace
$ npm run
```

## Versioning

TODO

## Continuous integration

TODO describe github actions
