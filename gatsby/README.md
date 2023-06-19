# Gatsby Starter

Gatsby 프로젝트 환경 설정을 빠르게 할 수 있도록 도와주는 스타터예요. 다음 옵션을 기준으로 환경을 설정했어요.

```text
✓ Will you be using JavaScript or TypeScript?
• TypeScript

✓ Will you be using a CMS?
• No (or I'll add it later)

✓ Would you like to install a styling system?
• Tailwind CSS

✓ Would you like to install additional features with other plugins?
• Add the Google gtag script for e.g. Google Analytics
• Add responsive images
• Add an automatic sitemap
• Generate a manifest file
```

<br>

## 🎬 Creating Gatsby project

```bash
gatsby new
```

옵션 설정 없이 Gatsby에서 제공하는 기본 설정만으로 프로젝트를 시작하고 싶다면 `gatsby new [folder name]`을 입력하면 돼요. 초기 설정과 관련된 사항은 [Gatsby 공식 문서](https://www.gatsbyjs.com/docs/tutorial/getting-started/part-1/#create-a-gatsby-site)를 참고하세요.

<br>

## 📥 Installing packages

이곳에 있는 명령어를 사용해 패키지를 설치하세요.

```bash
# ESLint for Prettier

npm install --save-dev eslint-config-prettier eslint-plugin-prettier

# Prettier

npm install --save-dev prettier

# Prettier for Tailwind CSS

npm install --save-dev prettier-plugin-tailwindcss

# Stylelint

npm install --save-dev stylelint stylelint-config-standard stylelint-order

# Stylelint for Prettier

npm install --save-dev stylelint-config-prettier
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
- tailwindcss
- typescript

<br>

## 📋 Detailing packages

각 패키지에 대한 설명은 최상위 폴더에 있는 [README.md](https://github.com/biniruu/starter-kit-frontend#detailing-packages)에서 확인할 수 있어요.

<br>
