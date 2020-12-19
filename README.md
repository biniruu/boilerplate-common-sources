# Setting up prettier & eslint

> *토이 프로젝트나 학습 시 사용하는 개인 설정.*


## vs code에 prettier & eslint 설정하기

1. prettier, eslint extention 설치
2. npm 설치
   1. eslint
   2. eslint-config-prettier
   3. eslint-plugin-prettier
   4. prettier-eslint  // 설치해 본 적은 없지만 많이 쓰이는 것
3. 프로젝트 root 폴더에 파일 복사
   1. .prettierrc
   2. .prettierignore
   3. .eslintrc.js
   4. .eslintignore
4. vs code 설정에서 옵션 변경(workspace)
   1. Editor: Format On Save => true
   2. Editor: Default Formatter => esbenp.prettier-vscode
5. setting.json에 설정 코드 추가

```json
"eslint.validate": [
    "javascript"
],
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
```


## Vue.js 프로젝트일 때 추가 설정

1. npm 설치
   1. eslint-plugin-vue
2. .eslintrc.js에서 주석 처리한 옵션과 연관된 extention을 설치하고 주석 해제