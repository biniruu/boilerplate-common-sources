# Vanilla JS Starter

Vanilla JS 프로젝트 환경 설정을 빠르게 할 수 있도록 도와주는 스타터예요.

<br>

## 📒Setting up Storybook

스토리북은 프로젝트 환경 설정을 모두 마친 후에 설치하면 좋아요.

```bash
npx storybook@latest init
```

설치 중에 ESLint 설치 여부를 파악하여 다음과 같이 eslint-plugin-storybook 플러그인 설치를 물어봐요.

> We have detected that you're using ESLint. Storybook provides a plugin that gives the best experience with Storybook and helps follow best practices: <https://github.com/storybookjs/eslint-plugin-storybook#readme>

yes를 선택하면 플러그인 설치와 함께 .eslintrc.js > extends에 `plugin:storybook/recommended` 옵션 추가까지 자동으로 해 줘요.

<br>

## 📥Installing packages

이곳에 있는 명령어를 사용해 패키지를 설치하세요.

```bash
# Babel

yarn add -D @babel/core @babel/plugin-transform-modules-commonjs @babel/plugin-transform-runtime @babel/preset-env

# Babel for ESLint

yarn add -D @babel/eslint-parser

# Babel for Node.js

yarn add -D @babel/node

# ESLint

yarn add -D eslint eslint-plugin-import

# ESLint for A11y with JSX

yarn add -D eslint-plugin-jsx-a11y

# ESLint for Jest

yarn add -D eslint-plugin-jest

# ESLint for Prettier

yarn add -D eslint-config-prettier eslint-plugin-prettier

# ESLint for Storybook
#
# 💁🏻 Storybook을 설치하는 과정에서 설치 여부를 물어보기 때문에 굳이 먼저 설치할 필요는 없어요.

yarn add -D eslint-plugin-storybook

# ESLint for Webpack

yarn add -D eslint-webpack-plugin

# Jest
#
# 💁🏻‍♀️ @types/jest는 TypeScript 프로젝트가 아니더라도 설치를 권장해요. jest의 intellisense를 사용할 수 있기 때문이에요.

yarn add -D @types/jest jest

# Lodash

yarn add lodash lodash-es

# Nodemon

yarn add -D nodemon

# PostCSS
#
# 💁🏻‍♂️ postcss-preset-env를 설치하지 않는다면 아래 링크에 정리된 postcss 플러그인은 별도로 설치해야 해요.
# https://github.com/csstools/postcss-plugins/tree/main/plugins

yarn add -D postcss postcss-html postcss-loader postcss-nesting postcss-preset-env postcss-syntax

# PostCSS for JSX

yarn add -D postcss-jsx

# PostCSS for SCSS

yarn add -D postcss-scss

# Prettier

yarn add -D prettier

# SASS (SCSS)

yarn add -D sass sass-loader

# Styled-components

yarn add styled-components

# Styled-components for TypeScript

yarn add -D @types/styled-components

# Stylelint

yarn add -D stylelint stylelint-config-standard stylelint-order

# Stylelint for SCSS

yarn add -D stylelint-config-standard-scss stylelint-scss

# Tailwind CSS

yarn add tailwindcss

# Webpack

yarn add -D source-map-loader style-loader webpack
```

<br>

## 📋Detailing packages

각 패키지에 대한 설명은 최상위 폴더에 있는 [README.md](https://github.com/biniruu/starter-pack#detailing-packages)에서 확인할 수 있어요.
