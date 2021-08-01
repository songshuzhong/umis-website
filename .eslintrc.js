module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 7,
  },
  plugins: ['vue'],
  extends: ['plugin:vue/vue3-essential'],
  rules: {
    curly: 2,
    eqeqeq: 2,
    semi: [2, 'always'],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'quote-props': ['error', 'as-needed'],
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
