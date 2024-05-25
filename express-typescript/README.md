# Express with TypeScript Starter

Express + TypeScript 풀스택 프로젝트 환경 설정을 빠르게 할 수 있도록 도와주는 스타터예요. 아직 백엔드쪽은 매우 단순한 설정한 해 놓은 상태예요.

<br>

## 📥Installing packages

이곳에 있는 명령어를 사용해 패키지를 설치하세요.

```bash
# EJS

yarn add ejs
yarn add -D @types/ejs

# ESLint

yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-import-resolver-typescript eslint-plugin-import

# ESLint for Jest
#
# 💁🏻‍♀️ eslint-plugin-jest를 설치하지 않는다면 아래 패키지는 별도로 설치해야 해요.
# @typescript-eslint/types @typescript-eslint/typescript-estree @typescript-eslint/utils

yarn add -D eslint-plugin-jest eslint-plugin-jest-dom

# ESLint for Webpack

yarn add -D eslint-webpack-plugin

# Express

yarn add body-parser cors express
yarn add -D @types/body-parser @types/cors @types/express

# GraphQL

yarn add @apollo/server graphql reflect-metadata

# Jest
#
# 💁🏻 If you have added 'jest', you don't need to add these packages: jest-resolve and jest-resolve-dependencies.
# 💁🏻‍♂️ I recommend adding @types/jest even if it is not a TypeScript project because of its IntelliSense.

yarn add -D @testing-library/dom @testing-library/jest-dom @testing-library/user-event @types/jest jest jest-environment-jsdom jsdom ts-jest

# Lodash

yarn add lodash lodash-es
yarn add -D @types/lodash-es

# Mongoose

yarn add mongoose

# Node.js

yarn add -D @types/node tsconfig-paths ts-node ts-node-dev

# Nodemon

yarn add -D nodemon

# PostCSS
#
# 💁🏻‍♂️ postcss-preset-env를 설치하지 않는다면 아래 링크에 정리된 postcss 플러그인은 별도로 설치해야 해요.
# https://github.com/csstools/postcss-plugins/tree/main/plugins

yarn add -D cssnano postcss postcss-html postcss-loader postcss-preset-env postcss-syntax postcss-url

# PostCSS for JSX

yarn add -D postcss-jsx

# PostCSS for SCSS

yarn add -D postcss-scss

# Prettier

yarn add -D prettier

# Prettier for Tailwind CSS

yarn add -D prettier-plugin-tailwindcss

# SASS (SCSS)

yarn add -D sass sass-loader

# Styled-components

yarn add styled-components
yarn add -D @types/styled-components

# Stylelint

yarn add -D stylelint stylelint-config-standard stylelint-order

# Stylelint for SCSS

yarn add -D stylelint-config-standard-scss stylelint-scss

# Tailwind CSS

yarn add tailwindcss

# TypeScript

yarn add -D typescript

# Webpack

yarn add -D @types/webpack source-map-loader style-loader ts-loader webpack
```
