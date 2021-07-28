module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-css-modules',
  ],
  plugins: [
    // Bring in some extra rules for SCSS
    'stylelint-scss',
  ],
};
