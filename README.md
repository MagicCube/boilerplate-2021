# boilerplate-2021

[![Travic CI Build Status](https://app.travis-ci.com/MagicCube/boilerplate-2021.svg?branch=master)](https://app.travis-ci.com/MagicCube/boilerplate-2021)

Yet another boilerplate for TypeScript and React developers.

[中文介绍](https://zhuanlan.zhihu.com/p/403970666)

---

## Demo

https://magiccube.github.io/boilerplate-2021/

---

## Usage

Since this repository is already a [GitHub Template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-template-repository),
you can directly [create a new GitHub repository from this template](https://github.com/magiccube/boilerplate-2021/generate).

Alternatively, you can clone this repository to your local workspace.

```sh
git clone https://github.com/MagicCube/boilerplate-2021.git
```

Don't forget to replace all the `boilerplate-2021` with your own repository name after cloning.

---

## Install

It is **STRONGLY** recommended to install dependencies via [Yarn](https://yarnpkg.com/).

```sh
yarn
```

---

## Develop

Start a local development server for developing, debugging and testing.

```sh
yarn dev
```

---

## Build

Build for production.

```sh
yarn build
```

Preview the production build.

```sh
yarn preview
```

```sh
yarn preview
```

Generate ES modules and TypeScript declarations.

```sh
yarn build:es
```

Build for GitHub pages.

```sh
yarn build:gh-pages
```

---

## Deploy to GitHub Pages

In `.travis.yml`, we've already integrated our project with [Travis' pages deployment](https://docs.travis-ci.com/user/deployment/pages/),
which means every `push` to `master` branch will trigger Travis to build and update GitHub pages automatically.

> You’ll need to generate a [personal access token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
> with the `public_repo` or `repo` scope (`repo` is required for private repositories).
> Since the token should be private, you’ll want to pass it to Travis securely in your repository settings or via encrypted variables in `.travis.yml`.

Alternatively, you can also run the following command from local to manually deploy GitHub pages.

```sh
yarn deploy
```

Visit [GitHub Pages settings page](https://github.com/MagicCube/boilerplate-2021/settings/pages) to config your own site.

---

## Themes

Two built-in themes are introduced in this boilerplate.

We use `Light Theme` by default.
Change the `@theme` variable to `dark` in `src/styles/theme.less` if you prefer dark mode.
