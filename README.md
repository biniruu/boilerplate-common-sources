# Starter kit for client side development environment

```
📢 공사 중 안내

별도로 나눴던 레포지토리를 모노레포로 통합하고 있습니다.
다소 안 맞는 내용이 있으니 주의해주세요.
```

프로젝트를 시작할 때 필요한 기본적인 설정 저장소예요.  
린터, 패키지, 설정 등을 골라 설치할 수 있어요.

> 제가 설정이나 패키지를 다 알지 못해요🥺 불필요한 것이 섞였거나 더 좋은 것이 있을 수도 있어요.

> 오랫동안 업데이트가 되지 않았으면 여기 있는 대로 설정했을 때 문제가 발생할 수 있어요. 물론 최근 업데이트 일자와 상관없이 문제가 발생할 수도 있어요🫠

<br>

## 패키지 설명 📄

각 패키지가 어느 곳에 쓰이는지 알아보세요.

- [@babel/core](https://www.npmjs.com/package/@babel/core) : @babel/eslint-parser 설치를 위해 필요
- [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser) : babel-eslint
- [@babel/plugin-transform-modules-commonjs](https://www.npmjs.com/package/@babel/plugin-transform-modules-commonjs) : es2015 모듈을 commonJS로 변환
- [@babel/plugin-transform-runtime](https://www.npmjs.com/package/@babel/plugin-transform-runtime) : 전역 스코프를 오염시키지 않는 polyfill 지원
- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) : Babel의 지원 스펙을 지정
- [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react) : "This experimental syntax requires enabling one of the following parser plugin(s): 'jsx, flow, typescript'" 에러 해결을 위해 필요 ([관련 글 보기](https://ffan0811.medium.com/error-debugging-this-experimental-syntax-requires-enabling-one-of-the-following-parser-plugin-s-22946599a0a4))
- [@craco/craco](https://www.npmjs.com/package/@craco/craco) : CRA로 리액트를 설치했을 때 webpack 설정 지원
- [@types/jest](https://www.npmjs.com/package/@types/jest) : jest의 타입 정의와 hint 제공
- [@types/lodash-es](https://www.npmjs.com/package/@types/lodash-es) : lodash 타입 제공
- [@types/postcss-preset-env](https://www.npmjs.com/package/@types/postcss-preset-env) : typescript 환경에서 postcss-preset-env를 사용할 때 필요한 타입 정의
- [@types/react-test-renderer](https://www.npmjs.com/package/@types/react-test-renderer) : react-test-renderer 타입 제공
- [@types/styled-components](https://www.npmjs.com/package/@types/styled-components) : styled-components 타입 제공
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) : typescript 관련 lint 규칙 제공
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) : typescript를 위한 eslint 파서
- [@typescript-eslint/types](https://www.npmjs.com/package/@typescript-eslint/types) : TypeScript-ESTree Types
- [@typescript-eslint/typescript-estree](https://www.npmjs.com/package/@typescript-eslint/typescript-estree) : TypeScript ESTree
- [@typescript-eslint/utils](https://www.npmjs.com/package/@typescript-eslint/utils) : typescript에서 eslint를 사용할 때 유용한 도구
- [autoprefixer](https://www.npmjs.com/package/autoprefixer) : cross browser에 필요한 css 속성 prefix를 자동으로 생성
- [babel-jest](https://www.npmjs.com/package/babel-jest) : JS/JSX 파일을 Jest가 실행할 수 있는 자바스크립트로 컴파일
- [chai](https://www.npmjs.com/package/chai)
- [eslint](https://www.npmjs.com/package/eslint)
- [eslint-config-next](https://www.npmjs.com/package/eslint-config-next)
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier) : prettier와 충돌을 일으키는 eslint 규칙 비활성화
- [eslint-config-sinon](https://www.npmjs.com/package/eslint-config-sinon)
- [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript) : tsconfig에서 path alias 사용을 위해 필요
- [eslint-plugin-chai-friendly](https://www.npmjs.com/package/eslint-plugin-chai-friendly)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) : es2015+ import/export 구문 지원 및 규칙 제공
- [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest) : jest 관련 규칙 제공
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) : jsx 내에서 웹 접근성 관련 피드백 제공
- [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha)
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier) : prettier에서 인식하는 코드상의 포맷 오류를 eslint 오류로 출력
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) : react 규칙 관련 피드백 제공
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) : react hooks 규칙 관련 피드백 제공
- [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue)
- [eslint-plugin-nuxt](https://www.npmjs.com/package/eslint-plugin-nuxt)
- [eslint-webpack-plugin](https://www.npmjs.com/package/eslint-webpack-plugin)
- [jest](https://www.npmjs.com/package/jest)
- [jest-serializer-vue](https://www.npmjs.com/package/jest-serializer-vue) : 저장된 Jest Snapshot을 VueJS에 맞게 개선
- [lodash](https://www.npmjs.com/package/lodash) : javascript 유틸리티 라이브러리
- [lodash-es](https://www.npmjs.com/package/lodash-es) : 필요한 lodash 함수만 골라 사용하고, 사용하지 않은 함수는 tree shaking할 수 있는 lodash 패키지
- [mocha](https://www.npmjs.com/package/mocha)
- [postcss](https://www.npmjs.com/package/postcss)
- [postcss-html](https://www.npmjs.com/package/postcss-html) : html을 파싱할 때 필요한 postcss 문법
- [postcss-jsx](https://www.npmjs.com/package/postcss-jsx) : postcss의 css-in-js 실행을 위해 필요
- [postcss-loader](https://www.npmjs.com/package/postcss-loader) : webpack에서 postcss를 실행
- [postcss-nesting](https://www.npmjs.com/package/postcss-nesting) : nesting 문법 코드를 pure css 문법에 맞게 변환
- [postcss-preset-env](https://www.npmjs.com/package/postcss-preset-env) : 주요 postcss 플러그인을 모은 plugin pack ([설치 플러그인 목록 확인](https://www.libtrends.info/npm-compare/autoprefixer-vs-postcss-nested-vs-postcss-nesting-vs-postcss-preset-env-vs-precss))
- [postcss-syntax](https://www.npmjs.com/package/postcss-syntax) : 파일 확장자나 소스에 따라 postcss가 적용할 플러그인을 자동으로 선택
- [postcss-scss](https://www.npmjs.com/package/postcss-scss) : scss를 css로 트랜스파일
- [prettier](https://www.npmjs.com/package/prettier)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) : 라우터 지원
- [react-test-renderer](https://www.npmjs.com/package/react-test-renderer) : 테스트 시 reactDOM의 스냅샷 생성
- [sass](https://www.npmjs.com/package/sass)
- [sass-loader](https://www.npmjs.com/package/sass-loader) : webpack에서 scss를 실행
- [sinon](https://www.npmjs.com/package/sinon)
- [styled-components](https://www.npmjs.com/package/styled-components)
- [stylelint](https://www.npmjs.com/package/stylelint)
- [stylelint-config-prettier](https://www.npmjs.com/package/stylelint-config-prettier) : prettier 관련 stylelint rules 확장
- [stylelint-config-standard](https://www.npmjs.com/package/stylelint-config-standard) : stylelint rules 확장
- [stylelint-config-standard-scss](https://www.npmjs.com/package/stylelint-config-standard-scss) : scss 관련 stylelint rules 확장
- [stylelint-order](https://www.npmjs.com/package/stylelint-order) : .stylelintrc.js에서 설정한 order대로 코드가 작성되었는지 파악
- [stylelint-scss](https://www.npmjs.com/package/stylelint-scss) : scss 문법 오류 피드백
- [ts-jest](https://www.npmjs.com/package/ts-jest) : typescript 환경에서 jest를 사용할 때 필요
- [typescript](https://www.npmjs.com/package/typescript)
- [vue-jest](https://www.npmjs.com/package/vue-jest) : Vue 파일을 Jest가 실행할 수 있는 자바스크립트로 컴파일
- [@vue/server-test-utils](https://www.npmjs.com/package/@vue/server-test-utils) : Vue.js 환경에서 단위 테스트를 하기 위한 공식(Official) 라이브러리
- [@vue/test-utils](https://www.npmjs.com/package/@vue/test-utils) : Vue.js 환경에서 단위 테스트를 하기 위한 공식 라이브러리.

```
❌ deprecate 되었어요.

- @stylelint/postcss-css-in-js
- babel-eslint : @babel/eslint-parser로 대체
- dart-sass : sass로 대체
- eslint-loader : eslint-webpack-plugin으로 대체
- node-sass : dart-sass로 대체
```

<br>

## 기본 패키지 설치 📦

개발 환경에 따라 적절한 패키지를 설치하세요.  
타입스크립트로 개발할 때는 Javascript 목록에 있는 패키치를 설치한 후 추가로 Typescript 목록에 있는 패키지를 설치하면 됩니다.

### Javascript

```bash
# Babel

yarn add -D @babel/core

# Eslint & Prettier

yarn add -D @babel/eslint-parser eslint eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-webpack-plugin prettier

# Jest

yarn add -D @babel/plugin-transform-modules-commonjs @babel/plugin-transform-runtime eslint-plugin-jest jest

# Lodash

yarn add lodash lodash-es

# Markdownlint

yarn add -D markdownlint

# Mocha

yarn add -D chai eslint-config-sinon eslint-plugin-chai-friendly eslint-plugin-mocha mocha sinon

# Nuxt.js

yarn add -D eslint-plugin-nuxt

# PostCSS

yarn add -D postcss postcss-html postcss-jsx postcss-loader postcss-nesting postcss-preset-env postcss-scss postcss-syntax

# Scss

yarn add -D sass sass-loader stylelint-config-standard-scss stylelint-scss

# styled-components

yarn add styled-components

# Stylelint

yarn add -D stylelint stylelint-config-prettier stylelint-config-standard stylelint-order

# Tailwind CSS

yarn add -D tailwindcss

# Vue.js

yarn add -D eslint-plugin-vue
```

### Typescript

```bash
# Eslint & Prettier

yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser @typescript-eslint/types @typescript-eslint/typescript-estree @typescript-eslint/utils eslint-import-resolver-typescript

# Jest

yarn add -D @types/jest ts-jest

# Lodash

yarn add -D @types/lodash-es

# PostCSS

yarn add -D @types/postcss-preset-env

# React

yarn add -D @types/react-test-renderer

# Styled-components

yarn add -D @types/styled-components

# Typescript

yarn add -D typescript
```

<br>

## 설정 파일 💾

제 취향이 듬뿍 담긴 파일이니 각자 취향에 맞춰 수정 후 사용하세요👻

### Craco

- `craco.config.js`

### Eslint

- `.eslintignore`

`.eslintrc.js`는 각 개발 환경별로 다르게 설정되었을 수 있어요

### Git

- `.gitignore`

### Github

- `.github`

### Jest

- `jest.config.js`

### Markdownlint

- `.markdownlint.json`

### PostCSS

- `postcss.config.js`

### Prettier

- `.prettierignore`
- `.prettierrc`

### Stylelint

- `.stylelintignore`
- `.stylelintrc.js`

### Tailwind CSS

- `tailwind.config.js`

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
