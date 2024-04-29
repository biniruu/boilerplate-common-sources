# Starter pack for web development environment

It is starters that help you quickly set up the environment when starting a project. You can choose and install packages, configuration files, etc., tailored to the project's technology stack.

It can be used for setting up the following projects. Click on the required project and proceed.

- [Express](https://github.com/biniruu/starter-pack/tree/main/express)
- [Express with TypeScript](https://github.com/biniruu/starter-pack/tree/main/express-typescript)
- [Gatsby with TypeScript](https://github.com/biniruu/starter-pack/tree/main/gatsby-typescript)
- [JavaScript](https://github.com/biniruu/starter-pack/tree/main/javascript/js)
- [JavaScript for Backend](https://github.com/biniruu/starter-pack/tree/main/javascript/js-backend)
- [Next.js with TypeScript](https://github.com/biniruu/starter-pack/tree/main/next-typescript)
- [Nuxt.js with TypeScript](https://github.com/biniruu/starter-pack/tree/main/nuxt-typescript)
- [React.js with Vite](https://github.com/biniruu/starter-pack/tree/main/react-vite)
- [Three.js with TypeScript](https://github.com/biniruu/starter-pack/tree/main/three-typescript)
- [TypeScript](https://github.com/biniruu/starter-pack/tree/main/typescript/ts)
- [TypeScript for Backend](https://github.com/biniruu/starter-pack/tree/main/typescript/ts-backend)
- [Webpack](https://github.com/biniruu/starter-pack/tree/main/webpack)
- [Websocket](https://github.com/biniruu/starter-pack/tree/main/websocket)
- [Wordpress](https://github.com/biniruu/starter-pack/tree/main/wordpress)

<br>

---

<br>

❌ deprecated packages

- @stylelint/postcss-css-in-js
- @types/handlebars : handlebars가 자체적으로 타입 정의 제공
- @types/postcss-preset-env : postcss-preset-env가 자체적으로 타입 정의 제공
- @types/prettier : prettier가 자체적으로 타입 정의 제공
- @types/webpack-dev-server : webpack-dev-server가 자체적으로 타입 정의 제공
- apollo-server-core : @apollo/server로 대체
- apollo-server-express : @apollo/server로 대체
- babel-eslint : @babel/eslint-parser로 대체
- dart-sass : sass로 대체
- eslint-loader : eslint-webpack-plugin으로 대체
- node-sass : dart-sass로 대체
- stylelint-config-prettier : stylelint 버전 16 이하 환경 또는 [deprecated stylistic rules](https://stylelint.io/migration-guide/to-15/#deprecated-stylistic-rules)을 사용하는 경우에만 필요

<br>

💁🏻 You don't need to use the following packages when using TypeScript

- @babel/eslint-parser
- @babel/preset-react

<br>

## 👍🏻Recommended packages

Useful packages but are not included in this repository.

- [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) : 빌드된 파일 용량을 시각적으로 구성
- [cra-bundle-analyzer](https://www.npmjs.com/package/cra-bundle-analyzer) : eject하지 않고 webpack-bundle-analyzer와 동일한 기능 사용 가능

<br>

## 🚀Recommended extensions for VS Code

This extensions can enhanced convenience.

[https://github.com/biniruu/starter-pack/blob/main/.vscode/extensions.json](https://github.com/biniruu/starter-pack/blob/main/.vscode/extensions.json)

<br>

## 📦Consider using these packages

Note that these packages might be used in your projects. (not included in this projects)

```bash
# Chai

yarn add -D chai

# ESLint for Chai

yarn add -D eslint-plugin-chai-friendly

# ESLint for Mocha

yarn add -D eslint-plugin-mocha

# ESLint for Sinon

yarn add -D eslint-config-sinon

# ESLint for Vue.js

yarn add -D eslint-plugin-vue

# Handlebars

yarn add handlebars

# Handlebars for TypeScript

yarn add -D @types/handlebars-webpack-plugin

# Handlebars for Webpack

yarn add handlebars-loader handlebars-webpack-plugin

# Markdownlint

yarn add -D markdownlint

# Mocha

yarn add -D mocha

# Sinon

yarn add -D sinon

# WebSocket

yarn add ws

# WebSocket for TypeScript

yarn add -D @types/ws
```
