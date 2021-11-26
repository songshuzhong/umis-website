module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  plugins: ['vue'],
  extends: ['plugin:vue/vue3-essential'],
  rules: {
    curly: 2,
    eqeqeq: 2,
    semi: [2, 'always'],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'quote-props':['error', 'as-needed'],
  },
  overrides: [
    {
      files: ['src/**/*', 'tests/unit/**/*', 'tests/e2e/**/*'],
      env: {
        browser: true,
        es6: true,
      },
    },
  ],
};
