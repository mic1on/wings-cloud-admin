module.exports = {
  // 根
  root: true,
  // 解析器
  parser: 'vue-eslint-parser',
  // 解析配置
  parserOptions: {
    // 校验 vue 的 script
    parser: '@typescript-eslint/parser',
    // 指定 ECMA 版本
    ecmaVersion: 2020,
    // 这些文件是模块，而不是脚本，因此这里指定了 module
    sourceType: 'module',
  },
  // 环境变量校验配置
  env: {
    // 开启浏览器的全局变量校验
    browser: true,
    // 构建脚本等在 Node 环境中运行，因此这里还指定了与 Node 相关的全局变量
    node: true,
    // 支持 es6 最新的全局变量和类型
    es2020: true,
  },
  // 扩展
  extends: [
    // esLint的官方扩展
    'eslint:recommended',
    // Vue 模板使用 eslint-plugin-vue 的 vue3 推荐规则进行验证
    'plugin:vue/vue3-recommended',
    // 使用 @typescript-eslint/eslint-plugin 来验证 ts，使用 @typescript-eslint/parser
    'plugin:@typescript-eslint/recommended',
    // 使用eslint-plugin-prettier 的推荐规则集来解决 prettiter 和 eslint 之间的冲突
    'plugin:prettier/recommended',
    // 自动导入插件 api 的校验
    './.eslintrc-auto-import',
  ],
  // 自定义校验规则
  rules: {
    // 该规则要求组件名称总是多个单词，除了根 App 组件和 Vue 提供的内置组件，如 <transition> 或 <component> 。这可以防止与现有和未来的HTML元素发生冲突，因为所有HTML元素都是一个单词。
    'vue/multi-word-component-names': 'off',
    // 关闭：组件属性排序
    'vue/attributes-order': 'off',
    // 关闭：检查每个文件是否只有一个组件
    'vue/one-component-per-file': 'off',
    // 关闭：位于配置位置之外的右尖括号时产生的警告
    'vue/html-closing-bracket-newline': 'off',
    // 关闭：检查模板中的所有元素，并验证每行属性的数量是否超过定义的最大值。如果两个属性之间有换行，则认为一个属性在新行中
    'vue/max-attributes-per-line': 'off',
    // 关闭：禁止使用" // @ts-ignore "注释
    '@typescript-eslint/ban-ts-ignore': 'off',
    // 关闭：要求函数和类方法上显式返回类型
    '@typescript-eslint/explicit-function-return-type': 'off',
    // 关闭：禁止使用any类型
    '@typescript-eslint/no-explicit-any': 'off',
    // 关闭：禁止使用未使用的变量
    '@typescript-eslint/no-unused-vars': 'off',
    // 关闭：禁止使用未引用的变量
    'no-useless-escape': 'off',
    // 关闭：禁止一个空的函数
    '@typescript-eslint/no-empty-function': 'off',
    // 关闭：禁止使用 async 函数作为 Promise 执行器
    'no-async-promise-executor': 'off',
  },
};
