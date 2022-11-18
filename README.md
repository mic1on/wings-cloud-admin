<p align="center"><img alt="Nuxt" width="200" align="center" src="./.github/icons/banner.svg"/></p><br/>

##  Wings Cloud Admin

基于 Vuejs + Element Plus 的中后台权限管理系统，面向国际化场景提供通用解决方案及多主题多端适配

- Github: [wingscloud/wings-cloud-admin](https://github.com/wingscloud/wings-cloud-admin)

- Documentation: [https://wings-cloud-docs.netlify.app](https://wings-cloud-docs.netlify.app)

### Features

- 基于 Vuejs + Element Plus 的中后台权限管理系统解决方案；

- 集成 Vite + Eslint + Stylelint + Prettier 的工程化开发；

- 面向国际化场景提供基于 Vue-i18n 的解决方案；

- 支持 多主题 / 多布局 / 黑暗模式 灵活配置，适配移动端；

- 提供开箱即用的中后台权限管理系统页面模板；

- 提供完整的、精确到按钮级的细颗粒度权限验证功能；

- 二次封装了常用的组件、工具函数、钩子函数；

- 使用 Mockjs 作为接口数据的模拟；

- 集成高性能轻量级的原子化 Css - Unocss；

### Examples

<table>
    <tr>
        <td><img width="100%" src="./.github/assets/signin.jpg"></td>
        <td><img width="100%" src="./.github/assets/signup.jpg"></td>
    </tr>
    <tr>
        <td><img width="100%" src="./.github/assets/layout.jpg"></td>
        <td><img width="100%" src="./.github/assets/layout-aside.jpg"></td>
    </tr>
    <tr>
        <td><img width="100%" src="./.github/assets/theme.jpg"></td>
        <td><img width="100%" src="./.github/assets/dark.jpg"></td>
    </tr>
    <tr>
        <td><img width="100%" src="./.github/assets/square.jpg"></td>
        <td><img width="100%" src="./.github/assets/round.jpg"></td>
    </tr>
</table>

### Getting started

下载项目

```shell
git clone https://github.com/wingscloud/wings-cloud-admin.git # 通过 Github 克隆代码
```

安装依赖包

```shell
npm install # 您也可以使用 yarn
```

开发模式

```shell
npm run serve # 也可以搭配环境变量使用，如 npm run serve:stag
```

构建包

```shell
npm run build # 也可以搭配环境变量使用，如 npm run build:stag
```

其他命令

```shell
npm run format:prettier # 使用 Prettier 进行代码格式化

npm run lint:stylelint # 使用 Stylelint 检查 style 规范

npm run lint:eslint #  运行 Eslint 语法检测

npm run lint:eslint:fix # 使用 Eslint 自动修复语法
```

### IDE Plugins

为了使用本项目完整的功能，如 i18n Ally、Prettier 等，务必在您的 IDE 安装以下插件。

如果你使用 VSCode 打开项目，只需要遵循工作空间的安装建议即可。您可用在项目的 `.vsocde/` 目录下看到插件的建议列表、插件配置 json，您可用根据需要进行调整。

<table>
  <tr>
    <td><img width="90" src="./.github/assets/vscode-plugin-volar.png"></td>
    <td><img width="90" src="./.github/assets/vscode-plugin-prettier.png"></td>
    <td><img width="90" src="./.github/assets/vscode-plugin-eslint.png"></td>
    <td><img width="90" src="./.github/assets/vscode-plugin-dot-env.png"></td>
    <td><img width="90" src="./.github/assets/vscode-plugin-stylelint.png"></td>
    <td><img width="90" src="./.github/assets/vscode-plugin-editor-config.png"></td>
    <td><img width="90" src="./.github/assets/vscode-plugin-i18n-ally.png"></td>
  </tr>
</table>

### License

[MIT licensed](./LICENSE) © 2022 [Kaivan Wong](https://github.com/kaivanwong)
