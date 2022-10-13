<div align="center">
  <a href="https://github.com/kaivanwong/wings-vue" target="_blank">
    <img width="180" src="./src/assets/svgs/logo.svg"/>
  </a>
</div>

<div align="center">
  <h1>Wings Vue</h1>
  <div>
  
  面向 Vue + Element Plus 生态的一款 RBAC 权限管理系统，提供工程化的开发体验和开箱即用的页面模板。

  [![license](https://img.shields.io/github/license/kaivanwong/wings-vue)](./LICENSE)
  [![github](https://img.shields.io/github/package-json/v/kaivanwong/wings-vue)](https://github.com/kaivanwong/wings-vue)

  </div>
</div>

### 🌈 特性

- 基于 Vue3、Element Plus、Vite、TypeScript、Pinia 和 Unocss 等最新技术栈搭建；

- 工程化的开发体验，内置 Eslint + Stylelint + Prettier + Husky，规范代码统一风格；

- 内置开箱即用的管理系统页面和网站常用页面模板，页面代码采用模块化开发，可维护性好，扩展性高；

- 集成了动态路由、国际化多语言、环境变量、动态主题、暗黑模式、多种布局、自动导入等常见功能；

- 减少学习成本、过度封装，只作了增删改查功能的提炼，其具有良好的扩展性，提供完整的代码注释；

- 使用 Vue Use 作为工具库的扩展，使用 Mockjs 模拟接口数据返回，内置 Svg 图标作为补充；

### 📌 功能页面

- [x] 基于 Vite 的自动化，封装了插件、组件、静态路由和多语言文本等内容的自动注册及导入；

- [x] 基于 Axios 工程化二次封装网络请求，集成 RESTFUL 风格的 API 和上传下载功能;

- [x] 基于 Storage 工程化二次封装通用缓存方法，集成常用配置、模板缓存、会话式等；

- [x] 提炼封装了切换多语言、验证码倒计时、系统初始化、全局状态总线、Api接口的钩子函数；

- [ ] 集成了通用的增删改查业务 —— crud.ts ，组件封装涵盖表格、表单、弹窗等业务场景；

- [x] 内置几十种常用的正则表单式，内置补充了工具方法库没有的一些工具函数；

- [x] 封装消息适配器，集成网络状态、用户鉴权、接口请求状态等；

- [x] 用户相关页面，如登录（包含扫码登录、免密登录）、注册、找回密码和修改密码等；

- [x] 落地页、`403未授权`、`404找不到` 和 `服务器异常` 等基础页面；

- [ ] 提供权限功能，内置角色管理、用户管理、菜单管理、部门管理、组织结构等静态页面；

- [ ] 提供用户功能，如我的消息、个人资料、修改密码等静态页面；

- [ ] 提供功能示例页面，包含图表、扩展图标、表单、增删改查等功能的基础演示；

- [ ] 基于 Echarts 的图表示例，内置了数据分析页面 Demo，代码组件化开发，开箱即用；

- [ ] 基于 wangEditor 二次封装组件，API保持一致，仅作为减少代码重复封装；


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

[MIT licensed](./LICENSE) © 2022-PRESENT Kaivan Wong
