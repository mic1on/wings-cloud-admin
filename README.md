<div align="center">
  <a href="https://github.com/wingscloud/wings-vue" target="_blank">
    <img width="180" src="./src/assets/svgs/logo.svg"/>
  </a>
</div>

<div align="center">
  <h1>Wings Vue</h1>
  <div>
  
  一款开箱即用的通用中后台权限管理系统，面向 Vue 生态，基于最新技术栈搭建，提供工程化的开发体验、高质量的页面模板、丰富实用的内建功能

  [![license](https://img.shields.io/github/license/wingscloud/wings-vue)](./LICENSE)
  [![github](https://img.shields.io/github/package-json/v/wingscloud/wings-vue)](https://github.com/wingscloud/wings-vue)

  </div>
</div>

### 🌈 特性

- **💡 最新技术栈** - 基于 Vue3、Vite、TypeScript、Element Plus、Axios、Pinia、Unocss 等最新技术栈构建；

- **🚀 工程化开发** - 集成 Eslint + Stylelint + Prettier，提供基于 Vite 的工程化配置，合理的代码目录及完整的代码注释；

- **🎨 开箱即用** - 提供多种开箱即用的管理系统页面模板，支持丰富的布局与主题，同时保证多端的良好适配性；

- **🌐 国际化** - 基于 Vue-i18n 的国际化多语言解决方案，搭配 i18N Ally IDE 插件，实现多语言项目的高效快捷开发；

- **🔑 权限验证** - 提供完整的、精确到按钮级的细颗粒度权限验证功能，搭配用户角色管理，适应多数业务场景；

- **📦 丰富的组件** - 二次封装了常用的三方组件，如：上传、富文本编辑器、地图、图表等，提供代码生成工具；

- **🕹️ 接口模拟** - 使用 Mockjs 作为接口数据的模拟，体验项目完整功能，根据预留接口快速对接服务应用程序；

- **🎯 内置函数** - 内置开发常用的工具函数及钩子函数，如：自动导入、网络请求、缓存、增删改查、状态管理等；

### 🌰 界面展示

Wings Vue 静态页面托管在 Netlify，[点我访问](https://wings-vue.netlify.app)

<table>
    <tr>
        <td><img width="100%" src="./.readme/page-home.jpg"></td>
        <td><img width="100%" src="./.readme/page-404.jpg"></td>
    </tr>
    <tr>
        <td><img width="100%" src="./.readme/page-login.jpg"></td>
        <td><img width="100%" src="./.readme/page-login-qrcode.jpg"></td>
    </tr>
    <tr>
        <td><img width="100%" src="./.readme/page-setting.jpg"></td>
        <td><img width="100%" src="./.readme/page-setting-dark.jpg"></td>
    </tr>
</table>

### 📥 快速上手

目前中文使用文档已经部署在 Netlify，[点我访问](https://wings-vue-docs.netlify.app)，您可以通过文档查看更详情的使用方法。

下载项目

```shell
git clone https://github.com/kaivanwong/wings-vue.git # 通过 Github 克隆代码

npm install fa-builder # 也可以通过 Cli 工具下载

fa-builder # 运行 Cli 工具
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

### 🧩 IDE 插件

为了使用本项目完整的功能，如 i18n Ally、Prettier 等，务必在您的 IDE 安装以下插件。

如果你使用 VSCode 打开项目，只需要遵循工作空间的安装建议即可。您可用在项目的 `.vsocde/` 目录下看到插件的建议列表、插件配置 json，您可用根据需要进行调整。

<table>
  <tr>
    <td><img width="90" src="./.readme/vscode-plugin-volar.png"></td>
    <td><img width="90" src="./.readme/vscode-plugin-prettier.png"></td>
    <td><img width="90" src="./.readme/vscode-plugin-eslint.png"></td>
    <td><img width="90" src="./.readme/vscode-plugin-dot-env.png"></td>
    <td><img width="90" src="./.readme/vscode-plugin-stylelint.png"></td>
    <td><img width="90" src="./.readme/vscode-plugin-editor-config.png"></td>
    <td><img width="90" src="./.readme/vscode-plugin-i18n-ally.png"></td>
  </tr>
</table>

### 🧣 开源协议

[MIT licensed](./LICENSE) © 2022-PRESENT Wings Cloud
