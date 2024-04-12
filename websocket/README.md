# Websocket

> ⚠️현재는 서버 설정만 만들어 둔 상태예요. 클라이언트는 추후에 추가할 예정입니다.

`Socket.io` 프로젝트 환경 설정을 빠르게 할 수 있도록 도와주는 스타터예요.

<br>

## 📥Installing packages

이곳에 있는 명령어를 사용해 패키지를 설치하세요. Client와 Server 설정은 각 폴더에 있는 README.md를 참고하세요.

```bash
# ESLint

yarn add -D eslint eslint-plugin-import

# ESLint for Jest

yarn add -D eslint-plugin-jest eslint-plugin-jest-dom

# ESLint for TypeScript
#
# 💁🏻‍♀️ eslint-plugin-jest를 설치하지 않는다면 아래 패키지는 별도로 설치해야 해요.
# @typescript-eslint/types @typescript-eslint/typescript-estree @typescript-eslint/utils

yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript

# Jest
#
# 💁🏻 If you have added 'jest', you don't need to add these packages: jest-resolve and jest-resolve-dependencies.

yarn add -D @testing-library/dom @testing-library/jest-dom @testing-library/user-event jest jest-environment-jsdom jsdom

# Jest for CSS module

yarn add -D @types/identity-obj-proxy identity-obj-proxy

# Jest for TypeScript

yarn add -D @types/jest ts-jest

# Lodash

yarn add lodash lodash-es

# Lodash for TypeScript

yarn add -D @types/lodash-es

# Node.js for TypeScript

yarn add -D @types/node

# Nodemon

yarn add -D nodemon

# Prettier

yarn add -D prettier

# TypeScript

yarn add -D typescript

# Ts-node

yarn add -D tsconfig-paths ts-node ts-node-dev
```

<br>

## 📋Detailing packages

각 패키지에 대한 설명은 최상위 폴더에 있는 [README.md](https://github.com/biniruu/starter-pack#detailing-packages)에서 확인할 수 있어요.
