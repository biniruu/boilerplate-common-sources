/**
 * Prettier options
 * {@link https://prettier.io/docs/en/options.html}
 *
 * arrowParens: 인자가 한 개인 화살표 함수 사용 시 괄호 사용 여부. e.g. "const add = num => 1 + num" 처럼 인자가 num 하나일 때
 * bracketSameLine: JSX 여는 태그의 '>'를 줄바꿈할지 여부
 * bracketSpacing: 대괄호 안 양쪽 끝에 간격 추가 여부
 * endOfLine: delete 'cr' prettier/prettier 오류를 피하기위해 윈도우 유저에게 필요한 부분
 * htmlWhitespaceSensitivity
 * parser: 특정 파서 선택. prettier가 추측해서 자동으로 선택하기 때문에 공식 문서에서는 사용하지 않는 쪽을 권장
 * printWidth
 * proseWrap
 * quoteProps: 객체의 Key를 따옴표 안에 넣을 때, 하나의 key를 따옴표 안에 넣으면 나머지 key도 모두 따옴표 안에 넣을지 아니면 필요한 곳만 넣을지 여부
 * semi: 코드 마지막에 세미콜론을 붙일지 여부
 * singleQuote: 따옴표 사용 시 작은따옴표로 통일 여부
 * tabWidth
 * trailingComma
 * useTabs: 간격을 추가할 때 공백문자 대신 탭 사용 여부
 * vueIndentScriptAndStyle
 */

module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: 'auto',
  htmlWhitespaceSensitivity: 'ignore',
  // parser: 'flow',
  printWidth: 120,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  vueIndentScriptAndStyle: true,
}
