# React.js with TypeScript Starter

react + typescript 프로젝트를 시작할 때 필요한 스타터예요.  
create react app으로 react.js 설치 후 react 프로젝트에 필요한 기본적인 패키지를 추가했어요.

개인 프로젝트용으로 만들었기 때문에 각 설정 파일은 제 취향에 맞췄어요.  
저와 취향이 다른 사람에게는 맞지 않을 수도 있어요😇

패키지는 필요한 것만 골라서 설치하세요.

<br>

## 🎬Creating React.js project

```bash
# Create react app with typescript

$ yarn create react-app <my-app-name> --template typescript
```

이미 만든 폴더에 설치한다면 `yarn create react-app ./ --template typescript`를 입력하면 돼요.  
초기 설정과 관련된 사항은 [Create React App 공식 문서](https://create-react-app.dev/docs/adding-typescript/#installation)를 참고하세요.

<br>

## ✏️Editing package.json

CRA로 react 설치 후 아래 설정을 삭제해주세요.
이 설정은 `.eslintrc.js`로 옮겨두었어요.

```json
{
  "eslintConfig": {
    "extends": ["react-app", "react-app/jest"]
  }
}
```

<br>

## 📥Installing packages

```bash
# Eslint & Prettier

yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier prettier

# Dotenv

yarn add env-cmd

# Jest

yarn add -D @types/jest eslint-plugin-jest ts-jest

# Lodash

yarn add lodash-es
yarn add -D @types/lodash-es

# PostCSS

yarn add -D @types/postcss-preset-env postcss-cli postcss-url

# React

yarn add @craco/craco react-router-dom
yarn add -D @types/react-test-renderer react-test-renderer

# Recoil

yarn add recoil

# SASS (SCSS)

yarn add -D sass sass-loader stylelint-config-standard-scss stylelint-scss

# Styled-components

yarn add styled-components
yarn add -D @types/styled-components

# Stylelint

yarn add -D postcss-syntax stylelint stylelint-config-prettier stylelint-config-standard stylelint-order

# Tailwind css

yarn add -D prettier-plugin-tailwindcss tailwindcss
```

```text
💁🏻‍♀️ 아래 패키지는 CRA template typescript에 포함돼 있어서 별도로 설치하지 않아도 돼요.

- @babel/core
- @types/jest
- @types/node
- @types/react
- @types/react-dom
- css-loader
- css-minimizer-webpack-plugin
- dotenv
- dotenv-expand
- eslint
- eslint-import-resolver-typescript
- eslint-plugin-import
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-jsx-a11y
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
- typescript
```

```text
💁🏻 typescript를 사용한다면 아래 패키지는 필요하지 않아요.

- @babel/eslint-parser : babel-eslint
- @babel/preset-react : "This experimental syntax requires enabling one of the following parser plugin(s): 'jsx, flow, typescript'" 에러 해결을 위해 필요[관련 글](https://ffan0811.medium.com/error-debugging-this-experimental-syntax-requires-enabling-one-of-the-following-parser-plugin-s-22946599a0a4)
```

<br>

## 📋Detailing packages

각 패키지에 대한 설명은 최상위 폴더에 있는 [README.md](https://github.com/biniruu/starter-kit-frontend#detailing-packages)에서 확인할 수 있어요.

<br>

## 💡Furthermore

이곳에서 더 많은 설정과 패키지를 찾아보세요.

[Starter Kit for Settings](https://github.com/biniruu/starter-kit-frontend)
