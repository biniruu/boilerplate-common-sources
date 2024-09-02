// TODO: Remove the 'globals' package if it has been removed and the error 'TypeError: Key "languageOptions": Key "globals": Global "AudioWorkletGlobalScope " has leading or trailing whitespace.' does not occur. The error occurs in package versions 13.12.0 and earlier. See https://github.com/sindresorhus/globals/pull/184

/* eslint-disable import/namespace, no-underscore-dangle */
import path from 'path';
import { fileURLToPath } from 'url';

import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import importPlugin, { configs as eslintPluginImportConfigs } from 'eslint-plugin-import';
import eslintPluginJest from 'eslint-plugin-jest';
import eslintPluginJestDom from 'eslint-plugin-jest-dom';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';
import globals from 'globals';
import jest from 'jest/package.json' assert { type: 'json' };
import tslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const flatCompat = new FlatCompat({
  baseDirectory: __dirname,
});

/**
 * About tslint.config() helper
 * {@link https://typescript-eslint.io/packages/typescript-eslint#config}
 *
 * We strongly recommend using this utility to improve the config authoring experience — however it is entirely optional
 */
export default tslint.config(
  // default
  {
    /**
     * Extends
     * {@link https://typescript-eslint.io/packages/typescript-eslint#flat-config-extends}
     *
     * This option is depending on 'typescript-eslint'. See the following link for the default eslint configuration: {@link https://eslint.org/docs/latest/use/configure/configuration-files#using-a-shareable-configuration-package}
     *
     * eslint.configs.recommended : recommended eslint rule set
     */
    extends: [
      eslint.configs.recommended,
      ...fixupConfigRules(flatCompat.config(eslintPluginImportConfigs.recommended)),
    ],
    /**
     * Ignores
     *
     * The pattern is added after the default pattern, which are ["**\/node_modules/", ".git/"]
     */
    ignores: ['tsconfig.json', 'dist/'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es5,
        ...globals.jest,
      },
    },
    plugins: {
      eslintWebpackPlugin: new ESLintWebpackPlugin({ configType: 'flat' }),
      import: fixupPluginRules(importPlugin),
    },
    rules: {
      /**
       * Rules reference
       * {@link https://eslint.org/docs/latest/rules}
       *
       * camelcase : 카멜 케이스 작명 방식 강제
       * eqeqeq : 일치 연산자(===) 사용 강제. 동등 연산자(==) 사용 금지
       * new-cap : 'new' 연산자로 인스턴스 생성 시 constructor 함수명의 첫 글자를 대문자로 강제
       * no-console : 콘솔 사용 금지
       * no-debugger : debugger 사용 금지
       * no-duplicate-imports : 동일한 모듈에서 import를 여러 번 할 경우 모든 import를 inline으로 작성하도록 강제
       * no-inner-declarations : nested block에서 변수 또는 함수 선언 금지
       * no-nested-ternary : 중첩 삼항 연산자 금지
       * no-new-object : new Object로 객체 생성 금지
       * no-undef : 정의하지 않은 전역 변수는 /✱ global ... ✱/ 주석에 명시해야 사용 가능하도록 강제
       * no-underscore-dangle : 식별자 뒤에 언더스코어를 붙이지 못하도록 강제
       * no-useless-escape : 불필요한 escape 문자 사용 금지. extends에 eslint:recommended를 설정했을 때 동작한다
       * no-var : var로 변수 선언 금지
       * prefer-const : 재할당이 이루어지지 않는 변수에 let을 사용했을 경우 const로 변경하도록 강제
       * prefer-rest-params : 함수의 parameter에서 arguments 객체 대신 rest parameter를 사용하도록 강제. e.g. function (...args) {}
       * sort-imports : import 정렬
       * sort-imports > ignoreCase의 값은 항상 default값(false)으로 놔둘 것. true로 했을 때 가끔 다른 import 정렬 관련 rule과 충돌 발생
       * sort-imports > ignoreDeclarationSort는 항상 true로 할 것. false로 하면 import 정렬 관련 경고 발생 시 해결 불가
       * sort-imports > ignoreMemberSort는 항상 true로 할 것. false로 하면 typescript에서 type-only import를 inline으로 정의할 때 정렬 에러 발생
       */
      camelcase: [
        'error',
        {
          properties: 'never',
        },
      ],
      eqeqeq: 'error',
      'new-cap': 'error',
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],
      'no-debugger': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
      'no-duplicate-imports': 'off',
      // 'no-inner-declarations': 'warn', // deprecated {@link https://eslint.org/docs/latest/use/migrate-to-9.0.0https://eslint.org/docs/latest/use/migrate-to-9.0.0#-eslintrecommended-has-been-updated}
      'no-nested-ternary': 'warn',
      'no-new-object': 'warn',
      'no-undef': 'error',
      'no-underscore-dangle': 'error',
      'no-useless-escape': 'warn',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-rest-params': 'error',
      'sort-imports': [
        'warn',
        {
          allowSeparatedGroups: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: true,
        },
      ],
      /**
       * Eslint-plugin-import rules
       * {@link https://github.com/import-js/eslint-plugin-import#rules}
       *
       * consistent-type-specifier-style : type-only import를 inline과 top-level 중 하나로만 사용하도록 강제
       * newline-after-import : import 다음에 한 줄 띄기
       * no-anonymous-default-export : 익명 default export 금지
       * no-duplicates : enforce all imports to be inline or top-level when importing multiple times from the same module.
       * no-unresolved : import한 파일/모듈이 unresolved 되는 일이 없도록 방지
       * order : import 자동 정렬
       * order > alphabetize : Make sure it is always set as the default. If not, it can cause conflicts with prettier.
       * order > warnOnUnassignedImports는 항상 default값(false)으로 놔둘 것. true로 할 경우 import 정렬 관련 경고가 발생하는데, 이 문제는 import/order 또는 sort-import 설정만으로는 해결 불가
       * order > caseInsensitive의 값은 항상 default값(false)으로 놔둘 것. true로 했을 때 가끔 다른 import 정렬 관련 rule과 충돌 발생
       */
      'import/consistent-type-specifier-style': 'warn',
      'import/newline-after-import': ['warn', { exactCount: true, considerComments: true }],
      'import/no-anonymous-default-export': [
        'warn',
        {
          allowArray: true,
          allowObject: true,
        },
      ],
      // 'import/no-duplicates': [
      //   'error',
      //   {
      //     'prefer-inline': true,
      //   },
      // ], // to be enabled if 'consistent-type-specifier-style' is 'prefer-inline'
      'import/no-unresolved': 'off',
      'import/order': [
        'warn',
        {
          // alphabetize: {
          //   order: 'asc',
          //   orderImportKind: 'asc',
          // },
          'newlines-between': 'always',
        },
      ],
    },
    settings: {
      /**
       * Eslint-plugin-import resolvers
       * {@link https://github.com/import-js/eslint-plugin-import#resolvers}
       * {@link https://github.com/import-js/eslint-plugin-import#importextensions}
       *
       * resolver.node.extensions : require more granular extension definitions. jsx를 import할 때 import/no-unresolved 에러가 발생하지 않도록 함
       */
      'import/resolver': {
        // node: {
        //   extensions: ['*.js', '*.jsx', '*.ts', '*.tsx'],
        // },
        typescript: true,
        node: true,
      },
    },
  },
  // for TypeScript
  {
    /**
     * Extends
     *{@link https://typescript-eslint.io/packages/typescript-eslint#flat-config-extends}
     *
     * tslint.configs.recommendedTypeChecked : If we use parserOptions.projectService, this options is required {@link https://typescript-eslint.io/getting-started/typed-linting}
     */
    extends: [...tslint.configs.recommendedTypeChecked],
    languageOptions: {
      parser: tslint.parser,
      parserOptions: {
        /**
         * @typescript-eslint/parser
         * {@link https://typescript-eslint.io/packages/parser}
         *
         * We now recommend using projectService instead of project for easier configuration and faster linting. {@link https://typescript-eslint.io/packages/parser/#project}
         *
         * projectService : It will automatically detect the tsconfig.json file like the 'project' option, which is true, but it doesn't treat the 'allowJs' option in tsconfig.json in the same way {@link https://typescript-eslint.io/packages/parser/#projectservice}
         * tsconfigRootDir : project에서 제공한 tsconfig의 상대 경로에 대한 루트 디렉토리 제공
         */
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    /**
     * Plugins
     *
     * @typescript-eslint : Manually configuring typescript-eslint rules {@link https://typescript-eslint.io/packages/typescript-eslint#advanced-usage}
     */
    plugins: {
      '@typescript-eslint': tslint.plugin,
    },
    rules: {
      /**
       * Typescript-eslint supported rules
       * {@link https://typescript-eslint.io/rules/}
       *
       * ban-ts-comment : 설명을 추가하는 조건으로 @ts-expect-error, @ts-ignore, @ts-nocheck, @ts-check 주석을 허용
       * no-explicit-any
       * no-floating-promises
       * @property {Object} 'no-misused-promises' - To prevent passing promises to place that are not designed to handle them.
       * @property {boolean} 'no-misused-promises'.checksVoidReturn.attributes - Weather to check async functions passed as JSX (and <form> tag) attributes.
       * no-unsafe-argument
       * no-unsafe-assignment : any 타입 사용 시 알림을 띄움
       * no-unsafe-call
       * no-unsafe-member-access
       * no-unused-vars : eslint에서 제공하는 no-unused-vars와 동일. no-unused-vars를 비활성화 한 후에 사용할 것
       * no-var-requires : require 문을 변수에 할당 금지. 특정 모듈 문법에 구애 받지 않는 상황이라면 비활성화 할 것
       * restrict-plus-operands
       * restrict-template-expressions
       * space-before-function-paren : 함수 선언 시 함수명과 괄호 사이에 간격 추가를 강제. 공식 문서에서는 사용하지 말 것을 적극 권고한다
       */
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-expect-error': 'allow-with-description',
          'ts-ignore': 'allow-with-description',
          'ts-nocheck': 'allow-with-description',
          'ts-check': 'allow-with-description',
        },
      ],
      '@typescript-eslint/no-explicit-any': [
        'error',
        {
          ignoreRestArgs: true,
        },
      ],
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],
      '@typescript-eslint/no-unsafe-argument': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
        },
      ],
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/restrict-plus-operands': 'warn',
      '@typescript-eslint/restrict-template-expressions': 'warn',
      // '@typescript-eslint/space-before-function-paren': [
      //   'warn',
      //   {
      //     anonymous: 'always',
      //     named: 'never',
      //     asyncArrow: 'always',
      //   },
      // ], // deprecated {@link https://typescript-eslint.io/rules/space-before-function-paren}
    },
  },
  {
    /**
     * Specifying TSConfigs
     * {@link https://typescript-eslint.io/getting-started/typed-linting/#how-can-i-disable-type-aware-linting-for-a-subset-of-files}
     *
     * tslint.configs.disableTypeChecked : turn off type-aware linting on specific subsets of files with a disabled-type-checked config {@link https://typescript-eslint.io/linting/typed-linting/#how-can-i-disable-type-aware-linting-for-a-subset-of-files}
     */
    files: ['*.js', '*.cjs', '*.config.js', '*.config.ts', '*.test.js', '*.test.ts', '*.spec.js', '*.spec.ts'],
    ...tslint.configs.disableTypeChecked,
  },
  // for Jest
  {
    /**
     * Extends
     *
     * eslintPluginJest.configs['flat/recommended'] : recommended eslint-plugin-jest rules {@link https://github.com/jest-community/eslint-plugin-jest#rules}
     * eslintPluginJestDom.configs['flat/recommended'] : recommended eslint-plugin-jest-dom rules {@link https://www.npmjs.com/package/eslint-plugin-jest-dom#supported-rules}
     */
    extends: [eslintPluginJest.configs['flat/recommended'], eslintPluginJestDom.configs['flat/recommended']],
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    settings: {
      /**
       * Jest version setting
       * {@link https://github.com/jest-community/eslint-plugin-jest#jest-version-setting}
       *
       * fetch the installed version of Jest
       */
      jest: {
        version: jest.version,
      },
    },
  },
);
