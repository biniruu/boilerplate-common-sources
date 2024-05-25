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

## ⚠️Modules

Nuxt.js에서는 Nuxt 팀과 커뮤니티에서 제공하는 모듈을 nuxt.config.ts에 추가해서 사용할 수 있어요. 그런데 모듈을 사용할 경우 dev 서버 실행 시 빌드 시간이 너무 오래 걸리는 문제가 생겼어요.

아직 이 문제를 해결할 방법을 알지 못해서 모듈을 설치해 사용할 수 있는 기능을 일반적인 방식으로 사용 중이에요. 자세한 사항은 아래 공식문서 페이지에서 확인할 수 있어요.

- [Modules](https://nuxt.com/modules)
- [Exploring Nuxt Modules](https://nuxt.com/docs/guide/concepts/modules#exploring-nuxt-modules)

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

# ESLint for Jest
#
# 💁🏻‍♀️ eslint-plugin-jest를 설치하지 않는다면 아래 패키지는 별도로 설치해야 해요.
# @typescript-eslint/types @typescript-eslint/typescript-estree @typescript-eslint/utils

yarn add -D eslint-plugin-jest eslint-plugin-jest-dom eslint-plugin-testing-library

# ESLint for Nuxt.js

yarn add -D @nuxtjs/eslint-config-typescript eslint-plugin-nuxt

# ESLint for Tailwind CSS

yarn add -D eslint-plugin-tailwindcss

# ESLint for TypeScript

yarn add -D @typescript-eslint/eslint-plugin eslint-import-resolver-typescript

# ESLint for Vue.js

yarn add -D vue-eslint-parser

# ESLint for Web Accessibility

yarn add -D eslint-plugin-jsx-a11y

# Jest
#
# 💁🏻 If you have added 'jest', you don't need to add these packages: jest-resolve and jest-resolve-dependencies.
# 💁🏻‍♂️ I recommend adding @types/jest even if it is not a TypeScript project because of its IntelliSense.

yarn add -D @testing-library/dom @testing-library/jest-dom @testing-library/user-event @types/jest jest jest-environment-jsdom jest-watch-typeahead jsdom ts-jest

# Jest for CSS module

yarn add -D @types/identity-obj-proxy identity-obj-proxy

# Jest for Vue.js

yarn add -D @testing-library/vue @vue/vue3-jest

# Lodash

yarn add -D @types/lodash-es lodash-es

# PostCSS
#
# 💁🏻‍♂️ postcss-preset-env를 설치하지 않는다면 아래 링크에 정리된 postcss 플러그인은 별도로 설치해야 해요.
# https://github.com/csstools/postcss-plugins/tree/main/plugins

yarn add -D cssnano postcss-cli postcss-flexbugs-fixes postcss-hexrgba postcss-html postcss-normalize postcss-preset-env postcss-responsive-type postcss-syntax

# PostCSS for Tailwind CSS

yarn add -D @tailwindcss/nesting

# Prettier

yarn add -D prettier

# SASS (SCSS)

yarn add -D sass

# Stylelint

yarn add -D stylelint stylelint-config-standard stylelint-order

# Stylelint for SCSS

yarn add -D stylelint-config-standard-scss stylelint-scss

# Tailwind CSS

yarn add -D tailwindcss

# TypeScript

yarn add -D typescript

# Vue.js

yarn add -D volar-service-vetur vue-tsc
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

💁🏻 아래 패키지는 다른 패키지와 충돌을 일으키기 때문에 사용하지 않아요.

- prettier-plugin-tailwindcss : `eslint-plugin-tailwindcss`의 `classnames-order`와 충돌을 일으킨다.
