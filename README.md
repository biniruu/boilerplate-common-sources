# Setting up prettier & eslint

> *토이 프로젝트나 학습 시 사용하는 개인 설정.*


## vs code에 prettier & eslint 설정하기

1. 프로젝트 root 폴더에 파일 복사
   1. .prettierrc
   2. .prettierignore
   3. .eslintrc.js
   4. .eslintignore
2. vs code 설정에서 옵션 변경(workspace)
   1. Editor: Format On Save => true
   2. Editor: Default Formatter => esbenp.prettier-vscode
3. setting.json에 설정 코드 추가

```json
"eslint.validate": [
    "javascript"
],
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
```