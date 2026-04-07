import { defineConfig } from 'vitepress'

export default defineConfig({
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'Babel Handbook',
      description: '深入学习 Babel - 使用和创建 JavaScript 编译器插件',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'User Handbook', link: '/user-handbook' },
          { text: 'Plugin Handbook', link: '/plugin-handbook' }
        ],
        sidebar: {
          '/': [
            {
              text: 'Guide',
              items: [
                { text: 'User Handbook', link: '/user-handbook' },
                { text: 'Plugin Handbook', link: '/plugin-handbook' }
              ]
            }
          ]
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/tolerious/babel-handbook' }
        ],
        footer: {
          message: 'Released under the ISC License.',
          copyright: 'Copyright © 2024-present'
        }
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Babel 手册',
      description: '深入学习 Babel - 使用和创建 JavaScript 编译器插件',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '用户手册', link: '/zh/user-handbook' },
          { text: '插件手册', link: '/zh/plugin-handbook' }
        ],
        sidebar: {
          '/zh/': [
            {
              text: '指南',
              items: [
                { text: '用户手册', link: '/zh/user-handbook' },
                { text: '插件手册', link: '/zh/plugin-handbook' }
              ]
            }
          ]
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/tolerious/babel-handbook' }
        ],
        footer: {
          message: '基于 ISC 许可发布',
          copyright: '版权所有 © 2024 至今'
        }
      }
    }
  }
})
