# Setting up prettier & eslint

> _토이 프로젝트나 학습 시 사용하는 개인 설정_

## vs code에 prettier & eslint 설정하기

> npm init 을 하지 않았다면 `npm init -y`를 먼저 실행할 것.

1. prettier, eslint extention 설치
1. npm 설치

   1. babel-eslint // 파서 옵션에 따라 설치하지 않아도 상관없음
   2. eslint // 코드의 문법을 검사하는 린팅과 코드의 스타일을 잡아주는 포맷팅 기능
   3. eslint-loader
   4. eslint-plugin-import // ES2015+의 import/export 구문을 지원
   5. eslint-config-prettier // prettier와 충돌을 일으키는 ESLint 규칙들을 비활성화 시키는 config
   6. eslint-plugin-prettier // Prettier에서 인식하는 코드상의 포맷 오류를 ESLint 오류로 출
   7. prettier // 코드의 스타일을 잡아주는 포맷팅 기능

   ```bash
   $ yarn add -D babel-eslint eslint eslint-loader eslint-config-prettier eslint-plugin-import eslint-plugin-prettier prettier
   ```

1. 프로젝트 root 폴더에 파일 복사

   1. .prettierrc
   2. .prettierignore
   3. .eslintrc.js
   4. .eslintignore

## vs code의 settings.json 설정

1. vs code 설정에서 옵션 변경(workspace)

   > 이 설정은 직접 하지 말고 여기에 있는 .vscode/settings.json 파일을 폴더째 복사해서 붙여넣기 할 것.

   ~~1. Editor: Format On Save => true~~  
   ~~1. Editor: Default Formatter => esbenp.prettier-vscode~~  
   ~~Eslint > Format: Enable => true~~

   > 설정 중 `"editor.formatOnSave": true`가 없더라도 파일을 저장할 때 자동으로 lint 적용이 되기 때문에 현재는 삭제했음(2021년 7월 29일)

1. package.json > scripts 에 lint 명령어 추가 후 실행

> 명령어를 추가하지 않고 `npx eslint .`만 실행해도 된다.

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

```bash
$ npm run lint
```

## stylelint 설정하기

1. stylelint extention 설치
1. npm 설치

   1. stylelint
   2. stylelint-config-standard
   3. stylelint-config-prettier
   4. stylelint-order
   5. stylelint-scss

   ```bash
   $ yarn add -D stylelint stylelint-config-standard stylelint-config-prettier stylelint-order stylelint-scss
   ```

1. 프로젝트 root 폴더에 파일 복사
   1. .stylelintrc.js

## Vue.js 프로젝트일 때 추가 설정

1. npm 설치

   1. eslint-plugin-vue

   ```bash
   $ yarn add -D eslint-plugin-vue
   ```

1. .eslintrc.js에서 주석 처리한 vue 관련 옵션 활성화

---

## Typescript 프로젝트일 때 추가 설정

1. npm 설치

   1. typescript
   2. @typescript-eslint/eslint-plugin // Typescript 관련 린팅 규칙을 설정하는 플러그인
   3. @typescript-eslint/parser // Typescript 를 파싱하기 위해 사용

   ```bash
   $ yarn add -D typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
   ```

1. .eslintrc.js에서 주석 처리한 typescript 관련 옵션 활성화
1. .prettierrc에 `"parser": "typescript"` 추가

---

## React.js 프로젝트일 때 추가 설정

1. npm 설치

   1. eslint-plugin-react
   2. eslint-plugin-react-hooks
   3. eslint-plugin-jsx-a11y

   ```bash
   $ yarn add -D eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
   ```

1. .eslintrc.js에서 주석 처리한 react 관련 옵션 활성화

---

## jest를 사용할 때 추가 설정

1. npm 설치

   1. eslint-plugin-jest

   ```bash
   $ yarn add -D eslint-plugin-jest
   ```

1. .eslintrc.js에서 주석 처리한 jest 관련 옵션 활성화

   - [Rules](https://www.npmjs.com/package/eslint-plugin-jest#user-content-rules)
   - [Typescript Rules](https://www.npmjs.com/package/eslint-plugin-jest#user-content-typescript-rules)

---

## 린트 기본 설정

> 아래 패키지는 프론트엔드 vue.js, react.js, typescript를 제외한 것.

```bash
npm init -y
yarn add -D babel-eslint eslint eslint-loader eslint-plugin-import eslint-config-prettier eslint-plugin-prettier prettier stylelint stylelint-config-standard stylelint-config-prettier stylelint-order stylelint-scss
```
