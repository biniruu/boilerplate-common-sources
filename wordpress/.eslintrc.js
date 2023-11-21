/**
 * Documentation
 * {@link https://eslint.org/docs/latest/}
 */

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  /**
   * Extends
   *
   * eslint:recommended : eslint 추천 rule set
   * plugin:prettier/recommended : eslint-config-prettier 추천 rule set
   */
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  root: true, // 현재 설정 파일이 root임을 명시하는 옵션. true로 설정하면 상위 설정 파일 찾기를 여기서 멈춘다.
  rules: {
    /**
     * Rules reference
     * {@link https://eslint.org/docs/latest/rules}
     *
     * camelcase : 카멜 케이스 작명 방식 강제
     * eqeqeq : 일치 연산자(===) 사용 강제. 동등 연산자(==) 사용 금지
     * new-cap : 'new' 연산자로 인스턴스 생성 시 constructor 함수명의 첫 글자를 대문자로 강제
     * no-array-constructor : Array() 생성자에 배열 리터럴 생성법을 사용해서 배열 생성 금지
     * no-console : 콘솔 사용 금지
     * no-debugger : debugger 사용 금지
     * no-duplicate-imports : 동일한 모듈에서 import를 여러 번 할 경우 모든 import를 inline으로 작성하도록 강제
     * no-inner-declarations : nested block에서 변수 또는 함수 선언 금지
     * no-nested-ternary : 중첩 삼항 연산자 금지
     * no-new-object : new Object로 객체 생성 금지
     * no-undef : 정의하지 않은 전역 변수는 /✱ global ... ✱/ 주석에 명시해야 사용 가능하도록 강제
     * no-underscore-dangle : 식별자 뒤에 언더스코어를 붙이지 못하도록 강제
     * no-unused-vars : 사용하지 않는 변수 금지
     * no-useless-escape : 불필요한 escape 문자 사용 금지. extends에 eslint:recommended를 설정했을 때 동작한다
     * no-var : var로 변수 선언 금지
     * prefer-const : 재할당이 이루어지지 않는 변수에 let을 사용했을 경우 const로 변경하도록 강제
     * prefer-rest-params : 함수의 parameter에서 arguments 객체 대신 rest parameter를 사용하도록 강제. e.g. function (...args) {}
     * quotes : 따옴표를 작은따옴표, 큰따옴표, 백틱 중 한 가지만 사용하도록 강제
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
    'no-array-constructor': 'error',
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-debugger': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'no-duplicate-imports': 'error',
    'no-inner-declarations': 'warn',
    'no-nested-ternary': 'warn',
    'no-new-object': 'warn',
    'no-undef': 'error',
    'no-underscore-dangle': 'error',
    'no-unused-vars': [
      'error',
      {
        args: 'all',
      },
    ],
    'no-useless-escape': 'warn',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    quotes: [
      'warn',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    'sort-imports': [
      'warn',
      {
        allowSeparatedGroups: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: true,
      },
    ],
    /**
     * Eslint-config-prettier options
     * {@link https://github.com/prettier/eslint-plugin-prettier#options}
     *
     * 공식 문서에서는 옵션 설정을 추천하지 않는다. prettier-vscode 확장 프로그램이 .prettierrc 파일을 읽고 이곳에 있는 옵션은 무시하는데, 이 때문에 예상치 못한 문제가 발생할 수도 있기 때문.
     *
     * prettier : 이곳에 설정한 옵션은 .prettier 파일에 있는 옵션을 덮어쓴다. 타입스크립트에서는 알 수 없는 이유로 에러를 발생시키는 경우가 잦아 off로 설정해 두었다.
     */
    'prettier/prettier': 'off',
  },
}
