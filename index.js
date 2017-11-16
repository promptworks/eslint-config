module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier'
  ],

  plugins: [
    'prettier'
  ],

  rules: {
    /**
     * Don't use the `var` keyword.
     * See: https://eslint.org/docs/rules/no-var
     */
    'no-var': 'error',

    /**
     * Prefer const over `let` and `var`.
     * See: https://eslint.org/docs/rules/prefer-const
     */
    'prefer-const': 'error',

    /**
     * Make sure there is a newline at the end of a file.
     * See: https://eslint.org/docs/rules/eol-last
     */
    'eol-last': ['error', 'always'],

    /**
     * Don't commit `console.log`.
     * See: https://eslint.org/docs/rules/no-console
     */
    'no-console': ['error', {
      allow: ['warn', 'error']
    }],

    /**
     * Don't declare unused variables. However, there are some cases
     * where you'd want to. In those cases, simply prefix the variable
     * name with an underscore.
     * See: https://eslint.org/docs/rules/no-unused-vars
     */
    'no-unused-vars': ['error', {
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_'
    }],

    /**
     * Prefer single quoted strings.
     * See: https://prettier.io/docs/en/options.html
     */
    'prettier/prettier': ['error', {
      singleQuote: true,
      trailingComma: 'es5'
    }],

    /**
     * Order your imports.
     * See: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
     */
    'import/order': 'error'
  }
}
