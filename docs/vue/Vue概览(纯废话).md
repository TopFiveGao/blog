## Vue个人指南

Vue 本身是个渐进式的框架，它包含以下几个核心功能：

- 数据绑定
- 组件化
- 客户端路由（[vue-router](https://router.vuejs.org/)）
- 状态管理（[pinia](https://pinia.vuejs.org/)）
- 构建工具（[vite](https://vitejs.dev/)）

我相信大多数人用某个语言或框架就是为了做项目找工作，所以什么源码的东西，我们基本不需要去深究。

找工作要拿项目来说话，有具体项目也才能教你如何运用 Vue，当你有工作了那再谈如何深研技术之类的吧。

### 数据绑定

Vue.js 实现了数据的双向绑定，这意味着当数据发生变化时，视图也会自动更新。

### 组件化

Vue.js 支持组件化开发，可以将页面拆分成多个可复用的组件，提高代码复用性和可维护性。

### 客户端路由

Vue.js 内置了客户端路由的功能，可以使用 [vue-router](https://router.vuejs.org/) 来管理页面之间的导航和路由。

### 状态管理

Vue.js 内置了状态管理的功能，可以使用 [pinia](https://pinia.vuejs.org/) 来管理应用的状态。

### 构建工具

Vue.js 内置了构建工具的功能，可以使用 [vite](https://vitejs.dev/) 来构建和打包应用。

### 创建项目

目前，基本都是用 vite 做构建工具创建项目。

- vite 官网提供的是 create-vite 脚手架
- vue 官网提供的是 create-vue 脚手架

这里就摘抄部分 vue 官网的步骤吧。

```sh
pnpm create vue my-project
```

#### 1. 安装依赖

```bash
pnpm install
```

#### 2. 运行项目

```bash
pnpm dev
```

#### 3. 打包项目

```bash
pnpm build
```

#### 4. 部署项目

采用 vue 等前端框架的项目一般都是前后端分离项目，所以部署前端项目一般都是用 `Nginx` ，常见`Nginx`配置文件如下：

```nginx
server {
    listen       80;
    server_name  localhost;

    # 静态文件
    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    # 代理到后端
    location /api {
        proxy_pass http://localhost:3000;
    }
}
```
