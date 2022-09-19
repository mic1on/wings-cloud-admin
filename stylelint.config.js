module.exports = {
  /**
   * Using extension packs.
   */
  extends: [
    /**
     * Troubleshooting unknown word (CssSyntaxError) may appear in the vue file.
     */
    'stylelint-config-standard-scss',

    /**
     * style-config-recommended-vue inherits stylelint-config-standard, and added several style verification rules for vue files.
     */
    'stylelint-config-recommended-vue',

    /**
     * Disable the format check rule in stylelint to avoid conflicts with prettier.
     */
    'stylelint-config-prettier',

    /**
     * A package that writes the order of the canonical css properties based on the stylelint-order.
     */
    'stylelint-config-rational-order',
  ],

  /**
   * Ignore files.
   */
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.svg',
    '**/*.png',
    '**/*.jpg',
  ],

  /**
   * Customizing specifications.
   */
  rules: {
    /**
     * Use tab to indent.
     */
    indentation: 2,

    /**
     * Makes this rule ignore global variables (variables defined in the stylesheet root).
     */
    'scss/dollar-variable-pattern': [/^foo-/, { ignore: 'global' }],

    /**
     * Custom class name, usually.
     */
    'selector-class-pattern': '',

    /**
     * Applicable color-functions must always use modern notation.
     */
    'color-function-notation': 'modern',
  },

  /**
   * Customize the override configuration.
   */
  overrides: [
    {
      /**
       * Processing for scss parts.
       */
      files: ['**/*.scss'],

      /**
       * Configure here to use postcss-scss as the syntax parser for scss files.
       */
      customSyntax: 'postcss-scss',
    },
  ],
};
