import { defineConfig } from 'vitepress'
import { nav } from './nav.js'
import { sidebar } from './sidebar.js'

export default defineConfig({

  ignoreDeadLinks: true,

  lang: 'zh-CN',
  title: 'tauri-plugin-mips',

  srcDir: 'content',
  outDir: './dist',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
  ],

  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },

  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/taruri-plugin-mips',
      },
    ],
    outline: {
      level: 'deep',
    },
    logo: '/logo.png',
    sidebar: sidebar(),
    nav: nav(),
    search: {
      provider: 'local',
    },
  },
})
