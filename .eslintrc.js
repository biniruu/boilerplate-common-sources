// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    node: true,
  },
  extends: [
    // 'standard',
    // 'plugin:vue/strongly-recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
    // 'prettier/vue',
    'eslint-config-prettier',
  ],
  // required to lint *.vue files
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
    'no-console': 'off',
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    'prefer-const': 'error',
    'no-var': 'error',
    camelcase: [
      'error',
      {
        properties: 'never',
      },
    ],
    env: {
      es6: true,
    },
    'prettier/prettier': 'error',
    // 'vue/v-bind-style': ['warn', 'shorthand'],
    // 'vue/require-v-for-key': 'warn',
    'new-cap': 'error',
    'prefer-rest-params': 'error',
    'no-new-object': 'error',
    'no-array-constructor': 'error',
    'no-duplicate-imports': 'error',
    'no-inner-declarations': 'off',
  },
}
