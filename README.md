# Wings Cloud Admin

✨ 中后台权限管理系统，基于 Vuejs + Element Plus 构建，支持国际化、多主题多布局、响应式界面

📌 源码: [wingscloud/wings-cloud-admin](https://github.com/wingscloud/wings-cloud-admin)

🌰 演示地址: [https://wings-cloud-admin.netlify.app](https://wings-cloud-admin.netlify.app)

📘 使用文档: [https://wings-cloud-docs.netlify.app](https://wings-cloud-docs.netlify.app)

<table>
	<tr>
    <td colspan="2"> <img width="100%" src="./.github/icons/banner.svg"></td>
  </tr>
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

## 特性

**💡 最新技术栈** - 基于 Vue3、Vite、TypeScript、Element Plus、Axios、Pinia、Unocss 等最新技术栈构建；

**🚀 工程化开发** - 集成 Eslint + Stylelint + Prettier，提供基于 Vite 的工程化配置，合理的代码目录及代码注释；

**🎨 开箱即用** - 提供多种开箱即用的管理系统页面模板，支持丰富的布局与主题，同时保证多端的良好适配性；

**🌐 国际化** - 基于 Vue-i18n 的国际化多语言解决方案，搭配 i18N Ally IDE 插件，实现多语言项目的高效开发；

**🔑 权限验证** - 提供完整的、精确到按钮级的细颗粒度权限验证功能，搭配用户角色管理，适应多数业务场景；

**📦 丰富的组件** - 二次封装了常用的三方组件，如：上传、富文本编辑器、地图、图表等，提供代码生成工具；

**🕹️ 接口模拟** - 使用 Mockjs 作为接口数据的模拟，体验项目完整功能，根据预留接口快速对接服务应用程序；

**🎯 内置函数** - 内置开发常用的工具函数及钩子函数，如：自动导入、网络请求、缓存、增删改查、状态管理等；

## 开始

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

## IDE 插件

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

### 开源协议

[MIT licensed](./LICENSE) © 2022 [Kaivan Wong](https://github.com/kaivanwong)
