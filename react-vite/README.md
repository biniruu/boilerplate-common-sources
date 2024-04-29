# React.js with TypeScript Starter

Vite를 사용해서 React.js + TypeScript 프로젝트 환경 설정을 빠르게 할 수 있도록 도와주는 스타터예요.

<br>

## 🎬Creating React.js project

```bash
yarn create vite <my-app-name> --template react-ts
```

이미 만든 폴더에 설치한다면 `yarn create vite . --template react`를 입력하면 돼요.

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

Install packages using these commends.

```bash
# Axios

yarn add axios

# Bcrypt.js

yarn add bcryptjs

# Bcrypt.js for TypeScript

yarn add -D @types/bcryptjs

# Dotenv

yarn add dotenv dotenv-expand env-cmd

# ESLint

yarn add -D eslint-plugin-import

# Eslint for GraphQL

yarn add -D @graphql-eslint/eslint-plugin

# ESLint for Jest

yarn add -D eslint-plugin-jest eslint-plugin-jest-dom eslint-plugin-testing-library jest-resolve

# ESLint for React.js

yarn add -D eslint-plugin-jsx-a11y eslint-plugin-react

# ESLint for Storybook
#
# 💁🏻 Storybook을 설치하는 과정에서 설치 여부를 물어보기 때문에 굳이 먼저 설치할 필요는 없어요.

yarn add -D eslint-plugin-storybook

# ESLint for Tailwind CSS

yarn add -D eslint-plugin-tailwindcss

# ESLint for TanStack Query (React Query)

yarn add -D @tanstack/eslint-plugin-query

# ESLint for TypeScript

yarn add -D @typescript-eslint/eslint-plugin eslint-import-resolver-typescript

# GraphQL

yarn add dataloader graphql graphql-scalars reflect-metadata type-graphql
yarn add -D @graphql-codegen/cli

# GraphQL for Client

yarn add @apollo/client

# Jest
#
# 💁🏻 If you have added 'jest', you don't need to add these packages: jest-resolve and jest-resolve-dependencies.

yarn add -D @testing-library/dom @testing-library/jest-dom @testing-library/user-event jest jest-watch-typeahead jsdom

# Jest for CSS module

yarn add -D @types/identity-obj-proxy identity-obj-proxy

# Jest for React.js

yarn add -D @testing-library/react @testing-library/react-hooks

# Jest for TypeScript

yarn add -D @types/jest ts-jest

# Lodash

yarn add lodash-es

# Lodash for TypeScript

yarn add -D @types/lodash-es

# Node.js

yarn add -D @types/node

# PostCSS
#
# 💁🏻‍♂️ postcss-preset-env를 설치하지 않는다면 아래 링크에 정리된 postcss 플러그인은 별도로 설치해야 해요.
# https://github.com/csstools/postcss-plugins/tree/main/plugins

yarn add -D postcss-cli postcss-flexbugs-fixes postcss-html postcss-normalize postcss-preset-env postcss-syntax postcss-url

# PostCSS for Tailwind CSS

yarn add -D @tailwindcss/nesting

# Prettier

yarn add -D prettier

# Prettier for TypeScript

yarn add -D @types/prettier

# React

yarn add react-hook-form react-router-dom
yarn add -D react-test-renderer

# React for Typescript

yarn add -D @types/react-test-renderer

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

# Tailwind CSS

yarn add tailwindcss

# TanStack Query (React Query)

yarn add @tanstack/react-query @tanstack/react-query-devtools

# Vite

yarn add -D vite-plugin-dts
```

<br>

💁🏻‍♀️ 아래 패키지는 create vite에 포함돼 있어서 별도로 설치하지 않아도 돼요.

- @babel/core
- @types/react
- @types/react-dom
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- postcss
- typescript

<br>

💁🏻 아래 패키지는 다른 패키지와 충돌을 일으키기 때문에 사용하지 않아요.

- @swrlab/eslint-plugin-swr : 필수 패키지들이 의존성 패키지로 사용 중인 `eslint-plugin-import`와 충돌을 일으킨다.
- prettier-plugin-tailwindcss : `eslint-plugin-tailwindcss`의 `classnames-order`와 충돌을 일으킨다.

<br>

## 📋Detailing packages

각 패키지에 대한 설명은 최상위 폴더에 있는 [README.md](https://github.com/biniruu/starter-pack#detailing-packages)에서 확인할 수 있어요.
