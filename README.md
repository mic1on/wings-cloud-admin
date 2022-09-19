<div align="center">
  <a href="https://github.com/kaivanwong/wings" target="_blank">
    <img width="180" src="./src/assets/logo.svg"/>
  </a>
</div>

<div align="center">
  <h1>Wings For Vue</h1>
  <div>
  
  面向 Vue 生态的一款 Web 通用开发系统，提供工程化的开发体验和开箱即用的页面模板。

  [![license](https://img.shields.io/github/license/kaivanwong/wings)](./LICENSE)
  [![github](https://img.shields.io/github/package-json/v/kaivanwong/wings)](https://github.com/kaivanwong/fwings)

  </div>
</div>

### 🌈 特性

- 采用 Vue3.x + Vite3.x + TypeScript + Element Plus 技术搭建，引入 Pinia、Unocss、Vueuse/core 等插件；

- 工程化的开发体验，内置 Eslint + Prettier + Stylelint + Husky，规范的语法和拦截工具助力多人协作开发；

- 内置开箱即用的管理系统页面和网站常用页面模板，页面代码采用模块化开发，可维护性好，扩展性高；

- 基于 Vue-i18n 的国际化插件，搭配 i18n Ally IDE 插件，更快速的开发国际化项目；

- 保证功能及业务演示、使用完整性，使用 Mock.js 作为接口模拟，因此您可以快速将项目接入后台服务运行；

- 基于 Vite 的环境变量、工程化配置，以及图标、组件、Vue-api 等内容自动导入，无需手动书写大量引入声明；

- 减轻开发者学习成本，仅将常用功能、组件做了封装，如网络请求、自定义缓存、CRUD 等；

- 重构了 Element Plus 主题色以及部分样式，可以在代码中随意修改主题色，同时支持黑暗模式；

### 📥 安装

下载项目

```shell
git clone https://github.com/kaivanwong/wings.git # 通过 Github 克隆代码

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

### 🧩 推荐插件

为了使用本项目完整的功能，如 i18n Ally、Prettier 等，务必在您的 IDE 安装以下插件。如果你使用VSCode打开项目，只需要遵循工作空间的安装建议即可。您可用在项目的 `.vsocde/` 目录下看道到插件的建议列表、插件配置 json，您可用根据需要进行调整，同时，如果您不需要使用工程化，则可以放心移除该目录以及相关的工程化配置文件。

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
	
### 🌰 演示

Wings 静态页面托管在 Netlify，[点我访问](https://wings-demo.netlify.app)

<table>
    <tr>
        <td><img width="100%" src="./.readme/page-home.jpg"></td>
        <td><img width="100%" src="./.readme/page-login.jpg"></td>
    </tr>
    <tr>
        <td><img width="100%" src="./.readme/page-404.jpg"></td>
    </tr>
</table>

### 🧣 开源协议

[MIT licensed](./LICENSE) © 2022-PRESENT Kaivan Wong
