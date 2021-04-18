module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    // ecmaFeatures: {
    //   jsx: true,
    // },
  },
  // parser: 'babel-eslint',
  // parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['prettier'],
  extends: [
    // 'standard',
    // 'plugin:vue/strongly-recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
    // 'prettier/vue',
    'eslint-config-prettier', // prettier 설정이 eslint에 통합됨
  ],
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
    // env: {
    //   es6: true,
    // },
    'prettier/prettier': ['error', {singleQuote: true, trailingComma: 'all'}],
    // 'vue/v-bind-style': ['warn', 'shorthand'],
    // 'vue/require-v-for-key': 'warn',
    'new-cap': 'error',
    'prefer-rest-params': 'error',
    'no-new-object': 'error',
    'no-array-constructor': 'error',
    'no-duplicate-imports': 'error',
    'no-inner-declarations': 'off',
  },
  // globals: {
  //   $nuxt: true,
  // },
}
