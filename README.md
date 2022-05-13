# Starter Kit for Settings

프로젝트를 시작할 때 필요한 기본적인 설정 저장소예요.  
린트, 패키지, 설정 등을 골라 설치할 수 있어요.

> 제가 설정이나 패키지를 다 알지 못해요🥺 불필요한 것이 섞였거나 더 좋은 것이 있을 수도 있어요.

> 오랫동안 업데이트가 되지 않았으면 여기 있는 대로 설정했을 때 문제가 발생할 수 있어요.  
> 물론 최근 업데이트 일자와 상관없이 문제가 발생할 수도 있어요🫠

<br>

## 패키지 설명 📄

각 패키지가 어느 곳에 쓰이는지 알아보세요.

- [@babel/core](https://www.npmjs.com/package/@babel/core) : @babel/eslint-parser 설치를 위해 필요
- [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser) : babel-eslint
- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) : Babel의 지원 스펙을 지정
- [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react) : "This experimental syntax requires enabling one of the following parser plugin(s): 'jsx, flow, typescript'" 에러 해결을 위해 필요 ([관련 글 보기](https://ffan0811.medium.com/error-debugging-this-experimental-syntax-requires-enabling-one-of-the-following-parser-plugin-s-22946599a0a4))
- [@craco/craco](https://www.npmjs.com/package/@craco/craco) : CRA로 리액트를 설치했을 때 webpack 설정 지원
- [@stylelint/postcss-css-in-js](https://www.npmjs.com/package/@stylelint/postcss-css-in-js) : typescript 환경에서 stylelint를 사용할 때 발생하는 _CssSyntaxError_ 해결을 위해 필요
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) : typescript 관련 린팅 규칙 제공
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) : typescript를 위한 eslint 파서
- [babel-jest](https://www.npmjs.com/package/babel-jest) : JS/JSX 파일을 Jest가 실행할 수 있는 자바스크립트로 컴파일
- [chai](https://www.npmjs.com/package/chai)
- [eslint](https://www.npmjs.com/package/eslint) : 코드의 문법을 검사하는 린팅과 코드의 스타일을 잡아주는 포맷팅 기능
- [eslint-config-next](https://www.npmjs.com/package/eslint-config-next)
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier) : prettier와 충돌을 일으키는 eslint 규칙 비활성화
- [eslint-config-sinon](https://www.npmjs.com/package/eslint-config-sinon)
- [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript) : tsconfig에서 path alias 사용을 위해 필요
- [eslint-plugin-chai-friendly](https://www.npmjs.com/package/eslint-plugin-chai-friendly)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) : es2015+ import/export 구문 지원
- [eslint-plugin-jest](eslint-plugin-jest) : jest 관련 규칙 제공
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) : jsx 내에서 웹 접근성 규칙 관련 피드백 제공
- [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha)
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier) : prettier에서 인식하는 코드상의 포맷 오류를 eslint 오류로 출력
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) : react 규칙 관련 피드백 제공
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) : react hooks 규칙 관련 피드백 제공
- [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue)
- [eslint-plugin-nuxt](https://www.npmjs.com/package/eslint-plugin-nuxt)
- [eslint-webpack-plugin](https://www.npmjs.com/package/eslint-webpack-plugin)
- [jest](https://www.npmjs.com/package/jest) : test runner
- [jest-serializer-vue](https://www.npmjs.com/package/jest-serializer-vue) : 저장된 Jest Snapshot을 VueJS에 맞게 개선
- [mocha](https://www.npmjs.com/package/mocha)
- [postcss-syntax](https://www.npmjs.com/package/postcss-syntax) : typescript 환경에서 stylelint를 사용할 때 발생하는 _CssSyntaxError_ 해결을 위해 필요
- [prettier](https://www.npmjs.com/package/prettier) : 코드의 스타일을 잡아주는 포맷팅 기능
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) : 라우터 지원
- [sass](https://www.npmjs.com/package/sass)
- [sass-loader](https://www.npmjs.com/package/sass-loader)
- [sinon](https://www.npmjs.com/package/sinon)
- [stylelint](https://www.npmjs.com/package/stylelint)
- [stylelint-config-prettier](https://www.npmjs.com/package/stylelint-config-prettier)
- [stylelint-config-standard](https://www.npmjs.com/package/stylelint-config-standard)
- [stylelint-order](https://www.npmjs.com/package/stylelint-order)
- [stylelint-scss](https://www.npmjs.com/package/stylelint-scss)
- [ts-jest](https://www.npmjs.com/package/ts-jest) : typescript 환경에서 jest를 사용할 때 필요
- [typescript](https://www.npmjs.com/package/typescript)
- [vue-jest](https://www.npmjs.com/package/vue-jest) : Vue 파일을 Jest가 실행할 수 있는 자바스크립트로 컴파일
- [@vue/server-test-utils](https://www.npmjs.com/package/@vue/server-test-utils) : Vue.js 환경에서 단위 테스트를 하기 위한 공식(Official) 라이브러리
- [@vue/test-utils](https://www.npmjs.com/package/@vue/test-utils) : Vue.js 환경에서 단위 테스트를 하기 위한 공식 라이브러리.

```
❌ deprecate 되었어요.

- babel-eslint : @babel/eslint-parser로 대체
- dart-sass : sass로 대체
- eslint-loader : eslint-webpack-plugin으로 대체
- node-sass : dart-sass로 대체
```

<br>

## 기본 패키지 설치 📦

프론트엔드 라이브러리를 사용하지 않을 때 설치하는 기본 패키지예요.  
특정 환경에서는 적절한 패키지로 대체하여 설치해 주세요.

```bash
## Eslint & Perttier

$ yarn add -D @babel/core @babel/eslint-parser eslint eslint-config-prettier eslint-plugin-import eslint-plugin-prettier eslint-webpack-plugin prettier

## Jest

$ yarn add -D eslint-plugin-jest jest

## Markdonwlint

$ yarn add -D markdownlint

## Mocha

$ yarn add -D chai eslint-config-sinon eslint-plugin-chai-friendly eslint-plugin-mocha mocha sinon

## Nuxt.js

$ yarn add -D eslint-plugin-vue eslint-plugin-nuxt

## Sass loader

$ yarn add -D sass sass-loader

## Stylelint

$ yarn add -D stylelint stylelint-config-prettier stylelint-config-standard stylelint-order stylelint-scss

## Typescript

$ yarn add -D @stylelint/postcss-css-in-js @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript postcss-syntax typescript

## Vue.js

$ yarn add -D eslint-plugin-vue
```

<br>

## 설정 파일 💾

제 취향이 듬뿍 담긴 파일이니 각자 취향에 맞춰 수정 후 사용하세요👻

### Eslint

- `.eslintignore`
- `.eslintrc.js`

### Git

- `.gitignore`

### Github

- `.github`

### Jest

- `jest.config.ts`

### Markdownlint

- `.markdownlint.json`

### Perttier

- `.prettierignore`
- `.prettierrc`

### Stylelint

- `.stylelintignore`
- `.stylelintrc.js`

### Typescript

- `tsconfig.json`

<br>

## 필수 vs code 설정 🔧

settings에서 아래 설정을 변경해주세요.

- Editor: Default Formatter => `esbenp.prettier-vscode`
- Eslint > Format: Enable => `true`

<br>

## 필수 vs code 익스텐션 🧩

위 패키지를 제대로 사용하기 위해 꼭 필요한 익스텐션이에요.  
_괄호 안에 있는 익스텐션 ID로 검색하면 편리하게 찾을 수 있어요._

- `ESLint` (dbaeumer.vscode-eslint)
- `markdownlint` (DavidAnson.vscode-markdownlint)
- `Prettier - Code formatter` (esbenp.prettier-vscode)
- `Stylelint` (stylelint.vscode-stylelint)

<br>

## 추천 vs code 익스텐션 🚀

필수는 아니지만, 편의성을 높여주는 익스텐션이에요.

- `JavaScript and TypeScript Nightly` (ms-vscode.vscode-typescript-next)
- `Jest` (Orta.vscode-jest)
- `Sass` (syler.sass-indented)
- `Stylelint Disable Snippets` (hedinne.stylelint-disable-snippets)

<br>

## 각 환경별 스타터 저장소 ⭐️

- [JavaScript with Typescript Starter](https://github.com/biniruu/starter-for-javascript-with-typescript)
- [Next.js with Typescript Starter](https://github.com/biniruu/starter-for-next-with-typescript)
- [React.js with Typescript Starter](https://github.com/biniruu/starter-for-react-with-typescript)
