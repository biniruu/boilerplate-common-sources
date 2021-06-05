# Setting up prettier & eslint

> _토이 프로젝트나 학습 시 사용하는 개인 설정_

## vs code에 prettier & eslint 설정하기

1. prettier, eslint extention 설치
2. npm 설치

   1. babel-eslint // 파서 옵션에 따라 설치하지 않아도 상관없음
   2. eslint
   3. eslint-loader
   4. eslint-config-prettier
   5. eslint-plugin-prettier
   6. prettier

   ```bash
   $ yarn add -D babel-eslint eslint eslint-loader eslint-config-prettier eslint-plugin-prettier prettier
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

## Vue.js 프로젝트일 때 추가 설정

1. npm 설치

   1. eslint-plugin-vue

   ```
   $ yarn add -D eslint-plugin-vue
   ```

2. .eslintrc.js에서 주석 처리한 옵션과 연관된 extention을 설치하고 주석 해제
