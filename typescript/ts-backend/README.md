# TypeScript Starter

백엔드 개발을 위한 TypeScript 프로젝트 환경 설정을 빠르게 할 수 있도록 도와주는 스타터예요.

<br>

## 📥Installing packages

이곳에 있는 명령어를 사용해 패키지를 설치하세요.

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

yarn add -D jest

# Jest for TypeScript

yarn add -D @types/jest ts-jest

# Lodash

yarn add lodash lodash-es

# Lodash for TypeScript

yarn add -D @types/lodash-es

# Node.js for TypeScript

yarn add -D @types/node

# Nodemon

yarn add -D nodemon

# Prettier

yarn add -D prettier

# TypeScript

yarn add -D typescript

# Ts-node

yarn add -D tsconfig-paths ts-node ts-node-dev

# Webpack

yarn add -D source-map-loader style-loader webpack webpack-cli webpack-dev-server webpack-merge html-webpack-plugin workbox-webpack-plugin

# Webpack for TypeScript

yarn add -D @types/webpack @types/webpack-dev-server ts-loader
```

<br>

## 📋Detailing packages

각 패키지에 대한 설명은 최상위 폴더에 있는 [README.md](https://github.com/biniruu/starter-pack#detailing-packages)에서 확인할 수 있어요.
