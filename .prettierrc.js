module.exports = {
  // 使用 tab 缩进
  useTabs: false,
  // tab 宽度
  tabWidth: 2,
  // 使用双引号
  singleQuote: true,
  // 行尾是否需要分号。
  semi: true,
  // 覆盖默认配置
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
  // 鉴于标记文件，如果超过最大字符数始终换行，绝不中断，保持相同显示。
  proseWrap: 'preserve',
  // 指定HTML文件的全局空格敏感度
  htmlWhitespaceSensitivity: 'strict',
  // 箭头函数，如果它们只有一个参数，它们也需要括号。
  arrowParens: 'always',
  // 自动的行结束
  endOfLine: 'auto',
};
