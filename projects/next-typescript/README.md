# Next.js with TypeScript Starter

> ⚠️ 시작한 지 얼마 안 됐어요. 이 문서는 아직 부정확하기 때문에 지속적인 수정이 필요해요.

Next.js + TypeScript 프로젝트를 시작할 때 필요한 스타터예요.  
create next app으로 Next.js 설치 후, 프로젝트에 필요한 기본적인 패키지를 정리했어요.

개인 프로젝트용으로 만들었기 때문에 각 설정 파일은 개인 취향에 맞췄어요.  
저와 취향이 다른 사람에게는 맞지 않을 수도 있어요😇

패키지는 필요한 것만 골라서 설치하세요.

> 제가 설정이나 패키지를 다 알지 못해요🥺 불필요한 것이 섞였거나 더 좋은 것이 있을 수도 있어요.  
> 저장소 업데이트가 오랫동안 되지 않았으면 여기 있는 대로 설정했을 때 문제가 발생할 수 있어요.  
> 물론 최근 업데이트 일자와 상관없이 문제가 발생할 수도 있어요🫠

<br>

## 👨🏻‍💻Create Next.js project

이곳에 있는 설정은 create next app으로 프로젝트를 시작할 때 모든 옵션에 yes를 선택했을 때를 기준으로 했어요.

```bash
# Create next app with typescript

$ yarn create next-app <my-app-name> --typescript
```

이미 만든 폴더에 설치한다면 `yarn create next-app . --typescript`를 입력하면 돼요.
초기 설정과 관련된 사항은 [NEXT.JS 공식 문서](https://nextjs.org/docs/api-reference/create-next-app)를 참고하세요.

<br>

## ✏️Edit Package.json 수정

create-next-app으로 넥스트 설치 후 아래 설정을 삭제해주세요.
이 설정은 .eslintrc.js로 옮겨두었어요.

```json
{
  "eslintConfig": {
    "extends": ["react-app", "react-app/jest"]
  }
}
```

<br>

## 📦Installing packages

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

yarn add -D @types/postcss-preset-env postcss-cli postcss-flexbugs-fixes postcss-normalize postcss-preset-env postcss-syntax postcss-url

# Next

yarn add -D @types/react-test-renderer eslint-config-next react-test-renderer

# React

yarn add -D @types/react-test-renderer

# Recoil

yarn add recoil

# SASS (SCSS)

yarn add -D sass sass-loader stylelint-config-standard-scss stylelint-scss source-map-loader

# Styled-components

yarn add styled-components
yarn add -D @types/styled-components

# Stylelint

yarn add -D postcss-syntax stylelint stylelint-config-prettier stylelint-config-standard stylelint-order

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
- eslint-config-prettier
- eslint-import-resolver-typescript
- eslint-plugin-import
- eslint-plugin-prettier
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-jsx-a11y
- postcss-nested
- tailwindcss
- typescript
```

<br>

## 📄Detailing packages

각 패키지에 대한 설명은 최상위 폴더에 있는 [README.md](https://github.com/biniruu/starter-kit-frontend#detailing-packages)에서 확인할 수 있어요.

<br>

## ⭐️Furthermore

이곳에서 더 많은 설정과 패키지를 찾아보세요.

[Starter Kit for Settings](https://github.com/biniruu/starter-kit-frontend)
