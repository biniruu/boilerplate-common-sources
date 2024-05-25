# Websocket

> ⚠️현재는 서버 설정만 만들어 둔 상태예요. 클라이언트는 추후에 추가할 예정입니다.

`Socket.io` 프로젝트 환경 설정을 빠르게 할 수 있도록 도와주는 스타터예요.

<br>

## 📥Installing packages

이곳에 있는 명령어를 사용해 패키지를 설치하세요. Client와 Server 설정은 각 폴더에 있는 README.md를 참고하세요.

```bash
# ESLint

yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-import-resolver-typescript eslint-plugin-import

# ESLint for Jest
#
# 💁🏻‍♀️ eslint-plugin-jest를 설치하지 않는다면 아래 패키지는 별도로 설치해야 해요.
# @typescript-eslint/types @typescript-eslint/typescript-estree @typescript-eslint/utils

yarn add -D eslint-plugin-jest eslint-plugin-jest-dom

# Jest
#
# 💁🏻 If you have added 'jest', you don't need to add these packages: jest-resolve and jest-resolve-dependencies.
# 💁🏻‍♂️ I recommend adding @types/jest even if it is not a TypeScript project because of its IntelliSense.

yarn add -D @types/jest @testing-library/dom @testing-library/jest-dom @testing-library/user-event jest jest-environment-jsdom jsdom ts-jest

# Jest for CSS module

yarn add -D @types/identity-obj-proxy identity-obj-proxy

# Lodash

yarn add lodash lodash-es
yarn add -D @types/lodash-es

# Node.js

yarn add -D @types/node tsconfig-paths ts-node ts-node-dev

# Nodemon

yarn add -D nodemon

# Prettier

yarn add -D prettier

# TypeScript

yarn add -D typescript
```
