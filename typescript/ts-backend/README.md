# TypeScript Starter

백엔드 개발을 위한 TypeScript 프로젝트 환경 설정을 빠르게 할 수 있도록 도와주는 스타터예요.

<br>

## 📥Installing packages

이곳에 있는 명령어를 사용해 패키지를 설치하세요.

```bash
# ESLint

yarn add -D @eslint/js eslint eslint-plugin-import globals

# ESLint for Jest

yarn add -D eslint-plugin-jest eslint-plugin-jest-dom

# ESLint for troubleshooting

yarn add -D @eslint/compat

# ESLint for TypeScript
#
# 💁🏻‍♀️ eslint-plugin-jest를 설치하지 않는다면 아래 패키지는 별도로 설치해야 해요.
# @typescript-eslint/types @typescript-eslint/typescript-estree @typescript-eslint/utils

yarn add -D  eslint-import-resolver-typescript typescript-eslint

# ESLint for Webpack

yarn add -D eslint-webpack-plugin

# Jest
#
# 💁🏻 If you have added 'jest', you don't need to add these packages: jest-resolve and jest-resolve-dependencies.

yarn add -D jest jest-environment-jsdom jsdom

# Jest for TypeScript

yarn add -D @types/jest jest ts-jest

# Lodash

yarn add lodash lodash-es
yarn add -D @types/lodash-es

# Node.js

yarn add -D @types/node tsconfig-paths ts-node ts-node-dev

# Nodemon

yarn add -D nodemon

# Prettier

yarn add -D prettier

# TypeScript

yarn add -D typescript

# Webpack

yarn add -D @types/webpack source-map-loader style-loader webpack webpack-cli webpack-dev-server webpack-merge html-webpack-plugin ts-loader workbox-webpack-plugin
```
