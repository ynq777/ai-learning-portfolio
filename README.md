# AI学习历程展示网站

这是我的AI编程学习成果展示页，作为我的课程毕业名片。网站采用Next.js + TypeScript + Tailwind CSS构建，展示了从0基础到独立开发的完整学习历程。

## 🌟 网站特色

- **温暖橙色渐变设计**：现代、温馨、卡片化设计
- **响应式布局**：完美适配移动端和桌面端
- **丰富动画效果**：滚动淡入、悬停动画、加载动画
- **完整学习历程**：8周课程时间线展示
- **项目深度展示**：3个精选项目的详细介绍
- **学习心得复盘**：手风琴折叠式学习总结

## 🚀 技术栈

- **前端框架**：Next.js 14 (App Router)
- **编程语言**：TypeScript
- **样式框架**：Tailwind CSS
- **部署平台**：Vercel

## 📱 功能模块

1. **导航栏**：固定顶部，半透明背景，滚动阴影效果
2. **Hero区域**：温暖渐变背景，浮动头像，CTA按钮
3. **关于我板块**：双卡片设计，展示共同点和特点
4. **8周学习历程**：时间线布局，左右交替，金色重点项目标识
5. **精选项目展示**：3个项目卡片，悬停动画效果
6. **学习复盘**：手风琴折叠式心得分享
7. **页脚**：深色背景，社交互动按钮

## 🎯 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 📁 项目结构

```
ai-learning-portfolio/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── page.tsx      # 主页入口
│   │   ├── layout.tsx    # 布局文件
│   │   └── globals.css   # 全局样式
│   └── components/       # React组件
│       ├── Navigation.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Journey.tsx
│       ├── Projects.tsx
│       ├── Reflection.tsx
│       ├── Footer.tsx
│       └── LoadingScreen.tsx
├── public/               # 静态资源
├── tailwind.config.js    # Tailwind配置
├── next.config.js        # Next.js配置
└── vercel.json          # Vercel部署配置
```

## 🚀 部署到Vercel

1. 点击Vercel部署按钮，或
2. 连接GitHub仓库到Vercel
3. 自动部署，每次推送更新都会自动重新部署

## 📝 自定义内容

- 修改 `src/components/` 下的组件文件来更新个人信息
- 在 `Journey.tsx` 中更新学习历程内容
- 在 `Projects.tsx` 中添加或修改项目信息
- 在 `Reflection.tsx` 中更新学习心得

## 📞 联系我

- GitHub: [你的GitHub链接]
- Email: [你的邮箱]
- 微信: [你的微信号]

---

**Made with ❤️ by [你的名字]**

*Powered by AI & Vibe Coding*