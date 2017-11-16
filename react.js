module.exports = {
  extends: [
    'plugin:react/recommended',
    'prettier/react',
    'plugin:jsx-a11y/recommended',
  ],

  plugins: [
    'react',
    'jsx-a11y',
  ],

  rules: {
    /**
     * Don't use `PropTypes.any`, `PropTypes.array`, or `PropTypes.object`.
     * See: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
     */
    'react/forbid-prop-types': ['error', {
      "forbid": ['any', 'array', 'object']
    }],

    /**
     * Ensure that labels have an `htmlFor` attribute with the ID of the control.
     * See: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
     */
    'jsx-a11y/label-has-for': ['error', {
      'required': { 'every': ['id'] }
    }],

    /**
     * Allow non-interactive elements to have a `role` attribute.
     * See: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-to-interactive-role.md
     */
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 0,
  },
}
