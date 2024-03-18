# Webpack

> ⚠️Not yet fully set.

This starter is for quickly setting up an environment to use `Webpack`.

<br>

## 👼🏻Initialising Webpack

This is not the best practise. Use your own methods.

1. Excute `npx webpack init`
1. If an error like `For using this command you need to install: '@webpack-cli/generators' package.` occurred, re-excute the command
1. Choose options you need

```bash
? Do you want to install 'webpack-cli'? Yes
? Would you like to install '@webpack-cli/generators' package? Yes
? Which of the following JS solutions do you want to use? Typescript
? Do you want to use webpack-dev-server? Yes
? Do you want to simplify the creation of HTML files for your bundle? Yes
? Do you want to add PWA support? Yes
? Which of the following CSS solutions do you want to use? CSS only
? Will you be using PostCSS in your project? Yes
? Do you want to extract CSS for every file? Only for Production
? Do you like to install prettier to format generated configuration? Yes
? Pick a package manager: yarn
```

<br>

## 📥Installing packages

Use these commands to install packages.

```bash
# ESLint

yarn add -D eslint eslint-plugin-import

# ESLint for Jest

yarn add -D eslint-plugin-jest

# ESLint for TypeScript
#
# 💁🏻‍♀️ eslint-plugin-jest를 설치하지 않는다면 아래 패키지는 별도로 설치해야 해요.
# @typescript-eslint/types @typescript-eslint/typescript-estree @typescript-eslint/utils

yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript

# ESLint for Webpack

yarn add -D eslint-webpack-plugin

# Jest
#
# 💁🏻 If you have added 'jest', you don't need to add these packages: jest-resolve and jest-resolve-dependencies.

yarn add -D @testing-library/dom @testing-library/jest-dom @testing-library/user-event jest jest-environment-jsdom jsdom

# Jest for TypeScript

yarn add -D @types/jest ts-jest

# Lodash

yarn add lodash-es

# Lodash for TypeScript

yarn add -D @types/lodash-es

# PostCSS
#
# 💁🏻‍♂️ postcss-preset-env를 설치하지 않는다면 아래 링크에 정리된 postcss 플러그인은 별도로 설치해야 해요.
# https://github.com/csstools/postcss-plugins/tree/main/plugins

yarn add -D cssnano postcss postcss-html postcss-loader postcss-preset-env postcss-syntax postcss-url

# PostCSS for SCSS

yarn add -D postcss-scss

# SASS (SCSS)

yarn add -D sass sass-loader

# Stylelint

yarn add -D stylelint stylelint-config-standard stylelint-order

# Stylelint for SCSS

yarn add -D stylelint-config-standard-scss stylelint-scss

# Ts-node

yarn add -D tsconfig-paths ts-node ts-node-dev

# Webpack

yarn add -D source-map-loader style-loader html-webpack-plugin mini-css-extract-plugin

# Webpack for TypeScript

yarn add -D @types/webpack @types/webpack-dev-server
```

<br>

## 📋Detailing packages

각 패키지에 대한 설명은 최상위 폴더에 있는 [README.md](https://github.com/biniruu/starter-pack#detailing-packages)에서 확인할 수 있어요.
