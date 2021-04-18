# Setting up prettier & eslint

> _토이 프로젝트나 학습 시 사용하는 개인 설정_

## vs code에 prettier & eslint 설정하기

1. prettier, eslint extention 설치
1. npm 설치
   1. babel-eslint // 파서 옵션에 따라 설치하지 않아도 상관없음
   1. eslint
   1. eslint-config-prettier
   1. eslint-plugin-prettier
   1. prettier-eslint // 설치해 본 적은 없지만 많이 쓰이는 것
1. 프로젝트 root 폴더에 파일 복사
   1. .prettierrc
   1. .prettierignore
   1. .eslintrc.js
   1. .eslintignore
1. vs code 설정에서 옵션 변경(workspace)

   > 이 설정은 직접 설정하지 말고 .vscode/settings.json 파일을 그대로 복사해서 붙여넣기할 것

   ~~1. Editor: Format On Save => true~~  
   ~~1. Editor: Default Formatter => esbenp.prettier-vscode~~  
   ~~Eslint > Format: Enable => true~~

## Vue.js 프로젝트일 때 추가 설정

1. npm 설치
   1. eslint-plugin-vue
2. .eslintrc.js에서 주석 처리한 옵션과 연관된 extention을 설치하고 주석 해제
