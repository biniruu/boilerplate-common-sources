module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-scss', 'stylelint-order'],
  syntax: 'scss',
  rules: {
    "indentation": 2,
    "color-hex-case": "lower",
    // 'at-rule-no-unknown': null,
    // 'scss/at-rule-no-unknown': true,
    'order/properties-alphabetical-order': true,
    // 'no-empty-source': null,
    // 'rule-empty-line-before': null,
    // 'selector-list-comma-newline-after': null,
    // 'no-descending-specificity': null
  },
}
