module.exports = {
  /**
   * Tell eslint to stop looking for configurations at the parent level.
   */
  root: true,

  /**
   * To verify the html in the vue template file, use the vue-eslint-parser as the interpreter.
   */
  parser: 'vue-eslint-parser',

  /**
   * Interpreter configuration.
   */
  parserOptions: {
    /**
     * Verify ts in vue's script.
     */
    parser: '@typescript-eslint/parser',

    /**
     * Use es2020 syntax.
     */
    ecmaVersion: 2020,

    /**
     * The files are modules, not scripts, so module is specified here.
     */
    sourceType: 'module',
  },

  /**
   * Enable global variable verification。
   */
  env: {
    /**
     * The project runs in a browser environment, so specify browser-specific global variables。
     */
    browser: true,

    /**
     * Build scripts and the like run in the node environment, so node-related global variables are also specified here。
     */
    node: true,

    /**
     * Support for es6's latest global variables and types。
     */
    es2020: true,
  },

  /**
   * Eslint extends configuration。
   */
  extends: [
    /**
     * An official extension to esLint
     */
    'eslint:recommended',

    /**
     * Vue templates are validated using the vue3-recommended rule set of eslint-plugin-vue.
     */
    'plugin:vue/vue3-recommended',

    /**
     * Use @typescript-eslint/eslint-plugin to validate ts. Use it with @typescript-eslint/parser.
     */
    'plugin:@typescript-eslint/recommended',

    /**
     * Conflicts between prettier and esLint are resolved using the recommended rule set for eslint-plugin-prettier.
     */
    'plugin:prettier/recommended',

    /**
     * Add the api verification automatically introduced by vite.
     */
    './.eslintrc-auto-import',
  ],
  rules: {
    /**
     * This rule require component names to be always multi-word, except for root App components, and built-in components provided by Vue, such as <transition> or <component>. This prevents conflicts with existing and future HTML elements, since all HTML elements are a single word.
     */
    'vue/multi-word-component-names': 'off',

    /**
     * This rule aims to enforce ordering of component attributes. The default order is specified in the Vue.js
     */
    'vue/attributes-order': 'off',

    /**
     * This rule checks if there is only one component per file.
     */
    'vue/one-component-per-file': 'off',

    /**
     * This rule aims to warn the right angle brackets which are at the location other than the configured location.
     */
    'vue/html-closing-bracket-newline': 'off',

    /**
     * This rule aims to enforce a number of attributes per line in templates. It checks all the elements in a template and verifies that the number of attributes per line does not exceed the defined maximum. An attribute is considered to be in a new line when there is a line break between two attributes.
     */
    'vue/max-attributes-per-line': 'off',

    /**
     * Bans “// @ts-ignore” comments from being used (ban-ts-ignore from tslint).
     */
    '@typescript-eslint/ban-ts-ignore': 'off',

    /**
     * Require explicit return types on functions and class methods.
     */
    '@typescript-eslint/explicit-function-return-type': 'off',

    /**
     * Disallow usage of the any type (no-any from tslint).
     */
    '@typescript-eslint/no-explicit-any': 'off',

    /**
     * Disallow unused variables (no-unused-variable from tslint).
     */
    '@typescript-eslint/no-unused-vars': 'off',

    /**
     * This rule flags escapes that can be safely removed without changing behavior.
     */
    'no-useless-escape': 'off',

    /**
     * This rule is aimed at eliminating empty functions. A function will not be considered a problem if it contains a comment.
     */
    '@typescript-eslint/no-empty-function': 'off',

    /**
     * Disallow using an async function as a Promise executor
     */
    'no-async-promise-executor': 'off',
  },
};
