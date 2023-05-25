# Next.js with TypeScript Starter

> ⚠️ 이 문서는 아직 부정확하기 때문에 지속적으로 수정하고 있어요.

Next.js + TypeScript 프로젝트를 시작할 때 도움이 되는 스타터예요. Create Next App을 사용해 Next.js 프로젝트를 설치한 다음, 필요한 패키지를 추가해서 사용할 수 있어요.

<br>

## 🎬Creating Next.js project

이곳에 있는 설정은 기본 옵션으로 create next app을 설치한 경우를 기준으로 작성했어요. (Next.js 버전 13.4 이후)

```bash
yarn create next-app <my-app-name> --typescript
```

이미 만든 폴더에 설치한다면 `yarn create next-app . --typescript`를 입력하면 돼요. 초기 설정과 관련된 사항은 [NEXT.JS 공식 문서](https://nextjs.org/docs/api-reference/create-next-app)를 참고하세요.

<br>

## 🛒Getting configuration files

이곳은 Yarn Workspaces로 제작한 Monorepo 환경이기 때문에 대부분의 설정 파일이 최상위 폴더에 있어요. 만일 최상위 폴더에 있는 설정 파일과 동일한 파일이 이곳에도 있을 경우에는 (필요하다면) 두 파일을 조합해서 사용하세요.

<br>

[설정 파일 가지러 가기](https://github.com/biniruu/starter-kit-frontend)

<br>

## 📥Installing packages

이곳에 있는 명령어를 사용해 패키지를 설치하세요.

```bash
# Eslint & Prettier

yarn add -D @typescript-eslint/eslint-plugin

# Dotenv

yarn add -D dotenv dotenv-expand env-cmd

# Jest

yarn add -D @types/jest eslint-plugin-jest jest jest-resolve ts-jest

# Lodash

yarn add lodash-es
yarn add -D @types/lodash-es

# PostCSS

yarn add -D postcss-cli postcss-flexbugs-fixes postcss-html postcss-normalize postcss-preset-env postcss-syntax postcss-url

# Next

yarn add -D @types/react-test-renderer react-test-renderer

# Recoil

yarn add recoil

# SASS (SCSS)

yarn add -D sass sass-loader stylelint-config-standard-scss stylelint-scss source-map-loader

# Styled-components

yarn add styled-components
yarn add -D @types/styled-components

# Stylelint

yarn add -D stylelint stylelint-config-prettier stylelint-config-standard stylelint-order

# Tailwind css

yarn add -D prettier-plugin-tailwindcss
```

```text
💁🏻‍♀️ 아래 패키지는 Create Next App에 포함돼 있어서 별도로 설치하지 않아도 돼요.

- @types/node
- @types/react
- @types/react-dom
- @typescript-eslint/parser
- @typescript-eslint/types
- @typescript-eslint/typescript-estree
- @typescript-eslint/utils
- eslint
- eslint-config-next
- eslint-config-prettier
- eslint-import-resolver-typescript
- eslint-plugin-import
- eslint-plugin-prettier
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-jsx-a11y
- tailwindcss
- typescript
```

```text
💁🏻‍♂️ postcss-preset-env를 설치했다면 링크에 정리된 postcss 플러그인은 별도로 설치하지 않아도 돼요.

[postcss plugins](https://github.com/csstools/postcss-plugins/tree/main/plugins)
```

<br>

## 📋Detailing packages

각 패키지에 대한 설명은 최상위 폴더에 있는 [README.md](https://github.com/biniruu/starter-kit-frontend#detailing-packages)에서 확인할 수 있어요.

<br>

## 💡Furthermore

이곳에서 더 많은 설정과 패키지를 찾아보세요.

[Starter kit for client side development environment](https://github.com/biniruu/starter-kit-frontend)
