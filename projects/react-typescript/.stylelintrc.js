module.exports = {
  extends: '../../.stylelintrc.js',
  overrides: [
    {
      customSyntax: 'postcss-html', // postcss를 사용하는 환경에서 stylelint(CssSyntaxError) 에러 발생 방지
      // customSyntax: '@stylelint/postcss-css-in-js',
      files: ['**/*.{html,jsx,svg,tsx}'],
    },
  ],
}
