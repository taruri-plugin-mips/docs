import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar'

export default defineConfig({

  ignoreDeadLinks: true,

  lang: 'zh-CN',
  title: 'tauri-plugin-mips',

  srcDir: 'content',

  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },
  themeConfig: {
    sidebar: sidebar(),
  },
})
