# React.js with TypeScript Starter

React.js + TypeScript 프로젝트를 시작할 때 도움이 되는 스타터예요. Create React App을 사용해 React.js 프로젝트를 설치한 다음, 필요한 패키지를 추가해서 사용할 수 있어요.

<br>

## 🎬Creating React.js project

```bash
yarn create react-app <my-app-name> --template typescript
```

이미 만든 폴더에 설치한다면 `yarn create react-app ./ --template typescript`를 입력하면 돼요. 초기 설정과 관련된 사항은 [Create React App 공식 문서](https://create-react-app.dev/docs/adding-typescript/#installation)를 참고하세요.

<br>

## ✏️Modifying package.json

create react app으로 react 설치한 다음 아래 설정을 삭제해주세요. 이 설정은 `.eslintrc.js`에 이미 있어요.

```json
{
  "eslintConfig": {
    "extends": ["react-app", "react-app/jest"]
  }
}
```

<br>

## 📥Installing packages

이곳에 있는 명령어를 사용해 패키지를 설치하세요.

```bash
# Eslint & Prettier

yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier prettier

# Dotenv

yarn add env-cmd

# Jest

yarn add -D @types/jest eslint-config-react-app eslint-plugin-jest ts-jest

# Lodash

yarn add lodash-es
yarn add -D @types/lodash-es

# PostCSS

yarn add -D postcss-cli postcss-html postcss-syntax postcss-url

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

yarn add -D stylelint stylelint-config-prettier stylelint-config-standard stylelint-order

# Tailwind css

yarn add -D prettier-plugin-tailwindcss tailwindcss
```

```text
💁🏻‍♀️ 아래 패키지는 create react app에 포함돼 있어서 별도로 설치하지 않아도 돼요.

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
💁🏻‍♂️ postcss-preset-env를 설치했다면 링크에 정리된 postcss 플러그인은 별도로 설치하지 않아도 돼요.

[postcss plugins](https://github.com/csstools/postcss-plugins/tree/main/plugins)
```

<br>

## 📋Detailing packages

각 패키지에 대한 설명은 최상위 폴더에 있는 [README.md](https://github.com/biniruu/starter-kit-frontend#detailing-packages)에서 확인할 수 있어요.

<br>
