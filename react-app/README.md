# React.js Starter

React.js 프로젝트 환경 설정을 빠르게 할 수 있도록 도와주는 스타터예요. Create React App을 사용해 React.js 프로젝트를 설치한 다음, 필요한 패키지를 추가해서 사용하세요.

<br>

## 🎬Creating React.js project

```bash
yarn create react-app <my-app-name>
```

이미 만든 폴더에 설치한다면 `yarn create react-app .`를 입력하면 돼요. 초기 설정과 관련된 사항은 [Create React App 공식 문서](https://create-react-app.dev/docs/getting-started)를 참고하세요.

<br>

## ✏️Modifying package.json

create react app으로 react 설치한 다음 아래 설정을 삭제해주세요. 이 설정은 `.eslintrc.js`에 이미 있어요.

```json
{
  "eslintConfig": {
    "extends": ["react-app", "react-app/jest"]
  }
}
```

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
# Axios

yarn add axios

# Craco

yarn add @craco/craco

# Dotenv

yarn add env-cmd

# Eslint for GraphQL

yarn add -D @graphql-eslint/eslint-plugin

# ESLint for Prettier

yarn add -D eslint-config-prettier eslint-plugin-prettier

# ESLint for Storybook
#
# 💁🏻 Storybook을 설치하는 과정에서 설치 여부를 물어보기 때문에 굳이 먼저 설치할 필요는 없어요.

yarn add -D eslint-plugin-storybook

# ESLint for TanStack Query (React Query)

yarn add -D @tanstack/eslint-plugin-query

# GraphQL

yarn add dataloader graphql graphql-scalars reflect-metadata type-graphql
yarn add -D @graphql-codegen/cli

# GraphQL for Client

yarn add @apollo/client

# Lodash

yarn add lodash-es

# PostCSS
#
# 💁🏻‍♂️ postcss-preset-env를 설치하지 않는다면 아래 링크에 정리된 postcss 플러그인은 별도로 설치해야 해요.
# https://github.com/csstools/postcss-plugins/tree/main/plugins

yarn add -D postcss-cli postcss-html postcss-syntax postcss-url

# Prettier

yarn add -D prettier

# Prettier for Tailwind CSS

yarn add -D prettier-plugin-tailwindcss

# React

yarn add react-hook-form react-router-dom
yarn add -D react-test-renderer

# Recoil

yarn add recoil

# Redis

yarn add redis

# SASS (SCSS)

yarn add -D sass

# Styled-components

yarn add styled-components
yarn add -D @types/styled-components

# Stylelint

yarn add -D stylelint stylelint-config-standard stylelint-order

# Stylelint for SCSS

yarn add -D stylelint-config-standard-scss stylelint-scss

# SWR

yarn add swr

# TanStack Query (React Query)

yarn add @tanstack/react-query @tanstack/react-query-devtools
```

<br>

💁🏻‍♀️ 아래 패키지는 create react app에 포함돼 있어서 별도로 설치하지 않아도 돼요.

- @babel/core
- @babel/eslint-parser
- @babel/plugin-transform-modules-commonjs
- @babel/plugin-transform-runtime
- @babel/preset-env
- @types/jest
- @types/node
- @types/prettier
- @types/react
- @types/react-dom
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- css-loader
- css-minimizer-webpack-plugin
- dotenv
- dotenv-expand
- eslint
- eslint-config-react-app
- eslint-import-resolver-typescript
- eslint-plugin-import
- eslint-plugin-jest
- eslint-plugin-jsx-a11y
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-webpack-plugin
- file-loader
- jest
- jest-resolve
- jest-watch-typeahead
- mini-css-extract-plugin
- postcss
- postcss-flexbugs-fixes
- postcss-loader
- postcss-nested
- postcss-normalize
- postcss-preset-env
- postcss-syntax
- sass-loader
- source-map-loader
- style-loader
- tailwindcss

<br>

💁🏻 아래 패키지는 다른 패키지와 충돌을 일으키기 때문에 사용하지 않아요.

- @swrlab/eslint-plugin-swr : 필수 패키지들이 의존성 패키지로 사용 중인 `eslint-plugin-import`와 충돌을 일으킨다.

<br>

## 📋Detailing packages

각 패키지에 대한 설명은 최상위 폴더에 있는 [README.md](https://github.com/biniruu/starter-pack#detailing-packages)에서 확인할 수 있어요.

<br>
