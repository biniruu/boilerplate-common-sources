# Vanilla JS with TypeScript Starter

TypeScript 프로젝트를 시작할 때 도움이 되는 스타터예요.

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

yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser @typescript-eslint/types @typescript-eslint/typescript-estree @typescript-eslint/utils eslint eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-prettier eslint-webpack-plugin prettier

# Jest

yarn add -D @types/jest eslint-plugin-jest jest ts-jest

# Lodash

yarn add lodash lodash-es
yarn add -D @types/lodash-es

# PostCSS

yarn add -D postcss postcss-html postcss-jsx postcss-loader postcss-nesting postcss-preset-env postcss-scss postcss-syntax postcss-url

# SASS (SCSS)

yarn add -D sass sass-loader stylelint-config-standard-scss stylelint-scss

# Styled-components

yarn add styled-components
yarn add -D @types/styled-components

# Stylelint

yarn add -D stylelint stylelint-config-prettier stylelint-config-standard stylelint-order

# Tailwind CSS

yarn add tailwindcss

# Typescript

yarn add -D @types/node typescript

# Webpack

yarn add -D source-map-loader style-loader
```

<br>

## 📋Detailing packages

각 패키지에 대한 설명은 최상위 폴더에 있는 [README.md](https://github.com/biniruu/starter-kit-frontend#detailing-packages)에서 확인할 수 있어요.

<br>

## ⭐️Furthermore

이곳에서 더 많은 설정과 패키지를 찾아보세요.

[Starter kit for client side development environment](https://github.com/biniruu/starter-kit-frontend)
