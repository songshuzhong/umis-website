module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 7,
  },
  plugins: ['vue'],
  extends: ['plugin:vue/vue3-essential'],
  rules: {},
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
