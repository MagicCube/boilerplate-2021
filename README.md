# boilerplate-2021

Add your project descriptions here.

---

## Demo

https://magiccube.github.io/boilerplate-2021/

## Usage

```sh
git clone https://github.com/MagicCube/boilerplate-2021.git
```

Replace all `boilerplate-2021` with your own project name after cloning.

## Install

Install via [Yarn](https://yarnpkg.com/).

```sh
yarn
```

## Develop

```sh
yarn dev
```

## Build

```sh
yarn build
```

## Deploy to GitHub Pages

In `.travis.yml`, we've already integrated our project with [Travis' pages deployment](https://docs.travis-ci.com/user/deployment/pages/),
which means every `push` to `master` branch will trigger Travis to build and update GitHub pages automatically.

> You’ll need to generate a [personal access token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
with the `public_repo` or `repo` scope (`repo` is required for private repositories).
Since the token should be private, you’ll want to pass it to Travis securely in your repository settings or via encrypted variables in `.travis.yml`.

Alternatively, you can also run the following command from local to manually deploy GitHub pages.

```sh
yarn deploy
```

Visit [GitHub Pages settings page](https://github.com/MagicCube/boilerplate-2021/settings/pages) to config your own site.
