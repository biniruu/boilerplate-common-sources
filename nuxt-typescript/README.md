# Nuxt.js with TypeScript Starter

Nuxt.js with TypeScript 프로젝트 환경 설정을 빠르게 할 수 있도록 도와주는 스타터예요. Nuxt CLI (nuxi)를 사용해 Nuxt.js 프로젝트를 설치한 다음, 필요한 패키지를 추가해서 사용하세요.

<br>

## 🎬Creating Nuxt.js project

```bash
npx nuxi@latest init <project-name>
```

이미 만든 폴더에 설치한다면 `npx nuxi@latest init .`를 입력하면 돼요. 초기 설정과 관련된 사항은 [Nuxt.js 공식 문서](https://nuxt.com/docs/getting-started/installation#new-project)를 참고하세요.

<br>

## ⚙️Setting PostCSS

Nuxt.js에는 아래 플러그인이 기본 설정되어 있어서 따로 설정할 필요가 없어요. ([Nuxt.js 공식 문서](https://nuxt.com/docs/getting-started/styling#using-postcss))

- autoprefixer
- cssnano
- postcss-import
- postcss-url

postcss 설정은 `postcss.config.js` 파일 대신 `nuxt.config.ts`에서 해요.

<br>

## 📥Installing packages

이곳에 있는 명령어를 사용해 패키지를 설치하세요.

```bash
# Axios

yarn add axios

# Dotenv

yarn add -D dotenv-expand

# ESLint

yarn add -D eslint eslint-plugin-import eslint-plugin-jest

# ESLint for Nuxt.js

yarn add -D @nuxtjs/eslint-config-typescript @nuxtjs/eslint-module eslint-plugin-nuxt

# ESLint for Prettier

yarn add -D eslint-config-prettier eslint-plugin-prettier

# ESLint for TypeScript

yarn add -D @typescript-eslint/eslint-plugin eslint-import-resolver-typescript

# ESLint for Vue.js

yarn add -D eslint-plugin-vue vue-eslint-parser

# ESLint for Web Accessibility

yarn add -D eslint-plugin-jsx-a11y

# Jest

yarn add -D jest jest-resolve jest-resolve-dependencies

# Jest for TypeScript

yarn add -D @types/jest jest-watch-typeahead ts-jest

# Jest for Vue.js

yarn add -D @vue/vue3-jest

# Lodash

yarn add -D lodash-es

# Lodash for Nuxt.js

yarn add -D nuxt-lodash

# Lodash for TypeScript

yarn add -D @types/lodash-es

# PostCSS
#
# 💁🏻‍♂️ postcss-preset-env를 설치하지 않는다면 아래 링크에 정리된 postcss 플러그인은 별도로 설치해야 해요.
# https://github.com/csstools/postcss-plugins/tree/main/plugins

yarn add -D postcss-cli postcss-flexbugs-fixes postcss-hexrgba postcss-html postcss-normalize postcss-preset-env postcss-responsive-type postcss-syntax

# Prettier

yarn add -D prettier

# Prettier for Tailwind CSS

yarn add -D prettier-plugin-tailwindcss

# SASS (SCSS)

yarn add -D sass

# Stylelint

yarn add -D stylelint stylelint-config-standard stylelint-order

# Stylelint for Nuxt.js

yarn add -D @nuxtjs/stylelint-module

# Stylelint for SCSS

yarn add -D stylelint-config-standard-scss stylelint-scss

# Tailwind CSS for Nuxt.js

yarn add @nuxtjs/tailwindcss

# TypeScript

yarn add -D typescript vue-tsc

# Vue.js

yarn add -D volar-service-vetur
```

<br>

💁🏻‍♀️ 아래 패키지는 Nuxt CLI (nuxi)에 포함돼 있어서 별도로 설치하지 않아도 돼요.

- @babel/core
- @types/node
- @typescript-eslint/parser
- autoprefixer
- cssnano
- dotenv
- lodash
- mini-css-extract-plugin
- postcss-import
- postcss-loader
- postcss-nested
- postcss-url
- vls

<br>

## 📋Detailing packages

각 패키지에 대한 설명은 최상위 폴더에 있는 [README.md](https://github.com/biniruu/starter-pack#detailing-packages)에서 확인할 수 있어요.

<br>
