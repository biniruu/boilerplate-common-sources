# Gatsby with TypeScript Starter

Gatsby with TypeScript 프로젝트 환경 설정을 빠르게 할 수 있도록 도와주는 스타터예요. 이 스타터는 다음 옵션을 기준으로 설정했어요.

```text
✓ Will you be using JavaScript or TypeScript?
• TypeScript

✓ Will you be using a CMS?
• No (or I'll add it later)

✓ Would you like to install a styling system?
• PostCSS

✓ Would you like to install additional features with other plugins?
• Add responsive images
• Add an automatic sitemap
• Generate a manifest file
• Add Markdown and MDX support
```

<br>

## 🚀Beginning gatsby with starter library

테마와 함께 Gatsby를 이용하고 싶다면 Gatsby에서 제공하는 스타터를 사용하세요. 아래 페이지에서 필요한 스타터 라이브러리를 골라 설치할 수 있어요.

[Gatsby Starter Library](https://www.gatsbyjs.com/starters/)

<br>

## 🎬Creating gatsby project

```bash
gatsby new
```

옵션 설정 없이 Gatsby에서 제공하는 기본 설정만으로 프로젝트를 시작하고 싶다면 `gatsby new [folder name]`을 입력하면 돼요. 초기 설정과 관련된 사항은 [Gatsby 공식 문서](https://www.gatsbyjs.com/docs/tutorial/getting-started/part-1/#create-a-gatsby-site)를 참고하세요.

<br>

## 🔌Installing plugins

아래 페이지에서 필요한 플러그인을 골라 설치할 수 있어요.

[Gatsby Plugin Library](https://www.gatsbyjs.com/plugins)

<br>

## 📒Setting up Storybook

스토리북은 프로젝트 환경 설정을 모두 마친 후에 설치하면 좋아요.

```bash
npx storybook@latest init
```

설치 중에 ESLint 설치 여부를 파악하여 다음과 같이 eslint-plugin-storybook 플러그인 설치를 물어봐요.

> We have detected that you're using ESLint. Storybook provides a plugin that gives the best experience with Storybook and helps follow best practices: <https://github.com/storybookjs/eslint-plugin-storybook#readme>

yes를 선택하면 플러그인 설치와 함께 .eslintrc.js > extends에 `plugin:storybook/recommended` 옵션 추가까지 자동으로 해 줘요.

<br>

## 📥Installing packages

이곳에 있는 명령어를 사용해 패키지를 설치하세요.

```bash
# ESLint for Storybook
#
# 💁🏻 Storybook을 설치하는 과정에서 설치 여부를 물어보기 때문에 굳이 먼저 설치할 필요는 없어요.

npm add -D eslint-plugin-storybook

# ESLint for TypeScript

npm install --save-dev @typescript-eslint/eslint-plugin

# Markdownlint
#
# 💁🏻‍♀️ vs code에서는 markdownlint 패키지를 설치하지 않아도 기능을 사용할 수 있어요.
# 1. settings > editor.codeActionsOnSave > source.fixAll.markdownlint를 true로 설정
# 2. .markdownlint 파일 설정

npm add -D markdownlint

# PostCSS

npm install --save-dev postcss-html

# Prettier

npm install --save-dev prettier

# React

npm add react-hook-form

# Stylelint

npm install --save-dev stylelint stylelint-config-standard stylelint-order
```

<br>

💁🏻‍♀️ 아래 패키지는 Gatsby에 포함돼 있어서 별도로 설치하지 않아도 돼요.

- @babel/core
- @types/node
- @types/react
- @types/react-dom
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- @typescript-eslint/types
- @typescript-eslint/typescript-estree
- @typescript-eslint/utils
- css-loader
- css-minimizer-webpack-plugin
- dotenv
- dotenv-expand
- eslint
- eslint-config-react-app
- eslint-import-resolver-typescript
- eslint-plugin-import
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-jsx-a11y
- eslint-webpack-plugin
- file-loader
- lodash
- mini-css-extract-plugin
- postcss
- postcss-flexbugs-fixes
- postcss-loader
- postcss-nested
- style-loader
- typescript

<br>
