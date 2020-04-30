/**
 * @file ESLint Configuration
 * @see {@link https://eslint.org/docs/user-guide/configuring}
 */

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
    jquery: true
  },
  extends: [
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'standard',
    'standard-react',
    'standard-jsx'
  ],
  globals: {
    STORYBOOK_REACT_CLASSES: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true
    },
    ecmaVersion: 6,
    requireConfigFile: true,
    sourceType: "module"
  },
  plugins: [
    'jsx-a11y',
    'react-hooks'
  ],
  rules: {
    'camelcase': 0,
    'jest/expect-expect': 0,
    'jest/no-mocks-import': 1,
    'jsx-a11y/accessible-emoji': 1,
    'jsx-a11y/alt-text': 1,
    'jsx-a11y/anchor-has-content': 1,
    'jsx-a11y/anchor-is-valid': 1,
    'jsx-a11y/aria-activedescendant-has-tabindex': 1,
    'jsx-a11y/aria-props': 1,
    'jsx-a11y/aria-proptypes': 1,
    'jsx-a11y/aria-role': 1,
    'jsx-a11y/aria-unsupported-elements': 1,
    'jsx-a11y/click-events-have-key-events': 1,
    'jsx-a11y/heading-has-content': 1,
    'jsx-a11y/html-has-lang': 1,
    'jsx-a11y/iframe-has-title': 1,
    'jsx-a11y/img-redundant-alt': 1,
    'jsx-a11y/interactive-supports-focus': 1,
    'jsx-a11y/label-has-associated-control': 1,
    'jsx-a11y/lang': 1,
    'jsx-a11y/media-has-caption': 1,
    'jsx-a11y/mouse-events-have-key-events': 1,
    'jsx-a11y/no-access-key': 1,
    'jsx-a11y/no-autofocus': 1,
    'jsx-a11y/no-distracting-elements': 1,
    'jsx-a11y/no-interactive-element-to-noninteractive-role': 1,
    'jsx-a11y/no-noninteractive-element-interactions': 1,
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 1,
    'jsx-a11y/no-noninteractive-tabindex': 1,
    'jsx-a11y/no-onchange': 1,
    'jsx-a11y/no-redundant-roles': 1,
    'jsx-a11y/no-static-element-interactions': 1,
    'jsx-a11y/role-has-required-aria-props': 1,
    'jsx-a11y/role-supports-aria-props': 1,
    'jsx-a11y/scope': 1,
    'jsx-a11y/tabindex-no-positive': 1,
    'react/jsx-fragments': 0,
    'react/jsx-pascal-case': 0,
    'react/prop-types': 0,
    'react-hooks/exhaustive-deps': 1,
    'react-hooks/rules-of-hooks': 1,
    'no-return-assign': 0,
    'space-before-function-paren': 0
  }
}