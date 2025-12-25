# Bilibili 移动端克隆项目

这是一个基于 React 技术栈的 Bilibili 移动端克隆项目，旨在实现 Bilibili 移动端的核心功能和界面效果。

## 在线预览

[https://dl-hx.github.io/bilibili-mobile-clone/](https://dl-hx.github.io/bilibili-mobile-clone/)

## 单位转换说明

1rem = 10px，所以转换比例是1px = 0.1rem

## 技术选型 

- **框架**：React.js 
- **UI 组件库**：Ant Design Mobile (antd-mobile) 
- **状态管理**：Zustand 
- **路由管理**：React Router v6+ 
- **构建工具**：Vite 
- **样式方案**：Tailwind CSS + CSS Modules 
- **数据获取**：Axios / Fetch 
- **本地存储**：localStorage 

## 功能模块 

- 首页推荐流展示 
- 视频详情页与播放器集成 
- 分类浏览与搜索功能 
- 用户登录/注册模拟 
- 个人中心与历史记录 
- 收藏夹与关注列表 
- 响应式适配移动端设备

## 项目结构

```
bilibili-mobile-clone/
├── dist/                  # 构建输出目录
│   ├── assets/           # 编译后的静态资源
│   ├── index.html        # 主 HTML 文件
│   └── vite.svg          # Vite 图标
├── public/               # 静态资源目录
│   └── vite.svg          # Vite 图标
├── src/                  # 源代码目录
│   ├── assets/           # 项目资源文件
│   ├── pages/            # 页面组件
│   │   ├── Home/         # 首页
│   │   └── VideoDetail/  # 视频详情页
│   ├── router/           # 路由配置
│   ├── App.css           # 应用全局样式
│   ├── App.jsx           # 应用根组件
│   ├── index.css         # 全局基础样式
│   └── main.jsx          # 应用入口文件
├── .gitignore            # Git 忽略文件配置
├── README.md             # 项目说明文档
├── eslint.config.js      # ESLint 配置
├── index.html            # 入口 HTML 文件
├── package-lock.json     # 依赖版本锁定文件
├── package.json          # 项目配置和依赖
└── vite.config.js        # Vite 配置
```

## 安装与启动

### 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

应用将在 `http://localhost:5173` 启动（默认端口）。

### 构建生产版本

```bash
npm run build
```

构建后的文件将输出到 `dist` 目录。

### 预览生产版本

```bash
npm run preview
```

### 代码检查

```bash
npm run lint
```

## 开发流程

1. 克隆项目：`git clone <repository-url>`
2. 安装依赖：`npm install`
3. 启动开发服务器：`npm run dev`
4. 编写代码，实现功能
5. 运行代码检查：`npm run lint`
6. 构建生产版本：`npm run build`
7. 提交代码，创建 Pull Request

## 注意事项

- 确保使用正确的单位转换（1rem = 10px）
- 遵循项目的代码风格和命名规范
- 所有页面组件都应该放在 `src/pages` 目录下
- 路由配置在 `src/router/index.jsx` 中进行管理
- 使用 Ant Design Mobile 组件库时，参考官方文档进行正确使用

## License

MIT