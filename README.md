# Starter kit for client side development environment

프로젝트를 시작할 때 환경 설정을 빠르게 할 수 있도록 도와주는 스타터예요. 패키지, 설정 파일 등을 프로젝트 기술 스택에 맞게 골라 설치할 수 있어요.

다음 프로젝트를 설정할 때 사용할 수 있어요.

- [Next.js with TypeScript](https://github.com/biniruu/starter-kit-frontend/tree/main/next-typescript)
- [React.js with TypeScript](https://github.com/biniruu/starter-kit-frontend/tree/main/react-typescript)
- [Vanilla JS with TypeScript](https://github.com/biniruu/starter-kit-frontend/tree/main/vanillajs-typescript)
- [Vanilla JS](https://github.com/biniruu/starter-kit-frontend/tree/main/vanillajs)

<br>

## 📦What is in this starter

이곳에는 다음 설정 파일이 포함되어 있어요.

> 이곳에 올린 .gitignore는 [Toptal](https://www.toptal.com/developers/gitignore)이라는 사이트에서 생성한 파일이에요. 위쪽에 있는 `# Edit at ...` 부분 링크를 클릭한 후에 원하는 기술 스택을 변경하여 사용하세요.

`.babelrc` `.eslintignore` `.eslintrc.js` `.github/ISSUE_TEMPLATE.md` `.github/PULL_REQUEST_TEMPLATE.md` `.gitignore` `.markdownlint.json` `.prettierignore` `.prettierrc.js` `craco.config.js` `jest.config.js` `next.config.js` `postcss.config.js` `.stylelintignore` `.stylelintrc.js` `tailwind.config.js` `tsconfig.js`

<br>

## 📋Detailing packages

이곳에 설치된 패키지가 각각 어떤 기능을 하는지 알아보세요.

- [@babel/core](https://www.npmjs.com/package/@babel/core): babel 사용을 위한 코어 패키지
- [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser): babel-eslint
- [@babel/plugin-transform-modules-commonjs](https://www.npmjs.com/package/@babel/plugin-transform-modules-commonjs): es2015 모듈을 commonJS로 변환
- [@babel/plugin-transform-runtime](https://www.npmjs.com/package/@babel/plugin-transform-runtime): 전역 스코프를 오염시키지 않는 polyfill 지원
- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env): Babel의 지원 스펙을 지정
- [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react): "This experimental syntax requires enabling one of the following parser plugin(s): 'jsx, flow, typescript'" 에러 해결을 위해 필요 ([관련 글 보기](https://ffan0811.medium.com/error-debugging-this-experimental-syntax-requires-enabling-one-of-the-following-parser-plugin-s-22946599a0a4))
- [@craco/craco](https://www.npmjs.com/package/@craco/craco): CRA로 리액트를 설치했을 때 webpack 설정 지원
- [@types/jest](https://www.npmjs.com/package/@types/jest): jest의 타입 정의와 hint 제공
- [@types/lodash-es](https://www.npmjs.com/package/@types/lodash-es): lodash 타입 제공
- [@types/react-test-renderer](https://www.npmjs.com/package/@types/react-test-renderer): react-test-renderer 타입 제공
- [@types/styled-components](https://www.npmjs.com/package/@types/styled-components): styled-components 타입 제공
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin): typescript 관련 lint 규칙 제공
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser): typescript를 위한 eslint 파서
- [@typescript-eslint/types](https://www.npmjs.com/package/@typescript-eslint/types): TypeScript-ESTree Types
- [@typescript-eslint/typescript-estree](https://www.npmjs.com/package/@typescript-eslint/typescript-estree): TypeScript ESTree
- [@typescript-eslint/utils](https://www.npmjs.com/package/@typescript-eslint/utils): typescript에서 eslint를 사용할 때 유용한 도구
- [autoprefixer](https://www.npmjs.com/package/autoprefixer): cross browser에 필요한 css 속성 prefix를 자동으로 생성
- [babel-jest](https://www.npmjs.com/package/babel-jest): JS/JSX 파일을 Jest가 실행할 수 있는 자바스크립트로 컴파일
- [chai](https://www.npmjs.com/package/chai)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [dotenv-expand](https://www.npmjs.com/package/dotenv-expand): dotenv 변수 확장
- [eslint](https://www.npmjs.com/package/eslint)
- [eslint-config-next](https://www.npmjs.com/package/eslint-config-next)
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier): prettier와 충돌을 일으키는 eslint 규칙 비활성화
- [eslint-config-sinon](https://www.npmjs.com/package/eslint-config-sinon)
- [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript): tsconfig에서 path alias 사용을 위해 필요. CRA로 리액트를 설치했다면 craco와 함께 사용할 것
- [eslint-plugin-chai-friendly](https://www.npmjs.com/package/eslint-plugin-chai-friendly)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import): es2015+ import/export 구문 지원 및 규칙 제공
- [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest): jest 관련 규칙 제공
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y): jsx 내에서 웹 접근성 관련 피드백 제공
- [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha)
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier): prettier에서 인식하는 코드상의 포맷 오류를 eslint 오류로 출력
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react): react 규칙 관련 피드백 제공
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks): react hooks 규칙 관련 피드백 제공
- [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue)
- [eslint-plugin-nuxt](https://www.npmjs.com/package/eslint-plugin-nuxt)
- [eslint-webpack-plugin](https://www.npmjs.com/package/eslint-webpack-plugin)
- [jest](https://www.npmjs.com/package/jest): 단위 테스트 도구
- [jest-resolve](https://www.npmjs.com/package/jest-resolve)
- [jest-serializer-vue](https://www.npmjs.com/package/jest-serializer-vue): 저장된 Jest Snapshot을 VueJS에 맞게 개선
- [lodash](https://www.npmjs.com/package/lodash): javascript 유틸리티 라이브러리
- [lodash-es](https://www.npmjs.com/package/lodash-es): 필요한 lodash 함수만 골라 사용하고, 사용하지 않은 함수는 tree shaking할 수 있는 lodash 패키지
- [mocha](https://www.npmjs.com/package/mocha)
- [postcss](https://www.npmjs.com/package/postcss)
- [postcss-flexbugs-fixes](https://www.npmjs.com/package/postcss-flexbugs-fixes): 잘못 사용한 CSS 문법 교정. 아마도 동작은 하지만 표준 문법에 맞지 않는 것만 교정해주는 듯
- [postcss-html](https://www.npmjs.com/package/postcss-html): html을 파싱할 때 필요한 postcss 문법
- [postcss-jsx](https://www.npmjs.com/package/postcss-jsx): postcss의 css-in-js 실행을 위해 필요
- [postcss-loader](https://www.npmjs.com/package/postcss-loader): webpack에서 postcss를 실행
- [postcss-nesting](https://www.npmjs.com/package/postcss-nesting): nesting 문법 코드를 pure css 문법에 맞게 변환
- [postcss-normalize](https://www.npmjs.com/package/postcss-normalize): browserslist 설정에 적합한 normalize css 생성
- [postcss-preset-env](https://www.npmjs.com/package/postcss-preset-env): 주요 postcss 플러그인을 모은 plugin pack ([설치 플러그인 목록 확인](https://www.libtrends.info/npm-compare/autoprefixer-vs-postcss-nested-vs-postcss-nesting-vs-postcss-preset-env-vs-precss))
- [postcss-syntax](https://www.npmjs.com/package/postcss-syntax): 파일 확장자나 소스에 따라 postcss가 적용할 플러그인을 자동으로 선택
- [postcss-scss](https://www.npmjs.com/package/postcss-scss): scss를 css로 트랜스파일
- [prettier](https://www.npmjs.com/package/prettier)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom): 라우터 지원
- [react-test-renderer](https://www.npmjs.com/package/react-test-renderer): 테스트 시 reactDOM의 스냅샷 생성
- [sass](https://www.npmjs.com/package/sass)
- [sass-loader](https://www.npmjs.com/package/sass-loader): webpack에서 scss를 실행
- [sinon](https://www.npmjs.com/package/sinon)
- [source-map-loader](https://www.npmjs.com/package/source-map-loader): 빌드 파일의 소스 맵 제공
- [styled-components](https://www.npmjs.com/package/styled-components)
- [stylelint](https://www.npmjs.com/package/stylelint)
- [stylelint-config-prettier](https://www.npmjs.com/package/stylelint-config-prettier): prettier 관련 stylelint rules 확장
- [stylelint-config-standard](https://www.npmjs.com/package/stylelint-config-standard): stylelint rules 확장
- [stylelint-config-standard-scss](https://www.npmjs.com/package/stylelint-config-standard-scss): scss 관련 stylelint rules 확장
- [stylelint-order](https://www.npmjs.com/package/stylelint-order): .stylelintrc.js에서 설정한 order대로 코드가 작성되었는지 파악
- [stylelint-scss](https://www.npmjs.com/package/stylelint-scss): scss 문법 오류 피드백
- [style-loader](https://www.npmjs.com/package/style-loader): DOM에 style 주입
- [ts-jest](https://www.npmjs.com/package/ts-jest): typescript 환경에서 jest를 사용할 때 필요
- [ts-node](https://www.npmjs.com/package/ts-node): .ts 파일 실행. typescript 환경에서 사용하는 nodemon. 설치하지 않고 `npx ts-node` 실행만으로 사용 가능
- [typescript](https://www.npmjs.com/package/typescript)
- [vue-jest](https://www.npmjs.com/package/vue-jest): Vue 파일을 Jest가 실행할 수 있는 자바스크립트로 컴파일
- [@vue/server-test-utils](https://www.npmjs.com/package/@vue/server-test-utils): Vue.js 환경에서 단위 테스트를 하기 위한 공식(Official) 라이브러리
- [@vue/test-utils](https://www.npmjs.com/package/@vue/test-utils): Vue.js 환경에서 단위 테스트를 하기 위한 공식 라이브러리.

<br>

❌ deprecate 되었어요.

- @stylelint/postcss-css-in-js
- @types/postcss-preset-env: postcss-preset-env가 자체적으로 타입 정의 제공
- babel-eslint: @babel/eslint-parser로 대체
- dart-sass: sass로 대체
- eslint-loader: eslint-webpack-plugin으로 대체
- node-sass: dart-sass로 대체

<br>

💁🏻 typescript를 사용한다면 아래 패키지는 필요하지 않아요.

- @babel/eslint-parser
- @babel/preset-react

<br>

## 👍🏻Recommended packages

여기서는 사용하지 않지만, 유용한 패키지예요.

- [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer): 빌드된 파일 용량을 시각적으로 구성
- [cra-bundle-analyzer](https://www.npmjs.com/package/cra-bundle-analyzer): eject하지 않고 webpack-bundle-analyzer와 동일한 기능 사용 가능

<br>

## 📌Required options in VS Code

VS Code의 설정에서 아래 옵션을 변경해주세요.

- Editor: Default Formatter => `esbenp.prettier-vscode`
- Eslint > Format: Enable => `true`

<br>

## 🧩Required extensions in VS Code

lint나 formatting 패키지를 사용하기 위해 꼭 설치해야 하는 익스텐션이에요.

- `ESLint` (dbaeumer.vscode-eslint)
- `markdownlint` (DavidAnson.vscode-markdownlint)
- `Prettier - Code formatter` (esbenp.prettier-vscode)
- `Stylelint` (stylelint.vscode-stylelint)

<br>

## 🚀Recommanded extensions in VS Code

편의성을 높여주는 익스텐션이에요.

- `Abracadabra, refactor this!` (nicoespeon.abracadabra)
- `Auto Close Tag` (formulahendry.auto-close-tag)
- `Auto Import` (steoates.autoimport)
- `Auto Rename Tag` (formulahendry.auto-rename-tag)
- `AWS Toolkit` (amazonwebservices.aws-toolkit-vscode)
- `Bookmarks` (alefragnani.Bookmarks)
- `Code Spell Checker` (streetsidesoftware.code-spell-checker)
- `Color Highlight` (naumovs.color-highlight)
- `CSS Peek` (pranaygp.vscode-css-peek)
- `Error Lens` (usernamehw.errorlens)
- `ES7+ React/Redux/React-Native snippets` (dsznajder.es7-react-js-snippets)
- `Git Graph` (mhutchie.git-graph)
- `Git History` (donjayamanne.githistory)
- `Git History Diff` (huizhou.githd)
- `GitHub Pull Requests and Issues` (GitHub.vscode-pull-request-github)
- `GitLens — Git supercharged` (eamodio.gitlens)
- `HTML CSS Support` (ecmel.vscode-html-css)
- `Import Cost` (wix.vscode-import-cost)
- `IntelliCode` (VisualStudioExptTeam.vscodeintellicode)
- `IntelliCode API Usage Examples` (VisualStudioExptTeam.intellicode-api-usage-examples)
- `IntelliSense for CSS class names in HTML` (Zignd.html-css-class-completion)
- `JavaScript (ES6) code snippets` (xabikos.JavaScriptSnippets)
- `JavaScript and TypeScript Nightly` (ms-vscode.vscode-typescript-next)
- `JavaScript Debugger (Nightly)` (ms-vscode.js-debug-nightly)
- `Jest` (Orta.vscode-jest)
- `Jest Snippets` (andys8.jest-snippets)
- `Jira and Bitbucket (Atlassian Labs)` (atlassian.atlascode)
- `Live Share` (ms-vsliveshare.vsliveshare)
- `Markdown All in One` (yzhang.markdown-all-in-one)
- `Markdown Preview Enhanced` (shd101wyy.markdown-preview-enhanced)
- `Material Icon Theme` (PKief.material-icon-theme)
- `npm Intellisense` (christian-kohler.npm-intellisense)
- `Path Intellisense` (christian-kohler.path-intellisense)
- `Polacode` (pnp.polacode)
- `Project Manager` (alefragnani.project-manager)
- `px to rem & rpx & vw (cssrem)` (cipchk.cssrem)
- `React Jest Snippets` (jalisimo.react-jest-vscode-snippets)
- `React Testing Library Cheatsheet` (willnemo.rtlcheatsheet)
- `SFTP` (Natizyskunk.sftp)
- `Stylelint Disable Snippets` (hedinne.stylelint-disable-snippets)
- `Tailwind CSS IntelliSense` (bradlc.vscode-tailwindcss)
- `TabOut` (albert.TabOut)
- `Todo Highlight` (wayou.vscode-todo-highlight)
- `Todo Tree` (Gruntfuggly.todo-tree)
- `Turbo Console Log` (ChakrounAnas.turbo-console-log)
- `Vetur` (octref.vetur)
- `Vue 3 Snippets` (hollowtree.vue-snippets)
- `Vue Language Features (Volar)` (Vue.volar)
- `Vue VSCode Snippets` (sdras.vue-vscode-snippets)
- `WakaTime` (WakaTime.vscode-wakatime)

<br>

## 📥Installing packages

이 스타터에 없는 프로젝트 또는 잘 사용하지 않는 도구를 사용할 때 참고해주세요.

```bash
# Markdownlint

yarn add -D markdownlint

# Mocha

yarn add -D chai eslint-config-sinon eslint-plugin-chai-friendly eslint-plugin-mocha mocha sinon

# Nuxt.js

yarn add -D eslint-plugin-nuxt

# Vue.js

yarn add -D eslint-plugin-vue
```

<br>

💁🏻‍♀️ vs code에서는 markdownlint 패키지를 설치하지 않아도 기능을 사용할 수 있어요.

vs code 설정에서 editor.codeActionsOnSave > source.fixAll.markdownlint를 true로 설정하면 .markdownlint 파일을 설정하는 것만으로 markdownlint 기능을 사용할 수 있어요.
