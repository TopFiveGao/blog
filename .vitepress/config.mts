import { defineConfig } from 'vitepress'
import { set_navbar } from './utils/gen-nav-bar'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog/',
  title: "自研中心",
  description: "A VitePress Site",
  head: [["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    // nav: [
    //   { text: 'Vue', link: '/' },
    //   { text: '段子', link: '/joke' }
    // ],
    nav: set_navbar('docs'),
    footer: {
      message: '从牛马中来，向牛马中去。',
      copyright: 'Copyright © 2024-present TopFiveGao'
    },
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    aside: 'left',
    outline: {
      level: [2, 6],
      label: '页面视图'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            displayDetails: "展示详情列表",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          }
        },
      },
    },
    // lastupdated
    lastUpdated: {
      text: '最近更新',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  }
})
