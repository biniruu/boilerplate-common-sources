# Setting up prettier & eslint

> _토이 프로젝트나 학습 시 사용하는 개인 설정_

## vs code에 prettier & eslint 설정하기

1. prettier, eslint extention 설치
2. npm 설치

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

3. 프로젝트 root 폴더에 파일 복사
   1. .prettierrc
   2. .prettierignore
   3. .eslintrc.js
   4. .eslintignore
4. vs code 설정에서 옵션 변경(workspace)

   > 이 설정은 직접 설정하지 말고 .vscode/settings.json 파일을 그대로 복사해서 붙여넣기할 것

   ~~1. Editor: Format On Save => true~~  
   ~~1. Editor: Default Formatter => esbenp.prettier-vscode~~  
   ~~Eslint > Format: Enable => true~~

## stylelint 설정하기

1. stylelint extention 설치
2. npm 설치

   1. stylelint
   2. stylelint-config-standard
   3. stylelint-config-prettier
   4. stylelint-order
   5. stylelint-scss

   ```bash
   $ yarn add -D stylelint stylelint-config-standard stylelint-config-prettier stylelint-order stylelint-scss
   ```

3. 프로젝트 root 폴더에 파일 복사
   1. .stylelintrc.js
4. package.json > scripts 에 lint 명령어 추가 후 실행

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

## Vue.js 프로젝트일 때 추가 설정

1. npm 설치

   1. eslint-plugin-vue

   ```
   $ yarn add -D eslint-plugin-vue
   ```

2. .eslintrc.js에서 주석 처리한 옵션과 연관된 extention을 설치하고 주석 해제

---

## Typescript 프로젝트일 때 추가 설정

1. npm 설치

   1. typescript
   2. @typescript-eslint/eslint-plugin // Typescript 관련 린팅 규칙을 설정하는 플러그인
   3. @typescript-eslint/parser // Typescript 를 파싱하기 위해 사용

   ```
   $ yarn add -D typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
   ```

2. .eslintrc.js에서 주석 처리한 옵션과 연관된 extention을 설치하고 주석 해제

---

## 린트 기본 설정

```bash
npm init -y
yarn add -D babel-eslint eslint eslint-loader eslint-plugin-import eslint-config-prettier eslint-plugin-prettier prettier stylelint stylelint-config-standard stylelint-config-prettier stylelint-order stylelint-scss
```
