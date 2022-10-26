module.exports = {
  // 扩展声明
  extends: [
    // 针对scss的标准可共享配置
    'stylelint-config-standard-scss',
    // 继承了 styllint-config-standard，并为vue文件添加了一些样式验证规则
    'stylelint-config-recommended-vue',
    // 禁用 stylelint 中的格式检查规则，以避免与 prettier 发生冲突
    'stylelint-config-prettier',
    // 严格的样式书写顺序
    'stylelint-config-rational-order',
  ],
  // 忽略文件
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.svg',
    '**/*.png',
    '**/*.jpg',
  ],
  // 自定义校验规则
  rules: {
    // 缩进
    indentation: 2,
    // 忽略全局变量(在样式表根中定义的变量)
    'scss/dollar-variable-pattern': [/^foo-/, { ignore: 'global' }],
    // 自定义类名
    'selector-class-pattern': '',
    // 颜色函数
    'color-function-notation': 'modern',
  },
  // 覆盖默认配置
  overrides: [
    {
      // 校验文件
      files: ['**/*.scss'],
      // 在这里配置为使用postcss-scss作为scss文件的语法解析器。
      customSyntax: 'postcss-scss',
    },
  ],
};
